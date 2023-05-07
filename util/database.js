const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'aws.connect.psdb.cloud',
    user : '8yqr74kc23wgnf5uvzzg',
    password : 'pscale_pw_p5bvyiagYMXJUu7Qb6J1UvewlClV50P0ydRCTZAag3w',
    database : 'anywherekeystore'
});

module.exports = pool.promise();
