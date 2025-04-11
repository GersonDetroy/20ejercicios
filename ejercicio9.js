
  function encontrarPrimerMultiploDe5(arr) {
    return arr.find(num => num % 5 === 0);
  }

  console.log("9. Primer múltiplo de 5:", encontrarPrimerMultiploDe5([7, 12, 15, 23, 25])); // Salida: 15
  