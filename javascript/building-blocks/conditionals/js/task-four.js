let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
if (machineActive) {
    (pwd === "cheese") ? pwdResult = "You logged in successfully" : pwdResult = "There's an error with your password";
} else {
    machineResult = "The machine is turned off. Turn it on to process your password.";
}

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);