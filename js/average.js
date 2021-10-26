let a = 1;
let b = 2;
let c = 3;
let d = 4;

function avg(a, b, c, d) {
  let sum = (a + b + c + d) / 4
  console.log(sum);
}

avg(a, b, c, d);

function average() {
  let acc = 0;
  for (let i = 0; i < arguments.length; i++) {
    acc += arguments[i];
  }
  return acc / arguments.length;
}

console.log(average(1, 2, 3, 4));
console.log(average(10, 20, 30, 420 , 2035, 25, 4,5 2,3 5,2 5,45,42));
