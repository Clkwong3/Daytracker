// Show the current location's date and time.
// var myArea = {};
// dayjs.locale(myArea);

$(function () {
  // Save User Input in Local Storage
  function userEvent() {
    $(".saveBtn").on("click", function () {
      let text = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");

      localStorage.setItem(text, time);
    });
  }

  // Display the Current Date and Time in the Header
  function UpToDate() {
    let dateEl = $("#date");
    let timeEl = $("#time");

    let currentDate = dayjs().format("dddd, MMMM D, YYYY");
    let currentTime = dayjs().format("hh:mm:ss A");

    dateEl.text(currentDate);
    timeEl.text(currentTime);
  }
  // Keep Time Current
  setInterval(UpToDate, 1000);
});
