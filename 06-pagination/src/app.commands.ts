import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, SlashCommandContext } from 'necord';
import { NecordPaginationService } from '@necord/pagination';

@Injectable()
export class AppCommands {
    public constructor(private readonly paginationService: NecordPaginationService) {}

	@SlashCommand({ name: 'pagination', description: 'Test pagination' })
    public async onPagination(@Context() [interaction]: SlashCommandContext) {
        const pagination = this.paginationService.get('test');
        const page = await pagination.build();

        return interaction.reply(page);
    }
}
