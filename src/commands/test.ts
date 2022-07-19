import {
  BaseCommandInteraction,
  Client,
  CommandInteractionOption,
} from "discord.js";
import { Command } from "../command";

export const Test: Command = {
  name: "test",
  description: "simple command for test",
  type: "CHAT_INPUT",
  options: [
    {
      name: "event",
      description: "choice event emit",
      type: "STRING",
      required: true,
      choices: [
        {
          name: "one",
          value: "one",
        },
        {
          name: "two",
          value: "two",
        },
      ],
    },
  ],
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const evtChoices = interaction.options.get("event");

    if (evtChoices != null) {
      if (evtChoices.value === "one") {
        client.emit("one", interaction.member);

        const content = "It's ok one";

        await interaction.followUp({
          ephemeral: true,
          content,
        });
      } else {
        client.emit("two", interaction.member);

        const content = "It's ok two";
        await interaction.followUp({
          ephemeral: true,
          content,
        });
      }
    }
  },
};
