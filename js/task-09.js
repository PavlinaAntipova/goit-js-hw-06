function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function parseRGBA(color) {
  const channels = color
    .replace(/rgba|rgb|\(|\)/g, '')
    .split(/,\s*/g)
    .map((entry, index) => {
      const number = parseFloat(entry, 10);
      return (index === 3) ? Math.floor(number * 255) : number;
    });

  return channels;
}

function convertRGBAtoHEX(array) {
  const hexColor = array.map(entry => (`0${entry.toString(16)}`).slice(-2));

  return (`#${hexColor.join('')}`);
}

const changeBtn = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
const textColorRef = document.querySelector(".color");

const onChangeBtnClick = () => {

  bodyRef.style.backgroundColor = getRandomHexColor();
  const bodyColor = bodyRef.style.backgroundColor;

  textColorRef.textContent = convertRGBAtoHEX(parseRGBA(bodyColor));
  

};

changeBtn.addEventListener("click", onChangeBtnClick);








