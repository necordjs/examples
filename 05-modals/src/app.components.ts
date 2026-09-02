import { Ctx, Modal, ModalContext } from 'necord';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppComponents {
	@Modal('pizza/:value')
	public onModal(@Ctx() [interaction]: ModalContext) {
		return interaction.reply({
			content: `Your fav pizza : ${interaction.fields.getTextInputValue('pizza')}`
		});
	}
}
