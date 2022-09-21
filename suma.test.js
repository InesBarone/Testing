const sumar = require("./suma");

test("2 + 2 tiene que ser 4", () => {
  const resultado = sumar(2, 2);
  expect(resultado).toBe(4);
});
