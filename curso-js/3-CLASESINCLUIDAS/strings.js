// string == arreglos 

// definicion clasica por asignacion, literal
let cadena1 = "hola soy walter arias"
// definicion con clase incluida 
let cadena2 = new String('saludos desde marte')  //recomendado
console.log( typeof cadena1) // tipo string
console.log(typeof cadena2)  // tipo objeto

//longitud
console.log(cadena1.length, cadena2.length)
// metodos interesantes
// obtener un caracter del string
let caracter = cadena2[8]
console.log(caracter)
//obtener una porción de texto - slice
let porcionTexto = cadena1.slice(0,4)
console.log(porcionTexto)
let porcionTexto2 = cadena2.slice(14,19)
console.log(porcionTexto2)
// quitar espacios en blanco  TRIMEAR
let textoTrimear = "   soy de adso    "
let textoTrimeado = textoTrimear.trim()
console.log(textoTrimeado)
// de mayusculas a minusculas y viceversa
let textoMayusculas = "JOSE DE JESUS PEREZ"
console.log(textoMayusculas.toLowerCase())
let textoMinusculas = "luis de maria lopez"
console.log(textoMinusculas.toUpperCase())

// validar que se incluya una porcion de texto

let elTexto = "y siempre ha acontecido que el amor desconoce su profundidad hasta que llega el momento de la separación"
let validacion = elTexto.includes('amorch')  // devuelve un boolean 
console.log(validacion)

// repetir cadena
let titulo = "Colombia \n"    //incluye secuencias escape
let saludo = titulo.repeat(6)
console.log(saludo)

// rellenar una cadena dada con un texto al inicio de acuerdo a la longitud
let titulo2='abc'
let ejemplo = titulo2.padStart(12,'xyz')
console.log(ejemplo)
//
let titulo3='cali'
let ejemplo3 = titulo3.padStart(36,' hermosa ')
console.log(ejemplo3)

// reemplazar
let cadenaReemplazo = "los gatos y los perros, los gatos maullan, los perros ladran, los gatos estresan !"
let cadenaNueva = cadenaReemplazo.replaceAll('gatos','musingos')
console.log(cadenaNueva)