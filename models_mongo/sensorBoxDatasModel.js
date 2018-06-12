var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SensorBoxDatasSchema = new Schema({
    id: String,
    name: String,
    percentageOfWater: Number,
    flowPerMinute: Number,
    date: Date
});

module.exports = function(){
    return mongoose.model('SensorBoxDatas', SensorBoxDatasSchema)
};
