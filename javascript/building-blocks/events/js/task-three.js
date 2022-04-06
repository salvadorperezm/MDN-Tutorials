const buttonBar = document.querySelector('.button-bar');

// Add your code here
const redButton = document.querySelector("[data-color='red']");
const yellowButton = document.querySelector("[data-color='yellow']");
const greenButton = document.querySelector("[data-color='green']");
const purpleButton = document.querySelector("[data-color='purple']");

function changeBackground(e) {
    const color = e.target.getAttribute("data-color");
    buttonBar.style.backgroundColor = color;
}

buttonBar.addEventListener("click", changeBackground);
redButton.addEventListener("click", changeBackground);
yellowButton.addEventListener("click", changeBackground);
greenButton.addEventListener("click", changeBackground);
purpleButton.addEventListener("click", changeBackground);