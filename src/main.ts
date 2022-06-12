import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true, // Throw errors when whitelisted properties are found
      transform: false, // Enabling auto transform feature of ValidationPipe
      whitelist: true, // Enabling "whitelist" feature of ValidationPipe
      transformOptions: {
        enableImplicitConversion: true, // this removes the requirement to use @Type decorators
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
