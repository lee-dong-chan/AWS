import { Board, Category } from "../../models/index.js";

export default async (req, res) => {
  try {
    const board = await Board.findAll({
      attributes: ["title", "content", "createdAt"],
      include: [
        {
          model: Category,
          attributes: ["name"],
        },
      ],
    });
    res.json(board);
  } catch (err) {
    console.error(err);
  }
};
