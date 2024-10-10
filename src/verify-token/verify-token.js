const jwt = require('jsonwebtoken');

function verifyToken(token, secret) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new Error('Invalid token');
  }
}

module.exports = verifyToken;
