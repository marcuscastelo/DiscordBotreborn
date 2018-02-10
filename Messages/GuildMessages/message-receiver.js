module.exports = (function(){
    
    const { Message } = require('discord.js');
    const guilds = require('../../Guilds/guilds')

    function executeMatchFunction(command) {

    }

    /**
     * 
     * @param {Message} message 
     */
    function HandleMessage(message) {
        console.log(message.content)
        if (guilds.getGuild(message.id)) {
            console.log(100)
        } else {
            let newGuildO = guilds.addGuild(message.guild.name, message.guild.id);
            console.log(newGuildO);
        }
    }

    return {
        HandleMessage
    }
})();