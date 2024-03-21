function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  /*
  for (var i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {   
      if (array[i] === array[j])
        return true;
    }    
  }
  return false;
  */



  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
        return true;
    }
}


return false;
}

module.exports = todosIguales;
