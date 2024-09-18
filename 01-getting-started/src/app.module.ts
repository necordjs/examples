import { NecordModule } from 'necord';
import { Module } from '@nestjs/common';
import { AppUpdate } from './app.update';
import { IntentsBitField } from 'discord.js';

@Module({
	imports: [
		NecordModule.forRoot({
			token: process.env.DISCORD_TOKEN,
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
