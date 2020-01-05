exports.run = async (client, message) => {
    message.channel.send(`Pong! Request received, ${message.author}! **${Math.round(client.ping)}ms**`)
  };
  exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: []
  };
  exports.help = {
    name: 'ping',
    description: '',
    usages: 'ping'
  };