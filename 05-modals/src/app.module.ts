import { NecordModule } from 'necord';
import { Module } from '@nestjs/common';
import { IntentsBitField } from 'discord.js';
import { AppCommands } from './app.commands';

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
