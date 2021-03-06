module.exports.run = async (bot, msg, args, embed) => {
  embed.setTitle(`${bot.user.username} - Info`)
     .setDescription(`
Wikidustry is a Discord bot that can display Mindustry wiki.

**  - Intuitive syntax
  - Information about all blocks
  - Handy command aliases**
and much more!

[Invite ${bot.user.username} to your server](https://discordapp.com/api/oauth2/authorize?client_id=683434141198319739&permissions=388160&scope=bot)
`)
     .setFooter(`${bot.user.username} by b1tt#4661 & Em1t#2527 | Command used by: ${msg.author.tag}`, bot.user.displayAvatarURL())   
  
  msg.channel.send(embed);
};

module.exports.help = {
  name: "Info",
  description: "Info about Wikidustry",
  usage: "Info",
  aliases: ["info", "i"]
}; 