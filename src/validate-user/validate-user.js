const maxPasswordLength = 8;

function validateUser(user) {
  if (!user.email || !user.password) {
    throw new Error('Email and password are required');
  }

  if (user.password.length < maxPasswordLength) {
    throw new Error(
      `Password must be at least ${maxPasswordLength} characters long`
    );
  }

  return true;
}

module.exports = validateUser;
