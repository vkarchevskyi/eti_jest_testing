async function processPayment(paymentData) {
  const response = await fetch('/api/payments', {
    method: 'POST',
    body: JSON.stringify(paymentData),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Payment failed');
  }

  return response.json();
}

module.exports = processPayment;
