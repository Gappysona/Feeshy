exports.run = async (client, message, args, users) => {
    //console.log(users)
    if(!users.includes(message.author.id)) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'eval',
  description: '',
  usages: 'eval'
};