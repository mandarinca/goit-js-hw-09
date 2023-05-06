import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: newCloseDate,
};
const calendarFltpcr = flatpickr('#datetime-picker', options);

let dataObj;

function newCloseDate(selectedDates, dateStr, instance) {
  if (new Date() >= selectedDates[0]) {
    Notiflix.Notify.warning('Please choose a date in the future');
    startBtn.disabled = true;
    instance.setDate(new Date());
  } else {
    startBtn.disabled = false;
    let timeDfrnc = selectedDates[0] - new Date();

    dataObj = convertMs(timeDfrnc);
    setDatatoHTML(dataObj);
  }
}

const startBtn = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
console.log(daysEl);
console.log(hoursEl);
console.log(minutesEl);
console.log(secondsEl);

function setDatatoHTML(obj) {
  daysEl.textContent = obj.days;
  hoursEl.textContent = obj.hours;
  minutesEl.textContent = obj.minutes;
  secondsEl.textContent = obj.seconds;
}

let timer;

startBtn.addEventListener('click', function () {
  startBtn.disabled = true;
  timer = setInterval(() => {
    dataObj.seconds = addLeadingZero(dataObj.seconds - 1);

    if (dataObj.seconds == '00') {
      dataObj.minutes = addLeadingZero(dataObj.minutes - 1);
      dataObj.seconds = '59';
    }

    if (dataObj.minutes == '00') {
      dataObj.hours = addLeadingZero(dataObj.hours - 1);
      dataObj.minutes = '59';
    }

    if (dataObj.hours == '00') {
      dataObj.days = addLeadingZero(dataObj.hours - 1);
      dataObj.hours = '23';
    }

    if (dataObj == '00') {
      stopTimer = clearInterval();
    }
    setDatatoHTML(dataObj);
    console.log('tick');
  }, 1000);
});
// let deadLine = selectedDates[0];
// let timerId = null;

startBtn.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
