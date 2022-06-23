function Cat(name, breed) {
  this.name = name;
  this.breed = breed;
  this.greeting = () => `Hello, said ${this.name} the ${this.breed}`;
}

let catOne = new Cat("Bertie", "Cymric");
let catTwo = new Cat("Felix", "Aphrodite Giant");

const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");

para1.textContent = catOne.greeting();
para2.textContent = catTwo.greeting();

section.appendChild(para1);
section.appendChild(para2);
