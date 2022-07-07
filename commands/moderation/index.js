const { clear } = require("./clear.js");
const { ban } = require("./ban.js");
const { unban } = require("./unban.js");
const { kick } = require("./kick.js");
const { warn } = require("./warn.js");

const moderationCmd = {
    "clear": clear,
    "ban": ban,
    "unban": unban,
    "kick": kick,
    "warn": warn
}

module.exports = { moderationCmd }