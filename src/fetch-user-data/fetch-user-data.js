async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  return response.json();
}

module.exports = fetchUserData;
