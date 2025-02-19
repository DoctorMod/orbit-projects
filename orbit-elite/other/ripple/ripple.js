(function() {
  function h(c) {
    c = c.target;
    var a = c.childNodes.length;
    if ("button" !== c.localName || !a) return c.classList.contains("rippleJS") ? c : null;
    for (var b = 0; b < a; ++b) {
      var g = c.childNodes[b],
        e = g.classList;
      if (e && e.contains("rippleJS")) return g
    }
    return null
  }

  function n(c, a) {
    var b = h(a);
    if (b) {
      var g = b.classList,
        e = b.getAttribute("data-event");
      if (!e || e === c) {
        b.setAttribute("data-event", c);
        var d = b.getBoundingClientRect();
        e = a.offsetX;
        void 0 !== e ? a = a.offsetY : (e = a.clientX - d.left, a = a.clientY - d.top);
        var f = document.createElement("div");
        d = d.width === d.height ? 1.412 * d.width : Math.sqrt(d.width * d.width + d.height * d.height);
        var k = 2 * d + "px";
        f.style.width = k;
        f.style.height = k;
        f.style.marginLeft = -d + e + "px";
        f.style.marginTop = -d + a + "px";
        f.className = "ripple";
        b.appendChild(f);
        window.setTimeout(function() {
            f.classList.add("held")
          },
          0);
        var l = "mousedown" === c ? "mouseup" : "touchend",
          m = function() {
            document.removeEventListener(l, m);
            f.classList.add("done");
            window.setTimeout(function() {
              b.removeChild(f);
              b.children.length || (g.remove("active"), b.removeAttribute("data-event"))
            }, 650)
          };
        document.addEventListener(l, m)
      }
    }
  }

  function p() {
    var c = c || document;
    c.addEventListener("mousedown", function(a) {
      0 === a.button && n(a.type, a)
    }, {
      passive: !0
    });
    c.addEventListener("touchstart", function(a) {
      for (var b = 0; b < a.changedTouches.length; ++b) n(a.type, a.changedTouches[b])
    }, {
      passive: !0
    })
  };
  (function() {
    function c() {
      var a = document.createElement("div");
      a.className = "rippleJS";
      document.body.appendChild(a);
      var b = "absolute" === window.getComputedStyle(a).position;
      document.body.removeChild(a);
      b || (a = document.createElement("style"), a.textContent = '/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
        document.head.insertBefore(a, document.head.firstChild));
      p()
    }
    "complete" === document.readyState ? c() : window.addEventListener("load", c)
  })();
}())