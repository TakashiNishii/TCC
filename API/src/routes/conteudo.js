const Conteudo = require('../../models/conteudo');
const database = require('../../db');
const express = require('express');

const router = express.Router();
router.get('/', async function (req, res, next) {
    var resultados = await Conteudo.findAll();
    res.status(200).send(
        resultados
    );
});

module.exports = router;