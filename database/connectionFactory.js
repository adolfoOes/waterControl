var mongoose = require('mongoose');

function createMongoDbConnection(){
    console.log('test');
    return mongoose.connect('mongodb://localhost/waterControl');
}

module.exports = function (){
    return createMongoDbConnection;
}