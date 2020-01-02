const Discord = require('discord.js');
const bot = new Discord.Client();

const newUsers = new Discord.Collection();

bot.login('NjYyMDk1NTYyNTM5MTM5MDg0.Xg0_Nw.MfDanQ5wY0cw3NqZE6qv9kXbBew');

bot.on('ready', () => {
    console.log('I am ready!');
  });

bot.on('message', (message) => {
    if(message.content.includes (".poke")){
        message.channel.send('Sending...');
        var poke = [ 
        {file: "/home/pi/Pictures/Pokemon/tumblr_n33hrpmmWU1sm2531o2_1280.jpg"}, 
        {file: "/home/pi/Pictures/Pokemon/41950369_395964740940764_8353026304781582336_n.png"}, 
        {file: "/home/pi/Pictures/Pokemon/343.png"}, 
        {file: "/home/pi/Pictures/Pokemon/434.png"}, 
        {file: "/home/pi/Pictures/Pokemon/vaporeon_by_foxlett_daa932m-fullview.png"}, 
        {file: "/home/pi/Pictures/Pokemon/54d.png"}, 
        {file: "/home/pi/Pictures/Pokemon/27482832_p0_master12001.png"},
        {file: "/home/pi/Pictures/Pokemon/2bbcd451cd80098423946aaab4bdd263.jpg"},
        {file: "/home/pi/Pictures/Pokemon/2f351a53a58c3345e6d7da6c16245339.png"},
        {file: "/home/pi/Pictures/Pokemon/8c1.png"},
        {file: "/home/pi/Pictures/Pokemon/715d6b142883c477165b3c9a4d6a42b9.png"},
        {file: "/home/pi/Pictures/Pokemon/e8c73e0f2ae64359724d4ac9c673ea05.jpg"},
        {file: "/home/pi/Pictures/Pokemon/IMG_20191225_232529.jpg"},
        {file: "/home/pi/Pictures/Pokemon/bef1c3c5d46e33df80df6cff78a7304b.png"},
        {file: "/home/pi/Pictures/Pokemon/16a979872ca225eaa04caae38edb91e7.jpg"},
        {file: "/home/pi/Pictures/Pokemon/Vaporeon.png"},
        {file: "/home/pi/Pictures/Pokemon/latios_furret.png"},
        {file: "/home/pi/Pictures/Pokemon/espurr_w_coffe.jpg"},
        {file: "/home/pi/Pictures/Pokemon/coffee_furret_blep.png"},
        {file: "/home/pi/Pictures/Pokemon/bulbasaur_approves.png"},
        {file: "/home/pi/Pictures/Pokemon/adorable_dancing_eevee.gif"},
        {file: "/home/pi/Pictures/Pokemon/shifty_zorua.png"},
        {file: "/home/pi/Pictures/Pokemon/scratching_lu.jpg"},
        {file: "/home/pi/Pictures/Pokemon/LOLchu.png"},
        {file: "/home/pi/Pictures/Pokemon/190-1905366_photo-jolteon-banana.jpg"},
        {file: "/home/pi/Pictures/Pokemon/41d.jpg"},
        {file: "/home/pi/Pictures/Pokemon/5f6.jpg"},
        {file: "/home/pi/Pictures/Pokemon/045.jpg"},
        {file: "/home/pi/Pictures/Pokemon/1527511379_tumblr_p2vbt6t10v1qegkw5o1_500.gif"},
        //      {file: "/home/pi/Pictures/Pokemon/"},
];
    
        var poke = poke[Math.floor(Math.random()*(poke.length))]
        message.channel.send(poke);
        }});
