module.exports = function(app) {

    app.get('/sensorBoxes',function(req,res){
        var connection = app.persistence.connectionFactory();
        var sensorBoxDao = new app.persistence.sensorBoxDao(connection);

        sensorBoxDao.listAll(function(error, result){

            if (error){
                res.status(500).json({error : error.message});
            } else if (result == '') {
                res.status(404);
                res.send('Nenhum sensor box encontrado!');
            } else {
                res.json(result);
            }
            
            res.end();
        });
    });

    app.post('/sensorBoxes/createSensorBox',function(req,res){
        var sensorBox = req.body;
        var connection = app.persistence.connectionFactory();
        var sensorBoxDao = new app.persistence.sensorBoxDao(connection);

        sensorBoxDao.save(sensorBox,function(error,result){
            
            if (error){
                res.status(500).json({error : error.message});
            } else {
                res.json(sensorBox);
            }
            res.end(); 
        });
    });
}