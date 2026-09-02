import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module.js';

void NestFactory.createApplicationContext(AppModule);
