module.exports = function(app) {

    app.get('/sensorBoxes',function(req,res){
        console.log("List all sensor boxes.");
        res.send('OK');
    });

    app.post('/sensorBoxes/createSensorBox',function(req,res){
        var sensorBox = req.body;
        console.log("Creating a new sensor box.");
        var connection = app.persistence.connectionFactory();
        var userDao = app.persistence.userDao(connection);

        userDao.create(sensorBox,function(error,result){
            console.log('Sensor box created.');
            res.json(sensorBox);
        });

        res.send(sensorBox);
    });
}