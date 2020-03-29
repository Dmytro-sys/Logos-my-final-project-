/* eslint-disable */
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransitions-opacity-touchevents-setclasses !*/
! function (e, n, t) {
  function r(e, n) {
    return typeof e === n
  }

  function o() {
    var e, n, t, o, s, i, a;
    for (var l in S)
      if (S.hasOwnProperty(l)) {
        if (e = [], n = S[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options
            .aliases && n.options.aliases.length))
          for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
        for (o = r(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], a = i
          .split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[
            0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[
            a[
              0]][a[1]] = o), C.push((o ? "" : "no-") + a.join("-"))
      }
  }

  function s(e) {
    var n = _.className,
      t = Modernizr._config.classPrefix || "";
    if (x && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2")
    }
    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), x ? _.className.baseVal =
      n : _.className = n)
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n
      .createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(
        n, arguments)
  }

  function a() {
    var e = n.body;
    return e || (e = i(x ? "svg" : "body"), e.fake = !0), e
  }

  function l(e, t, r, o) {
    var s, l, u, f, c = "modernizr",
      p = i("div"),
      d = a();
    if (parseInt(r, 10))
      for (; r--;) u = i("div"), u.id = o ? o[r] : c + (r + 1), p.appendChild(u);
    return s = i("style"), s.type = "text/css", s.id = "s" + c, (d.fake ? d : p).appendChild(s), d
      .appendChild(p), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)),
      p.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", f = _.style
        .overflow, _.style.overflow = "hidden", _.appendChild(d)), l = t(p, e), d.fake ? (d
        .parentNode.removeChild(d), _.style.overflow = f, _.offsetHeight) : p.parentNode
      .removeChild(p), !!l
  }

  function u(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase()
    }).replace(/^-/, "")
  }

  function f(e, n) {
    return !!~("" + e).indexOf(n)
  }

  function c(e, n) {
    return function () {
      return e.apply(n, arguments)
    }
  }

  function p(e, n, t) {
    var o;
    for (var s in e)
      if (e[s] in n) return t === !1 ? e[s] : (o = n[e[s]], r(o, "function") ? c(o, t || n) : o);
    return !1
  }

  function d(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return "-" + n.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function m(n, t, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, n, t);
      var s = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (s) {
        var i = s.error ? "error" : "log";
        s[i].call(s,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate")
      }
    } else o = !t && n.currentStyle && n.currentStyle[r];
    return o
  }

  function y(n, r) {
    var o = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;)
        if (e.CSS.supports(d(n[o]), r)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var s = []; o--;) s.push("(" + d(n[o]) + ":" + r + ")");
      return s = s.join(" or "), l("@supports (" + s + ") { #modernizr { position: absolute; } }",
        function (e) {
          return "absolute" == m(e, null, "position")
        })
    }
    return t
  }

  function v(e, n, o, s) {
    function a() {
      c && (delete N.style, delete N.modElem)
    }
    if (s = r(s, "undefined") ? !1 : s, !r(o, "undefined")) {
      var l = y(e, o);
      if (!r(l, "undefined")) return l
    }
    for (var c, p, d, m, v, h = ["modernizr", "tspan", "samp"]; !N.style && h.length;) c = !0, N
      .modElem = i(h.shift()), N.style = N.modElem.style;
    for (d = e.length, p = 0; d > p; p++)
      if (m = e[p], v = N.style[m], f(m, "-") && (m = u(m)), N.style[m] !== t) {
        if (s || r(o, "undefined")) return a(), "pfx" == n ? m : !0;
        try {
          N.style[m] = o
        } catch (g) {}
        if (N.style[m] != v) return a(), "pfx" == n ? m : !0
      } return a(), !1
  }

  function h(e, n, t, o, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + P.join(i + " ") + i).split(" ");
    return r(n, "string") || r(n, "undefined") ? v(a, n, o, s) : (a = (e + " " + j.join(i + " ") +
      i).split(" "), p(a, n, t))
  }

  function g(e, n, r) {
    return h(e, t, t, n, r)
  }
  var C = [],
    S = [],
    w = {
      _version: "3.6.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e])
        }, 0)
      },
      addTest: function (e, n, t) {
        S.push({
          name: e,
          fn: n,
          options: t
        })
      },
      addAsyncTest: function (e) {
        S.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function () {};
  Modernizr.prototype = w, Modernizr = new Modernizr;
  var _ = n.documentElement,
    x = "svg" === _.nodeName.toLowerCase(),
    b = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  w._prefixes = b, Modernizr.addTest("opacity", function () {
    var e = i("a").style;
    return e.cssText = b.join("opacity:.55;"), /^0.55$/.test(e.opacity)
  });
  var T = w.testStyles = l;
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;
    else {
      var r = ["@media (", b.join("touch-enabled),("), "heartz", ")",
        "{#modernizr{top:9px;position:absolute}}"
      ].join("");
      T(r, function (e) {
        t = 9 === e.offsetTop
      })
    }
    return t
  });
  var z = "Moz O ms Webkit",
    P = w._config.usePrefixes ? z.split(" ") : [];
  w._cssomPrefixes = P;
  var j = w._config.usePrefixes ? z.toLowerCase().split(" ") : [];
  w._domPrefixes = j;
  var E = {
    elem: i("modernizr")
  };
  Modernizr._q.push(function () {
    delete E.elem
  });
  var N = {
    style: E.elem.style
  };
  Modernizr._q.unshift(function () {
    delete N.style
  }), w.testAllProps = h, w.testAllProps = g, Modernizr.addTest("csstransitions", g("transition",
    "all", !0)), o(), s(C), delete w.addTest, delete w.addAsyncTest;
  for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
  e.Modernizr = Modernizr
}(window, document);
