const validationInputRef = document.querySelector("#validation-input");
const validationNumber = Number(validationInputRef.dataset.length);

const addClassOnElement = (element, className) => element.classList.add(className);
const removeClassOnElement = (element, className) => element.classList.remove(className);

const onValidationInput = (event) => {

    if (event.currentTarget.value.length === validationNumber) {
        removeClassOnElement(event.currentTarget, "invalid");
        addClassOnElement(event.currentTarget, "valid");
    } else {
        removeClassOnElement(event.currentTarget, "valid");
        addClassOnElement(event.currentTarget, "invalid");
    }
    
}

validationInputRef.addEventListener("blur", onValidationInput);
