import { NecordModule } from 'necord';
import { Module } from '@nestjs/common';
import { NecordLavalinkModule } from '@necord/lavalink';
import { AppCommands } from './app.commands'
import { AppService } from './app.service';

@Module({
    imports: [
        NecordModule.forRoot({
            token: process.env.DISCORD_TOKEN,
            intents: [
                IntentsBitField.Flags.Guilds,
				IntentsBitField.Flags.GuildMessages,
				IntentsBitField.Flags.GuildVoiceStates,
				IntentsBitField.Flags.DirectMessages
            ]
        }),
        NecordLavalinkModule.forRoot({
            nodes: [
                {
                  authorization: 'youshallnotpass',
                  host: 'localhost',
                  port: 2333,
                },
            ],
        })
    ],
    providers: [AppCommands, AppService]
})
export class AppModule {}