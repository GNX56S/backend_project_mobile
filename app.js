import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("oke");
});

app.listen(5000, function () {
  console.log("server sedang berjalan");
});
