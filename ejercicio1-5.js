// 1. Sumar elementos de un array:
function sumarElementos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    return suma;
  }
  
  console.log("1. Suma de elementos:", sumarElementos([1, 2, 3, 4, 5])); // Salida: 15
  
  // 2. Número mayor y menor:
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
  
  // 3. Contar elementos pares:
  function contarPares(arr) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        contador++;
      }
    }
    return contador;
  }
  
  console.log("3. Cantidad de pares:", contarPares([1, 2, 3, 4, 5, 6])); // Salida: 3
  
  // 4. Ordenar un array (sin .sort()):
  function ordenarArray(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Intercambiar elementos
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  console.log("4. Array ordenado:", ordenarArray([5, 1, 9, 2, 7])); // Salida: [1, 2, 5, 7, 9]
  
  // 5. Buscar un elemento:
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