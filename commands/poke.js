exports.run = async (client, message, args) => {
  const Discord = require('discord.js');
  const fs = require('fs');
  const request = require(`request`);
  const pokeImagesSFW = fs.readdirSync("./pokeImages/images/sfw") //retrieves files from the directory
  const pokeImagesNSFW = fs.readdirSync("./pokeImages/images/nsfw")
    var pokeImageSFW = pokeImagesSFW[Math.floor(Math.random() * pokeImagesSFW.length)];
    var pokeImageNSFW = pokeImagesNSFW[Math.floor(Math.random() * pokeImagesNSFW.length)];

  setTitle = [
    'I-I hope you like this!! (✿ >w<)',
    'H-here you go! ( ^▽^)"',
    'Aaah! Hehe~ ヽ(‘ ∇‘ )ノ',
    'An image for you~! (◕◡◕✿)',
    'Wee! (◠ω◠✿)'
  ];
  setTitleNSFW = [
    'W~well then~... (⁄ ⁄•⁄ω⁄•⁄ ⁄)',
    'O~oh~ w~well then~ hehe~! （＊＾Ｕ＾）人（≧Ｖ≦＊）/',
    'Hehe~ (◡‿◡✿)'
  ];
  if (!args[0]) {
    //Pokemon Images
    message.channel.send(`${setTitle[Math.floor(Math.random() * setTitle.length)]}`, {
        file: `./pokeImages/images/sfw/${pokeImageSFW}`
    }).catch();
  };
  if (args[0] == 'nsfw') {
    if (!message.channel.nsfw) return message.channel.send('I-I\'m not allowed to do that here... heh...');
    //Pokemon Images
    message.channel.send(`${setTitleNSFW[Math.floor(Math.random() * setTitleNSFW.length)]}`, {
        file: `./pokeImages/images/nsfw/${pokeImageNSFW}`
    }).catch();
  };

  if (args[0] == 'suggest') {
      if(message.attachments.first()){
          if(message.attachments.first().filename === `png` || `jpg` || `jpeg` || `gif`){
              var date = new Date();
              download(message.attachments.first().url);
              function download(url){
                request.get(url)
                    .on('error', console.error)
                    .pipe(fs.createWriteStream(`pokeImages/requests/sfw/${date.getTime() - 1577836800000} ${message.author.tag}_${message.attachments.first().filename}`));
                    message.channel.send('Thank you for requesting this image!')
            }
          }
      }
      };
  if (args[0] == 'suggestnsfw' && message.channel.nsfw) {
    if (!message.channel.nsfw) return message.channel.send('I-I\'m not allowed to do that here...');
    if(message.attachments.first()){//checks if an attachment is sent
        if(message.attachments.first().filename === `png` || `jpg` || `jpeg` || `gif`){//Download only png (customize this)
            var date = new Date();
            download(message.attachments.first().url);//Function I will show later
            function download(url){
              request.get(url)
                  .on('error', console.error)
                  .pipe(fs.createWriteStream(`pokeImages/requests/nsfw/${date.getTime() - 1577836800000} ${message.author.tag}_${message.attachments.first().filename}`));
                  message.channel.send('Thank you for requesting this image!')
          }
        }
    }
  };
  };
  exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: ['pokemon']
  };
  exports.help = {
    name: 'poke',
    description: '',
    usages: 'poke'
  };