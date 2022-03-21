let season = 'summer';
let response;

// Add your code here
if (season === "summer") {
response = "It's sunny outside!";
} else if (season === "winter"){
response = "It's cold outside!";
} else {
response = "It's not summer";
}

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);