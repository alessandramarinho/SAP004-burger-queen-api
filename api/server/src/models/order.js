'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    customer: DataTypes.STRING,
    table: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    item: DataTypes.STRING,
    cliente: DataTypes.STRING,
    items: DataTypes.VIRTUAL
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.ProductsOrder, {
      foreignKey: 'orderId'
    })
  };
  return Order;
};