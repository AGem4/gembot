const { aetherWorlds, primalWorlds, crystalWorlds } = require(`${__basedir}/etc/worlds.json`)

function setup(interaction) {

    interaction.channel.send("Aether");
    console.log(aetherWorlds)
    for (const world of aetherWorlds) {
        interaction.channel.send(world)
            .then(message => message.react("👍"))
            .catch(console.error);
    }
    interaction.channel.send("Crystal");
    for (const world of crystalWorlds) {
        interaction.channel.send(world)
            .then(message => message.react("👍"))
            .catch(console.error);
    }
    interaction.channel.send("Primal");
    for (const world of primalWorlds) {
        interaction.channel.send(world)
            .then(message => message.react("👍"))
            .catch(console.error);
    }
    
    interaction.reply({ content: 'Processing...', fetchReply: true })
        .then(message => message.delete())
        .catch(console.error)
}

module.exports = { setup }