class userDao {
    constructor(connection) {
        this._connection = connection;
    }
    create(user, callback) {
        this._connection.query('INSERT INTO users SET ?', user, callback);
    }
    listAll(callback) {
        this._connection.query('SELECT * FROM users', callback);
    }
    findById(id, callback) {
        this._connection.query('SELECT * FROM users WHERE id = ?', id, callback);
    }
}



