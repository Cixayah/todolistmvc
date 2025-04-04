const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB Atlas CONECTADO!");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
    process.exit(1); // Encerra o processo caso haja erro
  }
};

module.exports = connectToDb;
