const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ManagerHistory', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_manager: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'UserAccount',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    describe: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ManagerHistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ManagerHistory_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
