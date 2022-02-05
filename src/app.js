import express from "express"; //framework para criar api
import bodyParser from "body-parser"; //TODO
import cors from "cors"; //Cntrole de acesso

import routes from './routes';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(routes);

const PORT = 8080;
app.listen(PORT);