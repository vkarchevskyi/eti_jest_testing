const validateUser = require("./validate-user");

describe("validateUser", () => {
  it("successfully validate user", () => {
    const user = { email: "test@example.com", password: "12345678" };

    expect(validateUser(user)).toBe(true);
  });

  it("throw an error on empty user", () => {
    expect(() => validateUser({})).toThrow('Email and password are required');
  })

  it("throw an error on password lenght validation", () => {
    const user = { email: "test@example.com", password: "1" };

    expect(() => validateUser(user)).toThrow('Password must be at least 8 characters long');
  });
});
