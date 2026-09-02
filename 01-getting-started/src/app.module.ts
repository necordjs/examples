import { IntentsBitField } from 'discord.js';
import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';

import { AppUpdate } from './app.update.js';

@Module({
	imports: [
		NecordModule.forRoot({
			token: process.env.DISCORD_TOKEN!,
			intents: [
				IntentsBitField.Flags.Guilds,
				IntentsBitField.Flags.GuildMessages,
				IntentsBitField.Flags.DirectMessages
			]
		})
	],
	providers: [AppUpdate]
})
export class AppModule {}
