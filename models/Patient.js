const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Patient', {
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
    identity_card: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    treatment_place_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'TreatmentPlace',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Patient',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Patient_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
