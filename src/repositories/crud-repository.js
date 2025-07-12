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
      const response = await this.model.destroy({ where: { id } });
      if (!response) throw new Error("not found");
      return response;
    } catch (error) {
      logger.error("something went wrong in repository destroy", error);
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      if (!response) throw new Error("not found");
      return response;
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
      const resposne = await this.model.update(data, { where: { id } });
      if (resposne[0]===0) throw new Error("not found");
      return resposne;
    } catch (error) {
      logger.error("something went wrong in repository update", error);
      throw error;
    }
  }
}

module.exports = crudRepository;
