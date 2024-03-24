
let instantaneousTime = 0,
  stopWatchOn = false,
  IntervalID,
  HTML = ``,
  num = 0;

//buttons elements
const resetButton = document.querySelector('.reset-button');
const saveButton = document.querySelector('.save-button');
const startStopWatch = document.querySelector('.start-button');

//output displays
const outputHour = document.querySelector('.hours');
const outputMinute = document.querySelector('.minutes');
const outputSecond = document.querySelector('.seconds');

// time variables
let seconds = '', minutes = '', hours = '';

//start button
startStopWatch.addEventListener('click', () => {
  stopWatch('startStopWatch');
});
//reset button
resetButton.addEventListener('click', () => {
  TimeEngine('reset');
});
///save button
saveButton.addEventListener('click', () => {
  TimeEngine('saveTime');
});

//control timeflow
function stopWatch(mode) {
  if (!stopWatchOn) {
    IntervalID = setInterval(() => {
      TimeEngine(mode);
    }, 100);
    startStopWatch.innerHTML = 'STOP';
    stopWatchOn = true;
  } else {
    clearInterval(IntervalID);
    startStopWatch.innerHTML = 'START';
    stopWatchOn = false;
  }
}
// controls the time intervals to be displayed
function TimeEngine(command) {
  if (command === 'reset') {
    //reset output display
    hours = minutes = seconds = 0;
    outputMinute.innerHTML = 0;
    outputHour.innerHTML = 0;
    outputSecond.innerHTML = 0;
    //reset the saved time
    HTML = '<p class="saved-time">1). 0:0:0.0</p>';
    document.querySelector('.saved-time-container')
      .innerHTML = HTML;
    num = 1;
    //stop the count down, change start buttonLabel
    clearInterval(IntervalID);
    stopWatchOn = false;
    startStopWatch.innerHTML = 'START';

  } else if (command === 'startStopWatch') {
    seconds = (instantaneousTime += 1) / 10;
    outputSecond.innerHTML = seconds;

    if (seconds === 60) {
      instantaneousTime = 0;
      minutes = Number(minutes) + 1;
      outputMinute.innerHTML = minutes;
    }
    if (minutes === 60) {
      hours = Number(hours) + 1;
      minutes = 0;
      outputMinute.innerHTML = minutes;
      outputHour.innerHTML = hours;
    }
  } else if (command = 'saveTime') {
    num += 1;
    HTML += `<p class="saved-time">${num}). 
        ${hours || 0}:${minutes || 0}:${seconds || 0}</p>`
    document.querySelector('.saved-time-container')
      .innerHTML = HTML;
  }
} 
