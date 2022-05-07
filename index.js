require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connecteToDatabase = require('./src/database/database');
const characterRoute = require('./src/routes/characters.router');
const userRoute = require('./src/routes/users.route');
const authRoute = require('./src/routes/auth.route');
const swaggerRoute = require('./src/routes/swaggwe.route');

const port = process.env.PORT || 3001;
const app = express();

connecteToDatabase();

app.use(express.json());
app.use(cors());

app.use('/', characterRoute);
app.use('/', userRoute);
app.use('/', authRoute);
app.use('/', swaggerRoute);

app.listen(port, () => { console.log(`Servidor rodando na porta :${port}`) });
