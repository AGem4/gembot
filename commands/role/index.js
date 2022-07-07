const { assign } = require("./assign.js");
const { remove } = require("./remove.js");
const { setup } = require("./setup.js");

const roleCmd = {
    "assign": assign,
    "setup": setup,
    "remove": remove
}

module.exports = { roleCmd }