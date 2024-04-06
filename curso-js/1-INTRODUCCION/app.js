// definicion  de variables
// forma 1 : NO RECOMENDADA, OBSOLETA, PROBLEMAS DE SCOPE O ALCANCE

//ENTRADAS
var valor1 = 45;
var valor2 = 345;
//PROCESO
var suma = valor1 + valor2;

// SALIDAS
// POR CONSOLA (PROGRAMADOR)
console.log("La edad del aprendiz:", suma);

// renderizado en el document(body )del html
document.write("La edad del aprendiz:" + suma);

// PROFESIONAL : usando el DOM
let parrafo = document.getElementById("parrafo");
parrafo.innerHTML = "la suma de los dos valores ingresados es :" + suma;

// NOTA : el uso de var permite redifinir la variable y usarlas varias PROBLEMAS !!
// var tiene un scope o alcance parecido a las constantes
