import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';
import { CommandService } from './command.service';
import { DynamicCommand } from './dynamic.command';
import { AppService } from './app.service';
import { SimpleCommand } from './simple.command';

@Module({
	imports: [
		NecordModule.forRoot({
			intents: ['Guilds'],
			token: process.env.DISCORD_TOKEN,
			skipRegistration: true
		})
	],
	providers: [CommandService, AppService, DynamicCommand, SimpleCommand]
})
export class AppModule {}
