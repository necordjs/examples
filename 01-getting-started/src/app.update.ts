import { Context, ContextOf, On, Once } from 'necord';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppUpdate {
	private readonly logger = new Logger(AppUpdate.name);

	@Once('clientReady')
	public async onReady(@Context() [client]: ContextOf<'clientReady'>) {
		this.logger.log(`Bot logged in as ${client.user.username}`);
	}

	@On('warn')
	public onWarn(@Context() [message]: ContextOf<'warn'>) {
		this.logger.warn(message);
	}
}
