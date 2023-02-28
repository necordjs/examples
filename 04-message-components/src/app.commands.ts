import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, SlashCommandContext } from 'necord';
import { ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } from 'discord.js';
import { ButtonStyle } from 'discord-api-types/v10';

@Injectable()
export class AppCommands {
	@SlashCommand({ name: 'button', description: 'Creates button component.' })
	public async createButton(@Context() [interaction]: SlashCommandContext) {
		return interaction.reply({
			content: `Button`,
			components: [
				new ActionRowBuilder<ButtonBuilder>().addComponents(
					new ButtonBuilder().setCustomId('BUTTON').setLabel('LABEL').setStyle(ButtonStyle.Primary)
				)
			]
		});
	}

	@SlashCommand({ name: 'select-menu', description: 'Creates select menu component.' })
	public async createSelectMenu(@Context() [interaction]: SlashCommandContext) {
		return interaction.reply({
			content: `Button`,
			components: [
				new ActionRowBuilder<SelectMenuBuilder>().addComponents(
					new SelectMenuBuilder()
						.setCustomId('SELECT_MENU')
						.setPlaceholder('Select your color')
						.setMaxValues(1)
						.setMinValues(1)
						.setOptions([
							{ label: 'Red', value: 'Red' },
							{ label: 'Blue', value: 'Blue' },
							{ label: 'Yellow', value: 'Yellow' }
						])
				)
			]
		});
	}
}
