function resetFunction() {
  if (confirm("Are you sure you want to reset?")) {
    reset();
  } else {

  }
}

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
  localStorage.temp = 'true'
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
  chrome.storage.sync.set({
    backgroundURL: ""
  }, function() {})
  if (val != "true") {
    setTimeout(reload, 200);
  } else {
    localStorage.doModalNext = "true";
  }
}

function resettwo() {
  localStorage.file = "Reset";
  chrome.storage.sync.set({
    backgroundURL: ""
  }, function() {})
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
