async function give(interaction, user, targetRole) {
    const role = await interaction.guild.roles.fetch()
        .then(roles => {
            return roles.find(role =>
                role.name === targetRole).id
        })
        .catch(console.error);

    user.roles.add(role)
        .then(_ => console.log("Role assign succesful"))
        .catch(console.error)

    interaction.reply({ content: 'Processing...', fetchReply: true })
        .then(message => message.delete())
        .catch(console.error)
}

module.exports = { give }