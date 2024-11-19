let login = document.querySelector(".login-titulo")

let register = document.querySelector(".register-titulo");

register.addEventListener("click", () => {
  document.querySelector(".contenedor-login").style.display = "flex";
  document.querySelector(".contenedor-register").style.display = "none";
});

login.addEventListener("click", () => {
    document.querySelector(".contenedor-login").style.display = "flex";
    document.querySelector(".contenedor-register").style.backGraundColor = "none";

});
