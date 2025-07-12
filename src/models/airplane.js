"use strict";
const { Model } = require("sequelize");
const { all } = require("../routes");
module.exports = (sequelize, DataTypes) => {
  class airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  airplane.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      capacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "airplane",
    }
  );
  return airplane;
};
