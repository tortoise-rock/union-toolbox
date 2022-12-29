const { DataTypes, Sequelize } = require('sequelize');

// Creating an instance of sequelize to connect to database
const sequelize = new Sequelize('toolbox', 'localdev', 'localdev', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5454,
});

// Employers Table Model
const Employers = sequelize.define('Employers', {

});

// sequelize.sync is an asynchronus method that automatically syncs all the models
async function dbSync() {
  await sequelize.sync();
}
dbSync();

module.exports = { Employers };
