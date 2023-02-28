import { NecordModule } from 'necord';
import { Module } from '@nestjs/common';
import { AppCommands } from './app.commands';
import { IntentsBitField } from 'discord.js';

@Module({
	imports: [
		NecordModule.forRoot({
			token: process.env.DISCORD_TOKEN,
			development: [process.env.DEV_GUILD],
			intents: [
				IntentsBitField.Flags.Guilds,
				IntentsBitField.Flags.GuildMessages,
				IntentsBitField.Flags.DirectMessages
			]
		})
	],
	providers: [AppCommands]
})
export class AppModule {}
