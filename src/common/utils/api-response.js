class ApiResponse {
  static ok(res, message, data = null) {
    return res.status.json({
      success: true,
      message,
      data,
    });
  }
  static created(res, message, data = null) {
    return res.status.json({
      success: true,
      message,
      data,
    });
  }
  static noContent(res){
    return res.status(200).send()
  }
}
