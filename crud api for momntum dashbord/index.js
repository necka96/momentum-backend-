import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import connectDb from "./mongodb/connect.js";
import toDo from "./routers/toDo.js";
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use("/list/v1", toDo);
app.get("/", async (req, res) => {
  res.send("Welcome to toDo crud api");
});

const startServer = async () => {
  try {
    connectDb(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("server has started on port http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
