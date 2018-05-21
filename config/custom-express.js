import { express } from "express";
import { consign } from "consign";
import { bodyParser } from "body-parser";

export default function () {
    var app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    consign()
        .include('controllers')
        .then('persistencia')
        .then('persistence_big_data')
        .into(app);
    return app;
}