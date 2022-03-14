const theorem = 'Pythagorean theorem';

const a = 5;
const b = 8;
const sum = (a*a) + (b*b);
const square = sum * 1/2;
const result = square.toFixed(2);


const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${result}.`;


// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = myString;
section.appendChild(para1);