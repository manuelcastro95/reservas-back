const mongoose = require('mongoose');

const reservationSchema =  new mongoose.Schema({
  pais_origen:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: false
  },
  pais_destino:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: false
  },
  fecha: Date
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
