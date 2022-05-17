import { Injectable } from '@nestjs/common';
import { Context, SlashCommand } from 'necord';
import { CommandInteraction, MessageActionRow, MessageButton, MessageSelectMenu } from 'discord.js';
import { MessageButtonStyles } from 'discord.js/typings/enums';

@Injectable()
export class AppCommands {
	@SlashCommand('button', 'Creates button component.')
	public async createButton(@Context() [interaction]: ContextOf<slashCommand>) {
		return interaction.reply({
			content: `Button`,
			components: [
				new MessageActionRow().addComponents(
					new MessageButton().setCustomId('BUTTON').setLabel('LABEL').setStyle(MessageButtonStyles.PRIMARY)
				)
			]
		});
	}

	@SlashCommand('select-menu', 'Creates select menu component.')
	public async createSelectMenu(@Context() [interaction]: ContextOf<slashCommand>) {
		return interaction.reply({
			content: `Button`,
			components: [
				new MessageActionRow().addComponents(
					new MessageSelectMenu()
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
