import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../command";
import { setTimeout } from "timers/promises";

export const ScheduleMessage: Command = {
  name: "schedule message",
  description: "simple command for scheduling some message",
  type: "CHAT_INPUT",
  options: [
    {
      name: "timer",
      description: "timer when to send message",
      type: "INTEGER",
      required: true,
      choices: [
        {
          name: "1000",
          value: 1000,
        },
        {
          name: "2000",
          value: 2000,
        },
      ],
    },
  ],
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const evtChoices = interaction.options.get("timer");

    if (evtChoices != null) {
      //TODO don't work for now
      if (evtChoices.value === 1000) {
        client.emit("1000", interaction.member);

        const content = "It's ok one" + evtChoices.value;
        await setTimeout(evtChoices.value);
        await interaction.followUp({
          ephemeral: true,
          content,
        });
      } else {
        client.emit("2000", interaction.member);

        const content = "It's ok two";
        await interaction.followUp({
          ephemeral: true,
          content,
        });
      }
    }
  },
};
