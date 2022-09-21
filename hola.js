function subirAutoestima(nombre, isMujer) {
  if (isMujer) {
    return `Hola ${nombre}, eres hermosa`;
  } else {
    return `Hola ${nombre}, eres hermoso`;
  }
}

module.exports = subirAutoestima;

// console.log(subirAutoestima("Felipe", false));
// console.log(subirAutoestima("Julieta", true));
