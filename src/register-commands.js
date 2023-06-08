require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, maxLength } = require('discord.js');


const commands = [
  {
    name: 'add',
    description: 'Adds two numbers.',
    options: [
      {
        name: 'first-number',
        description: 'The first number.',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
      {
        name: 'second-number',
        description: 'The second number.',
        type: ApplicationCommandOptionType.Number,
        required: true,
      },
    ],
  }, 
  {
    name: 'wordle',
    description: 'Spiele das beliebte wörter raten spiel',
    options: [
      {
        name: 'wort',
        description: 'Gebe hier ein fünfstelliges Wort ein',
        type: ApplicationCommandOptionType.String,
        
        required: true,
        
      },
    ],

  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
        console.log('Registering slash commands...');

    await rest.put(
        Routes.applicationCommands(
        (process.env.CIELENT_ID),
        (process.env.GUILD_ID),
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();     





