const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { urlencoded, json } = require('express');
const conexion = require('./db/dbmongo');
require('dotenv').config();


const app = express();
const port = process.env.PORT
const prefix = '/v1';

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(cors({
  origin: 'https://reservas-front.vercel.app/'
}));



app.use(cors());

// Crear un nuevo enrutador para todas las rutas en routerApi
const reservasRouter = express.Router();
routerApi(reservasRouter);

// Aplicar el prefijo a todas las rutas en el nuevo enrutador
app.use(prefix, reservasRouter);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);

});
