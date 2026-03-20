module.exports = {
    name: 'ping',
    description: 'Shows the bot latency',
    execute(message) {
        const latency = Date.now() - message.createdTimestamp;
        message.channel.send(`Pong! Latency is ${latency}ms`);
    },
};