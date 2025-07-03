// 👨‍🏫 ¿Qué es un test unitario?
// Un test unitario es una forma de verificar que una función individual de tu código (una "unidad") funciona como se espera.
// Son pruebas automáticas que se ejecutan cada vez que cambias el código para asegurarte de que no rompiste nada.

// ❓ ¿Por qué son importantes?
// Detectan errores rápido.

// Aseguran que tu código se comporta correctamente.

// Te ayudan a pensar antes de programar.

// Hacen tu código más confiable y fácil de mantener.


//-------------------------------------- ENFOQUES DE PROGRAMACION BASADA EN TEST ------------------------------------------//

//  1. TDD - Test Driven Development
// Escribes el test primero.

// Corres el test (falla).

// Escribes la función.

// Corres el test (debe pasar).

// Refactorizas si es necesario.


// 2. Programación tradicional + test después
// Escribes la función.

// Luego escribes los tests para verificar que está bien.

// sum.js
function sum(a, b) {
  return a + b;
}
console.log(sum(5,7))
















//export function applyDiscount(price, discountPercentage) {
//   return price - (price * discountPercentage / 100);
// }


//Best
function applyDiscount(price, discountPercentage) {
  if (discountPercentage < 0) return price;
  if (discountPercentage >= 100) return 0;
  return price - (price * discountPercentage / 100);
}

module.exports = {sum, applyDiscount}
