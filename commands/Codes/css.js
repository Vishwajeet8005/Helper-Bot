
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "css",
  aliases: ["css"],
  category: "Codes",
  description: "Help in coding css Files",
  usage: "css",
  run: async (client, message, args) => {
    
   

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("CSS")
    .setDescription("CSS Code Link Here :-[click here](https://tailwindcss.com/docs/installation)")
    .setTimestamp();

    return message.channel.send(Embed);
  }
};







