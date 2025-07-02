const app = require('./app');
const PORT = process.env.PORT || 3000;
const sequelize = require('./config/database');
const Usuario = require('./models/Usuario');

sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso!');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar tabelas:', err);
  });

app.listen(PORT, () => {
  console.log('Servidor rodando corretamente!');
});
