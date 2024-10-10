const calculateTotal = require("./calculate-total-price");

describe("calculateTotal", () => {
  it("should return the sum of all products", () => {
    const products = [
      { price: 50, quantity: 1 },
      { price: 200, quantity: 2 },
    ];

    expect(calculateTotal(products)).toBe(450);
  });

  it("should return 0 for empty product list", () => {
    expect(calculateTotal([])).toBe(0);
  });

  it("should throw an error if product list doesn't have quantity values", () => {
    const products = [{ price: 100 }, { price: 200 }];
    expect(() => calculateTotal(products)).toThrow(
      "All items should have quantity field of Number type"
    );
  });

  it("should throw an error if product list doesn't have price values", () => {
    const products = [{ quantity: 100 }, { quantity: 200 }];
    expect(() => calculateTotal(products)).toThrow(
      "All items should have price field of Number type"
    );
  });
});
