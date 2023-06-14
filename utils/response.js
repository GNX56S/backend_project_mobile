class Response {
  static success(res, message, data = []) {
    return res.status(200).json({
      status: "OK",
      message: message,
      errors: [],
      data: data,
    });
  }

  static created(res, message, data = []) {
    return res.status(201).json({
      status: "Created",
      message: message,
      errors: [],
      data: data,
    });
  }

  static notFound(res, errors) {
    return res.status(404).json({
      status: "Not Found",
      message: "terjadi kesalahan diclient",
      errors: Array.isArray(errors) ? errors : [errors],
      data: [],
    });
  }

  static serverError(res, errors) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: "terjadi kesalahan diserver",
      errors: [errors.message],
      data: [],
    });
  }
}

export default Response;
