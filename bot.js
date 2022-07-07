
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
    new SlashCommandBuilder()
        .setName('rolesetup')
        .setDescription('Sends a list of messages for role setup'),

    new SlashCommandBuilder()
        .setName('channelclear')
        .setDescription('Deletes everything from channel'),

    new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to ban')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for ban')
                .setRequired(false)),

    new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user from the server')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to kick')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The reason for kick')
                .setRequired(false)),

    new SlashCommandBuilder()
        .setName('unban')
        .setDescription('Unbans a user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to unban')
                .setRequired(true)),

    new SlashCommandBuilder()
        .setName('rolegive')
        .setDescription('Manual assignment of role to user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Target user')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('role')
                .setDescription('Target role')
                .setRequired(true)),

    new SlashCommandBuilder()
        .setName('roletake')
        .setDescription('Manual removal of role to user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Target user')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('role')
                .setDescription('Target role')
                .setRequired(true)),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
