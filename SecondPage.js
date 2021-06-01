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
        name: `${process.env.PREFIX}Command6`,
        value: "Description of Command."
      },{
        name: `${process.env.PREFIX}Command7`,
        value: "Description of Command"
      },{
        name: `${process.env.PREFIX}Command8`,
        value: "Description of Command"
      },{
        name: `${process.env.PREFIX}Command9`,
        value: "Description of Command"
      },{
        name: `${process.env.PREFIX}Command10 `,
        value: "Description of Command"
      }
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
                {
                    type: 2,
                    style: 2,
                    emoji: {name: "◀️"},
                    custom_id: "help-firstpage"
                },
                
            ]
    
        }
    ]
  });
  