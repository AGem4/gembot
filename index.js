global.__basedir = __dirname;
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { roleCmd } = require("./commands/role/");
const { channelCmd } = require("./commands/channel/");
const { userCmd } = require("./commands/user/");

// Create a new client instance
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

// Custom prefix, because why not
client.on('messageCreate', async message => {
    const prefix = "Bot"
    const keywords = message.content.split(" ")
    const args = keywords.slice(2)
    if (keywords[0] === prefix)
        for (const command of Object.keys(userCmd)) {
            if (keywords[1] === command) {
                userCmd[command](message, ...args)
            }
        }
})

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'chit-chat');
    const welcome =`Welcome ${member.user.username} to ${member.guild.name} 🎉 We all hope that you have a great time while you are here. Please make sure to take a quick look at welcome channel for the rules, and get-server-roles channel to pick your in game server. 😃`
    channel.send(welcome)
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand() ||
        !interaction.memberPermissions.has(['ADMINISTRATOR'])) {
        interaction.reply({ content: 'Processing...', fetchReply: true })
            .then(message => message.delete())
            .catch(console.error);
        return
    };

    const { commandName } = interaction;

    // Role commands
    if (commandName === 'rolesetup') {
        roleCmd.setup(interaction)
    }

    // Channel commands
    if (commandName === 'channelclear') {
        channelCmd.clear(interaction)
    }

});

client.on('messageReactionAdd', async (reaction, user) => {

    // Get the message
    if (reaction.message.partial) {
        try {
            await reaction.message.fetch();
        } catch (error) {
            console.error(
                'Something went wrong when fetching the message: ',
                error);
        }
    }

    roleCmd.assign(reaction, user, "get-server-roles")

});

client.on('messageReactionRemove', async (reaction, user) => {

    // Get the message
    if (reaction.message.partial) {
        try {
            await reaction.message.fetch();
        } catch (error) {
            console.error(
                'Something went wrong when fetching the message: ',
                error);
        }
    }

    roleCmd.remove(reaction, user, "get-server-roles")

});

// Login to Discord with your client's token
client.login(token);