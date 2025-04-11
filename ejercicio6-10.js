
  //10 tabla de multiplicar
  function tablaDeMultiplicar(numero) {
    // Crea un array vacío llamado 'tabla'. Este array almacenará objetos con la información de cada multiplicación.
    const tabla = [];
    // Muestra en la consola un encabezado indicando la tabla de multiplicar del número proporcionado.
    console.log(`\n10. Tabla de multiplicar del ${numero}:`);
    // Inicia un bucle 'for' que se ejecuta desde 1 hasta 10 (inclusive) para generar la tabla de multiplicar.
    for (let i = 1; i <= 10; i++) {
      // Calcula el resultado de la multiplicación del 'numero' por el valor actual de 'i'.
      const resultado = numero * i;
      // Muestra en la consola cada línea de la tabla de multiplicar en el formato "numero x i = resultado".
      console.log(`${numero} x ${i} = ${resultado}`);
      // Crea un objeto que contiene el multiplicando, el multiplicador y el resultado de la multiplicación, y lo añade al array 'tabla'.
      tabla.push({ multiplicando: numero, multiplicador: i, resultado: resultado });
    }
    // Después de generar toda la tabla, la función devuelve el array 'tabla' que contiene los objetos con la información de cada multiplicación.
    return tabla; // Retorna un array de objetos
  }
  
  // Llama a la función 'tablaDeMultiplicar' con el número 5 y almacena el array de objetos resultante en la variable 'tablaDel5'.
  const tablaDel5 = tablaDeMultiplicar(5);
  // Muestra en la consola el array 'tablaDel5', que contiene los objetos de la tabla de multiplicar del 5.
  console.log(tablaDel5);