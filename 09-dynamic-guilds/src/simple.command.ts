import { Ctx, SlashCommand, SlashCommandContext } from 'necord';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SimpleCommand {
	@SlashCommand({ name: 'ping', description: 'Bot status' })
	async run(@Ctx() [i]: SlashCommandContext) {
		return i.reply({ ephemeral: true, content: 'Pong !' });
	}
}
