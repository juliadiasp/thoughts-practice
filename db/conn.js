const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc2", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos ao MySQL!");
} catch (error) {
  console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize;