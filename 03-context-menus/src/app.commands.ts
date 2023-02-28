import { Injectable } from '@nestjs/common';
import {
	Context,
	MessageCommand,
	MessageCommandContext,
	Options,
	TargetMessage,
	TargetUser,
	UserCommand,
	UserCommandContext
} from 'necord';
import { EmbedBuilder, Message, User } from 'discord.js';

@Injectable()
export class AppCommands {
	@MessageCommand({ name: 'Get message id' })
	public async getMessageId(@Context() [interaction]: MessageCommandContext, @TargetMessage() message: Message) {
		return interaction.reply({ content: `Message ID is ${message.id}` });
	}

	@UserCommand({ name: 'Get user avatar' })
	public async getUserAvatar(@Context() [interaction]: UserCommandContext, @TargetUser() user: User) {
		return interaction.reply({
			embeds: [
				new EmbedBuilder()
					.setTitle(`Avatar ${user.username}`)
					.setImage(user.displayAvatarURL({ size: 4096, forceStatic: false }))
			]
		});
	}
}
