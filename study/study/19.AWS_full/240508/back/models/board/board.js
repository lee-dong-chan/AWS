import { Model, DataTypes } from "sequelize";

export default class Board extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(30),
        },
        content: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,

        modelName: "Board",
        tableName: "board",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
  static associate({ Category, Board, User }) {
    Board.belongsTo(Category);
    Board.belongsTo(User);
  }
}
