const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    const subreddits = [
        "Boobs_Gifs",
        "Boobs_gif",
        "Boobs_Flashing_Gif",
        "BoobsGifs",
        "BoobsFlashingGif",
        "TEEN_BOOBS_GIFS",
        "BIGBOOBSGIF",
        "BoobsGif"
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor(0xffa500)
                    .setImage(url)
                message.channel.send({ embed });
        })
}
