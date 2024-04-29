// class 형태 define 보다 관계추가가 쉽다.

const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          field: "user_id", // coulumn명을 지정할수 있다.
          type: Sequelize.STRING(50),
          allowNull: false, // default : true
          unique: true,
        },
        name: {
          type: Sequelize.STRING(10),
          allowNull: false, // default : true
          //unique:true
        },
        password: {
          type: Sequelize.STRING(64),
          allowNull: false, // default : true
        },
        age: {
          type: Sequelize.TINYINT.UNSIGNED,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "user",
        underscored: true,
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Board, {
      soureKey: "userId",
      foreignKey: "usersId",
      // foreignKey: { name: "usersId", allowNull: false }, --->NOT NULL
      onDelete: "cascade",
    }); // 1:n

    // db.user.hasOne(db.Board, { sourceKey: "userId" }); // 1:1
    db.User.belongsToMany(db.User, {
      through: "follow", // 만들어지는 테이블
      foreignKey: "followerId", //column명
      as: "follower", // sequelize가 사용하는 별칭
      // sourceKey: "userId",
    });
    db.User.belongsToMany(db.User, {
      through: "follow",
      foreignKey: "followingId", //column명
      as: "following", // sequelize가 사용하는 별칭
      // sourceKey: "userId",
    });
    db.User.belongsToMany(db.Board, {
      through: "block",
      foreignKey: "userId", //column명
      as: "user", // sequelize가 사용하는 별칭
      // sourceKey: "userId",
    });
  }
};
