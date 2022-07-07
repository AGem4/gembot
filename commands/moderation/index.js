const { clear } = require("./clear.js");
const { ban } = require("./ban.js");
const { unban } = require("./unban.js");
const { kick } = require("./kick.js");

const moderationCmd = {
    "clear": clear,
    "ban": ban,
    "unban": unban,
    "kick": kick,
}

module.exports = { moderationCmd }