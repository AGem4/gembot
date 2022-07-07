function ban(interaction, user, reason) {
    interaction.guild.bans.create(user.id, { reason: reason })
        .then(_ => console.log("Ban succesful"))
        .catch(error => console.log(error))

    interaction.reply({ content: 'Processing...', fetchReply: true })
        .then(message => message.delete())
        .catch(console.error)
}

module.exports = { ban }