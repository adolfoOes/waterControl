export default function (app){

    app.get('/findAllSensorBoxDatas',function(req,res){
        console.log("List all datas.")

        var SensorBoxDatas = app.models_mongo.sensorBoxDatasModel();
        var connection = app.database.connectionFactory();

        SensorBoxDatas.find(function(error, sensorBoxDatasList){
            if (error) {
                red.send(error)
                console.log("Error on list all datas.")
            }

            res.json(sensorBoxDatasList);
            console.log("Sucess on list all datas.")
        });
    });

}