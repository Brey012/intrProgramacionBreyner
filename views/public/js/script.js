// function Persona(nombre, edad, estatura, color) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.estatura = estatura;
//   this.color = color;
//   this.saludar = function () {
//     console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad}`);
//   };
// }

// const Persona1 = new Persona("Breyner", 21, 1.77, "Canela pasion");

// Persona1.saludar();

// let Persona = {
//   nombre: 'Breyner',
//   edad: 21,
//   estatura: 1.77,
//   saludar: function saludar() {
//     console.log('Hola mi nombre es ' + this.nombre)
//   },
//   direccion: {
//     calle: 23,
//     carrea:32,
//     interior: 2
//   }

// }

// Persona.saludar;

let formularioLogin = document.getElementById("form-login");

let btnFormRegistro = document.getElementById("btnFormRegistro");

let btnFormLogin = document.getElementById("btnFormLogin");

let inputs = document.getElementsByTagName("input");

let registerCorreo = document.getElementById("register-correo");

let regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

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
    case "login-usuario":
      console.log("Este es el input de login usuario");
      break;

    default:
      break;
  }
}

registerCorreo.addEventListener("submit", () => {});
