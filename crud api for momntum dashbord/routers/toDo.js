import express from "express";
import ToDo from "../models/toDo.js";

const router = express.Router();

router.route("/toDo").get(async (req, res) => {
  try {
    const getToDO = await ToDo.find({});
    res.status(200).json(getToDO);
  } catch (error) {
    res.status(500).json({ error: "Error can't get toDo" });
  }
});
router.route("/").post(async (req, res) => {
  try {
    const { toDo } = req.body;

    const newToDo = await ToDo.create({
      toDo: toDo,
    });

    res.status(200).json(newToDo);
  } catch (error) {
    res.status(500).json({ error: "Error can't add toDo" });
  }
});
router.route("/toDo/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const updateToDo = await ToDo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateToDo);
  } catch (error) {
    res.status(500).json({ error: "Error can't update toDo" });
  }
});

router.route("/toDo/delete/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    const deleteToDo = await ToDo.findByIdAndDelete(id);
    res.status(200).json(deleteToDo);
  } catch (error) {
    res.status(500).json({ error: "Error can't delete toDo" });
  }
});

export default router;
