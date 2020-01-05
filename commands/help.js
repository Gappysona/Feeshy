exports.run = async (client, message) => {
  // Define "Discord" with a const, make it use the discord.js library
  const prefix = ('.');
  const Discord = require('discord.js');
  let users = ["151754192690610176"];
  // Define the embed for sending as a message later
  const embed = new Discord.RichEmbed()
    .setAuthor(`Commands List`,message.author.avatarURL)
    .addField(`**${prefix}HELP**`,`See the commands list.`)
    .addField(`**${prefix}PING**`,`Check the bot ping.`)
    .addField(`**${prefix}SUGGEST**`,`Add a suggestion, either for the bot or the server.`)
    .addField(`**${prefix}ROLE**`,`Assign a role to yourself.\n**ALIAS:** ${prefix}iam`)
    .setTimestamp()
    .setColor('2F3136')
    .setThumbnail()
    .setFooter(`Requested by ${message.author.username}`)
    // Grab the ID of the user and then send them the message
    if(users.includes(message.author.id)) {
      embed.addField(`**${prefix}SAY**`,`Make me speak!`,true)
      message.channel.send(embed)
    } else {
    message.channel.send(embed)
    };

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