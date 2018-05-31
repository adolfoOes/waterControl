import mongoose from "mongoose";
var Schema = mongoose.Schema;

SensorBoxDatasSchema = new Schema({
    id: String,
    name: String,
    percentageOfWater: Number,
    flowPerMinute: Number,
    date: Date
});

export default mongoose.model('SensorBoxDatas', SensorBoxDatasSchema);
