var orm = require("../config/orm.js")
//IMport the ORM to create functions that will interact with the database.
//model
//had "table in the `all: function(table,cb)`"
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    //variables cols and vals are arrays
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, conditon, cb) {
        orm.update("burgers", objColVals, conditon, cb, function (res) {
            cb(res)
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
}
module.exports = burger;