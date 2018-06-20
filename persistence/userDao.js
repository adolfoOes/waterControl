function userDao(connection){
    this._connection = connection;
}

userDao.prototype.save = function(user, callback){
    this._connection.query('INSERT INTO users SET ?', user, callback);
}

userDao.prototype.listAll = function(callback) {
    this._connection.query('SELECT * FROM users', callback);
}

userDao.prototype.findById = function(id, callback){
    this._connection.query('SELECT * FROM users WHERE id = ?', id, callback);
}

module.exports = function(){
    return userDao;
}