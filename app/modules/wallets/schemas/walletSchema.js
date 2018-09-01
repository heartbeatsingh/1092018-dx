var Sequelize = require('sequelize');
var db = require('../../../../config/database');
var Wallet = db.connection.define('wallets', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    currency_type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
        }
    },
    balance: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
        }
    },
    w_address: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    w_secret: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
        }
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
        }
    }
}, {
        hooks: {
            beforeValidate: function () {
                //console.log("before validate")
            },
            afterValidate: function (user) {
                //console.log("after validate");
            },
            afterCreate: function () {
                //console.log("after create")
            },
            beforeCreate: function () {
                //console.log("before validate")
            },
        }
    });

module.exports = Wallet;