const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { errorResponse , successResponse } = require("../utils");
const { log } = require("winston");

async function createAirplane(req, res) {
  try {
    const response = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    res.status(StatusCodes.CREATED).json({
      success: true,
      data: response,
      error: {},
      message: "airplane created successfully",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        data: {},
        error: error,
        message: "something went wrong while creating airplane",
    })
  }
}

async function getAllAirplanes(req, res) {
  console.log("hello",successResponse);

  try {
    const response = await AirplaneService.getAllAirplanes();
    successResponse.data = response;
    successResponse.message = "airplanes fetched successfully";
    console.log(successResponse,"thihs is the response sent");
    
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    errorResponse.message = "something went wrong while fetching airplanes";
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}

module.exports = {
  createAirplane,
  getAllAirplanes
};