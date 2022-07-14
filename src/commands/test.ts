import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";

export const Test: Command = {
  name: "test",
  description: "simple command for test",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = "It's ok";

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
