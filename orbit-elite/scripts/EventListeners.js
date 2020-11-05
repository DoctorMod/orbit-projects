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
