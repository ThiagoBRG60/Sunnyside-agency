const hamburguer = document.getElementById("hamburguer");
const hamburguerMenu = document.getElementById("hamburguer-menu");

hamburguer.addEventListener("click", () => {
  hamburguerMenu.classList.toggle("selected");
});
