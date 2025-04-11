  function buscarElemento(arr, nombre) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === nombre) {
        return i; // Devuelve la posición
      }
    }
    return -1; // Devuelve -1 si no se encuentra
  }
  
  console.log("5. Posición de 'Ana':", buscarElemento(["Juan", "Maria", "Ana", "Pedro"], "Ana")); // Salida: 2
  console.log("5. Posición de 'Luis':", buscarElemento(["Juan", "Maria", "Ana", "Pedro"], "Luis")); // Salida: -1