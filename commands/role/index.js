const { reactAssign } = require("./reactassign.js");
const { reactRemove } = require("./reactremove.js");
const { setup } = require("./setup.js");
const { give } = require("./give.js");
const { take } = require("./take.js");

const roleCmd = {
    "reactAssign": reactAssign,
    "reactRemove": reactRemove,
    "setup": setup,
    "give": give,
    "take": take
}

module.exports = { roleCmd }