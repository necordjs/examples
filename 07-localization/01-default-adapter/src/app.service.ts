import { Injectable, OnModuleInit } from '@nestjs/common';
import { CurrentTranslate, localizationMapByKey, TranslationFn } from '@necord/localization';
import { Context, SlashCommand, SlashCommandContext } from 'necord';

@Injectable()
export class AppService implements OnModuleInit {
    @SlashCommand({
        name: 'ping',
        description: 'Pong!',
        nameLocalizations: localizationMapByKey('commands.ping.name'),
        descriptionLocalizations: localizationMapByKey('commands.ping.name')
    })
    public ping(
        @Context() [interaction]: SlashCommandContext,
        @CurrentTranslate() t: TranslationFn
    ) {
        const message = t('commands.ping.description');
        return interaction.reply(message);
    }
}