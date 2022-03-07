let finalResult;

let evenOddResult;

// Add your code here
let numberA = 4;
let numberB = 2;
let numberC = 13;
let numberD = 5;
const sumOfNumbers = numberA + numberB;
const substractOfNumbers = numberC - numberD;
finalResult = sumOfNumbers * substractOfNumbers;
evenOddResult = finalResult % 2;

// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result isodd. Hrm.'
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2)