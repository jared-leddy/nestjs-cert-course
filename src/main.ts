import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true, // Throw errors when whitelisted properties are found
      transform: false, // Enabling auto transform feature of ValidationPipe
      whitelist: true, // Enabling "whitelist" feature of ValidationPipe
    }),
  );
  await app.listen(3000);
}
bootstrap();
