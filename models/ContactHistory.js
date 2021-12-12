const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ContactHistory', {
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
    id_other_person: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Patient',
        key: 'id'
      }
    },
    time_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ContactHistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ContactHistory_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
