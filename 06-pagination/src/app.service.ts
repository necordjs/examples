import { OnModuleInit, Injectable } from '@nestjs/common';
import { NecordPaginationService, PageBuilder } from '@necord/pagination';

@Injectable()
export class AppService implements OnModuleInit {
	public constructor(private readonly paginationService: NecordPaginationService) {}

	public onModuleInit() {
		return this.paginationService.register(builder =>
			builder
				.setCustomId('test')
				.setPages([
					new PageBuilder().setContent('Page 1'),
					new PageBuilder().setContent('Page 2'),
					new PageBuilder().setContent('Page 3'),
					new PageBuilder().setContent('Page 4'),
					new PageBuilder().setContent('Page 5')
				])
				.setPagesFactory(async page => new PageBuilder().setContent(`Page ${page}`))
				.setMaxPages(5)
		);
	}
}
