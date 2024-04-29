const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "User", // 모델명
    {
      //column,field
      userID: {
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
      modelName: "User", // Sequelize가 이해하는 Table 이름 (모델명)
      tableName: "user", // DB에서의 Table 이름
      underscored: true,
      // createdAt: false, // default:true
      //  updatedAt: false, // default:true
      paranoid: true, // 삭제시 완전삭제가 아닌 deleted_at 을 통해서 확인
    }
  );
};
