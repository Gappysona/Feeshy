//Call Packages
const Discord = require('discord.js');
const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
//Define Discord Client
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
//Define Config
const token = ('NjYzMDM3NjEwMDY2ODM3NTA0.XhCuSA.Igfoz4LKlhQYWsLSyWr-8ILgnTE');
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Command Loader / Handler
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err); // return error if can't access folder
  let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0) { // check file count, then return a console log
      console.log('No commands to load!');
      return;
    }
  jsfiles.forEach(f => {
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name , props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
  console.log(`[Commands] Loaded ${files.length} Commands`);
});

// Event loader / Handler
fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err); //return error if can't access folder
  const jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if (jsfiles.length <= 0) { // check file count, then return a console log
      return console.log(`[Events] No events could be loaded!`);
  } else {
    console.log(`[Events] Loaded ${jsfiles.length} Events`);
  }
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

var fEmoji = [
':oseVaporeonKarmaGamer:646845564167913486',
':oseVaporeonKarmaConcern:644603268055433216',
':oseVaporeonATeehee:651905753661308928',
':oseVaporeonASipSip:643852536889081881',
':oseVaporeonACheezits:658315185769152512',
':oseVaporeonABlush:650493625767165972',
':oseVaporeonABlep:650635052182536193',
':oseVaporeonABathwater:643846848641105924',
':oseVaporeonKarmaGamer:646845564167913486',
':oseVaporeonKarmaConcern:644603268055433216',
':oseVaporeonATeehee:651905753661308928',
':oseVaporeonASipSip:643852536889081881',
':oseVaporeonACheezits:658315185769152512',
':oseVaporeonABlush:650493625767165972',
':oseVaporeonABlep:650635052182536193',
':oseVaporeonABathwater:643846848641105924',
':oseVaporeonKarmaGamer:646845564167913486',
':oseVaporeonKarmaConcern:644603268055433216',
':oseVaporeonATeehee:651905753661308928',
':oseVaporeonASipSip:643852536889081881',
':oseVaporeonACheezits:658315185769152512',
':oseVaporeonABlush:650493625767165972',
':oseVaporeonABlep:650635052182536193',
':oseVaporeonABathwater:643846848641105924'
];

client.on('message', (message) => {
  if (message.author.bot) return undefined;
    if (message.content.toLowerCase().includes('feesh')) return message.react(fEmoji[Math.floor(Math.random() * fEmoji.length)]);
})

client.login(token);