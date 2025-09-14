import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { CommandsService, ExplorerService, SlashCommandDiscovery, SlashCommandsService, SlashCommand } from 'necord';
import { Client } from 'discord.js';

@Injectable()
export class CommandService implements OnApplicationBootstrap {
	private readonly logger = new Logger();

	constructor(
		private readonly slashCommandService: SlashCommandsService,
		private readonly explorerService: ExplorerService<SlashCommandDiscovery>,
		private readonly commandService: CommandsService,
		private readonly client: Client
	) {}

	async onApplicationBootstrap() {
		this.client.once('clientReady', async () => {
			await this.updateCommandsMeta();
			await this.commandService.registerAllCommands()
		});
	}

	// Fetch guild ids from API
	async fetchGuildIds() {
		return [{ id: 1, name: 'dynamic', guildIds: [process.env.DB_GUILD_ID] }];
	}

	async updateCommandsMeta() {
		this.logger.verbose('Updating metadata for SlashCommands');

		const slashCommands = this.explorerService.explore(SlashCommand.KEY);
		this.logger.verbose(`${slashCommands.length} SlashCommand (s) explored`);

		const db = await this.fetchGuildIds();
		for (const command of slashCommands) {
			this.slashCommandService.remove(command.getName());
			const data = db.find(d => d.name === command.getName());
			if (!data) {
				this.logger.warn(`No metadata found for SlashCommand : ${command.getName()}`);
				this.slashCommandService.add(command);
				return;
			}

			this.logger.verbose(`Updating metadata for SlashCommand : ${command.getName()}`);

			command.setGuilds(data.guildIds ?? []);
			this.slashCommandService.add(command);
		}
	}
}
