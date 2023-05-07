const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'aws.connect.psdb.cloud',
    user : 'ayrmxj2assz6rp9jqpw9',
    password : 'pscale_pw_cmhhqQaT5DV66QIEcBBnxVFxTJKPo2QFI9XZRmsg8sj',
    database : 'anywherekeystore'
});

module.exports = pool.promise();
