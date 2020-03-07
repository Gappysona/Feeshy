const Discord = require('discord.js');
const dev = ('Gappy');
var randomColorVariables = [
  "#8DD8F8",
  "#B9FFFF",
  "#93E2FF"
];
var randomSetAuthor = [
  "A challenger approaches!",
  "A wild suggestion appears!",
  "New suggestion!"
]


exports.run = async (client, message, args) => {
  let suggestion = args.join(' ');
    if (!suggestion) return message.channel.send('Please give me a suggestion.')
      .then(message.delete())
        .then(m => m.delete(5000));
    message.channel.send('Thank you for the suggestion! I\'ll be sure to read it!').then(message.delete())
      .then(m => m.delete(5000))
        .catch(error => message.channel.send(`ERROR: ${error}`));
    const embed = new Discord.RichEmbed()
    .setAuthor(randomSetAuthor[Math.floor(Math.random()*randomSetAuthor.length)],message.author.avatarURL)
    .addField(`Suggestion by **${message.author.tag}**`,`${suggestion}`)
    .setTimestamp()
    .setColor(randomColorVariables[Math.floor(Math.random()*randomColorVariables.length)])
    .setThumbnail()
    const mes = await client.channels.get('673282554618576915').send(embed)
    await mes.react(message.client.emojis.get('680879355202764914'))
    await mes.react(message.client.emojis.get('680879355018215488'))
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