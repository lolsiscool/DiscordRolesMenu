// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.1'].messages.update({
  message_id: `${context.params.event.message.id}`,
  channel_id: `${context.params.event.message.channel_id}`,
  content: ":white_check_mark:",
  embed: {
    title: "Your all set!",
    description: "Thanks for Getting some awesome new roles in the server! \n :exclamation: | If you'd like to remove all our roles and restart use `!clearroles` in the server",
    color: 0x79B791,
  }
});