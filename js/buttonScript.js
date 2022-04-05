const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');


let countTime;
let minutes = 0;
let seconds = 0;

let timesArray = [];


const handleStart = () => {

  clearInterval(countTime);

  countTime = setInterval(() => {
    if (seconds < 9 ) {
      seconds++;
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if(seconds >=9 && seconds < 59){
      seconds++;
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      stopwatch.textContent = `${minutes}:00`;
    }

  }, 100);

  time.style.visibility = 'hidden';
};


const handlePause = () => {
  clearInterval(countTime);
};


const handleStop = () => {
  time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

  if (stopwatch.textContent !== '0:00'){
    time.style.visibility = 'visible';
    timesArray.push(stopwatch.textContent);
  }

  clearItems();
};


const handleReset = () => {
  time.style.visibility = 'hidden';
  timesArray =[];
  clearItems();
};


const clearItems = () => {
  clearInterval(countTime);
  stopwatch.textContent = '0:00';
  timeList.textContent = '';
  seconds = 0;
  minutes = 0;
};



startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);







