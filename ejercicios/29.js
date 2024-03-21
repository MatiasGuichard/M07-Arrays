function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:




for (var i = 0; i < numeros.length-1; i++) {
  var numeroSiguiente = numeros[i]+1;
  if (numeros[i+1] != numeroSiguiente) {
    return numeroSiguiente;
  
  }
}
  return null;
}

encontrarNumeroFaltante ([1, 2, 3, 4, 7, 8, 9]);

module.exports = encontrarNumeroFaltante;