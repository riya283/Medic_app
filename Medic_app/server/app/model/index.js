const dbConfig = require("../config/db_config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users_model.js")(sequelize, Sequelize);
db.admins = require("./admin_model.js")(sequelize, Sequelize);
db.medic_op = require("./medic_op_model.js")(sequelize, Sequelize);

module.exports = db;