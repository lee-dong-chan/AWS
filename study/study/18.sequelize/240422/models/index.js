const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const sequelize = new Sequelize(
  config.dataabase,
  config.username,
  config.password,
  config
);
// const User = require("./user")(sequelize);
const User = require("./user").init(sequelize);
const Board = require("./boards").init(sequelize);

const db = { sequelize, Sequelize, User, Board };
User.associate(db);
Board.associate(db);

module.exports = db;
