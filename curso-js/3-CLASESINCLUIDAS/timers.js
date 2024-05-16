// settimeout : me permite crear un temporizador; la medida de tiempo es MILISEGUNDOS, debe llamar una porcion de codigo aparte (funcion)
// esta sera funcion que llamaremos en el timer (CALLBACK)
function ponerTitulo() {
  //console.log(" hola programador JS");

  document.write("<h1>WELCOME TO JS</h1>");
}

function escribirParrafo() {
  document.write("<p>Este es el mejor lenguaje, c# es para mongolicos</p>");
}

// usamos el temporizador o timer

setTimeout(ponerTitulo, 5000);
setTimeout(escribirParrafo, 3000);
