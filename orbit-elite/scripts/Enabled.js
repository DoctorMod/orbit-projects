//Stuff Enabled?
if (localStorage.submit == "false") {
  document.getElementById("globe").remove();
  document.getElementById("submitToggle").checked = false;
} else {
  document.getElementById("submitToggle").checked = true;
}

if (localStorage.task == "false") {
  document.getElementById("todoOpen").remove();
  document.getElementById("taskToggle").checked = false;
} else {
  document.getElementById("taskToggle").checked = true;
}

if (localStorage.weather == "false") {
  document.getElementById("weatherOpen").remove();
  document.getElementById("weatherToggle").checked = false;
} else {
  document.getElementById("weatherToggle").checked = true;
}

if (localStorage.searchToggle == "false") {
  document.getElementById("searchForm").style.display = "none";
  document.getElementById("searchCheck").checked = false;
} else {
  document.getElementById("searchCheck").checked = true;
}

if (localStorage.clockToggle == "false") {
  document.getElementById("MyClockDisplay").style.display = "none";
  document.getElementById("clockCheck").checked = false;
} else {
  document.getElementById("clockCheck").checked = true;
}

if (localStorage.dialToggle == "false") {
  document.getElementById("AllDials").style.display = "none";
  document.getElementById("dialCheck").checked = false;
} else {
  document.getElementById("dialCheck").checked = true;
}

//Speed Dials
document.getElementById("SpeedsliderRange").value = localStorage.dial;
for (i = 1; i < parseInt(localStorage.dial) + 1; i++) {
  document.getElementById('dial' + i).parentNode.style.display = "inline-block";
}
//Speed Dial Shape?
if (localStorage.shape == "true") {
  for (i = 0; i < document.getElementsByClassName('btn').length; i++) {
    document.getElementsByClassName('btn')[i].style.borderRadius = "100px";
  }
  document.getElementById("shapeToggle").checked = true;
} else {
  document.getElementById("shapeToggle").checked = false;
}

document.getElementById('body').style.fontFamily = localStorage.font;

for (var i = 0; i < document.getElementsByTagName('input').length; ++i) {
  document.getElementsByTagName('input')[i].style.fontFamily = localStorage.font;
}
for (var i = 0; i < document.getElementsByClassName('setFont').length; ++i) {
  document.getElementsByClassName('setFont')[i].style.fontFamily = localStorage.font;
}
document.getElementById('FontSelections').style.fontFamily = localStorage.font;
document.getElementById('SearchEngine').style.fontFamily = localStorage.font;
document.getElementById('FontSelections').value = localStorage.font;

function checkSlider() {
  document.getElementById("SpeedSliderValue").innerHTML = document.getElementById('SpeedsliderRange').value;
  document.getElementById("BlurSliderValue").innerHTML = document.getElementById('blurRange').value;
  document.getElementById("OpacitySliderValue").innerHTML = document.getElementById('OpacitySliderRange').value + "%";
  document.getElementById("timerSliderValue").innerHTML = document.getElementById('timerRange').value;
  setTimeout(checkSlider, 100);
}
checkSlider();
