const Discord = require('discord.js');
const dev = ('Gappy');
var randomColorVariables = [
  "#E52D2D",
  "#F26D6D",
  "#F29696"
];

var randomColor = randomColorVariables[Math.floor(Math.random()*randomColorVariables.length)];

exports.run = async (client, message, args) => {
  let suggestion = args.join(' ');
    if (!suggestion) return message.channel.send('Please give me a suggestion.')
      .then(message.delete())
        .then(m => m.delete(3000));
    message.channel.send('Thank you for the suggestion. I\'ll be sure to read it!').then(message.delete())
      .then(m => m.delete(3000))
        .catch(error => message.channel.send(`ERROR: ${error}`));
    const embed = new Discord.RichEmbed()
    .setAuthor(`A new suggestion appeared!`,message.author.avatarURL)
    .addField(`Suggestion by **${message.author.tag}** in ${message.guild.name}`,`${suggestion}`)
    .setTimestamp()
    .setColor(randomColor)
    .setThumbnail()
    client.channels.get('662523641745113108').send(embed)
    console.log(`[Suggestion] ${message.author.tag}:\n"${suggestion}"`);
};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'suggest',
  description: '',
  usages: 'suggest <description>'
};