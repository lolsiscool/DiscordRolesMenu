Trigger = Discord: message.create

// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let message = context.params.event.content;

if (message.startsWith(`${process.env.PREFIX}removeroles`)) {
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848777659873886248`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848777771827462154`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848779449294258196`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848779514737328140`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848779605712175126`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848779704144363540`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848779771747369030`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848779844921065522`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848779931416133632`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });
  await lib.discord.guilds['@0.1.0'].members.roles.destroy({
    role_id: `848780007937146880`,
    user_id: `${context.params.event.author.id}`,
    guild_id: `${context.params.event.guild_id}`,
  });

  await lib.discord.channels['@0.1.1'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `:ballot_box_with_check: \n All Set! All self-roles removed for <@!${context.params.event.author.id}>`,
  });
}
