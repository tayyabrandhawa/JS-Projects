const toggle = document.querySelector("#toggle");
const body = document.body;

toggle.addEventListener("click", function () {
  body.classList.toggle("dark");

  const circle = document.querySelector(".circle");

  if (body.classList.contains("dark")) {
    circle.innerText = "☀️";
  } else {
    circle.innerText = "🌙";
  }
});
