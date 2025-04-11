
  function encontrarMayorMenor(arr) {
    if (arr.length === 0) {
      return { mayor: undefined, menor: undefined };
    }
    let mayor = arr[0];
    let menor = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mayor) {
        mayor = arr[i];
      }
      if (arr[i] < menor) {
        menor = arr[i];
      }
    }
    return { mayor, menor };
  }
  
  console.log("2. Mayor y menor:", encontrarMayorMenor([5, 1, 9, 2, 7])); // Salida: { mayor: 9, menor: 1 }
  