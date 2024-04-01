function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  createBox();
});
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBox() {
const inputNumber = document.querySelector('#controls input[type="number"]');
  const inputNbrValue = parseInt(inputNumber.value);
  //  if (inputNbrValue < 1 || 100 < inputNbrValue) {
  //   alert('Please enter a value greater than or equal to 1.');
  //   return;
  // }
  let initialSize = 30;
    destroyBoxes();
  for (let i = 0; i < inputNbrValue; i++) { 
    const box = document.createElement('div');
    initialSize += 10;
  box.style.width = `${initialSize}px`;
  box.style.height = `${initialSize}px`;
  box.style.backgroundColor = getRandomHexColor();
  
  boxesContainer.appendChild(box);
}
};

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}