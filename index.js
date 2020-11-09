var am_pm = false;

function clock() {
  var date = new Date();
  var $hour = date.getHours();
  var $minutes = date.getMinutes();

  //Add 0 if hour and minutes are before 10//

  if ($hour < 10) $hour = "0" + $hour;
  if ($minutes < 10) $minutes = "0" + $minutes;

  $("#hour").html($hour);
  $("#minutes").html($minutes);

  //Convert to 12H//
  if (am_pm) {
    $("#ampm").html("AM");
    if ($hour >= 12) {
      $hour -= 12;
      $("#ampm").html("PM");
    }
  } else {
    $("#ampm").html(" ");
  }

  $("#hour").html($hour);
  $("#minutes").html($minutes);
}

$(document).ready(function () {
  $("#twelveHourTime").on("click", function () {
    am_pm = true;
  });
  $("#twentyFourHourTime").on("click", function () {
    am_pm = false;
  });
  setInterval("clock()", 1000);
});
