const Discord = require('discord.js');
const bot = new Discord.Client();

const newUsers = new Discord.Collection();

const ImageUploaderLogic = require("./ImageUploaderLogic.js");

bot.login('NjYyMDk1NTYyNTM5MTM5MDg0.Xg0_Nw.MfDanQ5wY0cw3NqZE6qv9kXbBew');

bot.on('ready', () => {
    console.log('I am ready!');
  
  });

bot.on('message', (message) => {
if(message.content.includes ("Feesh") || message.content.includes ("feesh")){
    message.channel.send('❤');
}
});

        bot.on("guildMemberAdd", (member) => {
            const guild = member.guild;
            newUsers.set(member.id, member.user);
            console.log("Member Added");
            if (newUsers.size > 0) {
              const defaultChannel = guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
              const userlist = newUsers.map(u => u.toString()).join(" ");
              bot.channels.get("540007910017728522").send("Welcome "+userlist+"!  Welcome to Sam's bedroom!  Don't hog the cheezits!")
              newUsers.clear();
              
            }
          });

        bot.on("guildMemberRemove", (member) => {
            if(newUsers.has(member.id)) newUsers.delete(member.id);
            console.log("Member Removed");
        });
