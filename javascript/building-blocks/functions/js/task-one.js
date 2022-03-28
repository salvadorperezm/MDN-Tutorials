const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here
const button = document.querySelector(".button");
function chooseName() {
    let randomNumber = Math.floor(Math.random() * (names.length) ) + 0;
    para.textContent = `Your random name is: ${names[randomNumber]}.`;
}

chooseName();

button.addEventListener("click", chooseName);

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);