$(function () {
  // 24 Hr Format
  var nowHr = dayjs().format("H");

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
      }, 5000);
    });
  }
  userEvent();

  // Assign Color to Time Block
  function timeColor() {
    $(".text-block").each(function () {
      let blockHr = parseInt(this.id);

      $(this).toggleClass("past", blockHr < nowHr); // grey
      $(this).toggleClass("present", blockHr === nowHr); // red
      $(this).toggleClass("future", blockHr > nowHr); // green
    });
  }
  timeColor();

  // Assign Class to Time Block
  function timeClass() {
    $(".text-block").each(function () {
      let blockHr = parseInt(this.id);

      if (blockHr == nowHr) {
        $(this).removeClass("past future").addClass("present");
      } else if (blockHr < nowHr) {
        $(this).removeClass("future present").addClass("past");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  timeClass();

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
  // Keep Time Current
  setInterval(UpToDate, 1000);
});
