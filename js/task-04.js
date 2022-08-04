const counter = {
        value: 0,
        increment() {
                this.value += 1;
        },
        decrement() {
                this.value -= 1;
        },    
}

const increaseBtn = document.querySelector("[data-action = increment]");
const decreasebtn = document.querySelector('[data-action = decrement]');
const updateCounter = document.querySelector("#value");

increaseBtn.addEventListener("click", increaseClick);
decreasebtn.addEventListener("click", decreaseClick);


function increaseClick()  {
     counter.increment();
     updateCounter.textContent = counter.value;        
};

function decreaseClick() {
        counter.decrement();
        updateCounter.textContent = counter.value; 
};