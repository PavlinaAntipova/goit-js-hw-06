const validationInputRef = document.querySelector("#validation-input");

const onValidationInput = (event) => {

    if (event.currentTarget.value.length === 6) {
        return validationInputRef.classList.add("valid");
    } else {
        validationInputRef.classList.add("invalid");
    }
    
}

validationInputRef.addEventListener("blur", onValidationInput);
