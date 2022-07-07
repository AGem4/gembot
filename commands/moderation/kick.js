function kick(interaction, user, reason) {
    user.kick(reason)
        .then(_ => console.log("Kick succesful"))
        .catch(error => console.log(error))

    interaction.reply({ content: 'Processing...', fetchReply: true })
        .then(message => message.delete())
        .catch(console.error)
}