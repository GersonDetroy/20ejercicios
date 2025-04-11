function imprimirMultiplosDeTres() {
  let numero = 3;
  console.log("Múltiplos de 3 menores a 50:");

  while (numero < 50) {
    console.log(numero);
    numero += 3;
  }
}

// Llamar a la función para imprimir los múltiplos
imprimirMultiplosDeTres();