const Discord = require("discord.js");
const fs = require('fs');
const client = new Discord.Client();
require('dotenv').config()
client.login(process.env.LOGIN);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", msg => {
    if(!msg.guild || msg.author.bot || msg.content.indexOf(process.env.PREFIX) !== 0) return;
    if(!client.user.bot && msg.author.id !== "216901800899510272") return;
    const args = msg.content.split(/\s+/g);
    const command = args.shift().slice(process.env.PREFIX.length).toLowerCase();
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, msg, args);
    } catch (err) {
      client.users.get(process.env.OWNER).send("<:tickNo:315009174163685377> **Error**\n```"+err+"```");
    }
});