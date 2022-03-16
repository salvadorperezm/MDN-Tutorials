const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];

// Add your code here
birds.splice(birds.indexOf("Eagles"), 1);

function startsWithE(bird) {
    if (bird.startsWith("E")) {
        return bird;
    } 
}

const eBirds = birds.filter(startsWithE);

// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
 para1.textContent = eBirds;

section.appendChild(para1);