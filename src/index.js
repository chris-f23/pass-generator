const caracteresAlfabeticos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const caracteresNumericos = "0123456789";

let checkboxLetras = document.getElementById('has-letters')
let checkboxNumeros = document.getElementById('has-numbers')
let inputContraseniaGenerada = document.getElementById('result')

document.getElementById('generate').addEventListener('click', () => {
  let contieneLetras = checkboxLetras.checked;
  let contieneNumeros = checkboxNumeros.checked;

  if (!contieneLetras && !contieneNumeros) {
    alert("Debe seleccionar al menos una opción.");
    return;
  }

  inputContraseniaGenerada.value = generarContrasenia(contieneLetras, contieneNumeros);
});

function obtenerCaracterAleatorio(caracteresPermitidos) {
  let index = Math.floor(Math.random() * caracteresPermitidos.length);
  return caracteresPermitidos[index];
}


function generarContrasenia(contieneLetras, contieneNumeros, cantidadCaracteres = 12) {
  let contrasenia = "";

  // Crear una lista de caracteres permitidos.
  let caracteresPermitidos = "";

  // Si contiene letras/numeros, agregarlos a la lista.
  if (contieneLetras) caracteresPermitidos += caracteresAlfabeticos;
  if (contieneNumeros) caracteresPermitidos += caracteresNumericos;

  // Agregar la cantidad de caracteres aleatorios.
  for (let index = 0; index < cantidadCaracteres; index++) {
    contrasenia += obtenerCaracterAleatorio(caracteresPermitidos);
  }

  return contrasenia;
}