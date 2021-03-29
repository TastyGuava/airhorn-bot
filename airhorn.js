var Discord = require('discord.js');
var bot = new Discord.Client();
var config = ('./config.json');

bot.user.setStatus('avaliable');
  bot.user.setPresence({
    game: {
      name: `with airhorns!`,
      type: "PLAYING"
    }
  });

bot.on('message', message => {
  if (message.content === '!airhorn')
  {
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
    const dispatcher = connection.playFile('./Audio/airhorn.mp3');
    dispatcher.on("end", end => {
      voiceChannel.leave();
      });
  }).catch(err => console.log(err));
  }
});

bot.login(config.bot_token);