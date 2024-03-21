function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  function obtenerElementoAleatorio(array) {
    // Genera un índice aleatorio dentro del rango válido del arreglo.
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    
    // Devuelve el elemento correspondiente al índice aleatorio generado.
    return array[indiceAleatorio];}
  
  
}

module.exports = obtenerElementoAleatorio;
