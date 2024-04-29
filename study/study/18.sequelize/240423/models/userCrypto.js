const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserCrypto extends Model {
    static init() {
      return super.init(
        {
          userId: {
            type: DataTypes.STRING(50),
            unique: true,
          },
          pw: {
            type: DataTypes.STRING(50),
            allowNULL: false,
          },
          phone: {
            type: DataTypes.STRING(50),
            allowNull: false,
          },
        },
        {
          sequelize,

          modelName: "UserCrypto",
          tableName: "user_crypto",
          paranoid: true,
          underscored: true,
        }
      );
    }
    static associate(db) {
      db.UserCrypto.hasOne(db.UserInfo, {
        foreignKey: "id",
        SourceKey: "id",
      });
    }
  }
  return UserCrypto.init();
};
