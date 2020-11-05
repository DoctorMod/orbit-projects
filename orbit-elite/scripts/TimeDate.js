//show Time

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var session = "";
  var twelve = localStorage.twelvehour;
  if (localStorage.twelvehour === "true") {

    session = "AM";
    if (h === 12) {
      session = "PM";
    }

    if (h === 0) {
      h = 12;
    }
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }
  }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;

  var time = h + ":" + m + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);

}

//show Dates

function showDate() {
  if (localStorage.dates === "true") {
    var date = new Date();
    var D = date.getDay();
    var M = date.getMonth();
    var d = date.getDate();
    var Y = date.getFullYear();

    if (D == 0) {
      var D = "Sun";
    } else if (D == 1) {
      var D = "Mon";
    } else if (D == 2) {
      var D = "Tue";
    } else if (D == 3) {
      var D = "Wed";
    } else if (D == 4) {
      var D = "Thu";
    } else if (D == 5) {
      var D = "Fri";
    } else if (D == 6) {
      var D = "Sat";
    }



    if (M == 0) {
      var M = "Jan";
    } else if (M == 1) {
      var M = "Feb";
    } else if (M == 2) {
      var M = "Mar";
    } else if (M == 3) {
      var M = "Apr";
    } else if (M == 4) {
      var M = "May";
    } else if (M == 5) {
      var M = "Jun";
    } else if (M == 6) {
      var M = "Jul";
    } else if (M == 7) {
      var M = "Aug";
    } else if (M == 8) {
      var M = "Sep";
    } else if (M == 9) {
      var M = "Oct";
    } else if (M == 10) {
      var M = "Nov";
    } else if (M == 11) {
      var M = "Dec";
    }

    var time = D + " " + M + " " + d + " " + Y;
    document.getElementById("DateDisplay").innerText = time;
    document.getElementById("DateDisplay").textContent = time;

    setTimeout(showDate, 1000000);

  }
}
//run Date & Time
showTime();
showDate();

//testing dates
if (localStorage.twelvehour === "true") {
  document.getElementById("check").checked = true;
}

if (localStorage.dates === "true") {
  document.getElementById("displaydate").checked = true;
}
