import mongoose from "mongoose";

const schemaResep = mongoose.Schema({
  judul: String,
  foto: String,
  bahan: [String],
  proses: [String],
  tanggal: {
    type: Date,
    default: Date.now,
  },
});

const ResepColl = mongoose.model("resep", schemaResep, "resep");

export default ResepColl;
