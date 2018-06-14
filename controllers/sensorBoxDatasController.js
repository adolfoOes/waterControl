module.exports = function(app){

    app.get('/findAllSensorBoxDatas',function(req,res){
        console.log("List all datas.")

        var dataBase = app.database.connectionFactory;
        var sensorBoxDatas = dataBase.Mongoose.model('waterBoxDatas', dataBase.SensorBoxDatasSchema, 'waterBoxDatas');

        sensorBoxDatas.find({}).lean().exec(function(error,docs){
            console.log(docs)
        })

    });
}