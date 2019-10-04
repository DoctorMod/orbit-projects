function loadfile(filename, filetype){
  console.log("Loading "+filename+"... ("+filetype+")");
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
        document.getElementById('scriptLoader').appendChild(fileref);
        console.log("Loaded "+filename);
    }
loadfile("scripts/resetSubmit.js", "JS");
loadfile("scripts/dial.js","JS");
loadfile("other/ripple/ripple.js","JS");
loadfile("scripts/OnInstall.js","JS");
loadfile("scripts/TimeDate.js","JS");
loadfile("scripts/settings.js", "JS");
loadfile("scripts/todolist.js", "JS");
loadfile("scripts/Enabled.js", "JS");
loadfile("scripts/color.js", "JS");
loadfile("scripts/backgroundImage.js","JS");
loadfile("scripts/widgets.js","JS");
loadfile("scripts/EventListeners.js", "JS");
loadfile("scripts/speedDials.js","JS");
loadfile("scripts/other.js","JS");
loadfile("scripts/stuffBenWantsToDo.js","JS");
//Info

console.log("Current Version: " + localStorage.version);
console.log("Current Background Hex: " + localStorage.background);
console.log("Current Accent Hex: " + localStorage.accent);
console.log("Current Font: " + localStorage.font);
console.log("Current Number Of Speed Dials: " + localStorage.dial);
