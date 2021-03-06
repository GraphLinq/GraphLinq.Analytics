/******************************* jQuery ***********************************/

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Bt(Mt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/******************************* THREE.js ***********************************/

("use strict");
var THREE = { REVISION: "69" };
"object" == typeof module && (module.exports = THREE),
  void 0 === Math.sign &&
    (Math.sign = function (t) {
      return t < 0 ? -1 : 0 < t ? 1 : 0;
    }),
  (THREE.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 }),
  (THREE.CullFaceNone = 0),
  (THREE.CullFaceBack = 1),
  (THREE.CullFaceFront = 2),
  (THREE.CullFaceFrontBack = 3),
  (THREE.FrontFaceDirectionCW = 0),
  (THREE.FrontFaceDirectionCCW = 1),
  (THREE.BasicShadowMap = 0),
  (THREE.PCFShadowMap = 1),
  (THREE.PCFSoftShadowMap = 2),
  (THREE.FrontSide = 0),
  (THREE.BackSide = 1),
  (THREE.DoubleSide = 2),
  (THREE.NoShading = 0),
  (THREE.FlatShading = 1),
  (THREE.SmoothShading = 2),
  (THREE.NoColors = 0),
  (THREE.FaceColors = 1),
  (THREE.VertexColors = 2),
  (THREE.NoBlending = 0),
  (THREE.NormalBlending = 1),
  (THREE.AdditiveBlending = 2),
  (THREE.SubtractiveBlending = 3),
  (THREE.MultiplyBlending = 4),
  (THREE.CustomBlending = 5),
  (THREE.AddEquation = 100),
  (THREE.SubtractEquation = 101),
  (THREE.ReverseSubtractEquation = 102),
  (THREE.MinEquation = 103),
  (THREE.MaxEquation = 104),
  (THREE.ZeroFactor = 200),
  (THREE.OneFactor = 201),
  (THREE.SrcColorFactor = 202),
  (THREE.OneMinusSrcColorFactor = 203),
  (THREE.SrcAlphaFactor = 204),
  (THREE.OneMinusSrcAlphaFactor = 205),
  (THREE.DstAlphaFactor = 206),
  (THREE.OneMinusDstAlphaFactor = 207),
  (THREE.DstColorFactor = 208),
  (THREE.OneMinusDstColorFactor = 209),
  (THREE.SrcAlphaSaturateFactor = 210),
  (THREE.MultiplyOperation = 0),
  (THREE.MixOperation = 1),
  (THREE.AddOperation = 2),
  (THREE.UVMapping = function () {}),
  (THREE.CubeReflectionMapping = function () {}),
  (THREE.CubeRefractionMapping = function () {}),
  (THREE.SphericalReflectionMapping = function () {}),
  (THREE.SphericalRefractionMapping = function () {}),
  (THREE.RepeatWrapping = 1e3),
  (THREE.ClampToEdgeWrapping = 1001),
  (THREE.MirroredRepeatWrapping = 1002),
  (THREE.NearestFilter = 1003),
  (THREE.NearestMipMapNearestFilter = 1004),
  (THREE.NearestMipMapLinearFilter = 1005),
  (THREE.LinearFilter = 1006),
  (THREE.LinearMipMapNearestFilter = 1007),
  (THREE.LinearMipMapLinearFilter = 1008),
  (THREE.UnsignedByteType = 1009),
  (THREE.ByteType = 1010),
  (THREE.ShortType = 1011),
  (THREE.UnsignedShortType = 1012),
  (THREE.IntType = 1013),
  (THREE.UnsignedIntType = 1014),
  (THREE.FloatType = 1015),
  (THREE.UnsignedShort4444Type = 1016),
  (THREE.UnsignedShort5551Type = 1017),
  (THREE.UnsignedShort565Type = 1018),
  (THREE.AlphaFormat = 1019),
  (THREE.RGBFormat = 1020),
  (THREE.RGBAFormat = 1021),
  (THREE.LuminanceFormat = 1022),
  (THREE.LuminanceAlphaFormat = 1023),
  (THREE.RGB_S3TC_DXT1_Format = 2001),
  (THREE.RGBA_S3TC_DXT1_Format = 2002),
  (THREE.RGBA_S3TC_DXT3_Format = 2003),
  (THREE.RGBA_S3TC_DXT5_Format = 2004),
  (THREE.RGB_PVRTC_4BPPV1_Format = 2100),
  (THREE.RGB_PVRTC_2BPPV1_Format = 2101),
  (THREE.RGBA_PVRTC_4BPPV1_Format = 2102),
  (THREE.RGBA_PVRTC_2BPPV1_Format = 2103),
  (THREE.Color = function (t) {
    return 3 === arguments.length
      ? this.setRGB(t, arguments[1], arguments[2])
      : this.set(t);
  }),
  (THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    set: function (t) {
      return (
        t instanceof THREE.Color
          ? this.copy(t)
          : "number" == typeof t
          ? this.setHex(t)
          : "string" == typeof t && this.setStyle(t),
        this
      );
    },
    setHex: function (t) {
      return (
        (t = Math.floor(t)),
        (this.r = ((t >> 16) & 255) / 255),
        (this.g = ((t >> 8) & 255) / 255),
        (this.b = (255 & t) / 255),
        this
      );
    },
    setRGB: function (t, e, r) {
      return (this.r = t), (this.g = e), (this.b = r), this;
    },
    setHSL: function (t, e, r) {
      var i;
      return (
        0 === e
          ? (this.r = this.g = this.b = r)
          : ((i = function (t, e, r) {
              return (
                r < 0 && (r += 1),
                1 < r && --r,
                r < 1 / 6
                  ? t + 6 * (e - t) * r
                  : r < 0.5
                  ? e
                  : r < 2 / 3
                  ? t + 6 * (e - t) * (2 / 3 - r)
                  : t
              );
            }),
            (r = 2 * r - (e = r <= 0.5 ? r * (1 + e) : r + e - r * e)),
            (this.r = i(r, e, t + 1 / 3)),
            (this.g = i(r, e, t)),
            (this.b = i(r, e, t - 1 / 3))),
        this
      );
    },
    setStyle: function (t) {
      return /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(t)
        ? ((t = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(t)),
          (this.r = Math.min(255, parseInt(t[1], 10)) / 255),
          (this.g = Math.min(255, parseInt(t[2], 10)) / 255),
          (this.b = Math.min(255, parseInt(t[3], 10)) / 255),
          this)
        : /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(t)
        ? ((t = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(t)),
          (this.r = Math.min(100, parseInt(t[1], 10)) / 100),
          (this.g = Math.min(100, parseInt(t[2], 10)) / 100),
          (this.b = Math.min(100, parseInt(t[3], 10)) / 100),
          this)
        : /^\#([0-9a-f]{6})$/i.test(t)
        ? ((t = /^\#([0-9a-f]{6})$/i.exec(t)),
          this.setHex(parseInt(t[1], 16)),
          this)
        : /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(t)
        ? ((t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(t)),
          this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)),
          this)
        : /^(\w+)$/i.test(t)
        ? (this.setHex(THREE.ColorKeywords[t]), this)
        : void 0;
    },
    copy: function (t) {
      return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
    },
    copyGammaToLinear: function (t) {
      return (
        (this.r = t.r * t.r), (this.g = t.g * t.g), (this.b = t.b * t.b), this
      );
    },
    copyLinearToGamma: function (t) {
      return (
        (this.r = Math.sqrt(t.r)),
        (this.g = Math.sqrt(t.g)),
        (this.b = Math.sqrt(t.b)),
        this
      );
    },
    convertGammaToLinear: function () {
      var t = this.r,
        e = this.g,
        r = this.b;
      return (this.r = t * t), (this.g = e * e), (this.b = r * r), this;
    },
    convertLinearToGamma: function () {
      return (
        (this.r = Math.sqrt(this.r)),
        (this.g = Math.sqrt(this.g)),
        (this.b = Math.sqrt(this.b)),
        this
      );
    },
    getHex: function () {
      return (
        ((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
      );
    },
    getHexString: function () {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    },
    getHSL: function (t) {
      t = t || { h: 0, s: 0, l: 0 };
      var e,
        r = this.r,
        i = this.g,
        n = this.b,
        o = Math.max(r, i, n),
        a = ((h = Math.min(r, i, n)) + o) / 2;
      if (h === o) h = e = 0;
      else {
        var s = o - h,
          h = a <= 0.5 ? s / (o + h) : s / (2 - o - h);
        switch (o) {
          case r:
            e = (i - n) / s + (i < n ? 6 : 0);
            break;
          case i:
            e = (n - r) / s + 2;
            break;
          case n:
            e = (r - i) / s + 4;
        }
        e /= 6;
      }
      return (t.h = e), (t.s = h), (t.l = a), t;
    },
    getStyle: function () {
      return (
        "rgb(" +
        ((255 * this.r) | 0) +
        "," +
        ((255 * this.g) | 0) +
        "," +
        ((255 * this.b) | 0) +
        ")"
      );
    },
    offsetHSL: function (t, e, r) {
      var i = this.getHSL();
      return (
        (i.h += t), (i.s += e), (i.l += r), this.setHSL(i.h, i.s, i.l), this
      );
    },
    add: function (t) {
      return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
    },
    addColors: function (t, e) {
      return (
        (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
      );
    },
    addScalar: function (t) {
      return (this.r += t), (this.g += t), (this.b += t), this;
    },
    multiply: function (t) {
      return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
    },
    multiplyScalar: function (t) {
      return (this.r *= t), (this.g *= t), (this.b *= t), this;
    },
    lerp: function (t, e) {
      return (
        (this.r += (t.r - this.r) * e),
        (this.g += (t.g - this.g) * e),
        (this.b += (t.b - this.b) * e),
        this
      );
    },
    equals: function (t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    },
    fromArray: function (t) {
      return (this.r = t[0]), (this.g = t[1]), (this.b = t[2]), this;
    },
    toArray: function () {
      return [this.r, this.g, this.b];
    },
    clone: function () {
      return new THREE.Color().setRGB(this.r, this.g, this.b);
    },
  }),
  (THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  }),
  (THREE.Quaternion = function (t, e, r, i) {
    (this._x = t || 0),
      (this._y = e || 0),
      (this._z = r || 0),
      (this._w = void 0 !== i ? i : 1);
  }),
  (THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    _x: 0,
    _y: 0,
    _z: 0,
    _w: 0,
    get x() {
      return this._x;
    },
    set x(t) {
      (this._x = t), this.onChangeCallback();
    },
    get y() {
      return this._y;
    },
    set y(t) {
      (this._y = t), this.onChangeCallback();
    },
    get z() {
      return this._z;
    },
    set z(t) {
      (this._z = t), this.onChangeCallback();
    },
    get w() {
      return this._w;
    },
    set w(t) {
      (this._w = t), this.onChangeCallback();
    },
    set: function (t, e, r, i) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = r),
        (this._w = i),
        this.onChangeCallback(),
        this
      );
    },
    copy: function (t) {
      return (
        (this._x = t.x),
        (this._y = t.y),
        (this._z = t.z),
        (this._w = t.w),
        this.onChangeCallback(),
        this
      );
    },
    setFromEuler: function (t, e) {
      if (!1 == t instanceof THREE.Euler)
        throw Error(
          "THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order."
        );
      var r = Math.cos(t._x / 2),
        i = Math.cos(t._y / 2),
        n = Math.cos(t._z / 2),
        o = Math.sin(t._x / 2),
        a = Math.sin(t._y / 2),
        s = Math.sin(t._z / 2);
      return (
        "XYZ" === t.order
          ? ((this._x = o * i * n + r * a * s),
            (this._y = r * a * n - o * i * s),
            (this._z = r * i * s + o * a * n),
            (this._w = r * i * n - o * a * s))
          : "YXZ" === t.order
          ? ((this._x = o * i * n + r * a * s),
            (this._y = r * a * n - o * i * s),
            (this._z = r * i * s - o * a * n),
            (this._w = r * i * n + o * a * s))
          : "ZXY" === t.order
          ? ((this._x = o * i * n - r * a * s),
            (this._y = r * a * n + o * i * s),
            (this._z = r * i * s + o * a * n),
            (this._w = r * i * n - o * a * s))
          : "ZYX" === t.order
          ? ((this._x = o * i * n - r * a * s),
            (this._y = r * a * n + o * i * s),
            (this._z = r * i * s - o * a * n),
            (this._w = r * i * n + o * a * s))
          : "YZX" === t.order
          ? ((this._x = o * i * n + r * a * s),
            (this._y = r * a * n + o * i * s),
            (this._z = r * i * s - o * a * n),
            (this._w = r * i * n - o * a * s))
          : "XZY" === t.order &&
            ((this._x = o * i * n - r * a * s),
            (this._y = r * a * n - o * i * s),
            (this._z = r * i * s + o * a * n),
            (this._w = r * i * n + o * a * s)),
        !1 !== e && this.onChangeCallback(),
        this
      );
    },
    setFromAxisAngle: function (t, e) {
      var r = e / 2,
        e = Math.sin(r);
      return (
        (this._x = t.x * e),
        (this._y = t.y * e),
        (this._z = t.z * e),
        (this._w = Math.cos(r)),
        this.onChangeCallback(),
        this
      );
    },
    setFromRotationMatrix: function (t) {
      var e = t.elements,
        r = e[0];
      t = e[4];
      var i = e[8],
        n = e[1],
        o = e[5],
        a = e[9],
        s = e[2],
        h = e[6],
        l = r + o + (e = e[10]);
      return (
        0 < l
          ? ((r = 0.5 / Math.sqrt(l + 1)),
            (this._w = 0.25 / r),
            (this._x = (h - a) * r),
            (this._y = (i - s) * r),
            (this._z = (n - t) * r))
          : o < r && e < r
          ? ((r = 2 * Math.sqrt(1 + r - o - e)),
            (this._w = (h - a) / r),
            (this._x = 0.25 * r),
            (this._y = (t + n) / r),
            (this._z = (i + s) / r))
          : e < o
          ? ((r = 2 * Math.sqrt(1 + o - r - e)),
            (this._w = (i - s) / r),
            (this._x = (t + n) / r),
            (this._y = 0.25 * r),
            (this._z = (a + h) / r))
          : ((r = 2 * Math.sqrt(1 + e - r - o)),
            (this._w = (n - t) / r),
            (this._x = (i + s) / r),
            (this._y = (a + h) / r),
            (this._z = 0.25 * r)),
        this.onChangeCallback(),
        this
      );
    },
    setFromUnitVectors: (function () {
      var r, i;
      return function (t, e) {
        return (
          void 0 === r && (r = new THREE.Vector3()),
          (i = t.dot(e) + 1) < 1e-6
            ? ((i = 0),
              Math.abs(t.x) > Math.abs(t.z)
                ? r.set(-t.y, t.x, 0)
                : r.set(0, -t.z, t.y))
            : r.crossVectors(t, e),
          (this._x = r.x),
          (this._y = r.y),
          (this._z = r.z),
          (this._w = i),
          this.normalize(),
          this
        );
      };
    })(),
    inverse: function () {
      return this.conjugate().normalize(), this;
    },
    conjugate: function () {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this.onChangeCallback(),
        this
      );
    },
    dot: function (t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    },
    lengthSq: function () {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    },
    length: function () {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w
      );
    },
    normalize: function () {
      var t = this.length();
      return (
        0 === t
          ? ((this._z = this._y = this._x = 0), (this._w = 1))
          : ((t = 1 / t),
            (this._x *= t),
            (this._y *= t),
            (this._z *= t),
            (this._w *= t)),
        this.onChangeCallback(),
        this
      );
    },
    multiply: function (t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
          ),
          this.multiplyQuaternions(t, e))
        : this.multiplyQuaternions(this, t);
    },
    multiplyQuaternions: function (t, e) {
      var r = t._x,
        i = t._y,
        n = t._z,
        o = t._w,
        a = e._x,
        s = e._y,
        t = e._z,
        e = e._w;
      return (
        (this._x = r * e + o * a + i * t - n * s),
        (this._y = i * e + o * s + n * a - r * t),
        (this._z = n * e + o * t + r * s - i * a),
        (this._w = o * e - r * a - i * s - n * t),
        this.onChangeCallback(),
        this
      );
    },
    multiplyVector3: function (t) {
      return (
        console.warn(
          "THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."
        ),
        t.applyQuaternion(this)
      );
    },
    slerp: function (t, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t);
      var r = this._x,
        i = this._y,
        n = this._z,
        o = this._w,
        a = o * t._w + r * t._x + i * t._y + n * t._z;
      if (
        (a < 0
          ? ((this._w = -t._w),
            (this._x = -t._x),
            (this._y = -t._y),
            (this._z = -t._z),
            (a = -a))
          : this.copy(t),
        1 <= a)
      )
        return (this._w = o), (this._x = r), (this._y = i), (this._z = n), this;
      var s = Math.acos(a),
        t = Math.sqrt(1 - a * a);
      return (
        Math.abs(t) < 0.001
          ? ((this._w = 0.5 * (o + this._w)),
            (this._x = 0.5 * (r + this._x)),
            (this._y = 0.5 * (i + this._y)),
            (this._z = 0.5 * (n + this._z)))
          : ((a = Math.sin((1 - e) * s) / t),
            (s = Math.sin(e * s) / t),
            (this._w = o * a + this._w * s),
            (this._x = r * a + this._x * s),
            (this._y = i * a + this._y * s),
            (this._z = n * a + this._z * s),
            this.onChangeCallback()),
        this
      );
    },
    equals: function (t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._w === this._w
      );
    },
    fromArray: function (t, e) {
      return (
        void 0 === e && (e = 0),
        (this._x = t[e]),
        (this._y = t[e + 1]),
        (this._z = t[e + 2]),
        (this._w = t[e + 3]),
        this.onChangeCallback(),
        this
      );
    },
    toArray: function (t, e) {
      return (
        void 0 === t && (t = []),
        void 0 === e && (e = 0),
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._w),
        t
      );
    },
    onChange: function (t) {
      return (this.onChangeCallback = t), this;
    },
    onChangeCallback: function () {},
    clone: function () {
      return new THREE.Quaternion(this._x, this._y, this._z, this._w);
    },
  }),
  (THREE.Quaternion.slerp = function (t, e, r, i) {
    return r.copy(t).slerp(e, i);
  }),
  (THREE.Vector2 = function (t, e) {
    (this.x = t || 0), (this.y = e || 0);
  }),
  (THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    set: function (t, e) {
      return (this.x = t), (this.y = e), this;
    },
    setX: function (t) {
      return (this.x = t), this;
    },
    setY: function (t) {
      return (this.y = t), this;
    },
    setComponent: function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw Error("index is out of range: " + t);
      }
    },
    getComponent: function (t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw Error("index is out of range: " + t);
      }
    },
    copy: function (t) {
      return (this.x = t.x), (this.y = t.y), this;
    },
    add: function (t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(t, e))
        : ((this.x += t.x), (this.y += t.y), this);
    },
    addVectors: function (t, e) {
      return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
    },
    addScalar: function (t) {
      return (this.x += t), (this.y += t), this;
    },
    sub: function (t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(t, e))
        : ((this.x -= t.x), (this.y -= t.y), this);
    },
    subVectors: function (t, e) {
      return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
    },
    multiply: function (t) {
      return (this.x *= t.x), (this.y *= t.y), this;
    },
    multiplyScalar: function (t) {
      return (this.x *= t), (this.y *= t), this;
    },
    divide: function (t) {
      return (this.x /= t.x), (this.y /= t.y), this;
    },
    divideScalar: function (t) {
      return (
        0 !== t
          ? ((t = 1 / t), (this.x *= t), (this.y *= t))
          : (this.y = this.x = 0),
        this
      );
    },
    min: function (t) {
      return (
        this.x > t.x && (this.x = t.x), this.y > t.y && (this.y = t.y), this
      );
    },
    max: function (t) {
      return (
        this.x < t.x && (this.x = t.x), this.y < t.y && (this.y = t.y), this
      );
    },
    clamp: function (t, e) {
      return (
        this.x < t.x ? (this.x = t.x) : this.x > e.x && (this.x = e.x),
        this.y < t.y ? (this.y = t.y) : this.y > e.y && (this.y = e.y),
        this
      );
    },
    clampScalar: (function () {
      var r, i;
      return function (t, e) {
        return (
          void 0 === r &&
            ((r = new THREE.Vector2()), (i = new THREE.Vector2())),
          r.set(t, t),
          i.set(e, e),
          this.clamp(r, i)
        );
      };
    })(),
    floor: function () {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    round: function () {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    roundToZero: function () {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        this
      );
    },
    negate: function () {
      return (this.x = -this.x), (this.y = -this.y), this;
    },
    dot: function (t) {
      return this.x * t.x + this.y * t.y;
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y;
    },
    length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    normalize: function () {
      return this.divideScalar(this.length());
    },
    distanceTo: function (t) {
      return Math.sqrt(this.distanceToSquared(t));
    },
    distanceToSquared: function (t) {
      var e = this.x - t.x;
      return e * e + (t = this.y - t.y) * t;
    },
    setLength: function (t) {
      var e = this.length();
      return 0 !== e && t !== e && this.multiplyScalar(t / e), this;
    },
    lerp: function (t, e) {
      return (
        (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
      );
    },
    equals: function (t) {
      return t.x === this.x && t.y === this.y;
    },
    fromArray: function (t, e) {
      return (
        void 0 === e && (e = 0), (this.x = t[e]), (this.y = t[e + 1]), this
      );
    },
    toArray: function (t, e) {
      return (
        void 0 === t && (t = []),
        void 0 === e && (e = 0),
        (t[e] = this.x),
        (t[e + 1] = this.y),
        t
      );
    },
    clone: function () {
      return new THREE.Vector2(this.x, this.y);
    },
  }),
  (THREE.Vector3 = function (t, e, r) {
    (this.x = t || 0), (this.y = e || 0), (this.z = r || 0);
  }),
  (THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function (t, e, r) {
      return (this.x = t), (this.y = e), (this.z = r), this;
    },
    setX: function (t) {
      return (this.x = t), this;
    },
    setY: function (t) {
      return (this.y = t), this;
    },
    setZ: function (t) {
      return (this.z = t), this;
    },
    setComponent: function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw Error("index is out of range: " + t);
      }
    },
    getComponent: function (t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw Error("index is out of range: " + t);
      }
    },
    copy: function (t) {
      return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
    },
    add: function (t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(t, e))
        : ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
    },
    addScalar: function (t) {
      return (this.x += t), (this.y += t), (this.z += t), this;
    },
    addVectors: function (t, e) {
      return (
        (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
      );
    },
    sub: function (t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(t, e))
        : ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
    },
    subVectors: function (t, e) {
      return (
        (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
      );
    },
    multiply: function (t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
          ),
          this.multiplyVectors(t, e))
        : ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
    },
    multiplyScalar: function (t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), this;
    },
    multiplyVectors: function (t, e) {
      return (
        (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
      );
    },
    applyEuler: (function () {
      var e;
      return function (t) {
        return (
          !1 == t instanceof THREE.Euler &&
            console.error(
              "THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."
            ),
          void 0 === e && (e = new THREE.Quaternion()),
          this.applyQuaternion(e.setFromEuler(t)),
          this
        );
      };
    })(),
    applyAxisAngle: (function () {
      var r;
      return function (t, e) {
        return (
          void 0 === r && (r = new THREE.Quaternion()),
          this.applyQuaternion(r.setFromAxisAngle(t, e)),
          this
        );
      };
    })(),
    applyMatrix3: function (t) {
      var e = this.x,
        r = this.y,
        i = this.z;
      return (
        (t = t.elements),
        (this.x = t[0] * e + t[3] * r + t[6] * i),
        (this.y = t[1] * e + t[4] * r + t[7] * i),
        (this.z = t[2] * e + t[5] * r + t[8] * i),
        this
      );
    },
    applyMatrix4: function (t) {
      var e = this.x,
        r = this.y,
        i = this.z;
      return (
        (t = t.elements),
        (this.x = t[0] * e + t[4] * r + t[8] * i + t[12]),
        (this.y = t[1] * e + t[5] * r + t[9] * i + t[13]),
        (this.z = t[2] * e + t[6] * r + t[10] * i + t[14]),
        this
      );
    },
    applyProjection: function (t) {
      var e = this.x,
        r = this.y,
        i = this.z,
        n = 1 / ((t = t.elements)[3] * e + t[7] * r + t[11] * i + t[15]);
      return (
        (this.x = (t[0] * e + t[4] * r + t[8] * i + t[12]) * n),
        (this.y = (t[1] * e + t[5] * r + t[9] * i + t[13]) * n),
        (this.z = (t[2] * e + t[6] * r + t[10] * i + t[14]) * n),
        this
      );
    },
    applyQuaternion: function (t) {
      var e = this.x,
        r = this.y,
        i = this.z,
        n = t.x,
        o = t.y,
        a = t.z,
        s = (t = t.w) * e + o * i - a * r,
        h = t * r + a * e - n * i,
        l = t * i + n * r - o * e,
        e = -n * e - o * r - a * i;
      return (
        (this.x = s * t + e * -n + h * -a - l * -o),
        (this.y = h * t + e * -o + l * -n - s * -a),
        (this.z = l * t + e * -a + s * -o - h * -n),
        this
      );
    },
    project: (function () {
      var e;
      return function (t) {
        return (
          void 0 === e && (e = new THREE.Matrix4()),
          e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)),
          this.applyProjection(e)
        );
      };
    })(),
    unproject: (function () {
      var e;
      return function (t) {
        return (
          void 0 === e && (e = new THREE.Matrix4()),
          e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)),
          this.applyProjection(e)
        );
      };
    })(),
    transformDirection: function (t) {
      var e = this.x,
        r = this.y,
        i = this.z;
      return (
        (t = t.elements),
        (this.x = t[0] * e + t[4] * r + t[8] * i),
        (this.y = t[1] * e + t[5] * r + t[9] * i),
        (this.z = t[2] * e + t[6] * r + t[10] * i),
        this.normalize(),
        this
      );
    },
    divide: function (t) {
      return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
    },
    divideScalar: function (t) {
      return (
        0 !== t
          ? ((t = 1 / t), (this.x *= t), (this.y *= t), (this.z *= t))
          : (this.z = this.y = this.x = 0),
        this
      );
    },
    min: function (t) {
      return (
        this.x > t.x && (this.x = t.x),
        this.y > t.y && (this.y = t.y),
        this.z > t.z && (this.z = t.z),
        this
      );
    },
    max: function (t) {
      return (
        this.x < t.x && (this.x = t.x),
        this.y < t.y && (this.y = t.y),
        this.z < t.z && (this.z = t.z),
        this
      );
    },
    clamp: function (t, e) {
      return (
        this.x < t.x ? (this.x = t.x) : this.x > e.x && (this.x = e.x),
        this.y < t.y ? (this.y = t.y) : this.y > e.y && (this.y = e.y),
        this.z < t.z ? (this.z = t.z) : this.z > e.z && (this.z = e.z),
        this
      );
    },
    clampScalar: (function () {
      var r, i;
      return function (t, e) {
        return (
          void 0 === r &&
            ((r = new THREE.Vector3()), (i = new THREE.Vector3())),
          r.set(t, t, t),
          i.set(e, e, e),
          this.clamp(r, i)
        );
      };
    })(),
    floor: function () {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    },
    ceil: function () {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    },
    round: function () {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    },
    roundToZero: function () {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        this
      );
    },
    negate: function () {
      return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
    },
    dot: function (t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    },
    length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    lengthManhattan: function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    },
    normalize: function () {
      return this.divideScalar(this.length());
    },
    setLength: function (t) {
      var e = this.length();
      return 0 !== e && t !== e && this.multiplyScalar(t / e), this;
    },
    lerp: function (t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        this
      );
    },
    cross: function (t, e) {
      if (void 0 !== e)
        return (
          console.warn(
            "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
          ),
          this.crossVectors(t, e)
        );
      var r = this.x,
        i = this.y,
        e = this.z;
      return (
        (this.x = i * t.z - e * t.y),
        (this.y = e * t.x - r * t.z),
        (this.z = r * t.y - i * t.x),
        this
      );
    },
    crossVectors: function (t, e) {
      var r = t.x,
        i = t.y,
        n = t.z,
        o = e.x,
        t = e.y,
        e = e.z;
      return (
        (this.x = i * e - n * t),
        (this.y = n * o - r * e),
        (this.z = r * t - i * o),
        this
      );
    },
    projectOnVector: (function () {
      var e, r;
      return function (t) {
        return (
          void 0 === e && (e = new THREE.Vector3()),
          e.copy(t).normalize(),
          (r = this.dot(e)),
          this.copy(e).multiplyScalar(r)
        );
      };
    })(),
    projectOnPlane: (function () {
      var e;
      return function (t) {
        return (
          void 0 === e && (e = new THREE.Vector3()),
          e.copy(this).projectOnVector(t),
          this.sub(e)
        );
      };
    })(),
    reflect: (function () {
      var e;
      return function (t) {
        return (
          void 0 === e && (e = new THREE.Vector3()),
          this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
        );
      };
    })(),
    angleTo: function (t) {
      return (
        (t = this.dot(t) / (this.length() * t.length())),
        Math.acos(THREE.Math.clamp(t, -1, 1))
      );
    },
    distanceTo: function (t) {
      return Math.sqrt(this.distanceToSquared(t));
    },
    distanceToSquared: function (t) {
      var e = this.x - t.x,
        r = this.y - t.y;
      return e * e + r * r + (t = this.z - t.z) * t;
    },
    setEulerFromRotationMatrix: function (t, e) {
      console.error(
        "THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead."
      );
    },
    setEulerFromQuaternion: function (t, e) {
      console.error(
        "THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead."
      );
    },
    getPositionFromMatrix: function (t) {
      return (
        console.warn(
          "THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."
        ),
        this.setFromMatrixPosition(t)
      );
    },
    getScaleFromMatrix: function (t) {
      return (
        console.warn(
          "THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."
        ),
        this.setFromMatrixScale(t)
      );
    },
    getColumnFromMatrix: function (t, e) {
      return (
        console.warn(
          "THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."
        ),
        this.setFromMatrixColumn(t, e)
      );
    },
    setFromMatrixPosition: function (t) {
      return (
        (this.x = t.elements[12]),
        (this.y = t.elements[13]),
        (this.z = t.elements[14]),
        this
      );
    },
    setFromMatrixScale: function (t) {
      var e = this.set(t.elements[0], t.elements[1], t.elements[2]).length(),
        r = this.set(t.elements[4], t.elements[5], t.elements[6]).length();
      return (
        (t = this.set(t.elements[8], t.elements[9], t.elements[10]).length()),
        (this.x = e),
        (this.y = r),
        (this.z = t),
        this
      );
    },
    setFromMatrixColumn: function (t, e) {
      (t *= 4), (e = e.elements);
      return (this.x = e[t]), (this.y = e[1 + t]), (this.z = e[2 + t]), this;
    },
    equals: function (t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    },
    fromArray: function (t, e) {
      return (
        void 0 === e && (e = 0),
        (this.x = t[e]),
        (this.y = t[e + 1]),
        (this.z = t[e + 2]),
        this
      );
    },
    toArray: function (t, e) {
      return (
        void 0 === t && (t = []),
        void 0 === e && (e = 0),
        (t[e] = this.x),
        (t[e + 1] = this.y),
        (t[e + 2] = this.z),
        t
      );
    },
    clone: function () {
      return new THREE.Vector3(this.x, this.y, this.z);
    },
  }),
  (THREE.Vector4 = function (t, e, r, i) {
    (this.x = t || 0),
      (this.y = e || 0),
      (this.z = r || 0),
      (this.w = void 0 !== i ? i : 1);
  }),
  (THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function (t, e, r, i) {
      return (this.x = t), (this.y = e), (this.z = r), (this.w = i), this;
    },
    setX: function (t) {
      return (this.x = t), this;
    },
    setY: function (t) {
      return (this.y = t), this;
    },
    setZ: function (t) {
      return (this.z = t), this;
    },
    setW: function (t) {
      return (this.w = t), this;
    },
    setComponent: function (t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw Error("index is out of range: " + t);
      }
    },
    getComponent: function (t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw Error("index is out of range: " + t);
      }
    },
    copy: function (t) {
      return (
        (this.x = t.x),
        (this.y = t.y),
        (this.z = t.z),
        (this.w = void 0 !== t.w ? t.w : 1),
        this
      );
    },
    add: function (t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
          ),
          this.addVectors(t, e))
        : ((this.x += t.x),
          (this.y += t.y),
          (this.z += t.z),
          (this.w += t.w),
          this);
    },
    addScalar: function (t) {
      return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
    },
    addVectors: function (t, e) {
      return (
        (this.x = t.x + e.x),
        (this.y = t.y + e.y),
        (this.z = t.z + e.z),
        (this.w = t.w + e.w),
        this
      );
    },
    sub: function (t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
          ),
          this.subVectors(t, e))
        : ((this.x -= t.x),
          (this.y -= t.y),
          (this.z -= t.z),
          (this.w -= t.w),
          this);
    },
    subVectors: function (t, e) {
      return (
        (this.x = t.x - e.x),
        (this.y = t.y - e.y),
        (this.z = t.z - e.z),
        (this.w = t.w - e.w),
        this
      );
    },
    multiplyScalar: function (t) {
      return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
    },
    applyMatrix4: function (t) {
      var e = this.x,
        r = this.y,
        i = this.z,
        n = this.w;
      return (
        (t = t.elements),
        (this.x = t[0] * e + t[4] * r + t[8] * i + t[12] * n),
        (this.y = t[1] * e + t[5] * r + t[9] * i + t[13] * n),
        (this.z = t[2] * e + t[6] * r + t[10] * i + t[14] * n),
        (this.w = t[3] * e + t[7] * r + t[11] * i + t[15] * n),
        this
      );
    },
    divideScalar: function (t) {
      return (
        0 !== t
          ? ((t = 1 / t),
            (this.x *= t),
            (this.y *= t),
            (this.z *= t),
            (this.w *= t))
          : ((this.z = this.y = this.x = 0), (this.w = 1)),
        this
      );
    },
    setAxisAngleFromQuaternion: function (t) {
      this.w = 2 * Math.acos(t.w);
      var e = Math.sqrt(1 - t.w * t.w);
      return (
        e < 1e-4
          ? ((this.x = 1), (this.z = this.y = 0))
          : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
        this
      );
    },
    setAxisAngleFromRotationMatrix: function (t) {
      var e = (t = t.elements)[0],
        r = t[4],
        i = t[8],
        n = t[1],
        o = t[5],
        a = t[9],
        s = t[2],
        h = t[6],
        l = t[10];
      return (
        Math.abs(r - n) < 0.01 &&
        Math.abs(i - s) < 0.01 &&
        Math.abs(a - h) < 0.01
          ? Math.abs(r + n) < 0.1 &&
            Math.abs(i + s) < 0.1 &&
            Math.abs(a + h) < 0.1 &&
            Math.abs(e + o + l - 3) < 0.1
            ? this.set(1, 0, 0, 0)
            : ((t = Math.PI),
              (l = (l + 1) / 2),
              (r = (r + n) / 4),
              (i = (i + s) / 4),
              (a = (a + h) / 4),
              (o = (o + 1) / 2) < (e = (e + 1) / 2) && l < e
                ? (r =
                    e < 0.01
                      ? ((h = 0), (s = 0.707106781))
                      : ((s = r / (h = Math.sqrt(e))), i / h))
                : l < o
                ? (r =
                    o < 0.01
                      ? ((s = 0), (h = 0.707106781))
                      : ((h = r / (s = Math.sqrt(o))), a / s))
                : l < 0.01
                ? ((s = h = 0.707106781), (r = 0))
                : ((h = i / (r = Math.sqrt(l))), (s = a / r)),
              this.set(h, s, r, t))
          : ((t = Math.sqrt(
              (h - a) * (h - a) + (i - s) * (i - s) + (n - r) * (n - r)
            )),
            Math.abs(t) < 0.001 && (t = 1),
            (this.x = (h - a) / t),
            (this.y = (i - s) / t),
            (this.z = (n - r) / t),
            (this.w = Math.acos((e + o + l - 1) / 2))),
        this
      );
    },
    min: function (t) {
      return (
        this.x > t.x && (this.x = t.x),
        this.y > t.y && (this.y = t.y),
        this.z > t.z && (this.z = t.z),
        this.w > t.w && (this.w = t.w),
        this
      );
    },
    max: function (t) {
      return (
        this.x < t.x && (this.x = t.x),
        this.y < t.y && (this.y = t.y),
        this.z < t.z && (this.z = t.z),
        this.w < t.w && (this.w = t.w),
        this
      );
    },
    clamp: function (t, e) {
      return (
        this.x < t.x ? (this.x = t.x) : this.x > e.x && (this.x = e.x),
        this.y < t.y ? (this.y = t.y) : this.y > e.y && (this.y = e.y),
        this.z < t.z ? (this.z = t.z) : this.z > e.z && (this.z = e.z),
        this.w < t.w ? (this.w = t.w) : this.w > e.w && (this.w = e.w),
        this
      );
    },
    clampScalar: (function () {
      var r, i;
      return function (t, e) {
        return (
          void 0 === r &&
            ((r = new THREE.Vector4()), (i = new THREE.Vector4())),
          r.set(t, t, t, t),
          i.set(e, e, e, e),
          this.clamp(r, i)
        );
      };
    })(),
    floor: function () {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        (this.w = Math.floor(this.w)),
        this
      );
    },
    ceil: function () {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        (this.w = Math.ceil(this.w)),
        this
      );
    },
    round: function () {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        (this.w = Math.round(this.w)),
        this
      );
    },
    roundToZero: function () {
      return (
        (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
        (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
        (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
        (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
        this
      );
    },
    negate: function () {
      return (
        (this.x = -this.x),
        (this.y = -this.y),
        (this.z = -this.z),
        (this.w = -this.w),
        this
      );
    },
    dot: function (t) {
      return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
    },
    lengthSq: function () {
      return (
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    },
    length: function () {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      );
    },
    lengthManhattan: function () {
      return (
        Math.abs(this.x) +
        Math.abs(this.y) +
        Math.abs(this.z) +
        Math.abs(this.w)
      );
    },
    normalize: function () {
      return this.divideScalar(this.length());
    },
    setLength: function (t) {
      var e = this.length();
      return 0 !== e && t !== e && this.multiplyScalar(t / e), this;
    },
    lerp: function (t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        (this.w += (t.w - this.w) * e),
        this
      );
    },
    equals: function (t) {
      return (
        t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      );
    },
    fromArray: function (t, e) {
      return (
        void 0 === e && (e = 0),
        (this.x = t[e]),
        (this.y = t[e + 1]),
        (this.z = t[e + 2]),
        (this.w = t[e + 3]),
        this
      );
    },
    toArray: function (t, e) {
      return (
        void 0 === t && (t = []),
        void 0 === e && (e = 0),
        (t[e] = this.x),
        (t[e + 1] = this.y),
        (t[e + 2] = this.z),
        (t[e + 3] = this.w),
        t
      );
    },
    clone: function () {
      return new THREE.Vector4(this.x, this.y, this.z, this.w);
    },
  }),
  (THREE.Euler = function (t, e, r, i) {
    (this._x = t || 0),
      (this._y = e || 0),
      (this._z = r || 0),
      (this._order = i || THREE.Euler.DefaultOrder);
  }),
  (THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" ")),
  (THREE.Euler.DefaultOrder = "XYZ"),
  (THREE.Euler.prototype = {
    constructor: THREE.Euler,
    _x: 0,
    _y: 0,
    _z: 0,
    _order: THREE.Euler.DefaultOrder,
    get x() {
      return this._x;
    },
    set x(t) {
      (this._x = t), this.onChangeCallback();
    },
    get y() {
      return this._y;
    },
    set y(t) {
      (this._y = t), this.onChangeCallback();
    },
    get z() {
      return this._z;
    },
    set z(t) {
      (this._z = t), this.onChangeCallback();
    },
    get order() {
      return this._order;
    },
    set order(t) {
      (this._order = t), this.onChangeCallback();
    },
    set: function (t, e, r, i) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = r),
        (this._order = i || this._order),
        this.onChangeCallback(),
        this
      );
    },
    copy: function (t) {
      return (
        (this._x = t._x),
        (this._y = t._y),
        (this._z = t._z),
        (this._order = t._order),
        this.onChangeCallback(),
        this
      );
    },
    setFromRotationMatrix: function (t, e) {
      var r = THREE.Math.clamp,
        i = (c = t.elements)[0],
        n = c[4],
        o = c[8],
        a = c[1],
        s = c[5],
        h = c[9],
        l = c[2],
        t = c[6],
        c = c[10];
      return (
        "XYZ" === (e = e || this._order)
          ? ((this._y = Math.asin(r(o, -1, 1))),
            Math.abs(o) < 0.99999
              ? ((this._x = Math.atan2(-h, c)), (this._z = Math.atan2(-n, i)))
              : ((this._x = Math.atan2(t, s)), (this._z = 0)))
          : "YXZ" === e
          ? ((this._x = Math.asin(-r(h, -1, 1))),
            Math.abs(h) < 0.99999
              ? ((this._y = Math.atan2(o, c)), (this._z = Math.atan2(a, s)))
              : ((this._y = Math.atan2(-l, i)), (this._z = 0)))
          : "ZXY" === e
          ? ((this._x = Math.asin(r(t, -1, 1))),
            Math.abs(t) < 0.99999
              ? ((this._y = Math.atan2(-l, c)), (this._z = Math.atan2(-n, s)))
              : ((this._y = 0), (this._z = Math.atan2(a, i))))
          : "ZYX" === e
          ? ((this._y = Math.asin(-r(l, -1, 1))),
            Math.abs(l) < 0.99999
              ? ((this._x = Math.atan2(t, c)), (this._z = Math.atan2(a, i)))
              : ((this._x = 0), (this._z = Math.atan2(-n, s))))
          : "YZX" === e
          ? ((this._z = Math.asin(r(a, -1, 1))),
            Math.abs(a) < 0.99999
              ? ((this._x = Math.atan2(-h, s)), (this._y = Math.atan2(-l, i)))
              : ((this._x = 0), (this._y = Math.atan2(o, c))))
          : "XZY" === e
          ? ((this._z = Math.asin(-r(n, -1, 1))),
            Math.abs(n) < 0.99999
              ? ((this._x = Math.atan2(t, s)), (this._y = Math.atan2(o, i)))
              : ((this._x = Math.atan2(-h, c)), (this._y = 0)))
          : console.warn(
              "THREE.Euler: .setFromRotationMatrix() given unsupported order: " +
                e
            ),
        (this._order = e),
        this.onChangeCallback(),
        this
      );
    },
    setFromQuaternion: function (t, e, r) {
      var i = THREE.Math.clamp,
        n = t.x * t.x,
        o = t.y * t.y,
        a = t.z * t.z,
        s = t.w * t.w;
      return (
        "XYZ" === (e = e || this._order)
          ? ((this._x = Math.atan2(2 * (t.x * t.w - t.y * t.z), s - n - o + a)),
            (this._y = Math.asin(i(2 * (t.x * t.z + t.y * t.w), -1, 1))),
            (this._z = Math.atan2(2 * (t.z * t.w - t.x * t.y), s + n - o - a)))
          : "YXZ" === e
          ? ((this._x = Math.asin(i(2 * (t.x * t.w - t.y * t.z), -1, 1))),
            (this._y = Math.atan2(2 * (t.x * t.z + t.y * t.w), s - n - o + a)),
            (this._z = Math.atan2(2 * (t.x * t.y + t.z * t.w), s - n + o - a)))
          : "ZXY" === e
          ? ((this._x = Math.asin(i(2 * (t.x * t.w + t.y * t.z), -1, 1))),
            (this._y = Math.atan2(2 * (t.y * t.w - t.z * t.x), s - n - o + a)),
            (this._z = Math.atan2(2 * (t.z * t.w - t.x * t.y), s - n + o - a)))
          : "ZYX" === e
          ? ((this._x = Math.atan2(2 * (t.x * t.w + t.z * t.y), s - n - o + a)),
            (this._y = Math.asin(i(2 * (t.y * t.w - t.x * t.z), -1, 1))),
            (this._z = Math.atan2(2 * (t.x * t.y + t.z * t.w), s + n - o - a)))
          : "YZX" === e
          ? ((this._x = Math.atan2(2 * (t.x * t.w - t.z * t.y), s - n + o - a)),
            (this._y = Math.atan2(2 * (t.y * t.w - t.x * t.z), s + n - o - a)),
            (this._z = Math.asin(i(2 * (t.x * t.y + t.z * t.w), -1, 1))))
          : "XZY" === e
          ? ((this._x = Math.atan2(2 * (t.x * t.w + t.y * t.z), s - n + o - a)),
            (this._y = Math.atan2(2 * (t.x * t.z + t.y * t.w), s + n - o - a)),
            (this._z = Math.asin(i(2 * (t.z * t.w - t.x * t.y), -1, 1))))
          : console.warn(
              "THREE.Euler: .setFromQuaternion() given unsupported order: " + e
            ),
        (this._order = e),
        !1 !== r && this.onChangeCallback(),
        this
      );
    },
    reorder: (function () {
      var e = new THREE.Quaternion();
      return function (t) {
        e.setFromEuler(this), this.setFromQuaternion(e, t);
      };
    })(),
    equals: function (t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._order === this._order
      );
    },
    fromArray: function (t) {
      return (
        (this._x = t[0]),
        (this._y = t[1]),
        (this._z = t[2]),
        void 0 !== t[3] && (this._order = t[3]),
        this.onChangeCallback(),
        this
      );
    },
    toArray: function () {
      return [this._x, this._y, this._z, this._order];
    },
    onChange: function (t) {
      return (this.onChangeCallback = t), this;
    },
    onChangeCallback: function () {},
    clone: function () {
      return new THREE.Euler(this._x, this._y, this._z, this._order);
    },
  }),
  (THREE.Line3 = function (t, e) {
    (this.start = void 0 !== t ? t : new THREE.Vector3()),
      (this.end = void 0 !== e ? e : new THREE.Vector3());
  }),
  (THREE.Line3.prototype = {
    constructor: THREE.Line3,
    set: function (t, e) {
      return this.start.copy(t), this.end.copy(e), this;
    },
    copy: function (t) {
      return this.start.copy(t.start), this.end.copy(t.end), this;
    },
    center: function (t) {
      return (t || new THREE.Vector3())
        .addVectors(this.start, this.end)
        .multiplyScalar(0.5);
    },
    delta: function (t) {
      return (t || new THREE.Vector3()).subVectors(this.end, this.start);
    },
    distanceSq: function () {
      return this.start.distanceToSquared(this.end);
    },
    distance: function () {
      return this.start.distanceTo(this.end);
    },
    at: function (t, e) {
      e = e || new THREE.Vector3();
      return this.delta(e).multiplyScalar(t).add(this.start);
    },
    closestPointToPointParameter: (function () {
      var r = new THREE.Vector3(),
        i = new THREE.Vector3();
      return function (t, e) {
        r.subVectors(t, this.start), i.subVectors(this.end, this.start);
        (t = i.dot(i)), (t = i.dot(r) / t);
        return e && (t = THREE.Math.clamp(t, 0, 1)), t;
      };
    })(),
    closestPointToPoint: function (t, e, r) {
      return (
        (t = this.closestPointToPointParameter(t, e)),
        (r = r || new THREE.Vector3()),
        this.delta(r).multiplyScalar(t).add(this.start)
      );
    },
    applyMatrix4: function (t) {
      return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
    },
    equals: function (t) {
      return t.start.equals(this.start) && t.end.equals(this.end);
    },
    clone: function () {
      return new THREE.Line3().copy(this);
    },
  }),
  (THREE.Box2 = function (t, e) {
    (this.min = void 0 !== t ? t : new THREE.Vector2(1 / 0, 1 / 0)),
      (this.max = void 0 !== e ? e : new THREE.Vector2(-1 / 0, -1 / 0));
  }),
  (THREE.Box2.prototype = {
    constructor: THREE.Box2,
    set: function (t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    },
    setFromPoints: function (t) {
      this.makeEmpty();
      for (var e = 0, r = t.length; e < r; e++) this.expandByPoint(t[e]);
      return this;
    },
    setFromCenterAndSize: (function () {
      var r = new THREE.Vector2();
      return function (t, e) {
        e = r.copy(e).multiplyScalar(0.5);
        return this.min.copy(t).sub(e), this.max.copy(t).add(e), this;
      };
    })(),
    copy: function (t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    },
    makeEmpty: function () {
      return (
        (this.min.x = this.min.y = 1 / 0),
        (this.max.x = this.max.y = -1 / 0),
        this
      );
    },
    empty: function () {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    },
    center: function (t) {
      return (t || new THREE.Vector2())
        .addVectors(this.min, this.max)
        .multiplyScalar(0.5);
    },
    size: function (t) {
      return (t || new THREE.Vector2()).subVectors(this.max, this.min);
    },
    expandByPoint: function (t) {
      return this.min.min(t), this.max.max(t), this;
    },
    expandByVector: function (t) {
      return this.min.sub(t), this.max.add(t), this;
    },
    expandByScalar: function (t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    },
    containsPoint: function (t) {
      return !(
        t.x < this.min.x ||
        t.x > this.max.x ||
        t.y < this.min.y ||
        t.y > this.max.y
      );
    },
    containsBox: function (t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y
      );
    },
    getParameter: function (t, e) {
      return (e || new THREE.Vector2()).set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y)
      );
    },
    isIntersectionBox: function (t) {
      return !(
        t.max.x < this.min.x ||
        t.min.x > this.max.x ||
        t.max.y < this.min.y ||
        t.min.y > this.max.y
      );
    },
    clampPoint: function (t, e) {
      return (e || new THREE.Vector2()).copy(t).clamp(this.min, this.max);
    },
    distanceToPoint: (function () {
      var e = new THREE.Vector2();
      return function (t) {
        return e.copy(t).clamp(this.min, this.max).sub(t).length();
      };
    })(),
    intersect: function (t) {
      return this.min.max(t.min), this.max.min(t.max), this;
    },
    union: function (t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    },
    translate: function (t) {
      return this.min.add(t), this.max.add(t), this;
    },
    equals: function (t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    },
    clone: function () {
      return new THREE.Box2().copy(this);
    },
  }),
  (THREE.Box3 = function (t, e) {
    (this.min = void 0 !== t ? t : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0)),
      (this.max = void 0 !== e ? e : new THREE.Vector3(-1 / 0, -1 / 0, -1 / 0));
  }),
  (THREE.Box3.prototype = {
    constructor: THREE.Box3,
    set: function (t, e) {
      return this.min.copy(t), this.max.copy(e), this;
    },
    setFromPoints: function (t) {
      this.makeEmpty();
      for (var e = 0, r = t.length; e < r; e++) this.expandByPoint(t[e]);
      return this;
    },
    setFromCenterAndSize: (function () {
      var r = new THREE.Vector3();
      return function (t, e) {
        e = r.copy(e).multiplyScalar(0.5);
        return this.min.copy(t).sub(e), this.max.copy(t).add(e), this;
      };
    })(),
    setFromObject: (function () {
      var o = new THREE.Vector3();
      return function (t) {
        var n = this;
        return (
          t.updateMatrixWorld(!0),
          this.makeEmpty(),
          t.traverse(function (t) {
            if (void 0 !== (r = t.geometry))
              if (r instanceof THREE.Geometry)
                for (var e = r.vertices, r = 0, i = e.length; r < i; r++)
                  o.copy(e[r]),
                    o.applyMatrix4(t.matrixWorld),
                    n.expandByPoint(o);
              else if (
                r instanceof THREE.BufferGeometry &&
                void 0 !== r.attributes.position
              )
                for (
                  e = r.attributes.position.array, r = 0, i = e.length;
                  r < i;
                  r += 3
                )
                  o.set(e[r], e[r + 1], e[r + 2]),
                    o.applyMatrix4(t.matrixWorld),
                    n.expandByPoint(o);
          }),
          this
        );
      };
    })(),
    copy: function (t) {
      return this.min.copy(t.min), this.max.copy(t.max), this;
    },
    makeEmpty: function () {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    },
    empty: function () {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    },
    center: function (t) {
      return (t || new THREE.Vector3())
        .addVectors(this.min, this.max)
        .multiplyScalar(0.5);
    },
    size: function (t) {
      return (t || new THREE.Vector3()).subVectors(this.max, this.min);
    },
    expandByPoint: function (t) {
      return this.min.min(t), this.max.max(t), this;
    },
    expandByVector: function (t) {
      return this.min.sub(t), this.max.add(t), this;
    },
    expandByScalar: function (t) {
      return this.min.addScalar(-t), this.max.addScalar(t), this;
    },
    containsPoint: function (t) {
      return !(
        t.x < this.min.x ||
        t.x > this.max.x ||
        t.y < this.min.y ||
        t.y > this.max.y ||
        t.z < this.min.z ||
        t.z > this.max.z
      );
    },
    containsBox: function (t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y &&
        this.min.z <= t.min.z &&
        t.max.z <= this.max.z
      );
    },
    getParameter: function (t, e) {
      return (e || new THREE.Vector3()).set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y),
        (t.z - this.min.z) / (this.max.z - this.min.z)
      );
    },
    isIntersectionBox: function (t) {
      return !(
        t.max.x < this.min.x ||
        t.min.x > this.max.x ||
        t.max.y < this.min.y ||
        t.min.y > this.max.y ||
        t.max.z < this.min.z ||
        t.min.z > this.max.z
      );
    },
    clampPoint: function (t, e) {
      return (e || new THREE.Vector3()).copy(t).clamp(this.min, this.max);
    },
    distanceToPoint: (function () {
      var e = new THREE.Vector3();
      return function (t) {
        return e.copy(t).clamp(this.min, this.max).sub(t).length();
      };
    })(),
    getBoundingSphere: (function () {
      var e = new THREE.Vector3();
      return function (t) {
        return (
          ((t = t || new THREE.Sphere()).center = this.center()),
          (t.radius = 0.5 * this.size(e).length()),
          t
        );
      };
    })(),
    intersect: function (t) {
      return this.min.max(t.min), this.max.min(t.max), this;
    },
    union: function (t) {
      return this.min.min(t.min), this.max.max(t.max), this;
    },
    applyMatrix4: (function () {
      var e = [
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ];
      return function (t) {
        return (
          e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
          e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
          e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
          e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
          e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
          e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
          e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
          e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
          this.makeEmpty(),
          this.setFromPoints(e),
          this
        );
      };
    })(),
    translate: function (t) {
      return this.min.add(t), this.max.add(t), this;
    },
    equals: function (t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    },
    clone: function () {
      return new THREE.Box3().copy(this);
    },
  }),
  (THREE.Matrix3 = function () {
    (this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])),
      0 < arguments.length &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }),
  (THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    set: function (t, e, r, i, n, o, a, s, h) {
      var l = this.elements;
      return (
        (l[0] = t),
        (l[3] = e),
        (l[6] = r),
        (l[1] = i),
        (l[4] = n),
        (l[7] = o),
        (l[2] = a),
        (l[5] = s),
        (l[8] = h),
        this
      );
    },
    identity: function () {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    },
    copy: function (t) {
      return (
        (t = t.elements),
        this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]),
        this
      );
    },
    multiplyVector3: function (t) {
      return (
        console.warn(
          "THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."
        ),
        t.applyMatrix3(this)
      );
    },
    multiplyVector3Array: function (t) {
      return (
        console.warn(
          "THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."
        ),
        this.applyToVector3Array(t)
      );
    },
    applyToVector3Array: (function () {
      var n = new THREE.Vector3();
      return function (t, e, r) {
        void 0 === e && (e = 0), void 0 === r && (r = t.length);
        for (var i = 0; i < r; i += 3, e += 3)
          (n.x = t[e]),
            (n.y = t[e + 1]),
            (n.z = t[e + 2]),
            n.applyMatrix3(this),
            (t[e] = n.x),
            (t[e + 1] = n.y),
            (t[e + 2] = n.z);
        return t;
      };
    })(),
    multiplyScalar: function (t) {
      var e = this.elements;
      return (
        (e[0] *= t),
        (e[3] *= t),
        (e[6] *= t),
        (e[1] *= t),
        (e[4] *= t),
        (e[7] *= t),
        (e[2] *= t),
        (e[5] *= t),
        (e[8] *= t),
        this
      );
    },
    determinant: function () {
      var t = this.elements,
        e = t[0],
        r = t[1],
        i = t[2],
        n = t[3],
        o = t[4],
        a = t[5],
        s = t[6],
        h = t[7];
      return (
        e * o * (t = t[8]) -
        e * a * h -
        r * n * t +
        r * a * s +
        i * n * h -
        i * o * s
      );
    },
    getInverse: function (t, e) {
      var r = t.elements,
        t = this.elements;
      if (
        ((t[0] = r[10] * r[5] - r[6] * r[9]),
        (t[1] = -r[10] * r[1] + r[2] * r[9]),
        (t[2] = r[6] * r[1] - r[2] * r[5]),
        (t[3] = -r[10] * r[4] + r[6] * r[8]),
        (t[4] = r[10] * r[0] - r[2] * r[8]),
        (t[5] = -r[6] * r[0] + r[2] * r[4]),
        (t[6] = r[9] * r[4] - r[5] * r[8]),
        (t[7] = -r[9] * r[0] + r[1] * r[8]),
        (t[8] = r[5] * r[0] - r[1] * r[4]),
        0 != (r = r[0] * t[0] + r[1] * t[3] + r[2] * t[6]))
      )
        return this.multiplyScalar(1 / r), this;
      if (e)
        throw Error(
          "Matrix3.getInverse(): can't invert matrix, determinant is 0"
        );
      return (
        console.warn(
          "Matrix3.getInverse(): can't invert matrix, determinant is 0"
        ),
        this.identity(),
        this
      );
    },
    transpose: function () {
      var t = this.elements,
        e = t[1];
      return (
        (t[1] = t[3]),
        (t[3] = e),
        (e = t[2]),
        (t[2] = t[6]),
        (t[6] = e),
        (e = t[5]),
        (t[5] = t[7]),
        (t[7] = e),
        this
      );
    },
    flattenToArrayOffset: function (t, e) {
      var r = this.elements;
      return (
        (t[e] = r[0]),
        (t[e + 1] = r[1]),
        (t[e + 2] = r[2]),
        (t[e + 3] = r[3]),
        (t[e + 4] = r[4]),
        (t[e + 5] = r[5]),
        (t[e + 6] = r[6]),
        (t[e + 7] = r[7]),
        (t[e + 8] = r[8]),
        t
      );
    },
    getNormalMatrix: function (t) {
      return this.getInverse(t).transpose(), this;
    },
    transposeIntoArray: function (t) {
      var e = this.elements;
      return (
        (t[0] = e[0]),
        (t[1] = e[3]),
        (t[2] = e[6]),
        (t[3] = e[1]),
        (t[4] = e[4]),
        (t[5] = e[7]),
        (t[6] = e[2]),
        (t[7] = e[5]),
        (t[8] = e[8]),
        this
      );
    },
    fromArray: function (t) {
      return this.elements.set(t), this;
    },
    toArray: function () {
      var t = this.elements;
      return [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]];
    },
    clone: function () {
      return new THREE.Matrix3().fromArray(this.elements);
    },
  }),
  (THREE.Matrix4 = function () {
    (this.elements = new Float32Array([
      1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
    ])),
      0 < arguments.length &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }),
  (THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function (t, e, r, i, n, o, a, s, h, l, c, u, E, f, d, p) {
      var m = this.elements;
      return (
        (m[0] = t),
        (m[4] = e),
        (m[8] = r),
        (m[12] = i),
        (m[1] = n),
        (m[5] = o),
        (m[9] = a),
        (m[13] = s),
        (m[2] = h),
        (m[6] = l),
        (m[10] = c),
        (m[14] = u),
        (m[3] = E),
        (m[7] = f),
        (m[11] = d),
        (m[15] = p),
        this
      );
    },
    identity: function () {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    },
    copy: function (t) {
      return this.elements.set(t.elements), this;
    },
    extractPosition: function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."
        ),
        this.copyPosition(t)
      );
    },
    copyPosition: function (t) {
      var e = this.elements;
      return (
        (t = t.elements),
        (e[12] = t[12]),
        (e[13] = t[13]),
        (e[14] = t[14]),
        this
      );
    },
    extractRotation: (function () {
      var o = new THREE.Vector3();
      return function (t) {
        var e = this.elements;
        t = t.elements;
        var r = 1 / o.set(t[0], t[1], t[2]).length(),
          i = 1 / o.set(t[4], t[5], t[6]).length(),
          n = 1 / o.set(t[8], t[9], t[10]).length();
        return (
          (e[0] = t[0] * r),
          (e[1] = t[1] * r),
          (e[2] = t[2] * r),
          (e[4] = t[4] * i),
          (e[5] = t[5] * i),
          (e[6] = t[6] * i),
          (e[8] = t[8] * n),
          (e[9] = t[9] * n),
          (e[10] = t[10] * n),
          this
        );
      };
    })(),
    makeRotationFromEuler: function (t) {
      !1 == t instanceof THREE.Euler &&
        console.error(
          "THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
        );
      var e,
        r,
        i,
        n = this.elements,
        o = t.x,
        a = t.y,
        s = t.z,
        h = Math.cos(o),
        o = Math.sin(o),
        l = Math.cos(a),
        a = Math.sin(a),
        c = Math.cos(s),
        s = Math.sin(s);
      return (
        "XYZ" === t.order
          ? ((t = h * c),
            (e = h * s),
            (r = o * c),
            (i = o * s),
            (n[0] = l * c),
            (n[4] = -l * s),
            (n[8] = a),
            (n[1] = e + r * a),
            (n[5] = t - i * a),
            (n[9] = -o * l),
            (n[2] = i - t * a),
            (n[6] = r + e * a),
            (n[10] = h * l))
          : "YXZ" === t.order
          ? ((t = l * c),
            (e = l * s),
            (r = a * c),
            (i = a * s),
            (n[0] = t + i * o),
            (n[4] = r * o - e),
            (n[8] = h * a),
            (n[1] = h * s),
            (n[5] = h * c),
            (n[9] = -o),
            (n[2] = e * o - r),
            (n[6] = i + t * o),
            (n[10] = h * l))
          : "ZXY" === t.order
          ? ((t = l * c),
            (e = l * s),
            (r = a * c),
            (i = a * s),
            (n[0] = t - i * o),
            (n[4] = -h * s),
            (n[8] = r + e * o),
            (n[1] = e + r * o),
            (n[5] = h * c),
            (n[9] = i - t * o),
            (n[2] = -h * a),
            (n[6] = o),
            (n[10] = h * l))
          : "ZYX" === t.order
          ? ((t = h * c),
            (e = h * s),
            (r = o * c),
            (i = o * s),
            (n[0] = l * c),
            (n[4] = r * a - e),
            (n[8] = t * a + i),
            (n[1] = l * s),
            (n[5] = i * a + t),
            (n[9] = e * a - r),
            (n[2] = -a),
            (n[6] = o * l),
            (n[10] = h * l))
          : "YZX" === t.order
          ? ((t = h * l),
            (e = h * a),
            (r = o * l),
            (i = o * a),
            (n[0] = l * c),
            (n[4] = i - t * s),
            (n[8] = r * s + e),
            (n[1] = s),
            (n[5] = h * c),
            (n[9] = -o * c),
            (n[2] = -a * c),
            (n[6] = e * s + r),
            (n[10] = t - i * s))
          : "XZY" === t.order &&
            ((t = h * l),
            (e = h * a),
            (r = o * l),
            (i = o * a),
            (n[0] = l * c),
            (n[4] = -s),
            (n[8] = a * c),
            (n[1] = t * s + i),
            (n[5] = h * c),
            (n[9] = e * s - r),
            (n[2] = r * s - e),
            (n[6] = o * c),
            (n[10] = i * s + t)),
        (n[3] = 0),
        (n[7] = 0),
        (n[11] = 0),
        (n[12] = 0),
        (n[13] = 0),
        (n[14] = 0),
        (n[15] = 1),
        this
      );
    },
    setRotationFromQuaternion: function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."
        ),
        this.makeRotationFromQuaternion(t)
      );
    },
    makeRotationFromQuaternion: function (t) {
      var e = this.elements,
        r = t.x,
        i = t.y,
        n = t.z,
        o = t.w,
        a = n + n;
      t = r * (l = r + r);
      var s = r * (c = i + i),
        r = r * a,
        h = i * c,
        i = i * a,
        n = n * a,
        l = o * l,
        c = o * c,
        o = o * a;
      return (
        (e[0] = 1 - (h + n)),
        (e[4] = s - o),
        (e[8] = r + c),
        (e[1] = s + o),
        (e[5] = 1 - (t + n)),
        (e[9] = i - l),
        (e[2] = r - c),
        (e[6] = i + l),
        (e[10] = 1 - (t + h)),
        (e[3] = 0),
        (e[7] = 0),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        this
      );
    },
    lookAt: (function () {
      var n = new THREE.Vector3(),
        o = new THREE.Vector3(),
        a = new THREE.Vector3();
      return function (t, e, r) {
        var i = this.elements;
        return (
          a.subVectors(t, e).normalize(),
          0 === a.length() && (a.z = 1),
          n.crossVectors(r, a).normalize(),
          0 === n.length() && ((a.x += 1e-4), n.crossVectors(r, a).normalize()),
          o.crossVectors(a, n),
          (i[0] = n.x),
          (i[4] = o.x),
          (i[8] = a.x),
          (i[1] = n.y),
          (i[5] = o.y),
          (i[9] = a.y),
          (i[2] = n.z),
          (i[6] = o.z),
          (i[10] = a.z),
          this
        );
      };
    })(),
    multiply: function (t, e) {
      return void 0 !== e
        ? (console.warn(
            "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
          ),
          this.multiplyMatrices(t, e))
        : this.multiplyMatrices(this, t);
    },
    multiplyMatrices: function (t, e) {
      var r = t.elements,
        i = e.elements,
        n = this.elements,
        o = r[0],
        a = r[4],
        s = r[8],
        h = r[12],
        l = r[1],
        c = r[5],
        u = r[9],
        E = r[13],
        f = r[2],
        d = r[6],
        p = r[10],
        m = r[14],
        g = r[3],
        T = r[7],
        v = r[11],
        r = r[15],
        y = i[0],
        R = i[4],
        x = i[8],
        H = i[12],
        _ = i[1],
        b = i[5],
        w = i[9],
        M = i[13],
        S = i[2],
        C = i[6],
        A = i[10],
        L = i[14],
        P = i[3],
        t = i[7],
        e = i[11],
        i = i[15];
      return (
        (n[0] = o * y + a * _ + s * S + h * P),
        (n[4] = o * R + a * b + s * C + h * t),
        (n[8] = o * x + a * w + s * A + h * e),
        (n[12] = o * H + a * M + s * L + h * i),
        (n[1] = l * y + c * _ + u * S + E * P),
        (n[5] = l * R + c * b + u * C + E * t),
        (n[9] = l * x + c * w + u * A + E * e),
        (n[13] = l * H + c * M + u * L + E * i),
        (n[2] = f * y + d * _ + p * S + m * P),
        (n[6] = f * R + d * b + p * C + m * t),
        (n[10] = f * x + d * w + p * A + m * e),
        (n[14] = f * H + d * M + p * L + m * i),
        (n[3] = g * y + T * _ + v * S + r * P),
        (n[7] = g * R + T * b + v * C + r * t),
        (n[11] = g * x + T * w + v * A + r * e),
        (n[15] = g * H + T * M + v * L + r * i),
        this
      );
    },
    multiplyToArray: function (t, e, r) {
      var i = this.elements;
      return (
        this.multiplyMatrices(t, e),
        (r[0] = i[0]),
        (r[1] = i[1]),
        (r[2] = i[2]),
        (r[3] = i[3]),
        (r[4] = i[4]),
        (r[5] = i[5]),
        (r[6] = i[6]),
        (r[7] = i[7]),
        (r[8] = i[8]),
        (r[9] = i[9]),
        (r[10] = i[10]),
        (r[11] = i[11]),
        (r[12] = i[12]),
        (r[13] = i[13]),
        (r[14] = i[14]),
        (r[15] = i[15]),
        this
      );
    },
    multiplyScalar: function (t) {
      var e = this.elements;
      return (
        (e[0] *= t),
        (e[4] *= t),
        (e[8] *= t),
        (e[12] *= t),
        (e[1] *= t),
        (e[5] *= t),
        (e[9] *= t),
        (e[13] *= t),
        (e[2] *= t),
        (e[6] *= t),
        (e[10] *= t),
        (e[14] *= t),
        (e[3] *= t),
        (e[7] *= t),
        (e[11] *= t),
        (e[15] *= t),
        this
      );
    },
    multiplyVector3: function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."
        ),
        t.applyProjection(this)
      );
    },
    multiplyVector4: function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."
        ),
        t.applyMatrix4(this)
      );
    },
    multiplyVector3Array: function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."
        ),
        this.applyToVector3Array(t)
      );
    },
    applyToVector3Array: (function () {
      var n = new THREE.Vector3();
      return function (t, e, r) {
        void 0 === e && (e = 0), void 0 === r && (r = t.length);
        for (var i = 0; i < r; i += 3, e += 3)
          (n.x = t[e]),
            (n.y = t[e + 1]),
            (n.z = t[e + 2]),
            n.applyMatrix4(this),
            (t[e] = n.x),
            (t[e + 1] = n.y),
            (t[e + 2] = n.z);
        return t;
      };
    })(),
    rotateAxis: function (t) {
      console.warn(
        "THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."
      ),
        t.transformDirection(this);
    },
    crossVector: function (t) {
      return (
        console.warn(
          "THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."
        ),
        t.applyMatrix4(this)
      );
    },
    determinant: function () {
      var t = this.elements,
        e = t[0],
        r = t[4],
        i = t[8],
        n = t[12],
        o = t[1],
        a = t[5],
        s = t[9],
        h = t[13],
        l = t[2],
        c = t[6],
        u = t[10],
        E = t[14];
      return (
        t[3] *
          (+n * s * c -
            i * h * c -
            n * a * u +
            r * h * u +
            i * a * E -
            r * s * E) +
        t[7] *
          (+e * s * E -
            e * h * u +
            n * o * u -
            i * o * E +
            i * h * l -
            n * s * l) +
        t[11] *
          (+e * h * c -
            e * a * E -
            n * o * c +
            r * o * E +
            n * a * l -
            r * h * l) +
        t[15] *
          (-i * a * l -
            e * s * c +
            e * a * u +
            i * o * c -
            r * o * u +
            r * s * l)
      );
    },
    transpose: function () {
      var t = this.elements,
        e = t[1];
      return (
        (t[1] = t[4]),
        (t[4] = e),
        (e = t[2]),
        (t[2] = t[8]),
        (t[8] = e),
        (e = t[6]),
        (t[6] = t[9]),
        (t[9] = e),
        (e = t[3]),
        (t[3] = t[12]),
        (t[12] = e),
        (e = t[7]),
        (t[7] = t[13]),
        (t[13] = e),
        (e = t[11]),
        (t[11] = t[14]),
        (t[14] = e),
        this
      );
    },
    flattenToArrayOffset: function (t, e) {
      var r = this.elements;
      return (
        (t[e] = r[0]),
        (t[e + 1] = r[1]),
        (t[e + 2] = r[2]),
        (t[e + 3] = r[3]),
        (t[e + 4] = r[4]),
        (t[e + 5] = r[5]),
        (t[e + 6] = r[6]),
        (t[e + 7] = r[7]),
        (t[e + 8] = r[8]),
        (t[e + 9] = r[9]),
        (t[e + 10] = r[10]),
        (t[e + 11] = r[11]),
        (t[e + 12] = r[12]),
        (t[e + 13] = r[13]),
        (t[e + 14] = r[14]),
        (t[e + 15] = r[15]),
        t
      );
    },
    getPosition: (function () {
      var e = new THREE.Vector3();
      return function () {
        console.warn(
          "THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."
        );
        var t = this.elements;
        return e.set(t[12], t[13], t[14]);
      };
    })(),
    setPosition: function (t) {
      var e = this.elements;
      return (e[12] = t.x), (e[13] = t.y), (e[14] = t.z), this;
    },
    getInverse: function (t, e) {
      var r = this.elements,
        i = (g = t.elements)[0],
        n = g[4],
        o = g[8],
        a = g[12],
        s = g[1],
        h = g[5],
        l = g[9],
        c = g[13],
        u = g[2],
        E = g[6],
        f = g[10],
        d = g[14],
        p = g[3],
        m = g[7],
        t = g[11],
        g = g[15];
      if (
        ((r[0] =
          l * d * m -
          c * f * m +
          c * E * t -
          h * d * t -
          l * E * g +
          h * f * g),
        (r[4] =
          a * f * m -
          o * d * m -
          a * E * t +
          n * d * t +
          o * E * g -
          n * f * g),
        (r[8] =
          o * c * m -
          a * l * m +
          a * h * t -
          n * c * t -
          o * h * g +
          n * l * g),
        (r[12] =
          a * l * E -
          o * c * E -
          a * h * f +
          n * c * f +
          o * h * d -
          n * l * d),
        (r[1] =
          c * f * p -
          l * d * p -
          c * u * t +
          s * d * t +
          l * u * g -
          s * f * g),
        (r[5] =
          o * d * p -
          a * f * p +
          a * u * t -
          i * d * t -
          o * u * g +
          i * f * g),
        (r[9] =
          a * l * p -
          o * c * p -
          a * s * t +
          i * c * t +
          o * s * g -
          i * l * g),
        (r[13] =
          o * c * u -
          a * l * u +
          a * s * f -
          i * c * f -
          o * s * d +
          i * l * d),
        (r[2] =
          h * d * p -
          c * E * p +
          c * u * m -
          s * d * m -
          h * u * g +
          s * E * g),
        (r[6] =
          a * E * p -
          n * d * p -
          a * u * m +
          i * d * m +
          n * u * g -
          i * E * g),
        (r[10] =
          n * c * p -
          a * h * p +
          a * s * m -
          i * c * m -
          n * s * g +
          i * h * g),
        (r[14] =
          a * h * u -
          n * c * u -
          a * s * E +
          i * c * E +
          n * s * d -
          i * h * d),
        (r[3] =
          l * E * p -
          h * f * p -
          l * u * m +
          s * f * m +
          h * u * t -
          s * E * t),
        (r[7] =
          n * f * p -
          o * E * p +
          o * u * m -
          i * f * m -
          n * u * t +
          i * E * t),
        (r[11] =
          o * h * p -
          n * l * p -
          o * s * m +
          i * l * m +
          n * s * t -
          i * h * t),
        (r[15] =
          n * l * u -
          o * h * u +
          o * s * E -
          i * l * E -
          n * s * f +
          i * h * f),
        0 != (r = i * r[0] + s * r[4] + u * r[8] + p * r[12]))
      )
        return this.multiplyScalar(1 / r), this;
      if (e)
        throw Error(
          "Matrix4.getInverse(): can't invert matrix, determinant is 0"
        );
      return (
        console.warn(
          "Matrix4.getInverse(): can't invert matrix, determinant is 0"
        ),
        this.identity(),
        this
      );
    },
    translate: function (t) {
      console.warn("THREE.Matrix4: .translate() has been removed.");
    },
    rotateX: function (t) {
      console.warn("THREE.Matrix4: .rotateX() has been removed.");
    },
    rotateY: function (t) {
      console.warn("THREE.Matrix4: .rotateY() has been removed.");
    },
    rotateZ: function (t) {
      console.warn("THREE.Matrix4: .rotateZ() has been removed.");
    },
    rotateByAxis: function (t, e) {
      console.warn("THREE.Matrix4: .rotateByAxis() has been removed.");
    },
    scale: function (t) {
      var e = this.elements,
        r = t.x,
        i = t.y;
      return (
        (t = t.z),
        (e[0] *= r),
        (e[4] *= i),
        (e[8] *= t),
        (e[1] *= r),
        (e[5] *= i),
        (e[9] *= t),
        (e[2] *= r),
        (e[6] *= i),
        (e[10] *= t),
        (e[3] *= r),
        (e[7] *= i),
        (e[11] *= t),
        this
      );
    },
    getMaxScaleOnAxis: function () {
      var t = this.elements;
      return Math.sqrt(
        Math.max(
          t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
          Math.max(
            t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
            t[8] * t[8] + t[9] * t[9] + t[10] * t[10]
          )
        )
      );
    },
    makeTranslation: function (t, e, r) {
      return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, r, 0, 0, 0, 1), this;
    },
    makeRotationX: function (t) {
      var e = Math.cos(t);
      return (
        (t = Math.sin(t)),
        this.set(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1),
        this
      );
    },
    makeRotationY: function (t) {
      var e = Math.cos(t);
      return (
        (t = Math.sin(t)),
        this.set(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1),
        this
      );
    },
    makeRotationZ: function (t) {
      var e = Math.cos(t);
      return (
        (t = Math.sin(t)),
        this.set(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
      );
    },
    makeRotationAxis: function (t, e) {
      var r = Math.cos(e),
        i = Math.sin(e),
        n = 1 - r,
        o = t.x,
        a = t.y,
        s = t.z,
        e = n * o,
        t = n * a;
      return (
        this.set(
          e * o + r,
          e * a - i * s,
          e * s + i * a,
          0,
          e * a + i * s,
          t * a + r,
          t * s - i * o,
          0,
          e * s - i * a,
          t * s + i * o,
          n * s * s + r,
          0,
          0,
          0,
          0,
          1
        ),
        this
      );
    },
    makeScale: function (t, e, r) {
      return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this;
    },
    compose: function (t, e, r) {
      return (
        this.makeRotationFromQuaternion(e),
        this.scale(r),
        this.setPosition(t),
        this
      );
    },
    decompose: (function () {
      var h = new THREE.Vector3(),
        l = new THREE.Matrix4();
      return function (t, e, r) {
        var i = this.elements,
          n = h.set(i[0], i[1], i[2]).length(),
          o = h.set(i[4], i[5], i[6]).length(),
          a = h.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (n = -n),
          (t.x = i[12]),
          (t.y = i[13]),
          (t.z = i[14]),
          l.elements.set(this.elements),
          (t = 1 / n);
        var i = 1 / o,
          s = 1 / a;
        return (
          (l.elements[0] *= t),
          (l.elements[1] *= t),
          (l.elements[2] *= t),
          (l.elements[4] *= i),
          (l.elements[5] *= i),
          (l.elements[6] *= i),
          (l.elements[8] *= s),
          (l.elements[9] *= s),
          (l.elements[10] *= s),
          e.setFromRotationMatrix(l),
          (r.x = n),
          (r.y = o),
          (r.z = a),
          this
        );
      };
    })(),
    makeFrustum: function (t, e, r, i, n, o) {
      var a = this.elements;
      return (
        (a[0] = (2 * n) / (e - t)),
        (a[4] = 0),
        (a[8] = (e + t) / (e - t)),
        (a[12] = 0),
        (a[1] = 0),
        (a[5] = (2 * n) / (i - r)),
        (a[9] = (i + r) / (i - r)),
        (a[13] = 0),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = -(o + n) / (o - n)),
        (a[14] = (-2 * o * n) / (o - n)),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = -1),
        (a[15] = 0),
        this
      );
    },
    makePerspective: function (t, e, r, i) {
      var n = -(t = r * Math.tan(THREE.Math.degToRad(0.5 * t)));
      return this.makeFrustum(n * e, t * e, n, t, r, i);
    },
    makeOrthographic: function (t, e, r, i, n, o) {
      var a = this.elements,
        s = e - t,
        h = r - i,
        l = o - n;
      return (
        (a[0] = 2 / s),
        (a[4] = 0),
        (a[8] = 0),
        (a[12] = -(e + t) / s),
        (a[1] = 0),
        (a[5] = 2 / h),
        (a[9] = 0),
        (a[13] = -(r + i) / h),
        (a[2] = 0),
        (a[6] = 0),
        (a[10] = -2 / l),
        (a[14] = -(o + n) / l),
        (a[3] = 0),
        (a[7] = 0),
        (a[11] = 0),
        (a[15] = 1),
        this
      );
    },
    fromArray: function (t) {
      return this.elements.set(t), this;
    },
    toArray: function () {
      var t = this.elements;
      return [
        t[0],
        t[1],
        t[2],
        t[3],
        t[4],
        t[5],
        t[6],
        t[7],
        t[8],
        t[9],
        t[10],
        t[11],
        t[12],
        t[13],
        t[14],
        t[15],
      ];
    },
    clone: function () {
      return new THREE.Matrix4().fromArray(this.elements);
    },
  }),
  (THREE.Ray = function (t, e) {
    (this.origin = void 0 !== t ? t : new THREE.Vector3()),
      (this.direction = void 0 !== e ? e : new THREE.Vector3());
  }),
  (THREE.Ray.prototype = {
    constructor: THREE.Ray,
    set: function (t, e) {
      return this.origin.copy(t), this.direction.copy(e), this;
    },
    copy: function (t) {
      return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
    },
    at: function (t, e) {
      return (e || new THREE.Vector3())
        .copy(this.direction)
        .multiplyScalar(t)
        .add(this.origin);
    },
    recast: (function () {
      var e = new THREE.Vector3();
      return function (t) {
        return this.origin.copy(this.at(t, e)), this;
      };
    })(),
    closestPointToPoint: function (t, e) {
      e = e || new THREE.Vector3();
      e.subVectors(t, this.origin);
      t = e.dot(this.direction);
      return t < 0
        ? e.copy(this.origin)
        : e.copy(this.direction).multiplyScalar(t).add(this.origin);
    },
    distanceToPoint: (function () {
      var r = new THREE.Vector3();
      return function (t) {
        var e = r.subVectors(t, this.origin).dot(this.direction);
        return e < 0
          ? this.origin.distanceTo(t)
          : (r.copy(this.direction).multiplyScalar(e).add(this.origin),
            r.distanceTo(t));
      };
    })(),
    distanceSqToSegment: function (t, e, r, i) {
      var n = t.clone().add(e).multiplyScalar(0.5),
        o = e.clone().sub(t).normalize(),
        a = 0.5 * t.distanceTo(e),
        s = this.origin.clone().sub(n);
      (t = -this.direction.dot(o)), (e = s.dot(this.direction));
      var h,
        l,
        c = -s.dot(o),
        u = s.lengthSq(),
        E = Math.abs(1 - t * t);
      return (
        (t =
          0 <= E
            ? ((h = t * e - c),
              (l = a * E),
              0 <= (s = t * c - e)
                ? -l <= h
                  ? h <= l
                    ? (s *= a = 1 / E) * (s + t * (h *= a) + 2 * e) +
                      h * (t * s + h + 2 * c) +
                      u
                    : ((h = a),
                      -(s = Math.max(0, -(t * h + e))) * s +
                        h * (h + 2 * c) +
                        u)
                  : ((h = -a),
                    -(s = Math.max(0, -(t * h + e))) * s + h * (h + 2 * c) + u)
                : h <= -l
                ? -(s = Math.max(0, -(-t * a + e))) * s +
                  (h = 0 < s ? -a : Math.min(Math.max(-a, -c), a)) *
                    (h + 2 * c) +
                  u
                : h <= l
                ? ((s = 0),
                  (h = Math.min(Math.max(-a, -c), a)) * (h + 2 * c) + u)
                : -(s = Math.max(0, -(t * a + e))) * s +
                  (h = 0 < s ? a : Math.min(Math.max(-a, -c), a)) *
                    (h + 2 * c) +
                  u)
            : ((h = 0 < t ? -a : a),
              -(s = Math.max(0, -(t * h + e))) * s + h * (h + 2 * c) + u)),
        r && r.copy(this.direction.clone().multiplyScalar(s).add(this.origin)),
        i && i.copy(o.clone().multiplyScalar(h).add(n)),
        t
      );
    },
    isIntersectionSphere: function (t) {
      return this.distanceToPoint(t.center) <= t.radius;
    },
    intersectSphere: (function () {
      var n = new THREE.Vector3();
      return function (t, e) {
        n.subVectors(t.center, this.origin);
        var r = n.dot(this.direction),
          i = n.dot(n) - r * r,
          t = t.radius * t.radius;
        return t < i
          ? null
          : ((i = r - (t = Math.sqrt(t - i))),
            (r += t),
            i < 0 && r < 0 ? null : i < 0 ? this.at(r, e) : this.at(i, e));
      };
    })(),
    isIntersectionPlane: function (t) {
      var e = t.distanceToPoint(this.origin);
      return 0 === e || t.normal.dot(this.direction) * e < 0;
    },
    distanceToPlane: function (t) {
      var e = t.normal.dot(this.direction);
      return 0 == e
        ? 0 == t.distanceToPoint(this.origin)
          ? 0
          : null
        : 0 <= (t = -(this.origin.dot(t.normal) + t.constant) / e)
        ? t
        : null;
    },
    intersectPlane: function (t, e) {
      t = this.distanceToPlane(t);
      return null === t ? null : this.at(t, e);
    },
    isIntersectionBox: (function () {
      var e = new THREE.Vector3();
      return function (t) {
        return null !== this.intersectBox(t, e);
      };
    })(),
    intersectBox: function (t, e) {
      var r,
        i,
        n = 1 / this.direction.x,
        o = 1 / this.direction.y,
        a = 1 / this.direction.z,
        s = this.origin;
      return (
        0 <= n
          ? ((r = (t.min.x - s.x) * n), (n *= t.max.x - s.x))
          : ((r = (t.max.x - s.x) * n), (n *= t.min.x - s.x)),
        0 <= o
          ? ((i = (t.min.y - s.y) * o), (o *= t.max.y - s.y))
          : ((i = (t.max.y - s.y) * o), (o *= t.min.y - s.y)),
        o < r || n < i
          ? null
          : ((r < i || r != r) && (r = i),
            (o < n || n != n) && (n = o),
            0 <= a
              ? ((i = (t.min.z - s.z) * a), (a *= t.max.z - s.z))
              : ((i = (t.max.z - s.z) * a), (a *= t.min.z - s.z)),
            a < r || n < i
              ? null
              : ((r < i || r != r) && (r = i),
                (a < n || n != n) && (n = a),
                n < 0 ? null : this.at(0 <= r ? r : n, e)))
      );
    },
    intersectTriangle: (function () {
      var o = new THREE.Vector3(),
        a = new THREE.Vector3(),
        s = new THREE.Vector3(),
        h = new THREE.Vector3();
      return function (t, e, r, i, n) {
        if (
          (a.subVectors(e, t),
          s.subVectors(r, t),
          h.crossVectors(a, s),
          0 < (e = this.direction.dot(h)))
        ) {
          if (i) return null;
          i = 1;
        } else {
          if (!(e < 0)) return null;
          (i = -1), (e = -e);
        }
        return (
          o.subVectors(this.origin, t),
          (t = i * this.direction.dot(s.crossVectors(o, s))) < 0 ||
          (r = i * this.direction.dot(a.cross(o))) < 0 ||
          e < t + r ||
          (t = -i * o.dot(h)) < 0
            ? null
            : this.at(t / e, n)
        );
      };
    })(),
    applyMatrix4: function (t) {
      return (
        this.direction.add(this.origin).applyMatrix4(t),
        this.origin.applyMatrix4(t),
        this.direction.sub(this.origin),
        this.direction.normalize(),
        this
      );
    },
    equals: function (t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    },
    clone: function () {
      return new THREE.Ray().copy(this);
    },
  }),
  (THREE.Sphere = function (t, e) {
    (this.center = void 0 !== t ? t : new THREE.Vector3()),
      (this.radius = void 0 !== e ? e : 0);
  }),
  (THREE.Sphere.prototype = {
    constructor: THREE.Sphere,
    set: function (t, e) {
      return this.center.copy(t), (this.radius = e), this;
    },
    setFromPoints: (function () {
      var a = new THREE.Box3();
      return function (t, e) {
        var r = this.center;
        void 0 !== e ? r.copy(e) : a.setFromPoints(t).center(r);
        for (var i = 0, n = 0, o = t.length; n < o; n++)
          i = Math.max(i, r.distanceToSquared(t[n]));
        return (this.radius = Math.sqrt(i)), this;
      };
    })(),
    copy: function (t) {
      return this.center.copy(t.center), (this.radius = t.radius), this;
    },
    empty: function () {
      return this.radius <= 0;
    },
    containsPoint: function (t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    },
    distanceToPoint: function (t) {
      return t.distanceTo(this.center) - this.radius;
    },
    intersectsSphere: function (t) {
      var e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    },
    clampPoint: function (t, e) {
      var r = this.center.distanceToSquared(t),
        e = e || new THREE.Vector3();
      return (
        e.copy(t),
        r > this.radius * this.radius &&
          (e.sub(this.center).normalize(),
          e.multiplyScalar(this.radius).add(this.center)),
        e
      );
    },
    getBoundingBox: function (t) {
      return (
        (t = t || new THREE.Box3()).set(this.center, this.center),
        t.expandByScalar(this.radius),
        t
      );
    },
    applyMatrix4: function (t) {
      return (
        this.center.applyMatrix4(t),
        (this.radius *= t.getMaxScaleOnAxis()),
        this
      );
    },
    translate: function (t) {
      return this.center.add(t), this;
    },
    equals: function (t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    },
    clone: function () {
      return new THREE.Sphere().copy(this);
    },
  }),
  (THREE.Frustum = function (t, e, r, i, n, o) {
    this.planes = [
      void 0 !== t ? t : new THREE.Plane(),
      void 0 !== e ? e : new THREE.Plane(),
      void 0 !== r ? r : new THREE.Plane(),
      void 0 !== i ? i : new THREE.Plane(),
      void 0 !== n ? n : new THREE.Plane(),
      void 0 !== o ? o : new THREE.Plane(),
    ];
  }),
  (THREE.Frustum.prototype = {
    constructor: THREE.Frustum,
    set: function (t, e, r, i, n, o) {
      var a = this.planes;
      return (
        a[0].copy(t),
        a[1].copy(e),
        a[2].copy(r),
        a[3].copy(i),
        a[4].copy(n),
        a[5].copy(o),
        this
      );
    },
    copy: function (t) {
      for (var e = this.planes, r = 0; r < 6; r++) e[r].copy(t.planes[r]);
      return this;
    },
    setFromMatrix: function (t) {
      var e = this.planes;
      t = (m = t.elements)[0];
      var r = m[1],
        i = m[2],
        n = m[3],
        o = m[4],
        a = m[5],
        s = m[6],
        h = m[7],
        l = m[8],
        c = m[9],
        u = m[10],
        E = m[11],
        f = m[12],
        d = m[13],
        p = m[14],
        m = m[15];
      return (
        e[0].setComponents(n - t, h - o, E - l, m - f).normalize(),
        e[1].setComponents(n + t, h + o, E + l, m + f).normalize(),
        e[2].setComponents(n + r, h + a, E + c, m + d).normalize(),
        e[3].setComponents(n - r, h - a, E - c, m - d).normalize(),
        e[4].setComponents(n - i, h - s, E - u, m - p).normalize(),
        e[5].setComponents(n + i, h + s, E + u, m + p).normalize(),
        this
      );
    },
    intersectsObject: (function () {
      var r = new THREE.Sphere();
      return function (t) {
        var e = t.geometry;
        return (
          null === e.boundingSphere && e.computeBoundingSphere(),
          r.copy(e.boundingSphere),
          r.applyMatrix4(t.matrixWorld),
          this.intersectsSphere(r)
        );
      };
    })(),
    intersectsSphere: function (t) {
      var e = this.planes,
        r = t.center;
      t = -t.radius;
      for (var i = 0; i < 6; i++) if (e[i].distanceToPoint(r) < t) return !1;
      return !0;
    },
    intersectsBox: (function () {
      var o = new THREE.Vector3(),
        a = new THREE.Vector3();
      return function (t) {
        for (var e = this.planes, r = 0; r < 6; r++) {
          var i = e[r];
          (o.x = (0 < i.normal.x ? t.min : t.max).x),
            (a.x = (0 < i.normal.x ? t.max : t.min).x),
            (o.y = (0 < i.normal.y ? t.min : t.max).y),
            (a.y = (0 < i.normal.y ? t.max : t.min).y),
            (o.z = (0 < i.normal.z ? t.min : t.max).z),
            (a.z = (0 < i.normal.z ? t.max : t.min).z);
          var n = i.distanceToPoint(o),
            i = i.distanceToPoint(a);
          if (n < 0 && i < 0) return !1;
        }
        return !0;
      };
    })(),
    containsPoint: function (t) {
      for (var e = this.planes, r = 0; r < 6; r++)
        if (e[r].distanceToPoint(t) < 0) return !1;
      return !0;
    },
    clone: function () {
      return new THREE.Frustum().copy(this);
    },
  }),
  (THREE.Plane = function (t, e) {
    (this.normal = void 0 !== t ? t : new THREE.Vector3(1, 0, 0)),
      (this.constant = void 0 !== e ? e : 0);
  }),
  (THREE.Plane.prototype = {
    constructor: THREE.Plane,
    set: function (t, e) {
      return this.normal.copy(t), (this.constant = e), this;
    },
    setComponents: function (t, e, r, i) {
      return this.normal.set(t, e, r), (this.constant = i), this;
    },
    setFromNormalAndCoplanarPoint: function (t, e) {
      return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
    },
    setFromCoplanarPoints: (function () {
      var i = new THREE.Vector3(),
        n = new THREE.Vector3();
      return function (t, e, r) {
        return (
          (e = i.subVectors(r, e).cross(n.subVectors(t, e)).normalize()),
          this.setFromNormalAndCoplanarPoint(e, t),
          this
        );
      };
    })(),
    copy: function (t) {
      return this.normal.copy(t.normal), (this.constant = t.constant), this;
    },
    normalize: function () {
      var t = 1 / this.normal.length();
      return this.normal.multiplyScalar(t), (this.constant *= t), this;
    },
    negate: function () {
      return (this.constant *= -1), this.normal.negate(), this;
    },
    distanceToPoint: function (t) {
      return this.normal.dot(t) + this.constant;
    },
    distanceToSphere: function (t) {
      return this.distanceToPoint(t.center) - t.radius;
    },
    projectPoint: function (t, e) {
      return this.orthoPoint(t, e).sub(t).negate();
    },
    orthoPoint: function (t, e) {
      t = this.distanceToPoint(t);
      return (e || new THREE.Vector3()).copy(this.normal).multiplyScalar(t);
    },
    isIntersectionLine: function (t) {
      var e = this.distanceToPoint(t.start);
      return (
        (t = this.distanceToPoint(t.end)), (e < 0 && 0 < t) || (t < 0 && 0 < e)
      );
    },
    intersectLine: (function () {
      var n = new THREE.Vector3();
      return function (t, e) {
        var r = e || new THREE.Vector3(),
          i = t.delta(n),
          e = this.normal.dot(i);
        return 0 != e
          ? (e = -(t.start.dot(this.normal) + this.constant) / e) < 0 || 1 < e
            ? void 0
            : r.copy(i).multiplyScalar(e).add(t.start)
          : 0 == this.distanceToPoint(t.start)
          ? r.copy(t.start)
          : void 0;
      };
    })(),
    coplanarPoint: function (t) {
      return (t || new THREE.Vector3())
        .copy(this.normal)
        .multiplyScalar(-this.constant);
    },
    applyMatrix4: (function () {
      var i = new THREE.Vector3(),
        n = new THREE.Vector3(),
        o = new THREE.Matrix3();
      return function (t, e) {
        var r = e || o.getNormalMatrix(t),
          r = i.copy(this.normal).applyMatrix3(r),
          e = this.coplanarPoint(n);
        return (
          e.applyMatrix4(t), this.setFromNormalAndCoplanarPoint(r, e), this
        );
      };
    })(),
    translate: function (t) {
      return (this.constant -= t.dot(this.normal)), this;
    },
    equals: function (t) {
      return t.normal.equals(this.normal) && t.constant == this.constant;
    },
    clone: function () {
      return new THREE.Plane().copy(this);
    },
  }),
  (THREE.Math = {
    generateUUID: (function () {
      var e,
        r =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
            ""
          ),
        i = Array(36),
        n = 0;
      return function () {
        for (var t = 0; t < 36; t++)
          8 == t || 13 == t || 18 == t || 23 == t
            ? (i[t] = "-")
            : 14 == t
            ? (i[t] = "4")
            : (n <= 2 && (n = (33554432 + 16777216 * Math.random()) | 0),
              (e = 15 & n),
              (n >>= 4),
              (i[t] = r[19 == t ? (3 & e) | 8 : e]));
        return i.join("");
      };
    })(),
    clamp: function (t, e, r) {
      return t < e ? e : r < t ? r : t;
    },
    clampBottom: function (t, e) {
      return t < e ? e : t;
    },
    mapLinear: function (t, e, r, i, n) {
      return i + ((t - e) * (n - i)) / (r - e);
    },
    smoothstep: function (t, e, r) {
      return t <= e
        ? 0
        : r <= t
        ? 1
        : (t = (t - e) / (r - e)) * t * (3 - 2 * t);
    },
    smootherstep: function (t, e, r) {
      return t <= e
        ? 0
        : r <= t
        ? 1
        : (t = (t - e) / (r - e)) * t * t * (t * (6 * t - 15) + 10);
    },
    random16: function () {
      return (65280 * Math.random() + 255 * Math.random()) / 65535;
    },
    randInt: function (t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    },
    randFloat: function (t, e) {
      return t + Math.random() * (e - t);
    },
    randFloatSpread: function (t) {
      return t * (0.5 - Math.random());
    },
    degToRad: (function () {
      var e = Math.PI / 180;
      return function (t) {
        return t * e;
      };
    })(),
    radToDeg: (function () {
      var e = 180 / Math.PI;
      return function (t) {
        return t * e;
      };
    })(),
    isPowerOfTwo: function (t) {
      return 0 == (t & (t - 1)) && 0 !== t;
    },
  }),
  (THREE.Spline = function (t) {
    function e(t, e, r, i, n, o, a) {
      return (
        (2 * (e - r) + (t = 0.5 * (r - t)) + (i = 0.5 * (i - e))) * a +
        (-3 * (e - r) - 2 * t - i) * o +
        t * n +
        e
      );
    }
    this.points = t;
    var r,
      i,
      n,
      o,
      a,
      s,
      h,
      l = [],
      c = { x: 0, y: 0, z: 0 };
    (this.initFromArray = function (t) {
      this.points = [];
      for (var e = 0; e < t.length; e++)
        this.points[e] = { x: t[e][0], y: t[e][1], z: t[e][2] };
    }),
      (this.getPoint = function (t) {
        return (
          (i = (this.points.length - 1) * t),
          (n = Math.floor(i)),
          (r = i - n),
          (l[0] = 0 === n ? n : n - 1),
          (l[1] = n),
          (l[2] = n > this.points.length - 2 ? this.points.length - 1 : n + 1),
          (l[3] = n > this.points.length - 3 ? this.points.length - 1 : n + 2),
          (o = this.points[l[0]]),
          (a = this.points[l[1]]),
          (s = this.points[l[2]]),
          (h = this.points[l[3]]),
          (n = r * (i = r * r)),
          (c.x = e(o.x, a.x, s.x, h.x, r, i, n)),
          (c.y = e(o.y, a.y, s.y, h.y, r, i, n)),
          (c.z = e(o.z, a.z, s.z, h.z, r, i, n)),
          c
        );
      }),
      (this.getControlPointsArray = function () {
        for (var t, e = this.points.length, r = [], i = 0; i < e; i++)
          (t = this.points[i]), (r[i] = [t.x, t.y, t.z]);
        return r;
      }),
      (this.getLength = function (t) {
        var e,
          r,
          i,
          n = (e = 0),
          o = new THREE.Vector3(),
          a = new THREE.Vector3(),
          s = [],
          h = 0;
        for (
          s[0] = 0,
            t = t || 100,
            r = this.points.length * t,
            o.copy(this.points[0]),
            t = 1;
          t < r;
          t++
        )
          (e = t / r),
            (i = this.getPoint(e)),
            a.copy(i),
            (h += a.distanceTo(o)),
            o.copy(i),
            (e *= this.points.length - 1),
            (e = Math.floor(e)) != n && ((s[e] = h), (n = e));
        return (s[s.length] = h), { chunks: s, total: h };
      }),
      (this.reparametrizeByArcLength = function (t) {
        var e,
          r,
          i,
          n,
          o,
          a,
          s = [],
          h = new THREE.Vector3(),
          l = this.getLength();
        for (
          s.push(h.copy(this.points[0]).clone()), e = 1;
          e < this.points.length;
          e++
        ) {
          for (
            r = l.chunks[e] - l.chunks[e - 1],
              a = Math.ceil((t * r) / l.total),
              n = (e - 1) / (this.points.length - 1),
              o = e / (this.points.length - 1),
              r = 1;
            r < a - 1;
            r++
          )
            (i = n + (1 / a) * r * (o - n)),
              (i = this.getPoint(i)),
              s.push(h.copy(i).clone());
          s.push(h.copy(this.points[e]).clone());
        }
        this.points = s;
      });
  }),
  (THREE.Triangle = function (t, e, r) {
    (this.a = void 0 !== t ? t : new THREE.Vector3()),
      (this.b = void 0 !== e ? e : new THREE.Vector3()),
      (this.c = void 0 !== r ? r : new THREE.Vector3());
  }),
  (THREE.Triangle.normal = (function () {
    var n = new THREE.Vector3();
    return function (t, e, r, i) {
      return (
        (i = i || new THREE.Vector3()).subVectors(r, e),
        n.subVectors(t, e),
        i.cross(n),
        0 < (t = i.lengthSq())
          ? i.multiplyScalar(1 / Math.sqrt(t))
          : i.set(0, 0, 0)
      );
    };
  })()),
  (THREE.Triangle.barycoordFromPoint = (function () {
    var s = new THREE.Vector3(),
      h = new THREE.Vector3(),
      l = new THREE.Vector3();
    return function (t, e, r, i, n) {
      s.subVectors(i, e),
        h.subVectors(r, e),
        l.subVectors(t, e),
        (t = s.dot(s)),
        (e = s.dot(h)),
        (r = s.dot(l));
      var o = h.dot(h);
      i = h.dot(l);
      var a = t * o - e * e;
      return (
        (n = n || new THREE.Vector3()),
        0 == a
          ? n.set(-2, -1, -1)
          : ((o = (o * r - e * i) * (a = 1 / a)),
            (t = (t * i - e * r) * a),
            n.set(1 - o - t, t, o))
      );
    };
  })()),
  (THREE.Triangle.containsPoint = (function () {
    var n = new THREE.Vector3();
    return function (t, e, r, i) {
      return (
        0 <= (t = THREE.Triangle.barycoordFromPoint(t, e, r, i, n)).x &&
        0 <= t.y &&
        t.x + t.y <= 1
      );
    };
  })()),
  (THREE.Triangle.prototype = {
    constructor: THREE.Triangle,
    set: function (t, e, r) {
      return this.a.copy(t), this.b.copy(e), this.c.copy(r), this;
    },
    setFromPointsAndIndices: function (t, e, r, i) {
      return this.a.copy(t[e]), this.b.copy(t[r]), this.c.copy(t[i]), this;
    },
    copy: function (t) {
      return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
    },
    area: (function () {
      var t = new THREE.Vector3(),
        e = new THREE.Vector3();
      return function () {
        return (
          t.subVectors(this.c, this.b),
          e.subVectors(this.a, this.b),
          0.5 * t.cross(e).length()
        );
      };
    })(),
    midpoint: function (t) {
      return (t || new THREE.Vector3())
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    },
    normal: function (t) {
      return THREE.Triangle.normal(this.a, this.b, this.c, t);
    },
    plane: function (t) {
      return (t || new THREE.Plane()).setFromCoplanarPoints(
        this.a,
        this.b,
        this.c
      );
    },
    barycoordFromPoint: function (t, e) {
      return THREE.Triangle.barycoordFromPoint(t, this.a, this.b, this.c, e);
    },
    containsPoint: function (t) {
      return THREE.Triangle.containsPoint(t, this.a, this.b, this.c);
    },
    equals: function (t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    },
    clone: function () {
      return new THREE.Triangle().copy(this);
    },
  }),
  (THREE.Clock = function (t) {
    (this.autoStart = void 0 === t || t),
      (this.elapsedTime = this.oldTime = this.startTime = 0),
      (this.running = !1);
  }),
  (THREE.Clock.prototype = {
    constructor: THREE.Clock,
    start: function () {
      (this.oldTime = this.startTime =
        (
          void 0 !== self.performance && void 0 !== self.performance.now
            ? self.performance
            : Date
        ).now()),
        (this.running = !0);
    },
    stop: function () {
      this.getElapsedTime(), (this.running = !1);
    },
    getElapsedTime: function () {
      return this.getDelta(), this.elapsedTime;
    },
    getDelta: function () {
      var t,
        e = 0;
      return (
        this.autoStart && !this.running && this.start(),
        this.running &&
          ((e =
            0.001 *
            ((t = (
              void 0 !== self.performance && void 0 !== self.performance.now
                ? self.performance
                : Date
            ).now()) -
              this.oldTime)),
          (this.oldTime = t),
          (this.elapsedTime += e)),
        e
      );
    },
  }),
  (THREE.EventDispatcher = function () {}),
  (THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher,
    apply: function (t) {
      (t.addEventListener = THREE.EventDispatcher.prototype.addEventListener),
        (t.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener),
        (t.removeEventListener =
          THREE.EventDispatcher.prototype.removeEventListener),
        (t.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent);
    },
    addEventListener: function (t, e) {
      void 0 === this._listeners && (this._listeners = {});
      var r = this._listeners;
      void 0 === r[t] && (r[t] = []), -1 === r[t].indexOf(e) && r[t].push(e);
    },
    hasEventListener: function (t, e) {
      if (void 0 === this._listeners) return !1;
      var r = this._listeners;
      return void 0 !== r[t] && -1 !== r[t].indexOf(e);
    },
    removeEventListener: function (t, e) {
      void 0 !== this._listeners &&
        (void 0 === (t = this._listeners[t]) ||
          (-1 !== (e = t.indexOf(e)) && t.splice(e, 1)));
    },
    dispatchEvent: function (t) {
      if (void 0 !== this._listeners) {
        var e = this._listeners[t.type];
        if (void 0 !== e) {
          t.target = this;
          for (var r = [], i = e.length, n = 0; n < i; n++) r[n] = e[n];
          for (n = 0; n < i; n++) r[n].call(this, t);
        }
      }
    },
  }),
  (function (n) {
    function o(t, e) {
      return t.distance - e.distance;
    }
    n.Raycaster = function (t, e, r, i) {
      (this.ray = new n.Ray(t, e)),
        (this.near = r || 0),
        (this.far = i || 1 / 0),
        (this.params = {
          Sprite: {},
          Mesh: {},
          PointCloud: { threshold: 1 },
          LOD: {},
          Line: {},
        });
    };
    var a = function (t, e, r, i) {
      if ((t.raycast(e, r), !0 === i)) {
        i = 0;
        for (var n = (t = t.children).length; i < n; i++) a(t[i], e, r, !0);
      }
    };
    n.Raycaster.prototype = {
      constructor: n.Raycaster,
      precision: 1e-4,
      linePrecision: 1,
      set: function (t, e) {
        this.ray.set(t, e);
      },
      intersectObject: function (t, e) {
        var r = [];
        return a(t, this, r, e), r.sort(o), r;
      },
      intersectObjects: function (t, e) {
        var r = [];
        if (!1 == t instanceof Array)
          return (
            console.log(
              "THREE.Raycaster.intersectObjects: objects is not an Array."
            ),
            r
          );
        for (var i = 0, n = t.length; i < n; i++) a(t[i], this, r, e);
        return r.sort(o), r;
      },
    };
  })(THREE),
  (THREE.Object3D = function () {
    Object.defineProperty(this, "id", { value: THREE.Object3DIdCount++ }),
      (this.uuid = THREE.Math.generateUUID()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = void 0),
      (this.children = []),
      (this.up = THREE.Object3D.DefaultUp.clone());
    var t = new THREE.Vector3(),
      e = new THREE.Euler(),
      r = new THREE.Quaternion(),
      i = new THREE.Vector3(1, 1, 1);
    e.onChange(function () {
      r.setFromEuler(e, !1);
    }),
      r.onChange(function () {
        e.setFromQuaternion(r, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { enumerable: !0, value: t },
        rotation: { enumerable: !0, value: e },
        quaternion: { enumerable: !0, value: r },
        scale: { enumerable: !0, value: i },
      }),
      (this.renderDepth = null),
      (this.rotationAutoUpdate = !0),
      (this.matrix = new THREE.Matrix4()),
      (this.matrixWorld = new THREE.Matrix4()),
      (this.matrixAutoUpdate = !0),
      (this.matrixWorldNeedsUpdate = !1),
      (this.visible = !0),
      (this.receiveShadow = this.castShadow = !1),
      (this.frustumCulled = !0),
      (this.userData = {});
  }),
  (THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0)),
  (THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    get eulerOrder() {
      return (
        console.warn(
          "THREE.Object3D: .eulerOrder has been moved to .rotation.order."
        ),
        this.rotation.order
      );
    },
    set eulerOrder(t) {
      console.warn(
        "THREE.Object3D: .eulerOrder has been moved to .rotation.order."
      ),
        (this.rotation.order = t);
    },
    get useQuaternion() {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
      );
    },
    set useQuaternion(t) {
      console.warn(
        "THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default."
      );
    },
    applyMatrix: function (t) {
      this.matrix.multiplyMatrices(t, this.matrix),
        this.matrix.decompose(this.position, this.quaternion, this.scale);
    },
    setRotationFromAxisAngle: function (t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    },
    setRotationFromEuler: function (t) {
      this.quaternion.setFromEuler(t, !0);
    },
    setRotationFromMatrix: function (t) {
      this.quaternion.setFromRotationMatrix(t);
    },
    setRotationFromQuaternion: function (t) {
      this.quaternion.copy(t);
    },
    rotateOnAxis: (function () {
      var r = new THREE.Quaternion();
      return function (t, e) {
        return r.setFromAxisAngle(t, e), this.quaternion.multiply(r), this;
      };
    })(),
    rotateX: (function () {
      var e = new THREE.Vector3(1, 0, 0);
      return function (t) {
        return this.rotateOnAxis(e, t);
      };
    })(),
    rotateY: (function () {
      var e = new THREE.Vector3(0, 1, 0);
      return function (t) {
        return this.rotateOnAxis(e, t);
      };
    })(),
    rotateZ: (function () {
      var e = new THREE.Vector3(0, 0, 1);
      return function (t) {
        return this.rotateOnAxis(e, t);
      };
    })(),
    translateOnAxis: (function () {
      var r = new THREE.Vector3();
      return function (t, e) {
        return (
          r.copy(t).applyQuaternion(this.quaternion),
          this.position.add(r.multiplyScalar(e)),
          this
        );
      };
    })(),
    translate: function (t, e) {
      return (
        console.warn(
          "THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."
        ),
        this.translateOnAxis(e, t)
      );
    },
    translateX: (function () {
      var e = new THREE.Vector3(1, 0, 0);
      return function (t) {
        return this.translateOnAxis(e, t);
      };
    })(),
    translateY: (function () {
      var e = new THREE.Vector3(0, 1, 0);
      return function (t) {
        return this.translateOnAxis(e, t);
      };
    })(),
    translateZ: (function () {
      var e = new THREE.Vector3(0, 0, 1);
      return function (t) {
        return this.translateOnAxis(e, t);
      };
    })(),
    localToWorld: function (t) {
      return t.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: (function () {
      var e = new THREE.Matrix4();
      return function (t) {
        return t.applyMatrix4(e.getInverse(this.matrixWorld));
      };
    })(),
    lookAt: (function () {
      var e = new THREE.Matrix4();
      return function (t) {
        e.lookAt(t, this.position, this.up),
          this.quaternion.setFromRotationMatrix(e);
      };
    })(),
    add: function (t) {
      if (1 < arguments.length) {
        for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return (
        t === this
          ? console.error(
              "THREE.Object3D.add:",
              t,
              "can't be added as a child of itself."
            )
          : t instanceof THREE.Object3D
          ? (void 0 !== t.parent && t.parent.remove(t),
            (t.parent = this),
            t.dispatchEvent({ type: "added" }),
            this.children.push(t))
          : console.error(
              "THREE.Object3D.add:",
              t,
              "is not an instance of THREE.Object3D."
            ),
        this
      );
    },
    remove: function (t) {
      if (1 < arguments.length)
        for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
      -1 !== (e = this.children.indexOf(t)) &&
        ((t.parent = void 0),
        t.dispatchEvent({ type: "removed" }),
        this.children.splice(e, 1));
    },
    getChildByName: function (t, e) {
      return (
        console.warn(
          "THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."
        ),
        this.getObjectByName(t, e)
      );
    },
    getObjectById: function (t, e) {
      if (this.id === t) return this;
      for (var r = 0, i = this.children.length; r < i; r++) {
        var n = this.children[r].getObjectById(t, e);
        if (void 0 !== n) return n;
      }
    },
    getObjectByName: function (t, e) {
      if (this.name === t) return this;
      for (var r = 0, i = this.children.length; r < i; r++) {
        var n = this.children[r].getObjectByName(t, e);
        if (void 0 !== n) return n;
      }
    },
    getWorldPosition: function (t) {
      return (
        (t = t || new THREE.Vector3()),
        this.updateMatrixWorld(!0),
        t.setFromMatrixPosition(this.matrixWorld)
      );
    },
    getWorldQuaternion: (function () {
      var e = new THREE.Vector3(),
        r = new THREE.Vector3();
      return function (t) {
        return (
          (t = t || new THREE.Quaternion()),
          this.updateMatrixWorld(!0),
          this.matrixWorld.decompose(e, t, r),
          t
        );
      };
    })(),
    getWorldRotation: (function () {
      var e = new THREE.Quaternion();
      return function (t) {
        return (
          (t = t || new THREE.Euler()),
          this.getWorldQuaternion(e),
          t.setFromQuaternion(e, this.rotation.order, !1)
        );
      };
    })(),
    getWorldScale: (function () {
      var e = new THREE.Vector3(),
        r = new THREE.Quaternion();
      return function (t) {
        return (
          (t = t || new THREE.Vector3()),
          this.updateMatrixWorld(!0),
          this.matrixWorld.decompose(e, r, t),
          t
        );
      };
    })(),
    getWorldDirection: (function () {
      var e = new THREE.Quaternion();
      return function (t) {
        return (
          (t = t || new THREE.Vector3()),
          this.getWorldQuaternion(e),
          t.set(0, 0, 1).applyQuaternion(e)
        );
      };
    })(),
    raycast: function () {},
    traverse: function (t) {
      t(this);
      for (var e = 0, r = this.children.length; e < r; e++)
        this.children[e].traverse(t);
    },
    traverseVisible: function (t) {
      if (!1 !== this.visible) {
        t(this);
        for (var e = 0, r = this.children.length; e < r; e++)
          this.children[e].traverseVisible(t);
      }
    },
    updateMatrix: function () {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        (this.matrixWorldNeedsUpdate = !0);
    },
    updateMatrixWorld: function (t) {
      !0 === this.matrixAutoUpdate && this.updateMatrix(),
        (!0 !== this.matrixWorldNeedsUpdate && !0 !== t) ||
          (void 0 === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
          (t = !(this.matrixWorldNeedsUpdate = !1)));
      for (var e = 0, r = this.children.length; e < r; e++)
        this.children[e].updateMatrixWorld(t);
    },
    toJSON: function () {
      function i(t) {
        var e;
        return (
          void 0 === r.geometries && (r.geometries = []),
          void 0 === o[t.uuid] &&
            (delete (e = t.toJSON()).metadata,
            (o[t.uuid] = e),
            r.geometries.push(e)),
          t.uuid
        );
      }
      function n(t) {
        var e;
        return (
          void 0 === r.materials && (r.materials = []),
          void 0 === a[t.uuid] &&
            (delete (e = t.toJSON()).metadata,
            (a[t.uuid] = e),
            r.materials.push(e)),
          t.uuid
        );
      }
      var r = {
          metadata: {
            version: 4.3,
            type: "Object",
            generator: "ObjectExporter",
          },
        },
        o = {},
        a = {},
        s = function (t) {
          var e = {};
          if (
            ((e.uuid = t.uuid),
            (e.type = t.type),
            "" !== t.name && (e.name = t.name),
            "{}" !== JSON.stringify(t.userData) && (e.userData = t.userData),
            !0 !== t.visible && (e.visible = t.visible),
            t instanceof THREE.PerspectiveCamera
              ? ((e.fov = t.fov),
                (e.aspect = t.aspect),
                (e.near = t.near),
                (e.far = t.far))
              : t instanceof THREE.OrthographicCamera
              ? ((e.left = t.left),
                (e.right = t.right),
                (e.top = t.top),
                (e.bottom = t.bottom),
                (e.near = t.near),
                (e.far = t.far))
              : t instanceof THREE.AmbientLight
              ? (e.color = t.color.getHex())
              : t instanceof THREE.DirectionalLight
              ? ((e.color = t.color.getHex()), (e.intensity = t.intensity))
              : t instanceof THREE.PointLight
              ? ((e.color = t.color.getHex()),
                (e.intensity = t.intensity),
                (e.distance = t.distance))
              : t instanceof THREE.SpotLight
              ? ((e.color = t.color.getHex()),
                (e.intensity = t.intensity),
                (e.distance = t.distance),
                (e.angle = t.angle),
                (e.exponent = t.exponent))
              : t instanceof THREE.HemisphereLight
              ? ((e.color = t.color.getHex()),
                (e.groundColor = t.groundColor.getHex()))
              : t instanceof THREE.Mesh || t instanceof THREE.Line
              ? ((e.geometry = i(t.geometry)), (e.material = n(t.material)))
              : t instanceof THREE.Sprite && (e.material = n(t.material)),
            (e.matrix = t.matrix.toArray()),
            0 < t.children.length)
          ) {
            e.children = [];
            for (var r = 0; r < t.children.length; r++)
              e.children.push(s(t.children[r]));
          }
          return e;
        };
      return (r.object = s(this)), r;
    },
    clone: function (t, e) {
      if (
        (void 0 === t && (t = new THREE.Object3D()),
        void 0 === e && (e = !0),
        (t.name = this.name),
        t.up.copy(this.up),
        t.position.copy(this.position),
        t.quaternion.copy(this.quaternion),
        t.scale.copy(this.scale),
        (t.renderDepth = this.renderDepth),
        (t.rotationAutoUpdate = this.rotationAutoUpdate),
        t.matrix.copy(this.matrix),
        t.matrixWorld.copy(this.matrixWorld),
        (t.matrixAutoUpdate = this.matrixAutoUpdate),
        (t.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate),
        (t.visible = this.visible),
        (t.castShadow = this.castShadow),
        (t.receiveShadow = this.receiveShadow),
        (t.frustumCulled = this.frustumCulled),
        (t.userData = JSON.parse(JSON.stringify(this.userData))),
        !0 === e)
      )
        for (var r = 0; r < this.children.length; r++)
          t.add(this.children[r].clone());
      return t;
    },
  }),
  THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),
  (THREE.Object3DIdCount = 0),
  (THREE.Projector = function () {
    console.warn(
      "THREE.Projector has been moved to /examples/renderers/Projector.js."
    ),
      (this.projectVector = function (t, e) {
        console.warn(
          "THREE.Projector: .projectVector() is now vector.project()."
        ),
          t.project(e);
      }),
      (this.unprojectVector = function (t, e) {
        console.warn(
          "THREE.Projector: .unprojectVector() is now vector.unproject()."
        ),
          t.unproject(e);
      }),
      (this.pickingRay = function (t, e) {
        console.error("THREE.Projector: .pickingRay() has been removed.");
      });
  }),
  (THREE.Face3 = function (t, e, r, i, n, o) {
    (this.a = t),
      (this.b = e),
      (this.c = r),
      (this.normal = i instanceof THREE.Vector3 ? i : new THREE.Vector3()),
      (this.vertexNormals = i instanceof Array ? i : []),
      (this.color = n instanceof THREE.Color ? n : new THREE.Color()),
      (this.vertexColors = n instanceof Array ? n : []),
      (this.vertexTangents = []),
      (this.materialIndex = void 0 !== o ? o : 0);
  }),
  (THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function () {
      var t = new THREE.Face3(this.a, this.b, this.c);
      t.normal.copy(this.normal),
        t.color.copy(this.color),
        (t.materialIndex = this.materialIndex);
      for (var e = 0, r = this.vertexNormals.length; e < r; e++)
        t.vertexNormals[e] = this.vertexNormals[e].clone();
      for (e = 0, r = this.vertexColors.length; e < r; e++)
        t.vertexColors[e] = this.vertexColors[e].clone();
      for (e = 0, r = this.vertexTangents.length; e < r; e++)
        t.vertexTangents[e] = this.vertexTangents[e].clone();
      return t;
    },
  }),
  (THREE.Face4 = function (t, e, r, i, n, o, a) {
    return (
      console.warn(
        "THREE.Face4 has been removed. A THREE.Face3 will be created instead."
      ),
      new THREE.Face3(t, e, r, n, o, a)
    );
  }),
  (THREE.BufferAttribute = function (t, e) {
    (this.array = t), (this.itemSize = e), (this.needsUpdate = !1);
  }),
  (THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute,
    get length() {
      return this.array.length;
    },
    copyAt: function (t, e, r) {
      (t *= this.itemSize), (r *= e.itemSize);
      for (var i = 0, n = this.itemSize; i < n; i++)
        this.array[t + i] = e.array[r + i];
    },
    set: function (t) {
      return this.array.set(t), this;
    },
    setX: function (t, e) {
      return (this.array[t * this.itemSize] = e), this;
    },
    setY: function (t, e) {
      return (this.array[t * this.itemSize + 1] = e), this;
    },
    setZ: function (t, e) {
      return (this.array[t * this.itemSize + 2] = e), this;
    },
    setXY: function (t, e, r) {
      return (
        (t *= this.itemSize), (this.array[t] = e), (this.array[t + 1] = r), this
      );
    },
    setXYZ: function (t, e, r, i) {
      return (
        (t *= this.itemSize),
        (this.array[t] = e),
        (this.array[t + 1] = r),
        (this.array[t + 2] = i),
        this
      );
    },
    setXYZW: function (t, e, r, i, n) {
      return (
        (t *= this.itemSize),
        (this.array[t] = e),
        (this.array[t + 1] = r),
        (this.array[t + 2] = i),
        (this.array[t + 3] = n),
        this
      );
    },
    clone: function () {
      return new THREE.BufferAttribute(
        new this.array.constructor(this.array),
        this.itemSize
      );
    },
  }),
  (THREE.Int8Attribute = function (t, e) {
    return (
      console.warn(
        "THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."
      ),
      new THREE.BufferAttribute(t, e)
    );
  }),
  (THREE.Uint8Attribute = function (t, e) {
    return (
      console.warn(
        "THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."
      ),
      new THREE.BufferAttribute(t, e)
    );
  }),
  (THREE.Uint8ClampedAttribute = function (t, e) {
    return (
      console.warn(
        "THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."
      ),
      new THREE.BufferAttribute(t, e)
    );
  }),
  (THREE.Int16Attribute = function (t, e) {
    return (
      console.warn(
        "THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."
      ),
      new THREE.BufferAttribute(t, e)
    );
  }),
  (THREE.Uint16Attribute = function (t, e) {
    return (
      console.warn(
        "THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."
      ),
      new THREE.BufferAttribute(t, e)
    );
  }),
  (THREE.Int32Attribute = function (t, e) {
    return (
      console.warn(
        "THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."
      ),
      new THREE.BufferAttribute(t, e)
    );
  }),
  (THREE.Uint32Attribute = function (t, e) {
    return (
      console.warn(
        "THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."
      ),
      new THREE.BufferAttribute(t, e)
    );
  }),
  (THREE.Float32Attribute = function (t, e) {
    return (
      console.warn(
        "THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."
      ),
      new THREE.BufferAttribute(t, e)
    );
  }),
  (THREE.Float64Attribute = function (t, e) {
    return (
      console.warn(
        "THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead."
      ),
      new THREE.BufferAttribute(t, e)
    );
  }),
  (THREE.BufferGeometry = function () {
    Object.defineProperty(this, "id", { value: THREE.GeometryIdCount++ }),
      (this.uuid = THREE.Math.generateUUID()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.attributes = {}),
      (this.attributesKeys = []),
      (this.offsets = this.drawcalls = []),
      (this.boundingSphere = this.boundingBox = null);
  }),
  (THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry,
    addAttribute: function (t, e, r) {
      !1 == e instanceof THREE.BufferAttribute
        ? (console.warn(
            "THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."
          ),
          (this.attributes[t] = { array: e, itemSize: r }))
        : ((this.attributes[t] = e),
          (this.attributesKeys = Object.keys(this.attributes)));
    },
    getAttribute: function (t) {
      return this.attributes[t];
    },
    addDrawCall: function (t, e, r) {
      this.drawcalls.push({ start: t, count: e, index: void 0 !== r ? r : 0 });
    },
    applyMatrix: function (t) {
      var e = this.attributes.position;
      void 0 !== e && (t.applyToVector3Array(e.array), (e.needsUpdate = !0)),
        void 0 !== (e = this.attributes.normal) &&
          (new THREE.Matrix3().getNormalMatrix(t).applyToVector3Array(e.array),
          (e.needsUpdate = !0));
    },
    center: function () {},
    fromGeometry: function (t, e) {
      e = e || { vertexColors: THREE.NoColors };
      var r = t.vertices,
        i = t.faces,
        n = t.faceVertexUvs,
        o = e.vertexColors,
        a = 0 < n[0].length,
        s = 3 == i[0].vertexNormals.length,
        h = new Float32Array(9 * i.length);
      this.addAttribute("position", new THREE.BufferAttribute(h, 3));
      var l,
        c,
        u = new Float32Array(9 * i.length);
      this.addAttribute("normal", new THREE.BufferAttribute(u, 3)),
        o !== THREE.NoColors &&
          ((l = new Float32Array(9 * i.length)),
          this.addAttribute("color", new THREE.BufferAttribute(l, 3))),
        !0 == a &&
          ((c = new Float32Array(6 * i.length)),
          this.addAttribute("uv", new THREE.BufferAttribute(c, 2)));
      for (var E = 0, f = 0, d = 0; E < i.length; E++, f += 6, d += 9) {
        var p = i[E],
          m = r[p.a],
          g = r[p.b],
          T = r[p.c];
        (h[d] = m.x),
          (h[d + 1] = m.y),
          (h[d + 2] = m.z),
          (h[d + 3] = g.x),
          (h[d + 4] = g.y),
          (h[d + 5] = g.z),
          (h[d + 6] = T.x),
          (h[d + 7] = T.y),
          (h[d + 8] = T.z),
          !0 == s
            ? ((m = p.vertexNormals[0]),
              (g = p.vertexNormals[1]),
              (T = p.vertexNormals[2]),
              (u[d] = m.x),
              (u[d + 1] = m.y),
              (u[d + 2] = m.z),
              (u[d + 3] = g.x),
              (u[d + 4] = g.y),
              (u[d + 5] = g.z),
              (u[d + 6] = T.x),
              (u[d + 7] = T.y),
              (u[d + 8] = T.z))
            : ((m = p.normal),
              (u[d] = m.x),
              (u[d + 1] = m.y),
              (u[d + 2] = m.z),
              (u[d + 3] = m.x),
              (u[d + 4] = m.y),
              (u[d + 5] = m.z),
              (u[d + 6] = m.x),
              (u[d + 7] = m.y),
              (u[d + 8] = m.z)),
          o === THREE.FaceColors
            ? ((p = p.color),
              (l[d] = p.r),
              (l[d + 1] = p.g),
              (l[d + 2] = p.b),
              (l[d + 3] = p.r),
              (l[d + 4] = p.g),
              (l[d + 5] = p.b),
              (l[d + 6] = p.r),
              (l[d + 7] = p.g),
              (l[d + 8] = p.b))
            : o === THREE.VertexColors &&
              ((m = p.vertexColors[0]),
              (g = p.vertexColors[1]),
              (p = p.vertexColors[2]),
              (l[d] = m.r),
              (l[d + 1] = m.g),
              (l[d + 2] = m.b),
              (l[d + 3] = g.r),
              (l[d + 4] = g.g),
              (l[d + 5] = g.b),
              (l[d + 6] = p.r),
              (l[d + 7] = p.g),
              (l[d + 8] = p.b)),
          !0 == a &&
            ((p = n[0][E][0]),
            (m = n[0][E][1]),
            (g = n[0][E][2]),
            (c[f] = p.x),
            (c[f + 1] = p.y),
            (c[f + 2] = m.x),
            (c[f + 3] = m.y),
            (c[f + 4] = g.x),
            (c[f + 5] = g.y));
      }
      return this.computeBoundingSphere(), this;
    },
    computeBoundingBox: (function () {
      var n = new THREE.Vector3();
      return function () {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3());
        var t = this.attributes.position.array;
        if (t) {
          var e = this.boundingBox;
          e.makeEmpty();
          for (var r = 0, i = t.length; r < i; r += 3)
            n.set(t[r], t[r + 1], t[r + 2]), e.expandByPoint(n);
        }
        (void 0 !== t && 0 !== t.length) ||
          (this.boundingBox.min.set(0, 0, 0),
          this.boundingBox.max.set(0, 0, 0)),
          (isNaN(this.boundingBox.min.x) ||
            isNaN(this.boundingBox.min.y) ||
            isNaN(this.boundingBox.min.z)) &&
            console.error(
              'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.'
            );
      };
    })(),
    computeBoundingSphere: (function () {
      var o = new THREE.Box3(),
        a = new THREE.Vector3();
      return function () {
        null === this.boundingSphere &&
          (this.boundingSphere = new THREE.Sphere());
        var t = this.attributes.position.array;
        if (t) {
          o.makeEmpty();
          for (
            var e = this.boundingSphere.center, r = 0, i = t.length;
            r < i;
            r += 3
          )
            a.set(t[r], t[r + 1], t[r + 2]), o.expandByPoint(a);
          o.center(e);
          for (var n = 0, r = 0, i = t.length; r < i; r += 3)
            a.set(t[r], t[r + 1], t[r + 2]),
              (n = Math.max(n, e.distanceToSquared(a)));
          (this.boundingSphere.radius = Math.sqrt(n)),
            isNaN(this.boundingSphere.radius) &&
              console.error(
                'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.'
              );
        }
      };
    })(),
    computeFaceNormals: function () {},
    computeVertexNormals: function () {
      var t = this.attributes;
      if (t.position) {
        var e = t.position.array;
        if (void 0 === t.normal)
          this.addAttribute(
            "normal",
            new THREE.BufferAttribute(new Float32Array(e.length), 3)
          );
        else
          for (var r = 0, i = (s = t.normal.array).length; r < i; r++) s[r] = 0;
        var n,
          o,
          a,
          s = t.normal.array,
          h = new THREE.Vector3(),
          l = new THREE.Vector3(),
          c = new THREE.Vector3(),
          u = new THREE.Vector3(),
          E = new THREE.Vector3();
        if (t.index)
          for (
            var f = t.index.array,
              d =
                0 < this.offsets.length
                  ? this.offsets
                  : [{ start: 0, count: f.length, index: 0 }],
              p = 0,
              m = d.length;
            p < m;
            ++p
          ) {
            (i = d[p].start), (n = d[p].count);
            for (var g = d[p].index, r = i, i = i + n; r < i; r += 3)
              (n = 3 * (g + f[r])),
                (o = 3 * (g + f[r + 1])),
                (a = 3 * (g + f[r + 2])),
                h.fromArray(e, n),
                l.fromArray(e, o),
                c.fromArray(e, a),
                u.subVectors(c, l),
                E.subVectors(h, l),
                u.cross(E),
                (s[n] += u.x),
                (s[1 + n] += u.y),
                (s[2 + n] += u.z),
                (s[o] += u.x),
                (s[1 + o] += u.y),
                (s[2 + o] += u.z),
                (s[a] += u.x),
                (s[1 + a] += u.y),
                (s[2 + a] += u.z);
          }
        else
          for (r = 0, i = e.length; r < i; r += 9)
            h.fromArray(e, r),
              l.fromArray(e, r + 3),
              c.fromArray(e, r + 6),
              u.subVectors(c, l),
              E.subVectors(h, l),
              u.cross(E),
              (s[r] = u.x),
              (s[r + 1] = u.y),
              (s[r + 2] = u.z),
              (s[r + 3] = u.x),
              (s[r + 4] = u.y),
              (s[r + 5] = u.z),
              (s[r + 6] = u.x),
              (s[r + 7] = u.y),
              (s[r + 8] = u.z);
        this.normalizeNormals(), (t.normal.needsUpdate = !0);
      }
    },
    computeTangents: function () {
      function t(t) {
        k.fromArray(i, 3 * t),
          N.copy(k),
          (B = s[t]),
          V.copy(B),
          V.sub(k.multiplyScalar(k.dot(B))).normalize(),
          z.crossVectors(N, B),
          (B = z.dot(h[t])),
          (B = B < 0 ? -1 : 1),
          (a[4 * t] = V.x),
          (a[4 * t + 1] = V.y),
          (a[4 * t + 2] = V.z),
          (a[4 * t + 3] = B);
      }
      if (
        void 0 === this.attributes.index ||
        void 0 === this.attributes.position ||
        void 0 === this.attributes.normal ||
        void 0 === this.attributes.uv
      )
        console.warn(
          "Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()"
        );
      else {
        var e = this.attributes.index.array,
          r = this.attributes.position.array,
          i = this.attributes.normal.array,
          n = this.attributes.uv.array,
          o = r.length / 3;
        void 0 === this.attributes.tangent &&
          this.addAttribute(
            "tangent",
            new THREE.BufferAttribute(new Float32Array(4 * o), 4)
          );
        for (
          var a = this.attributes.tangent.array, s = [], h = [], l = 0;
          l < o;
          l++
        )
          (s[l] = new THREE.Vector3()), (h[l] = new THREE.Vector3());
        var c,
          u,
          E,
          f,
          d,
          p,
          m,
          g,
          T,
          v,
          y,
          R,
          x,
          H,
          _,
          b = new THREE.Vector3(),
          w = new THREE.Vector3(),
          M = new THREE.Vector3(),
          S = new THREE.Vector2(),
          C = new THREE.Vector2(),
          A = new THREE.Vector2(),
          L = new THREE.Vector3(),
          P = new THREE.Vector3();
        0 === this.drawcalls.length && this.addDrawCall(0, e.length, 0);
        for (var F = this.drawcalls, l = 0, D = F.length; l < D; ++l) {
          (R = F[l].start), (x = F[l].count);
          var U = F[l].index,
            o = R;
          for (R += x; o < R; o += 3)
            (x = U + e[o]),
              (H = U + e[o + 1]),
              (_ = U + e[o + 2]),
              (O = x),
              (I = H),
              (G = _),
              b.fromArray(r, 3 * O),
              w.fromArray(r, 3 * I),
              M.fromArray(r, 3 * G),
              S.fromArray(n, 2 * O),
              C.fromArray(n, 2 * I),
              A.fromArray(n, 2 * G),
              (c = w.x - b.x),
              (u = M.x - b.x),
              (E = w.y - b.y),
              (f = M.y - b.y),
              (d = w.z - b.z),
              (p = M.z - b.z),
              (m = C.x - S.x),
              (g = A.x - S.x),
              (T = C.y - S.y),
              (v = A.y - S.y),
              (y = 1 / (m * v - g * T)),
              L.set(
                (v * c - T * u) * y,
                (v * E - T * f) * y,
                (v * d - T * p) * y
              ),
              P.set(
                (m * u - g * c) * y,
                (m * f - g * E) * y,
                (m * p - g * d) * y
              ),
              s[O].add(L),
              s[I].add(L),
              s[G].add(L),
              h[O].add(P),
              h[I].add(P),
              h[G].add(P);
        }
        var B,
          V = new THREE.Vector3(),
          z = new THREE.Vector3(),
          k = new THREE.Vector3(),
          N = new THREE.Vector3(),
          l = 0;
        for (D = F.length; l < D; ++l)
          for (
            R = F[l].start, x = F[l].count, U = F[l].index, o = R, R += x;
            o < R;
            o += 3
          )
            (x = U + e[o]),
              (H = U + e[o + 1]),
              (_ = U + e[o + 2]),
              t(x),
              t(H),
              t(_);
      }
      var O, I, G;
    },
    computeOffsets: function (t) {
      var e = void 0 === t ? 65535 : t;
      Date.now(), (t = this.attributes.index.array);
      for (
        var r = this.attributes.position.array,
          i = t.length / 3,
          n = new Uint16Array(t.length),
          o = 0,
          a = 0,
          s = [{ start: 0, count: 0, index: 0 }],
          h = s[0],
          l = 0,
          c = new Int32Array(6),
          u = new Int32Array(r.length),
          E = new Int32Array(r.length),
          f = 0;
        f < r.length;
        f++
      )
        (u[f] = -1), (E[f] = -1);
      for (r = 0; r < i; r++) {
        for (var d = (l = 0); d < 3; d++)
          -1 == u[(f = t[3 * r + d])]
            ? ((c[2 * d] = f), (c[2 * d + 1] = -1), l++)
            : u[f] < h.index
            ? ((c[2 * d] = f), (c[2 * d + 1] = -1), 0)
            : ((c[2 * d] = f), (c[2 * d + 1] = u[f]));
        if (a + l > h.index + e)
          for (
            h = { start: o, count: 0, index: a }, s.push(h), l = 0;
            l < 6;
            l += 2
          )
            -1 < (d = c[l + 1]) && d < h.index && (c[l + 1] = -1);
        for (l = 0; l < 6; l += 2)
          (f = c[l]),
            -1 === (d = c[l + 1]) && (d = a++),
            (E[(u[f] = d)] = f),
            (n[o++] = d - h.index),
            h.count++;
      }
      return this.reorderBuffers(n, E, a), (this.offsets = s);
    },
    merge: function () {
      console.log("BufferGeometry.merge(): TODO");
    },
    normalizeNormals: function () {
      for (
        var t, e, r, i = this.attributes.normal.array, n = 0, o = i.length;
        n < o;
        n += 3
      )
        (t = i[n]),
          (e = i[n + 1]),
          (r = i[n + 2]),
          (t = 1 / Math.sqrt(t * t + e * e + r * r)),
          (i[n] *= t),
          (i[n + 1] *= t),
          (i[n + 2] *= t);
    },
    reorderBuffers: function (t, e, r) {
      var i,
        n = {};
      for (i in this.attributes)
        "index" != i &&
          (n[i] = new this.attributes[i].array.constructor(
            this.attributes[i].itemSize * r
          ));
      for (var o = 0; o < r; o++) {
        var a = e[o];
        for (i in this.attributes)
          if ("index" != i)
            for (
              var s = this.attributes[i].array,
                h = this.attributes[i].itemSize,
                l = n[i],
                c = 0;
              c < h;
              c++
            )
              l[o * h + c] = s[a * h + c];
      }
      for (i in ((this.attributes.index.array = t), this.attributes))
        "index" != i &&
          ((this.attributes[i].array = n[i]),
          (this.attributes[i].numItems = this.attributes[i].itemSize * r));
    },
    toJSON: function () {
      var t,
        e = {
          metadata: {
            version: 4,
            type: "BufferGeometry",
            generator: "BufferGeometryExporter",
          },
          uuid: this.uuid,
          type: this.type,
          data: { attributes: {} },
        },
        r = this.attributes,
        i = this.offsets,
        n = this.boundingSphere;
      for (t in r) {
        for (var o = r[t], a = [], s = o.array, h = 0, l = s.length; h < l; h++)
          a[h] = s[h];
        e.data.attributes[t] = {
          itemSize: o.itemSize,
          type: o.array.constructor.name,
          array: a,
        };
      }
      return (
        0 < i.length && (e.data.offsets = JSON.parse(JSON.stringify(i))),
        null !== n &&
          (e.data.boundingSphere = {
            center: n.center.toArray(),
            radius: n.radius,
          }),
        e
      );
    },
    clone: function () {
      var t,
        e = new THREE.BufferGeometry();
      for (t in this.attributes) e.addAttribute(t, this.attributes[t].clone());
      t = 0;
      for (var r = this.offsets.length; t < r; t++) {
        var i = this.offsets[t];
        e.offsets.push({ start: i.start, index: i.index, count: i.count });
      }
      return e;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  }),
  THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),
  (THREE.Geometry = function () {
    Object.defineProperty(this, "id", { value: THREE.GeometryIdCount++ }),
      (this.uuid = THREE.Math.generateUUID()),
      (this.name = ""),
      (this.type = "Geometry"),
      (this.vertices = []),
      (this.colors = []),
      (this.faces = []),
      (this.faceVertexUvs = [[]]),
      (this.morphTargets = []),
      (this.morphColors = []),
      (this.morphNormals = []),
      (this.skinWeights = []),
      (this.skinIndices = []),
      (this.lineDistances = []),
      (this.boundingSphere = this.boundingBox = null),
      (this.hasTangents = !1),
      (this.dynamic = !0),
      (this.groupsNeedUpdate =
        this.lineDistancesNeedUpdate =
        this.colorsNeedUpdate =
        this.tangentsNeedUpdate =
        this.normalsNeedUpdate =
        this.uvsNeedUpdate =
        this.elementsNeedUpdate =
        this.verticesNeedUpdate =
          !1);
  }),
  (THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function (t) {
      for (
        var e = new THREE.Matrix3().getNormalMatrix(t),
          r = 0,
          i = this.vertices.length;
        r < i;
        r++
      )
        this.vertices[r].applyMatrix4(t);
      for (r = 0, i = this.faces.length; r < i; r++) {
        (t = this.faces[r]).normal.applyMatrix3(e).normalize();
        for (var n = 0, o = t.vertexNormals.length; n < o; n++)
          t.vertexNormals[n].applyMatrix3(e).normalize();
      }
      this.boundingBox instanceof THREE.Box3 && this.computeBoundingBox(),
        this.boundingSphere instanceof THREE.Sphere &&
          this.computeBoundingSphere();
    },
    fromBufferGeometry: function (t) {
      for (
        var o = this,
          e = t.attributes,
          r = e.position.array,
          i = void 0 !== e.index ? e.index.array : void 0,
          a = void 0 !== e.normal ? e.normal.array : void 0,
          s = void 0 !== e.color ? e.color.array : void 0,
          n = void 0 !== e.uv ? e.uv.array : void 0,
          h = [],
          l = [],
          c = (e = 0);
        e < r.length;
        e += 3, c += 2
      )
        o.vertices.push(new THREE.Vector3(r[e], r[e + 1], r[e + 2])),
          void 0 !== a && h.push(new THREE.Vector3(a[e], a[e + 1], a[e + 2])),
          void 0 !== s &&
            o.colors.push(new THREE.Color(s[e], s[e + 1], s[e + 2])),
          void 0 !== n && l.push(new THREE.Vector2(n[c], n[c + 1]));
      if (
        ((n = function (t, e, r) {
          var i =
              void 0 !== a ? [h[t].clone(), h[e].clone(), h[r].clone()] : [],
            n =
              void 0 !== s
                ? [
                    o.colors[t].clone(),
                    o.colors[e].clone(),
                    o.colors[r].clone(),
                  ]
                : [];
          o.faces.push(new THREE.Face3(t, e, r, i, n)),
            o.faceVertexUvs[0].push([l[t], l[e], l[r]]);
        }),
        void 0 !== i)
      )
        for (e = 0; e < i.length; e += 3) n(i[e], i[e + 1], i[e + 2]);
      else for (e = 0; e < r.length / 3; e += 3) n(e, e + 1, e + 2);
      return (
        this.computeFaceNormals(),
        null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
        null !== t.boundingSphere &&
          (this.boundingSphere = t.boundingSphere.clone()),
        this
      );
    },
    center: function () {
      this.computeBoundingBox();
      var t = new THREE.Vector3();
      return (
        t.addVectors(this.boundingBox.min, this.boundingBox.max),
        t.multiplyScalar(-0.5),
        this.applyMatrix(new THREE.Matrix4().makeTranslation(t.x, t.y, t.z)),
        this.computeBoundingBox(),
        t
      );
    },
    computeFaceNormals: function () {
      for (
        var t = new THREE.Vector3(),
          e = new THREE.Vector3(),
          r = 0,
          i = this.faces.length;
        r < i;
        r++
      ) {
        var n = this.faces[r],
          o = this.vertices[n.a],
          a = this.vertices[n.b];
        t.subVectors(this.vertices[n.c], a),
          e.subVectors(o, a),
          t.cross(e),
          t.normalize(),
          n.normal.copy(t);
      }
    },
    computeVertexNormals: function (t) {
      for (
        var e = Array(this.vertices.length), r = 0, i = this.vertices.length;
        r < i;
        r++
      )
        e[r] = new THREE.Vector3();
      if (t) {
        var n,
          o,
          a,
          s = new THREE.Vector3(),
          h = new THREE.Vector3();
        for (
          new THREE.Vector3(),
            new THREE.Vector3(),
            new THREE.Vector3(),
            t = 0,
            r = this.faces.length;
          t < r;
          t++
        )
          (i = this.faces[t]),
            (n = this.vertices[i.a]),
            (o = this.vertices[i.b]),
            (a = this.vertices[i.c]),
            s.subVectors(a, o),
            h.subVectors(n, o),
            s.cross(h),
            e[i.a].add(s),
            e[i.b].add(s),
            e[i.c].add(s);
      } else
        for (t = 0, r = this.faces.length; t < r; t++)
          e[(i = this.faces[t]).a].add(i.normal),
            e[i.b].add(i.normal),
            e[i.c].add(i.normal);
      for (r = 0, i = this.vertices.length; r < i; r++) e[r].normalize();
      for (t = 0, r = this.faces.length; t < r; t++)
        ((i = this.faces[t]).vertexNormals[0] = e[i.a].clone()),
          (i.vertexNormals[1] = e[i.b].clone()),
          (i.vertexNormals[2] = e[i.c].clone());
    },
    computeMorphNormals: function () {
      var t, e, r;
      for (s = 0, h = this.faces.length; s < h; s++)
        for (
          (r = this.faces[s]).__originalFaceNormal
            ? r.__originalFaceNormal.copy(r.normal)
            : (r.__originalFaceNormal = r.normal.clone()),
            r.__originalVertexNormals || (r.__originalVertexNormals = []),
            t = 0,
            e = r.vertexNormals.length;
          t < e;
          t++
        )
          r.__originalVertexNormals[t]
            ? r.__originalVertexNormals[t].copy(r.vertexNormals[t])
            : (r.__originalVertexNormals[t] = r.vertexNormals[t].clone());
      var i = new THREE.Geometry();
      for (
        i.faces = this.faces, t = 0, e = this.morphTargets.length;
        t < e;
        t++
      ) {
        if (!this.morphNormals[t]) {
          (this.morphNormals[t] = {}),
            (this.morphNormals[t].faceNormals = []),
            (this.morphNormals[t].vertexNormals = []),
            (r = this.morphNormals[t].faceNormals);
          for (
            var n,
              o,
              a = this.morphNormals[t].vertexNormals,
              s = 0,
              h = this.faces.length;
            s < h;
            s++
          )
            (n = new THREE.Vector3()),
              (o = {
                a: new THREE.Vector3(),
                b: new THREE.Vector3(),
                c: new THREE.Vector3(),
              }),
              r.push(n),
              a.push(o);
        }
        for (
          a = this.morphNormals[t],
            i.vertices = this.morphTargets[t].vertices,
            i.computeFaceNormals(),
            i.computeVertexNormals(),
            s = 0,
            h = this.faces.length;
          s < h;
          s++
        )
          (r = this.faces[s]),
            (n = a.faceNormals[s]),
            (o = a.vertexNormals[s]),
            n.copy(r.normal),
            o.a.copy(r.vertexNormals[0]),
            o.b.copy(r.vertexNormals[1]),
            o.c.copy(r.vertexNormals[2]);
      }
      for (s = 0, h = this.faces.length; s < h; s++)
        ((r = this.faces[s]).normal = r.__originalFaceNormal),
          (r.vertexNormals = r.__originalVertexNormals);
    },
    computeTangents: function () {
      for (
        var t,
          e,
          r,
          i,
          n,
          o,
          a,
          s,
          h,
          l,
          c,
          u,
          E,
          f,
          d = [],
          p = [],
          m = new THREE.Vector3(),
          g = new THREE.Vector3(),
          T = new THREE.Vector3(),
          v = new THREE.Vector3(),
          y = new THREE.Vector3(),
          R = 0,
          x = this.vertices.length;
        R < x;
        R++
      )
        (d[R] = new THREE.Vector3()), (p[R] = new THREE.Vector3());
      for (R = 0, x = this.faces.length; R < x; R++)
        (e = this.faces[R]),
          (r = this.faceVertexUvs[0][R]),
          (t = e.a),
          (f = e.b),
          (e = e.c),
          (i = this.vertices[t]),
          (n = this.vertices[f]),
          (o = this.vertices[e]),
          (a = r[0]),
          (s = r[1]),
          (h = r[2]),
          (r = n.x - i.x),
          (l = o.x - i.x),
          (c = n.y - i.y),
          (u = o.y - i.y),
          (n = n.z - i.z),
          (i = o.z - i.z),
          (o = s.x - a.x),
          (E = h.x - a.x),
          (s = s.y - a.y),
          (h = 1 / (o * (a = h.y - a.y) - E * s)),
          m.set((a * r - s * l) * h, (a * c - s * u) * h, (a * n - s * i) * h),
          g.set((o * l - E * r) * h, (o * u - E * c) * h, (o * i - E * n) * h),
          d[t].add(m),
          d[f].add(m),
          d[e].add(m),
          p[t].add(g),
          p[f].add(g),
          p[e].add(g);
      for (g = ["a", "b", "c", "d"], R = 0, x = this.faces.length; R < x; R++)
        for (
          e = this.faces[R], m = 0;
          m < Math.min(e.vertexNormals.length, 3);
          m++
        )
          y.copy(e.vertexNormals[m]),
            (f = d[(t = e[g[m]])]),
            T.copy(f),
            T.sub(y.multiplyScalar(y.dot(f))).normalize(),
            v.crossVectors(e.vertexNormals[m], f),
            (t = (t = v.dot(p[t])) < 0 ? -1 : 1),
            (e.vertexTangents[m] = new THREE.Vector4(T.x, T.y, T.z, t));
      this.hasTangents = !0;
    },
    computeLineDistances: function () {
      for (var t = 0, e = this.vertices, r = 0, i = e.length; r < i; r++)
        0 < r && (t += e[r].distanceTo(e[r - 1])), (this.lineDistances[r] = t);
    },
    computeBoundingBox: function () {
      null === this.boundingBox && (this.boundingBox = new THREE.Box3()),
        this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function () {
      null === this.boundingSphere &&
        (this.boundingSphere = new THREE.Sphere()),
        this.boundingSphere.setFromPoints(this.vertices);
    },
    merge: function (t, e, r) {
      if (!1 == t instanceof THREE.Geometry)
        console.error(
          "THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
          t
        );
      else {
        var i,
          n = this.vertices.length,
          o = this.vertices,
          a = t.vertices,
          s = this.faces,
          h = t.faces,
          l = this.faceVertexUvs[0];
        (t = t.faceVertexUvs[0]),
          void 0 === r && (r = 0),
          void 0 !== e && (i = new THREE.Matrix3().getNormalMatrix(e));
        for (var c = 0, u = a.length; c < u; c++) {
          var E = a[c].clone();
          void 0 !== e && E.applyMatrix4(e), o.push(E);
        }
        for (c = 0, u = h.length; c < u; c++) {
          var f,
            d = (a = h[c]).vertexNormals,
            p = a.vertexColors;
          for (
            (E = new THREE.Face3(a.a + n, a.b + n, a.c + n)).normal.copy(
              a.normal
            ),
              void 0 !== i && E.normal.applyMatrix3(i).normalize(),
              e = 0,
              o = d.length;
            e < o;
            e++
          )
            (f = d[e].clone()),
              void 0 !== i && f.applyMatrix3(i).normalize(),
              E.vertexNormals.push(f);
          for (E.color.copy(a.color), e = 0, o = p.length; e < o; e++)
            (f = p[e]), E.vertexColors.push(f.clone());
          (E.materialIndex = a.materialIndex + r), s.push(E);
        }
        for (c = 0, u = t.length; c < u; c++)
          if (((i = []), void 0 !== (r = t[c]))) {
            for (e = 0, o = r.length; e < o; e++)
              i.push(new THREE.Vector2(r[e].x, r[e].y));
            l.push(i);
          }
      }
    },
    mergeVertices: function () {
      for (
        var t,
          e = {},
          r = [],
          i = [],
          n = Math.pow(10, 4),
          o = 0,
          a = this.vertices.length;
        o < a;
        o++
      )
        (t = this.vertices[o]),
          void 0 ===
          e[
            (t =
              Math.round(t.x * n) +
              "_" +
              Math.round(t.y * n) +
              "_" +
              Math.round(t.z * n))
          ]
            ? ((e[t] = o), r.push(this.vertices[o]), (i[o] = r.length - 1))
            : (i[o] = i[e[t]]);
      for (e = [], o = 0, a = this.faces.length; o < a; o++)
        for (
          (n = this.faces[o]).a = i[n.a],
            n.b = i[n.b],
            n.c = i[n.c],
            n = [n.a, n.b, n.c],
            t = 0;
          t < 3;
          t++
        )
          if (n[t] == n[(t + 1) % 3]) {
            e.push(o);
            break;
          }
      for (o = e.length - 1; 0 <= o; o--)
        for (
          n = e[o],
            this.faces.splice(n, 1),
            i = 0,
            a = this.faceVertexUvs.length;
          i < a;
          i++
        )
          this.faceVertexUvs[i].splice(n, 1);
      return (o = this.vertices.length - r.length), (this.vertices = r), o;
    },
    toJSON: function () {
      function t(t, e, r) {
        return r ? t | (1 << e) : t & ~(1 << e);
      }
      function e(t) {
        var e = t.x.toString() + t.y.toString() + t.z.toString();
        return (
          void 0 !== h[e] || ((h[e] = s.length / 3), s.push(t.x, t.y, t.z)),
          h[e]
        );
      }
      function r(t) {
        var e = t.r.toString() + t.g.toString() + t.b.toString();
        return void 0 !== c[e] || ((c[e] = l.length), l.push(t.getHex())), c[e];
      }
      function i(t) {
        var e = t.x.toString() + t.y.toString();
        return (
          void 0 !== E[e] || ((E[e] = u.length / 2), u.push(t.x, t.y)), E[e]
        );
      }
      var n = {
        metadata: {
          version: 4,
          type: "BufferGeometry",
          generator: "BufferGeometryExporter",
        },
        uuid: this.uuid,
        type: this.type,
      };
      if (
        ("" !== this.name && (n.name = this.name), void 0 !== this.parameters)
      ) {
        var o = this.parameters;
        for (f in o) void 0 !== o[f] && (n[f] = o[f]);
        return n;
      }
      for (o = [], f = 0; f < this.vertices.length; f++) {
        var a = this.vertices[f];
        o.push(a.x, a.y, a.z);
      }
      for (
        var a = [], s = [], h = {}, l = [], c = {}, u = [], E = {}, f = 0;
        f < this.faces.length;
        f++
      ) {
        var d = this.faces[f],
          p = void 0 !== this.faceVertexUvs[0][f],
          m = 0 < d.normal.length(),
          g = 0 < d.vertexNormals.length,
          T = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
          v = 0 < d.vertexColors.length,
          y = t(0, 3, p),
          y = t(y, 4, m),
          y = t(y, 5, g),
          y = t(y, 6, T),
          y = t(y, 7, v);
        a.push(y),
          a.push(d.a, d.b, d.c),
          p &&
            ((p = this.faceVertexUvs[0][f]), a.push(i(p[0]), i(p[1]), i(p[2]))),
          m && a.push(e(d.normal)),
          g && ((m = d.vertexNormals), a.push(e(m[0]), e(m[1]), e(m[2]))),
          T && a.push(r(d.color)),
          v && ((d = d.vertexColors), a.push(r(d[0]), r(d[1]), r(d[2])));
      }
      return (
        (n.data = {}),
        (n.data.vertices = o),
        (n.data.normals = s),
        0 < l.length && (n.data.colors = l),
        0 < u.length && (n.data.uvs = [u]),
        (n.data.faces = a),
        n
      );
    },
    clone: function () {
      for (
        var t = new THREE.Geometry(), e = this.vertices, r = 0, i = e.length;
        r < i;
        r++
      )
        t.vertices.push(e[r].clone());
      for (r = 0, i = (e = this.faces).length; r < i; r++)
        t.faces.push(e[r].clone());
      for (r = 0, i = (e = this.faceVertexUvs[0]).length; r < i; r++) {
        for (var n = e[r], o = [], a = 0, s = n.length; a < s; a++)
          o.push(new THREE.Vector2(n[a].x, n[a].y));
        t.faceVertexUvs[0].push(o);
      }
      return t;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  }),
  THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),
  (THREE.GeometryIdCount = 0),
  (THREE.Camera = function () {
    THREE.Object3D.call(this),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new THREE.Matrix4()),
      (this.projectionMatrix = new THREE.Matrix4());
  }),
  (THREE.Camera.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.Camera.prototype.getWorldDirection = (function () {
    var e = new THREE.Quaternion();
    return function (t) {
      return (
        (t = t || new THREE.Vector3()),
        this.getWorldQuaternion(e),
        t.set(0, 0, -1).applyQuaternion(e)
      );
    };
  })()),
  (THREE.Camera.prototype.lookAt = (function () {
    var e = new THREE.Matrix4();
    return function (t) {
      e.lookAt(this.position, t, this.up),
        this.quaternion.setFromRotationMatrix(e);
    };
  })()),
  (THREE.Camera.prototype.clone = function (t) {
    return (
      void 0 === t && (t = new THREE.Camera()),
      THREE.Object3D.prototype.clone.call(this, t),
      t.matrixWorldInverse.copy(this.matrixWorldInverse),
      t.projectionMatrix.copy(this.projectionMatrix),
      t
    );
  }),
  (THREE.CubeCamera = function (t, e, r) {
    THREE.Object3D.call(this), (this.type = "CubeCamera");
    var n = new THREE.PerspectiveCamera(90, 1, t, e);
    n.up.set(0, -1, 0), n.lookAt(new THREE.Vector3(1, 0, 0)), this.add(n);
    var o = new THREE.PerspectiveCamera(90, 1, t, e);
    o.up.set(0, -1, 0), o.lookAt(new THREE.Vector3(-1, 0, 0)), this.add(o);
    var a = new THREE.PerspectiveCamera(90, 1, t, e);
    a.up.set(0, 0, 1), a.lookAt(new THREE.Vector3(0, 1, 0)), this.add(a);
    var s = new THREE.PerspectiveCamera(90, 1, t, e);
    s.up.set(0, 0, -1), s.lookAt(new THREE.Vector3(0, -1, 0)), this.add(s);
    var h = new THREE.PerspectiveCamera(90, 1, t, e);
    h.up.set(0, -1, 0), h.lookAt(new THREE.Vector3(0, 0, 1)), this.add(h);
    var l = new THREE.PerspectiveCamera(90, 1, t, e);
    l.up.set(0, -1, 0),
      l.lookAt(new THREE.Vector3(0, 0, -1)),
      this.add(l),
      (this.renderTarget = new THREE.WebGLRenderTargetCube(r, r, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter,
      })),
      (this.updateCubeMap = function (t, e) {
        var r = this.renderTarget,
          i = r.generateMipmaps;
        (r.generateMipmaps = !1),
          (r.activeCubeFace = 0),
          t.render(e, n, r),
          (r.activeCubeFace = 1),
          t.render(e, o, r),
          (r.activeCubeFace = 2),
          t.render(e, a, r),
          (r.activeCubeFace = 3),
          t.render(e, s, r),
          (r.activeCubeFace = 4),
          t.render(e, h, r),
          (r.generateMipmaps = i),
          (r.activeCubeFace = 5),
          t.render(e, l, r);
      });
  }),
  (THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.OrthographicCamera = function (t, e, r, i, n, o) {
    THREE.Camera.call(this),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.left = t),
      (this.right = e),
      (this.top = r),
      (this.bottom = i),
      (this.near = void 0 !== n ? n : 0.1),
      (this.far = void 0 !== o ? o : 2e3),
      this.updateProjectionMatrix();
  }),
  (THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype)),
  (THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
    var t = (this.right - this.left) / (2 * this.zoom),
      e = (this.top - this.bottom) / (2 * this.zoom),
      r = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    this.projectionMatrix.makeOrthographic(
      r - t,
      r + t,
      i + e,
      i - e,
      this.near,
      this.far
    );
  }),
  (THREE.OrthographicCamera.prototype.clone = function () {
    var t = new THREE.OrthographicCamera();
    return (
      THREE.Camera.prototype.clone.call(this, t),
      (t.zoom = this.zoom),
      (t.left = this.left),
      (t.right = this.right),
      (t.top = this.top),
      (t.bottom = this.bottom),
      (t.near = this.near),
      (t.far = this.far),
      t.projectionMatrix.copy(this.projectionMatrix),
      t
    );
  }),
  (THREE.PerspectiveCamera = function (t, e, r, i) {
    THREE.Camera.call(this),
      (this.type = "PerspectiveCamera"),
      (this.zoom = 1),
      (this.fov = void 0 !== t ? t : 50),
      (this.aspect = void 0 !== e ? e : 1),
      (this.near = void 0 !== r ? r : 0.1),
      (this.far = void 0 !== i ? i : 2e3),
      this.updateProjectionMatrix();
  }),
  (THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype)),
  (THREE.PerspectiveCamera.prototype.setLens = function (t, e) {
    void 0 === e && (e = 24),
      (this.fov = 2 * THREE.Math.radToDeg(Math.atan(e / (2 * t)))),
      this.updateProjectionMatrix();
  }),
  (THREE.PerspectiveCamera.prototype.setViewOffset = function (
    t,
    e,
    r,
    i,
    n,
    o
  ) {
    (this.fullWidth = t),
      (this.fullHeight = e),
      (this.x = r),
      (this.y = i),
      (this.width = n),
      (this.height = o),
      this.updateProjectionMatrix();
  }),
  (THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
    var t,
      e,
      r,
      i = THREE.Math.radToDeg(
        2 * Math.atan(Math.tan(0.5 * THREE.Math.degToRad(this.fov)) / this.zoom)
      );
    this.fullWidth
      ? ((t =
          (e = this.fullWidth / this.fullHeight) *
          (r = -(i = Math.tan(THREE.Math.degToRad(0.5 * i)) * this.near))),
        (e = Math.abs(e * i - t)),
        (r = Math.abs(i - r)),
        this.projectionMatrix.makeFrustum(
          t + (this.x * e) / this.fullWidth,
          t + ((this.x + this.width) * e) / this.fullWidth,
          i - ((this.y + this.height) * r) / this.fullHeight,
          i - (this.y * r) / this.fullHeight,
          this.near,
          this.far
        ))
      : this.projectionMatrix.makePerspective(
          i,
          this.aspect,
          this.near,
          this.far
        );
  }),
  (THREE.PerspectiveCamera.prototype.clone = function () {
    var t = new THREE.PerspectiveCamera();
    return (
      THREE.Camera.prototype.clone.call(this, t),
      (t.zoom = this.zoom),
      (t.fov = this.fov),
      (t.aspect = this.aspect),
      (t.near = this.near),
      (t.far = this.far),
      t.projectionMatrix.copy(this.projectionMatrix),
      t
    );
  }),
  (THREE.Light = function (t) {
    THREE.Object3D.call(this),
      (this.type = "Light"),
      (this.color = new THREE.Color(t));
  }),
  (THREE.Light.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.Light.prototype.clone = function (t) {
    return (
      void 0 === t && (t = new THREE.Light()),
      THREE.Object3D.prototype.clone.call(this, t),
      t.color.copy(this.color),
      t
    );
  }),
  (THREE.AmbientLight = function (t) {
    THREE.Light.call(this, t), (this.type = "AmbientLight");
  }),
  (THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype)),
  (THREE.AmbientLight.prototype.clone = function () {
    var t = new THREE.AmbientLight();
    return THREE.Light.prototype.clone.call(this, t), t;
  }),
  (THREE.AreaLight = function (t, e) {
    THREE.Light.call(this, t),
      (this.type = "AreaLight"),
      (this.normal = new THREE.Vector3(0, -1, 0)),
      (this.right = new THREE.Vector3(1, 0, 0)),
      (this.intensity = void 0 !== e ? e : 1),
      (this.height = this.width = 1),
      (this.constantAttenuation = 1.5),
      (this.linearAttenuation = 0.5),
      (this.quadraticAttenuation = 0.1);
  }),
  (THREE.AreaLight.prototype = Object.create(THREE.Light.prototype)),
  (THREE.DirectionalLight = function (t, e) {
    THREE.Light.call(this, t),
      (this.type = "DirectionalLight"),
      this.position.set(0, 1, 0),
      (this.target = new THREE.Object3D()),
      (this.intensity = void 0 !== e ? e : 1),
      (this.onlyShadow = this.castShadow = !1),
      (this.shadowCameraNear = 50),
      (this.shadowCameraFar = 5e3),
      (this.shadowCameraLeft = -500),
      (this.shadowCameraTop = this.shadowCameraRight = 500),
      (this.shadowCameraBottom = -500),
      (this.shadowCameraVisible = !1),
      (this.shadowBias = 0),
      (this.shadowDarkness = 0.5),
      (this.shadowMapHeight = this.shadowMapWidth = 512),
      (this.shadowCascade = !1),
      (this.shadowCascadeOffset = new THREE.Vector3(0, 0, -1e3)),
      (this.shadowCascadeCount = 2),
      (this.shadowCascadeBias = [0, 0, 0]),
      (this.shadowCascadeWidth = [512, 512, 512]),
      (this.shadowCascadeHeight = [512, 512, 512]),
      (this.shadowCascadeNearZ = [-1, 0.99, 0.998]),
      (this.shadowCascadeFarZ = [0.99, 0.998, 1]),
      (this.shadowCascadeArray = []),
      (this.shadowMatrix =
        this.shadowCamera =
        this.shadowMapSize =
        this.shadowMap =
          null);
  }),
  (THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype)),
  (THREE.DirectionalLight.prototype.clone = function () {
    var t = new THREE.DirectionalLight();
    return (
      THREE.Light.prototype.clone.call(this, t),
      (t.target = this.target.clone()),
      (t.intensity = this.intensity),
      (t.castShadow = this.castShadow),
      (t.onlyShadow = this.onlyShadow),
      (t.shadowCameraNear = this.shadowCameraNear),
      (t.shadowCameraFar = this.shadowCameraFar),
      (t.shadowCameraLeft = this.shadowCameraLeft),
      (t.shadowCameraRight = this.shadowCameraRight),
      (t.shadowCameraTop = this.shadowCameraTop),
      (t.shadowCameraBottom = this.shadowCameraBottom),
      (t.shadowCameraVisible = this.shadowCameraVisible),
      (t.shadowBias = this.shadowBias),
      (t.shadowDarkness = this.shadowDarkness),
      (t.shadowMapWidth = this.shadowMapWidth),
      (t.shadowMapHeight = this.shadowMapHeight),
      (t.shadowCascade = this.shadowCascade),
      t.shadowCascadeOffset.copy(this.shadowCascadeOffset),
      (t.shadowCascadeCount = this.shadowCascadeCount),
      (t.shadowCascadeBias = this.shadowCascadeBias.slice(0)),
      (t.shadowCascadeWidth = this.shadowCascadeWidth.slice(0)),
      (t.shadowCascadeHeight = this.shadowCascadeHeight.slice(0)),
      (t.shadowCascadeNearZ = this.shadowCascadeNearZ.slice(0)),
      (t.shadowCascadeFarZ = this.shadowCascadeFarZ.slice(0)),
      t
    );
  }),
  (THREE.HemisphereLight = function (t, e, r) {
    THREE.Light.call(this, t),
      (this.type = "HemisphereLight"),
      this.position.set(0, 100, 0),
      (this.groundColor = new THREE.Color(e)),
      (this.intensity = void 0 !== r ? r : 1);
  }),
  (THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype)),
  (THREE.HemisphereLight.prototype.clone = function () {
    var t = new THREE.HemisphereLight();
    return (
      THREE.Light.prototype.clone.call(this, t),
      t.groundColor.copy(this.groundColor),
      (t.intensity = this.intensity),
      t
    );
  }),
  (THREE.PointLight = function (t, e, r) {
    THREE.Light.call(this, t),
      (this.type = "PointLight"),
      (this.intensity = void 0 !== e ? e : 1),
      (this.distance = void 0 !== r ? r : 0);
  }),
  (THREE.PointLight.prototype = Object.create(THREE.Light.prototype)),
  (THREE.PointLight.prototype.clone = function () {
    var t = new THREE.PointLight();
    return (
      THREE.Light.prototype.clone.call(this, t),
      (t.intensity = this.intensity),
      (t.distance = this.distance),
      t
    );
  }),
  (THREE.SpotLight = function (t, e, r, i, n) {
    THREE.Light.call(this, t),
      (this.type = "SpotLight"),
      this.position.set(0, 1, 0),
      (this.target = new THREE.Object3D()),
      (this.intensity = void 0 !== e ? e : 1),
      (this.distance = void 0 !== r ? r : 0),
      (this.angle = void 0 !== i ? i : Math.PI / 3),
      (this.exponent = void 0 !== n ? n : 10),
      (this.onlyShadow = this.castShadow = !1),
      (this.shadowCameraNear = 50),
      (this.shadowCameraFar = 5e3),
      (this.shadowCameraFov = 50),
      (this.shadowCameraVisible = !1),
      (this.shadowBias = 0),
      (this.shadowDarkness = 0.5),
      (this.shadowMapHeight = this.shadowMapWidth = 512),
      (this.shadowMatrix =
        this.shadowCamera =
        this.shadowMapSize =
        this.shadowMap =
          null);
  }),
  (THREE.SpotLight.prototype = Object.create(THREE.Light.prototype)),
  (THREE.SpotLight.prototype.clone = function () {
    var t = new THREE.SpotLight();
    return (
      THREE.Light.prototype.clone.call(this, t),
      (t.target = this.target.clone()),
      (t.intensity = this.intensity),
      (t.distance = this.distance),
      (t.angle = this.angle),
      (t.exponent = this.exponent),
      (t.castShadow = this.castShadow),
      (t.onlyShadow = this.onlyShadow),
      (t.shadowCameraNear = this.shadowCameraNear),
      (t.shadowCameraFar = this.shadowCameraFar),
      (t.shadowCameraFov = this.shadowCameraFov),
      (t.shadowCameraVisible = this.shadowCameraVisible),
      (t.shadowBias = this.shadowBias),
      (t.shadowDarkness = this.shadowDarkness),
      (t.shadowMapWidth = this.shadowMapWidth),
      (t.shadowMapHeight = this.shadowMapHeight),
      t
    );
  }),
  (THREE.Cache = function () {
    this.files = {};
  }),
  (THREE.Cache.prototype = {
    constructor: THREE.Cache,
    add: function (t, e) {
      this.files[t] = e;
    },
    get: function (t) {
      return this.files[t];
    },
    remove: function (t) {
      delete this.files[t];
    },
    clear: function () {
      this.files = {};
    },
  }),
  (THREE.Loader = function (t) {
    (this.statusDomElement = (this.showStatus = t)
      ? THREE.Loader.prototype.addStatusElement()
      : null),
      (this.imageLoader = new THREE.ImageLoader()),
      (this.onLoadStart = function () {}),
      (this.onLoadProgress = function () {}),
      (this.onLoadComplete = function () {});
  }),
  (THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: void 0,
    addStatusElement: function () {
      var t = document.createElement("div");
      return (
        (t.style.position = "absolute"),
        (t.style.right = "0px"),
        (t.style.top = "0px"),
        (t.style.fontSize = "0.8em"),
        (t.style.textAlign = "left"),
        (t.style.background = "rgba(0,0,0,0.25)"),
        (t.style.color = "#fff"),
        (t.style.width = "120px"),
        (t.style.padding = "0.5em 0.5em 0.5em 0.5em"),
        (t.style.zIndex = 1e3),
        (t.innerHTML = "Loading ..."),
        t
      );
    },
    updateProgress: function (t) {
      var e = "Loaded ",
        e = t.total
          ? e + (((100 * t.loaded) / t.total).toFixed(0) + "%")
          : e + ((t.loaded / 1024).toFixed(2) + " KB");
      this.statusDomElement.innerHTML = e;
    },
    extractUrlBase: function (t) {
      return 1 === (t = t.split("/")).length
        ? "./"
        : (t.pop(), t.join("/") + "/");
    },
    initMaterials: function (t, e) {
      for (var r = [], i = 0; i < t.length; ++i)
        r[i] = this.createMaterial(t[i], e);
      return r;
    },
    needsTangents: function (t) {
      for (var e = 0, r = t.length; e < r; e++)
        if (t[e] instanceof THREE.ShaderMaterial) return !0;
      return !1;
    },
    createMaterial: function (t, c) {
      function u(t) {
        return (t = Math.log(t) / Math.LN2), Math.pow(2, Math.round(t));
      }
      function e(t, e, r, i, n, o, a) {
        var s,
          h = c + r,
          l = THREE.Loader.Handlers.get(h);
        null !== l
          ? (s = l.load(h))
          : ((s = new THREE.Texture()),
            ((l = E.imageLoader).crossOrigin = E.crossOrigin),
            l.load(h, function (t) {
              var e, r, i;
              !1 === THREE.Math.isPowerOfTwo(t.width) ||
              !1 === THREE.Math.isPowerOfTwo(t.height)
                ? ((e = u(t.width)),
                  (r = u(t.height)),
                  ((i = document.createElement("canvas")).width = e),
                  (i.height = r),
                  i.getContext("2d").drawImage(t, 0, 0, e, r),
                  (s.image = i))
                : (s.image = t),
                (s.needsUpdate = !0);
            })),
          (s.sourceFile = r),
          i &&
            (s.repeat.set(i[0], i[1]),
            1 !== i[0] && (s.wrapS = THREE.RepeatWrapping),
            1 !== i[1] && (s.wrapT = THREE.RepeatWrapping)),
          n && s.offset.set(n[0], n[1]),
          o &&
            (void 0 !==
              (r = {
                repeat: THREE.RepeatWrapping,
                mirror: THREE.MirroredRepeatWrapping,
              })[o[0]] && (s.wrapS = r[o[0]]),
            void 0 !== r[o[1]] && (s.wrapT = r[o[1]])),
          a && (s.anisotropy = a),
          (t[e] = s);
      }
      function r(t) {
        return ((255 * t[0]) << 16) + ((255 * t[1]) << 8) + 255 * t[2];
      }
      var i,
        E = this,
        n = "MeshLambertMaterial",
        o = {
          color: 15658734,
          opacity: 1,
          map: null,
          lightMap: null,
          normalMap: null,
          bumpMap: null,
          wireframe: !1,
        };
      return (
        t.shading &&
          ("phong" === (i = t.shading.toLowerCase())
            ? (n = "MeshPhongMaterial")
            : "basic" === i && (n = "MeshBasicMaterial")),
        void 0 !== t.blending &&
          void 0 !== THREE[t.blending] &&
          (o.blending = THREE[t.blending]),
        (void 0 !== t.transparent || t.opacity < 1) &&
          (o.transparent = t.transparent),
        void 0 !== t.depthTest && (o.depthTest = t.depthTest),
        void 0 !== t.depthWrite && (o.depthWrite = t.depthWrite),
        void 0 !== t.visible && (o.visible = t.visible),
        void 0 !== t.flipSided && (o.side = THREE.BackSide),
        void 0 !== t.doubleSided && (o.side = THREE.DoubleSide),
        void 0 !== t.wireframe && (o.wireframe = t.wireframe),
        void 0 !== t.vertexColors &&
          ("face" === t.vertexColors
            ? (o.vertexColors = THREE.FaceColors)
            : t.vertexColors && (o.vertexColors = THREE.VertexColors)),
        t.colorDiffuse
          ? (o.color = r(t.colorDiffuse))
          : t.DbgColor && (o.color = t.DbgColor),
        t.colorSpecular && (o.specular = r(t.colorSpecular)),
        t.colorAmbient && (o.ambient = r(t.colorAmbient)),
        t.colorEmissive && (o.emissive = r(t.colorEmissive)),
        t.transparency && (o.opacity = t.transparency),
        t.specularCoef && (o.shininess = t.specularCoef),
        t.mapDiffuse &&
          c &&
          e(
            o,
            "map",
            t.mapDiffuse,
            t.mapDiffuseRepeat,
            t.mapDiffuseOffset,
            t.mapDiffuseWrap,
            t.mapDiffuseAnisotropy
          ),
        t.mapLight &&
          c &&
          e(
            o,
            "lightMap",
            t.mapLight,
            t.mapLightRepeat,
            t.mapLightOffset,
            t.mapLightWrap,
            t.mapLightAnisotropy
          ),
        t.mapBump &&
          c &&
          e(
            o,
            "bumpMap",
            t.mapBump,
            t.mapBumpRepeat,
            t.mapBumpOffset,
            t.mapBumpWrap,
            t.mapBumpAnisotropy
          ),
        t.mapNormal &&
          c &&
          e(
            o,
            "normalMap",
            t.mapNormal,
            t.mapNormalRepeat,
            t.mapNormalOffset,
            t.mapNormalWrap,
            t.mapNormalAnisotropy
          ),
        t.mapSpecular &&
          c &&
          e(
            o,
            "specularMap",
            t.mapSpecular,
            t.mapSpecularRepeat,
            t.mapSpecularOffset,
            t.mapSpecularWrap,
            t.mapSpecularAnisotropy
          ),
        t.mapAlpha &&
          c &&
          e(
            o,
            "alphaMap",
            t.mapAlpha,
            t.mapAlphaRepeat,
            t.mapAlphaOffset,
            t.mapAlphaWrap,
            t.mapAlphaAnisotropy
          ),
        t.mapBumpScale && (o.bumpScale = t.mapBumpScale),
        t.mapNormal
          ? ((n = THREE.ShaderLib.normalmap),
            ((i = THREE.UniformsUtils.clone(n.uniforms)).tNormal.value =
              o.normalMap),
            t.mapNormalFactor &&
              i.uNormalScale.value.set(t.mapNormalFactor, t.mapNormalFactor),
            o.map && ((i.tDiffuse.value = o.map), (i.enableDiffuse.value = !0)),
            o.specularMap &&
              ((i.tSpecular.value = o.specularMap),
              (i.enableSpecular.value = !0)),
            o.lightMap && ((i.tAO.value = o.lightMap), (i.enableAO.value = !0)),
            i.diffuse.value.setHex(o.color),
            i.specular.value.setHex(o.specular),
            i.ambient.value.setHex(o.ambient),
            (i.shininess.value = o.shininess),
            void 0 !== o.opacity && (i.opacity.value = o.opacity),
            (n = new THREE.ShaderMaterial({
              fragmentShader: n.fragmentShader,
              vertexShader: n.vertexShader,
              uniforms: i,
              lights: !0,
              fog: !0,
            })),
            o.transparent && (n.transparent = !0))
          : (n = new THREE[n](o)),
        void 0 !== t.DbgName && (n.name = t.DbgName),
        n
      );
    },
  }),
  (THREE.Loader.Handlers = {
    handlers: [],
    add: function (t, e) {
      this.handlers.push(t, e);
    },
    get: function (t) {
      for (var e = 0, r = this.handlers.length; e < r; e += 2) {
        var i = this.handlers[e + 1];
        if (this.handlers[e].test(t)) return i;
      }
      return null;
    },
  }),
  (THREE.XHRLoader = function (t) {
    (this.cache = new THREE.Cache()),
      (this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager);
  }),
  (THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader,
    load: function (e, r, i, n) {
      var o = this,
        t = o.cache.get(e);
      void 0 !== t
        ? r && r(t)
        : ((t = new XMLHttpRequest()).open("GET", e, !0),
          t.addEventListener(
            "load",
            function (t) {
              o.cache.add(e, this.response),
                r && r(this.response),
                o.manager.itemEnd(e);
            },
            !1
          ),
          void 0 !== i &&
            t.addEventListener(
              "progress",
              function (t) {
                i(t);
              },
              !1
            ),
          void 0 !== n &&
            t.addEventListener(
              "error",
              function (t) {
                n(t);
              },
              !1
            ),
          void 0 !== this.crossOrigin && (t.crossOrigin = this.crossOrigin),
          void 0 !== this.responseType && (t.responseType = this.responseType),
          t.send(null),
          o.manager.itemStart(e));
    },
    setResponseType: function (t) {
      this.responseType = t;
    },
    setCrossOrigin: function (t) {
      this.crossOrigin = t;
    },
  }),
  (THREE.ImageLoader = function (t) {
    (this.cache = new THREE.Cache()),
      (this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager);
  }),
  (THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader,
    load: function (e, r, i, n) {
      var o = this,
        t = o.cache.get(e);
      if (void 0 === t)
        return (
          (t = document.createElement("img")),
          void 0 !== r &&
            t.addEventListener(
              "load",
              function (t) {
                o.cache.add(e, this), r(this), o.manager.itemEnd(e);
              },
              !1
            ),
          void 0 !== i &&
            t.addEventListener(
              "progress",
              function (t) {
                i(t);
              },
              !1
            ),
          void 0 !== n &&
            t.addEventListener(
              "error",
              function (t) {
                n(t);
              },
              !1
            ),
          void 0 !== this.crossOrigin && (t.crossOrigin = this.crossOrigin),
          (t.src = e),
          o.manager.itemStart(e),
          t
        );
      r(t);
    },
    setCrossOrigin: function (t) {
      this.crossOrigin = t;
    },
  }),
  (THREE.JSONLoader = function (t) {
    THREE.Loader.call(this, t), (this.withCredentials = !1);
  }),
  (THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype)),
  (THREE.JSONLoader.prototype.load = function (t, e, r) {
    (r = r && "string" == typeof r ? r : this.extractUrlBase(t)),
      this.onLoadStart(),
      this.loadAjaxJSON(this, t, e, r);
  }),
  (THREE.JSONLoader.prototype.loadAjaxJSON = function (e, r, i, n, o) {
    var a = new XMLHttpRequest(),
      s = 0;
    (a.onreadystatechange = function () {
      if (a.readyState === a.DONE)
        if (200 === a.status || 0 === a.status) {
          if (a.responseText) {
            var t = JSON.parse(a.responseText);
            if (void 0 !== t.metadata && "scene" === t.metadata.type)
              return void console.error(
                'THREE.JSONLoader: "' +
                  r +
                  '" seems to be a Scene. Use THREE.SceneLoader instead.'
              );
            (t = e.parse(t, n)), i(t.geometry, t.materials);
          } else
            console.error(
              'THREE.JSONLoader: "' +
                r +
                '" seems to be unreachable or the file is empty.'
            );
          e.onLoadComplete();
        } else
          console.error(
            "THREE.JSONLoader: Couldn't load \"" + r + '" (' + a.status + ")"
          );
      else
        a.readyState === a.LOADING
          ? o &&
            (0 === s && (s = a.getResponseHeader("Content-Length")),
            o({ total: s, loaded: a.responseText.length }))
          : a.readyState === a.HEADERS_RECEIVED &&
            void 0 !== o &&
            (s = a.getResponseHeader("Content-Length"));
    }),
      a.open("GET", r, !0),
      (a.withCredentials = this.withCredentials),
      a.send(null);
  }),
  (THREE.JSONLoader.prototype.parse = function (T, t) {
    var v = new THREE.Geometry(),
      e = void 0 !== T.scale ? 1 / T.scale : 1;
    return (
      (function (t) {
        var e,
          r,
          i,
          n,
          o,
          a,
          s,
          h,
          l,
          c,
          u,
          E,
          f = T.faces,
          d = T.vertices,
          p = T.normals,
          m = T.colors,
          g = 0;
        if (void 0 !== T.uvs) {
          for (e = 0; e < T.uvs.length; e++) T.uvs[e].length && g++;
          for (e = 0; e < g; e++) v.faceVertexUvs[e] = [];
        }
        for (n = 0, o = d.length; n < o; )
          ((e = new THREE.Vector3()).x = d[n++] * t),
            (e.y = d[n++] * t),
            (e.z = d[n++] * t),
            v.vertices.push(e);
        for (n = 0, o = f.length; n < o; )
          if (
            ((h = 1 & (t = f[n++])),
            (i = 2 & t),
            (e = 8 & t),
            (a = 16 & t),
            (l = 32 & t),
            (d = 64 & t),
            (t &= 128),
            h)
          ) {
            if (
              (((h = new THREE.Face3()).a = f[n]),
              (h.b = f[n + 1]),
              (h.c = f[n + 3]),
              ((c = new THREE.Face3()).a = f[n + 1]),
              (c.b = f[n + 2]),
              (c.c = f[n + 3]),
              (n += 4),
              i && ((i = f[n++]), (h.materialIndex = i), (c.materialIndex = i)),
              (i = v.faces.length),
              e)
            )
              for (e = 0; e < g; e++)
                for (
                  u = T.uvs[e],
                    v.faceVertexUvs[e][i] = [],
                    v.faceVertexUvs[e][i + 1] = [],
                    r = 0;
                  r < 4;
                  r++
                )
                  (E = u[2 * (s = f[n++])]),
                    (s = u[2 * s + 1]),
                    (E = new THREE.Vector2(E, s)),
                    2 !== r && v.faceVertexUvs[e][i].push(E),
                    0 !== r && v.faceVertexUvs[e][i + 1].push(E);
            if (
              (a &&
                ((a = 3 * f[n++]),
                h.normal.set(p[a++], p[a++], p[a]),
                c.normal.copy(h.normal)),
              l)
            )
              for (e = 0; e < 4; e++)
                (a = 3 * f[n++]),
                  (l = new THREE.Vector3(p[a++], p[a++], p[a])),
                  2 !== e && h.vertexNormals.push(l),
                  0 !== e && c.vertexNormals.push(l);
            if (
              (d &&
                ((d = m[(d = f[n++])]), h.color.setHex(d), c.color.setHex(d)),
              t)
            )
              for (e = 0; e < 4; e++)
                (d = m[(d = f[n++])]),
                  2 !== e && h.vertexColors.push(new THREE.Color(d)),
                  0 !== e && c.vertexColors.push(new THREE.Color(d));
            v.faces.push(h), v.faces.push(c);
          } else {
            if (
              (((h = new THREE.Face3()).a = f[n++]),
              (h.b = f[n++]),
              (h.c = f[n++]),
              i && ((i = f[n++]), (h.materialIndex = i)),
              (i = v.faces.length),
              e)
            )
              for (e = 0; e < g; e++)
                for (
                  u = T.uvs[e], v.faceVertexUvs[e][i] = [], r = 0;
                  r < 3;
                  r++
                )
                  (E = u[2 * (s = f[n++])]),
                    (s = u[2 * s + 1]),
                    (E = new THREE.Vector2(E, s)),
                    v.faceVertexUvs[e][i].push(E);
            if (
              (a && ((a = 3 * f[n++]), h.normal.set(p[a++], p[a++], p[a])), l)
            )
              for (e = 0; e < 3; e++)
                (a = 3 * f[n++]),
                  (l = new THREE.Vector3(p[a++], p[a++], p[a])),
                  h.vertexNormals.push(l);
            if ((d && ((d = f[n++]), h.color.setHex(m[d])), t))
              for (e = 0; e < 3; e++)
                (d = f[n++]), h.vertexColors.push(new THREE.Color(m[d]));
            v.faces.push(h);
          }
      })(e),
      (function () {
        var t = void 0 !== T.influencesPerVertex ? T.influencesPerVertex : 2;
        if (T.skinWeights)
          for (var e = 0, r = T.skinWeights.length; e < r; e += t)
            v.skinWeights.push(
              new THREE.Vector4(
                T.skinWeights[e],
                1 < t ? T.skinWeights[e + 1] : 0,
                2 < t ? T.skinWeights[e + 2] : 0,
                3 < t ? T.skinWeights[e + 3] : 0
              )
            );
        if (T.skinIndices)
          for (e = 0, r = T.skinIndices.length; e < r; e += t)
            v.skinIndices.push(
              new THREE.Vector4(
                T.skinIndices[e],
                1 < t ? T.skinIndices[e + 1] : 0,
                2 < t ? T.skinIndices[e + 2] : 0,
                3 < t ? T.skinIndices[e + 3] : 0
              )
            );
        (v.bones = T.bones),
          v.bones &&
            0 < v.bones.length &&
            (v.skinWeights.length !== v.skinIndices.length ||
              v.skinIndices.length !== v.vertices.length) &&
            console.warn(
              "When skinning, number of vertices (" +
                v.vertices.length +
                "), skinIndices (" +
                v.skinIndices.length +
                "), and skinWeights (" +
                v.skinWeights.length +
                ") should match."
            ),
          (v.animation = T.animation),
          (v.animations = T.animations);
      })(),
      (function (t) {
        if (void 0 !== T.morphTargets)
          for (var e, r, i, n, o = 0, a = T.morphTargets.length; o < a; o++)
            for (
              v.morphTargets[o] = {},
                v.morphTargets[o].name = T.morphTargets[o].name,
                v.morphTargets[o].vertices = [],
                i = v.morphTargets[o].vertices,
                e = 0,
                r = (n = T.morphTargets[o].vertices).length;
              e < r;
              e += 3
            ) {
              var s = new THREE.Vector3();
              (s.x = n[e] * t),
                (s.y = n[e + 1] * t),
                (s.z = n[e + 2] * t),
                i.push(s);
            }
        if (void 0 !== T.morphColors)
          for (o = 0, a = T.morphColors.length; o < a; o++)
            for (
              v.morphColors[o] = {},
                v.morphColors[o].name = T.morphColors[o].name,
                v.morphColors[o].colors = [],
                r = v.morphColors[o].colors,
                t = 0,
                e = (i = T.morphColors[o].colors).length;
              t < e;
              t += 3
            )
              (n = new THREE.Color(16755200)).setRGB(i[t], i[t + 1], i[t + 2]),
                r.push(n);
      })(e),
      v.computeFaceNormals(),
      v.computeBoundingSphere(),
      void 0 === T.materials || 0 === T.materials.length
        ? { geometry: v }
        : ((e = this.initMaterials(T.materials, t)),
          this.needsTangents(e) && v.computeTangents(),
          { geometry: v, materials: e })
    );
  }),
  (THREE.LoadingManager = function (t, e, r) {
    var i = this,
      n = 0,
      o = 0;
    (this.onLoad = t),
      (this.onProgress = e),
      (this.onError = r),
      (this.itemStart = function (t) {
        o++;
      }),
      (this.itemEnd = function (t) {
        n++,
          void 0 !== i.onProgress && i.onProgress(t, n, o),
          n === o && void 0 !== i.onLoad && i.onLoad();
      });
  }),
  (THREE.DefaultLoadingManager = new THREE.LoadingManager()),
  (THREE.BufferGeometryLoader = function (t) {
    this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager;
  }),
  (THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader,
    load: function (t, e, r, i) {
      var n = this,
        o = new THREE.XHRLoader();
      o.setCrossOrigin(this.crossOrigin),
        o.load(
          t,
          function (t) {
            e(n.parse(JSON.parse(t)));
          },
          r,
          i
        );
    },
    setCrossOrigin: function (t) {
      this.crossOrigin = t;
    },
    parse: function (t) {
      var e,
        r = new THREE.BufferGeometry(),
        i = t.attributes;
      for (e in i) {
        var n = i[e],
          o = new self[n.type](n.array);
        r.addAttribute(e, new THREE.BufferAttribute(o, n.itemSize));
      }
      return (
        void 0 !== (i = t.offsets) &&
          (r.offsets = JSON.parse(JSON.stringify(i))),
        void 0 !== (t = t.boundingSphere) &&
          ((i = new THREE.Vector3()),
          void 0 !== t.center && i.fromArray(t.center),
          (r.boundingSphere = new THREE.Sphere(i, t.radius))),
        r
      );
    },
  }),
  (THREE.MaterialLoader = function (t) {
    this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager;
  }),
  (THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader,
    load: function (t, e, r, i) {
      var n = this,
        o = new THREE.XHRLoader();
      o.setCrossOrigin(this.crossOrigin),
        o.load(
          t,
          function (t) {
            e(n.parse(JSON.parse(t)));
          },
          r,
          i
        );
    },
    setCrossOrigin: function (t) {
      this.crossOrigin = t;
    },
    parse: function (t) {
      var e = new THREE[t.type]();
      if (
        (void 0 !== t.color && e.color.setHex(t.color),
        void 0 !== t.ambient && e.ambient.setHex(t.ambient),
        void 0 !== t.emissive && e.emissive.setHex(t.emissive),
        void 0 !== t.specular && e.specular.setHex(t.specular),
        void 0 !== t.shininess && (e.shininess = t.shininess),
        void 0 !== t.uniforms && (e.uniforms = t.uniforms),
        void 0 !== t.vertexShader && (e.vertexShader = t.vertexShader),
        void 0 !== t.fragmentShader && (e.fragmentShader = t.fragmentShader),
        void 0 !== t.vertexColors && (e.vertexColors = t.vertexColors),
        void 0 !== t.shading && (e.shading = t.shading),
        void 0 !== t.blending && (e.blending = t.blending),
        void 0 !== t.side && (e.side = t.side),
        void 0 !== t.opacity && (e.opacity = t.opacity),
        void 0 !== t.transparent && (e.transparent = t.transparent),
        void 0 !== t.wireframe && (e.wireframe = t.wireframe),
        void 0 !== t.materials)
      )
        for (var r = 0, i = t.materials.length; r < i; r++)
          e.materials.push(this.parse(t.materials[r]));
      return e;
    },
  }),
  (THREE.ObjectLoader = function (t) {
    this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager;
  }),
  (THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader,
    load: function (t, e, r, i) {
      var n = this,
        o = new THREE.XHRLoader(n.manager);
      o.setCrossOrigin(this.crossOrigin),
        o.load(
          t,
          function (t) {
            e(n.parse(JSON.parse(t)));
          },
          r,
          i
        );
    },
    setCrossOrigin: function (t) {
      this.crossOrigin = t;
    },
    parse: function (t) {
      var e = this.parseGeometries(t.geometries),
        r = this.parseMaterials(t.materials);
      return this.parseObject(t.object, e, r);
    },
    parseGeometries: function (t) {
      var e = {};
      if (void 0 !== t)
        for (
          var r = new THREE.JSONLoader(),
            i = new THREE.BufferGeometryLoader(),
            n = 0,
            o = t.length;
          n < o;
          n++
        ) {
          var a,
            s = t[n];
          switch (s.type) {
            case "PlaneGeometry":
              a = new THREE.PlaneGeometry(
                s.width,
                s.height,
                s.widthSegments,
                s.heightSegments
              );
              break;
            case "BoxGeometry":
            case "CubeGeometry":
              a = new THREE.BoxGeometry(
                s.width,
                s.height,
                s.depth,
                s.widthSegments,
                s.heightSegments,
                s.depthSegments
              );
              break;
            case "CircleGeometry":
              a = new THREE.CircleGeometry(s.radius, s.segments);
              break;
            case "CylinderGeometry":
              a = new THREE.CylinderGeometry(
                s.radiusTop,
                s.radiusBottom,
                s.height,
                s.radialSegments,
                s.heightSegments,
                s.openEnded
              );
              break;
            case "SphereGeometry":
              a = new THREE.SphereGeometry(
                s.radius,
                s.widthSegments,
                s.heightSegments,
                s.phiStart,
                s.phiLength,
                s.thetaStart,
                s.thetaLength
              );
              break;
            case "IcosahedronGeometry":
              a = new THREE.IcosahedronGeometry(s.radius, s.detail);
              break;
            case "TorusGeometry":
              a = new THREE.TorusGeometry(
                s.radius,
                s.tube,
                s.radialSegments,
                s.tubularSegments,
                s.arc
              );
              break;
            case "TorusKnotGeometry":
              a = new THREE.TorusKnotGeometry(
                s.radius,
                s.tube,
                s.radialSegments,
                s.tubularSegments,
                s.p,
                s.q,
                s.heightScale
              );
              break;
            case "BufferGeometry":
              a = i.parse(s.data);
              break;
            case "Geometry":
              a = r.parse(s.data).geometry;
          }
          (a.uuid = s.uuid),
            void 0 !== s.name && (a.name = s.name),
            (e[s.uuid] = a);
        }
      return e;
    },
    parseMaterials: function (t) {
      var e = {};
      if (void 0 !== t)
        for (
          var r = new THREE.MaterialLoader(), i = 0, n = t.length;
          i < n;
          i++
        ) {
          var o = t[i],
            a = r.parse(o);
          (a.uuid = o.uuid),
            void 0 !== o.name && (a.name = o.name),
            (e[o.uuid] = a);
        }
      return e;
    },
    parseObject: (function () {
      var a = new THREE.Matrix4();
      return function (t, e, r) {
        var i;
        switch (t.type) {
          case "Scene":
            i = new THREE.Scene();
            break;
          case "PerspectiveCamera":
            i = new THREE.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
            break;
          case "OrthographicCamera":
            i = new THREE.OrthographicCamera(
              t.left,
              t.right,
              t.top,
              t.bottom,
              t.near,
              t.far
            );
            break;
          case "AmbientLight":
            i = new THREE.AmbientLight(t.color);
            break;
          case "DirectionalLight":
            i = new THREE.DirectionalLight(t.color, t.intensity);
            break;
          case "PointLight":
            i = new THREE.PointLight(t.color, t.intensity, t.distance);
            break;
          case "SpotLight":
            i = new THREE.SpotLight(
              t.color,
              t.intensity,
              t.distance,
              t.angle,
              t.exponent
            );
            break;
          case "HemisphereLight":
            i = new THREE.HemisphereLight(t.color, t.groundColor, t.intensity);
            break;
          case "Mesh":
            i = e[t.geometry];
            var n = r[t.material];
            void 0 === i &&
              console.warn(
                "THREE.ObjectLoader: Undefined geometry",
                t.geometry
              ),
              void 0 === n &&
                console.warn(
                  "THREE.ObjectLoader: Undefined material",
                  t.material
                ),
              (i = new THREE.Mesh(i, n));
            break;
          case "Line":
            (i = e[t.geometry]),
              (n = r[t.material]),
              void 0 === i &&
                console.warn(
                  "THREE.ObjectLoader: Undefined geometry",
                  t.geometry
                ),
              void 0 === n &&
                console.warn(
                  "THREE.ObjectLoader: Undefined material",
                  t.material
                ),
              (i = new THREE.Line(i, n));
            break;
          case "Sprite":
            void 0 === (n = r[t.material]) &&
              console.warn(
                "THREE.ObjectLoader: Undefined material",
                t.material
              ),
              (i = new THREE.Sprite(n));
            break;
          case "Group":
            i = new THREE.Group();
            break;
          default:
            i = new THREE.Object3D();
        }
        if (
          ((i.uuid = t.uuid),
          void 0 !== t.name && (i.name = t.name),
          void 0 !== t.matrix
            ? (a.fromArray(t.matrix),
              a.decompose(i.position, i.quaternion, i.scale))
            : (void 0 !== t.position && i.position.fromArray(t.position),
              void 0 !== t.rotation && i.rotation.fromArray(t.rotation),
              void 0 !== t.scale && i.scale.fromArray(t.scale)),
          void 0 !== t.visible && (i.visible = t.visible),
          void 0 !== t.userData && (i.userData = t.userData),
          void 0 !== t.children)
        )
          for (var o in t.children)
            i.add(this.parseObject(t.children[o], e, r));
        return i;
      };
    })(),
  }),
  (THREE.TextureLoader = function (t) {
    this.manager = void 0 !== t ? t : THREE.DefaultLoadingManager;
  }),
  (THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader,
    load: function (t, e, r, i) {
      var n = new THREE.ImageLoader(this.manager);
      n.setCrossOrigin(this.crossOrigin),
        n.load(
          t,
          function (t) {
            ((t = new THREE.Texture(t)).needsUpdate = !0), void 0 !== e && e(t);
          },
          r,
          i
        );
    },
    setCrossOrigin: function (t) {
      this.crossOrigin = t;
    },
  }),
  (THREE.CompressedTextureLoader = function () {
    this._parser = null;
  }),
  (THREE.CompressedTextureLoader.prototype = {
    constructor: THREE.CompressedTextureLoader,
    load: function (t, n, e) {
      var o = this,
        a = [],
        s = new THREE.CompressedTexture();
      s.image = a;
      var r = new THREE.XHRLoader();
      if ((r.setResponseType("arraybuffer"), t instanceof Array)) {
        var i = 0;
        e = function (e) {
          r.load(t[e], function (t) {
            (t = o._parser(t, !0)),
              (a[e] = {
                width: t.width,
                height: t.height,
                format: t.format,
                mipmaps: t.mipmaps,
              }),
              6 === (i += 1) &&
                (1 == t.mipmapCount && (s.minFilter = THREE.LinearFilter),
                (s.format = t.format),
                (s.needsUpdate = !0),
                n && n(s));
          });
        };
        for (var h = 0, l = t.length; h < l; ++h) e(h);
      } else
        r.load(t, function (t) {
          if ((t = o._parser(t, !0)).isCubemap)
            for (var e = t.mipmaps.length / t.mipmapCount, r = 0; r < e; r++) {
              a[r] = { mipmaps: [] };
              for (var i = 0; i < t.mipmapCount; i++)
                a[r].mipmaps.push(t.mipmaps[r * t.mipmapCount + i]),
                  (a[r].format = t.format),
                  (a[r].width = t.width),
                  (a[r].height = t.height);
            }
          else
            (s.image.width = t.width),
              (s.image.height = t.height),
              (s.mipmaps = t.mipmaps);
          1 === t.mipmapCount && (s.minFilter = THREE.LinearFilter),
            (s.format = t.format),
            (s.needsUpdate = !0),
            n && n(s);
        });
      return s;
    },
  }),
  (THREE.Material = function () {
    Object.defineProperty(this, "id", { value: THREE.MaterialIdCount++ }),
      (this.uuid = THREE.Math.generateUUID()),
      (this.name = ""),
      (this.type = "Material"),
      (this.side = THREE.FrontSide),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blending = THREE.NormalBlending),
      (this.blendSrc = THREE.SrcAlphaFactor),
      (this.blendDst = THREE.OneMinusSrcAlphaFactor),
      (this.blendEquation = THREE.AddEquation),
      (this.depthWrite = this.depthTest = !0),
      (this.polygonOffset = !1),
      (this.overdraw =
        this.alphaTest =
        this.polygonOffsetUnits =
        this.polygonOffsetFactor =
          0),
      (this.needsUpdate = this.visible = !0);
  }),
  (THREE.Material.prototype = {
    constructor: THREE.Material,
    setValues: function (t) {
      if (void 0 !== t)
        for (var e in t) {
          var r,
            i = t[e];
          void 0 === i
            ? console.warn(
                "THREE.Material: '" + e + "' parameter is undefined."
              )
            : e in this &&
              ((r = this[e]) instanceof THREE.Color
                ? r.set(i)
                : r instanceof THREE.Vector3 && i instanceof THREE.Vector3
                ? r.copy(i)
                : (this[e] = "overdraw" == e ? Number(i) : i));
        }
    },
    toJSON: function () {
      var t = {
        metadata: {
          version: 4.2,
          type: "material",
          generator: "MaterialExporter",
        },
        uuid: this.uuid,
        type: this.type,
      };
      return (
        "" !== this.name && (t.name = this.name),
        this instanceof THREE.MeshBasicMaterial
          ? ((t.color = this.color.getHex()),
            this.vertexColors !== THREE.NoColors &&
              (t.vertexColors = this.vertexColors),
            this.blending !== THREE.NormalBlending &&
              (t.blending = this.blending),
            this.side !== THREE.FrontSide && (t.side = this.side))
          : this instanceof THREE.MeshLambertMaterial
          ? ((t.color = this.color.getHex()),
            (t.ambient = this.ambient.getHex()),
            (t.emissive = this.emissive.getHex()),
            this.vertexColors !== THREE.NoColors &&
              (t.vertexColors = this.vertexColors),
            this.blending !== THREE.NormalBlending &&
              (t.blending = this.blending),
            this.side !== THREE.FrontSide && (t.side = this.side))
          : this instanceof THREE.MeshPhongMaterial
          ? ((t.color = this.color.getHex()),
            (t.ambient = this.ambient.getHex()),
            (t.emissive = this.emissive.getHex()),
            (t.specular = this.specular.getHex()),
            (t.shininess = this.shininess),
            this.vertexColors !== THREE.NoColors &&
              (t.vertexColors = this.vertexColors),
            this.blending !== THREE.NormalBlending &&
              (t.blending = this.blending),
            this.side !== THREE.FrontSide && (t.side = this.side))
          : this instanceof THREE.MeshNormalMaterial
          ? (this.shading !== THREE.FlatShading && (t.shading = this.shading),
            this.blending !== THREE.NormalBlending &&
              (t.blending = this.blending),
            this.side !== THREE.FrontSide && (t.side = this.side))
          : this instanceof THREE.MeshDepthMaterial
          ? (this.blending !== THREE.NormalBlending &&
              (t.blending = this.blending),
            this.side !== THREE.FrontSide && (t.side = this.side))
          : this instanceof THREE.ShaderMaterial
          ? ((t.uniforms = this.uniforms),
            (t.vertexShader = this.vertexShader),
            (t.fragmentShader = this.fragmentShader))
          : this instanceof THREE.SpriteMaterial &&
            (t.color = this.color.getHex()),
        this.opacity < 1 && (t.opacity = this.opacity),
        !1 !== this.transparent && (t.transparent = this.transparent),
        !1 !== this.wireframe && (t.wireframe = this.wireframe),
        t
      );
    },
    clone: function (t) {
      return (
        void 0 === t && (t = new THREE.Material()),
        (t.name = this.name),
        (t.side = this.side),
        (t.opacity = this.opacity),
        (t.transparent = this.transparent),
        (t.blending = this.blending),
        (t.blendSrc = this.blendSrc),
        (t.blendDst = this.blendDst),
        (t.blendEquation = this.blendEquation),
        (t.depthTest = this.depthTest),
        (t.depthWrite = this.depthWrite),
        (t.polygonOffset = this.polygonOffset),
        (t.polygonOffsetFactor = this.polygonOffsetFactor),
        (t.polygonOffsetUnits = this.polygonOffsetUnits),
        (t.alphaTest = this.alphaTest),
        (t.overdraw = this.overdraw),
        (t.visible = this.visible),
        t
      );
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  }),
  THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),
  (THREE.MaterialIdCount = 0),
  (THREE.LineBasicMaterial = function (t) {
    THREE.Material.call(this),
      (this.type = "LineBasicMaterial"),
      (this.color = new THREE.Color(16777215)),
      (this.linewidth = 1),
      (this.linejoin = this.linecap = "round"),
      (this.vertexColors = THREE.NoColors),
      (this.fog = !0),
      this.setValues(t);
  }),
  (THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype)),
  (THREE.LineBasicMaterial.prototype.clone = function () {
    var t = new THREE.LineBasicMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      t.color.copy(this.color),
      (t.linewidth = this.linewidth),
      (t.linecap = this.linecap),
      (t.linejoin = this.linejoin),
      (t.vertexColors = this.vertexColors),
      (t.fog = this.fog),
      t
    );
  }),
  (THREE.LineDashedMaterial = function (t) {
    THREE.Material.call(this),
      (this.type = "LineDashedMaterial"),
      (this.color = new THREE.Color(16777215)),
      (this.scale = this.linewidth = 1),
      (this.dashSize = 3),
      (this.gapSize = 1),
      (this.vertexColors = !1),
      (this.fog = !0),
      this.setValues(t);
  }),
  (THREE.LineDashedMaterial.prototype = Object.create(
    THREE.Material.prototype
  )),
  (THREE.LineDashedMaterial.prototype.clone = function () {
    var t = new THREE.LineDashedMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      t.color.copy(this.color),
      (t.linewidth = this.linewidth),
      (t.scale = this.scale),
      (t.dashSize = this.dashSize),
      (t.gapSize = this.gapSize),
      (t.vertexColors = this.vertexColors),
      (t.fog = this.fog),
      t
    );
  }),
  (THREE.MeshBasicMaterial = function (t) {
    THREE.Material.call(this),
      (this.type = "MeshBasicMaterial"),
      (this.color = new THREE.Color(16777215)),
      (this.envMap =
        this.alphaMap =
        this.specularMap =
        this.lightMap =
        this.map =
          null),
      (this.combine = THREE.MultiplyOperation),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.fog = !0),
      (this.shading = THREE.SmoothShading),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinejoin = this.wireframeLinecap = "round"),
      (this.vertexColors = THREE.NoColors),
      (this.morphTargets = this.skinning = !1),
      this.setValues(t);
  }),
  (THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype)),
  (THREE.MeshBasicMaterial.prototype.clone = function () {
    var t = new THREE.MeshBasicMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      t.color.copy(this.color),
      (t.map = this.map),
      (t.lightMap = this.lightMap),
      (t.specularMap = this.specularMap),
      (t.alphaMap = this.alphaMap),
      (t.envMap = this.envMap),
      (t.combine = this.combine),
      (t.reflectivity = this.reflectivity),
      (t.refractionRatio = this.refractionRatio),
      (t.fog = this.fog),
      (t.shading = this.shading),
      (t.wireframe = this.wireframe),
      (t.wireframeLinewidth = this.wireframeLinewidth),
      (t.wireframeLinecap = this.wireframeLinecap),
      (t.wireframeLinejoin = this.wireframeLinejoin),
      (t.vertexColors = this.vertexColors),
      (t.skinning = this.skinning),
      (t.morphTargets = this.morphTargets),
      t
    );
  }),
  (THREE.MeshLambertMaterial = function (t) {
    THREE.Material.call(this),
      (this.type = "MeshLambertMaterial"),
      (this.color = new THREE.Color(16777215)),
      (this.ambient = new THREE.Color(16777215)),
      (this.emissive = new THREE.Color(0)),
      (this.wrapAround = !1),
      (this.wrapRGB = new THREE.Vector3(1, 1, 1)),
      (this.envMap =
        this.alphaMap =
        this.specularMap =
        this.lightMap =
        this.map =
          null),
      (this.combine = THREE.MultiplyOperation),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.fog = !0),
      (this.shading = THREE.SmoothShading),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinejoin = this.wireframeLinecap = "round"),
      (this.vertexColors = THREE.NoColors),
      (this.morphNormals = this.morphTargets = this.skinning = !1),
      this.setValues(t);
  }),
  (THREE.MeshLambertMaterial.prototype = Object.create(
    THREE.Material.prototype
  )),
  (THREE.MeshLambertMaterial.prototype.clone = function () {
    var t = new THREE.MeshLambertMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      t.color.copy(this.color),
      t.ambient.copy(this.ambient),
      t.emissive.copy(this.emissive),
      (t.wrapAround = this.wrapAround),
      t.wrapRGB.copy(this.wrapRGB),
      (t.map = this.map),
      (t.lightMap = this.lightMap),
      (t.specularMap = this.specularMap),
      (t.alphaMap = this.alphaMap),
      (t.envMap = this.envMap),
      (t.combine = this.combine),
      (t.reflectivity = this.reflectivity),
      (t.refractionRatio = this.refractionRatio),
      (t.fog = this.fog),
      (t.shading = this.shading),
      (t.wireframe = this.wireframe),
      (t.wireframeLinewidth = this.wireframeLinewidth),
      (t.wireframeLinecap = this.wireframeLinecap),
      (t.wireframeLinejoin = this.wireframeLinejoin),
      (t.vertexColors = this.vertexColors),
      (t.skinning = this.skinning),
      (t.morphTargets = this.morphTargets),
      (t.morphNormals = this.morphNormals),
      t
    );
  }),
  (THREE.MeshPhongMaterial = function (t) {
    THREE.Material.call(this),
      (this.type = "MeshPhongMaterial"),
      (this.color = new THREE.Color(16777215)),
      (this.ambient = new THREE.Color(16777215)),
      (this.emissive = new THREE.Color(0)),
      (this.specular = new THREE.Color(1118481)),
      (this.shininess = 30),
      (this.wrapAround = this.metal = !1),
      (this.wrapRGB = new THREE.Vector3(1, 1, 1)),
      (this.bumpMap = this.lightMap = this.map = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalScale = new THREE.Vector2(1, 1)),
      (this.envMap = this.alphaMap = this.specularMap = null),
      (this.combine = THREE.MultiplyOperation),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.fog = !0),
      (this.shading = THREE.SmoothShading),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinejoin = this.wireframeLinecap = "round"),
      (this.vertexColors = THREE.NoColors),
      (this.morphNormals = this.morphTargets = this.skinning = !1),
      this.setValues(t);
  }),
  (THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype)),
  (THREE.MeshPhongMaterial.prototype.clone = function () {
    var t = new THREE.MeshPhongMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      t.color.copy(this.color),
      t.ambient.copy(this.ambient),
      t.emissive.copy(this.emissive),
      t.specular.copy(this.specular),
      (t.shininess = this.shininess),
      (t.metal = this.metal),
      (t.wrapAround = this.wrapAround),
      t.wrapRGB.copy(this.wrapRGB),
      (t.map = this.map),
      (t.lightMap = this.lightMap),
      (t.bumpMap = this.bumpMap),
      (t.bumpScale = this.bumpScale),
      (t.normalMap = this.normalMap),
      t.normalScale.copy(this.normalScale),
      (t.specularMap = this.specularMap),
      (t.alphaMap = this.alphaMap),
      (t.envMap = this.envMap),
      (t.combine = this.combine),
      (t.reflectivity = this.reflectivity),
      (t.refractionRatio = this.refractionRatio),
      (t.fog = this.fog),
      (t.shading = this.shading),
      (t.wireframe = this.wireframe),
      (t.wireframeLinewidth = this.wireframeLinewidth),
      (t.wireframeLinecap = this.wireframeLinecap),
      (t.wireframeLinejoin = this.wireframeLinejoin),
      (t.vertexColors = this.vertexColors),
      (t.skinning = this.skinning),
      (t.morphTargets = this.morphTargets),
      (t.morphNormals = this.morphNormals),
      t
    );
  }),
  (THREE.MeshDepthMaterial = function (t) {
    THREE.Material.call(this),
      (this.type = "MeshDepthMaterial"),
      (this.wireframe = this.morphTargets = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(t);
  }),
  (THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype)),
  (THREE.MeshDepthMaterial.prototype.clone = function () {
    var t = new THREE.MeshDepthMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      (t.wireframe = this.wireframe),
      (t.wireframeLinewidth = this.wireframeLinewidth),
      t
    );
  }),
  (THREE.MeshNormalMaterial = function (t) {
    THREE.Material.call(this, t),
      (this.type = "MeshNormalMaterial"),
      (this.shading = THREE.FlatShading),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.morphTargets = !1),
      this.setValues(t);
  }),
  (THREE.MeshNormalMaterial.prototype = Object.create(
    THREE.Material.prototype
  )),
  (THREE.MeshNormalMaterial.prototype.clone = function () {
    var t = new THREE.MeshNormalMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      (t.shading = this.shading),
      (t.wireframe = this.wireframe),
      (t.wireframeLinewidth = this.wireframeLinewidth),
      t
    );
  }),
  (THREE.MeshFaceMaterial = function (t) {
    (this.uuid = THREE.Math.generateUUID()),
      (this.type = "MeshFaceMaterial"),
      (this.materials = t instanceof Array ? t : []);
  }),
  (THREE.MeshFaceMaterial.prototype = {
    constructor: THREE.MeshFaceMaterial,
    toJSON: function () {
      for (
        var t = {
            metadata: {
              version: 4.2,
              type: "material",
              generator: "MaterialExporter",
            },
            uuid: this.uuid,
            type: this.type,
            materials: [],
          },
          e = 0,
          r = this.materials.length;
        e < r;
        e++
      )
        t.materials.push(this.materials[e].toJSON());
      return t;
    },
    clone: function () {
      for (
        var t = new THREE.MeshFaceMaterial(), e = 0;
        e < this.materials.length;
        e++
      )
        t.materials.push(this.materials[e].clone());
      return t;
    },
  }),
  (THREE.PointCloudMaterial = function (t) {
    THREE.Material.call(this),
      (this.type = "PointCloudMaterial"),
      (this.color = new THREE.Color(16777215)),
      (this.map = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.vertexColors = THREE.NoColors),
      (this.fog = !0),
      this.setValues(t);
  }),
  (THREE.PointCloudMaterial.prototype = Object.create(
    THREE.Material.prototype
  )),
  (THREE.PointCloudMaterial.prototype.clone = function () {
    var t = new THREE.PointCloudMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      t.color.copy(this.color),
      (t.map = this.map),
      (t.size = this.size),
      (t.sizeAttenuation = this.sizeAttenuation),
      (t.vertexColors = this.vertexColors),
      (t.fog = this.fog),
      t
    );
  }),
  (THREE.ParticleBasicMaterial = function (t) {
    return (
      console.warn(
        "THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial."
      ),
      new THREE.PointCloudMaterial(t)
    );
  }),
  (THREE.ParticleSystemMaterial = function (t) {
    return (
      console.warn(
        "THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial."
      ),
      new THREE.PointCloudMaterial(t)
    );
  }),
  (THREE.ShaderMaterial = function (t) {
    THREE.Material.call(this),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.attributes = null),
      (this.vertexShader =
        "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
      (this.fragmentShader =
        "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
      (this.shading = THREE.SmoothShading),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.lights = this.fog = !1),
      (this.vertexColors = THREE.NoColors),
      (this.morphNormals = this.morphTargets = this.skinning = !1),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      this.setValues(t);
  }),
  (THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype)),
  (THREE.ShaderMaterial.prototype.clone = function () {
    var t = new THREE.ShaderMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      (t.fragmentShader = this.fragmentShader),
      (t.vertexShader = this.vertexShader),
      (t.uniforms = THREE.UniformsUtils.clone(this.uniforms)),
      (t.attributes = this.attributes),
      (t.defines = this.defines),
      (t.shading = this.shading),
      (t.wireframe = this.wireframe),
      (t.wireframeLinewidth = this.wireframeLinewidth),
      (t.fog = this.fog),
      (t.lights = this.lights),
      (t.vertexColors = this.vertexColors),
      (t.skinning = this.skinning),
      (t.morphTargets = this.morphTargets),
      (t.morphNormals = this.morphNormals),
      t
    );
  }),
  (THREE.RawShaderMaterial = function (t) {
    THREE.ShaderMaterial.call(this, t), (this.type = "RawShaderMaterial");
  }),
  (THREE.RawShaderMaterial.prototype = Object.create(
    THREE.ShaderMaterial.prototype
  )),
  (THREE.RawShaderMaterial.prototype.clone = function () {
    var t = new THREE.RawShaderMaterial();
    return THREE.ShaderMaterial.prototype.clone.call(this, t), t;
  }),
  (THREE.SpriteMaterial = function (t) {
    THREE.Material.call(this),
      (this.type = "SpriteMaterial"),
      (this.color = new THREE.Color(16777215)),
      (this.map = null),
      (this.rotation = 0),
      (this.fog = !1),
      this.setValues(t);
  }),
  (THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype)),
  (THREE.SpriteMaterial.prototype.clone = function () {
    var t = new THREE.SpriteMaterial();
    return (
      THREE.Material.prototype.clone.call(this, t),
      t.color.copy(this.color),
      (t.map = this.map),
      (t.rotation = this.rotation),
      (t.fog = this.fog),
      t
    );
  }),
  (THREE.Texture = function (t, e, r, i, n, o, a, s, h) {
    Object.defineProperty(this, "id", { value: THREE.TextureIdCount++ }),
      (this.uuid = THREE.Math.generateUUID()),
      (this.name = ""),
      (this.image = void 0 !== t ? t : THREE.Texture.DEFAULT_IMAGE),
      (this.mipmaps = []),
      (this.mapping = void 0 !== e ? e : THREE.Texture.DEFAULT_MAPPING),
      (this.wrapS = void 0 !== r ? r : THREE.ClampToEdgeWrapping),
      (this.wrapT = void 0 !== i ? i : THREE.ClampToEdgeWrapping),
      (this.magFilter = void 0 !== n ? n : THREE.LinearFilter),
      (this.minFilter = void 0 !== o ? o : THREE.LinearMipMapLinearFilter),
      (this.anisotropy = void 0 !== h ? h : 1),
      (this.format = void 0 !== a ? a : THREE.RGBAFormat),
      (this.type = void 0 !== s ? s : THREE.UnsignedByteType),
      (this.offset = new THREE.Vector2(0, 0)),
      (this.repeat = new THREE.Vector2(1, 1)),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this._needsUpdate = !1),
      (this.onUpdate = null);
  }),
  (THREE.Texture.DEFAULT_IMAGE = void 0),
  (THREE.Texture.DEFAULT_MAPPING = new THREE.UVMapping()),
  (THREE.Texture.prototype = {
    constructor: THREE.Texture,
    get needsUpdate() {
      return this._needsUpdate;
    },
    set needsUpdate(t) {
      !0 === t && this.update(), (this._needsUpdate = t);
    },
    clone: function (t) {
      return (
        void 0 === t && (t = new THREE.Texture()),
        (t.image = this.image),
        (t.mipmaps = this.mipmaps.slice(0)),
        (t.mapping = this.mapping),
        (t.wrapS = this.wrapS),
        (t.wrapT = this.wrapT),
        (t.magFilter = this.magFilter),
        (t.minFilter = this.minFilter),
        (t.anisotropy = this.anisotropy),
        (t.format = this.format),
        (t.type = this.type),
        t.offset.copy(this.offset),
        t.repeat.copy(this.repeat),
        (t.generateMipmaps = this.generateMipmaps),
        (t.premultiplyAlpha = this.premultiplyAlpha),
        (t.flipY = this.flipY),
        (t.unpackAlignment = this.unpackAlignment),
        t
      );
    },
    update: function () {
      this.dispatchEvent({ type: "update" });
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  }),
  THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),
  (THREE.TextureIdCount = 0),
  (THREE.CubeTexture = function (t, e, r, i, n, o, a, s, h) {
    THREE.Texture.call(this, t, e, r, i, n, o, a, s, h), (this.images = t);
  }),
  (THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype)),
  (THREE.CubeTexture.clone = function (t) {
    return (
      void 0 === t && (t = new THREE.CubeTexture()),
      THREE.Texture.prototype.clone.call(this, t),
      (t.images = this.images),
      t
    );
  }),
  (THREE.CompressedTexture = function (t, e, r, i, n, o, a, s, h, l, c) {
    THREE.Texture.call(this, null, o, a, s, h, l, i, n, c),
      (this.image = { width: e, height: r }),
      (this.mipmaps = t),
      (this.generateMipmaps = this.flipY = !1);
  }),
  (THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype)),
  (THREE.CompressedTexture.prototype.clone = function () {
    var t = new THREE.CompressedTexture();
    return THREE.Texture.prototype.clone.call(this, t), t;
  }),
  (THREE.DataTexture = function (t, e, r, i, n, o, a, s, h, l, c) {
    THREE.Texture.call(this, null, o, a, s, h, l, i, n, c),
      (this.image = { data: t, width: e, height: r });
  }),
  (THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype)),
  (THREE.DataTexture.prototype.clone = function () {
    var t = new THREE.DataTexture();
    return THREE.Texture.prototype.clone.call(this, t), t;
  }),
  (THREE.VideoTexture = function (t, e, r, i, n, o, a, s, h) {
    THREE.Texture.call(this, t, e, r, i, n, o, a, s, h),
      (this.generateMipmaps = !1);
    var l = this,
      c = function () {
        requestAnimationFrame(c),
          t.readyState === t.HAVE_ENOUGH_DATA && (l.needsUpdate = !0);
      };
    c();
  }),
  (THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype)),
  (THREE.Group = function () {
    THREE.Object3D.call(this), (this.type = "Group");
  }),
  (THREE.Group.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.PointCloud = function (t, e) {
    THREE.Object3D.call(this),
      (this.type = "PointCloud"),
      (this.geometry = void 0 !== t ? t : new THREE.Geometry()),
      (this.material =
        void 0 !== e
          ? e
          : new THREE.PointCloudMaterial({ color: 16777215 * Math.random() })),
      (this.sortParticles = !1);
  }),
  (THREE.PointCloud.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.PointCloud.prototype.raycast = (function () {
    var p = new THREE.Matrix4(),
      m = new THREE.Ray();
    return function (n, o) {
      var a = this,
        t = a.geometry,
        e = n.params.PointCloud.threshold;
      if (
        (p.getInverse(this.matrixWorld),
        m.copy(n.ray).applyMatrix4(p),
        null === t.boundingBox || !1 !== m.isIntersectionBox(t.boundingBox))
      ) {
        var s = e / ((this.scale.x + this.scale.y + this.scale.z) / 3),
          r = new THREE.Vector3(),
          e = function (t, e) {
            var r,
              i = m.distanceToPoint(t);
            i < s &&
              ((r = m.closestPointToPoint(t)).applyMatrix4(a.matrixWorld),
              (t = n.ray.origin.distanceTo(r)),
              o.push({
                distance: t,
                distanceToRay: i,
                point: r.clone(),
                index: e,
                face: null,
                object: a,
              }));
          };
        if (t instanceof THREE.BufferGeometry) {
          var i = (h = t.attributes).position.array;
          if (void 0 !== h.index) {
            var h = h.index.array,
              l = t.offsets;
            0 === l.length && (l = [{ start: 0, count: h.length, index: 0 }]);
            for (var c = 0, u = l.length; c < u; ++c)
              for (
                var E = l[c].start, f = l[c].index, t = E, E = E + l[c].count;
                t < E;
                t++
              ) {
                var d = f + h[t];
                r.fromArray(i, 3 * d), e(r, d);
              }
          } else
            for (h = i.length / 3, t = 0; t < h; t++)
              r.set(i[3 * t], i[3 * t + 1], i[3 * t + 2]), e(r, t);
        } else
          for (r = this.geometry.vertices, t = 0; t < r.length; t++) e(r[t], t);
      }
    };
  })()),
  (THREE.PointCloud.prototype.clone = function (t) {
    return (
      void 0 === t && (t = new THREE.PointCloud(this.geometry, this.material)),
      (t.sortParticles = this.sortParticles),
      THREE.Object3D.prototype.clone.call(this, t),
      t
    );
  }),
  (THREE.ParticleSystem = function (t, e) {
    return (
      console.warn(
        "THREE.ParticleSystem has been renamed to THREE.PointCloud."
      ),
      new THREE.PointCloud(t, e)
    );
  }),
  (THREE.Line = function (t, e, r) {
    THREE.Object3D.call(this),
      (this.type = "Line"),
      (this.geometry = void 0 !== t ? t : new THREE.Geometry()),
      (this.material =
        void 0 !== e
          ? e
          : new THREE.LineBasicMaterial({ color: 16777215 * Math.random() })),
      (this.mode = void 0 !== r ? r : THREE.LineStrip);
  }),
  (THREE.LineStrip = 0),
  (THREE.LinePieces = 1),
  (THREE.Line.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.Line.prototype.raycast = (function () {
    var c = new THREE.Matrix4(),
      u = new THREE.Ray(),
      E = new THREE.Sphere();
    return function (t, e) {
      var r,
        i = (i = t.linePrecision) * i,
        n = this.geometry;
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        E.copy(n.boundingSphere),
        E.applyMatrix4(this.matrixWorld),
        !1 !== t.ray.isIntersectionSphere(E) &&
          (c.getInverse(this.matrixWorld),
          u.copy(t.ray).applyMatrix4(c),
          n instanceof THREE.Geometry))
      )
        for (
          var o = (n = n.vertices).length,
            a = new THREE.Vector3(),
            s = new THREE.Vector3(),
            h = this.mode === THREE.LineStrip ? 1 : 2,
            l = 0;
          l < o - 1;
          l += h
        )
          u.distanceSqToSegment(n[l], n[l + 1], s, a) > i ||
            (r = u.origin.distanceTo(s)) < t.near ||
            r > t.far ||
            e.push({
              distance: r,
              point: a.clone().applyMatrix4(this.matrixWorld),
              face: null,
              faceIndex: null,
              object: this,
            });
    };
  })()),
  (THREE.Line.prototype.clone = function (t) {
    return (
      void 0 === t &&
        (t = new THREE.Line(this.geometry, this.material, this.mode)),
      THREE.Object3D.prototype.clone.call(this, t),
      t
    );
  }),
  (THREE.Mesh = function (t, e) {
    THREE.Object3D.call(this),
      (this.type = "Mesh"),
      (this.geometry = void 0 !== t ? t : new THREE.Geometry()),
      (this.material =
        void 0 !== e
          ? e
          : new THREE.MeshBasicMaterial({ color: 16777215 * Math.random() })),
      this.updateMorphTargets();
  }),
  (THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.Mesh.prototype.updateMorphTargets = function () {
    if (
      void 0 !== this.geometry.morphTargets &&
      0 < this.geometry.morphTargets.length
    ) {
      (this.morphTargetBase = -1),
        (this.morphTargetForcedOrder = []),
        (this.morphTargetInfluences = []),
        (this.morphTargetDictionary = {});
      for (var t = 0, e = this.geometry.morphTargets.length; t < e; t++)
        this.morphTargetInfluences.push(0),
          (this.morphTargetDictionary[this.geometry.morphTargets[t].name] = t);
    }
  }),
  (THREE.Mesh.prototype.getMorphTargetIndexByName = function (t) {
    return void 0 !== this.morphTargetDictionary[t]
      ? this.morphTargetDictionary[t]
      : (console.log(
          "THREE.Mesh.getMorphTargetIndexByName: morph target " +
            t +
            " does not exist. Returning 0."
        ),
        0);
  }),
  (THREE.Mesh.prototype.raycast = (function () {
    var y = new THREE.Matrix4(),
      R = new THREE.Ray(),
      x = new THREE.Sphere(),
      H = new THREE.Vector3(),
      _ = new THREE.Vector3(),
      b = new THREE.Vector3();
    return function (t, e) {
      if (
        (null === (f = this.geometry).boundingSphere &&
          f.computeBoundingSphere(),
        x.copy(f.boundingSphere),
        x.applyMatrix4(this.matrixWorld),
        !1 !== t.ray.isIntersectionSphere(x) &&
          (y.getInverse(this.matrixWorld),
          R.copy(t.ray).applyMatrix4(y),
          null === f.boundingBox || !1 !== R.isIntersectionBox(f.boundingBox)))
      )
        if (f instanceof THREE.BufferGeometry) {
          var r = this.material;
          if (void 0 !== r) {
            var i,
              n,
              o = f.attributes,
              a = t.precision;
            if (void 0 !== o.index) {
              var s = o.index.array,
                h = o.position.array,
                l = f.offsets;
              0 === l.length && (l = [{ start: 0, count: s.length, index: 0 }]);
              for (var c = 0, u = l.length; c < u; ++c)
                for (
                  var o = l[c].start, E = l[c].index, f = o, d = o + l[c].count;
                  f < d;
                  f += 3
                ) {
                  (o = E + s[f]),
                    (i = E + s[f + 1]),
                    (n = E + s[f + 2]),
                    H.fromArray(h, 3 * o),
                    _.fromArray(h, 3 * i),
                    b.fromArray(h, 3 * n);
                  var p,
                    m =
                      r.side === THREE.BackSide
                        ? R.intersectTriangle(b, _, H, !0)
                        : R.intersectTriangle(
                            H,
                            _,
                            b,
                            r.side !== THREE.DoubleSide
                          );
                  null !== m &&
                    (m.applyMatrix4(this.matrixWorld),
                    (p = t.ray.origin.distanceTo(m)) < a ||
                      p < t.near ||
                      p > t.far ||
                      e.push({
                        distance: p,
                        point: m,
                        face: new THREE.Face3(
                          o,
                          i,
                          n,
                          THREE.Triangle.normal(H, _, b)
                        ),
                        faceIndex: null,
                        object: this,
                      }));
                }
            } else
              for (
                s = f = 0, d = (h = o.position.array).length;
                f < d;
                f += 3, s += 9
              )
                (i = (o = f) + 1),
                  (n = f + 2),
                  H.fromArray(h, s),
                  _.fromArray(h, s + 3),
                  b.fromArray(h, s + 6),
                  null !==
                    (m =
                      r.side === THREE.BackSide
                        ? R.intersectTriangle(b, _, H, !0)
                        : R.intersectTriangle(
                            H,
                            _,
                            b,
                            r.side !== THREE.DoubleSide
                          )) &&
                    (m.applyMatrix4(this.matrixWorld),
                    (p = t.ray.origin.distanceTo(m)) < a ||
                      p < t.near ||
                      p > t.far ||
                      e.push({
                        distance: p,
                        point: m,
                        face: new THREE.Face3(
                          o,
                          i,
                          n,
                          THREE.Triangle.normal(H, _, b)
                        ),
                        faceIndex: null,
                        object: this,
                      }));
          }
        } else if (f instanceof THREE.Geometry)
          for (
            h =
              !0 === (s = this.material instanceof THREE.MeshFaceMaterial)
                ? this.material.materials
                : null,
              a = t.precision,
              l = f.vertices,
              c = 0,
              u = f.faces.length;
            c < u;
            c++
          )
            if (
              ((E = f.faces[c]),
              void 0 !== (r = !0 === s ? h[E.materialIndex] : this.material))
            ) {
              if (
                ((o = l[E.a]),
                (i = l[E.b]),
                (n = l[E.c]),
                !0 === r.morphTargets)
              ) {
                (m = f.morphTargets),
                  (p = this.morphTargetInfluences),
                  H.set(0, 0, 0),
                  _.set(0, 0, 0),
                  b.set(0, 0, 0);
                for (var d = 0, g = m.length; d < g; d++) {
                  var T,
                    v = p[d];
                  0 !== v &&
                    ((T = m[d].vertices),
                    (H.x += (T[E.a].x - o.x) * v),
                    (H.y += (T[E.a].y - o.y) * v),
                    (H.z += (T[E.a].z - o.z) * v),
                    (_.x += (T[E.b].x - i.x) * v),
                    (_.y += (T[E.b].y - i.y) * v),
                    (_.z += (T[E.b].z - i.z) * v),
                    (b.x += (T[E.c].x - n.x) * v),
                    (b.y += (T[E.c].y - n.y) * v),
                    (b.z += (T[E.c].z - n.z) * v));
                }
                H.add(o), _.add(i), b.add(n), (o = H), (i = _), (n = b);
              }
              null !==
                (m =
                  r.side === THREE.BackSide
                    ? R.intersectTriangle(n, i, o, !0)
                    : R.intersectTriangle(
                        o,
                        i,
                        n,
                        r.side !== THREE.DoubleSide
                      )) &&
                (m.applyMatrix4(this.matrixWorld),
                (p = t.ray.origin.distanceTo(m)) < a ||
                  p < t.near ||
                  p > t.far ||
                  e.push({
                    distance: p,
                    point: m,
                    face: E,
                    faceIndex: c,
                    object: this,
                  }));
            }
    };
  })()),
  (THREE.Mesh.prototype.clone = function (t, e) {
    return (
      void 0 === t && (t = new THREE.Mesh(this.geometry, this.material)),
      THREE.Object3D.prototype.clone.call(this, t, e),
      t
    );
  }),
  (THREE.Bone = function (t) {
    THREE.Object3D.call(this), (this.skin = t);
  }),
  (THREE.Bone.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.Skeleton = function (t, e, r) {
    if (
      ((this.useVertexTexture = void 0 === r || r),
      (this.identityMatrix = new THREE.Matrix4()),
      (t = t || []),
      (this.bones = t.slice(0)),
      this.useVertexTexture
        ? ((this.boneTextureHeight =
            this.boneTextureWidth =
            t =
              256 < this.bones.length
                ? 64
                : 64 < this.bones.length
                ? 32
                : 16 < this.bones.length
                ? 16
                : 8),
          (this.boneMatrices = new Float32Array(
            this.boneTextureWidth * this.boneTextureHeight * 4
          )),
          (this.boneTexture = new THREE.DataTexture(
            this.boneMatrices,
            this.boneTextureWidth,
            this.boneTextureHeight,
            THREE.RGBAFormat,
            THREE.FloatType
          )),
          (this.boneTexture.minFilter = THREE.NearestFilter),
          (this.boneTexture.magFilter = THREE.NearestFilter),
          (this.boneTexture.generateMipmaps = !1),
          (this.boneTexture.flipY = !1))
        : (this.boneMatrices = new Float32Array(16 * this.bones.length)),
      void 0 === e)
    )
      this.calculateInverses();
    else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
    else
      for (
        console.warn("THREE.Skeleton bonInverses is the wrong length."),
          this.boneInverses = [],
          e = 0,
          t = this.bones.length;
        e < t;
        e++
      )
        this.boneInverses.push(new THREE.Matrix4());
  }),
  (THREE.Skeleton.prototype.calculateInverses = function () {
    this.boneInverses = [];
    for (var t = 0, e = this.bones.length; t < e; t++) {
      var r = new THREE.Matrix4();
      this.bones[t] && r.getInverse(this.bones[t].matrixWorld),
        this.boneInverses.push(r);
    }
  }),
  (THREE.Skeleton.prototype.pose = function () {
    for (var t, e = 0, r = this.bones.length; e < r; e++)
      (t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e]);
    for (e = 0, r = this.bones.length; e < r; e++)
      (t = this.bones[e]) &&
        (t.parent
          ? (t.matrix.getInverse(t.parent.matrixWorld),
            t.matrix.multiply(t.matrixWorld))
          : t.matrix.copy(t.matrixWorld),
        t.matrix.decompose(t.position, t.quaternion, t.scale));
  }),
  (THREE.Skeleton.prototype.update = (function () {
    var r = new THREE.Matrix4();
    return function () {
      for (var t = 0, e = this.bones.length; t < e; t++)
        r.multiplyMatrices(
          this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix,
          this.boneInverses[t]
        ),
          r.flattenToArrayOffset(this.boneMatrices, 16 * t);
      this.useVertexTexture && (this.boneTexture.needsUpdate = !0);
    };
  })()),
  (THREE.SkinnedMesh = function (t, e, r) {
    if (
      (THREE.Mesh.call(this, t, e),
      (this.type = "SkinnedMesh"),
      (this.bindMode = "attached"),
      (this.bindMatrix = new THREE.Matrix4()),
      (this.bindMatrixInverse = new THREE.Matrix4()),
      (t = []),
      this.geometry && void 0 !== this.geometry.bones)
    ) {
      for (var i, n, o, a, s = 0, h = this.geometry.bones.length; s < h; ++s)
        (n = (i = this.geometry.bones[s]).pos),
          (o = i.rotq),
          (a = i.scl),
          (e = new THREE.Bone(this)),
          t.push(e),
          (e.name = i.name),
          e.position.set(n[0], n[1], n[2]),
          e.quaternion.set(o[0], o[1], o[2], o[3]),
          void 0 !== a ? e.scale.set(a[0], a[1], a[2]) : e.scale.set(1, 1, 1);
      for (s = 0, h = this.geometry.bones.length; s < h; ++s)
        (-1 !== (i = this.geometry.bones[s]).parent ? t[i.parent] : this).add(
          t[s]
        );
    }
    this.normalizeSkinWeights(),
      this.updateMatrixWorld(!0),
      this.bind(new THREE.Skeleton(t, void 0, r));
  }),
  (THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype)),
  (THREE.SkinnedMesh.prototype.bind = function (t, e) {
    (this.skeleton = t),
      void 0 === e && (this.updateMatrixWorld(!0), (e = this.matrixWorld)),
      this.bindMatrix.copy(e),
      this.bindMatrixInverse.getInverse(e);
  }),
  (THREE.SkinnedMesh.prototype.pose = function () {
    this.skeleton.pose();
  }),
  (THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
    if (this.geometry instanceof THREE.Geometry)
      for (var t = 0; t < this.geometry.skinIndices.length; t++) {
        var e = this.geometry.skinWeights[t],
          r = 1 / e.lengthManhattan();
        1 / 0 != r ? e.multiplyScalar(r) : e.set(1);
      }
  }),
  (THREE.SkinnedMesh.prototype.updateMatrixWorld = function (t) {
    THREE.Mesh.prototype.updateMatrixWorld.call(this, !0),
      "attached" === this.bindMode
        ? this.bindMatrixInverse.getInverse(this.matrixWorld)
        : "detached" === this.bindMode
        ? this.bindMatrixInverse.getInverse(this.bindMatrix)
        : console.warn(
            "THREE.SkinnedMesh unreckognized bindMode: " + this.bindMode
          );
  }),
  (THREE.SkinnedMesh.prototype.clone = function (t) {
    return (
      void 0 === t &&
        (t = new THREE.SkinnedMesh(
          this.geometry,
          this.material,
          this.useVertexTexture
        )),
      THREE.Mesh.prototype.clone.call(this, t),
      t
    );
  }),
  (THREE.MorphAnimMesh = function (t, e) {
    THREE.Mesh.call(this, t, e),
      (this.type = "MorphAnimMesh"),
      (this.duration = 1e3),
      (this.mirroredLoop = !1),
      (this.currentKeyframe = this.lastKeyframe = this.time = 0),
      (this.direction = 1),
      (this.directionBackwards = !1),
      this.setFrameRange(0, this.geometry.morphTargets.length - 1);
  }),
  (THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype)),
  (THREE.MorphAnimMesh.prototype.setFrameRange = function (t, e) {
    (this.startKeyframe = t),
      (this.endKeyframe = e),
      (this.length = this.endKeyframe - this.startKeyframe + 1);
  }),
  (THREE.MorphAnimMesh.prototype.setDirectionForward = function () {
    (this.direction = 1), (this.directionBackwards = !1);
  }),
  (THREE.MorphAnimMesh.prototype.setDirectionBackward = function () {
    (this.direction = -1), (this.directionBackwards = !0);
  }),
  (THREE.MorphAnimMesh.prototype.parseAnimations = function () {
    var t = this.geometry;
    t.animations || (t.animations = {});
    for (
      var e,
        r = t.animations,
        i = /([a-z]+)_?(\d+)/,
        n = 0,
        o = t.morphTargets.length;
      n < o;
      n++
    ) {
      var a,
        s = t.morphTargets[n].name.match(i);
      s &&
        1 < s.length &&
        (r[(s = s[1])] || (r[s] = { start: 1 / 0, end: -1 / 0 }),
        n < (a = r[s]).start && (a.start = n),
        n > a.end && (a.end = n),
        (e = e || s));
    }
    t.firstAnimation = e;
  }),
  (THREE.MorphAnimMesh.prototype.setAnimationLabel = function (t, e, r) {
    this.geometry.animations || (this.geometry.animations = {}),
      (this.geometry.animations[t] = { start: e, end: r });
  }),
  (THREE.MorphAnimMesh.prototype.playAnimation = function (t, e) {
    var r = this.geometry.animations[t];
    r
      ? (this.setFrameRange(r.start, r.end),
        (this.duration = ((r.end - r.start) / e) * 1e3),
        (this.time = 0))
      : console.warn("animation[" + t + "] undefined");
  }),
  (THREE.MorphAnimMesh.prototype.updateAnimation = function (t) {
    var e = this.duration / this.length;
    (this.time += this.direction * t),
      this.mirroredLoop
        ? (this.time > this.duration || this.time < 0) &&
          ((this.direction *= -1),
          this.time > this.duration &&
            ((this.time = this.duration), (this.directionBackwards = !0)),
          this.time < 0 && ((this.time = 0), (this.directionBackwards = !1)))
        : ((this.time %= this.duration),
          this.time < 0 && (this.time += this.duration)),
      (t =
        this.startKeyframe +
        THREE.Math.clamp(Math.floor(this.time / e), 0, this.length - 1)) !==
        this.currentKeyframe &&
        ((this.morphTargetInfluences[this.lastKeyframe] = 0),
        (this.morphTargetInfluences[this.currentKeyframe] = 1),
        (this.morphTargetInfluences[t] = 0),
        (this.lastKeyframe = this.currentKeyframe),
        (this.currentKeyframe = t)),
      (e = (this.time % e) / e),
      this.directionBackwards && (e = 1 - e),
      (this.morphTargetInfluences[this.currentKeyframe] = e),
      (this.morphTargetInfluences[this.lastKeyframe] = 1 - e);
  }),
  (THREE.MorphAnimMesh.prototype.interpolateTargets = function (t, e, r) {
    for (var i = this.morphTargetInfluences, n = 0, o = i.length; n < o; n++)
      i[n] = 0;
    -1 < t && (i[t] = 1 - r), -1 < e && (i[e] = r);
  }),
  (THREE.MorphAnimMesh.prototype.clone = function (t) {
    return (
      void 0 === t &&
        (t = new THREE.MorphAnimMesh(this.geometry, this.material)),
      (t.duration = this.duration),
      (t.mirroredLoop = this.mirroredLoop),
      (t.time = this.time),
      (t.lastKeyframe = this.lastKeyframe),
      (t.currentKeyframe = this.currentKeyframe),
      (t.direction = this.direction),
      (t.directionBackwards = this.directionBackwards),
      THREE.Mesh.prototype.clone.call(this, t),
      t
    );
  }),
  (THREE.LOD = function () {
    THREE.Object3D.call(this), (this.objects = []);
  }),
  (THREE.LOD.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.LOD.prototype.addLevel = function (t, e) {
    void 0 === e && (e = 0), (e = Math.abs(e));
    for (
      var r = 0;
      r < this.objects.length && !(e < this.objects[r].distance);
      r++
    );
    this.objects.splice(r, 0, { distance: e, object: t }), this.add(t);
  }),
  (THREE.LOD.prototype.getObjectForDistance = function (t) {
    for (
      var e = 1, r = this.objects.length;
      e < r && !(t < this.objects[e].distance);
      e++
    );
    return this.objects[e - 1].object;
  }),
  (THREE.LOD.prototype.raycast = (function () {
    var i = new THREE.Vector3();
    return function (t, e) {
      i.setFromMatrixPosition(this.matrixWorld);
      var r = t.ray.origin.distanceTo(i);
      this.getObjectForDistance(r).raycast(t, e);
    };
  })()),
  (THREE.LOD.prototype.update = (function () {
    var i = new THREE.Vector3(),
      n = new THREE.Vector3();
    return function (t) {
      if (1 < this.objects.length) {
        i.setFromMatrixPosition(t.matrixWorld),
          n.setFromMatrixPosition(this.matrixWorld),
          (t = i.distanceTo(n)),
          (this.objects[0].object.visible = !0);
        for (
          var e = 1, r = this.objects.length;
          e < r && t >= this.objects[e].distance;
          e++
        )
          (this.objects[e - 1].object.visible = !1),
            (this.objects[e].object.visible = !0);
        for (; e < r; e++) this.objects[e].object.visible = !1;
      }
    };
  })()),
  (THREE.LOD.prototype.clone = function (t) {
    void 0 === t && (t = new THREE.LOD()),
      THREE.Object3D.prototype.clone.call(this, t);
    for (var e = 0, r = this.objects.length; e < r; e++) {
      var i = this.objects[e].object.clone();
      (i.visible = 0 === e), t.addLevel(i, this.objects[e].distance);
    }
    return t;
  }),
  (THREE.Sprite = (function () {
    var t = new Uint16Array([0, 1, 2, 0, 2, 3]),
      e = new Float32Array([
        -0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0,
      ]),
      r = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
      i = new THREE.BufferGeometry();
    return (
      i.addAttribute("index", new THREE.BufferAttribute(t, 1)),
      i.addAttribute("position", new THREE.BufferAttribute(e, 3)),
      i.addAttribute("uv", new THREE.BufferAttribute(r, 2)),
      function (t) {
        THREE.Object3D.call(this),
          (this.type = "Sprite"),
          (this.geometry = i),
          (this.material = void 0 !== t ? t : new THREE.SpriteMaterial());
      }
    );
  })()),
  (THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.Sprite.prototype.raycast = (function () {
    var r = new THREE.Vector3();
    return function (t, e) {
      r.setFromMatrixPosition(this.matrixWorld);
      t = t.ray.distanceToPoint(r);
      t > this.scale.x ||
        e.push({ distance: t, point: this.position, face: null, object: this });
    };
  })()),
  (THREE.Sprite.prototype.clone = function (t) {
    return (
      void 0 === t && (t = new THREE.Sprite(this.material)),
      THREE.Object3D.prototype.clone.call(this, t),
      t
    );
  }),
  (THREE.Particle = THREE.Sprite),
  (THREE.LensFlare = function (t, e, r, i, n) {
    THREE.Object3D.call(this),
      (this.lensFlares = []),
      (this.positionScreen = new THREE.Vector3()),
      (this.customUpdateCallback = void 0) !== t && this.add(t, e, r, i, n);
  }),
  (THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.LensFlare.prototype.add = function (t, e, r, i, n, o) {
    void 0 === e && (e = -1),
      void 0 === r && (r = 0),
      void 0 === o && (o = 1),
      void 0 === n && (n = new THREE.Color(16777215)),
      void 0 === i && (i = THREE.NormalBlending),
      (r = Math.min(r, Math.max(0, r))),
      this.lensFlares.push({
        texture: t,
        size: e,
        distance: r,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 1,
        opacity: o,
        color: n,
        blending: i,
      });
  }),
  (THREE.LensFlare.prototype.updateLensFlares = function () {
    for (
      var t,
        e = this.lensFlares.length,
        r = 2 * -this.positionScreen.x,
        i = 2 * -this.positionScreen.y,
        n = 0;
      n < e;
      n++
    )
      ((t = this.lensFlares[n]).x = this.positionScreen.x + r * t.distance),
        (t.y = this.positionScreen.y + i * t.distance),
        (t.wantedRotation = t.x * Math.PI * 0.25),
        (t.rotation += 0.25 * (t.wantedRotation - t.rotation));
  }),
  (THREE.Scene = function () {
    THREE.Object3D.call(this),
      (this.type = "Scene"),
      (this.overrideMaterial = this.fog = null),
      (this.autoUpdate = !0);
  }),
  (THREE.Scene.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.Scene.prototype.clone = function (t) {
    return (
      void 0 === t && (t = new THREE.Scene()),
      THREE.Object3D.prototype.clone.call(this, t),
      null !== this.fog && (t.fog = this.fog.clone()),
      null !== this.overrideMaterial &&
        (t.overrideMaterial = this.overrideMaterial.clone()),
      (t.autoUpdate = this.autoUpdate),
      (t.matrixAutoUpdate = this.matrixAutoUpdate),
      t
    );
  }),
  (THREE.Fog = function (t, e, r) {
    (this.name = ""),
      (this.color = new THREE.Color(t)),
      (this.near = void 0 !== e ? e : 1),
      (this.far = void 0 !== r ? r : 1e3);
  }),
  (THREE.Fog.prototype.clone = function () {
    return new THREE.Fog(this.color.getHex(), this.near, this.far);
  }),
  (THREE.FogExp2 = function (t, e) {
    (this.name = ""),
      (this.color = new THREE.Color(t)),
      (this.density = void 0 !== e ? e : 25e-5);
  }),
  (THREE.FogExp2.prototype.clone = function () {
    return new THREE.FogExp2(this.color.getHex(), this.density);
  }),
  (THREE.ShaderChunk = {}),
  (THREE.ShaderChunk.alphatest_fragment =
    "#ifdef ALPHATEST\n\n\tif ( gl_FragColor.a < ALPHATEST ) discard;\n\n#endif\n"),
  (THREE.ShaderChunk.lights_lambert_vertex =
    "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\tvec3 dirVector = normalize( lDirection.xyz );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat lDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n\n#endif"),
  (THREE.ShaderChunk.map_particle_pars_fragment =
    "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif"),
  (THREE.ShaderChunk.default_vertex =
    "vec4 mvPosition;\n\n#ifdef USE_SKINNING\n\n\tmvPosition = modelViewMatrix * skinned;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;"),
  (THREE.ShaderChunk.map_pars_fragment =
    "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif"),
  (THREE.ShaderChunk.skinnormal_vertex =
    "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n"),
  (THREE.ShaderChunk.logdepthbuf_pars_vertex =
    "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif"),
  (THREE.ShaderChunk.lightmap_pars_vertex =
    "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif"),
  (THREE.ShaderChunk.lights_phong_fragment =
    "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef DOUBLE_SIDED\n\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tvec3 pointDiffuse = vec3( 0.0 );\n\tvec3 pointSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tpointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tvec3 spotDiffuse = vec3( 0.0 );\n\tvec3 spotSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\n\n\t\t\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tvec3 dirDiffuse = vec3( 0.0 );\n\tvec3 dirSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tdirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tvec3 hemiDiffuse = vec3( 0.0 );\n\tvec3 hemiSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\themiDiffuse += diffuse * hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n\n#if MAX_DIR_LIGHTS > 0\n\n\ttotalDiffuse += dirDiffuse;\n\ttotalSpecular += dirSpecular;\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\ttotalDiffuse += hemiDiffuse;\n\ttotalSpecular += hemiSpecular;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\ttotalDiffuse += pointDiffuse;\n\ttotalSpecular += pointSpecular;\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\ttotalDiffuse += spotDiffuse;\n\ttotalSpecular += spotSpecular;\n\n#endif\n\n#ifdef METAL\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\n#else\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n#endif"),
  (THREE.ShaderChunk.fog_pars_fragment =
    "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif"),
  (THREE.ShaderChunk.morphnormal_vertex =
    "#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif"),
  (THREE.ShaderChunk.envmap_pars_fragment =
    "#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\tuniform samplerCube envMap;\n\tuniform float flipEnvMap;\n\tuniform int combine;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform bool useRefract;\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif"),
  (THREE.ShaderChunk.logdepthbuf_fragment =
    "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif"),
  (THREE.ShaderChunk.normalmap_pars_fragment =
    "#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t\t\t// Per-Pixel Tangent Space Normal Mapping\n\t\t\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n"),
  (THREE.ShaderChunk.lights_phong_pars_vertex =
    "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n"),
  (THREE.ShaderChunk.lightmap_pars_fragment =
    "#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif"),
  (THREE.ShaderChunk.shadowmap_vertex =
    "#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif"),
  (THREE.ShaderChunk.lights_phong_vertex =
    "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif"),
  (THREE.ShaderChunk.map_fragment =
    "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\t#ifdef GAMMA_INPUT\n\n\t\ttexelColor.xyz *= texelColor.xyz;\n\n\t#endif\n\n\tgl_FragColor = gl_FragColor * texelColor;\n\n#endif"),
  (THREE.ShaderChunk.lightmap_vertex =
    "#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif"),
  (THREE.ShaderChunk.map_particle_fragment =
    "#ifdef USE_MAP\n\n\tgl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n\n#endif"),
  (THREE.ShaderChunk.color_pars_fragment =
    "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n"),
  (THREE.ShaderChunk.color_vertex =
    "#ifdef USE_COLOR\n\n\t#ifdef GAMMA_INPUT\n\n\t\tvColor = color * color;\n\n\t#else\n\n\t\tvColor = color;\n\n\t#endif\n\n#endif"),
  (THREE.ShaderChunk.skinning_vertex =
    "#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n"),
  (THREE.ShaderChunk.envmap_pars_vertex =
    "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\tuniform bool useRefract;\n\n#endif\n"),
  (THREE.ShaderChunk.linear_to_gamma_fragment =
    "#ifdef GAMMA_OUTPUT\n\n\tgl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n#endif"),
  (THREE.ShaderChunk.color_pars_vertex =
    "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif"),
  (THREE.ShaderChunk.lights_lambert_pars_vertex =
    "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n"),
  (THREE.ShaderChunk.map_pars_vertex =
    "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n"),
  (THREE.ShaderChunk.envmap_fragment =
    "#ifdef USE_ENVMAP\n\n\tvec3 reflectVec;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\n\t\tvec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );\n\n\t\tif ( useRefract ) {\n\n\t\t\treflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t} else { \n\n\t\t\treflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t}\n\n\t#else\n\n\t\treflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t\tvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#else\n\n\t\tvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#endif\n\n\t#ifdef GAMMA_INPUT\n\n\t\tcubeColor.xyz *= cubeColor.xyz;\n\n\t#endif\n\n\tif ( combine == 1 ) {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n\n\t} else if ( combine == 2 ) {\n\n\t\tgl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n\n\t} else {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n\n\t}\n\n#endif"),
  (THREE.ShaderChunk.specularmap_pars_fragment =
    "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif"),
  (THREE.ShaderChunk.logdepthbuf_vertex =
    "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif"),
  (THREE.ShaderChunk.morphtarget_pars_vertex =
    "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif"),
  (THREE.ShaderChunk.specularmap_fragment =
    "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif"),
  (THREE.ShaderChunk.fog_fragment =
    "#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tconst float LOG2 = 1.442695;\n\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n#endif"),
  (THREE.ShaderChunk.bumpmap_pars_fragment =
    "#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t\t\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t\t\t//\thttp://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t\t\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif"),
  (THREE.ShaderChunk.defaultnormal_vertex =
    "vec3 objectNormal;\n\n#ifdef USE_SKINNING\n\n\tobjectNormal = skinnedNormal.xyz;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\n\n\tobjectNormal = morphedNormal;\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\n\n\tobjectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;"),
  (THREE.ShaderChunk.lights_phong_pars_fragment =
    "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;"),
  (THREE.ShaderChunk.skinbase_vertex =
    "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif"),
  (THREE.ShaderChunk.map_vertex =
    "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif"),
  (THREE.ShaderChunk.lightmap_fragment =
    "#ifdef USE_LIGHTMAP\n\n\tgl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n\n#endif"),
  (THREE.ShaderChunk.shadowmap_pars_vertex =
    "#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif"),
  (THREE.ShaderChunk.color_fragment =
    "#ifdef USE_COLOR\n\n\tgl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n\n#endif"),
  (THREE.ShaderChunk.morphtarget_vertex =
    "#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif"),
  (THREE.ShaderChunk.envmap_vertex =
    "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\n\tworldNormal = normalize( worldNormal );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tif ( useRefract ) {\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t} else {\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t}\n\n#endif"),
  (THREE.ShaderChunk.shadowmap_fragment =
    "#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\tshadowColor *= shadowColor;\n\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n\n#endif\n"),
  (THREE.ShaderChunk.worldpos_vertex =
    "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#endif\n\n\t#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#endif\n\n\t#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif"),
  (THREE.ShaderChunk.shadowmap_pars_fragment =
    "#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif"),
  (THREE.ShaderChunk.skinning_pars_vertex =
    "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n"),
  (THREE.ShaderChunk.logdepthbuf_pars_fragment =
    "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif"),
  (THREE.ShaderChunk.alphamap_fragment =
    "#ifdef USE_ALPHAMAP\n\n\tgl_FragColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n"),
  (THREE.ShaderChunk.alphamap_pars_fragment =
    "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n"),
  (THREE.UniformsUtils = {
    merge: function (t) {
      for (var e = {}, r = 0; r < t.length; r++) {
        var i,
          n = this.clone(t[r]);
        for (i in n) e[i] = n[i];
      }
      return e;
    },
    clone: function (t) {
      var e,
        r = {};
      for (e in t)
        for (var i in ((r[e] = {}), t[e])) {
          var n = t[e][i];
          r[e][i] =
            n instanceof THREE.Color ||
            n instanceof THREE.Vector2 ||
            n instanceof THREE.Vector3 ||
            n instanceof THREE.Vector4 ||
            n instanceof THREE.Matrix4 ||
            n instanceof THREE.Texture
              ? n.clone()
              : n instanceof Array
              ? n.slice()
              : n;
        }
      return r;
    },
  }),
  (THREE.UniformsLib = {
    common: {
      diffuse: { type: "c", value: new THREE.Color(15658734) },
      opacity: { type: "f", value: 1 },
      map: { type: "t", value: null },
      offsetRepeat: { type: "v4", value: new THREE.Vector4(0, 0, 1, 1) },
      lightMap: { type: "t", value: null },
      specularMap: { type: "t", value: null },
      alphaMap: { type: "t", value: null },
      envMap: { type: "t", value: null },
      flipEnvMap: { type: "f", value: -1 },
      useRefract: { type: "i", value: 0 },
      reflectivity: { type: "f", value: 1 },
      refractionRatio: { type: "f", value: 0.98 },
      combine: { type: "i", value: 0 },
      morphTargetInfluences: { type: "f", value: 0 },
    },
    bump: {
      bumpMap: { type: "t", value: null },
      bumpScale: { type: "f", value: 1 },
    },
    normalmap: {
      normalMap: { type: "t", value: null },
      normalScale: { type: "v2", value: new THREE.Vector2(1, 1) },
    },
    fog: {
      fogDensity: { type: "f", value: 25e-5 },
      fogNear: { type: "f", value: 1 },
      fogFar: { type: "f", value: 2e3 },
      fogColor: { type: "c", value: new THREE.Color(16777215) },
    },
    lights: {
      ambientLightColor: { type: "fv", value: [] },
      directionalLightDirection: { type: "fv", value: [] },
      directionalLightColor: { type: "fv", value: [] },
      hemisphereLightDirection: { type: "fv", value: [] },
      hemisphereLightSkyColor: { type: "fv", value: [] },
      hemisphereLightGroundColor: { type: "fv", value: [] },
      pointLightColor: { type: "fv", value: [] },
      pointLightPosition: { type: "fv", value: [] },
      pointLightDistance: { type: "fv1", value: [] },
      spotLightColor: { type: "fv", value: [] },
      spotLightPosition: { type: "fv", value: [] },
      spotLightDirection: { type: "fv", value: [] },
      spotLightDistance: { type: "fv1", value: [] },
      spotLightAngleCos: { type: "fv1", value: [] },
      spotLightExponent: { type: "fv1", value: [] },
    },
    particle: {
      psColor: { type: "c", value: new THREE.Color(15658734) },
      opacity: { type: "f", value: 1 },
      size: { type: "f", value: 1 },
      scale: { type: "f", value: 1 },
      map: { type: "t", value: null },
      fogDensity: { type: "f", value: 25e-5 },
      fogNear: { type: "f", value: 1 },
      fogFar: { type: "f", value: 2e3 },
      fogColor: { type: "c", value: new THREE.Color(16777215) },
    },
    shadowmap: {
      shadowMap: { type: "tv", value: [] },
      shadowMapSize: { type: "v2v", value: [] },
      shadowBias: { type: "fv1", value: [] },
      shadowDarkness: { type: "fv1", value: [] },
      shadowMatrix: { type: "m4v", value: [] },
    },
  }),
  (THREE.ShaderLib = {
    basic: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.common,
        THREE.UniformsLib.fog,
        THREE.UniformsLib.shadowmap,
      ]),
      vertexShader: [
        THREE.ShaderChunk.map_pars_vertex,
        THREE.ShaderChunk.lightmap_pars_vertex,
        THREE.ShaderChunk.envmap_pars_vertex,
        THREE.ShaderChunk.color_pars_vertex,
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.map_vertex,
        THREE.ShaderChunk.lightmap_vertex,
        THREE.ShaderChunk.color_vertex,
        THREE.ShaderChunk.skinbase_vertex,
        "\t#ifdef USE_ENVMAP",
        THREE.ShaderChunk.morphnormal_vertex,
        THREE.ShaderChunk.skinnormal_vertex,
        THREE.ShaderChunk.defaultnormal_vertex,
        "\t#endif",
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.skinning_vertex,
        THREE.ShaderChunk.default_vertex,
        THREE.ShaderChunk.logdepthbuf_vertex,
        THREE.ShaderChunk.worldpos_vertex,
        THREE.ShaderChunk.envmap_vertex,
        THREE.ShaderChunk.shadowmap_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform vec3 diffuse;\nuniform float opacity;",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.map_pars_fragment,
        THREE.ShaderChunk.alphamap_pars_fragment,
        THREE.ShaderChunk.lightmap_pars_fragment,
        THREE.ShaderChunk.envmap_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.specularmap_pars_fragment,
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {\n\tgl_FragColor = vec4( diffuse, opacity );",
        THREE.ShaderChunk.logdepthbuf_fragment,
        THREE.ShaderChunk.map_fragment,
        THREE.ShaderChunk.alphamap_fragment,
        THREE.ShaderChunk.alphatest_fragment,
        THREE.ShaderChunk.specularmap_fragment,
        THREE.ShaderChunk.lightmap_fragment,
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.envmap_fragment,
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    lambert: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.common,
        THREE.UniformsLib.fog,
        THREE.UniformsLib.lights,
        THREE.UniformsLib.shadowmap,
        {
          ambient: { type: "c", value: new THREE.Color(16777215) },
          emissive: { type: "c", value: new THREE.Color(0) },
          wrapRGB: { type: "v3", value: new THREE.Vector3(1, 1, 1) },
        },
      ]),
      vertexShader: [
        "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",
        THREE.ShaderChunk.map_pars_vertex,
        THREE.ShaderChunk.lightmap_pars_vertex,
        THREE.ShaderChunk.envmap_pars_vertex,
        THREE.ShaderChunk.lights_lambert_pars_vertex,
        THREE.ShaderChunk.color_pars_vertex,
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.map_vertex,
        THREE.ShaderChunk.lightmap_vertex,
        THREE.ShaderChunk.color_vertex,
        THREE.ShaderChunk.morphnormal_vertex,
        THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.skinnormal_vertex,
        THREE.ShaderChunk.defaultnormal_vertex,
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.skinning_vertex,
        THREE.ShaderChunk.default_vertex,
        THREE.ShaderChunk.logdepthbuf_vertex,
        THREE.ShaderChunk.worldpos_vertex,
        THREE.ShaderChunk.envmap_vertex,
        THREE.ShaderChunk.lights_lambert_vertex,
        THREE.ShaderChunk.shadowmap_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.map_pars_fragment,
        THREE.ShaderChunk.alphamap_pars_fragment,
        THREE.ShaderChunk.lightmap_pars_fragment,
        THREE.ShaderChunk.envmap_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.specularmap_pars_fragment,
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",
        THREE.ShaderChunk.logdepthbuf_fragment,
        THREE.ShaderChunk.map_fragment,
        THREE.ShaderChunk.alphamap_fragment,
        THREE.ShaderChunk.alphatest_fragment,
        THREE.ShaderChunk.specularmap_fragment,
        "\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\tgl_FragColor.xyz *= vLightFront;\n\t\telse\n\t\t\tgl_FragColor.xyz *= vLightBack;\n\t#else\n\t\tgl_FragColor.xyz *= vLightFront;\n\t#endif",
        THREE.ShaderChunk.lightmap_fragment,
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.envmap_fragment,
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    phong: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.common,
        THREE.UniformsLib.bump,
        THREE.UniformsLib.normalmap,
        THREE.UniformsLib.fog,
        THREE.UniformsLib.lights,
        THREE.UniformsLib.shadowmap,
        {
          ambient: { type: "c", value: new THREE.Color(16777215) },
          emissive: { type: "c", value: new THREE.Color(0) },
          specular: { type: "c", value: new THREE.Color(1118481) },
          shininess: { type: "f", value: 30 },
          wrapRGB: { type: "v3", value: new THREE.Vector3(1, 1, 1) },
        },
      ]),
      vertexShader: [
        "#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
        THREE.ShaderChunk.map_pars_vertex,
        THREE.ShaderChunk.lightmap_pars_vertex,
        THREE.ShaderChunk.envmap_pars_vertex,
        THREE.ShaderChunk.lights_phong_pars_vertex,
        THREE.ShaderChunk.color_pars_vertex,
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.map_vertex,
        THREE.ShaderChunk.lightmap_vertex,
        THREE.ShaderChunk.color_vertex,
        THREE.ShaderChunk.morphnormal_vertex,
        THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.skinnormal_vertex,
        THREE.ShaderChunk.defaultnormal_vertex,
        "\tvNormal = normalize( transformedNormal );",
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.skinning_vertex,
        THREE.ShaderChunk.default_vertex,
        THREE.ShaderChunk.logdepthbuf_vertex,
        "\tvViewPosition = -mvPosition.xyz;",
        THREE.ShaderChunk.worldpos_vertex,
        THREE.ShaderChunk.envmap_vertex,
        THREE.ShaderChunk.lights_phong_vertex,
        THREE.ShaderChunk.shadowmap_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "#define PHONG\nuniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.map_pars_fragment,
        THREE.ShaderChunk.alphamap_pars_fragment,
        THREE.ShaderChunk.lightmap_pars_fragment,
        THREE.ShaderChunk.envmap_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.lights_phong_pars_fragment,
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.bumpmap_pars_fragment,
        THREE.ShaderChunk.normalmap_pars_fragment,
        THREE.ShaderChunk.specularmap_pars_fragment,
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",
        THREE.ShaderChunk.logdepthbuf_fragment,
        THREE.ShaderChunk.map_fragment,
        THREE.ShaderChunk.alphamap_fragment,
        THREE.ShaderChunk.alphatest_fragment,
        THREE.ShaderChunk.specularmap_fragment,
        THREE.ShaderChunk.lights_phong_fragment,
        THREE.ShaderChunk.lightmap_fragment,
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.envmap_fragment,
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    particle_basic: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.particle,
        THREE.UniformsLib.shadowmap,
      ]),
      vertexShader: [
        "uniform float size;\nuniform float scale;",
        THREE.ShaderChunk.color_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.color_vertex,
        "\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",
        THREE.ShaderChunk.logdepthbuf_vertex,
        THREE.ShaderChunk.worldpos_vertex,
        THREE.ShaderChunk.shadowmap_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform vec3 psColor;\nuniform float opacity;",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.map_particle_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {\n\tgl_FragColor = vec4( psColor, opacity );",
        THREE.ShaderChunk.logdepthbuf_fragment,
        THREE.ShaderChunk.map_particle_fragment,
        THREE.ShaderChunk.alphatest_fragment,
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    dashed: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.common,
        THREE.UniformsLib.fog,
        {
          scale: { type: "f", value: 1 },
          dashSize: { type: "f", value: 1 },
          totalSize: { type: "f", value: 2 },
        },
      ]),
      vertexShader: [
        "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",
        THREE.ShaderChunk.color_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.color_vertex,
        "\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",
        THREE.ShaderChunk.logdepthbuf_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tgl_FragColor = vec4( diffuse, opacity );",
        THREE.ShaderChunk.logdepthbuf_fragment,
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    depth: {
      uniforms: {
        mNear: { type: "f", value: 1 },
        mFar: { type: "f", value: 2e3 },
        opacity: { type: "f", value: 1 },
      },
      vertexShader: [
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.default_vertex,
        THREE.ShaderChunk.logdepthbuf_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform float mNear;\nuniform float mFar;\nuniform float opacity;",
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {",
        THREE.ShaderChunk.logdepthbuf_fragment,
        "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}",
      ].join("\n"),
    },
    normal: {
      uniforms: { opacity: { type: "f", value: 1 } },
      vertexShader: [
        "varying vec3 vNormal;",
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {\n\tvNormal = normalize( normalMatrix * normal );",
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.default_vertex,
        THREE.ShaderChunk.logdepthbuf_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform float opacity;\nvarying vec3 vNormal;",
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",
        THREE.ShaderChunk.logdepthbuf_fragment,
        "}",
      ].join("\n"),
    },
    normalmap: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.fog,
        THREE.UniformsLib.lights,
        THREE.UniformsLib.shadowmap,
        {
          enableAO: { type: "i", value: 0 },
          enableDiffuse: { type: "i", value: 0 },
          enableSpecular: { type: "i", value: 0 },
          enableReflection: { type: "i", value: 0 },
          enableDisplacement: { type: "i", value: 0 },
          tDisplacement: { type: "t", value: null },
          tDiffuse: { type: "t", value: null },
          tCube: { type: "t", value: null },
          tNormal: { type: "t", value: null },
          tSpecular: { type: "t", value: null },
          tAO: { type: "t", value: null },
          uNormalScale: { type: "v2", value: new THREE.Vector2(1, 1) },
          uDisplacementBias: { type: "f", value: 0 },
          uDisplacementScale: { type: "f", value: 1 },
          diffuse: { type: "c", value: new THREE.Color(16777215) },
          specular: { type: "c", value: new THREE.Color(1118481) },
          ambient: { type: "c", value: new THREE.Color(16777215) },
          shininess: { type: "f", value: 30 },
          opacity: { type: "f", value: 1 },
          useRefract: { type: "i", value: 0 },
          refractionRatio: { type: "f", value: 0.98 },
          reflectivity: { type: "f", value: 0.5 },
          uOffset: { type: "v2", value: new THREE.Vector2(0, 0) },
          uRepeat: { type: "v2", value: new THREE.Vector2(1, 1) },
          wrapRGB: { type: "v3", value: new THREE.Vector3(1, 1, 1) },
        },
      ]),
      fragmentShader: [
        "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float refractionRatio;\nuniform float reflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\n\tuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {",
        THREE.ShaderChunk.logdepthbuf_fragment,
        "\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\n\tvec3 specularTex = vec3( 1.0 );\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\n\tnormalTex.xy *= uNormalScale;\n\tnormalTex = normalize( normalTex );\n\tif( enableDiffuse ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\n\t\t\ttexelColor.xyz *= texelColor.xyz;\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\n\t\t#else\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n\t\t#endif\n\t}\n\tif( enableAO ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\n\t\t\taoColor.xyz *= aoColor.xyz;\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n\t\t#else\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n\t\t#endif\n\t}",
        THREE.ShaderChunk.alphatest_fragment,
        "\tif( enableSpecular )\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\n\tvec3 finalNormal = tsb * normalTex;\n\t#ifdef FLIP_SIDED\n\t\tfinalNormal = -finalNormal;\n\t#endif\n\tvec3 normal = normalize( finalNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\t#if MAX_POINT_LIGHTS > 0\n\t\tvec3 pointDiffuse = vec3( 0.0 );\n\t\tvec3 pointSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\t\tvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat pointDistance = 1.0;\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tpointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\n\t\t\tpointVector = normalize( pointVector );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n\t\t\t#endif\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( pointVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\tvec3 spotDiffuse = vec3( 0.0 );\n\t\tvec3 spotSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\t\tvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat spotDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\n\t\t\tspotVector = normalize( spotVector );\n\t\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\t\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\t\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\t\t\t\t#ifdef WRAP_AROUND\n\t\t\t\t\tfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\n\t\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\t\t\t\t#else\n\t\t\t\t\tfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t#endif\n\t\t\t\tspotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;\n\t\t\t\tvec3 spotHalfVector = normalize( spotVector + viewPosition );\n\t\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\t\tfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( spotVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n\t\t\t}\n\t\t}\n\t#endif\n\t#if MAX_DIR_LIGHTS > 0\n\t\tvec3 dirDiffuse = vec3( 0.0 );\n\t\tvec3 dirSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n\t\t\t#endif\n\t\t\tdirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\tvec3 hemiDiffuse = vec3( 0.0 );\n\t\tvec3 hemiSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\t\t\themiDiffuse += diffuse * hemiColor;\n\t\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\t\tfloat hemiSpecularWeightSky = specularTex.r * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\t\t\tvec3 lVectorGround = -lVector;\n\t\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\t\tfloat hemiSpecularWeightGround = specularTex.r * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\t\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\t\t}\n\t#endif\n\tvec3 totalDiffuse = vec3( 0.0 );\n\tvec3 totalSpecular = vec3( 0.0 );\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalDiffuse += dirDiffuse;\n\t\ttotalSpecular += dirSpecular;\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalDiffuse += hemiDiffuse;\n\t\ttotalSpecular += hemiSpecular;\n\t#endif\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalDiffuse += pointDiffuse;\n\t\ttotalSpecular += pointSpecular;\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\ttotalDiffuse += spotDiffuse;\n\t\ttotalSpecular += spotSpecular;\n\t#endif\n\t#ifdef METAL\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\t#else\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\t#endif\n\tif ( enableReflection ) {\n\t\tvec3 vReflect;\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tif ( useRefract ) {\n\t\t\tvReflect = refract( cameraToVertex, normal, refractionRatio );\n\t\t} else {\n\t\t\tvReflect = reflect( cameraToVertex, normal );\n\t\t}\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n\t\t#ifdef GAMMA_INPUT\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\n\t\t#endif\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );\n\t}",
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
      vertexShader: [
        "attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\n\tuniform sampler2D tDisplacement;\n\tuniform float uDisplacementScale;\n\tuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.skinnormal_vertex,
        "\t#ifdef USE_SKINNING\n\t\tvNormal = normalize( normalMatrix * skinnedNormal.xyz );\n\t\tvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\n\t\tvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n\t#else\n\t\tvNormal = normalize( normalMatrix * normal );\n\t\tvTangent = normalize( normalMatrix * tangent.xyz );\n\t#endif\n\tvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\n\tvUv = uv * uRepeat + uOffset;\n\tvec3 displacedPosition;\n\t#ifdef VERTEX_TEXTURES\n\t\tif ( enableDisplacement ) {\n\t\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\n\t\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\n\t\t\tdisplacedPosition = position + normalize( normal ) * df;\n\t\t} else {\n\t\t\t#ifdef USE_SKINNING\n\t\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\t\tdisplacedPosition = skinned.xyz;\n\t\t\t#else\n\t\t\t\tdisplacedPosition = position;\n\t\t\t#endif\n\t\t}\n\t#else\n\t\t#ifdef USE_SKINNING\n\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\tdisplacedPosition = skinned.xyz;\n\t\t#else\n\t\t\tdisplacedPosition = position;\n\t\t#endif\n\t#endif\n\tvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\n\tvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",
        THREE.ShaderChunk.logdepthbuf_vertex,
        "\tvWorldPosition = worldPosition.xyz;\n\tvViewPosition = -mvPosition.xyz;\n\t#ifdef USE_SHADOWMAP\n\t\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\t\t}\n\t#endif\n}",
      ].join("\n"),
    },
    cube: {
      uniforms: {
        tCube: { type: "t", value: null },
        tFlip: { type: "f", value: -1 },
      },
      vertexShader: [
        "varying vec3 vWorldPosition;",
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\tvWorldPosition = worldPosition.xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        THREE.ShaderChunk.logdepthbuf_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
        THREE.ShaderChunk.logdepthbuf_fragment,
        "}",
      ].join("\n"),
    },
    depthRGBA: {
      uniforms: {},
      vertexShader: [
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.logdepthbuf_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.skinning_vertex,
        THREE.ShaderChunk.default_vertex,
        THREE.ShaderChunk.logdepthbuf_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        THREE.ShaderChunk.logdepthbuf_pars_fragment,
        "vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
        THREE.ShaderChunk.logdepthbuf_fragment,
        "\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}",
      ].join("\n"),
    },
  }),
  (THREE.WebGLRenderer = function (t) {
    function Ze(t) {
      var e = t.geometry;
      t = t.material;
      var r = e.vertices.length;
      if (t.attributes)
        for (var i in (void 0 === e.__webglCustomAttributesList &&
          (e.__webglCustomAttributesList = []),
        t.attributes)) {
          var n,
            o = t.attributes[i];
          (o.__webglInitialized && !o.createUniqueBuffers) ||
            ((o.__webglInitialized = !0),
            (n = 1),
            "v2" === o.type
              ? (n = 2)
              : "v3" === o.type
              ? (n = 3)
              : "v4" === o.type
              ? (n = 4)
              : "c" === o.type && (n = 3),
            (o.size = n),
            (o.array = new Float32Array(r * n)),
            (o.buffer = mr.createBuffer()),
            (o.buffer.belongsToAttribute = i),
            (o.needsUpdate = !0)),
            e.__webglCustomAttributesList.push(o);
        }
    }
    function Qe(t, e) {
      var r,
        i = e.geometry,
        n = 3 * (s = t.faces3).length,
        o = +s.length,
        a = 3 * s.length,
        s = Je(e, t);
      if (
        ((t.__vertexArray = new Float32Array(3 * n)),
        (t.__normalArray = new Float32Array(3 * n)),
        (t.__colorArray = new Float32Array(3 * n)),
        (t.__uvArray = new Float32Array(2 * n)),
        1 < i.faceVertexUvs.length && (t.__uv2Array = new Float32Array(2 * n)),
        i.hasTangents && (t.__tangentArray = new Float32Array(4 * n)),
        e.geometry.skinWeights.length &&
          e.geometry.skinIndices.length &&
          ((t.__skinIndexArray = new Float32Array(4 * n)),
          (t.__skinWeightArray = new Float32Array(4 * n))),
        (i =
          null !== q.get("OES_element_index_uint") && 21845 < o
            ? Uint32Array
            : Uint16Array),
        (t.__typeArray = i),
        (t.__faceArray = new i(3 * o)),
        (t.__lineArray = new i(2 * a)),
        t.numMorphTargets)
      )
        for (
          t.__morphTargetsArrays = [], i = 0, r = t.numMorphTargets;
          i < r;
          i++
        )
          t.__morphTargetsArrays.push(new Float32Array(3 * n));
      if (t.numMorphNormals)
        for (
          t.__morphNormalsArrays = [], i = 0, r = t.numMorphNormals;
          i < r;
          i++
        )
          t.__morphNormalsArrays.push(new Float32Array(3 * n));
      if (
        ((t.__webglFaceCount = 3 * o),
        (t.__webglLineCount = 2 * a),
        s.attributes)
      )
        for (var h in (void 0 === t.__webglCustomAttributesList &&
          (t.__webglCustomAttributesList = []),
        s.attributes)) {
          var l,
            a = {};
          for (l in (o = s.attributes[h])) a[l] = o[l];
          (a.__webglInitialized && !a.createUniqueBuffers) ||
            ((a.__webglInitialized = !0),
            (i = 1),
            "v2" === a.type
              ? (i = 2)
              : "v3" === a.type
              ? (i = 3)
              : "v4" === a.type
              ? (i = 4)
              : "c" === a.type && (i = 3),
            (a.size = i),
            (a.array = new Float32Array(n * i)),
            (a.buffer = mr.createBuffer()),
            (a.buffer.belongsToAttribute = h),
            (o.needsUpdate = !0),
            (a.__original = o)),
            t.__webglCustomAttributesList.push(a);
        }
      t.__inittedArrays = !0;
    }
    function Je(t, e) {
      return t.material instanceof THREE.MeshFaceMaterial
        ? t.material.materials[e.materialIndex]
        : t.material;
    }
    function E(t, e, r, i) {
      r = r.attributes;
      for (
        var n = e.attributes, o = 0, a = (e = e.attributesKeys).length;
        o < a;
        o++
      ) {
        var s,
          h = e[o],
          l = n[h];
        0 <= l &&
          (void 0 !== (s = r[h])
            ? ((h = s.itemSize),
              mr.bindBuffer(mr.ARRAY_BUFFER, s.buffer),
              d(l),
              mr.vertexAttribPointer(l, h, mr.FLOAT, !1, 0, i * h * 4))
            : void 0 !== t.defaultAttributeValues &&
              (2 === t.defaultAttributeValues[h].length
                ? mr.vertexAttrib2fv(l, t.defaultAttributeValues[h])
                : 3 === t.defaultAttributeValues[h].length &&
                  mr.vertexAttrib3fv(l, t.defaultAttributeValues[h])));
      }
      p();
    }
    function f() {
      for (var t = 0, e = W.length; t < e; t++) W[t] = 0;
    }
    function d(t) {
      (W[t] = 1), 0 === j[t] && (mr.enableVertexAttribArray(t), (j[t] = 1));
    }
    function p() {
      for (var t = 0, e = j.length; t < e; t++)
        j[t] !== W[t] && (mr.disableVertexAttribArray(t), (j[t] = 0));
    }
    function h(t, e) {
      return t.material.id !== e.material.id
        ? e.material.id - t.material.id
        : t.z !== e.z
        ? e.z - t.z
        : t.id - e.id;
    }
    function l(t, e) {
      return t.z !== e.z ? t.z - e.z : t.id - e.id;
    }
    function $e(t, e) {
      return e[0] - t[0];
    }
    function c(t, e, r, i, n, o) {
      for (var a, s = t.length - 1; -1 !== s; s--) {
        var h = (a = t[s]).object,
          l = a.buffer;
        if ((g(h, e), o)) a = o;
        else {
          if (!(a = a.material)) continue;
          n &&
            ur.setBlending(a.blending, a.blendEquation, a.blendSrc, a.blendDst),
            ur.setDepthTest(a.depthTest),
            ur.setDepthWrite(a.depthWrite),
            v(a.polygonOffset, a.polygonOffsetFactor, a.polygonOffsetUnits);
        }
        ur.setMaterialFaces(a),
          l instanceof THREE.BufferGeometry
            ? ur.renderBufferDirect(e, r, i, a, l, h)
            : ur.renderBuffer(e, r, i, a, l, h);
      }
    }
    function u(t, e, r, i, n, o, a) {
      for (var s, h = 0, l = t.length; h < l; h++) {
        var c = (s = t[h]).object;
        if (c.visible) {
          if (a) s = a;
          else {
            if (!(s = s[e])) continue;
            o &&
              ur.setBlending(
                s.blending,
                s.blendEquation,
                s.blendSrc,
                s.blendDst
              ),
              ur.setDepthTest(s.depthTest),
              ur.setDepthWrite(s.depthWrite),
              v(s.polygonOffset, s.polygonOffsetFactor, s.polygonOffsetUnits);
          }
          ur.renderImmediateObject(r, i, n, s, c);
        }
      }
    }
    function tr(t, e, r) {
      var i = e.material,
        n = !1;
      if (void 0 === vr[r.id] || !0 === r.groupsNeedUpdate) {
        delete or[e.id], (t = vr);
        for (
          var o,
            a,
            s = r.id,
            i = i instanceof THREE.MeshFaceMaterial,
            h = q.get("OES_element_index_uint") ? 4294967296 : 65535,
            n = {},
            l = r.morphTargets.length,
            c = r.morphNormals.length,
            u = {},
            E = [],
            f = 0,
            d = r.faces.length;
          f < d;
          f++
        ) {
          o = r.faces[f];
          var p = i ? o.materialIndex : 0;
          p in n || (n[p] = { hash: p, counter: 0 }),
            (o = n[p].hash + "_" + n[p].counter) in u ||
              ((a = {
                id: at++,
                faces3: [],
                materialIndex: p,
                vertices: 0,
                numMorphTargets: l,
                numMorphNormals: c,
              }),
              (u[o] = a),
              E.push(a)),
            u[o].vertices + 3 > h &&
              ((n[p].counter += 1),
              (o = n[p].hash + "_" + n[p].counter) in u ||
                ((a = {
                  id: at++,
                  faces3: [],
                  materialIndex: p,
                  vertices: 0,
                  numMorphTargets: l,
                  numMorphNormals: c,
                }),
                (u[o] = a),
                E.push(a))),
            u[o].faces3.push(f),
            (u[o].vertices += 3);
        }
        (t[s] = E), (r.groupsNeedUpdate = !1);
      }
      for (s = 0, i = (t = vr[r.id]).length; s < i; s++) {
        if (void 0 === (h = t[s]).__webglVertexBuffer) {
          if (
            (((n = h).__webglVertexBuffer = mr.createBuffer()),
            (n.__webglNormalBuffer = mr.createBuffer()),
            (n.__webglTangentBuffer = mr.createBuffer()),
            (n.__webglColorBuffer = mr.createBuffer()),
            (n.__webglUVBuffer = mr.createBuffer()),
            (n.__webglUV2Buffer = mr.createBuffer()),
            (n.__webglSkinIndicesBuffer = mr.createBuffer()),
            (n.__webglSkinWeightsBuffer = mr.createBuffer()),
            (n.__webglFaceBuffer = mr.createBuffer()),
            (n.__webglLineBuffer = mr.createBuffer()),
            (c = l = void 0),
            n.numMorphTargets)
          )
            for (
              n.__webglMorphTargetsBuffers = [], l = 0, c = n.numMorphTargets;
              l < c;
              l++
            )
              n.__webglMorphTargetsBuffers.push(mr.createBuffer());
          if (n.numMorphNormals)
            for (
              n.__webglMorphNormalsBuffers = [], l = 0, c = n.numMorphNormals;
              l < c;
              l++
            )
              n.__webglMorphNormalsBuffers.push(mr.createBuffer());
          ur.info.memory.geometries++,
            Qe(h, e),
            (r.verticesNeedUpdate = !0),
            (r.morphTargetsNeedUpdate = !0),
            (r.elementsNeedUpdate = !0),
            (r.uvsNeedUpdate = !0),
            (r.normalsNeedUpdate = !0),
            (r.tangentsNeedUpdate = !0),
            (n = r.colorsNeedUpdate = !0);
        } else n = !1;
        (!n && void 0 !== e.__webglActive) || er(or, h, e);
      }
      e.__webglActive = !0;
    }
    function er(t, e, r) {
      var i = r.id;
      (t[i] = t[i] || []),
        t[i].push({ id: i, buffer: e, object: r, material: null, z: 0 });
    }
    function rr(t) {
      for (var e in t.attributes) if (t.attributes[e].needsUpdate) return !0;
      return !1;
    }
    function ir(t) {
      for (var e in t.attributes) t.attributes[e].needsUpdate = !1;
    }
    function m(t, e, r, i, n) {
      var o;
      if (((le = 0), i.needsUpdate)) {
        i.program && ve(i),
          i.addEventListener("dispose", Te),
          i instanceof THREE.MeshDepthMaterial
            ? (V = "depth")
            : i instanceof THREE.MeshNormalMaterial
            ? (V = "normal")
            : i instanceof THREE.MeshBasicMaterial
            ? (V = "basic")
            : i instanceof THREE.MeshLambertMaterial
            ? (V = "lambert")
            : i instanceof THREE.MeshPhongMaterial
            ? (V = "phong")
            : i instanceof THREE.LineBasicMaterial
            ? (V = "basic")
            : i instanceof THREE.LineDashedMaterial
            ? (V = "dashed")
            : i instanceof THREE.PointCloudMaterial && (V = "particle_basic"),
          V
            ? ((B = THREE.ShaderLib[V]),
              (i.__webglShader = {
                uniforms: THREE.UniformsUtils.clone(B.uniforms),
                vertexShader: B.vertexShader,
                fragmentShader: B.fragmentShader,
              }))
            : (i.__webglShader = {
                uniforms: i.uniforms,
                vertexShader: i.vertexShader,
                fragmentShader: i.fragmentShader,
              });
        for (var a = 0, s = 0, h = 0, l = 0, c = 0, u = e.length; c < u; c++) {
          var E = e[c];
          E.onlyShadow ||
            !1 === E.visible ||
            (E instanceof THREE.DirectionalLight && a++,
            E instanceof THREE.PointLight && s++,
            E instanceof THREE.SpotLight && h++,
            E instanceof THREE.HemisphereLight && l++);
        }
        (o = a), (F = s), (D = h), (U = l);
        for (var f, d = 0, p = 0, m = e.length; p < m; p++) {
          var g = e[p];
          g.castShadow &&
            (g instanceof THREE.SpotLight && d++,
            g instanceof THREE.DirectionalLight && !g.shadowCascade && d++);
        }
        (B = d),
          (f =
            pe && n && n.skeleton && n.skeleton.useVertexTexture
              ? 1024
              : ((f = mr.getParameter(mr.MAX_VERTEX_UNIFORM_VECTORS)),
                (f = Math.floor((f - 20) / 4)),
                void 0 !== n &&
                  n instanceof THREE.SkinnedMesh &&
                  (f = Math.min(n.skeleton.bones.length, f)) <
                    n.skeleton.bones.length &&
                  console.warn(
                    "WebGLRenderer: too many bones - " +
                      n.skeleton.bones.length +
                      ", this GPU supports just " +
                      f +
                      " (try OpenGL instead of ANGLE)"
                  ),
                f));
        var T = {
            precision: ie,
            supportsVertexTextures: de,
            map: !!i.map,
            envMap: !!i.envMap,
            lightMap: !!i.lightMap,
            bumpMap: !!i.bumpMap,
            normalMap: !!i.normalMap,
            specularMap: !!i.specularMap,
            alphaMap: !!i.alphaMap,
            vertexColors: i.vertexColors,
            fog: r,
            useFog: i.fog,
            fogExp: r instanceof THREE.FogExp2,
            sizeAttenuation: i.sizeAttenuation,
            logarithmicDepthBuffer: ne,
            skinning: i.skinning,
            maxBones: f,
            useVertexTexture:
              pe && n && n.skeleton && n.skeleton.useVertexTexture,
            morphTargets: i.morphTargets,
            morphNormals: i.morphNormals,
            maxMorphTargets: ur.maxMorphTargets,
            maxMorphNormals: ur.maxMorphNormals,
            maxDirLights: o,
            maxPointLights: F,
            maxSpotLights: D,
            maxHemiLights: U,
            maxShadows: B,
            shadowMapEnabled: ur.shadowMapEnabled && n.receiveShadow && 0 < B,
            shadowMapType: ur.shadowMapType,
            shadowMapDebug: ur.shadowMapDebug,
            shadowMapCascade: ur.shadowMapCascade,
            alphaTest: i.alphaTest,
            metal: i.metal,
            wrapAround: i.wrapAround,
            doubleSided: i.side === THREE.DoubleSide,
            flipSided: i.side === THREE.BackSide,
          },
          v = [];
        if (
          (V ? v.push(V) : (v.push(i.fragmentShader), v.push(i.vertexShader)),
          void 0 !== i.defines)
        )
          for (var y in i.defines) v.push(y), v.push(i.defines[y]);
        for (y in T) v.push(y), v.push(T[y]);
        for (var R, x = v.join(), H = 0, _ = oe.length; H < _; H++) {
          var b = oe[H];
          if (b.code === x) {
            (R = b).usedTimes++;
            break;
          }
        }
        void 0 === R &&
          ((R = new THREE.WebGLProgram(ur, x, i, T)),
          oe.push(R),
          (ur.info.memory.programs = oe.length));
        var w,
          M = (i.program = R).attributes;
        if (i.morphTargets)
          for (
            var S = "morphTarget", C = (i.numSupportedMorphTargets = 0);
            C < ur.maxMorphTargets;
            C++
          )
            0 <= M[S + C] && i.numSupportedMorphTargets++;
        if (i.morphNormals)
          for (
            S = "morphNormal", C = i.numSupportedMorphNormals = 0;
            C < ur.maxMorphNormals;
            C++
          )
            0 <= M[S + C] && i.numSupportedMorphNormals++;
        for (w in ((i.uniformsList = []), i.__webglShader.uniforms)) {
          var A = i.program.uniforms[w];
          A && i.uniformsList.push([i.__webglShader.uniforms[w], A]);
        }
        i.needsUpdate = !1;
      }
      i.morphTargets &&
        !n.__webglMorphTargetInfluences &&
        (n.__webglMorphTargetInfluences = new Float32Array(ur.maxMorphTargets));
      var L,
        P,
        F = !1,
        D = !1,
        U = !1,
        B = i.program,
        V = B.uniforms,
        z = i.__webglShader.uniforms;
      if (
        (B.id !== ae &&
          (mr.useProgram(B.program), (ae = B.id), (U = D = F = !0)),
        i.id !== se && (-1 === se && (U = !0), (se = i.id), (D = !0)),
        (!F && t === he) ||
          (mr.uniformMatrix4fv(
            V.projectionMatrix,
            !1,
            t.projectionMatrix.elements
          ),
          ne &&
            mr.uniform1f(V.logDepthBufFC, 2 / (Math.log(t.far + 1) / Math.LN2)),
          t !== he && (he = t),
          (i instanceof THREE.ShaderMaterial ||
            i instanceof THREE.MeshPhongMaterial ||
            i.envMap) &&
            null !== V.cameraPosition &&
            (pr.setFromMatrixPosition(t.matrixWorld),
            mr.uniform3f(V.cameraPosition, pr.x, pr.y, pr.z)),
          (i instanceof THREE.MeshPhongMaterial ||
            i instanceof THREE.MeshLambertMaterial ||
            i instanceof THREE.ShaderMaterial ||
            i.skinning) &&
            null !== V.viewMatrix &&
            mr.uniformMatrix4fv(
              V.viewMatrix,
              !1,
              t.matrixWorldInverse.elements
            )),
        i.skinning &&
          (n.bindMatrix &&
            null !== V.bindMatrix &&
            mr.uniformMatrix4fv(V.bindMatrix, !1, n.bindMatrix.elements),
          n.bindMatrixInverse &&
            null !== V.bindMatrixInverse &&
            mr.uniformMatrix4fv(
              V.bindMatrixInverse,
              !1,
              n.bindMatrixInverse.elements
            ),
          pe && n.skeleton && n.skeleton.useVertexTexture
            ? (null !== V.boneTexture &&
                ((F = Zt()),
                mr.uniform1i(V.boneTexture, F),
                ur.setTexture(n.skeleton.boneTexture, F)),
              null !== V.boneTextureWidth &&
                mr.uniform1i(V.boneTextureWidth, n.skeleton.boneTextureWidth),
              null !== V.boneTextureHeight &&
                mr.uniform1i(V.boneTextureHeight, n.skeleton.boneTextureHeight))
            : n.skeleton &&
              n.skeleton.boneMatrices &&
              null !== V.boneGlobalMatrices &&
              mr.uniformMatrix4fv(
                V.boneGlobalMatrices,
                !1,
                n.skeleton.boneMatrices
              )),
        D)
      ) {
        if (
          (r &&
            i.fog &&
            ((z.fogColor.value = r.color),
            r instanceof THREE.Fog
              ? ((z.fogNear.value = r.near), (z.fogFar.value = r.far))
              : r instanceof THREE.FogExp2 && (z.fogDensity.value = r.density)),
          i instanceof THREE.MeshPhongMaterial ||
            i instanceof THREE.MeshLambertMaterial ||
            i.lights)
        ) {
          if (ue) {
            for (
              var k,
                N,
                O,
                I,
                G,
                W,
                j,
                X,
                U = !0,
                q = 0,
                Y = 0,
                K = 0,
                r = Ee,
                Z = r.directional.colors,
                Q = r.directional.positions,
                J = r.point.colors,
                $ = r.point.positions,
                tt = r.point.distances,
                et = r.spot.colors,
                rt = r.spot.positions,
                it = r.spot.distances,
                nt = r.spot.directions,
                ot = r.spot.anglesCos,
                at = r.spot.exponents,
                st = r.hemi.skyColors,
                ht = r.hemi.groundColors,
                lt = r.hemi.positions,
                ct = 0,
                ut = 0,
                Et = 0,
                ft = 0,
                dt = 0,
                pt = 0,
                mt = 0,
                gt = 0,
                Tt = 0,
                vt = e.length;
              Tt < vt;
              Tt++
            )
              (O = e[Tt]).onlyShadow ||
                ((k = O.color),
                (N = O.intensity),
                (I = O.distance),
                O instanceof THREE.AmbientLight
                  ? O.visible &&
                    (ur.gammaInput
                      ? ((q += k.r * k.r), (Y += k.g * k.g), (K += k.b * k.b))
                      : ((q += k.r), (Y += k.g), (K += k.b)))
                  : O instanceof THREE.DirectionalLight
                  ? ((dt += 1),
                    O.visible &&
                      (ce.setFromMatrixPosition(O.matrixWorld),
                      pr.setFromMatrixPosition(O.target.matrixWorld),
                      ce.sub(pr),
                      ce.normalize(),
                      (Q[(G = 3 * ct)] = ce.x),
                      (Q[1 + G] = ce.y),
                      (Q[2 + G] = ce.z),
                      ur.gammaInput ? Qt(Z, G, k, N * N) : Jt(Z, G, k, N),
                      (ct += 1)))
                  : O instanceof THREE.PointLight
                  ? ((pt += 1),
                    O.visible &&
                      ((W = 3 * ut),
                      ur.gammaInput ? Qt(J, W, k, N * N) : Jt(J, W, k, N),
                      pr.setFromMatrixPosition(O.matrixWorld),
                      ($[W] = pr.x),
                      ($[1 + W] = pr.y),
                      ($[2 + W] = pr.z),
                      (tt[ut] = I),
                      (ut += 1)))
                  : O instanceof THREE.SpotLight
                  ? ((mt += 1),
                    O.visible &&
                      ((j = 3 * Et),
                      ur.gammaInput ? Qt(et, j, k, N * N) : Jt(et, j, k, N),
                      ce.setFromMatrixPosition(O.matrixWorld),
                      (rt[j] = ce.x),
                      (rt[1 + j] = ce.y),
                      (rt[2 + j] = ce.z),
                      (it[Et] = I),
                      pr.setFromMatrixPosition(O.target.matrixWorld),
                      ce.sub(pr),
                      ce.normalize(),
                      (nt[j] = ce.x),
                      (nt[1 + j] = ce.y),
                      (nt[2 + j] = ce.z),
                      (ot[Et] = Math.cos(O.angle)),
                      (at[Et] = O.exponent),
                      (Et += 1)))
                  : O instanceof THREE.HemisphereLight &&
                    ((gt += 1),
                    O.visible &&
                      (ce.setFromMatrixPosition(O.matrixWorld),
                      ce.normalize(),
                      (lt[(X = 3 * ft)] = ce.x),
                      (lt[1 + X] = ce.y),
                      (lt[2 + X] = ce.z),
                      (k = O.color),
                      (I = O.groundColor),
                      ur.gammaInput
                        ? (Qt(st, X, k, (O = N * N)), Qt(ht, X, I, O))
                        : (Jt(st, X, k, N), Jt(ht, X, I, N)),
                      (ft += 1))));
            for (Tt = 3 * ct, vt = Math.max(Z.length, 3 * dt); Tt < vt; Tt++)
              Z[Tt] = 0;
            for (Tt = 3 * ut, vt = Math.max(J.length, 3 * pt); Tt < vt; Tt++)
              J[Tt] = 0;
            for (Tt = 3 * Et, vt = Math.max(et.length, 3 * mt); Tt < vt; Tt++)
              et[Tt] = 0;
            for (Tt = 3 * ft, vt = Math.max(st.length, 3 * gt); Tt < vt; Tt++)
              st[Tt] = 0;
            for (Tt = 3 * ft, vt = Math.max(ht.length, 3 * gt); Tt < vt; Tt++)
              ht[Tt] = 0;
            (r.directional.length = ct),
              (r.point.length = ut),
              (r.spot.length = Et),
              (r.hemi.length = ft),
              (r.ambient[0] = q),
              (r.ambient[1] = Y),
              (r.ambient[2] = K),
              (ue = !1);
          }
          U
            ? ((L = Ee),
              (z.ambientLightColor.value = L.ambient),
              (z.directionalLightColor.value = L.directional.colors),
              (z.directionalLightDirection.value = L.directional.positions),
              (z.pointLightColor.value = L.point.colors),
              (z.pointLightPosition.value = L.point.positions),
              (z.pointLightDistance.value = L.point.distances),
              (z.spotLightColor.value = L.spot.colors),
              (z.spotLightPosition.value = L.spot.positions),
              (z.spotLightDistance.value = L.spot.distances),
              (z.spotLightDirection.value = L.spot.directions),
              (z.spotLightAngleCos.value = L.spot.anglesCos),
              (z.spotLightExponent.value = L.spot.exponents),
              (z.hemisphereLightSkyColor.value = L.hemi.skyColors),
              (z.hemisphereLightGroundColor.value = L.hemi.groundColors),
              (z.hemisphereLightDirection.value = L.hemi.positions),
              Kt(z, !0))
            : Kt(z, !1);
        }
        if (
          ((i instanceof THREE.MeshBasicMaterial ||
            i instanceof THREE.MeshLambertMaterial ||
            i instanceof THREE.MeshPhongMaterial) &&
            ((z.opacity.value = i.opacity),
            ur.gammaInput
              ? z.diffuse.value.copyGammaToLinear(i.color)
              : (z.diffuse.value = i.color),
            (z.map.value = i.map),
            (z.lightMap.value = i.lightMap),
            (z.specularMap.value = i.specularMap),
            (z.alphaMap.value = i.alphaMap),
            i.bumpMap &&
              ((z.bumpMap.value = i.bumpMap),
              (z.bumpScale.value = i.bumpScale)),
            i.normalMap &&
              ((z.normalMap.value = i.normalMap),
              z.normalScale.value.copy(i.normalScale)),
            i.map
              ? (P = i.map)
              : i.specularMap
              ? (P = i.specularMap)
              : i.normalMap
              ? (P = i.normalMap)
              : i.bumpMap
              ? (P = i.bumpMap)
              : i.alphaMap && (P = i.alphaMap),
            void 0 !== P &&
              ((L = P.offset),
              (P = P.repeat),
              z.offsetRepeat.value.set(L.x, L.y, P.x, P.y)),
            (z.envMap.value = i.envMap),
            (z.flipEnvMap.value =
              i.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1),
            (z.reflectivity.value = i.reflectivity),
            (z.refractionRatio.value = i.refractionRatio),
            (z.combine.value = i.combine),
            (z.useRefract.value =
              i.envMap &&
              i.envMap.mapping instanceof THREE.CubeRefractionMapping)),
          i instanceof THREE.LineBasicMaterial
            ? ((z.diffuse.value = i.color), (z.opacity.value = i.opacity))
            : i instanceof THREE.LineDashedMaterial
            ? ((z.diffuse.value = i.color),
              (z.opacity.value = i.opacity),
              (z.dashSize.value = i.dashSize),
              (z.totalSize.value = i.dashSize + i.gapSize),
              (z.scale.value = i.scale))
            : i instanceof THREE.PointCloudMaterial
            ? ((z.psColor.value = i.color),
              (z.opacity.value = i.opacity),
              (z.size.value = i.size),
              (z.scale.value = re.height / 2),
              (z.map.value = i.map))
            : i instanceof THREE.MeshPhongMaterial
            ? ((z.shininess.value = i.shininess),
              ur.gammaInput
                ? (z.ambient.value.copyGammaToLinear(i.ambient),
                  z.emissive.value.copyGammaToLinear(i.emissive),
                  z.specular.value.copyGammaToLinear(i.specular))
                : ((z.ambient.value = i.ambient),
                  (z.emissive.value = i.emissive),
                  (z.specular.value = i.specular)),
              i.wrapAround && z.wrapRGB.value.copy(i.wrapRGB))
            : i instanceof THREE.MeshLambertMaterial
            ? (ur.gammaInput
                ? (z.ambient.value.copyGammaToLinear(i.ambient),
                  z.emissive.value.copyGammaToLinear(i.emissive))
                : ((z.ambient.value = i.ambient),
                  (z.emissive.value = i.emissive)),
              i.wrapAround && z.wrapRGB.value.copy(i.wrapRGB))
            : i instanceof THREE.MeshDepthMaterial
            ? ((z.mNear.value = t.near),
              (z.mFar.value = t.far),
              (z.opacity.value = i.opacity))
            : i instanceof THREE.MeshNormalMaterial &&
              (z.opacity.value = i.opacity),
          n.receiveShadow && !i._shadowPass && z.shadowMatrix)
        )
          for (var yt = 0, Rt = 0, xt = e.length; Rt < xt; Rt++) {
            var Ht = e[Rt];
            Ht.castShadow &&
              (Ht instanceof THREE.SpotLight ||
                (Ht instanceof THREE.DirectionalLight && !Ht.shadowCascade)) &&
              ((z.shadowMap.value[yt] = Ht.shadowMap),
              (z.shadowMapSize.value[yt] = Ht.shadowMapSize),
              (z.shadowMatrix.value[yt] = Ht.shadowMatrix),
              (z.shadowDarkness.value[yt] = Ht.shadowDarkness),
              (z.shadowBias.value[yt] = Ht.shadowBias),
              yt++);
          }
        for (
          var _t, bt, wt, Mt = i.uniformsList, St = 0, Ct = Mt.length;
          St < Ct;
          St++
        ) {
          var At = Mt[St][0];
          if (!1 !== At.needsUpdate) {
            var Lt = At.type,
              Pt = At.value,
              Ft = Mt[St][1];
            switch (Lt) {
              case "1i":
                mr.uniform1i(Ft, Pt);
                break;
              case "1f":
                mr.uniform1f(Ft, Pt);
                break;
              case "2f":
                mr.uniform2f(Ft, Pt[0], Pt[1]);
                break;
              case "3f":
                mr.uniform3f(Ft, Pt[0], Pt[1], Pt[2]);
                break;
              case "4f":
                mr.uniform4f(Ft, Pt[0], Pt[1], Pt[2], Pt[3]);
                break;
              case "1iv":
                mr.uniform1iv(Ft, Pt);
                break;
              case "3iv":
                mr.uniform3iv(Ft, Pt);
                break;
              case "1fv":
                mr.uniform1fv(Ft, Pt);
                break;
              case "2fv":
                mr.uniform2fv(Ft, Pt);
                break;
              case "3fv":
                mr.uniform3fv(Ft, Pt);
                break;
              case "4fv":
                mr.uniform4fv(Ft, Pt);
                break;
              case "Matrix3fv":
                mr.uniformMatrix3fv(Ft, !1, Pt);
                break;
              case "Matrix4fv":
                mr.uniformMatrix4fv(Ft, !1, Pt);
                break;
              case "i":
                mr.uniform1i(Ft, Pt);
                break;
              case "f":
                mr.uniform1f(Ft, Pt);
                break;
              case "v2":
                mr.uniform2f(Ft, Pt.x, Pt.y);
                break;
              case "v3":
                mr.uniform3f(Ft, Pt.x, Pt.y, Pt.z);
                break;
              case "v4":
                mr.uniform4f(Ft, Pt.x, Pt.y, Pt.z, Pt.w);
                break;
              case "c":
                mr.uniform3f(Ft, Pt.r, Pt.g, Pt.b);
                break;
              case "iv1":
                mr.uniform1iv(Ft, Pt);
                break;
              case "iv":
                mr.uniform3iv(Ft, Pt);
                break;
              case "fv1":
                mr.uniform1fv(Ft, Pt);
                break;
              case "fv":
                mr.uniform3fv(Ft, Pt);
                break;
              case "v2v":
                void 0 === At._array &&
                  (At._array = new Float32Array(2 * Pt.length));
                for (var Dt = 0, Ut = Pt.length; Dt < Ut; Dt++)
                  (wt = 2 * Dt),
                    (At._array[wt] = Pt[Dt].x),
                    (At._array[wt + 1] = Pt[Dt].y);
                mr.uniform2fv(Ft, At._array);
                break;
              case "v3v":
                for (
                  void 0 === At._array &&
                    (At._array = new Float32Array(3 * Pt.length)),
                    Dt = 0,
                    Ut = Pt.length;
                  Dt < Ut;
                  Dt++
                )
                  (wt = 3 * Dt),
                    (At._array[wt] = Pt[Dt].x),
                    (At._array[wt + 1] = Pt[Dt].y),
                    (At._array[wt + 2] = Pt[Dt].z);
                mr.uniform3fv(Ft, At._array);
                break;
              case "v4v":
                for (
                  void 0 === At._array &&
                    (At._array = new Float32Array(4 * Pt.length)),
                    Dt = 0,
                    Ut = Pt.length;
                  Dt < Ut;
                  Dt++
                )
                  (wt = 4 * Dt),
                    (At._array[wt] = Pt[Dt].x),
                    (At._array[wt + 1] = Pt[Dt].y),
                    (At._array[wt + 2] = Pt[Dt].z),
                    (At._array[wt + 3] = Pt[Dt].w);
                mr.uniform4fv(Ft, At._array);
                break;
              case "m3":
                mr.uniformMatrix3fv(Ft, !1, Pt.elements);
                break;
              case "m3v":
                for (
                  void 0 === At._array &&
                    (At._array = new Float32Array(9 * Pt.length)),
                    Dt = 0,
                    Ut = Pt.length;
                  Dt < Ut;
                  Dt++
                )
                  Pt[Dt].flattenToArrayOffset(At._array, 9 * Dt);
                mr.uniformMatrix3fv(Ft, !1, At._array);
                break;
              case "m4":
                mr.uniformMatrix4fv(Ft, !1, Pt.elements);
                break;
              case "m4v":
                for (
                  void 0 === At._array &&
                    (At._array = new Float32Array(16 * Pt.length)),
                    Dt = 0,
                    Ut = Pt.length;
                  Dt < Ut;
                  Dt++
                )
                  Pt[Dt].flattenToArrayOffset(At._array, 16 * Dt);
                mr.uniformMatrix4fv(Ft, !1, At._array);
                break;
              case "t":
                if (((_t = Pt), (bt = Zt()), mr.uniform1i(Ft, bt), !_t))
                  continue;
                if (
                  _t instanceof THREE.CubeTexture ||
                  (_t.image instanceof Array && 6 === _t.image.length)
                ) {
                  var Bt = _t,
                    Vt = bt;
                  if (6 === Bt.image.length)
                    if (Bt.needsUpdate) {
                      Bt.image.__webglTextureCube ||
                        (Bt.addEventListener("dispose", ge),
                        (Bt.image.__webglTextureCube = mr.createTexture()),
                        ur.info.memory.textures++),
                        mr.activeTexture(mr.TEXTURE0 + Vt),
                        mr.bindTexture(
                          mr.TEXTURE_CUBE_MAP,
                          Bt.image.__webglTextureCube
                        ),
                        mr.pixelStorei(mr.UNPACK_FLIP_Y_WEBGL, Bt.flipY);
                      for (
                        var zt = Bt instanceof THREE.CompressedTexture,
                          kt = Bt.image[0] instanceof THREE.DataTexture,
                          Nt = [],
                          Ot = 0;
                        Ot < 6;
                        Ot++
                      )
                        Nt[Ot] =
                          !ur.autoScaleCubemaps || zt || kt
                            ? kt
                              ? Bt.image[Ot].image
                              : Bt.image[Ot]
                            : te(Bt.image[Ot], fe);
                      var It = Nt[0],
                        It =
                          THREE.Math.isPowerOfTwo(It.width) &&
                          THREE.Math.isPowerOfTwo(It.height),
                        Gt = ee(Bt.format),
                        Wt = ee(Bt.type);
                      for (
                        $t(mr.TEXTURE_CUBE_MAP, Bt, It), Ot = 0;
                        Ot < 6;
                        Ot++
                      )
                        if (zt)
                          for (
                            var jt, Xt = Nt[Ot].mipmaps, qt = 0, Yt = Xt.length;
                            qt < Yt;
                            qt++
                          )
                            (jt = Xt[qt]),
                              Bt.format !== THREE.RGBAFormat &&
                              Bt.format !== THREE.RGBFormat
                                ? -1 < me().indexOf(Gt)
                                  ? mr.compressedTexImage2D(
                                      mr.TEXTURE_CUBE_MAP_POSITIVE_X + Ot,
                                      qt,
                                      Gt,
                                      jt.width,
                                      jt.height,
                                      0,
                                      jt.data
                                    )
                                  : console.warn(
                                      "Attempt to load unsupported compressed texture format"
                                    )
                                : mr.texImage2D(
                                    mr.TEXTURE_CUBE_MAP_POSITIVE_X + Ot,
                                    qt,
                                    Gt,
                                    jt.width,
                                    jt.height,
                                    0,
                                    Gt,
                                    Wt,
                                    jt.data
                                  );
                        else
                          kt
                            ? mr.texImage2D(
                                mr.TEXTURE_CUBE_MAP_POSITIVE_X + Ot,
                                0,
                                Gt,
                                Nt[Ot].width,
                                Nt[Ot].height,
                                0,
                                Gt,
                                Wt,
                                Nt[Ot].data
                              )
                            : mr.texImage2D(
                                mr.TEXTURE_CUBE_MAP_POSITIVE_X + Ot,
                                0,
                                Gt,
                                Gt,
                                Wt,
                                Nt[Ot]
                              );
                      Bt.generateMipmaps &&
                        It &&
                        mr.generateMipmap(mr.TEXTURE_CUBE_MAP),
                        (Bt.needsUpdate = !1),
                        Bt.onUpdate && Bt.onUpdate();
                    } else
                      mr.activeTexture(mr.TEXTURE0 + Vt),
                        mr.bindTexture(
                          mr.TEXTURE_CUBE_MAP,
                          Bt.image.__webglTextureCube
                        );
                } else
                  _t instanceof THREE.WebGLRenderTargetCube
                    ? ((Vt = _t),
                      mr.activeTexture(mr.TEXTURE0 + bt),
                      mr.bindTexture(mr.TEXTURE_CUBE_MAP, Vt.__webglTexture))
                    : ur.setTexture(_t, bt);
                break;
              case "tv":
                for (
                  void 0 === At._array && (At._array = []),
                    Dt = 0,
                    Ut = At.value.length;
                  Dt < Ut;
                  Dt++
                )
                  At._array[Dt] = Zt();
                for (
                  mr.uniform1iv(Ft, At._array), Dt = 0, Ut = At.value.length;
                  Dt < Ut;
                  Dt++
                )
                  (_t = At.value[Dt]),
                    (bt = At._array[Dt]),
                    _t && ur.setTexture(_t, bt);
                break;
              default:
                console.warn(
                  "THREE.WebGLRenderer: Unknown uniform type: " + Lt
                );
            }
          }
        }
      }
      return (
        mr.uniformMatrix4fv(V.modelViewMatrix, !1, n._modelViewMatrix.elements),
        V.normalMatrix &&
          mr.uniformMatrix3fv(V.normalMatrix, !1, n._normalMatrix.elements),
        null !== V.modelMatrix &&
          mr.uniformMatrix4fv(V.modelMatrix, !1, n.matrixWorld.elements),
        B
      );
    }
    function Kt(t, e) {
      (t.ambientLightColor.needsUpdate = e),
        (t.directionalLightColor.needsUpdate = e),
        (t.directionalLightDirection.needsUpdate = e),
        (t.pointLightColor.needsUpdate = e),
        (t.pointLightPosition.needsUpdate = e),
        (t.pointLightDistance.needsUpdate = e),
        (t.spotLightColor.needsUpdate = e),
        (t.spotLightPosition.needsUpdate = e),
        (t.spotLightDistance.needsUpdate = e),
        (t.spotLightDirection.needsUpdate = e),
        (t.spotLightAngleCos.needsUpdate = e),
        (t.spotLightExponent.needsUpdate = e),
        (t.hemisphereLightSkyColor.needsUpdate = e),
        (t.hemisphereLightGroundColor.needsUpdate = e),
        (t.hemisphereLightDirection.needsUpdate = e);
    }
    function Zt() {
      var t = le;
      return (
        Y <= t &&
          console.warn(
            "WebGLRenderer: trying to use " +
              t +
              " texture units while this GPU supports only " +
              Y
          ),
        (le += 1),
        t
      );
    }
    function g(t, e) {
      t._modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, t.matrixWorld),
        t._normalMatrix.getNormalMatrix(t._modelViewMatrix);
    }
    function Qt(t, e, r, i) {
      (t[e] = r.r * r.r * i),
        (t[e + 1] = r.g * r.g * i),
        (t[e + 2] = r.b * r.b * i);
    }
    function Jt(t, e, r, i) {
      (t[e] = r.r * i), (t[e + 1] = r.g * i), (t[e + 2] = r.b * i);
    }
    function T(t) {
      t !== V && (mr.lineWidth(t), (V = t));
    }
    function v(t, e, r) {
      D !== t &&
        (t
          ? mr.enable(mr.POLYGON_OFFSET_FILL)
          : mr.disable(mr.POLYGON_OFFSET_FILL),
        (D = t)),
        !t ||
          (U === e && B === r) ||
          (mr.polygonOffset(e, r), (U = e), (B = r));
    }
    function $t(t, e, r) {
      r
        ? (mr.texParameteri(t, mr.TEXTURE_WRAP_S, ee(e.wrapS)),
          mr.texParameteri(t, mr.TEXTURE_WRAP_T, ee(e.wrapT)),
          mr.texParameteri(t, mr.TEXTURE_MAG_FILTER, ee(e.magFilter)),
          mr.texParameteri(t, mr.TEXTURE_MIN_FILTER, ee(e.minFilter)))
        : (mr.texParameteri(t, mr.TEXTURE_WRAP_S, mr.CLAMP_TO_EDGE),
          mr.texParameteri(t, mr.TEXTURE_WRAP_T, mr.CLAMP_TO_EDGE),
          mr.texParameteri(t, mr.TEXTURE_MAG_FILTER, i(e.magFilter)),
          mr.texParameteri(t, mr.TEXTURE_MIN_FILTER, i(e.minFilter))),
        (r = q.get("EXT_texture_filter_anisotropic")) &&
          e.type !== THREE.FloatType &&
          (1 < e.anisotropy || e.__oldAnisotropy) &&
          (mr.texParameterf(
            t,
            r.TEXTURE_MAX_ANISOTROPY_EXT,
            Math.min(e.anisotropy, ur.getMaxAnisotropy())
          ),
          (e.__oldAnisotropy = e.anisotropy));
    }
    function te(t, e) {
      if (t.width > e || t.height > e) {
        var r = e / Math.max(t.width, t.height),
          e = document.createElement("canvas");
        return (
          (e.width = Math.floor(t.width * r)),
          (e.height = Math.floor(t.height * r)),
          e
            .getContext("2d")
            .drawImage(t, 0, 0, t.width, t.height, 0, 0, e.width, e.height),
          console.log(
            "THREE.WebGLRenderer:",
            t,
            "is too big (" +
              t.width +
              "x" +
              t.height +
              "). Resized to " +
              e.width +
              "x" +
              e.height +
              "."
          ),
          e
        );
      }
      return t;
    }
    function y(t, e) {
      mr.bindRenderbuffer(mr.RENDERBUFFER, t),
        e.depthBuffer && !e.stencilBuffer
          ? (mr.renderbufferStorage(
              mr.RENDERBUFFER,
              mr.DEPTH_COMPONENT16,
              e.width,
              e.height
            ),
            mr.framebufferRenderbuffer(
              mr.FRAMEBUFFER,
              mr.DEPTH_ATTACHMENT,
              mr.RENDERBUFFER,
              t
            ))
          : e.depthBuffer && e.stencilBuffer
          ? (mr.renderbufferStorage(
              mr.RENDERBUFFER,
              mr.DEPTH_STENCIL,
              e.width,
              e.height
            ),
            mr.framebufferRenderbuffer(
              mr.FRAMEBUFFER,
              mr.DEPTH_STENCIL_ATTACHMENT,
              mr.RENDERBUFFER,
              t
            ))
          : mr.renderbufferStorage(
              mr.RENDERBUFFER,
              mr.RGBA4,
              e.width,
              e.height
            );
    }
    function i(t) {
      return t === THREE.NearestFilter ||
        t === THREE.NearestMipMapNearestFilter ||
        t === THREE.NearestMipMapLinearFilter
        ? mr.NEAREST
        : mr.LINEAR;
    }
    function ee(t) {
      var e;
      if (t === THREE.RepeatWrapping) return mr.REPEAT;
      if (t === THREE.ClampToEdgeWrapping) return mr.CLAMP_TO_EDGE;
      if (t === THREE.MirroredRepeatWrapping) return mr.MIRRORED_REPEAT;
      if (t === THREE.NearestFilter) return mr.NEAREST;
      if (t === THREE.NearestMipMapNearestFilter)
        return mr.NEAREST_MIPMAP_NEAREST;
      if (t === THREE.NearestMipMapLinearFilter)
        return mr.NEAREST_MIPMAP_LINEAR;
      if (t === THREE.LinearFilter) return mr.LINEAR;
      if (t === THREE.LinearMipMapNearestFilter)
        return mr.LINEAR_MIPMAP_NEAREST;
      if (t === THREE.LinearMipMapLinearFilter) return mr.LINEAR_MIPMAP_LINEAR;
      if (t === THREE.UnsignedByteType) return mr.UNSIGNED_BYTE;
      if (t === THREE.UnsignedShort4444Type) return mr.UNSIGNED_SHORT_4_4_4_4;
      if (t === THREE.UnsignedShort5551Type) return mr.UNSIGNED_SHORT_5_5_5_1;
      if (t === THREE.UnsignedShort565Type) return mr.UNSIGNED_SHORT_5_6_5;
      if (t === THREE.ByteType) return mr.BYTE;
      if (t === THREE.ShortType) return mr.SHORT;
      if (t === THREE.UnsignedShortType) return mr.UNSIGNED_SHORT;
      if (t === THREE.IntType) return mr.INT;
      if (t === THREE.UnsignedIntType) return mr.UNSIGNED_INT;
      if (t === THREE.FloatType) return mr.FLOAT;
      if (t === THREE.AlphaFormat) return mr.ALPHA;
      if (t === THREE.RGBFormat) return mr.RGB;
      if (t === THREE.RGBAFormat) return mr.RGBA;
      if (t === THREE.LuminanceFormat) return mr.LUMINANCE;
      if (t === THREE.LuminanceAlphaFormat) return mr.LUMINANCE_ALPHA;
      if (t === THREE.AddEquation) return mr.FUNC_ADD;
      if (t === THREE.SubtractEquation) return mr.FUNC_SUBTRACT;
      if (t === THREE.ReverseSubtractEquation) return mr.FUNC_REVERSE_SUBTRACT;
      if (t === THREE.ZeroFactor) return mr.ZERO;
      if (t === THREE.OneFactor) return mr.ONE;
      if (t === THREE.SrcColorFactor) return mr.SRC_COLOR;
      if (t === THREE.OneMinusSrcColorFactor) return mr.ONE_MINUS_SRC_COLOR;
      if (t === THREE.SrcAlphaFactor) return mr.SRC_ALPHA;
      if (t === THREE.OneMinusSrcAlphaFactor) return mr.ONE_MINUS_SRC_ALPHA;
      if (t === THREE.DstAlphaFactor) return mr.DST_ALPHA;
      if (t === THREE.OneMinusDstAlphaFactor) return mr.ONE_MINUS_DST_ALPHA;
      if (t === THREE.DstColorFactor) return mr.DST_COLOR;
      if (t === THREE.OneMinusDstColorFactor) return mr.ONE_MINUS_DST_COLOR;
      if (t === THREE.SrcAlphaSaturateFactor) return mr.SRC_ALPHA_SATURATE;
      if (null !== (e = q.get("WEBGL_compressed_texture_s3tc"))) {
        if (t === THREE.RGB_S3TC_DXT1_Format)
          return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (t === THREE.RGBA_S3TC_DXT1_Format)
          return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (t === THREE.RGBA_S3TC_DXT3_Format)
          return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (t === THREE.RGBA_S3TC_DXT5_Format)
          return e.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (null !== (e = q.get("WEBGL_compressed_texture_pvrtc"))) {
        if (t === THREE.RGB_PVRTC_4BPPV1_Format)
          return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (t === THREE.RGB_PVRTC_2BPPV1_Format)
          return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (t === THREE.RGBA_PVRTC_4BPPV1_Format)
          return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (t === THREE.RGBA_PVRTC_2BPPV1_Format)
          return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (null !== (e = q.get("EXT_blend_minmax"))) {
        if (t === THREE.MinEquation) return e.MIN_EXT;
        if (t === THREE.MaxEquation) return e.MAX_EXT;
      }
      return 0;
    }
    console.log("THREE.WebGLRenderer", THREE.REVISION);
    var re =
        void 0 !== (t = t || {}).canvas
          ? t.canvas
          : document.createElement("canvas"),
      e = void 0 !== t.context ? t.context : null,
      ie = void 0 !== t.precision ? t.precision : "highp",
      r = void 0 !== t.alpha && t.alpha,
      n = void 0 === t.depth || t.depth,
      o = void 0 === t.stencil || t.stencil,
      a = void 0 !== t.antialias && t.antialias,
      s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
      R = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
      ne = void 0 !== t.logarithmicDepthBuffer && t.logarithmicDepthBuffer,
      x = new THREE.Color(0),
      H = 0,
      nr = [],
      or = {},
      ar = [],
      sr = [],
      hr = [],
      lr = [],
      cr = [];
    (this.domElement = re),
      (this.context = null),
      (this.devicePixelRatio =
        void 0 !== t.devicePixelRatio
          ? t.devicePixelRatio
          : void 0 !== self.devicePixelRatio
          ? self.devicePixelRatio
          : 1),
      (this.sortObjects =
        this.autoClearStencil =
        this.autoClearDepth =
        this.autoClearColor =
        this.autoClear =
          !0),
      (this.shadowMapEnabled = this.gammaOutput = this.gammaInput = !1),
      (this.shadowMapType = THREE.PCFShadowMap),
      (this.shadowMapCullFace = THREE.CullFaceFront),
      (this.shadowMapCascade = this.shadowMapDebug = !1),
      (this.maxMorphTargets = 8),
      (this.maxMorphNormals = 4),
      (this.autoScaleCubemaps = !0),
      (this.info = {
        memory: { programs: 0, geometries: 0, textures: 0 },
        render: { calls: 0, vertices: 0, faces: 0, points: 0 },
      });
    var ur = this,
      oe = [],
      ae = null,
      _ = null,
      se = -1,
      b = -1,
      he = null,
      le = 0,
      w = -1,
      M = -1,
      S = -1,
      C = -1,
      A = -1,
      L = -1,
      P = -1,
      F = -1,
      D = null,
      U = null,
      B = null,
      V = null,
      z = 0,
      k = 0,
      N = re.width,
      O = re.height,
      I = 0,
      G = 0,
      W = new Uint8Array(16),
      j = new Uint8Array(16),
      Er = new THREE.Frustum(),
      fr = new THREE.Matrix4(),
      dr = new THREE.Matrix4(),
      pr = new THREE.Vector3(),
      ce = new THREE.Vector3(),
      ue = !0,
      Ee = {
        ambient: [0, 0, 0],
        directional: { length: 0, colors: [], positions: [] },
        point: { length: 0, colors: [], positions: [], distances: [] },
        spot: {
          length: 0,
          colors: [],
          positions: [],
          distances: [],
          directions: [],
          anglesCos: [],
          exponents: [],
        },
        hemi: { length: 0, skyColors: [], groundColors: [], positions: [] },
      };
    try {
      var mr,
        X = {
          alpha: r,
          depth: n,
          stencil: o,
          antialias: a,
          premultipliedAlpha: s,
          preserveDrawingBuffer: R,
        };
      if (
        null ===
        (mr =
          e ||
          re.getContext("webgl", X) ||
          re.getContext("experimental-webgl", X))
      ) {
        if (null !== re.getContext("webgl"))
          throw "Error creating WebGL context with your selected attributes.";
        throw "Error creating WebGL context.";
      }
    } catch (t) {
      console.error(t);
    }
    void 0 === mr.getShaderPrecisionFormat &&
      (mr.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    var q = new THREE.WebGLExtensions(mr);
    q.get("OES_texture_float"),
      q.get("OES_texture_float_linear"),
      q.get("OES_standard_derivatives"),
      ne && q.get("EXT_frag_depth"),
      mr.clearColor(0, 0, 0, 1),
      mr.clearDepth(1),
      mr.clearStencil(0),
      mr.enable(mr.DEPTH_TEST),
      mr.depthFunc(mr.LEQUAL),
      mr.frontFace(mr.CCW),
      mr.cullFace(mr.BACK),
      mr.enable(mr.CULL_FACE),
      mr.enable(mr.BLEND),
      mr.blendEquation(mr.FUNC_ADD),
      mr.blendFunc(mr.SRC_ALPHA, mr.ONE_MINUS_SRC_ALPHA),
      mr.viewport(z, k, N, O),
      mr.clearColor(x.r, x.g, x.b, H);
    var Y = (this.context = mr).getParameter(mr.MAX_TEXTURE_IMAGE_UNITS),
      K = mr.getParameter(mr.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      Z = mr.getParameter(mr.MAX_TEXTURE_SIZE),
      fe = mr.getParameter(mr.MAX_CUBE_MAP_TEXTURE_SIZE),
      de = 0 < K,
      pe = de && q.get("OES_texture_float"),
      Q = mr.getShaderPrecisionFormat(mr.VERTEX_SHADER, mr.HIGH_FLOAT),
      J = mr.getShaderPrecisionFormat(mr.VERTEX_SHADER, mr.MEDIUM_FLOAT);
    mr.getShaderPrecisionFormat(mr.VERTEX_SHADER, mr.LOW_FLOAT);
    (t = mr.getShaderPrecisionFormat(mr.FRAGMENT_SHADER, mr.HIGH_FLOAT)),
      (K = mr.getShaderPrecisionFormat(mr.FRAGMENT_SHADER, mr.MEDIUM_FLOAT));
    mr.getShaderPrecisionFormat(mr.FRAGMENT_SHADER, mr.LOW_FLOAT);
    var $,
      me = function () {
        if (void 0 !== $) return $;
        if (
          (($ = []),
          q.get("WEBGL_compressed_texture_pvrtc") ||
            q.get("WEBGL_compressed_texture_s3tc"))
        )
          for (
            var t = mr.getParameter(mr.COMPRESSED_TEXTURE_FORMATS), e = 0;
            e < t.length;
            e++
          )
            $.push(t[e]);
        return $;
      },
      t = 0 < Q.precision && 0 < t.precision,
      K = 0 < J.precision && 0 < K.precision;
    "highp" !== ie ||
      t ||
      (K
        ? ((ie = "mediump"),
          console.warn(
            "THREE.WebGLRenderer: highp not supported, using mediump."
          ))
        : ((ie = "lowp"),
          console.warn(
            "THREE.WebGLRenderer: highp and mediump not supported, using lowp."
          ))),
      "mediump" !== ie ||
        K ||
        ((ie = "lowp"),
        console.warn(
          "THREE.WebGLRenderer: mediump not supported, using lowp."
        ));
    var tt,
      et = new THREE.ShadowMapPlugin(this, nr, or, ar),
      rt = new THREE.SpritePlugin(this, lr),
      it = new THREE.LensFlarePlugin(this, cr);
    (this.getContext = function () {
      return mr;
    }),
      (this.supportsVertexTextures = function () {
        return de;
      }),
      (this.supportsFloatTextures = function () {
        return q.get("OES_texture_float");
      }),
      (this.supportsStandardDerivatives = function () {
        return q.get("OES_standard_derivatives");
      }),
      (this.supportsCompressedTextureS3TC = function () {
        return q.get("WEBGL_compressed_texture_s3tc");
      }),
      (this.supportsCompressedTexturePVRTC = function () {
        return q.get("WEBGL_compressed_texture_pvrtc");
      }),
      (this.supportsBlendMinMax = function () {
        return q.get("EXT_blend_minmax");
      }),
      (this.getMaxAnisotropy = function () {
        if (void 0 !== tt) return tt;
        var t = q.get("EXT_texture_filter_anisotropic");
        return (tt =
          null !== t ? mr.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0);
      }),
      (this.getPrecision = function () {
        return ie;
      }),
      (this.setSize = function (t, e, r) {
        (re.width = t * this.devicePixelRatio),
          (re.height = e * this.devicePixelRatio),
          !1 !== r &&
            ((re.style.width = t + "px"), (re.style.height = e + "px")),
          this.setViewport(0, 0, t, e);
      }),
      (this.setViewport = function (t, e, r, i) {
        (z = t * this.devicePixelRatio),
          (k = e * this.devicePixelRatio),
          (N = r * this.devicePixelRatio),
          (O = i * this.devicePixelRatio),
          mr.viewport(z, k, N, O);
      }),
      (this.setScissor = function (t, e, r, i) {
        mr.scissor(
          t * this.devicePixelRatio,
          e * this.devicePixelRatio,
          r * this.devicePixelRatio,
          i * this.devicePixelRatio
        );
      }),
      (this.enableScissorTest = function (t) {
        t ? mr.enable(mr.SCISSOR_TEST) : mr.disable(mr.SCISSOR_TEST);
      }),
      (this.setClearColor = function (t, e) {
        x.set(t), (H = void 0 !== e ? e : 1), mr.clearColor(x.r, x.g, x.b, H);
      }),
      (this.setClearColorHex = function (t, e) {
        console.warn(
          "THREE.WebGLRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."
        ),
          this.setClearColor(t, e);
      }),
      (this.getClearColor = function () {
        return x;
      }),
      (this.getClearAlpha = function () {
        return H;
      }),
      (this.clear = function (t, e, r) {
        var i = 0;
        (void 0 !== t && !t) || (i |= mr.COLOR_BUFFER_BIT),
          (void 0 !== e && !e) || (i |= mr.DEPTH_BUFFER_BIT),
          (void 0 !== r && !r) || (i |= mr.STENCIL_BUFFER_BIT),
          mr.clear(i);
      }),
      (this.clearColor = function () {
        mr.clear(mr.COLOR_BUFFER_BIT);
      }),
      (this.clearDepth = function () {
        mr.clear(mr.DEPTH_BUFFER_BIT);
      }),
      (this.clearStencil = function () {
        mr.clear(mr.STENCIL_BUFFER_BIT);
      }),
      (this.clearTarget = function (t, e, r, i) {
        this.setRenderTarget(t), this.clear(e, r, i);
      }),
      (this.resetGLState = function () {
        (he = ae = null), (se = b = M = w = F = P = S = -1), (ue = !0);
      });
    var gr = function (t) {
        t.target.traverse(function (t) {
          if (
            (t.removeEventListener("remove", gr),
            t instanceof THREE.Mesh ||
              t instanceof THREE.PointCloud ||
              t instanceof THREE.Line)
          )
            delete or[t.id];
          else if (
            t instanceof THREE.ImmediateRenderObject ||
            t.immediateRenderCallback
          )
            for (var e = ar, r = e.length - 1; 0 <= r; r--)
              e[r].object === t && e.splice(r, 1);
          delete t.__webglInit,
            delete t._modelViewMatrix,
            delete t._normalMatrix,
            delete t.__webglActive;
        });
      },
      Tr = function (t) {
        if (
          ((t = t.target).removeEventListener("dispose", Tr),
          delete t.__webglInit,
          t instanceof THREE.BufferGeometry)
        ) {
          for (var e in t.attributes)
            void 0 !== (r = t.attributes[e]).buffer &&
              (mr.deleteBuffer(r.buffer), delete r.buffer);
          ur.info.memory.geometries--;
        } else if (void 0 !== (e = vr[t.id])) {
          for (var r = 0, i = e.length; r < i; r++) {
            var n = e[r];
            if (void 0 !== n.numMorphTargets) {
              for (var o = 0, a = n.numMorphTargets; o < a; o++)
                mr.deleteBuffer(n.__webglMorphTargetsBuffers[o]);
              delete n.__webglMorphTargetsBuffers;
            }
            if (void 0 !== n.numMorphNormals) {
              for (o = 0, a = n.numMorphNormals; o < a; o++)
                mr.deleteBuffer(n.__webglMorphNormalsBuffers[o]);
              delete n.__webglMorphNormalsBuffers;
            }
            ot(n);
          }
          delete vr[t.id];
        } else ot(t);
        b = -1;
      },
      ge = function (t) {
        (t = t.target).removeEventListener("dispose", ge),
          t.image && t.image.__webglTextureCube
            ? (mr.deleteTexture(t.image.__webglTextureCube),
              delete t.image.__webglTextureCube)
            : void 0 !== t.__webglInit &&
              (mr.deleteTexture(t.__webglTexture),
              delete t.__webglTexture,
              delete t.__webglInit),
          ur.info.memory.textures--;
      },
      nt = function (t) {
        if (
          ((t = t.target).removeEventListener("dispose", nt),
          t && void 0 !== t.__webglTexture)
        ) {
          if (
            (mr.deleteTexture(t.__webglTexture),
            delete t.__webglTexture,
            t instanceof THREE.WebGLRenderTargetCube)
          )
            for (var e = 0; e < 6; e++)
              mr.deleteFramebuffer(t.__webglFramebuffer[e]),
                mr.deleteRenderbuffer(t.__webglRenderbuffer[e]);
          else
            mr.deleteFramebuffer(t.__webglFramebuffer),
              mr.deleteRenderbuffer(t.__webglRenderbuffer);
          delete t.__webglFramebuffer, delete t.__webglRenderbuffer;
        }
        ur.info.memory.textures--;
      },
      Te = function (t) {
        (t = t.target).removeEventListener("dispose", Te), ve(t);
      },
      ot = function (t) {
        for (
          var e =
              "__webglVertexBuffer __webglNormalBuffer __webglTangentBuffer __webglColorBuffer __webglUVBuffer __webglUV2Buffer __webglSkinIndicesBuffer __webglSkinWeightsBuffer __webglFaceBuffer __webglLineBuffer __webglLineDistanceBuffer".split(
                " "
              ),
            r = 0,
            i = e.length;
          r < i;
          r++
        ) {
          var n = e[r];
          void 0 !== t[n] && (mr.deleteBuffer(t[n]), delete t[n]);
        }
        if (void 0 !== t.__webglCustomAttributesList) {
          for (n in t.__webglCustomAttributesList)
            mr.deleteBuffer(t.__webglCustomAttributesList[n].buffer);
          delete t.__webglCustomAttributesList;
        }
        ur.info.memory.geometries--;
      },
      ve = function (t) {
        var e = t.program.program;
        if (void 0 !== e) {
          t.program = void 0;
          var r,
            i,
            n = !1;
          for (t = 0, r = oe.length; t < r; t++)
            if ((i = oe[t]).program === e) {
              i.usedTimes--, 0 === i.usedTimes && (n = !0);
              break;
            }
          if (!0 === n) {
            for (n = [], t = 0, r = oe.length; t < r; t++)
              (i = oe[t]).program !== e && n.push(i);
            (oe = n), mr.deleteProgram(e), ur.info.memory.programs--;
          }
        }
      };
    (this.renderBufferImmediate = function (t, e, r) {
      if (
        (f(),
        t.hasPositions &&
          !t.__webglVertexBuffer &&
          (t.__webglVertexBuffer = mr.createBuffer()),
        t.hasNormals &&
          !t.__webglNormalBuffer &&
          (t.__webglNormalBuffer = mr.createBuffer()),
        t.hasUvs &&
          !t.__webglUvBuffer &&
          (t.__webglUvBuffer = mr.createBuffer()),
        t.hasColors &&
          !t.__webglColorBuffer &&
          (t.__webglColorBuffer = mr.createBuffer()),
        t.hasPositions &&
          (mr.bindBuffer(mr.ARRAY_BUFFER, t.__webglVertexBuffer),
          mr.bufferData(mr.ARRAY_BUFFER, t.positionArray, mr.DYNAMIC_DRAW),
          d(e.attributes.position),
          mr.vertexAttribPointer(e.attributes.position, 3, mr.FLOAT, !1, 0, 0)),
        t.hasNormals)
      ) {
        if (
          (mr.bindBuffer(mr.ARRAY_BUFFER, t.__webglNormalBuffer),
          r.shading === THREE.FlatShading)
        )
          for (var i, n, o, a, s, h, l, c = 3 * t.count, u = 0; u < c; u += 9)
            (i = (l = t.normalArray)[u]),
              (n = l[u + 1]),
              (o = l[u + 2]),
              (a = l[u + 3]),
              (s = l[u + 4]),
              (h = l[u + 5]),
              (i = (i + a + l[u + 6]) / 3),
              (n = (n + s + l[u + 7]) / 3),
              (o = (o + h + l[u + 8]) / 3),
              (l[u] = i),
              (l[u + 1] = n),
              (l[u + 2] = o),
              (l[u + 3] = i),
              (l[u + 4] = n),
              (l[u + 5] = o),
              (l[u + 6] = i),
              (l[u + 7] = n),
              (l[u + 8] = o);
        mr.bufferData(mr.ARRAY_BUFFER, t.normalArray, mr.DYNAMIC_DRAW),
          d(e.attributes.normal),
          mr.vertexAttribPointer(e.attributes.normal, 3, mr.FLOAT, !1, 0, 0);
      }
      t.hasUvs &&
        r.map &&
        (mr.bindBuffer(mr.ARRAY_BUFFER, t.__webglUvBuffer),
        mr.bufferData(mr.ARRAY_BUFFER, t.uvArray, mr.DYNAMIC_DRAW),
        d(e.attributes.uv),
        mr.vertexAttribPointer(e.attributes.uv, 2, mr.FLOAT, !1, 0, 0)),
        t.hasColors &&
          r.vertexColors !== THREE.NoColors &&
          (mr.bindBuffer(mr.ARRAY_BUFFER, t.__webglColorBuffer),
          mr.bufferData(mr.ARRAY_BUFFER, t.colorArray, mr.DYNAMIC_DRAW),
          d(e.attributes.color),
          mr.vertexAttribPointer(e.attributes.color, 3, mr.FLOAT, !1, 0, 0)),
        p(),
        mr.drawArrays(mr.TRIANGLES, 0, t.count),
        (t.count = 0);
    }),
      (this.renderBufferDirect = function (t, e, r, i, n, o) {
        if (!1 !== i.visible)
          if (
            ((t = m(t, e, r, i, o)),
            (e = !1),
            (r = 16777215 * n.id + 2 * t.id + (i.wireframe ? 1 : 0)) !== b &&
              ((b = r), (e = !0)),
            e && f(),
            o instanceof THREE.Mesh)
          )
            if (
              ((o = !0 === i.wireframe ? mr.LINES : mr.TRIANGLES),
              (r = n.attributes.index))
            ) {
              var a,
                s =
                  r.array instanceof Uint32Array &&
                  q.get("OES_element_index_uint")
                    ? ((a = mr.UNSIGNED_INT), 4)
                    : ((a = mr.UNSIGNED_SHORT), 2),
                h = n.offsets;
              if (0 === h.length)
                e &&
                  (E(i, t, n, 0),
                  mr.bindBuffer(mr.ELEMENT_ARRAY_BUFFER, r.buffer)),
                  mr.drawElements(o, r.array.length, a, 0),
                  ur.info.render.calls++,
                  (ur.info.render.vertices += r.array.length),
                  (ur.info.render.faces += r.array.length / 3);
              else {
                e = !0;
                for (var l = 0, c = h.length; l < c; l++) {
                  var u = h[l].index;
                  e &&
                    (E(i, t, n, u),
                    mr.bindBuffer(mr.ELEMENT_ARRAY_BUFFER, r.buffer)),
                    mr.drawElements(o, h[l].count, a, h[l].start * s),
                    ur.info.render.calls++,
                    (ur.info.render.vertices += h[l].count),
                    (ur.info.render.faces += h[l].count / 3);
                }
              }
            } else
              e && E(i, t, n, 0),
                (i = n.attributes.position),
                mr.drawArrays(o, 0, i.array.length / 3),
                ur.info.render.calls++,
                (ur.info.render.vertices += i.array.length / 3),
                (ur.info.render.faces += i.array.length / 9);
          else if (o instanceof THREE.PointCloud)
            e && E(i, t, n, 0),
              (i = n.attributes.position),
              mr.drawArrays(mr.POINTS, 0, i.array.length / 3),
              ur.info.render.calls++,
              (ur.info.render.points += i.array.length / 3);
          else if (o instanceof THREE.Line)
            if (
              ((o = o.mode === THREE.LineStrip ? mr.LINE_STRIP : mr.LINES),
              T(i.linewidth),
              (r = n.attributes.index))
            )
              if (
                ((s =
                  r.array instanceof Uint32Array
                    ? ((a = mr.UNSIGNED_INT), 4)
                    : ((a = mr.UNSIGNED_SHORT), 2)),
                0 === (h = n.offsets).length)
              )
                e &&
                  (E(i, t, n, 0),
                  mr.bindBuffer(mr.ELEMENT_ARRAY_BUFFER, r.buffer)),
                  mr.drawElements(o, r.array.length, a, 0),
                  ur.info.render.calls++,
                  (ur.info.render.vertices += r.array.length);
              else
                for (1 < h.length && (e = !0), l = 0, c = h.length; l < c; l++)
                  (u = h[l].index),
                    e &&
                      (E(i, t, n, u),
                      mr.bindBuffer(mr.ELEMENT_ARRAY_BUFFER, r.buffer)),
                    mr.drawElements(o, h[l].count, a, h[l].start * s),
                    ur.info.render.calls++,
                    (ur.info.render.vertices += h[l].count);
            else
              e && E(i, t, n, 0),
                (i = n.attributes.position),
                mr.drawArrays(o, 0, i.array.length / 3),
                ur.info.render.calls++,
                (ur.info.render.points += i.array.length / 3);
      }),
      (this.renderBuffer = function (t, e, r, i, n, o) {
        if (!1 !== i.visible) {
          if (
            ((e = (r = m(t, e, r, i, o)).attributes),
            (t = !1),
            (r = 16777215 * n.id + 2 * r.id + (i.wireframe ? 1 : 0)) !== b &&
              ((b = r), (t = !0)),
            t && f(),
            !i.morphTargets && 0 <= e.position)
          )
            t &&
              (mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglVertexBuffer),
              d(e.position),
              mr.vertexAttribPointer(e.position, 3, mr.FLOAT, !1, 0, 0));
          else if (o.morphTargetBase) {
            if (
              ((r = i.program.attributes),
              -1 !== o.morphTargetBase && 0 <= r.position
                ? (mr.bindBuffer(
                    mr.ARRAY_BUFFER,
                    n.__webglMorphTargetsBuffers[o.morphTargetBase]
                  ),
                  d(r.position),
                  mr.vertexAttribPointer(r.position, 3, mr.FLOAT, !1, 0, 0))
                : 0 <= r.position &&
                  (mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglVertexBuffer),
                  d(r.position),
                  mr.vertexAttribPointer(r.position, 3, mr.FLOAT, !1, 0, 0)),
              o.morphTargetForcedOrder.length)
            )
              for (
                var a = 0,
                  s = o.morphTargetForcedOrder,
                  h = o.morphTargetInfluences;
                a < i.numSupportedMorphTargets && a < s.length;

              )
                0 <= r["morphTarget" + a] &&
                  (mr.bindBuffer(
                    mr.ARRAY_BUFFER,
                    n.__webglMorphTargetsBuffers[s[a]]
                  ),
                  d(r["morphTarget" + a]),
                  mr.vertexAttribPointer(
                    r["morphTarget" + a],
                    3,
                    mr.FLOAT,
                    !1,
                    0,
                    0
                  )),
                  0 <= r["morphNormal" + a] &&
                    i.morphNormals &&
                    (mr.bindBuffer(
                      mr.ARRAY_BUFFER,
                      n.__webglMorphNormalsBuffers[s[a]]
                    ),
                    d(r["morphNormal" + a]),
                    mr.vertexAttribPointer(
                      r["morphNormal" + a],
                      3,
                      mr.FLOAT,
                      !1,
                      0,
                      0
                    )),
                  (o.__webglMorphTargetInfluences[a] = h[s[a]]),
                  a++;
            else {
              for (
                var s = [], l = (h = o.morphTargetInfluences).length, c = 0;
                c < l;
                c++
              )
                0 < (a = h[c]) && s.push([a, c]);
              for (
                s.length > i.numSupportedMorphTargets
                  ? (s.sort($e), (s.length = i.numSupportedMorphTargets))
                  : s.length > i.numSupportedMorphNormals
                  ? s.sort($e)
                  : 0 === s.length && s.push([0, 0]),
                  a = 0;
                a < i.numSupportedMorphTargets;

              )
                s[a]
                  ? ((c = s[a][1]),
                    0 <= r["morphTarget" + a] &&
                      (mr.bindBuffer(
                        mr.ARRAY_BUFFER,
                        n.__webglMorphTargetsBuffers[c]
                      ),
                      d(r["morphTarget" + a]),
                      mr.vertexAttribPointer(
                        r["morphTarget" + a],
                        3,
                        mr.FLOAT,
                        !1,
                        0,
                        0
                      )),
                    0 <= r["morphNormal" + a] &&
                      i.morphNormals &&
                      (mr.bindBuffer(
                        mr.ARRAY_BUFFER,
                        n.__webglMorphNormalsBuffers[c]
                      ),
                      d(r["morphNormal" + a]),
                      mr.vertexAttribPointer(
                        r["morphNormal" + a],
                        3,
                        mr.FLOAT,
                        !1,
                        0,
                        0
                      )),
                    (o.__webglMorphTargetInfluences[a] = h[c]))
                  : (o.__webglMorphTargetInfluences[a] = 0),
                  a++;
            }
            null !== i.program.uniforms.morphTargetInfluences &&
              mr.uniform1fv(
                i.program.uniforms.morphTargetInfluences,
                o.__webglMorphTargetInfluences
              );
          }
          if (t) {
            if (n.__webglCustomAttributesList)
              for (r = 0, h = n.__webglCustomAttributesList.length; r < h; r++)
                0 <=
                  e[
                    (s = n.__webglCustomAttributesList[r]).buffer
                      .belongsToAttribute
                  ] &&
                  (mr.bindBuffer(mr.ARRAY_BUFFER, s.buffer),
                  d(e[s.buffer.belongsToAttribute]),
                  mr.vertexAttribPointer(
                    e[s.buffer.belongsToAttribute],
                    s.size,
                    mr.FLOAT,
                    !1,
                    0,
                    0
                  ));
            0 <= e.color &&
              (0 < o.geometry.colors.length || 0 < o.geometry.faces.length
                ? (mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglColorBuffer),
                  d(e.color),
                  mr.vertexAttribPointer(e.color, 3, mr.FLOAT, !1, 0, 0))
                : void 0 !== i.defaultAttributeValues &&
                  mr.vertexAttrib3fv(e.color, i.defaultAttributeValues.color)),
              0 <= e.normal &&
                (mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglNormalBuffer),
                d(e.normal),
                mr.vertexAttribPointer(e.normal, 3, mr.FLOAT, !1, 0, 0)),
              0 <= e.tangent &&
                (mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglTangentBuffer),
                d(e.tangent),
                mr.vertexAttribPointer(e.tangent, 4, mr.FLOAT, !1, 0, 0)),
              0 <= e.uv &&
                (o.geometry.faceVertexUvs[0]
                  ? (mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglUVBuffer),
                    d(e.uv),
                    mr.vertexAttribPointer(e.uv, 2, mr.FLOAT, !1, 0, 0))
                  : void 0 !== i.defaultAttributeValues &&
                    mr.vertexAttrib2fv(e.uv, i.defaultAttributeValues.uv)),
              0 <= e.uv2 &&
                (o.geometry.faceVertexUvs[1]
                  ? (mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglUV2Buffer),
                    d(e.uv2),
                    mr.vertexAttribPointer(e.uv2, 2, mr.FLOAT, !1, 0, 0))
                  : void 0 !== i.defaultAttributeValues &&
                    mr.vertexAttrib2fv(e.uv2, i.defaultAttributeValues.uv2)),
              i.skinning &&
                0 <= e.skinIndex &&
                0 <= e.skinWeight &&
                (mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglSkinIndicesBuffer),
                d(e.skinIndex),
                mr.vertexAttribPointer(e.skinIndex, 4, mr.FLOAT, !1, 0, 0),
                mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglSkinWeightsBuffer),
                d(e.skinWeight),
                mr.vertexAttribPointer(e.skinWeight, 4, mr.FLOAT, !1, 0, 0)),
              0 <= e.lineDistance &&
                (mr.bindBuffer(mr.ARRAY_BUFFER, n.__webglLineDistanceBuffer),
                d(e.lineDistance),
                mr.vertexAttribPointer(e.lineDistance, 1, mr.FLOAT, !1, 0, 0));
          }
          p(),
            o instanceof THREE.Mesh
              ? ((o =
                  n.__typeArray === Uint32Array
                    ? mr.UNSIGNED_INT
                    : mr.UNSIGNED_SHORT),
                i.wireframe
                  ? (T(i.wireframeLinewidth),
                    t &&
                      mr.bindBuffer(
                        mr.ELEMENT_ARRAY_BUFFER,
                        n.__webglLineBuffer
                      ),
                    mr.drawElements(mr.LINES, n.__webglLineCount, o, 0))
                  : (t &&
                      mr.bindBuffer(
                        mr.ELEMENT_ARRAY_BUFFER,
                        n.__webglFaceBuffer
                      ),
                    mr.drawElements(mr.TRIANGLES, n.__webglFaceCount, o, 0)),
                ur.info.render.calls++,
                (ur.info.render.vertices += n.__webglFaceCount),
                (ur.info.render.faces += n.__webglFaceCount / 3))
              : o instanceof THREE.Line
              ? ((o = o.mode === THREE.LineStrip ? mr.LINE_STRIP : mr.LINES),
                T(i.linewidth),
                mr.drawArrays(o, 0, n.__webglLineCount),
                ur.info.render.calls++)
              : o instanceof THREE.PointCloud &&
                (mr.drawArrays(mr.POINTS, 0, n.__webglParticleCount),
                ur.info.render.calls++,
                (ur.info.render.points += n.__webglParticleCount));
        }
      }),
      (this.render = function (t, e, r, i) {
        if (!1 == e instanceof THREE.Camera)
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
        else {
          var n = t.fog;
          (se = b = -1),
            (ue = !(he = null)) === t.autoUpdate && t.updateMatrixWorld(),
            void 0 === e.parent && e.updateMatrixWorld(),
            t.traverse(function (t) {
              t instanceof THREE.SkinnedMesh && t.skeleton.update();
            }),
            e.matrixWorldInverse.getInverse(e.matrixWorld),
            fr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            Er.setFromMatrix(fr),
            (nr.length = 0),
            (sr.length = 0),
            (hr.length = 0),
            (lr.length = 0),
            (cr.length = 0),
            (function t(e, r) {
              if (!1 !== r.visible) {
                if (!(r instanceof THREE.Scene || r instanceof THREE.Group)) {
                  void 0 === r.__webglInit &&
                    ((r.__webglInit = !0),
                    (r._modelViewMatrix = new THREE.Matrix4()),
                    (r._normalMatrix = new THREE.Matrix3()),
                    r.addEventListener("removed", gr));
                  var i,
                    n = r.geometry;
                  if (
                    (void 0 === n ||
                      void 0 !== n.__webglInit ||
                      ((n.__webglInit = !0),
                      n.addEventListener("dispose", Tr),
                      n instanceof THREE.BufferGeometry) ||
                      (r instanceof THREE.Mesh
                        ? tr(e, r, n)
                        : r instanceof THREE.Line
                        ? void 0 === n.__webglVertexBuffer &&
                          ((n.__webglVertexBuffer = mr.createBuffer()),
                          (n.__webglColorBuffer = mr.createBuffer()),
                          (n.__webglLineDistanceBuffer = mr.createBuffer()),
                          ur.info.memory.geometries++,
                          (i = n.vertices.length),
                          (n.__vertexArray = new Float32Array(3 * i)),
                          (n.__colorArray = new Float32Array(3 * i)),
                          (n.__lineDistanceArray = new Float32Array(+i)),
                          (n.__webglLineCount = i),
                          Ze(r),
                          (n.verticesNeedUpdate = !0),
                          (n.colorsNeedUpdate = !0),
                          (n.lineDistancesNeedUpdate = !0))
                        : r instanceof THREE.PointCloud &&
                          void 0 === n.__webglVertexBuffer &&
                          ((n.__webglVertexBuffer = mr.createBuffer()),
                          (n.__webglColorBuffer = mr.createBuffer()),
                          ur.info.memory.geometries++,
                          (i = n.vertices.length),
                          (n.__vertexArray = new Float32Array(3 * i)),
                          (n.__colorArray = new Float32Array(3 * i)),
                          (n.__sortArray = []),
                          (n.__webglParticleCount = i),
                          Ze(r),
                          (n.verticesNeedUpdate = !0),
                          (n.colorsNeedUpdate = !0))),
                    void 0 === r.__webglActive)
                  )
                    if (((r.__webglActive = !0), r instanceof THREE.Mesh)) {
                      if (n instanceof THREE.BufferGeometry) er(or, n, r);
                      else if (n instanceof THREE.Geometry)
                        for (var o = vr[n.id], a = 0, s = o.length; a < s; a++)
                          er(or, o[a], r);
                    } else
                      r instanceof THREE.Line || r instanceof THREE.PointCloud
                        ? er(or, n, r)
                        : (r instanceof THREE.ImmediateRenderObject ||
                            r.immediateRenderCallback) &&
                          ar.push({
                            id: null,
                            object: r,
                            opaque: null,
                            transparent: null,
                            z: 0,
                          });
                  if (r instanceof THREE.Light) nr.push(r);
                  else if (r instanceof THREE.Sprite) lr.push(r);
                  else if (r instanceof THREE.LensFlare) cr.push(r);
                  else {
                    var h = or[r.id];
                    if (
                      h &&
                      (!1 === r.frustumCulled || !0 === Er.intersectsObject(r))
                    ) {
                      var l,
                        c = r.geometry;
                      if (c instanceof THREE.BufferGeometry)
                        for (
                          var u = c.attributes,
                            E = c.attributesKeys,
                            f = 0,
                            d = E.length;
                          f < d;
                          f++
                        ) {
                          var p = E[f],
                            m = u[p];
                          void 0 === m.buffer &&
                            ((m.buffer = mr.createBuffer()),
                            (m.needsUpdate = !0)),
                            !0 === m.needsUpdate &&
                              ((p =
                                "index" === p
                                  ? mr.ELEMENT_ARRAY_BUFFER
                                  : mr.ARRAY_BUFFER),
                              mr.bindBuffer(p, m.buffer),
                              mr.bufferData(p, m.array, mr.STATIC_DRAW),
                              (m.needsUpdate = !1));
                        }
                      else if (r instanceof THREE.Mesh) {
                        !0 === c.groupsNeedUpdate && tr(e, r, c);
                        for (
                          var g = vr[c.id], T = 0, v = g.length;
                          T < v;
                          T++
                        ) {
                          var y = g[T],
                            R = Je(r, y);
                          if (
                            (!0 === c.groupsNeedUpdate && Qe(y, r),
                            (l = R.attributes && rr(R)),
                            c.verticesNeedUpdate ||
                              c.morphTargetsNeedUpdate ||
                              c.elementsNeedUpdate ||
                              c.uvsNeedUpdate ||
                              c.normalsNeedUpdate ||
                              c.colorsNeedUpdate ||
                              c.tangentsNeedUpdate ||
                              l)
                          ) {
                            var x = y,
                              H = mr.DYNAMIC_DRAW,
                              _ = !c.dynamic,
                              b = R;
                            if (x.__inittedArrays) {
                              var w,
                                M,
                                S,
                                C,
                                A,
                                L,
                                P,
                                F,
                                D,
                                U,
                                B,
                                V,
                                z,
                                k,
                                N,
                                O,
                                I,
                                G,
                                W,
                                j =
                                  b &&
                                  void 0 !== b.shading &&
                                  b.shading === THREE.SmoothShading,
                                X = void 0,
                                q = void 0,
                                Y = void 0,
                                K = void 0,
                                Z = void 0,
                                Q = void 0,
                                J = void 0,
                                $ = void 0,
                                tt = void 0,
                                et = void 0,
                                rt = void 0,
                                it = void 0,
                                nt = void 0,
                                ot = void 0,
                                at = void 0,
                                st = void 0,
                                ht = 0,
                                lt = 0,
                                ct = 0,
                                ut = 0,
                                Et = 0,
                                ft = 0,
                                dt = 0,
                                pt = 0,
                                mt = 0,
                                gt = 0,
                                Tt = 0,
                                vt = 0,
                                yt = void 0,
                                Rt = x.__vertexArray,
                                xt = x.__uvArray,
                                Ht = x.__uv2Array,
                                _t = x.__normalArray,
                                bt = x.__tangentArray,
                                wt = x.__colorArray,
                                Mt = x.__skinIndexArray,
                                St = x.__skinWeightArray,
                                Ct = x.__morphTargetsArrays,
                                At = x.__morphNormalsArrays,
                                Lt = x.__webglCustomAttributesList,
                                Pt = void 0,
                                Ft = x.__faceArray,
                                Dt = x.__lineArray,
                                Ut = r.geometry,
                                Bt = Ut.elementsNeedUpdate,
                                Vt = Ut.uvsNeedUpdate,
                                zt = Ut.normalsNeedUpdate,
                                kt = Ut.tangentsNeedUpdate,
                                Nt = Ut.colorsNeedUpdate,
                                y = Ut.morphTargetsNeedUpdate,
                                Ot = Ut.vertices,
                                It = x.faces3,
                                Gt = Ut.faces,
                                Wt = Ut.faceVertexUvs[0],
                                jt = Ut.faceVertexUvs[1],
                                Xt = Ut.skinIndices,
                                qt = Ut.skinWeights,
                                Yt = Ut.morphTargets,
                                Kt = Ut.morphNormals;
                              if (Ut.verticesNeedUpdate) {
                                for (X = 0, q = It.length; X < q; X++)
                                  (K = Ot[(Y = Gt[It[X]]).a]),
                                    (Z = Ot[Y.b]),
                                    (Q = Ot[Y.c]),
                                    (Rt[lt] = K.x),
                                    (Rt[lt + 1] = K.y),
                                    (Rt[lt + 2] = K.z),
                                    (Rt[lt + 3] = Z.x),
                                    (Rt[lt + 4] = Z.y),
                                    (Rt[lt + 5] = Z.z),
                                    (Rt[lt + 6] = Q.x),
                                    (Rt[lt + 7] = Q.y),
                                    (Rt[lt + 8] = Q.z),
                                    (lt += 9);
                                mr.bindBuffer(
                                  mr.ARRAY_BUFFER,
                                  x.__webglVertexBuffer
                                ),
                                  mr.bufferData(mr.ARRAY_BUFFER, Rt, H);
                              }
                              if (y)
                                for (ot = 0, I = Yt.length; ot < I; ot++) {
                                  for (X = Tt = 0, q = It.length; X < q; X++)
                                    (Y = Gt[(G = It[X])]),
                                      (K = Yt[ot].vertices[Y.a]),
                                      (Z = Yt[ot].vertices[Y.b]),
                                      (Q = Yt[ot].vertices[Y.c]),
                                      ((at = Ct[ot])[Tt] = K.x),
                                      (at[Tt + 1] = K.y),
                                      (at[Tt + 2] = K.z),
                                      (at[Tt + 3] = Z.x),
                                      (at[Tt + 4] = Z.y),
                                      (at[Tt + 5] = Z.z),
                                      (at[Tt + 6] = Q.x),
                                      (at[Tt + 7] = Q.y),
                                      (at[Tt + 8] = Q.z),
                                      b.morphNormals &&
                                        ((tt = j
                                          ? ((J = (W = Kt[ot].vertexNormals[G])
                                              .a),
                                            ($ = W.b),
                                            W.c)
                                          : ($ = J = Kt[ot].faceNormals[G])),
                                        ((st = At[ot])[Tt] = J.x),
                                        (st[Tt + 1] = J.y),
                                        (st[Tt + 2] = J.z),
                                        (st[Tt + 3] = $.x),
                                        (st[Tt + 4] = $.y),
                                        (st[Tt + 5] = $.z),
                                        (st[Tt + 6] = tt.x),
                                        (st[Tt + 7] = tt.y),
                                        (st[Tt + 8] = tt.z)),
                                      (Tt += 9);
                                  mr.bindBuffer(
                                    mr.ARRAY_BUFFER,
                                    x.__webglMorphTargetsBuffers[ot]
                                  ),
                                    mr.bufferData(mr.ARRAY_BUFFER, Ct[ot], H),
                                    b.morphNormals &&
                                      (mr.bindBuffer(
                                        mr.ARRAY_BUFFER,
                                        x.__webglMorphNormalsBuffers[ot]
                                      ),
                                      mr.bufferData(
                                        mr.ARRAY_BUFFER,
                                        At[ot],
                                        H
                                      ));
                                }
                              if (qt.length) {
                                for (X = 0, q = It.length; X < q; X++)
                                  (U = qt[(Y = Gt[It[X]]).a]),
                                    (B = qt[Y.b]),
                                    (V = qt[Y.c]),
                                    (St[gt] = U.x),
                                    (St[gt + 1] = U.y),
                                    (St[gt + 2] = U.z),
                                    (St[gt + 3] = U.w),
                                    (St[gt + 4] = B.x),
                                    (St[gt + 5] = B.y),
                                    (St[gt + 6] = B.z),
                                    (St[gt + 7] = B.w),
                                    (St[gt + 8] = V.x),
                                    (St[gt + 9] = V.y),
                                    (St[gt + 10] = V.z),
                                    (St[gt + 11] = V.w),
                                    (U = Xt[Y.a]),
                                    (B = Xt[Y.b]),
                                    (V = Xt[Y.c]),
                                    (Mt[gt] = U.x),
                                    (Mt[gt + 1] = U.y),
                                    (Mt[gt + 2] = U.z),
                                    (Mt[gt + 3] = U.w),
                                    (Mt[gt + 4] = B.x),
                                    (Mt[gt + 5] = B.y),
                                    (Mt[gt + 6] = B.z),
                                    (Mt[gt + 7] = B.w),
                                    (Mt[gt + 8] = V.x),
                                    (Mt[gt + 9] = V.y),
                                    (Mt[gt + 10] = V.z),
                                    (Mt[gt + 11] = V.w),
                                    (gt += 12);
                                0 < gt &&
                                  (mr.bindBuffer(
                                    mr.ARRAY_BUFFER,
                                    x.__webglSkinIndicesBuffer
                                  ),
                                  mr.bufferData(mr.ARRAY_BUFFER, Mt, H),
                                  mr.bindBuffer(
                                    mr.ARRAY_BUFFER,
                                    x.__webglSkinWeightsBuffer
                                  ),
                                  mr.bufferData(mr.ARRAY_BUFFER, St, H));
                              }
                              if (Nt) {
                                for (X = 0, q = It.length; X < q; X++)
                                  (S = (Y = Gt[It[X]]).vertexColors),
                                    (C = Y.color),
                                    (it =
                                      3 === S.length &&
                                      b.vertexColors === THREE.VertexColors
                                        ? ((et = S[0]), (rt = S[1]), S[2])
                                        : (rt = et = C)),
                                    (wt[mt] = et.r),
                                    (wt[mt + 1] = et.g),
                                    (wt[mt + 2] = et.b),
                                    (wt[mt + 3] = rt.r),
                                    (wt[mt + 4] = rt.g),
                                    (wt[mt + 5] = rt.b),
                                    (wt[mt + 6] = it.r),
                                    (wt[mt + 7] = it.g),
                                    (wt[mt + 8] = it.b),
                                    (mt += 9);
                                0 < mt &&
                                  (mr.bindBuffer(
                                    mr.ARRAY_BUFFER,
                                    x.__webglColorBuffer
                                  ),
                                  mr.bufferData(mr.ARRAY_BUFFER, wt, H));
                              }
                              if (kt && Ut.hasTangents) {
                                for (X = 0, q = It.length; X < q; X++)
                                  (P = (D = (Y = Gt[It[X]]).vertexTangents)[0]),
                                    (F = D[1]),
                                    (D = D[2]),
                                    (bt[dt] = P.x),
                                    (bt[dt + 1] = P.y),
                                    (bt[dt + 2] = P.z),
                                    (bt[dt + 3] = P.w),
                                    (bt[dt + 4] = F.x),
                                    (bt[dt + 5] = F.y),
                                    (bt[dt + 6] = F.z),
                                    (bt[dt + 7] = F.w),
                                    (bt[dt + 8] = D.x),
                                    (bt[dt + 9] = D.y),
                                    (bt[dt + 10] = D.z),
                                    (bt[dt + 11] = D.w),
                                    (dt += 12);
                                mr.bindBuffer(
                                  mr.ARRAY_BUFFER,
                                  x.__webglTangentBuffer
                                ),
                                  mr.bufferData(mr.ARRAY_BUFFER, bt, H);
                              }
                              if (zt) {
                                for (X = 0, q = It.length; X < q; X++)
                                  if (
                                    ((w = (Y = Gt[It[X]]).vertexNormals),
                                    (M = Y.normal),
                                    3 === w.length && j)
                                  )
                                    for (nt = 0; nt < 3; nt++)
                                      (k = w[nt]),
                                        (_t[ft] = k.x),
                                        (_t[ft + 1] = k.y),
                                        (_t[ft + 2] = k.z),
                                        (ft += 3);
                                  else
                                    for (nt = 0; nt < 3; nt++)
                                      (_t[ft] = M.x),
                                        (_t[ft + 1] = M.y),
                                        (_t[ft + 2] = M.z),
                                        (ft += 3);
                                mr.bindBuffer(
                                  mr.ARRAY_BUFFER,
                                  x.__webglNormalBuffer
                                ),
                                  mr.bufferData(mr.ARRAY_BUFFER, _t, H);
                              }
                              if (Vt && Wt) {
                                for (X = 0, q = It.length; X < q; X++)
                                  if (void 0 !== (A = Wt[It[X]]))
                                    for (nt = 0; nt < 3; nt++)
                                      (N = A[nt]),
                                        (xt[ct] = N.x),
                                        (xt[ct + 1] = N.y),
                                        (ct += 2);
                                0 < ct &&
                                  (mr.bindBuffer(
                                    mr.ARRAY_BUFFER,
                                    x.__webglUVBuffer
                                  ),
                                  mr.bufferData(mr.ARRAY_BUFFER, xt, H));
                              }
                              if (Vt && jt) {
                                for (X = 0, q = It.length; X < q; X++)
                                  if (void 0 !== (L = jt[It[X]]))
                                    for (nt = 0; nt < 3; nt++)
                                      (O = L[nt]),
                                        (Ht[ut] = O.x),
                                        (Ht[ut + 1] = O.y),
                                        (ut += 2);
                                0 < ut &&
                                  (mr.bindBuffer(
                                    mr.ARRAY_BUFFER,
                                    x.__webglUV2Buffer
                                  ),
                                  mr.bufferData(mr.ARRAY_BUFFER, Ht, H));
                              }
                              if (Bt) {
                                for (X = 0, q = It.length; X < q; X++)
                                  (Ft[Et] = ht),
                                    (Ft[Et + 1] = ht + 1),
                                    (Ft[Et + 2] = ht + 2),
                                    (Et += 3),
                                    (Dt[pt] = ht),
                                    (Dt[pt + 1] = ht + 1),
                                    (Dt[pt + 2] = ht),
                                    (Dt[pt + 3] = ht + 2),
                                    (Dt[pt + 4] = ht + 1),
                                    (Dt[pt + 5] = ht + 2),
                                    (pt += 6),
                                    (ht += 3);
                                mr.bindBuffer(
                                  mr.ELEMENT_ARRAY_BUFFER,
                                  x.__webglFaceBuffer
                                ),
                                  mr.bufferData(mr.ELEMENT_ARRAY_BUFFER, Ft, H),
                                  mr.bindBuffer(
                                    mr.ELEMENT_ARRAY_BUFFER,
                                    x.__webglLineBuffer
                                  ),
                                  mr.bufferData(mr.ELEMENT_ARRAY_BUFFER, Dt, H);
                              }
                              if (Lt)
                                for (nt = 0, z = Lt.length; nt < z; nt++)
                                  if ((Pt = Lt[nt]).__original.needsUpdate) {
                                    if (((vt = 0), 1 === Pt.size)) {
                                      if (
                                        void 0 === Pt.boundTo ||
                                        "vertices" === Pt.boundTo
                                      )
                                        for (X = 0, q = It.length; X < q; X++)
                                          (Y = Gt[It[X]]),
                                            (Pt.array[vt] = Pt.value[Y.a]),
                                            (Pt.array[vt + 1] = Pt.value[Y.b]),
                                            (Pt.array[vt + 2] = Pt.value[Y.c]),
                                            (vt += 3);
                                      else if ("faces" === Pt.boundTo)
                                        for (X = 0, q = It.length; X < q; X++)
                                          (yt = Pt.value[It[X]]),
                                            (Pt.array[vt] = yt),
                                            (Pt.array[vt + 1] = yt),
                                            (Pt.array[vt + 2] = yt),
                                            (vt += 3);
                                    } else if (2 === Pt.size) {
                                      if (
                                        void 0 === Pt.boundTo ||
                                        "vertices" === Pt.boundTo
                                      )
                                        for (X = 0, q = It.length; X < q; X++)
                                          (Y = Gt[It[X]]),
                                            (K = Pt.value[Y.a]),
                                            (Z = Pt.value[Y.b]),
                                            (Q = Pt.value[Y.c]),
                                            (Pt.array[vt] = K.x),
                                            (Pt.array[vt + 1] = K.y),
                                            (Pt.array[vt + 2] = Z.x),
                                            (Pt.array[vt + 3] = Z.y),
                                            (Pt.array[vt + 4] = Q.x),
                                            (Pt.array[vt + 5] = Q.y),
                                            (vt += 6);
                                      else if ("faces" === Pt.boundTo)
                                        for (X = 0, q = It.length; X < q; X++)
                                          (Q = Z = K = yt = Pt.value[It[X]]),
                                            (Pt.array[vt] = K.x),
                                            (Pt.array[vt + 1] = K.y),
                                            (Pt.array[vt + 2] = Z.x),
                                            (Pt.array[vt + 3] = Z.y),
                                            (Pt.array[vt + 4] = Q.x),
                                            (Pt.array[vt + 5] = Q.y),
                                            (vt += 6);
                                    } else if (3 === Pt.size) {
                                      var Zt =
                                        "c" === Pt.type
                                          ? ["r", "g", "b"]
                                          : ["x", "y", "z"];
                                      if (
                                        void 0 === Pt.boundTo ||
                                        "vertices" === Pt.boundTo
                                      )
                                        for (X = 0, q = It.length; X < q; X++)
                                          (Y = Gt[It[X]]),
                                            (K = Pt.value[Y.a]),
                                            (Z = Pt.value[Y.b]),
                                            (Q = Pt.value[Y.c]),
                                            (Pt.array[vt] = K[Zt[0]]),
                                            (Pt.array[vt + 1] = K[Zt[1]]),
                                            (Pt.array[vt + 2] = K[Zt[2]]),
                                            (Pt.array[vt + 3] = Z[Zt[0]]),
                                            (Pt.array[vt + 4] = Z[Zt[1]]),
                                            (Pt.array[vt + 5] = Z[Zt[2]]),
                                            (Pt.array[vt + 6] = Q[Zt[0]]),
                                            (Pt.array[vt + 7] = Q[Zt[1]]),
                                            (Pt.array[vt + 8] = Q[Zt[2]]),
                                            (vt += 9);
                                      else if ("faces" === Pt.boundTo)
                                        for (X = 0, q = It.length; X < q; X++)
                                          (Q = Z = K = yt = Pt.value[It[X]]),
                                            (Pt.array[vt] = K[Zt[0]]),
                                            (Pt.array[vt + 1] = K[Zt[1]]),
                                            (Pt.array[vt + 2] = K[Zt[2]]),
                                            (Pt.array[vt + 3] = Z[Zt[0]]),
                                            (Pt.array[vt + 4] = Z[Zt[1]]),
                                            (Pt.array[vt + 5] = Z[Zt[2]]),
                                            (Pt.array[vt + 6] = Q[Zt[0]]),
                                            (Pt.array[vt + 7] = Q[Zt[1]]),
                                            (Pt.array[vt + 8] = Q[Zt[2]]),
                                            (vt += 9);
                                      else if ("faceVertices" === Pt.boundTo)
                                        for (X = 0, q = It.length; X < q; X++)
                                          (K = (yt = Pt.value[It[X]])[0]),
                                            (Z = yt[1]),
                                            (Q = yt[2]),
                                            (Pt.array[vt] = K[Zt[0]]),
                                            (Pt.array[vt + 1] = K[Zt[1]]),
                                            (Pt.array[vt + 2] = K[Zt[2]]),
                                            (Pt.array[vt + 3] = Z[Zt[0]]),
                                            (Pt.array[vt + 4] = Z[Zt[1]]),
                                            (Pt.array[vt + 5] = Z[Zt[2]]),
                                            (Pt.array[vt + 6] = Q[Zt[0]]),
                                            (Pt.array[vt + 7] = Q[Zt[1]]),
                                            (Pt.array[vt + 8] = Q[Zt[2]]),
                                            (vt += 9);
                                    } else if (4 === Pt.size)
                                      if (
                                        void 0 === Pt.boundTo ||
                                        "vertices" === Pt.boundTo
                                      )
                                        for (X = 0, q = It.length; X < q; X++)
                                          (Y = Gt[It[X]]),
                                            (K = Pt.value[Y.a]),
                                            (Z = Pt.value[Y.b]),
                                            (Q = Pt.value[Y.c]),
                                            (Pt.array[vt] = K.x),
                                            (Pt.array[vt + 1] = K.y),
                                            (Pt.array[vt + 2] = K.z),
                                            (Pt.array[vt + 3] = K.w),
                                            (Pt.array[vt + 4] = Z.x),
                                            (Pt.array[vt + 5] = Z.y),
                                            (Pt.array[vt + 6] = Z.z),
                                            (Pt.array[vt + 7] = Z.w),
                                            (Pt.array[vt + 8] = Q.x),
                                            (Pt.array[vt + 9] = Q.y),
                                            (Pt.array[vt + 10] = Q.z),
                                            (Pt.array[vt + 11] = Q.w),
                                            (vt += 12);
                                      else if ("faces" === Pt.boundTo)
                                        for (X = 0, q = It.length; X < q; X++)
                                          (Q = Z = K = yt = Pt.value[It[X]]),
                                            (Pt.array[vt] = K.x),
                                            (Pt.array[vt + 1] = K.y),
                                            (Pt.array[vt + 2] = K.z),
                                            (Pt.array[vt + 3] = K.w),
                                            (Pt.array[vt + 4] = Z.x),
                                            (Pt.array[vt + 5] = Z.y),
                                            (Pt.array[vt + 6] = Z.z),
                                            (Pt.array[vt + 7] = Z.w),
                                            (Pt.array[vt + 8] = Q.x),
                                            (Pt.array[vt + 9] = Q.y),
                                            (Pt.array[vt + 10] = Q.z),
                                            (Pt.array[vt + 11] = Q.w),
                                            (vt += 12);
                                      else if ("faceVertices" === Pt.boundTo)
                                        for (X = 0, q = It.length; X < q; X++)
                                          (K = (yt = Pt.value[It[X]])[0]),
                                            (Z = yt[1]),
                                            (Q = yt[2]),
                                            (Pt.array[vt] = K.x),
                                            (Pt.array[vt + 1] = K.y),
                                            (Pt.array[vt + 2] = K.z),
                                            (Pt.array[vt + 3] = K.w),
                                            (Pt.array[vt + 4] = Z.x),
                                            (Pt.array[vt + 5] = Z.y),
                                            (Pt.array[vt + 6] = Z.z),
                                            (Pt.array[vt + 7] = Z.w),
                                            (Pt.array[vt + 8] = Q.x),
                                            (Pt.array[vt + 9] = Q.y),
                                            (Pt.array[vt + 10] = Q.z),
                                            (Pt.array[vt + 11] = Q.w),
                                            (vt += 12);
                                    mr.bindBuffer(mr.ARRAY_BUFFER, Pt.buffer),
                                      mr.bufferData(
                                        mr.ARRAY_BUFFER,
                                        Pt.array,
                                        H
                                      );
                                  }
                              _ &&
                                (delete x.__inittedArrays,
                                delete x.__colorArray,
                                delete x.__normalArray,
                                delete x.__tangentArray,
                                delete x.__uvArray,
                                delete x.__uv2Array,
                                delete x.__faceArray,
                                delete x.__vertexArray,
                                delete x.__lineArray,
                                delete x.__skinIndexArray,
                                delete x.__skinWeightArray);
                            }
                          }
                        }
                        (c.verticesNeedUpdate = !1),
                          (c.morphTargetsNeedUpdate = !1),
                          (c.elementsNeedUpdate = !1),
                          (c.uvsNeedUpdate = !1),
                          (c.normalsNeedUpdate = !1),
                          (c.colorsNeedUpdate = !1),
                          (c.tangentsNeedUpdate = !1),
                          R.attributes && ir(R);
                      } else if (r instanceof THREE.Line) {
                        if (
                          ((l = (R = Je(r, c)).attributes && rr(R)),
                          c.verticesNeedUpdate ||
                            c.colorsNeedUpdate ||
                            c.lineDistancesNeedUpdate ||
                            l)
                        ) {
                          var Qt,
                            Jt,
                            $t,
                            te,
                            ee,
                            re,
                            ie,
                            ne,
                            oe,
                            ae,
                            se,
                            he,
                            le = mr.DYNAMIC_DRAW,
                            ce = c.vertices,
                            ue = c.colors,
                            Ee = c.lineDistances,
                            fe = ce.length,
                            de = ue.length,
                            pe = Ee.length,
                            me = c.__vertexArray,
                            ge = c.__colorArray,
                            Te = c.__lineDistanceArray,
                            ve = c.colorsNeedUpdate,
                            ye = c.lineDistancesNeedUpdate,
                            Re = c.__webglCustomAttributesList;
                          if (c.verticesNeedUpdate) {
                            for (Qt = 0; Qt < fe; Qt++)
                              (te = ce[Qt]),
                                (me[(ee = 3 * Qt)] = te.x),
                                (me[ee + 1] = te.y),
                                (me[ee + 2] = te.z);
                            mr.bindBuffer(
                              mr.ARRAY_BUFFER,
                              c.__webglVertexBuffer
                            ),
                              mr.bufferData(mr.ARRAY_BUFFER, me, le);
                          }
                          if (ve) {
                            for (Jt = 0; Jt < de; Jt++)
                              (re = ue[Jt]),
                                (ge[(ee = 3 * Jt)] = re.r),
                                (ge[ee + 1] = re.g),
                                (ge[ee + 2] = re.b);
                            mr.bindBuffer(
                              mr.ARRAY_BUFFER,
                              c.__webglColorBuffer
                            ),
                              mr.bufferData(mr.ARRAY_BUFFER, ge, le);
                          }
                          if (ye) {
                            for ($t = 0; $t < pe; $t++) Te[$t] = Ee[$t];
                            mr.bindBuffer(
                              mr.ARRAY_BUFFER,
                              c.__webglLineDistanceBuffer
                            ),
                              mr.bufferData(mr.ARRAY_BUFFER, Te, le);
                          }
                          if (Re)
                            for (ie = 0, ne = Re.length; ie < ne; ie++)
                              if (
                                (he = Re[ie]).needsUpdate &&
                                (void 0 === he.boundTo ||
                                  "vertices" === he.boundTo)
                              ) {
                                if (
                                  ((ee = 0),
                                  (ae = he.value.length),
                                  1 === he.size)
                                )
                                  for (oe = 0; oe < ae; oe++)
                                    he.array[oe] = he.value[oe];
                                else if (2 === he.size)
                                  for (oe = 0; oe < ae; oe++)
                                    (se = he.value[oe]),
                                      (he.array[ee] = se.x),
                                      (he.array[ee + 1] = se.y),
                                      (ee += 2);
                                else if (3 === he.size)
                                  if ("c" === he.type)
                                    for (oe = 0; oe < ae; oe++)
                                      (se = he.value[oe]),
                                        (he.array[ee] = se.r),
                                        (he.array[ee + 1] = se.g),
                                        (he.array[ee + 2] = se.b),
                                        (ee += 3);
                                  else
                                    for (oe = 0; oe < ae; oe++)
                                      (se = he.value[oe]),
                                        (he.array[ee] = se.x),
                                        (he.array[ee + 1] = se.y),
                                        (he.array[ee + 2] = se.z),
                                        (ee += 3);
                                else if (4 === he.size)
                                  for (oe = 0; oe < ae; oe++)
                                    (se = he.value[oe]),
                                      (he.array[ee] = se.x),
                                      (he.array[ee + 1] = se.y),
                                      (he.array[ee + 2] = se.z),
                                      (he.array[ee + 3] = se.w),
                                      (ee += 4);
                                mr.bindBuffer(mr.ARRAY_BUFFER, he.buffer),
                                  mr.bufferData(mr.ARRAY_BUFFER, he.array, le);
                              }
                        }
                        (c.verticesNeedUpdate = !1),
                          (c.colorsNeedUpdate = !1),
                          (c.lineDistancesNeedUpdate = !1),
                          R.attributes && ir(R);
                      } else if (r instanceof THREE.PointCloud) {
                        if (
                          ((l = (R = Je(r, c)).attributes && rr(R)),
                          c.verticesNeedUpdate ||
                            c.colorsNeedUpdate ||
                            r.sortParticles ||
                            l)
                        ) {
                          var xe,
                            He,
                            _e,
                            be,
                            we,
                            Me,
                            Se,
                            Ce,
                            Ae,
                            Le,
                            Pe,
                            Fe,
                            De = mr.DYNAMIC_DRAW,
                            Ue = c.vertices,
                            Be = Ue.length,
                            Ve = c.colors,
                            ze = Ve.length,
                            ke = c.__vertexArray,
                            Ne = c.__colorArray,
                            Oe = c.__sortArray,
                            ve = c.verticesNeedUpdate,
                            ye = c.colorsNeedUpdate,
                            Ie = c.__webglCustomAttributesList;
                          if (r.sortParticles) {
                            for (
                              dr.copy(fr), dr.multiply(r.matrixWorld), xe = 0;
                              xe < Be;
                              xe++
                            )
                              (_e = Ue[xe]),
                                pr.copy(_e),
                                pr.applyProjection(dr),
                                (Oe[xe] = [pr.z, xe]);
                            for (Oe.sort($e), xe = 0; xe < Be; xe++)
                              (_e = Ue[Oe[xe][1]]),
                                (ke[(be = 3 * xe)] = _e.x),
                                (ke[be + 1] = _e.y),
                                (ke[be + 2] = _e.z);
                            for (He = 0; He < ze; He++)
                              (be = 3 * He),
                                (Me = Ve[Oe[He][1]]),
                                (Ne[be] = Me.r),
                                (Ne[be + 1] = Me.g),
                                (Ne[be + 2] = Me.b);
                            if (Ie)
                              for (Se = 0, Ce = Ie.length; Se < Ce; Se++)
                                if (
                                  void 0 === (Fe = Ie[Se]).boundTo ||
                                  "vertices" === Fe.boundTo
                                )
                                  if (
                                    ((be = 0),
                                    (Le = Fe.value.length),
                                    1 === Fe.size)
                                  )
                                    for (Ae = 0; Ae < Le; Ae++)
                                      (we = Oe[Ae][1]),
                                        (Fe.array[Ae] = Fe.value[we]);
                                  else if (2 === Fe.size)
                                    for (Ae = 0; Ae < Le; Ae++)
                                      (we = Oe[Ae][1]),
                                        (Pe = Fe.value[we]),
                                        (Fe.array[be] = Pe.x),
                                        (Fe.array[be + 1] = Pe.y),
                                        (be += 2);
                                  else if (3 === Fe.size)
                                    if ("c" === Fe.type)
                                      for (Ae = 0; Ae < Le; Ae++)
                                        (we = Oe[Ae][1]),
                                          (Pe = Fe.value[we]),
                                          (Fe.array[be] = Pe.r),
                                          (Fe.array[be + 1] = Pe.g),
                                          (Fe.array[be + 2] = Pe.b),
                                          (be += 3);
                                    else
                                      for (Ae = 0; Ae < Le; Ae++)
                                        (we = Oe[Ae][1]),
                                          (Pe = Fe.value[we]),
                                          (Fe.array[be] = Pe.x),
                                          (Fe.array[be + 1] = Pe.y),
                                          (Fe.array[be + 2] = Pe.z),
                                          (be += 3);
                                  else if (4 === Fe.size)
                                    for (Ae = 0; Ae < Le; Ae++)
                                      (we = Oe[Ae][1]),
                                        (Pe = Fe.value[we]),
                                        (Fe.array[be] = Pe.x),
                                        (Fe.array[be + 1] = Pe.y),
                                        (Fe.array[be + 2] = Pe.z),
                                        (Fe.array[be + 3] = Pe.w),
                                        (be += 4);
                          } else {
                            if (ve)
                              for (xe = 0; xe < Be; xe++)
                                (_e = Ue[xe]),
                                  (ke[(be = 3 * xe)] = _e.x),
                                  (ke[be + 1] = _e.y),
                                  (ke[be + 2] = _e.z);
                            if (ye)
                              for (He = 0; He < ze; He++)
                                (Me = Ve[He]),
                                  (Ne[(be = 3 * He)] = Me.r),
                                  (Ne[be + 1] = Me.g),
                                  (Ne[be + 2] = Me.b);
                            if (Ie)
                              for (Se = 0, Ce = Ie.length; Se < Ce; Se++)
                                if (
                                  (Fe = Ie[Se]).needsUpdate &&
                                  (void 0 === Fe.boundTo ||
                                    "vertices" === Fe.boundTo)
                                )
                                  if (
                                    ((Le = Fe.value.length),
                                    (be = 0),
                                    1 === Fe.size)
                                  )
                                    for (Ae = 0; Ae < Le; Ae++)
                                      Fe.array[Ae] = Fe.value[Ae];
                                  else if (2 === Fe.size)
                                    for (Ae = 0; Ae < Le; Ae++)
                                      (Pe = Fe.value[Ae]),
                                        (Fe.array[be] = Pe.x),
                                        (Fe.array[be + 1] = Pe.y),
                                        (be += 2);
                                  else if (3 === Fe.size)
                                    if ("c" === Fe.type)
                                      for (Ae = 0; Ae < Le; Ae++)
                                        (Pe = Fe.value[Ae]),
                                          (Fe.array[be] = Pe.r),
                                          (Fe.array[be + 1] = Pe.g),
                                          (Fe.array[be + 2] = Pe.b),
                                          (be += 3);
                                    else
                                      for (Ae = 0; Ae < Le; Ae++)
                                        (Pe = Fe.value[Ae]),
                                          (Fe.array[be] = Pe.x),
                                          (Fe.array[be + 1] = Pe.y),
                                          (Fe.array[be + 2] = Pe.z),
                                          (be += 3);
                                  else if (4 === Fe.size)
                                    for (Ae = 0; Ae < Le; Ae++)
                                      (Pe = Fe.value[Ae]),
                                        (Fe.array[be] = Pe.x),
                                        (Fe.array[be + 1] = Pe.y),
                                        (Fe.array[be + 2] = Pe.z),
                                        (Fe.array[be + 3] = Pe.w),
                                        (be += 4);
                          }
                          if (
                            ((ve || r.sortParticles) &&
                              (mr.bindBuffer(
                                mr.ARRAY_BUFFER,
                                c.__webglVertexBuffer
                              ),
                              mr.bufferData(mr.ARRAY_BUFFER, ke, De)),
                            (ye || r.sortParticles) &&
                              (mr.bindBuffer(
                                mr.ARRAY_BUFFER,
                                c.__webglColorBuffer
                              ),
                              mr.bufferData(mr.ARRAY_BUFFER, Ne, De)),
                            Ie)
                          )
                            for (Se = 0, Ce = Ie.length; Se < Ce; Se++)
                              ((Fe = Ie[Se]).needsUpdate || r.sortParticles) &&
                                (mr.bindBuffer(mr.ARRAY_BUFFER, Fe.buffer),
                                mr.bufferData(mr.ARRAY_BUFFER, Fe.array, De));
                        }
                        (c.verticesNeedUpdate = !1),
                          (c.colorsNeedUpdate = !1),
                          R.attributes && ir(R);
                      }
                      for (var Ge = 0, We = h.length; Ge < We; Ge++) {
                        var je = h[Ge],
                          Xe = je,
                          qe = Xe.object,
                          Ye = Xe.buffer,
                          Ke = qe.geometry,
                          qe = qe.material;
                        qe instanceof THREE.MeshFaceMaterial
                          ? ((qe =
                              qe.materials[
                                Ke instanceof THREE.BufferGeometry
                                  ? 0
                                  : Ye.materialIndex
                              ]),
                            ((Xe.material = qe).transparent ? hr : sr).push(Xe))
                          : qe &&
                            ((Xe.material = qe).transparent ? hr : sr).push(Xe),
                          (je.render = !0) === ur.sortObjects &&
                            (null !== r.renderDepth
                              ? (je.z = r.renderDepth)
                              : (pr.setFromMatrixPosition(r.matrixWorld),
                                pr.applyProjection(fr),
                                (je.z = pr.z)));
                      }
                    }
                  }
                }
                for (Ge = 0, We = r.children.length; Ge < We; Ge++)
                  t(e, r.children[Ge]);
              }
            })(t, t),
            !0 === ur.sortObjects && (sr.sort(h), hr.sort(l)),
            et.render(t, e),
            (ur.info.render.calls = 0),
            (ur.info.render.vertices = 0),
            (ur.info.render.faces = 0),
            (ur.info.render.points = 0),
            this.setRenderTarget(r),
            (this.autoClear || i) &&
              this.clear(
                this.autoClearColor,
                this.autoClearDepth,
                this.autoClearStencil
              ),
            (i = 0);
          for (var o = ar.length; i < o; i++) {
            var a = ar[i],
              s = a.object;
            s.visible &&
              (g(s, e),
              (s = void 0),
              (s = (a = a).object.material).transparent
                ? ((a.transparent = s), (a.opaque = null))
                : ((a.opaque = s), (a.transparent = null)));
          }
          t.overrideMaterial
            ? ((i = t.overrideMaterial),
              this.setBlending(
                i.blending,
                i.blendEquation,
                i.blendSrc,
                i.blendDst
              ),
              this.setDepthTest(i.depthTest),
              this.setDepthWrite(i.depthWrite),
              v(i.polygonOffset, i.polygonOffsetFactor, i.polygonOffsetUnits),
              c(sr, e, nr, n, !0, i),
              c(hr, e, nr, n, !0, i),
              u(ar, "", e, nr, n, !1, i))
            : ((i = null),
              this.setBlending(THREE.NoBlending),
              c(sr, e, nr, n, !1, i),
              u(ar, "opaque", e, nr, n, !1, i),
              c(hr, e, nr, n, !0, i),
              u(ar, "transparent", e, nr, n, !0, i)),
            rt.render(t, e),
            it.render(t, e, I, G),
            r &&
              r.generateMipmaps &&
              r.minFilter !== THREE.NearestFilter &&
              r.minFilter !== THREE.LinearFilter &&
              ((r = r) instanceof THREE.WebGLRenderTargetCube
                ? (mr.bindTexture(mr.TEXTURE_CUBE_MAP, r.__webglTexture),
                  mr.generateMipmap(mr.TEXTURE_CUBE_MAP),
                  mr.bindTexture(mr.TEXTURE_CUBE_MAP, null))
                : (mr.bindTexture(mr.TEXTURE_2D, r.__webglTexture),
                  mr.generateMipmap(mr.TEXTURE_2D),
                  mr.bindTexture(mr.TEXTURE_2D, null))),
            this.setDepthTest(!0),
            this.setDepthWrite(!0);
        }
      }),
      (this.renderImmediateObject = function (t, e, r, i, n) {
        var o = m(t, e, r, i, n);
        (b = -1),
          ur.setMaterialFaces(i),
          n.immediateRenderCallback
            ? n.immediateRenderCallback(o, mr, Er)
            : n.render(function (t) {
                ur.renderBufferImmediate(t, o, i);
              });
      });
    var vr = {},
      at = 0;
    (this.setFaceCulling = function (t, e) {
      t === THREE.CullFaceNone
        ? mr.disable(mr.CULL_FACE)
        : (e === THREE.FrontFaceDirectionCW
            ? mr.frontFace(mr.CW)
            : mr.frontFace(mr.CCW),
          t === THREE.CullFaceBack
            ? mr.cullFace(mr.BACK)
            : t === THREE.CullFaceFront
            ? mr.cullFace(mr.FRONT)
            : mr.cullFace(mr.FRONT_AND_BACK),
          mr.enable(mr.CULL_FACE));
    }),
      (this.setMaterialFaces = function (t) {
        var e = t.side === THREE.DoubleSide;
        (t = t.side === THREE.BackSide),
          w !== e &&
            (e ? mr.disable(mr.CULL_FACE) : mr.enable(mr.CULL_FACE), (w = e)),
          M !== t && (t ? mr.frontFace(mr.CW) : mr.frontFace(mr.CCW), (M = t));
      }),
      (this.setDepthTest = function (t) {
        P !== t &&
          (t ? mr.enable(mr.DEPTH_TEST) : mr.disable(mr.DEPTH_TEST), (P = t));
      }),
      (this.setDepthWrite = function (t) {
        F !== t && (mr.depthMask(t), (F = t));
      }),
      (this.setBlending = function (t, e, r, i) {
        t !== S &&
          (t === THREE.NoBlending
            ? mr.disable(mr.BLEND)
            : t === THREE.AdditiveBlending
            ? (mr.enable(mr.BLEND),
              mr.blendEquation(mr.FUNC_ADD),
              mr.blendFunc(mr.SRC_ALPHA, mr.ONE))
            : t === THREE.SubtractiveBlending
            ? (mr.enable(mr.BLEND),
              mr.blendEquation(mr.FUNC_ADD),
              mr.blendFunc(mr.ZERO, mr.ONE_MINUS_SRC_COLOR))
            : t === THREE.MultiplyBlending
            ? (mr.enable(mr.BLEND),
              mr.blendEquation(mr.FUNC_ADD),
              mr.blendFunc(mr.ZERO, mr.SRC_COLOR))
            : t === THREE.CustomBlending
            ? mr.enable(mr.BLEND)
            : (mr.enable(mr.BLEND),
              mr.blendEquationSeparate(mr.FUNC_ADD, mr.FUNC_ADD),
              mr.blendFuncSeparate(
                mr.SRC_ALPHA,
                mr.ONE_MINUS_SRC_ALPHA,
                mr.ONE,
                mr.ONE_MINUS_SRC_ALPHA
              )),
          (S = t)),
          t === THREE.CustomBlending
            ? (e !== C && (mr.blendEquation(ee(e)), (C = e)),
              (r === A && i === L) ||
                (mr.blendFunc(ee(r), ee(i)), (A = r), (L = i)))
            : (L = A = C = null);
      }),
      (this.uploadTexture = function (t) {
        void 0 === t.__webglInit &&
          ((t.__webglInit = !0),
          t.addEventListener("dispose", ge),
          (t.__webglTexture = mr.createTexture()),
          ur.info.memory.textures++),
          mr.bindTexture(mr.TEXTURE_2D, t.__webglTexture),
          mr.pixelStorei(mr.UNPACK_FLIP_Y_WEBGL, t.flipY),
          mr.pixelStorei(mr.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha),
          mr.pixelStorei(mr.UNPACK_ALIGNMENT, t.unpackAlignment),
          (t.image = te(t.image, Z));
        var e = t.image,
          r =
            THREE.Math.isPowerOfTwo(e.width) &&
            THREE.Math.isPowerOfTwo(e.height),
          i = ee(t.format),
          n = ee(t.type);
        $t(mr.TEXTURE_2D, t, r);
        var o = t.mipmaps;
        if (t instanceof THREE.DataTexture)
          if (0 < o.length && r) {
            for (var a = 0, s = o.length; a < s; a++)
              (e = o[a]),
                mr.texImage2D(
                  mr.TEXTURE_2D,
                  a,
                  i,
                  e.width,
                  e.height,
                  0,
                  i,
                  n,
                  e.data
                );
            t.generateMipmaps = !1;
          } else
            mr.texImage2D(
              mr.TEXTURE_2D,
              0,
              i,
              e.width,
              e.height,
              0,
              i,
              n,
              e.data
            );
        else if (t instanceof THREE.CompressedTexture)
          for (a = 0, s = o.length; a < s; a++)
            (e = o[a]),
              t.format !== THREE.RGBAFormat && t.format !== THREE.RGBFormat
                ? -1 < me().indexOf(i)
                  ? mr.compressedTexImage2D(
                      mr.TEXTURE_2D,
                      a,
                      i,
                      e.width,
                      e.height,
                      0,
                      e.data
                    )
                  : console.warn(
                      "Attempt to load unsupported compressed texture format"
                    )
                : mr.texImage2D(
                    mr.TEXTURE_2D,
                    a,
                    i,
                    e.width,
                    e.height,
                    0,
                    i,
                    n,
                    e.data
                  );
        else if (0 < o.length && r) {
          for (a = 0, s = o.length; a < s; a++)
            (e = o[a]), mr.texImage2D(mr.TEXTURE_2D, a, i, i, n, e);
          t.generateMipmaps = !1;
        } else mr.texImage2D(mr.TEXTURE_2D, 0, i, i, n, t.image);
        t.generateMipmaps && r && mr.generateMipmap(mr.TEXTURE_2D),
          (t.needsUpdate = !1),
          t.onUpdate && t.onUpdate();
      }),
      (this.setTexture = function (t, e) {
        mr.activeTexture(mr.TEXTURE0 + e),
          t.needsUpdate
            ? ur.uploadTexture(t)
            : mr.bindTexture(mr.TEXTURE_2D, t.__webglTexture);
      }),
      (this.setRenderTarget = function (t) {
        var e = t instanceof THREE.WebGLRenderTargetCube;
        if (t && void 0 === t.__webglFramebuffer) {
          void 0 === t.depthBuffer && (t.depthBuffer = !0),
            void 0 === t.stencilBuffer && (t.stencilBuffer = !0),
            t.addEventListener("dispose", nt),
            (t.__webglTexture = mr.createTexture()),
            ur.info.memory.textures++;
          var r =
              THREE.Math.isPowerOfTwo(t.width) &&
              THREE.Math.isPowerOfTwo(t.height),
            i = ee(t.format),
            n = ee(t.type);
          if (e) {
            (t.__webglFramebuffer = []),
              (t.__webglRenderbuffer = []),
              mr.bindTexture(mr.TEXTURE_CUBE_MAP, t.__webglTexture),
              $t(mr.TEXTURE_CUBE_MAP, t, r);
            for (var o = 0; o < 6; o++) {
              (t.__webglFramebuffer[o] = mr.createFramebuffer()),
                (t.__webglRenderbuffer[o] = mr.createRenderbuffer()),
                mr.texImage2D(
                  mr.TEXTURE_CUBE_MAP_POSITIVE_X + o,
                  0,
                  i,
                  t.width,
                  t.height,
                  0,
                  i,
                  n,
                  null
                );
              var a = t,
                s = mr.TEXTURE_CUBE_MAP_POSITIVE_X + o;
              mr.bindFramebuffer(mr.FRAMEBUFFER, t.__webglFramebuffer[o]),
                mr.framebufferTexture2D(
                  mr.FRAMEBUFFER,
                  mr.COLOR_ATTACHMENT0,
                  s,
                  a.__webglTexture,
                  0
                ),
                y(t.__webglRenderbuffer[o], t);
            }
            r && mr.generateMipmap(mr.TEXTURE_CUBE_MAP);
          } else
            (t.__webglFramebuffer = mr.createFramebuffer()),
              (t.__webglRenderbuffer = t.shareDepthFrom
                ? t.shareDepthFrom.__webglRenderbuffer
                : mr.createRenderbuffer()),
              mr.bindTexture(mr.TEXTURE_2D, t.__webglTexture),
              $t(mr.TEXTURE_2D, t, r),
              mr.texImage2D(
                mr.TEXTURE_2D,
                0,
                i,
                t.width,
                t.height,
                0,
                i,
                n,
                null
              ),
              (i = mr.TEXTURE_2D),
              mr.bindFramebuffer(mr.FRAMEBUFFER, t.__webglFramebuffer),
              mr.framebufferTexture2D(
                mr.FRAMEBUFFER,
                mr.COLOR_ATTACHMENT0,
                i,
                t.__webglTexture,
                0
              ),
              t.shareDepthFrom
                ? t.depthBuffer && !t.stencilBuffer
                  ? mr.framebufferRenderbuffer(
                      mr.FRAMEBUFFER,
                      mr.DEPTH_ATTACHMENT,
                      mr.RENDERBUFFER,
                      t.__webglRenderbuffer
                    )
                  : t.depthBuffer &&
                    t.stencilBuffer &&
                    mr.framebufferRenderbuffer(
                      mr.FRAMEBUFFER,
                      mr.DEPTH_STENCIL_ATTACHMENT,
                      mr.RENDERBUFFER,
                      t.__webglRenderbuffer
                    )
                : y(t.__webglRenderbuffer, t),
              r && mr.generateMipmap(mr.TEXTURE_2D);
          e
            ? mr.bindTexture(mr.TEXTURE_CUBE_MAP, null)
            : mr.bindTexture(mr.TEXTURE_2D, null),
            mr.bindRenderbuffer(mr.RENDERBUFFER, null),
            mr.bindFramebuffer(mr.FRAMEBUFFER, null);
        }
        (n = t
          ? ((e = e
              ? t.__webglFramebuffer[t.activeCubeFace]
              : t.__webglFramebuffer),
            (r = t.width),
            (t = t.height),
            (i = 0))
          : ((e = null), (r = N), (t = O), (i = z), k)),
          e !== _ &&
            (mr.bindFramebuffer(mr.FRAMEBUFFER, e),
            mr.viewport(i, n, r, t),
            (_ = e)),
          (I = r),
          (G = t);
      }),
      (this.initMaterial = function () {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
      }),
      (this.addPrePlugin = function () {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
      }),
      (this.addPostPlugin = function () {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
      }),
      (this.updateShadowMap = function () {
        console.warn(
          "THREE.WebGLRenderer: .updateShadowMap() has been removed."
        );
      });
  }),
  (THREE.WebGLRenderTarget = function (t, e, r) {
    (this.width = t),
      (this.height = e),
      (r = r || {}),
      (this.wrapS = void 0 !== r.wrapS ? r.wrapS : THREE.ClampToEdgeWrapping),
      (this.wrapT = void 0 !== r.wrapT ? r.wrapT : THREE.ClampToEdgeWrapping),
      (this.magFilter =
        void 0 !== r.magFilter ? r.magFilter : THREE.LinearFilter),
      (this.minFilter =
        void 0 !== r.minFilter ? r.minFilter : THREE.LinearMipMapLinearFilter),
      (this.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1),
      (this.offset = new THREE.Vector2(0, 0)),
      (this.repeat = new THREE.Vector2(1, 1)),
      (this.format = void 0 !== r.format ? r.format : THREE.RGBAFormat),
      (this.type = void 0 !== r.type ? r.type : THREE.UnsignedByteType),
      (this.depthBuffer = void 0 === r.depthBuffer || r.depthBuffer),
      (this.stencilBuffer = void 0 === r.stencilBuffer || r.stencilBuffer),
      (this.generateMipmaps = !0),
      (this.shareDepthFrom = null);
  }),
  (THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget,
    setSize: function (t, e) {
      (this.width = t), (this.height = e);
    },
    clone: function () {
      var t = new THREE.WebGLRenderTarget(this.width, this.height);
      return (
        (t.wrapS = this.wrapS),
        (t.wrapT = this.wrapT),
        (t.magFilter = this.magFilter),
        (t.minFilter = this.minFilter),
        (t.anisotropy = this.anisotropy),
        t.offset.copy(this.offset),
        t.repeat.copy(this.repeat),
        (t.format = this.format),
        (t.type = this.type),
        (t.depthBuffer = this.depthBuffer),
        (t.stencilBuffer = this.stencilBuffer),
        (t.generateMipmaps = this.generateMipmaps),
        (t.shareDepthFrom = this.shareDepthFrom),
        t
      );
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  }),
  THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),
  (THREE.WebGLRenderTargetCube = function (t, e, r) {
    THREE.WebGLRenderTarget.call(this, t, e, r), (this.activeCubeFace = 0);
  }),
  (THREE.WebGLRenderTargetCube.prototype = Object.create(
    THREE.WebGLRenderTarget.prototype
  )),
  (THREE.WebGLExtensions = function (r) {
    var i = {};
    this.get = function (t) {
      if (void 0 !== i[t]) return i[t];
      var e;
      switch (t) {
        case "OES_texture_float":
          e = r.getExtension("OES_texture_float");
          break;
        case "OES_texture_float_linear":
          e = r.getExtension("OES_texture_float_linear");
          break;
        case "OES_standard_derivatives":
          e = r.getExtension("OES_standard_derivatives");
          break;
        case "EXT_texture_filter_anisotropic":
          e =
            r.getExtension("EXT_texture_filter_anisotropic") ||
            r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
            r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          e =
            r.getExtension("WEBGL_compressed_texture_s3tc") ||
            r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
            r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          e =
            r.getExtension("WEBGL_compressed_texture_pvrtc") ||
            r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        case "OES_element_index_uint":
          e = r.getExtension("OES_element_index_uint");
          break;
        case "EXT_blend_minmax":
          e = r.getExtension("EXT_blend_minmax");
          break;
        case "EXT_frag_depth":
          e = r.getExtension("EXT_frag_depth");
      }
      return (
        null === e &&
          console.log(
            "THREE.WebGLRenderer: " + t + " extension not supported."
          ),
        (i[t] = e)
      );
    };
  }),
  (THREE.WebGLProgram = (function () {
    var g = 0;
    return function (t, e, r, i) {
      var n = t.context,
        o = r.defines,
        a = r.__webglShader.uniforms,
        s = r.attributes,
        h = r.__webglShader.vertexShader,
        l = r.__webglShader.fragmentShader,
        c = r.index0AttributeName;
      void 0 === c && !0 === i.morphTargets && (c = "position");
      var u,
        E,
        f,
        d,
        p,
        m = "SHADOWMAP_TYPE_BASIC";
      for (f in (i.shadowMapType === THREE.PCFShadowMap
        ? (m = "SHADOWMAP_TYPE_PCF")
        : i.shadowMapType === THREE.PCFSoftShadowMap &&
          (m = "SHADOWMAP_TYPE_PCF_SOFT"),
      (u = []),
      o))
        (E = o[f]), !1 !== E && ((E = "#define " + f + " " + E), u.push(E));
      for (d in ((u = u.join("\n")),
      (o = n.createProgram()),
      (t =
        r instanceof THREE.RawShaderMaterial
          ? (r = "")
          : ((r = [
              "precision " + i.precision + " float;",
              "precision " + i.precision + " int;",
              u,
              i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
              t.gammaInput ? "#define GAMMA_INPUT" : "",
              t.gammaOutput ? "#define GAMMA_OUTPUT" : "",
              "#define MAX_DIR_LIGHTS " + i.maxDirLights,
              "#define MAX_POINT_LIGHTS " + i.maxPointLights,
              "#define MAX_SPOT_LIGHTS " + i.maxSpotLights,
              "#define MAX_HEMI_LIGHTS " + i.maxHemiLights,
              "#define MAX_SHADOWS " + i.maxShadows,
              "#define MAX_BONES " + i.maxBones,
              i.map ? "#define USE_MAP" : "",
              i.envMap ? "#define USE_ENVMAP" : "",
              i.lightMap ? "#define USE_LIGHTMAP" : "",
              i.bumpMap ? "#define USE_BUMPMAP" : "",
              i.normalMap ? "#define USE_NORMALMAP" : "",
              i.specularMap ? "#define USE_SPECULARMAP" : "",
              i.alphaMap ? "#define USE_ALPHAMAP" : "",
              i.vertexColors ? "#define USE_COLOR" : "",
              i.skinning ? "#define USE_SKINNING" : "",
              i.useVertexTexture ? "#define BONE_TEXTURE" : "",
              i.morphTargets ? "#define USE_MORPHTARGETS" : "",
              i.morphNormals ? "#define USE_MORPHNORMALS" : "",
              i.wrapAround ? "#define WRAP_AROUND" : "",
              i.doubleSided ? "#define DOUBLE_SIDED" : "",
              i.flipSided ? "#define FLIP_SIDED" : "",
              i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              i.shadowMapEnabled ? "#define " + m : "",
              i.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "",
              i.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "",
              i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
              i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              "uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n",
            ].join("\n")),
            [
              "precision " + i.precision + " float;",
              "precision " + i.precision + " int;",
              i.bumpMap || i.normalMap
                ? "#extension GL_OES_standard_derivatives : enable"
                : "",
              u,
              "#define MAX_DIR_LIGHTS " + i.maxDirLights,
              "#define MAX_POINT_LIGHTS " + i.maxPointLights,
              "#define MAX_SPOT_LIGHTS " + i.maxSpotLights,
              "#define MAX_HEMI_LIGHTS " + i.maxHemiLights,
              "#define MAX_SHADOWS " + i.maxShadows,
              i.alphaTest ? "#define ALPHATEST " + i.alphaTest : "",
              t.gammaInput ? "#define GAMMA_INPUT" : "",
              t.gammaOutput ? "#define GAMMA_OUTPUT" : "",
              i.useFog && i.fog ? "#define USE_FOG" : "",
              i.useFog && i.fogExp ? "#define FOG_EXP2" : "",
              i.map ? "#define USE_MAP" : "",
              i.envMap ? "#define USE_ENVMAP" : "",
              i.lightMap ? "#define USE_LIGHTMAP" : "",
              i.bumpMap ? "#define USE_BUMPMAP" : "",
              i.normalMap ? "#define USE_NORMALMAP" : "",
              i.specularMap ? "#define USE_SPECULARMAP" : "",
              i.alphaMap ? "#define USE_ALPHAMAP" : "",
              i.vertexColors ? "#define USE_COLOR" : "",
              i.metal ? "#define METAL" : "",
              i.wrapAround ? "#define WRAP_AROUND" : "",
              i.doubleSided ? "#define DOUBLE_SIDED" : "",
              i.flipSided ? "#define FLIP_SIDED" : "",
              i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
              i.shadowMapEnabled ? "#define " + m : "",
              i.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "",
              i.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "",
              i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
              "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n",
            ].join("\n"))),
      (h = new THREE.WebGLShader(n, n.VERTEX_SHADER, r + h)),
      (l = new THREE.WebGLShader(n, n.FRAGMENT_SHADER, t + l)),
      n.attachShader(o, h),
      n.attachShader(o, l),
      void 0 !== c && n.bindAttribLocation(o, 0, c),
      n.linkProgram(o),
      !1 === n.getProgramParameter(o, n.LINK_STATUS) &&
        (console.error("THREE.WebGLProgram: Could not initialise shader."),
        console.error(
          "gl.VALIDATE_STATUS",
          n.getProgramParameter(o, n.VALIDATE_STATUS)
        ),
        console.error("gl.getError()", n.getError())),
      "" !== n.getProgramInfoLog(o) &&
        console.warn(
          "THREE.WebGLProgram: gl.getProgramInfoLog()",
          n.getProgramInfoLog(o)
        ),
      n.deleteShader(h),
      n.deleteShader(l),
      (c =
        "viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(
          " "
        )),
      i.useVertexTexture
        ? (c.push("boneTexture"),
          c.push("boneTextureWidth"),
          c.push("boneTextureHeight"))
        : c.push("boneGlobalMatrices"),
      i.logarithmicDepthBuffer && c.push("logDepthBufFC"),
      a))
        c.push(d);
      for (a = c, d = {}, c = 0, t = a.length; c < t; c++)
        d[(m = a[c])] = n.getUniformLocation(o, m);
      for (
        this.uniforms = d,
          c =
            "position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(
              " "
            ),
          a = 0;
        a < i.maxMorphTargets;
        a++
      )
        c.push("morphTarget" + a);
      for (a = 0; a < i.maxMorphNormals; a++) c.push("morphNormal" + a);
      for (p in s) c.push(p);
      for (s = {}, p = 0, a = (i = c).length; p < a; p++)
        s[(d = i[p])] = n.getAttribLocation(o, d);
      return (
        (this.attributes = s),
        (this.attributesKeys = Object.keys(this.attributes)),
        (this.id = g++),
        (this.code = e),
        (this.usedTimes = 1),
        (this.program = o),
        (this.vertexShader = h),
        (this.fragmentShader = l),
        this
      );
    };
  })()),
  (THREE.WebGLShader = function (t, e, r) {
    return (
      (e = t.createShader(e)),
      t.shaderSource(e, r),
      t.compileShader(e),
      !1 === t.getShaderParameter(e, t.COMPILE_STATUS) &&
        console.error("THREE.WebGLShader: Shader couldn't compile."),
      "" !== t.getShaderInfoLog(e) &&
        (console.warn(
          "THREE.WebGLShader: gl.getShaderInfoLog()",
          t.getShaderInfoLog(e)
        ),
        console.warn(
          (function (t) {
            t = t.split("\n");
            for (var e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
            return t.join("\n");
          })(r)
        )),
      e
    );
  }),
  (THREE.LensFlarePlugin = function (g, T) {
    var v,
      y,
      R,
      x,
      H,
      _,
      b,
      w,
      M,
      S,
      C,
      A,
      L,
      P,
      F,
      D,
      U = g.context;
    this.render = function (t, e, r, i) {
      if (0 !== T.length) {
        t = new THREE.Vector3();
        var n,
          o,
          a,
          s = i / r,
          h = 0.5 * r,
          l = 0.5 * i,
          c = 16 / i,
          u = new THREE.Vector2(c * s, c),
          E = new THREE.Vector3(1, 1, 0),
          f = new THREE.Vector2(1, 1);
        for (
          void 0 === L &&
            ((c = new Float32Array([
              -1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1,
            ])),
            (n = new Uint16Array([0, 1, 2, 0, 2, 3])),
            (C = U.createBuffer()),
            (A = U.createBuffer()),
            U.bindBuffer(U.ARRAY_BUFFER, C),
            U.bufferData(U.ARRAY_BUFFER, c, U.STATIC_DRAW),
            U.bindBuffer(U.ELEMENT_ARRAY_BUFFER, A),
            U.bufferData(U.ELEMENT_ARRAY_BUFFER, n, U.STATIC_DRAW),
            (F = U.createTexture()),
            (D = U.createTexture()),
            U.bindTexture(U.TEXTURE_2D, F),
            U.texImage2D(
              U.TEXTURE_2D,
              0,
              U.RGB,
              16,
              16,
              0,
              U.RGB,
              U.UNSIGNED_BYTE,
              null
            ),
            U.texParameteri(U.TEXTURE_2D, U.TEXTURE_WRAP_S, U.CLAMP_TO_EDGE),
            U.texParameteri(U.TEXTURE_2D, U.TEXTURE_WRAP_T, U.CLAMP_TO_EDGE),
            U.texParameteri(U.TEXTURE_2D, U.TEXTURE_MAG_FILTER, U.NEAREST),
            U.texParameteri(U.TEXTURE_2D, U.TEXTURE_MIN_FILTER, U.NEAREST),
            U.bindTexture(U.TEXTURE_2D, D),
            U.texImage2D(
              U.TEXTURE_2D,
              0,
              U.RGBA,
              16,
              16,
              0,
              U.RGBA,
              U.UNSIGNED_BYTE,
              null
            ),
            U.texParameteri(U.TEXTURE_2D, U.TEXTURE_WRAP_S, U.CLAMP_TO_EDGE),
            U.texParameteri(U.TEXTURE_2D, U.TEXTURE_WRAP_T, U.CLAMP_TO_EDGE),
            U.texParameteri(U.TEXTURE_2D, U.TEXTURE_MAG_FILTER, U.NEAREST),
            U.texParameteri(U.TEXTURE_2D, U.TEXTURE_MIN_FILTER, U.NEAREST),
            (c = (P = 0 < U.getParameter(U.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
              ? {
                  vertexShader:
                    "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                  fragmentShader:
                    "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}",
                }
              : {
                  vertexShader:
                    "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                  fragmentShader:
                    "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}",
                }),
            (n = U.createProgram()),
            (o = U.createShader(U.FRAGMENT_SHADER)),
            (a = U.createShader(U.VERTEX_SHADER)),
            (d = "precision " + g.getPrecision() + " float;\n"),
            U.shaderSource(o, d + c.fragmentShader),
            U.shaderSource(a, d + c.vertexShader),
            U.compileShader(o),
            U.compileShader(a),
            U.attachShader(n, o),
            U.attachShader(n, a),
            U.linkProgram(n),
            (L = n),
            (M = U.getAttribLocation(L, "position")),
            (S = U.getAttribLocation(L, "uv")),
            (v = U.getUniformLocation(L, "renderType")),
            (y = U.getUniformLocation(L, "map")),
            (R = U.getUniformLocation(L, "occlusionMap")),
            (x = U.getUniformLocation(L, "opacity")),
            (H = U.getUniformLocation(L, "color")),
            (_ = U.getUniformLocation(L, "scale")),
            (b = U.getUniformLocation(L, "rotation")),
            (w = U.getUniformLocation(L, "screenPosition"))),
            U.useProgram(L),
            U.enableVertexAttribArray(M),
            U.enableVertexAttribArray(S),
            U.uniform1i(R, 0),
            U.uniform1i(y, 1),
            U.bindBuffer(U.ARRAY_BUFFER, C),
            U.vertexAttribPointer(M, 2, U.FLOAT, !1, 16, 0),
            U.vertexAttribPointer(S, 2, U.FLOAT, !1, 16, 8),
            U.bindBuffer(U.ELEMENT_ARRAY_BUFFER, A),
            U.disable(U.CULL_FACE),
            U.depthMask(!1),
            n = 0,
            o = T.length;
          n < o;
          n++
        )
          if (
            ((c = 16 / i),
            u.set(c * s, c),
            (a = T[n]),
            t.set(
              a.matrixWorld.elements[12],
              a.matrixWorld.elements[13],
              a.matrixWorld.elements[14]
            ),
            t.applyMatrix4(e.matrixWorldInverse),
            t.applyProjection(e.projectionMatrix),
            E.copy(t),
            (f.x = E.x * h + h),
            (f.y = E.y * l + l),
            P || (0 < f.x && f.x < r && 0 < f.y && f.y < i))
          ) {
            U.activeTexture(U.TEXTURE1),
              U.bindTexture(U.TEXTURE_2D, F),
              U.copyTexImage2D(
                U.TEXTURE_2D,
                0,
                U.RGB,
                f.x - 8,
                f.y - 8,
                16,
                16,
                0
              ),
              U.uniform1i(v, 0),
              U.uniform2f(_, u.x, u.y),
              U.uniform3f(w, E.x, E.y, E.z),
              U.disable(U.BLEND),
              U.enable(U.DEPTH_TEST),
              U.drawElements(U.TRIANGLES, 6, U.UNSIGNED_SHORT, 0),
              U.activeTexture(U.TEXTURE0),
              U.bindTexture(U.TEXTURE_2D, D),
              U.copyTexImage2D(
                U.TEXTURE_2D,
                0,
                U.RGBA,
                f.x - 8,
                f.y - 8,
                16,
                16,
                0
              ),
              U.uniform1i(v, 1),
              U.disable(U.DEPTH_TEST),
              U.activeTexture(U.TEXTURE1),
              U.bindTexture(U.TEXTURE_2D, F),
              U.drawElements(U.TRIANGLES, 6, U.UNSIGNED_SHORT, 0),
              a.positionScreen.copy(E),
              a.customUpdateCallback
                ? a.customUpdateCallback(a)
                : a.updateLensFlares(),
              U.uniform1i(v, 2),
              U.enable(U.BLEND);
            for (var d = 0, p = a.lensFlares.length; d < p; d++) {
              var m = a.lensFlares[d];
              0.001 < m.opacity &&
                0.001 < m.scale &&
                ((E.x = m.x),
                (E.y = m.y),
                (E.z = m.z),
                (c = (m.size * m.scale) / i),
                (u.x = c * s),
                (u.y = c),
                U.uniform3f(w, E.x, E.y, E.z),
                U.uniform2f(_, u.x, u.y),
                U.uniform1f(b, m.rotation),
                U.uniform1f(x, m.opacity),
                U.uniform3f(H, m.color.r, m.color.g, m.color.b),
                g.setBlending(
                  m.blending,
                  m.blendEquation,
                  m.blendSrc,
                  m.blendDst
                ),
                g.setTexture(m.texture, 1),
                U.drawElements(U.TRIANGLES, 6, U.UNSIGNED_SHORT, 0));
            }
          }
        U.enable(U.CULL_FACE),
          U.enable(U.DEPTH_TEST),
          U.depthMask(!0),
          g.resetGLState();
      }
    };
  }),
  (THREE.ShadowMapPlugin = function (d, p, m, g) {
    var T = d.context,
      v = new THREE.Frustum(),
      y = new THREE.Matrix4(),
      R = new THREE.Vector3(),
      x = new THREE.Vector3(),
      H = new THREE.Vector3(),
      _ = [],
      t = THREE.ShaderLib.depthRGBA,
      e = THREE.UniformsUtils.clone(t.uniforms),
      b = new THREE.ShaderMaterial({
        uniforms: e,
        vertexShader: t.vertexShader,
        fragmentShader: t.fragmentShader,
      }),
      w = new THREE.ShaderMaterial({
        uniforms: e,
        vertexShader: t.vertexShader,
        fragmentShader: t.fragmentShader,
        morphTargets: !0,
      }),
      M = new THREE.ShaderMaterial({
        uniforms: e,
        vertexShader: t.vertexShader,
        fragmentShader: t.fragmentShader,
        skinning: !0,
      }),
      S = new THREE.ShaderMaterial({
        uniforms: e,
        vertexShader: t.vertexShader,
        fragmentShader: t.fragmentShader,
        morphTargets: !0,
        skinning: !0,
      });
    (b._shadowPass = !0),
      (w._shadowPass = !0),
      (M._shadowPass = !0),
      (S._shadowPass = !0),
      (this.render = function (t, e) {
        if (!1 !== d.shadowMapEnabled) {
          var r,
            i,
            n,
            o,
            a,
            s,
            h,
            l = [],
            c = 0;
          for (
            T.clearColor(1, 1, 1, 1),
              T.disable(T.BLEND),
              T.enable(T.CULL_FACE),
              T.frontFace(T.CCW),
              d.shadowMapCullFace === THREE.CullFaceFront
                ? T.cullFace(T.FRONT)
                : T.cullFace(T.BACK),
              d.setDepthTest(!0),
              r = 0,
              i = p.length;
            r < i;
            r++
          )
            if ((n = p[r]).castShadow)
              if (n instanceof THREE.DirectionalLight && n.shadowCascade)
                for (o = 0; o < n.shadowCascadeCount; o++) {
                  if (n.shadowCascadeArray[o]) u = n.shadowCascadeArray[o];
                  else {
                    s = n;
                    var u,
                      E = o;
                    ((u = new THREE.DirectionalLight()).isVirtual = !0),
                      (u.onlyShadow = !0),
                      (u.castShadow = !0),
                      (u.shadowCameraNear = s.shadowCameraNear),
                      (u.shadowCameraFar = s.shadowCameraFar),
                      (u.shadowCameraLeft = s.shadowCameraLeft),
                      (u.shadowCameraRight = s.shadowCameraRight),
                      (u.shadowCameraBottom = s.shadowCameraBottom),
                      (u.shadowCameraTop = s.shadowCameraTop),
                      (u.shadowCameraVisible = s.shadowCameraVisible),
                      (u.shadowDarkness = s.shadowDarkness),
                      (u.shadowBias = s.shadowCascadeBias[E]),
                      (u.shadowMapWidth = s.shadowCascadeWidth[E]),
                      (u.shadowMapHeight = s.shadowCascadeHeight[E]),
                      (u.pointsWorld = []),
                      (u.pointsFrustum = []),
                      (h = u.pointsWorld),
                      (a = u.pointsFrustum);
                    for (var f = 0; f < 8; f++)
                      (h[f] = new THREE.Vector3()),
                        (a[f] = new THREE.Vector3());
                    (h = s.shadowCascadeNearZ[E]),
                      (s = s.shadowCascadeFarZ[E]),
                      a[0].set(-1, -1, h),
                      a[1].set(1, -1, h),
                      a[2].set(-1, 1, h),
                      a[3].set(1, 1, h),
                      a[4].set(-1, -1, s),
                      a[5].set(1, -1, s),
                      a[6].set(-1, 1, s),
                      a[7].set(1, 1, s),
                      (u.originalCamera = e),
                      (a = new THREE.Gyroscope()).position.copy(
                        n.shadowCascadeOffset
                      ),
                      a.add(u),
                      a.add(u.target),
                      e.add(a),
                      (n.shadowCascadeArray[o] = u),
                      console.log("Created virtualLight", u);
                  }
                  (h = o),
                    (s = (E = n).shadowCascadeArray[h]).position.copy(
                      E.position
                    ),
                    s.target.position.copy(E.target.position),
                    s.lookAt(s.target),
                    (s.shadowCameraVisible = E.shadowCameraVisible),
                    (s.shadowDarkness = E.shadowDarkness),
                    (s.shadowBias = E.shadowCascadeBias[h]),
                    (a = E.shadowCascadeNearZ[h]),
                    (E = E.shadowCascadeFarZ[h]),
                    ((s = s.pointsFrustum)[0].z = a),
                    (s[1].z = a),
                    (s[2].z = a),
                    (s[3].z = a),
                    (s[4].z = E),
                    (s[5].z = E),
                    (s[6].z = E),
                    (s[7].z = E),
                    (l[c] = u),
                    c++;
                }
              else (l[c] = n), c++;
          for (r = 0, i = l.length; r < i; r++) {
            if (
              ((n = l[r]).shadowMap ||
                ((o = THREE.LinearFilter),
                d.shadowMapType === THREE.PCFSoftShadowMap &&
                  (o = THREE.NearestFilter),
                (n.shadowMap = new THREE.WebGLRenderTarget(
                  n.shadowMapWidth,
                  n.shadowMapHeight,
                  { minFilter: o, magFilter: o, format: THREE.RGBAFormat }
                )),
                (n.shadowMapSize = new THREE.Vector2(
                  n.shadowMapWidth,
                  n.shadowMapHeight
                )),
                (n.shadowMatrix = new THREE.Matrix4())),
              !n.shadowCamera)
            ) {
              if (n instanceof THREE.SpotLight)
                n.shadowCamera = new THREE.PerspectiveCamera(
                  n.shadowCameraFov,
                  n.shadowMapWidth / n.shadowMapHeight,
                  n.shadowCameraNear,
                  n.shadowCameraFar
                );
              else {
                if (!(n instanceof THREE.DirectionalLight)) {
                  console.error("Unsupported light type for shadow");
                  continue;
                }
                n.shadowCamera = new THREE.OrthographicCamera(
                  n.shadowCameraLeft,
                  n.shadowCameraRight,
                  n.shadowCameraTop,
                  n.shadowCameraBottom,
                  n.shadowCameraNear,
                  n.shadowCameraFar
                );
              }
              t.add(n.shadowCamera),
                !0 === t.autoUpdate && t.updateMatrixWorld();
            }
            if (
              (n.shadowCameraVisible &&
                !n.cameraHelper &&
                ((n.cameraHelper = new THREE.CameraHelper(n.shadowCamera)),
                t.add(n.cameraHelper)),
              n.isVirtual && u.originalCamera == e)
            ) {
              for (
                o = e,
                  c = n.shadowCamera,
                  a = n.pointsFrustum,
                  s = n.pointsWorld,
                  R.set(1 / 0, 1 / 0, 1 / 0),
                  x.set(-1 / 0, -1 / 0, -1 / 0),
                  E = 0;
                E < 8;
                E++
              )
                (h = s[E]).copy(a[E]),
                  h.unproject(o),
                  h.applyMatrix4(c.matrixWorldInverse),
                  h.x < R.x && (R.x = h.x),
                  h.x > x.x && (x.x = h.x),
                  h.y < R.y && (R.y = h.y),
                  h.y > x.y && (x.y = h.y),
                  h.z < R.z && (R.z = h.z),
                  h.z > x.z && (x.z = h.z);
              (c.left = R.x),
                (c.right = x.x),
                (c.top = x.y),
                (c.bottom = R.y),
                c.updateProjectionMatrix();
            }
            for (
              c = n.shadowMap,
                a = n.shadowMatrix,
                (o = n.shadowCamera).position.setFromMatrixPosition(
                  n.matrixWorld
                ),
                H.setFromMatrixPosition(n.target.matrixWorld),
                o.lookAt(H),
                o.updateMatrixWorld(),
                o.matrixWorldInverse.getInverse(o.matrixWorld),
                n.cameraHelper &&
                  (n.cameraHelper.visible = n.shadowCameraVisible),
                n.shadowCameraVisible && n.cameraHelper.update(),
                a.set(
                  0.5,
                  0,
                  0,
                  0.5,
                  0,
                  0.5,
                  0,
                  0.5,
                  0,
                  0,
                  0.5,
                  0.5,
                  0,
                  0,
                  0,
                  1
                ),
                a.multiply(o.projectionMatrix),
                a.multiply(o.matrixWorldInverse),
                y.multiplyMatrices(o.projectionMatrix, o.matrixWorldInverse),
                v.setFromMatrix(y),
                d.setRenderTarget(c),
                d.clear(),
                _.length = 0,
                (function t(e, r, i) {
                  if (r.visible) {
                    var n = m[r.id];
                    if (
                      n &&
                      r.castShadow &&
                      (!1 === r.frustumCulled || !0 === v.intersectsObject(r))
                    )
                      for (var o = 0, a = n.length; o < a; o++) {
                        var s = n[o];
                        r._modelViewMatrix.multiplyMatrices(
                          i.matrixWorldInverse,
                          r.matrixWorld
                        ),
                          _.push(s);
                      }
                    for (o = 0, a = r.children.length; o < a; o++)
                      t(e, r.children[o], i);
                  }
                })(t, t, o),
                n = 0,
                c = _.length;
              n < c;
              n++
            )
              (a = (s = _[n]).object),
                (s = s.buffer),
                (E =
                  a.material instanceof THREE.MeshFaceMaterial
                    ? a.material.materials[0]
                    : a.material),
                (h =
                  void 0 !== a.geometry.morphTargets &&
                  0 < a.geometry.morphTargets.length &&
                  E.morphTargets),
                (f = a instanceof THREE.SkinnedMesh && E.skinning),
                (h = a.customDepthMaterial || (f ? (h ? S : M) : h ? w : b)),
                d.setMaterialFaces(E),
                s instanceof THREE.BufferGeometry
                  ? d.renderBufferDirect(o, p, null, h, s, a)
                  : d.renderBuffer(o, p, null, h, s, a);
            for (n = 0, c = g.length; n < c; n++)
              (a = (s = g[n]).object).visible &&
                a.castShadow &&
                (a._modelViewMatrix.multiplyMatrices(
                  o.matrixWorldInverse,
                  a.matrixWorld
                ),
                d.renderImmediateObject(o, p, null, b, a));
          }
          (r = d.getClearColor()),
            (i = d.getClearAlpha()),
            T.clearColor(r.r, r.g, r.b, i),
            T.enable(T.BLEND),
            d.shadowMapCullFace === THREE.CullFaceFront && T.cullFace(T.BACK),
            d.resetGLState();
        }
      });
  }),
  (THREE.SpritePlugin = function (l, c) {
    var u, E, f, d, p, m, g, T, v, y, R, x, H, _, b, w, M;
    function S(t, e) {
      return t.z !== e.z ? e.z - t.z : e.id - t.id;
    }
    var C,
      A,
      L,
      P,
      F = l.context;
    this.render = function (t, e) {
      if (0 !== c.length) {
        var r, i;
        void 0 === L &&
          ((r = new Float32Array([
            -0.5, -0.5, 0, 0, 0.5, -0.5, 1, 0, 0.5, 0.5, 1, 1, -0.5, 0.5, 0, 1,
          ])),
          (i = new Uint16Array([0, 1, 2, 0, 2, 3])),
          (C = F.createBuffer()),
          (A = F.createBuffer()),
          F.bindBuffer(F.ARRAY_BUFFER, C),
          F.bufferData(F.ARRAY_BUFFER, r, F.STATIC_DRAW),
          F.bindBuffer(F.ELEMENT_ARRAY_BUFFER, A),
          F.bufferData(F.ELEMENT_ARRAY_BUFFER, i, F.STATIC_DRAW),
          (r = F.createProgram()),
          (i = F.createShader(F.VERTEX_SHADER)),
          (n = F.createShader(F.FRAGMENT_SHADER)),
          F.shaderSource(
            i,
            [
              "precision " + l.getPrecision() + " float;",
              "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}",
            ].join("\n")
          ),
          F.shaderSource(
            n,
            [
              "precision " + l.getPrecision() + " float;",
              "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}",
            ].join("\n")
          ),
          F.compileShader(i),
          F.compileShader(n),
          F.attachShader(r, i),
          F.attachShader(r, n),
          F.linkProgram(r),
          (L = r),
          (w = F.getAttribLocation(L, "position")),
          (M = F.getAttribLocation(L, "uv")),
          (u = F.getUniformLocation(L, "uvOffset")),
          (E = F.getUniformLocation(L, "uvScale")),
          (f = F.getUniformLocation(L, "rotation")),
          (d = F.getUniformLocation(L, "scale")),
          (p = F.getUniformLocation(L, "color")),
          (m = F.getUniformLocation(L, "map")),
          (g = F.getUniformLocation(L, "opacity")),
          (T = F.getUniformLocation(L, "modelViewMatrix")),
          (v = F.getUniformLocation(L, "projectionMatrix")),
          (y = F.getUniformLocation(L, "fogType")),
          (R = F.getUniformLocation(L, "fogDensity")),
          (x = F.getUniformLocation(L, "fogNear")),
          (H = F.getUniformLocation(L, "fogFar")),
          (_ = F.getUniformLocation(L, "fogColor")),
          (b = F.getUniformLocation(L, "alphaTest")),
          ((r = document.createElement("canvas")).width = 8),
          (r.height = 8),
          ((i = r.getContext("2d")).fillStyle = "white"),
          i.fillRect(0, 0, 8, 8),
          ((P = new THREE.Texture(r)).needsUpdate = !0)),
          F.useProgram(L),
          F.enableVertexAttribArray(w),
          F.enableVertexAttribArray(M),
          F.disable(F.CULL_FACE),
          F.enable(F.BLEND),
          F.bindBuffer(F.ARRAY_BUFFER, C),
          F.vertexAttribPointer(w, 2, F.FLOAT, !1, 16, 0),
          F.vertexAttribPointer(M, 2, F.FLOAT, !1, 16, 8),
          F.bindBuffer(F.ELEMENT_ARRAY_BUFFER, A),
          F.uniformMatrix4fv(v, !1, e.projectionMatrix.elements),
          F.activeTexture(F.TEXTURE0),
          F.uniform1i(m, 0),
          (i = r = 0),
          (n = t.fog)
            ? (F.uniform3f(_, n.color.r, n.color.g, n.color.b),
              n instanceof THREE.Fog
                ? (F.uniform1f(x, n.near),
                  F.uniform1f(H, n.far),
                  F.uniform1i(y, 1),
                  (i = r = 1))
                : n instanceof THREE.FogExp2 &&
                  (F.uniform1f(R, n.density), F.uniform1i(y, 2), (i = r = 2)))
            : (F.uniform1i(y, 0), (i = r = 0));
        for (var n = 0, o = c.length; n < o; n++)
          (s = c[n])._modelViewMatrix.multiplyMatrices(
            e.matrixWorldInverse,
            s.matrixWorld
          ),
            (s.z =
              null === s.renderDepth
                ? -s._modelViewMatrix.elements[14]
                : s.renderDepth);
        c.sort(S);
        for (var a = [], n = 0, o = c.length; n < o; n++) {
          var s,
            h = (s = c[n]).material;
          F.uniform1f(b, h.alphaTest),
            F.uniformMatrix4fv(T, !1, s._modelViewMatrix.elements),
            (a[0] = s.scale.x),
            (a[1] = s.scale.y),
            (s = 0),
            t.fog && h.fog && (s = i),
            r !== s && (F.uniform1i(y, s), (r = s)),
            null !== h.map
              ? (F.uniform2f(u, h.map.offset.x, h.map.offset.y),
                F.uniform2f(E, h.map.repeat.x, h.map.repeat.y))
              : (F.uniform2f(u, 0, 0), F.uniform2f(E, 1, 1)),
            F.uniform1f(g, h.opacity),
            F.uniform3f(p, h.color.r, h.color.g, h.color.b),
            F.uniform1f(f, h.rotation),
            F.uniform2fv(d, a),
            l.setBlending(h.blending, h.blendEquation, h.blendSrc, h.blendDst),
            l.setDepthTest(h.depthTest),
            l.setDepthWrite(h.depthWrite),
            h.map && h.map.image && h.map.image.width
              ? l.setTexture(h.map, 0)
              : l.setTexture(P, 0),
            F.drawElements(F.TRIANGLES, 6, F.UNSIGNED_SHORT, 0);
        }
        F.enable(F.CULL_FACE), l.resetGLState();
      }
    };
  }),
  (THREE.GeometryUtils = {
    merge: function (t, e, r) {
      var i;
      console.warn(
        "THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."
      ),
        e instanceof THREE.Mesh &&
          (e.matrixAutoUpdate && e.updateMatrix(),
          (i = e.matrix),
          (e = e.geometry)),
        t.merge(e, i, r);
    },
    center: function (t) {
      return (
        console.warn(
          "THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."
        ),
        t.center()
      );
    },
  }),
  (THREE.ImageUtils = {
    crossOrigin: void 0,
    loadTexture: function (t, e, r, i) {
      var n = new THREE.ImageLoader();
      n.crossOrigin = this.crossOrigin;
      var o = new THREE.Texture(void 0, e);
      return (
        n.load(
          t,
          function (t) {
            (o.image = t), (o.needsUpdate = !0), r && r(o);
          },
          void 0,
          function (t) {
            i && i(t);
          }
        ),
        (o.sourceFile = t),
        o
      );
    },
    loadTextureCube: function (t, e, r, i) {
      var n = new THREE.ImageLoader();
      n.crossOrigin = this.crossOrigin;
      var o = new THREE.CubeTexture([], e);
      o.flipY = !1;
      var a = 0;
      (e = function (e) {
        n.load(t[e], function (t) {
          (o.images[e] = t),
            6 === (a += 1) && ((o.needsUpdate = !0), r && r(o));
        });
      }),
        (i = 0);
      for (var s = t.length; i < s; ++i) e(i);
      return o;
    },
    loadCompressedTexture: function () {
      console.error(
        "THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead."
      );
    },
    loadCompressedTextureCube: function () {
      console.error(
        "THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead."
      );
    },
    getNormalMap: function (t, e) {
      e |= 1;
      var r = t.width,
        i = t.height,
        n = document.createElement("canvas");
      (n.width = r), (n.height = i);
      var o = n.getContext("2d");
      o.drawImage(t, 0, 0);
      for (
        var a,
          s,
          h = o.getImageData(0, 0, r, i).data,
          t = o.createImageData(r, i),
          l = t.data,
          c = 0;
        c < r;
        c++
      )
        for (var u = 0; u < i; u++) {
          var E = u - 1 < 0 ? 0 : u - 1,
            f = i - 1 < u + 1 ? i - 1 : u + 1,
            d = c - 1 < 0 ? 0 : c - 1,
            p = r - 1 < c + 1 ? r - 1 : c + 1,
            m = [],
            g = [0, 0, (h[4 * (u * r + c)] / 255) * e];
          for (
            m.push([-1, 0, (h[4 * (u * r + d)] / 255) * e]),
              m.push([-1, -1, (h[4 * (E * r + d)] / 255) * e]),
              m.push([0, -1, (h[4 * (E * r + c)] / 255) * e]),
              m.push([1, -1, (h[4 * (E * r + p)] / 255) * e]),
              m.push([1, 0, (h[4 * (u * r + p)] / 255) * e]),
              m.push([1, 1, (h[4 * (f * r + p)] / 255) * e]),
              m.push([0, 1, (h[4 * (f * r + c)] / 255) * e]),
              m.push([-1, 1, (h[4 * (f * r + d)] / 255) * e]),
              E = [],
              d = m.length,
              f = 0;
            f < d;
            f++
          ) {
            var p = m[f],
              T = m[(f + 1) % d],
              p = [p[0] - g[0], p[1] - g[1], p[2] - g[2]],
              T = [T[0] - g[0], T[1] - g[1], T[2] - g[2]];
            E.push(
              ((a = [
                p[1] * T[2] - p[2] * T[1],
                p[2] * T[0] - p[0] * T[2],
                p[0] * T[1] - p[1] * T[0],
              ]),
              (s = void 0),
              (s = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])),
              [a[0] / s, a[1] / s, a[2] / s])
            );
          }
          for (m = [0, 0, 0], f = 0; f < E.length; f++)
            (m[0] += E[f][0]), (m[1] += E[f][1]), (m[2] += E[f][2]);
          (m[0] /= E.length),
            (m[1] /= E.length),
            (m[2] /= E.length),
            (l[(g = 4 * (u * r + c))] = (((m[0] + 1) / 2) * 255) | 0),
            (l[g + 1] = (((m[1] + 1) / 2) * 255) | 0),
            (l[g + 2] = (255 * m[2]) | 0),
            (l[g + 3] = 255);
        }
      return o.putImageData(t, 0, 0), n;
    },
    generateDataTexture: function (t, e, r) {
      var i = t * e,
        n = new Uint8Array(3 * i),
        o = Math.floor(255 * r.r),
        a = Math.floor(255 * r.g);
      r = Math.floor(255 * r.b);
      for (var s = 0; s < i; s++)
        (n[3 * s] = o), (n[3 * s + 1] = a), (n[3 * s + 2] = r);
      return (
        ((t = new THREE.DataTexture(n, t, e, THREE.RGBFormat)).needsUpdate =
          !0),
        t
      );
    },
  }),
  (THREE.SceneUtils = {
    createMultiMaterialObject: function (t, e) {
      for (var r = new THREE.Object3D(), i = 0, n = e.length; i < n; i++)
        r.add(new THREE.Mesh(t, e[i]));
      return r;
    },
    detach: function (t, e, r) {
      t.applyMatrix(e.matrixWorld), e.remove(t), r.add(t);
    },
    attach: function (t, e, r) {
      var i = new THREE.Matrix4();
      i.getInverse(r.matrixWorld), t.applyMatrix(i), e.remove(t), r.add(t);
    },
  }),
  (THREE.FontUtils = {
    faces: {},
    face: "helvetiker",
    weight: "normal",
    style: "normal",
    size: 150,
    divisions: 10,
    getFace: function () {
      try {
        return this.faces[this.face][this.weight][this.style];
      } catch (t) {
        throw (
          "The font " +
          this.face +
          " with " +
          this.weight +
          " weight and " +
          this.style +
          " style is missing."
        );
      }
    },
    loadFace: function (t) {
      var e = t.familyName.toLowerCase();
      return (
        (this.faces[e] = this.faces[e] || {}),
        (this.faces[e][t.cssFontWeight] = this.faces[e][t.cssFontWeight] || {}),
        (this.faces[e][t.cssFontWeight][t.cssFontStyle] = t),
        (this.faces[e][t.cssFontWeight][t.cssFontStyle] = t)
      );
    },
    drawText: function (t) {
      var e = this.getFace(),
        r = this.size / e.resolution,
        i = 0,
        n = String(t).split(""),
        o = n.length,
        a = [];
      for (t = 0; t < o; t++) {
        var s = new THREE.Path(),
          i = i + (s = this.extractGlyphPoints(n[t], e, r, i, s)).offset;
        a.push(s.path);
      }
      return { paths: a, offset: i / 2 };
    },
    extractGlyphPoints: function (t, e, r, i, n) {
      var o,
        a,
        s,
        h,
        l,
        c,
        u,
        E,
        f,
        d,
        p,
        m = [],
        g = e.glyphs[t] || e.glyphs["?"];
      if (g) {
        if (g.o)
          for (
            h = (e = g._cachedOutline || (g._cachedOutline = g.o.split(" ")))
              .length,
              t = 0;
            t < h;

          )
            switch (((s = e[t++]), s)) {
              case "m":
                (s = e[t++] * r + i), (l = e[t++] * r), n.moveTo(s, l);
                break;
              case "l":
                (s = e[t++] * r + i), (l = e[t++] * r), n.lineTo(s, l);
                break;
              case "q":
                if (
                  ((s = e[t++] * r + i),
                  (l = e[t++] * r),
                  (E = e[t++] * r + i),
                  (f = e[t++] * r),
                  n.quadraticCurveTo(E, f, s, l),
                  (o = m[m.length - 1]))
                )
                  for (
                    c = o.x, u = o.y, o = 1, a = this.divisions;
                    o <= a;
                    o++
                  ) {
                    var T = o / a;
                    THREE.Shape.Utils.b2(T, c, E, s),
                      THREE.Shape.Utils.b2(T, u, f, l);
                  }
                break;
              case "b":
                if (
                  ((s = e[t++] * r + i),
                  (l = e[t++] * r),
                  (E = e[t++] * r + i),
                  (f = e[t++] * r),
                  (d = e[t++] * r + i),
                  (p = e[t++] * r),
                  n.bezierCurveTo(E, f, d, p, s, l),
                  (o = m[m.length - 1]))
                )
                  for (c = o.x, u = o.y, o = 1, a = this.divisions; o <= a; o++)
                    (T = o / a),
                      THREE.Shape.Utils.b3(T, c, E, d, s),
                      THREE.Shape.Utils.b3(T, u, f, p, l);
            }
        return { offset: g.ha * r, path: n };
      }
    },
  }),
  (THREE.FontUtils.generateShapes = function (t, e) {
    var r = void 0 !== (e = e || {}).curveSegments ? e.curveSegments : 4,
      i = void 0 !== e.font ? e.font : "helvetiker",
      n = void 0 !== e.weight ? e.weight : "normal",
      o = void 0 !== e.style ? e.style : "normal";
    for (
      THREE.FontUtils.size = void 0 !== e.size ? e.size : 100,
        THREE.FontUtils.divisions = r,
        THREE.FontUtils.face = i,
        THREE.FontUtils.weight = n,
        THREE.FontUtils.style = o,
        i = [],
        n = 0,
        o = (r = THREE.FontUtils.drawText(t).paths).length;
      n < o;
      n++
    )
      Array.prototype.push.apply(i, r[n].toShapes());
    return i;
  }),
  (function (t) {
    function C(t) {
      for (var e = t.length, r = 0, i = e - 1, n = 0; n < e; i = n++)
        r += t[i].x * t[n].y - t[n].x * t[i].y;
      return 0.5 * r;
    }
    (t.Triangulate = function (t, e) {
      var r = t.length;
      if (r < 3) return null;
      var i,
        n = [],
        o = [],
        a = [];
      if (0 < C(t)) for (l = 0; l < r; l++) o[l] = l;
      else for (l = 0; l < r; l++) o[l] = r - 1 - l;
      for (var s, h = 2 * r, l = r - 1; 2 < r; ) {
        if (h-- <= 0) {
          console.log("Warning, unable to triangulate polygon!");
          break;
        }
        r <= (s = l) && (s = 0),
          r <= (l = s + 1) && (l = 0),
          r <= (i = l + 1) && (i = 0);
        t: {
          var c = (S = void 0),
            u = void 0,
            E = void 0,
            f = void 0,
            c = t[o[s]].x,
            d = t[o[s]].y,
            p = t[o[l]].x,
            m = t[o[l]].y,
            g = t[o[i]].x;
          if ((p - c) * ((u = t[o[i]].y) - d) - (m - d) * (g - c) < 1e-10)
            S = !1;
          else {
            for (
              var T,
                v,
                y,
                R = (f = E = void 0),
                x = g - p,
                H = u - m,
                _ = c - g,
                b = d - u,
                w = p - c,
                M = m - d,
                S = 0;
              S < r;
              S++
            )
              if (
                ((E = t[o[S]].x),
                (f = t[o[S]].y),
                !(
                  (E === c && f === d) ||
                  (E === p && f === m) ||
                  (E === g && f === u)
                ) &&
                  ((R = E - p),
                  (y = f - m),
                  (T = w * (f - d) - M * (E - c)),
                  (v = _ * (f -= u) - b * (E -= g)),
                  -1e-10 <= x * y - H * R && -1e-10 <= v && -1e-10 <= T))
              ) {
                S = !1;
                break t;
              }
            S = !0;
          }
        }
        if (S) {
          for (
            n.push([t[o[s]], t[o[l]], t[o[i]]]),
              a.push([o[s], o[l], o[i]]),
              i = (s = l) + 1;
            i < r;
            s++, i++
          )
            o[s] = o[i];
          h = 2 * --r;
        }
      }
      return e ? a : n;
    }),
      (t.Triangulate.area = C);
  })(THREE.FontUtils),
  (self._typeface_js = {
    faces: THREE.FontUtils.faces,
    loadFace: THREE.FontUtils.loadFace,
  }),
  (THREE.typeface_js = self._typeface_js),
  (THREE.Audio = function (t) {
    THREE.Object3D.call(this),
      (this.type = "Audio"),
      (this.context = t.context),
      (this.source = this.context.createBufferSource()),
      (this.gain = this.context.createGain()),
      this.gain.connect(this.context.destination),
      (this.panner = this.context.createPanner()),
      this.panner.connect(this.gain);
  }),
  (THREE.Audio.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.Audio.prototype.load = function (t) {
    var e = this,
      r = new XMLHttpRequest();
    return (
      r.open("GET", t, !0),
      (r.responseType = "arraybuffer"),
      (r.onload = function (t) {
        e.context.decodeAudioData(this.response, function (t) {
          (e.source.buffer = t), e.source.connect(e.panner), e.source.start(0);
        });
      }),
      r.send(),
      this
    );
  }),
  (THREE.Audio.prototype.setLoop = function (t) {
    this.source.loop = t;
  }),
  (THREE.Audio.prototype.setRefDistance = function (t) {
    this.panner.refDistance = t;
  }),
  (THREE.Audio.prototype.setRolloffFactor = function (t) {
    this.panner.rolloffFactor = t;
  }),
  (THREE.Audio.prototype.updateMatrixWorld = (function () {
    var e = new THREE.Vector3();
    return function (t) {
      THREE.Object3D.prototype.updateMatrixWorld.call(this, t),
        e.setFromMatrixPosition(this.matrixWorld),
        this.panner.setPosition(e.x, e.y, e.z);
    };
  })()),
  (THREE.AudioListener = function () {
    THREE.Object3D.call(this),
      (this.type = "AudioListener"),
      (this.context = new (window.AudioContext || window.webkitAudioContext)());
  }),
  (THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.AudioListener.prototype.updateMatrixWorld = (function () {
    var e = new THREE.Vector3(),
      r = new THREE.Quaternion(),
      i = new THREE.Vector3(),
      n = new THREE.Vector3(),
      o = new THREE.Vector3(),
      a = new THREE.Vector3();
    return function (t) {
      THREE.Object3D.prototype.updateMatrixWorld.call(this, t),
        (t = this.context.listener),
        this.matrixWorld.decompose(e, r, i),
        n.set(0, 0, -1).applyQuaternion(r),
        o.subVectors(e, a),
        t.setPosition(e.x, e.y, e.z),
        t.setOrientation(n.x, n.y, n.z, this.up.x, this.up.y, this.up.z),
        t.setVelocity(o.x, o.y, o.z),
        a.copy(e);
    };
  })()),
  (THREE.Curve = function () {}),
  (THREE.Curve.prototype.getPoint = function (t) {
    return console.log("Warning, getPoint() not implemented!"), null;
  }),
  (THREE.Curve.prototype.getPointAt = function (t) {
    return (t = this.getUtoTmapping(t)), this.getPoint(t);
  }),
  (THREE.Curve.prototype.getPoints = function (t) {
    t = t || 5;
    for (var e = [], r = 0; r <= t; r++) e.push(this.getPoint(r / t));
    return e;
  }),
  (THREE.Curve.prototype.getSpacedPoints = function (t) {
    t = t || 5;
    for (var e = [], r = 0; r <= t; r++) e.push(this.getPointAt(r / t));
    return e;
  }),
  (THREE.Curve.prototype.getLength = function () {
    var t = this.getLengths();
    return t[t.length - 1];
  }),
  (THREE.Curve.prototype.getLengths = function (t) {
    if (
      ((t = t || this.__arcLengthDivisions || 200),
      this.cacheArcLengths &&
        this.cacheArcLengths.length == t + 1 &&
        !this.needsUpdate)
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    var e,
      r,
      i = [],
      n = this.getPoint(0),
      o = 0;
    for (i.push(0), r = 1; r <= t; r++)
      (o += (e = this.getPoint(r / t)).distanceTo(n)), i.push(o), (n = e);
    return (this.cacheArcLengths = i);
  }),
  (THREE.Curve.prototype.updateArcLengths = function () {
    (this.needsUpdate = !0), this.getLengths();
  }),
  (THREE.Curve.prototype.getUtoTmapping = function (t, e) {
    for (
      var r,
        i = this.getLengths(),
        n = 0,
        o = i.length,
        a = e || t * i[o - 1],
        s = 0,
        h = o - 1;
      s <= h;

    )
      if ((r = i[(n = Math.floor(s + (h - s) / 2))] - a) < 0) s = n + 1;
      else {
        if (!(0 < r)) {
          h = n;
          break;
        }
        h = n - 1;
      }
    return i[(n = h)] == a
      ? n / (o - 1)
      : (n + (a - (s = i[n])) / (i[n + 1] - s)) / (o - 1);
  }),
  (THREE.Curve.prototype.getTangent = function (t) {
    var e = t - 1e-4;
    return (
      e < 0 && (e = 0),
      1 < (t += 1e-4) && (t = 1),
      (e = this.getPoint(e)),
      this.getPoint(t).clone().sub(e).normalize()
    );
  }),
  (THREE.Curve.prototype.getTangentAt = function (t) {
    return (t = this.getUtoTmapping(t)), this.getTangent(t);
  }),
  (THREE.Curve.Utils = {
    tangentQuadraticBezier: function (t, e, r, i) {
      return 2 * (1 - t) * (r - e) + 2 * t * (i - r);
    },
    tangentCubicBezier: function (t, e, r, i, n) {
      return (
        -3 * e * (1 - t) * (1 - t) +
        3 * r * (1 - t) * (1 - t) -
        6 * t * r * (1 - t) +
        6 * t * i * (1 - t) -
        3 * t * t * i +
        3 * t * t * n
      );
    },
    tangentSpline: function (t, e, r, i, n) {
      return (
        6 * t * t -
        6 * t +
        (3 * t * t - 4 * t + 1) +
        (-6 * t * t + 6 * t) +
        (3 * t * t - 2 * t)
      );
    },
    interpolate: function (t, e, r, i, n) {
      var o = n * n;
      return (
        (2 * e - 2 * r + (t = 0.5 * (r - t)) + (i = 0.5 * (i - e))) * n * o +
        (-3 * e + 3 * r - 2 * t - i) * o +
        t * n +
        e
      );
    },
  }),
  (THREE.Curve.create = function (t, e) {
    return (
      (t.prototype = Object.create(THREE.Curve.prototype)),
      (t.prototype.getPoint = e),
      t
    );
  }),
  (THREE.CurvePath = function () {
    (this.curves = []), (this.bends = []), (this.autoClose = !1);
  }),
  (THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype)),
  (THREE.CurvePath.prototype.add = function (t) {
    this.curves.push(t);
  }),
  (THREE.CurvePath.prototype.checkConnection = function () {}),
  (THREE.CurvePath.prototype.closePath = function () {
    var t = this.curves[0].getPoint(0),
      e = this.curves[this.curves.length - 1].getPoint(1);
    t.equals(e) || this.curves.push(new THREE.LineCurve(e, t));
  }),
  (THREE.CurvePath.prototype.getPoint = function (t) {
    var e = t * this.getLength(),
      r = this.getCurveLengths();
    for (t = 0; t < r.length; ) {
      if (r[t] >= e)
        return (
          (e = 1 - (e = r[t] - e) / (t = this.curves[t]).getLength()),
          t.getPointAt(e)
        );
      t++;
    }
    return null;
  }),
  (THREE.CurvePath.prototype.getLength = function () {
    var t = this.getCurveLengths();
    return t[t.length - 1];
  }),
  (THREE.CurvePath.prototype.getCurveLengths = function () {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length)
      return this.cacheLengths;
    for (var t = [], e = 0, r = this.curves.length, i = 0; i < r; i++)
      (e += this.curves[i].getLength()), t.push(e);
    return (this.cacheLengths = t);
  }),
  (THREE.CurvePath.prototype.getBoundingBox = function () {
    for (
      var t,
        e,
        r,
        i,
        n,
        o = this.getPoints(),
        a = (t = Number.NEGATIVE_INFINITY),
        s = (r = Number.POSITIVE_INFINITY),
        h = o[0] instanceof THREE.Vector3,
        l = new (h ? THREE.Vector3 : THREE.Vector2)(),
        c = 0,
        u = o.length;
      c < u;
      c++
    )
      (n = o[c]).x > a ? (a = n.x) : n.x < s && (s = n.x),
        n.y > t ? (t = n.y) : n.y < r && (r = n.y),
        h && (n.z > e ? (e = n.z) : n.z < i && (i = n.z)),
        l.add(n);
    return (
      (o = { minX: s, minY: r, maxX: a, maxY: t }),
      h && ((o.maxZ = e), (o.minZ = i)),
      o
    );
  }),
  (THREE.CurvePath.prototype.createPointsGeometry = function (t) {
    return (t = this.getPoints(t, !0)), this.createGeometry(t);
  }),
  (THREE.CurvePath.prototype.createSpacedPointsGeometry = function (t) {
    return (t = this.getSpacedPoints(t, !0)), this.createGeometry(t);
  }),
  (THREE.CurvePath.prototype.createGeometry = function (t) {
    for (var e = new THREE.Geometry(), r = 0; r < t.length; r++)
      e.vertices.push(new THREE.Vector3(t[r].x, t[r].y, t[r].z || 0));
    return e;
  }),
  (THREE.CurvePath.prototype.addWrapPath = function (t) {
    this.bends.push(t);
  }),
  (THREE.CurvePath.prototype.getTransformedPoints = function (t, e) {
    for (
      var r = this.getPoints(t), i = 0, n = (e = e || this.bends).length;
      i < n;
      i++
    )
      r = this.getWrapPoints(r, e[i]);
    return r;
  }),
  (THREE.CurvePath.prototype.getTransformedSpacedPoints = function (t, e) {
    for (
      var r = this.getSpacedPoints(t), i = 0, n = (e = e || this.bends).length;
      i < n;
      i++
    )
      r = this.getWrapPoints(r, e[i]);
    return r;
  }),
  (THREE.CurvePath.prototype.getWrapPoints = function (t, e) {
    for (
      var r, i, n, o, a = this.getBoundingBox(), s = 0, h = t.length;
      s < h;
      s++
    )
      (i = (r = t[s]).x),
        (n = r.y),
        (o = i / a.maxX),
        (o = e.getUtoTmapping(o, i)),
        (i = e.getPoint(o)),
        (o = e.getTangent(o)).set(-o.y, o.x).multiplyScalar(n),
        (r.x = i.x + o.x),
        (r.y = i.y + o.y);
    return t;
  }),
  (THREE.Gyroscope = function () {
    THREE.Object3D.call(this);
  }),
  (THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.Gyroscope.prototype.updateMatrixWorld = (function () {
    var i = new THREE.Vector3(),
      n = new THREE.Quaternion(),
      o = new THREE.Vector3(),
      a = new THREE.Vector3(),
      s = new THREE.Quaternion(),
      h = new THREE.Vector3();
    return function (t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) &&
          (this.parent
            ? (this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              ),
              this.matrixWorld.decompose(a, s, h),
              this.matrix.decompose(i, n, o),
              this.matrixWorld.compose(a, n, h))
            : this.matrixWorld.copy(this.matrix),
          (t = !(this.matrixWorldNeedsUpdate = !1)));
      for (var e = 0, r = this.children.length; e < r; e++)
        this.children[e].updateMatrixWorld(t);
    };
  })()),
  (THREE.Path = function (t) {
    THREE.CurvePath.call(this), (this.actions = []), t && this.fromPoints(t);
  }),
  (THREE.Path.prototype = Object.create(THREE.CurvePath.prototype)),
  (THREE.PathActions = {
    MOVE_TO: "moveTo",
    LINE_TO: "lineTo",
    QUADRATIC_CURVE_TO: "quadraticCurveTo",
    BEZIER_CURVE_TO: "bezierCurveTo",
    CSPLINE_THRU: "splineThru",
    ARC: "arc",
    ELLIPSE: "ellipse",
  }),
  (THREE.Path.prototype.fromPoints = function (t) {
    this.moveTo(t[0].x, t[0].y);
    for (var e = 1, r = t.length; e < r; e++) this.lineTo(t[e].x, t[e].y);
  }),
  (THREE.Path.prototype.moveTo = function (t, e) {
    var r = Array.prototype.slice.call(arguments);
    this.actions.push({ action: THREE.PathActions.MOVE_TO, args: r });
  }),
  (THREE.Path.prototype.lineTo = function (t, e) {
    var r = Array.prototype.slice.call(arguments),
      i = this.actions[this.actions.length - 1].args,
      i = new THREE.LineCurve(
        new THREE.Vector2(i[i.length - 2], i[i.length - 1]),
        new THREE.Vector2(t, e)
      );
    this.curves.push(i),
      this.actions.push({ action: THREE.PathActions.LINE_TO, args: r });
  }),
  (THREE.Path.prototype.quadraticCurveTo = function (t, e, r, i) {
    var n = Array.prototype.slice.call(arguments),
      o = this.actions[this.actions.length - 1].args,
      o = new THREE.QuadraticBezierCurve(
        new THREE.Vector2(o[o.length - 2], o[o.length - 1]),
        new THREE.Vector2(t, e),
        new THREE.Vector2(r, i)
      );
    this.curves.push(o),
      this.actions.push({
        action: THREE.PathActions.QUADRATIC_CURVE_TO,
        args: n,
      });
  }),
  (THREE.Path.prototype.bezierCurveTo = function (t, e, r, i, n, o) {
    var a = Array.prototype.slice.call(arguments),
      s = this.actions[this.actions.length - 1].args,
      s = new THREE.CubicBezierCurve(
        new THREE.Vector2(s[s.length - 2], s[s.length - 1]),
        new THREE.Vector2(t, e),
        new THREE.Vector2(r, i),
        new THREE.Vector2(n, o)
      );
    this.curves.push(s),
      this.actions.push({ action: THREE.PathActions.BEZIER_CURVE_TO, args: a });
  }),
  (THREE.Path.prototype.splineThru = function (t) {
    var e = Array.prototype.slice.call(arguments),
      r = this.actions[this.actions.length - 1].args,
      r = [new THREE.Vector2(r[r.length - 2], r[r.length - 1])];
    Array.prototype.push.apply(r, t),
      (r = new THREE.SplineCurve(r)),
      this.curves.push(r),
      this.actions.push({ action: THREE.PathActions.CSPLINE_THRU, args: e });
  }),
  (THREE.Path.prototype.arc = function (t, e, r, i, n, o) {
    var a = this.actions[this.actions.length - 1].args;
    this.absarc(t + a[a.length - 2], e + a[a.length - 1], r, i, n, o);
  }),
  (THREE.Path.prototype.absarc = function (t, e, r, i, n, o) {
    this.absellipse(t, e, r, r, i, n, o);
  }),
  (THREE.Path.prototype.ellipse = function (t, e, r, i, n, o, a) {
    var s = this.actions[this.actions.length - 1].args;
    this.absellipse(t + s[s.length - 2], e + s[s.length - 1], r, i, n, o, a);
  }),
  (THREE.Path.prototype.absellipse = function (t, e, r, i, n, o, a) {
    var s = Array.prototype.slice.call(arguments),
      a = new THREE.EllipseCurve(t, e, r, i, n, o, a);
    this.curves.push(a),
      (a = a.getPoint(1)),
      s.push(a.x),
      s.push(a.y),
      this.actions.push({ action: THREE.PathActions.ELLIPSE, args: s });
  }),
  (THREE.Path.prototype.getSpacedPoints = function (t, e) {
    t = t || 40;
    for (var r = [], i = 0; i < t; i++) r.push(this.getPoint(i / t));
    return r;
  }),
  (THREE.Path.prototype.getPoints = function (t, e) {
    if (this.useSpacedPoints)
      return console.log("tata"), this.getSpacedPoints(t, e);
    t = t || 12;
    for (
      var r,
        i,
        n,
        o,
        a,
        s,
        h,
        l,
        c,
        u,
        E,
        f = [],
        d = 0,
        p = this.actions.length;
      d < p;
      d++
    )
      switch (((r = this.actions[d]), (i = r.action), (r = r.args), i)) {
        case THREE.PathActions.MOVE_TO:
        case THREE.PathActions.LINE_TO:
          f.push(new THREE.Vector2(r[0], r[1]));
          break;
        case THREE.PathActions.QUADRATIC_CURVE_TO:
          for (
            n = r[2],
              o = r[3],
              h = r[0],
              l = r[1],
              u =
                0 < f.length
                  ? ((c = (i = f[f.length - 1]).x), i.y)
                  : ((c = (i = this.actions[d - 1].args)[i.length - 2]),
                    i[i.length - 1]),
              r = 1;
            r <= t;
            r++
          )
            (E = r / t),
              (i = THREE.Shape.Utils.b2(E, c, h, n)),
              (E = THREE.Shape.Utils.b2(E, u, l, o)),
              f.push(new THREE.Vector2(i, E));
          break;
        case THREE.PathActions.BEZIER_CURVE_TO:
          for (
            n = r[4],
              o = r[5],
              h = r[0],
              l = r[1],
              a = r[2],
              s = r[3],
              u =
                0 < f.length
                  ? ((c = (i = f[f.length - 1]).x), i.y)
                  : ((c = (i = this.actions[d - 1].args)[i.length - 2]),
                    i[i.length - 1]),
              r = 1;
            r <= t;
            r++
          )
            (E = r / t),
              (i = THREE.Shape.Utils.b3(E, c, h, a, n)),
              (E = THREE.Shape.Utils.b3(E, u, l, s, o)),
              f.push(new THREE.Vector2(i, E));
          break;
        case THREE.PathActions.CSPLINE_THRU:
          for (
            i = this.actions[d - 1].args,
              E = [new THREE.Vector2(i[i.length - 2], i[i.length - 1])],
              i = t * r[0].length,
              E = E.concat(r[0]),
              E = new THREE.SplineCurve(E),
              r = 1;
            r <= i;
            r++
          )
            f.push(E.getPointAt(r / i));
          break;
        case THREE.PathActions.ARC:
          for (
            n = r[0],
              o = r[1],
              l = r[2],
              a = r[3],
              i = r[4],
              h = !!r[5],
              c = i - a,
              u = 2 * t,
              r = 1;
            r <= u;
            r++
          )
            (E = r / u),
              h || (E = 1 - E),
              (E = a + E * c),
              (i = n + l * Math.cos(E)),
              (E = o + l * Math.sin(E)),
              f.push(new THREE.Vector2(i, E));
          break;
        case THREE.PathActions.ELLIPSE:
          for (
            n = r[0],
              o = r[1],
              l = r[2],
              s = r[3],
              a = r[4],
              i = r[5],
              h = !!r[6],
              c = i - a,
              u = 2 * t,
              r = 1;
            r <= u;
            r++
          )
            (E = r / u),
              h || (E = 1 - E),
              (E = a + E * c),
              (i = n + l * Math.cos(E)),
              (E = o + s * Math.sin(E)),
              f.push(new THREE.Vector2(i, E));
      }
    return (
      (d = f[f.length - 1]),
      Math.abs(d.x - f[0].x) < 1e-10 &&
        Math.abs(d.y - f[0].y) < 1e-10 &&
        f.splice(f.length - 1, 1),
      e && f.push(f[0]),
      f
    );
  }),
  (THREE.Path.prototype.toShapes = function (t, e) {
    function r(t) {
      for (var e = [], r = 0, i = t.length; r < i; r++) {
        var n = t[r],
          o = new THREE.Shape();
        (o.actions = n.actions), (o.curves = n.curves), e.push(o);
      }
      return e;
    }
    var i = (function (t) {
      for (
        var e, r, i = [], n = new THREE.Path(), o = 0, a = t.length;
        o < a;
        o++
      )
        (r = (e = t[o]).args),
          (e = e.action) == THREE.PathActions.MOVE_TO &&
            0 != n.actions.length &&
            (i.push(n), (n = new THREE.Path())),
          n[e].apply(n, r);
      return 0 != n.actions.length && i.push(n), i;
    })(this.actions);
    if (0 == i.length) return [];
    if (!0 === e) return r(i);
    var n,
      o,
      a = [];
    if (1 == i.length)
      return (
        (o = i[0]),
        ((u = new THREE.Shape()).actions = o.actions),
        (u.curves = o.curves),
        a.push(u),
        a
      );
    var s,
      h,
      l,
      c = !THREE.Shape.Utils.isClockWise(i[0].getPoints()),
      c = t ? !c : c,
      u = [],
      E = [],
      f = [],
      d = 0;
    for (E[d] = void 0, f[d] = [], h = 0, l = i.length; h < l; h++)
      (s = (o = i[h]).getPoints()),
        (n = THREE.Shape.Utils.isClockWise(s)),
        (n = t ? !n : n)
          ? (!c && E[d] && d++,
            (E[d] = { s: new THREE.Shape(), p: s }),
            (E[d].s.actions = o.actions),
            (E[d].s.curves = o.curves),
            c && d++,
            (f[d] = []))
          : f[d].push({ h: o, p: s[0] });
    if (!E[0]) return r(i);
    if (1 < E.length) {
      for (h = !1, l = [], o = 0, i = E.length; o < i; o++) u[o] = [];
      for (o = 0, i = E.length; o < i; o++)
        for (n = f[o], c = 0; c < n.length; c++) {
          (d = n[c]), (s = !0);
          for (var p = 0; p < E.length; p++)
            !(function (t, e) {
              for (var r = e.length, i = !1, n = r - 1, o = 0; o < r; n = o++) {
                var a = e[n],
                  s = e[o],
                  h = s.x - a.x,
                  l = s.y - a.y;
                if (1e-10 < Math.abs(l)) {
                  if (
                    (l < 0 && ((a = e[o]), (h = -h), (s = e[n]), (l = -l)),
                    !(t.y < a.y || t.y > s.y))
                  )
                    if (t.y == a.y) {
                      if (t.x == a.x) return 1;
                    } else {
                      if (0 == (n = l * (t.x - a.x) - h * (t.y - a.y)))
                        return 1;
                      n < 0 || (i = !i);
                    }
                } else if (
                  t.y == a.y &&
                  ((s.x <= t.x && t.x <= a.x) || (a.x <= t.x && t.x <= s.x))
                )
                  return 1;
              }
              return i;
            })(d.p, E[p].p) ||
              (o != p && l.push({ froms: o, tos: p, hole: c }),
              s ? ((s = !1), u[p].push(d)) : (h = !0));
          s && u[o].push(d);
        }
      0 < l.length && (h || (f = u));
    }
    for (h = 0, l = E.length; h < l; h++)
      for (u = E[h].s, a.push(u), i = 0, n = (o = f[h]).length; i < n; i++)
        u.holes.push(o[i].h);
    return a;
  }),
  (THREE.Shape = function () {
    THREE.Path.apply(this, arguments), (this.holes = []);
  }),
  (THREE.Shape.prototype = Object.create(THREE.Path.prototype)),
  (THREE.Shape.prototype.extrude = function (t) {
    return new THREE.ExtrudeGeometry(this, t);
  }),
  (THREE.Shape.prototype.makeGeometry = function (t) {
    return new THREE.ShapeGeometry(this, t);
  }),
  (THREE.Shape.prototype.getPointsHoles = function (t) {
    for (var e = this.holes.length, r = [], i = 0; i < e; i++)
      r[i] = this.holes[i].getTransformedPoints(t, this.bends);
    return r;
  }),
  (THREE.Shape.prototype.getSpacedPointsHoles = function (t) {
    for (var e = this.holes.length, r = [], i = 0; i < e; i++)
      r[i] = this.holes[i].getTransformedSpacedPoints(t, this.bends);
    return r;
  }),
  (THREE.Shape.prototype.extractAllPoints = function (t) {
    return {
      shape: this.getTransformedPoints(t),
      holes: this.getPointsHoles(t),
    };
  }),
  (THREE.Shape.prototype.extractPoints = function (t) {
    return this.useSpacedPoints
      ? this.extractAllSpacedPoints(t)
      : this.extractAllPoints(t);
  }),
  (THREE.Shape.prototype.extractAllSpacedPoints = function (t) {
    return {
      shape: this.getTransformedSpacedPoints(t),
      holes: this.getSpacedPointsHoles(t),
    };
  }),
  (THREE.Shape.Utils = {
    triangulateShape: function (p, t) {
      function f(t, e, r) {
        return t.x != e.x
          ? t.x < e.x
            ? t.x <= r.x && r.x <= e.x
            : e.x <= r.x && r.x <= t.x
          : t.y < e.y
          ? t.y <= r.y && r.y <= e.y
          : e.y <= r.y && r.y <= t.y;
      }
      function m(t, e, r, i, n) {
        var o = e.x - t.x,
          a = e.y - t.y,
          s = i.x - r.x,
          h = i.y - r.y,
          l = t.x - r.x,
          c = t.y - r.y,
          u = a * s - o * h,
          E = a * l - o * c;
        if (1e-10 < Math.abs(u)) {
          if (0 < u) {
            if (E < 0 || u < E) return [];
            if ((s = h * l - s * c) < 0 || u < s) return [];
          } else {
            if (0 < E || E < u) return [];
            if (0 < (s = h * l - s * c) || s < u) return [];
          }
          return 0 == s
            ? !n || (0 != E && E != u)
              ? [t]
              : []
            : s == u
            ? !n || (0 != E && E != u)
              ? [e]
              : []
            : 0 == E
            ? [r]
            : E == u
            ? [i]
            : ((n = s / u), [{ x: t.x + n * o, y: t.y + n * a }]);
        }
        return 0 != E || h * l != s * c
          ? []
          : ((s = 0 == s && 0 == h),
            (a = 0 == o && 0 == a) && s
              ? t.x != r.x || t.y != r.y
                ? []
                : [t]
              : a
              ? f(r, i, t)
                ? [t]
                : []
              : s
              ? f(t, e, r)
                ? [r]
                : []
              : ((r =
                  0 != o
                    ? ((t =
                        t.x < e.x
                          ? ((s = (o = t).x), (a = e).x)
                          : ((s = (o = e).x), (a = t).x)),
                      r.x < i.x
                        ? ((u = (e = r).x), (h = i).x)
                        : ((u = (e = i).x), (h = r).x))
                    : ((t =
                        t.y < e.y
                          ? ((s = (o = t).y), (a = e).y)
                          : ((s = (o = e).y), (a = t).y)),
                      r.y < i.y
                        ? ((u = (e = r).y), (h = i).y)
                        : ((u = (e = i).y), (h = r).y))),
                s <= u
                  ? t < u
                    ? []
                    : t == u
                    ? n
                      ? []
                      : [e]
                    : t <= r
                    ? [e, a]
                    : [e, h]
                  : r < s
                  ? []
                  : s == r
                  ? n
                    ? []
                    : [o]
                  : t <= r
                  ? [o, a]
                  : [o, h]));
      }
      function g(t, e, r, i) {
        var n = e.x - t.x,
          o = e.y - t.y;
        (e = r.x - t.x), (r = r.y - t.y);
        var a = i.x - t.x;
        return (
          (i = i.y - t.y),
          (t = n * r - o * e),
          (n = n * i - o * a),
          1e-10 < Math.abs(t)
            ? ((e = a * r - i * e), 0 < t ? 0 <= n && 0 <= e : 0 <= n || 0 <= e)
            : 0 < n
        );
      }
      for (var e, r, i = {}, n = p.concat(), o = 0, a = t.length; o < a; o++)
        Array.prototype.push.apply(n, t[o]);
      for (o = 0, a = n.length; o < a; o++)
        void 0 !== i[(r = n[o].x + ":" + n[o].y)] &&
          console.log("Duplicate point", r),
          (i[r] = o);
      o = (function (a) {
        for (
          var o,
            t,
            e,
            r,
            i,
            n,
            s,
            h,
            l = p.concat(),
            c = [],
            u = [],
            E = 0,
            f = a.length;
          E < f;
          E++
        )
          c.push(E);
        n = 0;
        for (var d = 2 * c.length; 0 < c.length; ) {
          if (--d < 0) {
            console.log(
              "Infinite Loop! Holes left:" +
                c.length +
                ", Probably Hole outside Shape!"
            );
            break;
          }
          for (t = n; t < l.length; t++) {
            for (e = l[t], f = -1, E = 0; E < c.length; E++)
              if (((r = c[E]), void 0 === u[(i = e.x + ":" + e.y + ":" + r)])) {
                for (o = a[r], s = 0; s < o.length; s++)
                  if (
                    ((r = o[s]),
                    (function (t, e) {
                      var r = l.length - 1,
                        i = t - 1;
                      i < 0 && (i = r);
                      var n = t + 1;
                      return (
                        r < n && (n = 0),
                        (r = g(l[t], l[i], l[n], o[e])) &&
                          ((r = o.length - 1),
                          (i = e - 1) < 0 && (i = r),
                          r < (n = e + 1) && (n = 0),
                          !!(r = g(o[e], o[i], o[n], l[t])))
                      );
                    })(t, s) &&
                      !(function (t, e) {
                        for (var r, i = 0; i < l.length; i++)
                          if (
                            ((r = i + 1),
                            (r %= l.length),
                            0 < m(t, e, l[i], l[r], !0).length)
                          )
                            return 1;
                      })(e, r) &&
                      !(function (t, e) {
                        for (var r, i, n, o = 0; o < c.length; o++)
                          for (r = a[c[o]], i = 0; i < r.length; i++)
                            if (
                              ((n = i + 1),
                              (n %= r.length),
                              0 < m(t, e, r[i], r[n], !0).length)
                            )
                              return 1;
                      })(e, r))
                  ) {
                    (f = s),
                      c.splice(E, 1),
                      (n = l.slice(0, t + 1)),
                      (r = l.slice(t)),
                      (s = o.slice(f)),
                      (h = o.slice(0, f + 1)),
                      (l = n.concat(s).concat(h).concat(r)),
                      (n = t);
                    break;
                  }
                if (0 <= f) break;
                u[i] = !0;
              }
            if (0 <= f) break;
          }
        }
        return l;
      })(t);
      var s = THREE.FontUtils.Triangulate(o, !1);
      for (o = 0, a = s.length; o < a; o++)
        for (e = s[o], n = 0; n < 3; n++)
          void 0 !== (r = i[(r = e[n].x + ":" + e[n].y)]) && (e[n] = r);
      return s.concat();
    },
    isClockWise: function (t) {
      return THREE.FontUtils.Triangulate.area(t) < 0;
    },
    b2p0: function (t, e) {
      t = 1 - t;
      return t * t * e;
    },
    b2p1: function (t, e) {
      return 2 * (1 - t) * t * e;
    },
    b2p2: function (t, e) {
      return t * t * e;
    },
    b2: function (t, e, r, i) {
      return this.b2p0(t, e) + this.b2p1(t, r) + this.b2p2(t, i);
    },
    b3p0: function (t, e) {
      t = 1 - t;
      return t * t * t * e;
    },
    b3p1: function (t, e) {
      var r = 1 - t;
      return 3 * r * r * t * e;
    },
    b3p2: function (t, e) {
      return 3 * (1 - t) * t * t * e;
    },
    b3p3: function (t, e) {
      return t * t * t * e;
    },
    b3: function (t, e, r, i, n) {
      return (
        this.b3p0(t, e) + this.b3p1(t, r) + this.b3p2(t, i) + this.b3p3(t, n)
      );
    },
  }),
  (THREE.LineCurve = function (t, e) {
    (this.v1 = t), (this.v2 = e);
  }),
  (THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype)),
  (THREE.LineCurve.prototype.getPoint = function (t) {
    var e = this.v2.clone().sub(this.v1);
    return e.multiplyScalar(t).add(this.v1), e;
  }),
  (THREE.LineCurve.prototype.getPointAt = function (t) {
    return this.getPoint(t);
  }),
  (THREE.LineCurve.prototype.getTangent = function (t) {
    return this.v2.clone().sub(this.v1).normalize();
  }),
  (THREE.QuadraticBezierCurve = function (t, e, r) {
    (this.v0 = t), (this.v1 = e), (this.v2 = r);
  }),
  (THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype)),
  (THREE.QuadraticBezierCurve.prototype.getPoint = function (t) {
    var e = new THREE.Vector2();
    return (
      (e.x = THREE.Shape.Utils.b2(t, this.v0.x, this.v1.x, this.v2.x)),
      (e.y = THREE.Shape.Utils.b2(t, this.v0.y, this.v1.y, this.v2.y)),
      e
    );
  }),
  (THREE.QuadraticBezierCurve.prototype.getTangent = function (t) {
    var e = new THREE.Vector2();
    return (
      (e.x = THREE.Curve.Utils.tangentQuadraticBezier(
        t,
        this.v0.x,
        this.v1.x,
        this.v2.x
      )),
      (e.y = THREE.Curve.Utils.tangentQuadraticBezier(
        t,
        this.v0.y,
        this.v1.y,
        this.v2.y
      )),
      e.normalize()
    );
  }),
  (THREE.CubicBezierCurve = function (t, e, r, i) {
    (this.v0 = t), (this.v1 = e), (this.v2 = r), (this.v3 = i);
  }),
  (THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype)),
  (THREE.CubicBezierCurve.prototype.getPoint = function (t) {
    var e = THREE.Shape.Utils.b3(t, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    return (
      (t = THREE.Shape.Utils.b3(t, this.v0.y, this.v1.y, this.v2.y, this.v3.y)),
      new THREE.Vector2(e, t)
    );
  }),
  (THREE.CubicBezierCurve.prototype.getTangent = function (t) {
    var e = THREE.Curve.Utils.tangentCubicBezier(
      t,
      this.v0.x,
      this.v1.x,
      this.v2.x,
      this.v3.x
    );
    return (
      (t = THREE.Curve.Utils.tangentCubicBezier(
        t,
        this.v0.y,
        this.v1.y,
        this.v2.y,
        this.v3.y
      )),
      (e = new THREE.Vector2(e, t)).normalize(),
      e
    );
  }),
  (THREE.SplineCurve = function (t) {
    this.points = null == t ? [] : t;
  }),
  (THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype)),
  (THREE.SplineCurve.prototype.getPoint = function (t) {
    t *= (o = this.points).length - 1;
    var e = Math.floor(t);
    t -= e;
    var r = o[0 == e ? e : e - 1],
      i = o[e],
      n = o[e > o.length - 2 ? o.length - 1 : e + 1],
      o = o[e > o.length - 3 ? o.length - 1 : e + 2];
    return (
      ((e = new THREE.Vector2()).x = THREE.Curve.Utils.interpolate(
        r.x,
        i.x,
        n.x,
        o.x,
        t
      )),
      (e.y = THREE.Curve.Utils.interpolate(r.y, i.y, n.y, o.y, t)),
      e
    );
  }),
  (THREE.EllipseCurve = function (t, e, r, i, n, o, a) {
    (this.aX = t),
      (this.aY = e),
      (this.xRadius = r),
      (this.yRadius = i),
      (this.aStartAngle = n),
      (this.aEndAngle = o),
      (this.aClockwise = a);
  }),
  (THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype)),
  (THREE.EllipseCurve.prototype.getPoint = function (t) {
    var e = this.aEndAngle - this.aStartAngle;
    return (
      e < 0 && (e += 2 * Math.PI),
      e > 2 * Math.PI && (e -= 2 * Math.PI),
      (t =
        !0 === this.aClockwise
          ? this.aEndAngle + (1 - t) * (2 * Math.PI - e)
          : this.aStartAngle + t * e),
      ((e = new THREE.Vector2()).x = this.aX + this.xRadius * Math.cos(t)),
      (e.y = this.aY + this.yRadius * Math.sin(t)),
      e
    );
  }),
  (THREE.ArcCurve = function (t, e, r, i, n, o) {
    THREE.EllipseCurve.call(this, t, e, r, r, i, n, o);
  }),
  (THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype)),
  (THREE.LineCurve3 = THREE.Curve.create(
    function (t, e) {
      (this.v1 = t), (this.v2 = e);
    },
    function (t) {
      var e = new THREE.Vector3();
      return (
        e.subVectors(this.v2, this.v1), e.multiplyScalar(t), e.add(this.v1), e
      );
    }
  )),
  (THREE.QuadraticBezierCurve3 = THREE.Curve.create(
    function (t, e, r) {
      (this.v0 = t), (this.v1 = e), (this.v2 = r);
    },
    function (t) {
      var e = new THREE.Vector3();
      return (
        (e.x = THREE.Shape.Utils.b2(t, this.v0.x, this.v1.x, this.v2.x)),
        (e.y = THREE.Shape.Utils.b2(t, this.v0.y, this.v1.y, this.v2.y)),
        (e.z = THREE.Shape.Utils.b2(t, this.v0.z, this.v1.z, this.v2.z)),
        e
      );
    }
  )),
  (THREE.CubicBezierCurve3 = THREE.Curve.create(
    function (t, e, r, i) {
      (this.v0 = t), (this.v1 = e), (this.v2 = r), (this.v3 = i);
    },
    function (t) {
      var e = new THREE.Vector3();
      return (
        (e.x = THREE.Shape.Utils.b3(
          t,
          this.v0.x,
          this.v1.x,
          this.v2.x,
          this.v3.x
        )),
        (e.y = THREE.Shape.Utils.b3(
          t,
          this.v0.y,
          this.v1.y,
          this.v2.y,
          this.v3.y
        )),
        (e.z = THREE.Shape.Utils.b3(
          t,
          this.v0.z,
          this.v1.z,
          this.v2.z,
          this.v3.z
        )),
        e
      );
    }
  )),
  (THREE.SplineCurve3 = THREE.Curve.create(
    function (t) {
      this.points = null == t ? [] : t;
    },
    function (t) {
      t *= (o = this.points).length - 1;
      var e = Math.floor(t);
      t -= e;
      var r = o[0 == e ? e : e - 1],
        i = o[e],
        n = o[e > o.length - 2 ? o.length - 1 : e + 1],
        o = o[e > o.length - 3 ? o.length - 1 : e + 2];
      return (
        ((e = new THREE.Vector3()).x = THREE.Curve.Utils.interpolate(
          r.x,
          i.x,
          n.x,
          o.x,
          t
        )),
        (e.y = THREE.Curve.Utils.interpolate(r.y, i.y, n.y, o.y, t)),
        (e.z = THREE.Curve.Utils.interpolate(r.z, i.z, n.z, o.z, t)),
        e
      );
    }
  )),
  (THREE.ClosedSplineCurve3 = THREE.Curve.create(
    function (t) {
      this.points = null == t ? [] : t;
    },
    function (t) {
      t *= +(o = this.points).length;
      var e = Math.floor(t);
      t -= e;
      var r =
          o[
            ((e =
              e +
              (0 < e
                ? 0
                : (Math.floor(Math.abs(e) / o.length) + 1) * o.length)) -
              1) %
              o.length
          ],
        i = o[e % o.length],
        n = o[(e + 1) % o.length],
        o = o[(e + 2) % o.length];
      return (
        ((e = new THREE.Vector3()).x = THREE.Curve.Utils.interpolate(
          r.x,
          i.x,
          n.x,
          o.x,
          t
        )),
        (e.y = THREE.Curve.Utils.interpolate(r.y, i.y, n.y, o.y, t)),
        (e.z = THREE.Curve.Utils.interpolate(r.z, i.z, n.z, o.z, t)),
        e
      );
    }
  )),
  (THREE.AnimationHandler = {
    LINEAR: 0,
    CATMULLROM: 1,
    CATMULLROM_FORWARD: 2,
    add: function () {
      console.warn("THREE.AnimationHandler.add() has been deprecated.");
    },
    get: function () {
      console.warn("THREE.AnimationHandler.get() has been deprecated.");
    },
    remove: function () {
      console.warn("THREE.AnimationHandler.remove() has been deprecated.");
    },
    animations: [],
    init: function (t) {
      if (!0 !== t.initialized) {
        for (var e = 0; e < t.hierarchy.length; e++) {
          for (var r, i = 0; i < t.hierarchy[e].keys.length; i++)
            t.hierarchy[e].keys[i].time < 0 &&
              (t.hierarchy[e].keys[i].time = 0),
              void 0 === t.hierarchy[e].keys[i].rot ||
                t.hierarchy[e].keys[i].rot instanceof THREE.Quaternion ||
                ((r = t.hierarchy[e].keys[i].rot),
                (t.hierarchy[e].keys[i].rot = new THREE.Quaternion().fromArray(
                  r
                )));
          if (
            t.hierarchy[e].keys.length &&
            void 0 !== t.hierarchy[e].keys[0].morphTargets
          ) {
            for (r = {}, i = 0; i < t.hierarchy[e].keys.length; i++)
              for (
                var n = 0;
                n < t.hierarchy[e].keys[i].morphTargets.length;
                n++
              ) {
                var o = t.hierarchy[e].keys[i].morphTargets[n];
                r[o] = -1;
              }
            for (
              t.hierarchy[e].usedMorphTargets = r, i = 0;
              i < t.hierarchy[e].keys.length;
              i++
            ) {
              var a = {};
              for (o in r) {
                for (n = 0; n < t.hierarchy[e].keys[i].morphTargets.length; n++)
                  if (t.hierarchy[e].keys[i].morphTargets[n] === o) {
                    a[o] = t.hierarchy[e].keys[i].morphTargetsInfluences[n];
                    break;
                  }
                n === t.hierarchy[e].keys[i].morphTargets.length && (a[o] = 0);
              }
              t.hierarchy[e].keys[i].morphTargetsInfluences = a;
            }
          }
          for (i = 1; i < t.hierarchy[e].keys.length; i++)
            t.hierarchy[e].keys[i].time === t.hierarchy[e].keys[i - 1].time &&
              (t.hierarchy[e].keys.splice(i, 1), i--);
          for (i = 0; i < t.hierarchy[e].keys.length; i++)
            t.hierarchy[e].keys[i].index = i;
        }
        return (t.initialized = !0), t;
      }
    },
    parse: function (t) {
      var i = function (t, e) {
          e.push(t);
          for (var r = 0; r < t.children.length; r++) i(t.children[r], e);
        },
        e = [];
      if (t instanceof THREE.SkinnedMesh)
        for (var r = 0; r < t.skeleton.bones.length; r++)
          e.push(t.skeleton.bones[r]);
      else i(t, e);
      return e;
    },
    play: function (t) {
      -1 === this.animations.indexOf(t) && this.animations.push(t);
    },
    stop: function (t) {
      -1 !== (t = this.animations.indexOf(t)) && this.animations.splice(t, 1);
    },
    update: function (t) {
      for (var e = 0; e < this.animations.length; e++)
        this.animations[e].resetBlendWeights();
      for (e = 0; e < this.animations.length; e++) this.animations[e].update(t);
    },
  }),
  (THREE.Animation = function (t, e) {
    (this.root = t),
      (this.data = THREE.AnimationHandler.init(e)),
      (this.hierarchy = THREE.AnimationHandler.parse(t)),
      (this.currentTime = 0),
      (this.timeScale = 1),
      (this.isPlaying = !1),
      (this.loop = !0),
      (this.weight = 0),
      (this.interpolationType = THREE.AnimationHandler.LINEAR);
  }),
  (THREE.Animation.prototype.keyTypes = ["pos", "rot", "scl"]),
  (THREE.Animation.prototype.play = function (t, e) {
    (this.currentTime = void 0 !== t ? t : 0),
      (this.weight = void 0 !== e ? e : 1),
      (this.isPlaying = !0),
      this.reset(),
      THREE.AnimationHandler.play(this);
  }),
  (THREE.Animation.prototype.stop = function () {
    (this.isPlaying = !1), THREE.AnimationHandler.stop(this);
  }),
  (THREE.Animation.prototype.reset = function () {
    for (var t = 0, e = this.hierarchy.length; t < e; t++) {
      ((r = this.hierarchy[t]).matrixAutoUpdate = !0),
        void 0 === r.animationCache &&
          (r.animationCache = {
            animations: {},
            blending: {
              positionWeight: 0,
              quaternionWeight: 0,
              scaleWeight: 0,
            },
          }),
        void 0 === r.animationCache.animations[this.data.name] &&
          ((r.animationCache.animations[this.data.name] = {}),
          (r.animationCache.animations[this.data.name].prevKey = {
            pos: 0,
            rot: 0,
            scl: 0,
          }),
          (r.animationCache.animations[this.data.name].nextKey = {
            pos: 0,
            rot: 0,
            scl: 0,
          }),
          (r.animationCache.animations[this.data.name].originalMatrix =
            r.matrix));
      for (
        var r = r.animationCache.animations[this.data.name], i = 0;
        i < 3;
        i++
      ) {
        for (
          var n = this.keyTypes[i],
            o = this.data.hierarchy[t].keys[0],
            a = this.getNextKeyWith(n, t, 1);
          a.time < this.currentTime && a.index > o.index;

        )
          (o = a), (a = this.getNextKeyWith(n, t, a.index + 1));
        (r.prevKey[n] = o), (r.nextKey[n] = a);
      }
    }
  }),
  (THREE.Animation.prototype.resetBlendWeights = function () {
    for (var t = 0, e = this.hierarchy.length; t < e; t++) {
      var r = this.hierarchy[t];
      void 0 !== r.animationCache &&
        ((r.animationCache.blending.positionWeight = 0),
        (r.animationCache.blending.quaternionWeight = 0),
        (r.animationCache.blending.scaleWeight = 0));
    }
  }),
  (THREE.Animation.prototype.update = (function () {
    function E(t, e) {
      var r,
        i,
        n = [],
        o = [],
        a = (t.length - 1) * e,
        s = Math.floor(a);
      return (
        (a -= s),
        (n[0] = 0 === s ? s : s - 1),
        (n[1] = s),
        (n[2] = s > t.length - 2 ? s : s + 1),
        (n[3] = s > t.length - 3 ? s : s + 2),
        (s = t[n[0]]),
        (r = t[n[1]]),
        (i = t[n[2]]),
        (e = t[n[3]]),
        (t = a * (n = a * a)),
        (o[0] = h(s[0], r[0], i[0], e[0], a, n, t)),
        (o[1] = h(s[1], r[1], i[1], e[1], a, n, t)),
        (o[2] = h(s[2], r[2], i[2], e[2], a, n, t)),
        o
      );
    }
    var f = [],
      d = new THREE.Vector3(),
      p = new THREE.Vector3(),
      m = new THREE.Quaternion(),
      h = function (t, e, r, i, n, o, a) {
        return (
          (2 * (e - r) + (t = 0.5 * (r - t)) + (i = 0.5 * (i - e))) * a +
          (-3 * (e - r) - 2 * t - i) * o +
          t * n +
          e
        );
      };
    return function (t) {
      if (
        !1 !== this.isPlaying &&
        ((this.currentTime += t * this.timeScale), 0 !== this.weight)
      ) {
        if (
          ((t = this.data.length), this.currentTime > t || this.currentTime < 0)
        ) {
          if (!this.loop) return void this.stop();
          (this.currentTime %= t),
            this.currentTime < 0 && (this.currentTime += t),
            this.reset();
        }
        t = 0;
        for (var e = this.hierarchy.length; t < e; t++)
          for (
            var r = this.hierarchy[t],
              i = r.animationCache.animations[this.data.name],
              n = r.animationCache.blending,
              o = 0;
            o < 3;
            o++
          ) {
            var a = this.keyTypes[o],
              s = i.prevKey[a],
              h = i.nextKey[a];
            if (
              (0 < this.timeScale && h.time <= this.currentTime) ||
              (this.timeScale < 0 && s.time >= this.currentTime)
            ) {
              for (
                s = this.data.hierarchy[t].keys[0],
                  h = this.getNextKeyWith(a, t, 1);
                h.time < this.currentTime && h.index > s.index;

              )
                (s = h), (h = this.getNextKeyWith(a, t, h.index + 1));
              (i.prevKey[a] = s), (i.nextKey[a] = h);
            }
            (r.matrixAutoUpdate = !0), (r.matrixWorldNeedsUpdate = !0);
            var l = (this.currentTime - s.time) / (h.time - s.time),
              c = s[a],
              u = h[a];
            l < 0 && (l = 0),
              1 < l && (l = 1),
              "pos" === a
                ? this.interpolationType === THREE.AnimationHandler.LINEAR
                  ? ((p.x = c[0] + (u[0] - c[0]) * l),
                    (p.y = c[1] + (u[1] - c[1]) * l),
                    (p.z = c[2] + (u[2] - c[2]) * l),
                    (s = this.weight / (this.weight + n.positionWeight)),
                    r.position.lerp(p, s),
                    (n.positionWeight += this.weight))
                  : (this.interpolationType !==
                      THREE.AnimationHandler.CATMULLROM &&
                      this.interpolationType !==
                        THREE.AnimationHandler.CATMULLROM_FORWARD) ||
                    ((f[0] = this.getPrevKeyWith("pos", t, s.index - 1).pos),
                    (f[1] = c),
                    (f[2] = u),
                    (f[3] = this.getNextKeyWith("pos", t, h.index + 1).pos),
                    (h = E(f, (l = 0.33 * l + 0.33))),
                    (s = this.weight / (this.weight + n.positionWeight)),
                    (n.positionWeight += this.weight),
                    ((a = r.position).x += (h[0] - a.x) * s),
                    (a.y += (h[1] - a.y) * s),
                    (a.z += (h[2] - a.z) * s),
                    this.interpolationType ===
                      THREE.AnimationHandler.CATMULLROM_FORWARD &&
                      ((l = E(f, 1.01 * l)),
                      d.set(l[0], l[1], l[2]),
                      d.sub(a),
                      (d.y = 0),
                      d.normalize(),
                      (l = Math.atan2(d.x, d.z)),
                      r.rotation.set(0, l, 0)))
                : "rot" === a
                ? (THREE.Quaternion.slerp(c, u, m, l),
                  0 === n.quaternionWeight
                    ? (r.quaternion.copy(m), (n.quaternionWeight = this.weight))
                    : ((s = this.weight / (this.weight + n.quaternionWeight)),
                      THREE.Quaternion.slerp(r.quaternion, m, r.quaternion, s),
                      (n.quaternionWeight += this.weight)))
                : "scl" === a &&
                  ((p.x = c[0] + (u[0] - c[0]) * l),
                  (p.y = c[1] + (u[1] - c[1]) * l),
                  (p.z = c[2] + (u[2] - c[2]) * l),
                  (s = this.weight / (this.weight + n.scaleWeight)),
                  r.scale.lerp(p, s),
                  (n.scaleWeight += this.weight));
          }
        return !0;
      }
    };
  })()),
  (THREE.Animation.prototype.getNextKeyWith = function (t, e, r) {
    var i = this.data.hierarchy[e].keys;
    for (
      r =
        this.interpolationType === THREE.AnimationHandler.CATMULLROM ||
        this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD
          ? r < i.length - 1
            ? r
            : i.length - 1
          : r % i.length;
      r < i.length;
      r++
    )
      if (void 0 !== i[r][t]) return i[r];
    return this.data.hierarchy[e].keys[0];
  }),
  (THREE.Animation.prototype.getPrevKeyWith = function (t, e, r) {
    var i = this.data.hierarchy[e].keys;
    for (
      r =
        this.interpolationType === THREE.AnimationHandler.CATMULLROM ||
        this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD
          ? 0 < r
            ? r
            : 0
          : 0 <= r
          ? r
          : r + i.length;
      0 <= r;
      r--
    )
      if (void 0 !== i[r][t]) return i[r];
    return this.data.hierarchy[e].keys[i.length - 1];
  }),
  (THREE.KeyFrameAnimation = function (t) {
    (this.root = t.node),
      (this.data = THREE.AnimationHandler.init(t)),
      (this.hierarchy = THREE.AnimationHandler.parse(this.root)),
      (this.currentTime = 0),
      (this.timeScale = 0.001),
      (this.isPlaying = !1),
      (this.loop = this.isPaused = !0),
      (t = 0);
    for (var e = this.hierarchy.length; t < e; t++) {
      var r = this.data.hierarchy[t].sids,
        i = this.hierarchy[t];
      if (this.data.hierarchy[t].keys.length && r) {
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            a = this.getNextKeyWith(o, t, 0);
          a && a.apply(o);
        }
        (i.matrixAutoUpdate = !1),
          this.data.hierarchy[t].node.updateMatrix(),
          (i.matrixWorldNeedsUpdate = !0);
      }
    }
  }),
  (THREE.KeyFrameAnimation.prototype.play = function (t) {
    if (((this.currentTime = void 0 !== t ? t : 0), !1 === this.isPlaying)) {
      this.isPlaying = !0;
      var e,
        r,
        i = this.hierarchy.length;
      for (t = 0; t < i; t++)
        (e = this.hierarchy[t]),
          void 0 === (r = this.data.hierarchy[t]).animationCache &&
            ((r.animationCache = {}),
            (r.animationCache.prevKey = null),
            (r.animationCache.nextKey = null),
            (r.animationCache.originalMatrix = e.matrix)),
          (e = this.data.hierarchy[t].keys).length &&
            ((r.animationCache.prevKey = e[0]),
            (r.animationCache.nextKey = e[1]),
            (this.startTime = Math.min(e[0].time, this.startTime)),
            (this.endTime = Math.max(e[e.length - 1].time, this.endTime)));
      this.update(0);
    }
    (this.isPaused = !1), THREE.AnimationHandler.play(this);
  }),
  (THREE.KeyFrameAnimation.prototype.stop = function () {
    (this.isPaused = this.isPlaying = !1), THREE.AnimationHandler.stop(this);
    for (var t = 0; t < this.data.hierarchy.length; t++) {
      var e,
        r = this.hierarchy[t],
        i = this.data.hierarchy[t];
      void 0 !== i.animationCache &&
        ((e = i.animationCache.originalMatrix).copy(r.matrix),
        (r.matrix = e),
        delete i.animationCache);
    }
  }),
  (THREE.KeyFrameAnimation.prototype.update = function (t) {
    if (!1 !== this.isPlaying) {
      (this.currentTime += t * this.timeScale),
        (t = this.data.length),
        !0 === this.loop && this.currentTime > t && (this.currentTime %= t),
        (this.currentTime = Math.min(this.currentTime, t)),
        (t = 0);
      for (var e = this.hierarchy.length; t < e; t++) {
        var r = this.hierarchy[t],
          i = (n = this.data.hierarchy[t]).keys,
          n = n.animationCache;
        if (i.length) {
          var o = n.prevKey,
            a = n.nextKey;
          if (a.time <= this.currentTime) {
            for (; a.time < this.currentTime && a.index > o.index; )
              a = i[(o = a).index + 1];
            (n.prevKey = o), (n.nextKey = a);
          }
          a.time >= this.currentTime
            ? o.interpolate(a, this.currentTime)
            : o.interpolate(a, a.time),
            this.data.hierarchy[t].node.updateMatrix(),
            (r.matrixWorldNeedsUpdate = !0);
        }
      }
    }
  }),
  (THREE.KeyFrameAnimation.prototype.getNextKeyWith = function (t, e, r) {
    for (r %= (e = this.data.hierarchy[e].keys).length; r < e.length; r++)
      if (e[r].hasTarget(t)) return e[r];
    return e[0];
  }),
  (THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function (t, e, r) {
    for (
      e = this.data.hierarchy[e].keys, r = 0 <= r ? r : r + e.length;
      0 <= r;
      r--
    )
      if (e[r].hasTarget(t)) return e[r];
    return e[e.length - 1];
  }),
  (THREE.MorphAnimation = function (t) {
    (this.mesh = t),
      (this.frames = t.morphTargetInfluences.length),
      (this.currentTime = 0),
      (this.duration = 1e3),
      (this.loop = !0),
      (this.isPlaying = !1);
  }),
  (THREE.MorphAnimation.prototype = {
    play: function () {
      this.isPlaying = !0;
    },
    pause: function () {
      this.isPlaying = !1;
    },
    update: (function () {
      var r = 0,
        i = 0;
      return function (t) {
        var e;
        !1 !== this.isPlaying &&
          ((this.currentTime += t),
          !0 === this.loop &&
            this.currentTime > this.duration &&
            (this.currentTime %= this.duration),
          (this.currentTime = Math.min(this.currentTime, this.duration)),
          (t = this.duration / this.frames),
          (e = Math.floor(this.currentTime / t)) != i &&
            ((this.mesh.morphTargetInfluences[r] = 0),
            (this.mesh.morphTargetInfluences[i] = 1),
            (this.mesh.morphTargetInfluences[e] = 0),
            (r = i),
            (i = e)),
          (this.mesh.morphTargetInfluences[e] = (this.currentTime % t) / t),
          (this.mesh.morphTargetInfluences[r] =
            1 - this.mesh.morphTargetInfluences[e]));
      };
    })(),
  }),
  (THREE.BoxGeometry = function (t, e, r, i, n, o) {
    function a(t, e, r, i, n, o, a, s) {
      var h,
        l = y.widthSegments,
        c = y.heightSegments,
        u = n / 2,
        E = o / 2,
        f = y.vertices.length;
      ("x" === t && "y" === e) || ("y" === t && "x" === e)
        ? (h = "z")
        : ("x" === t && "z" === e) || ("z" === t && "x" === e)
        ? ((h = "y"), (c = y.depthSegments))
        : (("z" === t && "y" === e) || ("y" === t && "z" === e)) &&
          ((h = "x"), (l = y.depthSegments));
      var d = l + 1,
        p = c + 1,
        m = n / l,
        g = o / c,
        T = new THREE.Vector3();
      for (T[h] = 0 < a ? 1 : -1, n = 0; n < p; n++)
        for (o = 0; o < d; o++) {
          var v = new THREE.Vector3();
          (v[t] = (o * m - u) * r),
            (v[e] = (n * g - E) * i),
            (v[h] = a),
            y.vertices.push(v);
        }
      for (n = 0; n < c; n++)
        for (o = 0; o < l; o++)
          (E = o + d * n),
            (t = o + d * (n + 1)),
            (e = o + 1 + d * (n + 1)),
            (r = o + 1 + d * n),
            (i = new THREE.Vector2(o / l, 1 - n / c)),
            (a = new THREE.Vector2(o / l, 1 - (n + 1) / c)),
            (h = new THREE.Vector2((o + 1) / l, 1 - (n + 1) / c)),
            (u = new THREE.Vector2((o + 1) / l, 1 - n / c)),
            (E = new THREE.Face3(E + f, t + f, r + f)).normal.copy(T),
            E.vertexNormals.push(T.clone(), T.clone(), T.clone()),
            (E.materialIndex = s),
            y.faces.push(E),
            y.faceVertexUvs[0].push([i, a, u]),
            (E = new THREE.Face3(t + f, e + f, r + f)).normal.copy(T),
            E.vertexNormals.push(T.clone(), T.clone(), T.clone()),
            (E.materialIndex = s),
            y.faces.push(E),
            y.faceVertexUvs[0].push([a.clone(), h, u.clone()]);
    }
    THREE.Geometry.call(this),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        depth: r,
        widthSegments: i,
        heightSegments: n,
        depthSegments: o,
      }),
      (this.widthSegments = i || 1),
      (this.heightSegments = n || 1),
      (this.depthSegments = o || 1);
    var y = this;
    (n = e / 2),
      (o = r / 2),
      a("z", "y", -1, -1, r, e, (i = t / 2), 0),
      a("z", "y", 1, -1, r, e, -i, 1),
      a("x", "z", 1, 1, t, r, n, 2),
      a("x", "z", 1, -1, t, r, -n, 3),
      a("x", "y", 1, -1, t, e, o, 4),
      a("x", "y", -1, -1, t, e, -o, 5),
      this.mergeVertices();
  }),
  (THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.CircleGeometry = function (t, e, r, i) {
    THREE.Geometry.call(this),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: t,
        segments: e,
        thetaStart: r,
        thetaLength: i,
      }),
      (t = t || 50),
      (e = void 0 !== e ? Math.max(3, e) : 8),
      (r = void 0 !== r ? r : 0),
      (i = void 0 !== i ? i : 2 * Math.PI);
    var n = [],
      o = new THREE.Vector3(),
      a = new THREE.Vector2(0.5, 0.5);
    for (this.vertices.push(o), n.push(a), o = 0; o <= e; o++) {
      var s = new THREE.Vector3(),
        h = r + (o / e) * i;
      (s.x = t * Math.cos(h)),
        (s.y = t * Math.sin(h)),
        this.vertices.push(s),
        n.push(new THREE.Vector2((s.x / t + 1) / 2, (s.y / t + 1) / 2));
    }
    for (r = new THREE.Vector3(0, 0, 1), o = 1; o <= e; o++)
      this.faces.push(
        new THREE.Face3(o, o + 1, 0, [r.clone(), r.clone(), r.clone()])
      ),
        this.faceVertexUvs[0].push([n[o].clone(), n[o + 1].clone(), a.clone()]);
    this.computeFaceNormals(),
      (this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), t));
  }),
  (THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.CubeGeometry = function (t, e, r, i, n, o) {
    return (
      console.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry."),
      new THREE.BoxGeometry(t, e, r, i, n, o)
    );
  }),
  (THREE.CylinderGeometry = function (t, e, r, i, n, o) {
    THREE.Geometry.call(this),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: t,
        radiusBottom: e,
        height: r,
        radialSegments: i,
        heightSegments: n,
        openEnded: o,
      }),
      (t = void 0 !== t ? t : 20),
      (e = void 0 !== e ? e : 20),
      (i = i || 8),
      (n = n || 1),
      (o = void 0 !== o && o);
    for (
      var a = (r = void 0 !== r ? r : 100) / 2, s = [], h = [], l = 0;
      l <= n;
      l++
    ) {
      for (
        var c = [], u = [], E = (p = l / n) * (e - t) + t, f = 0;
        f <= i;
        f++
      ) {
        var d = f / i;
        ((m = new THREE.Vector3()).x = E * Math.sin(d * Math.PI * 2)),
          (m.y = -p * r + a),
          (m.z = E * Math.cos(d * Math.PI * 2)),
          this.vertices.push(m),
          c.push(this.vertices.length - 1),
          u.push(new THREE.Vector2(d, 1 - p));
      }
      s.push(c), h.push(u);
    }
    for (r = (e - t) / r, f = 0; f < i; f++)
      for (
        u =
          0 !== t
            ? ((c = this.vertices[s[0][f]].clone()),
              this.vertices[s[0][f + 1]].clone())
            : ((c = this.vertices[s[1][f]].clone()),
              this.vertices[s[1][f + 1]].clone()),
          c.setY(Math.sqrt(c.x * c.x + c.z * c.z) * r).normalize(),
          u.setY(Math.sqrt(u.x * u.x + u.z * u.z) * r).normalize(),
          l = 0;
        l < n;
        l++
      ) {
        var p = s[l][f],
          E = s[l + 1][f],
          d = s[l + 1][f + 1],
          m = s[l][f + 1],
          g = c.clone(),
          T = c.clone(),
          v = u.clone(),
          y = u.clone(),
          R = h[l][f].clone(),
          x = h[l + 1][f].clone(),
          H = h[l + 1][f + 1].clone(),
          _ = h[l][f + 1].clone();
        this.faces.push(new THREE.Face3(p, E, m, [g, T, y])),
          this.faceVertexUvs[0].push([R, x, _]),
          this.faces.push(new THREE.Face3(E, d, m, [T.clone(), v, y.clone()])),
          this.faceVertexUvs[0].push([x.clone(), H, _.clone()]);
      }
    if (!1 === o && 0 < t)
      for (this.vertices.push(new THREE.Vector3(0, a, 0)), f = 0; f < i; f++)
        (p = s[0][f]),
          (E = s[0][f + 1]),
          (d = this.vertices.length - 1),
          (g = new THREE.Vector3(0, 1, 0)),
          (T = new THREE.Vector3(0, 1, 0)),
          (v = new THREE.Vector3(0, 1, 0)),
          (R = h[0][f].clone()),
          (x = h[0][f + 1].clone()),
          (H = new THREE.Vector2(x.x, 0)),
          this.faces.push(new THREE.Face3(p, E, d, [g, T, v])),
          this.faceVertexUvs[0].push([R, x, H]);
    if (!1 === o && 0 < e)
      for (this.vertices.push(new THREE.Vector3(0, -a, 0)), f = 0; f < i; f++)
        (p = s[l][f + 1]),
          (E = s[l][f]),
          (d = this.vertices.length - 1),
          (g = new THREE.Vector3(0, -1, 0)),
          (T = new THREE.Vector3(0, -1, 0)),
          (v = new THREE.Vector3(0, -1, 0)),
          (R = h[l][f + 1].clone()),
          (x = h[l][f].clone()),
          (H = new THREE.Vector2(x.x, 1)),
          this.faces.push(new THREE.Face3(p, E, d, [g, T, v])),
          this.faceVertexUvs[0].push([R, x, H]);
    this.computeFaceNormals();
  }),
  (THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.ExtrudeGeometry = function (t, e) {
    void 0 !== t &&
      (THREE.Geometry.call(this),
      (this.type = "ExtrudeGeometry"),
      (t = t instanceof Array ? t : [t]),
      this.addShapeList(t, e),
      this.computeFaceNormals());
  }),
  (THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.ExtrudeGeometry.prototype.addShapeList = function (t, e) {
    for (var r = t.length, i = 0; i < r; i++) this.addShape(t[i], e);
  }),
  (THREE.ExtrudeGeometry.prototype.addShape = function (t, e) {
    function r(t, e, r) {
      return e || console.log("die"), e.clone().multiplyScalar(r).add(t);
    }
    function i(t, e, r) {
      var i = 1,
        i = t.x - e.x,
        n = t.y - e.y,
        o = r.x - t.x,
        a = r.y - t.y,
        s = i * i + n * n;
      if (1e-10 < Math.abs(i * a - n * o)) {
        var h = Math.sqrt(s),
          l = Math.sqrt(o * o + a * a),
          s = e.x - n / h;
        if (
          ((e = e.y + i / h),
          (i =
            (r =
              s +
              i *
                (o =
                  ((r.x - a / l - s) * a - (r.y + o / l - e) * o) /
                  (i * a - n * o)) -
              t.x) *
              r +
            (t = e + n * o - t.y) * t) <= 2)
        )
          return new THREE.Vector2(r, t);
        i = Math.sqrt(i / 2);
      } else
        (t = !1),
          1e-10 < i
            ? 1e-10 < o && (t = !0)
            : i < -1e-10
            ? o < -1e-10 && (t = !0)
            : Math.sign(n) == Math.sign(a) && (t = !0),
          (i = t
            ? ((r = -n), (t = i), Math.sqrt(s))
            : ((r = i), (t = n), Math.sqrt(s / 2)));
      return new THREE.Vector2(r / i, t / i);
    }
    function n(t, e) {
      var r, i;
      for (V = t.length; 0 <= --V; ) {
        (i = (r = V) - 1) < 0 && (i = t.length - 1);
        for (var n = 0, o = T + 2 * p, n = 0; n < o; n++) {
          var a = (a = e + r + (s = U * n)) + w,
            s = (s = e + i + s) + w,
            h = (h = e + i + (l = U * (n + 1))) + w,
            l = (l = e + r + l) + w;
          b.faces.push(new THREE.Face3(a, s, l, null, null, x)),
            b.faces.push(new THREE.Face3(s, h, l, null, null, x)),
            (a = H.generateSideWallUV(b, a, s, h, l)),
            b.faceVertexUvs[0].push([a[0], a[1], a[3]]),
            b.faceVertexUvs[0].push([a[1], a[2], a[3]]);
        }
      }
    }
    function o(t, e, r) {
      b.vertices.push(new THREE.Vector3(t, e, r));
    }
    function a(t, e, r) {
      (t += w),
        (e += w),
        (r += w),
        b.faces.push(new THREE.Face3(t, e, r, null, null, R)),
        (t = H.generateTopUV(b, t, e, r)),
        b.faceVertexUvs[0].push(t);
    }
    var s,
      h,
      l,
      c,
      u,
      E = void 0 !== e.amount ? e.amount : 100,
      f = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
      d = void 0 !== e.bevelSize ? e.bevelSize : f - 2,
      p = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
      m = void 0 === e.bevelEnabled || e.bevelEnabled,
      g = void 0 !== e.curveSegments ? e.curveSegments : 12,
      T = void 0 !== e.steps ? e.steps : 1,
      v = e.extrudePath,
      y = !1,
      R = e.material,
      x = e.extrudeMaterial,
      H =
        void 0 !== e.UVGenerator
          ? e.UVGenerator
          : THREE.ExtrudeGeometry.WorldUVGenerator;
    v &&
      ((s = v.getSpacedPoints(T)),
      (m = !(y = !0)),
      (h =
        void 0 !== e.frames
          ? e.frames
          : new THREE.TubeGeometry.FrenetFrames(v, T, !1)),
      (l = new THREE.Vector3()),
      (c = new THREE.Vector3()),
      (u = new THREE.Vector3())),
      m || (d = f = p = 0);
    var _,
      b = this,
      w = this.vertices.length,
      g = (v = t.extractPoints(g)).shape,
      M = v.holes;
    if ((v = !THREE.Shape.Utils.isClockWise(g))) {
      for (g = g.reverse(), A = 0, L = M.length; A < L; A++)
        (_ = M[A]), THREE.Shape.Utils.isClockWise(_) && (M[A] = _.reverse());
      v = !1;
    }
    for (
      var S = THREE.Shape.Utils.triangulateShape(g, M),
        C = g,
        A = 0,
        L = M.length;
      A < L;
      A++
    )
      (_ = M[A]), (g = g.concat(_));
    for (
      var P,
        F,
        D,
        U = g.length,
        B = S.length,
        v = [],
        V = 0,
        z = C.length,
        k = z - 1,
        N = V + 1;
      V < z;
      V++, k++, N++
    )
      k === z && (k = 0), N === z && (N = 0), (v[V] = i(C[V], C[k], C[N]));
    var O,
      I = [],
      G = v.concat();
    for (A = 0, L = M.length; A < L; A++) {
      for (
        _ = M[A], O = [], V = 0, k = (z = _.length) - 1, N = V + 1;
        V < z;
        V++, k++, N++
      )
        k === z && (k = 0), N === z && (N = 0), (O[V] = i(_[V], _[k], _[N]));
      I.push(O), (G = G.concat(O));
    }
    for (k = 0; k < p; k++) {
      for (
        P = f * (1 - (z = k / p)),
          N = d * Math.sin((z * Math.PI) / 2),
          V = 0,
          z = C.length;
        V < z;
        V++
      )
        o((F = r(C[V], v[V], N)).x, F.y, -P);
      for (A = 0, L = M.length; A < L; A++)
        for (_ = M[A], O = I[A], V = 0, z = _.length; V < z; V++)
          o((F = r(_[V], O[V], N)).x, F.y, -P);
    }
    for (N = d, V = 0; V < U; V++)
      (F = m ? r(g[V], G[V], N) : g[V]),
        y
          ? (c.copy(h.normals[0]).multiplyScalar(F.x),
            l.copy(h.binormals[0]).multiplyScalar(F.y),
            u.copy(s[0]).add(c).add(l),
            o(u.x, u.y, u.z))
          : o(F.x, F.y, 0);
    for (z = 1; z <= T; z++)
      for (V = 0; V < U; V++)
        (F = m ? r(g[V], G[V], N) : g[V]),
          y
            ? (c.copy(h.normals[z]).multiplyScalar(F.x),
              l.copy(h.binormals[z]).multiplyScalar(F.y),
              u.copy(s[z]).add(c).add(l),
              o(u.x, u.y, u.z))
            : o(F.x, F.y, (E / T) * z);
    for (k = p - 1; 0 <= k; k--) {
      for (
        P = f * (1 - (z = k / p)),
          N = d * Math.sin((z * Math.PI) / 2),
          V = 0,
          z = C.length;
        V < z;
        V++
      )
        o((F = r(C[V], v[V], N)).x, F.y, E + P);
      for (A = 0, L = M.length; A < L; A++)
        for (_ = M[A], O = I[A], V = 0, z = _.length; V < z; V++)
          (F = r(_[V], O[V], N)),
            y ? o(F.x, F.y + s[T - 1].y, s[T - 1].x + P) : o(F.x, F.y, E + P);
    }
    !(function () {
      if (m) {
        var t = 0 * U;
        for (V = 0; V < B; V++) a((D = S[V])[2] + t, D[1] + t, D[0] + t);
        for (t = T + 2 * p, t *= U, V = 0; V < B; V++)
          a((D = S[V])[0] + t, D[1] + t, D[2] + t);
      } else {
        for (V = 0; V < B; V++) a((D = S[V])[2], D[1], D[0]);
        for (V = 0; V < B; V++)
          a((D = S[V])[0] + U * T, D[1] + U * T, D[2] + U * T);
      }
    })(),
      (function () {
        var t = 0;
        for (n(C, t), t += C.length, A = 0, L = M.length; A < L; A++)
          n((_ = M[A]), t), (t += _.length);
      })();
  }),
  (THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function (t, e, r, i) {
      return (
        (e = (t = t.vertices)[e]),
        (r = t[r]),
        (i = t[i]),
        [
          new THREE.Vector2(e.x, e.y),
          new THREE.Vector2(r.x, r.y),
          new THREE.Vector2(i.x, i.y),
        ]
      );
    },
    generateSideWallUV: function (t, e, r, i, n) {
      return (
        (e = (t = t.vertices)[e]),
        (r = t[r]),
        (i = t[i]),
        (n = t[n]),
        Math.abs(e.y - r.y) < 0.01
          ? [
              new THREE.Vector2(e.x, 1 - e.z),
              new THREE.Vector2(r.x, 1 - r.z),
              new THREE.Vector2(i.x, 1 - i.z),
              new THREE.Vector2(n.x, 1 - n.z),
            ]
          : [
              new THREE.Vector2(e.y, 1 - e.z),
              new THREE.Vector2(r.y, 1 - r.z),
              new THREE.Vector2(i.y, 1 - i.z),
              new THREE.Vector2(n.y, 1 - n.z),
            ]
      );
    },
  }),
  (THREE.ShapeGeometry = function (t, e) {
    THREE.Geometry.call(this),
      !(this.type = "ShapeGeometry") == t instanceof Array && (t = [t]),
      this.addShapeList(t, e),
      this.computeFaceNormals();
  }),
  (THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.ShapeGeometry.prototype.addShapeList = function (t, e) {
    for (var r = 0, i = t.length; r < i; r++) this.addShape(t[r], e);
    return this;
  }),
  (THREE.ShapeGeometry.prototype.addShape = function (t, e) {
    void 0 === e && (e = {});
    var r,
      i,
      n = e.material,
      o =
        void 0 === e.UVGenerator
          ? THREE.ExtrudeGeometry.WorldUVGenerator
          : e.UVGenerator,
      a = this.vertices.length,
      s = t.extractPoints(void 0 !== e.curveSegments ? e.curveSegments : 12),
      h = s.shape,
      l = s.holes;
    if (!THREE.Shape.Utils.isClockWise(h))
      for (h = h.reverse(), s = 0, r = l.length; s < r; s++)
        (i = l[s]), THREE.Shape.Utils.isClockWise(i) && (l[s] = i.reverse());
    var c = THREE.Shape.Utils.triangulateShape(h, l);
    for (s = 0, r = l.length; s < r; s++) (i = l[s]), (h = h.concat(i));
    for (l = h.length, r = c.length, s = 0; s < l; s++)
      (i = h[s]), this.vertices.push(new THREE.Vector3(i.x, i.y, 0));
    for (s = 0; s < r; s++)
      (h = (l = c[s])[0] + a),
        (i = l[1] + a),
        (l = l[2] + a),
        this.faces.push(new THREE.Face3(h, i, l, null, null, n)),
        this.faceVertexUvs[0].push(o.generateTopUV(this, h, i, l));
  }),
  (THREE.LatheGeometry = function (t, e, r, i) {
    THREE.Geometry.call(this),
      (this.type = "LatheGeometry"),
      (this.parameters = { points: t, segments: e, phiStart: r, phiLength: i }),
      (e = e || 12),
      (r = r || 0),
      (i = i || 2 * Math.PI);
    for (var n = 1 / (t.length - 1), o = 1 / e, a = 0, s = e; a <= s; a++)
      for (
        var h = r + a * o * i,
          l = Math.cos(h),
          c = Math.sin(h),
          h = 0,
          u = t.length;
        h < u;
        h++
      ) {
        var E = t[h];
        ((f = new THREE.Vector3()).x = l * E.x - c * E.y),
          (f.y = c * E.x + l * E.y),
          (f.z = E.z),
          this.vertices.push(f);
      }
    for (r = t.length, a = 0, s = e; a < s; a++)
      for (h = 0, u = t.length - 1; h < u; h++) {
        (e = c = h + r * a), (i = c + r);
        var f,
          l = c + 1 + r,
          c = c + 1,
          d = (E = a * o) + o,
          p = (f = h * n) + n;
        this.faces.push(new THREE.Face3(e, i, c)),
          this.faceVertexUvs[0].push([
            new THREE.Vector2(E, f),
            new THREE.Vector2(d, f),
            new THREE.Vector2(E, p),
          ]),
          this.faces.push(new THREE.Face3(i, l, c)),
          this.faceVertexUvs[0].push([
            new THREE.Vector2(d, f),
            new THREE.Vector2(d, p),
            new THREE.Vector2(E, p),
          ]);
      }
    this.mergeVertices(),
      this.computeFaceNormals(),
      this.computeVertexNormals();
  }),
  (THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.PlaneGeometry = function (t, e, r, i) {
    console.info(
      "THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint."
    ),
      THREE.Geometry.call(this),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: r,
        heightSegments: i,
      }),
      this.fromBufferGeometry(new THREE.PlaneBufferGeometry(t, e, r, i));
  }),
  (THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.PlaneBufferGeometry = function (t, e, r, i) {
    THREE.BufferGeometry.call(this),
      (this.type = "PlaneBufferGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: r,
        heightSegments: i,
      });
    var n = t / 2,
      o = e / 2,
      a = (r = r || 1) + 1,
      s = (i = i || 1) + 1,
      h = t / r,
      l = e / i;
    (e = new Float32Array(a * s * 3)), (t = new Float32Array(a * s * 3));
    for (var c = new Float32Array(a * s * 2), u = 0, E = 0, f = 0; f < s; f++)
      for (var d = f * l - o, p = 0; p < a; p++)
        (e[u] = p * h - n),
          (e[u + 1] = -d),
          (t[u + 2] = 1),
          (c[E] = p / r),
          (c[E + 1] = 1 - f / i),
          (u += 3),
          (E += 2);
    for (
      u = 0,
        n = new (65535 < e.length / 3 ? Uint32Array : Uint16Array)(r * i * 6),
        f = 0;
      f < i;
      f++
    )
      for (p = 0; p < r; p++)
        (o = p + a * (f + 1)),
          (s = p + 1 + a * (f + 1)),
          (h = p + 1 + a * f),
          (n[u] = p + a * f),
          (n[u + 1] = o),
          (n[u + 2] = h),
          (n[u + 3] = o),
          (n[u + 4] = s),
          (n[u + 5] = h),
          (u += 6);
    this.addAttribute("index", new THREE.BufferAttribute(n, 1)),
      this.addAttribute("position", new THREE.BufferAttribute(e, 3)),
      this.addAttribute("normal", new THREE.BufferAttribute(t, 3)),
      this.addAttribute("uv", new THREE.BufferAttribute(c, 2));
  }),
  (THREE.PlaneBufferGeometry.prototype = Object.create(
    THREE.BufferGeometry.prototype
  )),
  (THREE.RingGeometry = function (t, e, r, i, n, o) {
    THREE.Geometry.call(this),
      (this.type = "RingGeometry"),
      (this.parameters = {
        innerRadius: t,
        outerRadius: e,
        thetaSegments: r,
        phiSegments: i,
        thetaStart: n,
        thetaLength: o,
      }),
      (t = t || 0),
      (e = e || 50),
      (n = void 0 !== n ? n : 0),
      (o = void 0 !== o ? o : 2 * Math.PI),
      (r = void 0 !== r ? Math.max(3, r) : 8);
    var a,
      s = [],
      h = t,
      l = (e - t) / (i = void 0 !== i ? Math.max(1, i) : 8);
    for (t = 0; t < i + 1; t++) {
      for (a = 0; a < r + 1; a++) {
        var c = new THREE.Vector3(),
          u = n + (a / r) * o;
        (c.x = h * Math.cos(u)),
          (c.y = h * Math.sin(u)),
          this.vertices.push(c),
          s.push(new THREE.Vector2((c.x / e + 1) / 2, (c.y / e + 1) / 2));
      }
      h += l;
    }
    for (e = new THREE.Vector3(0, 0, 1), t = 0; t < i; t++)
      for (n = t * (r + 1), a = 0; a < r; a++)
        (o = u = a + n),
          (l = u + r + 1),
          (c = u + r + 2),
          this.faces.push(
            new THREE.Face3(o, l, c, [e.clone(), e.clone(), e.clone()])
          ),
          this.faceVertexUvs[0].push([
            s[o].clone(),
            s[l].clone(),
            s[c].clone(),
          ]),
          (l = (o = u) + r + 2),
          (c = u + 1),
          this.faces.push(
            new THREE.Face3(o, l, c, [e.clone(), e.clone(), e.clone()])
          ),
          this.faceVertexUvs[0].push([
            s[o].clone(),
            s[l].clone(),
            s[c].clone(),
          ]);
    this.computeFaceNormals(),
      (this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), h));
  }),
  (THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.SphereGeometry = function (t, e, r, i, n, o, a) {
    THREE.Geometry.call(this),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: r,
        phiStart: i,
        phiLength: n,
        thetaStart: o,
        thetaLength: a,
      }),
      (t = t || 50),
      (e = Math.max(3, Math.floor(e) || 8)),
      (r = Math.max(2, Math.floor(r) || 6)),
      (i = void 0 !== i ? i : 0),
      (n = void 0 !== n ? n : 2 * Math.PI),
      (o = void 0 !== o ? o : 0),
      (a = void 0 !== a ? a : Math.PI);
    for (var s = [], h = [], l = 0; l <= r; l++) {
      for (var c = [], u = [], E = 0; E <= e; E++) {
        var f = E / e,
          d = l / r;
        ((p = new THREE.Vector3()).x =
          -t * Math.cos(i + f * n) * Math.sin(o + d * a)),
          (p.y = t * Math.cos(o + d * a)),
          (p.z = t * Math.sin(i + f * n) * Math.sin(o + d * a)),
          this.vertices.push(p),
          c.push(this.vertices.length - 1),
          u.push(new THREE.Vector2(f, 1 - d));
      }
      s.push(c), h.push(u);
    }
    for (l = 0; l < r; l++)
      for (E = 0; E < e; E++) {
        (i = s[l][E + 1]),
          (n = s[l][E]),
          (o = s[l + 1][E]),
          (a = s[l + 1][E + 1]);
        var c = this.vertices[i].clone().normalize(),
          u = this.vertices[n].clone().normalize(),
          f = this.vertices[o].clone().normalize(),
          d = this.vertices[a].clone().normalize(),
          p = h[l][E + 1].clone(),
          m = h[l][E].clone(),
          g = h[l + 1][E].clone(),
          T = h[l + 1][E + 1].clone();
        Math.abs(this.vertices[i].y) === t
          ? ((p.x = (p.x + m.x) / 2),
            this.faces.push(new THREE.Face3(i, o, a, [c, f, d])),
            this.faceVertexUvs[0].push([p, g, T]))
          : Math.abs(this.vertices[o].y) === t
          ? ((g.x = (g.x + T.x) / 2),
            this.faces.push(new THREE.Face3(i, n, o, [c, u, f])),
            this.faceVertexUvs[0].push([p, m, g]))
          : (this.faces.push(new THREE.Face3(i, n, a, [c, u, d])),
            this.faceVertexUvs[0].push([p, m, T]),
            this.faces.push(
              new THREE.Face3(n, o, a, [u.clone(), f, d.clone()])
            ),
            this.faceVertexUvs[0].push([m.clone(), g, T.clone()]));
      }
    this.computeFaceNormals(),
      (this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), t));
  }),
  (THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.TextGeometry = function (t, e) {
    e = e || {};
    t = THREE.FontUtils.generateShapes(t, e);
    (e.amount = void 0 !== e.height ? e.height : 50),
      void 0 === e.bevelThickness && (e.bevelThickness = 10),
      void 0 === e.bevelSize && (e.bevelSize = 8),
      void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
      THREE.ExtrudeGeometry.call(this, t, e),
      (this.type = "TextGeometry");
  }),
  (THREE.TextGeometry.prototype = Object.create(
    THREE.ExtrudeGeometry.prototype
  )),
  (THREE.TorusGeometry = function (t, e, r, i, n) {
    THREE.Geometry.call(this),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: t,
        tube: e,
        radialSegments: r,
        tubularSegments: i,
        arc: n,
      }),
      (t = t || 100),
      (e = e || 40),
      (r = r || 8),
      (i = i || 6),
      (n = n || 2 * Math.PI);
    for (var o = new THREE.Vector3(), a = [], s = [], h = 0; h <= r; h++)
      for (var l = 0; l <= i; l++) {
        var c = (l / i) * n,
          u = (h / r) * Math.PI * 2;
        (o.x = t * Math.cos(c)), (o.y = t * Math.sin(c));
        var E = new THREE.Vector3();
        (E.x = (t + e * Math.cos(u)) * Math.cos(c)),
          (E.y = (t + e * Math.cos(u)) * Math.sin(c)),
          (E.z = e * Math.sin(u)),
          this.vertices.push(E),
          a.push(new THREE.Vector2(l / i, h / r)),
          s.push(E.clone().sub(o).normalize());
      }
    for (h = 1; h <= r; h++)
      for (l = 1; l <= i; l++)
        (t = (i + 1) * h + l - 1),
          (e = (i + 1) * (h - 1) + l - 1),
          (n = (i + 1) * (h - 1) + l),
          (o = (i + 1) * h + l),
          (c = new THREE.Face3(t, e, o, [
            s[t].clone(),
            s[e].clone(),
            s[o].clone(),
          ])),
          this.faces.push(c),
          this.faceVertexUvs[0].push([
            a[t].clone(),
            a[e].clone(),
            a[o].clone(),
          ]),
          (c = new THREE.Face3(e, n, o, [
            s[e].clone(),
            s[n].clone(),
            s[o].clone(),
          ])),
          this.faces.push(c),
          this.faceVertexUvs[0].push([
            a[e].clone(),
            a[n].clone(),
            a[o].clone(),
          ]);
    this.computeFaceNormals();
  }),
  (THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.TorusKnotGeometry = function (t, e, r, i, n, o, a) {
    function s(t, e, r, i, n) {
      var o = Math.cos(t),
        a = Math.sin(t);
      return (
        (t *= e / r),
        (o *= i * (2 + (e = Math.cos(t))) * 0.5),
        (a = i * (2 + e) * a * 0.5),
        (i = n * i * Math.sin(t) * 0.5),
        new THREE.Vector3(o, a, i)
      );
    }
    THREE.Geometry.call(this),
      (this.type = "TorusKnotGeometry"),
      (this.parameters = {
        radius: t,
        tube: e,
        radialSegments: r,
        tubularSegments: i,
        p: n,
        q: o,
        heightScale: a,
      }),
      (t = t || 100),
      (e = e || 40),
      (r = r || 64),
      (i = i || 8),
      (n = n || 2),
      (o = o || 3),
      (a = a || 1);
    for (
      var h = Array(r),
        l = new THREE.Vector3(),
        c = new THREE.Vector3(),
        u = new THREE.Vector3(),
        E = 0;
      E < r;
      ++E
    ) {
      h[E] = Array(i);
      var f = s((d = (E / r) * 2 * n * Math.PI), o, n, t, a),
        d = s(d + 0.01, o, n, t, a);
      for (
        l.subVectors(d, f),
          c.addVectors(d, f),
          u.crossVectors(l, c),
          c.crossVectors(u, l),
          u.normalize(),
          c.normalize(),
          d = 0;
        d < i;
        ++d
      ) {
        var p = (d / i) * 2 * Math.PI,
          m = -e * Math.cos(p),
          p = e * Math.sin(p),
          g = new THREE.Vector3();
        (g.x = f.x + m * c.x + p * u.x),
          (g.y = f.y + m * c.y + p * u.y),
          (g.z = f.z + m * c.z + p * u.z),
          (h[E][d] = this.vertices.push(g) - 1);
      }
    }
    for (E = 0; E < r; ++E)
      for (d = 0; d < i; ++d)
        (n = (E + 1) % r),
          (o = (d + 1) % i),
          (t = h[E][d]),
          (e = h[n][d]),
          (n = h[n][o]),
          (o = h[E][o]),
          (a = new THREE.Vector2(E / r, d / i)),
          (l = new THREE.Vector2((E + 1) / r, d / i)),
          (c = new THREE.Vector2((E + 1) / r, (d + 1) / i)),
          (u = new THREE.Vector2(E / r, (d + 1) / i)),
          this.faces.push(new THREE.Face3(t, e, o)),
          this.faceVertexUvs[0].push([a, l, u]),
          this.faces.push(new THREE.Face3(e, n, o)),
          this.faceVertexUvs[0].push([l.clone(), c, u.clone()]);
    this.computeFaceNormals(), this.computeVertexNormals();
  }),
  (THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.TubeGeometry = function (t, e, r, i, n) {
    THREE.Geometry.call(this),
      (this.type = "TubeGeometry"),
      (this.parameters = {
        path: t,
        segments: e,
        radius: r,
        radialSegments: i,
        closed: n,
      }),
      (r = r || 1),
      (i = i || 8),
      (n = n || !1);
    var o,
      a,
      s,
      h,
      l,
      c,
      u = [],
      E = (e = e || 64) + 1,
      f = new THREE.Vector3(),
      d = new THREE.TubeGeometry.FrenetFrames(t, e, n),
      p = d.normals,
      m = d.binormals;
    for (
      this.tangents = d.tangents, this.normals = p, this.binormals = m, d = 0;
      d < E;
      d++
    )
      for (
        u[d] = [],
          s = d / (E - 1),
          c = t.getPointAt(s),
          o = p[d],
          a = m[d],
          s = 0;
        s < i;
        s++
      )
        (h = (s / i) * 2 * Math.PI),
          (l = -r * Math.cos(h)),
          (h = r * Math.sin(h)),
          f.copy(c),
          (f.x += l * o.x + h * a.x),
          (f.y += l * o.y + h * a.y),
          (f.z += l * o.z + h * a.z),
          (u[d][s] = this.vertices.push(new THREE.Vector3(f.x, f.y, f.z)) - 1);
    for (d = 0; d < e; d++)
      for (s = 0; s < i; s++)
        (E = n ? (d + 1) % e : d + 1),
          (f = (s + 1) % i),
          (t = u[d][s]),
          (r = u[E][s]),
          (E = u[E][f]),
          (f = u[d][f]),
          (p = new THREE.Vector2(d / e, s / i)),
          (m = new THREE.Vector2((d + 1) / e, s / i)),
          (o = new THREE.Vector2((d + 1) / e, (s + 1) / i)),
          (a = new THREE.Vector2(d / e, (s + 1) / i)),
          this.faces.push(new THREE.Face3(t, r, f)),
          this.faceVertexUvs[0].push([p, m, a]),
          this.faces.push(new THREE.Face3(r, E, f)),
          this.faceVertexUvs[0].push([m.clone(), o, a.clone()]);
    this.computeFaceNormals(), this.computeVertexNormals();
  }),
  (THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype)),
  (THREE.TubeGeometry.FrenetFrames = function (t, e, r) {
    new THREE.Vector3();
    var i = new THREE.Vector3();
    new THREE.Vector3();
    var n,
      o,
      a,
      s = [],
      h = [],
      l = [],
      c = new THREE.Vector3(),
      u = new THREE.Matrix4();
    for (
      e += 1, this.tangents = s, this.normals = h, this.binormals = l, n = 0;
      n < e;
      n++
    )
      (o = n / (e - 1)), (s[n] = t.getTangentAt(o)), s[n].normalize();
    for (
      h[0] = new THREE.Vector3(),
        l[0] = new THREE.Vector3(),
        t = Number.MAX_VALUE,
        n = Math.abs(s[0].x),
        o = Math.abs(s[0].y),
        a = Math.abs(s[0].z),
        n <= t && ((t = n), i.set(1, 0, 0)),
        o <= t && ((t = o), i.set(0, 1, 0)),
        a <= t && i.set(0, 0, 1),
        c.crossVectors(s[0], i).normalize(),
        h[0].crossVectors(s[0], c),
        l[0].crossVectors(s[0], h[0]),
        n = 1;
      n < e;
      n++
    )
      (h[n] = h[n - 1].clone()),
        (l[n] = l[n - 1].clone()),
        c.crossVectors(s[n - 1], s[n]),
        1e-4 < c.length() &&
          (c.normalize(),
          (i = Math.acos(THREE.Math.clamp(s[n - 1].dot(s[n]), -1, 1))),
          h[n].applyMatrix4(u.makeRotationAxis(c, i))),
        l[n].crossVectors(s[n], h[n]);
    if (r)
      for (
        i = Math.acos(THREE.Math.clamp(h[0].dot(h[e - 1]), -1, 1)),
          i /= e - 1,
          0 < s[0].dot(c.crossVectors(h[0], h[e - 1])) && (i = -i),
          n = 1;
        n < e;
        n++
      )
        h[n].applyMatrix4(u.makeRotationAxis(s[n], i * n)),
          l[n].crossVectors(s[n], h[n]);
  }),
  (THREE.PolyhedronGeometry = function (t, e, r, i) {
    function E(t) {
      var e = t.normalize().clone();
      e.index = d.vertices.push(e) - 1;
      var r = Math.atan2(t.z, -t.x) / 2 / Math.PI + 0.5;
      return (
        (t =
          Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z)) / Math.PI + 0.5),
        (e.uv = new THREE.Vector2(r, 1 - t)),
        e
      );
    }
    function f(t, e, r) {
      var i = new THREE.Face3(t.index, e.index, r.index, [
        t.clone(),
        e.clone(),
        r.clone(),
      ]);
      d.faces.push(i),
        p.copy(t).add(e).add(r).divideScalar(3),
        (i = Math.atan2(p.z, -p.x)),
        d.faceVertexUvs[0].push([n(t.uv, t, i), n(e.uv, e, i), n(r.uv, r, i)]);
    }
    function n(t, e, r) {
      return (
        r < 0 && 1 === t.x && (t = new THREE.Vector2(t.x - 1, t.y)),
        0 === e.x &&
          0 === e.z &&
          (t = new THREE.Vector2(r / 2 / Math.PI + 0.5, t.y)),
        t.clone()
      );
    }
    THREE.Geometry.call(this),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: t, indices: e, radius: r, detail: i }),
      (r = r || 1),
      (i = i || 0);
    for (var d = this, o = 0, a = t.length; o < a; o += 3)
      E(new THREE.Vector3(t[o], t[o + 1], t[o + 2]));
    t = this.vertices;
    for (var s = [], h = (o = 0), a = e.length; o < a; o += 3, h++) {
      var l = t[e[o]],
        c = t[e[o + 1]],
        u = t[e[o + 2]];
      s[h] = new THREE.Face3(l.index, c.index, u.index, [
        l.clone(),
        c.clone(),
        u.clone(),
      ]);
    }
    for (var p = new THREE.Vector3(), o = 0, a = s.length; o < a; o++)
      !(function (t, e) {
        var r = Math.pow(2, e);
        Math.pow(4, e);
        for (
          var i = E(d.vertices[t.a]),
            n = E(d.vertices[t.b]),
            o = E(d.vertices[t.c]),
            a = [],
            s = 0;
          s <= r;
          s++
        ) {
          a[s] = [];
          for (
            var h = E(i.clone().lerp(o, s / r)),
              l = E(n.clone().lerp(o, s / r)),
              c = r - s,
              u = 0;
            u <= c;
            u++
          )
            a[s][u] = 0 == u && s == r ? h : E(h.clone().lerp(l, u / c));
        }
        for (s = 0; s < r; s++)
          for (u = 0; u < 2 * (r - s) - 1; u++)
            (i = Math.floor(u / 2)),
              0 == u % 2
                ? f(a[s][i + 1], a[s + 1][i], a[s][i])
                : f(a[s][i + 1], a[s + 1][i + 1], a[s + 1][i]);
      })(s[o], i);
    for (o = 0, a = this.faceVertexUvs[0].length; o < a; o++)
      (i = (e = this.faceVertexUvs[0][o])[0].x),
        (t = e[1].x),
        (s = e[2].x),
        (h = Math.max(i, Math.max(t, s))),
        (l = Math.min(i, Math.min(t, s))),
        0.9 < h &&
          l < 0.1 &&
          (i < 0.2 && (e[0].x += 1),
          t < 0.2 && (e[1].x += 1),
          s < 0.2 && (e[2].x += 1));
    for (o = 0, a = this.vertices.length; o < a; o++)
      this.vertices[o].multiplyScalar(r);
    this.mergeVertices(),
      this.computeFaceNormals(),
      (this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), r));
  }),
  (THREE.PolyhedronGeometry.prototype = Object.create(
    THREE.Geometry.prototype
  )),
  (THREE.DodecahedronGeometry = function (t, e) {
    this.parameters = { radius: t, detail: e };
    var r = (1 + Math.sqrt(5)) / 2,
      i = 1 / r;
    THREE.PolyhedronGeometry.call(
      this,
      [
        -1,
        -1,
        -1,
        -1,
        -1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        0,
        -i,
        -r,
        0,
        -i,
        r,
        0,
        i,
        -r,
        0,
        i,
        r,
        -i,
        -r,
        0,
        -i,
        r,
        0,
        i,
        -r,
        0,
        i,
        r,
        0,
        -r,
        0,
        -i,
        r,
        0,
        -i,
        -r,
        0,
        i,
        r,
        0,
        i,
      ],
      [
        3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8,
        17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18,
        0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13,
        18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5,
        11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14,
        5, 1, 5, 9,
      ],
      t,
      e
    );
  }),
  (THREE.DodecahedronGeometry.prototype = Object.create(
    THREE.Geometry.prototype
  )),
  (THREE.IcosahedronGeometry = function (t, e) {
    var r = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(
      this,
      [
        -1,
        r,
        0,
        1,
        r,
        0,
        -1,
        -r,
        0,
        1,
        -r,
        0,
        0,
        -1,
        r,
        0,
        1,
        r,
        0,
        -1,
        -r,
        0,
        1,
        -r,
        r,
        0,
        -1,
        r,
        0,
        1,
        -r,
        0,
        -1,
        -r,
        0,
        1,
      ],
      [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ],
      t,
      e
    ),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: t, detail: e });
  }),
  (THREE.IcosahedronGeometry.prototype = Object.create(
    THREE.Geometry.prototype
  )),
  (THREE.OctahedronGeometry = function (t, e) {
    (this.parameters = { radius: t, detail: e }),
      THREE.PolyhedronGeometry.call(
        this,
        [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
        [
          0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4,
          2,
        ],
        t,
        e
      ),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: t, detail: e });
  }),
  (THREE.OctahedronGeometry.prototype = Object.create(
    THREE.Geometry.prototype
  )),
  (THREE.TetrahedronGeometry = function (t, e) {
    THREE.PolyhedronGeometry.call(
      this,
      [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
      [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
      t,
      e
    ),
      (this.type = "TetrahedronGeometry"),
      (this.parameters = { radius: t, detail: e });
  }),
  (THREE.TetrahedronGeometry.prototype = Object.create(
    THREE.Geometry.prototype
  )),
  (THREE.ParametricGeometry = function (t, e, r) {
    THREE.Geometry.call(this),
      (this.type = "ParametricGeometry"),
      (this.parameters = { func: t, slices: e, stacks: r });
    for (
      var i,
        n,
        o,
        a,
        s,
        h,
        l,
        c = this.vertices,
        u = this.faces,
        E = this.faceVertexUvs[0],
        f = e + 1,
        d = 0;
      d <= r;
      d++
    )
      for (o = d / r, i = 0; i <= e; i++) (n = t((n = i / e), o)), c.push(n);
    for (d = 0; d < r; d++)
      for (i = 0; i < e; i++)
        (c = (t = d * f + i) + 1),
          (o = (d + 1) * f + i + 1),
          (n = (d + 1) * f + i),
          (a = new THREE.Vector2(i / e, d / r)),
          (s = new THREE.Vector2((i + 1) / e, d / r)),
          (h = new THREE.Vector2((i + 1) / e, (d + 1) / r)),
          (l = new THREE.Vector2(i / e, (d + 1) / r)),
          u.push(new THREE.Face3(t, c, n)),
          E.push([a, s, l]),
          u.push(new THREE.Face3(c, o, n)),
          E.push([s.clone(), h, l.clone()]);
    this.computeFaceNormals(), this.computeVertexNormals();
  }),
  (THREE.ParametricGeometry.prototype = Object.create(
    THREE.Geometry.prototype
  )),
  (THREE.AxisHelper = function (t) {
    t = t || 1;
    var e = new Float32Array([
        0,
        0,
        0,
        t,
        0,
        0,
        0,
        0,
        0,
        0,
        t,
        0,
        0,
        0,
        0,
        0,
        0,
        t,
      ]),
      r = new Float32Array([
        1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1,
      ]);
    (t = new THREE.BufferGeometry()).addAttribute(
      "position",
      new THREE.BufferAttribute(e, 3)
    ),
      t.addAttribute("color", new THREE.BufferAttribute(r, 3)),
      (e = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors })),
      THREE.Line.call(this, t, e, THREE.LinePieces);
  }),
  (THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.ArrowHelper = (function () {
    var a = new THREE.Geometry();
    a.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
    var s = new THREE.CylinderGeometry(0, 0.5, 1, 5, 1);
    return (
      s.applyMatrix(new THREE.Matrix4().makeTranslation(0, -0.5, 0)),
      function (t, e, r, i, n, o) {
        THREE.Object3D.call(this),
          void 0 === i && (i = 16776960),
          void 0 === r && (r = 1),
          void 0 === n && (n = 0.2 * r),
          void 0 === o && (o = 0.2 * n),
          this.position.copy(e),
          (this.line = new THREE.Line(
            a,
            new THREE.LineBasicMaterial({ color: i })
          )),
          (this.line.matrixAutoUpdate = !1),
          this.add(this.line),
          (this.cone = new THREE.Mesh(
            s,
            new THREE.MeshBasicMaterial({ color: i })
          )),
          (this.cone.matrixAutoUpdate = !1),
          this.add(this.cone),
          this.setDirection(t),
          this.setLength(r, n, o);
      }
    );
  })()),
  (THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.ArrowHelper.prototype.setDirection = (function () {
    var e,
      r = new THREE.Vector3();
    return function (t) {
      0.99999 < t.y
        ? this.quaternion.set(0, 0, 0, 1)
        : t.y < -0.99999
        ? this.quaternion.set(1, 0, 0, 0)
        : (r.set(t.z, 0, -t.x).normalize(),
          (e = Math.acos(t.y)),
          this.quaternion.setFromAxisAngle(r, e));
    };
  })()),
  (THREE.ArrowHelper.prototype.setLength = function (t, e, r) {
    void 0 === e && (e = 0.2 * t),
      void 0 === r && (r = 0.2 * e),
      this.line.scale.set(1, t, 1),
      this.line.updateMatrix(),
      this.cone.scale.set(r, e, r),
      (this.cone.position.y = t),
      this.cone.updateMatrix();
  }),
  (THREE.ArrowHelper.prototype.setColor = function (t) {
    this.line.material.color.set(t), this.cone.material.color.set(t);
  }),
  (THREE.BoxHelper = function (t) {
    var e = new THREE.BufferGeometry();
    e.addAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(72), 3)
    ),
      THREE.Line.call(
        this,
        e,
        new THREE.LineBasicMaterial({ color: 16776960 }),
        THREE.LinePieces
      ),
      void 0 !== t && this.update(t);
  }),
  (THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.BoxHelper.prototype.update = function (t) {
    null === (r = t.geometry).boundingBox && r.computeBoundingBox();
    var e = r.boundingBox.min,
      r = r.boundingBox.max,
      i = this.geometry.attributes.position.array;
    (i[0] = r.x),
      (i[1] = r.y),
      (i[2] = r.z),
      (i[3] = e.x),
      (i[4] = r.y),
      (i[5] = r.z),
      (i[6] = e.x),
      (i[7] = r.y),
      (i[8] = r.z),
      (i[9] = e.x),
      (i[10] = e.y),
      (i[11] = r.z),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = r.z),
      (i[15] = r.x),
      (i[16] = e.y),
      (i[17] = r.z),
      (i[18] = r.x),
      (i[19] = e.y),
      (i[20] = r.z),
      (i[21] = r.x),
      (i[22] = r.y),
      (i[23] = r.z),
      (i[24] = r.x),
      (i[25] = r.y),
      (i[26] = e.z),
      (i[27] = e.x),
      (i[28] = r.y),
      (i[29] = e.z),
      (i[30] = e.x),
      (i[31] = r.y),
      (i[32] = e.z),
      (i[33] = e.x),
      (i[34] = e.y),
      (i[35] = e.z),
      (i[36] = e.x),
      (i[37] = e.y),
      (i[38] = e.z),
      (i[39] = r.x),
      (i[40] = e.y),
      (i[41] = e.z),
      (i[42] = r.x),
      (i[43] = e.y),
      (i[44] = e.z),
      (i[45] = r.x),
      (i[46] = r.y),
      (i[47] = e.z),
      (i[48] = r.x),
      (i[49] = r.y),
      (i[50] = r.z),
      (i[51] = r.x),
      (i[52] = r.y),
      (i[53] = e.z),
      (i[54] = e.x),
      (i[55] = r.y),
      (i[56] = r.z),
      (i[57] = e.x),
      (i[58] = r.y),
      (i[59] = e.z),
      (i[60] = e.x),
      (i[61] = e.y),
      (i[62] = r.z),
      (i[63] = e.x),
      (i[64] = e.y),
      (i[65] = e.z),
      (i[66] = r.x),
      (i[67] = e.y),
      (i[68] = r.z),
      (i[69] = r.x),
      (i[70] = e.y),
      (i[71] = e.z),
      (this.geometry.attributes.position.needsUpdate = !0),
      this.geometry.computeBoundingSphere(),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }),
  (THREE.BoundingBoxHelper = function (t, e) {
    e = void 0 !== e ? e : 8947848;
    (this.object = t),
      (this.box = new THREE.Box3()),
      THREE.Mesh.call(
        this,
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: e, wireframe: !0 })
      );
  }),
  (THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype)),
  (THREE.BoundingBoxHelper.prototype.update = function () {
    this.box.setFromObject(this.object),
      this.box.size(this.scale),
      this.box.center(this.position);
  }),
  (THREE.CameraHelper = function (t) {
    function e(t, e, r) {
      i(t, r), i(e, r);
    }
    function i(t, e) {
      r.vertices.push(new THREE.Vector3()),
        r.colors.push(new THREE.Color(e)),
        void 0 === o[t] && (o[t] = []),
        o[t].push(r.vertices.length - 1);
    }
    var r = new THREE.Geometry(),
      n = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors,
      }),
      o = {};
    e("n1", "n2", 16755200),
      e("n2", "n4", 16755200),
      e("n4", "n3", 16755200),
      e("n3", "n1", 16755200),
      e("f1", "f2", 16755200),
      e("f2", "f4", 16755200),
      e("f4", "f3", 16755200),
      e("f3", "f1", 16755200),
      e("n1", "f1", 16755200),
      e("n2", "f2", 16755200),
      e("n3", "f3", 16755200),
      e("n4", "f4", 16755200),
      e("p", "n1", 16711680),
      e("p", "n2", 16711680),
      e("p", "n3", 16711680),
      e("p", "n4", 16711680),
      e("u1", "u2", 43775),
      e("u2", "u3", 43775),
      e("u3", "u1", 43775),
      e("c", "t", 16777215),
      e("p", "c", 3355443),
      e("cn1", "cn2", 3355443),
      e("cn3", "cn4", 3355443),
      e("cf1", "cf2", 3355443),
      e("cf3", "cf4", 3355443),
      THREE.Line.call(this, r, n, THREE.LinePieces),
      (this.camera = t),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (this.pointMap = o),
      this.update();
  }),
  (THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.CameraHelper.prototype.update = (function () {
    function t(t, e, r, i) {
      if ((a.set(e, r, i).unproject(s), void 0 !== (t = o[t])))
        for (e = 0, r = t.length; e < r; e++) n.vertices[t[e]].copy(a);
    }
    var n,
      o,
      a = new THREE.Vector3(),
      s = new THREE.Camera();
    return function () {
      (n = this.geometry),
        (o = this.pointMap),
        s.projectionMatrix.copy(this.camera.projectionMatrix),
        t("c", 0, 0, -1),
        t("t", 0, 0, 1),
        t("n1", -1, -1, -1),
        t("n2", 1, -1, -1),
        t("n3", -1, 1, -1),
        t("n4", 1, 1, -1),
        t("f1", -1, -1, 1),
        t("f2", 1, -1, 1),
        t("f3", -1, 1, 1),
        t("f4", 1, 1, 1),
        t("u1", 0.7, 1.1, -1),
        t("u2", -0.7, 1.1, -1),
        t("u3", 0, 2, -1),
        t("cf1", -1, 0, 1),
        t("cf2", 1, 0, 1),
        t("cf3", 0, -1, 1),
        t("cf4", 0, 1, 1),
        t("cn1", -1, 0, -1),
        t("cn2", 1, 0, -1),
        t("cn3", 0, -1, -1),
        t("cn4", 0, 1, -1),
        (n.verticesNeedUpdate = !0);
    };
  })()),
  (THREE.DirectionalLightHelper = function (t, e) {
    THREE.Object3D.call(this),
      (this.light = t),
      this.light.updateMatrixWorld(),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (e = e || 1);
    t = new THREE.Geometry();
    t.vertices.push(
      new THREE.Vector3(-e, e, 0),
      new THREE.Vector3(e, e, 0),
      new THREE.Vector3(e, -e, 0),
      new THREE.Vector3(-e, -e, 0),
      new THREE.Vector3(-e, e, 0)
    );
    e = new THREE.LineBasicMaterial({ fog: !1 });
    e.color.copy(this.light.color).multiplyScalar(this.light.intensity),
      (this.lightPlane = new THREE.Line(t, e)),
      this.add(this.lightPlane),
      (t = new THREE.Geometry()).vertices.push(
        new THREE.Vector3(),
        new THREE.Vector3()
      ),
      (e = new THREE.LineBasicMaterial({ fog: !1 })).color
        .copy(this.light.color)
        .multiplyScalar(this.light.intensity),
      (this.targetLine = new THREE.Line(t, e)),
      this.add(this.targetLine),
      this.update();
  }),
  (THREE.DirectionalLightHelper.prototype = Object.create(
    THREE.Object3D.prototype
  )),
  (THREE.DirectionalLightHelper.prototype.dispose = function () {
    this.lightPlane.geometry.dispose(),
      this.lightPlane.material.dispose(),
      this.targetLine.geometry.dispose(),
      this.targetLine.material.dispose();
  }),
  (THREE.DirectionalLightHelper.prototype.update = (function () {
    var t = new THREE.Vector3(),
      e = new THREE.Vector3(),
      r = new THREE.Vector3();
    return function () {
      t.setFromMatrixPosition(this.light.matrixWorld),
        e.setFromMatrixPosition(this.light.target.matrixWorld),
        r.subVectors(e, t),
        this.lightPlane.lookAt(r),
        this.lightPlane.material.color
          .copy(this.light.color)
          .multiplyScalar(this.light.intensity),
        this.targetLine.geometry.vertices[1].copy(r),
        (this.targetLine.geometry.verticesNeedUpdate = !0),
        this.targetLine.material.color.copy(this.lightPlane.material.color);
    };
  })()),
  (THREE.EdgesHelper = function (t, e) {
    var r = void 0 !== e ? e : 16777215,
      i = [0, 0],
      n = {},
      o = function (t, e) {
        return t - e;
      },
      a = ["a", "b", "c"],
      e = new THREE.BufferGeometry(),
      s = t.geometry.clone();
    s.mergeVertices(), s.computeFaceNormals();
    for (var h = s.vertices, l = 0, c = 0, u = (s = s.faces).length; c < u; c++)
      for (var E = s[c], f = 0; f < 3; f++) {
        (i[0] = E[a[f]]), (i[1] = E[a[(f + 1) % 3]]), i.sort(o);
        var d = i.toString();
        void 0 === n[d]
          ? ((n[d] = { vert1: i[0], vert2: i[1], face1: c, face2: void 0 }),
            l++)
          : (n[d].face2 = c);
      }
    for (d in ((i = new Float32Array(6 * l)), (o = 0), n))
      (void 0 === (a = n[d]).face2 ||
        s[a.face1].normal.dot(s[a.face2].normal) < 0.9999) &&
        ((l = h[a.vert1]),
        (i[o++] = l.x),
        (i[o++] = l.y),
        (i[o++] = l.z),
        (l = h[a.vert2]),
        (i[o++] = l.x),
        (i[o++] = l.y),
        (i[o++] = l.z));
    e.addAttribute("position", new THREE.BufferAttribute(i, 3)),
      THREE.Line.call(
        this,
        e,
        new THREE.LineBasicMaterial({ color: r }),
        THREE.LinePieces
      ),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }),
  (THREE.EdgesHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.FaceNormalsHelper = function (t, e, r, i) {
    (this.object = t),
      (this.size = void 0 !== e ? e : 1),
      (t = void 0 !== r ? r : 16776960),
      (i = void 0 !== i ? i : 1),
      (e = new THREE.Geometry()),
      (r = 0);
    for (var n = this.object.geometry.faces.length; r < n; r++)
      e.vertices.push(new THREE.Vector3(), new THREE.Vector3());
    THREE.Line.call(
      this,
      e,
      new THREE.LineBasicMaterial({ color: t, linewidth: i }),
      THREE.LinePieces
    ),
      (this.matrixAutoUpdate = !1),
      (this.normalMatrix = new THREE.Matrix3()),
      this.update();
  }),
  (THREE.FaceNormalsHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.FaceNormalsHelper.prototype.update = function () {
    var t = this.geometry.vertices,
      e = this.object,
      r = e.geometry.vertices,
      i = e.geometry.faces,
      n = e.matrixWorld;
    e.updateMatrixWorld(!0), this.normalMatrix.getNormalMatrix(n);
    for (var o = (e = 0), a = i.length; e < a; e++, o += 2) {
      var s = i[e];
      t[o].copy(r[s.a]).add(r[s.b]).add(r[s.c]).divideScalar(3).applyMatrix4(n),
        t[o + 1]
          .copy(s.normal)
          .applyMatrix3(this.normalMatrix)
          .normalize()
          .multiplyScalar(this.size)
          .add(t[o]);
    }
    return (this.geometry.verticesNeedUpdate = !0), this;
  }),
  (THREE.GridHelper = function (t, e) {
    var r = new THREE.Geometry(),
      i = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });
    (this.color1 = new THREE.Color(4473924)),
      (this.color2 = new THREE.Color(8947848));
    for (var n = -t; n <= t; n += e) {
      r.vertices.push(
        new THREE.Vector3(-t, 0, n),
        new THREE.Vector3(t, 0, n),
        new THREE.Vector3(n, 0, -t),
        new THREE.Vector3(n, 0, t)
      );
      var o = 0 === n ? this.color1 : this.color2;
      r.colors.push(o, o, o, o);
    }
    THREE.Line.call(this, r, i, THREE.LinePieces);
  }),
  (THREE.GridHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.GridHelper.prototype.setColors = function (t, e) {
    this.color1.set(t),
      this.color2.set(e),
      (this.geometry.colorsNeedUpdate = !0);
  }),
  (THREE.HemisphereLightHelper = function (t, e, r, i) {
    for (
      THREE.Object3D.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.colors = [new THREE.Color(), new THREE.Color()],
        (t = new THREE.SphereGeometry(e, 4, 2)).applyMatrix(
          new THREE.Matrix4().makeRotationX(-Math.PI / 2)
        ),
        e = 0;
      e < 8;
      e++
    )
      t.faces[e].color = this.colors[e < 4 ? 0 : 1];
    (e = new THREE.MeshBasicMaterial({
      vertexColors: THREE.FaceColors,
      wireframe: !0,
    })),
      (this.lightSphere = new THREE.Mesh(t, e)),
      this.add(this.lightSphere),
      this.update();
  }),
  (THREE.HemisphereLightHelper.prototype = Object.create(
    THREE.Object3D.prototype
  )),
  (THREE.HemisphereLightHelper.prototype.dispose = function () {
    this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose();
  }),
  (THREE.HemisphereLightHelper.prototype.update = (function () {
    var t = new THREE.Vector3();
    return function () {
      this.colors[0]
        .copy(this.light.color)
        .multiplyScalar(this.light.intensity),
        this.colors[1]
          .copy(this.light.groundColor)
          .multiplyScalar(this.light.intensity),
        this.lightSphere.lookAt(
          t.setFromMatrixPosition(this.light.matrixWorld).negate()
        ),
        (this.lightSphere.geometry.colorsNeedUpdate = !0);
    };
  })()),
  (THREE.PointLightHelper = function (t, e) {
    (this.light = t), this.light.updateMatrixWorld();
    (t = new THREE.SphereGeometry(e, 4, 2)),
      (e = new THREE.MeshBasicMaterial({ wireframe: !0, fog: !1 }));
    e.color.copy(this.light.color).multiplyScalar(this.light.intensity),
      THREE.Mesh.call(this, t, e),
      (this.matrix = this.light.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }),
  (THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype)),
  (THREE.PointLightHelper.prototype.dispose = function () {
    this.geometry.dispose(), this.material.dispose();
  }),
  (THREE.PointLightHelper.prototype.update = function () {
    this.material.color
      .copy(this.light.color)
      .multiplyScalar(this.light.intensity);
  }),
  (THREE.SkeletonHelper = function (t) {
    this.bones = this.getBoneList(t);
    for (var e = new THREE.Geometry(), r = 0; r < this.bones.length; r++)
      this.bones[r].parent instanceof THREE.Bone &&
        (e.vertices.push(new THREE.Vector3()),
        e.vertices.push(new THREE.Vector3()),
        e.colors.push(new THREE.Color(0, 0, 1)),
        e.colors.push(new THREE.Color(0, 1, 0)));
    (r = new THREE.LineBasicMaterial({
      vertexColors: THREE.VertexColors,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0,
    })),
      THREE.Line.call(this, e, r, THREE.LinePieces),
      (this.root = t),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1),
      this.update();
  }),
  (THREE.SkeletonHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.SkeletonHelper.prototype.getBoneList = function (t) {
    var e = [];
    t instanceof THREE.Bone && e.push(t);
    for (var r = 0; r < t.children.length; r++)
      e.push.apply(e, this.getBoneList(t.children[r]));
    return e;
  }),
  (THREE.SkeletonHelper.prototype.update = function () {
    for (
      var t = this.geometry,
        e = new THREE.Matrix4().getInverse(this.root.matrixWorld),
        r = new THREE.Matrix4(),
        i = 0,
        n = 0;
      n < this.bones.length;
      n++
    ) {
      var o = this.bones[n];
      o.parent instanceof THREE.Bone &&
        (r.multiplyMatrices(e, o.matrixWorld),
        t.vertices[i].setFromMatrixPosition(r),
        r.multiplyMatrices(e, o.parent.matrixWorld),
        t.vertices[i + 1].setFromMatrixPosition(r),
        (i += 2));
    }
    (t.verticesNeedUpdate = !0), t.computeBoundingSphere();
  }),
  (THREE.SpotLightHelper = function (t) {
    THREE.Object3D.call(this),
      (this.light = t),
      this.light.updateMatrixWorld(),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1),
      (t = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0)).applyMatrix(
        new THREE.Matrix4().makeTranslation(0, -0.5, 0)
      ),
      t.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2));
    var e = new THREE.MeshBasicMaterial({ wireframe: !0, fog: !1 });
    (this.cone = new THREE.Mesh(t, e)), this.add(this.cone), this.update();
  }),
  (THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.SpotLightHelper.prototype.dispose = function () {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }),
  (THREE.SpotLightHelper.prototype.update = (function () {
    var r = new THREE.Vector3(),
      i = new THREE.Vector3();
    return function () {
      var t = this.light.distance || 1e4,
        e = t * Math.tan(this.light.angle);
      this.cone.scale.set(e, e, t),
        r.setFromMatrixPosition(this.light.matrixWorld),
        i.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(i.sub(r)),
        this.cone.material.color
          .copy(this.light.color)
          .multiplyScalar(this.light.intensity);
    };
  })()),
  (THREE.VertexNormalsHelper = function (t, e, r, i) {
    (this.object = t),
      (this.size = void 0 !== e ? e : 1),
      (e = void 0 !== r ? r : 16711680),
      (i = void 0 !== i ? i : 1),
      (r = new THREE.Geometry());
    for (var n = 0, o = (t = t.geometry.faces).length; n < o; n++)
      for (var a = 0, s = t[n].vertexNormals.length; a < s; a++)
        r.vertices.push(new THREE.Vector3(), new THREE.Vector3());
    THREE.Line.call(
      this,
      r,
      new THREE.LineBasicMaterial({ color: e, linewidth: i }),
      THREE.LinePieces
    ),
      (this.matrixAutoUpdate = !1),
      (this.normalMatrix = new THREE.Matrix3()),
      this.update();
  }),
  (THREE.VertexNormalsHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.VertexNormalsHelper.prototype.update = (function () {
    var E = new THREE.Vector3();
    return function (t) {
      (t = ["a", "b", "c", "d"]),
        this.object.updateMatrixWorld(!0),
        this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
      for (
        var e = this.geometry.vertices,
          r = this.object.geometry.vertices,
          i = this.object.geometry.faces,
          n = this.object.matrixWorld,
          o = 0,
          a = 0,
          s = i.length;
        a < s;
        a++
      )
        for (var h = i[a], l = 0, c = h.vertexNormals.length; l < c; l++) {
          var u = h.vertexNormals[l];
          e[o].copy(r[h[t[l]]]).applyMatrix4(n),
            E.copy(u)
              .applyMatrix3(this.normalMatrix)
              .normalize()
              .multiplyScalar(this.size),
            E.add(e[o]),
            e[(o += 1)].copy(E),
            (o += 1);
        }
      return (this.geometry.verticesNeedUpdate = !0), this;
    };
  })()),
  (THREE.VertexTangentsHelper = function (t, e, r, i) {
    (this.object = t),
      (this.size = void 0 !== e ? e : 1),
      (e = void 0 !== r ? r : 255),
      (i = void 0 !== i ? i : 1),
      (r = new THREE.Geometry());
    for (var n = 0, o = (t = t.geometry.faces).length; n < o; n++)
      for (var a = 0, s = t[n].vertexTangents.length; a < s; a++)
        r.vertices.push(new THREE.Vector3()),
          r.vertices.push(new THREE.Vector3());
    THREE.Line.call(
      this,
      r,
      new THREE.LineBasicMaterial({ color: e, linewidth: i }),
      THREE.LinePieces
    ),
      (this.matrixAutoUpdate = !1),
      this.update();
  }),
  (THREE.VertexTangentsHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.VertexTangentsHelper.prototype.update = (function () {
    var E = new THREE.Vector3();
    return function (t) {
      (t = ["a", "b", "c", "d"]), this.object.updateMatrixWorld(!0);
      for (
        var e = this.geometry.vertices,
          r = this.object.geometry.vertices,
          i = this.object.geometry.faces,
          n = this.object.matrixWorld,
          o = 0,
          a = 0,
          s = i.length;
        a < s;
        a++
      )
        for (var h = i[a], l = 0, c = h.vertexTangents.length; l < c; l++) {
          var u = h.vertexTangents[l];
          e[o].copy(r[h[t[l]]]).applyMatrix4(n),
            E.copy(u).transformDirection(n).multiplyScalar(this.size),
            E.add(e[o]),
            e[(o += 1)].copy(E),
            (o += 1);
        }
      return (this.geometry.verticesNeedUpdate = !0), this;
    };
  })()),
  (THREE.WireframeHelper = function (t, e) {
    function r(t, e) {
      return t - e;
    }
    var i = void 0 !== e ? e : 16777215,
      n = [0, 0],
      o = {},
      a = ["a", "b", "c"],
      e = new THREE.BufferGeometry();
    if (t.geometry instanceof THREE.Geometry) {
      for (
        var s = t.geometry.vertices,
          h = t.geometry.faces,
          l = 0,
          c = new Uint32Array(6 * h.length),
          u = 0,
          E = h.length;
        u < E;
        u++
      )
        for (var f = h[u], d = 0; d < 3; d++)
          (n[0] = f[a[d]]),
            (n[1] = f[a[(d + 1) % 3]]),
            n.sort(r),
            void 0 === o[(m = n.toString())] &&
              ((c[2 * l] = n[0]), (c[2 * l + 1] = n[1]), (o[m] = !0), l++);
      for (n = new Float32Array(6 * l), u = 0, E = l; u < E; u++)
        for (d = 0; d < 2; d++)
          (l = s[c[2 * u + d]]),
            (n[(a = 6 * u + 3 * d) + 0] = l.x),
            (n[a + 1] = l.y),
            (n[a + 2] = l.z);
      e.addAttribute("position", new THREE.BufferAttribute(n, 3));
    } else if (t.geometry instanceof THREE.BufferGeometry) {
      if (void 0 !== t.geometry.attributes.index) {
        (s = t.geometry.attributes.position.array),
          (E = t.geometry.attributes.index.array),
          (l = 0) === (h = t.geometry.drawcalls).length &&
            (h = [{ count: E.length, index: 0, start: 0 }]);
        for (
          var c = new Uint32Array(2 * E.length), f = 0, p = h.length;
          f < p;
          ++f
        )
          for (
            var d = h[f].start,
              m = h[f].count,
              a = h[f].index,
              u = d,
              g = d + m;
            u < g;
            u += 3
          )
            for (d = 0; d < 3; d++)
              (n[0] = a + E[u + d]),
                (n[1] = a + E[u + ((d + 1) % 3)]),
                n.sort(r),
                void 0 === o[(m = n.toString())] &&
                  ((c[2 * l] = n[0]), (c[2 * l + 1] = n[1]), (o[m] = !0), l++);
        for (n = new Float32Array(6 * l), u = 0, E = l; u < E; u++)
          for (d = 0; d < 2; d++)
            (a = 6 * u + 3 * d),
              (l = 3 * c[2 * u + d]),
              (n[a + 0] = s[l]),
              (n[a + 1] = s[l + 1]),
              (n[a + 2] = s[l + 2]);
      } else
        for (
          c = (l = (s = t.geometry.attributes.position.array).length / 3) / 3,
            n = new Float32Array(6 * l),
            u = 0,
            E = c;
          u < E;
          u++
        )
          for (d = 0; d < 3; d++)
            (c = 9 * u + 3 * d),
              (n[(a = 18 * u + 6 * d) + 0] = s[c]),
              (n[a + 1] = s[c + 1]),
              (n[a + 2] = s[c + 2]),
              (l = 9 * u + ((d + 1) % 3) * 3),
              (n[a + 3] = s[l]),
              (n[a + 4] = s[l + 1]),
              (n[a + 5] = s[l + 2]);
      e.addAttribute("position", new THREE.BufferAttribute(n, 3));
    }
    THREE.Line.call(
      this,
      e,
      new THREE.LineBasicMaterial({ color: i }),
      THREE.LinePieces
    ),
      (this.matrix = t.matrixWorld),
      (this.matrixAutoUpdate = !1);
  }),
  (THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.ImmediateRenderObject = function () {
    THREE.Object3D.call(this), (this.render = function (t) {});
  }),
  (THREE.ImmediateRenderObject.prototype = Object.create(
    THREE.Object3D.prototype
  )),
  (THREE.MorphBlendMesh = function (t, e) {
    THREE.Mesh.call(this, t, e),
      (this.animationsMap = {}),
      (this.animationsList = []);
    e = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, e - 1, +e),
      this.setAnimationWeight("__default", 1);
  }),
  (THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype)),
  (THREE.MorphBlendMesh.prototype.createAnimation = function (t, e, r, i) {
    (e = {
      startFrame: e,
      endFrame: r,
      length: r - e + 1,
      fps: i,
      duration: (r - e) / i,
      lastFrame: 0,
      currentFrame: 0,
      active: !1,
      time: 0,
      direction: 1,
      weight: 1,
      directionBackwards: !1,
      mirroredLoop: !1,
    }),
      (this.animationsMap[t] = e),
      this.animationsList.push(e);
  }),
  (THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (t) {
    for (
      var e,
        r = /([a-z]+)_?(\d+)/,
        i = {},
        n = this.geometry,
        o = 0,
        a = n.morphTargets.length;
      o < a;
      o++
    ) {
      var s,
        h = n.morphTargets[o].name.match(r);
      h &&
        1 < h.length &&
        (i[(s = h[1])] || (i[s] = { start: 1 / 0, end: -1 / 0 }),
        o < (h = i[s]).start && (h.start = o),
        o > h.end && (h.end = o),
        (e = e || s));
    }
    for (s in i) (h = i[s]), this.createAnimation(s, h.start, h.end, t);
    this.firstAnimation = e;
  }),
  (THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (t) {
    (t = this.animationsMap[t]) &&
      ((t.direction = 1), (t.directionBackwards = !1));
  }),
  (THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (t) {
    (t = this.animationsMap[t]) &&
      ((t.direction = -1), (t.directionBackwards = !0));
  }),
  (THREE.MorphBlendMesh.prototype.setAnimationFPS = function (t, e) {
    t = this.animationsMap[t];
    t && ((t.fps = e), (t.duration = (t.end - t.start) / t.fps));
  }),
  (THREE.MorphBlendMesh.prototype.setAnimationDuration = function (t, e) {
    t = this.animationsMap[t];
    t && ((t.duration = e), (t.fps = (t.end - t.start) / t.duration));
  }),
  (THREE.MorphBlendMesh.prototype.setAnimationWeight = function (t, e) {
    t = this.animationsMap[t];
    t && (t.weight = e);
  }),
  (THREE.MorphBlendMesh.prototype.setAnimationTime = function (t, e) {
    t = this.animationsMap[t];
    t && (t.time = e);
  }),
  (THREE.MorphBlendMesh.prototype.getAnimationTime = function (t) {
    var e = 0;
    return (t = this.animationsMap[t]) && (e = t.time), e;
  }),
  (THREE.MorphBlendMesh.prototype.getAnimationDuration = function (t) {
    var e = -1;
    return (t = this.animationsMap[t]) && (e = t.duration), e;
  }),
  (THREE.MorphBlendMesh.prototype.playAnimation = function (t) {
    var e = this.animationsMap[t];
    e
      ? ((e.time = 0), (e.active = !0))
      : console.warn("animation[" + t + "] undefined");
  }),
  (THREE.MorphBlendMesh.prototype.stopAnimation = function (t) {
    (t = this.animationsMap[t]) && (t.active = !1);
  }),
  (THREE.MorphBlendMesh.prototype.update = function (t) {
    for (var e = 0, r = this.animationsList.length; e < r; e++) {
      var i,
        n,
        o,
        a = this.animationsList[e];
      a.active &&
        ((i = a.duration / a.length),
        (a.time += a.direction * t),
        a.mirroredLoop
          ? (a.time > a.duration || a.time < 0) &&
            ((a.direction *= -1),
            a.time > a.duration &&
              ((a.time = a.duration), (a.directionBackwards = !0)),
            a.time < 0 && ((a.time = 0), (a.directionBackwards = !1)))
          : ((a.time %= a.duration), a.time < 0 && (a.time += a.duration)),
        (n =
          a.startFrame +
          THREE.Math.clamp(Math.floor(a.time / i), 0, a.length - 1)),
        (o = a.weight),
        n !== a.currentFrame &&
          ((this.morphTargetInfluences[a.lastFrame] = 0),
          (this.morphTargetInfluences[a.currentFrame] = +o),
          (this.morphTargetInfluences[n] = 0),
          (a.lastFrame = a.currentFrame),
          (a.currentFrame = n)),
        (i = (a.time % i) / i),
        a.directionBackwards && (i = 1 - i),
        (this.morphTargetInfluences[a.currentFrame] = i * o),
        (this.morphTargetInfluences[a.lastFrame] = (1 - i) * o));
    }
  });
