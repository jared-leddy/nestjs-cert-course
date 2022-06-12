import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { COFFEE_BRANDS } from './coffes.constants';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

// classes just used for example below
class ConfigService {}
class DevConfigService {}
class ProdConfigService {}

@Module({
  controllers: [CoffeesController],
  exports: [CoffeesService],
  imports: [
    TypeOrmModule.forFeature([Coffee, Event, Flavor]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS,
      useFactory: () => ['buddy brew', 'nescafe'],
    },
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevConfigService
          : ProdConfigService,
    },
  ],
})
export class CoffeesModule {}
