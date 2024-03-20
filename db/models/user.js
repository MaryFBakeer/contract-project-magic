'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Basket, Card}) {
      // define association here
      this.hasOne(Basket, { foreignKey: 'user_id' });
      this.hasMany(Card, { foreignKey: 'user_id'})
    }
  }
  User.init({
    name: DataTypes.TEXT,
    login: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    city: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};