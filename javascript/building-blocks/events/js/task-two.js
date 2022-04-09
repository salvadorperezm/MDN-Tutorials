const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, size) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

// Add your code here
const html = document.querySelector("html");

function translateCircle(e) {
    switch(e.key) {
        case "w":
            y -= 20;
            drawCircle(x, y, size);
            break;
        
        case "s":
            y += 20;
            drawCircle(x, y, size);
            break;

        case "a":
            x -= 20;
            drawCircle(x, y, size);
            break;
        
        case "d":
            x += 20;
            drawCircle(x, y, size);
            break;

        default:
            alert("You can only press wasd");
            break;
    }
} 

html.addEventListener("keydown", translateCircle);