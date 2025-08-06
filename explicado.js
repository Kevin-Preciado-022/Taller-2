//  Variable global para contar el número de pasos (comparaciones)
let pasos = 0;

//  Función para elegir un índice aleatorio como pivote
function pivoteAleatorio(arr) {
  return Math.floor(Math.random() * arr.length); // Devuelve un índice válido dentro del arreglo
}

//  Función principal de QuickSort con selección de pivote personalizada
function quickSort(arr, pivoteAleatorio) {
  //  Caso base: si el arreglo tiene 0 o 1 elementos, ya está ordenado
  if (arr.length <= 1) return arr;

  //  Se selecciona el pivote usando la función recibida
  const pivotIndex = pivoteAleatorio(arr);
  const pivot = arr[pivotIndex];

  //  Se crean dos arreglos para dividir los elementos menores y mayores al pivote
  const left = [];
  const right = [];

  //  Se recorren todos los elementos del arreglo original
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue; // Se salta el pivote
    pasos++; // Se cuenta cada comparación
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elemento menor al pivote
    } else {
      right.push(arr[i]); // Elemento mayor o igual al pivote
    }
  }

  //  Llamada recursiva para ordenar las sublistas y combinar con el pivote
  return [...quickSort(left, pivoteAleatorio), pivot, ...quickSort(right, pivoteAleatorio)];
}

// 🧪 Prueba del algoritmo con un arreglo de ejemplo
const arreglo = [4, 9, 1, 7, 2, 5, 8, 3, 6];
const resultado = quickSort(arreglo, pivoteAleatorio);

// Mostrar resultados finales
console.log("Arreglo ordenado:", resultado);
console.log("Pasos realizados:", pasos);
