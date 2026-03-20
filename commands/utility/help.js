const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays a list of all available commands for the bot.',
    execute(message) {
        const helpEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Available Commands')
            .setDescription('Here is a list of commands you can use with this bot:')
            .addFields(
                { name: '!ping', value: 'Checks the bot’s responsiveness.' },
                { name: '!kick [user]', value: 'Kicks a member from the server.' },
                { name: '!ban [user]', value: 'Bans a member from the server.' },
                { name: '!mute [user]', value: 'Mutes a member in voice chat.' },
                { name: '!unmute [user]', value: 'Unmutes a member in voice chat.' },
                { name: '!help', value: 'Displays this help message.' },
                // Add more commands as needed
            )
            .setTimestamp()
            .setFooter('Use the commands wisely!');

        message.channel.send({ embeds: [helpEmbed] });
    },
};