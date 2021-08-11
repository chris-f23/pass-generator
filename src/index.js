const caracteresPermitidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let inputContraseniaGenerada = document.getElementById('result')

document.getElementById('generate').addEventListener('click', () => {
  inputContraseniaGenerada.value = generarContrasenia();
});


function obtenerCaracterAleatorio() {
  let index = Math.floor(Math.random() * caracteresPermitidos.length);
  return caracteresPermitidos[index];
}


function generarContrasenia(cantidadCaracteres = 12) {
  let contrasenia = "";

  for (let index = 0; index < cantidadCaracteres; index++) {
    contrasenia += obtenerCaracterAleatorio();
  }

  return contrasenia;
}