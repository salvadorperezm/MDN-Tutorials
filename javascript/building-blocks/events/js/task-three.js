const buttonBar = document.querySelector('.button-bar');

// Add your code here
const redButton = document.querySelector("[data-color='red']");
const yellowButton = document.querySelector("[data-color='yellow']");
const greenButton = document.querySelector("[data-color='green']");
const purpleButton = document.querySelector("[data-color='purple']");

const buttons = [redButton, yellowButton, greenButton, purpleButton];

function changeBackground(e) {
    const color = e.currentTarget.getAttribute("data-color");
    return color;
}

buttonBar.addEventListener("click", e => e.currentTarget.style.backgroundColor = changeBackground());
// redButton.addEventListener("click", changeBackground);
// yellowButton.addEventListener("click", changeBackground);
// greenButton.addEventListener("click", changeBackground);
// purpleButton.addEventListener("click", changeBackground);