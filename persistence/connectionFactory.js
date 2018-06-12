var mySql = require('mysql');

function createDBConnection(){
    return createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'watercontroll'
    });
}

module.exports = function () {
    return createDBConnection;
}