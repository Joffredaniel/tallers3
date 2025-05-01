function sumar() {
  let num1 = parseFloat(document.getElementById('numero1').value) || 0;
  let num2 = parseFloat(document.getElementById('numero2').value) || 0;
  document.getElementById('resultado').value = num1 + num2;
}
