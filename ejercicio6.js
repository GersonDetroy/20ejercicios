function revertirArray(arr) {
    const nuevoArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
      nuevoArr.push(arr[i]);
    }
    return nuevoArr;
  }
    console.log("6. Array invertido:", revertirArray([1, 2, 3, 4, 5])); // Salida: [5, 4, 3, 2, 1]
  