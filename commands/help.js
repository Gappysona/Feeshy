exports.run = async (client, message, prefix) => {
  // Define "Discord" with a const, make it use the discord.js library
  const Discord = require('discord.js');
  let users = ["151754192690610176"];
  // Define the embed for sending as a message later
  const embed = new Discord.RichEmbed()
    .setAuthor(`Commands List`,message.author.avatarURL)
    .addField(`**${prefix}help**`,`List all of the available commands.`)
    .addField(`**${prefix}suggest \`<required:message>\`**`,`Create a suggestion for the server.`)
    .addField(`**${prefix}iam \`<required:rolename>\`** (im)`,`Assign a role to yourself.`)
    .addField(`**${prefix}roll \`[optional:num]\`** (dice)`,`Roll six-sided dice.`)
    .addField(`**${prefix}poke \`[optional:nsfw]\`** (pokemon)`,`Wholesome Pokémon images!`)
    .addField(`**${prefix}poke \`<suggest|suggestnsfw>\`** (pokemon)`,`Suggest images to add to the poke commands.`)
    .setTimestamp()
    .setColor('75C8FF')
    .setThumbnail()
    .setFooter(`Requested by ${message.author.username}`)
    // Grab the ID of the user and then send them the message
    if(users.includes(message.author.id)) {
      embed.addField(`**${prefix}say \`<required:message>\`** (speak)`,`Make me speak!`)
      embed.addField(`**${prefix}eval \`<required:command>\`**`,`This is the developer command.`)
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