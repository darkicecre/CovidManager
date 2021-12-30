const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NeccessaryPackage', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    list_product: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    limit_count_package_day: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    limit_count_package_week: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    limit_count_package_month: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NeccessaryPackage',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "NeccessaryPackage_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
