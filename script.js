const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");

yesBtn.addEventListener("click", () => {
  container.innerHTML = "<h1>Obrigado!</h1><p>O seu CU agora é de Davi </p>";
  container.style.backgroundColor = "#4CAF50";
});

noBtn.addEventListener("mouseover", () => {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

noBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
