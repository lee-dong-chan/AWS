import { Sequelize, Model, Options } from "sequelize";
import mySQLconfig from "../../server/config/mysql.json";
import Todo from "./Todo";

const config: Options = mySQLconfig.development as Options;
export const sequelize = new Sequelize(config);
Todo.initialize(sequelize);

export { Todo };

// const db = {
//   Todo,
// };

// Object.keys(db).forEach((model) => {
//   if (db[model].associate) {
//     db[model].associate(db);
//   }
// });

// export { Sequelize };
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;
