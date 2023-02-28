import { Injectable } from '@nestjs/common';
import { Context, Options, SlashCommand, SlashCommandContext } from 'necord';
import { LengthDto } from './dtos/length.dto';

@Injectable()
export class AppCommands {
	@SlashCommand({ name: 'ping', description: 'Ping-Pong Command' })
	public async onPing(@Context() [interaction]: SlashCommandContext) {
		return interaction.reply({ content: 'Pong!' });
	}

	@SlashCommand({ name: 'length', description: 'Get length of text' })
	public async onLength(@Context() [interaction]: SlashCommandContext, @Options() { text }: LengthDto) {
		return interaction.reply({ content: `Length of your text ${text.length}` });
	}
}
