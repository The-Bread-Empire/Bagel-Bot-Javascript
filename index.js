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
  if (message.content == 'remember') {
    message.channel.send("remember satan\nremember timmy\nremember satan fetus\nremember all of the fallen bots")
  }
});



client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'fwaygfwryfg') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('The Birth')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('@everyone please gather around and whitness the great birth of baby Satan');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
    message.channel.send(`Baby Satan is being born because no one has killed him yet his counter will reset try to kill him faster`);
    
  }
});

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'I hate you') {
    

    // Send "pong" to the same channel
    message.channel.send('What? Why?');
    message.channel.send('I did not do anything');
    message.channel.send('you big bully');
    message.channel.send('YOUR A JERK AND A BIG BULLY!'); 
    message.channel.send('your just jelous of my face');
    message.channel.send('Look at me now I am crying'); 
  }
  if (message.content === "I hate you".toLowerCase()){
    message.channel.send('What? Why?');
    message.channel.send('I did not do anything');
    message.channel.send('you big bully');
    message.channel.send('YOUR A JERK AND A BIG BULLY!'); 
    message.channel.send('your just jelous of my face');
    message.channel.send('Look at me now I am crying');
  }
});


// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 
client.login(process.env.DISCORD_TOKEN);