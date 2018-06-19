var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/watercontrol');

var Schema = mongoose.Schema;

var SensorBoxDatasSchema = new Schema({
    id: String,
    name: String,
    percentageOfWater: Number,
    flowPerMinute: Number,
    date: String
});

module.exports = {Mongoose : mongoose, SensorBoxDatasSchema : SensorBoxDatasSchema}
   