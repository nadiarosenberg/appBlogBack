const {Sequelize} = require('sequelize');
const {database} = require('./config.js');

//Create connection
const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: 'mysql'
}
);

module.exports = sequelize;