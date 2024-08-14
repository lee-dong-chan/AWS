import { Router } from "express";
import getlist from "../services/board/list.js";
import write from "../services/board/write.js";
import board from "../services/board/board.js";
const router = Router();

router.get("/list", getlist);
router.post("/write", write);
router.get("/board", board);
export default router;
