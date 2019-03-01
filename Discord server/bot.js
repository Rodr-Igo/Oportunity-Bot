const Discord = require("discord.js");
const prefix = "|";
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", () => {
  console.log(`Bot is ready!  ${bot.user.username}`);
  bot.generateInvite(["ADMINISTRATOR"]).then(link => {
    console.log(link);
  });
});

bot.login("NTUwMTE1OTAzOTkyMjMzOTg1.D1tIQQ.-pUQOkO3V9DLqeUE0_EhFv-531M");

bot.on("message", (message) => {
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.channel.sendMessage("Hi, I am oportuniy Rover and my creator is IGO#5716,he is fixing me right now if u would like to help here is the respository: https://github.com/Rodr-Igo/Oportunity-Bot  -bep- bop-");

  if(!command.startsWith(prefix)){
    if (message.content.startsWith("ping!")) {
      message.channel.send("pong!");
    } else

    if (message.content.startsWith("foo")) {
      message.channel.send("bar!");
    }
    else

    if (message.content.startsWith("Cir!")) {
      message.channel.send("Culo!");
    }
  }

  if(message.channel.name === "welcome"){
    console.log("User sent a message in the welcome channel");
    switch (message.content) {
      case "Acepto":
      message.delete();
      console.log("User Agree to terms and rules")
      let role = message.guild.roles.find(role => role.name === "Undifined Character");
      message.member.addRole(role);
      message.author.send("Felicitaciones ya eres parte del crew!");
        break;

      case "I am a developer":
      message.delete();
      console.log("User Agree to terms and rules")
      let LIS = message.guild.roles.find(role => role.name === "LIS");
      message.member.addRole(LIS);
      message.author.send("Felicitaciones ya eres parte del crew!");
        break;

      case "BootyCall":
      message.delete();
      console.log("User Agree to terms and rules")
      let Booty = message.guild.roles.find(role => role.name === "Horizon Squad");
      message.member.addRole(Booty);
      message.author.send("Felicitaciones ya eres parte del crew!");
        break;

      default:
      message.delete();
      break;
    }
    /*
    if(message.content === "Acepto"){
      message.delete();
      console.log("User Agree to terms and rules")
      let role = message.guild.roles.find(role => role.name === "Undifined Character");
      message.member.addRole(role);
      message.author.send("Felicitaciones ya eres parte del crew!");
    }
    else{
      message.delete()
      .then(msg => console.log(`Deleted message from ${msg.author.username}`))
      .catch(console.error);
    }
    */
  }

  if (command === prefix){
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //Pedir Cubiculos/Asignar cubiculos
    if(command === "CubiculosDisponibles"){

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
});

//Pedir Cubiculos

//FixiT
function addUserRole(roleName, message) {
  let role = message.guild.roles.find(role => role.name === roleName);

  if (!role){ return message.reply('I can\'t seem to find that role.');}
  else {
      return;
  }

  try {
        message.member.addRole(role);
        message.channel.send(`I've added the ${name} role to ${member.dsiplayName}.`);
      } catch (e) {
        console.log(e);
      }
}
