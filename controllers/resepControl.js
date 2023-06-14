import ResepColl from "../model/schemaResep.js";
import Response from "../utils/response.js";

class ResepControl {
  static async getAll(req, res) {
    try {
      const data = await ResepColl.find();
      return Response.success(res, "semua data resep", data);
    } catch (err) {
      return Response.serverError(res, err);
    }
  }

  static async getAllByName(req, res) {
    try {
      const data = await ResepColl.find({
        judul: {
          $regex: new RegExp(req.params.title),
        },
      });
      return Response.success(res, "semua data resep", data);
    } catch (err) {
      return Response.serverError(res, err);
    }
  }

  static async add(req, res) {
    try {
      const { judul, foto, bahan, proses } = req.body;

      const saveResep = new ResepColl({
        judul: judul,
        foto: foto,
        bahan: bahan,
        proses: proses,
      });

      const data = await saveResep.save();
      return Response.created(res, "resep berhasil ditambah", [data]);
    } catch (err) {
      return Response.serverError(res, err);
    }
  }

  static async edit(req, res) {
    try {
      const { judul, foto, bahan, proses } = req.body;

      await ResepColl.updateOne(
        { _id: req.params.id },
        {
          judul: judul,
          foto: foto,
          bahan: bahan,
          proses: proses,
        }
      );
      return Response.success(res, "resep berhasil ditambah");
    } catch (err) {
      return Response.serverError(res, err);
    }
  }

  static async del(req, res) {
    try {
      const data = await ResepColl.deleteOne({ _id: req.params.id });

      if (data.deletedCount === 0) {
        return Response.notFound(res, "resep tidak ditemukan");
      }

      return Response.success(res, "resep berhasil ditambah", data);
    } catch (err) {
      return Response.serverError(res, err);
    }
  }
}

export default ResepControl;
