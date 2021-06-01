Trigger = Discord: message.button.interaction, custom_id: "roles-delete"

// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.1'].messages.destroy({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`
});
