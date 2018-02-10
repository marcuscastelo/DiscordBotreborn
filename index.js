const { token } = require('./opts.json')

const Discord = require('discord.js');
const client = new Discord.Client();

const messageReceiver = require('./Messages/message-receiver')

client.on('message', messageReceiver)


client.login(token);