"use strict";
const { Model } = require("sequelize");
const { encryptPassword } = require("../../utils/password");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
      hooks: {
        beforeCreate: async (user, options) => {
          if (user.password) {
            const hashedPassword = await encryptPassword(user.password);
            user.password = hashedPassword;
          }
        },
      },
    }
  );
  return User;
};
