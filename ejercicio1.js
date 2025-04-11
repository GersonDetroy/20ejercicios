function sumarElementos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    return suma;
  }
  

  console.log("1. Suma de elementos:", sumarElementos([1, 2, 3, 4, 5])); // Salida: 15
  