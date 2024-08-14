import { Router } from "express";
import board from "./board.js";
import user from "./user.js";
import checkLog from "../services/user/checkLog.js";
import write from "../services/board/write.js";
const router = Router();

router.use(checkLog);

router.use("/board", board);
router.use("/user", user);
router.post("/write", write);
export default router;

// export const temp = () => {};
// export const temp2 = () => {};
// export const temp3 = () => {};
// export const temp4 = () => {};
// export const temp5 = () => {};
