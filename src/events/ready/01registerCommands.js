<<<<<<< HEAD
const { testServer } = require('../../../config.json');
const areCommandsDifferent = require('../../utils/areCommandsDifferent');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (client) => {
  try {
    const localCommands = getLocalCommands();
    const applicationCommands = await getApplicationCommands(
      client,
      testServer
    );

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      );

      if (existingCommand) {
        if (localCommand.deleted) {
          await applicationCommands.delete(existingCommand.id);
          console.log(`🗑 Deleted command "${name}".`);
          continue;
        }

        if (areCommandsDifferent(existingCommand, localCommand)) {
          await applicationCommands.edit(existingCommand.id, {
            description,
            options,
          });

          console.log(`🔁 Edited command "${name}".`);
        }
      } else {
        if (localCommand.deleted) {
          console.log(
            `⏩ Skipping registering command "${name}" as it's set to delete.`
          );
          continue;
        }

        await applicationCommands.create({
          name,
          description,
          options,
        });

        console.log(`👍 Registered command "${name}."`);
      }
    }
  } catch (error) {
    console.log(`TThere was an error: ${error}`);
  }
};
=======
const { testServer } = require('../../../config.json');
const areCommandsDiffrent = require('../../utils/areCommandsDiffrent');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports =  async (client) => {
    
    try {
        const localCommands = getLocalCommands();
        const applicationCommands = await getApplicationCommands(client, testServer)

        for (const localCommand of localCommands) {
            const { name, description, options } = localCommand;

            const existingCommand = await applicationCommands.catch.find(
                (cmd) => cmd.name === name
            );

            if (existingCommand) {
                if (localCommand.deleted){
                    await applicationCommands.deleted(existingCommand.id);
                    console.log(`🗑️ Gelöschter Command: "${name}".`);
                    continue;
                }
                
                if (areCommandsDiffrent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                    })

                    console.log(`🔂 Bearbeiteter Command: "${name}".`)

                } 
            } else {
                if (localCommand.deleted) {
                    console.log(`⏩ Skipping registering command "${name}" as it's set to delete.`)
                    continue;
                }

                await applicationCommands.create({
                    name,
                    description,
                    options,
                })


                console.log(`👍 Registrierte Commands "${name}".`)
            }
        }
    } catch (error) {
        console.log(`Es gab einen Fehler: ${error}`)
    }
};
>>>>>>> 4995ba2a94ed14dd2dd64610399d430e89f5a899
