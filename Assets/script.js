// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var startDate = new Date("2023-05-01");
var currentDate = dayjs(currentDate);

$("#currentDay").text(currentDate.format("MM DD, YYYY"));

var hour;

var currentTime = function () {
  var date = new Date ();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  var session = "AM";
  hour = hh;
  if(hh > 12) {
    hh = hh - 12;
    session = "PM"
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  var time = hh+ ":" + mm + ":" + ss + "" + session;

  document.getElementById("currentTime").innerText = time;
  var t = setTimeout(function(){ currentTime()}, 1000);
}
currentTime();


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
