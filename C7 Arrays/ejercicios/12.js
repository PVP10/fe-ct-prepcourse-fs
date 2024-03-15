function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var arrayMayusculas = []; // Creamos un array vacío para almacenar los strings convertidos a mayúsculas
  for (var i = 0; i < array.length; i++) {
    var stringMayusculas = array[i].toUpperCase(); // Convertimos el string actual a mayúsculas
    arrayMayusculas.push(stringMayusculas); // Agregamos el string convertido a mayúsculas al nuevo array
  }
  return arrayMayusculas;
}

module.exports = convertirStringAMayusculas;
