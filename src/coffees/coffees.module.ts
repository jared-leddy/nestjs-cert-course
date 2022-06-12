import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { COFFEE_BRANDS } from './coffes.constants';

class ConfigService {}
class DevConfigService {}
class ProdConfigService {}

@Module({
  controllers: [CoffeesController],
  exports: [CoffeesService],
  imports: [TypeOrmModule.forFeature([Coffee, Event, Flavor])], // 👈 Adding Coffee Entity here to TypeOrmModule.forFeature
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS, // 👈
      useValue: ['buddy brew', 'nescafe'], // array of coffee brands,
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
