const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
//STRING DE CONEXÃO DO BANCO
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("mongodb Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};
module.exports = connectToDb;
