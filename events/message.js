exports.run = async (client, message) => {
  const prefix = ('fsh.');
  let command = message.content.split(' ')[0].slice(prefix.length);
  let args = message.content.split(' ').slice(1);
  
  if (message.author.bot) return undefined;
  if (!message.content.startsWith(prefix)) return undefined;
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, args);
  }
}
