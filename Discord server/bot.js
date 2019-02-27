const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () => {
  console.log(`Bot is ready!  ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link);
  });
});

bot.login("NTUwMTE1OTAzOTkyMjMzOTg1.D1dv4w.LG6kv8SK09Q1wxMrvgo1n0769ws");
bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.channel.sendMessage("Hi, I am oportuniy Rover and my creator is IGO#5716,he is fixing me right now if u would like to help here is the respository: https://github.com/Rodr-Igo/Oportunity-Bot  -bep- bop-");
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  } else

  if (message.content.startsWith("foo")) {
    message.channel.send("bar!");
  }
});
