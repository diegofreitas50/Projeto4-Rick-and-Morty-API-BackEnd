const express = require('express');
const personagensController = require('../controllers/personagem.controller');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const { validId, validObjrctBody } = require('../middlewares/personagem.middleware');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/', personagensController.allPersonagensController);

router.get('/find/:id', validId, personagensController.personagemByIdController);

router.get('/search/:nome', personagensController.searchPersonagemController);

router.post('/create', validObjrctBody, personagensController.createPersonagemController);

router.put('/update/:id', validId, validObjrctBody, personagensController.updatePersonagemController);

router.delete('/delete/:id', validId, personagensController.deletePersonagemController);

module.exports = router;
