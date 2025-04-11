const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function adivinarNumeroDesdeConsola() {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  let intentos = 0;
  const maxIntentos = 5;

  console.log("\n12. ¡Adivina el número secreto entre 1 y 10!");

  function preguntarNumero() {
    intentos++;
    readline.question(`Intento ${intentos}: Ingresa tu número: `, (intentoUsuarioStr) => {
      if (intentoUsuarioStr === null) {
        console.log("Juego cancelado por el usuario.");
        readline.close(); // Cierra la interfaz de readline.
        return; // Sale de la función 'preguntarNumero'.
      }

      const intentoUsuario = parseInt(intentoUsuarioStr);

      if (isNaN(intentoUsuario)) {
        console.log("Entrada inválida. Por favor, ingresa un número entre 1 y 10.");
        preguntarNumero();
        return; 
      }

      if (intentoUsuario === numeroAleatorio) {
        console.log(`¡Correcto! Adivinaste en ${intentos} intentos. El número era ${numeroAleatorio}.`);
        readline.close();
        return;
      } else if (intentoUsuario < numeroAleatorio) {
        console.log("Incorrecto. El número secreto es mayor.");
      } else {
        console.log("Incorrecto. El número secreto es menor.");
      }

      if (intentos < maxIntentos) {
        preguntarNumero();
      } else {

        console.log(`\n¡Se acabaron los intentos! El número secreto era ${numeroAleatorio}.`);
        readline.close();
      }
    });
  }

  preguntarNumero();
}

adivinarNumeroDesdeConsola();