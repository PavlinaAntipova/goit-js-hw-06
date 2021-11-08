const loginFormRef = document.querySelector(".login-form");

const onSubmitForm = (event) => {
    event.preventDefault();

    const emailText = event.currentTarget.elements.email.value;
    const passwordText = event.currentTarget.elements.password.value;

    if (!(emailText && passwordText)) {
        alert("Please, fill in all fields!");
    } else {
        const formData = new FormData(event.currentTarget);
        const formElementsObj = {};
            
        formData.forEach((value, name) => formElementsObj[name] = value);
        console.log(formElementsObj);
    }
    
    event.currentTarget.reset();
}

loginFormRef.addEventListener("submit", onSubmitForm);