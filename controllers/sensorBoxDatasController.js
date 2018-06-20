module.exports = function(app){

    app.get('/findAllSensorBoxDatas',function(req,res){
        
        app.database.sensorBoxDatasDao.findAll(req,res);
    
    });

    app.get('/findSensorBoxDataById',function(req,res){
        
        app.database.sensorBoxDatasDao.findDatasBySensorId(req,res);
    
    });

    app.post('/newSensorBoxData', function(req,res){

        app.database.sensorBoxDatasDao.save(req,res);

    })

    app.post('/deleteFromSensorBoxId', function(req,res){

        app.database.sensorBoxDatasDao.deleteFromSensorBoxId(req,res);

    })

};
