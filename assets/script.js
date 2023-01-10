// use dayjs to store current date to currentDate variable
let currentDate = dayjs();
// target #date id to display date 
let displayDate = $("#date");

// define function that updates date and time
function updateDateTime() {
  currentDate = dayjs();
  let dateTimeString = currentDate.format("MMM D, YYYY h:mm:ss a");
  displayDate.text(dateTimeString);
}

updateDateTime();
// setInterval to update every second
setInterval(updateDateTime, 1000);
