exports.run = async (client, message, args, users) => {
  console.log(users)
  if(!users.includes(message.author.id)) return;
    let botmsg = args.join(' ')
    message.channel.send(botmsg).then(message.delete())
  };
  exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: ['speak']
  };
  exports.help = {
    name: 'say',
    description: '',
    usages: 'say'
  };