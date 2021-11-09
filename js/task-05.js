const inputNameRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");


const onInputName = event => {

    if (!event.currentTarget.value) {
        nameOutputRef.textContent = "Anonymous";
    } else {
        nameOutputRef.textContent = event.currentTarget.value;
}
}

inputNameRef.addEventListener("input", onInputName);