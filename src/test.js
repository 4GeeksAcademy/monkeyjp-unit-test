// Vocabulario clave
// expect: lo que esperas que suceda.

// toBe: lo que el resultado debe ser.

// Esto se llama una afirmación (assert). Comparamos entrada y salida.



// sum.test.js
const { sum, applyDiscount } = require('./app');

test("If 5 and 7 are passed, then the function must return 12", function() {
  const total = sum(5, 7);
  expect(total).toBe(12);
});










// discount.test.js


test("Apply 10% discount to $100", () => {
  const result = applyDiscount(100, 10);
  expect(result).toBe(90);
});

test("Apply 0% discount returns original price", () => {
  const result = applyDiscount(50, 0);
  expect(result).toBe(50);
});

test("Apply 100% discount should return 0", () => {
  const result = applyDiscount(200, 100);
  expect(result).toBe(0);
});

test("Negative discount should not be allowed", () => {
  const result = applyDiscount(100, -10);
  expect(result).toBe(100); // Aquí decidimos que si es negativo, no se aplique
});

test("Discount higher than 100% should be capped", () => {
  const result = applyDiscount(100, 150);
  expect(result).toBe(0); // no puedes pagar en negativo
});
