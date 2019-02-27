const Discord = require("discord.js");
const prefix = "|";
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`Bot is ready!  ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link);
  });
});

bot.login("NTUwMTE1OTAzOTkyMjMzOTg1.D1dv4w.LG6kv8SK09Q1wxMrvgo1n0769ws");
bot.on(`guildMemberAdd`, member =>){

}

bot.on("message", async (message) => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.channel.sendMessage("Hi, I am oportuniy Rover and my creator is IGO#5716,he is fixing me right now if u would like to help here is the respository: https://github.com/Rodr-Igo/Oportunity-Bot  -bep- bop-");

  if(!command.startsWith(prefix)) return;

  if(message.channel.name === "welcome"){
    console.log("User sent a message in the welcome channel");

    if(message.content.toLowerCase() === `acepto`){
      console.log("User Agree to terms and rules")
      addUserRole(`Undifined Character`,message);
      message.author.send("Felicitaciones ya eres parte del crew!");
    }
    else{
      message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
    }
  }

  if (command === `${prefix}userinfo`){
     let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username)
     .setDescription("This is the user's info!")
     .setColor("#01A9DB")
     .addField("Full Userame", `${message.author.username}#${message.author.discriminator}`)
     .addField("ID", message.author.id)
     .addField("Created At", message.author.createdAt);
     message.channel.sendMessage(embed);
  }
  if (message.content.startsWith("acepto")) {
    message.channel.send("pong!");
  } else

  if (message.content.startsWith("foo")) {
    message.channel.send("bar!");
  }
});

function addUserRole(roleName, message) {
  var role = message.guil.roles.find(`name`, roleName);
  message.member.addRole(role.id);
  return;
}
