const { exec } = require("child_process");

module.exports = {
    name: 'pray',
    description: 'tell allah whats up',
    execute(message, args) {
        message.channel.send('*vibrates*');
    },
};