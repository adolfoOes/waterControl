var mySql = require('mysql');

function createDBConnection(){
    return mySql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'watercontrol'
    });
}

module.exports = function () {
    return createDBConnection;
}