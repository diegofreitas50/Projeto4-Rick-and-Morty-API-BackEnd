const router = require('express').Router();
const charactersController = require('../controllers/characters.controller');

const { validId, validObjrctBody } = require('../middlewares/characters.middleware');
const authMiddleware = require('../middlewares/auth.middleware');



router.get('/characters', authMiddleware, charactersController.allCharactersController);

router.get('/characters/find/:id', authMiddleware, validId, charactersController.characterByIdController);

router.get('/characters/search/:name', authMiddleware, charactersController.searchCharacterController);

router.post('/characters/create', authMiddleware, validObjrctBody, charactersController.createCharacterController);

router.put('/characters/update/:id', authMiddleware, validId, validObjrctBody, charactersController.updateCharacterController);

router.delete('/characters/delete/:id', authMiddleware, validId, charactersController.deleteCharacterController);

module.exports = router;
