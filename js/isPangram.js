const a = 1
const b = 2
const c = 3

function quadratic(a, b, c) {

  if (a === 0) {
    return NaN;
  } else {
    const discr = b ** 2 - 4 * a * c
    const x1 = (b ** 2 + discr) / (2 * a)
    const x2 = (b ** 2 - discr) / (2 * a)
    return [x1, x2];
  }
}


function indexOfString(string, value) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === value) {
      return i;
    }
  }
  return -1;
}

const indexOfString2 = function() {}

const indexOfString3 = (str,val) => {
  console.log(this);
}

function isPangram(s, limit) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercase = s.toLowerCase();
  if(s.length > limit){
    throw new Error('String must be less then {limit} symbols')
  }
  for (let i = 0; i < alphabet.length; i++) {

    const index = indexOfString(lowercase, alphabet[i]);
    if (index === -1) {
      return false;
    }
  }
  return true;
}

const valid = isPangram("hi");

if (valid) {
  console.log(`X1 and X2: ${quadratic(a, b, c)}`);
} else {
  alert("Сам дурак");
}