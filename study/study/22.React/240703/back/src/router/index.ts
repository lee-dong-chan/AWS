import { Router } from "express";
import { getList, addTodo, deleteTodo, completeTodo } from "../controller/todo";

const router: Router = Router();

router.get("/todo/:page", getList);
router.post("/todo", addTodo);
router.post("/todo/delete", deleteTodo);
router.post("/todo/isComplete", completeTodo);

export default router;
