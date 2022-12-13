const { sum, substract, multiply, divide } = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('substracts 1 - 3 should be -2', () => {
  const rta = substract(1, 3);
  expect(rta).toBe(-2);
});

test('multiplies 1 * 3 should be 3', () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});

test('should divide', () => {
  const rta1 = divide(6, 3);
  expect(rta1).toBe(2);
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});

test('should divide for zero', () => {
  const rta1 = divide(6, 0);
  expect(rta1).toBeNull();
  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();
});
