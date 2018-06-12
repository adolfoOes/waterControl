var express = require('express');
var consign = require('consign');
var bodyParser = require('bodyParser');


module.exports = function (){
    var app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    consign()
        .include('controllers')
        .then('persistence')
        .then('database')
        .then('models_mongo')
        .into(app);
    return app;
}
