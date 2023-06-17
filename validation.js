const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const message = document.getElementById("message");
const checkbox = document.querySelector(".checkbox-container");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const messageValue = message.value.trim();
    
    let usernameOK = 0;
    let emailOK = 0;
    let numberOK = 0;
    let checkboxOK = 0;
    let messageOK = 0;

    if(usernameValue === "") {
        setErrorFor(username, "Nome não pode estar em branco e deve possuir pelo menos 2 nomes.");
    } else {
        setSuccessFor(username);
        usernameOK = 1;
    }

    if(emailValue === "") {
        setErrorFor(email, "Email deve ser válido.");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email deve ser válido.");
    } else {
        setSuccessFor(email);
        emailOK = 1;
    }

    if(numberValue === "") {
        setErrorFor(number, "Telefone não pode possuir símbolos e não pode estar em branco.");
    } else if(numberValue.length < 11 || numberValue.length > 11) {
        setErrorFor(number, "Telefone deve possuir 11 caracteres");
    } else if(isNaN(numberValue)) {
        setErrorFor(number, "Telefone deve conter apenas números")
    } else {
        setSuccessFor(number);
        numberOK = 1;
    }

    if(checkboxes[0].matches(".marcado")) {
        checkboxOK = 1;
    } else if(checkboxes[1].matches(".marcado")) {
        checkboxOK = 1;
    } else if(checkboxes[2].matches(".marcado")) {
        checkboxOK = 1;
    } else {
        checkboxOK = 0;
    }

    if(checkboxOK == 0) {
        checkbox.style.border = "2px solid var(--error)"
    } else {
        checkbox.style.border = "2px solid var(--gray)"
    }

    if(messageValue === "") {
        setErrorFor(message, "Nos ajude a melhorar! deixe um elogio ou reclamação!")
    } else if(messageValue.length < 5) {
        setErrorFor(message, "Você poderia dizer um pouco mais sobre?");
    } else {
        setSuccessFor(message);
        messageOK = 1;
    }


    if(usernameOK == 1 && emailOK == 1 && numberOK == 1 && checkboxOK == 1 && messageOK == 1) {
        alert("Cadastro concluído com sucesso! Obrigado pela preferência!");
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}