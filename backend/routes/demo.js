const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { requestDemo, getDemos } = require('../controllers/demoController');

const validateDemo = [
  body('name').trim().notEmpty().withMessage('Name required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('phone').trim().notEmpty().withMessage('Phone required'),
  body('company').trim().notEmpty().withMessage('Company required'),
  body('fleetSize').isIn(['1-10', '11-50', '51-200', '200+']).withMessage('Valid fleet size required')
];

router.post('/', validateDemo, requestDemo);
router.get('/', getDemos);

module.exports = router;
