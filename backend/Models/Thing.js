const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  Date: { type: Date, required: true },
  Nom: { type: String, required: true },
  Taille: { type: String, required: true },
  Analyse: { type: String, required: true },
 
});

module.exports = mongoose.model('Thing', thingSchema);