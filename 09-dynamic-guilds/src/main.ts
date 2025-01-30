import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async bootstrap() {
   const app = NestFactory.createApplicationContext(AppModule);
   await app.init();
}

bootstrap();
