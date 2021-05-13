const finalDate = "1 January 2022";
var dayEl = document.getElementById("days");
var hoursEl = document.getElementById("hours");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");

function countDown() {
  const targetDate = new Date(finalDate);
  const currentDate = new Date();

  const totalSeconds = (targetDate - currentDate) / 1000;

  const seconds = Math.floor(totalSeconds) % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);
  //   console.log(days, hours , minutes, seconds);

  dayEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}
countDown();
setInterval(countDown, 1000);

function darkModer() {
  var content = document.getElementsByTagName('body')[0];
  var darkMode = document.getElementById("dark-change");
  darkMode.addEventListener("click", function () {
    darkMode.classList.toggle("active");
    content.classList.toggle("night");
  });
}

darkModer();
