const { exec } = require("child_process");

module.exports = {
    name: 'barter',
    description: 'tell allah whats up',
    execute(message, args) {

var list = [
    'a sock',
    'a voucher for tour of the MK ULTRA facility',
    '*closes hand too quick to make out what it was, maybe a rat?. it made a noise at you*',
    '👌, "heh gotcha (:"',
    'another skyrim DLC',
    'Concentrate and ask again',
    'a crusty anime DVD',
    'mario in the hood',
    'minecraft boob mode',
    'the quran',
    'mud'
];
var rand = Math.floor(Math.random() * list.length);

message.channel.send('*opens hand to reveal:*');
message.reply(list[rand]);
},
};