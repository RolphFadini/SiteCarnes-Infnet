const checkboxes = document.querySelectorAll(".checkbox");
const checkboxesOp = document.querySelectorAll(".checkbox-option");

for(let i = 0; i < checkboxesOp.length; i++) {
    checkboxesOp[i].onclick = function() {
        if(i == 0) {
            checkboxes[0].classList.toggle("marcado");
            checkboxes[1].classList.toggle("marcado");
            checkboxes[2].classList.toggle("marcado");
        } else if(i == 1) {
            checkboxes[1].classList.toggle("marcado");
            if(checkboxes[2].matches(".marcado"))
            checkboxes[0].classList.toggle("marcado");
        } else if(i == 2) {
            checkboxes[2].classList.toggle("marcado");
            if(checkboxes[1].matches(".marcado"))
            checkboxes[0].classList.toggle("marcado");
        } 
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("marcado");
    });
});

for(let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].onclick = function() {
        if(i == 0) {
            checkboxes[1].classList.toggle("marcado");
            checkboxes[2].classList.toggle("marcado");
        } else if(i == 1) {
            if(checkboxes[2].matches(".marcado"))
            checkboxes[0].classList.toggle("marcado");
        } else if(i == 2) {
            if(checkboxes[1].matches(".marcado"))
            checkboxes[0].classList.toggle("marcado");
        }
    }
}