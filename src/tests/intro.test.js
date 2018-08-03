// test from create-react-app to json file--- "test": "react-scripts test --env=jsdom",

const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(3, 4)

  // if (result !== 7) {
  //   throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`)
  // }

  expect(result).toBe(7)
});
