const snekfetch = require('snekfetch');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  message.mentions.users.first() !== undefined ? person = message.mentions.users.first() : person = message.author
  const avatar = person.displayAvatarURL({format : 'png'})
  const pls = snekfetch.get(`http://api.anidiots.guide/api/beautiful/?avatar=${avatar}`).set("token", "Oe3S8aiv7D2gNWqj/oDv");
  message.channel.send({ files: [{ attachment: pls.body, name: 'beautiful.jpg' }] });
}
