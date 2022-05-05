const authService = require('../services/auth.service');
const bcryptjs = require('bcryptjs');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService(email);

  if (!user){
      return res.status(404).send({message: 'Usuário não encontrado!'});
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);

  if (!isPasswordValid) {
      return res.status(400).send({message: 'Senha inválida!'});
  }

  res.send(user);
};

module.exports = { loginController };
