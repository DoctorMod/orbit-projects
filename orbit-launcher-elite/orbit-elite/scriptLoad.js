function loadfile(filename, filetype){
  console.log("Loading "+filename+"... ("+filetype+")");
        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
        document.getElementById('scriptLoader').appendChild(fileref);
        console.log("Loaded "+filename);
    }
loadfile("scripts/dial.js","JS");
loadfile("other/ripple/ripple.js","JS");
loadfile("script.js","JS");
