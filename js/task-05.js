const refs = {
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  
    if (event.currentTarget.value.length === 0) {
      return  refs.span.textContent = "Anonymous";
    }
   refs.span.textContent =  event.currentTarget.value; 
}