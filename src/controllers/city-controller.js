const {CityService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const {errorResponse,successResponse} = require('../utils');

async function createCity(req,res){
    try {
        const response = await CityService.createCity(req.body);
        successResponse.data = response;
        successResponse.message = "city created successfully";
        res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        errorResponse.error = error.message;
        errorResponse.message = "something went wrong while creating city";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
}

async function updateCity (req,res){
    try {
        const response = await CityService.updateCity(req.params.id,req.body);
        successResponse.data = response;
        successResponse.message = "city updated successfully";
        res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error.message;
        errorResponse.message = "something went wrong while updating city";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
}

async function deleteCity(req,res){
    try {
        const response = await CityService.deleteCity(req.params.id);
        successResponse.data = response;
        successResponse.message = "city deleted successfully";
        res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error.message;
        errorResponse.message = "something went wrong while deleting city";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
}

async function getCity(req,res){
    try {
        const response = await CityService.getCity(req.params.id);
        successResponse.data = response;
        successResponse.message = "city fetched successfully";
        res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error = error.message;
        errorResponse.message = "something went wrong while fetching city";
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
}

module.exports={
    createCity,
    updateCity,
    deleteCity,
    getCity
}