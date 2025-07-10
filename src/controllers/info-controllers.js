const {StatusCodes} = require('http-status-codes');
const info = (req, res) => {
    res.status(StatusCodes.OK).json({
        success: true,
        data:{},
        error:{},
        message:"api is live"
    });
}


module.exports={
    info
}

