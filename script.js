let timer;
let isRunning = false;
let seconds = 0;
let laps = [];

function startStopwatch() {
  if (!isRunning) {
    timer = setInterval(updateDisplay, 1000);
    isRunning = true;
    document.getElementById('start').disabled = true;
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById('start').disabled = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  seconds = -1;
  laps = [];
  updateDisplay();
  document.getElementById('start').disabled = false;
  document.getElementById('lapList').innerHTML = '';
}

function recordLap() {
  if (isRunning) {
    laps.push(seconds);
    updateLapList();
  }
}

function updateDisplay() {
  seconds++;
  const display = document.getElementById('display');
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(secs)}`;
}

function updateLapList() {
  const lapList = document.getElementById('lapList');
  const lapItem = document.createElement('li');
  lapItem.textContent = laps.length + '. ' + formatTime(laps[laps.length - 1]);
  lapList.appendChild(lapItem);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
