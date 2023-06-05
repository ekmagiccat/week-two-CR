window.addEventListener("load", function () {
  let form = document.getElementById("drink-form");
  let option1 = document.getElementById("option1");
  let option2 = document.getElementById("option2");
  let option3 = document.getElementById("option3");
  let option4 = document.getElementById("option4");

  form.addEventListener("submit", function (event) {
    const radioSelection = document.querySelector(
      "input[name='animal']:checked"
    ).value;
    const radioSelection2 = document.querySelector(
      "input[name='live']:checked"
    ).value;
    const radioSelection3 = document.querySelector(
      "input[name='tale']:checked"
    ).value;
    const radioSelection4 = document.querySelector(
      "input[name='press']:checked"
    ).value;
    const radioSelection5 = document.querySelector(
      "input[name='drink']:checked"
    ).value;

    if (radioSelection === "cat" || radioSelection2 === "city") {
      option3.removeAttribute("class", "hidden");
      option2.setAttribute("class", "hidden");
      option1.setAttribute("class", "hidden");
      option4.setAttribute("class", "hidden");
    } else if (radioSelection4 === "250" || radioSelection5 === "margarita") {
      option2.removeAttribute("class", "hidden");
      option3.setAttribute("class", "hidden");
      option1.setAttribute("class", "hidden");
      option4.setAttribute("class", "hidden");
    } else if (
      radioSelection2 === "starship" ||
      radioSelection3 === "charlie"
    ) {
      option4.removeAttribute("class", "hidden");
      option2.setAttribute("class", "hidden");
      option1.setAttribute("class", "hidden");
      option3.setAttribute("class", "hidden");
    } else {
      option1.removeAttribute("class", "hidden");
      option2.setAttribute("class", "hidden");
      option4.setAttribute("class", "hidden");
      option3.setAttribute("class", "hidden");
    }
    event.preventDefault();
  });
});
