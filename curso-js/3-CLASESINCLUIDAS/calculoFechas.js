//Nota ejemplos de calculos usando la clase date, ADVERTENCIA no usar en una aplicacion, este calculo
// matematico da resultados inexactos debido a los años bisiestos, (Posteriormente usaremos clases de tercero con el uso del calendario gregoriano).

let resultado = document.getElementById("resultado")

let fechaHoy = new Date() // usamos el metodo constructor de la clase date /* creando un objeto
console.log(fechaHoy) // fecha que viene de la zona horario
let fechaNacimiento = new Date("1967/12/02") //  AAAA/MM/DD
console.log(fechaNacimiento)

let diferencia = fechaHoy - fechaNacimiento
console.log(diferencia) // milisegundos

let horas = diferencia / (1000 * 60 * 60)
let dias = diferencia / (1000 * 60 * 60 * 24)
let semanas = diferencia / (1000 * 60 * 60 * 24 * 7)
let edadExacta = diferencia / (1000 * 60 * 60 * 24 * 365)
console.log(dias, horas)
//console.log(dias.toFixed(2), horas.toFixed(2)) // ajuste de posiciones decimales
console.log(Math.round(dias), Math.round(horas), semanas, edadExacta) // redondeo a parte entera

// fechas Futuras

let fechaFuturo = new Date("2028-3-13")
let futuro = fechaFuturo - fechaHoy // milisegundos a futuro
let horasPago = futuro / (1000 * 60 * 60)
let semanasPago = futuro / (1000 * 60 * 60 * 24 * 7)
console.log(horasPago, semanasPago)
console.log(horasPago, Math.round(semanasPago.toFixed(2)))

resultado.innerHTML = `usted lleva ${semanas.toFixed(2)} semanas de haber nacido`

// solucion a inexactitud */
