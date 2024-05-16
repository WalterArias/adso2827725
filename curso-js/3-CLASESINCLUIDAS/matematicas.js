// estudio de la clase Math

// algunas propiedades

console.log(Math.PI);
let numero = Math.PI.toFixed(2);
console.log(numero);

// raiz cuadrada

let raiz = Math.sqrt(65);
console.log(raiz);

// redondeo de numeros
let valor = 3.7564;
console.log(Math.round(valor)); // acerca al entero superior
console.log(Math.floor(valor)); // acerca al entero inferior

// trigonometria
// seno de una funcion -> grados

let seno = Math.sin(45);
let coseno = Math.cos(45);
let tangente = Math.tan(45);
console.log(seno, coseno, tangente);

/// OBJETO GLOBAL DE JS
// SERIALIZACION O PARSEO, transformacion de tipo de datos

let entradaInput = "123"; //asi llega del html un valor de un input
let entradaEntero = parseInt(entradaInput); // 123 numero entero
let entradaDecimal = parseFloat(entradaInput); // 123 porcion decimal
