let currentColor = '#000000';
let currentSize = 16;

const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
let drag = false;
// create 16 * 16 boxes
for (let i = 0; i < currentSize**2 ; i++) {
    const gridElement = document.createElement('div');
    gridContainer.appendChild(gridElement);
    gridElement.classList.add('grid-element');
    gridElement.addEventListener('mouseover', draw);
    gridElement.addEventListener('mousedown', draw);
    gridElement.addEventListener("mousedown", () => drag = true);
    gridElement.addEventListener("mouseup", () => drag = false);
}




function draw(e) {
    e.preventDefault();
    if (e.type ==='mouseover' && !drag) {return};
    this.style.backgroundColor = currentColor;
    
}