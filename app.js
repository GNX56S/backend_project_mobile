import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import resep from "./routers/resep.js";
dotenv.config();

// mongoDB connection
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("database terhubung", db.host));

// express
const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use((req, res) => {
  return res.status(404).json({
    status: "Not Found",
    message: "terjadi kesalahan diclient",
    errors: ["route not found "],
    data: [],
  });
});

app.use("/resep", resep);

app.listen(5000, function () {
  console.log("server sedang berjalan");
});
