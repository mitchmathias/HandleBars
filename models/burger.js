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
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, conditon, cb) {
        orm.updateOne("burgers", objColVals, conditon, cb, function (res) {
            cb(res)
        });
    },
}

  
module.exports = burger;