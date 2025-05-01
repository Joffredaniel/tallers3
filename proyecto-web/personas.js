function eliminarFila(icono) {
  if (confirm("¿Eliminar este registro?")) {
    icono.closest('tr').remove();
  }
}

function verPersona(icono) {
  const fila = icono.closest('tr').children;
  alert(\`Cédula: \${fila[0].textContent}\nNombre: \${fila[1].textContent}\nApellido: \${fila[2].textContent}\nFecha: \${fila[3].textContent}\`);
}
