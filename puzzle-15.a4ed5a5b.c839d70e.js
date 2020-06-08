// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"puzzle-15.a4ed5a5b.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "FaDW": [function (require, module, exports) {
    var global = arguments[3];
    var define;
    var t,
        e = arguments[3];
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.adopt = bo, exports.assignNewId = Mo, exports.create = go, exports.dispatch = Ks, exports.eid = jo, exports.extend = Eo, exports.find = ka, exports.getClass = So, exports.invent = Co, exports.makeInstance = xo, exports.makeMorphable = nl, exports.mockAdopt = ko, exports.nodeOrNew = wo, exports.off = Zs, exports.on = Js, exports.parser = pa, exports.register = Oo, exports.registerMorphableType = el, exports.registerWindow = fo, exports.wrapWithAttrCheck = To, exports.utils = exports.root = exports.regex = exports.namespaces = exports.easing = exports.defaults = exports.Use = exports.Tspan = exports.TransformBag = exports.Timeline = exports.TextPath = exports.Text = exports.Symbol = exports.Svg = exports.Style = exports.Stop = exports.Spring = exports.Shape = exports.SVG = exports.Runner = exports.Rect = exports.Queue = exports.Polyline = exports.Polygon = exports.PointArray = exports.Point = exports.Pattern = exports.PathArray = exports.Path = exports.PID = exports.ObjectBag = exports.Number = exports.NonMorphable = exports.Morphable = exports.Matrix = exports.Mask = exports.Marker = exports.List = exports.Line = exports.Image = exports.Gradient = exports.G = exports.ForeignObject = exports.EventTarget = exports.Ellipse = exports.Element = exports.Ease = exports.Dom = exports.Defs = exports.Controller = exports.Container = exports.Color = exports.ClipPath = exports.Circle = exports.Box = exports.Array = exports.Animator = exports.A = void 0;
    var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

    function r(t, e) {
      return t(e = {
        exports: {}
      }, e.exports), e.exports;
    }

    var i,
        o,
        s,
        u = function u(t) {
      return t && t.Math == Math && t;
    },
        a = u("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || u("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || u("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || u("object" == _typeof(n) && n) || Function("return this")(),
        h = function h(t) {
      try {
        return !!t();
      } catch (e) {
        return !0;
      }
    },
        l = !h(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function get() {
          return 7;
        }
      }).a;
    }),
        c = {}.propertyIsEnumerable,
        f = Object.getOwnPropertyDescriptor,
        p = f && !c.call({
      1: 2
    }, 1),
        v = p ? function (t) {
      var e = f(this, t);
      return !!e && e.enumerable;
    } : c,
        d = {
      f: v
    },
        y = function y(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    },
        m = {}.toString,
        g = function g(t) {
      return m.call(t).slice(8, -1);
    },
        x = "".split,
        w = h(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == g(t) ? x.call(t, "") : Object(t);
    } : Object,
        b = function b(t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
        _ = function _(t) {
      return w(b(t));
    },
        k = function k(t) {
      return "object" == _typeof(t) ? null !== t : "function" == typeof t;
    },
        O = function O(t, e) {
      if (!k(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !k(r = n.call(t))) return r;
      if ("function" == typeof (n = t.valueOf) && !k(r = n.call(t))) return r;
      if (!e && "function" == typeof (n = t.toString) && !k(r = n.call(t))) return r;
      throw TypeError("Can't convert object to primitive value");
    },
        S = {}.hasOwnProperty,
        A = function A(t, e) {
      return S.call(t, e);
    },
        j = a.document,
        M = k(j) && k(j.createElement),
        E = function E(t) {
      return M ? j.createElement(t) : {};
    },
        T = !l && !h(function () {
      return 7 != Object.defineProperty(E("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    }),
        C = Object.getOwnPropertyDescriptor,
        P = l ? C : function (t, e) {
      if (t = _(t), e = O(e, !0), T) try {
        return C(t, e);
      } catch (n) {}
      if (A(t, e)) return y(!d.f.call(t, e), t[e]);
    },
        I = {
      f: P
    },
        N = function N(t) {
      if (!k(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
        D = Object.defineProperty,
        R = l ? D : function (t, e, n) {
      if (N(t), e = O(e, !0), N(n), T) try {
        return D(t, e, n);
      } catch (r) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
      return "value" in n && (t[e] = n.value), t;
    },
        L = {
      f: R
    },
        F = l ? function (t, e, n) {
      return L.f(t, e, y(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    },
        z = function z(t, e) {
      try {
        F(a, t, e);
      } catch (n) {
        a[t] = e;
      }

      return e;
    },
        q = "__core-js_shared__",
        Y = a[q] || z(q, {}),
        G = Y,
        X = r(function (t) {
      (t.exports = function (t, e) {
        return G[t] || (G[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.3.6",
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      });
    }),
        V = X("native-function-to-string", Function.toString),
        B = a.WeakMap,
        H = "function" == typeof B && /native code/.test(V.call(B)),
        U = 0,
        $ = Math.random(),
        Q = function Q(t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++U + $).toString(36);
    },
        W = X("keys"),
        J = function J(t) {
      return W[t] || (W[t] = Q(t));
    },
        Z = {},
        K = a.WeakMap,
        tt = function tt(t) {
      return s(t) ? o(t) : i(t, {});
    },
        et = function et(t) {
      return function (e) {
        var n;
        if (!k(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
        return n;
      };
    };

    if (H) {
      var nt = new K(),
          rt = nt.get,
          it = nt.has,
          ot = nt.set;
      i = function i(t, e) {
        return ot.call(nt, t, e), e;
      }, o = function o(t) {
        return rt.call(nt, t) || {};
      }, s = function s(t) {
        return it.call(nt, t);
      };
    } else {
      var st = J("state");
      Z[st] = !0, i = function i(t, e) {
        return F(t, st, e), e;
      }, o = function o(t) {
        return A(t, st) ? t[st] : {};
      }, s = function s(t) {
        return A(t, st);
      };
    }

    var ut,
        at,
        ht = {
      set: i,
      get: o,
      has: s,
      enforce: tt,
      getterFor: et
    },
        lt = r(function (t) {
      var e = ht.get,
          n = ht.enforce,
          r = String(V).split("toString");
      X("inspectSource", function (t) {
        return V.call(t);
      }), (t.exports = function (t, e, i, o) {
        var s = !!o && !!o.unsafe,
            u = !!o && !!o.enumerable,
            h = !!o && !!o.noTargetGet;
        "function" == typeof i && ("string" != typeof e || A(i, "name") || F(i, "name", e), n(i).source = r.join("string" == typeof e ? e : "")), t !== a ? (s ? !h && t[e] && (u = !0) : delete t[e], u ? t[e] = i : F(t, e, i)) : u ? t[e] = i : z(e, i);
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && e(this).source || V.call(this);
      });
    }),
        ct = a,
        ft = function ft(t) {
      return "function" == typeof t ? t : void 0;
    },
        pt = function pt(t, e) {
      return arguments.length < 2 ? ft(ct[t]) || ft(a[t]) : ct[t] && ct[t][e] || a[t] && a[t][e];
    },
        vt = Math.ceil,
        dt = Math.floor,
        yt = function yt(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? dt : vt)(t);
    },
        mt = Math.min,
        gt = function gt(t) {
      return t > 0 ? mt(yt(t), 9007199254740991) : 0;
    },
        xt = Math.max,
        wt = Math.min,
        bt = function bt(t, e) {
      var n = yt(t);
      return n < 0 ? xt(n + e, 0) : wt(n, e);
    },
        _t = function _t(t) {
      return function (e, n, r) {
        var i,
            o = _(e),
            s = gt(o.length),
            u = bt(r, s);

        if (t && n != n) {
          for (; s > u;) {
            if ((i = o[u++]) != i) return !0;
          }
        } else for (; s > u; u++) {
          if ((t || u in o) && o[u] === n) return t || u || 0;
        }

        return !t && -1;
      };
    },
        kt = {
      includes: _t(!0),
      indexOf: _t(!1)
    },
        Ot = kt.indexOf,
        St = function St(t, e) {
      var n,
          r = _(t),
          i = 0,
          o = [];

      for (n in r) {
        !A(Z, n) && A(r, n) && o.push(n);
      }

      for (; e.length > i;) {
        A(r, n = e[i++]) && (~Ot(o, n) || o.push(n));
      }

      return o;
    },
        At = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        jt = At.concat("length", "prototype"),
        Mt = Object.getOwnPropertyNames || function (t) {
      return St(t, jt);
    },
        Et = {
      f: Mt
    },
        Tt = Object.getOwnPropertySymbols,
        Ct = {
      f: Tt
    },
        Pt = pt("Reflect", "ownKeys") || function (t) {
      var e = Et.f(N(t)),
          n = Ct.f;
      return n ? e.concat(n(t)) : e;
    },
        It = function It(t, e) {
      for (var n = Pt(e), r = L.f, i = I.f, o = 0; o < n.length; o++) {
        var s = n[o];
        A(t, s) || r(t, s, i(e, s));
      }
    },
        Nt = /#|\.prototype\./,
        Dt = function Dt(t, e) {
      var n = Lt[Rt(t)];
      return n == zt || n != Ft && ("function" == typeof e ? h(e) : !!e);
    },
        Rt = Dt.normalize = function (t) {
      return String(t).replace(Nt, ".").toLowerCase();
    },
        Lt = Dt.data = {},
        Ft = Dt.NATIVE = "N",
        zt = Dt.POLYFILL = "P",
        qt = Dt,
        Yt = I.f,
        Gt = function Gt(t, e) {
      var n,
          r,
          i,
          o,
          s,
          u = t.target,
          h = t.global,
          l = t.stat;
      if (n = h ? a : l ? a[u] || z(u, {}) : (a[u] || {}).prototype) for (r in e) {
        if (o = e[r], i = t.noTargetGet ? (s = Yt(n, r)) && s.value : n[r], !qt(h ? r : u + (l ? "." : "#") + r, t.forced) && void 0 !== i) {
          if (_typeof(o) == _typeof(i)) continue;
          It(o, i);
        }

        (t.sham || i && i.sham) && F(o, "sham", !0), lt(n, r, o, t);
      }
    },
        Xt = Array.isArray || function (t) {
      return "Array" == g(t);
    },
        Vt = function Vt(t, e, n) {
      var r = O(e);
      r in t ? L.f(t, r, y(0, n)) : t[r] = n;
    },
        Bt = !!Object.getOwnPropertySymbols && !h(function () {
      return !String(Symbol());
    }),
        Ht = a.Symbol,
        Ut = X("wks"),
        $t = function $t(t) {
      return Ut[t] || (Ut[t] = Bt && Ht[t] || (Bt ? Ht : Q)("Symbol." + t));
    },
        Qt = pt("navigator", "userAgent") || "",
        Wt = a.process,
        Jt = Wt && Wt.versions,
        Zt = Jt && Jt.v8;

    Zt ? at = (ut = Zt.split("."))[0] + ut[1] : Qt && (!(ut = Qt.match(/Edge\/(\d+)/)) || ut[1] >= 74) && (ut = Qt.match(/Chrome\/(\d+)/)) && (at = ut[1]);

    var Kt = at && +at,
        te = $t("species"),
        ee = function ee(t) {
      return Kt >= 51 || !h(function () {
        var e = [];
        return (e.constructor = {})[te] = function () {
          return {
            foo: 1
          };
        }, 1 !== e[t](Boolean).foo;
      });
    },
        ne = $t("species"),
        re = [].slice,
        ie = Math.max;

    Gt({
      target: "Array",
      proto: !0,
      forced: !ee("slice")
    }, {
      slice: function slice(t, e) {
        var n,
            r,
            i,
            o = _(this),
            s = gt(o.length),
            u = bt(t, s),
            a = bt(void 0 === e ? s : e, s);

        if (Xt(o) && ("function" != typeof (n = o.constructor) || n !== Array && !Xt(n.prototype) ? k(n) && null === (n = n[ne]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return re.call(o, u, a);

        for (r = new (void 0 === n ? Array : n)(ie(a - u, 0)), i = 0; u < a; u++, i++) {
          u in o && Vt(r, i, o[u]);
        }

        return r.length = i, r;
      }
    });
    var oe = L.f,
        se = Function.prototype,
        ue = se.toString,
        ae = /^\s*function ([^ (]*)/,
        he = "name";
    !l || he in se || oe(se, he, {
      configurable: !0,
      get: function get() {
        try {
          return ue.call(this).match(ae)[1];
        } catch (t) {
          return "";
        }
      }
    });

    var le = Et.f,
        ce = {}.toString,
        fe = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        pe = function pe(t) {
      try {
        return le(t);
      } catch (e) {
        return fe.slice();
      }
    },
        ve = function ve(t) {
      return fe && "[object Window]" == ce.call(t) ? pe(t) : le(_(t));
    },
        de = {
      f: ve
    },
        ye = de.f,
        me = h(function () {
      return !Object.getOwnPropertyNames(1);
    });

    function ge(t) {
      return (ge = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function xe(t) {
      return (xe = "function" == typeof Symbol && "symbol" === ge(Symbol.iterator) ? function (t) {
        return ge(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : ge(t);
      })(t);
    }

    Gt({
      target: "Object",
      stat: !0,
      forced: me
    }, {
      getOwnPropertyNames: ye
    });

    var we = function we(t) {
      return Object(b(t));
    },
        be = Object.keys || function (t) {
      return St(t, At);
    },
        _e = l ? Object.defineProperties : function (t, e) {
      N(t);

      for (var n, r = be(e), i = r.length, o = 0; i > o;) {
        L.f(t, n = r[o++], e[n]);
      }

      return t;
    },
        ke = pt("document", "documentElement"),
        Oe = J("IE_PROTO"),
        Se = "prototype",
        Ae = function Ae() {},
        _je = function je() {
      var t,
          e = E("iframe"),
          n = At.length;

      for (e.style.display = "none", ke.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), _je = t.F; n--;) {
        delete _je[Se][At[n]];
      }

      return _je();
    },
        Me = Object.create || function (t, e) {
      var n;
      return null !== t ? (Ae[Se] = N(t), n = new Ae(), Ae[Se] = null, n[Oe] = t) : n = _je(), void 0 === e ? n : _e(n, e);
    };

    Z[Oe] = !0;

    var Ee = $t,
        Te = {
      f: Ee
    },
        Ce = L.f,
        Pe = function Pe(t) {
      var e = ct.Symbol || (ct.Symbol = {});
      A(e, t) || Ce(e, t, {
        value: Te.f(t)
      });
    },
        Ie = L.f,
        Ne = $t("toStringTag"),
        De = function De(t, e, n) {
      t && !A(t = n ? t : t.prototype, Ne) && Ie(t, Ne, {
        configurable: !0,
        value: e
      });
    },
        Re = function Re(t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    },
        Le = function Le(t, e, n) {
      if (Re(t), void 0 === e) return t;

      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };

        case 1:
          return function (n) {
            return t.call(e, n);
          };

        case 2:
          return function (n, r) {
            return t.call(e, n, r);
          };

        case 3:
          return function (n, r, i) {
            return t.call(e, n, r, i);
          };
      }

      return function () {
        return t.apply(e, arguments);
      };
    },
        Fe = $t("species"),
        ze = function ze(t, e) {
      var n;
      return Xt(t) && ("function" != typeof (n = t.constructor) || n !== Array && !Xt(n.prototype) ? k(n) && null === (n = n[Fe]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e);
    },
        qe = [].push,
        Ye = function Ye(t) {
      var e = 1 == t,
          n = 2 == t,
          r = 3 == t,
          i = 4 == t,
          o = 6 == t,
          s = 5 == t || o;
      return function (u, a, h, l) {
        for (var c, f, p = we(u), v = w(p), d = Le(a, h, 3), y = gt(v.length), m = 0, g = l || ze, x = e ? g(u, y) : n ? g(u, 0) : void 0; y > m; m++) {
          if ((s || m in v) && (f = d(c = v[m], m, p), t)) if (e) x[m] = f;else if (f) switch (t) {
            case 3:
              return !0;

            case 5:
              return c;

            case 6:
              return m;

            case 2:
              qe.call(x, c);
          } else if (i) return !1;
        }

        return o ? -1 : r || i ? i : x;
      };
    },
        Ge = {
      forEach: Ye(0),
      map: Ye(1),
      filter: Ye(2),
      some: Ye(3),
      every: Ye(4),
      find: Ye(5),
      findIndex: Ye(6)
    },
        Xe = Ge.forEach,
        Ve = J("hidden"),
        Be = "Symbol",
        He = "prototype",
        Ue = $t("toPrimitive"),
        $e = ht.set,
        Qe = ht.getterFor(Be),
        We = Object[He],
        _Je = a.Symbol,
        Ze = a.JSON,
        Ke = Ze && Ze.stringify,
        tn = I.f,
        en = L.f,
        nn = de.f,
        rn = d.f,
        on = X("symbols"),
        sn = X("op-symbols"),
        un = X("string-to-symbol-registry"),
        an = X("symbol-to-string-registry"),
        hn = X("wks"),
        ln = a.QObject,
        cn = !ln || !ln[He] || !ln[He].findChild,
        fn = l && h(function () {
      return 7 != Me(en({}, "a", {
        get: function get() {
          return en(this, "a", {
            value: 7
          }).a;
        }
      })).a;
    }) ? function (t, e, n) {
      var r = tn(We, e);
      r && delete We[e], en(t, e, n), r && t !== We && en(We, e, r);
    } : en,
        pn = function pn(t, e) {
      var n = on[t] = Me(_Je[He]);
      return $e(n, {
        type: Be,
        tag: t,
        description: e
      }), l || (n.description = e), n;
    },
        vn = Bt && "symbol" == _typeof(_Je.iterator) ? function (t) {
      return "symbol" == _typeof(t);
    } : function (t) {
      return Object(t) instanceof _Je;
    },
        dn = function dn(t, e, n) {
      t === We && dn(sn, e, n), N(t);
      var r = O(e, !0);
      return N(n), A(on, r) ? (n.enumerable ? (A(t, Ve) && t[Ve][r] && (t[Ve][r] = !1), n = Me(n, {
        enumerable: y(0, !1)
      })) : (A(t, Ve) || en(t, Ve, y(1, {})), t[Ve][r] = !0), fn(t, r, n)) : en(t, r, n);
    },
        yn = function yn(t, e) {
      N(t);

      var n = _(e),
          r = be(n).concat(bn(n));

      return Xe(r, function (e) {
        l && !gn.call(n, e) || dn(t, e, n[e]);
      }), t;
    },
        mn = function mn(t, e) {
      return void 0 === e ? Me(t) : yn(Me(t), e);
    },
        gn = function gn(t) {
      var e = O(t, !0),
          n = rn.call(this, e);
      return !(this === We && A(on, e) && !A(sn, e)) && (!(n || !A(this, e) || !A(on, e) || A(this, Ve) && this[Ve][e]) || n);
    },
        xn = function xn(t, e) {
      var n = _(t),
          r = O(e, !0);

      if (n !== We || !A(on, r) || A(sn, r)) {
        var i = tn(n, r);
        return !i || !A(on, r) || A(n, Ve) && n[Ve][r] || (i.enumerable = !0), i;
      }
    },
        wn = function wn(t) {
      var e = nn(_(t)),
          n = [];
      return Xe(e, function (t) {
        A(on, t) || A(Z, t) || n.push(t);
      }), n;
    },
        bn = function bn(t) {
      var e = t === We,
          n = nn(e ? sn : _(t)),
          r = [];
      return Xe(n, function (t) {
        !A(on, t) || e && !A(We, t) || r.push(on[t]);
      }), r;
    };

    Bt || (lt((_Je = function Je() {
      if (this instanceof _Je) throw TypeError("Symbol is not a constructor");

      var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
          e = Q(t),
          n = function n(t) {
        this === We && n.call(sn, t), A(this, Ve) && A(this[Ve], e) && (this[Ve][e] = !1), fn(this, e, y(1, t));
      };

      return l && cn && fn(We, e, {
        configurable: !0,
        set: n
      }), pn(e, t);
    })[He], "toString", function () {
      return Qe(this).tag;
    }), d.f = gn, L.f = dn, I.f = xn, Et.f = de.f = wn, Ct.f = bn, l && (en(_Je[He], "description", {
      configurable: !0,
      get: function get() {
        return Qe(this).description;
      }
    }), lt(We, "propertyIsEnumerable", gn, {
      unsafe: !0
    })), Te.f = function (t) {
      return pn($t(t), t);
    }), Gt({
      global: !0,
      wrap: !0,
      forced: !Bt,
      sham: !Bt
    }, {
      Symbol: _Je
    }), Xe(be(hn), function (t) {
      Pe(t);
    }), Gt({
      target: Be,
      stat: !0,
      forced: !Bt
    }, {
      for: function _for(t) {
        var e = String(t);
        if (A(un, e)) return un[e];

        var n = _Je(e);

        return un[e] = n, an[n] = e, n;
      },
      keyFor: function keyFor(t) {
        if (!vn(t)) throw TypeError(t + " is not a symbol");
        if (A(an, t)) return an[t];
      },
      useSetter: function useSetter() {
        cn = !0;
      },
      useSimple: function useSimple() {
        cn = !1;
      }
    }), Gt({
      target: "Object",
      stat: !0,
      forced: !Bt,
      sham: !l
    }, {
      create: mn,
      defineProperty: dn,
      defineProperties: yn,
      getOwnPropertyDescriptor: xn
    }), Gt({
      target: "Object",
      stat: !0,
      forced: !Bt
    }, {
      getOwnPropertyNames: wn,
      getOwnPropertySymbols: bn
    }), Gt({
      target: "Object",
      stat: !0,
      forced: h(function () {
        Ct.f(1);
      })
    }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(t) {
        return Ct.f(we(t));
      }
    }), Ze && Gt({
      target: "JSON",
      stat: !0,
      forced: !Bt || h(function () {
        var t = _Je();

        return "[null]" != Ke([t]) || "{}" != Ke({
          a: t
        }) || "{}" != Ke(Object(t));
      })
    }, {
      stringify: function stringify(t) {
        for (var e, n, r = [t], i = 1; arguments.length > i;) {
          r.push(arguments[i++]);
        }

        if (n = e = r[1], (k(e) || void 0 !== t) && !vn(t)) return Xt(e) || (e = function e(t, _e2) {
          if ("function" == typeof n && (_e2 = n.call(this, t, _e2)), !vn(_e2)) return _e2;
        }), r[1] = e, Ke.apply(Ze, r);
      }
    }), _Je[He][Ue] || F(_Je[He], Ue, _Je[He].valueOf), De(_Je, Be), Z[Ve] = !0;
    var _n = L.f,
        kn = a.Symbol;

    if (l && "function" == typeof kn && (!("description" in kn.prototype) || void 0 !== kn().description)) {
      var On = {},
          Sn = function Sn() {
        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
            e = this instanceof Sn ? new kn(t) : void 0 === t ? kn() : kn(t);
        return "" === t && (On[e] = !0), e;
      };

      It(Sn, kn);
      var An = Sn.prototype = kn.prototype;
      An.constructor = Sn;
      var jn = An.toString,
          Mn = "Symbol(test)" == String(kn("test")),
          En = /^Symbol\((.*)\)[^)]+$/;
      _n(An, "description", {
        configurable: !0,
        get: function get() {
          var t = k(this) ? this.valueOf() : this,
              e = jn.call(t);
          if (A(On, t)) return "";
          var n = Mn ? e.slice(7, -1) : e.replace(En, "$1");
          return "" === n ? void 0 : n;
        }
      }), Gt({
        global: !0,
        forced: !0
      }, {
        Symbol: Sn
      });
    }

    Pe("iterator");
    var Tn = $t("unscopables"),
        Cn = Array.prototype;
    null == Cn[Tn] && F(Cn, Tn, Me(null));

    var Pn,
        In,
        Nn,
        Dn = function Dn(t) {
      Cn[Tn][t] = !0;
    },
        Rn = {},
        Ln = !h(function () {
      function t() {}

      return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
    }),
        Fn = J("IE_PROTO"),
        zn = Object.prototype,
        qn = Ln ? Object.getPrototypeOf : function (t) {
      return t = we(t), A(t, Fn) ? t[Fn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? zn : null;
    },
        Yn = $t("iterator"),
        Gn = !1,
        Xn = function Xn() {
      return this;
    };

    [].keys && ("next" in (Nn = [].keys()) ? (In = qn(qn(Nn))) !== Object.prototype && (Pn = In) : Gn = !0), null == Pn && (Pn = {}), A(Pn, Yn) || F(Pn, Yn, Xn);

    var Vn = {
      IteratorPrototype: Pn,
      BUGGY_SAFARI_ITERATORS: Gn
    },
        Bn = Vn.IteratorPrototype,
        Hn = function Hn() {
      return this;
    },
        Un = function Un(t, e, n) {
      var r = e + " Iterator";
      return t.prototype = Me(Bn, {
        next: y(1, n)
      }), De(t, r, !1), Rn[r] = Hn, t;
    },
        $n = function $n(t) {
      if (!k(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    },
        Qn = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var t,
          e = !1,
          n = {};

      try {
        (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array;
      } catch (r) {}

      return function (n, r) {
        return N(n), $n(r), e ? t.call(n, r) : n.__proto__ = r, n;
      };
    }() : void 0),
        Wn = Vn.IteratorPrototype,
        Jn = Vn.BUGGY_SAFARI_ITERATORS,
        Zn = $t("iterator"),
        Kn = "keys",
        tr = "values",
        er = "entries",
        nr = function nr() {
      return this;
    },
        rr = function rr(t, e, n, r, i, o, s) {
      Un(n, e, r);

      var u,
          a,
          h,
          l = function l(t) {
        if (t === i && d) return d;
        if (!Jn && t in p) return p[t];

        switch (t) {
          case Kn:
          case tr:
          case er:
            return function () {
              return new n(this, t);
            };
        }

        return function () {
          return new n(this);
        };
      },
          c = e + " Iterator",
          f = !1,
          p = t.prototype,
          v = p[Zn] || p["@@iterator"] || i && p[i],
          d = !Jn && v || l(i),
          y = "Array" == e && p.entries || v;

      if (y && (u = qn(y.call(new t())), Wn !== Object.prototype && u.next && (qn(u) !== Wn && (Qn ? Qn(u, Wn) : "function" != typeof u[Zn] && F(u, Zn, nr)), De(u, c, !0))), i == tr && v && v.name !== tr && (f = !0, d = function d() {
        return v.call(this);
      }), p[Zn] !== d && F(p, Zn, d), Rn[e] = d, i) if (a = {
        values: l(tr),
        keys: o ? d : l(Kn),
        entries: l(er)
      }, s) for (h in a) {
        !Jn && !f && h in p || lt(p, h, a[h]);
      } else Gt({
        target: e,
        proto: !0,
        forced: Jn || f
      }, a);
      return a;
    },
        ir = "Array Iterator",
        or = ht.set,
        sr = ht.getterFor(ir),
        ur = rr(Array, "Array", function (t, e) {
      or(this, {
        type: ir,
        target: _(t),
        index: 0,
        kind: e
      });
    }, function () {
      var t = sr(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
      return !e || r >= e.length ? (t.target = void 0, {
        value: void 0,
        done: !0
      }) : "keys" == n ? {
        value: r,
        done: !1
      } : "values" == n ? {
        value: e[r],
        done: !1
      } : {
        value: [r, e[r]],
        done: !1
      };
    }, "values");

    Rn.Arguments = Rn.Array, Dn("keys"), Dn("values"), Dn("entries");
    var ar = Object.assign,
        hr = !ar || h(function () {
      var t = {},
          e = {},
          n = Symbol();
      return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
        e[t] = t;
      }), 7 != ar({}, t)[n] || "abcdefghijklmnopqrst" != be(ar({}, e)).join("");
    }) ? function (t, e) {
      for (var n = we(t), r = arguments.length, i = 1, o = Ct.f, s = d.f; r > i;) {
        for (var u, a = w(arguments[i++]), h = o ? be(a).concat(o(a)) : be(a), c = h.length, f = 0; c > f;) {
          u = h[f++], l && !s.call(a, u) || (n[u] = a[u]);
        }
      }

      return n;
    } : ar;
    Gt({
      target: "Object",
      stat: !0,
      forced: Object.assign !== hr
    }, {
      assign: hr
    });

    var lr = $t("toStringTag"),
        cr = "Arguments" == g(function () {
      return arguments;
    }()),
        fr = function fr(t, e) {
      try {
        return t[e];
      } catch (n) {}
    },
        pr = function pr(t) {
      var e, n, r;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = fr(e = Object(t), lr)) ? n : cr ? g(e) : "Object" == (r = g(e)) && "function" == typeof e.callee ? "Arguments" : r;
    },
        vr = $t("toStringTag"),
        dr = {};

    dr[vr] = "z";
    var yr = "[object z]" !== String(dr) ? function () {
      return "[object " + pr(this) + "]";
    } : dr.toString,
        mr = Object.prototype;
    yr !== mr.toString && lt(mr, "toString", yr, {
      unsafe: !0
    });

    var gr = !h(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
        xr = r(function (t) {
      var e = L.f,
          n = Q("meta"),
          r = 0,
          i = Object.isExtensible || function () {
        return !0;
      },
          o = function o(t) {
        e(t, n, {
          value: {
            objectID: "O" + ++r,
            weakData: {}
          }
        });
      },
          s = t.exports = {
        REQUIRED: !1,
        fastKey: function fastKey(t, e) {
          if (!k(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;

          if (!A(t, n)) {
            if (!i(t)) return "F";
            if (!e) return "E";
            o(t);
          }

          return t[n].objectID;
        },
        getWeakData: function getWeakData(t, e) {
          if (!A(t, n)) {
            if (!i(t)) return !0;
            if (!e) return !1;
            o(t);
          }

          return t[n].weakData;
        },
        onFreeze: function onFreeze(t) {
          return gr && s.REQUIRED && i(t) && !A(t, n) && o(t), t;
        }
      };

      Z[n] = !0;
    }),
        wr = $t("iterator"),
        br = Array.prototype,
        _r = function _r(t) {
      return void 0 !== t && (Rn.Array === t || br[wr] === t);
    },
        kr = $t("iterator"),
        Or = function Or(t) {
      if (null != t) return t[kr] || t["@@iterator"] || Rn[pr(t)];
    },
        Sr = function Sr(t, e, n, r) {
      try {
        return r ? e(N(n)[0], n[1]) : e(n);
      } catch (o) {
        var i = t.return;
        throw void 0 !== i && N(i.call(t)), o;
      }
    },
        Ar = r(function (t) {
      var e = function e(t, _e3) {
        this.stopped = t, this.result = _e3;
      };

      (t.exports = function (t, n, r, i, o) {
        var s,
            u,
            a,
            h,
            l,
            c,
            f,
            p = Le(n, r, i ? 2 : 1);
        if (o) s = t;else {
          if ("function" != typeof (u = Or(t))) throw TypeError("Target is not iterable");

          if (_r(u)) {
            for (a = 0, h = gt(t.length); h > a; a++) {
              if ((l = i ? p(N(f = t[a])[0], f[1]) : p(t[a])) && l instanceof e) return l;
            }

            return new e(!1);
          }

          s = u.call(t);
        }

        for (c = s.next; !(f = c.call(s)).done;) {
          if ("object" == _typeof(l = Sr(s, p, f.value, i)) && l && l instanceof e) return l;
        }

        return new e(!1);
      }).stop = function (t) {
        return new e(!0, t);
      };
    }),
        jr = function jr(t, e, n) {
      if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    },
        Mr = $t("iterator"),
        Er = !1;

    try {
      var Tr = 0,
          Cr = {
        next: function next() {
          return {
            done: !!Tr++
          };
        },
        return: function _return() {
          Er = !0;
        }
      };
      Cr[Mr] = function () {
        return this;
      }, Array.from(Cr, function () {
        throw 2;
      });
    } catch (Ql) {}

    var Pr = function Pr(t, e) {
      if (!e && !Er) return !1;
      var n = !1;

      try {
        var r = {};
        r[Mr] = function () {
          return {
            next: function next() {
              return {
                done: n = !0
              };
            }
          };
        }, t(r);
      } catch (Ql) {}

      return n;
    },
        Ir = function Ir(t, e, n) {
      var r, i;
      return Qn && "function" == typeof (r = e.constructor) && r !== n && k(i = r.prototype) && i !== n.prototype && Qn(t, i), t;
    },
        Nr = function Nr(t, e, n, r, i) {
      var o = a[t],
          s = o && o.prototype,
          u = o,
          l = r ? "set" : "add",
          c = {},
          f = function f(t) {
        var e = s[t];
        lt(s, t, "add" == t ? function (t) {
          return e.call(this, 0 === t ? 0 : t), this;
        } : "delete" == t ? function (t) {
          return !(i && !k(t)) && e.call(this, 0 === t ? 0 : t);
        } : "get" == t ? function (t) {
          return i && !k(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
        } : "has" == t ? function (t) {
          return !(i && !k(t)) && e.call(this, 0 === t ? 0 : t);
        } : function (t, n) {
          return e.call(this, 0 === t ? 0 : t, n), this;
        });
      };

      if (qt(t, "function" != typeof o || !(i || s.forEach && !h(function () {
        new o().entries().next();
      })))) u = n.getConstructor(e, t, r, l), xr.REQUIRED = !0;else if (qt(t, !0)) {
        var p = new u(),
            v = p[l](i ? {} : -0, 1) != p,
            d = h(function () {
          p.has(1);
        }),
            y = Pr(function (t) {
          new o(t);
        }),
            m = !i && h(function () {
          for (var t = new o(), e = 5; e--;) {
            t[l](e, e);
          }

          return !t.has(-0);
        });
        y || ((u = e(function (e, n) {
          jr(e, u, t);
          var i = Ir(new o(), e, u);
          return null != n && Ar(n, i[l], i, r), i;
        })).prototype = s, s.constructor = u), (d || m) && (f("delete"), f("has"), r && f("get")), (m || v) && f(l), i && s.clear && delete s.clear;
      }
      return c[t] = u, Gt({
        global: !0,
        forced: u != o
      }, c), De(u, t), i || n.setStrong(u, t, r), u;
    },
        Dr = function Dr(t, e, n) {
      for (var r in e) {
        lt(t, r, e[r], n);
      }

      return t;
    },
        Rr = $t("species"),
        Lr = function Lr(t) {
      var e = pt(t),
          n = L.f;
      l && e && !e[Rr] && n(e, Rr, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    },
        Fr = L.f,
        zr = xr.fastKey,
        qr = ht.set,
        Yr = ht.getterFor,
        Gr = {
      getConstructor: function getConstructor(t, e, n, r) {
        var i = t(function (t, o) {
          jr(t, i, e), qr(t, {
            type: e,
            index: Me(null),
            first: void 0,
            last: void 0,
            size: 0
          }), l || (t.size = 0), null != o && Ar(o, t[r], t, n);
        }),
            o = Yr(e),
            s = function s(t, e, n) {
          var r,
              i,
              s = o(t),
              a = u(t, e);
          return a ? a.value = n : (s.last = a = {
            index: i = zr(e, !0),
            key: e,
            value: n,
            previous: r = s.last,
            next: void 0,
            removed: !1
          }, s.first || (s.first = a), r && (r.next = a), l ? s.size++ : t.size++, "F" !== i && (s.index[i] = a)), t;
        },
            u = function u(t, e) {
          var n,
              r = o(t),
              i = zr(e);
          if ("F" !== i) return r.index[i];

          for (n = r.first; n; n = n.next) {
            if (n.key == e) return n;
          }
        };

        return Dr(i.prototype, {
          clear: function clear() {
            for (var t = o(this), e = t.index, n = t.first; n;) {
              n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next;
            }

            t.first = t.last = void 0, l ? t.size = 0 : this.size = 0;
          },
          delete: function _delete(t) {
            var e = o(this),
                n = u(this, t);

            if (n) {
              var r = n.next,
                  i = n.previous;
              delete e.index[n.index], n.removed = !0, i && (i.next = r), r && (r.previous = i), e.first == n && (e.first = r), e.last == n && (e.last = i), l ? e.size-- : this.size--;
            }

            return !!n;
          },
          forEach: function forEach(t) {
            for (var e, n = o(this), r = Le(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : n.first;) {
              for (r(e.value, e.key, this); e && e.removed;) {
                e = e.previous;
              }
            }
          },
          has: function has(t) {
            return !!u(this, t);
          }
        }), Dr(i.prototype, n ? {
          get: function get(t) {
            var e = u(this, t);
            return e && e.value;
          },
          set: function set(t, e) {
            return s(this, 0 === t ? 0 : t, e);
          }
        } : {
          add: function add(t) {
            return s(this, t = 0 === t ? 0 : t, t);
          }
        }), l && Fr(i.prototype, "size", {
          get: function get() {
            return o(this).size;
          }
        }), i;
      },
      setStrong: function setStrong(t, e, n) {
        var r = e + " Iterator",
            i = Yr(e),
            o = Yr(r);
        rr(t, e, function (t, e) {
          qr(this, {
            type: r,
            target: t,
            state: i(t),
            kind: e,
            last: void 0
          });
        }, function () {
          for (var t = o(this), e = t.kind, n = t.last; n && n.removed;) {
            n = n.previous;
          }

          return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
            value: n.key,
            done: !1
          } : "values" == e ? {
            value: n.value,
            done: !1
          } : {
            value: [n.key, n.value],
            done: !1
          } : (t.target = void 0, {
            value: void 0,
            done: !0
          });
        }, n ? "entries" : "values", !n, !0), Lr(e);
      }
    },
        Xr = Nr("Set", function (t) {
      return function () {
        return t(this, arguments.length ? arguments[0] : void 0);
      };
    }, Gr),
        Vr = function Vr(t) {
      return function (e, n) {
        var r,
            i,
            o = String(b(e)),
            s = yt(n),
            u = o.length;
        return s < 0 || s >= u ? t ? "" : void 0 : (r = o.charCodeAt(s)) < 55296 || r > 56319 || s + 1 === u || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? t ? o.charAt(s) : r : t ? o.slice(s, s + 2) : i - 56320 + (r - 55296 << 10) + 65536;
      };
    },
        Br = {
      codeAt: Vr(!1),
      charAt: Vr(!0)
    },
        Hr = Br.charAt,
        Ur = "String Iterator",
        $r = ht.set,
        Qr = ht.getterFor(Ur);

    rr(String, "String", function (t) {
      $r(this, {
        type: Ur,
        string: String(t),
        index: 0
      });
    }, function () {
      var t,
          e = Qr(this),
          n = e.string,
          r = e.index;
      return r >= n.length ? {
        value: void 0,
        done: !0
      } : (t = Hr(n, r), e.index += t.length, {
        value: t,
        done: !1
      });
    });
    var Wr = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    },
        Jr = $t("iterator"),
        Zr = $t("toStringTag"),
        Kr = ur.values;

    for (var ti in Wr) {
      var ei = a[ti],
          ni = ei && ei.prototype;

      if (ni) {
        if (ni[Jr] !== Kr) try {
          F(ni, Jr, Kr);
        } catch (Ql) {
          ni[Jr] = Kr;
        }
        if (ni[Zr] || F(ni, Zr, ti), Wr[ti]) for (var ri in ur) {
          if (ni[ri] !== ur[ri]) try {
            F(ni, ri, ur[ri]);
          } catch (Ql) {
            ni[ri] = ur[ri];
          }
        }
      }
    }

    function ii(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }

        return n;
      }
    }

    function oi(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    }

    function si() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function ui(t) {
      return ii(t) || oi(t) || si();
    }

    var ai = {},
        hi = [];

    function li(t, e) {
      if (Array.isArray(t)) {
        var n = !0,
            r = !1,
            i = void 0;

        try {
          for (var o, s = t[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
            li(o.value, e);
          }
        } catch (a) {
          r = !0, i = a;
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (r) throw i;
          }
        }
      } else if ("object" !== xe(t)) pi(Object.getOwnPropertyNames(e)), ai[t] = Object.assign(ai[t] || {}, e);else for (var u in t) {
        li(u, t[u]);
      }
    }

    function ci(t) {
      return ai[t] || {};
    }

    function fi() {
      return ui(new Set(hi));
    }

    function pi(t) {
      hi.push.apply(hi, ui(t));
    }

    var vi = kt.includes;
    Gt({
      target: "Array",
      proto: !0
    }, {
      includes: function includes(t) {
        return vi(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), Dn("includes");

    var di = function di() {
      var t = N(this),
          e = "";
      return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
    },
        yi = RegExp.prototype.exec,
        mi = String.prototype.replace,
        gi = yi,
        xi = function () {
      var t = /a/,
          e = /b*/g;
      return yi.call(t, "a"), yi.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex;
    }(),
        wi = void 0 !== /()??/.exec("")[1],
        bi = xi || wi;

    bi && (gi = function gi(t) {
      var e,
          n,
          r,
          i,
          o = this;
      return wi && (n = new RegExp("^" + o.source + "$(?!\\s)", di.call(o))), xi && (e = o.lastIndex), r = yi.call(o, t), xi && r && (o.lastIndex = o.global ? r.index + r[0].length : e), wi && r && r.length > 1 && mi.call(r[0], n, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          void 0 === arguments[i] && (r[i] = void 0);
        }
      }), r;
    });
    var _i = gi;
    Gt({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== _i
    }, {
      exec: _i
    });

    var ki = $t("match"),
        Oi = function Oi(t) {
      var e;
      return k(t) && (void 0 !== (e = t[ki]) ? !!e : "RegExp" == g(t));
    },
        Si = function Si(t) {
      if (Oi(t)) throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
        Ai = $t("match"),
        ji = function ji(t) {
      var e = /./;

      try {
        "/./"[t](e);
      } catch (n) {
        try {
          return e[Ai] = !1, "/./"[t](e);
        } catch (v) {}
      }

      return !1;
    };

    Gt({
      target: "String",
      proto: !0,
      forced: !ji("includes")
    }, {
      includes: function includes(t) {
        return !!~String(b(this)).indexOf(Si(t), arguments.length > 1 ? arguments[1] : void 0);
      }
    });

    var Mi = $t("species"),
        Ei = !h(function () {
      var t = /./;
      return t.exec = function () {
        var t = [];
        return t.groups = {
          a: "7"
        }, t;
      }, "7" !== "".replace(t, "$<a>");
    }),
        Ti = !h(function () {
      var t = /(?:)/,
          e = t.exec;

      t.exec = function () {
        return e.apply(this, arguments);
      };

      var n = "ab".split(t);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    }),
        Ci = function Ci(t, e, n, r) {
      var i = $t(t),
          o = !h(function () {
        var e = {};
        return e[i] = function () {
          return 7;
        }, 7 != ""[t](e);
      }),
          s = o && !h(function () {
        var e = !1,
            n = /a/;
        return "split" === t && ((n = {}).constructor = {}, n.constructor[Mi] = function () {
          return n;
        }, n.flags = "", n[i] = /./[i]), n.exec = function () {
          return e = !0, null;
        }, n[i](""), !e;
      });

      if (!o || !s || "replace" === t && !Ei || "split" === t && !Ti) {
        var u = /./[i],
            a = n(i, ""[t], function (t, e, n, r, i) {
          return e.exec === _i ? o && !i ? {
            done: !0,
            value: u.call(e, n, r)
          } : {
            done: !0,
            value: t.call(n, e, r)
          } : {
            done: !1
          };
        }),
            l = a[0],
            c = a[1];
        lt(String.prototype, t, l), lt(RegExp.prototype, i, 2 == e ? function (t, e) {
          return c.call(t, this, e);
        } : function (t) {
          return c.call(t, this);
        }), r && F(RegExp.prototype[i], "sham", !0);
      }
    },
        Pi = Br.charAt,
        Ii = function Ii(t, e, n) {
      return e + (n ? Pi(t, e).length : 1);
    },
        Ni = function Ni(t, e) {
      var n = t.exec;

      if ("function" == typeof n) {
        var r = n.call(t, e);
        if ("object" != _typeof(r)) throw TypeError("RegExp exec method returned something other than an Object or null");
        return r;
      }

      if ("RegExp" !== g(t)) throw TypeError("RegExp#exec called on incompatible receiver");
      return _i.call(t, e);
    },
        Di = Math.max,
        Ri = Math.min,
        Li = Math.floor,
        Fi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        zi = /\$([$&'`]|\d\d?)/g,
        qi = function qi(t) {
      return void 0 === t ? t : String(t);
    };

    Ci("replace", 2, function (t, e, n) {
      return [function (n, r) {
        var i = b(this),
            o = null == n ? void 0 : n[t];
        return void 0 !== o ? o.call(n, i, r) : e.call(String(i), n, r);
      }, function (t, i) {
        var o = n(e, t, this, i);
        if (o.done) return o.value;
        var s = N(t),
            u = String(this),
            a = "function" == typeof i;
        a || (i = String(i));
        var h = s.global;

        if (h) {
          var l = s.unicode;
          s.lastIndex = 0;
        }

        for (var c = [];;) {
          var f = Ni(s, u);
          if (null === f) break;
          if (c.push(f), !h) break;
          "" === String(f[0]) && (s.lastIndex = Ii(u, gt(s.lastIndex), l));
        }

        for (var p = "", v = 0, d = 0; d < c.length; d++) {
          f = c[d];

          for (var y = String(f[0]), m = Di(Ri(yt(f.index), u.length), 0), g = [], x = 1; x < f.length; x++) {
            g.push(qi(f[x]));
          }

          var w = f.groups;

          if (a) {
            var b = [y].concat(g, m, u);
            void 0 !== w && b.push(w);

            var _ = String(i.apply(void 0, b));
          } else _ = r(y, u, m, g, w, i);

          m >= v && (p += u.slice(v, m) + _, v = m + y.length);
        }

        return p + u.slice(v);
      }];

      function r(t, n, r, i, o, s) {
        var u = r + t.length,
            a = i.length,
            h = zi;
        return void 0 !== o && (o = we(o), h = Fi), e.call(s, h, function (e, s) {
          var h;

          switch (s.charAt(0)) {
            case "$":
              return "$";

            case "&":
              return t;

            case "`":
              return n.slice(0, r);

            case "'":
              return n.slice(u);

            case "<":
              h = o[s.slice(1, -1)];
              break;

            default:
              var l = +s;
              if (0 === l) return e;

              if (l > a) {
                var c = Li(l / 10);
                return 0 === c ? e : c <= a ? void 0 === i[c - 1] ? s.charAt(1) : i[c - 1] + s.charAt(1) : e;
              }

              h = i[l - 1];
          }

          return void 0 === h ? "" : h;
        });
      }
    });

    var Yi = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
        Gi = "[" + Yi + "]",
        Xi = RegExp("^" + Gi + Gi + "*"),
        Vi = RegExp(Gi + Gi + "*$"),
        Bi = function Bi(t) {
      return function (e) {
        var n = String(b(e));
        return 1 & t && (n = n.replace(Xi, "")), 2 & t && (n = n.replace(Vi, "")), n;
      };
    },
        Hi = {
      start: Bi(1),
      end: Bi(2),
      trim: Bi(3)
    },
        Ui = "​᠎",
        $i = function $i(t) {
      return h(function () {
        return !!Yi[t]() || Ui[t]() != Ui || Yi[t].name !== t;
      });
    },
        Qi = Hi.trim;

    function Wi(t, e) {
      var n,
          r = t.length,
          i = [];

      for (n = 0; n < r; n++) {
        i.push(e(t[n]));
      }

      return i;
    }

    function Ji(t, e) {
      var n,
          r = t.length,
          i = [];

      for (n = 0; n < r; n++) {
        e(t[n]) && i.push(t[n]);
      }

      return i;
    }

    function Zi(t) {
      return t % 360 * Math.PI / 180;
    }

    function Ki(t) {
      return 180 * t / Math.PI % 360;
    }

    function to(t) {
      return t.toLowerCase().replace(/-(.)/g, function (t, e) {
        return e.toUpperCase();
      });
    }

    function eo(t) {
      return t.replace(/([A-Z])/g, function (t, e) {
        return "-" + e.toLowerCase();
      });
    }

    function no(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }

    function ro(t, e, n, r) {
      return null != e && null != n || (r = r || t.bbox(), null == e ? e = r.width / r.height * n : null == n && (n = r.height / r.width * e)), {
        width: e,
        height: n
      };
    }

    function io(t, e) {
      var n,
          r,
          i = t.origin;

      if ("string" == typeof i || null == i) {
        var o = (i || "center").toLowerCase().trim(),
            s = e.bbox(),
            u = s.height,
            a = s.width,
            h = s.x,
            l = s.y,
            c = o.includes("left") ? h : o.includes("right") ? h + a : h + a / 2,
            f = o.includes("top") ? l : o.includes("bottom") ? l + u : l + u / 2;
        n = null != t.ox ? t.ox : c, r = null != t.oy ? t.oy : f;
      } else n = i[0], r = i[1];

      return [n, r];
    }

    Gt({
      target: "String",
      proto: !0,
      forced: $i("trim")
    }, {
      trim: function trim() {
        return Qi(this);
      }
    });
    var oo = {
      __proto__: null,
      map: Wi,
      filter: Ji,
      radians: Zi,
      degrees: Ki,
      camelCase: to,
      unCamelCase: eo,
      capitalize: no,
      proportionalSize: ro,
      getOrigin: io
    };
    exports.utils = oo;
    var so = "http://www.w3.org/2000/svg",
        uo = "http://www.w3.org/2000/xmlns/",
        ao = "http://www.w3.org/1999/xlink",
        ho = "http://svgjs.com/svgjs",
        lo = {
      __proto__: null,
      ns: so,
      xmlns: uo,
      xlink: ao,
      svgjs: ho
    };
    exports.namespaces = lo;
    var co = {
      window: "undefined" == typeof window ? null : window,
      document: "undefined" == typeof document ? null : document
    };

    function fo() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      co.window = t, co.document = e;
    }

    function po(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    var vo = function t() {
      po(this, t);
    },
        yo = {},
        mo = "___SYMBOL___ROOT___";

    function go(t) {
      return co.document.createElementNS(so, t);
    }

    function xo(t) {
      if (t instanceof vo) return t;
      if ("object" === xe(t)) return _o(t);
      if (null == t) return new yo[mo]();
      if ("string" == typeof t && "<" !== t.charAt(0)) return _o(co.document.querySelector(t));
      var e = go("svg");
      return e.innerHTML = t, t = _o(e.firstChild);
    }

    function wo(t, e) {
      return e instanceof co.window.Node ? e : go(t);
    }

    function bo(t) {
      if (!t) return null;
      if (t.instance instanceof vo) return t.instance;
      var e = no(t.nodeName || "Dom");
      return "LinearGradient" === e || "RadialGradient" === e ? e = "Gradient" : yo[e] || (e = "Dom"), new yo[e](t);
    }

    exports.root = mo;
    var _o = bo;

    function ko() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bo;
      _o = t;
    }

    function Oo(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.name,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return yo[e] = t, n && (yo[mo] = t), pi(Object.getOwnPropertyNames(t.prototype)), t;
    }

    function So(t) {
      return yo[t];
    }

    var Ao = 1e3;

    function jo(t) {
      return "Svgjs" + no(t) + Ao++;
    }

    function Mo(t) {
      for (var e = t.children.length - 1; e >= 0; e--) {
        Mo(t.children[e]);
      }

      return t.id ? bo(t).id(jo(t.nodeName)) : bo(t);
    }

    function Eo(t, e, n) {
      var r, i;

      for (i = (t = Array.isArray(t) ? t : [t]).length - 1; i >= 0; i--) {
        for (r in e) {
          var o = e[r];
          n && (o = To(e[r])), t[i].prototype[r] = o;
        }
      }
    }

    function To(t) {
      return function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
          n[r] = arguments[r];
        }

        var i = n[n.length - 1];
        return !i || i.constructor !== Object || i instanceof Array ? t.apply(this, n) : t.apply(this, n.slice(0, -1)).attr(i);
      };
    }

    function Co(t) {
      var e = "function" == typeof t.create ? t.create : function (e) {
        this.constructor(e || go(t.create));
      };
      return t.inherit && (e.prototype = new t.inherit(), e.prototype.constructor = e), t.extend && Eo(e, t.extend), t.construct && Eo(t.parent || yo.Container, t.construct), e;
    }

    function Po() {
      return this.parent().children();
    }

    function Io() {
      return this.parent().index(this);
    }

    function No() {
      return this.siblings()[this.position() + 1];
    }

    function Do() {
      return this.siblings()[this.position() - 1];
    }

    function Ro() {
      var t = this.position() + 1,
          e = this.parent();
      return e.removeElement(this).add(this, t), "function" == typeof e.isRoot && e.isRoot() && e.node.appendChild(e.defs().node), this;
    }

    function Lo() {
      var t = this.position();
      return t > 0 && this.parent().removeElement(this).add(this, t - 1), this;
    }

    function Fo() {
      var t = this.parent();
      return t.node.appendChild(this.node), "function" == typeof t.isRoot && t.isRoot() && t.node.appendChild(t.defs().node), this;
    }

    function zo() {
      return this.position() > 0 && this.parent().removeElement(this).add(this, 0), this;
    }

    function qo(t) {
      (t = xo(t)).remove();
      var e = this.position();
      return this.parent().add(t, e), this;
    }

    function Yo(t) {
      (t = xo(t)).remove();
      var e = this.position();
      return this.parent().add(t, e + 1), this;
    }

    function Go(t) {
      return (t = xo(t)).before(this), this;
    }

    function Xo(t) {
      return (t = xo(t)).after(this), this;
    }

    li("Dom", {
      siblings: Po,
      position: Io,
      next: No,
      prev: Do,
      forward: Ro,
      backward: Lo,
      front: Fo,
      back: zo,
      before: qo,
      after: Yo,
      insertBefore: Go,
      insertAfter: Xo
    });
    var Vo = Ge.filter;
    Gt({
      target: "Array",
      proto: !0,
      forced: !ee("filter")
    }, {
      filter: function filter(t) {
        return Vo(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });

    var Bo = function Bo(t, e) {
      var n = [][t];
      return !n || !h(function () {
        n.call(null, e || function () {
          throw 1;
        }, 1);
      });
    },
        Ho = kt.indexOf,
        Uo = [].indexOf,
        $o = !!Uo && 1 / [1].indexOf(1, -0) < 0,
        Qo = Bo("indexOf");

    Gt({
      target: "Array",
      proto: !0,
      forced: $o || Qo
    }, {
      indexOf: function indexOf(t) {
        return $o ? Uo.apply(this, arguments) || 0 : Ho(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    var Wo = [].join,
        Jo = w != Object,
        Zo = Bo("join", ",");
    Gt({
      target: "Array",
      proto: !0,
      forced: Jo || Zo
    }, {
      join: function join(t) {
        return Wo.call(_(this), void 0 === t ? "," : t);
      }
    });

    var Ko = $t("species"),
        ts = function ts(t, e) {
      var n,
          r = N(t).constructor;
      return void 0 === r || null == (n = N(r)[Ko]) ? e : Re(n);
    },
        es = [].push,
        ns = Math.min,
        rs = 4294967295,
        is = !h(function () {
      return !RegExp(rs, "y");
    });

    Ci("split", 2, function (t, e, n) {
      var r;
      return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
        var r = String(b(this)),
            i = void 0 === n ? rs : n >>> 0;
        if (0 === i) return [];
        if (void 0 === t) return [r];
        if (!Oi(t)) return e.call(r, t, i);

        for (var o, s, u, a = [], h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, c = new RegExp(t.source, h + "g"); (o = _i.call(c, r)) && !((s = c.lastIndex) > l && (a.push(r.slice(l, o.index)), o.length > 1 && o.index < r.length && es.apply(a, o.slice(1)), u = o[0].length, l = s, a.length >= i));) {
          c.lastIndex === o.index && c.lastIndex++;
        }

        return l === r.length ? !u && c.test("") || a.push("") : a.push(r.slice(l)), a.length > i ? a.slice(0, i) : a;
      } : "0".split(void 0, 0).length ? function (t, n) {
        return void 0 === t && 0 === n ? [] : e.call(this, t, n);
      } : e, [function (e, n) {
        var i = b(this),
            o = null == e ? void 0 : e[t];
        return void 0 !== o ? o.call(e, i, n) : r.call(String(i), e, n);
      }, function (t, i) {
        var o = n(r, t, this, i, r !== e);
        if (o.done) return o.value;
        var s = N(t),
            u = String(this),
            a = ts(s, RegExp),
            h = s.unicode,
            l = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (is ? "y" : "g"),
            c = new a(is ? s : "^(?:" + s.source + ")", l),
            f = void 0 === i ? rs : i >>> 0;
        if (0 === f) return [];
        if (0 === u.length) return null === Ni(c, u) ? [u] : [];

        for (var p = 0, v = 0, d = []; v < u.length;) {
          c.lastIndex = is ? v : 0;
          var y,
              m = Ni(c, is ? u : u.slice(v));
          if (null === m || (y = ns(gt(c.lastIndex + (is ? 0 : v)), u.length)) === p) v = Ii(u, v, h);else {
            if (d.push(u.slice(p, v)), d.length === f) return d;

            for (var g = 1; g <= m.length - 1; g++) {
              if (d.push(m[g]), d.length === f) return d;
            }

            v = p = y;
          }
        }

        return d.push(u.slice(p)), d;
      }];
    }, !is);
    var os = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
        ss = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
        us = /rgb\((\d+),(\d+),(\d+)\)/,
        as = /(#[a-z0-9\-_]+)/i,
        hs = /\)\s*,?\s*/,
        ls = /\s/g,
        cs = /^#[a-f0-9]{3,6}$/i,
        fs = /^rgb\(/,
        ps = /[^:]+:[^;]+;?/,
        vs = /^(\s+)?$/,
        ds = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        ys = /^-?[\d.]+%$/,
        ms = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
        gs = /[\s,]+/,
        xs = /([^e])-/gi,
        ws = /[MLHVCSQTAZ]/gi,
        bs = /[MLHVCSQTAZ]/i,
        _s = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
        ks = /\./g,
        Os = {
      __proto__: null,
      numberAndUnit: os,
      hex: ss,
      rgb: us,
      reference: as,
      transforms: hs,
      whitespace: ls,
      isHex: cs,
      isRgb: fs,
      isCss: ps,
      isBlank: vs,
      isNumber: ds,
      isPercent: ys,
      isImage: ms,
      delimiter: gs,
      hyphen: xs,
      pathLetters: ws,
      isPathLetter: bs,
      numbersWithDots: _s,
      dots: ks
    };

    function Ss() {
      var t = this.attr("class");
      return null == t ? [] : t.trim().split(gs);
    }

    function As(t) {
      return -1 !== this.classes().indexOf(t);
    }

    function js(t) {
      if (!this.hasClass(t)) {
        var e = this.classes();
        e.push(t), this.attr("class", e.join(" "));
      }

      return this;
    }

    function Ms(t) {
      return this.hasClass(t) && this.attr("class", this.classes().filter(function (e) {
        return e !== t;
      }).join(" ")), this;
    }

    function Es(t) {
      return this.hasClass(t) ? this.removeClass(t) : this.addClass(t);
    }

    exports.regex = Os, li("Dom", {
      classes: Ss,
      hasClass: As,
      addClass: js,
      removeClass: Ms,
      toggleClass: Es
    });
    var Ts = Ge.forEach,
        Cs = Bo("forEach") ? function (t) {
      return Ts(this, t, arguments.length > 1 ? arguments[1] : void 0);
    } : [].forEach;

    for (var Ps in Gt({
      target: "Array",
      proto: !0,
      forced: [].forEach != Cs
    }, {
      forEach: Cs
    }), Wr) {
      var Is = a[Ps],
          Ns = Is && Is.prototype;
      if (Ns && Ns.forEach !== Cs) try {
        F(Ns, "forEach", Cs);
      } catch (Ql) {
        Ns.forEach = Cs;
      }
    }

    function Ds(t, e) {
      var n = {};
      if (0 === arguments.length) return this.node.style.cssText.split(/\s*;\s*/).filter(function (t) {
        return !!t.length;
      }).forEach(function (t) {
        var e = t.split(/\s*:\s*/);
        n[e[0]] = e[1];
      }), n;

      if (arguments.length < 2) {
        if (Array.isArray(t)) {
          var r = !0,
              i = !1,
              o = void 0;

          try {
            for (var s, u = t[Symbol.iterator](); !(r = (s = u.next()).done); r = !0) {
              var a = to(s.value);
              n[a] = this.node.style[a];
            }
          } catch (l) {
            i = !0, o = l;
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (i) throw o;
            }
          }

          return n;
        }

        if ("string" == typeof t) return this.node.style[to(t)];
        if ("object" === xe(t)) for (var h in t) {
          this.node.style[to(h)] = null == t[h] || vs.test(t[h]) ? "" : t[h];
        }
      }

      return 2 === arguments.length && (this.node.style[to(t)] = null == e || vs.test(e) ? "" : e), this;
    }

    function Rs() {
      return this.css("display", "");
    }

    function Ls() {
      return this.css("display", "none");
    }

    function Fs() {
      return "none" !== this.css("display");
    }

    function zs(t, e, n) {
      if ("object" === xe(t)) for (e in t) {
        this.data(e, t[e]);
      } else if (arguments.length < 2) try {
        return JSON.parse(this.attr("data-" + t));
      } catch (r) {
        return this.attr("data-" + t);
      } else this.attr("data-" + t, null === e ? null : !0 === n || "string" == typeof e || "number" == typeof e ? e : JSON.stringify(e));
      return this;
    }

    function qs(t, e) {
      if ("object" === xe(arguments[0])) for (var n in t) {
        this.remember(n, t[n]);
      } else {
        if (1 === arguments.length) return this.memory()[t];
        this.memory()[t] = e;
      }
      return this;
    }

    function Ys() {
      if (0 === arguments.length) this._memory = {};else for (var t = arguments.length - 1; t >= 0; t--) {
        delete this.memory()[arguments[t]];
      }
      return this;
    }

    function Gs() {
      return this._memory = this._memory || {};
    }

    li("Dom", {
      css: Ds,
      show: Rs,
      hide: Ls,
      visible: Fs
    }), li("Dom", {
      data: zs
    }), li("Dom", {
      remember: qs,
      forget: Ys,
      memory: Gs
    });

    var Xs = function Xs(t) {
      return function (e, n, r, i) {
        Re(n);
        var o = we(e),
            s = w(o),
            u = gt(o.length),
            a = t ? u - 1 : 0,
            h = t ? -1 : 1;
        if (r < 2) for (;;) {
          if (a in s) {
            i = s[a], a += h;
            break;
          }

          if (a += h, t ? a < 0 : u <= a) throw TypeError("Reduce of empty array with no initial value");
        }

        for (; t ? a >= 0 : u > a; a += h) {
          a in s && (i = n(i, s[a], a, o));
        }

        return i;
      };
    },
        Vs = {
      left: Xs(!1),
      right: Xs(!0)
    },
        Bs = Vs.left;

    Gt({
      target: "Array",
      proto: !0,
      forced: Bo("reduce")
    }, {
      reduce: function reduce(t) {
        return Bs(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    var Hs = 0,
        Us = {};

    function $s(t) {
      var e = t.getEventHolder();
      return e === co.window && (e = Us), e.events || (e.events = {}), e.events;
    }

    function Qs(t) {
      return t.getEventTarget();
    }

    function Ws(t) {
      var e = t.getEventHolder();
      e.events && (e.events = {});
    }

    function Js(t, e, n, r, i) {
      var o = n.bind(r || t),
          s = xo(t),
          u = $s(s),
          a = Qs(s);
      e = Array.isArray(e) ? e : e.split(gs), n._svgjsListenerId || (n._svgjsListenerId = ++Hs), e.forEach(function (t) {
        var e = t.split(".")[0],
            r = t.split(".")[1] || "*";
        u[e] = u[e] || {}, u[e][r] = u[e][r] || {}, u[e][r][n._svgjsListenerId] = o, a.addEventListener(e, o, i || !1);
      });
    }

    function Zs(t, e, n, r) {
      var i = xo(t),
          o = $s(i),
          s = Qs(i);
      ("function" != typeof n || (n = n._svgjsListenerId)) && (e = Array.isArray(e) ? e : (e || "").split(gs)).forEach(function (t) {
        var e,
            u,
            a = t && t.split(".")[0],
            h = t && t.split(".")[1];
        if (n) o[a] && o[a][h || "*"] && (s.removeEventListener(a, o[a][h || "*"][n], r || !1), delete o[a][h || "*"][n]);else if (a && h) {
          if (o[a] && o[a][h]) {
            for (u in o[a][h]) {
              Zs(s, [a, h].join("."), u);
            }

            delete o[a][h];
          }
        } else if (h) for (t in o) {
          for (e in o[t]) {
            h === e && Zs(s, [t, h].join("."));
          }
        } else if (a) {
          if (o[a]) {
            for (e in o[a]) {
              Zs(s, [a, e].join("."));
            }

            delete o[a];
          }
        } else {
          for (t in o) {
            Zs(s, t);
          }

          Ws(i);
        }
      });
    }

    function Ks(t, e, n) {
      var r = Qs(t);
      return e instanceof co.window.Event ? r.dispatchEvent(e) : (e = new co.window.CustomEvent(e, {
        detail: n,
        cancelable: !0
      }), r.dispatchEvent(e)), e;
    }

    var tu = $t("isConcatSpreadable"),
        eu = 9007199254740991,
        nu = "Maximum allowed index exceeded",
        ru = Kt >= 51 || !h(function () {
      var t = [];
      return t[tu] = !1, t.concat()[0] !== t;
    }),
        iu = ee("concat"),
        ou = function ou(t) {
      if (!k(t)) return !1;
      var e = t[tu];
      return void 0 !== e ? !!e : Xt(t);
    },
        su = !ru || !iu;

    Gt({
      target: "Array",
      proto: !0,
      forced: su
    }, {
      concat: function concat(t) {
        var e,
            n,
            r,
            i,
            o,
            s = we(this),
            u = ze(s, 0),
            a = 0;

        for (e = -1, r = arguments.length; e < r; e++) {
          if (o = -1 === e ? s : arguments[e], ou(o)) {
            if (a + (i = gt(o.length)) > eu) throw TypeError(nu);

            for (n = 0; n < i; n++, a++) {
              n in o && Vt(u, a, o[n]);
            }
          } else {
            if (a >= eu) throw TypeError(nu);
            Vt(u, a++, o);
          }
        }

        return u.length = a, u;
      }
    });
    var uu = Ge.map;
    Gt({
      target: "Array",
      proto: !0,
      forced: !ee("map")
    }, {
      map: function map(t) {
        return uu(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    var au = Date.prototype,
        hu = "Invalid Date",
        lu = "toString",
        cu = au[lu],
        fu = au.getTime;
    new Date(NaN) + "" != hu && lt(au, lu, function () {
      var t = fu.call(this);
      return t == t ? cu.call(this) : hu;
    });
    var pu = Hi.trim,
        vu = a.parseInt,
        du = /^[+-]?0[Xx]/,
        yu = 8 !== vu(Yi + "08") || 22 !== vu(Yi + "0x16"),
        mu = yu ? function (t, e) {
      var n = pu(String(t));
      return vu(n, e >>> 0 || (du.test(n) ? 16 : 10));
    } : vu;
    Gt({
      global: !0,
      forced: parseInt != mu
    }, {
      parseInt: mu
    });

    var gu = "toString",
        xu = RegExp.prototype,
        wu = xu[gu],
        bu = h(function () {
      return "/a/b" != wu.call({
        source: "a",
        flags: "b"
      });
    }),
        _u = wu.name != gu;

    function ku(t) {
      if (Array.isArray(t)) return t;
    }

    function Ou(t, e) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;

        try {
          for (var s, u = t[Symbol.iterator](); !(r = (s = u.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) {
            ;
          }
        } catch (a) {
          i = !0, o = a;
        } finally {
          try {
            r || null == u.return || u.return();
          } finally {
            if (i) throw o;
          }
        }

        return n;
      }
    }

    function Su() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function Au(t, e) {
      return ku(t) || Ou(t, e) || Su();
    }

    function ju(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    function Mu(t, e, n) {
      return e && ju(t.prototype, e), n && ju(t, n), t;
    }

    function Eu(t) {
      return 4 === t.length ? ["#", t.substring(1, 2), t.substring(1, 2), t.substring(2, 3), t.substring(2, 3), t.substring(3, 4), t.substring(3, 4)].join("") : t;
    }

    function Tu(t) {
      var e = Math.round(t),
          n = Math.max(0, Math.min(255, e)).toString(16);
      return 1 === n.length ? "0" + n : n;
    }

    function Cu(t, e) {
      for (var n = e.length; n--;) {
        if (null == t[e[n]]) return !1;
      }

      return !0;
    }

    function Pu(t, e) {
      var n = Cu(t, "rgb") ? {
        _a: t.r,
        _b: t.g,
        _c: t.b,
        space: "rgb"
      } : Cu(t, "xyz") ? {
        _a: t.x,
        _b: t.y,
        _c: t.z,
        _d: 0,
        space: "xyz"
      } : Cu(t, "hsl") ? {
        _a: t.h,
        _b: t.s,
        _c: t.l,
        _d: 0,
        space: "hsl"
      } : Cu(t, "lab") ? {
        _a: t.l,
        _b: t.a,
        _c: t.b,
        _d: 0,
        space: "lab"
      } : Cu(t, "lch") ? {
        _a: t.l,
        _b: t.c,
        _c: t.h,
        _d: 0,
        space: "lch"
      } : Cu(t, "cmyk") ? {
        _a: t.c,
        _b: t.m,
        _c: t.y,
        _d: t.k,
        space: "cmyk"
      } : {
        _a: 0,
        _b: 0,
        _c: 0,
        space: "rgb"
      };
      return n.space = e || n.space, n;
    }

    function Iu(t) {
      return "lab" === t || "xyz" === t || "lch" === t;
    }

    function Nu(t, e, n) {
      return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
    }

    (bu || _u) && lt(RegExp.prototype, gu, function () {
      var t = N(this),
          e = String(t.source),
          n = t.flags;
      return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in xu) ? di.call(t) : n);
    }, {
      unsafe: !0
    });

    var Du = function () {
      function t() {
        po(this, t), this.init.apply(this, arguments);
      }

      return Mu(t, [{
        key: "init",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
              i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "rgb";
          if (t = t || 0, this.space) for (var o in this.space) {
            delete this[this.space[o]];
          }
          if ("number" == typeof t) i = "string" == typeof r ? r : i, r = "string" == typeof r ? 0 : r, Object.assign(this, {
            _a: t,
            _b: e,
            _c: n,
            _d: r,
            space: i
          });else if (t instanceof Array) this.space = e || ("string" == typeof t[3] ? t[3] : t[4]) || "rgb", Object.assign(this, {
            _a: t[0],
            _b: t[1],
            _c: t[2],
            _d: t[3] || 0
          });else if (t instanceof Object) {
            var s = Pu(t, e);
            Object.assign(this, s);
          } else if ("string" == typeof t) if (fs.test(t)) {
            var u = t.replace(ls, ""),
                a = Au(us.exec(u).slice(1, 4).map(function (t) {
              return parseInt(t);
            }), 3),
                h = a[0],
                l = a[1],
                c = a[2];
            Object.assign(this, {
              _a: h,
              _b: l,
              _c: c,
              _d: 0,
              space: "rgb"
            });
          } else {
            if (!cs.test(t)) throw Error("Unsupported string format, can't construct Color");
            var f = Au(ss.exec(Eu(t)).map(function (t) {
              return parseInt(t, 16);
            }), 4),
                p = f[1],
                v = f[2],
                d = f[3];
            Object.assign(this, {
              _a: p,
              _b: v,
              _c: d,
              _d: 0,
              space: "rgb"
            });
          }
          var y = this._a,
              m = this._b,
              g = this._c,
              x = this._d,
              w = "rgb" === this.space ? {
            r: y,
            g: m,
            b: g
          } : "xyz" === this.space ? {
            x: y,
            y: m,
            z: g
          } : "hsl" === this.space ? {
            h: y,
            s: m,
            l: g
          } : "lab" === this.space ? {
            l: y,
            a: m,
            b: g
          } : "lch" === this.space ? {
            l: y,
            c: m,
            h: g
          } : "cmyk" === this.space ? {
            c: y,
            m: m,
            y: g,
            k: x
          } : {};
          Object.assign(this, w);
        }
      }, {
        key: "rgb",
        value: function value() {
          if ("rgb" === this.space) return this;

          if (Iu(this.space)) {
            var e = this.x,
                n = this.y,
                r = this.z;

            if ("lab" === this.space || "lch" === this.space) {
              var i = this.l,
                  o = this.a,
                  s = this.b;

              if ("lch" === this.space) {
                var u = this.c,
                    a = this.h,
                    h = Math.PI / 180;
                o = u * Math.cos(h * a), s = u * Math.sin(h * a);
              }

              var l = (i + 16) / 116,
                  c = o / 500 + l,
                  f = l - s / 200,
                  p = 16 / 116,
                  v = .008856;
              e = .95047 * (Math.pow(c, 3) > v ? Math.pow(c, 3) : (c - p) / 7.787), n = 1 * (Math.pow(l, 3) > v ? Math.pow(l, 3) : (l - p) / 7.787), r = 1.08883 * (Math.pow(f, 3) > v ? Math.pow(f, 3) : (f - p) / 7.787);
            }

            var d = 3.2406 * e + -1.5372 * n + -.4986 * r,
                y = -.9689 * e + 1.8758 * n + .0415 * r,
                m = .0557 * e + -.204 * n + 1.057 * r,
                g = Math.pow,
                x = .0031308;
            return new t(255 * (d > x ? 1.055 * g(d, 1 / 2.4) - .055 : 12.92 * d), 255 * (y > x ? 1.055 * g(y, 1 / 2.4) - .055 : 12.92 * y), 255 * (m > x ? 1.055 * g(m, 1 / 2.4) - .055 : 12.92 * m));
          }

          if ("hsl" === this.space) {
            var w = this.h,
                b = this.s,
                _ = this.l;
            if (w /= 360, _ /= 100, 0 === (b /= 100)) return new t(_ *= 255, _, _);
            var k = _ < .5 ? _ * (1 + b) : _ + b - _ * b,
                O = 2 * _ - k;
            return new t(255 * Nu(O, k, w + 1 / 3), 255 * Nu(O, k, w), 255 * Nu(O, k, w - 1 / 3));
          }

          if ("cmyk" === this.space) {
            var S = this.c,
                A = this.m,
                j = this.y,
                M = this.k;
            return new t(255 * (1 - Math.min(1, S * (1 - M) + M)), 255 * (1 - Math.min(1, A * (1 - M) + M)), 255 * (1 - Math.min(1, j * (1 - M) + M)));
          }

          return this;
        }
      }, {
        key: "lab",
        value: function value() {
          var e = this.xyz(),
              n = e.x,
              r = e.y;
          return new t(116 * r - 16, 500 * (n - r), 200 * (r - e.z), "lab");
        }
      }, {
        key: "xyz",
        value: function value() {
          var e = this.rgb(),
              n = Au([e._a, e._b, e._c].map(function (t) {
            return t / 255;
          }), 3),
              r = n[0],
              i = n[1],
              o = n[2],
              s = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92,
              u = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92,
              a = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92,
              h = (.4124 * s + .3576 * u + .1805 * a) / .95047,
              l = (.2126 * s + .7152 * u + .0722 * a) / 1,
              c = (.0193 * s + .1192 * u + .9505 * a) / 1.08883;
          return new t(h > .008856 ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116, l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, c > .008856 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, "xyz");
        }
      }, {
        key: "lch",
        value: function value() {
          var e = this.lab(),
              n = e.l,
              r = e.a,
              i = e.b,
              o = Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)),
              s = 180 * Math.atan2(i, r) / Math.PI;
          return s < 0 && (s = 360 - (s *= -1)), new t(n, o, s, "lch");
        }
      }, {
        key: "hsl",
        value: function value() {
          var e = this.rgb(),
              n = Au([e._a, e._b, e._c].map(function (t) {
            return t / 255;
          }), 3),
              r = n[0],
              i = n[1],
              o = n[2],
              s = Math.max(r, i, o),
              u = Math.min(r, i, o),
              a = (s + u) / 2,
              h = s === u,
              l = s - u;
          return new t(360 * (h ? 0 : s === r ? ((i - o) / l + (i < o ? 6 : 0)) / 6 : s === i ? ((o - r) / l + 2) / 6 : s === o ? ((r - i) / l + 4) / 6 : 0), 100 * (h ? 0 : a > .5 ? l / (2 - s - u) : l / (s + u)), 100 * a, "hsl");
        }
      }, {
        key: "cmyk",
        value: function value() {
          var e = this.rgb(),
              n = Au([e._a, e._b, e._c].map(function (t) {
            return t / 255;
          }), 3),
              r = n[0],
              i = n[1],
              o = n[2],
              s = Math.min(1 - r, 1 - i, 1 - o);
          return 1 === s ? new t(0, 0, 0, 1, "cmyk") : new t((1 - r - s) / (1 - s), (1 - i - s) / (1 - s), (1 - o - s) / (1 - s), s, "cmyk");
        }
      }, {
        key: "_clamped",
        value: function value() {
          var t = this.rgb(),
              e = t._a,
              n = t._b,
              r = t._c,
              i = Math.max,
              o = Math.min,
              s = Math.round;
          return [e, n, r].map(function (t) {
            return i(0, o(s(t), 255));
          });
        }
      }, {
        key: "toHex",
        value: function value() {
          var t = Au(this._clamped().map(Tu), 3),
              e = t[0],
              n = t[1],
              r = t[2];
          return "#".concat(e).concat(n).concat(r);
        }
      }, {
        key: "toString",
        value: function value() {
          return this.toHex();
        }
      }, {
        key: "toRgb",
        value: function value() {
          var t = Au(this._clamped(), 3),
              e = t[0],
              n = t[1],
              r = t[2];
          return "rgb(".concat(e, ",").concat(n, ",").concat(r, ")");
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this._a, this._b, this._c, this._d, this.space];
        }
      }], [{
        key: "random",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "vibrant",
              n = arguments.length > 1 ? arguments[1] : void 0,
              r = Math.random,
              i = Math.round,
              o = Math.sin,
              s = Math.PI;
          if ("vibrant" === e) return new t(24 * r() + 57, 38 * r() + 45, 360 * r(), "lch");
          if ("sine" === e) return new t(i(80 * o(2 * s * (n = null == n ? r() : n) / .5 + .01) + 150), i(50 * o(2 * s * n / .5 + 4.6) + 200), i(100 * o(2 * s * n / .5 + 2.3) + 150));
          if ("pastel" === e) return new t(8 * r() + 86, 17 * r() + 9, 360 * r(), "lch");
          if ("dark" === e) return new t(10 + 10 * r(), 50 * r() + 86, 360 * r(), "lch");
          if ("rgb" === e) return new t(255 * r(), 255 * r(), 255 * r());
          if ("lab" === e) return new t(100 * r(), 256 * r() - 128, 256 * r() - 128, "lab");

          if ("grey" === e) {
            var u = 255 * r();
            return new t(u, u, u);
          }
        }
      }, {
        key: "test",
        value: function value(t) {
          return "string" == typeof t && (cs.test(t) || fs.test(t));
        }
      }, {
        key: "isRgb",
        value: function value(t) {
          return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b;
        }
      }, {
        key: "isColor",
        value: function value(e) {
          return e && (e instanceof t || this.isRgb(e) || this.test(e));
        }
      }]), t;
    }();

    exports.Color = Du;
    var Ru = h(function () {
      be(1);
    });

    function Lu(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function Fu(t, e) {
      return !e || "object" !== xe(e) && "function" != typeof e ? Lu(t) : e;
    }

    function zu(t) {
      return (zu = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function qu(t, e) {
      for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = zu(t));) {
        ;
      }

      return t;
    }

    function Yu(t, e, n) {
      return (Yu = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var r = qu(t, e);

        if (r) {
          var i = Object.getOwnPropertyDescriptor(r, e);
          return i.get ? i.get.call(n) : i.value;
        }
      })(t, e, n || t);
    }

    function Gu(t, e) {
      return (Gu = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function Xu(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && Gu(t, e);
    }

    Gt({
      target: "Object",
      stat: !0,
      forced: Ru
    }, {
      keys: function keys(t) {
        return be(we(t));
      }
    }), Ci("match", 1, function (t, e, n) {
      return [function (e) {
        var n = b(this),
            r = null == e ? void 0 : e[t];
        return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
      }, function (t) {
        var r = n(e, t, this);
        if (r.done) return r.value;
        var i = N(t),
            o = String(this);
        if (!i.global) return Ni(i, o);
        var s = i.unicode;
        i.lastIndex = 0;

        for (var u, a = [], h = 0; null !== (u = Ni(i, o));) {
          var l = String(u[0]);
          a[h] = l, "" === l && (i.lastIndex = Ii(o, gt(i.lastIndex), s)), h++;
        }

        return 0 === h ? null : a;
      }];
    });

    var Vu = Et.f,
        Bu = I.f,
        Hu = L.f,
        Uu = Hi.trim,
        $u = "Number",
        Qu = a[$u],
        Wu = Qu.prototype,
        Ju = g(Me(Wu)) == $u,
        Zu = function Zu(t) {
      var e,
          n,
          r,
          i,
          o,
          s,
          u,
          a,
          h = O(t, !1);
      if ("string" == typeof h && h.length > 2) if (43 === (e = (h = Uu(h)).charCodeAt(0)) || 45 === e) {
        if (88 === (n = h.charCodeAt(2)) || 120 === n) return NaN;
      } else if (48 === e) {
        switch (h.charCodeAt(1)) {
          case 66:
          case 98:
            r = 2, i = 49;
            break;

          case 79:
          case 111:
            r = 8, i = 55;
            break;

          default:
            return +h;
        }

        for (s = (o = h.slice(2)).length, u = 0; u < s; u++) {
          if ((a = o.charCodeAt(u)) < 48 || a > i) return NaN;
        }

        return parseInt(o, r);
      }
      return +h;
    };

    if (qt($u, !Qu(" 0o1") || !Qu("0b1") || Qu("+0x1"))) {
      for (var Ku, ta = function ta(t) {
        var e = arguments.length < 1 ? 0 : t,
            n = this;
        return n instanceof ta && (Ju ? h(function () {
          Wu.valueOf.call(n);
        }) : g(n) != $u) ? Ir(new Qu(Zu(e)), n, ta) : Zu(e);
      }, ea = l ? Vu(Qu) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), na = 0; ea.length > na; na++) {
        A(Qu, Ku = ea[na]) && !A(ta, Ku) && Hu(ta, Ku, Bu(Qu, Ku));
      }

      ta.prototype = Wu, Wu.constructor = ta, lt(a, $u, ta);
    }

    var ra = Hi.trim,
        ia = a.parseFloat,
        oa = 1 / ia(Yi + "-0") != -1 / 0,
        sa = oa ? function (t) {
      var e = ra(String(t)),
          n = ia(e);
      return 0 === n && "-" == e.charAt(0) ? -0 : n;
    } : ia;
    Gt({
      global: !0,
      forced: parseFloat != sa
    }, {
      parseFloat: sa
    });

    var ua = function () {
      function t() {
        po(this, t), this.init.apply(this, arguments);
      }

      return Mu(t, [{
        key: "init",
        value: function value(t, e) {
          var n = 0,
              r = 0,
              i = Array.isArray(t) ? {
            x: t[0],
            y: t[1]
          } : "object" === xe(t) ? {
            x: t.x,
            y: t.y
          } : {
            x: t,
            y: e
          };
          return this.x = null == i.x ? n : i.x, this.y = null == i.y ? r : i.y, this;
        }
      }, {
        key: "clone",
        value: function value() {
          return new t(this);
        }
      }, {
        key: "transform",
        value: function value(t) {
          return this.clone().transformO(t);
        }
      }, {
        key: "transformO",
        value: function value(t) {
          la.isMatrixLike(t) || (t = new la(t));
          var e = this.x,
              n = this.y;
          return this.x = t.a * e + t.c * n + t.e, this.y = t.b * e + t.d * n + t.f, this;
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.x, this.y];
        }
      }]), t;
    }();

    function aa(t, e) {
      return new ua(t, e).transform(this.screenCTM().inverse());
    }

    function ha(t, e, n) {
      return Math.abs(e - t) < (n || 1e-6);
    }

    exports.Point = ua;

    var la = function () {
      function t() {
        po(this, t), this.init.apply(this, arguments);
      }

      return Mu(t, [{
        key: "init",
        value: function value(e) {
          var n = t.fromArray([1, 0, 0, 1, 0, 0]);
          return e = e instanceof La ? e.matrixify() : "string" == typeof e ? t.fromArray(e.split(gs).map(parseFloat)) : Array.isArray(e) ? t.fromArray(e) : "object" === xe(e) && t.isMatrixLike(e) ? e : "object" === xe(e) ? new t().transform(e) : 6 === arguments.length ? t.fromArray([].slice.call(arguments)) : n, this.a = null != e.a ? e.a : n.a, this.b = null != e.b ? e.b : n.b, this.c = null != e.c ? e.c : n.c, this.d = null != e.d ? e.d : n.d, this.e = null != e.e ? e.e : n.e, this.f = null != e.f ? e.f : n.f, this;
        }
      }, {
        key: "clone",
        value: function value() {
          return new t(this);
        }
      }, {
        key: "transform",
        value: function value(e) {
          if (t.isMatrixLike(e)) return new t(e).multiplyO(this);
          var n = t.formatTransforms(e),
              r = new ua(n.ox, n.oy).transform(this),
              i = r.x,
              o = r.y,
              s = new t().translateO(n.rx, n.ry).lmultiplyO(this).translateO(-i, -o).scaleO(n.scaleX, n.scaleY).skewO(n.skewX, n.skewY).shearO(n.shear).rotateO(n.theta).translateO(i, o);

          if (isFinite(n.px) || isFinite(n.py)) {
            var u = new ua(i, o).transform(s),
                a = n.px ? n.px - u.x : 0,
                h = n.py ? n.py - u.y : 0;
            s.translateO(a, h);
          }

          return s.translateO(n.tx, n.ty), s;
        }
      }, {
        key: "compose",
        value: function value(e) {
          e.origin && (e.originX = e.origin[0], e.originY = e.origin[1]);
          var n = e.originX || 0,
              r = e.originY || 0,
              i = e.scaleX || 1,
              o = e.scaleY || 1,
              s = e.shear || 0,
              u = e.rotate || 0,
              a = e.translateX || 0,
              h = e.translateY || 0;
          return new t().translateO(-n, -r).scaleO(i, o).shearO(s).rotateO(u).translateO(a, h).lmultiplyO(this).translateO(n, r);
        }
      }, {
        key: "decompose",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = this.a,
              r = this.b,
              i = this.c,
              o = this.d,
              s = this.e,
              u = this.f,
              a = n * o - r * i,
              h = a > 0 ? 1 : -1,
              l = h * Math.sqrt(n * n + r * r),
              c = Math.atan2(h * r, h * n),
              f = 180 / Math.PI * c,
              p = Math.cos(c),
              v = Math.sin(c),
              d = (n * i + r * o) / a,
              y = i * l / (d * n - r) || o * l / (d * r + n);
          return {
            scaleX: l,
            scaleY: y,
            shear: d,
            rotate: f,
            translateX: s - t + t * p * l + e * (d * p * l - v * y),
            translateY: u - e + t * v * l + e * (d * v * l + p * y),
            originX: t,
            originY: e,
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d,
            e: this.e,
            f: this.f
          };
        }
      }, {
        key: "multiply",
        value: function value(t) {
          return this.clone().multiplyO(t);
        }
      }, {
        key: "multiplyO",
        value: function value(e) {
          var n = e instanceof t ? e : new t(e);
          return t.matrixMultiply(this, n, this);
        }
      }, {
        key: "lmultiply",
        value: function value(t) {
          return this.clone().lmultiplyO(t);
        }
      }, {
        key: "lmultiplyO",
        value: function value(e) {
          var n = e instanceof t ? e : new t(e);
          return t.matrixMultiply(n, this, this);
        }
      }, {
        key: "inverseO",
        value: function value() {
          var t = this.a,
              e = this.b,
              n = this.c,
              r = this.d,
              i = this.e,
              o = this.f,
              s = t * r - e * n;
          if (!s) throw new Error("Cannot invert " + this);
          var u = r / s,
              a = -e / s,
              h = -n / s,
              l = t / s,
              c = -(u * i + h * o),
              f = -(a * i + l * o);
          return this.a = u, this.b = a, this.c = h, this.d = l, this.e = c, this.f = f, this;
        }
      }, {
        key: "inverse",
        value: function value() {
          return this.clone().inverseO();
        }
      }, {
        key: "translate",
        value: function value(t, e) {
          return this.clone().translateO(t, e);
        }
      }, {
        key: "translateO",
        value: function value(t, e) {
          return this.e += t || 0, this.f += e || 0, this;
        }
      }, {
        key: "scale",
        value: function value(t, e, n, r) {
          var i;
          return (i = this.clone()).scaleO.apply(i, arguments);
        }
      }, {
        key: "scaleO",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          3 === arguments.length && (r = n, n = e, e = t);
          var i = this.a,
              o = this.b,
              s = this.c,
              u = this.d,
              a = this.e,
              h = this.f;
          return this.a = i * t, this.b = o * e, this.c = s * t, this.d = u * e, this.e = a * t - n * t + n, this.f = h * e - r * e + r, this;
        }
      }, {
        key: "rotate",
        value: function value(t, e, n) {
          return this.clone().rotateO(t, e, n);
        }
      }, {
        key: "rotateO",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          t = Zi(t);
          var r = Math.cos(t),
              i = Math.sin(t),
              o = this.a,
              s = this.b,
              u = this.c,
              a = this.d,
              h = this.e,
              l = this.f;
          return this.a = o * r - s * i, this.b = s * r + o * i, this.c = u * r - a * i, this.d = a * r + u * i, this.e = h * r - l * i + n * i - e * r + e, this.f = l * r + h * i - e * i - n * r + n, this;
        }
      }, {
        key: "flip",
        value: function value(t, e) {
          return this.clone().flipO(t, e);
        }
      }, {
        key: "flipO",
        value: function value(t, e) {
          return "x" === t ? this.scaleO(-1, 1, e, 0) : "y" === t ? this.scaleO(1, -1, 0, e) : this.scaleO(-1, -1, t, e || t);
        }
      }, {
        key: "shear",
        value: function value(t, e, n) {
          return this.clone().shearO(t, e, n);
        }
      }, {
        key: "shearO",
        value: function value(t) {
          var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              n = this.a,
              r = this.b,
              i = this.c,
              o = this.d,
              s = this.e,
              u = this.f;
          return this.a = n + r * t, this.c = i + o * t, this.e = s + u * t - e * t, this;
        }
      }, {
        key: "skew",
        value: function value(t, e, n, r) {
          var i;
          return (i = this.clone()).skewO.apply(i, arguments);
        }
      }, {
        key: "skewO",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          3 === arguments.length && (r = n, n = e, e = t), t = Zi(t), e = Zi(e);
          var i = Math.tan(t),
              o = Math.tan(e),
              s = this.a,
              u = this.b,
              a = this.c,
              h = this.d,
              l = this.e,
              c = this.f;
          return this.a = s + u * i, this.b = u + s * o, this.c = a + h * i, this.d = h + a * o, this.e = l + c * i - r * i, this.f = c + l * o - n * o, this;
        }
      }, {
        key: "skewX",
        value: function value(t, e, n) {
          return this.skew(t, 0, e, n);
        }
      }, {
        key: "skewXO",
        value: function value(t, e, n) {
          return this.skewO(t, 0, e, n);
        }
      }, {
        key: "skewY",
        value: function value(t, e, n) {
          return this.skew(0, t, e, n);
        }
      }, {
        key: "skewYO",
        value: function value(t, e, n) {
          return this.skewO(0, t, e, n);
        }
      }, {
        key: "aroundO",
        value: function value(t, e, n) {
          var r = t || 0,
              i = e || 0;
          return this.translateO(-r, -i).lmultiplyO(n).translateO(r, i);
        }
      }, {
        key: "around",
        value: function value(t, e, n) {
          return this.clone().aroundO(t, e, n);
        }
      }, {
        key: "equals",
        value: function value(e) {
          var n = new t(e);
          return ha(this.a, n.a) && ha(this.b, n.b) && ha(this.c, n.c) && ha(this.d, n.d) && ha(this.e, n.e) && ha(this.f, n.f);
        }
      }, {
        key: "toString",
        value: function value() {
          return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.a, this.b, this.c, this.d, this.e, this.f];
        }
      }, {
        key: "valueOf",
        value: function value() {
          return {
            a: this.a,
            b: this.b,
            c: this.c,
            d: this.d,
            e: this.e,
            f: this.f
          };
        }
      }], [{
        key: "fromArray",
        value: function value(t) {
          return {
            a: t[0],
            b: t[1],
            c: t[2],
            d: t[3],
            e: t[4],
            f: t[5]
          };
        }
      }, {
        key: "isMatrixLike",
        value: function value(t) {
          return null != t.a || null != t.b || null != t.c || null != t.d || null != t.e || null != t.f;
        }
      }, {
        key: "formatTransforms",
        value: function value(t) {
          var e = "both" === t.flip || !0 === t.flip,
              n = t.flip && (e || "x" === t.flip) ? -1 : 1,
              r = t.flip && (e || "y" === t.flip) ? -1 : 1,
              i = t.skew && t.skew.length ? t.skew[0] : isFinite(t.skew) ? t.skew : isFinite(t.skewX) ? t.skewX : 0,
              o = t.skew && t.skew.length ? t.skew[1] : isFinite(t.skew) ? t.skew : isFinite(t.skewY) ? t.skewY : 0,
              s = t.scale && t.scale.length ? t.scale[0] * n : isFinite(t.scale) ? t.scale * n : isFinite(t.scaleX) ? t.scaleX * n : n,
              u = t.scale && t.scale.length ? t.scale[1] * r : isFinite(t.scale) ? t.scale * r : isFinite(t.scaleY) ? t.scaleY * r : r,
              a = t.shear || 0,
              h = t.rotate || t.theta || 0,
              l = new ua(t.origin || t.around || t.ox || t.originX, t.oy || t.originY),
              c = l.x,
              f = l.y,
              p = new ua(t.position || t.px || t.positionX, t.py || t.positionY),
              v = p.x,
              d = p.y,
              y = new ua(t.translate || t.tx || t.translateX, t.ty || t.translateY),
              m = y.x,
              g = y.y,
              x = new ua(t.relative || t.rx || t.relativeX, t.ry || t.relativeY);
          return {
            scaleX: s,
            scaleY: u,
            skewX: i,
            skewY: o,
            shear: a,
            theta: h,
            rx: x.x,
            ry: x.y,
            tx: m,
            ty: g,
            ox: c,
            oy: f,
            px: v,
            py: d
          };
        }
      }, {
        key: "matrixMultiply",
        value: function value(t, e, n) {
          var r = t.a * e.a + t.c * e.b,
              i = t.b * e.a + t.d * e.b,
              o = t.a * e.c + t.c * e.d,
              s = t.b * e.c + t.d * e.d,
              u = t.e + t.a * e.e + t.c * e.f,
              a = t.f + t.b * e.e + t.d * e.f;
          return n.a = r, n.b = i, n.c = o, n.d = s, n.e = u, n.f = a, n;
        }
      }]), t;
    }();

    function ca() {
      return new la(this.node.getCTM());
    }

    function fa() {
      if ("function" == typeof this.isRoot && !this.isRoot()) {
        var t = this.rect(1, 1),
            e = t.node.getScreenCTM();
        return t.remove(), new la(e);
      }

      return new la(this.node.getScreenCTM());
    }

    function pa() {
      if (!pa.nodes) {
        var t = xo().size(2, 0);
        t.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), t.attr("focusable", "false"), t.attr("aria-hidden", "true");
        var e = t.path().node;
        pa.nodes = {
          svg: t,
          path: e
        };
      }

      if (!pa.nodes.svg.node.parentNode) {
        var n = co.document.body || co.document.documentElement;
        pa.nodes.svg.addTo(n);
      }

      return pa.nodes;
    }

    function va(t) {
      return !(t.width || t.height || t.x || t.y);
    }

    function da(t) {
      return t === co.document || (co.document.documentElement.contains || function (t) {
        for (; t.parentNode;) {
          t = t.parentNode;
        }

        return t === co.document;
      }).call(co.document.documentElement, t);
    }

    exports.Matrix = la, Oo(la, "Matrix");

    var ya = function () {
      function t() {
        po(this, t), this.init.apply(this, arguments);
      }

      return Mu(t, [{
        key: "init",
        value: function value(t) {
          return t = "string" == typeof t ? t.split(gs).map(parseFloat) : Array.isArray(t) ? t : "object" === xe(t) ? [null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height] : 4 === arguments.length ? [].slice.call(arguments) : [0, 0, 0, 0], this.x = t[0] || 0, this.y = t[1] || 0, this.width = this.w = t[2] || 0, this.height = this.h = t[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this;
        }
      }, {
        key: "merge",
        value: function value(e) {
          var n = Math.min(this.x, e.x),
              r = Math.min(this.y, e.y);
          return new t(n, r, Math.max(this.x + this.width, e.x + e.width) - n, Math.max(this.y + this.height, e.y + e.height) - r);
        }
      }, {
        key: "transform",
        value: function value(e) {
          e instanceof la || (e = new la(e));
          var n = 1 / 0,
              r = -1 / 0,
              i = 1 / 0,
              o = -1 / 0;
          return [new ua(this.x, this.y), new ua(this.x2, this.y), new ua(this.x, this.y2), new ua(this.x2, this.y2)].forEach(function (t) {
            t = t.transform(e), n = Math.min(n, t.x), r = Math.max(r, t.x), i = Math.min(i, t.y), o = Math.max(o, t.y);
          }), new t(n, i, r - n, o - i);
        }
      }, {
        key: "addOffset",
        value: function value() {
          return this.x += co.window.pageXOffset, this.y += co.window.pageYOffset, this;
        }
      }, {
        key: "toString",
        value: function value() {
          return this.x + " " + this.y + " " + this.width + " " + this.height;
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.x, this.y, this.width, this.height];
        }
      }, {
        key: "isNulled",
        value: function value() {
          return va(this);
        }
      }]), t;
    }();

    function ma(t, e) {
      var n;

      try {
        if (va(n = t(this.node)) && !da(this.node)) throw new Error("Element not in the dom");
      } catch (r) {
        n = e(this);
      }

      return n;
    }

    function ga() {
      return new ya(ma.call(this, function (t) {
        return t.getBBox();
      }, function (t) {
        try {
          var e = t.clone().addTo(pa().svg).show(),
              n = e.node.getBBox();
          return e.remove(), n;
        } catch (r) {
          throw new Error('Getting bbox of element "' + t.node.nodeName + '" is not possible. ' + r.toString());
        }
      }));
    }

    function xa(t) {
      var e = new ya(ma.call(this, function (t) {
        return t.getBoundingClientRect();
      }, function (t) {
        throw new Error('Getting rbox of element "' + t.node.nodeName + '" is not possible');
      }));
      return t ? e.transform(t.screenCTM().inverse()) : e.addOffset();
    }

    exports.Box = ya, li({
      viewbox: {
        viewbox: function viewbox(t, e, n, r) {
          return null == t ? new ya(this.attr("viewBox")) : this.attr("viewBox", new ya(t, e, n, r));
        },
        zoom: function zoom(t, e) {
          var n = this.node.clientWidth,
              r = this.node.clientHeight,
              i = this.viewbox();

          if (!n && !r) {
            var o = window.getComputedStyle(this.node);
            n = parseFloat(o.getPropertyValue("width")), r = parseFloat(o.getPropertyValue("height"));
          }

          var s = n / i.width,
              u = r / i.height,
              a = Math.min(s, u);
          if (null == t) return a;
          var h = a / t;
          h === 1 / 0 && (h = Number.MIN_VALUE), e = e || new ua(n / 2 / s + i.x, r / 2 / u + i.y);
          var l = new ya(i).transform(new la({
            scale: h,
            origin: e
          }));
          return this.viewbox(l);
        }
      }
    }), Oo(ya, "Box");

    var wa = function () {
      try {
        return Function("name", "baseClass", "_constructor", ["baseClass = baseClass || Array", "return {", "  [name]: class extends baseClass {", "    constructor (...args) {", "      super(...args)", "      _constructor && _constructor.apply(this, args)", "    }", "  }", "}[name]"].join("\n"));
      } catch (t) {
        return function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Array,
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = function r() {
            e.apply(this, arguments), n && n.apply(this, arguments);
          };

          return (r.prototype = Object.create(e.prototype)).constructor = r, r.prototype.map = function (t) {
            var e = new r();
            return e.push.apply(e, Array.prototype.map.call(this, t)), e;
          }, r;
        };
      }
    }(),
        ba = wa("List", Array, function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      if ("number" == typeof t) return this;
      this.length = 0, this.push.apply(this, ui(t));
    });

    exports.List = ba, Eo(ba, {
      each: function each(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
          n[r - 1] = arguments[r];
        }

        return "function" == typeof t ? this.map(function (e) {
          return t.call(e, e);
        }) : this.map(function (e) {
          return e[t].apply(e, n);
        });
      },
      toArray: function toArray() {
        return Array.prototype.concat.apply([], this);
      }
    });
    var _a = ["toArray", "constructor", "each"];

    function ka(t, e) {
      return new ba(Wi((e || co.document).querySelectorAll(t), function (t) {
        return bo(t);
      }));
    }

    function Oa(t) {
      return ka(t, this.node);
    }

    function Sa(t) {
      return bo(this.node.querySelector(t));
    }

    ba.extend = function (t) {
      t = t.reduce(function (t, e) {
        return _a.includes(e) ? t : "_" === e[0] ? t : (t[e] = function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {
            n[r] = arguments[r];
          }

          return this.each.apply(this, [e].concat(n));
        }, t);
      }, {}), Eo(ba, t);
    };

    var Aa = function (t) {
      function e() {
        var t,
            n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).events,
            r = void 0 === n ? {} : n;
        return po(this, e), (t = Fu(this, zu(e).call(this))).events = r, t;
      }

      return Xu(e, vo), Mu(e, [{
        key: "addEventListener",
        value: function value() {}
      }, {
        key: "dispatch",
        value: function value(t, e) {
          return Ks(this, t, e);
        }
      }, {
        key: "dispatchEvent",
        value: function value(t) {
          var e = this.getEventHolder().events;
          if (!e) return !0;
          var n = e[t.type];

          for (var r in n) {
            for (var i in n[r]) {
              n[r][i](t);
            }
          }

          return !t.defaultPrevented;
        }
      }, {
        key: "fire",
        value: function value(t, e) {
          return this.dispatch(t, e), this;
        }
      }, {
        key: "getEventHolder",
        value: function value() {
          return this;
        }
      }, {
        key: "getEventTarget",
        value: function value() {
          return this;
        }
      }, {
        key: "off",
        value: function value(t, e) {
          return Zs(this, t, e), this;
        }
      }, {
        key: "on",
        value: function value(t, e, n, r) {
          return Js(this, t, e, n, r), this;
        }
      }, {
        key: "removeEventListener",
        value: function value() {}
      }]), e;
    }();

    function ja() {}

    exports.EventTarget = Aa, Oo(Aa, "EventTarget");
    var Ma = {
      duration: 400,
      ease: ">",
      delay: 0
    },
        Ea = {
      "fill-opacity": 1,
      "stroke-opacity": 1,
      "stroke-width": 0,
      "stroke-linejoin": "miter",
      "stroke-linecap": "butt",
      fill: "#000000",
      stroke: "#000000",
      opacity: 1,
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      width: 0,
      height: 0,
      r: 0,
      rx: 0,
      ry: 0,
      offset: 0,
      "stop-opacity": 1,
      "stop-color": "#000000",
      "text-anchor": "start"
    },
        Ta = {
      __proto__: null,
      noop: ja,
      timeline: Ma,
      attrs: Ea
    };
    exports.defaults = Ta;
    var Ca = wa("SVGArray", Array, function (t) {
      this.init(t);
    });
    exports.Array = Ca, Eo(Ca, {
      init: function init(t) {
        return "number" == typeof t ? this : (this.length = 0, this.push.apply(this, ui(this.parse(t))), this);
      },
      toArray: function toArray() {
        return Array.prototype.concat.apply([], this);
      },
      toString: function toString() {
        return this.join(" ");
      },
      valueOf: function valueOf() {
        var t = [];
        return t.push.apply(t, ui(this)), t;
      },
      parse: function parse() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return t instanceof Array ? t : t.trim().split(gs).map(parseFloat);
      },
      clone: function clone() {
        return new this.constructor(this);
      },
      toSet: function toSet() {
        return new Set(this);
      }
    });

    var Pa = function () {
      function t() {
        po(this, t), this.init.apply(this, arguments);
      }

      return Mu(t, [{
        key: "init",
        value: function value(e, n) {
          return n = Array.isArray(e) ? e[1] : n, e = Array.isArray(e) ? e[0] : e, this.value = 0, this.unit = n || "", "number" == typeof e ? this.value = isNaN(e) ? 0 : isFinite(e) ? e : e < 0 ? -3.4e38 : 3.4e38 : "string" == typeof e ? (n = e.match(os)) && (this.value = parseFloat(n[1]), "%" === n[5] ? this.value /= 100 : "s" === n[5] && (this.value *= 1e3), this.unit = n[5]) : e instanceof t && (this.value = e.valueOf(), this.unit = e.unit), this;
        }
      }, {
        key: "toString",
        value: function value() {
          return ("%" === this.unit ? ~~(1e8 * this.value) / 1e6 : "s" === this.unit ? this.value / 1e3 : this.value) + this.unit;
        }
      }, {
        key: "toJSON",
        value: function value() {
          return this.toString();
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.value, this.unit];
        }
      }, {
        key: "valueOf",
        value: function value() {
          return this.value;
        }
      }, {
        key: "plus",
        value: function value(e) {
          return e = new t(e), new t(this + e, this.unit || e.unit);
        }
      }, {
        key: "minus",
        value: function value(e) {
          return e = new t(e), new t(this - e, this.unit || e.unit);
        }
      }, {
        key: "times",
        value: function value(e) {
          return e = new t(e), new t(this * e, this.unit || e.unit);
        }
      }, {
        key: "divide",
        value: function value(e) {
          return e = new t(e), new t(this / e, this.unit || e.unit);
        }
      }, {
        key: "convert",
        value: function value(e) {
          return new t(this.value, e);
        }
      }]), t;
    }();

    exports.Number = Pa;
    var Ia = [];

    function Na(t) {
      Ia.push(t);
    }

    function Da(t, e, n) {
      var r = this;

      if (null == t) {
        t = {}, e = this.node.attributes;
        var i = !0,
            o = !1,
            s = void 0;

        try {
          for (var u, a = e[Symbol.iterator](); !(i = (u = a.next()).done); i = !0) {
            var h = u.value;
            t[h.nodeName] = ds.test(h.nodeValue) ? parseFloat(h.nodeValue) : h.nodeValue;
          }
        } catch (l) {
          o = !0, s = l;
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (o) throw s;
          }
        }

        return t;
      }

      if (t instanceof Array) return t.reduce(function (t, e) {
        return t[e] = r.attr(e), t;
      }, {});
      if ("object" === xe(t) && t.constructor === Object) for (e in t) {
        this.attr(e, t[e]);
      } else if (null === e) this.node.removeAttribute(t);else {
        if (null == e) return null == (e = this.node.getAttribute(t)) ? Ea[t] : ds.test(e) ? parseFloat(e) : e;
        "number" == typeof (e = Ia.reduce(function (e, n) {
          return n(t, e, r);
        }, e)) ? e = new Pa(e) : Du.isColor(e) ? e = new Du(e) : e.constructor === Array && (e = new Ca(e)), "leading" === t ? this.leading && this.leading(e) : "string" == typeof n ? this.node.setAttributeNS(n, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" !== t && "x" !== t || this.rebuild();
      }
      return this;
    }

    var Ra = function (t) {
      function e(t, n) {
        var r;
        return po(this, e), (r = Fu(this, zu(e).call(this, t))).node = t, r.type = t.nodeName, n && t !== n && r.attr(n), r;
      }

      return Xu(e, Aa), Mu(e, [{
        key: "add",
        value: function value(t, e) {
          return t = xo(t), null == e ? this.node.appendChild(t.node) : t.node !== this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this;
        }
      }, {
        key: "addTo",
        value: function value(t) {
          return xo(t).put(this);
        }
      }, {
        key: "children",
        value: function value() {
          return new ba(Wi(this.node.children, function (t) {
            return bo(t);
          }));
        }
      }, {
        key: "clear",
        value: function value() {
          for (; this.node.hasChildNodes();) {
            this.node.removeChild(this.node.lastChild);
          }

          return this;
        }
      }, {
        key: "clone",
        value: function value() {
          return this.writeDataToDom(), Mo(this.node.cloneNode(!0));
        }
      }, {
        key: "each",
        value: function value(t, e) {
          var n,
              r,
              i = this.children();

          for (n = 0, r = i.length; n < r; n++) {
            t.apply(i[n], [n, i]), e && i[n].each(t, e);
          }

          return this;
        }
      }, {
        key: "element",
        value: function value(t) {
          return this.put(new e(go(t)));
        }
      }, {
        key: "first",
        value: function value() {
          return bo(this.node.firstChild);
        }
      }, {
        key: "get",
        value: function value(t) {
          return bo(this.node.childNodes[t]);
        }
      }, {
        key: "getEventHolder",
        value: function value() {
          return this.node;
        }
      }, {
        key: "getEventTarget",
        value: function value() {
          return this.node;
        }
      }, {
        key: "has",
        value: function value(t) {
          return this.index(t) >= 0;
        }
      }, {
        key: "id",
        value: function value(t) {
          return void 0 !== t || this.node.id || (this.node.id = jo(this.type)), this.attr("id", t);
        }
      }, {
        key: "index",
        value: function value(t) {
          return [].slice.call(this.node.childNodes).indexOf(t.node);
        }
      }, {
        key: "last",
        value: function value() {
          return bo(this.node.lastChild);
        }
      }, {
        key: "matches",
        value: function value(t) {
          var e = this.node;
          return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
        }
      }, {
        key: "parent",
        value: function value(t) {
          var e = this;
          if (!e.node.parentNode) return null;
          if (e = bo(e.node.parentNode), !t) return e;

          for (; e;) {
            if ("string" == typeof t ? e.matches(t) : e instanceof t) return e;
            if (!e.node.parentNode || "#document" === e.node.parentNode.nodeName || "#document-fragment" === e.node.parentNode.nodeName) return null;
            e = bo(e.node.parentNode);
          }
        }
      }, {
        key: "put",
        value: function value(t, e) {
          return this.add(t, e), t;
        }
      }, {
        key: "putIn",
        value: function value(t) {
          return xo(t).add(this);
        }
      }, {
        key: "remove",
        value: function value() {
          return this.parent() && this.parent().removeElement(this), this;
        }
      }, {
        key: "removeElement",
        value: function value(t) {
          return this.node.removeChild(t.node), this;
        }
      }, {
        key: "replace",
        value: function value(t) {
          return t = xo(t), this.node.parentNode.replaceChild(t.node, this.node), t;
        }
      }, {
        key: "round",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
              e = arguments.length > 1 ? arguments[1] : void 0,
              n = Math.pow(10, t),
              r = this.attr();
          e || (e = Object.keys(r));
          var i = {};
          return e.forEach(function (t) {
            i[t] = Math.round(r[t] * n) / n;
          }), this.attr(i), this;
        }
      }, {
        key: "toString",
        value: function value() {
          return this.id();
        }
      }, {
        key: "svg",
        value: function value(t, e) {
          var n, r, i;

          if (!1 === t && (e = !1, t = null), null == t || "function" == typeof t) {
            e = null == e || e, this.writeDataToDom();
            var o = this;

            if (null != t) {
              if (o = bo(o.node.cloneNode(!0)), e) {
                var s = t(o);
                if (o = s || o, !1 === s) return "";
              }

              o.each(function () {
                var e = t(this),
                    n = e || this;
                !1 === e ? this.remove() : e && this !== n && this.replace(n);
              }, !0);
            }

            return e ? o.node.outerHTML : o.node.innerHTML;
          }

          for (e = null != e && e, n = co.document.createElementNS(so, "svg"), i = co.document.createDocumentFragment(), n.innerHTML = t, r = n.children.length; r--;) {
            i.appendChild(n.firstElementChild);
          }

          var u = this.parent();
          return e ? this.replace(i) && u : this.add(i);
        }
      }, {
        key: "words",
        value: function value(t) {
          return this.node.textContent = t, this;
        }
      }, {
        key: "writeDataToDom",
        value: function value() {
          return this.each(function () {
            this.writeDataToDom();
          }), this;
        }
      }]), e;
    }();

    exports.Dom = Ra, Eo(Ra, {
      attr: Da,
      find: Oa,
      findOne: Sa
    }), Oo(Ra, "Dom");

    var La = function (t) {
      function e(t, n) {
        var r;
        return po(this, e), (r = Fu(this, zu(e).call(this, t, n))).dom = {}, r.node.instance = Lu(r), t.hasAttribute("svgjs:data") && r.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}), r;
      }

      return Xu(e, Ra), Mu(e, [{
        key: "center",
        value: function value(t, e) {
          return this.cx(t).cy(e);
        }
      }, {
        key: "cx",
        value: function value(t) {
          return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2);
        }
      }, {
        key: "cy",
        value: function value(t) {
          return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2);
        }
      }, {
        key: "defs",
        value: function value() {
          return this.root().defs();
        }
      }, {
        key: "dmove",
        value: function value(t, e) {
          return this.dx(t).dy(e);
        }
      }, {
        key: "dx",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return this.x(new Pa(t).plus(this.x()));
        }
      }, {
        key: "dy",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return this.y(new Pa(t).plus(this.y()));
        }
      }, {
        key: "root",
        value: function value() {
          var t = this.parent(So(mo));
          return t && t.root();
        }
      }, {
        key: "getEventHolder",
        value: function value() {
          return this;
        }
      }, {
        key: "height",
        value: function value(t) {
          return this.attr("height", t);
        }
      }, {
        key: "inside",
        value: function value(t, e) {
          var n = this.bbox();
          return t > n.x && e > n.y && t < n.x + n.width && e < n.y + n.height;
        }
      }, {
        key: "move",
        value: function value(t, e) {
          return this.x(t).y(e);
        }
      }, {
        key: "parents",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : co.document;
          t = xo(t);

          for (var e = new ba(), n = this; (n = n.parent()) && n.node !== t.node && n.node !== co.document;) {
            e.push(n);
          }

          return e;
        }
      }, {
        key: "reference",
        value: function value(t) {
          if (!(t = this.attr(t))) return null;
          var e = t.match(as);
          return e ? xo(e[1]) : null;
        }
      }, {
        key: "setData",
        value: function value(t) {
          return this.dom = t, this;
        }
      }, {
        key: "size",
        value: function value(t, e) {
          var n = ro(this, t, e);
          return this.width(new Pa(n.width)).height(new Pa(n.height));
        }
      }, {
        key: "width",
        value: function value(t) {
          return this.attr("width", t);
        }
      }, {
        key: "writeDataToDom",
        value: function value() {
          return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), Yu(zu(e.prototype), "writeDataToDom", this).call(this);
        }
      }, {
        key: "x",
        value: function value(t) {
          return this.attr("x", t);
        }
      }, {
        key: "y",
        value: function value(t) {
          return this.attr("y", t);
        }
      }]), e;
    }();

    exports.Element = La, Eo(La, {
      bbox: ga,
      rbox: xa,
      point: aa,
      ctm: ca,
      screenCTM: fa
    }), Oo(La, "Element");
    var Fa = {
      stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
      fill: ["color", "opacity", "rule"],
      prefix: function prefix(t, e) {
        return "color" === e ? t : t + "-" + e;
      }
    };
    ["fill", "stroke"].forEach(function (t) {
      var e,
          n = {};
      n[t] = function (n) {
        if (void 0 === n) return this.attr(t);
        if ("string" == typeof n || n instanceof Du || Du.isRgb(n) || n instanceof La) this.attr(t, n);else for (e = Fa[t].length - 1; e >= 0; e--) {
          null != n[Fa[t][e]] && this.attr(Fa.prefix(t, Fa[t][e]), n[Fa[t][e]]);
        }
        return this;
      }, li(["Element", "Runner"], n);
    }), li(["Element", "Runner"], {
      matrix: function matrix(t, e, n, r, i, o) {
        return null == t ? new la(this) : this.attr("transform", new la(t, e, n, r, i, o));
      },
      rotate: function rotate(t, e, n) {
        return this.transform({
          rotate: t,
          ox: e,
          oy: n
        }, !0);
      },
      skew: function skew(t, e, n, r) {
        return 1 === arguments.length || 3 === arguments.length ? this.transform({
          skew: t,
          ox: e,
          oy: n
        }, !0) : this.transform({
          skew: [t, e],
          ox: n,
          oy: r
        }, !0);
      },
      shear: function shear(t, e, n) {
        return this.transform({
          shear: t,
          ox: e,
          oy: n
        }, !0);
      },
      scale: function scale(t, e, n, r) {
        return 1 === arguments.length || 3 === arguments.length ? this.transform({
          scale: t,
          ox: e,
          oy: n
        }, !0) : this.transform({
          scale: [t, e],
          ox: n,
          oy: r
        }, !0);
      },
      translate: function translate(t, e) {
        return this.transform({
          translate: [t, e]
        }, !0);
      },
      relative: function relative(t, e) {
        return this.transform({
          relative: [t, e]
        }, !0);
      },
      flip: function flip(t, e) {
        var n = "string" == typeof t ? t : (isFinite(t), "both"),
            r = "both" === t && isFinite(e) ? [e, e] : "x" === t ? [e, 0] : "y" === t ? [0, e] : isFinite(t) ? [t, t] : [0, 0];
        return this.transform({
          flip: n,
          origin: r
        }, !0);
      },
      opacity: function opacity(t) {
        return this.attr("opacity", t);
      }
    }), li("radius", {
      radius: function radius(t, e) {
        var n = (this._element || this).type;
        return "radialGradient" === n || "radialGradient" === n ? this.attr("r", new Pa(t)) : this.rx(t).ry(null == e ? t : e);
      }
    }), li("Path", {
      length: function length() {
        return this.node.getTotalLength();
      },
      pointAt: function pointAt(t) {
        return new ua(this.node.getPointAtLength(t));
      }
    }), li(["Element", "Runner"], {
      font: function font(t, e) {
        if ("object" === xe(t)) {
          for (e in t) {
            this.font(e, t[e]);
          }

          return this;
        }

        return "leading" === t ? this.leading(e) : "anchor" === t ? this.attr("text-anchor", e) : "size" === t || "family" === t || "weight" === t || "stretch" === t || "variant" === t || "style" === t ? this.attr("font-" + t, e) : this.attr(t, e);
      }
    }), li("Text", {
      ax: function ax(t) {
        return this.attr("x", t);
      },
      ay: function ay(t) {
        return this.attr("y", t);
      },
      amove: function amove(t, e) {
        return this.ax(t).ay(e);
      }
    });
    var za = ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].reduce(function (t, e) {
      return t[e] = function (t) {
        return null === t ? Zs(this, e) : Js(this, e, t), this;
      }, t;
    }, {});
    li("Element", za);
    var qa = [].reverse,
        Ya = [1, 2];
    Gt({
      target: "Array",
      proto: !0,
      forced: String(Ya) === String(Ya.reverse())
    }, {
      reverse: function reverse() {
        return Xt(this) && (this.length = this.length), qa.call(this);
      }
    }), Gt({
      target: "Object",
      stat: !0,
      forced: !l,
      sham: !l
    }, {
      defineProperties: _e
    }), Gt({
      target: "Object",
      stat: !0,
      forced: !l,
      sham: !l
    }, {
      defineProperty: L.f
    });
    var Ga = I.f,
        Xa = h(function () {
      Ga(1);
    }),
        Va = !l || Xa;

    function Ba(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function Ha(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function Ua(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Ha(n, !0).forEach(function (e) {
          Ba(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ha(n).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    function $a() {
      return this.attr("transform", null);
    }

    function Qa() {
      return (this.attr("transform") || "").split(hs).slice(0, -1).map(function (t) {
        var e = t.trim().split("(");
        return [e[0], e[1].split(gs).map(function (t) {
          return parseFloat(t);
        })];
      }).reverse().reduce(function (t, e) {
        return "matrix" === e[0] ? t.lmultiply(la.fromArray(e[1])) : t[e[0]].apply(t, e[1]);
      }, new la());
    }

    function Wa(t) {
      if (this === t) return this;
      var e = this.screenCTM(),
          n = t.screenCTM().inverse();
      return this.addTo(t).untransform().transform(n.multiply(e)), this;
    }

    function Ja() {
      return this.toParent(this.root());
    }

    function Za(t, e) {
      if (null == t || "string" == typeof t) {
        var n = new la(this).decompose();
        return null == t ? n : n[t];
      }

      la.isMatrixLike(t) || (t = Ua({}, t, {
        origin: io(t, this)
      }));
      var r = new la(!0 === e ? this : e || !1).transform(t);
      return this.attr("transform", r);
    }

    function Ka(t) {
      return this.attr("rx", t);
    }

    function th(t) {
      return this.attr("ry", t);
    }

    function eh(t) {
      return null == t ? this.cx() - this.rx() : this.cx(t + this.rx());
    }

    function nh(t) {
      return null == t ? this.cy() - this.ry() : this.cy(t + this.ry());
    }

    function rh(t) {
      return null == t ? this.attr("cx") : this.attr("cx", t);
    }

    function ih(t) {
      return null == t ? this.attr("cy") : this.attr("cy", t);
    }

    function oh(t) {
      return null == t ? 2 * this.rx() : this.rx(new Pa(t).divide(2));
    }

    function sh(t) {
      return null == t ? 2 * this.ry() : this.ry(new Pa(t).divide(2));
    }

    Gt({
      target: "Object",
      stat: !0,
      forced: Va,
      sham: !l
    }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
        return Ga(_(t), e);
      }
    }), Gt({
      target: "Object",
      stat: !0,
      sham: !l
    }, {
      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(t) {
        for (var e, n, r = _(t), i = I.f, o = Pt(r), s = {}, u = 0; o.length > u;) {
          void 0 !== (n = i(r, e = o[u++])) && Vt(s, e, n);
        }

        return s;
      }
    }), li("Element", {
      untransform: $a,
      matrixify: Qa,
      toParent: Wa,
      toRoot: Ja,
      transform: Za
    });

    var uh = {
      __proto__: null,
      rx: Ka,
      ry: th,
      x: eh,
      y: nh,
      cx: rh,
      cy: ih,
      width: oh,
      height: sh
    },
        ah = function (t) {
      function e() {
        return po(this, e), Fu(this, zu(e).apply(this, arguments));
      }

      return Xu(e, La), e;
    }();

    exports.Shape = ah, Oo(ah, "Shape");

    var hh = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("circle", t), t));
      }

      return Xu(e, ah), Mu(e, [{
        key: "radius",
        value: function value(t) {
          return this.attr("r", t);
        }
      }, {
        key: "rx",
        value: function value(t) {
          return this.attr("r", t);
        }
      }, {
        key: "ry",
        value: function value(t) {
          return this.rx(t);
        }
      }, {
        key: "size",
        value: function value(t) {
          return this.radius(new Pa(t).divide(2));
        }
      }]), e;
    }();

    exports.Circle = hh, Eo(hh, {
      x: eh,
      y: nh,
      cx: rh,
      cy: ih,
      width: oh,
      height: sh
    }), li({
      Container: {
        circle: To(function (t) {
          return this.put(new hh()).size(t).move(0, 0);
        })
      }
    }), Oo(hh, "Circle");

    var lh = function (t) {
      function e() {
        return po(this, e), Fu(this, zu(e).apply(this, arguments));
      }

      return Xu(e, La), Mu(e, [{
        key: "flatten",
        value: function value(t) {
          return this.each(function () {
            return this instanceof e ? this.flatten(t).ungroup(t) : this.toParent(t);
          }), this.node.firstElementChild || this.remove(), this;
        }
      }, {
        key: "ungroup",
        value: function value(t) {
          return t = t || this.parent(), this.each(function () {
            return this.toParent(t);
          }), this.remove(), this;
        }
      }]), e;
    }();

    exports.Container = lh, Oo(lh, "Container");

    var ch = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("defs", t), t));
      }

      return Xu(e, lh), Mu(e, [{
        key: "flatten",
        value: function value() {
          return this;
        }
      }, {
        key: "ungroup",
        value: function value() {
          return this;
        }
      }]), e;
    }();

    exports.Defs = ch, Oo(ch, "Defs");

    var fh = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("ellipse", t), t));
      }

      return Xu(e, ah), Mu(e, [{
        key: "size",
        value: function value(t, e) {
          var n = ro(this, t, e);
          return this.rx(new Pa(n.width).divide(2)).ry(new Pa(n.height).divide(2));
        }
      }]), e;
    }();

    exports.Ellipse = fh, Eo(fh, uh), li("Container", {
      ellipse: To(function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
        return this.put(new fh()).size(t, e).move(0, 0);
      })
    }), Oo(fh, "Ellipse");

    var ph = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("stop", t), t));
      }

      return Xu(e, La), Mu(e, [{
        key: "update",
        value: function value(t) {
          return ("number" == typeof t || t instanceof Pa) && (t = {
            offset: arguments[0],
            color: arguments[1],
            opacity: arguments[2]
          }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new Pa(t.offset)), this;
        }
      }]), e;
    }();

    function vh(t, e) {
      return "radialGradient" === (this._element || this).type ? this.attr({
        fx: new Pa(t),
        fy: new Pa(e)
      }) : this.attr({
        x1: new Pa(t),
        y1: new Pa(e)
      });
    }

    function dh(t, e) {
      return "radialGradient" === (this._element || this).type ? this.attr({
        cx: new Pa(t),
        cy: new Pa(e)
      }) : this.attr({
        x2: new Pa(t),
        y2: new Pa(e)
      });
    }

    exports.Stop = ph, Oo(ph, "Stop");

    var yh = {
      __proto__: null,
      from: vh,
      to: dh
    },
        mh = function (t) {
      function e(t, n) {
        return po(this, e), Fu(this, zu(e).call(this, wo(t + "Gradient", "string" == typeof t ? null : t), n));
      }

      return Xu(e, lh), Mu(e, [{
        key: "stop",
        value: function value(t, e, n) {
          return this.put(new ph()).update(t, e, n);
        }
      }, {
        key: "update",
        value: function value(t) {
          return this.clear(), "function" == typeof t && t.call(this, this), this;
        }
      }, {
        key: "url",
        value: function value() {
          return "url(#" + this.id() + ")";
        }
      }, {
        key: "toString",
        value: function value() {
          return this.url();
        }
      }, {
        key: "attr",
        value: function value(t, n, r) {
          return "transform" === t && (t = "gradientTransform"), Yu(zu(e.prototype), "attr", this).call(this, t, n, r);
        }
      }, {
        key: "targets",
        value: function value() {
          return ka('svg [fill*="' + this.id() + '"]');
        }
      }, {
        key: "bbox",
        value: function value() {
          return new ya();
        }
      }]), e;
    }();

    exports.Gradient = mh, Eo(mh, yh), li({
      Container: {
        gradient: To(function (t, e) {
          return this.defs().gradient(t, e);
        })
      },
      Defs: {
        gradient: To(function (t, e) {
          return this.put(new mh(t)).update(e);
        })
      }
    }), Oo(mh, "Gradient");

    var gh = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("pattern", t), t));
      }

      return Xu(e, lh), Mu(e, [{
        key: "url",
        value: function value() {
          return "url(#" + this.id() + ")";
        }
      }, {
        key: "update",
        value: function value(t) {
          return this.clear(), "function" == typeof t && t.call(this, this), this;
        }
      }, {
        key: "toString",
        value: function value() {
          return this.url();
        }
      }, {
        key: "attr",
        value: function value(t, n, r) {
          return "transform" === t && (t = "patternTransform"), Yu(zu(e.prototype), "attr", this).call(this, t, n, r);
        }
      }, {
        key: "targets",
        value: function value() {
          return ka('svg [fill*="' + this.id() + '"]');
        }
      }, {
        key: "bbox",
        value: function value() {
          return new ya();
        }
      }]), e;
    }();

    exports.Pattern = gh, li({
      Container: {
        pattern: function pattern() {
          var t;
          return (t = this.defs()).pattern.apply(t, arguments);
        }
      },
      Defs: {
        pattern: To(function (t, e, n) {
          return this.put(new gh()).update(n).attr({
            x: 0,
            y: 0,
            width: t,
            height: e,
            patternUnits: "userSpaceOnUse"
          });
        })
      }
    }), Oo(gh, "Pattern");

    var xh = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("image", t), t));
      }

      return Xu(e, ah), Mu(e, [{
        key: "load",
        value: function value(t, e) {
          if (!t) return this;
          var n = new co.window.Image();
          return Js(n, "load", function (t) {
            var r = this.parent(gh);
            0 === this.width() && 0 === this.height() && this.size(n.width, n.height), r instanceof gh && 0 === r.width() && 0 === r.height() && r.size(this.width(), this.height()), "function" == typeof e && e.call(this, t);
          }, this), Js(n, "load error", function () {
            Zs(n);
          }), this.attr("href", n.src = t, ao);
        }
      }]), e;
    }();

    exports.Image = xh, Na(function (t, e, n) {
      return "fill" !== t && "stroke" !== t || ms.test(e) && (e = n.root().defs().image(e)), e instanceof xh && (e = n.root().defs().pattern(0, 0, function (t) {
        t.add(e);
      })), e;
    }), li({
      Container: {
        image: To(function (t, e) {
          return this.put(new xh()).size(0, 0).load(t, e);
        })
      }
    }), Oo(xh, "Image");
    var wh = wa("PointArray", Ca);
    exports.PointArray = wh, Eo(wh, {
      toString: function toString() {
        for (var t = 0, e = this.length, n = []; t < e; t++) {
          n.push(this[t].join(","));
        }

        return n.join(" ");
      },
      toLine: function toLine() {
        return {
          x1: this[0][0],
          y1: this[0][1],
          x2: this[1][0],
          y2: this[1][1]
        };
      },
      at: function at(t) {
        if (!this.destination) return this;

        for (var e = 0, n = this.length, r = []; e < n; e++) {
          r.push([this[e][0] + (this.destination[e][0] - this[e][0]) * t, this[e][1] + (this.destination[e][1] - this[e][1]) * t]);
        }

        return new wh(r);
      },
      parse: function parse() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [[0, 0]],
            e = [];

        if (t instanceof Array) {
          if (t[0] instanceof Array) return t;
        } else t = t.trim().split(gs).map(parseFloat);

        t.length % 2 != 0 && t.pop();

        for (var n = 0, r = t.length; n < r; n += 2) {
          e.push([t[n], t[n + 1]]);
        }

        return e;
      },
      transform: function transform(t) {
        for (var e = [], n = 0; n < this.length; n++) {
          var r = this[n];
          e.push([t.a * r[0] + t.c * r[1] + t.e, t.b * r[0] + t.d * r[1] + t.f]);
        }

        return new wh(e);
      },
      move: function move(t, e) {
        var n = this.bbox();
        if (t -= n.x, e -= n.y, !isNaN(t) && !isNaN(e)) for (var r = this.length - 1; r >= 0; r--) {
          this[r] = [this[r][0] + t, this[r][1] + e];
        }
        return this;
      },
      size: function size(t, e) {
        var n,
            r = this.bbox();

        for (n = this.length - 1; n >= 0; n--) {
          r.width && (this[n][0] = (this[n][0] - r.x) * t / r.width + r.x), r.height && (this[n][1] = (this[n][1] - r.y) * e / r.height + r.y);
        }

        return this;
      },
      bbox: function bbox() {
        var t = -1 / 0,
            e = -1 / 0,
            n = 1 / 0,
            r = 1 / 0;
        return this.forEach(function (i) {
          t = Math.max(i[0], t), e = Math.max(i[1], e), n = Math.min(i[0], n), r = Math.min(i[1], r);
        }), {
          x: n,
          y: r,
          width: t - n,
          height: e - r
        };
      }
    });
    var bh = wh;

    function _h(t) {
      return null == t ? this.bbox().x : this.move(t, this.bbox().y);
    }

    function kh(t) {
      return null == t ? this.bbox().y : this.move(this.bbox().x, t);
    }

    function Oh(t) {
      var e = this.bbox();
      return null == t ? e.width : this.size(t, e.height);
    }

    function Sh(t) {
      var e = this.bbox();
      return null == t ? e.height : this.size(e.width, t);
    }

    var Ah = {
      __proto__: null,
      MorphArray: bh,
      x: _h,
      y: kh,
      width: Oh,
      height: Sh
    },
        jh = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("line", t), t));
      }

      return Xu(e, ah), Mu(e, [{
        key: "array",
        value: function value() {
          return new wh([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
        }
      }, {
        key: "plot",
        value: function value(t, e, n, r) {
          return null == t ? this.array() : (t = void 0 !== e ? {
            x1: t,
            y1: e,
            x2: n,
            y2: r
          } : new wh(t).toLine(), this.attr(t));
        }
      }, {
        key: "move",
        value: function value(t, e) {
          return this.attr(this.array().move(t, e).toLine());
        }
      }, {
        key: "size",
        value: function value(t, e) {
          var n = ro(this, t, e);
          return this.attr(this.array().size(n.width, n.height).toLine());
        }
      }]), e;
    }();

    exports.Line = jh, Eo(jh, Ah), li({
      Container: {
        line: To(function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) {
            e[n] = arguments[n];
          }

          return jh.prototype.plot.apply(this.put(new jh()), null != e[0] ? e : [0, 0, 0, 0]);
        })
      }
    }), Oo(jh, "Line");

    var Mh = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("marker", t), t));
      }

      return Xu(e, lh), Mu(e, [{
        key: "width",
        value: function value(t) {
          return this.attr("markerWidth", t);
        }
      }, {
        key: "height",
        value: function value(t) {
          return this.attr("markerHeight", t);
        }
      }, {
        key: "ref",
        value: function value(t, e) {
          return this.attr("refX", t).attr("refY", e);
        }
      }, {
        key: "update",
        value: function value(t) {
          return this.clear(), "function" == typeof t && t.call(this, this), this;
        }
      }, {
        key: "toString",
        value: function value() {
          return "url(#" + this.id() + ")";
        }
      }]), e;
    }();

    exports.Marker = Mh, li({
      Container: {
        marker: function marker() {
          var t;
          return (t = this.defs()).marker.apply(t, arguments);
        }
      },
      Defs: {
        marker: To(function (t, e, n) {
          return this.put(new Mh()).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(n);
        })
      },
      marker: {
        marker: function marker(t, e, n, r) {
          var i = ["marker"];
          return "all" !== t && i.push(t), i = i.join("-"), t = arguments[1] instanceof Mh ? arguments[1] : this.defs().marker(e, n, r), this.attr(i, t);
        }
      }
    }), Oo(Mh, "Marker");
    var Eh = [].sort,
        Th = [1, 2, 3],
        Ch = h(function () {
      Th.sort(void 0);
    }),
        Ph = h(function () {
      Th.sort(null);
    }),
        Ih = Bo("sort"),
        Nh = Ch || !Ph || Ih;

    function Dh(t, e) {
      return function (n) {
        return null == n ? this[n] : (this[t] = n, e && e.call(this), this);
      };
    }

    Gt({
      target: "Array",
      proto: !0,
      forced: Nh
    }, {
      sort: function sort(t) {
        return void 0 === t ? Eh.call(we(this)) : Eh.call(we(this), Re(t));
      }
    });
    var Rh = {
      "-": function _(t) {
        return t;
      },
      "<>": function _(t) {
        return -Math.cos(t * Math.PI) / 2 + .5;
      },
      ">": function _(t) {
        return Math.sin(t * Math.PI / 2);
      },
      "<": function _(t) {
        return 1 - Math.cos(t * Math.PI / 2);
      },
      bezier: function bezier(t, e, n, r) {
        return function (i) {
          return i < 0 ? t > 0 ? e / t * i : n > 0 ? r / n * i : 0 : i > 1 ? n < 1 ? (1 - r) / (1 - n) * i + (r - n) / (1 - n) : t < 1 ? (1 - e) / (1 - t) * i + (e - t) / (1 - t) : 1 : 3 * i * Math.pow(1 - i, 2) * e + 3 * Math.pow(i, 2) * (1 - i) * r + Math.pow(i, 3);
        };
      },
      steps: function steps(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
        e = e.split("-").reverse()[0];
        var n = t;
        return "none" === e ? --n : "both" === e && ++n, function (r) {
          var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              o = Math.floor(r * t),
              s = r * o % 1 == 0;
          return "start" !== e && "both" !== e || ++o, i && s && --o, r >= 0 && o < 0 && (o = 0), r <= 1 && o > n && (o = n), o / n;
        };
      }
    };
    exports.easing = Rh;

    var Lh = function () {
      function t() {
        po(this, t);
      }

      return Mu(t, [{
        key: "done",
        value: function value() {
          return !1;
        }
      }]), t;
    }(),
        Fh = function (t) {
      function e(t) {
        var n;
        return po(this, e), (n = Fu(this, zu(e).call(this))).ease = Rh[t || Ma.ease] || t, n;
      }

      return Xu(e, Lh), Mu(e, [{
        key: "step",
        value: function value(t, e, n) {
          return "number" != typeof t ? n < 1 ? t : e : t + (e - t) * this.ease(n);
        }
      }]), e;
    }();

    exports.Ease = Fh;

    var zh = function (t) {
      function e(t) {
        var n;
        return po(this, e), (n = Fu(this, zu(e).call(this))).stepper = t, n;
      }

      return Xu(e, Lh), Mu(e, [{
        key: "step",
        value: function value(t, e, n, r) {
          return this.stepper(t, e, n, r);
        }
      }, {
        key: "done",
        value: function value(t) {
          return t.done;
        }
      }]), e;
    }();

    function qh() {
      var t = (this._duration || 500) / 1e3,
          e = this._overshoot || 0,
          n = Math.PI,
          r = Math.log(e / 100 + 1e-10),
          i = -r / Math.sqrt(n * n + r * r),
          o = 3.9 / (i * t);
      this.d = 2 * i * o, this.k = o * o;
    }

    exports.Controller = zh;

    var Yh = function (t) {
      function e(t, n) {
        var r;
        return po(this, e), (r = Fu(this, zu(e).call(this))).duration(t || 500).overshoot(n || 0), r;
      }

      return Xu(e, zh), Mu(e, [{
        key: "step",
        value: function value(t, e, n, r) {
          if ("string" == typeof t) return t;
          if (r.done = n === 1 / 0, n === 1 / 0) return e;
          if (0 === n) return t;
          n > 100 && (n = 16), n /= 1e3;
          var i = r.velocity || 0,
              o = -this.d * i - this.k * (t - e),
              s = t + i * n + o * n * n / 2;
          return r.velocity = i + o * n, r.done = Math.abs(e - s) + Math.abs(i) < .002, r.done ? e : s;
        }
      }]), e;
    }();

    exports.Spring = Yh, Eo(Yh, {
      duration: Dh("_duration", qh),
      overshoot: Dh("_overshoot", qh)
    });

    var Gh = function (t) {
      function e(t, n, r, i) {
        var o;
        return po(this, e), t = null == t ? .1 : t, n = null == n ? .01 : n, r = null == r ? 0 : r, i = null == i ? 1e3 : i, (o = Fu(this, zu(e).call(this))).p(t).i(n).d(r).windup(i), o;
      }

      return Xu(e, zh), Mu(e, [{
        key: "step",
        value: function value(t, e, n, r) {
          if ("string" == typeof t) return t;
          if (r.done = n === 1 / 0, n === 1 / 0) return e;
          if (0 === n) return t;
          var i = e - t,
              o = (r.integral || 0) + i * n,
              s = (i - (r.error || 0)) / n,
              u = this.windup;
          return !1 !== u && (o = Math.max(-u, Math.min(o, u))), r.error = i, r.integral = o, r.done = Math.abs(i) < .001, r.done ? e : t + (this.P * i + this.I * o + this.D * s);
        }
      }]), e;
    }();

    exports.PID = Gh, Eo(Gh, {
      windup: Dh("windup"),
      p: Dh("P"),
      i: Dh("I"),
      d: Dh("D")
    });
    var Xh = wa("PathArray", Ca);

    function Vh(t, e, n, r) {
      return n + r.replace(ks, " .");
    }

    function Bh(t) {
      for (var e = 0, n = t.length, r = ""; e < n; e++) {
        r += t[e][0], null != t[e][1] && (r += t[e][1], null != t[e][2] && (r += " ", r += t[e][2], null != t[e][3] && (r += " ", r += t[e][3], r += " ", r += t[e][4], null != t[e][5] && (r += " ", r += t[e][5], r += " ", r += t[e][6], null != t[e][7] && (r += " ", r += t[e][7])))));
      }

      return r + " ";
    }

    exports.PathArray = Xh;

    for (var Hh = {
      M: function M(t, e, n) {
        return e.x = n.x = t[0], e.y = n.y = t[1], ["M", e.x, e.y];
      },
      L: function L(t, e) {
        return e.x = t[0], e.y = t[1], ["L", t[0], t[1]];
      },
      H: function H(t, e) {
        return e.x = t[0], ["H", t[0]];
      },
      V: function V(t, e) {
        return e.y = t[0], ["V", t[0]];
      },
      C: function C(t, e) {
        return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]];
      },
      S: function S(t, e) {
        return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]];
      },
      Q: function Q(t, e) {
        return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]];
      },
      T: function T(t, e) {
        return e.x = t[0], e.y = t[1], ["T", t[0], t[1]];
      },
      Z: function Z(t, e, n) {
        return e.x = n.x, e.y = n.y, ["Z"];
      },
      A: function A(t, e) {
        return e.x = t[5], e.y = t[6], ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]];
      }
    }, Uh = "mlhvqtcsaz".split(""), $h = 0, Qh = Uh.length; $h < Qh; ++$h) {
      Hh[Uh[$h]] = function (t) {
        return function (e, n, r) {
          if ("H" === t) e[0] = e[0] + n.x;else if ("V" === t) e[0] = e[0] + n.y;else if ("A" === t) e[5] = e[5] + n.x, e[6] = e[6] + n.y;else for (var i = 0, o = e.length; i < o; ++i) {
            e[i] = e[i] + (i % 2 ? n.y : n.x);
          }
          return Hh[t](e, n, r);
        };
      }(Uh[$h].toUpperCase());
    }

    Eo(Xh, {
      toString: function toString() {
        return Bh(this);
      },
      move: function move(t, e) {
        var n = this.bbox();
        if (t -= n.x, e -= n.y, !isNaN(t) && !isNaN(e)) for (var r, i = this.length - 1; i >= 0; i--) {
          "M" === (r = this[i][0]) || "L" === r || "T" === r ? (this[i][1] += t, this[i][2] += e) : "H" === r ? this[i][1] += t : "V" === r ? this[i][1] += e : "C" === r || "S" === r || "Q" === r ? (this[i][1] += t, this[i][2] += e, this[i][3] += t, this[i][4] += e, "C" === r && (this[i][5] += t, this[i][6] += e)) : "A" === r && (this[i][6] += t, this[i][7] += e);
        }
        return this;
      },
      size: function size(t, e) {
        var n,
            r,
            i = this.bbox();

        for (i.width = 0 === i.width ? 1 : i.width, i.height = 0 === i.height ? 1 : i.height, n = this.length - 1; n >= 0; n--) {
          "M" === (r = this[n][0]) || "L" === r || "T" === r ? (this[n][1] = (this[n][1] - i.x) * t / i.width + i.x, this[n][2] = (this[n][2] - i.y) * e / i.height + i.y) : "H" === r ? this[n][1] = (this[n][1] - i.x) * t / i.width + i.x : "V" === r ? this[n][1] = (this[n][1] - i.y) * e / i.height + i.y : "C" === r || "S" === r || "Q" === r ? (this[n][1] = (this[n][1] - i.x) * t / i.width + i.x, this[n][2] = (this[n][2] - i.y) * e / i.height + i.y, this[n][3] = (this[n][3] - i.x) * t / i.width + i.x, this[n][4] = (this[n][4] - i.y) * e / i.height + i.y, "C" === r && (this[n][5] = (this[n][5] - i.x) * t / i.width + i.x, this[n][6] = (this[n][6] - i.y) * e / i.height + i.y)) : "A" === r && (this[n][1] = this[n][1] * t / i.width, this[n][2] = this[n][2] * e / i.height, this[n][6] = (this[n][6] - i.x) * t / i.width + i.x, this[n][7] = (this[n][7] - i.y) * e / i.height + i.y);
        }

        return this;
      },
      equalCommands: function equalCommands(t) {
        var e, n, r;

        for (t = new Xh(t), r = this.length === t.length, e = 0, n = this.length; r && e < n; e++) {
          r = this[e][0] === t[e][0];
        }

        return r;
      },
      morph: function morph(t) {
        return t = new Xh(t), this.equalCommands(t) ? this.destination = t : this.destination = null, this;
      },
      at: function at(t) {
        if (!this.destination) return this;
        var e,
            n,
            r,
            i,
            o = this.destination.value,
            s = [],
            u = new Xh();

        for (e = 0, n = this.length; e < n; e++) {
          for (s[e] = [this[e][0]], r = 1, i = this[e].length; r < i; r++) {
            s[e][r] = this[e][r] + (o[e][r] - this[e][r]) * t;
          }

          "A" === s[e][0] && (s[e][4] = +(0 !== s[e][4]), s[e][5] = +(0 !== s[e][5]));
        }

        return u.value = s, u;
      },
      parse: function parse() {
        var t,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [["M", 0, 0]];
        if (e instanceof Xh) return e;
        var n = {
          M: 2,
          L: 2,
          H: 1,
          V: 1,
          C: 6,
          S: 4,
          Q: 4,
          T: 2,
          A: 7,
          Z: 0
        };
        e = "string" == typeof e ? e.replace(_s, Vh).replace(ws, " $& ").replace(xs, "$1 -").trim().split(gs) : e.reduce(function (t, e) {
          return [].concat.call(t, e);
        }, []);
        var r = [],
            i = new ua(),
            o = new ua(),
            s = 0,
            u = e.length;

        do {
          bs.test(e[s]) ? (t = e[s], ++s) : "M" === t ? t = "L" : "m" === t && (t = "l"), r.push(Hh[t].call(null, e.slice(s, s += n[t.toUpperCase()]).map(parseFloat), i, o));
        } while (u > s);

        return r;
      },
      bbox: function bbox() {
        return pa().path.setAttribute("d", this.toString()), pa.nodes.path.getBBox();
      }
    });

    var Wh = function () {
      function t(e) {
        po(this, t), this._stepper = e || new Fh("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null;
      }

      return Mu(t, [{
        key: "from",
        value: function value(t) {
          return null == t ? this._from : (this._from = this._set(t), this);
        }
      }, {
        key: "to",
        value: function value(t) {
          return null == t ? this._to : (this._to = this._set(t), this);
        }
      }, {
        key: "type",
        value: function value(t) {
          return null == t ? this._type : (this._type = t, this);
        }
      }, {
        key: "_set",
        value: function value(t) {
          if (!this._type) {
            var e = xe(t);
            "number" === e ? this.type(Pa) : "string" === e ? Du.isColor(t) ? this.type(Du) : gs.test(t) ? this.type(ws.test(t) ? Xh : Ca) : os.test(t) ? this.type(Pa) : this.type(Jh) : tl.indexOf(t.constructor) > -1 ? this.type(t.constructor) : Array.isArray(t) ? this.type(Ca) : "object" === e ? this.type(Kh) : this.type(Jh);
          }

          var n = new this._type(t);
          return this._type === Du && (n = this._to ? n[this._to[4]]() : this._from ? n[this._from[4]]() : n), n = n.toArray(), this._morphObj = this._morphObj || new this._type(), this._context = this._context || Array.apply(null, Array(n.length)).map(Object).map(function (t) {
            return t.done = !0, t;
          }), n;
        }
      }, {
        key: "stepper",
        value: function value(t) {
          return null == t ? this._stepper : (this._stepper = t, this);
        }
      }, {
        key: "done",
        value: function value() {
          return this._context.map(this._stepper.done).reduce(function (t, e) {
            return t && e;
          }, !0);
        }
      }, {
        key: "at",
        value: function value(t) {
          var e = this;
          return this._morphObj.fromArray(this._from.map(function (n, r) {
            return e._stepper.step(n, e._to[r], t, e._context[r], e._context);
          }));
        }
      }]), t;
    }();

    exports.Morphable = Wh;

    var Jh = function () {
      function t() {
        po(this, t), this.init.apply(this, arguments);
      }

      return Mu(t, [{
        key: "init",
        value: function value(t) {
          return t = Array.isArray(t) ? t[0] : t, this.value = t, this;
        }
      }, {
        key: "valueOf",
        value: function value() {
          return this.value;
        }
      }, {
        key: "toArray",
        value: function value() {
          return [this.value];
        }
      }]), t;
    }();

    exports.NonMorphable = Jh;

    var Zh = function () {
      function t() {
        po(this, t), this.init.apply(this, arguments);
      }

      return Mu(t, [{
        key: "init",
        value: function value(e) {
          return Array.isArray(e) && (e = {
            scaleX: e[0],
            scaleY: e[1],
            shear: e[2],
            rotate: e[3],
            translateX: e[4],
            translateY: e[5],
            originX: e[6],
            originY: e[7]
          }), Object.assign(this, t.defaults, e), this;
        }
      }, {
        key: "toArray",
        value: function value() {
          var t = this;
          return [t.scaleX, t.scaleY, t.shear, t.rotate, t.translateX, t.translateY, t.originX, t.originY];
        }
      }]), t;
    }();

    exports.TransformBag = Zh, Zh.defaults = {
      scaleX: 1,
      scaleY: 1,
      shear: 0,
      rotate: 0,
      translateX: 0,
      translateY: 0,
      originX: 0,
      originY: 0
    };

    var Kh = function () {
      function t() {
        po(this, t), this.init.apply(this, arguments);
      }

      return Mu(t, [{
        key: "init",
        value: function value(t) {
          if (this.values = [], !Array.isArray(t)) {
            t = t || {};
            var e = [];

            for (var n in t) {
              e.push([n, t[n]]);
            }

            return e.sort(function (t, e) {
              return t[0] - e[0];
            }), this.values = e.reduce(function (t, e) {
              return t.concat(e);
            }, []), this;
          }

          this.values = t;
        }
      }, {
        key: "valueOf",
        value: function value() {
          for (var t = {}, e = this.values, n = 0, r = e.length; n < r; n += 2) {
            t[e[n]] = e[n + 1];
          }

          return t;
        }
      }, {
        key: "toArray",
        value: function value() {
          return this.values;
        }
      }]), t;
    }();

    exports.ObjectBag = Kh;
    var tl = [Jh, Zh, Kh];

    function el() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      tl.push.apply(tl, ui([].concat(t)));
    }

    function nl() {
      Eo(tl, {
        to: function to(t) {
          return new Wh().type(this.constructor).from(this.valueOf()).to(t);
        },
        fromArray: function fromArray(t) {
          return this.init(t), this;
        }
      });
    }

    var rl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("path", t), t));
      }

      return Xu(e, ah), Mu(e, [{
        key: "array",
        value: function value() {
          return this._array || (this._array = new Xh(this.attr("d")));
        }
      }, {
        key: "plot",
        value: function value(t) {
          return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new Xh(t));
        }
      }, {
        key: "clear",
        value: function value() {
          return delete this._array, this;
        }
      }, {
        key: "move",
        value: function value(t, e) {
          return this.attr("d", this.array().move(t, e));
        }
      }, {
        key: "x",
        value: function value(t) {
          return null == t ? this.bbox().x : this.move(t, this.bbox().y);
        }
      }, {
        key: "y",
        value: function value(t) {
          return null == t ? this.bbox().y : this.move(this.bbox().x, t);
        }
      }, {
        key: "size",
        value: function value(t, e) {
          var n = ro(this, t, e);
          return this.attr("d", this.array().size(n.width, n.height));
        }
      }, {
        key: "width",
        value: function value(t) {
          return null == t ? this.bbox().width : this.size(t, this.bbox().height);
        }
      }, {
        key: "height",
        value: function value(t) {
          return null == t ? this.bbox().height : this.size(this.bbox().width, t);
        }
      }, {
        key: "targets",
        value: function value() {
          return ka('svg textpath [href*="' + this.id() + '"]');
        }
      }]), e;
    }();

    function il() {
      return this._array || (this._array = new wh(this.attr("points")));
    }

    function ol(t) {
      return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new wh(t));
    }

    function sl() {
      return delete this._array, this;
    }

    function ul(t, e) {
      return this.attr("points", this.array().move(t, e));
    }

    function al(t, e) {
      var n = ro(this, t, e);
      return this.attr("points", this.array().size(n.width, n.height));
    }

    exports.Path = rl, rl.prototype.MorphArray = Xh, li({
      Container: {
        path: To(function (t) {
          return this.put(new rl()).plot(t || new Xh());
        })
      }
    }), Oo(rl, "Path");

    var hl = {
      __proto__: null,
      array: il,
      plot: ol,
      clear: sl,
      move: ul,
      size: al
    },
        ll = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("polygon", t), t));
      }

      return Xu(e, ah), e;
    }();

    exports.Polygon = ll, li({
      Container: {
        polygon: To(function (t) {
          return this.put(new ll()).plot(t || new wh());
        })
      }
    }), Eo(ll, Ah), Eo(ll, hl), Oo(ll, "Polygon");

    var cl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("polyline", t), t));
      }

      return Xu(e, ah), e;
    }();

    exports.Polyline = cl, li({
      Container: {
        polyline: To(function (t) {
          return this.put(new cl()).plot(t || new wh());
        })
      }
    }), Eo(cl, Ah), Eo(cl, hl), Oo(cl, "Polyline");

    var fl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("rect", t), t));
      }

      return Xu(e, ah), e;
    }();

    exports.Rect = fl, Eo(fl, {
      rx: Ka,
      ry: th
    }), li({
      Container: {
        rect: To(function (t, e) {
          return this.put(new fl()).size(t, e);
        })
      }
    }), Oo(fl, "Rect");
    var pl = Math.max,
        vl = Math.min,
        dl = 9007199254740991,
        yl = "Maximum allowed length exceeded";
    Gt({
      target: "Array",
      proto: !0,
      forced: !ee("splice")
    }, {
      splice: function splice(t, e) {
        var n,
            r,
            i,
            o,
            s,
            u,
            a = we(this),
            h = gt(a.length),
            l = bt(t, h),
            c = arguments.length;
        if (0 === c ? n = r = 0 : 1 === c ? (n = 0, r = h - l) : (n = c - 2, r = vl(pl(yt(e), 0), h - l)), h + n - r > dl) throw TypeError(yl);

        for (i = ze(a, r), o = 0; o < r; o++) {
          (s = l + o) in a && Vt(i, o, a[s]);
        }

        if (i.length = r, n < r) {
          for (o = l; o < h - r; o++) {
            u = o + n, (s = o + r) in a ? a[u] = a[s] : delete a[u];
          }

          for (o = h; o > h - r + n; o--) {
            delete a[o - 1];
          }
        } else if (n > r) for (o = h - r; o > l; o--) {
          u = o + n - 1, (s = o + r - 1) in a ? a[u] = a[s] : delete a[u];
        }

        for (o = 0; o < n; o++) {
          a[o + l] = arguments[o + 2];
        }

        return a.length = h - r + n, i;
      }
    });

    var ml = function () {
      function t() {
        po(this, t), this._first = null, this._last = null;
      }

      return Mu(t, [{
        key: "push",
        value: function value(t) {
          var e = t.next ? t : {
            value: t,
            next: null,
            prev: null
          };
          return this._last ? (e.prev = this._last, this._last.next = e, this._last = e) : (this._last = e, this._first = e), e;
        }
      }, {
        key: "shift",
        value: function value() {
          var t = this._first;
          return t ? (this._first = t.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, t.value) : null;
        }
      }, {
        key: "first",
        value: function value() {
          return this._first && this._first.value;
        }
      }, {
        key: "last",
        value: function value() {
          return this._last && this._last.value;
        }
      }, {
        key: "remove",
        value: function value(t) {
          t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t === this._last && (this._last = t.prev), t === this._first && (this._first = t.next), t.prev = null, t.next = null;
        }
      }]), t;
    }();

    exports.Queue = ml;
    var gl = {
      nextDraw: null,
      frames: new ml(),
      timeouts: new ml(),
      immediates: new ml(),
      timer: function timer() {
        return co.window.performance || co.window.Date;
      },
      transforms: [],
      frame: function frame(t) {
        var e = gl.frames.push({
          run: t
        });
        return null === gl.nextDraw && (gl.nextDraw = co.window.requestAnimationFrame(gl._draw)), e;
      },
      timeout: function timeout(t, e) {
        e = e || 0;
        var n = gl.timer().now() + e,
            r = gl.timeouts.push({
          run: t,
          time: n
        });
        return null === gl.nextDraw && (gl.nextDraw = co.window.requestAnimationFrame(gl._draw)), r;
      },
      immediate: function immediate(t) {
        var e = gl.immediates.push(t);
        return null === gl.nextDraw && (gl.nextDraw = co.window.requestAnimationFrame(gl._draw)), e;
      },
      cancelFrame: function cancelFrame(t) {
        null != t && gl.frames.remove(t);
      },
      clearTimeout: function clearTimeout(t) {
        null != t && gl.timeouts.remove(t);
      },
      cancelImmediate: function cancelImmediate(t) {
        null != t && gl.immediates.remove(t);
      },
      _draw: function _draw(t) {
        for (var e = null, n = gl.timeouts.last(); (e = gl.timeouts.shift()) && (t >= e.time ? e.run() : gl.timeouts.push(e), e !== n);) {
          ;
        }

        for (var r = null, i = gl.frames.last(); r !== i && (r = gl.frames.shift());) {
          r.run(t);
        }

        for (var o = null; o = gl.immediates.shift();) {
          o();
        }

        gl.nextDraw = gl.timeouts.first() || gl.frames.first() ? co.window.requestAnimationFrame(gl._draw) : null;
      }
    };
    exports.Animator = gl;

    var xl = function xl(t) {
      var e = t.start,
          n = t.runner.duration();
      return {
        start: e,
        duration: n,
        end: e + n,
        runner: t.runner
      };
    },
        wl = function wl() {
      var t = co.window;
      return (t.performance || t.Date).now();
    },
        bl = function (t) {
      function e() {
        var t,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wl;
        return po(this, e), (t = Fu(this, zu(e).call(this)))._timeSource = n, t._startTime = 0, t._speed = 1, t._persist = 0, t._nextFrame = null, t._paused = !0, t._runners = [], t._runnerIds = [], t._lastRunnerId = -1, t._time = 0, t._lastSourceTime = 0, t._lastStepTime = 0, t._step = t._stepFn.bind(Lu(t), !1), t._stepImmediate = t._stepFn.bind(Lu(t), !0), t;
      }

      return Xu(e, Aa), Mu(e, [{
        key: "schedule",
        value: function value(t, e, n) {
          if (null == t) return this._runners.map(xl);
          var r = 0,
              i = this.getEndTime();
          if (e = e || 0, null == n || "last" === n || "after" === n) r = i;else if ("absolute" === n || "start" === n) r = e, e = 0;else if ("now" === n) r = this._time;else {
            if ("relative" !== n) throw new Error('Invalid value for the "when" parameter');
            var o = this._runners[t.id];
            o && (r = o.start + e, e = 0);
          }
          t.unschedule(), t.timeline(this);
          var s = t.persist(),
              u = {
            persist: null === s ? this._persist : s,
            start: r + e,
            runner: t
          };
          return this._lastRunnerId = t.id, this._runners.push(u), this._runners.sort(function (t, e) {
            return t.start - e.start;
          }), this._runnerIds = this._runners.map(function (t) {
            return t.runner.id;
          }), this.updateTime()._continue(), this;
        }
      }, {
        key: "unschedule",
        value: function value(t) {
          var e = this._runnerIds.indexOf(t.id);

          return e < 0 ? this : (this._runners.splice(e, 1), this._runnerIds.splice(e, 1), t.timeline(null), this);
        }
      }, {
        key: "getEndTime",
        value: function value() {
          var t = this._runners[this._runnerIds.indexOf(this._lastRunnerId)],
              e = t ? t.runner.duration() : 0;

          return (t ? t.start : 0) + e;
        }
      }, {
        key: "getEndTimeOfTimeline",
        value: function value() {
          for (var t = 0, e = 0; e < this._runners.length; e++) {
            var n = this._runners[e],
                r = n ? n.runner.duration() : 0,
                i = (n ? n.start : 0) + r;
            i > t && (t = i);
          }

          return t;
        }
      }, {
        key: "updateTime",
        value: function value() {
          return this.active() || (this._lastSourceTime = this._timeSource()), this;
        }
      }, {
        key: "play",
        value: function value() {
          return this._paused = !1, this.updateTime()._continue();
        }
      }, {
        key: "pause",
        value: function value() {
          return this._paused = !0, this._continue();
        }
      }, {
        key: "stop",
        value: function value() {
          return this.time(0), this.pause();
        }
      }, {
        key: "finish",
        value: function value() {
          return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
        }
      }, {
        key: "speed",
        value: function value(t) {
          return null == t ? this._speed : (this._speed = t, this);
        }
      }, {
        key: "reverse",
        value: function value(t) {
          var e = this.speed();
          if (null == t) return this.speed(-e);
          var n = Math.abs(e);
          return this.speed(t ? n : -n);
        }
      }, {
        key: "seek",
        value: function value(t) {
          return this.time(this._time + t);
        }
      }, {
        key: "time",
        value: function value(t) {
          return null == t ? this._time : (this._time = t, this._continue(!0));
        }
      }, {
        key: "persist",
        value: function value(t) {
          return null == t ? this._persist : (this._persist = t, this);
        }
      }, {
        key: "source",
        value: function value(t) {
          return null == t ? this._timeSource : (this._timeSource = t, this);
        }
      }, {
        key: "_stepFn",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = this._timeSource(),
              n = e - this._lastSourceTime;

          t && (n = 0);
          var r = this._speed * n + (this._time - this._lastStepTime);
          this._lastSourceTime = e, t || (this._time += r, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);

          for (var i = this._runners.length; i--;) {
            var o = this._runners[i],
                s = o.runner;
            this._time - o.start <= 0 && s.reset();
          }

          for (var u = !1, a = 0, h = this._runners.length; a < h; a++) {
            var l = this._runners[a],
                c = l.runner,
                f = r,
                p = this._time - l.start;
            if (p <= 0) u = !0;else if (p < f && (f = p), c.active()) if (c.step(f).done) {
              if (!0 !== l.persist) {
                c.duration() - c.time() + this._time + l.persist < this._time && (c.unschedule(), --a, --h);
              }
            } else u = !0;
          }

          return u && !(this._speed < 0 && 0 === this._time) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this;
        }
      }, {
        key: "_continue",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return gl.cancelFrame(this._nextFrame), this._nextFrame = null, t ? this._stepImmediate() : this._paused ? this : (this._nextFrame = gl.frame(this._step), this);
        }
      }, {
        key: "active",
        value: function value() {
          return !!this._nextFrame;
        }
      }]), e;
    }();

    function _l(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function kl(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? _l(n, !0).forEach(function (e) {
          Ba(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _l(n).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    exports.Timeline = bl, li({
      Element: {
        timeline: function timeline(t) {
          return null == t ? (this._timeline = this._timeline || new bl(), this._timeline) : (this._timeline = t, this);
        }
      }
    });

    var Ol = function (t) {
      function e(t) {
        var n;
        return po(this, e), (n = Fu(this, zu(e).call(this))).id = e.id++, t = "function" == typeof (t = null == t ? Ma.duration : t) ? new zh(t) : t, n._element = null, n._timeline = null, n.done = !1, n._queue = [], n._duration = "number" == typeof t && t, n._isDeclarative = t instanceof zh, n._stepper = n._isDeclarative ? t : new Fh(), n._history = {}, n.enabled = !0, n._time = 0, n._lastTime = 0, n._reseted = !0, n.transforms = new la(), n.transformId = 1, n._haveReversed = !1, n._reverse = !1, n._loopsDone = 0, n._swing = !1, n._wait = 0, n._times = 1, n._frameId = null, n._persist = !!n._isDeclarative || null, n;
      }

      return Xu(e, Aa), Mu(e, [{
        key: "element",
        value: function value(t) {
          return null == t ? this._element : (this._element = t, t._prepareRunner(), this);
        }
      }, {
        key: "timeline",
        value: function value(t) {
          return void 0 === t ? this._timeline : (this._timeline = t, this);
        }
      }, {
        key: "animate",
        value: function value(t, n, r) {
          var i = e.sanitise(t, n, r),
              o = new e(i.duration);
          return this._timeline && o.timeline(this._timeline), this._element && o.element(this._element), o.loop(i).schedule(i.delay, i.when);
        }
      }, {
        key: "schedule",
        value: function value(t, e, n) {
          if (t instanceof bl || (n = e, e = t, t = this.timeline()), !t) throw Error("Runner cannot be scheduled without timeline");
          return t.schedule(this, e, n), this;
        }
      }, {
        key: "unschedule",
        value: function value() {
          var t = this.timeline();
          return t && t.unschedule(this), this;
        }
      }, {
        key: "loop",
        value: function value(t, e, n) {
          return "object" === xe(t) && (e = t.swing, n = t.wait, t = t.times), this._times = t || 1 / 0, this._swing = e || !1, this._wait = n || 0, !0 === this._times && (this._times = 1 / 0), this;
        }
      }, {
        key: "delay",
        value: function value(t) {
          return this.animate(0, t);
        }
      }, {
        key: "queue",
        value: function value(t, e, n, r) {
          return this._queue.push({
            initialiser: t || ja,
            runner: e || ja,
            retarget: n,
            isTransform: r,
            initialised: !1,
            finished: !1
          }), this.timeline() && this.timeline()._continue(), this;
        }
      }, {
        key: "during",
        value: function value(t) {
          return this.queue(null, t);
        }
      }, {
        key: "after",
        value: function value(t) {
          return this.on("finished", t);
        }
      }, {
        key: "time",
        value: function value(t) {
          if (null == t) return this._time;
          var e = t - this._time;
          return this.step(e), this;
        }
      }, {
        key: "duration",
        value: function value() {
          return this._times * (this._wait + this._duration) - this._wait;
        }
      }, {
        key: "loops",
        value: function value(t) {
          var e = this._duration + this._wait;

          if (null == t) {
            var n = Math.floor(this._time / e),
                r = (this._time - n * e) / this._duration;
            return Math.min(n + r, this._times);
          }

          var i = t % 1,
              o = e * Math.floor(t) + this._duration * i;
          return this.time(o);
        }
      }, {
        key: "persist",
        value: function value(t) {
          return null == t ? this._persist : (this._persist = t, this);
        }
      }, {
        key: "position",
        value: function value(t) {
          var e,
              n = this._time,
              r = this._duration,
              i = this._wait,
              o = this._times,
              s = this._swing,
              u = this._reverse;

          if (null == t) {
            var a = function a(t) {
              var e = s * Math.floor(t % (2 * (i + r)) / (i + r)),
                  n = e && !u || !e && u,
                  o = Math.pow(-1, n) * (t % (i + r)) / r + n;
              return Math.max(Math.min(o, 1), 0);
            },
                h = o * (i + r) - i;

            return e = n <= 0 ? Math.round(a(1e-5)) : n < h ? a(n) : Math.round(a(h - 1e-5)), e;
          }

          var l = Math.floor(this.loops()),
              c = s && l % 2 == 0;
          return e = l + (c && !u || u && c ? t : 1 - t), this.loops(e);
        }
      }, {
        key: "progress",
        value: function value(t) {
          return null == t ? Math.min(1, this._time / this.duration()) : this.time(t * this.duration());
        }
      }, {
        key: "step",
        value: function value(t) {
          if (!this.enabled) return this;
          t = null == t ? 16 : t, this._time += t;
          var e = this.position(),
              n = this._lastPosition !== e && this._time >= 0;
          this._lastPosition = e;
          var r = this.duration(),
              i = this._lastTime <= 0 && this._time > 0,
              o = this._lastTime < r && this._time >= r;
          this._lastTime = this._time, i && this.fire("start", this);
          var s = this._isDeclarative;

          if (this.done = !s && !o && this._time >= r, this._reseted = !1, n || s) {
            this._initialise(n), this.transforms = new la();

            var u = this._run(s ? t : e);

            this.fire("step", this);
          }

          return this.done = this.done || u && s, o && this.fire("finished", this), this;
        }
      }, {
        key: "reset",
        value: function value() {
          return this._reseted ? this : (this.time(0), this._reseted = !0, this);
        }
      }, {
        key: "finish",
        value: function value() {
          return this.step(1 / 0);
        }
      }, {
        key: "reverse",
        value: function value(t) {
          return this._reverse = null == t ? !this._reverse : t, this;
        }
      }, {
        key: "ease",
        value: function value(t) {
          return this._stepper = new Fh(t), this;
        }
      }, {
        key: "active",
        value: function value(t) {
          return null == t ? this.enabled : (this.enabled = t, this);
        }
      }, {
        key: "_rememberMorpher",
        value: function value(t, e) {
          if (this._history[t] = {
            morpher: e,
            caller: this._queue[this._queue.length - 1]
          }, this._isDeclarative) {
            var n = this.timeline();
            n && n.play();
          }
        }
      }, {
        key: "_tryRetarget",
        value: function value(t, e, n) {
          if (this._history[t]) {
            if (!this._history[t].caller.initialised) {
              var r = this._queue.indexOf(this._history[t].caller);

              return this._queue.splice(r, 1), !1;
            }

            this._history[t].caller.retarget ? this._history[t].caller.retarget(e, n) : this._history[t].morpher.to(e), this._history[t].caller.finished = !1;
            var i = this.timeline();
            return i && i.play(), !0;
          }

          return !1;
        }
      }, {
        key: "_initialise",
        value: function value(t) {
          if (t || this._isDeclarative) for (var e = 0, n = this._queue.length; e < n; ++e) {
            var r = this._queue[e],
                i = this._isDeclarative || !r.initialised && t;
            t = !r.finished, i && t && (r.initialiser.call(this), r.initialised = !0);
          }
        }
      }, {
        key: "_run",
        value: function value(t) {
          for (var e = !0, n = 0, r = this._queue.length; n < r; ++n) {
            var i = this._queue[n],
                o = i.runner.call(this, t);
            i.finished = i.finished || !0 === o, e = e && i.finished;
          }

          return e;
        }
      }, {
        key: "addTransform",
        value: function value(t, e) {
          return this.transforms.lmultiplyO(t), this;
        }
      }, {
        key: "clearTransform",
        value: function value() {
          return this.transforms = new la(), this;
        }
      }, {
        key: "clearTransformsFromQueue",
        value: function value() {
          this.done && this._timeline && this._timeline._runnerIds.includes(this.id) || (this._queue = this._queue.filter(function (t) {
            return !t.isTransform;
          }));
        }
      }], [{
        key: "sanitise",
        value: function value(t, e, n) {
          var r = 1,
              i = !1,
              o = 0;
          return t = t || Ma.duration, e = e || Ma.delay, n = n || "last", "object" !== xe(t) || t instanceof Lh || (e = t.delay || e, n = t.when || n, i = t.swing || i, r = t.times || r, o = t.wait || o, t = t.duration || Ma.duration), {
            duration: t,
            delay: e,
            swing: i,
            times: r,
            wait: o,
            when: n
          };
        }
      }]), e;
    }();

    exports.Runner = Ol, Ol.id = 0;

    var Sl = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new la(),
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        po(this, t), this.transforms = e, this.id = n, this.done = r;
      }

      return Mu(t, [{
        key: "clearTransformsFromQueue",
        value: function value() {}
      }]), t;
    }();

    Eo([Ol, Sl], {
      mergeWith: function mergeWith(t) {
        return new Sl(t.transforms.lmultiply(this.transforms), t.id);
      }
    });

    var Al = function Al(t, e) {
      return t.lmultiplyO(e);
    },
        jl = function jl(t) {
      return t.transforms;
    };

    function Ml() {
      var t = this._transformationRunners.runners.map(jl).reduce(Al, new la());

      this.transform(t), this._transformationRunners.merge(), 1 === this._transformationRunners.length() && (this._frameId = null);
    }

    var El = function () {
      function t() {
        po(this, t), this.runners = [], this.ids = [];
      }

      return Mu(t, [{
        key: "add",
        value: function value(t) {
          if (!this.runners.includes(t)) {
            var e = t.id + 1;
            return this.runners.push(t), this.ids.push(e), this;
          }
        }
      }, {
        key: "getByID",
        value: function value(t) {
          return this.runners[this.ids.indexOf(t + 1)];
        }
      }, {
        key: "remove",
        value: function value(t) {
          var e = this.ids.indexOf(t + 1);
          return this.ids.splice(e, 1), this.runners.splice(e, 1), this;
        }
      }, {
        key: "merge",
        value: function value() {
          var t = this,
              e = null;
          return this.runners.forEach(function (n, r) {
            e && n.done && e.done && (!n._timeline || !n._timeline._runnerIds.includes(n.id)) && (!e._timeline || !e._timeline._runnerIds.includes(e.id)) && (t.remove(n.id), t.edit(e.id, n.mergeWith(e))), e = n;
          }), this;
        }
      }, {
        key: "edit",
        value: function value(t, e) {
          var n = this.ids.indexOf(t + 1);
          return this.ids.splice(n, 1, t + 1), this.runners.splice(n, 1, e), this;
        }
      }, {
        key: "length",
        value: function value() {
          return this.ids.length;
        }
      }, {
        key: "clearBefore",
        value: function value(t) {
          var e = this.ids.indexOf(t + 1) || 1;
          return this.ids.splice(0, e, 0), this.runners.splice(0, e, new Sl()).forEach(function (t) {
            return t.clearTransformsFromQueue();
          }), this;
        }
      }]), t;
    }();

    li({
      Element: {
        animate: function animate(t, e, n) {
          var r = Ol.sanitise(t, e, n),
              i = this.timeline();
          return new Ol(r.duration).loop(r).element(this).timeline(i.play()).schedule(r.delay, r.when);
        },
        delay: function delay(t, e) {
          return this.animate(0, t, e);
        },
        _clearTransformRunnersBefore: function _clearTransformRunnersBefore(t) {
          this._transformationRunners.clearBefore(t.id);
        },
        _currentTransform: function _currentTransform(t) {
          return this._transformationRunners.runners.filter(function (e) {
            return e.id <= t.id;
          }).map(jl).reduce(Al, new la());
        },
        _addRunner: function _addRunner(t) {
          this._transformationRunners.add(t), gl.cancelImmediate(this._frameId), this._frameId = gl.immediate(Ml.bind(this));
        },
        _prepareRunner: function _prepareRunner() {
          null == this._frameId && (this._transformationRunners = new El().add(new Sl(new la(this))));
        }
      }
    }), Eo(Ol, {
      attr: function attr(t, e) {
        return this.styleAttr("attr", t, e);
      },
      css: function css(t, e) {
        return this.styleAttr("css", t, e);
      },
      styleAttr: function styleAttr(t, e, n) {
        if ("object" === xe(e)) {
          for (var r in e) {
            this.styleAttr(t, r, e[r]);
          }

          return this;
        }

        var i = new Wh(this._stepper).to(n);
        return this.queue(function () {
          i = i.from(this.element()[t](e));
        }, function (n) {
          return this.element()[t](e, i.at(n)), i.done();
        }), this;
      },
      zoom: function zoom(t, e) {
        if (this._tryRetarget("zoom", dh, e)) return this;
        var n = new Wh(this._stepper).to(new Pa(t));
        return this.queue(function () {
          n = n.from(this.element().zoom());
        }, function (t) {
          return this.element().zoom(n.at(t), e), n.done();
        }, function (t, r) {
          e = r, n.to(t);
        }), this._rememberMorpher("zoom", n), this;
      },
      transform: function transform(t, e, n) {
        if (e = t.relative || e, this._isDeclarative && !e && this._tryRetarget("transform", t)) return this;
        var r = la.isMatrixLike(t);
        n = null != t.affine ? t.affine : null != n ? n : !r;
        var i,
            o,
            s,
            u,
            a,
            h = new Wh(this._stepper).type(n ? Zh : la);
        return this.queue(function () {
          o = o || this.element(), i = i || io(t, o), a = new la(e ? void 0 : o), o._addRunner(this), e || o._clearTransformRunnersBefore(this);
        }, function (l) {
          e || this.clearTransform();
          var c = new ua(i).transform(o._currentTransform(this)),
              f = c.x,
              p = c.y,
              v = new la(kl({}, t, {
            origin: [f, p]
          })),
              d = this._isDeclarative && s ? s : a;

          if (n) {
            v = v.decompose(f, p), d = d.decompose(f, p);
            var y = v.rotate,
                m = d.rotate,
                g = [y - 360, y, y + 360],
                x = g.map(function (t) {
              return Math.abs(t - m);
            }),
                w = Math.min.apply(Math, ui(x)),
                b = x.indexOf(w);
            v.rotate = g[b];
          }

          e && (r || (v.rotate = t.rotate || 0), this._isDeclarative && u && (d.rotate = u)), h.from(d), h.to(v);

          var _ = h.at(l);

          return u = _.rotate, s = new la(_), this.addTransform(s), o._addRunner(this), h.done();
        }, function (e) {
          (e.origin || "center").toString() !== (t.origin || "center").toString() && (i = io(t, o)), t = kl({}, e, {
            origin: i
          });
        }, !0), this._isDeclarative && this._rememberMorpher("transform", h), this;
      },
      x: function x(t, e) {
        return this._queueNumber("x", t);
      },
      y: function y(t) {
        return this._queueNumber("y", t);
      },
      dx: function dx() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._queueNumberDelta("x", t);
      },
      dy: function dy() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._queueNumberDelta("y", t);
      },
      dmove: function dmove(t, e) {
        return this.dx(t).dy(e);
      },
      _queueNumberDelta: function _queueNumberDelta(t, e) {
        if (e = new Pa(e), this._tryRetarget(t, e)) return this;
        var n = new Wh(this._stepper).to(e),
            r = null;
        return this.queue(function () {
          r = this.element()[t](), n.from(r), n.to(r + e);
        }, function (e) {
          return this.element()[t](n.at(e)), n.done();
        }, function (t) {
          n.to(r + new Pa(t));
        }), this._rememberMorpher(t, n), this;
      },
      _queueObject: function _queueObject(t, e) {
        if (this._tryRetarget(t, e)) return this;
        var n = new Wh(this._stepper).to(e);
        return this.queue(function () {
          n.from(this.element()[t]());
        }, function (e) {
          return this.element()[t](n.at(e)), n.done();
        }), this._rememberMorpher(t, n), this;
      },
      _queueNumber: function _queueNumber(t, e) {
        return this._queueObject(t, new Pa(e));
      },
      cx: function cx(t) {
        return this._queueNumber("cx", t);
      },
      cy: function cy(t) {
        return this._queueNumber("cy", t);
      },
      move: function move(t, e) {
        return this.x(t).y(e);
      },
      center: function center(t, e) {
        return this.cx(t).cy(e);
      },
      size: function size(t, e) {
        var n;
        return t && e || (n = this._element.bbox()), t || (t = n.width / n.height * e), e || (e = n.height / n.width * t), this.width(t).height(e);
      },
      width: function width(t) {
        return this._queueNumber("width", t);
      },
      height: function height(t) {
        return this._queueNumber("height", t);
      },
      plot: function plot(t, e, n, r) {
        if (4 === arguments.length) return this.plot([t, e, n, r]);
        if (this._tryRetarget("plot", t)) return this;
        var i = new Wh(this._stepper).type(this._element.MorphArray).to(t);
        return this.queue(function () {
          i.from(this._element.array());
        }, function (t) {
          return this._element.plot(i.at(t)), i.done();
        }), this._rememberMorpher("plot", i), this;
      },
      leading: function leading(t) {
        return this._queueNumber("leading", t);
      },
      viewbox: function viewbox(t, e, n, r) {
        return this._queueObject("viewbox", new ya(t, e, n, r));
      },
      update: function update(t) {
        return "object" !== xe(t) ? this.update({
          offset: arguments[0],
          color: arguments[1],
          opacity: arguments[2]
        }) : (null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", t.offset), this);
      }
    }), Eo(Ol, {
      rx: Ka,
      ry: th,
      from: vh,
      to: dh
    }), Oo(Ol, "Runner");

    var Tl = function (t) {
      function e(t) {
        var n;
        return po(this, e), (n = Fu(this, zu(e).call(this, wo("svg", t), t))).namespace(), n;
      }

      return Xu(e, lh), Mu(e, [{
        key: "isRoot",
        value: function value() {
          return !(this.node.parentNode && this.node.parentNode instanceof co.window.SVGElement && "#document" !== this.node.parentNode.nodeName);
        }
      }, {
        key: "root",
        value: function value() {
          return this.isRoot() ? this : Yu(zu(e.prototype), "root", this).call(this);
        }
      }, {
        key: "namespace",
        value: function value() {
          return this.isRoot() ? this.attr({
            xmlns: so,
            version: "1.1"
          }).attr("xmlns:xlink", ao, uo).attr("xmlns:svgjs", ho, uo) : this.root().namespace();
        }
      }, {
        key: "defs",
        value: function value() {
          return this.isRoot() ? bo(this.node.querySelector("defs")) || this.put(new ch()) : this.root().defs();
        }
      }, {
        key: "parent",
        value: function value(t) {
          return this.isRoot() ? "#document" === this.node.parentNode.nodeName ? null : bo(this.node.parentNode) : Yu(zu(e.prototype), "parent", this).call(this, t);
        }
      }, {
        key: "clear",
        value: function value() {
          for (; this.node.hasChildNodes();) {
            this.node.removeChild(this.node.lastChild);
          }

          return delete this._defs, this;
        }
      }]), e;
    }();

    exports.Svg = Tl, li({
      Container: {
        nested: To(function () {
          return this.put(new Tl());
        })
      }
    }), Oo(Tl, "Svg", !0);

    var Cl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("symbol", t), t));
      }

      return Xu(e, lh), e;
    }();

    function Pl(t) {
      return !1 === this._build && this.clear(), this.node.appendChild(co.document.createTextNode(t)), this;
    }

    function Il() {
      return this.node.getComputedTextLength();
    }

    exports.Symbol = Cl, li({
      Container: {
        symbol: To(function () {
          return this.put(new Cl());
        })
      }
    }), Oo(Cl, "Symbol");

    var Nl = {
      __proto__: null,
      plain: Pl,
      length: Il
    },
        Dl = function (t) {
      function e(t) {
        var n;
        return po(this, e), (n = Fu(this, zu(e).call(this, wo("text", t), t))).dom.leading = new Pa(1.3), n._rebuild = !0, n._build = !1, n;
      }

      return Xu(e, ah), Mu(e, [{
        key: "x",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.x : this.attr("x", this.attr("x") + t - e.x);
        }
      }, {
        key: "y",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.y : this.attr("y", this.attr("y") + t - e.y);
        }
      }, {
        key: "move",
        value: function value(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.bbox();
          return this.x(t, n).y(e, n);
        }
      }, {
        key: "cx",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.cx : this.attr("x", this.attr("x") + t - e.cx);
        }
      }, {
        key: "cy",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.cy : this.attr("y", this.attr("y") + t - e.cy);
        }
      }, {
        key: "center",
        value: function value(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.bbox();
          return this.cx(t, n).cy(e, n);
        }
      }, {
        key: "text",
        value: function value(t) {
          if (void 0 === t) {
            var e = this.node.childNodes,
                n = 0;
            t = "";

            for (var r = 0, i = e.length; r < i; ++r) {
              "textPath" !== e[r].nodeName ? (r !== n && 3 !== e[r].nodeType && !0 === bo(e[r]).dom.newLined && (t += "\n"), t += e[r].textContent) : 0 === r && (n = 1);
            }

            return t;
          }

          if (this.clear().build(!0), "function" == typeof t) t.call(this, this);else for (var o = 0, s = (t = t.split("\n")).length; o < s; o++) {
            this.tspan(t[o]).newLine();
          }
          return this.build(!1).rebuild();
        }
      }, {
        key: "leading",
        value: function value(t) {
          return null == t ? this.dom.leading : (this.dom.leading = new Pa(t), this.rebuild());
        }
      }, {
        key: "rebuild",
        value: function value(t) {
          if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
            var e = this,
                n = 0,
                r = this.dom.leading;
            this.each(function () {
              var t = co.window.getComputedStyle(this.node).getPropertyValue("font-size"),
                  i = r * new Pa(t);
              this.dom.newLined && (this.attr("x", e.attr("x")), "\n" === this.text() ? n += i : (this.attr("dy", i + n), n = 0));
            }), this.fire("rebuild");
          }

          return this;
        }
      }, {
        key: "build",
        value: function value(t) {
          return this._build = !!t, this;
        }
      }, {
        key: "setData",
        value: function value(t) {
          return this.dom = t, this.dom.leading = new Pa(t.leading || 1.3), this;
        }
      }]), e;
    }();

    exports.Text = Dl, Eo(Dl, Nl), li({
      Container: {
        text: To(function (t) {
          return this.put(new Dl()).text(t);
        }),
        plain: To(function (t) {
          return this.put(new Dl()).plain(t);
        })
      }
    }), Oo(Dl, "Text");

    var Rl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("tspan", t), t));
      }

      return Xu(e, Dl), Mu(e, [{
        key: "text",
        value: function value(t) {
          return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this);
        }
      }, {
        key: "dx",
        value: function value(t) {
          return this.attr("dx", t);
        }
      }, {
        key: "dy",
        value: function value(t) {
          return this.attr("dy", t);
        }
      }, {
        key: "x",
        value: function value(t) {
          return this.attr("x", t);
        }
      }, {
        key: "y",
        value: function value(t) {
          return this.attr("x", t);
        }
      }, {
        key: "move",
        value: function value(t, e) {
          return this.x(t).y(e);
        }
      }, {
        key: "newLine",
        value: function value() {
          var t = this.parent(Dl);
          this.dom.newLined = !0;
          var e = co.window.getComputedStyle(this.node).getPropertyValue("font-size"),
              n = t.dom.leading * new Pa(e);
          return this.dy(n).attr("x", t.x());
        }
      }]), e;
    }();

    exports.Tspan = Rl, Eo(Rl, Nl), li({
      Tspan: {
        tspan: To(function (t) {
          var e = new Rl();
          return this._build || this.clear(), this.node.appendChild(e.node), e.text(t);
        })
      }
    }), Oo(Rl, "Tspan");

    var Ll = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("clipPath", t), t));
      }

      return Xu(e, lh), Mu(e, [{
        key: "remove",
        value: function value() {
          return this.targets().forEach(function (t) {
            t.unclip();
          }), Yu(zu(e.prototype), "remove", this).call(this);
        }
      }, {
        key: "targets",
        value: function value() {
          return ka('svg [clip-path*="' + this.id() + '"]');
        }
      }]), e;
    }();

    exports.ClipPath = Ll, li({
      Container: {
        clip: To(function () {
          return this.defs().put(new Ll());
        })
      },
      Element: {
        clipWith: function clipWith(t) {
          var e = t instanceof Ll ? t : this.parent().clip().add(t);
          return this.attr("clip-path", 'url("#' + e.id() + '")');
        },
        unclip: function unclip() {
          return this.attr("clip-path", null);
        },
        clipper: function clipper() {
          return this.reference("clip-path");
        }
      }
    }), Oo(Ll, "ClipPath");

    var Fl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("foreignObject", t), t));
      }

      return Xu(e, La), e;
    }();

    exports.ForeignObject = Fl, li({
      Container: {
        foreignObject: To(function (t, e) {
          return this.put(new Fl()).size(t, e);
        })
      }
    }), Oo(Fl, "ForeignObject");

    var zl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("g", t), t));
      }

      return Xu(e, lh), Mu(e, [{
        key: "x",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.x : this.move(t, e.y, e);
        }
      }, {
        key: "y",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.y : this.move(e.x, t, e);
        }
      }, {
        key: "move",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.bbox(),
              r = t - n.x,
              i = e - n.y;
          return this.dmove(r, i);
        }
      }, {
        key: "dx",
        value: function value(t) {
          return this.dmove(t, 0);
        }
      }, {
        key: "dy",
        value: function value(t) {
          return this.dmove(0, t);
        }
      }, {
        key: "dmove",
        value: function value(t, e) {
          return this.children().forEach(function (n, r) {
            var i = n.bbox(),
                o = new la(n),
                s = o.translate(t, e).transform(o.inverse()),
                u = new ua(i.x, i.y).transform(s);
            n.move(u.x, u.y);
          }), this;
        }
      }, {
        key: "width",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.width : this.size(t, e.height, e);
        }
      }, {
        key: "height",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bbox();
          return null == t ? e.height : this.size(e.width, t, e);
        }
      }, {
        key: "size",
        value: function value(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.bbox(),
              r = ro(this, t, e, n),
              i = r.width / n.width,
              o = r.height / n.height;
          return this.children().forEach(function (t, e) {
            var r = new ua(n).transform(new la(t).inverse());
            t.scale(i, o, r.x, r.y);
          }), this;
        }
      }]), e;
    }();

    exports.G = zl, li({
      Container: {
        group: To(function () {
          return this.put(new zl());
        })
      }
    }), Oo(zl, "G");

    var ql = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("a", t), t));
      }

      return Xu(e, lh), Mu(e, [{
        key: "to",
        value: function value(t) {
          return this.attr("href", t, ao);
        }
      }, {
        key: "target",
        value: function value(t) {
          return this.attr("target", t);
        }
      }]), e;
    }();

    exports.A = ql, li({
      Container: {
        link: To(function (t) {
          return this.put(new ql()).to(t);
        })
      },
      Element: {
        linkTo: function linkTo(t) {
          var e = new ql();
          return "function" == typeof t ? t.call(e, e) : e.to(t), this.parent().put(e).put(this);
        }
      }
    }), Oo(ql, "A");

    var Yl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("mask", t), t));
      }

      return Xu(e, lh), Mu(e, [{
        key: "remove",
        value: function value() {
          return this.targets().forEach(function (t) {
            t.unmask();
          }), Yu(zu(e.prototype), "remove", this).call(this);
        }
      }, {
        key: "targets",
        value: function value() {
          return ka('svg [mask*="' + this.id() + '"]');
        }
      }]), e;
    }();

    function Gl(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function Xl(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Gl(n, !0).forEach(function (e) {
          Ba(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Gl(n).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    function Vl(t, e) {
      if (!t) return "";
      if (!e) return t;
      var n = t + "{";

      for (var r in e) {
        n += eo(r) + ":" + e[r] + ";";
      }

      return n += "}";
    }

    exports.Mask = Yl, li({
      Container: {
        mask: To(function () {
          return this.defs().put(new Yl());
        })
      },
      Element: {
        maskWith: function maskWith(t) {
          var e = t instanceof Yl ? t : this.parent().mask().add(t);
          return this.attr("mask", 'url("#' + e.id() + '")');
        },
        unmask: function unmask() {
          return this.attr("mask", null);
        },
        masker: function masker() {
          return this.reference("mask");
        }
      }
    }), Oo(Yl, "Mask");

    var Bl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("style", t), t));
      }

      return Xu(e, La), Mu(e, [{
        key: "addText",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return this.node.textContent += t, this;
        }
      }, {
        key: "font",
        value: function value(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.rule("@font-face", Xl({
            fontFamily: t,
            src: e
          }, n));
        }
      }, {
        key: "rule",
        value: function value(t, e) {
          return this.addText(Vl(t, e));
        }
      }]), e;
    }();

    exports.Style = Bl, li("Dom", {
      style: To(function (t, e) {
        return this.put(new Bl()).rule(t, e);
      }),
      fontface: To(function (t, e, n) {
        return this.put(new Bl()).font(t, e, n);
      })
    }), Oo(Bl, "Style");

    var Hl = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("textPath", t), t));
      }

      return Xu(e, Dl), Mu(e, [{
        key: "array",
        value: function value() {
          var t = this.track();
          return t ? t.array() : null;
        }
      }, {
        key: "plot",
        value: function value(t) {
          var e = this.track(),
              n = null;
          return e && (n = e.plot(t)), null == t ? n : this;
        }
      }, {
        key: "track",
        value: function value() {
          return this.reference("href");
        }
      }]), e;
    }();

    exports.TextPath = Hl, li({
      Container: {
        textPath: To(function (t, e) {
          return t instanceof Dl || (t = this.text(t)), t.path(e);
        })
      },
      Text: {
        path: To(function (t) {
          var e,
              n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              r = new Hl();
          if (t instanceof rl || (t = this.defs().path(t)), r.attr("href", "#" + t, ao), n) for (; e = this.node.firstChild;) {
            r.node.appendChild(e);
          }
          return this.put(r);
        }),
        textPath: function textPath() {
          return this.findOne("textPath");
        }
      },
      Path: {
        text: To(function (t) {
          return t instanceof Dl || (t = new Dl().addTo(this.parent()).text(t)), t.path(this);
        }),
        targets: function targets() {
          return ka('svg [href*="' + this.id() + '"]');
        }
      }
    }), Hl.prototype.MorphArray = Xh, Oo(Hl, "TextPath");

    var Ul = function (t) {
      function e(t) {
        return po(this, e), Fu(this, zu(e).call(this, wo("use", t), t));
      }

      return Xu(e, ah), Mu(e, [{
        key: "element",
        value: function value(t, e) {
          return this.attr("href", (e || "") + "#" + t, ao);
        }
      }]), e;
    }();

    exports.Use = Ul, li({
      Container: {
        use: To(function (t, e) {
          return this.put(new Ul()).element(t, e);
        })
      }
    }), Oo(Ul, "Use");
    var $l = xo;
    exports.SVG = $l, Eo([Tl, Cl, xh, gh, Mh], ci("viewbox")), Eo([jh, cl, ll, rl], ci("marker")), Eo(Dl, ci("Text")), Eo(rl, ci("Path")), Eo(ch, ci("Defs")), Eo([Dl, Rl], ci("Tspan")), Eo([fl, fh, hh, mh], ci("radius")), Eo(Aa, ci("EventTarget")), Eo(Ra, ci("Dom")), Eo(La, ci("Element")), Eo(ah, ci("Shape")), Eo(lh, ci("Container")), Eo(Ol, ci("Runner")), ba.extend(fi()), el([Pa, Du, ya, la, Ca, wh, Xh]), nl();
  }, {}],
  "QCba": [function (require, module, exports) {
    "use strict";

    var e = this && this.__spreadArrays || function () {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++) {
        e += arguments[t].length;
      }

      var n = Array(e),
          i = 0;

      for (t = 0; t < r; t++) {
        for (var a = arguments[t], s = 0, l = a.length; s < l; s++, i++) {
          n[i] = a[s];
        }
      }

      return n;
    };

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });

    var t,
        r = require("@svgdotjs/svg.js"),
        n = [],
        i = {
      u: {
        text: "up",
        id: "u",
        emoji: "⬆"
      },
      r: {
        text: "right",
        id: "r",
        emoji: "⮕"
      },
      d: {
        text: "down",
        id: "d",
        emoji: "⬇ "
      },
      l: {
        text: "left",
        id: "l",
        emoji: "⬅"
      }
    };

    function a() {
      t = v();
    }

    function s(e, t) {
      return function (e) {
        return e % t;
      };
    }

    function l(e, t) {
      return function (t) {
        return Math.floor(t / e);
      };
    }

    function d(e, t) {
      return Array(t).fill(e);
    }

    function o(e, t) {
      var r = e.currentState,
          n = e.m,
          a = e.n,
          s = e.getY;

      if (0 !== t) {
        var l = r.indexOf(t);
        console.log(l);

        for (var o = [], u = 1; u < n; u++) {
          var c = s(l) * n + (l + u) % n;
          if (0 !== r[c]) ;else o = d((v = l - c) < 0 ? i.r.id : i.l.id, Math.abs(v));
        }

        if (!o.length) for (var f = 1; f < a; f++) {
          var v,
              g = (l + f * a) % (n * a);
          if (0 !== r[g]) ;else o = d((v = (l - g) / 4) < 0 ? i.d.id : i.u.id, Math.abs(v));
        }
      }

      return o;
    }

    function u(e, t) {
      for (var r = e.currentState, n = 0; n < t.length; n++) {
        r = c(r, t[n]);
      }

      return r;
    }

    function c(t, r) {
      var n,
          a = t.indexOf(0),
          s = e(t);

      switch (r) {
        case i.u.id:
          n = a + 4;
          break;

        case i.r.id:
          n = a - 1;
          break;

        case i.d.id:
          n = a - 4;
          break;

        case i.l.id:
          n = a + 1;
      }

      return s[a] = s[n], s[n] = 0, s;
    }

    function f(e) {
      return function (r) {
        console.log("tile pressed", e, r);
        var n = o(t, e),
            i = u(t, n);
        console.log({
          newState: i,
          newSteps: n
        }), g(i);
      };
    }

    function v() {
      for (var e = s(4, 4), t = l(4, 4), n = r.SVG().addTo("#puzzle-15").size(280, 280), i = {
        m: 4,
        n: 4,
        getX: e,
        getY: t,
        squareSize: 70,
        currentState: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
        tiles: {},
        steps: []
      }, a = 0; a < i.currentState.length; a++) {
        var d = 15 === a ? 0 : a + 1,
            o = n.nested().size(70, 70).move(70 * e(a), 70 * t(a)).on("click", f(d));
        o.rect(70, 70).radius(10).addClass("tile").addClass((e(a) + t(a)) % 2 ? "odd" : "even");
        a + 1 === 16 && (o.addClass("empty-tile"), o.back()), o.plain(String(d)).attr({
          x: "50%",
          y: "50%",
          "alignment-baseline": "middle",
          "text-anchor": "middle"
        }), o.plain(",").attr({
          x: "80%",
          y: "50%",
          "alignment-baseline": "middle",
          "text-anchor": "middle",
          opacity: 0
        }), o.data("tileId", d), i.tiles[d] = o;
      }

      return i;
    }

    function g(n) {
      var i = new r.Timeline();
      i.pause();

      for (var a = 0; a < t.currentState.length; a++) {
        var s = t.currentState[a];
        t.tiles[s].data("tileId") !== n[a] && t.tiles[n[a]].timeline(i).animate(200, 0, "absolute").move(t.getX(a) * t.squareSize, t.getY(a) * t.squareSize);
      }

      i.play(), t.currentState = e(n);
    }

    function m(e, t) {
      switch (e) {
        case i.u.id:
        case i.r.id:
        case i.d.id:
        case i.l.id:
      }
    }

    a();
  }, {
    "@svgdotjs/svg.js": "FaDW"
  }]
}, {}, ["QCba"], null);
},{}]