import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module.js';

async function bootstrap() {
	const app = await NestFactory.createApplicationContext(AppModule);
	await app.init();
}

void bootstrap();
