const { CityRepository } = require("../repositories");
const { get } = require("../routes/v1");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    return await cityRepository.create(data);
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw error(explanation);
    }
    throw error;
  }
}

async function updateCity(id, data) {
  try {
    return await cityRepository.update(id, data);
  } catch (error) {
    throw error;
  }
}

async function deleteCity(id) {
  try {
    return await cityRepository.destroy(id);
  } catch (error) {
    throw error;
  }
}

async function getCity() {
  try {
    return await cityRepository.getAll();
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createCity,
  updateCity,
  deleteCity,
  getCity
};
