'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Order}) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Order, { foreignKey: 'basket_id' });
    }
  }
  Basket.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};