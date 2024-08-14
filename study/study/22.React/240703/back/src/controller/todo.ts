import { Todo } from "../models/index";
import { Request, Response } from "express";

export const getList = async (req: Request, res: Response) => {
  console.log(new Date());
  try {
    let { page } = req.params;
    if (!page) page = "1";
    const list = await Todo.findAll({ limit: 10, offset: (+page - 1) * 10 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "failed to get todo list" });
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { content } = req.body;
    const todo = await Todo.create({ content });
    res.status(201).json({ todo });
  } catch (err) {
    res.status(500).json({ error: "failed to get todo list" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { id } = req.body;
    const todo = await Todo.destroy({
      where: { id: id },
    });
    res.status(201).json({ todo });
  } catch (err) {
    res.status(500).json({ error: "failed to get todo list" });
  }
};

export const completeTodo = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { id } = req.body;
    const todo = await Todo.update(
      {
        isComplete: true,
      },
      {
        where: { id: id },
      }
    );
    res.status(201).json({ todo });
  } catch (err) {
    res.status(500).json({ error: "failed to get todo list" });
  }
};
