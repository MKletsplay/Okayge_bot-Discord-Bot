<<<<<<< HEAD
module.exports = async (client, guildId) => {
    let applicationCommands;
  
    if (guildId) {
      const guild = await client.guilds.fetch(guildId);
      applicationCommands = guild.commands;
    } else {
      applicationCommands = await client.application.commands;
    }
  
    await applicationCommands.fetch();
    return applicationCommands;
  };
=======
module.exports =  async (client, guild) => {
    let applicationCommands;

    if (guildId) {
        const guild = await client.guilds.fetch(guildId);
        applicationCommands = guild.commands;
    } else {
        applicationCommands = await client.application.commands
    }


    await applicationCommands.fetch();
    return applicationCommands
} 
>>>>>>> 4995ba2a94ed14dd2dd64610399d430e89f5a899
