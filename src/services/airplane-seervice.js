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

async function getAirplane(id) {
  try {
    return await airplaneRepository.get(id);
  } catch (error) {
    throw new Error("not found");
  }
}

async function deleteAirplane(id) {
  try {
    return await airplaneRepository.destroy(id);
  } catch (error) {
    throw error;
  }
}
async function updateAirplane(id, data) {
  try {
    return await airplaneRepository.update(id, data);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAirplane,
  getAllAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane
};
