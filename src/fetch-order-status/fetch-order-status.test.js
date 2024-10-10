const fetchOrderStatus = require("./fetch-order-status");

describe("fetchOrderStatus", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("should return order status for a valid order", async () => {
    const mockOrder = { id: 1, status: "confirmed" };

    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockOrder),
    });

    const order = await fetchOrderStatus(mockOrder.id);

    expect(order).toEqual(mockOrder);
  });

  it("should throw an error if the API call fails", async () => {
    fetch.mockResolvedValue({ ok: false });

    await expect(fetchOrderStatus(1)).rejects.toThrow(
      "Failed to fetch order status"
    );
  });
});
