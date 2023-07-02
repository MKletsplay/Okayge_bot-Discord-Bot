require('dotenv').config();
const { Client, IntentsBitField, GuildChannel } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
eventHandler(client);





client.on('messageCreate', (message)=> {

  console.log(`${message.author.tag}: ${message} 
    
  Nachricht Informationen:
    {
    Zeitpunkt:      ${message.createdAt} 
    Nachricht-ID:   ${message.id}
    Channel (+ID):  ${message.channel.name} - ${message.channelId}
    Typ (URL):      ${message.type} (https://s.lain.la/Svbnh )
    Url:            ${message.url}
    Bot:            ${message.author.bot}
    }
  ------------------------------------------------------------------------------------------------------------------------------------`)
  })



  client.on('messageCreate', (message) => {

    if (message.author.bot == true) {
      message.delete()
    }

  })

  
client.login(process.env.TOKEN);