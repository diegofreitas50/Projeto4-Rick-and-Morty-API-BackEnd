const Personagem = require('../models/Personagem');

const createPersonagemService = async (newPersonagem) => {
  return await Personagem.create(newPersonagem);
};

const allPersonagensService = async () => {
  return await Personagem.find();
};

const personagemByIdService = async (id) => {
  return await Personagem.findById(id);  
};

const updatePersonagemService = async (id, editedPersonagem) => {
  await Personagem.findByIdAndUpdate(id, editedPersonagem);
  return editedPersonagem;
};

const deletePersonagemService = async (id) => {
  return await Personagem.findByIdAndDelete(id);
};

const searchPersonagemService = async (nome) => {
  return await Personagem.find({ nome: {$regex: nome, $options: "i" }});
};

module.exports = {
  createPersonagemService,
  allPersonagensService,
  personagemByIdService,
  updatePersonagemService,
  deletePersonagemService,
  searchPersonagemService,
};
