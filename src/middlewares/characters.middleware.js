const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjrctBody = (req, res, next) => {
  const character = req.body;

  if (!character || !character.name || !character.image) {
    return res.status(400).send({ message: 'Erro! Você não preencheu todos os campos necessários.' });
  }
  next();
};

module.exports = {
  validId,
  validObjrctBody,
};
