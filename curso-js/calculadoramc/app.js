function calcular() {
  let salida = document.getElementById("salida"); //para mostrar el salida */
  let peso = parseInt(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let masa = peso / (altura * altura);
  alert(`la masa corporal es ${masa.toFixed(3)}`);
  salida.innerHTML = `la masa corporal es ${masa.toFixed(3)}`;
}
