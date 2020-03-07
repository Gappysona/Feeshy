exports.run = async (client, message, args, users) => {
  //console.log(users)
  if(!users.includes(message.author.id)) return;
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        var props = require(`./${args[0]}.js`);
        client.commands.set(props.help.name, props);
     } catch (e){
        if(args[0] === undefined){
           return message.channel.send('Couldn\'t reload: `undefined`');
         }
        return message.channel.send('Couldn\'t reload: `'+args[0]+'`').catch();
    }

    message.channel.send('Reloaded: `'+args[0]+'`')
    console.log('[Reloaded Commands] `'+args[0]+'`')
  };
  exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: []
  };
  exports.help = {
    name: 'reload',
    description: '',
    usages: 'reload'
  };