const Sequelize = require('sequelize');
const database = require('../db');

const Questoes = database.define('questoes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idQuestao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    semana: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    alternativas: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    antipadrao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    linguagem: {
        type: Sequelize.STRING,
        allowNull: false,
    },

},);



module.exports = Questoes;