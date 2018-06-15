module.exports = function(app){

    app.get('/findAllSensorBoxDatas',function(req,res){
       
        var dataBase = app.database.connectionFactory;
        var sensorBoxDatas = dataBase.Mongoose.model('waterBoxDatas', dataBase.SensorBoxDatasSchema, 'waterBoxDatas');

        sensorBoxDatas.find({}).exec(function(error,docs){
            
            for (var sensorBoxData in docs){
                console.log(docs[sensorBoxData].id)
            }
            
        })
    });

    app.post('/newSensorBoxData', function(req,res){

        console.log("New cad.")

        var sensorBoxDatas = dataBase.Mongoose.model('waterBoxDatas', dataBase.SensorBoxDatasSchema, 'waterBoxDatas');

        var newData = new sensorBoxDatas({
            id : req.body.id, 
            name : req.body.name,
            percentageOfWater : req.body.percentageOfWater,
            flowPerMinute : req.body.flowPerMinute,
            date : req.body.date
        });

        console.log(newData);

        newData.save(function(error){
            if (error){
                console.log('error');
                res.status(500).json({error : error.message});
                res.end();
                return;
            }
            console.log('OK');
            res.json(newData);
            res.end();
        })

        

    })

}