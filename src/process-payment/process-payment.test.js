const processPayment = require("./process-payment");

describe("processPayment", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("should successfully process payment", async () => {
    const mockPayment = { id: 1, price: 200, user_id: 1 };

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockPayment),
    });

    const payment = await processPayment(mockPayment);

    expect(payment).toEqual(mockPayment);
  });

  it("should throw an error if the API call fails", async() => {
    fetch.mockResolvedValue({ ok: false });

    await expect(processPayment(1)).rejects.toThrow('Payment failed');
  })
});
