const { token } = require('./opts.json')

const Discord = require('discord.js');
const client = new Discord.Client();

const connectionHandler = require('./Connection/connection-handler')
const messageReceiver = require('./Messages/message-receiver')

client.on('message', messageReceiver)

client.on('ready', () => console.log('STARTED UP'))

connectionHandler.setLogoutOnExitEvent(()=>client.destroy().then(()=>process.exit(0)));

client.login(token);