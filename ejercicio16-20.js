// 20ejercicio.js

// ... (Ejercicio 1 al 15 sin cambios) ...

// 16. Sumar solo los números impares entre 1 y 50:
function sumarImparesHasta50() {
    let suma = 0;
    let i = 1;
    while (suma <= 500 && i <= 50) {
      if (i % 2 !== 0) {
        suma += i;
      }
      i++;
    }
    console.log("\n16. Suma de impares entre 1 y 50 (sin superar 500):", suma);
  }
  
  sumarImparesHasta50();
  
  // 17. Contador de intentos (simulación de login con valores predeterminados):
  function simularLoginAutomatico(claveIntento = "secreto") {
    const claveCorrecta = "secreto";
    let intentos = 0;
    const maxIntentos = 3;
  
    console.log("\n17. Intento de Login automático (máximo 3 intentos):");
    console.log(`Clave correcta predeterminada: ${claveCorrecta}`);
    console.log(`Clave de intento predeterminada: ${claveIntento}`);
  
    while (intentos < maxIntentos) {
      intentos++;
      console.log(`Intento ${intentos}: Ingresando clave "${claveIntento}"`);
      if (claveIntento === claveCorrecta) {
        console.log("¡Login exitoso!");
        return;
      } else {
        console.log("Clave incorrecta.");
      }
      if (intentos === maxIntentos) {
        console.log("Número máximo de intentos alcanzado. Acceso denegado.");
      }
      // Para simular varios intentos fallidos, podrías cambiar la claveIntento
      // en las iteraciones posteriores si no coincide inicialmente.
      // Por ejemplo:
      // if (intentos === 1 && claveIntento === claveCorrecta) claveIntento = "clave_erronea";
    }
  }
  
  simularLoginAutomatico();
  
  // 18. Sumar hasta que el usuario ingrese 0 (con valores predeterminados):
  function sumarHastaCeroAutomatico(numeros = [5, 10, -2, 0]) {
    let suma = 0;
    console.log("\n18. Sumando números automáticamente hasta encontrar 0:");
    console.log("Números predeterminados:", numeros);
    for (const numero of numeros) {
      console.log(`Ingresando: ${numero}`);
      suma += numero;
      if (numero === 0) {
        break;
      }
    }
    console.log("Suma total:", suma);
  }
  
  sumarHastaCeroAutomatico();
  
  // 19. Imprimir la serie de Fibonacci hasta que un número supere 100:
  function fibonacciHasta100() {
    const fibonacci = [0, 1];
    let i = 1;
    console.log("\n19. Serie de Fibonacci hasta superar 100:");
    console.log(fibonacci[0]);
    console.log(fibonacci[1]);
    while (fibonacci[i] + fibonacci[i - 1] <= 100) {
      const siguienteNumero = fibonacci[i] + fibonacci[i - 1];
      fibonacci.push(siguienteNumero);
      console.log(siguienteNumero);
      i++;
    }
  }
  
  fibonacciHasta100();
  
  // 20. Imprimir los múltiplos de 3 hasta 50:
  function multiplosDe3Hasta50() {
    let i = 3;
    console.log("\n20. Múltiplos de 3 menores a 50:");
    while (i < 50) {
      console.log(i);
      i += 3;
    }
  }
  
  multiplosDe3Hasta50();