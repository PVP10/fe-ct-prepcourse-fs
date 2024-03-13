function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if(numero <= 1) {
    return false; // Los números menores o iguales a 1 no son primos
  }
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false; // Si el número es divisible por algún número entre 2 y numero-1, entonces no es primo
    }
  }
  return true; // Si no se encontró ningún divisor entre 2 y numero-1, entonces es primo

}

module.exports = esNumeroPrimo;
