
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "html",
  aliases: ["Html"],
  category: "Codes",
  description: "Help in coding Html Files",
  usage: "html",
  run: async (client, message, args) => {
    
   

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("HTML")
    .setDescription("Html Code Link Here :-[click here](https://tailblocks.cc)")
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
