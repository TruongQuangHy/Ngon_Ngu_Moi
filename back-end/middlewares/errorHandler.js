//Không tìm thấy
const notFound = (req, res, next) => {
    const error = new Error(`Not Found : ${req.originalUrl}`);
    res.status(404);
    next(error);
};

//Lỗi sử lý
const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statuscode);
    res.json({
        messgae: err?.messgae,
        stack: err?.stack,
    });
};

module.exports = { errorHandler, notFound };