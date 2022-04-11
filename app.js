let currentColor = '#000000';
let currentSize = 16;

const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
let drag = false;
document.addEventListener("mousedown", () => drag = true);
document.addEventListener("mouseup", () => drag = false);

// create currentSize^2 number of boxes
function gridSetup() {
    for (let i = 0; i < currentSize**2 ; i++) {
        const gridElement = document.createElement('div');
        gridContainer.appendChild(gridElement);
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', draw);
        gridElement.addEventListener('mousedown', draw);
        gridContainer.style.gridTemplateColumns = `repeat(${currentSize}, minmax(5px, 256px))`;
        gridContainer.style.gridTemplateRows = `repeat(${currentSize}, minmax(5px, 256px))`;
    }
}

function gridClear() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}
let rangeSlider = document.querySelector('#size');
rangeSlider.addEventListener('click', () => {
    if (rangeSlider.valueAsNumber != currentSize) {
        currentSize = rangeSlider.valueAsNumber;
        gridClear();
        gridSetup();
    }
});



function draw(e) {
    e.preventDefault();
    if (e.type ==='mouseover' && !drag) {return};
    this.style.backgroundColor = currentColor;
    
}

window.onload = () => {
    gridSetup();
}