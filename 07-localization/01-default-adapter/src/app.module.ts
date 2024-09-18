import { NecordModule } from 'necord';
import { Module } from '@nestjs/common';
import { NecordLocalizationModule, DefaultLocalizationAdapter, UserResolver } from '@necord/localization';
import { AppService } from './app.service';

@Module({
    imports: [
        NecordModule.forRoot({
            token: process.env.DISCORD_TOKEN,
            intents: [
                IntentsBitField.Flags.Guilds,
                IntentsBitField.Flags.DirectMessages,
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.MessageContent
            ],
            prefix: '!',
            development: [process.env.DISCORD_TEST_GUILD]
        }),
        NecordLocalizationModule.forRoot({
            resolvers: UserResolver,
            adapter: new DefaultLocalizationAdapter({
                fallbackLocale: 'en-US',
                locales: {
                    'en-US': {
                        'commands.ping.name': 'ping',
                        'commands.ping.description': 'Pong!'
                    },
                    ru: {
                        'commands.ping.name': 'пинг',
                        'commands.ping.description': 'Понг!'
                    }
                }
            })
        })
    ],
    providers: [AppService]
})
export class AppModule {
}