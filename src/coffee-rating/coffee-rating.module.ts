import { Module } from '@nestjs/common';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { CoffeeRatingService } from './coffee-rating.service';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [
    CoffeesModule,
    // DatabaseModule.register({
    //   type: 'postgres',
    //   host: 'localhost',
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    // }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
