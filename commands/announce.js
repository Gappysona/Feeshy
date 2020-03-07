const Discord = require('discord.js');
var randomSetAuthor = [
  "It's an announcement!",
  "Hold it! Announcement!",
  "Stop, hammertime!",
  "Announcement time!",
  "Announcement!"
]


exports.run = async (client, message, args, users) => {
  //console.log(users)
  if(!users.includes(message.author.id)) return;
  let announce = args.join(' ');
    message.channel.send('Announcement in progress!').then(message.delete())
      .then(m => m.delete(5000))
        .catch(error => message.channel.send(`ERROR: ${error}`));
    const embed = new Discord.RichEmbed()
    .setAuthor(randomSetAuthor[Math.floor(Math.random()*randomSetAuthor.length)],message.author.avatarURL)
    .addField(`Announcement by **${message.author.tag}**`,`${announce}`)
    .setTimestamp()
    .setColor('#f25f41')
    .setThumbnail()
    client.channels.get('673282554618576915').send(embed)
    console.log(`[Announcement] ${message.author.tag}:\n"${announce}"`);
};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['announcement']
};
exports.help = {
  name: 'announce',
  description: '',
  usages: 'announce <description>'
};