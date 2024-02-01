const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontrollers');
const authenticateToken = require('../middleware/authenticatetoken');
router.post('/login', authController.loginUser);
router.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route.', user: req.user });
});
module.exports = router;