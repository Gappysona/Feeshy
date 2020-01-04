const Discord = require('discord.js');
const bot = new Discord.Client();

const newUsers = new Discord.Collection();

bot.login('NjYyMDk1NTYyNTM5MTM5MDg0.Xg0_Nw.MfDanQ5wY0cw3NqZE6qv9kXbBew');

bot.on('ready', () => {
    console.log('React role online!');
  });


bot.on('message', (message) => {
    if(message.content.startsWith (".botrole")){
     
      let botTest = message.guild.roles.get("663011611413446666");
    //  let botTest = message.guild.roles.find(role => role.name === "Bot test role");
      
      if(message.member.roles.has("663011611413446666")) {
        message.reply("The role has been removed!");
        message.member.removeRole(botTest).catch(console.error);
        //message.reply("You alredy have that role dum dum!");
          } else {
            message.reply("The role has been added!");
            message.member.addRole(botTest).catch(console.error);
          }

        }});

    /*    bot.on('message', (message) => {
          if(message.content.startsWith (".removerole")){
           
            let botTest = message.guild.roles.get("663011611413446666");
          //  let botTest = message.guild.roles.find(role => role.name === "Bot test role");
            
            if(message.member.roles.has("663011611413446666")) {
              message.reply("The role has been removed!");
              message.member.removeRole(botTest).catch(console.error);
                } else {
                  message.reply("You don't have that role dum dum!");
                 
                }
      
              }});*/
