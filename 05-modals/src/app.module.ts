import { IntentsBitField } from 'discord.js';
import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';

import { AppComponents } from './app.components.js';
import { AppCommands } from './app.commands.js';

@Module({
	imports: [
		NecordModule.forRoot({
			token: process.env.DISCORD_TOKEN!,
			development: [process.env.DEV_GUILD!],
			intents: [
				IntentsBitField.Flags.Guilds,
				IntentsBitField.Flags.GuildMessages,
				IntentsBitField.Flags.DirectMessages
			]
		})
	],
	providers: [AppCommands, AppComponents]
})
export class AppModule {}
