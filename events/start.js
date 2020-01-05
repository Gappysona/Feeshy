exports.run = async (client, prefix) => {
  console.log(`Currently online in ${client.guilds.size} guilds!`);
  var i; 
    for (i = 0; i < 10; i++)  
    { 
      if(client.guilds.size == 1) {
        client.user.setActivity(`${client.guilds.size} Server ⁠— (${prefix}help)`, {type: 'WATCHING', url: 'https://discord.gg/E6cvGmb', callback:'error'});
      } else {
          client.user.setActivity(`${client.guilds.size} Servers⁠ ⁠— (${prefix}help)`, {type: 'WATCHING', url: 'https://discord.gg/E6cvGmb', callback:'error'});
        }
    }

  //client.user.setStatus("watching")
};