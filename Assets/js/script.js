// Inside jQuery to Ensure Code Executes After HTML is Loaded
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
      }, 5000);
    });
  }
  userEvent();

  // Change Time Block Color
  function colorChange() {
    let currentHour = parseInt(dayjs().format("H")); // Get the current hour as an integer

    $(".time-block").each(function () {
      let blockHour = parseInt(this.id);

      if (blockHour === currentHour) {
        $("#" + this.id)
          .children(".description")
          .removeClass("past future")
          .addClass("present");
      } else if (blockHour < currentHour) {
        $("#" + this.id)
          .children(".description")
          .removeClass("present future")
          .addClass("past");
      } else {
        $("#" + this.id)
          .children(".description")
          .removeClass("past present")
          .addClass("future");
      }
    });
  }
  colorChange();

  // Display Event in Time Block
  $(".time-block").each(function () {
    let key = $(this).attr("id");
    let value = localStorage.getItem(key);
    $(this).children(".description").val(value);
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

  // Dark Mode
  const darkModeToggle = document.getElementById("darkModeToggle");
  const bodyEl = document.body;

  darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
      bodyEl.classList.add("dark-mode");
    } else {
      bodyEl.classList.remove("dark-mode");
    }
  });
});
