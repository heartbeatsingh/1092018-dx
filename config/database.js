const Sequelize = require('sequelize');
const cfg = require('./config');
module.exports = { 
connection: new Sequelize(cfg.db.database, cfg.db.username, cfg.db.pwd, {
    host: cfg.db.host,
    dialect: cfg.db.dialect,
    operatorsAliases: false,
    operatorsAliases: false,
        define: {
                charset: 'utf8',
                collate: 'utf8_general_ci',
                freezeTableName: true,
                underscored: true,
                timestamps: true
        }
    })
}

/*const sequelize = new Sequelize('postgres://postgres:Just123@localhost:5432/daxxx');
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const User = sequelize.define('wallets', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    w_address: {
      type: Sequelize.STRING
    }
  });

  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      w_address: 'Hancock'
    });
  });

  User.findAll().then(users => {
    console.log(users)
  })*/