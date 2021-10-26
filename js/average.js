    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;
function avg(a,b,c,d) {
    let sum=(a+b+c+d)/4
    console.log(sum);
  }
avg(a,b,c,d);

function average(){
  let avg = 0;
  for (let i = 0; i < arguments.length; i++) {
    avg +=arguments[i]/4;
  }
  return avg;
}
console.log(average(1,2,3,4));
