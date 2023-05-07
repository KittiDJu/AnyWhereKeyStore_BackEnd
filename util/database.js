const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost:8080',
    user : '',
    password : '',
    database : 'anywherekeystore'
});

module.exports = pool.promise();
