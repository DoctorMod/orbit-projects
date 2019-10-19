//Activates First Run


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
    modalOpen("Update 1.7.1 of Orbit Newtab, The UI Redesign First Leap", "In the latest version of Orbit Newtab we have a: UI Redesign For Settings Menu, Added 'Are You Sure You Want To Reset?' Prompt, Added Misc Text For Quotes Or Weather On Screen, Re-added Original Popup, The Weather Icon Now Changes Depending On Different Weather Conditions, Ability To Disable All Content Except For Settings Menu Open Icon (For Background Only New-tab Wishes), Slideshows & Added A Few More Bugs.", true);
    localStorage.version = 171;
    localStorage.sub = "None";
    localStorage.searchToggle = "true";
    localStorage.clockToggle = "true";
    localStorage.dialToggle = "true";
  } else if (localStorage.version < 173) {
      modalOpen("Update 1.7.3 of Orbit Newtab, Welcome to the latest version of Orbit Newtab. It is now been patched up from its broken state. We have now decided to create a new project called Everest. Visit our discord for more information!", true);
    localStorage.version = 173;
    localStorage.sub = "None";
    localStorage.searchToggle = "true";
    localStorage.clockToggle = "true";
    localStorage.dialToggle = "true";
  }
}
