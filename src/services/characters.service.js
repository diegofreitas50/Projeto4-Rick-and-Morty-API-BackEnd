const Character = require('../models/Character');

const createCharacterService = async (newCharacter) => {
  return await Character.create(newCharacter);
};

const allCharactersService = async () => {
  return await Character.find();
};

const characterByIdService = async (id) => {
  return await Character.findById(id);  
};

const updateCharacterService = async (id, editedCharacter) => {
  await Character.findByIdAndUpdate(id, editedCharacter);
  return editedCharacter;
};

const deleteCharacterService = async (id) => {
  return await Character.findByIdAndDelete(id);
};

const searchCharacterService = async (name) => {
  return await Character.find({ name: {$regex: name, $options: 'i' }});
};

module.exports = {
  createCharacterService,
  allCharactersService,
  characterByIdService,
  updateCharacterService,
  deleteCharacterService,
  searchCharacterService,
};
