import { Board, Category } from "../../models/index.js";

export default async (req, res) => {
  try {
    const list = await Board.findAll({
      include: [
        {
          model: Category, //Board에서의 카테고리 가져오기
          include: [
            {
              model: Category, //상위 카테고리
              as: "parent",
              attributes: {
                exclude: ["careatedAt", "updatedAt"],
              },
            },
            {
              model: Category, //하위 카테고리
              as: "children",
              attributes: {
                exclude: ["careatedAt", "updatedAt"],
              },
            },
          ],
          attributes: {
            exclude: ["careatedAt", "updatedAt", "delededAt"],
          },
        },
      ],
    });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.send("error");
  }
};
