var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SensorBoxDatasSchema = new Schema({
    id: String,
    name: String,
    percentageOfWater: Number,
    flowPerMinute: Number,
    date: Date
},{collection: 'waterBoxDatas'}
);

module.exports = function(connection){
   return mongoose.model('waterBoxDatas', SensorBoxDatasSchema);
}

