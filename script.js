$(document).ready(function () {
  function init() {
    var today = new Date();
    var currentHour = today.getHours();
    //moment() gives us the current date. format() formats the date in required pattern.
    var formattedDate = moment().format("dddd MMMM Do");
    $("#currentDay").text(formattedDate);

    //for testing changed to 23, original value 18
    for (i = 9; i < 23; i++) {
      var rowDiv = $("<div>");
      rowDiv.attr("class", "row");

      var colHrDiv = $("<div>");
      colHrDiv.attr("class", "col-2 hour");
      var eventText = "";
      //if i >=12 then set PM instead of AM
      if (i < 12) {
        colHrDiv.text(i + "AM");
        eventText = localStorage.getItem(i + "AM");
      } else if (i === 12) {
        colHrDiv.text(i + "PM");
        eventText = localStorage.getItem(i + "PM");
      } else if (i > 12) {
        colHrDiv.text(i - 12 + "PM");
        eventText = localStorage.getItem(i - 12 + "PM");
      }

      var colTextDiv = $("<div>");
      if (i === currentHour) {
        colTextDiv.attr("class", "col-8 present");
      } else if (i < currentHour) {
        colTextDiv.attr("class", "col-8 past");
      } else if (i > currentHour) {
        colTextDiv.attr("class", "col-8 future");
      }
      var textAreaEl = $("<textarea>");
      textAreaEl.attr("rows", "2");
      textAreaEl.attr("cols", "80");
      textAreaEl.val(eventText);
      colTextDiv.append(textAreaEl);

      var colSaveDiv = $("<div>");
      colSaveDiv.attr("class", "col-2 time-block saveBtn");
      colSaveDiv.attr("id", "testBtn" + i);

      var colImageEl = $("<img>");
      colImageEl.attr("src", "./Assets/images/lockimage.png");
      colImageEl.attr("width", "60");
      colImageEl.attr("height", "60");
      colImageEl.attr("alt", "lock");
      colSaveDiv.append(colImageEl);

      rowDiv.append(colHrDiv, colTextDiv, colSaveDiv);
      $(".container").append(rowDiv);
    }
  }

  $(".container").on("click", "div.saveBtn", function (event) {
    var eventAdded = $(this).prev().children().val();
    //create object

    var time = $(this).prev().prev().text();

    //save to local storage
    localStorage.setItem(time, eventAdded);
  });

  init();
});
