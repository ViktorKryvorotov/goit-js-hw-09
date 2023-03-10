
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');


startButton.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedDate= selectedDates[0];
      if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
     } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(datetimePicker, options);

startButton.addEventListener('click', () => {
    startButton.disabled = true;
   
    const targetDate = new Date(datetimePicker.value);
    const timeInterval = setInterval(() => {
        const timeLeft = targetDate - new Date();
        const timeVelue = convertMs(timeLeft);
        changeTimerCounter(timeVelue);
        if (timeLeft <0) {
            clearInterval(timeInterval);  
        }
    }, 1000);
});
 
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.padStart(2, '0');
};
function changeTimerCounter(value) {
    daysValue.textContent = addLeadingZero(`${value.days}`);
    hoursValue.textContent = addLeadingZero(`${value.hours}`);
    minutesValue.textContent = addLeadingZero(`${value.minutes}`);
    secondsValue.textContent=addLeadingZero(`${value.seconds}`);
 }

