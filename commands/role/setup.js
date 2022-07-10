
const { aetherWorlds, primalWorlds, crystalWorlds } = require(`${__basedir}/etc/worlds.json`)
const reactEmojis = require(`${__basedir}/etc/reactemoji.json`)

async function setup(interaction) {

    let i = 0
    let dcText = "Aether\n"
    for (const world of aetherWorlds) {
        dcText += `${i}.${world}\n`
        i++
    }
    interaction.channel.send(dcText).
        then(message => { for (emoji of reactEmojis.numbers) message.react(emoji) }
        )
        .catch(console.error)

    i = 0
    dcText = "Crystal\n"
    for (const world of crystalWorlds) {
        dcText += `${i}.${world}\n`
        i++
    }
    interaction.channel.send(dcText).
        then(message => { for (emoji of reactEmojis.numbers) message.react(emoji) }
        )
        .catch(console.error)

    i = 0
    dcText = "Primal\n"
    for (const world of primalWorlds) {
        dcText += `${i}.${world}\n`
        i++
    }
    interaction.channel.send(dcText).
        then(message => { for (emoji of reactEmojis.numbers) message.react(emoji) }
        )
        .catch(console.error)

    const irlMessage = 
    "Signup for IRL threads\nIf you would like to get access to the threads that allow for more in depth discussions of IRL topics. Then please click on the reaction to have the role added to your account."
    interaction.channel.send(irlMessage).
        then(message => message.react(reactEmojis.vote[0]))
        .catch(console.error)


    interaction.reply({ content: 'Processing...', fetchReply: true })
        .then(message => message.delete())
        .catch(console.error)
}

module.exports = { setup }