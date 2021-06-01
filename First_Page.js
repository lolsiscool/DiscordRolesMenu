// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.1'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: `Alright Here Are some of my commands!`,
  embed: {
    title: "Commands",
    type: "rich",
    description: "Here are the many commands I can Execute",
    color: 0xB7FFD8,
    footer: {
      text: "Use the arrows below to scroll."
    },
    fields: [{
      name:`${process.env.PREFIX}help`,
      value: "Shows this prompt and these commands."
    },{
      name: `${process.env.PREFIX}roles`,
      value: "Gives you different roles in the server!"
    },{
      name: `${process.env.PREFIX}removeroles`,
      value: "Removes all the roles given with `!roles`"
    },
    ]
  },
  components: [
      {
          "type": 1,
          "components": [
              {
                  type: 2,
                  label: "Exit",
                  style: 4,
                  custom_id: "help-exit"
              },
              
              
          ]
  
      }
  ]
});
