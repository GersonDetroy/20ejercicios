// 20ejercicio.js

// 11. Generar una secuencia de Fibonacci:
function generarFibonacci() {
    const fibonacci = [0, 1];
    for (let i = 2; i < 10; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log("\n11. Serie de Fibonacci (primeros 10):", fibonacci);
  }
  
  generarFibonacci();
  
  // 12. Adivinar un número (automático):
  function adivinarNumeroAutomatico(numeroAdivinar = 7) { // Valor predefinido: 7
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let intentos = 0;
    const maxIntentos = 5; // Limitar intentos para evitar bucles infinitos
  
    console.log("\n12. Intentando adivinar un número (entre 1 y 10)...");
    console.log(`Número a adivinar generado automáticamente: ${numeroAleatorio}`);
    console.log(`Número de intento predeterminado: ${numeroAdivinar}`);
  
    while (intentos < maxIntentos) {
      intentos++;
      console.log(`Intento ${intentos}: Probando con ${numeroAdivinar}`);
      if (numeroAdivinar === numeroAleatorio) {
        console.log(`¡Correcto! Adiviné en ${intentos} intentos. El número era ${numeroAleatorio}.`);
        return;
      } else {
        console.log("Incorrecto. Intentando de nuevo...");
        // Opcionalmente, podrías variar el número de intento en cada iteración
        // numeroAdivinar = Math.floor(Math.random() * 10) + 1;
      }
    }
    console.log(`No se pudo adivinar el número (${numeroAleatorio}) en ${maxIntentos} intentos.`);
  }
  
  adivinarNumeroAutomatico();
  
  // 13. Contar regresivamente desde un número (automático):
  function cuentaRegresivaAutomatica(numero = 8) { // Valor predefinido: 8
    console.log(`\n13. Cuenta regresiva automática desde ${numero}:`);
    while (numero >= 0) {
      console.log(numero);
      numero--;
    }
  }
  
  cuentaRegresivaAutomatica();
  
  // 14. Validar entrada de usuario (automático):
  function validarEntradaAutomatica(numeroPrueba = 5) { // Valor predefinido: 5
    console.log("\n14. Validando entrada de usuario automáticamente...");
    console.log(`Número de prueba predeterminado: ${numeroPrueba}`);
    if (numeroPrueba > 0) {
      console.log(`Número válido ingresado: ${numeroPrueba}`);
    } else {
      console.log(`Número inválido ingresado: ${numeroPrueba}. (Se esperaba mayor que 0)`);
    }
  }
  
  validarEntradaAutomatica();
  
  // 15. Mostrar menú hasta que el usuario salga (automático):
  function mostrarMenuAutomatico(opciones = ["1", "2", "3"]) { // Opciones predefinidas para simular selección
    console.log("\n15. Menú automático:");
    console.log("1. Opción 1");
    console.log("2. Opción 2");
    console.log("3. Salir");
    console.log("Opciones predeterminadas:", opciones);
  
    for (const opcion of opciones) {
      console.log(`\nSeleccionando automáticamente la opción: ${opcion}`);
      switch (opcion) {
        case "1":
          console.log("Has elegido la Opción 1.");
          break;
        case "2":
          console.log("Has elegido la Opción 2.");
          break;
        case "3":
          console.log("Saliendo del menú.");
          return; // Simula la salida
        default:
          console.log("Opción inválida.");
      }
    }
  }
  
  mostrarMenuAutomatico();
