const { ModalSubmitFieldsResolver } = require("discord.js")

function kick(interaction, user, reason) {
    console.log(user)
    user.kick(reason)
        .then(_ => console.log("Kick succesful"))
        .catch(error => console.log(error))

    interaction.reply({ content: 'Processing...', fetchReply: true })
        .then(message => message.delete())
        .catch(console.error)
}

module.exports = {kick}