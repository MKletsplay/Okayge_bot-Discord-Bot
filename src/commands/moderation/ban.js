const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');
  
  module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
  
    callback: async (client, interaction) => {
      const targetUserId = interaction.options.get('target-user').value;
      const reason =
        interaction.options.get('reason')?.value || 'No reason provided';
  
      await interaction.deferReply();
  
      const targetUser = await interaction.guild.members.fetch(targetUserId);
  
      if (!targetUser) {
        await interaction.editReply("That user doesn't exist in this server.");
        return;
      }
  
      if (targetUser.id === interaction.guild.ownerId) {
        await interaction.editReply( 
          "You can't ban that user because they're the server owner."
        );
        return;
      }
  
      const targetUserRolePosition = targetUser.roles.highest.position; // Highest role of the target user
      const requestUserRolePosition = interaction.member.roles.highest.position; // Highest role of the user running the cmd
      const botRolePosition = interaction.guild.members.me.roles.highest.position; // Highest role of the bot
  
      if (targetUserRolePosition >= requestUserRolePosition) {
        await interaction.editReply(
          "You can't ban that user because they have the same/higher role than you."
        );
        return;
      }
  
      if (targetUserRolePosition >= botRolePosition) {
        await interaction.editReply(
          "I can't ban that user because they have the same/higher role than me."
        );
        return;
      }
  
      // Ban the targetUser
      try {
        await targetUser.ban({ reason });
        await interaction.editReply(
          `User ${targetUser} was banned\nReason: ${reason}`
        );
      } catch (error) {
        console.log(`There was an error when banning: ${error}`);
      }
    },
  
    name: 'ban',
    description: 'Bans a member from this server.',
    options: [
      {
        name: 'target-user',
        description: 'The user you want to ban.',
        type: ApplicationCommandOptionType.Mentionable,
        required: true,
      },
      {
        name: 'reason',
        description: 'The reason you want to ban.',
        type: ApplicationCommandOptionType.String,
        
      },
    ],
    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.BanMembers],
  };
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

        // Benutzer Bannen
        try {
            await targetUser.ban({ reason })
            await interaction.editReply(`Benutzer ${targetUser} wurde gebannt\nReason ${reason}.`)
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