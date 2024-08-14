import { Model, DataTypes, Sequelize } from "sequelize";

export default class Todo extends Model {
  public readonly id!: number;
  public content!: string;
  public isComplete!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize) {
    Todo.init(
      {
        content: {
          type: DataTypes.STRING(100),
        },
        isComplete: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      { sequelize, modelName: "todo", tableName: "todo", timestamps: true }
    );
  }
}
