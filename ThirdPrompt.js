Trigger = Discord: message.button.interaction, custom_id: roles-promptthree

// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.1'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: `**Server Roles**`,
  embed: {
    title: `Server Team Roles`,
    description: `Click the Buttons for the Appropriate Roles \n :red_circle: for Red Team \n :yellow_circle: for Yellow Team \n :purple_circle: for Purple Team`,
    color: 0x7189ff,
  },
  components: [
    {
      type: 1,
      components: [
        {
          type: 2,
          style: 1,
          emoji: {name: '🔴'},
          custom_id: 'roles-redteam',
        },
        {
          type: 2,
          style: 1,
          emoji: {name: '🟡'},
          custom_id: 'roles-yellowteam',
        },
        {
          type: 2,
          style: 1,
          emoji: {name: '🟣'},
          custom_id: 'roles-purpleteam',
        },
        {
          type: 2,
          style: 4,
          label: 'Finish',
          custom_id: `roles-finish`,
        },
      ],
    },
  ],
});
