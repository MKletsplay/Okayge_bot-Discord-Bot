const { Client, Interaction, ApplicationCommandOptionType, PermissionFlagsBits, InteractionCollector, InteractionResponse } = require('discord.js')
module.exports = {
    name : 'ban',
    description: 'Bannt einen Benutzer von dem Server.',
    //devOnly: Boolean,
    //testOnly: Boolean,
    options: [
        {
            name: 'user',
            description: 'Der Benutzer der gesperrt werden soll.',
            type: ApplicationCommandOptionType.Mentionable,
            required: true,
        },
        {
            name: 'grund',
            description: 'Der Grund warum der Benutzer gesperrt werden soll.',
            type: ApplicationCommandOptionType.String,
        },
    ],

    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers],


    
    callback: (client, interaction) => {
        interaction.reply(`Ban...`)
    }
}







/*



module.exports = { 
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     
    
    
    
    
    
    
    */
/*
    callback:  async (client, interaction) => {
        const targetUserId = interaction.options.get('user').value;
        const reason = interaction.options.get('grund')?.value || "Keinen Grund hinzugefügt";

        await Interaction.deferReply()

        const targetUser = await interaction.guild.members.fetch(targetUserId);

        if (!targetUser) {
            await interaction.editReply("Dieser User ist nicht mehr auf dem Server.");
            return;
        }

        if (targetUser.id === interaction.guild.ownerId) {
            await interaction.editReply("Du kannst diesen Benutzer nicht bannen, da er der Servereigentümer ist.");
            return;
        }


        const targetUserRolePosition = targetUser.roles.highest.position; // Höchste Rang  von dem zubannenden User 
        const requestUserRolePosition = interaction.member.roles.highest.position; // Höchste Rang von dem Benutzer der den cmd betätigt
        const botRolePostition = interaction.guild.members.me.roles.highest.position; // Höchste Rang des Bots

        if (targetUserRolePosition >= requestUserRolePosition) {
            await interaction.editReply("Du kannnst dieses Benutzer nicht bannen, da er die gleichen/höheren Rang hat als du.")
            return;
        }

        if (targetUserRolePosition >= botRolePostition) {
            await interaction.editReply("Ich kann dieses Benutzer nicht bannen, da er die gleichen/höheren Rang hat als ich.")
            return;
        }

        // Benutzer Bannen#
        try {
            await targetUser.ban({ reason })
            await interaction.editReply(`Benutzer ${targetUser} wurde gebannt\n Reason ${reason}.`)
        } catch (error) {
            console.log(`Es gab einen Fehler beim bannen von dem Beutzer: ${error}`)
        }
    },

    name: 'ban',
    description: 'Bannt einen Benutzer von dem Server.',
    options: [
        {
            name: 'user',
            description: 'Der Benutzer der gesperrt werden soll.',
            type: ApplicationCommandOptionType.Mentionable,
            required: true,
        },
        {
            name: 'grund',
            description: 'Der Grund warum der Benutzer gesperrt werden soll.',
            type: ApplicationCommandOptionType.String,
        },
    ],
    

    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers],
}
*/