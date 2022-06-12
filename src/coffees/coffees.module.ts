import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
  controllers: [CoffeesController],
  exports: [CoffeesService],
  imports: [TypeOrmModule.forFeature([Coffee, Event, Flavor])], // 👈 Adding Coffee Entity here to TypeOrmModule.forFeature
  providers: [CoffeesService],
})
export class CoffeesModule {}
