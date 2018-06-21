var mySql = require('mysql');

function createDBConnection(){
    return mySql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'watercontrol'
    });
}

module.exports = function () {
    return createDBConnection;
}