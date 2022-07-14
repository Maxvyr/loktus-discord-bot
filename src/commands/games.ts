import { BaseCommandInteraction, Client } from "discord.js";
import axios from "axios";
import { Command } from "../command";
import dotenv from "dotenv";
import { GameType } from "src/models/games_list";

export const Games: Command = {
  name: "games",
  description: "Returns a list of games",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    try {
      console.log(client.emojis);

      const url = `https://whatoplay.p.rapidapi.com/search?game=Dota`;
      //   const url = `https://whatoplay.p.rapidapi.com/search?game=${client.addListener.arguments}`;
      dotenv.config();
      const res = await axios({
        method: "get",
        url: url,
        headers: {
          "X-RapidAPI-Key": `${process.env.GAME_KEY}`,
          "X-RapidAPI-Host": `${process.env.GAME_HOST}`,
        },
      });

      const result: [GameType] = res.data;
    //   result.forEach((element: GameType) => {
    //     const gameTitle = element.game_name;
    //     console.log(element.game_name, element.developer);
    //     console.log("----------");
    //   });

      const content: string =
        result[0].game_name + " -- " + result[0].game_themes;

      await interaction.followUp({
        ephemeral: true,
        content,
      });
    } catch (error) {
      console.error("Error call ", error);
    }
  },
};
