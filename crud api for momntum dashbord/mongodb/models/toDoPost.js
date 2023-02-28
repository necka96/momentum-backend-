import mongoose from "mongoose";

const ToDo = new mongoose.Schema({
  toDo: { type: "String", require: true },
});

const ToDoShema = mongoose.model("ToDo", ToDo);

export default ToDoShema;
