const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');

exports.submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ success: true, message: 'Message received! We will get back to you shortly.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to submit. Please try again.' });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
