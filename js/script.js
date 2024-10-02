let is24HourFormat = false;

function getMonth(months) {
  if (months == 1) {
    return "January";
  } else if (months == 2) {
    return "February";
  } else if (months == 3) {
    return "March";
  } else if (months == 4) {
    return "April";
  } else if (months == 5) {
    return "May";
  } else if (months == 6) {
    return "June";
  } else if (months == 7) {
    return "July";
  } else if (months == 8) {
    return "August";
  } else if (months == 9) {
    return "September";
  } else if (months == 10) {
    return "October";
  } else if (months == 11) {
    return "November";
  } else if (months == 12) {
    return "December";
  }
}

function formatHours(hours){
  if (!is24HourFormat) {
    return hours % 12 || 12; // Return hours in 12-hour format
  } else {
    return hours; // Return hours in 24-hour format
  }
}

function getAmPm(hours) {
  if (!is24HourFormat) {
    return hours >= 12 ? "PM" : "AM"; // Return AM/PM in 12-hour format
  } else {
    return ""; // Empty string in 24-hour format
  }
}

function getDays(days) {
  if (days == 1) {
    return "Monday";
  } else if (days == 2) {
    return "Tuesday";
  } else if (days == 3) {
    return "Wednesday";
  } else if (days == 4) {
    return "Thursday";
  } else if (days == 5) {
    return "Friday";
  } else if (days == 6) {
    return "Saturday";
  } else if (days == 7) {
    return "Sunday";
  }
}

document.getElementById('btn').addEventListener('click', function () {
  is24HourFormat = !is24HourFormat; // Toggle the format
  this.textContent = is24HourFormat ? "Change to 12 hr format" : "Change to 24 hr format";
});

var hour = document.getElementById("hr");
var minute = document.getElementById("min");
var seconds = document.getElementById("seconds");
var diff = document.getElementById("diff");
var am = document.getElementById("am-pm");
var day = document.getElementById("day");
var date = document.getElementById("date");
var month = document.getElementById("month");
var year = document.getElementById("year");
var btn = document.getElementById("btn");

function updateClock() {
  var todayDate = new Date();

  // Time
  var hours = todayDate.getHours();
  hour.innerHTML = (formatHours(hours) < 10 ? "0" : "") + formatHours(hours);
  diff.innerHTML = ":";
  minute.innerHTML =
    (todayDate.getMinutes() < 10 ? "0" : "") + todayDate.getMinutes();
  seconds.innerHTML =
    (todayDate.getSeconds() < 10 ? "0" : "") + todayDate.getSeconds();
  am.innerHTML = getAmPm();

  // Day
  var days = todayDate.getDay();
  day.innerHTML = getDays(days);

  // Date
  date.innerHTML = (todayDate.getDate() < 10 ? "0" : "") + todayDate.getDate();
  var months = todayDate.getMonth();
  month.innerHTML = getMonth(months);
  year.innerHTML = todayDate.getFullYear();
}

setInterval(updateClock,1000);
updateClock();



