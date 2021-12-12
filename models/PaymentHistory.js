const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaymentHistory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_package: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'NeccessaryPackage',
        key: 'id'
      }
    },
    id_payer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'UserAccount',
        key: 'id'
      }
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    time_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    list_product: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PaymentHistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PaymentHistory_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
