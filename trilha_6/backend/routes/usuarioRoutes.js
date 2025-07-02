const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const auth = require('../middleware/auth');

router.post('/', usuarioController.criarUsuario);
router.get('/', usuarioController.listarUsuarios);
router.put('/:id', usuarioController.atualizarUsuario);
router.post('/login', usuarioController.login);

// Rota protegida de exemplo
router.get('/protegida', auth, (req, res) => {
  res.json({ mensagem: 'Acesso liberado!' });
});

module.exports = router;
