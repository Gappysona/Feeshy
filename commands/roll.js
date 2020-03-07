exports.run = async (client, message, args) => {
    var converter = require('number-to-words');
    var numDice = args[0];
    if (!numDice) {
        var numDice = '1';
    }
    if (!typeof numDice == 'number') {
        return
    } else if ((numDice > 20) || (numDice < 1)) {
        return
    } else {
    var diceRollList = [
    ]
    for (var i = 0; i < numDice; i++) {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        diceRollList.push(diceRoll)
    };
  };
  
  if (numDice == 1) {
    message.channel.send(`A die was rolled. It landed on a **` + converter.toWords(diceRollList) + ` (${diceRollList.reduce((a, b) => a + b)})**.`).then(message.delete());
  } else {
  message.channel.send(`` + numDice + ` dice were rolled. The sum total is **${converter.toWords(diceRollList.reduce((a, b) => a + b))} (${diceRollList.reduce((a, b) => a + b)})**. They landed in the sequence below.\n||**\`` + diceRollList.join(', ') + `\`**||`).then(message.delete());
  }
};
    exports.conf = {
      enabled: true, 
      guildOnly: false,
      aliases: ['dice']
    };
    exports.help = {
      name: 'roll',
      description: '',
      usages: 'roll'
    };