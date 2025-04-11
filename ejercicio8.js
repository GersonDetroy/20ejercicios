
  function sumarPositivos(arr) {
    const positivos = arr.filter(num => num > 0);
    return positivos.reduce((suma, num) => suma + num, 0);
  }
  console.log("8. Suma de positivos:", sumarPositivos([1, -2, 3, -4, 5])); // Salida: 9
  