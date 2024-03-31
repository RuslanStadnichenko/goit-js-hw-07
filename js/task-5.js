function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnGeneratorColor = document.querySelector('.change-color');

btnGeneratorColor.addEventListener('click', function () {
const newColor = getRandomHexColor();
document.body.style.backgroundColor = newColor;
document.querySelector('.color').textContent = newColor;
});
