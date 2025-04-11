function sumarHastaCero() {
  let suma = 0;
  let numeroIngresado;

  console.log("Ingrese números para sumar. Ingrese 0 para finalizar.");

  while (true) {
    const input = prompt("Ingrese un número:");

    // Verificar si el usuario canceló la entrada (dio clic en "Cancelar")
    if (input === null) {
      console.log("Operación cancelada por el usuario.");
      break;
    }

    numeroIngresado = parseFloat(input);

    // Verificar si la entrada no es un número válido
    if (isNaN(numeroIngresado)) {
      console.log("Entrada inválida. Por favor, ingrese un número.");
      continue; // Volver al inicio del bucle para pedir otro número
    }

    suma += numeroIngresado;

    if (numeroIngresado === 0) {
      console.log("Se ingresó 0. La suma total es:", suma);
      break; // Salir del bucle while
    }

    console.log("Suma actual:", suma);
  }
}

// Llamar a la función para iniciar el proceso
sumarHastaCero();