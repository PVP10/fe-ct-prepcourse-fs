function filter(arrayOfStrings) {
   // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   var nuevoA= arrayOfStrings.filter(function(string){
if (string.startsWith("a")) return string;
});
return nuevoA;
}

module.exports = filter;
