let display = document.querySelector('#display');
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let interval = null;
let running = false;

function startwatch() {
    if (!running) {
        running = true;
        interval = setInterval(updateTimer, 10);
    }
}

function stop() {
    running = false;
    clearInterval(interval);
}

function reset() {
    running = false;
    clearInterval(interval);

    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    display.textContent = "00:00:00";
}

function updateTimer() {
    milliseconds += 10;

    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds.toString().padStart(3, "0");

    display.textContent = `${m}:${s}:${ms}`;
}

document.querySelector('#start').addEventListener('click', startwatch);
document.querySelector('#stop').addEventListener('click', stop);
document.querySelector('#reset').addEventListener('click', reset);