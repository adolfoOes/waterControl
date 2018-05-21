var mongoose = require('mongoose');

function createMongoDbConnection(){
    return mongoose.connect('mongodb://user:senha@host/base');
}

module.exports = function(){
    return createMongoDbConnection;
}