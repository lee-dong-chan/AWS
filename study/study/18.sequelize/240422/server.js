// sequelize : DB를 연결할떄 유용하게 사용할수 있는 라이브러리.
// - sequelize와 합꼐쓰는 mysql 라이브러리는 msysql2이다.
require("dotenv").config();

const { sequelize, Sequelize, User, Board } = require("./models");
(async () => {
  await sequelize.sync({ force: true });
  console.log("acess db");
  await User.create({
    userID: "test",
    name: "test",
    password: "test",
  });
  for (let i = 0; i < 100; i++) {
    await User.create({
      userID: "test" + i,
      name: "test" + i,
      password: "test",
    });
  }
  const list = await User.findAndCountAll({
    where: { name: { [Sequelize.Op.like]: "test_1" } },
    limit: 3,
    offset: 3,
  });
  console.log(list.rows[0].name);
  console.log(list.rows[2].name);
  console.log(list.rows[3]);
  console.log(list.count);
})();
