Trigger = Discord: message.button.interaction, custom_id: roles-prompttwo

// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.1'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: `**Server Roles**`,
  embed:{
    title: `Server Ping Roles`,
    description: `Click the Buttons for the Appropriate Roles \n :mega: for Announcements \n :video_game: for Events \n :tools: for Status`,
    color: 0x7189FF, 
  },
  components: [
    {
      type: 1,
      components: [
        {
          type: 2,
          style: 1,
          emoji: {name: "📣"},
          custom_id: 'roles-announcements',
        },
       {
          type: 2,
          style: 1,
          emoji: {name: "🎮"},
          custom_id: 'roles-events',
        },
         {
          type: 2,
          style: 1,
          emoji: {name: "⚒️"},
          custom_id: 'roles-status',
        },
        {
          type: 2,
          style: 3,
          label: "Next",
          custom_id: `roles-promptthree`
        },
      ],
    },
  ],
  
});
