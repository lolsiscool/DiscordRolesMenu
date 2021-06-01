// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async (event, context) => {
  let guild = await lib.discord.guilds['@0.0.2'].retrieve({
    guild_id: event.guild_id,
  });

  let message = context.params.event.content;

  if (message.startsWith(`${process.env.PREFIX}roles`)) {
    await lib.discord.channels['@0.1.1'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `I've DM'ed you, Open to continue!`,
      message_reference: {
        message_id: `${context.params.event.id}`,
        channel_id: `${context.params.event.channel_id}`,
        guild_id: `${context.params.event.guild_id}`,
      },
    });

    await lib.discord.users['@0.1.1'].dms.create({
      recipient_id: `${context.params.event.author.id}`,
      content: `Let's give you some Roles in **${guild.name}** `,
      components: [
        {
          type: 1,
          components: [
            {
              type: 2,
              label: 'Start',
              style: 3,
              custom_id: 'roles-start',
            },
            {
              type: 2,
              label: 'Nevermind',
              style: 4,
              custom_id: 'roles-delete',
            },
          ],
        },
      ],
    });
  }

  let channels = await lib.discord.guilds['@0.0.2'].channels.list({
    guild_id: event.guild_id,
  });
};
