'user strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/products-route');
const obsRoute =  require('./routes/obs-route');
const mesasRoute =  require('./routes/mesas-route');
const itensRoute =  require('./routes/itens-route');
const funcRoute =  require('./routes/func-route');
const configRoute = require('./routes/config-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/obs', obsRoute);
app.use('/mesas', mesasRoute);
app.use('/itens', itensRoute);
app.use('/func', funcRoute);
app.use('/config', configRoute)

module.exports = app;