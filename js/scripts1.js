function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector(
    "input[name='animal']:checked"
  ).value;
}

window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});

function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector(
    "input[name='live']:checked"
  ).value;
}

window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});

function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector(
    "input[name='tale']:checked"
  ).value;
}

window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});

function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector(
    "input[name='drink']:checked"
  ).value;
}

window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});
