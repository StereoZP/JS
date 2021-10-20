function solveQuadraticEquation(a, b, c) {
  if (a === 0) {
    return NaN;
  }
  const D = b ** 2 - 4 * a * c;
  const x1 = ((-b) ** 2 + D) / (2 * a);
  const x2 = ((-b) ** 2 - D) / (2 * a);
  return [x1, x2];
}

/*
3) Вычислить сумму покупки с учетом скидки.
Скидка 3% предоставляется, если сумма покупки больше 500 грн.,
а скидка 5% - если сумма покупки больше 800 грн.
Сумму покупки вводит юзер.
*/

function getSale(price) {
  if (price > 500 && price <= 800) {
    return 3;
  } else if (price > 800) {
    return 5;
  }
  return 0;
}

function getSalePrice(price) {
  const sale = getSale(price);
  return price - ((price / 100) * sale);
}

console.log(getSalePrice(300), '300');
console.log(getSalePrice(550), '533.5');
console.log(getSalePrice(800), '776');
console.log(getSalePrice(1000), '950');
