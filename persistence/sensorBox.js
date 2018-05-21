class sensorBoxDao {
    constructor(connection) {
        this._connection = connection;
    }
    create(sensorBox, callback) {
        this._connection.query('INSERT INTO sensorBoxes SET ?', sensorBox, callback);
    }
    listAll(callback) {
        this._connection.query('SELECT * FROM sensorBoxes', callback);
    }
    findById(id, callback) {
        this._connection.query('SELECT * FROM sensorBoxes WHERE id = ?', id, callback);
    }
}



