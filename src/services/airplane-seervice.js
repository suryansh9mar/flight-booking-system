const {AirplaneRepository} = require("../repositories");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    return await airplaneRepository.create(data);
  } catch (error) {
    throw error;
  }
}

async function getAllAirplanes() {
  try {
    return await airplaneRepository.getAll();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAirplane,
  getAllAirplanes
};
