const { EmbedBuilder } = require("@discordjs/builders");

module.exports = {
    name: 'serverinfo',
    description: 'Gibt die Serverinformationen zurück',

    callback:  async ( message, interaction ) => {
        
        const { guild } = interaction;
        /*
        if (!message.inGuild()) {
            interaction.reply({
                content: "Diese Command kann nur innerhalb eines Servers ausgeführt werden.",
                ephemeral: true,
            });
            return;
        }*/
        
    

    const serverInfoEmbed = new EmbedBuilder({
        author: { name: guild.name, iconURL: guild.iconURL({ size: 256 }) },

        fields: [
            { name: 'Owner', value: (await guild.fetchOwner()).user.tag, inline: true },
            { name: 'Text Channels', value: guild.channels.cache.filters((c) => c.type === 0 ).toJSON().lenght, inline: true },
            { name: 'Voice Channels', value: guild.channels.cache.filters((c) => c.type === 2 ).toJSON().lenght, inline: true },
            { name: 'Caterory Channels', value: guild.channels.cache.filters((c) => c.type === 4 ).toJSON().lenght, inline: true },
            { name: 'Members', value: guild.memberCount, inline: true },
            { name: 'Roles', value: guild.roles.cache.size - 1, },
            { name: 'Roles List', value:guild.roles.cache.toJSON().join(', ')}
        ],


        footer: { text : `ID: ${guild.id} | Server erstellt: ${guild.createdAt.toDateString()}`}
    })

        interaction.reply({ embeds: [serverInfoEmbed] });
    }
}