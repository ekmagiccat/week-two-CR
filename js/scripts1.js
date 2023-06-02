window.onload = function () {
  let form = document.querySelector("form");
};
form.onsubmit = function (event) {
event.preventDefault();
let dog = document.getElementById("doggy");
let cat = document.getElementById("kitty");
let dolphin = document.getElementById("dolph");
let platypus = document.getElementById("plat");
let radioSelection = document.querySelector(
  "input[name='animal']:checked"
).value;
if (radioSelection === "doggy") {
  option1.removeAttribute("class", "hidden");
}

//let = document.getElementById("");
