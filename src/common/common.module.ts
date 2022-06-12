import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { APIKeyGuard } from './guards/api-key.guard';
import { LoggingMiddleware } from './middleware/logging.middleware';

@Module({
  providers: [APIKeyGuard],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // all routes
    consumer.apply(LoggingMiddleware).forRoutes('*');
    // all coffees routes, only get requests
    // consumer
    //   .apply(LoggingMiddleware)
    //   .forRoutes({ path: 'coffees', method: RequestMethod.GET });
    // exclude coffees, global apply for everything else
    // consumer.apply(LoggingMiddleware).exclude('coffees').forRoutes('*');
  }
}
