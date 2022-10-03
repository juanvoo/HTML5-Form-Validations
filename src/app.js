/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let form = document.querySelector("form");
  form.addEventListener(
    "submit",
    function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      document.querySelectorAll("input").forEach(element => {
        if (!element.hasAttribute("required")) {
          element.setAttribute("required", "required");
        }
      });
      if (!form.hasAttribute("needs-validation")) {
        form.classList.add("needs-validation");
      }
      if (!form.hasAttribute("was-validated")) {
        form.classList.add("was-validated");
      }
    },
    false
  );
};

const getJSON = async url => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);

  const data = response.json();
  return data;
};

getJSON(
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json"
)
  .then(data => {
    for (const item of Object.entries(data)) {
      let opt = document.createElement("option");
      opt.innerHTML = item[1];
      opt.value = item[0];
      document.querySelector("#fState").appendChild(opt);
    }
  })
  .catch(error => {
    console.error(error);
  });
