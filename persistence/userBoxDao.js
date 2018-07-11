function userDaoBox(connection){
    this._connection = connection;
}

userDaoBox.prototype.save = function(userBox, callback){
    this._connection.query('INSERT INTO userBox SET ?', userBox, callback);
}

userDaoBox.prototype.listAll = function(callback) {
    this._connection.query('SELECT * FROM userBox', callback);
}

userDaoBox.prototype.findByUserId = function(id, callback){
    this._connection.query('SELECT * FROM userBox WHERE idUser = ?', id, callback);
}

module.exports = function(){
    return userDaoBox;
}