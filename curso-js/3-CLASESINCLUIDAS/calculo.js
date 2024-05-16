function calcular() {
  let fechaNace = new Date(document.getElementById("fechaNace").value)
  let resultado = document.getElementById("resultado")
  let diferencia = new Date() - fechaNace
  let dias = diferencia / (1000 * 60 * 60 * 24)
  resultado.innerHTML = `usted lleva ${dias.toFixed(2)} dias de haber nacido`
  var audio = new Audio("sonido.mp3")
  audio.play()
}
