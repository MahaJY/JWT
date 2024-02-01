const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';
function generateToken(user) {
  return jwt.sign({ userId: user.id, name: user.name, age: user.age, email: user.email, username: user.username }, secretKey, { expiresIn: '1h' });
}
module.exports = {
  generateToken
};