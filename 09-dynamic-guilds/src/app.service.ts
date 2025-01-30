import { Injectable, Logger } from '@nestjs/common';
import { ContextOf, Ctx, Once } from 'necord';

@Injectable()
export class AppService {
	private readonly logger = new Logger(AppService.name);

	@Once('ready')
	public onReady(@Ctx() [client]: ContextOf<'ready'>) {
		this.logger.log(`Bot is ready! Logged in as ${client.user.tag}`);
	}
}
