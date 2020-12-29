const checkAnagram = require('./anagram');

test('Check if two words are anagram', () => {
  const str1 = 'elbow';
  const str2 = 'below';
  expect(checkAnagram(str1, str2)).toBeTruthy();
})