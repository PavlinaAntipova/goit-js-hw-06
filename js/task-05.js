const inputNameRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

const onInputName = event => {
    
    nameOutputRef.textContent = event.currentTarget.value;
}

inputNameRef.addEventListener("input", onInputName);