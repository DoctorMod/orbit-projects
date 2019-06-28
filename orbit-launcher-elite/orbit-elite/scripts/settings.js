
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
