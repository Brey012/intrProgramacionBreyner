let login = document.querySelector(".login-titulo");
let register = document.querySelector(".register-titulo");

if (login) {
  login.addEventListener("click", () => {
    document.getElementById("login").style.display = "flex";
    document.getElementById("register").style.display = "none";
  });
}

if (register) {
  register.addEventListener("click", () => {
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "flex";
  });
}