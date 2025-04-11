function simuladorLogin() {
  const usuarioCorrecto = "usuario123";
  const claveCorrecta = "secreto";
  let intentosRestantes = 3;

  console.log("Simulador de Login. Tienes 3 intentos.");

  while (intentosRestantes > 0) {
    const usuarioIngresado = prompt(`Intento ${4 - intentosRestantes}: Ingrese su usuario:`);

    if (usuarioIngresado === null) {
      console.log("Inicio de sesión cancelado por el usuario.");
      break; // El usuario canceló el prompt
    }

    const claveIngresada = prompt(`Intento ${4 - intentosRestantes}: Ingrese su clave:`);

    if (claveIngresada === null) {
      console.log("Inicio de sesión cancelado por el usuario.");
      break; // El usuario canceló el prompt
    }

    if (usuarioIngresado === usuarioCorrecto && claveIngresada === claveCorrecta) {
      console.log("¡Inicio de sesión exitoso!");
      return; // Sale de la función si el login es exitoso
    } else {
      intentosRestantes--;
      if (intentosRestantes > 0) {
        console.log(`Credenciales incorrectas. Te quedan ${intentosRestantes} intentos.`);
      } else {
        console.log("Número máximo de intentos alcanzado. Acceso denegado.");
      }
    }
  }

  if (intentosRestantes === 0 && (usuarioIngresado !== usuarioCorrecto || claveIngresada !== claveCorrecta)) {
    console.log("El simulador de login ha finalizado.");
  }
}

// Llamar a la función para iniciar el simulador de login
simuladorLogin();