const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Plat = new Schema({
    nom: {type: String},
    prix: {type: Number},
    ingredients: {type: String},
    restaurant: {type: String},
    }, { collection: 'plats'}
);

module.exports = mongoose.model('Plat', Plat)