import { NecordModule } from 'necord';
import { Module } from '@nestjs/common';
import { NecordPaginationModule } from '@necord/pagination';
import { AppCommands } from './app.commands'
import { AppService } from './app.service';

@Module({
    imports: [
        NecordModule.forRoot({
            token: process.env.DISCORD_TOKEN,
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
            buttonsPosition: "end"
        })
    ],
    providers: [AppCommands, AppService]
})
export class AppModule {}