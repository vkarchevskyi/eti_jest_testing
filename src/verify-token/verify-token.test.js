const verifyToken = require("./verify-token");
const jwt = require('jsonwebtoken');

describe("verifyToken", () => {
  it("should successfully verify JWT token", () => {
    const secretToken = 'secret_12345';
    const publicToken = jwt.sign({id: 1}, secretToken);
    const result = verifyToken(publicToken, secretToken); 

    expect(result.id).toBe(1);
  });
});
