const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
//Conexão com mongodb,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("mongodb Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};
module.exports = connectToDb;
