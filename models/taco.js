'use strict';
module.exports = function(sequelize, DataTypes) {
  var taco = sequelize.define('taco', {
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return taco;
};