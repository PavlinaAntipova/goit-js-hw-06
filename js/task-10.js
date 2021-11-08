function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberRef = document.querySelector("[type=number]");
const divBoxRef = document.querySelector("#boxes");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");

let inputValue;


const onInputNumber = event => inputValue = event.currentTarget.value;



const createBoxes = amount => {
      let width = 20;
    let height = 20;
  for (let number = 0; number < amount; number += 1) {
    const newDiv = document.createElement("div");
    divBoxRef.append(newDiv);
    const divStyle = newDiv.style;
    divStyle.backgroundColor = getRandomHexColor();
    divStyle.marginTop = "20px";
    width += 10;
    height += 10;
    divStyle.width = `${width}px`;
    divStyle.height = `${height}px`;

    console.log(divStyle.width);
  }
};

const onCreateBtn = () => {

  if (inputValue < 1 || inputValue > 100) {
    alert("Please, enter number from 1 to 100");
    return;
  }
  createBoxes(inputValue);
  inputNumberRef.value = "";
};

const destroyBoxes = () => {
  divBoxRef.innerHTML = "";
  inputNumberRef.value = "";
};



inputNumberRef.addEventListener("input", onInputNumber);
createBtnRef.addEventListener("click", onCreateBtn);
destroyBtnRef.addEventListener("click", destroyBoxes);





