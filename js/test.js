const a = 0
const b = 1
const c = 4

function solveQuadraticEquation(a, b, c) {
  if (a === 0) {
    return NaN;
  }
  const D = b ** 2 - 4 * a * c;
  const x1 = ((-b) ** 2 + D) / (2 * a);
  const x2 = ((-b) ** 2 - D) / (2 * a);
  return [x1, x2];
}

const roots = solveQuadraticEquation(a, b, c);

if (roots) {
  console.log(`X1 and X2: ${roots}`);
} else {
  console.log('There are no roots');
}
