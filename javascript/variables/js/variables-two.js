// Add your code here
let myName = 'Paul';
myName = 'Salvador';

// Don't edit the code below here!

const section = document.querySelector('section');

const para = document.createElement('p');
para.textContent = myName;
section.appendChild(para);