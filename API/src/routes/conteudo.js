const Conteudo = require('../../models/conteudo');
const database = require('../../db');
const express = require('express');

const Sequelize = require('sequelize');
const { Op } = Sequelize;              // biblioteca de operadores do sequelize


const router = express.Router();
router.get('/', async function (req, res, next) {
    var resultados = await Conteudo.findAll();
    res.status(200).send(
        resultados
    );
});

router.get('/sigla/:conteudo', async function (req, res, next) {
    var resultados = await Conteudo.findAll({
        where: {
            sigla: { [Op.like]: req.params.conteudo  }
        }
    });
    res.status(200).send(
        resultados
    );
});

module.exports = router;