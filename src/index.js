require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
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
    ID:             ${message.id}
    Channel (+ID):  ${message.channel} - ${message.channelId}
    Typ (URL):      ${message.type} (https://s.lain.la/Svbnh )
    Url:            ${message.url}
    Bot:            ${message.author.bot}
    }
  ------------------------------------------------------------------------------------------------------------------------------------`)
  })



client.login(process.env.TOKEN);