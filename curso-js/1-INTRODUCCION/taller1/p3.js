/* function calcular() {
  // recibir el valor del input
  let numero = parseInt(document.getElementById("txtNumero").value);
  // numero = parseInt(numero);
  let cuadrado = numero * numero;
  let cubo = numero * numero * numero;

  console.log(
    `el cubo del numero ingresado es ${cubo} y el cuadrado es ${cuadrado}`
  );
} */

//refactorizado con la clase MATH
function calcular() {
  // recibir el valor del input
  let numero = parseInt(document.getElementById("txtNumero").value);
  // numero = parseInt(numero);
  // LIBRERIA MATH
  let cuadrado = Math.pow(numero, 2);
  let cubo = Math.pow(numero, 3);

  console.log(
    `el cubo del numero ingresado es ${cubo} y el cuadrado es ${cuadrado}`
  );
}
