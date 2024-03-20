'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Basket, Order_line}) {
      // define association here
      this.belongsTo(Basket, { foreignKey: 'basket_id' });
      this.hasMany(Order_line, { foreignKey: 'order_id' });
    }
  }
  Order.init({
    basket_id: DataTypes.INTEGER,
    status: DataTypes.TEXT,
    total_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};