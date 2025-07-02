const express = require('express');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor rodando corretamente!');
});

app.use('/usuarios', usuarioRoutes);

module.exports = app;
