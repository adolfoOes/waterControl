import { createConnection } from "mysql";

function createDBConnection(){
    return createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'watercontroll'
    });
}

export default function () {
    return createDBConnection;
}