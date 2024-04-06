// numericos enteros
let numeroEntero = 1234;
let numeroDecimal = 12.5;
let x; // hueco de seguridad NO LO HAGAS !

console.log(typeof numeroEntero);
console.log(typeof numeroDecimal);

// cadenas de texto :: en realidad JS las maneja como arreglo

let texto1 = "VIVA JS";
let texto2 = "hola \n que tal ";

console.log(typeof texto1);
console.log(texto2);

// boolean o logicos   true|false  ?=>logica booleana
let estaActivo = true; //false

console.log(typeof estaActivo);

//undefined variable no definida
let noDefinida = undefined; // no inicializar, deben salir en errores de ejecucion

// NaN : Not is a NUMBER hay una variable definida pero sin asignacion
let calcular = numeroDecimal + x;
console.log(calcular);

//objetos : son estructuras de datos estilo conjunto o base de datos
// objeto literal
let aprendiz = {
  id: 200,
  nombre: "Juan Perez",
  estaActivo: true,
};

console.log(typeof aprendiz);
console.log(aprendiz);

// NULO O VACIO NO ES 0
let nulo = null;

// arreglo de objetos literales
let adso2827725 = [
  { id: 200, nombre: "Juan Perez", estaActivo: true },
  { id: 201, nombre: "Juan Rojas", estaActivo: false },
  { id: 203, nombre: "Pedro Rojas", estaActivo: true },
];
console.log(adso2827725[2].nombre);
