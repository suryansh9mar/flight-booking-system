const crudRepository = require("./crud-repository");
const { airplane } = require("../models");

class AirplaneRepository extends crudRepository {
  constructor() {
    super(airplane);
  }
}
module.exports = AirplaneRepository;
