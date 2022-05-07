const charactersService = require('../services/characters.service');

const createCharacterController = async (req, res) => {
  res.status(201).send(await charactersService.createCharacterService(req.body));
};

const allCharactersController = async (req, res) => {
  const allCharacters = await charactersService.allCharactersService();

  if (allCharacters.length == 0) {
    return res.status(404).send({ message: 'Nenhum personagem cadastrato!' });
  }

  res.send(allCharacters);
};

const characterByIdController = async (req, res) => {
  const chosenCharacter = await charactersService.characterByIdService(req.params.id);

  if (!chosenCharacter) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(chosenCharacter);
};

const updateCharacterController = async (req, res) => {
  res.send(await charactersService.updateCharacterService(req.params.id, req.body));
};

const deleteCharacterController = async (req, res) => {
  await charactersService.deleteCharacterService(req.params.id);
  res.send({ message: 'Personagem deletado com sucesso!' });
};

const searchCharacterController = async (req, res) => {
  const searchCharacter = await charactersService.searchCharacterService(req.params.name);

  if (searchCharacter.length == 0) {
    return res.status(404).send({ message: 'Personagem não encontrado!' });
  }

  res.send(searchCharacter);
};

module.exports = {
  createCharacterController,
  allCharactersController,
  characterByIdController,
  updateCharacterController,
  deleteCharacterController,
  searchCharacterController,
};
