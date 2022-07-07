const  warnString  = require(`${__basedir}/etc/warning.json`)

function warn(interaction, user, reason, severity) {
    user.send(`WARNING!\nREASON: ${reason}\nSEVERITY: ${warnString[severity]}`)
    interaction.guild.channels.fetch()
        .then(channels => channels.find(channel => channel.name === "modlog")
            .send(`WARNING! ${user}.\nREASON: ${reason}\nSEVERITY: ${warnString[severity]}`))
        
    interaction.reply({ content: 'Processing...', fetchReply: true })
        .then(message => message.delete())
        .catch(console.error)


}

module.exports = { warn }