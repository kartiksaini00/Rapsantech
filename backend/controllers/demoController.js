const Demo = require('../models/Demo');
const { validationResult } = require('express-validator');

exports.requestDemo = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const demo = new Demo(req.body);
    await demo.save();
    res.status(201).json({ success: true, message: 'Demo request submitted! Our team will contact you within 24 hours.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to submit demo request.' });
  }
};

exports.getDemos = async (req, res) => {
  try {
    const demos = await Demo.find().sort({ createdAt: -1 });
    res.json({ success: true, data: demos });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
