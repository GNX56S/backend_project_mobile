import express from "express";
import ResepControl from "../controllers/resepControl.js";

const resep = express.Router();

resep.get("/", ResepControl.getAll);
resep.get("/:id", ResepControl.getById);
resep.get("/search/:title", ResepControl.getAllByName);
resep.post("/", ResepControl.add);
resep.put("/:id", ResepControl.edit);
resep.delete("/:id", ResepControl.del);

export default resep;
