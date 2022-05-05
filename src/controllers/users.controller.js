const userService = require('../services/users.service');

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    return res.status(400).send({ message: 'Preencha todos os campos!' });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({ message: 'Usuário já existe!' });
  }

  const user = await userService.createUserService(req.body).catch((error) => console.log(error.message));

  if (!user) {
    return res.status(400).send({ message: 'Erro ao criar usuário!' });
  }

  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  res.send({ message: 'find all ok' });
};

module.exports = { 
  createUserController, 
  findAllUserController, 
};
