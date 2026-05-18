const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  fleetSize: { type: String, enum: ['1-10', '11-50', '51-200', '200+'], required: true },
  industry: { type: String },
  requirements: { type: String },
  preferredDate: { type: Date },
  status: { type: String, enum: ['pending', 'scheduled', 'completed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Demo', demoSchema);
