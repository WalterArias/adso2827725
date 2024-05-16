let fechaHoy = new Date(); //creando un objeto de la clase fecha de javascript

let fechaEpoch = fechaHoy.getTime(); // arranca el 1 de enero de 1970 a contar los milisegundos transcurridos
console.log(fechaEpoch);

let fechaX = new Date("2024/4/14");
console.log(fechaX.getTime());
