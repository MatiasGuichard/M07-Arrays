function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  /*
  var nuevosMeses = [];
  for (var i = 0; i < array.length; i++) {
   if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
    nuevosMeses.push (array[i]);
  }
}
if (nuevosMeses.length !==3){
  return "No se encontraron los meses pedidos";
}
return nuevosMeses;
*/

var nuevosMeses = array.filter (function (elementos) {
  if (elementos === 'Enero' && elementos === 'Marzo' && elementos === 'Noviembre' ) {
return elementos
  }
})
if (nuevosMeses.length !==3){
  return "No se encontraron los meses pedidos";
}
return nuevosMeses;
}



module.exports = mesesDelAño;
