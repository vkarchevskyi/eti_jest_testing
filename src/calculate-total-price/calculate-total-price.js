function calculateTotal(cart) {
  cart.forEach(item => {
    if (typeof item.price !== 'number') {
      throw new Error('All items should have price field of Number type');
    }

    if (typeof item.quantity !== 'number') {
      throw new Error('All items should have quantity field of Number type');
    }
  });

  return cart.reduce((total, item) => total + item.price * item.quantity, 0);    
}

module.exports = calculateTotal;
