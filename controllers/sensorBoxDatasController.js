module.exports = function(app){

    app.get('/findAllSensorBoxDatas',function(req,res){
        
        console.log(app)
        
        console.log(app.database.sensorBoxDatasDao.findAll(req,res))
        
    
    });

};



/*
module.exports = function(app){

    app.get('/findAllSensorBoxDatas',function(req,res){
       
        var dataBase = app.database.connectionFactory;

        console.log(app.database)

        var sensorBoxDatas = dataBase.Mongoose.model('waterBoxDatas', dataBase.SensorBoxDatasSchema, 'waterBoxDatas');
        
        console.log('test')

        var listSensor = app.dataBase.sensorBoxDatasDao(dataBase).findAll()

        console.log(listSensor)

        sensorBoxDatas.find({}).exec(function(error,docs){
        
            if (error){
                res.status(500).json({error : error.message});
                res.end();
                return
            }

            res.json(docs);
            res.end();
            return
        })
    });

    app.post('/newSensorBoxData', function(req,res){

        var dataBase = app.database.connectionFactory;
        var sensorBoxDatas = dataBase.Mongoose.model('waterBoxDatas', dataBase.SensorBoxDatasSchema, 'waterBoxDatas');

        var newData = new sensorBoxDatas({
            id : req.body.id, 
            name : req.body.name,
            percentageOfWater : req.body.percentageOfWater,
            flowPerMinute : req.body.flowPerMinute,
            date : req.body.date
        });

        newData.save(function(error){
            if (error){
                res.status(500).json({error : error.message});
                res.end();
                return;
            }
            res.json(newData);
            res.end();
            return
        })
    })

    app.post('/deleteSensorBoxData', function(req,res){

        var dataBase = app.database.connectionFactory;
        var sensorBoxDatas = dataBase.Mongoose.model('waterBoxDatas', dataBase.SensorBoxDatasSchema, 'waterBoxDatas');

        var sensorBoxData = new sensorBoxDatas({
            id : req.body.id
        })





        if (sensorBoxData.id != ""){

            sensorBoxData.findfindByIdAndRemove

        }

    })


}*/