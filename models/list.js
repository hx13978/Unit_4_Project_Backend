'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {

    static associate(models) {
      
    }
  };
  List.init({
    date: DataTypes.STRING,
    name: DataTypes.STRING,
    activity: DataTypes.STRING,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};