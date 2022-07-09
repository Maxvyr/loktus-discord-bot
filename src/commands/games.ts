import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";

export const Games: Command = {
    name: "games",
    description: "Returns a list of games",
    type: "CHAT_INPUT",
    run: async (client: Client, interaction: BaseCommandInteraction) => {
        const content = "Game list :";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};