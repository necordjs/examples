import { Injectable } from '@nestjs/common';
import { Ctx, Modal, ModalContext } from 'necord';

@Injectable()
export class AppComponents {
	@Modal('pizza/:num')
	public onModal(@Ctx() [interaction]: ModalContext) {
		return interaction.reply({
			content: `Your fav pizza : ${interaction.fields.getTextInputValue('pizza')}`
		});
	}
}
