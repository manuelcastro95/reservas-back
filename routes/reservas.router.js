const express = require('express')
const router = express.Router();
const reservasController = require('../controllers/reservasController');

router.get('/get-paises', reservasController.getPaises);
router.post('/store-reserva', reservasController.storeReserva)


module.exports = router;
