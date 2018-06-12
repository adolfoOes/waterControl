var mongoose = require('mongoose');

function createMongoDbConnection(){
    return connect('mongodb://localhost:27017/waterControl');
}

module.exports = function (){
    return createMongoDbConnection;
}