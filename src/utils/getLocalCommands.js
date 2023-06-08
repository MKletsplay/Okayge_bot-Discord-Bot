<<<<<<< HEAD
const path = require('path');
const getAllFiles = require('./getAllFiles');

module.exports = (exceptions = []) => {
  let localCommands = [];

  const commandCategories = getAllFiles(
    path.join(__dirname, '..', 'commands'),
    true
  );

  for (const commandCategory of commandCategories) {
    const commandFiles = getAllFiles(commandCategory);

    for (const commandFile of commandFiles) {
      const commandObject = require(commandFile);

      if (exceptions.includes(commandObject.name)) {
        continue;
      }

      localCommands.push(commandObject);
    }
  }

  return localCommands;
};
=======
const  path = require ('path') 
const getAllfiles = require('./getAllFiles')

module.exports = (exceptions = []) => {
    let localCommands =  [];
    
    const commandCategories = getAllfiles(
        path.join(__dirname, '..', 'commands'),
        true
    )

        for (const commandCategory of commandCategories) {
            const commandFiles = getAllfiles(commandCategory);

            for (const commandFile of commandFiles) {
                const commandObject = require(commandFile);

                if (exceptions.includes(commandObject.name)) {
                    continue;
                }


                
                localCommands.push(commandObject);
            } 
        }


    

    return localCommands;
}
>>>>>>> 4995ba2a94ed14dd2dd64610399d430e89f5a899
