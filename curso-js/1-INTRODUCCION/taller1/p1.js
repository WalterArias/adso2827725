// entradas
let numero = 25;

// proceso : cuadrado es el numero multiplicado por si mismo
// el numero multiplicado tres veces por si mismo
let cuadrado = numero * numero; //obtenemos el cuadrado
let cubo = numero * numero * numero;

//salidas
console.log(
  "el cuadrado del numero 25 es:",
  cuadrado,
  " y el cubo del numero 25 es:",
  cubo
);

// uso de expresiones literales o backsticks

console.log(
  `el cuadrado del numero 25 es ${cuadrado} y el cubo del numero 25 es ${cubo}`
);

// renderizando automaticamente en el HTML
document.write(`<h1> cuadrado: ${cuadrado} cubo ${cubo}</h1>`);
