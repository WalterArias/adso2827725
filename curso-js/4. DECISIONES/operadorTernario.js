// Propio de javascript

// forma clasica
let edad = 11
//======================================
if (edad >= 18) {
  console.log("eres mayor de edad !")
} else {
  console.log("eres menor de edad !")
}

//operador ternario
// recomendaciones: evitar con proposiones compuestas, interrogacion es lado verdadero y dos puntos es el lado falso de la decision, puedo guardar el resultado en una variable

let resultado = edad >= 18 ? "eres mayor de edad !" : "eres menor de edad !"
// ejemplo de un componente web
let capa =
  edad >= 18
    ? `<h1 style="color: red;">MAYOR DE EDAD</h1>`
    : `<h1 style="color: blue;">MENOR DE EDAD</h1>`

document.write(capa)
