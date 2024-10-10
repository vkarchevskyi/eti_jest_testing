const fetchUserData = require('./fetch-user-data');

describe('fetchUserData', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('should return user data for a valid userId', async () => {
    const mockUser = { id: 1, name: 'John' };

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockUser),
    });

    const user = await fetchUserData(1);

    expect(user).toEqual(mockUser);
  });

  it('should throw an error if the API call fails', async () => {
    fetch.mockResolvedValue({ ok: false });

    await expect(fetchUserData(1)).rejects.toThrow('Failed to fetch user data');
  });
});
