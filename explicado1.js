// Variable global para contar el número de pasos (comparaciones)
let pasos = 0;

// Funciones de selección de pivote
function pivoteAleatorio(arr) {
  return Math.floor(Math.random() * arr.length);
}
function pivoteInicio(arr) {
  return 0;
}
function pivoteFinal(arr) {
  return arr.length - 1;
}
function pivoteMedio(arr) {
  return Math.floor(arr.length / 2);
}

// Función principal de QuickSort con selección de pivote personalizada
function quickSort(arr, seleccionPivote) {
  if (arr.length <= 1) return arr;

  const pivotIndex = seleccionPivote(arr);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    pasos++;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [
    ...quickSort(left, seleccionPivote),
    pivot,
    ...quickSort(right, seleccionPivote),
  ];
}

// Función para probar una estrategia y mostrar resultados
function probarQuickSort(nombre, funcionPivote) {
  pasos = 0; // Reiniciar contador
  const original = [4, 9, 1, 7, 2, 5, 8, 3, 6];
  const copia = [...original]; // Mantener inmutabilidad
  const resultado = quickSort(copia, funcionPivote);

  console.log(`📌 Estrategia: ${nombre}`);
  console.log("Arreglo ordenado:", resultado);
  console.log("Pasos realizados:", pasos);
  console.log("––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
}

// 🧪 Ejecutar las 4 estrategias
probarQuickSort("Pivote Aleatorio", pivoteAleatorio);
probarQuickSort("Pivote al Inicio", pivoteInicio);
probarQuickSort("Pivote al Final", pivoteFinal);
probarQuickSort("Pivote al Medio", pivoteMedio);