const divide = function (a, b) {
    return a / b;
  };
  const add = (a, b) => a + b;
  const square = x => x ** 2;
  const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num ** 2);

console.log(divide(10, 2)); // 5
console.log(divide(15, 3)); // 5

console.log(multiply(4, 5)); // 20
console.log(multiply(7, 3)); // 21

console.log(square(5)); // 25
console.log(square(8)); // 64

console.log(squares); // [1, 4, 9, 16]