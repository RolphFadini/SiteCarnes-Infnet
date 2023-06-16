const radios = document.querySelectorAll(".radio");
const radiosOp = document.querySelectorAll(".radio-option");

radios.forEach(radio => {
    radio.addEventListener("click", () => {
        radio.classList.add("marcado");
    });
});

for(let i = 0; i < radios.length; i++) {
    radios[i].onclick = function() {
        if(i == 0) {
            radios[1].classList.remove("marcado");
            radios[2].classList.remove("marcado");
        } else if(i == 1) {
            radios[0].classList.remove("marcado");
            radios[2].classList.remove("marcado");
        } else if(i == 2) {
            radios[0].classList.remove("marcado");
            radios[1].classList.remove("marcado");
        }
    }
}

for(let i = 0; i < radiosOp.length; i++) {
    radiosOp[i].onclick = function() {
        if(i == 0) {
            radios[0].classList.add("marcado");
            radios[1].classList.remove("marcado");
            radios[2].classList.remove("marcado");
        } else if(i == 1) {
            radios[0].classList.remove("marcado");
            radios[1].classList.add("marcado");
            radios[2].classList.remove("marcado");
        } else if(i == 2) {
            radios[0].classList.remove("marcado");
            radios[1].classList.remove("marcado");
            radios[2].classList.add("marcado");
        }
    }
}