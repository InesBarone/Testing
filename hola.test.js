const subirAutoestima = require("./hola");

// console.log(subirAutoestima("Felipe", false));

test("A una chica le dice hermosa", () => {
  const saludo = subirAutoestima("Julieta", true);
  expect(saludo).toBe("Hola Julieta, eres hermosa");
});
