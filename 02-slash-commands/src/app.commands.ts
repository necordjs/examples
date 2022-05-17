import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, Options, ContextOf } from 'necord';
import { CommandInteraction } from 'discord.js';
import { LengthDto } from './dtos/length.dto';

@Injectable()
export class AppCommands {
	@SlashCommand('ping', 'Ping-Pong Command')
	public async onPing(@Context() [interaction]: ContextOf<'slashCommand'>) {
		return interaction.reply({ content: 'Pong!' });
	}

	@SlashCommand('length', 'Get length of text')
	public async onLength(@Context() [interaction]: ContextOf<'slashCommand'>, @Options() { text }: LengthDto) {
		return interaction.reply({ content: `Length of your text ${text.length}` });
	}
}
