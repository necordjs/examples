import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, SlashCommandContext } from 'necord';
import { ActionRowBuilder, ModalBuilder, TextInputBuilder } from 'discord.js';
import { TextInputStyle } from 'discord-api-types/v10';

@Injectable()
export class AppCommands {
	@SlashCommand({ name: 'modal', description: 'Creates modal component.' })
	public async createButton(@Context() [interaction]: SlashCommandContext) {
		return interaction.showModal(
			new ModalBuilder()
				.setTitle('What your fav pizza?')
				.setCustomId('pizza/12345')
				.setComponents([
					new ActionRowBuilder<TextInputBuilder>().addComponents([
						new TextInputBuilder().setCustomId('pizza').setLabel('???').setStyle(TextInputStyle.Paragraph)
					])
				])
		);
	}
}
