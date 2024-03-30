const Sequelize = require("sequelize");

const sequelize = new Sequelize("sw-926-927", "root", "123456789", {
  host: "localhost",
  dialect: "mysql",
});
// const createTable = async () => {
//   try {
//     await sequelize.sync({ alter: true });
//     console.log("success");
//   } catch (error) {
//     console.log("error");
//   }
// };
// createTable();
module.exports = sequelize;
