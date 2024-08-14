import { Router } from "express";
import add from "../serviece/Add.js";
import del from "../serviece/delete.js";
import complete from "../serviece/complete.js";
const router = Router();

router.use(list);
router.post("/add", add);
router.post("/delete", del);
router.post("/complete", complete);

export default router;
