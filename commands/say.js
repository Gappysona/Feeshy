exports.run = async (client, message, args) => {
let users = ["151754192690610176"];
    if(!users.includes(message.author.id)) return;
    let botmsg = args.join(' ')
    message.channel.send(botmsg).then(message.delete())
  };
  exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: []
  };
  exports.help = {
    name: 'say',
    description: '',
    usages: 'say'
  };