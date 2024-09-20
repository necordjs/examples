import { Injectable, UseInterceptors } from '@nestjs/common';
import { GuildMember } from 'discord.js';
import { LavalinkManager } from 'lavalink-client';
import { Context, Options, SlashCommand, SlashCommandContext } from 'necord';
import { QueryDto } from './query.dto';
import { SourceAutocompleteInterceptor } from './source.autocomplete';

@Injectable()
export class AppCommands {
	public constructor(private readonly lavalinkManager: LavalinkManager) {}

	@UseInterceptors(SourceAutocompleteInterceptor)
	@SlashCommand({
		name: 'play',
		description: 'play a track'
	})
	public async onPlay(@Context() [interaction]: SlashCommandContext, @Options() { query, source }: QueryDto) {
		const player = this.lavalinkManager.createPlayer({
			guildId: interaction.guildId,
			voiceChannelId: (interaction.member as GuildMember).voice.channelId,
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
