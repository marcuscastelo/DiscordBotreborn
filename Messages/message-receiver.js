const guildMessageReceiver = require('./GuildMessages/message-receiver')

//delete tis line
const Message = require('discord.js').Message;
/**
 * 
 * @param {Message} message 
 */
function messageReceiver(message){
    if (message.author.bot) return;
    if (message.channel.type == 'dm') {
        //treat as dm message
        message.reply('dm')
    } else if (message.channel.type == 'text') {
        //treat as guild message
        guildMessageReceiver.HandleMessage(message);
    }
}

module.exports = messageReceiver;