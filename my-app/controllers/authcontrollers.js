const usermodel = require('../models/empmodels');
const jwtUtils = require('../utils/JWTutils');
async function loginUser(req, res) {
  const { username, password } = req.body;
  try {
    const result = await usermodel.login({ username, password });
    if (result.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const user = result[0];
    const token = jwtUtils.generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
module.exports = {
  loginUser
};