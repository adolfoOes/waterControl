class sensorBoxDatasDao {

    constructor(connection, sensorBoxDatasSchema){
        this._connection = connection;
        this._schema = sensorBoxDatasSchema;
    }

    getById(id){
        return this._schema.findById(id);
    }

    getAll(){
        return this._schema.find();
    }

    create(sensorBoxDatas){
        return this._schema.create(sensorBoxDatas);
    }

}