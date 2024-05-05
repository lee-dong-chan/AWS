import { Router } from "express";
import board from "./board.js";

const router = Router();
router.use("/board", board);

export default router;

// export const temp = () => {};
// export const temp2 = () => {};
// export const temp3 = () => {};
// export const temp4 = () => {};
// export const temp5 = () => {};
