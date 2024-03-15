function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
       function cbk (num){
        return num>10;
       }
  var mayores=array.filter(cbk);
return mayores.length;
}

module.exports = contarElementosMayoresA10;
//function contarElementosMayoresA10(2, 30, 5, 15,1,0)
// QUIERO (2, que es la cantidad de elementos que hay mayores a 10)