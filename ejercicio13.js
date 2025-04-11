const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cuentaRegresivaDesdeConsola() {
  readline.question('Ingresa el número desde el cual comenzar la cuenta regresiva: ', (numeroStr) => {
    const numero = parseInt(numeroStr);

    if (isNaN(numero)) {
      console.log("Entrada inválida. Por favor, ingresa un número entero.");
      readline.close();
      return;
    }

    console.log(`\n13. Cuenta regresiva desde ${numero}:`);
    let contador = numero;
    const intervalo = setInterval(() => {
      console.log(contador);
      contador--;
      if (contador < 0) {
        clearInterval(intervalo);
        readline.close();
      }
    }, 1000);
  });
}

cuentaRegresivaDesdeConsola();