import { Injectable } from '@nestjs/common';
import { Context, MessageCommand, Options, UserCommand } from 'necord';
import { ContextMenuInteraction, Message, MessageEmbed, User } from 'discord.js';

@Injectable()
export class AppCommands {
	@MessageCommand('Get message id')
	public async getMessageId(@Context() [interaction]: ContextOf<'messageContextCommand'>, @Options('message') message: Message) {
		return interaction.reply({ content: `Message ID is ${message.id}` });
	}

	@UserCommand('Get user avatar')
	public async getUserAvatar(@Context() [interaction]: ContextOf<'userContextCommand'>, @Options('user') user: User) {
		return interaction.reply({
			embeds: [
				new MessageEmbed()
					.setTitle(`Avatar ${user.username}`)
					.setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
			]
		});
	}
}
