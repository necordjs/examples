import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';

import { CommandService } from './command.service.js';
import { DynamicCommand } from './dynamic.command.js';
import { SimpleCommand } from './simple.command.js';
import { AppService } from './app.service.js';

@Module({
	imports: [
		NecordModule.forRoot({
			intents: ['Guilds'],
			token: process.env.DISCORD_TOKEN!,
			skipRegistration: true
		})
	],
	providers: [CommandService, AppService, DynamicCommand, SimpleCommand]
})
export class AppModule {}
