<<<<<<< HEAD
module.exports = {
    name : 'ping',
    description: 'Pong!',
    //devOnly: Boolean,
    testOnly: true,
    //options: Object[]
    //deleted: Boolean

    callback: async ( client, interaction) => {
        await interaction.deferReply();
        
        const reply = await interaction.fetchReply();

        const ping = reply.createdTimestamp - interaction.createdTimestamp;

        interaction.editReply (
            `Pong! Client ${ping}ms | Websocket: ${client.ws.ping}ms`
        )
    }







    /*
    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`)
    }
    */  
=======
module.exports = {
    name : 'ping',
    description: 'Pong!',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //options: Object[]
    //deleted: Boolean

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}ms`)
    }
>>>>>>> 4995ba2a94ed14dd2dd64610399d430e89f5a899
}