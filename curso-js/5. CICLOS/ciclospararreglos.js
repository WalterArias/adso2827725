//usados para arreglos recorrer objetos

let adso = ['sebastian','luna','jhan','nicolas']  //lista o arreglo
let longitud = adso.length 
// recorrerlo
// con un for

 for (let index = 0; index <adso.length; index++) {
  console.log(adso[index])
    
} 

//usando foreach

adso.forEach(function(aprendiz){
    console.log(aprendiz)
}) 

// map

let numeros = [1,2,3,4,5,6,7]
// map me permite crear nuevos arreglos basados en arreglos anterior y tambien recorre
// usamos map para recorrer el array recordar function espera la palabra return
numeros.map(function(numero){
    return numero
})
//usamos map para crear nuevos arreglos
let resultado = numeros.map(function(numero){
    return numero * 3
})
//arreglos nuevo
resultado.forEach(function(r){
    console.log(r)
})
// arreglo original
numeros.forEach(function(numero){
    console.log(numero)
})

