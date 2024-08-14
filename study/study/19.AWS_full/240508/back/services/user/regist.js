import { User } from "../../models/index.js";

export default async (req, res) => {
  try {
    if (req.body.pw != req.body["pw-check"]) {
      throw new Error("not match password");
    }
    const user = await User.create(req.body);
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    if (err.message == "not match password") {
      res.status(400);
    } else {
      res.status(409);
    }
    res.json({ err: err.message });
  }
};
