async function remove(reaction, user, roleChannel) {
    // No role assignment for bots
    if (user.bot) return
    const server = reaction.message.guild
    const channel = reaction.message.channel

    if (channel.name === roleChannel) {

        // Fetch server roles
        const role = await server.roles.fetch()
            .then(roles => {
                return roles.find(role =>
                    role.name === reaction.message.content).id
            })
            .catch(console.error);

        // There's gotta be a better way to get the GuildMemberManager
        server.members.search({ "query": user.username })
            .then(member => {
                // Checks if role is defined
                if (role) {
                    member.first().roles.remove([role])
                }
            })
            .catch(console.error);
    }
}

module.exports = { remove }