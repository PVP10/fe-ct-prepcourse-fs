function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var nuevoA= []
  for (var i=0; i<array.length; i++){
    nuevoA.push(array[i]*2);

  }
  return nuevoA;
}

module.exports = duplicarElementos;
