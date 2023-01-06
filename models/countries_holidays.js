'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class countries_holidays extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  countries_holidays.init({
    country: DataTypes.STRING,
    name: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    year: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'countries_holidays',
  });
  return countries_holidays;
};