var mongoose = require('mongoose');

function createMongoDbConnection(){
    return mongoose.connect('mongodb://localhost/waterControl');
}

module.exports = function (){
    return createMongoDbConnection;
}