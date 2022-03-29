const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
const button = document.querySelector(".button");

function random(min, max) {
    return  Math.floor(Math.random() * (max - min)) + min;
}

function chooseName() {
    para.textContent = `Your random name is: ${names[random(0, names.length)]}`;
}

chooseName();

button.addEventListener("click", chooseName);
// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);