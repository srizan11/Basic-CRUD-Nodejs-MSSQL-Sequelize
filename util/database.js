const Sequelize = require("sequelize");
const sequelize = new Sequelize("wendb", "root", "root", {
    dialect: "mssql",
    host: "localhost",
    dialectOptions:{
        options:{
            encrypt: false,
            trustServerCertificate: true,
        },
    },
    logging: false,
});

module.exports = sequelize;