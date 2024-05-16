let resultado = document.getElementById("resultado"); // traigo el input de html donde voy a manipular los resultados de la calculadora

function escribir7() {
  return (resultado.value += 7);
}
function escribir8() {
  return (resultado.value += 8);
}
function escribir9() {
  return (resultado.value += 9);
}
function multiplicar() {
  return (resultado.value += "*");
}

function borrar() {
  return (resultado.value = "");
}

function calcular() {
  // efectuamos el calculo de la expresion
  let r = eval(resultado.value);
  return (resultado.value = r);
}
