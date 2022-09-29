/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // write your code here
  console.log("Estoy Funcionando");
  document.getElementById("alertmessage").style.display = "none";
};
const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  let card = document.getElementById("inputcard").value;
  let CVC = document.getElementById("inputCVC").value;
  let Address = document.getElementById("inputAddress").value;
  let first = document.getElementById("inputfirstname").value;
  let last = document.getElementById("inputlastname").value;
  let city = document.getElementById("inputCity").value;
  let State = document.getElementById("inputState").value;
  let zip = document.getElementById("inputZip").value;
  let weaccept = document.getElementById(
    "input[type-radio][name-inlineRadioOptions]:checked"
  );
  let input_message = document.getElementById("input_message").value;

  const my_data_text = [];

  my_data_text.push(
    card,
    CVC,
    Address,
    first,
    last,
    city,
    State,
    zip,
    input_message
  );

  let my_alert = document.getElementById("alertmessage");
  for (let index = 0; index < my_data_text.length; index++) {
    console.log(my_data_text[index]);

    if (
      my_data_text[index] === "" ||
      State === "Pick a state" ||
      weaccept === null
    ) {
      my_alert.style.display = "block";

      document.getElementById("inputState").style.borderColor = "red";
      document.getElementById("inputcard").style.borderColor = "red";
      document.getElementById("inputCity").style.borderColor = "red";
      document.getElementById("inputZip").style.borderColor = "red";
      document.getElementById("inputCVC").style.borderColor = "red";
      document.getElementById("inputAddress").style.borderColor = "red";
      document.getElementById("inputfirstname").style.borderColor = "red";
      document.getElementById("inputlastname").style.borderColor = "red";
      document.getElementById("input_message").style.borderColor = "red";
      document.getElementById("inlineRadio1").style.border = " 1px solid red";
      document.getElementById("inlineRadio2").style.border = " 1px solid red";
      document.getElementById("inlineRadio3").style.border = " 1px solid red";
      document.getElementById("inlineRadio4").style.border = " 1px solid red";
    } else {
      my_alert.style.display = "none";
      document.querySelectorAll(".my_P_error")[index].style.borderColor =
        "white";
      document.getElementById("inputState").style.borderColor = "white";
      document.getElementById("input_message").style.borderColor = "white";
      document.getElementById("inlineRadio1").style.border = "unset";
    }
  }
  if (my_alert.style.display === "none") {
    alert("formulario enviado correctamente");
  }
});
