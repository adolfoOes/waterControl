import { connect } from "mongoose";

function createMongoDbConnection(){
    return connect('mongodb://localhost:27017/waterControl');
}

export default createMongoDbConnection();