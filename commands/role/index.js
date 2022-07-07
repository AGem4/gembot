const { assign } = require("./assign.js");
const { remove } = require("./remove.js");
const { setup } = require("./setup.js");
const { give } = require("./give.js");
const { take } = require("./take.js");

const roleCmd = {
    "assign": assign,
    "setup": setup,
    "remove": remove,
    "give": give,
    "take": take

}

module.exports = { roleCmd }