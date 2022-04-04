const btn = document.querySelector('.off');

// Add your code here

function checkMachine() {
    switch(btn.textContent) {
        case "Machine is off":
            btn.textContent = "Machine is on";
            break;
        case "Machine is on":
            btn.textContent = "Machine is off";
            break;
    }
}

btn.addEventListener("click", checkMachine);