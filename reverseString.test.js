const reverseString = require('./reverseString');

test('Check if defined', () => {
  expect(reverseString).toBeDefined();
});

test('Check if reversed', () => {
  expect(reverseString('string')).toEqual('gnirts');
});