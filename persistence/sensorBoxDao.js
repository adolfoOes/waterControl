function sensorBoxDao(connection){
    this._connection = connection;
}

sensorBoxDao.prototype.save = function(sensorBox, callback){
    this._connection.query('INSERT INTO sensorBox SET ?', sensorBox, callback);
}

sensorBoxDao.prototype.listAll = function(callback){
    this._connection.query('SELECT * FROM sensorBox', callback);
}

sensorBoxDao.prototype.findById = function(id, callback){
    this._connection.query('SELECT * FROM sensorBox WHERE id = ?', id, callback);
}

module.exports = function(){
    return sensorBoxDao;
}