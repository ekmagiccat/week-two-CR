function hideResults() {
  document.getElementById("option1").setAttribute("class", "hidden");
  document.getElementById("option2").setAttribute("class", "hidden");
  document.getElementById("option3").setAttribute("class", "hidden");
  document.getElementById("option4").setAttribute("class", "hidden");
}

window.onload = function () {
  hideResults();

  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideResults();
  };
  function handleRadio(event) {
    event.preventDefault();

    window.addEventListener("load", function () {
      document
        .getElementById("radio-form")
        .addEventListener("submit", handleRadio(event));
    });

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

  if (radioSelection === "dog" || radioSelection3 === "cindy") {
    document.getElementById("option1").removeAttribute("class", "hidden");
  } else if (radioSelection === "cat" || radioSelection2 === "city") {
    option3.removeAttribute("class", "hidden");
    option2.setAttribute("class", "hidden");
    option1.setAttribute("class", "hidden");
    option4.setAttribute("class", "hidden");
  } else if (radioSelection4 === "250" || radioSelection5 === "margarita") {
    option2.removeAttribute("class", "hidden");
    option3.setAttribute("class", "hidden");
    option1.setAttribute("class", "hidden");
    option4.setAttribute("class", "hidden");
  } else {
    radioSelection2 === "starship" || radioSelection3 === "charlie";
    {
      option3.removeAttribute("class", "hidden");
      option2.setAttribute("class", "hidden");
      option1.setAttribute("class", "hidden");
      option4.setAttribute("class", "hidden");
    }
  }
}
};

/* window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
}); */

/*document.getElementById("option2").setAttribute("class", "hidden");
  document.getElementById("option3").setAttribute("class", "hidden");
  document.getElementById("option4").setAttribute("class", "hidden")*/
