module.exports = function(app){

    var dataBase = app.database.connectionFactory;
    var sensorBoxDatas = dataBase.Mongoose.model('waterBoxDatas', dataBase.SensorBoxDatasSchema, 'waterBoxDatas');

    this.findAll = function(req,res){
        
        sensorBoxDatas.find({}).exec(function(error,docs){
            
            if (error != undefined){
                res.status(500).json({error : error.message});
                res.end();
                return
            }

            res.json(docs);
            res.end();
            return

        })
    };

    return this
};
