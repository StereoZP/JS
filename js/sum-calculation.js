function sumCalculation(n) {
  let sum = 0
  for (let i = 1; i < n; i++) {
    sum += i
  }
  return (sum)
}

const n = sumCalculation(10)
console.log(n)