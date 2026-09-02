import { AutocompleteInteraction } from 'discord.js';
import { DefaultSources } from 'lavalink-client';
import { AutocompleteInterceptor } from 'necord';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SourceAutocompleteInterceptor extends AutocompleteInterceptor {
	public transformOptions(interaction: AutocompleteInteraction) {
		const focused = interaction.options.getFocused(true);
		const choices = focused.name === 'source' ? [DefaultSources.youtube, DefaultSources.spotify] : [];

		return interaction.respond(
			choices
				.filter(choice => choice.startsWith(focused.value.toString()))
				.map(choice => ({ name: choice, value: choice }))
		);
	}
}
