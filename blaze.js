
function selectColor(element, color) {
  element.parentElement.innerText = color;
}
function contarCores() {
var input = document.getElementById("input").value;
var corPreta = "⚫";
var corVermelha = "🔴";
var contadorPreto = (input.match(new RegExp(corPreta, "g")) || []).length;
var contadorVermelho = (input.match(new RegExp(corVermelha, "g")) || []).length;
var resultado;
if (contadorPreto > contadorVermelho) {
  resultado = "A cor preta apareceu mais vezes.";
} else if (contadorVermelho > contadorPreto) {
  resultado = "A cor vermelha apareceu mais vezes.";
} else {
  resultado = "As cores apareceram igualmente.";
}
document.getElementById("resultado").innerHTML = resultado;
}