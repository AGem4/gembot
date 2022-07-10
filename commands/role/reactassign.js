const reactEmojis = require(`${__basedir}/etc/reactemoji.json`)

async function reactAssign(reaction, user, roleChannel) {
    // No role assignment for bots
    if (user.bot) return
    const server = reaction.message.guild
    const channel = reaction.message.channel

    if (channel.name === roleChannel) {
        let roleName = ""
        if (reaction.message.content.includes("IRL"))
            roleName = "IRL"
        else {
            const messageLines = reaction.message.content.split("\n")
            if (messageLines[0] === "Aether")
                roleName += "A - "
            else if (messageLines[0] === "Crystal")
                roleName += "C - "
            else if (messageLines[0] === "Primal")
                roleName += "P - "

            const serverIndex = reactEmojis.numbers.findIndex(emoji =>
                emoji === reaction.emoji.name)
            roleName += messageLines[serverIndex + 1].slice(2)
        }

        const role = await server.roles.fetch()
            .then(roles => {
                return roles.find(role => role.name === roleName)
            })
            .catch(console.error);

        if (!role) {
            console.log(`Invalid role ${role}`)
            return
        }

        // There's gotta be a better way to get the GuildMemberManager
        server.members.search({ "query": user.username })
            .then(member => member.first().roles.add([role]))
            .catch(console.error);
    }
}

module.exports = { reactAssign }