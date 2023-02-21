const Questoes = require('../../models/questoes');
const express = require('express');

const Sequelize = require('sequelize');
const { Op } = Sequelize;              // biblioteca de operadores do sequelize

const router = express.Router();

router.get('/', async function (req, res, next) {
    var resultados = await Questoes.findAll();
    res.status(200).send(
        resultados
    );
});

router.get('/semana/:semana', async function (req, res, next) {
    var resultados = await Questoes.findAll({
        where: {
            // semana like %:semana%
            semana: { [Op.like]: '%' + req.params.semana + '%' }
        }
    });
    res.status(200).send(
        resultados
    );
    //Para chamar essa rota, basta digitar no navegador: http://localhost:3000/questoes/1
});

router.get('/conteudo/:conteudo', async function (req, res, next) {
    var resultados = await Questoes.findAll({
        where: {
            // conteudo like %:conteudo%
            conteudo: { [Op.like]: '%' + req.params.conteudo + '%' }
        }
    });
    res.status(200).send(
        resultados
    );
});


module.exports = router;