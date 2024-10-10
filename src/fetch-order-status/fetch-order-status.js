async function fetchOrderStatus(orderId) {
  try {
    const response = await fetch(`/api/orders/${orderId}`);

    if (!response.ok) {
      throw new Error('Order not found');
    }

    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch order status: ${error.message}`);
  }
}

module.exports = fetchOrderStatus;
