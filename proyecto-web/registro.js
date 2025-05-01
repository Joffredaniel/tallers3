function registrar() {
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fechaNacimiento").value;
  const edad = calcularEdad(new Date(fecha));
  document.getElementById("edad").value = edad;

  const tabla = document.getElementById("tabla").querySelector("tbody");
  const fila = tabla.insertRow();
  fila.innerHTML = `<td>${nombre}</td><td>${fecha}</td><td>${edad}</td><td><button onclick="eliminar(this)">Eliminar</button></td>`;
}

function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const m = hoy.getMonth() - fechaNacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }
  return edad;
}

function eliminar(boton) {
  const fila = boton.closest("tr");
  fila.remove();
}
