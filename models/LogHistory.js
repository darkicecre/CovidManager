const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LogHistory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_person: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Patient',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time_start: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LogHistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "LogHistory_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
