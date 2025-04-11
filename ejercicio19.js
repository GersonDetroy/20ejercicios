function fibonacciHastaCien() {
  let a = 0;
  let b = 1;
  console.log("Serie de Fibonacci hasta superar 100:");
  console.log(a);
  console.log(b);

  while (true) {
    const siguiente = a + b;
    if (siguiente > 100) {
      break; // Detener el bucle si el siguiente número supera 100
    }
    console.log(siguiente);
    a = b;
    b = siguiente;
  }
  console.log("\nFin de la serie (el siguiente número superaba 100).");
}

// Llamar a la función para generar e imprimir la serie
fibonacciHastaCien();