function contarElementosPares(arr) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        contador++;
      }
    }
    return contador;
  }
  
  // Ejemplo de uso:
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cantidadPares = contarElementosPares(numeros);
  console.log(`En el array [${numeros}] hay ${cantidadPares} números pares.`); // Salida: En el array [1,2,3,4,5,6,7,8,9,10] hay 5 números pares.
  
  const otrosNumeros = [11, 13, 15, 17, 19];
  const cantidadParesOtros = contarElementosPares(otrosNumeros);
  console.log(`En el array [${otrosNumeros}] hay ${cantidadParesOtros} números pares.`); // Salida: En el array [11,13,15,17,19] hay 0 números pares.
  
  const arrayVacio = [];
  const cantidadParesVacio = contarElementosPares(arrayVacio);
  console.log(`En el array [${arrayVacio}] hay ${cantidadParesVacio} números pares.`); // Salida: En el array [] hay 0 números pares.