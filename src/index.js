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


/*
client.on('ready', (client) => {
  console.log(`------------------------------------------------------------------------------------------------------------------------------------`);
    console.log(`${client.user.tag} is online ✅`);
    console.log(`------------------------------------------------------------------------------------------------------------------------------------`);
    
});

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
  
client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }
  
  
  if (message.content === "ping") {
    message.reply("Pong!")
  }



});


client.on('messageCreate', (msg) => {
  // Überprüfen, ob die Nachricht vom Bot selbst oder einem anderen Bot stammt
  if (msg.author.bot) { 
    return;
  }
    // Überprüfen, ob die Nachricht einen Twitch-Link enthält
  if (msg.content.includes('github.com')) {
      
    // Nachricht löschen
    console.log(`
  ${msg.author.tag}
  ${msg.content}
  ${msg.createdAt}`)
      
    msg.delete();
    console.log(`
  Der Link wurde gelöcht, da er die github.com URL beinhaltete ✅`)
  }


  
});



client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'add'){
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`The sum is ${num1 + num2}`);
    
    console.log(`Num1 is ${num1}`)
    console.log(`Num1 is ${num2}`)
    console.log(`The sum is ${num1 + num2}`);
    

    console.log(`
------------------------------------------------------------------------------------------------------------------------------------
    `)
  }


});


client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  
 if (interaction.commandName === 'wordle'){
      
  const Nachricht = interaction.options.get('wort').value;
  
  
    
    
    //Array mit allen Wörtern
    const months = ["January", "January", "January", "January", "January", "January", "July", "January", "January", "January", "January", "January", "January", "July"]; 

    const random_number = Math.round(Math.random() * months.length); //Findet ein zufälliges Wort aus dem Array
    let monat = months[random_number]; //Sucht den Monat aus dem Array 


    
 


    console.log(`
------------------------------------------------------------------------------------------------------------------------------------
    `)
    console.log(`Worlde Quiz wurde von '${interaction.user.tag}' betätigt`)
    console.log(random_number, months[random_number]);
    console.log(`Monat: ${monat}`);
    console.log(`Array Nummer: ${random_number}`);
    console.log(`Benutzer Nachricht: '${Nachricht}'`); 

    

    

    if (interaction.options.get('wort').value === monat){
      interaction.reply(`Du hast gewonnen`)
      

      //console.log(`Der Benutzer '${interaction.user.tag.split("#")[0]}' hat gewonnen 🎉`)
      console.log(`Der Benutzer '${interaction.user.username}' hat gewonnen 🎉`)

      console.log(`------------------------------------------------------------------------------------------------------------------------------------`)

    }
 }
 



});



*/

client.login(process.env.TOKEN);
//client.login("MTA4NjQwMTc1MTQzNzAyMTE5NA.GndAMa.-uR7PCEkOvfb3uO500ollf0Bwlwh_ofR2nIg5Y");