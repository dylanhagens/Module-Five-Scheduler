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
  var time = setTimeout(function(){ currentTime()}, 1000);
}
currentTime();


$(function () {

  var saveEl = $(".saveBtn");
  
    saveEl.on("click", function(event) {
      event.preventDefault();
  
      var text = $(this).prev().val()
  
      localStorage.setItem($(this).parent().attr("id"),text);
    })
    
    for(i =0;i < 24; i++) {
      $(`#hour-${i + 1}`).children("textarea").val(localStorage.getItem(`hour-${i + 1}`))
  
      if(hour === i) {
        $(`#hour-${i + 1}`).children("textarea").addClass("present")
      } else if (hour > i) {
        $(`#hour-${i + 1}`).children("textarea").addClass("past")
      } else {
        $(`#hour-${i + 1}`).children("textarea").addClass("future")
      }
    }
  
  });