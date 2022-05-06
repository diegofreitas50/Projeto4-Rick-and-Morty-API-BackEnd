require('dotenv').config();
const jwt = require('jsonwebtoken');
const {findByIdUserService} = require('../services/users.service');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send({ message: "O token não foi informado!"})
    };

    if (authHeader.split(" ") !== 2) {
        return res.status(401).send({
            message: "Token Inválido!"
        })
    };

    const [scheme, token] = authHeader.split(" ");

    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({
            message: "Token malformatado!"
        })
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        const user = await findByIdUserService(decoded.id);
        if (err || !user || !user.id) {
            return res.status(401).send({
                message: "Token invalido!"
            })
        }

        req.userId = user.id;
        return next();
    });
}
