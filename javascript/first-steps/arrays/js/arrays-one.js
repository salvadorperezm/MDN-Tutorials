// Add your code here
let myArray = ["Coldplay", "Linkin Park", "Blink-182"];
myArray[0] = "The Strokes";
myArray[1] = "Green Day";
myArray.unshift("Nirvana");

// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
para1.textContent = `Array: ${myArray}`;

section.appendChild(para1);