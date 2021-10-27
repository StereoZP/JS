let x = 0;
let y = x; // copy
console.log(x, y)
x++
x++
console.log(x, y)
// === //
const test = {
  test: 1,
};
const copyOfTest = test;
console.log(test, copyOfTest)

test.test = 'test';

console.log(test, copyOfTest)
