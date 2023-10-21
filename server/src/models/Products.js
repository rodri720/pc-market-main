const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING, // Change the data type to match your needs (e.g., VARCHAR, TEXT, etc.)
      },
      resolucion: {
        type: DataTypes.STRING, // Change the data type to match your needs
      },
      memoria: {
        type: DataTypes.STRING, // Change the data type to match your needs
      },
      procesador: {
        type: DataTypes.STRING, // Change the data type to match your needs
      },
    },
    
  );
};
