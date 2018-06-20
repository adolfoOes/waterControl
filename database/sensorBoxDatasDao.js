module.exports = function(app){

    var dataBase = app.database.connectionFactory;
    var sensorBoxDatas = dataBase.Mongoose.model('waterBoxDatas', dataBase.SensorBoxDatasSchema, 'waterBoxDatas');

    this.findAll = function(req,res){
        
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
    };


    this.findDatasBySensorId = function(req, res){

        sensorBoxDatas.find(req.query).exec(function(error,docs){
            
            if (error){
                res.status(500).json({error : error.message});
                res.end();
                return
            }

            res.json(docs);
            res.end();
            return

        })

    };



    this.save = function(req,res){

        var newSensorBoxData = new sensorBoxDatas({
            id : req.body.id, 
            name : req.body.name,
            percentageOfWater : req.body.percentageOfWater,
            flowPerMinute : req.body.flowPerMinute,
            date : req.body.date
        });

        newSensorBoxData.save(function(error){
            if (error){
                res.status(500).json({error : error.message});
                res.end();
                return;
            }
            res.json(newSensorBoxData);
            res.end();
            return
        })

    };

    return this
};
