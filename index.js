require('dotenv').config();
const express = require('express');
const characterRoute = require('./src/routes/personagem.router');
const userRoute = require('./src/routes/users.route');
const connecteToDatabase = require('./src/database/database');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();

connecteToDatabase();

app.use(express.json());
app.use(cors());
app.use('/characters', characterRoute);
app.use('/users', userRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta :${port}`);
});
