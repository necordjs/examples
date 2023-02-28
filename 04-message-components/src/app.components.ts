import { Injectable } from '@nestjs/common';
import { Button, ButtonContext, Context, StringSelect, StringSelectContext } from 'necord';

@Injectable()
export class AppComponents {
	@Button('BUTTON')
	public onButton(@Context() [interaction]: ButtonContext) {
		return interaction.reply({ content: 'Button clicked!' });
	}

	@StringSelect('SELECT_MENU')
	public onSelectMenu(@Context() [interaction]: StringSelectContext) {
		return interaction.reply({ content: `Your selected color - ${interaction.values.join(' ')}` });
	}
}
