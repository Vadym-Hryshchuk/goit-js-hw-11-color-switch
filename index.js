const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', addColorBodyClick);
refs.stopBtn.addEventListener('click', stopColorBodyClick);

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
 return Math.floor(Math.random() * (max - min + 1) + min);
};

function addColorBodyClick() {
    intervalId = setInterval(() => { refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)] },1000);
    refs.startBtn.disabled = true;
}

function stopColorBodyClick() {
    refs.startBtn.disabled = false;
    clearInterval(intervalId);
}
