function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var elementoNuevo = [];
  for (var i = 0; i < array.length; i++) {
    elementoNuevo.push (array[i] * i) 
  }
  return elementoNuevo;
}

module.exports = multiplicarElementosPorIndice;
