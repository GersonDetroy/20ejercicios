// 6. Revertir un array (sin .reverse()):
function revertirArray(arr) {
    const nuevoArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      nuevoArr.push(arr[i]);
    }
    return nuevoArr;
  }
  
  console.log("6. Array invertido:", revertirArray([1, 2, 3, 4, 5])); // Salida: [5, 4, 3, 2, 1]
  
  // 7. Convertir nombres a mayúsculas:
  function convertirAMayusculas(arr) {
    return arr.map(nombre => nombre.toUpperCase());
  }
  
  console.log("7. Nombres en mayúsculas:", convertirAMayusculas(["juan", "maria", "ana"])); // Salida: ["JUAN", "MARIA", "ANA"]
  
  // 8. Sumar solo los números positivos:
  function sumarPositivos(arr) {
    const positivos = arr.filter(num => num > 0);
    return positivos.reduce((suma, num) => suma + num, 0);
  }
  
  console.log("8. Suma de positivos:", sumarPositivos([1, -2, 3, -4, 5])); // Salida: 9
  
  // 9. Obtener el primer múltiplo de 5:
  function encontrarPrimerMultiploDe5(arr) {
    return arr.find(num => num % 5 === 0);
  }
  
  console.log("9. Primer múltiplo de 5:", encontrarPrimerMultiploDe5([7, 12, 15, 23, 25])); // Salida: 15
  
//10 tabla de multiplicar
function tablaDeMultiplicar(numero) {
    const tabla = [];
    console.log(`\n10. Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
      tabla.push({ multiplicando: numero, multiplicador: i, resultado: resultado });
    }
    return tabla; // Retorna un array de objetos
  }
  
  const tablaDel5 = tablaDeMultiplicar(5);
  console.log(tablaDel5);