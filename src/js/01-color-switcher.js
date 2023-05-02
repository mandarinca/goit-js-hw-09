const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');

console.log(startBtnEl, stopBtnEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let timerColor;

startBtnEl.addEventListener('click', function () {
  timerColor = setInterval(() => {
    bodyEl.classList.add('body-class');
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1500);
  startBtnEl.setAttribute('disabled', true);
  console.log(startBtnEl);
});

stopBtnEl.addEventListener('click', function () {
  clearInterval(timerColor);
  startBtnEl.removeAttribute('disabled');
  console.log(startBtnEl);
});
