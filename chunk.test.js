const chunk = require('./chunk');

test('Check if function exists', () => {
  expect(chunk).toBeDefined();
});

test('array is chunked', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const length = 2;
  const result = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
  expect(chunk(array, length)).toEqual(result);
});