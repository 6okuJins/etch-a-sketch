let currentColor = '#000000';
let currentSize = 16;

const body = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');
const colorPicker = document.querySelector('#color-picker');
const rangeSlider = document.querySelector('#size');
const clear = document.querySelector('#clear');
const sizeLabel = document.querySelector('#size-label');

colorPicker.addEventListener('change', () => {currentColor = colorPicker.value});
clear.addEventListener('click', gridClear);

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
    gridSetup();
}
rangeSlider.addEventListener('click', () => {
    if (rangeSlider.valueAsNumber != currentSize) {
        currentSize = rangeSlider.valueAsNumber;
        gridClear();
        sizeLabel.textContent = `Size: ${currentSize} x ${currentSize}`;

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