function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector('.widget');
const btn = widget.querySelector(".change-color");
const span = widget.querySelector(".color");
 

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();

  span.textContent = `${document.body.style.backgroundColor}` ;
});