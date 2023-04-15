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

router.get('/semana/:semana/:linguagem', async function (req, res, next) {
    var resultados = await Questoes.findAll({
        where: {
            semana:  { [Op.like]: '%' +req.params.semana+"%" } ,
            linguagem: { [Op.like]: '%' +req.params.linguagem+"%"} // adicionado o parâmetro "linguagem" na consulta
        }
    });
    res.status(200).send(
        resultados
    );
    // Para chamar essa rota, basta digitar no navegador: http://localhost:3000/semana/1/javascript
});


router.get('/conteudo/:conteudo/:linguagem', async function (req, res, next) {
    var resultados = await Questoes.findAll({
        where: {
            // conteudo like %:conteudo%
            conteudo: { [Op.like]: '%' + req.params.conteudo + '%' },
            linguagem: { [Op.like]: '%' +req.params.linguagem+"%"}
        }
    });
    res.status(200).send(
        resultados
    );
});


module.exports = router;