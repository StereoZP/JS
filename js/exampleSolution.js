function exampleSolution() {
  for (;;) {
    const userInput = prompt('Решите пример (2 + 2 * 2)');
    const num = Number(userInput)

    if (num === 6) {
      return;
    }
  }
}

exampleSolution();