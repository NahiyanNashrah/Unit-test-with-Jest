const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4)
});

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
});

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
});

test('return user object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Nahiyan',
    lastName: 'Nashrah'
  });
});

//Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/)
  // expect('teami').not.toMatch(/I/i)
});

//Arrays
test('The array contains a specific value', () => {
  userNames = ['John','Kyle','Tom'];
  expect(userNames).toContain('Tom')
});

//asynchronus code
/**
 * need to use assertions and return or async/await for asyncronus code
 */

//promise
test('Fetch user info', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});

// async/await
// test('Fetch user info', async () => {
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham')
// });
