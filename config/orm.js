const connection = require("./connection.js")
const orm = {
    selectAll: function (table, cb) {
        const query = 'SELECT * FROM ' + table + ';'
        connection.query(query, function (err, result){
            if (err) throw err;
            cb(result)
        })
    },
        
    // insertOne: function (table, cb) {
    //     const query = 'SELECT * FROM'
    //     connection.query()
    // },
    
    // updateOne: function (table, cb) {
    //     const query = 'SELECT * FROM'
    //     connection.query()
    // },

}

module.exports = orm;