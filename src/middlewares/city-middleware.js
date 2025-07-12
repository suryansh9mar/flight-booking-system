const {StatusCodes} = require("http-status-codes");

const cityMiddleware = (req, res, next) => {
    if(req.body.name ) next();
    else return res.status(StatusCodes.BAD_REQUEST).json({
        success: false,
        data: {},
        error: "please provide name",
        message: "something went wrong while creating city"
    });
}

module.exports = {
    cityMiddleware
}