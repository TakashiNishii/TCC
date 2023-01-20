const Sequelize = require('sequelize');
const database = require('../db');

const Semana = database.define('semana', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    numeroSemana: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Semana;
