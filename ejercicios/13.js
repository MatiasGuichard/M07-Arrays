function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var suma = 0;
for (var i = 0; i < resultadosTest.length; i++) {
  suma += resultadosTest[i];

  }
  return suma / resultadosTest.length;
}


module.exports = promedioResultadosTest;
