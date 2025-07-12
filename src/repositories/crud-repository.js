const { logger } = require("../config");

class crudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
        logger.error("something went wrong in repository create", error);
        throw error;
    }
  }

  async destroy(id) {
    try {
      return await this.model.destroy({ where: { id } });
    } catch (error) {
        logger.error("something went wrong in repository destroy", error);
        throw error;
    }
  }

  async get(id) {
    try {
      return await this.model.findByPk(id);
    } catch (error) {
        logger.error("something went wrong in repository get", error);
        throw error;
    }
  }

  async getAll() {
    try {
      return await this.model.findAll();
    } catch (error) {
        logger.error("something went wrong in repository getAll", error);
        throw error;
    }
  }

  async update(id, data) {
    try {
      return await this.model.update(data, { where: { id } });
    } catch (error) {
        logger.error("something went wrong in repository update", error);
        throw error;
    }
  }
}

module.exports = crudRepository;