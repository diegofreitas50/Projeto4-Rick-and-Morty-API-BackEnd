const personagensService = require('../services/personagem,service');
const mongoose = require('mongoose');

const createPersonagemController = async (req, res) => {
  res.status(201).send(await personagensService.createPersonagemService(req.body));
};

const allPersonagensController = async (req, res) => {
  const allPersonagens = await personagensService.allPersonagensService();

  if (allPersonagens.length == 0) {
    return res.status(404).send({ message: 'Nenhum personagem cadastrato!' });
  }

  res.send(allPersonagens);
};

const personagemByIdController = async (req, res) => {
  const chosenPersonagem = await personagensService.personagemByIdService(req.params.id);

  if (!chosenPersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(chosenPersonagem);
};

const updatePersonagemController = async (req, res) => {
  res.send(await personagensService.updatePersonagemService(req.params.id, req.body));
};

const deletePersonagemController = async (req, res) => {
  await personagensService.deletePersonagemService(req.params.id);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

const searchPersonagemController = async (req, res) => {
  const searchPersonagem = await personagensService.searchPersonagemService(req.params.nome);

  if (searchPersonagem.length == 0) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(searchPersonagem);
};

module.exports = {
  createPersonagemController,
  allPersonagensController,
  personagemByIdController,
  updatePersonagemController,
  deletePersonagemController,
  searchPersonagemController,
};
