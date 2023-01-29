const Sequelize = require('sequelize');
const database = require('../db');

const Conteudo = database.define('conteudo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sigla: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Conteudo;