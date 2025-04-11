function generarFibonacci() {
    const fibonacci = [0, 1];
    for (let i = 2; i < 10; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log("\n11. Serie de Fibonacci (primeros 10):", fibonacci);
  }
    generarFibonacci();
  