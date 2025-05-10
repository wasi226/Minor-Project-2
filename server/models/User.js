const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bookmarkedPlants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plant' }],
  myGarden: [{
    plant: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant' },
    plantedDate: Date,
    notes: String,
    status: String
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);