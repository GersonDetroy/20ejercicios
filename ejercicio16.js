function sumarImparesHasta50() {
  let sumaImpares = 0;

  console.log("Sumando números impares del 1 al 50...");

  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) { // Verificar si el número es impar (el resto de la división por 2 no es 0)
      sumaImpares += i;
      console.log(`Sumando ${i}. Suma actual: ${sumaImpares}`);

      // Verificar si la suma supera 500 y detener el proceso con while
      while (sumaImpares > 500) {
        console.log("\n¡La suma de los impares ha superado 500!");
        console.log("Deteniendo el proceso.");
        return; // Sale de la función, deteniendo el proceso
      }
    }
  }

  console.log("\nSe han sumado todos los números impares del 1 al 50.");
  console.log("La suma total de los impares es:", sumaImpares);
}

// Llamar a la función para ejecutar el proceso
sumarImparesHasta50();