// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'molina';
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});

test('null', () => {
  let data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();

  data = undefined;
  expect(data).toBeUndefined();
});

test('string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
