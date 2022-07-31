let counterValue = 0;

const increaseBtn = document.querySelector("[data-action = increment]");
const decreasebtn = document.querySelector('[data-action = decrement]');

function increaseClick()  {
        updateCounter (++ counterValue);
};

function decreaseClick () {
        updateCounter(--counterValue);
};

function updateCounter() {
    document.querySelector("#value").innerHTML = counterValue;
};

increaseBtn.addEventListener("click", increaseClick);
decreasebtn.addEventListener("click", decreaseClick);




