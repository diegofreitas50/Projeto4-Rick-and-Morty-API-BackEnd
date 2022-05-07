const router = require('express').Router();
const userController = require('../controllers/users.controller');

router.post('/users/create', userController.createUserController);
router.get('/users', userController.findAllUserController);

module.exports = router;
