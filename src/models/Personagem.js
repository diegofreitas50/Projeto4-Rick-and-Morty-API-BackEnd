const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },

  imagem: {
    type: String,
    require: true,
  },
});

const Personagem = mongoose.model('personagens', PersonagemSchema);

module.exports = Personagem;
