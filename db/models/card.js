const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ User, Order_line }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Order_line, { foreignKey: 'card_id' });
    }
  }
  Product.init({
    title: DataTypes.TEXT,
    img: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    degree: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Product;
};
