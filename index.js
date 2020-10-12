const express = require('express');
const opusscript = require('opusscript');
const ffmpeg = require('ffmpeg');
const sodiumjs = require('sodiumjs');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Welcome to Bagel Bot Javascript Edition'));

app.listen(port, () => console.log(`https://bot1.aidenfavish.repl.co${port}`));
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
var x = 1

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
  user = message.mentions.users.first()
  if (message.content == 'welcome' || message.content == 'Welcome') {
    message.channel.send(`Welcome to ${message.guild.name}`)
  }
});



client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'anouncments');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
  member.send(`Welcome to ${member.guild.name}`)
});
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '^avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});


// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 
client.login(process.env.DISCORD_TOKEN);