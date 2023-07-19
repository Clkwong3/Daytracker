// Show the current location's date and time.
var myArea = {};
dayjs.locale(myArea);

$(function () {
  // Display the Date and Time in the Header
  function UpToDate() {
    let dateEl = $("#date");
    let timeEl = $("#time");

    let currentDate = dayjs().format("dddd, MMMM D, YYYY");
    let currentTime = dayjs().format("hh:mm:ss A");

    dateEl.text(currentDate);
    timeEl.text(currentTime);
  }

  setInterval(UpToDate, 1000);
});
