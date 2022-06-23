const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    return `Hello, said ${this.name} the ${this.breed}`;
  },
};

const cat2 = {
  name: "Felix",
  breed: "Persian",
  color: "Brown",
  greeting: function () {
    return `Hello, said ${this.name} the ${this.breed}`;
  },
};

const section = document.querySelector("section");

let para1 = document.createElement("p");
let para2 = document.createElement("p");

para1.textContent = cat.greeting();
para2.textContent = cat2.greeting();

section.appendChild(para1);
section.appendChild(para2);
