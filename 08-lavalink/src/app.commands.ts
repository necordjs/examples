import { Context, Options, SlashCommand, SlashCommandContext } from 'necord';
import { Injectable, UseInterceptors } from '@nestjs/common';
import { LavalinkManager } from 'lavalink-client';
import { GuildMember } from 'discord.js';

import { SourceAutocompleteInterceptor } from './source.autocomplete.js';
import { QueryDto } from './query.dto.js';

@Injectable()
export class AppCommands {
	public constructor(private readonly lavalinkManager: LavalinkManager) {}

	@SlashCommand({
		name: 'play',
		description: 'play a track'
	})
	@UseInterceptors(SourceAutocompleteInterceptor)
	public async onPlay(@Context() [interaction]: SlashCommandContext, @Options() { query, source }: QueryDto) {
		const player = this.lavalinkManager.createPlayer({
			guildId: interaction.guildId!,
			voiceChannelId: (interaction.member as GuildMember).voice.channelId!,
			textChannelId: interaction.channelId,
			// optional configurations:
			selfDeaf: true,
			selfMute: false,
			volume: 40
		});

		await player.connect();

		const res = await player.search(
			{
				query,
				source: source ?? 'soundcloud'
			},
			interaction.user.id
		);

		await player.queue.add(res.tracks[0]);
		if (!player.playing) await player.play();

		return interaction.reply({
			content: `Now playing ${res.tracks[0].info.title}`
		});
	}
}
