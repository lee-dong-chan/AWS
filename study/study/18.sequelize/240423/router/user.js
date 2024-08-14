const router = require("express").Router();
const { UserCrypto, UserInfo, sequelize, Sequelize } = require("../models");

// localhost:8800/api/user/test POST
// router.post("/test", async (req, res) => {
//   const transaction = await sequelize.transaction();
//   try {
//     const userId = "test1",
//       pw = "qwer",
//       phone = "123-1234-1231",
//       name = "방지완";
//     // nick = "무념무상";
//     await UserCrypto.create({ userId, pw, phone }, { transaction });
//     // await UserInfo.create({ name, nick: null }, { transaction });
//     await UserInfo.create({ name }, { transaction });
//     await transaction.commit();
//   } catch (err) {
//     console.error(err);
//     await transaction.rollback();
//   }
//   res.send("ok");
// });

router.post("/test2", async (req, res) => {
  try {
    await sequelize.transaction(async (transaction) => {
      //   const userId = "test2",
      //     pw = "qwer",
      //     phone = "123-1234-1231",
      //     name = "이정배",
      //     nick = "햄스터";
      //   await UserCrypto.create({ userId, pw, phone }, { transaction });
      //   //   await UserInfo.create({ name, nick: null }, { transaction });
      //   await UserInfo.create({ name, nick }, { transaction });
      const tempArr = [
        {
          userId: "test1",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "김강문",
          nick: "아무거나",
          age: 26,
          address: "서울시",
        },
        {
          userId: "test2",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "박성민",
          nick: "캐럿",
          age: 34,
          address: "서울시",
        },
        {
          userId: "test3",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "방지완",
          nick: "곰",
          age: 27,
          address: "서울시",
        },
        {
          userId: "test4",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "손민복",
          nick: "민복손",
          age: 27,
          address: "고양시",
        },
        {
          userId: "test5",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이동찬",
          nick: "사과",
          age: 29,
          address: "남양주시",
        },
        {
          userId: "test6",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이승배",
          nick: "무념무상",
          age: 25,
          address: "안양시",
        },
        {
          userId: "test7",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이정배",
          nick: "햄스터",
          age: 23,
          address: "안양시",
        },
      ];
      for (const { userId, pw, phone, name, nick, age, address } of tempArr) {
        await UserCrypto.create({ userId, pw, phone }, { transaction });
        await UserInfo.create(
          { name, nick, age, address, gender: "M" },
          { transaction }
        );
      }
    });
  } catch (err) {
    console.error(err);
  }
  res.send("ok");
});

router.get("/info", async (req, res) => {
  try {
    await sequelize.transaction(async (transaction) => {
      //   const userId = "test2",
      //     pw = "qwer",
      //     phone = "123-1234-1231",
      //     name = "이정배",
      //     nick = "햄스터";
      //   await UserCrypto.create({ userId, pw, phone }, { transaction });
      //   //   await UserInfo.create({ name, nick: null }, { transaction });
      //   await UserInfo.create({ name, nick }, { transaction });
      const tempArr = [
        {
          userId: "test1",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "김강문",
          nick: "아무거나",
          age: 26,
          address: "서울시",
        },
        {
          userId: "test2",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "박성민",
          nick: "캐럿",
          age: 34,
          address: "서울시",
        },
        {
          userId: "test3",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "방지완",
          nick: "곰",
          age: 27,
          address: "서울시",
        },
        {
          userId: "test4",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "손민복",
          nick: "민복손",
          age: 27,
          address: "고양시",
        },
        {
          userId: "test5",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이동찬",
          nick: "사과",
          age: 29,
          address: "남양주시",
        },
        {
          userId: "test6",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이승배",
          nick: "무념무상",
          age: 25,
          address: "안양시",
        },
        {
          userId: "test7",
          pw: "qwer",
          phone: "123-4567-1234",
          name: "이정배",
          nick: "햄스터",
          age: 23,
          address: "안양시",
        },
      ];
      for (const { userId, pw, phone, name, nick, age, address } of tempArr) {
        await UserCrypto.create({ userId, pw, phone }, { transaction });
        await UserInfo.create(
          { name, nick, age, address, gender: "M" },
          { transaction }
        );
      }
    });
  } catch (err) {
    console.error(err);
  }
  res.send(
    // await UserInfo.findAll({
    //   where: { address: "서울시" },
    // })
    // SELECT AVG(age) AS avg_age FROM user_info;
    // await UserInfo.findAll({
    //   attributes: [[sequelize.fn("AVG", Sequelize.col("age")), "avg_age"]],
    // })

    // await UserInfo.findAll({
    //   attributes: [[sequelize.fn("SUM", sequelize.col("age")), "sum_age"]],
    // }) // SELECT SUM(age) AS avg_age FROM user_info;

    // await UserInfo.findAll({
    //   attributes: [[sequelize.fn("count", sequelize.col("age")), "cnt_age"]],
    // }) // SELECT COUNT(age) AS avg_age FROM user_info;

    // await UserInfo.findAll({
    //   attributes: ["address"],
    //   group: ["address"],
    // }) // SELECT address FROM user_info GROUP BY address;

    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    // }) // SELECT address, COUNT(id) AS cnt FROM user_info GROUP BY address;

    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: ["cnt"],
    // })

    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: [["cnt", "desc"]],
    // }) // SELECT address, COUNT(*) AS cnt FROM user_info GROUP BY address ORDER BY COUNT(*) DESC;

    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: [["cnt", "desc"]],
    //   having: { cnt: 1 },
    // })// SELECT address, COUNT(*) AS cnt FROM user_info GROUP BY address HAVING cnt = 1;

    // SELECT address, COUNT(*) AS cnt FROM user_info GROUP BY address HAVING cnt > 1;
    // await UserInfo.findAll({
    //   attributes: ["address", [sequelize.fn("count", "id"), "cnt"]],
    //   group: ["address"],
    //   order: [["cnt", "desc"]],
    //   // having: { cnt: { [Sequelize.Op.gt]: 1 } },
    //   // having: { cnt: { [Sequelize.Op.lt]: 3 } },
    //   // having: {

    //   //   [Sequelize.Op.and]: [
    //   //     { cnt: { [Sequelize.Op.gt]: 1 } },
    //   //     { cnt: { [Sequelize.Op.lt]: 3 } },
    //   //   ],

    //   //   // [Sequelize.Op.or]: [
    //   //   //   { cnt: { [Sequelize.Op.gt]: 2 } },
    //   //   //   { cnt: { [Sequelize.Op.lt]: 2 } },
    //   //   // ],

    //   cnt: { [Sequelize.Op.ne]: 2 },
    //   // },
    // })

    // await UserCrypto.findAll({
    //   attributes: ["id", "user_id", "pw", "phone"],
    //   include: [
    //     {
    //       model: UserInfo,
    //       attributes: ["name", "nick", "age", "address"],
    //     },
    //   ],
    // })

    // await UserCrypto.findAll({
    //   attributes: ["id", "user_id", "pw", "phone"],
    //   include: [
    //     {
    //       model: UserInfo,
    //       attributes: ["name", "nick", "age", "address"],
    //     },
    //   ],
    //   order: [[UserInfo, "age", "desc"]], // ORDER BY ui.age
    // })

    // // Sequelize.literal()//Quert 보내기용
    // await UserCrypto.findAll({
    //   attributes: ["id", "user_id", "pw", "phone"],
    //   include: [
    //     {
    //       model: UserInfo,
    //       attributes: ["name", "nick", "age", "address"],
    //     },
    //   ],
    //   order: [[UserInfo, "age", "desc"]],
    //   limit: 2,
    //   offset: 2,
    // })

    await UserCrypto.findAll({
      attributes: [
        [sequelize.col("UserInfo.address"), "address"], //UserInfo.address AS address
        [sequelize.fn("count", "id"), "address_cnt"], //COUNT(UserCrypto.id) As adress_cnt
        [sequelize.fn("count", sequelize.col("UserInfo.address")), "name"], //COUNT(UserInfo.name) AD adress_cnt
        [sequelize.fn("count", "*"), "address2_cnt"], //COUNT(*) AD adress_cnt
      ],
      include: [
        {
          model: UserInfo,
          attributes: [],
        },
      ],
      // order: [[UserInfo, "age", "desc"]],
      // limit: 2,
      // offset: 2,
      group: ["address"],
    })
  );
});

router.get("/test", async (req, res) => {
  //   res.send([...(await UserCrypto.findAll()), ...(await UserInfo.findAll())]);
  res.send(
    await UserCrypto.findAll({
      where: {},
      attributes: ["userId", "phone"],
      include: [
        {
          model: UserInfo,
          attributes: ["name", "nick"],
        },
      ],
    })
  );
});

module.exports = router;
