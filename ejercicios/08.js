function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:


  /*
  return array.filter (function (number) {
    return number % 2 === 0;
    }
  )
  */


  var numeroPar = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
      numeroPar.push(array[i]);
    }
  }
  return numeroPar;
}

module.exports = filtrarNumerosPares;
