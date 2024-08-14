import { User } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (req.body.pw != req.body["pw-check"]) {
      throw new Error("not match password");
    }
    const user = User.create(req.body);
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    res.json({ err: err.message });
  }
};
