const authService = require('../services/auth.service');

const loginController = async (req, res) => {
  res.send({message: 'login ok'});
};

module.exports = { loginController };
