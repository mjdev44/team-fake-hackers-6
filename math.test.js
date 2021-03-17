//It should return the result of each operation (addition, multiplication, subtraction and division)

//import modules
const { addition, multiplication, subtraction, division } = require("./math.js");

//The operation should return the sum of two numbers.
// test each addition operation is correct
test.each([
  [123, 245678, 245801],
  [-2243, -8687, -10930],
  [3434053, -16345, 3417708],
])("a+b=c", (a, b, expected) => {
  expect(addition(a, b)).toBe(expected);
});

//The operation should return the multiplication of two numbers
//test each combination of numbers to assure the function is computing the correct result
test.each([[2, 5, 10],[3, 10, 30],[3, 1, 3], [10, 10, 100], [1.5 , 3, 4.5], [120, 0.01, 1.2]])(
    
    //compare the return value of the function with the value given in the test call
    'a * b = c', (a, b, expected) => {
        expect(multiplication(a, b)).toBe(expected)
    }
)
test.each([[3, 2, 1],])
  ("a+b=c", (a, b, expected) => {
  expect(subtraction(a, b)).toBe(expected);
});

test.each([[6, 3, 2],])
  ("a+b=c", (a, b, expected) => {
  expect(division(a, b)).toBe(expected);
});