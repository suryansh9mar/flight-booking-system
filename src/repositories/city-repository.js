const crudRepository = require("./crud-repository");
const { city } = require("../models");

class CityRepository extends crudRepository {
  constructor() {
    super(city);
  }
}
module.exports = CityRepository;
