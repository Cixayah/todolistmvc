const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
//string de conexão
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("mongodb Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};
module.exports = connectToDb;
