const readline = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenuDesdeConsola() {
  console.log("\n15. Menú:");
  console.log("1. Opción 1");
  console.log("2. Opción 2");
  console.log("3. Salir");

  function preguntarOpcion() {
    readline.question('Selecciona una opción: ', (opcion) => {
      switch (opcion) {
        case "1":
          console.log("Has elegido la Opción 1.");
          preguntarOpcion();
          break;
        case "2":
          console.log("Has elegido la Opción 2.");
          preguntarOpcion();
          break;
        case "3":
          console.log("Saliendo del menú.");
          readline.close();
          break;
        default:
          console.log("Opción inválida.");
          preguntarOpcion();
      }
    });
  }

  preguntarOpcion();
}

mostrarMenuDesdeConsola();