function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
 
  var nuevoArreglo = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      nuevoArreglo.push(array[i]);
    }
  }
  if (nuevoArreglo.length < 3) {
    return "No se encontraron los meses pedidos";
  }
  return nuevoArreglo;
}

module.exports = mesesDelAño;
