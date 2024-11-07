import { expresionesRegulares } from "../../../utils/expresiones.js";

let formularioLogin = document.getElementById("form-login");

let btnFormRegistro = document.getElementById("btnFormRegistro");

let btnFormLogin = document.getElementById("btnFormLogin");

let inputs = document.getElementsByTagName("input");

btnFormRegistro.addEventListener("click", () => {
  document.getElementById("form-login").style.display = "flex";
  document.getElementById("form-register").style.display = "none";
});

btnFormLogin.addEventListener("click", () => {
  document.getElementById("form-login").style.display = "none";
  document.getElementById("form-register").style.display = "flex";
});

for (let index = 0; index < inputs.length; index++) {
  inputs[index].addEventListener("keyup", validarFormulario);
}

function validarFormulario(e) {
  switch (e.target.name) {
    case "register-nombre":
      if (expresionesRegulares.nombre.test(e.target.value)) {
        console.log("Paso la validacion");
      } else {
        console.log("El campo solo permite letras en mayuscula");
      }
      break;

    default:
      break;
  }
}
