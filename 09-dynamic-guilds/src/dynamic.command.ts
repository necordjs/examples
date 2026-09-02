import { Ctx, SlashCommand, SlashCommandContext } from 'necord';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicCommand {
	@SlashCommand({
		name: 'dynamic',
		description: 'This is a dynamic command'
	})
	async run(@Ctx() [i]: SlashCommandContext) {
		return i.reply({ ephemeral: true, content: 'I am so dynamic !! 😎' });
	}
}
