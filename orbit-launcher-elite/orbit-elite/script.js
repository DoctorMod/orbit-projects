//Activates First Run

/*
function onInstall() {
  firstRun();
  console.log("Extension Installed");
}

function onUpdate() {
  console.log("Extension Updated");
}

function getVersion() {
  var details = chrome.app.getDetails();
  return details.version;
}

// Check if the version has changed.
var currVersion = getVersion();
var prevVersion = localStorage.updateVersion;
if (currVersion != prevVersion) {
  // Check if we just installed this extension.
  if (prevVersion == undefined) {
    onInstall();
  } else {
    onUpdate();
  }
  localStorage.updateVersion = currVersion;
}
*/

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

//adding EventListener
document.getElementById("todoOpen").addEventListener("click", function() {
  setTimeout(function() {
    sideStuffOpen("List");
  }, 200);
  sideStuffOpenAnim("todoOpen");
});
document.getElementById("todoClose").addEventListener("click", function() {
  setTimeout(function() {
    sideCloseAnim("todoOpen");
  }, 200);
  sideStuffClose("List");
});
document.getElementById("addItem").addEventListener("click", addItem);
document.getElementById("box").addEventListener("keypress", checkEnterT);
document.getElementById("rssURL").addEventListener("keypress", checkEnterR);
document.getElementById("SlideLengthReadMore").addEventListener("click", function() {
  modalOpen("How To Use Slideshows", "Click On 'Change The Background', And Select The Images You Want For The Slideshow Using [SHIFT], [CRTL] or [CMD].", false);
});
document.getElementById("settingsOpen").addEventListener("click", function() {
  setTimeout(function() {
    document.getElementById("Settings").style.width = "100%";
  }, 200);
  sideStuffOpenAnim("settingsOpen");
});
document.getElementById("DoneClose").addEventListener("click", onsubmitModifier);
document.getElementById("rssOpen").addEventListener("click", function() {
  setTimeout(function() {
    sideStuffOpen("RssSide");
  }, 200);
  sideStuffOpenAnim("rssOpen");
});
document.getElementById("rssClose").addEventListener("click", function() {
  setTimeout(function() {
    sideCloseAnim("rssOpen");
  }, 200);
  sideStuffClose("RssSide");
});
document.getElementById("weatherOpen").addEventListener("click", function() {
  setTimeout(function() {
    sideStuffOpen("weatherSideTool");
  }, 200);
  sideStuffOpenAnim("weatherOpen");
});
document.getElementById("weatherClose").addEventListener("click", function() {
  setTimeout(function() {
    sideCloseAnim("weatherOpen");
  }, 200);
  sideStuffClose("weatherSideTool");
});
document.getElementById("CancelClose").addEventListener('click', reload);
document.getElementById("reset").addEventListener('click', resetFunction);
document.getElementById("resetbk").addEventListener('click', resettwo);


function resetFunction() {
  if (confirm("Are you sure you want to reset?")) {
    reset();
  } else {

  }
}
//Modal
var modal = document.getElementById('myModal');

var mReset = false;
var mClose = document.getElementById("modalClose");

function modalOpen(ver, content, reset) {
  document.getElementById('mTitle').innerHTML = ver;
  document.getElementById('mContent').innerHTML = content;
  modal.style.display = "block";
  mReset = reset;
}


mClose.onclick = function() {
  modal.remove();
  if (mReset) {
    location.reload();
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.remove();
    location.reload();
  }
}

//testing dates
if (localStorage.twelvehour === "true") {
  document.getElementById("check").checked = true;
}

if (localStorage.dates === "true") {
  document.getElementById("displaydate").checked = true;
}

//settings

if (window.location.hash == "#settings") {
  document.getElementById("Settings").style.width = "100%";
}

//shhhhhh!

function cheatcode(code) {
  if (code == "ResetOrbit") {
    localStorage.clear();
    reload();
    return true;
  } else if (code == "Benji_Builder") {
    alert("You Have Just Found An Easter Egg! Well Done! Email Us At orbitelite.official@gmail.com reading: 'Once Upon A Lime I Ate Pizza With Han Solo While Watching Sco Mo' To confirm your findings.");
  } else {
    return false;
  }
}

//Settings Sub-Sections

document.getElementById("OpenvisualSettings").addEventListener("click", funcSettingsOpenStart);
document.getElementById("OpencontentSettings").addEventListener("click", funcSettingsOpenStart);
document.getElementById("OpenspeedDialSettings").addEventListener("click", funcSettingsOpenStart);
document.getElementById("OpenWidgetsettings").addEventListener("click", funcSettingsOpenStart);
document.getElementById("OpenotherSettings").addEventListener("click", funcSettingsOpenStart);

function funcSettingsOpenStart(label) {
  target = label.target;
  document.getElementById("OpenvisualSettings").style.color = localStorage.accent;
  document.getElementById("OpenvisualSettings").style.background = localStorage.background;
  document.getElementById("OpencontentSettings").style.color = localStorage.accent;
  document.getElementById("OpencontentSettings").style.background = localStorage.background;
  document.getElementById("OpenspeedDialSettings").style.color = localStorage.accent;
  document.getElementById("OpenspeedDialSettings").style.background = localStorage.background;
  document.getElementById("OpenWidgetsettings").style.color = localStorage.accent;
  document.getElementById("OpenWidgetsettings").style.background = localStorage.background;
  document.getElementById("OpenotherSettings").style.color = localStorage.accent;
  document.getElementById("OpenotherSettings").style.background = localStorage.background;
  document.getElementById("visualSettings").style.display = "none";
  document.getElementById("contentSettings").style.display = "none";
  document.getElementById("speedDialSettings").style.display = "none";
  document.getElementById("Widgetsettings").style.display = "none";
  document.getElementById("otherSettings").style.display = "none";
  target.style.color = localStorage.background;
  target.style.background = localStorage.accent;
  document.getElementById(target.id.slice(4)).style.display = "block";
}

//todolist
if (localStorage.storedList) {
  loadList();
}
document.getElementById("todoOpen").style.opacity = 1;

function addItem() {
  if (cheatcode(document.getElementById("box").value) == false) {
    var newItem = document.createElement("h4");
    var itemChild = document.createElement("span");
    newItem.appendChild(document.createTextNode(document.getElementById("box").value));
    newItem.classList.add("strike", "sideAccent");
    newItem.addEventListener("click", finishItem);
    itemChild.innerHTML = "&times;";
    itemChild.addEventListener("click", removeItem);
    newItem.appendChild(itemChild);
    document.getElementById("list").appendChild(newItem);
    document.getElementById("box").value = "";
    saveList();
  }
}

function removeItem() {
  document.getElementById("list").removeChild(this.parentNode);
  saveList();
}

function saveList() {

  var sideAccent = document.getElementsByClassName("sideAccent");
  for (var i = 0; i < sideAccent.length; i++) {
    sideAccent[i].style.color = localStorage.background;
  }
  localStorage.storedList = document.getElementById("list").innerHTML;
}

function loadList() {
  document.getElementById("list").innerHTML = localStorage.storedList;
  for (var i = 0; i < list.children.length; i++) {
    list.children[i].children[0].addEventListener("click", removeItem);
    list.children[i].addEventListener("click", finishItem);
  }
}

function finishItem() {
  if (this.classList.value.includes("finished")) {
    this.classList.remove('finished');
  } else {
    this.classList.add('finished');
  }
}

function checkEnterT(key) {
  var key = key.keyCode;
  if (key == 13) {
    addItem();
  }
}

function checkEnterR(key) {
  var key = key.keyCode;
  if (key == 13) {
    Rss();
  }
}
//open and close

function sideStuffOpenAnim(isMe) {
  document.getElementById(isMe).classList.add('sideWays');
  document.getElementById(isMe).classList.remove('sideWaysClose');
}

function sideStuffOpen(side) {
  document.getElementById(side).style.width = "250px";
}

function sideStuffClose(side) {
  document.getElementById(side).style.width = "0";
}

function sideCloseAnim(isMe) {
  document.getElementById(isMe).classList.remove('sideWays');
  document.getElementById(isMe).classList.add('sideWaysClose');
}

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

console.log(localStorage.searchToggle + ", " + localStorage.clockToggle + ", " + localStorage.dialToggle);
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

//Reset
function reset(val) {
  localStorage.api = "false";
  localStorage.sub = "None";
  localStorage.searchToggle = "true";
  localStorage.clockToggle = "true";
  localStorage.dialToggle = "true";
  localStorage.file = "Reset";
  localStorage.background = '#FFFFFF';
  localStorage.accent = '#1976D2';
  localStorage.task = 'true';
  localStorage.rss = "https://rss.bloople.net/?url=http://orbitelite.github.io/feed.xml&showicon=true&limit=10&type=js";
  localStorage.weather = 'true';
  localStorage.twelvehour = 'true';
  localStorage.dates = 'false';
  localStorage.submit = 'true';
  localStorage.dial = '5';
  localStorage.shape = 'true';
  localStorage.temp = 'false'
  localStorage.search = 'https://www.google.com/search?q=';
  localStorage.opacity = '0';
  localStorage.font = 'Concert One';
  chrome.storage.sync.set({
    dial1: "google"
  }, function() {});
  chrome.storage.sync.set({
    dial2: "youtube"
  }, function() {});
  chrome.storage.sync.set({
    dial3: "snapchat-ghost"
  }, function() {});
  chrome.storage.sync.set({
    dial4: "instagram"
  }, function() {});
  chrome.storage.sync.set({
    dial5: "mail"
  }, function() {});
  chrome.storage.sync.set({
    dial6: "github-alt"
  }, function() {});
  chrome.storage.sync.set({
    dial7: "discord"
  }, function() {});
  chrome.storage.sync.set({
    dial8: "reddit-alien"
  }, function() {});
  chrome.storage.sync.set({
    dial9: "nintendo-switch"
  }, function() {});
  chrome.storage.sync.set({
    dial10: "twitter"
  }, function() {});
  chrome.storage.sync.set({
    dialalt1: "https://google.com"
  }, function() {});
  chrome.storage.sync.set({
    dialalt2: "https://youtube.com"
  }, function() {});
  chrome.storage.sync.set({
    dialalt3: "https://www.snapchat.com"
  }, function() {});
  chrome.storage.sync.set({
    dialalt4: "https://instagram.com"
  }, function() {});
  chrome.storage.sync.set({
    dialalt5: "https://gmail.com"
  }, function() {});
  chrome.storage.sync.set({
    dialalt6: "https://github.com"
  }, function() {});
  chrome.storage.sync.set({
    dialalt7: "https://discordapp.com/channels/@me"
  }, function() {});
  chrome.storage.sync.set({
    dialalt8: "https://reddit.com"
  }, function() {});
  chrome.storage.sync.set({
    dialalt9: "https://my.nintendo.com"
  }, function() {});
  chrome.storage.sync.set({
    dialalt10: "https://twitter.com"
  }, function() {});
  if (val != "true") {
    setTimeout(reload, 200);
  } else {
    localStorage.doModalNext = "true";
  }
}

if (localStorage.doModalNext == "true") {
  localStorage.doModalNext = false;
  modalOpen('<img src="img/orbit-logo.png" id="modalInstallLogo"></img><h1>Orbit Newtab</h1><br><br><br>', '<p>Give a clean and modern look to your default homepage</p>', true);
}

function resettwo() {
  localStorage.file = "Reset";
  onsubmitModifier();
}

//Submit
function onsubmitModifier() {
  if (!isColorEqual()) {
    localStorage.api = document.getElementById('nasa').checked;
    localStorage.sub = document.getElementById('MiscTextSett').value;
    localStorage.searchToggle = document.getElementById("searchCheck").checked;
    localStorage.clockToggle = document.getElementById("clockCheck").checked;
    localStorage.dialToggle = document.getElementById("dialCheck").checked;
    localStorage.twelvehour = document.getElementById("check").checked;
    localStorage.dates = document.getElementById("displaydate").checked;
    localStorage.search = document.getElementById('SearchEngine').value;
    localStorage.task = document.getElementById("taskToggle").checked;
    localStorage.submit = document.getElementById("submitToggle").checked;
    localStorage.weather = document.getElementById("weatherToggle").checked;
    localStorage.dial = document.getElementById("SpeedsliderRange").value;
    localStorage.shape = document.getElementById("shapeToggle").checked;
    localStorage.opacity = document.getElementById("OpacitySliderRange").value;
    localStorage.font = document.getElementById('FontSelections').value;
    localStorage.blur = document.getElementById('blurRange').value;
    localStorage.slideTimer = document.getElementById('timerRange').value;
    localStorage.rssActive = document.getElementById("rssToggle").checked;
    localStorage.temp = document.getElementById("tempToggle").checked;
    slideshow();
  }
}

function isColorEqual() {
  if (document.getElementById("background").value != document.getElementById("accent").value) {
    localStorage.background = document.getElementById("background").value;
    localStorage.accent = document.getElementById("accent").value;
    return false;
  } else {
    modalOpen("ERROR", "Are you sure you want to have your accent colour the same as your background colour?", false);
    return true;
  }
}
var disableReload = false;

function reload() {
  if (!disableReload) {
    window.location = "index.html";
  }
}
//Color picker
document.getElementById("background").value = localStorage.background;
document.getElementById("accent").value = localStorage.accent;

var backgroundCol = document.getElementsByClassName("backgroundCol");
for (var i = 0; i < backgroundCol.length; i++) {
  backgroundCol[i].style.backgroundColor = localStorage.background;
}
var accentCol = document.getElementsByClassName("accentCol");
for (var i = 0; i < accentCol.length; i++) {
  accentCol[i].style.color = localStorage.accent;
}

document.getElementById("inputBox").style.borderColor = localStorage.accent;

var sideAccent = document.getElementsByClassName("sideAccent");
for (var i = 0; i < sideAccent.length; i++) {
  sideAccent[i].style.color = localStorage.background;
}

var sideBackground = document.getElementsByClassName("sideBackground");
for (var i = 0; i < sideBackground.length; i++) {
  sideBackground[i].style.backgroundColor = localStorage.accent;
}

//bodge of the year
var x = document.createElement("STYLE");
var t = document.createTextNode(".btn::before {background: " + localStorage.accent +
  ";} .btn i, .btn span{color: " + localStorage.accent +
  ";} .btn:hover i, .btn:hover span {color: " + localStorage.background +
  ";} ::placeholder{color: " + localStorage.accent +
  ";} .sliderRange::-webkit-slider-thumb{background: " + localStorage.background +
  ";} ::selection {color:" + localStorage.accent + "; background:" + localStorage.background +
  ";}");
x.appendChild(t);
document.head.appendChild(x);

//Button Ripple


//Color picker stuffes
var accentVal;
var backgroundVal;

function colorInputs() {
  if (accentVal == document.getElementById('accent').value) {
    if (document.getElementById('accentBox').value.charAt(0) == "#") {
      document.getElementById('accent').value = document.getElementById('accentBox').value;
    } else {
      document.getElementById('accent').value = "#" + document.getElementById('accentBox').value;
    }
  } else {
    document.getElementById('accentBox').value = document.getElementById('accent').value;
  }
  accentVal = document.getElementById('accent').value;
  if (backgroundVal == document.getElementById('background').value) {
    if (document.getElementById('backgroundBox').value.charAt(0) == "#") {
      document.getElementById('background').value = document.getElementById('backgroundBox').value;
    } else {
      document.getElementById('background').value = "#" + document.getElementById('backgroundBox').value;
    }
  } else {
    document.getElementById('backgroundBox').value = document.getElementById('background').value;
  }
  backgroundVal = document.getElementById('background').value;
  setTimeout(colorInputs, 100);
}
colorInputs();
//Transparency
if (localStorage.opacity == null) {
  localStorage.opactiy = 0;
}
document.getElementById('OpacitySliderRange').value = localStorage.opacity;
if (localStorage.opacity.length == 1) {
  localStorage.opacity = "0" + localStorage.opacity;
}
document.getElementById('inputBox').style.backgroundColor = "#FFFFFF" + localStorage.opacity.toString(16);
for (i = 0; i < document.getElementsByClassName('btn').length; i++) {
  document.getElementsByClassName('btn')[i].style.backgroundColor = "#FFFFFF" + localStorage.opacity.toString(16);
}
//sync background + accent

chrome.storage.sync.set({
  background: localStorage.background
}, function() {

});

chrome.storage.sync.set({
  accent: localStorage.accent
}, function() {

});
//background image
var backgroundNumber = 0;

function backgroundImage() {
  if (localStorage.api == "false") {
    if (localStorage.file != "Reset" && localStorage.file != "null") {
      file = JSON.parse(localStorage.file);
      document.getElementById('bg').style.backgroundImage = "url(" + file[backgroundNumber] + ")";
      if (backgroundNumber > file.length - 2) {
        backgroundNumber = 0;
      } else {
        backgroundNumber++;
      }
      setTimeout(backgroundImage, localStorage.slideTimer * 60000);
    }
  } else {
    document.getElementById('nasa').checked = "true";
    setTimeout(loadNasa, 100);
  }
}
backgroundImage();

function loadNasa() {
  var client = new HttpClient();
  client.get('https://api.nasa.gov/planetary/apod?api_key=Gi6fF3PqNm9oSLsMEgW7u4Td5zMKIIOO9TVMOtG5', function(response) {
    document.getElementById('bg').style.backgroundImage = "url(" + JSON.parse(response).url + ")";
    console.log(JSON.parse(response));
  });
}

var slidecount = 0;
var filecount = [];

function slideshow() {
  if (document.getElementById("getval").files.length != 0 && localStorage.file != "Reset") {

    console.log(slidecount);
    if (slidecount < document.getElementById("getval").files.length) {
      readURL(document.getElementById("getval").files[slidecount]);
      console.log(slidecount);
      slidecount++;
    } else {
      try {
        localStorage.file = JSON.stringify(filecount);
      } catch (err) {
        modalOpen("There Was A Mistake!", "There was an error with uploading your background/s, either your file size is above 5 MB, or you have too many files selected.", true);
        disableReload = true;
      }
      console.log("Done " + JSON.parse(localStorage.file));
      setTimeout(reload, 200);
    }
  } else if (localStorage.file == "Reset") {
    localStorage.file = "null";
    setTimeout(reload, 200);
  } else {
    setTimeout(reload, 200);
  }
}

function readURL(__files) {

  localStorage.file = null;
  console.log(__files);
  var file = __files;
  var reader = new FileReader();
  reader.onloadend = function() {

    filecount.push(reader.result);
    slideshow();
  }

  if (file) {
    reader.readAsDataURL(file);
  }
}
visualFile()

function visualFile() {
  if (document.getElementById('getval').files[0] == null) {
    document.getElementById('EnterName').innerHTML = 'Change The Background'
  } else if (document.getElementById('getval').files[0].name.slice(0, 12) == document.getElementById('getval').files[0].name) {
    document.getElementById('EnterName').innerHTML = document.getElementById('getval').files[0].name;
  } else {
    document.getElementById('EnterName').innerHTML = document.getElementById('getval').files[0].name.slice(0, 12) + "...";
  }
  setTimeout(visualFile, 500);
}

document.getElementById('bg').style.filter = "blur(" + localStorage.blur + "px)";
document.getElementById('blurRange').value = localStorage.blur;


//getting btn data
document.getElementById('searchForm').action = localStorage.search;
document.getElementById('SearchEngine').value = localStorage.search;
//RSS Feeds

function Rss() {
  if (document.getElementById('rssURL').value.charAt(6) == "/") {
    localStorage.rss = "https://rss.bloople.net/?url=" + document.getElementById('rssURL').value + "&showicon=true&limit=10&type=js"
  } else {
    localStorage.rss = "https://rss.bloople.net/?url=http://" + document.getElementById('rssURL').value + "&showicon=true&limit=10&type=js"
  }
  location.reload();
}
weatherStart();
setTimeout(load2sec, 1000);

function load2sec() {
  for (var i = 0; i < document.getElementsByClassName('feed-item-desc').length; i++) {
    document.getElementsByClassName('feed-item-desc')[i].style.color = localStorage.background;
  }
  for (var i = 0; i < document.getElementsByClassName('feed-item-title').length; i++) {
    document.getElementsByClassName('feed-item-title')[i].style.color = localStorage.background;
  }
  document.getElementsByClassName('feed-title')[0].firstChild.style.color = localStorage.background;
}

document.getElementById('RSSFEED').src = localStorage.rss;

if (localStorage.rssActive == "false") {
  document.getElementById("rssOpen").remove();
  document.getElementById("rssToggle").checked = false;
} else {
  document.getElementById("rssToggle").checked = true;
}
//ApiRequests
var _json;
//Weather
function weatherStart() {
  var lat = 51.5074;
  var long = 0.1278;
  navigator.geolocation.getCurrentPosition(successWeather, errorWeather);
}

function successWeather(pos) {
  lat = pos.coords.latitude;
  long = pos.coords.longitude;
  weather(lat, long);
}

function errorWeather() {
  console.log('There was an error');
}

function weather(lat, long) {
  var client = new HttpClient();
  client.get('https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long, function(response) {
    updateDOM(JSON.parse(response));
  });
}

function updateDOM(json) {
  _json = json;
  if (Math.round(json.coord.lat) == Math.round(lat) && Math.round(json.coord.lon) == Math.round(long)) {
    document.getElementById('loading').remove();
    document.getElementById('WLabel').innerHTML = json.sys.country;
    if (localStorage.temp == "true") {
      document.getElementById('tempToggle').checked = true;
      document.getElementById('WDeg').innerHTML = Math.round((Math.round(json.main.temp) * 9 / 5) + 32) + "&deg;";
    } else {
      document.getElementById('tempToggle').checked = false;
      document.getElementById('WDeg').innerHTML = Math.round(json.main.temp) + "&deg;";
    }
    document.getElementById('WDesc').innerHTML = json.weather[0].description;
    document.getElementById('weatherOpen').classList.remove('fa-cloud', 'fa-sun', 'fa-cloud-rain', 'fa-snowflake', 'fa-smog', "fas");
    document.getElementById('WIcon').classList.remove('fa-cloud', 'fa-sun', 'fa-cloud-rain', 'fa-snowflake', 'fa-smog', "fas");
    if (json.weather[0].main == "Clear") {
      document.getElementById('weatherOpen').classList.add('fa-sun', "far");
      document.getElementById('WIcon').classList.add('fa-sun', "far");
    } else if (json.weather[0].main == "Rain") {
      document.getElementById('weatherOpen').classList.add('fa-cloud-rain', "fas");
      document.getElementById('WIcon').classList.add('fa-cloud-rain', "fas");
    } else if (json.weather[0].main == "Clouds") {
      document.getElementById('weatherOpen').classList.add('fa-cloud', "fas");
      document.getElementById('WIcon').classList.add('fa-cloud', "fas");
    } else if (json.weather[0].main == "Snow") {
      document.getElementById('weatherOpen').classList.add('fa-snowflake', "fas");
      document.getElementById('WIcon').classList.add('fa-snowflake', "fas");
    } else if (json.weather[0].main == "Haze" || json.weather[0].main == "Smoke") {
      document.getElementById('WIcon').classList.add('fa-smog', "fas");
      document.getElementById('weatherOpen').classList.add('fa-smog', "fas");
    } else {
      document.getElementById('WIcon').innerHTML = "ERROR";
      document.getElementById('weatherOpen').classList.add('fa-cloud', "fas");
    }
    SubWeather(document.getElementById('weatherOpen').classList, json);
  } else {
    setTimeout(weatherStart, 500);
  }
}

var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
    }

    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send(null);
  }
}

//SubText

document.getElementById('MiscTextSett').value = localStorage.sub;

if (localStorage.sub == "Quote") {
  var subJson;
  var client = new HttpClient();
  client.get('http://quotes.rest/qod.json', function(response) {
    subJson = JSON.parse(response);
    SubJson();
  });

  function SubJson() {
    document.getElementById('MiscText').innerHTML = subJson.contents.quotes[0].quote + " - <i>" + subJson.contents.quotes[0].author + "</i>";
  }

}

function SubWeather(icon, json) {
  if (localStorage.sub == "Weather") {
    if (localStorage.temp == "true") {
      document.getElementById('MiscText').innerHTML = "<span style='color:" + localStorage.accent + ";'>" + "<i style='color:" + localStorage.accent + ";' class='" + icon + "'></i> " + Math.round((Math.round(json.main.temp) * 9 / 5) + 32) + "&deg; and " + json.weather[0].main + "</span>";
    } else {
      document.getElementById('MiscText').innerHTML = "<span style='color:" + localStorage.accent + ";'>" + "<i style='color:" + localStorage.accent + ";' class='" + icon + "'></i> " + Math.round(json.main.temp) + "&deg; and " + json.weather[0].main + "</span>";
    }
  }
}
//getting btn logo
chrome.storage.sync.get(['dial1'], function(result) {
  if (result.dial1 == "mail") {
    dial1.classList.add("fas", "fa-envelope");
  } else if (result.dial1.charAt(0) == "/") {
    temp = dial1.id;
    dial1.outerHTML = "<span id='" + dial1.id + "'>" + result.dial1.substr(1) + "</span>";
    dial1 = document.getElementById(temp);
  } else {
    dial1.classList.add("fab", "fa-" + result.dial1);
  }
});

chrome.storage.sync.get(['dial2'], function(result) {
  if (result.dial2 == "mail") {
    dial2.classList.add("fas", "fa-envelope");
  } else if (result.dial2.charAt(0) == "/") {
    temp = dial2.id;
    dial2.outerHTML = "<span id='" + dial2.id + "'>" + result.dial2.substr(1) + "</span>";
    dial2 = document.getElementById(temp);
  } else {
    dial2.classList.add("fab", "fa-" + result.dial2);
  }
});

chrome.storage.sync.get(['dial3'], function(result) {
  if (result.dial3 == "mail") {
    dial3.classList.add("fas", "fa-envelope");
  } else if (result.dial3.charAt(0) == "/") {
    temp = dial3.id;
    dial3.outerHTML = "<span id='" + dial3.id + "'>" + result.dial3.substr(1) + "</span>";
    dial3 = document.getElementById(temp);
  } else {
    dial3.classList.add("fab", "fa-" + result.dial3);
  }
});

chrome.storage.sync.get(['dial4'], function(result) {
  if (result.dial4 == "mail") {
    dial4.classList.add("fas", "fa-envelope");
  } else if (result.dial4.charAt(0) == "/") {
    temp = dial4.id;
    dial4.outerHTML = "<span id='" + dial4.id + "'>" + result.dial4.substr(1) + "</span>";
    dial4 = document.getElementById(temp);
  } else {
    dial4.classList.add("fab", "fa-" + result.dial4);
  }
});

chrome.storage.sync.get(['dial5'], function(result) {
  if (result.dial5 == "mail") {
    dial5.classList.add("fas", "fa-envelope");
  } else if (result.dial5.charAt(0) == "/") {
    temp = dial5.id;
    dial5.outerHTML = "<span id='" + dial5.id + "'>" + result.dial5.substr(1) + "</span>";
    dial5 = document.getElementById(temp);
  } else {
    dial5.classList.add("fab", "fa-" + result.dial5);
  }
});

chrome.storage.sync.get(['dial6'], function(result) {
  if (result.dial6 == "mail") {
    dial6.classList.add("fas", "fa-envelope");
  } else if (result.dial6.charAt(0) == "/") {
    temp = dial6.id;
    dial6.outerHTML = "<span id='" + dial6.id + "'>" + result.dial6.substr(1) + "</span>";
    dial6 = document.getElementById(temp);
  } else {
    dial6.classList.add("fab", "fa-" + result.dial6);
  }
});

chrome.storage.sync.get(['dial7'], function(result) {
  if (result.dial7 == "mail") {
    dial7.classList.add("fas", "fa-envelope");
  } else if (result.dial7.charAt(0) == "/") {
    temp = dial7.id;
    dial7.outerHTML = "<span id='" + dial7.id + "'>" + result.dial7.substr(1) + "</span>";
    dial7 = document.getElementById(temp);
  } else {
    dial7.classList.add("fab", "fa-" + result.dial7);
  }
});

chrome.storage.sync.get(['dial8'], function(result) {
  if (result.dial8 == "mail") {
    dial8.classList.add("fas", "fa-envelope");
  } else if (result.dial8.charAt(0) == "/") {
    temp = dial8.id;
    dial8.outerHTML = "<span id='" + dial8.id + "'>" + result.dial8.substr(1) + "</span>";
    dial8 = document.getElementById(temp);
  } else {
    dial8.classList.add("fab", "fa-" + result.dial8);
  }
});

chrome.storage.sync.get(['dial9'], function(result) {
  if (result.dial9 == "mail") {
    dial9.classList.add("fas", "fa-envelope");
  } else if (result.dial9.charAt(0) == "/") {
    temp = dial9.id;
    dial9.outerHTML = "<span id='" + dial9.id + "'>" + result.dial9.substr(1) + "</span>";
    dial9 = document.getElementById(temp);
  } else {
    dial9.classList.add("fab", "fa-" + result.dial9);
  }
});

chrome.storage.sync.get(['dial10'], function(result) {
  if (result.dial10 == "mail") {
    dial10.classList.add("fas", "fa-envelope");
  } else if (result.dial10.charAt(0) == "/") {
    temp = dial10.id;
    dial10.outerHTML = "<span id='" + dial10.id + "'>" + result.dial10.substr(1) + "</span>";
    dial10 = document.getElementById(temp);
  } else {
    dial10.classList.add("fab", "fa-" + result.dial10);
  }
});

//getting btn urls
chrome.storage.sync.get(['dialalt1'], function(result) {
  dial1p.href = result.dialalt1;
});

chrome.storage.sync.get(['dialalt2'], function(result) {
  dial2p.href = result.dialalt2;
});

chrome.storage.sync.get(['dialalt3'], function(result) {
  dial3p.href = result.dialalt3;
});

chrome.storage.sync.get(['dialalt4'], function(result) {
  dial4p.href = result.dialalt4;
});

chrome.storage.sync.get(['dialalt5'], function(result) {
  dial5p.href = result.dialalt5;
});

chrome.storage.sync.get(['dialalt6'], function(result) {
  if (result.dialalt6 == undefined) {
    dial6p.href = "#";
  } else {
    dial6p.href = result.dialalt6;
  }
});

chrome.storage.sync.get(['dialalt7'], function(result) {
  if (result.dialalt7 == undefined) {
    dial7p.href = "#";
  } else {
    dial7p.href = result.dialalt7;
  }
});

chrome.storage.sync.get(['dialalt8'], function(result) {
  if (result.dialalt8 == undefined) {
    dial8p.href = "#";
  } else {
    dial8p.href = result.dialalt8;
  }
});

chrome.storage.sync.get(['dialalt9'], function(result) {
  if (result.dialalt9 == undefined) {
    dial9p.href = "#";
  } else {
    dial9p.href = result.dialalt9;
  }
});

chrome.storage.sync.get(['dialalt10'], function(result) {
  if (result.dialalt10 == undefined) {
    dial10p.href = "#";
  } else {
    dial10p.href = result.dialalt10;
  }
});

//Updates & install
function firstRun() {
  chrome.runtime.setUninstallURL("https://orbitelite.github.io/uninstall.html");
  if (localStorage.firstinstall != "true") {
    localStorage.firstinstall = "true";
    reset("true");
  }
  if (localStorage.version == null || localStorage.version == undefined) {
    localStorage.version = 0;
  } else if (localStorage.version < 146) {
    localStorage.rssActive == false;
    localStorage.version = 146;
    location.reload();
  } else if (localStorage.version < 148) {
    localStorage.rss = "https://rss.bloople.net/?url=http://orbitelite.github.io/feed.xml&showicon=true&limit=10&type=js";
    localStorage.version = 148;
    location.reload();
  } else if (localStorage.version < 150) {
    localStorage.storedList = [];
    localStorage.version = 150;
    location.reload();
  } else if (localStorage.version < 152) {
    modalOpen("Update 1.5.2 of Orbit Newtab", "This week we Fixed an Error With Extensions, Added Uninstall Message, Added Weather, Bug Fixes, Added A Few More Bugs!", true);
    localStorage.version = 152;
  } else if (localStorage.version < 160) {
    modalOpen("Update 1.6.0 of Orbit Newtab, The Animation Update", "In this Comming Update we Added Sidetool Animations, Added Sliders For: Blur & Opacity, Added a Weather Loading Screen, Added a Changelog Box, Bug Fixes & Added A Few More Bugs!", true);
    localStorage.version = 160;
  } else if (localStorage.version < 166) {
    modalOpen("Update 1.6.6 of Orbit Newtab, The Big/Bug Update", "In this recent update we added a Reload Button When There Are Glitches, Added Close Label To Closebtns, Changed RSS Feed Open Logo, Made Speed Dial Hover Effect Smoother, Fixed Not Loading When First Installed Bug, Added Spinning Submit Button, Added Submit Button On/Off, Removed Popup And Replaced It With Our Website, Instagram & Credits, Changed Defaults, Added A Few More Bugs!", true);
    localStorage.version = 166;
  } else if (localStorage.version < 171) {
    modalOpen("Update 1.7.1 of Orbit Newtab, The UI Redesign First Leap", "In the latest version of Orbit Newtab we have a: UI Redesign For Settings Menu, Added 'Are You Sure You Want To Reset?' Prompt, Added Misc Text For Quotes Or Weather On Screen, Re-added Original Popup, The Weather Icon Now Changes Depending On Different Weather Conditions, Ability To Disable All Content Except For Settings Menu Open Icon (For Background Only New-tab Wishes), Slideshows & Added A Fwe More Bugs.", true);
    localStorage.version = 171;
    localStorage.sub = "None";
    localStorage.searchToggle = "true";
    localStorage.clockToggle = "true";
    localStorage.dialToggle = "true";
  }
}
// console.logs

console.log("Current Version: " + localStorage.version);
console.log("Current Background Hex: " + localStorage.background);
console.log("Current Accent Hex: " + localStorage.accent);
console.log("Current Font: " + localStorage.font);
console.log("Current Number Of Speed Dials: " + localStorage.dial);