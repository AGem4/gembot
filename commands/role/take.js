async function take(interaction, user, targetRole) {
    const role = await interaction.guild.roles.fetch()
        .then(roles => {
            return roles.find(role =>
                role.name === targetRole).id
        })
        .catch(console.error);
    user.roles.remove([role])
        .then(_ => console.log("Role remove succesful"))
        .catch(error => console.log(error))

    interaction.reply({ content: 'Processing...', fetchReply: true })
        .then(message => message.delete())
        .catch(console.error)
}

module.exports = { take }