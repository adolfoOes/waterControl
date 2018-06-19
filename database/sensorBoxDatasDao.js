function sensorBoxDatasDao(dataBase){
    this._dataBase = dataBase;
    this._schema = this._dataBase.Mongoose.model('waterBoxDatas', dataBase.SensorBoxDatasSchema, 'waterBoxDatas');
}

sensorBoxDatasDao.prototype.save = function(sensorBoxData, callback){
    this._schema.create(sensorBoxDatas);
}

sensorBoxDatasDao.prototype.findAll = function(callback){
    
    sensorBoxDatas.find({}).exec(function(error,docs){
        
        callback = docs;
    })
}

sensorBoxDatasDao.prototype.findById = function(id,callback){
    this._schema.findById(id);
}

/*
sensorBoxDatasDao.prototype.findBySensorBoxId = function(id,callback){
    
    connection


    
    
    this._schema.findById(id);
}*/