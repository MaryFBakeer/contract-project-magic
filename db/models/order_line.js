'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_line extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Card, Order}) {
      // define association here
      this.belongsTo(Card, { foreignKey: 'card_id' });
      this.belongsTo(Order, { foreignKey: 'order_id' });
    }
  }
  Order_line.init({
    card_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_line',
  });
  return Order_line;
};