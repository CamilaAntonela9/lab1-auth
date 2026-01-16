const sequelize = require("./config/db");

require("./models/User");

const iniciar = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexion establecida con la base de datos");
        await sequelize.sync({ alter: true });
        console.log("Tablas sincronizadas correctamente");
        process.exit(0);
    } catch (error) {
        console.log("Error al sincronizar: " + error.message);
        process.exit(1);
    }
}

iniciar();