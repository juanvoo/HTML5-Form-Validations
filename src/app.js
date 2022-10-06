/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("alert").style.display = "none";
  console.log("funcionando");
};
const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();

  let inputcard = document.getElementById("inputcard").value;
  let inputCVC = document.getElementById("inputCVC").value;
  let inputAddress = document.getElementById("inputAddress").value;
  let inputfirstname = document.getElementById("inputfirstname").value;
  let inputlastname = document.getElementById("inputlastname").value;
  let inputCity = document.getElementById("inputCity").value;
  let inputState = document.getElementById("inputState").value;
  let inputZip = document.getElementById("inputZip").value;
  let weAccept = document.querySelector(
    "input[type=radio][name=inlineRadioOptions]"
  ).checked;
  let input_message = document.getElementById("input_message").value;

  const data = [];
  data.push(
    inputcard,
    inputCVC,
    inputAddress,
    inputfirstname,
    inputlastname,
    inputCity,
    inputZip,
    input_message
  );
  let alert = document.getElementById("alert");
  for (let index = 0; index < data.length; index++) {
    console.log(data[index]);

    if (
      data[index] === "" ||
      inputState === "Pick a state" ||
      weAccept === null
    ) {
      alert.style.display = "block";
      // document.querySelectorAll(".my_P_error")[index].style.borderColor = "red";
      document.getElementById("inputcard").style.borderColor = "red";
      document.getElementById("inputCVC").style.borderColor = "red";
      document.getElementById("inputAddress").style.borderColor = "red";
      document.getElementById("inputfirstname").style.borderColor = "red";
      document.getElementById("inputlastname").style.borderColor = "red";
      document.getElementById("inputCity").style.borderColor = "red";
      document.getElementById("inputState").style.borderColor = "red";
      document.getElementById("inputZip").style.borderColor = "red";
      document.getElementById("input_message").style.borderColor = "red";
      document.querySelector(
        "input[type=radio][name=inlineRadioOptions]"
      ).style.borderColor = "red";
      document.getElementById("inlineRadio2").style.borderColor = "red";
      document.getElementById("inlineRadio3").style.borderColor = "red";
      document.getElementById("inlineRadio4").style.borderColor = "red";
      // document.getElementById("radio_options").style.border = "1px solid red";
    } else {
      // document.querySelectorAll(".my_P_error")[index].style.borderColor =
      //   "white";
      document.getElementById("inputcard").style.borderColor = "green";
      document.getElementById("inputCVC").style.borderColor = "green";
      document.getElementById("inputAddress").style.borderColor = "green";
      document.getElementById("inputfirstname").style.borderColor = "green";
      document.getElementById("inputlastname").style.borderColor = "green";
      document.getElementById("inputCity").style.borderColor = "green";
      document.getElementById("inputState").style.borderColor = "green";
      document.getElementById("inputZip").style.borderColor = "green";
      document.getElementById("input_message").style.borderColor = "green";
      document.querySelector(
        "input[type=radio][name=inlineRadioOptions]"
      ).style.borderColor = "green";
      document.getElementById("inlineRadio2").style.borderColor = "green";
      document.getElementById("inlineRadio3").style.borderColor = "green";
      document.getElementById("inlineRadio4").style.borderColor = "green";
    }
  }
});
