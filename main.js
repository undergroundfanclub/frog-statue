'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const {
  prefix,
  token,
} = require('./config.json');

client.on('ready', () => {
  console.log('ribbit,listening');
});

// Create an event listener
// client.on('message', message => {
//   if (message.content === '>>pray') {
//     message.channel.send('*vibrates*');
//   }
// });

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();


  if (!client.commands.has(commandName)) return;
  try {
    client.commands.get(commandName).execute(message, args);
  }
  catch (error) {
    console.error(error);
    message.reply('the frog statue stares blankly back at you');
  }


});
client.login(token);

for(const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}