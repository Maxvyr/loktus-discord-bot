import {
  BaseCommandInteraction,
  Client,
  EmbedFieldData,
  MessageEmbed,
} from "discord.js";
import { Command } from "../command";

export const BlogPost: Command = {
  name: "blog",
  description: "go to blog post ytb, instagram, discord, ...",
  type: "CHAT_INPUT",
  options: [
    {
      name: "blog",
      description: "choice blog emit",
      type: "STRING",
      required: true,
      choices: [
        {
          name: "ytb",
          value: "ytb",
        },
        {
          name: "insta",
          value: "insta",
        },
        {
          name: "discord",
          value: "discord",
        },
        {
          name: "vitalik",
          value: "vitalik",
        },
      ],
    },
  ],
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const evtChoices = interaction.options.get("blog");
    const embedFieldData: EmbedFieldData = {
      name: "latence",
      value: `${client.ws.ping}ms`,
      inline: true,
    };

    if (evtChoices != null) {
      switch (evtChoices.value) {
        case "ytb": {
          client.emit(evtChoices.value, interaction.member);

          const url = "https://blog.youtube/";

          const embed = new MessageEmbed()
            .setTitle("Youtube Blog")
            .setURL(url)
            .setTimestamp()
            .setFooter({
              text: "",
              iconURL: client.user?.displayAvatarURL(),
            })
            .addFields([embedFieldData]);

          await interaction.followUp({
            ephemeral: true,
            embeds: [embed],
          });
          break;
        }
        case "insta": {
          client.emit(evtChoices.value, interaction.member);

          const url = "https://about.instagram.com/blog";

          const embed = new MessageEmbed()
            .setTitle("Instagram Blog")
            .setURL(url)
            .setTimestamp()
            .setFooter({
              text: "",
              iconURL: client.user?.displayAvatarURL(),
            })
            .addFields([embedFieldData]);

          await interaction.followUp({
            ephemeral: true,
            embeds: [embed],
          });
          break;
        }
        case "discord": {
          client.emit(evtChoices.value, interaction.member);

          const url = "https://discord.com/blog";

          const embed = new MessageEmbed()
            .setTitle("Discord Blog")
            .setURL(url)
            .setTimestamp()
            .setFooter({
              text: "",
              iconURL: client.user?.displayAvatarURL(),
            })
            .addFields([embedFieldData]);

          await interaction.followUp({
            ephemeral: true,
            embeds: [embed],
          });
          break;
        }
        case "vitalik": {
          client.emit(evtChoices.value, interaction.member);

          const url = "https://vitalik.ca/";

          const embed = new MessageEmbed()
            .setTitle("Discord Blog")
            .setURL(url)
            .setTimestamp()
            .setFooter({
              text: "",
              iconURL: client.user?.displayAvatarURL(),
            })
            .addFields([embedFieldData]);

          await interaction.followUp({
            ephemeral: true,
            embeds: [embed],
          });
          break;
        }
        default: {
          client.emit("default", interaction.member);

          const url = "https://medium.com/";

          const embed = new MessageEmbed()
            .setTitle("Medium")
            .setURL(url)
            .setTimestamp()
            .setFooter({
              text: "",
              iconURL: client.user?.displayAvatarURL(),
            })
            .addFields([embedFieldData]);

          await interaction.followUp({
            ephemeral: true,
            embeds: [embed],
          });
          break;
        }
      }
    }
  },
};
