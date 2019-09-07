// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    }
}

module.exports = burger