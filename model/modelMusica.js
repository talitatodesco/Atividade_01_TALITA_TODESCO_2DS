const Sequelize = require('sequelize');
const connection = require('../database/database');

const modelMusica = connection.define(
    'tbl_musica',
    {
        cod_musica:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false
        },
        nome_musica:{
            type:Sequelize.STRING(200),
            allowNull: true
        },
        duracao:{
            type:Sequelize.TIME,
            allowNull: true
        },
        data_lanc:{
            type:Sequelize.DATE,
            allowNull: true
        },
        numero_faixa:{
            type:Sequelize.INTEGER,
            allowNull: true
        },
        id_album:{
            type:Sequelize.INTEGER,
            allowNull: true
        },
        nome_album:{
            type: Sequelize.STRING(70),
            allowNull: true
        },
        data_lanc_album:{
            type:Sequelize.DATE,
            allowNull: true
        },
        data_compra_album:{
            type:Sequelize.DATE,
            allowNull: true
        },
        id_autor:{
            type:Sequelize.INTEGER,
            allowNull: true
        },
        nome_autor:{
            type:Sequelize.STRING(200),
            allowNull: true
        },
        email_autor:{
            type:Sequelize.STRING(70),
            allowNull: true
        }
    },
);

//modelMusica.sync({force:true});

module.exports = modelMusica;

