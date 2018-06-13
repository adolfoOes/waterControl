module.exports = function(app){

    app.get('/findAllSensorBoxDatas',function(req,res){
        console.log("List all datas.")

        var sensorBoxDatasSchema = app.models_mongo.sensorBoxDatasModel();
        var connection = app.database.connectionFactory();
        var sensorBoxDatasDao = app.database.sensorBoxDatasDao(connection,sensorBoxDatasSchema);

        var sensorBoxDatasList = connection.Mongoose.model('waterBoxDatas',sensorBoxDatasSchema,'waterBoxDatas');

        console.log("List all datas 2.")

    });

}