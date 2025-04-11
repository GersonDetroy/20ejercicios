const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function tablaDeMultiplicar() {
    readline.question('10. Ingresa el número para la tabla de multiplicar: ', (inputNumero) => {
      const numero = parseInt(inputNumero);
  
      if (!isNaN(numero)) {
        const tabla = [];
        console.log(`\n10. Tabla de multiplicar del ${numero}:`);
        for (let i = 1; i <= 10; i++) {
          const resultado = numero * i;
          console.log(`${numero} x ${i} = ${resultado}`);
          tabla.push({ multiplicando: numero, multiplicador: i, resultado: resultado });
        }
        console.log(tabla); // Muestra la tabla generada
      } else {
        console.log("Entrada inválida. Por favor, ingresa un número.");
      }
  
      readline.close(); // Cierra la interfaz readline después de obtener la respuesta
    });
  }
  
  // Llama a la función para activar la entrada desde consola
  tablaDeMultiplicar();