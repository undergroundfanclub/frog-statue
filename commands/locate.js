const { exec } = require("child_process");

module.exports = {
    name: 'locate',
    description: 'tells you the server name',
    execute(message, args) {
        message.channel.send(`we are currently at ... ${message.guild.name}`);
    },
};