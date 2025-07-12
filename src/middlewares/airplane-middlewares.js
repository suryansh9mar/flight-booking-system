const {StatusCodes} = require("http-status-codes");

const airplaneMiddleware = (req, res, next) => {
    if(req.body.modelNumber) next();
    else return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        data: {},
        error: "please provide modelNumber",
        message: "something went wrong while creating airplane"
    });
}

module.exports = {
    airplaneMiddleware
}