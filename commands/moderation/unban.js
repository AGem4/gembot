function unban(interaction, user) {
    interaction.guild.members.unban(user.id)
        .then(_ => console.log("Unban succesful"))
        .catch(error => console.log(error))

    interaction.reply({ content: 'Processing...', fetchReply: true })
        .then(message => message.delete())
        .catch(console.error)
}

module.exports = { unban }