exports.run = async (client, message, args) => {
  if(!member.hasPermission('MANAGE_MESSAGES'||'ADMINISTRATOR')) return;  
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount)
      return message.channel.send("Please provide me a number, I can't purge without one!");
    if(deleteCount > 50)
      return message.channel.send("I can't do that, can you provide me a number between 1 and 50?");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    if(deleteCount == 1) {
      message.channel.send(`Deleted ${deleteCount} message.`).then(m => m.delete(3000))
        .catch(error => message.channel.send(`ERROR: ${error}`+console.log(error)));
    }
    else {
      message.channel.send(`Deleted ${deleteCount} messages.`).then(m => m.delete(3000))
        .catch(error => message.channel.send(`ERROR: ${error}`+console.log(error)));
    }
};
  exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: ['prune','clear']
  };
  exports.help = {
    name: 'purge',
    description: '',
    usages: 'purge'
};