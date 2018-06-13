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

function createSensorBoxModel(connection){
    return connection.model('waterBoxDatas', SensorBoxDatasSchema);
}

