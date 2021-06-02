// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.guilds['@0.1.0'].members.roles.update({
  role_id: `848779844921065522`,
  user_id: context.params.event.user.id,
  guild_id: `848056951933894676`
});

