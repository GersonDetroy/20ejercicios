const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validarEntradaDesdeConsola() {
  readline.question('Ingresa un número para validar (debe ser mayor que 0): ', (numeroStr) => {
    const numero = parseFloat(numeroStr);

    console.log("\n14. Validando entrada de usuario desde la consola...");
    console.log(`Número ingresado: ${numero}`);

    if (isNaN(numero)) {
      console.log("Entrada inválida. Por favor, ingresa un número.");
    } else if (numero > 0) {
      console.log(`Número válido ingresado: ${numero}`);
    } else {
      console.log(`Número inválido ingresado: ${numero}. (Se esperaba mayor que 0)`);
    }

    readline.close();
  });
}

validarEntradaDesdeConsola();