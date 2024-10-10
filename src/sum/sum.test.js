const sum = require('./sum');

describe('sum', () => {
  it('should return the correct sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should throw an error if input is not a number', () => {
    expect(() => sum(1, '2')).toThrow('Invalid input');
  });
});
