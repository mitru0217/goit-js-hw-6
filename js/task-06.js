

const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", onInputblur);

function onInputblur(event) {
   if (event.target.value.length === Number(inputLength)) {
      input.classList.remove("invalid");
      input.classList.add("valid");
   }
   else {
      input.classList.remove("valid");
      input.classList.add("invalid");
   }
}
