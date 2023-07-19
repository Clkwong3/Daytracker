// Show the current location's date and time.
// var myArea = {};
// dayjs.locale(myArea);

$(function () {
  // Save User Input in Local Storage
  function userEvent() {
    $(".saveBtn").on("click", function () {
      // Text Input Value
      let time = $(this).parent().attr("id");
      let text = $(this).siblings(".description").val();
      // time -> key, text -> value in DEV Tools
      localStorage.setItem(time, text);

      // Acknowledges the save button
      $("#popup").show();
      setTimeout(function () {
        $("#popup").hide();
      }, 4000);
    });
  }

  // Change the Color of the Time Blocks
  function blockColor() {
    $(".time-block").each(function () {
      // Current Hour
      let hrNow = dayjs().format("H");
      let hrBlock = parseInt(this.id);

      if (hrBlock < hrNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (hrBlock === hrNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  // Retrieve User Input
  $(".time-block").each(function () {
    // Same as function userEvent but switch
    let time = $(this).attr("id");
    let text = localStorage.getItem(time);

    $(this).children(".description").val(text);
  });

  // Display the Current Date and Time in the Header
  function UpToDate() {
    let dateEl = $("#date");
    let timeEl = $("#time");

    let currentDate = dayjs().format("dddd, MMMM D, YYYY");
    let currentTime = dayjs().format("hh:mm:ss A");

    dateEl.text(currentDate);
    timeEl.text(currentTime);
  }

  // Activate Functions
  userEvent();
  blockColor();

  // Keep Time Current
  setInterval(UpToDate, 1000);
});
