const mongoose = require('mongoose');

const connecteToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB ATLAS CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB Atlas, erro ${error}`),
    );
};

module.exports = connecteToDatabase;
