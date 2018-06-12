function sensorBoxDao(connection){
    this._connection = connection;
}

sensorBoxDao.prototype.save = function(sensorBox, callback){
    this._connection.query('INSERT INTO sensorBoxes SET ?', sensorBox, callback);
}

sensorBoxDao.prototype.list = function(callback){
    this._connection.query('SELECT * FROM sensorBoxes', callback);
}

sensorBoxDao.prototype.findById = function(id, callback){
    this._connection.query('SELECT * FROM sensorBoxes WHERE id = ?', id, callback);
}
