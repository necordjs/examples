import { NecordPaginationModule } from '@necord/pagination';
import { IntentsBitField } from 'discord.js';
import { Module } from '@nestjs/common';
import { NecordModule } from 'necord';

import { AppCommands } from './app.commands.js';
import { AppService } from './app.service.js';

@Module({
	imports: [
		NecordModule.forRoot({
			token: process.env.DISCORD_TOKEN!,
			intents: [
				IntentsBitField.Flags.Guilds,
				IntentsBitField.Flags.GuildMessages,
				IntentsBitField.Flags.DirectMessages
			]
		}),
		NecordPaginationModule.forRoot({
			buttons: {},
			allowSkip: true,
			allowTraversal: true,
			buttonsPosition: 'end'
		})
	],
	providers: [AppCommands, AppService]
})
export class AppModule {}
