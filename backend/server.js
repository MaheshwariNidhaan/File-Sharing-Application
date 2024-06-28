import express from "express";
import DBConnection from "./database/db.js";
import fileRouter from "./routes/fileRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

const PORT = process.env.PORT || 8000;
dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

DBConnection();

app.get("/", (req, res) => {
  res.send("Hello is coming from backend server.js");
});

app.use("/", fileRouter);

app.listen(8000, () => {
  console.log(`Server is listening on port ${PORT}`);
});
