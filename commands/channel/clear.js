async function clear(interaction) {
    const messages = await interaction.channel.messages.fetch()
    if (messages.size > 0) {
        interaction.channel.bulkDelete(messages)
            .then(m => console.log(m.size))
            .catch(console.error)
        
        interaction.reply({ content: 'Processing...', fetchReply: true })
            .then(message => message.delete())
            .catch(console.error)
    }
}

module.exports = { clear }