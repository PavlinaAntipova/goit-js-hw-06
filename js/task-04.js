let counterValue = 0;

const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const value = document.querySelector("#value");

const onDecrementBtn = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
const onIncrementBtn = () => {
    counterValue += 1;
    value.textContent = counterValue;
};




decrementBtn.addEventListener("click", onDecrementBtn);
incrementBtn.addEventListener("click", onIncrementBtn);





