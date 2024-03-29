const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const conteudoRoute = require('./routes/conteudo');
const questoesRoute = require('./routes/questoes');

const cors = require('cors');
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use('/', index);
app.use('/conteudo', conteudoRoute);
app.use('/questoes', questoesRoute);
module.exports = app;