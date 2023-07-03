const { EmbedBuilder,
    Client,
    Interaction,
    Message,
    Guild,
    } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Gibt die Serverinformationen zurück',

    callback:  async ( interaction, guild, message ) => {
        
        /**
        *
        * @param {Client} client
        * @param {Interaction} interaction
        * @param {Message} message
        * @param {Guild} guild
        */



        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/AfFp7pu.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    
    interaction.reply({ embeds: [exampleEmbed] });
        
}}


/*
const { EmbedBuilder, GuildChannel, AnonymousGuild, GuildChannelManager, SlashCommandBuilder } = require('discord.js');

module.exports = {
  name: 'serverinfo',
  description: 'Gibt Informationen über den Server zurück',




    callback: async (message, interaction) => {
        


        const { guild } = interaction;
        const { members } = guild;
        const { name, ownerId, createdTimestamp, memberCount } = guild;
        const icon = guild.iconURL()
        const roles = guild.roles.cache.size;
        const emojis = guild.emojis.cache.size;
        const id = guild.id 


        let baseVerification = guild.VerificationLevel;

        
        if (baseVerification == 0 ) baseVerification = "None"
        if (baseVerification == 1 ) baseVerification = "Niedrig"
        if (baseVerification == 2 ) baseVerification = "Medium"
        if (baseVerification == 3 ) baseVerification = "Hoch"
        if (baseVerification == 4 ) baseVerification = "Sehr Hoch"

        const embed = new EmbedBuilder()
        .setColor('Blue')
        //.setTitle('Serverinformationen')
        .setTimestamp()
        .setAuthor({name: name, iconURL: icon})
        .addFields('Owner', guild.owner.user.tag, true)
        .addFields('Mitglieder', guild.memberCount, true)
        .addFields('Erstellt am', guild.createdAt.toDateString(), true)
        .addFields('Region', guild.region, true)
        .addFields('Anzahl der Textkanäle', guild.channels.cache.filter(c => c.type === 'GUILD_TEXT').size, true)
        .addFields('Anzahl der Sprachkanäle', guild.channels.cache.filter(c => c.type === 'GUILD_VOICE').size, true)
        //.setThumbnail(icon)
        .setFooters({ name: `Server-ID: ${guild.id}`});

      await interaction.reply({ embeds: [embed] });
    
  },
};
*/