const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here
for (let element of myArray) {
    let item = document.createElement("li");
    item.textContent = element;
    list.appendChild(item);
}

// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(list);