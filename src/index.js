// #region Elementos
const caracteresAlfabeticosMinus = "abcdefghijklmnopqrstuvwxyz";
const caracteresAlfabeticosMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caracteresNumericos = "0123456789";

let inputCantidadCaracteres = document.getElementById('character-count');
let checkboxLetrasMinusculas = document.getElementById('has-letters-minus')
let checkboxLetrasMayusculas = document.getElementById('has-letters-mayus')
let checkboxNumeros = document.getElementById('has-numbers')

let inputContraseniaGenerada = document.getElementById('result')
//#endregion

// #region Valores por defecto
checkboxLetrasMinusculas.checked = true;
checkboxLetrasMayusculas.checked = true;
inputCantidadCaracteres.setAttribute('min', 6);
inputCantidadCaracteres.setAttribute('value', 8);
inputCantidadCaracteres.setAttribute('max', 32);
// #endregion

// #region Listeners
// Generar contraseña.
document.getElementById('generate').addEventListener('click', () => {
  let cantidadCaracteres = inputCantidadCaracteres.value;
  let incluirMinusculas = checkboxLetrasMinusculas.checked;
  let incluirMayusculas = checkboxLetrasMayusculas.checked;
  let incluirNumeros = checkboxNumeros.checked;

  if (!incluirMinusculas && !incluirMayusculas && !incluirNumeros) {
    alert("Debe seleccionar al menos una opción.");
    return;
  }

  inputContraseniaGenerada.value = generarContrasenia(incluirMinusculas, incluirMayusculas, incluirNumeros, cantidadCaracteres);
});

// Validar cantidad de caracteres.
inputCantidadCaracteres.addEventListener('change', () => {
  let valor = parseInt(inputCantidadCaracteres.value);
  let minimo = parseInt(inputCantidadCaracteres.min);
  let maximo = parseInt(inputCantidadCaracteres.max);

  if (valor < minimo) inputCantidadCaracteres.value = minimo;
  else if (valor > maximo) inputCantidadCaracteres.value = maximo;
});

// Copiar la contraseña al portapapeles.
document.getElementById('copy').addEventListener('click', () => {
  inputContraseniaGenerada.select();
  document.execCommand("copy");
  document.getSelection().removeAllRanges()
});
// #endregion

// #region Logica
// Dado un string que contenga caracteres permitidos, obtener un caracter al azar.
function obtenerCaracterAleatorio(caracteresPermitidos) {
  let index = Math.floor(Math.random() * caracteresPermitidos.length);
  return caracteresPermitidos[index];
}

// Dados parametros para incluir ciertos caracteres, generar un string con la cantidad de caracteres especificada.
function generarContrasenia(incluirMinusculas, incluirMayusculas, incluirNumeros, cantidadCaracteres = 12) {
  let contrasenia = "";

  // Crear una lista de caracteres permitidos.
  let caracteresPermitidos = "";

  // Si contiene letras/numeros, agregarlos a la lista.
  if (incluirMinusculas) caracteresPermitidos += caracteresAlfabeticosMinus;
  if (incluirMayusculas) caracteresPermitidos += caracteresAlfabeticosMayus;
  if (incluirNumeros) caracteresPermitidos += caracteresNumericos;

  // Agregar la cantidad de caracteres aleatorios.
  for (let index = 0; index < cantidadCaracteres; index++) {
    contrasenia += obtenerCaracterAleatorio(caracteresPermitidos);
  }

  return contrasenia;
}
// #endregion