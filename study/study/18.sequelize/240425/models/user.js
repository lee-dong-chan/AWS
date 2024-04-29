const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static init() {
      return super.init(
        {
          userId: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
          },
          pw: {
            type: DataTypes.STRING(64),
            allowNull: false,
          },
          nick: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
          },
        },
        {
          sequelize,

          modelName: "User",
          tableName: "todo_user",
          underscored: true,
          paranoid: true,
          timestamps: true,
        }
      );
    }
    static associate(db) {
      db.User.hasMany(db.Todo, {
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
  }
  return User.init();
};
