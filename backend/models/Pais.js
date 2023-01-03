const mongoose = require('mongoose')

const Pais = mongoose.model('Paises', {
    nombre: String,
    capital: String,
    habitantes: Number,
})

module.exports = Pais