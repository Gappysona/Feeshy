exports.run = async (client, message, prefix) => {
  // Define "Discord" with a const, make it use the discord.js library
  const Discord = require('discord.js');
  // Define the embed for sending as a message later
  const embed = new Discord.RichEmbed()
    .setAuthor(`Commands List`,message.author.avatarURL)
    .addField(`${prefix}HELP`,`**RECEIVE**\nCommands List`,true)
    .addField(`${prefix}PING`,`**RECEIVE**\nBot Ping to Server`,true)
    .setTimestamp()
    .setColor('2F3136')
    .setThumbnail()
    .setFooter(`Requested by ${message.author.username}`)
    // Grab the ID of the user and then send them the message
    message.channel.send(embed)

};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'help',
  description: '',
  usages: 'help'
};