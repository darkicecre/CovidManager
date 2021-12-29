const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserAccount', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "username"
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    identity_card: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    role: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_alert: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'UserAccount',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "UserAccount_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "username",
        unique: true,
        fields: [
          { name: "user_name" },
        ]
      },
    ]
  });
};
