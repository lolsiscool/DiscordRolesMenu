// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.1'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: `**Server Roles**`,
  embed: {
    title: `Pronoun Roles`,
    description: `Click the Buttons for the Appropriate Roles \n :male_sign: for He/Him \n :female_sign: for She/Her \n :person_standing: for They/Them \n :question: for Other`,
    color: 0x7189ff,
  },
  components: [
    {
      type: 1,
      components: [
        {
          type: 2,
          style: 1,
          emoji: {name: '♂️'},
          custom_id: 'roles-male',
        },
        {
          type: 2,
          style: 1,
          emoji: {name: '♀️'},
          custom_id: 'roles-female',
        },
        {
          type: 2,
          style: 1,
          emoji: {name: '🧍'},
          custom_id: 'roles-they',
        },
        {
          type: 2,
          style: 1,
          emoji: {name: '❓'},
          custom_id: 'roles-other',
        },
        {
          type: 2,
          style: 3,
          label: 'Next',
          custom_id: `roles-prompttwo`,
        },
      ],
    },
  ],
});
