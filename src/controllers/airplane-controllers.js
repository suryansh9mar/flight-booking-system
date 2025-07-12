const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { errorResponse, successResponse } = require("../utils");
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
    });
  }
}

async function getAllAirplanes(req, res) {
  try {
    const response = await AirplaneService.getAllAirplanes();
    successResponse.data = response;
    successResponse.message = "airplanes fetched successfully";
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    errorResponse.message = "something went wrong while fetching airplanes";
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}

async function getAirplane(req, res) {
  try {
    const response = await AirplaneService.getAirplane(req.params.id);
    successResponse.data = response;
    successResponse.message = "airplane fetched successfully";
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error.message;
    errorResponse.message = "something went wrong while fetching airplanes";
    if (error.message === "Error: not found")
      return res.status(StatusCodes.NOT_FOUND).json(errorResponse);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}

async function deleteAirplane(req, res) {
  try {
    const response = await AirplaneService.deleteAirplane(req.params.id);
    successResponse.data = response;
    successResponse.message = "airplane deleted successfully";
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error.message;
    errorResponse.message = "something went wrong while deleting airplanes";
    if (error.message === "not found")
      return res.status(StatusCodes.NOT_FOUND).json(errorResponse);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}

async function updateAirplane(req, res) {
  try {
    const response = await AirplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    successResponse.data = response;
    successResponse.message = "airplane updated successfully";
    res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error.message;
    errorResponse.message = "something went wrong while deleting airplanes";
    if (error.message === "not found")
      return res.status(StatusCodes.NOT_FOUND).json(errorResponse);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
}

module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
};
