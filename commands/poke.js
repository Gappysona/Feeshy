exports.run = async (client, message) => {
    const Discord = require('discord.js');
    const fs = require('fs');
    setTitle = [
        'Here you go! >w>',
        'Enjoy, friendo! uwu',
        'You\'re welcome!!',
        'Hehe~ of course I will!',
        'Ta-da! Your image, good sir!',
        'Open sesame~!',
        'Your feesh is my command!'
    ]

    //Pokemon Images
    const pokeImages = fs.readdirSync("./pokeImages/") //retrieves files from the directory
    var pokeImage = pokeImages[Math.floor(Math.random() * pokeImages.length)];
    message.channel.send(`Uwa~! >w<\n` + setTitle[Math.floor(Math.random() * setTitle.length)], {
        file: `./pokeImages/${pokeImage}`
    }).catch();

  };
  exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: []
  };
  exports.help = {
    name: 'poke',
    description: '',
    usages: 'poke'
  };