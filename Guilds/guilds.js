const { writeFileSync, readFileSync } = require('fs');
const { default_prefix } = require('../opts.json');
const defaultGuild = require('./default-guild.json')


//(?:vi\/|v=|\/v\/|youtu\.be\/|\/embed\/|v%3D|favicon)([a-zA-Z0-9_-]{11})

module.exports = mod = (function() {

    loadJSON();

    function loadJSON() {
        guilds = JSON.parse(readFileSync('./Guilds/guilds-data.json', 'utf8'));
    }

    function saveJSON() {
        writeFileSync(JSON.stringify(guilds));
    }

    function getGuild(id) {
        return guilds[id];
    }

    function addGuild ({ id, name }) {
        guilds[id] = JSON.parse(defaultGuild);
        guilds[id].name = name;
        guilds[id].id = id;
        saveJSON();
        return guilds[id]
    }

    return {
        getGuild,
        addGuild
    }
})();

