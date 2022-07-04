let mn = 0;
let sc = 0;
let msc = 0;
let interval;
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let milliseconds = document.querySelector("#milliseconds");

function startTimer() {
  msc++;
  if (msc <= 9) {
    milliseconds.innerHTML = `0${msc}`;
  }
  if (msc > 9) {
    milliseconds.innerHTML = `${msc}`;
  }
  if (msc > 99) {
    sc++;
    seconds.innerHTML = `0${sc}`;
    msc = 0;
    milliseconds.innerHTML = `0${msc}`;
  }
  if (sc > 9) {
    seconds.innerHTML = `${sc}`;
  }
  if (sc > 59) {
    mn++;
    minutes.innerHTML = `0${mn}`;
    sc = 0;
    seconds.innerHTML = `0${sc}`;
  }
  if (mn > 9) {
    minutes.innerHTML = `${mn}`;
  }
  if (mn == 59 && sc == 59 && msc == 99) {
    clearInterval(interval);
  }
}

function start() {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  mn = 0;
  sc = 0;
  msc = 0;
  milliseconds.innerHTML = `0${msc}`;
  seconds.innerHTML = `0${sc}`;
  minutes.innerHTML = `0${mn}`;
}

let startBtn = document.querySelector("#start");
startBtn.addEventListener("click", start);

let stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", stop);

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);
