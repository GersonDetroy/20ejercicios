
  function ordenarArray(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
    console.log("4. Array ordenado:", ordenarArray([5, 1, 9, 2, 7])); // Salida: [1, 2, 5, 7, 9]
  