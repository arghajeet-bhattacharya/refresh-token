const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_DATABASE,
} = require("../../config");

module.exports = {
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  host: MYSQL_HOST,
  dialect: "mysql",
  operatorsAliases: false,
  seederStorage: "sequelize",
  seederStorageTableName: "sequelize_data",
  logging: true,
};
