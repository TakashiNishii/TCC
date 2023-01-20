const Semana = require('../../models/semana');
const database = require('../../db');
const express = require('express');

const router = express.Router();
router.get('/', async function (req, res, next) {
    var resultados = await Semana.findAll();
    res.status(200).send(
        resultados
    );
});
module.exports = router;