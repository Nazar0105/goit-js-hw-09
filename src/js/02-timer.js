import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.getElementById("datetime-picker");

// Ініціалізація поля вибору дати з використанням flatpickr
flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    // Перевірка, чи вибрана дата в майбутньому
    if (selectedDate && selectedDate > new Date()) {
      startBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      alert("Please choose a date in the future");
    }
  },
});

const startBtn = document.querySelector("[data-start]");
const timerDays = document.querySelector("[data-days]");
const timerHours = document.querySelector("[data-hours]");
const timerMinutes = document.querySelector("[data-minutes]");
const timerSeconds = document.querySelector("[data-seconds]");

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

let countdownInterval;

function startTimer() {
  const selectedDate = new Date(datetimePicker.value);
  const now = new Date();

  if (selectedDate <= now) {
    alert("Please choose a date in the future");
    return;
  }

  // Вимкнути кнопку "Start", щоб уникнути багів під час роботи таймера
  startBtn.disabled = true;

  // Функція для оновлення таймера
  function updateTimer() {
    const remainingTime = selectedDate - new Date();

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      // Вивести 00:00:00:00, якщо досягнуто кінцевої дати
      timerDays.textContent = "00";
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
      // Увімкнути кнопку "Start" після закінчення таймера
      startBtn.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(remainingTime);

    // Оновити значення елементів таймера
    timerDays.textContent = addLeadingZero(days);
    timerHours.textContent = addLeadingZero(hours);
    timerMinutes.textContent = addLeadingZero(minutes);
    timerSeconds.textContent = addLeadingZero(seconds);
  }

  // Викликати функцію оновлення кожну секунду
  updateTimer();
  countdownInterval = setInterval(updateTimer, 1000);
}
startBtn.addEventListener("click", startTimer);
