function sensorBoxDatasDao(connection,sensorBoxDatasSchema){
    this._connection = connection;
    this._schema = sensorBoxDatasSchema;
}

sensorBoxDatasDao.prototype.save = function(sensorBoxData, callback){
    return this._schema.create(sensorBoxDatas);
}

sensorBoxDatasDao.prototype.list = function(callback){
    return this._schema.find();
}

sensorBoxDatasDao.prototype.findById = function(id,callback){
    return this._schema.findById(id);
}