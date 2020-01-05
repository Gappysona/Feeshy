exports.run = async (client, message, args) => {

    typeRoles = [
    '663319051745099785', //normal
    '663319542197387274', //grass
    '663319746434826250', //fire
    '663319954405195778', //water
    '663320093987700736', //fighting
    '663320246970744833', //flying
    '663320429162922005', //poison
    '663320623254077450', //ground
    '663320753290215434', //rock
    '663321166831943682', //bug
    '663321324546031620', //ghost
    '663321449976823808', //electric
    '663321647000059917', //psychic
    '663322008603459604', //ice
    '663322170562183173', //dragon
    '663322299604140053', //dark
    '663322489828409344', //steel
    '663322633521070100'  //fairy
    ]

    ageRoles = [
    '663106616295424050', //over18
    '663106677045985316'  //under18
    ]

    //POKEMON TYPE ROLES
    const role = message.guild.roles.find(r => r.name === `${args.join(' ')}`);
    //console.log(`args[0]=${args[0]}, role=${role}`)
    if (!role) return message.channel.send(`I couldn't find a role named **${args.join(' ')}**, are you sure you spelled it correctly? Roles are case-sensitive!`).then(m => m.delete(10000));
    if (typeRoles.includes(role.id)) {
      if (!message.member.roles.has(role.id)) {
          message.member.addRole(role).catch(console.error);
          message.channel.send(`Done~! You now have **${args.join(' ')}**.`)
      } else {
          message.member.removeRole(role).catch(console.error);
          message.channel.send(`Done~! You no longer have **${args.join(' ')}**.`)
          return;
        };
    };

    //AGE ROLES
    if (ageRoles.includes(role.id)) {
      if (message.member.roles.has('663106616295424050'||'663106677045985316')) {
        message.channel.send(`You cannot change your age role, contact a moderator!`)

      } else {
        message.member.addRole(role).catch(console.error);
        message.channel.send(`You have been marked as **${args.join(' ')}**! You can no longer change this, ask a moderator if you have made a mistake.`)
        return;
        };
    };

    //NEWSLETTER ROLE
    if (!message.member.roles.has('658759457928511488')) {
      message.member.addRole(role).catch(console.error);
      message.channel.send(`Done~! You now have **${args.join(' ')}**.`)
    } else {
      message.member.removeRole(role).catch(console.error);
      message.channel.send(`Done~! You no longer have **${args.join(' ')}**.`)
      return;
      };

};
  exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: []
  };
  exports.help = {
    name: 'iam',
    description: '',
    usages: 'iam'
  };