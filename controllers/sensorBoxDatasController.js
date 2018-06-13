module.exports = function(app){

    app.get('/findAllSensorBoxDatas',function(req,res){
        console.log("List all datas.")

        var connection = app.database.connectionFactory();
        var sensorBoxDatasModel = app.models_mongo.sensorBoxDatasModel.createSensorBoxModel();
        
        //var sensorBoxDatasList = sensorBoxDatasModel('waterBoxDatas',sensorBoxDatasSchema,'waterBoxDatas');

        console.log("List all datas 2.")

    });

}