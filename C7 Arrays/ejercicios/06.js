function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  arrayi=[];
  for (var i=array.length-1; i>=0; i--){
     arrayi.push(array[i]);
  }
return arrayi;
}

module.exports = invertirArray;
