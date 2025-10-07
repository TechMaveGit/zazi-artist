"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
FullCalendar Standard Bundle v6.1.11
Docs & License: https://fullcalendar.io/docs/initialize-globals
(c) 2023 Adam Shaw
*/
var FullCalendar = function (e) {
  "use strict";

  var t,
      n,
      r,
      i,
      s,
      o,
      a,
      l,
      c,
      d = {},
      u = [],
      h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

  function f(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }

    return e;
  }

  function g(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }

  function p(e, n, r) {
    var i,
        s,
        o,
        a = {};

    for (o in n) {
      "key" == o ? i = n[o] : "ref" == o ? s = n[o] : a[o] = n[o];
    }

    if (arguments.length > 2 && (a.children = arguments.length > 3 ? t.call(arguments, 2) : r), "function" == typeof e && null != e.defaultProps) for (o in e.defaultProps) {
      void 0 === a[o] && (a[o] = e.defaultProps[o]);
    }
    return m(e, a, i, s, null);
  }

  function m(e, t, i, s, o) {
    var a = {
      type: e,
      props: t,
      key: i,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++r : o
    };
    return null == o && null != n.vnode && n.vnode(a), a;
  }

  function v() {
    return {
      current: null
    };
  }

  function y(e) {
    return e.children;
  }

  function b(e, t, n) {
    "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || h.test(t) ? n : n + "px";
  }

  function E(e, t, n, r, i) {
    var s;

    e: if ("style" === t) {
      if ("string" == typeof n) e.style.cssText = n;else {
        if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) {
          n && t in n || b(e.style, t, "");
        }
        if (n) for (t in n) {
          r && n[t] === r[t] || b(e.style, t, n[t]);
        }
      }
    } else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r || e.addEventListener(t, s ? A : S, s) : e.removeEventListener(t, s ? A : S, s);else if ("dangerouslySetInnerHTML" !== t) {
      if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (e) {}
      "function" == typeof n || (null == n || !1 === n && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
  }

  function S(e) {
    s = !0;

    try {
      return this.l[e.type + !1](n.event ? n.event(e) : e);
    } finally {
      s = !1;
    }
  }

  function A(e) {
    s = !0;

    try {
      return this.l[e.type + !0](n.event ? n.event(e) : e);
    } finally {
      s = !1;
    }
  }

  function D(e, t) {
    this.props = e, this.context = t;
  }

  function w(e, t) {
    if (null == t) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;

    for (var n; t < e.__k.length; t++) {
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    }

    return "function" == typeof e.type ? w(e) : null;
  }

  function C(e) {
    var t, n;

    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) {
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      }

      return C(e);
    }
  }

  function R(e) {
    s ? setTimeout(e) : l(e);
  }

  function x(e) {
    (!e.__d && (e.__d = !0) && o.push(e) && !_.__r++ || a !== n.debounceRendering) && ((a = n.debounceRendering) || R)(_);
  }

  function _() {
    var e, t, n, r, i, s, a, l;

    for (o.sort(function (e, t) {
      return e.__v.__b - t.__v.__b;
    }); e = o.shift();) {
      e.__d && (t = o.length, r = void 0, i = void 0, a = (s = (n = e).__v).__e, (l = n.__P) && (r = [], (i = f({}, s)).__v = s.__v + 1, N(l, s, i, n.__n, void 0 !== l.ownerSVGElement, null != s.__h ? [a] : null, r, null == a ? w(s) : a, s.__h), P(r, s), s.__e != a && C(s)), o.length > t && o.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      }));
    }

    _.__r = 0;
  }

  function T(e, t, n, r, i, s, o, a, l, c) {
    var h,
        f,
        g,
        p,
        v,
        b,
        E,
        S = r && r.__k || u,
        A = S.length;

    for (n.__k = [], h = 0; h < t.length; h++) {
      if (null != (p = n.__k[h] = null == (p = t[h]) || "boolean" == typeof p ? null : "string" == typeof p || "number" == typeof p || "bigint" == typeof p ? m(null, p, null, null, p) : Array.isArray(p) ? m(y, {
        children: p
      }, null, null, null) : p.__b > 0 ? m(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p)) {
        if (p.__ = n, p.__b = n.__b + 1, null === (g = S[h]) || g && p.key == g.key && p.type === g.type) S[h] = void 0;else for (f = 0; f < A; f++) {
          if ((g = S[f]) && p.key == g.key && p.type === g.type) {
            S[f] = void 0;
            break;
          }

          g = null;
        }
        N(e, p, g = g || d, i, s, o, a, l, c), v = p.__e, (f = p.ref) && g.ref != f && (E || (E = []), g.ref && E.push(g.ref, null, p), E.push(f, p.__c || v, p)), null != v ? (null == b && (b = v), "function" == typeof p.type && p.__k === g.__k ? p.__d = l = k(p, l, e) : l = I(e, p, g, S, v, l), "function" == typeof n.type && (n.__d = l)) : l && g.__e == l && l.parentNode != e && (l = w(g));
      }
    }

    for (n.__e = b, h = A; h--;) {
      null != S[h] && ("function" == typeof n.type && null != S[h].__e && S[h].__e == n.__d && (n.__d = O(r).nextSibling), j(S[h], S[h]));
    }

    if (E) for (h = 0; h < E.length; h++) {
      B(E[h], E[++h], E[++h]);
    }
  }

  function k(e, t, n) {
    for (var r, i = e.__k, s = 0; i && s < i.length; s++) {
      (r = i[s]) && (r.__ = e, t = "function" == typeof r.type ? k(r, t, n) : I(n, r, r, i, r.__e, t));
    }

    return t;
  }

  function M(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some(function (e) {
      M(e, t);
    }) : t.push(e)), t;
  }

  function I(e, t, n, r, i, s) {
    var o, a, l;
    if (void 0 !== t.__d) o = t.__d, t.__d = void 0;else if (null == n || i != s || null == i.parentNode) e: if (null == s || s.parentNode !== e) e.appendChild(i), o = null;else {
      for (a = s, l = 0; (a = a.nextSibling) && l < r.length; l += 1) {
        if (a == i) break e;
      }

      e.insertBefore(i, s), o = s;
    }
    return void 0 !== o ? o : i.nextSibling;
  }

  function O(e) {
    var t, n, r;
    if (null == e.type || "string" == typeof e.type) return e.__e;
    if (e.__k) for (t = e.__k.length - 1; t >= 0; t--) {
      if ((n = e.__k[t]) && (r = O(n))) return r;
    }
    return null;
  }

  function N(e, t, r, i, s, o, a, l, c) {
    var d,
        u,
        h,
        g,
        p,
        m,
        v,
        b,
        E,
        S,
        A,
        w,
        C,
        R,
        x,
        _ = t.type;
    if (void 0 !== t.constructor) return null;
    null != r.__h && (c = r.__h, l = t.__e = r.__e, t.__h = null, o = [l]), (d = n.__b) && d(t);

    try {
      e: if ("function" == typeof _) {
        if (b = t.props, E = (d = _.contextType) && i[d.__c], S = d ? E ? E.props.value : d.__ : i, r.__c ? v = (u = t.__c = r.__c).__ = u.__E : ("prototype" in _ && _.prototype.render ? t.__c = u = new _(b, S) : (t.__c = u = new D(b, S), u.constructor = _, u.render = z), E && E.sub(u), u.props = b, u.state || (u.state = {}), u.context = S, u.__n = i, h = u.__d = !0, u.__h = [], u._sb = []), null == u.__s && (u.__s = u.state), null != _.getDerivedStateFromProps && (u.__s == u.state && (u.__s = f({}, u.__s)), f(u.__s, _.getDerivedStateFromProps(b, u.__s))), g = u.props, p = u.state, u.__v = t, h) null == _.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(), null != u.componentDidMount && u.__h.push(u.componentDidMount);else {
          if (null == _.getDerivedStateFromProps && b !== g && null != u.componentWillReceiveProps && u.componentWillReceiveProps(b, S), !u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(b, u.__s, S) || t.__v === r.__v) {
            for (t.__v !== r.__v && (u.props = b, u.state = u.__s, u.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function (e) {
              e && (e.__ = t);
            }), A = 0; A < u._sb.length; A++) {
              u.__h.push(u._sb[A]);
            }

            u._sb = [], u.__h.length && a.push(u);
            break e;
          }

          null != u.componentWillUpdate && u.componentWillUpdate(b, u.__s, S), null != u.componentDidUpdate && u.__h.push(function () {
            u.componentDidUpdate(g, p, m);
          });
        }

        if (u.context = S, u.props = b, u.__P = e, w = n.__r, C = 0, "prototype" in _ && _.prototype.render) {
          for (u.state = u.__s, u.__d = !1, w && w(t), d = u.render(u.props, u.state, u.context), R = 0; R < u._sb.length; R++) {
            u.__h.push(u._sb[R]);
          }

          u._sb = [];
        } else do {
          u.__d = !1, w && w(t), d = u.render(u.props, u.state, u.context), u.state = u.__s;
        } while (u.__d && ++C < 25);

        u.state = u.__s, null != u.getChildContext && (i = f(f({}, i), u.getChildContext())), h || null == u.getSnapshotBeforeUpdate || (m = u.getSnapshotBeforeUpdate(g, p)), x = null != d && d.type === y && null == d.key ? d.props.children : d, T(e, Array.isArray(x) ? x : [x], t, r, i, s, o, a, l, c), u.base = t.__e, t.__h = null, u.__h.length && a.push(u), v && (u.__E = u.__ = null), u.__e = !1;
      } else null == o && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = H(r.__e, t, r, i, s, o, a, c);

      (d = n.diffed) && d(t);
    } catch (e) {
      t.__v = null, (c || null != o) && (t.__e = l, t.__h = !!c, o[o.indexOf(l)] = null), n.__e(e, t, r);
    }
  }

  function P(e, t) {
    n.__c && n.__c(t, e), e.some(function (t) {
      try {
        e = t.__h, t.__h = [], e.some(function (e) {
          e.call(t);
        });
      } catch (e) {
        n.__e(e, t.__v);
      }
    });
  }

  function H(e, n, r, i, s, o, a, l) {
    var c,
        u,
        h,
        f = r.props,
        p = n.props,
        m = n.type,
        v = 0;
    if ("svg" === m && (s = !0), null != o) for (; v < o.length; v++) {
      if ((c = o[v]) && "setAttribute" in c == !!m && (m ? c.localName === m : 3 === c.nodeType)) {
        e = c, o[v] = null;
        break;
      }
    }

    if (null == e) {
      if (null === m) return document.createTextNode(p);
      e = s ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, p.is && p), o = null, l = !1;
    }

    if (null === m) f === p || l && e.data === p || (e.data = p);else {
      if (o = o && t.call(e.childNodes), u = (f = r.props || d).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !l) {
        if (null != o) for (f = {}, v = 0; v < e.attributes.length; v++) {
          f[e.attributes[v].name] = e.attributes[v].value;
        }
        (h || u) && (h && (u && h.__html == u.__html || h.__html === e.innerHTML) || (e.innerHTML = h && h.__html || ""));
      }

      if (function (e, t, n, r, i) {
        var s;

        for (s in n) {
          "children" === s || "key" === s || s in t || E(e, s, null, n[s], r);
        }

        for (s in t) {
          i && "function" != typeof t[s] || "children" === s || "key" === s || "value" === s || "checked" === s || n[s] === t[s] || E(e, s, t[s], n[s], r);
        }
      }(e, p, f, s, l), h) n.__k = [];else if (v = n.props.children, T(e, Array.isArray(v) ? v : [v], n, r, i, s && "foreignObject" !== m, o, a, o ? o[0] : r.__k && w(r, 0), l), null != o) for (v = o.length; v--;) {
        null != o[v] && g(o[v]);
      }
      l || ("value" in p && void 0 !== (v = p.value) && (v !== e.value || "progress" === m && !v || "option" === m && v !== f.value) && E(e, "value", v, f.value, !1), "checked" in p && void 0 !== (v = p.checked) && v !== e.checked && E(e, "checked", v, f.checked, !1));
    }
    return e;
  }

  function B(e, t, r) {
    try {
      "function" == typeof e ? e(t) : e.current = t;
    } catch (e) {
      n.__e(e, r);
    }
  }

  function j(e, t, r) {
    var i, s;

    if (n.unmount && n.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || B(i, null, t)), null != (i = e.__c)) {
      if (i.componentWillUnmount) try {
        i.componentWillUnmount();
      } catch (e) {
        n.__e(e, t);
      }
      i.base = i.__P = null, e.__c = void 0;
    }

    if (i = e.__k) for (s = 0; s < i.length; s++) {
      i[s] && j(i[s], t, r || "function" != typeof e.type);
    }
    r || null == e.__e || g(e.__e), e.__ = e.__e = e.__d = void 0;
  }

  function z(e, t, n) {
    return this.constructor(e, n);
  }

  function U(e, r, i) {
    var s, o, a;
    n.__ && n.__(e, r), o = (s = "function" == typeof i) ? null : i && i.__k || r.__k, a = [], N(r, e = (!s && i || r).__k = p(y, null, [e]), o || d, d, void 0 !== r.ownerSVGElement, !s && i ? [i] : o ? null : r.firstChild ? t.call(r.childNodes) : null, a, !s && i ? i : o ? o.__e : r.firstChild, s), P(a, e);
  }

  t = u.slice, n = {
    __e: function __e(e, t, n, r) {
      for (var i, s, o; t = t.__;) {
        if ((i = t.__c) && !i.__) try {
          if ((s = i.constructor) && null != s.getDerivedStateFromError && (i.setState(s.getDerivedStateFromError(e)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i;
        } catch (t) {
          e = t;
        }
      }

      throw e;
    }
  }, r = 0, i = function i(e) {
    return null != e && void 0 === e.constructor;
  }, s = !1, D.prototype.setState = function (e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = f({}, this.state), "function" == typeof e && (e = e(f({}, n), this.props)), e && f(n, e), null != e && this.__v && (t && this._sb.push(t), x(this));
  }, D.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), x(this));
  }, D.prototype.render = y, o = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, _.__r = 0, c = 0;
  var W,
      L,
      F,
      V = [],
      G = [],
      Q = n.__b,
      q = n.__r,
      Y = n.diffed,
      Z = n.__c,
      X = n.unmount;

  function $() {
    for (var e; e = V.shift();) {
      if (e.__P && e.__H) try {
        e.__H.__h.forEach(ee), e.__H.__h.forEach(te), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], n.__e(t, e.__v);
      }
    }
  }

  n.__b = function (e) {
    W = null, Q && Q(e);
  }, n.__r = function (e) {
    q && q(e);
    var t = (W = e.__c).__H;
    t && (L === W ? (t.__h = [], W.__h = [], t.__.forEach(function (e) {
      e.__N && (e.__ = e.__N), e.__V = G, e.__N = e.i = void 0;
    })) : (t.__h.forEach(ee), t.__h.forEach(te), t.__h = [])), L = W;
  }, n.diffed = function (e) {
    Y && Y(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (1 !== V.push(t) && F === n.requestAnimationFrame || ((F = n.requestAnimationFrame) || K)($)), t.__H.__.forEach(function (e) {
      e.i && (e.__H = e.i), e.__V !== G && (e.__ = e.__V), e.i = void 0, e.__V = G;
    })), L = W = null;
  }, n.__c = function (e, t) {
    t.some(function (e) {
      try {
        e.__h.forEach(ee), e.__h = e.__h.filter(function (e) {
          return !e.__ || te(e);
        });
      } catch (r) {
        t.some(function (e) {
          e.__h && (e.__h = []);
        }), t = [], n.__e(r, e.__v);
      }
    }), Z && Z(e, t);
  }, n.unmount = function (e) {
    X && X(e);
    var t,
        r = e.__c;
    r && r.__H && (r.__H.__.forEach(function (e) {
      try {
        ee(e);
      } catch (e) {
        t = e;
      }
    }), r.__H = void 0, t && n.__e(t, r.__v));
  };
  var J = "function" == typeof requestAnimationFrame;

  function K(e) {
    var t,
        n = function n() {
      clearTimeout(r), J && cancelAnimationFrame(t), setTimeout(e);
    },
        r = setTimeout(n, 100);

    J && (t = requestAnimationFrame(n));
  }

  function ee(e) {
    var t = W,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), W = t;
  }

  function te(e) {
    var t = W;
    e.__c = e.__(), W = t;
  }

  function ne(e, t) {
    for (var n in e) {
      if ("__source" !== n && !(n in t)) return !0;
    }

    for (var r in t) {
      if ("__source" !== r && e[r] !== t[r]) return !0;
    }

    return !1;
  }

  function re(e) {
    this.props = e;
  }

  (re.prototype = new D()).isPureReactComponent = !0, re.prototype.shouldComponentUpdate = function (e, t) {
    return ne(this.props, e) || ne(this.state, t);
  };
  var ie = n.__b;

  n.__b = function (e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ie && ie(e);
  };

  var se = n.__e;

  n.__e = function (e, t, n, r) {
    if (e.then) for (var i, s = t; s = s.__;) {
      if ((i = s.__c) && i.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t);
    }
    se(e, t, n, r);
  };

  var oe = n.unmount;

  function ae() {
    this.__u = 0, this.t = null, this.__b = null;
  }

  function le(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }

  function ce() {
    this.u = null, this.o = null;
  }

  n.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), oe && oe(e);
  }, (ae.prototype = new D()).__c = function (e, t) {
    var n = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(n);

    var i = le(r.__v),
        s = !1,
        o = function o() {
      s || (s = !0, n.__R = null, i ? i(a) : a());
    };

    n.__R = o;

    var a = function a() {
      if (! --r.__u) {
        if (r.state.__a) {
          var e = r.state.__a;

          r.__v.__k[0] = function e(t, n, r) {
            return t && (t.__v = null, t.__k = t.__k && t.__k.map(function (t) {
              return e(t, n, r);
            }), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t;
          }(e, e.__c.__P, e.__c.__O);
        }

        var t;

        for (r.setState({
          __a: r.__b = null
        }); t = r.t.pop();) {
          t.forceUpdate();
        }
      }
    },
        l = !0 === t.__h;

    r.__u++ || l || r.setState({
      __a: r.__b = r.__v.__k[0]
    }), e.then(o, o);
  }, ae.prototype.componentWillUnmount = function () {
    this.t = [];
  }, ae.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
            r = this.__v.__k[0].__c;

        this.__v.__k[0] = function e(t, n, r) {
          return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function (e) {
            "function" == typeof e.__c && e.__c();
          }), t.__c.__H = null), null != (t = function (e, t) {
            for (var n in t) {
              e[n] = t[n];
            }

            return e;
          }({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map(function (t) {
            return e(t, n, r);
          })), t;
        }(this.__b, n, r.__O = r.__P);
      }

      this.__b = null;
    }

    var i = t.__a && p(y, null, e.fallback);
    return i && (i.__h = null), [p(y, null, t.__a ? null : e.children), i];
  };

  var de = function de(e, t, n) {
    if (++n[1] === n[0] && e.o["delete"](t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (n = e.u; n;) {
      for (; n.length > 3;) {
        n.pop()();
      }

      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
  };

  function ue(e) {
    return this.getChildContext = function () {
      return e.context;
    }, e.children;
  }

  function he(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function () {
      U(null, t.l), t.l = null, t.i = null;
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
      nodeType: 1,
      parentNode: n,
      childNodes: [],
      appendChild: function appendChild(e) {
        this.childNodes.push(e), t.i.appendChild(e);
      },
      insertBefore: function insertBefore(e, n) {
        this.childNodes.push(e), t.i.appendChild(e);
      },
      removeChild: function removeChild(e) {
        this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e);
      }
    }), U(p(ue, {
      context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount();
  }

  function fe(e, t) {
    var n = p(he, {
      __v: e,
      i: t
    });
    return n.containerInfo = t, n;
  }

  (ce.prototype = new D()).__a = function (e) {
    var t = this,
        n = le(t.__v),
        r = t.o.get(e);
    return r[0]++, function (i) {
      var s = function s() {
        t.props.revealOrder ? (r.push(i), de(t, e, r)) : i();
      };

      n ? n(s) : s();
    };
  }, ce.prototype.render = function (e) {
    this.u = null, this.o = new Map();
    var t = M(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();

    for (var n = t.length; n--;) {
      this.o.set(t[n], this.u = [1, 0, this.u]);
    }

    return e.children;
  }, ce.prototype.componentDidUpdate = ce.prototype.componentDidMount = function () {
    var e = this;
    this.o.forEach(function (t, n) {
      de(e, n, t);
    });
  };

  var ge = "undefined" != typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
      pe = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      me = "undefined" != typeof document,
      ve = function ve(e) {
    return ("undefined" != typeof Symbol && "symbol" == _typeof(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e);
  };

  D.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function (e) {
    Object.defineProperty(D.prototype, e, {
      configurable: !0,
      get: function get() {
        return this["UNSAFE_" + e];
      },
      set: function set(t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t
        });
      }
    });
  });
  var ye = n.event;

  function be() {}

  function Ee() {
    return this.cancelBubble;
  }

  function Se() {
    return this.defaultPrevented;
  }

  n.event = function (e) {
    return ye && (e = ye(e)), e.persist = be, e.isPropagationStopped = Ee, e.isDefaultPrevented = Se, e.nativeEvent = e;
  };

  var Ae = {
    configurable: !0,
    get: function get() {
      return this["class"];
    }
  },
      De = n.vnode;

  n.vnode = function (e) {
    var t = e.type,
        n = e.props,
        r = n;

    if ("string" == typeof t) {
      var i = -1 === t.indexOf("-");

      for (var s in r = {}, n) {
        var o = n[s];
        me && "children" === s && "noscript" === t || "value" === s && "defaultValue" in n && null == o || ("defaultValue" === s && "value" in n && null == n.value ? s = "value" : "download" === s && !0 === o ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + t) && !ve(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && pe.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === o && (o = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = o);
      }

      "select" == t && r.multiple && Array.isArray(r.value) && (r.value = M(n.children).forEach(function (e) {
        e.props.selected = -1 != r.value.indexOf(e.props.value);
      })), "select" == t && null != r.defaultValue && (r.value = M(n.children).forEach(function (e) {
        e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value;
      })), e.props = r, n["class"] != n.className && (Ae.enumerable = "className" in n, null != n.className && (r["class"] = n.className), Object.defineProperty(r, "className", Ae));
    }

    e.$$typeof = ge, De && De(e);
  };

  var we = n.__r;

  n.__r = function (e) {
    we && we(e), e.__c;
  };

  var Ce = [],
      Re = new Map();

  function xe(e) {
    Ce.push(e), Re.forEach(function (t) {
      Te(t, e);
    });
  }

  function _e(e) {
    var t = Re.get(e);

    if (!t || !t.isConnected) {
      if (t = e.querySelector("style[data-fullcalendar]"), !t) {
        t = document.createElement("style"), t.setAttribute("data-fullcalendar", "");

        var _n2 = function () {
          void 0 === ke && (ke = function () {
            var e = document.querySelector('meta[name="csp-nonce"]');
            if (e && e.hasAttribute("content")) return e.getAttribute("content");
            var t = document.querySelector("script[nonce]");
            if (t) return t.nonce || "";
            return "";
          }());
          return ke;
        }();

        _n2 && (t.nonce = _n2);

        var _r2 = e === document ? document.head : e,
            _i2 = e === document ? _r2.querySelector("script,link[rel=stylesheet],link[as=style],style") : _r2.firstChild;

        _r2.insertBefore(t, _i2);
      }

      Re.set(e, t), function (e) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Ce[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _t2 = _step.value;
            Te(e, _t2);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }(t);
    }
  }

  function Te(e, t) {
    var n = e.sheet,
        r = n.cssRules.length;
    t.split("}").forEach(function (e, t) {
      (e = e.trim()) && n.insertRule(e + "}", r + t);
    });
  }

  var ke;
  "undefined" != typeof document && _e(document);
  xe(':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}');

  var Me =
  /*#__PURE__*/
  function () {
    function Me(e) {
      _classCallCheck(this, Me);

      this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0;
    }

    _createClass(Me, [{
      key: "request",
      value: function request(e) {
        this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e));
      }
    }, {
      key: "pause",
      value: function pause() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var t = this.pauseDepths;
        t[e] = (t[e] || 0) + 1, this.clearTimeout();
      }
    }, {
      key: "resume",
      value: function resume() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var n = this.pauseDepths;

        if (e in n) {
          if (t) delete n[e];else {
            n[e] -= 1, n[e] <= 0 && delete n[e];
          }
          this.tryDrain();
        }
      }
    }, {
      key: "isPaused",
      value: function isPaused() {
        return Object.keys(this.pauseDepths).length;
      }
    }, {
      key: "tryDrain",
      value: function tryDrain() {
        if (!this.isRunning && !this.isPaused()) {
          for (this.isRunning = !0; this.isDirty;) {
            this.isDirty = !1, this.drained();
          }

          this.isRunning = !1;
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {};
      }
    }, {
      key: "clearTimeout",
      value: function (_clearTimeout) {
        function clearTimeout() {
          return _clearTimeout.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout.toString();
        };

        return clearTimeout;
      }(function () {
        this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
      })
    }, {
      key: "drained",
      value: function drained() {
        this.drainedOption && this.drainedOption();
      }
    }]);

    return Me;
  }();

  function Ie(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }

  function Oe(e, t) {
    if (e.closest) return e.closest(t);
    if (!document.documentElement.contains(e)) return null;

    do {
      if (Ne(e, t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);

    return null;
  }

  function Ne(e, t) {
    return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
  }

  function Pe(e, t) {
    var n = e instanceof HTMLElement ? [e] : e,
        r = [];

    for (var _e2 = 0; _e2 < n.length; _e2 += 1) {
      var _i3 = n[_e2].querySelectorAll(t);

      for (var _e3 = 0; _e3 < _i3.length; _e3 += 1) {
        r.push(_i3[_e3]);
      }
    }

    return r;
  }

  var He = /(top|left|right|bottom|width|height)$/i;

  function Be(e, t) {
    for (var _n3 in t) {
      je(e, _n3, t[_n3]);
    }
  }

  function je(e, t, n) {
    null == n ? e.style[t] = "" : "number" == typeof n && He.test(t) ? e.style[t] = n + "px" : e.style[t] = n;
  }

  function ze(e) {
    var t, n;
    return null !== (n = null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e)[0]) && void 0 !== n ? n : e.target;
  }

  var Ue = 0;

  function We() {
    return Ue += 1, "fc-dom-" + Ue;
  }

  function Le(e) {
    e.preventDefault();
  }

  function Fe(e, t, n, r) {
    var i = function (e, t) {
      return function (n) {
        var r = Oe(n.target, e);
        r && t.call(r, n, r);
      };
    }(n, r);

    return e.addEventListener(t, i), function () {
      e.removeEventListener(t, i);
    };
  }

  var Ve = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

  function Ge(e, t) {
    var n = function n(r) {
      t(r), Ve.forEach(function (t) {
        e.removeEventListener(t, n);
      });
    };

    Ve.forEach(function (t) {
      e.addEventListener(t, n);
    });
  }

  function Qe(e) {
    return Object.assign({
      onClick: e
    }, qe(e));
  }

  function qe(e) {
    return {
      tabIndex: 0,
      onKeyDown: function onKeyDown(t) {
        "Enter" !== t.key && " " !== t.key || (e(t), t.preventDefault());
      }
    };
  }

  var Ye = 0;

  function Ze() {
    return Ye += 1, String(Ye);
  }

  function Xe() {
    document.body.classList.add("fc-not-allowed");
  }

  function $e() {
    document.body.classList.remove("fc-not-allowed");
  }

  function Je(e) {
    e.style.userSelect = "none", e.style.webkitUserSelect = "none", e.addEventListener("selectstart", Le);
  }

  function Ke(e) {
    e.style.userSelect = "", e.style.webkitUserSelect = "", e.removeEventListener("selectstart", Le);
  }

  function et(e) {
    e.addEventListener("contextmenu", Le);
  }

  function tt(e) {
    e.removeEventListener("contextmenu", Le);
  }

  function nt(e) {
    var t,
        n,
        r = [],
        i = [];

    for ("string" == typeof e ? i = e.split(/\s*,\s*/) : "function" == typeof e ? i = [e] : Array.isArray(e) && (i = e), t = 0; t < i.length; t += 1) {
      n = i[t], "string" == typeof n ? r.push("-" === n.charAt(0) ? {
        field: n.substring(1),
        order: -1
      } : {
        field: n,
        order: 1
      }) : "function" == typeof n && r.push({
        func: n
      });
    }

    return r;
  }

  function rt(e, t, n) {
    var r, i;

    for (r = 0; r < n.length; r += 1) {
      if (i = it(e, t, n[r]), i) return i;
    }

    return 0;
  }

  function it(e, t, n) {
    return n.func ? n.func(e, t) : st(e[n.field], t[n.field]) * (n.order || 1);
  }

  function st(e, t) {
    return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0;
  }

  function ot(e, t) {
    var n = String(e);
    return "000".substr(0, t - n.length) + n;
  }

  function at(e, t, n) {
    return "function" == typeof e ? e.apply(void 0, _toConsumableArray(t)) : "string" == typeof e ? t.reduce(function (e, t, n) {
      return e.replace("$" + n, t || "");
    }, e) : n;
  }

  function lt(e, t) {
    return e - t;
  }

  function ct(e) {
    return e % 1 == 0;
  }

  function dt(e) {
    var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
        n = e.querySelector(".fc-scrollgrid-shrink-cushion");
    if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
    if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
    return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width;
  }

  var ut = ["years", "months", "days", "milliseconds"],
      ht = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

  function ft(e, t) {
    return "string" == typeof e ? function (e) {
      var t = ht.exec(e);

      if (t) {
        var _e4 = t[1] ? -1 : 1;

        return {
          years: 0,
          months: 0,
          days: _e4 * (t[2] ? parseInt(t[2], 10) : 0),
          milliseconds: _e4 * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
        };
      }

      return null;
    }(e) : "object" == _typeof(e) && e ? gt(e) : "number" == typeof e ? gt(_defineProperty({}, t || "milliseconds", e)) : null;
  }

  function gt(e) {
    var t = {
      years: e.years || e.year || 0,
      months: e.months || e.month || 0,
      days: e.days || e.day || 0,
      milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
    },
        n = e.weeks || e.week;
    return n && (t.days += 7 * n, t.specifiedWeeks = !0), t;
  }

  function pt(e, t) {
    return {
      years: e.years + t.years,
      months: e.months + t.months,
      days: e.days + t.days,
      milliseconds: e.milliseconds + t.milliseconds
    };
  }

  function mt(e, t) {
    return {
      years: e.years * t,
      months: e.months * t,
      days: e.days * t,
      milliseconds: e.milliseconds * t
    };
  }

  function vt(e) {
    return yt(e) / 864e5;
  }

  function yt(e) {
    return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds;
  }

  function bt(e, t) {
    var n = null;

    for (var _r3 = 0; _r3 < ut.length; _r3 += 1) {
      var _i4 = ut[_r3];

      if (t[_i4]) {
        var _r4 = e[_i4] / t[_i4];

        if (!ct(_r4) || null !== n && n !== _r4) return null;
        n = _r4;
      } else if (e[_i4]) return null;
    }

    return n;
  }

  function Et(e) {
    var t = e.milliseconds;

    if (t) {
      if (t % 1e3 != 0) return {
        unit: "millisecond",
        value: t
      };
      if (t % 6e4 != 0) return {
        unit: "second",
        value: t / 1e3
      };
      if (t % 36e5 != 0) return {
        unit: "minute",
        value: t / 6e4
      };
      if (t) return {
        unit: "hour",
        value: t / 36e5
      };
    }

    return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
      unit: "week",
      value: e.days / 7
    } : {
      unit: "day",
      value: e.days
    } : e.months ? {
      unit: "month",
      value: e.months
    } : e.years ? {
      unit: "year",
      value: e.years
    } : {
      unit: "millisecond",
      value: 0
    };
  }

  function St(e, t, n) {
    if (e === t) return !0;
    var r,
        i = e.length;
    if (i !== t.length) return !1;

    for (r = 0; r < i; r += 1) {
      if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
    }

    return !0;
  }

  var At = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  function Dt(e, t) {
    var n = Ht(e);
    return n[2] += 7 * t, Bt(n);
  }

  function wt(e, t) {
    var n = Ht(e);
    return n[2] += t, Bt(n);
  }

  function Ct(e, t) {
    var n = Ht(e);
    return n[6] += t, Bt(n);
  }

  function Rt(e, t) {
    return xt(e, t) / 7;
  }

  function xt(e, t) {
    return (t.valueOf() - e.valueOf()) / 864e5;
  }

  function _t(e, t) {
    var n = Mt(e),
        r = Mt(t);
    return {
      years: 0,
      months: 0,
      days: Math.round(xt(n, r)),
      milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
    };
  }

  function Tt(e, t) {
    var n = kt(e, t);
    return null !== n && n % 7 == 0 ? n / 7 : null;
  }

  function kt(e, t) {
    return zt(e) === zt(t) ? Math.round(xt(e, t)) : null;
  }

  function Mt(e) {
    return Bt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
  }

  function It(e, t, n, r) {
    var i = Bt([t, 0, 1 + Ot(t, n, r)]),
        s = Mt(e),
        o = Math.round(xt(i, s));
    return Math.floor(o / 7) + 1;
  }

  function Ot(e, t, n) {
    var r = 7 + t - n;
    return -((7 + Bt([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
  }

  function Nt(e) {
    return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()];
  }

  function Pt(e) {
    return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0);
  }

  function Ht(e) {
    return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()];
  }

  function Bt(e) {
    return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, _toConsumableArray(e)));
  }

  function jt(e) {
    return !isNaN(e.valueOf());
  }

  function zt(e) {
    return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds();
  }

  function Ut(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var r = e.toISOString();
    return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", Vt(t, !0)))), r;
  }

  function Wt(e) {
    return e.toISOString().replace(/T.*$/, "");
  }

  function Lt(e) {
    return e.toISOString().match(/^\d{4}-\d{2}/)[0];
  }

  function Ft(e) {
    return ot(e.getUTCHours(), 2) + ":" + ot(e.getUTCMinutes(), 2) + ":" + ot(e.getUTCSeconds(), 2);
  }

  function Vt(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var n = e < 0 ? "-" : "+",
        r = Math.abs(e),
        i = Math.floor(r / 60),
        s = Math.round(r % 60);
    return t ? "".concat(n + ot(i, 2), ":").concat(ot(s, 2)) : "GMT".concat(n).concat(i).concat(s ? ":" + ot(s, 2) : "");
  }

  function Gt(e, t, n) {
    var r, i;
    return function () {
      for (var _len = arguments.length, s = new Array(_len), _key = 0; _key < _len; _key++) {
        s[_key] = arguments[_key];
      }

      if (r) {
        if (!St(r, s)) {
          n && n(i);

          var _r5 = e.apply(this, s);

          t && t(_r5, i) || (i = _r5);
        }
      } else i = e.apply(this, s);

      return r = s, i;
    };
  }

  function Qt(e, t, n) {
    var _this = this;

    var r, i;
    return function (s) {
      if (r) {
        if (!Cn(r, s)) {
          n && n(i);

          var _r6 = e.call(_this, s);

          t && t(_r6, i) || (i = _r6);
        }
      } else i = e.call(_this, s);

      return r = s, i;
    };
  }

  var qt = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0
  },
      Yt = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
  },
      Zt = /\s*([ap])\.?m\.?/i,
      Xt = /,/g,
      $t = /\s+/g,
      Jt = /\u200e/g,
      Kt = /UTC|GMT/;

  var en =
  /*#__PURE__*/
  function () {
    function en(e) {
      _classCallCheck(this, en);

      var t = {},
          n = {},
          r = 0;

      for (var _i5 in e) {
        _i5 in qt ? (n[_i5] = e[_i5], r = Math.max(qt[_i5], r)) : (t[_i5] = e[_i5], _i5 in Yt && (r = Math.max(Yt[_i5], r)));
      }

      this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = Gt(tn);
    }

    _createClass(en, [{
      key: "format",
      value: function format(e, t) {
        return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e);
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n, r) {
        var i = this.standardDateProps,
            s = this.extendedSettings,
            o = function (e, t, n) {
          if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
          if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
          if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
          if (zt(e) !== zt(t)) return 1;
          return 0;
        }(e.marker, t.marker, n.calendarSystem);

        if (!o) return this.format(e, n);
        var a = o;
        !(a > 1) || "numeric" !== i.year && "2-digit" !== i.year || "numeric" !== i.month && "2-digit" !== i.month || "numeric" !== i.day && "2-digit" !== i.day || (a = 1);
        var l = this.format(e, n),
            c = this.format(t, n);
        if (l === c) return l;

        var d = tn(function (e, t) {
          var n = {};

          for (var _r7 in e) {
            (!(_r7 in Yt) || Yt[_r7] <= t) && (n[_r7] = e[_r7]);
          }

          return n;
        }(i, a), s, n),
            u = d(e),
            h = d(t),
            f = function (e, t, n, r) {
          var i = 0;

          for (; i < e.length;) {
            var _s2 = e.indexOf(t, i);

            if (-1 === _s2) break;

            var _o2 = e.substr(0, _s2);

            i = _s2 + t.length;

            var _a2 = e.substr(i),
                _l2 = 0;

            for (; _l2 < n.length;) {
              var _e5 = n.indexOf(r, _l2);

              if (-1 === _e5) break;

              var _t3 = n.substr(0, _e5);

              _l2 = _e5 + r.length;

              var _i6 = n.substr(_l2);

              if (_o2 === _t3 && _a2 === _i6) return {
                before: _o2,
                after: _a2
              };
            }
          }

          return null;
        }(l, u, c, h),
            g = s.separator || r || n.defaultSeparator || "";

        return f ? f.before + u + g + h + f.after : l + g + c;
      }
    }, {
      key: "getLargestUnit",
      value: function getLargestUnit() {
        switch (this.severity) {
          case 7:
          case 6:
          case 5:
            return "year";

          case 4:
            return "month";

          case 3:
            return "week";

          case 2:
            return "day";

          default:
            return "time";
        }
      }
    }]);

    return en;
  }();

  function tn(e, t, n) {
    var r = Object.keys(e).length;
    return 1 === r && "short" === e.timeZoneName ? function (e) {
      return Vt(e.timeZoneOffset);
    } : 0 === r && t.week ? function (e) {
      return function (e, t, n, r, i) {
        var s = [];
        "long" === i ? s.push(n) : "short" !== i && "narrow" !== i || s.push(t);
        "long" !== i && "short" !== i || s.push(" ");
        s.push(r.simpleNumberFormat.format(e)), "rtl" === r.options.direction && s.reverse();
        return s.join("");
      }(n.computeWeekNumber(e.marker), n.weekText, n.weekTextLong, n.locale, t.week);
    } : function (e, t, n) {
      e = Object.assign({}, e), t = Object.assign({}, t), function (e, t) {
        e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
        "long" === e.timeZoneName && (e.timeZoneName = "short");
        t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute;
      }(e, t), e.timeZone = "UTC";
      var r,
          i = new Intl.DateTimeFormat(n.locale.codes, e);

      if (t.omitZeroMinute) {
        var _t4 = Object.assign({}, e);

        delete _t4.minute, r = new Intl.DateTimeFormat(n.locale.codes, _t4);
      }

      return function (s) {
        var o,
            a = s.marker;
        return o = r && !a.getUTCMinutes() ? r : i, function (e, t, n, r, i) {
          e = e.replace(Jt, ""), "short" === n.timeZoneName && (e = function (e, t) {
            var n = !1;
            e = e.replace(Kt, function () {
              return n = !0, t;
            }), n || (e += " " + t);
            return e;
          }(e, "UTC" === i.timeZone || null == t.timeZoneOffset ? "UTC" : Vt(t.timeZoneOffset)));
          r.omitCommas && (e = e.replace(Xt, "").trim());
          r.omitZeroMinute && (e = e.replace(":00", ""));
          !1 === r.meridiem ? e = e.replace(Zt, "").trim() : "narrow" === r.meridiem ? e = e.replace(Zt, function (e, t) {
            return t.toLocaleLowerCase();
          }) : "short" === r.meridiem ? e = e.replace(Zt, function (e, t) {
            return t.toLocaleLowerCase() + "m";
          }) : "lowercase" === r.meridiem && (e = e.replace(Zt, function (e) {
            return e.toLocaleLowerCase();
          }));
          return e = (e = e.replace($t, " ")).trim();
        }(o.format(a), s, e, t, n);
      };
    }(e, t, n);
  }

  function nn(e, t) {
    var n = t.markerToArray(e.marker);
    return {
      marker: e.marker,
      timeZoneOffset: e.timeZoneOffset,
      array: n,
      year: n[0],
      month: n[1],
      day: n[2],
      hour: n[3],
      minute: n[4],
      second: n[5],
      millisecond: n[6]
    };
  }

  function rn(e, t, n, r) {
    var i = nn(e, n.calendarSystem);
    return {
      date: i,
      start: i,
      end: t ? nn(t, n.calendarSystem) : null,
      timeZone: n.timeZone,
      localeCodes: n.locale.codes,
      defaultSeparator: r || n.defaultSeparator
    };
  }

  var sn =
  /*#__PURE__*/
  function () {
    function sn(e) {
      _classCallCheck(this, sn);

      this.cmdStr = e;
    }

    _createClass(sn, [{
      key: "format",
      value: function format(e, t, n) {
        return t.cmdFormatter(this.cmdStr, rn(e, null, t, n));
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n, r) {
        return n.cmdFormatter(this.cmdStr, rn(e, t, n, r));
      }
    }]);

    return sn;
  }();

  var on =
  /*#__PURE__*/
  function () {
    function on(e) {
      _classCallCheck(this, on);

      this.func = e;
    }

    _createClass(on, [{
      key: "format",
      value: function format(e, t, n) {
        return this.func(rn(e, null, t, n));
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n, r) {
        return this.func(rn(e, t, n, r));
      }
    }]);

    return on;
  }();

  function an(e) {
    return "object" == _typeof(e) && e ? new en(e) : "string" == typeof e ? new sn(e) : "function" == typeof e ? new on(e) : null;
  }

  var ln = {
    navLinkDayClick: yn,
    navLinkWeekClick: yn,
    duration: ft,
    bootstrapFontAwesome: yn,
    buttonIcons: yn,
    customButtons: yn,
    defaultAllDayEventDuration: ft,
    defaultTimedEventDuration: ft,
    nextDayThreshold: ft,
    scrollTime: ft,
    scrollTimeReset: Boolean,
    slotMinTime: ft,
    slotMaxTime: ft,
    dayPopoverFormat: an,
    slotDuration: ft,
    snapDuration: ft,
    headerToolbar: yn,
    footerToolbar: yn,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: an,
    dayHeaderClassNames: yn,
    dayHeaderContent: yn,
    dayHeaderDidMount: yn,
    dayHeaderWillUnmount: yn,
    dayCellClassNames: yn,
    dayCellContent: yn,
    dayCellDidMount: yn,
    dayCellWillUnmount: yn,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: yn,
    weekNumbers: Boolean,
    weekNumberClassNames: yn,
    weekNumberContent: yn,
    weekNumberDidMount: yn,
    weekNumberWillUnmount: yn,
    editable: Boolean,
    viewClassNames: yn,
    viewDidMount: yn,
    viewWillUnmount: yn,
    nowIndicator: Boolean,
    nowIndicatorClassNames: yn,
    nowIndicatorContent: yn,
    nowIndicatorDidMount: yn,
    nowIndicatorWillUnmount: yn,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: yn,
    locale: yn,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: yn,
    eventOrder: nt,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: yn,
    contentHeight: yn,
    direction: String,
    weekNumberFormat: an,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    weekTextLong: String,
    progressiveEventRendering: Boolean,
    businessHours: yn,
    initialDate: yn,
    now: yn,
    eventDataTransform: yn,
    stickyHeaderDates: yn,
    stickyFooterScrollbar: yn,
    viewHeight: yn,
    defaultAllDay: Boolean,
    eventSourceFailure: yn,
    eventSourceSuccess: yn,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: yn,
    eventConstraint: yn,
    eventAllow: yn,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: yn,
    eventContent: yn,
    eventDidMount: yn,
    eventWillUnmount: yn,
    selectConstraint: yn,
    selectOverlap: yn,
    selectAllow: yn,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: yn,
    slotLaneClassNames: yn,
    slotLaneContent: yn,
    slotLaneDidMount: yn,
    slotLaneWillUnmount: yn,
    slotLabelClassNames: yn,
    slotLabelContent: yn,
    slotLabelDidMount: yn,
    slotLabelWillUnmount: yn,
    dayMaxEvents: yn,
    dayMaxEventRows: yn,
    dayMinWidth: Number,
    slotLabelInterval: ft,
    allDayText: String,
    allDayClassNames: yn,
    allDayContent: yn,
    allDayDidMount: yn,
    allDayWillUnmount: yn,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: an,
    rerenderDelay: Number,
    moreLinkText: yn,
    moreLinkHint: yn,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMaxStack: Number,
    eventMinHeight: Number,
    eventMinWidth: Number,
    eventShortHeight: Number,
    slotEventOverlap: Boolean,
    plugins: yn,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: ft,
    hiddenDays: yn,
    fixedWeekCount: Boolean,
    validRange: yn,
    visibleRange: yn,
    titleFormat: yn,
    eventInteractive: Boolean,
    noEventsText: String,
    viewHint: yn,
    navLinkHint: yn,
    closeHint: String,
    timeHint: String,
    eventHint: String,
    moreLinkClick: yn,
    moreLinkClassNames: yn,
    moreLinkContent: yn,
    moreLinkDidMount: yn,
    moreLinkWillUnmount: yn,
    monthStartFormat: an,
    handleCustomRendering: yn,
    customRenderingMetaMap: yn,
    customRenderingReplaces: Boolean
  },
      cn = {
    eventDisplay: "auto",
    defaultRangeSeparator: " - ",
    titleRangeSeparator: " – ",
    defaultTimedEventDuration: "01:00:00",
    defaultAllDayEventDuration: {
      day: 1
    },
    forceEventDuration: !1,
    nextDayThreshold: "00:00:00",
    dayHeaders: !0,
    initialView: "",
    aspectRatio: 1.35,
    headerToolbar: {
      start: "title",
      center: "",
      end: "today prev,next"
    },
    weekends: !0,
    weekNumbers: !1,
    weekNumberCalculation: "local",
    editable: !1,
    nowIndicator: !1,
    scrollTime: "06:00:00",
    scrollTimeReset: !0,
    slotMinTime: "00:00:00",
    slotMaxTime: "24:00:00",
    showNonCurrentDates: !0,
    lazyFetching: !0,
    startParam: "start",
    endParam: "end",
    timeZoneParam: "timeZone",
    timeZone: "local",
    locales: [],
    locale: "",
    themeSystem: "standard",
    dragRevertDuration: 500,
    dragScroll: !0,
    allDayMaintainDuration: !1,
    unselectAuto: !0,
    dropAccept: "*",
    eventOrder: "start,-duration,allDay,title",
    dayPopoverFormat: {
      month: "long",
      day: "numeric",
      year: "numeric"
    },
    handleWindowResize: !0,
    windowResizeDelay: 100,
    longPressDelay: 1e3,
    eventDragMinDistance: 5,
    expandRows: !1,
    navLinks: !1,
    selectable: !1,
    eventMinHeight: 15,
    eventMinWidth: 30,
    eventShortHeight: 30,
    monthStartFormat: {
      month: "long",
      day: "numeric"
    }
  },
      dn = {
    datesSet: yn,
    eventsSet: yn,
    eventAdd: yn,
    eventChange: yn,
    eventRemove: yn,
    windowResize: yn,
    eventClick: yn,
    eventMouseEnter: yn,
    eventMouseLeave: yn,
    select: yn,
    unselect: yn,
    loading: yn,
    _unmount: yn,
    _beforeprint: yn,
    _afterprint: yn,
    _noEventDrop: yn,
    _noEventResize: yn,
    _resize: yn,
    _scrollRequest: yn
  },
      un = {
    buttonText: yn,
    buttonHints: yn,
    views: yn,
    plugins: yn,
    initialEvents: yn,
    events: yn,
    eventSources: yn
  },
      hn = {
    headerToolbar: fn,
    footerToolbar: fn,
    buttonText: fn,
    buttonHints: fn,
    buttonIcons: fn,
    dateIncrement: fn,
    plugins: gn,
    events: gn,
    eventSources: gn,
    resources: gn
  };

  function fn(e, t) {
    return "object" == _typeof(e) && "object" == _typeof(t) && e && t ? Cn(e, t) : e === t;
  }

  function gn(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? St(e, t) : e === t;
  }

  var pn = {
    type: String,
    component: yn,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: yn,
    usesMinMaxTime: Boolean,
    classNames: yn,
    content: yn,
    didMount: yn,
    willUnmount: yn
  };

  function mn(e) {
    return En(e, hn);
  }

  function vn(e, t) {
    var n = {},
        r = {};

    for (var _r8 in t) {
      _r8 in e && (n[_r8] = t[_r8](e[_r8]));
    }

    for (var _n4 in e) {
      _n4 in t || (r[_n4] = e[_n4]);
    }

    return {
      refined: n,
      extra: r
    };
  }

  function yn(e) {
    return e;
  }

  var bn = Object.prototype.hasOwnProperty;

  function En(e, t) {
    var n = {};
    if (t) for (var _r9 in t) {
      if (t[_r9] === fn) {
        var _t5 = [];

        for (var _i7 = e.length - 1; _i7 >= 0; _i7 -= 1) {
          var _s3 = e[_i7][_r9];
          if ("object" == _typeof(_s3) && _s3) _t5.unshift(_s3);else if (void 0 !== _s3) {
            n[_r9] = _s3;
            break;
          }
        }

        _t5.length && (n[_r9] = En(_t5));
      }
    }

    for (var _t6 = e.length - 1; _t6 >= 0; _t6 -= 1) {
      var _r10 = e[_t6];

      for (var _e6 in _r10) {
        _e6 in n || (n[_e6] = _r10[_e6]);
      }
    }

    return n;
  }

  function Sn(e, t) {
    var n = {};

    for (var _r11 in e) {
      t(e[_r11], _r11) && (n[_r11] = e[_r11]);
    }

    return n;
  }

  function An(e, t) {
    var n = {};

    for (var _r12 in e) {
      n[_r12] = t(e[_r12], _r12);
    }

    return n;
  }

  function Dn(e) {
    var t = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _n5 = _step2.value;
        t[_n5] = !0;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return t;
  }

  function wn(e) {
    var t = [];

    for (var _n6 in e) {
      t.push(e[_n6]);
    }

    return t;
  }

  function Cn(e, t) {
    if (e === t) return !0;

    for (var _n7 in e) {
      if (bn.call(e, _n7) && !(_n7 in t)) return !1;
    }

    for (var _n8 in t) {
      if (bn.call(t, _n8) && e[_n8] !== t[_n8]) return !1;
    }

    return !0;
  }

  var Rn = /^on[A-Z]/;

  function xn(e, t) {
    var n = [];

    for (var _r13 in e) {
      bn.call(e, _r13) && (_r13 in t || n.push(_r13));
    }

    for (var _r14 in t) {
      bn.call(t, _r14) && e[_r14] !== t[_r14] && n.push(_r14);
    }

    return n;
  }

  function _n(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (e === t) return !0;

    for (var _r15 in t) {
      if (!(_r15 in e) || !Tn(e[_r15], t[_r15], n[_r15])) return !1;
    }

    for (var _n9 in e) {
      if (!(_n9 in t)) return !1;
    }

    return !0;
  }

  function Tn(e, t, n) {
    return e === t || !0 === n || !!n && n(e, t);
  }

  function kn(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var n = arguments.length > 2 ? arguments[2] : undefined;
    var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var i = [];
    null == n && (n = Object.keys(e).length);

    for (var _s4 = t; _s4 < n; _s4 += r) {
      var _t7 = e[_s4];
      void 0 !== _t7 && i.push(_t7);
    }

    return i;
  }

  var Mn = {};
  var In, On;
  In = "gregory", On =
  /*#__PURE__*/
  function () {
    function On() {
      _classCallCheck(this, On);
    }

    _createClass(On, [{
      key: "getMarkerYear",
      value: function getMarkerYear(e) {
        return e.getUTCFullYear();
      }
    }, {
      key: "getMarkerMonth",
      value: function getMarkerMonth(e) {
        return e.getUTCMonth();
      }
    }, {
      key: "getMarkerDay",
      value: function getMarkerDay(e) {
        return e.getUTCDate();
      }
    }, {
      key: "arrayToMarker",
      value: function arrayToMarker(e) {
        return Bt(e);
      }
    }, {
      key: "markerToArray",
      value: function markerToArray(e) {
        return Ht(e);
      }
    }]);

    return On;
  }(), Mn[In] = On;
  var Nn = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

  function Pn(e) {
    var t = Nn.exec(e);

    if (t) {
      var _e7 = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number("0." + t[12]) : 0));

      if (jt(_e7)) {
        var _n10 = null;
        return t[13] && (_n10 = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
          marker: _e7,
          isTimeUnspecified: !t[6],
          timeZoneOffset: _n10
        };
      }
    }

    return null;
  }

  var Hn =
  /*#__PURE__*/
  function () {
    function Hn(e) {
      _classCallCheck(this, Hn);

      var t = this.timeZone = e.timeZone,
          n = "local" !== t && "UTC" !== t;
      e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = function (e) {
        return new Mn[e]();
      }(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText, this.weekTextLong = (null != e.weekTextLong ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
    }

    _createClass(Hn, [{
      key: "createMarker",
      value: function createMarker(e) {
        var t = this.createMarkerMeta(e);
        return null === t ? null : t.marker;
      }
    }, {
      key: "createNowMarker",
      value: function createNowMarker() {
        return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : Bt(Nt(new Date()));
      }
    }, {
      key: "createMarkerMeta",
      value: function createMarkerMeta(e) {
        if ("string" == typeof e) return this.parse(e);
        var t = null;
        return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = Bt(e)), null !== t && jt(t) ? {
          marker: t,
          isTimeUnspecified: !1,
          forcedTzo: null
        } : null;
      }
    }, {
      key: "parse",
      value: function parse(e) {
        var t = Pn(e);
        if (null === t) return null;
        var n = t.marker,
            r = null;
        return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), {
          marker: n,
          isTimeUnspecified: t.isTimeUnspecified,
          forcedTzo: r
        };
      }
    }, {
      key: "getYear",
      value: function getYear(e) {
        return this.calendarSystem.getMarkerYear(e);
      }
    }, {
      key: "getMonth",
      value: function getMonth(e) {
        return this.calendarSystem.getMarkerMonth(e);
      }
    }, {
      key: "getDay",
      value: function getDay(e) {
        return this.calendarSystem.getMarkerDay(e);
      }
    }, {
      key: "add",
      value: function add(e, t) {
        var n = this.calendarSystem.markerToArray(e);
        return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n);
      }
    }, {
      key: "subtract",
      value: function subtract(e, t) {
        var n = this.calendarSystem.markerToArray(e);
        return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n);
      }
    }, {
      key: "addYears",
      value: function addYears(e, t) {
        var n = this.calendarSystem.markerToArray(e);
        return n[0] += t, this.calendarSystem.arrayToMarker(n);
      }
    }, {
      key: "addMonths",
      value: function addMonths(e, t) {
        var n = this.calendarSystem.markerToArray(e);
        return n[1] += t, this.calendarSystem.arrayToMarker(n);
      }
    }, {
      key: "diffWholeYears",
      value: function diffWholeYears(e, t) {
        var n = this.calendarSystem;
        return zt(e) === zt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null;
      }
    }, {
      key: "diffWholeMonths",
      value: function diffWholeMonths(e, t) {
        var n = this.calendarSystem;
        return zt(e) === zt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null;
      }
    }, {
      key: "greatestWholeUnit",
      value: function greatestWholeUnit(e, t) {
        var n = this.diffWholeYears(e, t);
        return null !== n ? {
          unit: "year",
          value: n
        } : (n = this.diffWholeMonths(e, t), null !== n ? {
          unit: "month",
          value: n
        } : (n = Tt(e, t), null !== n ? {
          unit: "week",
          value: n
        } : (n = kt(e, t), null !== n ? {
          unit: "day",
          value: n
        } : (n = function (e, t) {
          return (t.valueOf() - e.valueOf()) / 36e5;
        }(e, t), ct(n) ? {
          unit: "hour",
          value: n
        } : (n = function (e, t) {
          return (t.valueOf() - e.valueOf()) / 6e4;
        }(e, t), ct(n) ? {
          unit: "minute",
          value: n
        } : (n = function (e, t) {
          return (t.valueOf() - e.valueOf()) / 1e3;
        }(e, t), ct(n) ? {
          unit: "second",
          value: n
        } : {
          unit: "millisecond",
          value: t.valueOf() - e.valueOf()
        }))))));
      }
    }, {
      key: "countDurationsBetween",
      value: function countDurationsBetween(e, t, n) {
        var r;
        return n.years && (r = this.diffWholeYears(e, t), null !== r) ? r / (vt(n) / 365) : n.months && (r = this.diffWholeMonths(e, t), null !== r) ? r / function (e) {
          return vt(e) / 30;
        }(n) : n.days && (r = kt(e, t), null !== r) ? r / vt(n) : (t.valueOf() - e.valueOf()) / yt(n);
      }
    }, {
      key: "startOf",
      value: function startOf(e, t) {
        return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? Mt(e) : "hour" === t ? function (e) {
          return Bt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()]);
        }(e) : "minute" === t ? function (e) {
          return Bt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()]);
        }(e) : "second" === t ? function (e) {
          return Bt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()]);
        }(e) : null;
      }
    }, {
      key: "startOfYear",
      value: function startOfYear(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)]);
      }
    }, {
      key: "startOfMonth",
      value: function startOfMonth(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)]);
      }
    }, {
      key: "startOfWeek",
      value: function startOfWeek(e) {
        return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7]);
      }
    }, {
      key: "computeWeekNumber",
      value: function computeWeekNumber(e) {
        return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function (e, t, n) {
          var r = e.getUTCFullYear(),
              i = It(e, r, t, n);
          if (i < 1) return It(e, r - 1, t, n);
          var s = It(e, r + 1, t, n);
          return s >= 1 ? Math.min(i, s) : i;
        }(e, this.weekDow, this.weekDoy);
      }
    }, {
      key: "format",
      value: function format(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return t.format({
          marker: e,
          timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
        }, this);
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n) {
        var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        return r.isEndExclusive && (t = Ct(t, -1)), n.formatRange({
          marker: e,
          timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
        }, {
          marker: t,
          timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
        }, this, r.defaultSeparator);
      }
    }, {
      key: "formatIso",
      value: function formatIso(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = null;
        return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), Ut(e, n, t.omitTime);
      }
    }, {
      key: "timestampToMarker",
      value: function timestampToMarker(e) {
        return "local" === this.timeZone ? Bt(Nt(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? Bt(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e);
      }
    }, {
      key: "offsetForMarker",
      value: function offsetForMarker(e) {
        return "local" === this.timeZone ? -Pt(Ht(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(Ht(e)) : null;
      }
    }, {
      key: "toDate",
      value: function toDate(e, t) {
        return "local" === this.timeZone ? Pt(Ht(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(Ht(e)) * 60) : new Date(e.valueOf() - (t || 0));
      }
    }]);

    return Hn;
  }();

  var Bn =
  /*#__PURE__*/
  function () {
    function Bn(e) {
      _classCallCheck(this, Bn);

      this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
    }

    _createClass(Bn, [{
      key: "setIconOverride",
      value: function setIconOverride(e) {
        var t, n;

        if ("object" == _typeof(e) && e) {
          for (n in t = Object.assign({}, this.iconClasses), e) {
            t[n] = this.applyIconOverridePrefix(e[n]);
          }

          this.iconClasses = t;
        } else !1 === e && (this.iconClasses = {});
      }
    }, {
      key: "applyIconOverridePrefix",
      value: function applyIconOverridePrefix(e) {
        var t = this.iconOverridePrefix;
        return t && 0 !== e.indexOf(t) && (e = t + e), e;
      }
    }, {
      key: "getClass",
      value: function getClass(e) {
        return this.classes[e] || "";
      }
    }, {
      key: "getIconClass",
      value: function getIconClass(e, t) {
        var n;
        return n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e], n ? "".concat(this.baseIconClass, " ").concat(n) : "";
      }
    }, {
      key: "getCustomButtonIconClass",
      value: function getCustomButtonIconClass(e) {
        var t;
        return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption], t) ? "".concat(this.baseIconClass, " ").concat(this.applyIconOverridePrefix(t)) : "";
      }
    }]);

    return Bn;
  }();

  function jn(e) {
    e();
    var t = n.debounceRendering,
        r = [];

    for (n.debounceRendering = function (e) {
      r.push(e);
    }, U(p(zn, {}), document.createElement("div")); r.length;) {
      r.shift()();
    }

    n.debounceRendering = t;
  }

  Bn.prototype.classes = {}, Bn.prototype.iconClasses = {}, Bn.prototype.baseIconClass = "", Bn.prototype.iconOverridePrefix = "";

  var zn =
  /*#__PURE__*/
  function (_D) {
    _inherits(zn, _D);

    function zn() {
      _classCallCheck(this, zn);

      return _possibleConstructorReturn(this, _getPrototypeOf(zn).apply(this, arguments));
    }

    _createClass(zn, [{
      key: "render",
      value: function render() {
        return p("div", {});
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState({});
      }
    }]);

    return zn;
  }(D);

  function Un(e) {
    var t = function (e, t) {
      var n = {
        __c: t = "__cC" + c++,
        __: e,
        Consumer: function Consumer(e, t) {
          return e.children(t);
        },
        Provider: function Provider(e) {
          var n, r;
          return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function () {
            return r;
          }, this.shouldComponentUpdate = function (e) {
            this.props.value !== e.value && n.some(function (e) {
              e.__e = !0, x(e);
            });
          }, this.sub = function (e) {
            n.push(e);
            var t = e.componentWillUnmount;

            e.componentWillUnmount = function () {
              n.splice(n.indexOf(e), 1), t && t.call(e);
            };
          }), e.children;
        }
      };
      return n.Provider.__ = n.Consumer.contextType = n;
    }(e),
        n = t.Provider;

    return t.Provider = function () {
      var _this2 = this;

      var e = !this.getChildContext,
          t = n.apply(this, arguments);

      if (e) {
        var _e8 = [];
        this.shouldComponentUpdate = function (t) {
          _this2.props.value !== t.value && _e8.forEach(function (e) {
            e.context = t.value, e.forceUpdate();
          });
        }, this.sub = function (t) {
          _e8.push(t);

          var n = t.componentWillUnmount;

          t.componentWillUnmount = function () {
            _e8.splice(_e8.indexOf(t), 1), n && n.call(t);
          };
        };
      }

      return t;
    }, t;
  }

  var Wn =
  /*#__PURE__*/
  function () {
    function Wn(e, t, n, r) {
      var _this3 = this;

      _classCallCheck(this, Wn);

      this.execFunc = e, this.emitter = t, this.scrollTime = n, this.scrollTimeReset = r, this.handleScrollRequest = function (e) {
        _this3.queuedRequest = Object.assign({}, _this3.queuedRequest || {}, e), _this3.drain();
      }, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
    }

    _createClass(Wn, [{
      key: "detach",
      value: function detach() {
        this.emitter.off("_scrollRequest", this.handleScrollRequest);
      }
    }, {
      key: "update",
      value: function update(e) {
        e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
      }
    }, {
      key: "fireInitialScroll",
      value: function fireInitialScroll() {
        this.handleScrollRequest({
          time: this.scrollTime
        });
      }
    }, {
      key: "drain",
      value: function drain() {
        this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
      }
    }]);

    return Wn;
  }();

  var Ln = Un({});

  function Fn(e, t, n, r, i, s, o, a, l, c, d, u, h) {
    return {
      dateEnv: i,
      options: n,
      pluginHooks: o,
      emitter: c,
      dispatch: a,
      getCurrentData: l,
      calendarApi: d,
      viewSpec: e,
      viewApi: t,
      dateProfileGenerator: r,
      theme: s,
      isRtl: "rtl" === n.direction,
      addResizeHandler: function addResizeHandler(e) {
        c.on("_resize", e);
      },
      removeResizeHandler: function removeResizeHandler(e) {
        c.off("_resize", e);
      },
      createScrollResponder: function createScrollResponder(e) {
        return new Wn(e, c, ft(n.scrollTime), n.scrollTimeReset);
      },
      registerInteractiveComponent: u,
      unregisterInteractiveComponent: h
    };
  }

  var Vn =
  /*#__PURE__*/
  function (_D2) {
    _inherits(Vn, _D2);

    function Vn() {
      _classCallCheck(this, Vn);

      return _possibleConstructorReturn(this, _getPrototypeOf(Vn).apply(this, arguments));
    }

    _createClass(Vn, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(e, t) {
        return this.debug && console.log(xn(e, this.props), xn(t, this.state)), !_n(this.props, e, this.propEquality) || !_n(this.state, t, this.stateEquality);
      }
    }, {
      key: "safeSetState",
      value: function safeSetState(e) {
        _n(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
      }
    }]);

    return Vn;
  }(D);

  Vn.addPropsEquality = function (e) {
    var t = Object.create(this.prototype.propEquality);
    Object.assign(t, e), this.prototype.propEquality = t;
  }, Vn.addStateEquality = function (e) {
    var t = Object.create(this.prototype.stateEquality);
    Object.assign(t, e), this.prototype.stateEquality = t;
  }, Vn.contextType = Ln, Vn.prototype.propEquality = {}, Vn.prototype.stateEquality = {};

  var Gn =
  /*#__PURE__*/
  function (_Vn) {
    _inherits(Gn, _Vn);

    function Gn() {
      _classCallCheck(this, Gn);

      return _possibleConstructorReturn(this, _getPrototypeOf(Gn).apply(this, arguments));
    }

    return Gn;
  }(Vn);

  function Qn(e, t) {
    "function" == typeof e ? e(t) : e && (e.current = t);
  }

  Gn.contextType = Ln;

  var qn =
  /*#__PURE__*/
  function (_Gn) {
    _inherits(qn, _Gn);

    function qn() {
      var _this4;

      _classCallCheck(this, qn);

      _this4 = _possibleConstructorReturn(this, _getPrototypeOf(qn).apply(this, arguments)), _this4.id = Ze(), _this4.queuedDomNodes = [], _this4.currentDomNodes = [], _this4.handleEl = function (e) {
        var t = _this4.context.options,
            n = _this4.props.generatorName;
        t.customRenderingReplaces && Yn(n, t) || _this4.updateElRef(e);
      }, _this4.updateElRef = function (e) {
        _this4.props.elRef && Qn(_this4.props.elRef, e);
      };
      return _this4;
    }

    _createClass(qn, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.customGenerator,
            s = e.defaultGenerator,
            o = e.renderProps,
            a = Zn(e, [], this.handleEl);
        var l,
            c,
            d = !1,
            u = [];

        if (null != r) {
          var _e9 = "function" == typeof r ? r(o, p) : r;

          if (!0 === _e9) d = !0;else {
            var _t8 = _e9 && "object" == _typeof(_e9);

            _t8 && "html" in _e9 ? a.dangerouslySetInnerHTML = {
              __html: _e9.html
            } : _t8 && "domNodes" in _e9 ? u = Array.prototype.slice.call(_e9.domNodes) : (_t8 ? i(_e9) : "function" != typeof _e9) ? l = _e9 : c = _e9;
          }
        } else d = !Yn(e.generatorName, n);

        return d && s && (l = s(o)), this.queuedDomNodes = u, this.currentGeneratorMeta = c, p(e.elTag, a, l);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.triggerCustomRendering(!1);
      }
    }, {
      key: "triggerCustomRendering",
      value: function triggerCustomRendering(e) {
        var t;
        var n = this.props,
            r = this.context,
            _r$options = r.options,
            i = _r$options.handleCustomRendering,
            s = _r$options.customRenderingMetaMap;

        if (i) {
          var _r16 = null !== (t = this.currentGeneratorMeta) && void 0 !== t ? t : null == s ? void 0 : s[n.generatorName];

          _r16 && i(Object.assign(Object.assign({
            id: this.id,
            isActive: e,
            containerEl: this.base,
            reportNewContainerEl: this.updateElRef,
            generatorMeta: _r16
          }, n), {
            elClasses: (n.elClasses || []).filter(Xn)
          }));
        }
      }
    }, {
      key: "applyQueueudDomNodes",
      value: function applyQueueudDomNodes() {
        var e = this.queuedDomNodes,
            t = this.currentDomNodes,
            n = this.base;

        if (!St(e, t)) {
          t.forEach(Ie);
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = e[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _t9 = _step3.value;
              n.appendChild(_t9);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                _iterator3["return"]();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          this.currentDomNodes = e;
        }
      }
    }]);

    return qn;
  }(Gn);

  function Yn(e, t) {
    var n;
    return Boolean(t.handleCustomRendering && e && (null === (n = t.customRenderingMetaMap) || void 0 === n ? void 0 : n[e]));
  }

  function Zn(e, t, n) {
    var r = Object.assign(Object.assign({}, e.elAttrs), {
      ref: n
    });
    return (e.elClasses || t) && (r.className = (e.elClasses || []).concat(t || []).concat(r.className || []).filter(Boolean).join(" ")), e.elStyle && (r.style = e.elStyle), r;
  }

  function Xn(e) {
    return Boolean(e);
  }

  qn.addPropsEquality({
    elClasses: St,
    elStyle: Cn,
    elAttrs: function elAttrs(e, t) {
      var n = xn(e, t);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = n[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var _e10 = _step4.value;
          if (!Rn.test(_e10)) return !1;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return !0;
    },
    renderProps: Cn
  });
  var $n = Un(0);

  var Jn =
  /*#__PURE__*/
  function (_D3) {
    _inherits(Jn, _D3);

    function Jn() {
      var _this5;

      _classCallCheck(this, Jn);

      _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Jn).apply(this, arguments)), _this5.InnerContent = Kn.bind(void 0, _assertThisInitialized(_this5)), _this5.handleEl = function (e) {
        _this5.el = e, _this5.props.elRef && (Qn(_this5.props.elRef, e), e && _this5.didMountMisfire && _this5.componentDidMount());
      };
      return _this5;
    }

    _createClass(Jn, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = function (e, t) {
          var n = "function" == typeof e ? e(t) : e || [];
          return "string" == typeof n ? [n] : n;
        }(e.classNameGenerator, e.renderProps);

        if (e.children) {
          var _n11 = Zn(e, t, this.handleEl),
              _r17 = e.children(this.InnerContent, e.renderProps, _n11);

          return e.elTag ? p(e.elTag, _n11, _r17) : _r17;
        }

        return p(qn, Object.assign(Object.assign({}, e), {
          elRef: this.handleEl,
          elTag: e.elTag || "div",
          elClasses: (e.elClasses || []).concat(t),
          renderId: this.context
        }));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var e, t;
        this.el ? null === (t = (e = this.props).didMount) || void 0 === t || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
          el: this.el
        })) : this.didMountMisfire = !0;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var e, t;
        null === (t = (e = this.props).willUnmount) || void 0 === t || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
          el: this.el
        }));
      }
    }]);

    return Jn;
  }(D);

  function Kn(e, t) {
    var n = e.props;
    return p(qn, Object.assign({
      renderProps: n.renderProps,
      generatorName: n.generatorName,
      customGenerator: n.customGenerator,
      defaultGenerator: n.defaultGenerator,
      renderId: e.context
    }, t));
  }

  Jn.contextType = $n;

  var er =
  /*#__PURE__*/
  function (_Gn2) {
    _inherits(er, _Gn2);

    function er() {
      _classCallCheck(this, er);

      return _possibleConstructorReturn(this, _getPrototypeOf(er).apply(this, arguments));
    }

    _createClass(er, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = {
          view: t.viewApi
        };
        return p(Jn, Object.assign({}, e, {
          elTag: e.elTag || "div",
          elClasses: [].concat(_toConsumableArray(tr(e.viewSpec)), _toConsumableArray(e.elClasses || [])),
          renderProps: r,
          classNameGenerator: n.viewClassNames,
          generatorName: void 0,
          didMount: n.viewDidMount,
          willUnmount: n.viewWillUnmount
        }), function () {
          return e.children;
        });
      }
    }]);

    return er;
  }(Gn);

  function tr(e) {
    return ["fc-".concat(e.type, "-view"), "fc-view"];
  }

  function nr(e, t) {
    var n,
        r,
        i = [],
        s = t.start;

    for (e.sort(rr), n = 0; n < e.length; n += 1) {
      r = e[n], r.start > s && i.push({
        start: s,
        end: r.start
      }), r.end > s && (s = r.end);
    }

    return s < t.end && i.push({
      start: s,
      end: t.end
    }), i;
  }

  function rr(e, t) {
    return e.start.valueOf() - t.start.valueOf();
  }

  function ir(e, t) {
    var n = e.start,
        r = e.end,
        i = null;
    return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (i = {
      start: n,
      end: r
    }), i;
  }

  function sr(e, t) {
    return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf());
  }

  function or(e, t) {
    return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end);
  }

  function ar(e, t) {
    return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end);
  }

  function lr(e, t) {
    return (null === e.start || t >= e.start) && (null === e.end || t < e.end);
  }

  function cr(e) {
    var t = Math.floor(xt(e.start, e.end)) || 1,
        n = Mt(e.start);
    return {
      start: n,
      end: wt(n, t)
    };
  }

  function dr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ft(0);
    var n = null,
        r = null;

    if (e.end) {
      r = Mt(e.end);

      var _n12 = e.end.valueOf() - r.valueOf();

      _n12 && _n12 >= yt(t) && (r = wt(r, 1));
    }

    return e.start && (n = Mt(e.start), r && r <= n && (r = wt(n, 1))), {
      start: n,
      end: r
    };
  }

  function ur(e) {
    var t = dr(e);
    return xt(t.start, t.end) > 1;
  }

  function hr(e, t, n, r) {
    return "year" === r ? ft(n.diffWholeYears(e, t), "year") : "month" === r ? ft(n.diffWholeMonths(e, t), "month") : _t(e, t);
  }

  function fr(e, t) {
    return "function" == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e);
  }

  var gr =
  /*#__PURE__*/
  function () {
    function gr(e) {
      _classCallCheck(this, gr);

      this.props = e, this.nowDate = fr(e.nowInput, e.dateEnv), this.initHiddenDays();
    }

    _createClass(gr, [{
      key: "buildPrev",
      value: function buildPrev(e, t, n) {
        var r = this.props.dateEnv,
            i = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
        return this.build(i, -1, n);
      }
    }, {
      key: "buildNext",
      value: function buildNext(e, t, n) {
        var r = this.props.dateEnv,
            i = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
        return this.build(i, 1, n);
      }
    }, {
      key: "build",
      value: function build(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var r,
            i,
            s,
            o,
            a,
            l,
            c = this.props;
        var d, u;
        return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (d = e, e = null != (u = r).start && d < u.start ? u.start : null != u.end && d >= u.end ? new Date(u.end.valueOf() - 1) : d), i = this.buildCurrentRangeInfo(e, t), s = /^(year|month|week|day)$/.test(i.unit), o = this.buildRenderRange(this.trimHiddenDays(i.range), i.unit, s), o = this.trimHiddenDays(o), a = o, c.showNonCurrentDates || (a = ir(a, i.range)), a = this.adjustActiveRange(a), a = ir(a, r), l = or(i.range, r), lr(o, e) || (e = o.start), {
          currentDate: e,
          validRange: r,
          currentRange: i.range,
          currentRangeUnit: i.unit,
          isRangeAllDay: s,
          activeRange: a,
          renderRange: o,
          slotMinTime: c.slotMinTime,
          slotMaxTime: c.slotMaxTime,
          isValid: l,
          dateIncrement: this.buildDateIncrement(i.duration)
        };
      }
    }, {
      key: "buildValidRange",
      value: function buildValidRange() {
        var e = this.props.validRangeInput,
            t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
        return this.refineRange(t) || {
          start: null,
          end: null
        };
      }
    }, {
      key: "buildCurrentRangeInfo",
      value: function buildCurrentRangeInfo(e, t) {
        var n,
            r = this.props,
            i = null,
            s = null,
            o = null;
        return r.duration ? (i = r.duration, s = r.durationUnit, o = this.buildRangeFromDuration(e, t, i, s)) : (n = this.props.dayCount) ? (s = "day", o = this.buildRangeFromDayCount(e, t, n)) : (o = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), s = Et(i).unit, o = this.buildRangeFromDuration(e, t, i, s)), {
          duration: i,
          unit: s,
          range: o
        };
      }
    }, {
      key: "getFallbackDuration",
      value: function getFallbackDuration() {
        return ft({
          day: 1
        });
      }
    }, {
      key: "adjustActiveRange",
      value: function adjustActiveRange(e) {
        var _this$props = this.props,
            t = _this$props.dateEnv,
            n = _this$props.usesMinMaxTime,
            r = _this$props.slotMinTime,
            i = _this$props.slotMaxTime,
            s = e.start,
            o = e.end;
        return n && (vt(r) < 0 && (s = Mt(s), s = t.add(s, r)), vt(i) > 1 && (o = Mt(o), o = wt(o, -1), o = t.add(o, i))), {
          start: s,
          end: o
        };
      }
    }, {
      key: "buildRangeFromDuration",
      value: function buildRangeFromDuration(e, t, n, r) {
        var i,
            s,
            o,
            _this$props2 = this.props,
            a = _this$props2.dateEnv,
            l = _this$props2.dateAlignment;

        if (!l) {
          var _e11 = this.props.dateIncrement;
          l = _e11 && yt(_e11) < yt(n) ? Et(_e11).unit : r;
        }

        function c() {
          i = a.startOf(e, l), s = a.add(i, n), o = {
            start: i,
            end: s
          };
        }

        return vt(n) <= 1 && this.isHiddenDay(i) && (i = this.skipHiddenDays(i, t), i = Mt(i)), c(), this.trimHiddenDays(o) || (e = this.skipHiddenDays(e, t), c()), o;
      }
    }, {
      key: "buildRangeFromDayCount",
      value: function buildRangeFromDayCount(e, t, n) {
        var r,
            _this$props3 = this.props,
            i = _this$props3.dateEnv,
            s = _this$props3.dateAlignment,
            o = 0,
            a = e;
        s && (a = i.startOf(a, s)), a = Mt(a), a = this.skipHiddenDays(a, t), r = a;

        do {
          r = wt(r, 1), this.isHiddenDay(r) || (o += 1);
        } while (o < n);

        return {
          start: a,
          end: r
        };
      }
    }, {
      key: "buildCustomVisibleRange",
      value: function buildCustomVisibleRange(e) {
        var t = this.props,
            n = t.visibleRangeInput,
            r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
            i = this.refineRange(r);
        return !i || null != i.start && null != i.end ? i : null;
      }
    }, {
      key: "buildRenderRange",
      value: function buildRenderRange(e, t, n) {
        return e;
      }
    }, {
      key: "buildDateIncrement",
      value: function buildDateIncrement(e) {
        var t,
            n = this.props.dateIncrement;
        return n || ((t = this.props.dateAlignment) ? ft(1, t) : e || ft({
          days: 1
        }));
      }
    }, {
      key: "refineRange",
      value: function refineRange(e) {
        if (e) {
          var _t10 = function (e, t) {
            var n = null,
                r = null;
            return e.start && (n = t.createMarker(e.start)), e.end && (r = t.createMarker(e.end)), n || r ? n && r && r < n ? null : {
              start: n,
              end: r
            } : null;
          }(e, this.props.dateEnv);

          return _t10 && (_t10 = dr(_t10)), _t10;
        }

        return null;
      }
    }, {
      key: "initHiddenDays",
      value: function initHiddenDays() {
        var e,
            t = this.props.hiddenDays || [],
            n = [],
            r = 0;

        for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1) {
          (n[e] = -1 !== t.indexOf(e)) || (r += 1);
        }

        if (!r) throw new Error("invalid hiddenDays");
        this.isHiddenDayHash = n;
      }
    }, {
      key: "trimHiddenDays",
      value: function trimHiddenDays(e) {
        var t = e.start,
            n = e.end;
        return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? {
          start: t,
          end: n
        } : null;
      }
    }, {
      key: "isHiddenDay",
      value: function isHiddenDay(e) {
        return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
      }
    }, {
      key: "skipHiddenDays",
      value: function skipHiddenDays(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

        for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) {
          e = wt(e, t);
        }

        return e;
      }
    }]);

    return gr;
  }();

  function pr(e, t, n, r) {
    return {
      instanceId: Ze(),
      defId: e,
      range: t,
      forcedStartTzo: null == n ? null : n,
      forcedEndTzo: null == r ? null : r
    };
  }

  function mr(e, t, n) {
    var r = n.dateEnv,
        i = n.pluginHooks,
        s = n.options,
        o = e.defs,
        a = e.instances;
    a = Sn(a, function (e) {
      return !o[e.defId].recurringDef;
    });

    for (var _e12 in o) {
      var _n13 = o[_e12];

      if (_n13.recurringDef) {
        var _o3 = _n13.recurringDef.duration;
        _o3 || (_o3 = _n13.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);

        var _l3 = vr(_n13, _o3, t, r, i.recurringTypes);

        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = _l3[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _t11 = _step5.value;

            var _n14 = pr(_e12, {
              start: _t11,
              end: r.add(_t11, _o3)
            });

            a[_n14.instanceId] = _n14;
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
              _iterator5["return"]();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      }
    }

    return {
      defs: o,
      instances: a
    };
  }

  function vr(e, t, n, r, i) {
    var s = i[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
      start: r.subtract(n.start, t),
      end: n.end
    }, r);
    return e.allDay && (s = s.map(Mt)), s;
  }

  var yr = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    interactive: Boolean
  },
      br = {
    start: yn,
    end: yn,
    date: yn,
    allDay: Boolean
  },
      Er = Object.assign(Object.assign(Object.assign({}, yr), br), {
    extendedProps: yn
  });

  function Sr(e, t, n, r) {
    var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Dr(n);
    var s = arguments.length > 5 ? arguments[5] : undefined;
    var o = arguments.length > 6 ? arguments[6] : undefined;

    var _Ar = Ar(e, n, i),
        a = _Ar.refined,
        l = _Ar.extra,
        c = function (e, t) {
      var n = null;
      e && (n = e.defaultAllDay);
      null == n && (n = t.options.defaultAllDay);
      return n;
    }(t, n),
        d = function (e, t, n, r) {
      for (var _i8 = 0; _i8 < r.length; _i8 += 1) {
        var _s5 = r[_i8].parse(e, n);

        if (_s5) {
          var _n15 = e.allDay;
          return null == _n15 && (_n15 = t, null == _n15 && (_n15 = _s5.allDayGuess, null == _n15 && (_n15 = !1))), {
            allDay: _n15,
            duration: _s5.duration,
            typeData: _s5.typeData,
            typeId: _i8
          };
        }
      }

      return null;
    }(a, c, n.dateEnv, n.pluginHooks.recurringTypes);

    if (d) {
      var _e13 = wr(a, l, t ? t.sourceId : "", d.allDay, Boolean(d.duration), n, s);

      return _e13.recurringDef = {
        typeId: d.typeId,
        typeData: d.typeData,
        duration: d.duration
      }, {
        def: _e13,
        instance: null
      };
    }

    var u = function (e, t, n, r) {
      var i,
          s,
          o = e.allDay,
          a = null,
          l = !1,
          c = null,
          d = null != e.start ? e.start : e.date;
      if (i = n.dateEnv.createMarkerMeta(d), i) a = i.marker;else if (!r) return null;
      null != e.end && (s = n.dateEnv.createMarkerMeta(e.end));
      null == o && (o = null != t ? t : (!i || i.isTimeUnspecified) && (!s || s.isTimeUnspecified));
      o && a && (a = Mt(a));
      s && (c = s.marker, o && (c = Mt(c)), a && c <= a && (c = null));
      c ? l = !0 : r || (l = n.options.forceEventDuration || !1, c = n.dateEnv.add(a, o ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
      return {
        allDay: o,
        hasEnd: l,
        range: {
          start: a,
          end: c
        },
        forcedStartTzo: i ? i.forcedTzo : null,
        forcedEndTzo: s ? s.forcedTzo : null
      };
    }(a, c, n, r);

    if (u) {
      var _e14 = wr(a, l, t ? t.sourceId : "", u.allDay, u.hasEnd, n, s),
          _r18 = pr(_e14.defId, u.range, u.forcedStartTzo, u.forcedEndTzo);

      return o && _e14.publicId && o[_e14.publicId] && (_r18.instanceId = o[_e14.publicId]), {
        def: _e14,
        instance: _r18
      };
    }

    return null;
  }

  function Ar(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Dr(t);
    return vn(e, n);
  }

  function Dr(e) {
    return Object.assign(Object.assign(Object.assign({}, Ir), Er), e.pluginHooks.eventRefiners);
  }

  function wr(e, t, n, r, i, s, o) {
    var a = {
      title: e.title || "",
      groupId: e.groupId || "",
      publicId: e.id || "",
      url: e.url || "",
      recurringDef: null,
      defId: (o && e.id ? o[e.id] : "") || Ze(),
      sourceId: n,
      allDay: r,
      hasEnd: i,
      interactive: e.interactive,
      ui: Nr(e, s),
      extendedProps: Object.assign(Object.assign({}, e.extendedProps || {}), t)
    };
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = s.pluginHooks.eventDefMemberAdders[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _t12 = _step6.value;
        Object.assign(a, _t12(e));
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    return Object.freeze(a.ui.classNames), Object.freeze(a.extendedProps), a;
  }

  function Cr(e, t, n, r, i, s) {
    var o = {
      defs: {},
      instances: {}
    },
        a = Dr(n);
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = e[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var _l4 = _step7.value;

        var _e15 = Sr(_l4, t, n, r, a, i, s);

        _e15 && Rr(_e15, o);
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
          _iterator7["return"]();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    return o;
  }

  function Rr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      defs: {},
      instances: {}
    };
    return t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t;
  }

  function xr(e, t) {
    var n = e.instances[t];

    if (n) {
      var _t13 = e.defs[n.defId],
          _r19 = kr(e, function (e) {
        return n = _t13, r = e, Boolean(n.groupId && n.groupId === r.groupId);
        var n, r;
      });

      return _r19.defs[_t13.defId] = _t13, _r19.instances[n.instanceId] = n, _r19;
    }

    return {
      defs: {},
      instances: {}
    };
  }

  function _r() {
    return {
      defs: {},
      instances: {}
    };
  }

  function Tr(e, t) {
    return {
      defs: Object.assign(Object.assign({}, e.defs), t.defs),
      instances: Object.assign(Object.assign({}, e.instances), t.instances)
    };
  }

  function kr(e, t) {
    var n = Sn(e.defs, t),
        r = Sn(e.instances, function (e) {
      return n[e.defId];
    });
    return {
      defs: n,
      instances: r
    };
  }

  function Mr(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : [];
  }

  var Ir = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: yn,
    overlap: yn,
    allow: yn,
    className: Mr,
    classNames: Mr,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
  },
      Or = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: "",
    borderColor: "",
    textColor: "",
    classNames: []
  };

  function Nr(e, t) {
    var n = function (e, t) {
      return Array.isArray(e) ? Cr(e, null, t, !0) : "object" == _typeof(e) && e ? Cr([e], null, t, !0) : null != e ? String(e) : null;
    }(e.constraint, t);

    return {
      display: e.display || null,
      startEditable: null != e.startEditable ? e.startEditable : e.editable,
      durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
      constraints: null != n ? [n] : [],
      overlap: null != e.overlap ? e.overlap : null,
      allows: null != e.allow ? [e.allow] : [],
      backgroundColor: e.backgroundColor || e.color || "",
      borderColor: e.borderColor || e.color || "",
      textColor: e.textColor || "",
      classNames: (e.className || []).concat(e.classNames || [])
    };
  }

  function Pr(e) {
    return e.reduce(Hr, Or);
  }

  function Hr(e, t) {
    return {
      display: null != t.display ? t.display : e.display,
      startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
      durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
      constraints: e.constraints.concat(t.constraints),
      overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
      allows: e.allows.concat(t.allows),
      backgroundColor: t.backgroundColor || e.backgroundColor,
      borderColor: t.borderColor || e.borderColor,
      textColor: t.textColor || e.textColor,
      classNames: e.classNames.concat(t.classNames)
    };
  }

  var Br = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: yn,
    eventDataTransform: yn,
    success: yn,
    failure: yn
  };

  function jr(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : zr(t);
    var r;

    if ("string" == typeof e ? r = {
      url: e
    } : "function" == typeof e || Array.isArray(e) ? r = {
      events: e
    } : "object" == _typeof(e) && e && (r = e), r) {
      var _vn = vn(r, n),
          _i9 = _vn.refined,
          _s6 = _vn.extra,
          _o4 = function (e, t) {
        var n = t.pluginHooks.eventSourceDefs;

        for (var _t14 = n.length - 1; _t14 >= 0; _t14 -= 1) {
          var _r20 = n[_t14].parseMeta(e);

          if (_r20) return {
            sourceDefId: _t14,
            meta: _r20
          };
        }

        return null;
      }(_i9, t);

      if (_o4) return {
        _raw: e,
        isFetching: !1,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: _i9.defaultAllDay,
        eventDataTransform: _i9.eventDataTransform,
        success: _i9.success,
        failure: _i9.failure,
        publicId: _i9.id || "",
        sourceId: Ze(),
        sourceDefId: _o4.sourceDefId,
        meta: _o4.meta,
        ui: Nr(_i9, t),
        extendedProps: _s6
      };
    }

    return null;
  }

  function zr(e) {
    return Object.assign(Object.assign(Object.assign({}, Ir), Br), e.pluginHooks.eventSourceRefiners);
  }

  function Ur(e, t, n, r, i) {
    switch (t.type) {
      case "RECEIVE_EVENTS":
        return function (e, t, n, r, i, s) {
          if (t && n === t.latestFetchId) {
            var _n16 = Cr(Wr(i, t, s), t, s);

            return r && (_n16 = mr(_n16, r, s)), Tr(Vr(e, t.sourceId), _n16);
          }

          return e;
        }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);

      case "RESET_RAW_EVENTS":
        return function (e, t, n, r, i) {
          var _ref = function (e) {
            var t = e.defs,
                n = e.instances,
                r = {},
                i = {};

            for (var _e16 in t) {
              var _n17 = t[_e16],
                  _i10 = _n17.publicId;
              _i10 && (r[_i10] = _e16);
            }

            for (var _e17 in n) {
              var _r21 = n[_e17],
                  _s7 = t[_r21.defId],
                  _o5 = _s7.publicId;
              _o5 && (i[_o5] = _e17);
            }

            return {
              defIdMap: r,
              instanceIdMap: i
            };
          }(e),
              s = _ref.defIdMap,
              o = _ref.instanceIdMap;

          return mr(Cr(Wr(n, t, i), t, i, !1, s, o), r, i);
        }(e, n[t.sourceId], t.rawEvents, r.activeRange, i);

      case "ADD_EVENTS":
        return function (e, t, n, r) {
          n && (t = mr(t, n, r));
          return Tr(e, t);
        }(e, t.eventStore, r ? r.activeRange : null, i);

      case "RESET_EVENTS":
        return t.eventStore;

      case "MERGE_EVENTS":
        return Tr(e, t.eventStore);

      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return r ? mr(e, r.activeRange, i) : e;

      case "REMOVE_EVENTS":
        return function (e, t) {
          var n = e.defs,
              r = e.instances,
              i = {},
              s = {};

          for (var _e18 in n) {
            t.defs[_e18] || (i[_e18] = n[_e18]);
          }

          for (var _e19 in r) {
            !t.instances[_e19] && i[r[_e19].defId] && (s[_e19] = r[_e19]);
          }

          return {
            defs: i,
            instances: s
          };
        }(e, t.eventStore);

      case "REMOVE_EVENT_SOURCE":
        return Vr(e, t.sourceId);

      case "REMOVE_ALL_EVENT_SOURCES":
        return kr(e, function (e) {
          return !e.sourceId;
        });

      case "REMOVE_ALL_EVENTS":
        return {
          defs: {},
          instances: {}
        };

      default:
        return e;
    }
  }

  function Wr(e, t, n) {
    var r = n.options.eventDataTransform,
        i = t ? t.eventDataTransform : null;
    return i && (e = Lr(e, i)), r && (e = Lr(e, r)), e;
  }

  function Lr(e, t) {
    var n;

    if (t) {
      n = [];
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = e[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _r22 = _step8.value;

          var _e20 = t(_r22);

          _e20 ? n.push(_e20) : null == _e20 && n.push(_r22);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
            _iterator8["return"]();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    } else n = e;

    return n;
  }

  function Fr(e, t, n) {
    var r = e.defs,
        i = An(e.instances, function (e) {
      return r[e.defId].allDay ? e : Object.assign(Object.assign({}, e), {
        range: {
          start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
          end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
        },
        forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
        forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
      });
    });
    return {
      defs: r,
      instances: i
    };
  }

  function Vr(e, t) {
    return kr(e, function (e) {
      return e.sourceId !== t;
    });
  }

  var Gr =
  /*#__PURE__*/
  function () {
    function Gr() {
      _classCallCheck(this, Gr);

      this.handlers = {}, this.thisContext = null;
    }

    _createClass(Gr, [{
      key: "setThisContext",
      value: function setThisContext(e) {
        this.thisContext = e;
      }
    }, {
      key: "setOptions",
      value: function setOptions(e) {
        this.options = e;
      }
    }, {
      key: "on",
      value: function on(e, t) {
        !function (e, t, n) {
          (e[t] || (e[t] = [])).push(n);
        }(this.handlers, e, t);
      }
    }, {
      key: "off",
      value: function off(e, t) {
        !function (e, t, n) {
          n ? e[t] && (e[t] = e[t].filter(function (e) {
            return e !== n;
          })) : delete e[t];
        }(this.handlers, e, t);
      }
    }, {
      key: "trigger",
      value: function trigger(e) {
        var n = this.handlers[e] || [],
            r = this.options && this.options[e],
            i = [].concat(r || [], n);

        for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          t[_key2 - 1] = arguments[_key2];
        }

        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          for (var _iterator9 = i[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            var _e21 = _step9.value;

            _e21.apply(this.thisContext, t);
          }
        } catch (err) {
          _didIteratorError9 = true;
          _iteratorError9 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
              _iterator9["return"]();
            }
          } finally {
            if (_didIteratorError9) {
              throw _iteratorError9;
            }
          }
        }
      }
    }, {
      key: "hasHandlers",
      value: function hasHandlers(e) {
        return Boolean(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
      }
    }]);

    return Gr;
  }();

  var Qr = {
    startTime: "09:00",
    endTime: "17:00",
    daysOfWeek: [1, 2, 3, 4, 5],
    display: "inverse-background",
    classNames: "fc-non-business",
    groupId: "_businessHours"
  };

  function qr(e, t) {
    return Cr(function (e) {
      var t;
      t = !0 === e ? [{}] : Array.isArray(e) ? e.filter(function (e) {
        return e.daysOfWeek;
      }) : "object" == _typeof(e) && e ? [e] : [];
      return t = t.map(function (e) {
        return Object.assign(Object.assign({}, Qr), e);
      }), t;
    }(e), null, t);
  }

  function Yr(e, t, n) {
    n.emitter.trigger("select", Object.assign(Object.assign({}, Zr(e, n)), {
      jsEvent: t ? t.origEvent : null,
      view: n.viewApi || n.calendarApi.view
    }));
  }

  function Zr(e, t) {
    var n = {};
    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {
      for (var _iterator10 = t.pluginHooks.dateSpanTransforms[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
        var _r23 = _step10.value;
        Object.assign(n, _r23(e, t));
      }
    } catch (err) {
      _didIteratorError10 = true;
      _iteratorError10 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
          _iterator10["return"]();
        }
      } finally {
        if (_didIteratorError10) {
          throw _iteratorError10;
        }
      }
    }

    var r, i;
    return Object.assign(n, (r = e, i = t.dateEnv, Object.assign(Object.assign({}, wi(r.range, i, r.allDay)), {
      allDay: r.allDay
    }))), n;
  }

  function Xr(e, t, n) {
    var r = n.dateEnv,
        i = n.options,
        s = t;
    return e ? (s = Mt(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s;
  }

  function $r(e, t, n, r) {
    var i = li(e.defs, t),
        s = {
      defs: {},
      instances: {}
    };

    for (var _t15 in e.defs) {
      var _o6 = e.defs[_t15];
      s.defs[_t15] = Jr(_o6, i[_t15], n, r);
    }

    for (var _t16 in e.instances) {
      var _o7 = e.instances[_t16],
          _a3 = s.defs[_o7.defId];
      s.instances[_t16] = Kr(_o7, _a3, i[_o7.defId], n, r);
    }

    return s;
  }

  function Jr(e, t, n, r) {
    var i = n.standardProps || {};
    null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
    var s = Object.assign(Object.assign(Object.assign({}, e), i), {
      ui: Object.assign(Object.assign({}, e.ui), i.ui)
    });
    n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
      for (var _iterator11 = r.pluginHooks.eventDefMutationAppliers[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
        var _e22 = _step11.value;

        _e22(s, n, r);
      }
    } catch (err) {
      _didIteratorError11 = true;
      _iteratorError11 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
          _iterator11["return"]();
        }
      } finally {
        if (_didIteratorError11) {
          throw _iteratorError11;
        }
      }
    }

    return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
  }

  function Kr(e, t, n, r, i) {
    var s = i.dateEnv,
        o = r.standardProps && !0 === r.standardProps.allDay,
        a = r.standardProps && !1 === r.standardProps.hasEnd,
        l = Object.assign({}, e);
    return o && (l.range = cr(l.range)), r.datesDelta && n.startEditable && (l.range = {
      start: s.add(l.range.start, r.datesDelta),
      end: s.add(l.range.end, r.datesDelta)
    }), r.startDelta && n.durationEditable && (l.range = {
      start: s.add(l.range.start, r.startDelta),
      end: l.range.end
    }), r.endDelta && n.durationEditable && (l.range = {
      start: l.range.start,
      end: s.add(l.range.end, r.endDelta)
    }), a && (l.range = {
      start: l.range.start,
      end: Xr(t.allDay, l.range.start, i)
    }), t.allDay && (l.range = {
      start: Mt(l.range.start),
      end: Mt(l.range.end)
    }), l.range.end < l.range.start && (l.range.end = Xr(t.allDay, l.range.start, i)), l;
  }

  var ei =
  /*#__PURE__*/
  function () {
    function ei(e, t) {
      _classCallCheck(this, ei);

      this.context = e, this.internalEventSource = t;
    }

    _createClass(ei, [{
      key: "remove",
      value: function remove() {
        this.context.dispatch({
          type: "REMOVE_EVENT_SOURCE",
          sourceId: this.internalEventSource.sourceId
        });
      }
    }, {
      key: "refetch",
      value: function refetch() {
        this.context.dispatch({
          type: "FETCH_EVENT_SOURCES",
          sourceIds: [this.internalEventSource.sourceId],
          isRefetch: !0
        });
      }
    }, {
      key: "id",
      get: function get() {
        return this.internalEventSource.publicId;
      }
    }, {
      key: "url",
      get: function get() {
        return this.internalEventSource.meta.url;
      }
    }, {
      key: "format",
      get: function get() {
        return this.internalEventSource.meta.format;
      }
    }]);

    return ei;
  }();

  var ti =
  /*#__PURE__*/
  function () {
    function ti(e, t, n) {
      _classCallCheck(this, ti);

      this._context = e, this._def = t, this._instance = n || null;
    }

    _createClass(ti, [{
      key: "setProp",
      value: function setProp(e, t) {
        if (e in br) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");else if ("id" === e) t = yr[e](t), this.mutate({
          standardProps: {
            publicId: t
          }
        });else if (e in yr) t = yr[e](t), this.mutate({
          standardProps: _defineProperty({}, e, t)
        });else if (e in Ir) {
          var _n18 = Ir[e](t);

          _n18 = "color" === e ? {
            backgroundColor: t,
            borderColor: t
          } : "editable" === e ? {
            startEditable: t,
            durationEditable: t
          } : _defineProperty({}, e, t), this.mutate({
            standardProps: {
              ui: _n18
            }
          });
        } else console.warn("Could not set prop '".concat(e, "'. Use setExtendedProp instead."));
      }
    }, {
      key: "setExtendedProp",
      value: function setExtendedProp(e, t) {
        this.mutate({
          extendedProps: _defineProperty({}, e, t)
        });
      }
    }, {
      key: "setStart",
      value: function setStart(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = this._context.dateEnv,
            r = n.createMarker(e);

        if (r && this._instance) {
          var _e23 = hr(this._instance.range.start, r, n, t.granularity);

          t.maintainDuration ? this.mutate({
            datesDelta: _e23
          }) : this.mutate({
            startDelta: _e23
          });
        }
      }
    }, {
      key: "setEnd",
      value: function setEnd(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n,
            r = this._context.dateEnv;
        if ((null == e || (n = r.createMarker(e), n)) && this._instance) if (n) {
          var _e24 = hr(this._instance.range.end, n, r, t.granularity);

          this.mutate({
            endDelta: _e24
          });
        } else this.mutate({
          standardProps: {
            hasEnd: !1
          }
        });
      }
    }, {
      key: "setDates",
      value: function setDates(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var r,
            i = this._context.dateEnv,
            s = {
          allDay: n.allDay
        },
            o = i.createMarker(e);
        var a, l;

        if (o && (null == t || (r = i.createMarker(t), r)) && this._instance) {
          var _e25 = this._instance.range;
          !0 === n.allDay && (_e25 = cr(_e25));

          var _t17 = hr(_e25.start, o, i, n.granularity);

          if (r) {
            var _o8 = hr(_e25.end, r, i, n.granularity);

            l = _o8, (a = _t17).years === l.years && a.months === l.months && a.days === l.days && a.milliseconds === l.milliseconds ? this.mutate({
              datesDelta: _t17,
              standardProps: s
            }) : this.mutate({
              startDelta: _t17,
              endDelta: _o8,
              standardProps: s
            });
          } else s.hasEnd = !1, this.mutate({
            datesDelta: _t17,
            standardProps: s
          });
        }
      }
    }, {
      key: "moveStart",
      value: function moveStart(e) {
        var t = ft(e);
        t && this.mutate({
          startDelta: t
        });
      }
    }, {
      key: "moveEnd",
      value: function moveEnd(e) {
        var t = ft(e);
        t && this.mutate({
          endDelta: t
        });
      }
    }, {
      key: "moveDates",
      value: function moveDates(e) {
        var t = ft(e);
        t && this.mutate({
          datesDelta: t
        });
      }
    }, {
      key: "setAllDay",
      value: function setAllDay(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = {
          allDay: e
        },
            r = t.maintainDuration;
        null == r && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = r), this.mutate({
          standardProps: n
        });
      }
    }, {
      key: "formatRange",
      value: function formatRange(e) {
        var t = this._context.dateEnv,
            n = this._instance,
            r = an(e);
        return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
          forcedStartTzo: n.forcedStartTzo,
          forcedEndTzo: n.forcedEndTzo
        }) : t.format(n.range.start, r, {
          forcedTzo: n.forcedStartTzo
        });
      }
    }, {
      key: "mutate",
      value: function mutate(e) {
        var t = this._instance;

        if (t) {
          var _n19 = this._def,
              _r24 = this._context,
              _r24$getCurrentData = _r24.getCurrentData(),
              _i11 = _r24$getCurrentData.eventStore,
              _s8 = xr(_i11, t.instanceId);

          _s8 = $r(_s8, {
            "": {
              display: "",
              startEditable: !0,
              durationEditable: !0,
              constraints: [],
              overlap: null,
              allows: [],
              backgroundColor: "",
              borderColor: "",
              textColor: "",
              classNames: []
            }
          }, e, _r24);

          var _o9 = new ti(_r24, _n19, t);

          this._def = _s8.defs[_n19.defId], this._instance = _s8.instances[t.instanceId], _r24.dispatch({
            type: "MERGE_EVENTS",
            eventStore: _s8
          }), _r24.emitter.trigger("eventChange", {
            oldEvent: _o9,
            event: this,
            relatedEvents: ri(_s8, _r24, t),
            revert: function revert() {
              _r24.dispatch({
                type: "RESET_EVENTS",
                eventStore: _i11
              });
            }
          });
        }
      }
    }, {
      key: "remove",
      value: function remove() {
        var e = this._context,
            t = ni(this);
        e.dispatch({
          type: "REMOVE_EVENTS",
          eventStore: t
        }), e.emitter.trigger("eventRemove", {
          event: this,
          relatedEvents: [],
          revert: function revert() {
            e.dispatch({
              type: "MERGE_EVENTS",
              eventStore: t
            });
          }
        });
      }
    }, {
      key: "toPlainObject",
      value: function toPlainObject() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = this._def,
            n = t.ui,
            r = this.startStr,
            i = this.endStr,
            s = {
          allDay: t.allDay
        };
        return t.title && (s.title = t.title), r && (s.start = r), i && (s.end = i), t.publicId && (s.id = t.publicId), t.groupId && (s.groupId = t.groupId), t.url && (s.url = t.url), n.display && "auto" !== n.display && (s.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? s.color = n.backgroundColor : (n.backgroundColor && (s.backgroundColor = n.backgroundColor), n.borderColor && (s.borderColor = n.borderColor)), n.textColor && (s.textColor = n.textColor), n.classNames.length && (s.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? Object.assign(s, t.extendedProps) : s.extendedProps = t.extendedProps), s;
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        return this.toPlainObject();
      }
    }, {
      key: "source",
      get: function get() {
        var e = this._def.sourceId;
        return e ? new ei(this._context, this._context.getCurrentData().eventSources[e]) : null;
      }
    }, {
      key: "start",
      get: function get() {
        return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
      }
    }, {
      key: "end",
      get: function get() {
        return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
      }
    }, {
      key: "startStr",
      get: function get() {
        var e = this._instance;
        return e ? this._context.dateEnv.formatIso(e.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedStartTzo
        }) : "";
      }
    }, {
      key: "endStr",
      get: function get() {
        var e = this._instance;
        return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: e.forcedEndTzo
        }) : "";
      }
    }, {
      key: "id",
      get: function get() {
        return this._def.publicId;
      }
    }, {
      key: "groupId",
      get: function get() {
        return this._def.groupId;
      }
    }, {
      key: "allDay",
      get: function get() {
        return this._def.allDay;
      }
    }, {
      key: "title",
      get: function get() {
        return this._def.title;
      }
    }, {
      key: "url",
      get: function get() {
        return this._def.url;
      }
    }, {
      key: "display",
      get: function get() {
        return this._def.ui.display || "auto";
      }
    }, {
      key: "startEditable",
      get: function get() {
        return this._def.ui.startEditable;
      }
    }, {
      key: "durationEditable",
      get: function get() {
        return this._def.ui.durationEditable;
      }
    }, {
      key: "constraint",
      get: function get() {
        return this._def.ui.constraints[0] || null;
      }
    }, {
      key: "overlap",
      get: function get() {
        return this._def.ui.overlap;
      }
    }, {
      key: "allow",
      get: function get() {
        return this._def.ui.allows[0] || null;
      }
    }, {
      key: "backgroundColor",
      get: function get() {
        return this._def.ui.backgroundColor;
      }
    }, {
      key: "borderColor",
      get: function get() {
        return this._def.ui.borderColor;
      }
    }, {
      key: "textColor",
      get: function get() {
        return this._def.ui.textColor;
      }
    }, {
      key: "classNames",
      get: function get() {
        return this._def.ui.classNames;
      }
    }, {
      key: "extendedProps",
      get: function get() {
        return this._def.extendedProps;
      }
    }]);

    return ti;
  }();

  function ni(e) {
    var t = e._def,
        n = e._instance;
    return {
      defs: _defineProperty({}, t.defId, t),
      instances: n ? _defineProperty({}, n.instanceId, n) : {}
    };
  }

  function ri(e, t, n) {
    var r = e.defs,
        i = e.instances,
        s = [],
        o = n ? n.instanceId : "";

    for (var _e26 in i) {
      var _n20 = i[_e26],
          _a4 = r[_n20.defId];
      _n20.instanceId !== o && s.push(new ti(t, _a4, _n20));
    }

    return s;
  }

  function ii(e, t, n, r) {
    var i = {},
        s = {},
        o = {},
        a = [],
        l = [],
        c = li(e.defs, t);

    for (var _t18 in e.defs) {
      var _n21 = e.defs[_t18];
      "inverse-background" === c[_n21.defId].display && (_n21.groupId ? (i[_n21.groupId] = [], o[_n21.groupId] || (o[_n21.groupId] = _n21)) : s[_t18] = []);
    }

    for (var _t19 in e.instances) {
      var _o10 = e.instances[_t19],
          _d = e.defs[_o10.defId],
          _u = c[_d.defId],
          _h = _o10.range,
          _f = !_d.allDay && r ? dr(_h, r) : _h,
          _g = ir(_f, n);

      _g && ("inverse-background" === _u.display ? _d.groupId ? i[_d.groupId].push(_g) : s[_o10.defId].push(_g) : "none" !== _u.display && ("background" === _u.display ? a : l).push({
        def: _d,
        ui: _u,
        instance: _o10,
        range: _g,
        isStart: _f.start && _f.start.valueOf() === _g.start.valueOf(),
        isEnd: _f.end && _f.end.valueOf() === _g.end.valueOf()
      }));
    }

    for (var _e27 in i) {
      var _t20 = nr(i[_e27], n);

      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = _t20[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var _n22 = _step12.value;
          var _t21 = o[_e27],
              _r25 = c[_t21.defId];
          a.push({
            def: _t21,
            ui: _r25,
            instance: null,
            range: _n22,
            isStart: !1,
            isEnd: !1
          });
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
            _iterator12["return"]();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }
    }

    for (var _t22 in s) {
      var _r26 = nr(s[_t22], n);

      var _iteratorNormalCompletion13 = true;
      var _didIteratorError13 = false;
      var _iteratorError13 = undefined;

      try {
        for (var _iterator13 = _r26[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
          var _n23 = _step13.value;
          a.push({
            def: e.defs[_t22],
            ui: c[_t22],
            instance: null,
            range: _n23,
            isStart: !1,
            isEnd: !1
          });
        }
      } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
            _iterator13["return"]();
          }
        } finally {
          if (_didIteratorError13) {
            throw _iteratorError13;
          }
        }
      }
    }

    return {
      bg: a,
      fg: l
    };
  }

  function si(e) {
    return "background" === e.ui.display || "inverse-background" === e.ui.display;
  }

  function oi(e, t) {
    e.fcSeg = t;
  }

  function ai(e) {
    return e.fcSeg || e.parentNode.fcSeg || null;
  }

  function li(e, t) {
    return An(e, function (e) {
      return ci(e, t);
    });
  }

  function ci(e, t) {
    var n = [];
    return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Pr(n);
  }

  function di(e, t) {
    var n = e.map(ui);
    return n.sort(function (e, n) {
      return rt(e, n, t);
    }), n.map(function (e) {
      return e._seg;
    });
  }

  function ui(e) {
    var t = e.eventRange,
        n = t.def,
        r = t.instance ? t.instance.range : t.range,
        i = r.start ? r.start.valueOf() : 0,
        s = r.end ? r.end.valueOf() : 0;
    return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
      id: n.publicId,
      start: i,
      end: s,
      duration: s - i,
      allDay: Number(n.allDay),
      _seg: e
    });
  }

  function hi(e, t) {
    var n = t.pluginHooks,
        r = n.isDraggableTransformers,
        _e$eventRange = e.eventRange,
        i = _e$eventRange.def,
        s = _e$eventRange.ui,
        o = s.startEditable;
    var _iteratorNormalCompletion14 = true;
    var _didIteratorError14 = false;
    var _iteratorError14 = undefined;

    try {
      for (var _iterator14 = r[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
        var _e28 = _step14.value;
        o = _e28(o, i, s, t);
      }
    } catch (err) {
      _didIteratorError14 = true;
      _iteratorError14 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
          _iterator14["return"]();
        }
      } finally {
        if (_didIteratorError14) {
          throw _iteratorError14;
        }
      }
    }

    return o;
  }

  function fi(e, t) {
    return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart;
  }

  function gi(e, t) {
    return e.isEnd && e.eventRange.ui.durationEditable;
  }

  function pi(e, t, n, r, i, s, o) {
    var a = n.dateEnv,
        l = n.options,
        c = l.displayEventTime,
        d = l.displayEventEnd,
        u = e.eventRange.def,
        h = e.eventRange.instance;
    null == c && (c = !1 !== r), null == d && (d = !1 !== i);
    var f = h.range.start,
        g = h.range.end,
        p = s || e.start || e.eventRange.range.start,
        m = o || e.end || e.eventRange.range.end,
        v = Mt(f).valueOf() === Mt(p).valueOf(),
        y = Mt(Ct(g, -1)).valueOf() === Mt(Ct(m, -1)).valueOf();
    return c && !u.allDay && (v || y) ? (p = v ? f : p, m = y ? g : m, d && u.hasEnd ? a.formatRange(p, m, t, {
      forcedStartTzo: s ? null : h.forcedStartTzo,
      forcedEndTzo: o ? null : h.forcedEndTzo
    }) : a.format(p, t, {
      forcedTzo: s ? null : h.forcedStartTzo
    })) : "";
  }

  function mi(e, t, n) {
    var r = e.eventRange.range;
    return {
      isPast: r.end <= (n || t.start),
      isFuture: r.start >= (n || t.end),
      isToday: t && lr(t, r.start)
    };
  }

  function vi(e) {
    var t = ["fc-event"];
    return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t;
  }

  function yi(e) {
    return e.instance ? e.instance.instanceId : "".concat(e.def.defId, ":").concat(e.range.start.toISOString());
  }

  function bi(e, t) {
    var _e$eventRange2 = e.eventRange,
        n = _e$eventRange2.def,
        r = _e$eventRange2.instance,
        i = n.url;
    if (i) return {
      href: i
    };
    var s = t.emitter,
        o = t.options,
        a = o.eventInteractive;
    return null == a && (a = n.interactive, null == a && (a = Boolean(s.hasHandlers("eventClick")))), a ? qe(function (e) {
      s.trigger("eventClick", {
        el: e.target,
        event: new ti(t, n, r),
        jsEvent: e,
        view: t.viewApi
      });
    }) : {};
  }

  var Ei = {
    start: yn,
    end: yn,
    allDay: Boolean
  };

  function Si(e, t, n) {
    var r = function (e, t) {
      var _vn2 = vn(e, Ei),
          n = _vn2.refined,
          r = _vn2.extra,
          i = n.start ? t.createMarkerMeta(n.start) : null,
          s = n.end ? t.createMarkerMeta(n.end) : null,
          o = n.allDay;

      null == o && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified));
      return Object.assign({
        range: {
          start: i ? i.marker : null,
          end: s ? s.marker : null
        },
        allDay: o
      }, r);
    }(e, t),
        i = r.range;

    if (!i.start) return null;

    if (!i.end) {
      if (null == n) return null;
      i.end = t.add(i.start, n);
    }

    return r;
  }

  function Ai(e, t) {
    return sr(e.range, t.range) && e.allDay === t.allDay && function (e, t) {
      for (var _n24 in t) {
        if ("range" !== _n24 && "allDay" !== _n24 && e[_n24] !== t[_n24]) return !1;
      }

      for (var _n25 in e) {
        if (!(_n25 in t)) return !1;
      }

      return !0;
    }(e, t);
  }

  function Di(e, t, n) {
    return Object.assign(Object.assign({}, wi(e, t, n)), {
      timeZone: t.timeZone
    });
  }

  function wi(e, t, n) {
    return {
      start: t.toDate(e.start),
      end: t.toDate(e.end),
      startStr: t.formatIso(e.start, {
        omitTime: n
      }),
      endStr: t.formatIso(e.end, {
        omitTime: n
      })
    };
  }

  function Ci(e, t, n) {
    var r = !1,
        i = function i(e) {
      r || (r = !0, t(e));
    },
        s = function s(e) {
      r || (r = !0, n(e));
    },
        o = e(i, s);

    o && "function" == typeof o.then && o.then(i, s);
  }

  var Ri =
  /*#__PURE__*/
  function (_Error) {
    _inherits(Ri, _Error);

    function Ri(e, t) {
      var _this6;

      _classCallCheck(this, Ri);

      _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Ri).call(this, e)), _this6.response = t;
      return _this6;
    }

    return Ri;
  }(_wrapNativeSuper(Error));

  function xi(e, t, n) {
    var r = {
      method: e = e.toUpperCase()
    };
    return "GET" === e ? t += (-1 === t.indexOf("?") ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    }), fetch(t, r).then(function (e) {
      if (e.ok) return e.json().then(function (t) {
        return [t, e];
      }, function () {
        throw new Ri("Failure parsing JSON", e);
      });
      throw new Ri("Request failed", e);
    });
  }

  var _i;

  function Ti() {
    return null == _i && (_i = function () {
      if ("undefined" == typeof document) return !0;
      var e = document.createElement("div");
      e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
      var t = e.querySelector("div").offsetHeight > 0;
      return document.body.removeChild(e), t;
    }()), _i;
  }

  var ki =
  /*#__PURE__*/
  function (_Gn3) {
    _inherits(ki, _Gn3);

    function ki() {
      var _this7;

      _classCallCheck(this, ki);

      _this7 = _possibleConstructorReturn(this, _getPrototypeOf(ki).apply(this, arguments)), _this7.state = {
        forPrint: !1
      }, _this7.handleBeforePrint = function () {
        jn(function () {
          _this7.setState({
            forPrint: !0
          });
        });
      }, _this7.handleAfterPrint = function () {
        jn(function () {
          _this7.setState({
            forPrint: !1
          });
        });
      };
      return _this7;
    }

    _createClass(ki, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = e.options,
            n = this.state.forPrint,
            r = n || "auto" === t.height || "auto" === t.contentHeight,
            i = r || null == t.height ? "" : t.height,
            s = ["fc", n ? "fc-media-print" : "fc-media-screen", "fc-direction-" + t.direction, e.theme.getClass("root")];
        return Ti() || s.push("fc-liquid-hack"), e.children(s, i, r, n);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var e = this.props.emitter;
        e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var e = this.props.emitter;
        e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
      }
    }]);

    return ki;
  }(Gn);

  var Mi =
  /*#__PURE__*/
  function () {
    function Mi(e) {
      _classCallCheck(this, Mi);

      this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
    }

    _createClass(Mi, [{
      key: "destroy",
      value: function destroy() {}
    }]);

    return Mi;
  }();

  function Ii(e) {
    return _defineProperty({}, e.component.uid, e);
  }

  var Oi = {};

  var Ni =
  /*#__PURE__*/
  function () {
    function Ni() {
      _classCallCheck(this, Ni);
    }

    _createClass(Ni, [{
      key: "getCurrentData",
      value: function getCurrentData() {
        return this.currentDataManager.getCurrentData();
      }
    }, {
      key: "dispatch",
      value: function dispatch(e) {
        this.currentDataManager.dispatch(e);
      }
    }, {
      key: "batchRendering",
      value: function batchRendering(e) {
        e();
      }
    }, {
      key: "updateSize",
      value: function updateSize() {
        this.trigger("_resize", !0);
      }
    }, {
      key: "setOption",
      value: function setOption(e, t) {
        this.dispatch({
          type: "SET_OPTION",
          optionName: e,
          rawOptionValue: t
        });
      }
    }, {
      key: "getOption",
      value: function getOption(e) {
        return this.currentDataManager.currentCalendarOptionsInput[e];
      }
    }, {
      key: "getAvailableLocaleCodes",
      value: function getAvailableLocaleCodes() {
        return Object.keys(this.getCurrentData().availableRawLocales);
      }
    }, {
      key: "on",
      value: function on(e, t) {
        var n = this.currentDataManager;
        n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn("Unknown listener name '".concat(e, "'"));
      }
    }, {
      key: "off",
      value: function off(e, t) {
        this.currentDataManager.emitter.off(e, t);
      }
    }, {
      key: "trigger",
      value: function trigger(e) {
        var _this$currentDataMana;

        for (var _len3 = arguments.length, t = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          t[_key3 - 1] = arguments[_key3];
        }

        (_this$currentDataMana = this.currentDataManager.emitter).trigger.apply(_this$currentDataMana, [e].concat(t));
      }
    }, {
      key: "changeView",
      value: function changeView(e, t) {
        var _this8 = this;

        this.batchRendering(function () {
          if (_this8.unselect(), t) {
            if (t.start && t.end) _this8.dispatch({
              type: "CHANGE_VIEW_TYPE",
              viewType: e
            }), _this8.dispatch({
              type: "SET_OPTION",
              optionName: "visibleRange",
              rawOptionValue: t
            });else {
              var _this8$getCurrentData = _this8.getCurrentData(),
                  _n26 = _this8$getCurrentData.dateEnv;

              _this8.dispatch({
                type: "CHANGE_VIEW_TYPE",
                viewType: e,
                dateMarker: _n26.createMarker(t)
              });
            }
          } else _this8.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e
          });
        });
      }
    }, {
      key: "zoomTo",
      value: function zoomTo(e, t) {
        var n;
        t = t || "day", n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: n.type,
          dateMarker: e
        }) : this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e
        });
      }
    }, {
      key: "getUnitViewSpec",
      value: function getUnitViewSpec(e) {
        var t,
            n,
            _this$getCurrentData = this.getCurrentData(),
            r = _this$getCurrentData.viewSpecs,
            i = _this$getCurrentData.toolbarConfig,
            s = [].concat(i.header ? i.header.viewsWithButtons : [], i.footer ? i.footer.viewsWithButtons : []);

        for (var _e29 in r) {
          s.push(_e29);
        }

        for (t = 0; t < s.length; t += 1) {
          if (n = r[s[t]], n && n.singleUnit === e) return n;
        }

        return null;
      }
    }, {
      key: "prev",
      value: function prev() {
        this.unselect(), this.dispatch({
          type: "PREV"
        });
      }
    }, {
      key: "next",
      value: function next() {
        this.unselect(), this.dispatch({
          type: "NEXT"
        });
      }
    }, {
      key: "prevYear",
      value: function prevYear() {
        var e = this.getCurrentData();
        this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e.dateEnv.addYears(e.currentDate, -1)
        });
      }
    }, {
      key: "nextYear",
      value: function nextYear() {
        var e = this.getCurrentData();
        this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: e.dateEnv.addYears(e.currentDate, 1)
        });
      }
    }, {
      key: "today",
      value: function today() {
        var e = this.getCurrentData();
        this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: fr(e.calendarOptions.now, e.dateEnv)
        });
      }
    }, {
      key: "gotoDate",
      value: function gotoDate(e) {
        var t = this.getCurrentData();
        this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: t.dateEnv.createMarker(e)
        });
      }
    }, {
      key: "incrementDate",
      value: function incrementDate(e) {
        var t = this.getCurrentData(),
            n = ft(e);
        n && (this.unselect(), this.dispatch({
          type: "CHANGE_DATE",
          dateMarker: t.dateEnv.add(t.currentDate, n)
        }));
      }
    }, {
      key: "getDate",
      value: function getDate() {
        var e = this.getCurrentData();
        return e.dateEnv.toDate(e.currentDate);
      }
    }, {
      key: "formatDate",
      value: function formatDate(e, t) {
        var _this$getCurrentData2 = this.getCurrentData(),
            n = _this$getCurrentData2.dateEnv;

        return n.format(n.createMarker(e), an(t));
      }
    }, {
      key: "formatRange",
      value: function formatRange(e, t, n) {
        var _this$getCurrentData3 = this.getCurrentData(),
            r = _this$getCurrentData3.dateEnv;

        return r.formatRange(r.createMarker(e), r.createMarker(t), an(n), n);
      }
    }, {
      key: "formatIso",
      value: function formatIso(e, t) {
        var _this$getCurrentData4 = this.getCurrentData(),
            n = _this$getCurrentData4.dateEnv;

        return n.formatIso(n.createMarker(e), {
          omitTime: t
        });
      }
    }, {
      key: "select",
      value: function select(e, t) {
        var n;
        n = null == t ? null != e.start ? e : {
          start: e,
          end: null
        } : {
          start: e,
          end: t
        };
        var r = this.getCurrentData(),
            i = Si(n, r.dateEnv, ft({
          days: 1
        }));
        i && (this.dispatch({
          type: "SELECT_DATES",
          selection: i
        }), Yr(i, null, r));
      }
    }, {
      key: "unselect",
      value: function unselect(e) {
        var t = this.getCurrentData();
        t.dateSelection && (this.dispatch({
          type: "UNSELECT_DATES"
        }), function (e, t) {
          t.emitter.trigger("unselect", {
            jsEvent: e ? e.origEvent : null,
            view: t.viewApi || t.calendarApi.view
          });
        }(e, t));
      }
    }, {
      key: "addEvent",
      value: function addEvent(e, t) {
        var _wn, _wn2;

        if (e instanceof ti) {
          var _t23 = e._def,
              _n27 = e._instance;
          return this.getCurrentData().eventStore.defs[_t23.defId] || (this.dispatch({
            type: "ADD_EVENTS",
            eventStore: Rr({
              def: _t23,
              instance: _n27
            })
          }), this.triggerEventAdd(e)), e;
        }

        var n,
            r = this.getCurrentData();
        if (t instanceof ei) n = t.internalEventSource;else if ("boolean" == typeof t) t && (_wn = wn(r.eventSources), _wn2 = _slicedToArray(_wn, 1), n = _wn2[0], _wn);else if (null != t) {
          var _e30 = this.getEventSourceById(t);

          if (!_e30) return console.warn("Could not find an event source with ID \"".concat(t, "\"")), null;
          n = _e30.internalEventSource;
        }
        var i = Sr(e, n, r, !1);

        if (i) {
          var _e31 = new ti(r, i.def, i.def.recurringDef ? null : i.instance);

          return this.dispatch({
            type: "ADD_EVENTS",
            eventStore: Rr(i)
          }), this.triggerEventAdd(_e31), _e31;
        }

        return null;
      }
    }, {
      key: "triggerEventAdd",
      value: function triggerEventAdd(e) {
        var _this9 = this;

        var _this$getCurrentData5 = this.getCurrentData(),
            t = _this$getCurrentData5.emitter;

        t.trigger("eventAdd", {
          event: e,
          relatedEvents: [],
          revert: function revert() {
            _this9.dispatch({
              type: "REMOVE_EVENTS",
              eventStore: ni(e)
            });
          }
        });
      }
    }, {
      key: "getEventById",
      value: function getEventById(e) {
        var t = this.getCurrentData(),
            _t$eventStore = t.eventStore,
            n = _t$eventStore.defs,
            r = _t$eventStore.instances;
        e = String(e);

        for (var _i12 in n) {
          var _s9 = n[_i12];

          if (_s9.publicId === e) {
            if (_s9.recurringDef) return new ti(t, _s9, null);

            for (var _e32 in r) {
              var _n28 = r[_e32];
              if (_n28.defId === _s9.defId) return new ti(t, _s9, _n28);
            }
          }
        }

        return null;
      }
    }, {
      key: "getEvents",
      value: function getEvents() {
        var e = this.getCurrentData();
        return ri(e.eventStore, e);
      }
    }, {
      key: "removeAllEvents",
      value: function removeAllEvents() {
        this.dispatch({
          type: "REMOVE_ALL_EVENTS"
        });
      }
    }, {
      key: "getEventSources",
      value: function getEventSources() {
        var e = this.getCurrentData(),
            t = e.eventSources,
            n = [];

        for (var _r27 in t) {
          n.push(new ei(e, t[_r27]));
        }

        return n;
      }
    }, {
      key: "getEventSourceById",
      value: function getEventSourceById(e) {
        var t = this.getCurrentData(),
            n = t.eventSources;
        e = String(e);

        for (var _r28 in n) {
          if (n[_r28].publicId === e) return new ei(t, n[_r28]);
        }

        return null;
      }
    }, {
      key: "addEventSource",
      value: function addEventSource(e) {
        var t = this.getCurrentData();
        if (e instanceof ei) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [e.internalEventSource]
        }), e;
        var n = jr(e, t);
        return n ? (this.dispatch({
          type: "ADD_EVENT_SOURCES",
          sources: [n]
        }), new ei(t, n)) : null;
      }
    }, {
      key: "removeAllEventSources",
      value: function removeAllEventSources() {
        this.dispatch({
          type: "REMOVE_ALL_EVENT_SOURCES"
        });
      }
    }, {
      key: "refetchEvents",
      value: function refetchEvents() {
        this.dispatch({
          type: "FETCH_EVENT_SOURCES",
          isRefetch: !0
        });
      }
    }, {
      key: "scrollToTime",
      value: function scrollToTime(e) {
        var t = ft(e);
        t && this.trigger("_scrollRequest", {
          time: t
        });
      }
    }, {
      key: "view",
      get: function get() {
        return this.getCurrentData().viewApi;
      }
    }]);

    return Ni;
  }();

  function Pi(e, t) {
    return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom;
  }

  function Hi(e, t) {
    var n = {
      left: Math.max(e.left, t.left),
      right: Math.min(e.right, t.right),
      top: Math.max(e.top, t.top),
      bottom: Math.min(e.bottom, t.bottom)
    };
    return n.left < n.right && n.top < n.bottom && n;
  }

  function Bi(e, t) {
    return {
      left: Math.min(Math.max(e.left, t.left), t.right),
      top: Math.min(Math.max(e.top, t.top), t.bottom)
    };
  }

  function ji(e) {
    return {
      left: (e.left + e.right) / 2,
      top: (e.top + e.bottom) / 2
    };
  }

  function zi(e, t) {
    return {
      left: e.left - t.left,
      top: e.top - t.top
    };
  }

  var Ui = {
    defs: {},
    instances: {}
  };

  var Wi =
  /*#__PURE__*/
  function () {
    function Wi() {
      _classCallCheck(this, Wi);

      this.getKeysForEventDefs = Gt(this._getKeysForEventDefs), this.splitDateSelection = Gt(this._splitDateSpan), this.splitEventStore = Gt(this._splitEventStore), this.splitIndividualUi = Gt(this._splitIndividualUi), this.splitEventDrag = Gt(this._splitInteraction), this.splitEventResize = Gt(this._splitInteraction), this.eventUiBuilders = {};
    }

    _createClass(Wi, [{
      key: "splitProps",
      value: function splitProps(e) {
        var _this10 = this;

        var t = this.getKeyInfo(e),
            n = this.getKeysForEventDefs(e.eventStore),
            r = this.splitDateSelection(e.dateSelection),
            i = this.splitIndividualUi(e.eventUiBases, n),
            s = this.splitEventStore(e.eventStore, n),
            o = this.splitEventDrag(e.eventDrag),
            a = this.splitEventResize(e.eventResize),
            l = {};
        this.eventUiBuilders = An(t, function (e, t) {
          return _this10.eventUiBuilders[t] || Gt(Li);
        });

        for (var _n29 in t) {
          var _c2 = t[_n29],
              _d2 = s[_n29] || Ui,
              _u2 = this.eventUiBuilders[_n29];

          l[_n29] = {
            businessHours: _c2.businessHours || e.businessHours,
            dateSelection: r[_n29] || null,
            eventStore: _d2,
            eventUiBases: _u2(e.eventUiBases[""], _c2.ui, i[_n29]),
            eventSelection: _d2.instances[e.eventSelection] ? e.eventSelection : "",
            eventDrag: o[_n29] || null,
            eventResize: a[_n29] || null
          };
        }

        return l;
      }
    }, {
      key: "_splitDateSpan",
      value: function _splitDateSpan(e) {
        var t = {};

        if (e) {
          var _n30 = this.getKeysForDateSpan(e);

          var _iteratorNormalCompletion15 = true;
          var _didIteratorError15 = false;
          var _iteratorError15 = undefined;

          try {
            for (var _iterator15 = _n30[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
              var _r29 = _step15.value;
              t[_r29] = e;
            }
          } catch (err) {
            _didIteratorError15 = true;
            _iteratorError15 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                _iterator15["return"]();
              }
            } finally {
              if (_didIteratorError15) {
                throw _iteratorError15;
              }
            }
          }
        }

        return t;
      }
    }, {
      key: "_getKeysForEventDefs",
      value: function _getKeysForEventDefs(e) {
        var _this11 = this;

        return An(e.defs, function (e) {
          return _this11.getKeysForEventDef(e);
        });
      }
    }, {
      key: "_splitEventStore",
      value: function _splitEventStore(e, t) {
        var n = e.defs,
            r = e.instances,
            i = {};

        for (var _e33 in n) {
          var _iteratorNormalCompletion16 = true;
          var _didIteratorError16 = false;
          var _iteratorError16 = undefined;

          try {
            for (var _iterator16 = t[_e33][Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
              var _r30 = _step16.value;
              i[_r30] || (i[_r30] = {
                defs: {},
                instances: {}
              }), i[_r30].defs[_e33] = n[_e33];
            }
          } catch (err) {
            _didIteratorError16 = true;
            _iteratorError16 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                _iterator16["return"]();
              }
            } finally {
              if (_didIteratorError16) {
                throw _iteratorError16;
              }
            }
          }
        }

        for (var _e34 in r) {
          var _n31 = r[_e34];
          var _iteratorNormalCompletion17 = true;
          var _didIteratorError17 = false;
          var _iteratorError17 = undefined;

          try {
            for (var _iterator17 = t[_n31.defId][Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
              var _r31 = _step17.value;
              i[_r31] && (i[_r31].instances[_e34] = _n31);
            }
          } catch (err) {
            _didIteratorError17 = true;
            _iteratorError17 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
                _iterator17["return"]();
              }
            } finally {
              if (_didIteratorError17) {
                throw _iteratorError17;
              }
            }
          }
        }

        return i;
      }
    }, {
      key: "_splitIndividualUi",
      value: function _splitIndividualUi(e, t) {
        var n = {};

        for (var _r32 in e) {
          if (_r32) {
            var _iteratorNormalCompletion18 = true;
            var _didIteratorError18 = false;
            var _iteratorError18 = undefined;

            try {
              for (var _iterator18 = t[_r32][Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                var _i13 = _step18.value;
                n[_i13] || (n[_i13] = {}), n[_i13][_r32] = e[_r32];
              }
            } catch (err) {
              _didIteratorError18 = true;
              _iteratorError18 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
                  _iterator18["return"]();
                }
              } finally {
                if (_didIteratorError18) {
                  throw _iteratorError18;
                }
              }
            }
          }
        }

        return n;
      }
    }, {
      key: "_splitInteraction",
      value: function _splitInteraction(e) {
        var t = {};

        if (e) {
          var _n32 = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
              _r33 = this._getKeysForEventDefs(e.mutatedEvents),
              _i14 = this._splitEventStore(e.mutatedEvents, _r33),
              _s10 = function _s10(r) {
            t[r] || (t[r] = {
              affectedEvents: _n32[r] || Ui,
              mutatedEvents: _i14[r] || Ui,
              isEvent: e.isEvent
            });
          };

          for (var _e35 in _n32) {
            _s10(_e35);
          }

          for (var _e36 in _i14) {
            _s10(_e36);
          }
        }

        return t;
      }
    }]);

    return Wi;
  }();

  function Li(e, t, n) {
    var r = [];
    e && r.push(e), t && r.push(t);
    var i = {
      "": Pr(r)
    };
    return n && Object.assign(i, n), i;
  }

  function Fi(e, t, n, r) {
    return {
      dow: e.getUTCDay(),
      isDisabled: Boolean(r && !lr(r.activeRange, e)),
      isOther: Boolean(r && !lr(r.currentRange, e)),
      isToday: Boolean(t && lr(t, e)),
      isPast: Boolean(n ? e < n : !!t && e < t.start),
      isFuture: Boolean(n ? e > n : !!t && e >= t.end)
    };
  }

  function Vi(e, t) {
    var n = ["fc-day", "fc-day-" + At[e.dow]];
    return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n;
  }

  var Gi = an({
    year: "numeric",
    month: "long",
    day: "numeric"
  }),
      Qi = an({
    week: "long"
  });

  function qi(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "day";
    var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var i = e.dateEnv,
        s = e.options,
        o = e.calendarApi;
    var a = i.format(t, "week" === n ? Qi : Gi);

    if (s.navLinks) {
      var _e37 = i.toDate(t);

      var _l5 = function _l5(e) {
        var r = "day" === n ? s.navLinkDayClick : "week" === n ? s.navLinkWeekClick : null;
        "function" == typeof r ? r.call(o, i.toDate(t), e) : ("string" == typeof r && (n = r), o.zoomTo(t, n));
      };

      return Object.assign({
        title: at(s.navLinkHint, [a, _e37], a),
        "data-navlink": ""
      }, r ? Qe(_l5) : {
        onClick: _l5
      });
    }

    return {
      "aria-label": a
    };
  }

  var Yi,
      Zi = null;

  function Xi() {
    return null === Zi && (Zi = function () {
      var e = document.createElement("div");
      Be(e, {
        position: "absolute",
        top: -1e3,
        left: 0,
        border: 0,
        padding: 0,
        overflow: "scroll",
        direction: "rtl"
      }), e.innerHTML = "<div></div>", document.body.appendChild(e);
      var t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
      return Ie(e), t;
    }()), Zi;
  }

  function $i() {
    return Yi || (Yi = function () {
      var e = document.createElement("div");
      e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
      var t = Ji(e);
      return document.body.removeChild(e), t;
    }()), Yi;
  }

  function Ji(e) {
    return {
      x: e.offsetHeight - e.clientHeight,
      y: e.offsetWidth - e.clientWidth
    };
  }

  function Ki(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var n = window.getComputedStyle(e),
        r = parseInt(n.borderLeftWidth, 10) || 0,
        i = parseInt(n.borderRightWidth, 10) || 0,
        s = parseInt(n.borderTopWidth, 10) || 0,
        o = parseInt(n.borderBottomWidth, 10) || 0,
        a = Ji(e),
        l = a.y - r - i,
        c = {
      borderLeft: r,
      borderRight: i,
      borderTop: s,
      borderBottom: o,
      scrollbarBottom: a.x - s - o,
      scrollbarLeft: 0,
      scrollbarRight: 0
    };
    return Xi() && "rtl" === n.direction ? c.scrollbarLeft = l : c.scrollbarRight = l, t && (c.paddingLeft = parseInt(n.paddingLeft, 10) || 0, c.paddingRight = parseInt(n.paddingRight, 10) || 0, c.paddingTop = parseInt(n.paddingTop, 10) || 0, c.paddingBottom = parseInt(n.paddingBottom, 10) || 0), c;
  }

  function es(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var n = arguments.length > 2 ? arguments[2] : undefined;
    var r = n ? e.getBoundingClientRect() : ts(e),
        i = Ki(e, t),
        s = {
      left: r.left + i.borderLeft + i.scrollbarLeft,
      right: r.right - i.borderRight - i.scrollbarRight,
      top: r.top + i.borderTop,
      bottom: r.bottom - i.borderBottom - i.scrollbarBottom
    };
    return t && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s;
  }

  function ts(e) {
    var t = e.getBoundingClientRect();
    return {
      left: t.left + window.pageXOffset,
      top: t.top + window.pageYOffset,
      right: t.right + window.pageXOffset,
      bottom: t.bottom + window.pageYOffset
    };
  }

  function ns(e) {
    var t = [];

    for (; e instanceof HTMLElement;) {
      var _n33 = window.getComputedStyle(e);

      if ("fixed" === _n33.position) break;
      /(auto|scroll)/.test(_n33.overflow + _n33.overflowY + _n33.overflowX) && t.push(e), e = e.parentNode;
    }

    return t;
  }

  var rs =
  /*#__PURE__*/
  function () {
    function rs(e, t, n, r) {
      _classCallCheck(this, rs);

      this.els = t;
      var i = this.originClientRect = e.getBoundingClientRect();
      n && this.buildElHorizontals(i.left), r && this.buildElVerticals(i.top);
    }

    _createClass(rs, [{
      key: "buildElHorizontals",
      value: function buildElHorizontals(e) {
        var t = [],
            n = [];
        var _iteratorNormalCompletion19 = true;
        var _didIteratorError19 = false;
        var _iteratorError19 = undefined;

        try {
          for (var _iterator19 = this.els[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
            var _r34 = _step19.value;

            var _i15 = _r34.getBoundingClientRect();

            t.push(_i15.left - e), n.push(_i15.right - e);
          }
        } catch (err) {
          _didIteratorError19 = true;
          _iteratorError19 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
              _iterator19["return"]();
            }
          } finally {
            if (_didIteratorError19) {
              throw _iteratorError19;
            }
          }
        }

        this.lefts = t, this.rights = n;
      }
    }, {
      key: "buildElVerticals",
      value: function buildElVerticals(e) {
        var t = [],
            n = [];
        var _iteratorNormalCompletion20 = true;
        var _didIteratorError20 = false;
        var _iteratorError20 = undefined;

        try {
          for (var _iterator20 = this.els[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
            var _r35 = _step20.value;

            var _i16 = _r35.getBoundingClientRect();

            t.push(_i16.top - e), n.push(_i16.bottom - e);
          }
        } catch (err) {
          _didIteratorError20 = true;
          _iteratorError20 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
              _iterator20["return"]();
            }
          } finally {
            if (_didIteratorError20) {
              throw _iteratorError20;
            }
          }
        }

        this.tops = t, this.bottoms = n;
      }
    }, {
      key: "leftToIndex",
      value: function leftToIndex(e) {
        var t,
            n = this.lefts,
            r = this.rights,
            i = n.length;

        for (t = 0; t < i; t += 1) {
          if (e >= n[t] && e < r[t]) return t;
        }
      }
    }, {
      key: "topToIndex",
      value: function topToIndex(e) {
        var t,
            n = this.tops,
            r = this.bottoms,
            i = n.length;

        for (t = 0; t < i; t += 1) {
          if (e >= n[t] && e < r[t]) return t;
        }
      }
    }, {
      key: "getWidth",
      value: function getWidth(e) {
        return this.rights[e] - this.lefts[e];
      }
    }, {
      key: "getHeight",
      value: function getHeight(e) {
        return this.bottoms[e] - this.tops[e];
      }
    }, {
      key: "similarTo",
      value: function similarTo(e) {
        return is(this.tops || [], e.tops || []) && is(this.bottoms || [], e.bottoms || []) && is(this.lefts || [], e.lefts || []) && is(this.rights || [], e.rights || []);
      }
    }]);

    return rs;
  }();

  function is(e, t) {
    var n = e.length;
    if (n !== t.length) return !1;

    for (var _r36 = 0; _r36 < n; _r36++) {
      if (Math.round(e[_r36]) !== Math.round(t[_r36])) return !1;
    }

    return !0;
  }

  var ss =
  /*#__PURE__*/
  function () {
    function ss() {
      _classCallCheck(this, ss);
    }

    _createClass(ss, [{
      key: "getMaxScrollTop",
      value: function getMaxScrollTop() {
        return this.getScrollHeight() - this.getClientHeight();
      }
    }, {
      key: "getMaxScrollLeft",
      value: function getMaxScrollLeft() {
        return this.getScrollWidth() - this.getClientWidth();
      }
    }, {
      key: "canScrollVertically",
      value: function canScrollVertically() {
        return this.getMaxScrollTop() > 0;
      }
    }, {
      key: "canScrollHorizontally",
      value: function canScrollHorizontally() {
        return this.getMaxScrollLeft() > 0;
      }
    }, {
      key: "canScrollUp",
      value: function canScrollUp() {
        return this.getScrollTop() > 0;
      }
    }, {
      key: "canScrollDown",
      value: function canScrollDown() {
        return this.getScrollTop() < this.getMaxScrollTop();
      }
    }, {
      key: "canScrollLeft",
      value: function canScrollLeft() {
        return this.getScrollLeft() > 0;
      }
    }, {
      key: "canScrollRight",
      value: function canScrollRight() {
        return this.getScrollLeft() < this.getMaxScrollLeft();
      }
    }]);

    return ss;
  }();

  var os =
  /*#__PURE__*/
  function (_ss) {
    _inherits(os, _ss);

    function os(e) {
      var _this12;

      _classCallCheck(this, os);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(os).call(this)), _this12.el = e;
      return _this12;
    }

    _createClass(os, [{
      key: "getScrollTop",
      value: function getScrollTop() {
        return this.el.scrollTop;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        return this.el.scrollLeft;
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(e) {
        this.el.scrollTop = e;
      }
    }, {
      key: "setScrollLeft",
      value: function setScrollLeft(e) {
        this.el.scrollLeft = e;
      }
    }, {
      key: "getScrollWidth",
      value: function getScrollWidth() {
        return this.el.scrollWidth;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return this.el.scrollHeight;
      }
    }, {
      key: "getClientHeight",
      value: function getClientHeight() {
        return this.el.clientHeight;
      }
    }, {
      key: "getClientWidth",
      value: function getClientWidth() {
        return this.el.clientWidth;
      }
    }]);

    return os;
  }(ss);

  var as =
  /*#__PURE__*/
  function (_ss2) {
    _inherits(as, _ss2);

    function as() {
      _classCallCheck(this, as);

      return _possibleConstructorReturn(this, _getPrototypeOf(as).apply(this, arguments));
    }

    _createClass(as, [{
      key: "getScrollTop",
      value: function getScrollTop() {
        return window.pageYOffset;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        return window.pageXOffset;
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(e) {
        window.scroll(window.pageXOffset, e);
      }
    }, {
      key: "setScrollLeft",
      value: function setScrollLeft(e) {
        window.scroll(e, window.pageYOffset);
      }
    }, {
      key: "getScrollWidth",
      value: function getScrollWidth() {
        return document.documentElement.scrollWidth;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return document.documentElement.scrollHeight;
      }
    }, {
      key: "getClientHeight",
      value: function getClientHeight() {
        return document.documentElement.clientHeight;
      }
    }, {
      key: "getClientWidth",
      value: function getClientWidth() {
        return document.documentElement.clientWidth;
      }
    }]);

    return as;
  }(ss);

  var ls =
  /*#__PURE__*/
  function (_Gn4) {
    _inherits(ls, _Gn4);

    function ls() {
      var _this13;

      _classCallCheck(this, ls);

      _this13 = _possibleConstructorReturn(this, _getPrototypeOf(ls).apply(this, arguments)), _this13.uid = Ze();
      return _this13;
    }

    _createClass(ls, [{
      key: "prepareHits",
      value: function prepareHits() {}
    }, {
      key: "queryHit",
      value: function queryHit(e, t, n, r) {
        return null;
      }
    }, {
      key: "isValidSegDownEl",
      value: function isValidSegDownEl(e) {
        return !this.props.eventDrag && !this.props.eventResize && !Oe(e, ".fc-event-mirror");
      }
    }, {
      key: "isValidDateDownEl",
      value: function isValidDateDownEl(e) {
        return !(Oe(e, ".fc-event:not(.fc-bg-event)") || Oe(e, ".fc-more-link") || Oe(e, "a[data-navlink]") || Oe(e, ".fc-popover"));
      }
    }]);

    return ls;
  }(Gn);

  var cs =
  /*#__PURE__*/
  function () {
    function cs() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {
        return e.thickness || 1;
      };

      _classCallCheck(this, cs);

      this.getEntryThickness = e, this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
    }

    _createClass(cs, [{
      key: "addSegs",
      value: function addSegs(e) {
        var t = [];
        var _iteratorNormalCompletion21 = true;
        var _didIteratorError21 = false;
        var _iteratorError21 = undefined;

        try {
          for (var _iterator21 = e[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
            var _n34 = _step21.value;
            this.insertEntry(_n34, t);
          }
        } catch (err) {
          _didIteratorError21 = true;
          _iteratorError21 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
              _iterator21["return"]();
            }
          } finally {
            if (_didIteratorError21) {
              throw _iteratorError21;
            }
          }
        }

        return t;
      }
    }, {
      key: "insertEntry",
      value: function insertEntry(e, t) {
        var n = this.findInsertion(e);
        this.isInsertionValid(n, e) ? this.insertEntryAt(e, n) : this.handleInvalidInsertion(n, e, t);
      }
    }, {
      key: "isInsertionValid",
      value: function isInsertionValid(e, t) {
        return (-1 === this.maxCoord || e.levelCoord + this.getEntryThickness(t) <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt);
      }
    }, {
      key: "handleInvalidInsertion",
      value: function handleInvalidInsertion(e, t, n) {
        if (this.allowReslicing && e.touchingEntry) {
          var _r37 = Object.assign(Object.assign({}, t), {
            span: fs(t.span, e.touchingEntry.span)
          });

          n.push(_r37), this.splitEntry(t, e.touchingEntry, n);
        } else n.push(t);
      }
    }, {
      key: "splitEntry",
      value: function splitEntry(e, t, n) {
        var r = e.span,
            i = t.span;
        r.start < i.start && this.insertEntry({
          index: e.index,
          thickness: e.thickness,
          span: {
            start: r.start,
            end: i.start
          }
        }, n), r.end > i.end && this.insertEntry({
          index: e.index,
          thickness: e.thickness,
          span: {
            start: i.end,
            end: r.end
          }
        }, n);
      }
    }, {
      key: "insertEntryAt",
      value: function insertEntryAt(e, t) {
        var n = this.entriesByLevel,
            r = this.levelCoords;
        -1 === t.lateral ? (gs(r, t.level, t.levelCoord), gs(n, t.level, [e])) : gs(n[t.level], t.lateral, e), this.stackCnts[us(e)] = t.stackCnt;
      }
    }, {
      key: "findInsertion",
      value: function findInsertion(e) {
        var t = this.levelCoords,
            n = this.entriesByLevel,
            r = this.strictOrder,
            i = this.stackCnts,
            s = t.length,
            o = 0,
            a = -1,
            l = -1,
            c = null,
            d = 0;

        for (var _u3 = 0; _u3 < s; _u3 += 1) {
          var _s11 = t[_u3];
          if (!r && _s11 >= o + this.getEntryThickness(e)) break;

          var _h2 = void 0,
              _f2 = n[_u3],
              _g2 = ps(_f2, e.span.start, ds),
              _p = _g2[0] + _g2[1];

          for (; (_h2 = _f2[_p]) && _h2.span.start < e.span.end;) {
            var _e38 = _s11 + this.getEntryThickness(_h2);

            _e38 > o && (o = _e38, c = _h2, a = _u3, l = _p), _e38 === o && (d = Math.max(d, i[us(_h2)] + 1)), _p += 1;
          }
        }

        var u = 0;
        if (c) for (u = a + 1; u < s && t[u] < o;) {
          u += 1;
        }
        var h = -1;
        return u < s && t[u] === o && (h = ps(n[u], e.span.end, ds)[0]), {
          touchingLevel: a,
          touchingLateral: l,
          touchingEntry: c,
          stackCnt: d,
          levelCoord: o,
          level: u,
          lateral: h
        };
      }
    }, {
      key: "toRects",
      value: function toRects() {
        var e = this.entriesByLevel,
            t = this.levelCoords,
            n = e.length,
            r = [];

        for (var _i17 = 0; _i17 < n; _i17 += 1) {
          var _n35 = e[_i17],
              _s12 = t[_i17];
          var _iteratorNormalCompletion22 = true;
          var _didIteratorError22 = false;
          var _iteratorError22 = undefined;

          try {
            for (var _iterator22 = _n35[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
              var _e39 = _step22.value;
              r.push(Object.assign(Object.assign({}, _e39), {
                thickness: this.getEntryThickness(_e39),
                levelCoord: _s12
              }));
            }
          } catch (err) {
            _didIteratorError22 = true;
            _iteratorError22 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                _iterator22["return"]();
              }
            } finally {
              if (_didIteratorError22) {
                throw _iteratorError22;
              }
            }
          }
        }

        return r;
      }
    }]);

    return cs;
  }();

  function ds(e) {
    return e.span.end;
  }

  function us(e) {
    return e.index + ":" + e.span.start;
  }

  function hs(e) {
    var t = [];
    var _iteratorNormalCompletion23 = true;
    var _didIteratorError23 = false;
    var _iteratorError23 = undefined;

    try {
      for (var _iterator23 = e[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
        var _i18 = _step23.value;
        var _e40 = [],
            _s13 = {
          span: _i18.span,
          entries: [_i18]
        };
        var _iteratorNormalCompletion24 = true;
        var _didIteratorError24 = false;
        var _iteratorError24 = undefined;

        try {
          for (var _iterator24 = t[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
            var _i19 = _step24.value;
            fs(_i19.span, _s13.span) ? _s13 = {
              entries: _i19.entries.concat(_s13.entries),
              span: (n = _i19.span, r = _s13.span, {
                start: Math.min(n.start, r.start),
                end: Math.max(n.end, r.end)
              })
            } : _e40.push(_i19);
          }
        } catch (err) {
          _didIteratorError24 = true;
          _iteratorError24 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
              _iterator24["return"]();
            }
          } finally {
            if (_didIteratorError24) {
              throw _iteratorError24;
            }
          }
        }

        _e40.push(_s13), t = _e40;
      }
    } catch (err) {
      _didIteratorError23 = true;
      _iteratorError23 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
          _iterator23["return"]();
        }
      } finally {
        if (_didIteratorError23) {
          throw _iteratorError23;
        }
      }
    }

    var n, r;
    return t;
  }

  function fs(e, t) {
    var n = Math.max(e.start, t.start),
        r = Math.min(e.end, t.end);
    return n < r ? {
      start: n,
      end: r
    } : null;
  }

  function gs(e, t, n) {
    e.splice(t, 0, n);
  }

  function ps(e, t, n) {
    var r = 0,
        i = e.length;
    if (!i || t < n(e[r])) return [0, 0];
    if (t > n(e[i - 1])) return [i, 0];

    for (; r < i;) {
      var _s14 = Math.floor(r + (i - r) / 2),
          _o11 = n(e[_s14]);

      if (t < _o11) i = _s14;else {
        if (!(t > _o11)) return [_s14, 1];
        r = _s14 + 1;
      }
    }

    return [r, 0];
  }

  var ms =
  /*#__PURE__*/
  function () {
    function ms(e, t) {
      _classCallCheck(this, ms);

      this.emitter = new Gr();
    }

    _createClass(ms, [{
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "setMirrorIsVisible",
      value: function setMirrorIsVisible(e) {}
    }, {
      key: "setMirrorNeedsRevert",
      value: function setMirrorNeedsRevert(e) {}
    }, {
      key: "setAutoScrollEnabled",
      value: function setAutoScrollEnabled(e) {}
    }]);

    return ms;
  }();

  var vs = {},
      ys = {
    startTime: ft,
    duration: ft,
    create: Boolean,
    sourceId: String
  };

  function bs(e) {
    var _vn3 = vn(e, ys),
        t = _vn3.refined,
        n = _vn3.extra;

    return {
      startTime: t.startTime || null,
      duration: t.duration || null,
      create: null == t.create || t.create,
      sourceId: t.sourceId,
      leftoverProps: n
    };
  }

  function Es(e, t) {
    return an(!e || t > 10 ? {
      weekday: "short"
    } : t > 1 ? {
      weekday: "short",
      month: "numeric",
      day: "numeric",
      omitCommas: !0
    } : {
      weekday: "long"
    });
  }

  var Ss = "fc-col-header-cell";

  function As(e) {
    return e.text;
  }

  var Ds =
  /*#__PURE__*/
  function (_Gn5) {
    _inherits(Ds, _Gn5);

    function Ds() {
      _classCallCheck(this, Ds);

      return _possibleConstructorReturn(this, _getPrototypeOf(Ds).apply(this, arguments));
    }

    _createClass(Ds, [{
      key: "render",
      value: function render() {
        var _this$context = this.context,
            e = _this$context.dateEnv,
            t = _this$context.options,
            n = _this$context.theme,
            r = _this$context.viewApi,
            i = this.props,
            s = i.date,
            o = i.dateProfile,
            a = Fi(s, i.todayRange, null, o),
            l = [Ss].concat(Vi(a, n)),
            c = e.format(s, i.dayHeaderFormat),
            d = !a.isDisabled && i.colCnt > 1 ? qi(this.context, s) : {},
            u = Object.assign(Object.assign(Object.assign({
          date: e.toDate(s),
          view: r
        }, i.extraRenderProps), {
          text: c
        }), a);
        return p(Jn, {
          elTag: "th",
          elClasses: l,
          elAttrs: Object.assign({
            role: "columnheader",
            colSpan: i.colSpan,
            "data-date": a.isDisabled ? void 0 : Wt(s)
          }, i.extraDataAttrs),
          renderProps: u,
          generatorName: "dayHeaderContent",
          customGenerator: t.dayHeaderContent,
          defaultGenerator: As,
          classNameGenerator: t.dayHeaderClassNames,
          didMount: t.dayHeaderDidMount,
          willUnmount: t.dayHeaderWillUnmount
        }, function (e) {
          return p("div", {
            className: "fc-scrollgrid-sync-inner"
          }, !a.isDisabled && p(e, {
            elTag: "a",
            elAttrs: d,
            elClasses: ["fc-col-header-cell-cushion", i.isSticky && "fc-sticky"]
          }));
        });
      }
    }]);

    return Ds;
  }(Gn);

  var ws = an({
    weekday: "long"
  });

  var Cs =
  /*#__PURE__*/
  function (_Gn6) {
    _inherits(Cs, _Gn6);

    function Cs() {
      _classCallCheck(this, Cs);

      return _possibleConstructorReturn(this, _getPrototypeOf(Cs).apply(this, arguments));
    }

    _createClass(Cs, [{
      key: "render",
      value: function render() {
        var e = this.props,
            _this$context2 = this.context,
            t = _this$context2.dateEnv,
            n = _this$context2.theme,
            r = _this$context2.viewApi,
            i = _this$context2.options,
            s = wt(new Date(2592e5), e.dow),
            o = {
          dow: e.dow,
          isDisabled: !1,
          isFuture: !1,
          isPast: !1,
          isToday: !1,
          isOther: !1
        },
            a = t.format(s, e.dayHeaderFormat),
            l = Object.assign(Object.assign(Object.assign(Object.assign({
          date: s
        }, o), {
          view: r
        }), e.extraRenderProps), {
          text: a
        });
        return p(Jn, {
          elTag: "th",
          elClasses: [Ss].concat(_toConsumableArray(Vi(o, n)), _toConsumableArray(e.extraClassNames || [])),
          elAttrs: Object.assign({
            role: "columnheader",
            colSpan: e.colSpan
          }, e.extraDataAttrs),
          renderProps: l,
          generatorName: "dayHeaderContent",
          customGenerator: i.dayHeaderContent,
          defaultGenerator: As,
          classNameGenerator: i.dayHeaderClassNames,
          didMount: i.dayHeaderDidMount,
          willUnmount: i.dayHeaderWillUnmount
        }, function (n) {
          return p("div", {
            className: "fc-scrollgrid-sync-inner"
          }, p(n, {
            elTag: "a",
            elClasses: ["fc-col-header-cell-cushion", e.isSticky && "fc-sticky"],
            elAttrs: {
              "aria-label": t.format(s, ws)
            }
          }));
        });
      }
    }]);

    return Cs;
  }(Gn);

  var Rs =
  /*#__PURE__*/
  function (_D4) {
    _inherits(Rs, _D4);

    function Rs(e, t) {
      var _this14;

      _classCallCheck(this, Rs);

      _this14 = _possibleConstructorReturn(this, _getPrototypeOf(Rs).call(this, e, t)), _this14.initialNowDate = fr(t.options.now, t.dateEnv), _this14.initialNowQueriedMs = new Date().valueOf(), _this14.state = _this14.computeTiming().currentState;
      return _this14;
    }

    _createClass(Rs, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.state;
        return e.children(t.nowDate, t.todayRange);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setTimeout();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e) {
        e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearTimeout();
      }
    }, {
      key: "computeTiming",
      value: function computeTiming() {
        var e = this.props,
            t = this.context,
            n = Ct(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs),
            r = t.dateEnv.startOf(n, e.unit),
            i = t.dateEnv.add(r, ft(1, e.unit)),
            s = i.valueOf() - n.valueOf();
        return s = Math.min(864e5, s), {
          currentState: {
            nowDate: r,
            todayRange: xs(r)
          },
          nextState: {
            nowDate: i,
            todayRange: xs(i)
          },
          waitMs: s
        };
      }
    }, {
      key: "setTimeout",
      value: function (_setTimeout) {
        function setTimeout() {
          return _setTimeout.apply(this, arguments);
        }

        setTimeout.toString = function () {
          return _setTimeout.toString();
        };

        return setTimeout;
      }(function () {
        var _this15 = this;

        var _this$computeTiming = this.computeTiming(),
            e = _this$computeTiming.nextState,
            t = _this$computeTiming.waitMs;

        this.timeoutId = setTimeout(function () {
          _this15.setState(e, function () {
            _this15.setTimeout();
          });
        }, t);
      })
    }, {
      key: "clearTimeout",
      value: function (_clearTimeout2) {
        function clearTimeout() {
          return _clearTimeout2.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout2.toString();
        };

        return clearTimeout;
      }(function () {
        this.timeoutId && clearTimeout(this.timeoutId);
      })
    }]);

    return Rs;
  }(D);

  function xs(e) {
    var t = Mt(e);
    return {
      start: t,
      end: wt(t, 1)
    };
  }

  Rs.contextType = Ln;

  var _s =
  /*#__PURE__*/
  function (_Gn7) {
    _inherits(_s, _Gn7);

    function _s() {
      var _this16;

      _classCallCheck(this, _s);

      _this16 = _possibleConstructorReturn(this, _getPrototypeOf(_s).apply(this, arguments)), _this16.createDayHeaderFormatter = Gt(Ts);
      return _this16;
    }

    _createClass(_s, [{
      key: "render",
      value: function render() {
        var e = this.context,
            _this$props4 = this.props,
            t = _this$props4.dates,
            n = _this$props4.dateProfile,
            r = _this$props4.datesRepDistinctDays,
            i = _this$props4.renderIntro,
            s = this.createDayHeaderFormatter(e.options.dayHeaderFormat, r, t.length);
        return p(Rs, {
          unit: "day"
        }, function (e, o) {
          return p("tr", {
            role: "row"
          }, i && i("day"), t.map(function (e) {
            return r ? p(Ds, {
              key: e.toISOString(),
              date: e,
              dateProfile: n,
              todayRange: o,
              colCnt: t.length,
              dayHeaderFormat: s
            }) : p(Cs, {
              key: e.getUTCDay(),
              dow: e.getUTCDay(),
              dayHeaderFormat: s
            });
          }));
        });
      }
    }]);

    return _s;
  }(Gn);

  function Ts(e, t, n) {
    return e || Es(t, n);
  }

  var ks =
  /*#__PURE__*/
  function () {
    function ks(e, t) {
      _classCallCheck(this, ks);

      var n = e.start,
          r = e.end,
          i = [],
          s = [],
          o = -1;

      for (; n < r;) {
        t.isHiddenDay(n) ? i.push(o + .5) : (o += 1, i.push(o), s.push(n)), n = wt(n, 1);
      }

      this.dates = s, this.indices = i, this.cnt = s.length;
    }

    _createClass(ks, [{
      key: "sliceRange",
      value: function sliceRange(e) {
        var t = this.getDateDayIndex(e.start),
            n = this.getDateDayIndex(wt(e.end, -1)),
            r = Math.max(0, t),
            i = Math.min(this.cnt - 1, n);
        return r = Math.ceil(r), i = Math.floor(i), r <= i ? {
          firstIndex: r,
          lastIndex: i,
          isStart: t === r,
          isEnd: n === i
        } : null;
      }
    }, {
      key: "getDateDayIndex",
      value: function getDateDayIndex(e) {
        var t = this.indices,
            n = Math.floor(xt(this.dates[0], e));
        return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n];
      }
    }]);

    return ks;
  }();

  var Ms =
  /*#__PURE__*/
  function () {
    function Ms(e, t) {
      _classCallCheck(this, Ms);

      var n,
          r,
          i,
          s = e.dates;

      if (t) {
        for (r = s[0].getUTCDay(), n = 1; n < s.length && s[n].getUTCDay() !== r; n += 1) {
          ;
        }

        i = Math.ceil(s.length / n);
      } else i = 1, n = s.length;

      this.rowCnt = i, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
    }

    _createClass(Ms, [{
      key: "buildCells",
      value: function buildCells() {
        var e = [];

        for (var _t24 = 0; _t24 < this.rowCnt; _t24 += 1) {
          var _n36 = [];

          for (var _e41 = 0; _e41 < this.colCnt; _e41 += 1) {
            _n36.push(this.buildCell(_t24, _e41));
          }

          e.push(_n36);
        }

        return e;
      }
    }, {
      key: "buildCell",
      value: function buildCell(e, t) {
        var n = this.daySeries.dates[e * this.colCnt + t];
        return {
          key: n.toISOString(),
          date: n
        };
      }
    }, {
      key: "buildHeaderDates",
      value: function buildHeaderDates() {
        var e = [];

        for (var _t25 = 0; _t25 < this.colCnt; _t25 += 1) {
          e.push(this.cells[0][_t25].date);
        }

        return e;
      }
    }, {
      key: "sliceRange",
      value: function sliceRange(e) {
        var t = this.colCnt,
            n = this.daySeries.sliceRange(e),
            r = [];

        if (n) {
          var _e42 = n.firstIndex,
              _i20 = n.lastIndex,
              _s15 = _e42;

          for (; _s15 <= _i20;) {
            var _o12 = Math.floor(_s15 / t),
                _a5 = Math.min((_o12 + 1) * t, _i20 + 1);

            r.push({
              row: _o12,
              firstCol: _s15 % t,
              lastCol: (_a5 - 1) % t,
              isStart: n.isStart && _s15 === _e42,
              isEnd: n.isEnd && _a5 - 1 === _i20
            }), _s15 = _a5;
          }
        }

        return r;
      }
    }]);

    return Ms;
  }();

  var Is =
  /*#__PURE__*/
  function () {
    function Is() {
      _classCallCheck(this, Is);

      this.sliceBusinessHours = Gt(this._sliceBusinessHours), this.sliceDateSelection = Gt(this._sliceDateSpan), this.sliceEventStore = Gt(this._sliceEventStore), this.sliceEventDrag = Gt(this._sliceInteraction), this.sliceEventResize = Gt(this._sliceInteraction), this.forceDayIfListItem = !1;
    }

    _createClass(Is, [{
      key: "sliceProps",
      value: function sliceProps(e, t, n, r) {
        for (var _len4 = arguments.length, i = new Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
          i[_key4 - 4] = arguments[_key4];
        }

        var s = e.eventUiBases,
            o = this.sliceEventStore.apply(this, [e.eventStore, s, t, n].concat(i));
        return {
          dateSelectionSegs: this.sliceDateSelection.apply(this, [e.dateSelection, t, n, s, r].concat(i)),
          businessHourSegs: this.sliceBusinessHours.apply(this, [e.businessHours, t, n, r].concat(i)),
          fgEventSegs: o.fg,
          bgEventSegs: o.bg,
          eventDrag: this.sliceEventDrag.apply(this, [e.eventDrag, s, t, n].concat(i)),
          eventResize: this.sliceEventResize.apply(this, [e.eventResize, s, t, n].concat(i)),
          eventSelection: e.eventSelection
        };
      }
    }, {
      key: "sliceNowDate",
      value: function sliceNowDate(e, t, n, r) {
        for (var _len5 = arguments.length, i = new Array(_len5 > 4 ? _len5 - 4 : 0), _key5 = 4; _key5 < _len5; _key5++) {
          i[_key5 - 4] = arguments[_key5];
        }

        return this._sliceDateSpan.apply(this, [{
          range: {
            start: e,
            end: Ct(e, 1)
          },
          allDay: !1
        }, t, n, {}, r].concat(i));
      }
    }, {
      key: "_sliceBusinessHours",
      value: function _sliceBusinessHours(e, t, n, r) {
        for (var _len6 = arguments.length, i = new Array(_len6 > 4 ? _len6 - 4 : 0), _key6 = 4; _key6 < _len6; _key6++) {
          i[_key6 - 4] = arguments[_key6];
        }

        return e ? this._sliceEventStore.apply(this, [mr(e, Os(t, Boolean(n)), r), {}, t, n].concat(i)).bg : [];
      }
    }, {
      key: "_sliceEventStore",
      value: function _sliceEventStore(e, t, n, r) {
        if (e) {
          var _s16 = ii(e, t, Os(n, Boolean(r)), r);

          for (var _len7 = arguments.length, i = new Array(_len7 > 4 ? _len7 - 4 : 0), _key7 = 4; _key7 < _len7; _key7++) {
            i[_key7 - 4] = arguments[_key7];
          }

          return {
            bg: this.sliceEventRanges(_s16.bg, i),
            fg: this.sliceEventRanges(_s16.fg, i)
          };
        }

        return {
          bg: [],
          fg: []
        };
      }
    }, {
      key: "_sliceInteraction",
      value: function _sliceInteraction(e, t, n, r) {
        if (!e) return null;
        var s = ii(e.mutatedEvents, t, Os(n, Boolean(r)), r);

        for (var _len8 = arguments.length, i = new Array(_len8 > 4 ? _len8 - 4 : 0), _key8 = 4; _key8 < _len8; _key8++) {
          i[_key8 - 4] = arguments[_key8];
        }

        return {
          segs: this.sliceEventRanges(s.fg, i),
          affectedInstances: e.affectedEvents.instances,
          isEvent: e.isEvent
        };
      }
    }, {
      key: "_sliceDateSpan",
      value: function _sliceDateSpan(e, t, n, r, i) {
        if (!e) return [];
        var o = Os(t, Boolean(n)),
            a = ir(e.range, o);

        if (a) {
          for (var _len9 = arguments.length, s = new Array(_len9 > 5 ? _len9 - 5 : 0), _key9 = 5; _key9 < _len9; _key9++) {
            s[_key9 - 5] = arguments[_key9];
          }

          var _t26 = function (e, t, n) {
            var r = Ar({
              editable: !1
            }, n),
                i = wr(r.refined, r.extra, "", e.allDay, !0, n);
            return {
              def: i,
              ui: ci(i, t),
              instance: pr(i.defId, e.range),
              range: e.range,
              isStart: !0,
              isEnd: !0
            };
          }(e = Object.assign(Object.assign({}, e), {
            range: a
          }), r, i),
              _n37 = this.sliceRange.apply(this, [e.range].concat(s));

          var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = _n37[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var _e43 = _step25.value;
              _e43.eventRange = _t26;
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
                _iterator25["return"]();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }

          return _n37;
        }

        return [];
      }
    }, {
      key: "sliceEventRanges",
      value: function sliceEventRanges(e, t) {
        var n = [];
        var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = e[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var _r38 = _step26.value;
            n.push.apply(n, _toConsumableArray(this.sliceEventRange(_r38, t)));
          }
        } catch (err) {
          _didIteratorError26 = true;
          _iteratorError26 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
              _iterator26["return"]();
            }
          } finally {
            if (_didIteratorError26) {
              throw _iteratorError26;
            }
          }
        }

        return n;
      }
    }, {
      key: "sliceEventRange",
      value: function sliceEventRange(e, t) {
        var n = e.range;
        this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
          start: n.start,
          end: wt(n.start, 1)
        });
        var r = this.sliceRange.apply(this, [n].concat(_toConsumableArray(t)));
        var _iteratorNormalCompletion27 = true;
        var _didIteratorError27 = false;
        var _iteratorError27 = undefined;

        try {
          for (var _iterator27 = r[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
            var _t27 = _step27.value;
            _t27.eventRange = e, _t27.isStart = e.isStart && _t27.isStart, _t27.isEnd = e.isEnd && _t27.isEnd;
          }
        } catch (err) {
          _didIteratorError27 = true;
          _iteratorError27 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
              _iterator27["return"]();
            }
          } finally {
            if (_didIteratorError27) {
              throw _iteratorError27;
            }
          }
        }

        return r;
      }
    }]);

    return Is;
  }();

  function Os(e, t) {
    var n = e.activeRange;
    return t ? n : {
      start: Ct(n.start, e.slotMinTime.milliseconds),
      end: Ct(n.end, e.slotMaxTime.milliseconds - 864e5)
    };
  }

  function Ns(e, t, n) {
    var r = e.mutatedEvents.instances;

    for (var _e44 in r) {
      if (!ar(t.validRange, r[_e44].range)) return !1;
    }

    return Hs({
      eventDrag: e
    }, n);
  }

  function Ps(e, t, n) {
    return !!ar(t.validRange, e.range) && Hs({
      dateSelection: e
    }, n);
  }

  function Hs(e, t) {
    var n = t.getCurrentData(),
        r = Object.assign({
      businessHours: n.businessHours,
      dateSelection: "",
      eventStore: n.eventStore,
      eventUiBases: n.eventUiBases,
      eventSelection: "",
      eventDrag: null,
      eventResize: null
    }, e);
    return (t.pluginHooks.isPropsValid || Bs)(r, t);
  }

  function Bs(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var r = arguments.length > 3 ? arguments[3] : undefined;
    return !(e.eventDrag && !function (e, t, n, r) {
      var i = t.getCurrentData(),
          s = e.eventDrag,
          o = s.mutatedEvents,
          a = o.defs,
          l = o.instances,
          c = li(a, s.isEvent ? e.eventUiBases : {
        "": i.selectionConfig
      });
      r && (c = An(c, r));
      var d = (g = e.eventStore, p = s.affectedEvents.instances, {
        defs: g.defs,
        instances: Sn(g.instances, function (e) {
          return !p[e.instanceId];
        })
      }),
          u = d.defs,
          h = d.instances,
          f = li(u, e.eventUiBases);
      var g, p;

      for (var _r39 in l) {
        var _o13 = l[_r39],
            _g3 = _o13.range,
            _p2 = c[_o13.defId],
            _m = a[_o13.defId];
        if (!js(_p2.constraints, _g3, d, e.businessHours, t)) return !1;

        var _v = t.options.eventOverlap,
            _y = "function" == typeof _v ? _v : null;

        for (var _e45 in h) {
          var _n38 = h[_e45];

          if (or(_g3, _n38.range)) {
            if (!1 === f[_n38.defId].overlap && s.isEvent) return !1;
            if (!1 === _p2.overlap) return !1;
            if (_y && !_y(new ti(t, u[_n38.defId], _n38), new ti(t, _m, _o13))) return !1;
          }
        }

        var _b = i.eventStore;
        var _iteratorNormalCompletion28 = true;
        var _didIteratorError28 = false;
        var _iteratorError28 = undefined;

        try {
          for (var _iterator28 = _p2.allows[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
            var _e46 = _step28.value;

            var _i21 = void 0,
                _s17 = Object.assign(Object.assign({}, n), {
              range: _o13.range,
              allDay: _m.allDay
            }),
                _a6 = _b.defs[_m.defId],
                _l6 = _b.instances[_r39];

            if (_i21 = _a6 ? new ti(t, _a6, _l6) : new ti(t, _m), !_e46(Zr(_s17, t), _i21)) return !1;
          }
        } catch (err) {
          _didIteratorError28 = true;
          _iteratorError28 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
              _iterator28["return"]();
            }
          } finally {
            if (_didIteratorError28) {
              throw _iteratorError28;
            }
          }
        }
      }

      return !0;
    }(e, t, n, r)) && !(e.dateSelection && !function (e, t, n, r) {
      var i = e.eventStore,
          s = i.defs,
          o = i.instances,
          a = e.dateSelection,
          l = a.range,
          _t$getCurrentData = t.getCurrentData(),
          c = _t$getCurrentData.selectionConfig;

      r && (c = r(c));
      if (!js(c.constraints, l, i, e.businessHours, t)) return !1;
      var d = t.options.selectOverlap,
          u = "function" == typeof d ? d : null;

      for (var _e47 in o) {
        var _n39 = o[_e47];

        if (or(l, _n39.range)) {
          if (!1 === c.overlap) return !1;
          if (u && !u(new ti(t, s[_n39.defId], _n39), null)) return !1;
        }
      }

      var _iteratorNormalCompletion29 = true;
      var _didIteratorError29 = false;
      var _iteratorError29 = undefined;

      try {
        for (var _iterator29 = c.allows[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
          var _e48 = _step29.value;

          var _r40 = Object.assign(Object.assign({}, n), a);

          if (!_e48(Zr(_r40, t), null)) return !1;
        }
      } catch (err) {
        _didIteratorError29 = true;
        _iteratorError29 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) {
            _iterator29["return"]();
          }
        } finally {
          if (_didIteratorError29) {
            throw _iteratorError29;
          }
        }
      }

      return !0;
    }(e, t, n, r));
  }

  function js(e, t, n, r, i) {
    var _iteratorNormalCompletion30 = true;
    var _didIteratorError30 = false;
    var _iteratorError30 = undefined;

    try {
      for (var _iterator30 = e[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
        var _s18 = _step30.value;
        if (!Ws(zs(_s18, t, n, r, i), t)) return !1;
      }
    } catch (err) {
      _didIteratorError30 = true;
      _iteratorError30 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) {
          _iterator30["return"]();
        }
      } finally {
        if (_didIteratorError30) {
          throw _iteratorError30;
        }
      }
    }

    return !0;
  }

  function zs(e, t, n, r, i) {
    return "businessHours" === e ? Us(mr(r, t, i)) : "string" == typeof e ? Us(kr(n, function (t) {
      return t.groupId === e;
    })) : "object" == _typeof(e) && e ? Us(mr(e, t, i)) : [];
  }

  function Us(e) {
    var t = e.instances,
        n = [];

    for (var _e49 in t) {
      n.push(t[_e49].range);
    }

    return n;
  }

  function Ws(e, t) {
    var _iteratorNormalCompletion31 = true;
    var _didIteratorError31 = false;
    var _iteratorError31 = undefined;

    try {
      for (var _iterator31 = e[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
        var _n40 = _step31.value;
        if (ar(_n40, t)) return !0;
      }
    } catch (err) {
      _didIteratorError31 = true;
      _iteratorError31 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) {
          _iterator31["return"]();
        }
      } finally {
        if (_didIteratorError31) {
          throw _iteratorError31;
        }
      }
    }

    return !1;
  }

  var Ls = /^(visible|hidden)$/;

  var Fs =
  /*#__PURE__*/
  function (_Gn8) {
    _inherits(Fs, _Gn8);

    function Fs() {
      var _this17;

      _classCallCheck(this, Fs);

      _this17 = _possibleConstructorReturn(this, _getPrototypeOf(Fs).apply(this, arguments)), _this17.handleEl = function (e) {
        _this17.el = e, Qn(_this17.props.elRef, e);
      };
      return _this17;
    }

    _createClass(Fs, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = e.liquid,
            n = e.liquidIsAbsolute,
            r = t && n,
            i = ["fc-scroller"];
        return t && (n ? i.push("fc-scroller-liquid-absolute") : i.push("fc-scroller-liquid")), p("div", {
          ref: this.handleEl,
          className: i.join(" "),
          style: {
            overflowX: e.overflowX,
            overflowY: e.overflowY,
            left: r && -(e.overcomeLeft || 0) || "",
            right: r && -(e.overcomeRight || 0) || "",
            bottom: r && -(e.overcomeBottom || 0) || "",
            marginLeft: !r && -(e.overcomeLeft || 0) || "",
            marginRight: !r && -(e.overcomeRight || 0) || "",
            marginBottom: !r && -(e.overcomeBottom || 0) || "",
            maxHeight: e.maxHeight || ""
          }
        }, e.children);
      }
    }, {
      key: "needsXScrolling",
      value: function needsXScrolling() {
        if (Ls.test(this.props.overflowX)) return !1;
        var e = this.el,
            t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(),
            n = e.children;

        for (var _e50 = 0; _e50 < n.length; _e50 += 1) {
          if (n[_e50].getBoundingClientRect().width > t) return !0;
        }

        return !1;
      }
    }, {
      key: "needsYScrolling",
      value: function needsYScrolling() {
        if (Ls.test(this.props.overflowY)) return !1;
        var e = this.el,
            t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(),
            n = e.children;

        for (var _e51 = 0; _e51 < n.length; _e51 += 1) {
          if (n[_e51].getBoundingClientRect().height > t) return !0;
        }

        return !1;
      }
    }, {
      key: "getXScrollbarWidth",
      value: function getXScrollbarWidth() {
        return Ls.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
      }
    }, {
      key: "getYScrollbarWidth",
      value: function getYScrollbarWidth() {
        return Ls.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
      }
    }]);

    return Fs;
  }(Gn);

  var Vs =
  /*#__PURE__*/
  function () {
    function Vs(e) {
      var _this18 = this;

      _classCallCheck(this, Vs);

      this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = function (e, t) {
        var n = _this18.depths,
            r = _this18.currentMap,
            i = !1,
            s = !1;
        null !== e ? (i = t in r, r[t] = e, n[t] = (n[t] || 0) + 1, s = !0) : (n[t] -= 1, n[t] || (delete r[t], delete _this18.callbackMap[t], i = !0)), _this18.masterCallback && (i && _this18.masterCallback(null, String(t)), s && _this18.masterCallback(e, String(t)));
      };
    }

    _createClass(Vs, [{
      key: "createRef",
      value: function createRef(e) {
        var _this19 = this;

        var t = this.callbackMap[e];
        return t || (t = this.callbackMap[e] = function (t) {
          _this19.handleValue(t, String(e));
        }), t;
      }
    }, {
      key: "collect",
      value: function collect(e, t, n) {
        return kn(this.currentMap, e, t, n);
      }
    }, {
      key: "getAll",
      value: function getAll() {
        return wn(this.currentMap);
      }
    }]);

    return Vs;
  }();

  function Gs(e) {
    var t = Pe(e, ".fc-scrollgrid-shrink"),
        n = 0;
    var _iteratorNormalCompletion32 = true;
    var _didIteratorError32 = false;
    var _iteratorError32 = undefined;

    try {
      for (var _iterator32 = t[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
        var _e52 = _step32.value;
        n = Math.max(n, dt(_e52));
      }
    } catch (err) {
      _didIteratorError32 = true;
      _iteratorError32 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) {
          _iterator32["return"]();
        }
      } finally {
        if (_didIteratorError32) {
          throw _iteratorError32;
        }
      }
    }

    return Math.ceil(n);
  }

  function Qs(e, t) {
    return e.liquid && t.liquid;
  }

  function qs(e, t) {
    return null != t.maxHeight || Qs(e, t);
  }

  function Ys(e, t, n, r) {
    var i = n.expandRows;
    return "function" == typeof t.content ? t.content(n) : p("table", {
      role: "presentation",
      className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
      style: {
        minWidth: n.tableMinWidth,
        width: n.clientWidth,
        height: i ? n.clientHeight : ""
      }
    }, n.tableColGroupNode, p(r ? "thead" : "tbody", {
      role: "presentation"
    }, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent));
  }

  function Zs(e, t) {
    return St(e, t, Cn);
  }

  function Xs(e, t) {
    var n = [];
    var _iteratorNormalCompletion33 = true;
    var _didIteratorError33 = false;
    var _iteratorError33 = undefined;

    try {
      for (var _iterator33 = e[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
        var _r41 = _step33.value;

        var _e53 = _r41.span || 1;

        for (var _i22 = 0; _i22 < _e53; _i22 += 1) {
          n.push(p("col", {
            style: {
              width: "shrink" === _r41.width ? $s(t) : _r41.width || "",
              minWidth: _r41.minWidth || ""
            }
          }));
        }
      }
    } catch (err) {
      _didIteratorError33 = true;
      _iteratorError33 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion33 && _iterator33["return"] != null) {
          _iterator33["return"]();
        }
      } finally {
        if (_didIteratorError33) {
          throw _iteratorError33;
        }
      }
    }

    return p.apply(void 0, ["colgroup", {}].concat(n));
  }

  function $s(e) {
    return null == e ? 4 : e;
  }

  function Js(e) {
    var _iteratorNormalCompletion34 = true;
    var _didIteratorError34 = false;
    var _iteratorError34 = undefined;

    try {
      for (var _iterator34 = e[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
        var _t28 = _step34.value;
        if ("shrink" === _t28.width) return !0;
      }
    } catch (err) {
      _didIteratorError34 = true;
      _iteratorError34 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion34 && _iterator34["return"] != null) {
          _iterator34["return"]();
        }
      } finally {
        if (_didIteratorError34) {
          throw _iteratorError34;
        }
      }
    }

    return !1;
  }

  function Ks(e, t) {
    var n = ["fc-scrollgrid", t.theme.getClass("table")];
    return e && n.push("fc-scrollgrid-liquid"), n;
  }

  function eo(e, t) {
    var n = ["fc-scrollgrid-section", "fc-scrollgrid-section-" + e.type, e.className];
    return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
  }

  function to(e) {
    return p("div", {
      className: "fc-scrollgrid-sticky-shim",
      style: {
        width: e.clientWidth,
        minWidth: e.tableMinWidth
      }
    });
  }

  function no(e) {
    var t = e.stickyHeaderDates;
    return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t;
  }

  function ro(e) {
    var t = e.stickyFooterScrollbar;
    return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t;
  }

  var io =
  /*#__PURE__*/
  function (_Gn9) {
    _inherits(io, _Gn9);

    function io() {
      var _this20;

      _classCallCheck(this, io);

      _this20 = _possibleConstructorReturn(this, _getPrototypeOf(io).apply(this, arguments)), _this20.processCols = Gt(function (e) {
        return e;
      }, Zs), _this20.renderMicroColGroup = Gt(Xs), _this20.scrollerRefs = new Vs(), _this20.scrollerElRefs = new Vs(_this20._handleScrollerEl.bind(_assertThisInitialized(_this20))), _this20.state = {
        shrinkWidth: null,
        forceYScrollbars: !1,
        scrollerClientWidths: {},
        scrollerClientHeights: {}
      }, _this20.handleSizing = function () {
        _this20.safeSetState(Object.assign({
          shrinkWidth: _this20.computeShrinkWidth()
        }, _this20.computeScrollerDims()));
      };
      return _this20;
    }

    _createClass(io, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.state,
            n = this.context,
            r = e.sections || [],
            i = this.processCols(e.cols),
            s = this.renderMicroColGroup(i, t.shrinkWidth),
            o = Ks(e.liquid, n);
        e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
        var a,
            l = r.length,
            c = 0,
            d = [],
            u = [],
            h = [];

        for (; c < l && "header" === (a = r[c]).type;) {
          d.push(this.renderSection(a, s, !0)), c += 1;
        }

        for (; c < l && "body" === (a = r[c]).type;) {
          u.push(this.renderSection(a, s, !1)), c += 1;
        }

        for (; c < l && "footer" === (a = r[c]).type;) {
          h.push(this.renderSection(a, s, !0)), c += 1;
        }

        var f = !Ti();
        var g = {
          role: "rowgroup"
        };
        return p("table", {
          role: "grid",
          className: o.join(" "),
          style: {
            height: e.height
          }
        }, Boolean(!f && d.length) && p.apply(void 0, ["thead", g].concat(d)), Boolean(!f && u.length) && p.apply(void 0, ["tbody", g].concat(u)), Boolean(!f && h.length) && p.apply(void 0, ["tfoot", g].concat(h)), f && p.apply(void 0, ["tbody", g].concat(d, u, h)));
      }
    }, {
      key: "renderSection",
      value: function renderSection(e, t, n) {
        return "outerContent" in e ? p(y, {
          key: e.key
        }, e.outerContent) : p("tr", {
          key: e.key,
          role: "presentation",
          className: eo(e, this.props.liquid).join(" ")
        }, this.renderChunkTd(e, t, e.chunk, n));
      }
    }, {
      key: "renderChunkTd",
      value: function renderChunkTd(e, t, n, r) {
        if ("outerContent" in n) return n.outerContent;
        var i = this.props,
            _this$state = this.state,
            s = _this$state.forceYScrollbars,
            o = _this$state.scrollerClientWidths,
            a = _this$state.scrollerClientHeights,
            l = qs(i, e),
            c = Qs(i, e),
            d = i.liquid ? s ? "scroll" : l ? "auto" : "hidden" : "visible",
            u = e.key,
            h = Ys(e, n, {
          tableColGroupNode: t,
          tableMinWidth: "",
          clientWidth: i.collapsibleWidth || void 0 === o[u] ? null : o[u],
          clientHeight: void 0 !== a[u] ? a[u] : null,
          expandRows: e.expandRows,
          syncRowHeights: !1,
          rowSyncHeights: [],
          reportRowHeightChange: function reportRowHeightChange() {}
        }, r);
        return p(r ? "th" : "td", {
          ref: n.elRef,
          role: "presentation"
        }, p("div", {
          className: "fc-scroller-harness" + (c ? " fc-scroller-harness-liquid" : "")
        }, p(Fs, {
          ref: this.scrollerRefs.createRef(u),
          elRef: this.scrollerElRefs.createRef(u),
          overflowY: d,
          overflowX: i.liquid ? "hidden" : "visible",
          maxHeight: e.maxHeight,
          liquid: c,
          liquidIsAbsolute: !0
        }, h)));
      }
    }, {
      key: "_handleScrollerEl",
      value: function _handleScrollerEl(e, t) {
        var n = function (e, t) {
          var _iteratorNormalCompletion35 = true;
          var _didIteratorError35 = false;
          var _iteratorError35 = undefined;

          try {
            for (var _iterator35 = e[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
              var _n41 = _step35.value;
              if (_n41.key === t) return _n41;
            }
          } catch (err) {
            _didIteratorError35 = true;
            _iteratorError35 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion35 && _iterator35["return"] != null) {
                _iterator35["return"]();
              }
            } finally {
              if (_didIteratorError35) {
                throw _iteratorError35;
              }
            }
          }

          return null;
        }(this.props.sections, t);

        n && Qn(n.chunk.scrollerElRef, e);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.handleSizing();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.context.removeResizeHandler(this.handleSizing);
      }
    }, {
      key: "computeShrinkWidth",
      value: function computeShrinkWidth() {
        return Js(this.props.cols) ? Gs(this.scrollerElRefs.getAll()) : 0;
      }
    }, {
      key: "computeScrollerDims",
      value: function computeScrollerDims() {
        var e = $i(),
            t = this.scrollerRefs,
            n = this.scrollerElRefs,
            r = !1,
            i = {},
            s = {};

        for (var _e54 in t.currentMap) {
          var _n42 = t.currentMap[_e54];

          if (_n42 && _n42.needsYScrolling()) {
            r = !0;
            break;
          }
        }

        var _iteratorNormalCompletion36 = true;
        var _didIteratorError36 = false;
        var _iteratorError36 = undefined;

        try {
          for (var _iterator36 = this.props.sections[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
            var _t29 = _step36.value;
            var _o14 = _t29.key,
                _a7 = n.currentMap[_o14];

            if (_a7) {
              var _t30 = _a7.parentNode;
              i[_o14] = Math.floor(_t30.getBoundingClientRect().width - (r ? e.y : 0)), s[_o14] = Math.floor(_t30.getBoundingClientRect().height);
            }
          }
        } catch (err) {
          _didIteratorError36 = true;
          _iteratorError36 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion36 && _iterator36["return"] != null) {
              _iterator36["return"]();
            }
          } finally {
            if (_didIteratorError36) {
              throw _iteratorError36;
            }
          }
        }

        return {
          forceYScrollbars: r,
          scrollerClientWidths: i,
          scrollerClientHeights: s
        };
      }
    }]);

    return io;
  }(Gn);

  io.addStateEquality({
    scrollerClientWidths: Cn,
    scrollerClientHeights: Cn
  });

  var so =
  /*#__PURE__*/
  function (_Gn10) {
    _inherits(so, _Gn10);

    function so() {
      var _this21;

      _classCallCheck(this, so);

      _this21 = _possibleConstructorReturn(this, _getPrototypeOf(so).apply(this, arguments)), _this21.handleEl = function (e) {
        _this21.el = e, e && oi(e, _this21.props.seg);
      };
      return _this21;
    }

    _createClass(so, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.seg,
            i = r.eventRange,
            s = i.ui,
            o = {
          event: new ti(t, i.def, i.instance),
          view: t.viewApi,
          timeText: e.timeText,
          textColor: s.textColor,
          backgroundColor: s.backgroundColor,
          borderColor: s.borderColor,
          isDraggable: !e.disableDragging && hi(r, t),
          isStartResizable: !e.disableResizing && fi(r, t),
          isEndResizable: !e.disableResizing && gi(r),
          isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
          isStart: Boolean(r.isStart),
          isEnd: Boolean(r.isEnd),
          isPast: Boolean(e.isPast),
          isFuture: Boolean(e.isFuture),
          isToday: Boolean(e.isToday),
          isSelected: Boolean(e.isSelected),
          isDragging: Boolean(e.isDragging),
          isResizing: Boolean(e.isResizing)
        };
        return p(Jn, Object.assign({}, e, {
          elRef: this.handleEl,
          elClasses: [].concat(_toConsumableArray(vi(o)), _toConsumableArray(r.eventRange.ui.classNames), _toConsumableArray(e.elClasses || [])),
          renderProps: o,
          generatorName: "eventContent",
          customGenerator: n.eventContent,
          defaultGenerator: e.defaultGenerator,
          classNameGenerator: n.eventClassNames,
          didMount: n.eventDidMount,
          willUnmount: n.eventWillUnmount
        }));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e) {
        this.el && this.props.seg !== e.seg && oi(this.el, this.props.seg);
      }
    }]);

    return so;
  }(Gn);

  var oo =
  /*#__PURE__*/
  function (_Gn11) {
    _inherits(oo, _Gn11);

    function oo() {
      _classCallCheck(this, oo);

      return _possibleConstructorReturn(this, _getPrototypeOf(oo).apply(this, arguments));
    }

    _createClass(oo, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.seg,
            i = r.eventRange.ui,
            s = pi(r, n.eventTimeFormat || e.defaultTimeFormat, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
        return p(so, Object.assign({}, e, {
          elTag: "a",
          elStyle: {
            borderColor: i.borderColor,
            backgroundColor: i.backgroundColor
          },
          elAttrs: bi(r, t),
          defaultGenerator: ao,
          timeText: s
        }), function (e, t) {
          return p(y, null, p(e, {
            elTag: "div",
            elClasses: ["fc-event-main"],
            elStyle: {
              color: t.textColor
            }
          }), Boolean(t.isStartResizable) && p("div", {
            className: "fc-event-resizer fc-event-resizer-start"
          }), Boolean(t.isEndResizable) && p("div", {
            className: "fc-event-resizer fc-event-resizer-end"
          }));
        });
      }
    }]);

    return oo;
  }(Gn);

  function ao(e) {
    return p("div", {
      className: "fc-event-main-frame"
    }, e.timeText && p("div", {
      className: "fc-event-time"
    }, e.timeText), p("div", {
      className: "fc-event-title-container"
    }, p("div", {
      className: "fc-event-title fc-sticky"
    }, e.event.title || p(y, null, " "))));
  }

  var lo = function lo(e) {
    return p(Ln.Consumer, null, function (t) {
      var n = t.options,
          r = {
        isAxis: e.isAxis,
        date: t.dateEnv.toDate(e.date),
        view: t.viewApi
      };
      return p(Jn, Object.assign({}, e, {
        elTag: e.elTag || "div",
        renderProps: r,
        generatorName: "nowIndicatorContent",
        customGenerator: n.nowIndicatorContent,
        classNameGenerator: n.nowIndicatorClassNames,
        didMount: n.nowIndicatorDidMount,
        willUnmount: n.nowIndicatorWillUnmount
      }));
    });
  },
      co = an({
    day: "numeric"
  });

  var uo =
  /*#__PURE__*/
  function (_Gn12) {
    _inherits(uo, _Gn12);

    function uo() {
      var _this22;

      _classCallCheck(this, uo);

      _this22 = _possibleConstructorReturn(this, _getPrototypeOf(uo).apply(this, arguments)), _this22.refineRenderProps = Qt(fo);
      return _this22;
    }

    _createClass(uo, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = this.refineRenderProps({
          date: e.date,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          isMonthStart: e.isMonthStart || !1,
          showDayNumber: e.showDayNumber,
          extraRenderProps: e.extraRenderProps,
          viewApi: t.viewApi,
          dateEnv: t.dateEnv,
          monthStartFormat: n.monthStartFormat
        });
        return p(Jn, Object.assign({}, e, {
          elClasses: [].concat(_toConsumableArray(Vi(r, t.theme)), _toConsumableArray(e.elClasses || [])),
          elAttrs: Object.assign(Object.assign({}, e.elAttrs), r.isDisabled ? {} : {
            "data-date": Wt(e.date)
          }),
          renderProps: r,
          generatorName: "dayCellContent",
          customGenerator: n.dayCellContent,
          defaultGenerator: e.defaultGenerator,
          classNameGenerator: r.isDisabled ? void 0 : n.dayCellClassNames,
          didMount: n.dayCellDidMount,
          willUnmount: n.dayCellWillUnmount
        }));
      }
    }]);

    return uo;
  }(Gn);

  function ho(e) {
    return Boolean(e.dayCellContent || Yn("dayCellContent", e));
  }

  function fo(e) {
    var t = e.date,
        n = e.dateEnv,
        r = e.dateProfile,
        i = e.isMonthStart,
        s = Fi(t, e.todayRange, null, r),
        o = e.showDayNumber ? n.format(t, i ? e.monthStartFormat : co) : "";
    return Object.assign(Object.assign(Object.assign({
      date: n.toDate(t),
      view: e.viewApi
    }, s), {
      isMonthStart: i,
      dayNumberText: o
    }), e.extraRenderProps);
  }

  var go =
  /*#__PURE__*/
  function (_Gn13) {
    _inherits(go, _Gn13);

    function go() {
      _classCallCheck(this, go);

      return _possibleConstructorReturn(this, _getPrototypeOf(go).apply(this, arguments));
    }

    _createClass(go, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = e.seg;
        return p(so, {
          elTag: "div",
          elClasses: ["fc-bg-event"],
          elStyle: {
            backgroundColor: t.eventRange.ui.backgroundColor
          },
          defaultGenerator: po,
          seg: t,
          timeText: "",
          isDragging: !1,
          isResizing: !1,
          isDateSelecting: !1,
          isSelected: !1,
          isPast: e.isPast,
          isFuture: e.isFuture,
          isToday: e.isToday,
          disableDragging: !0,
          disableResizing: !0
        });
      }
    }]);

    return go;
  }(Gn);

  function po(e) {
    var t = e.event.title;
    return t && p("div", {
      className: "fc-event-title"
    }, e.event.title);
  }

  function mo(e) {
    return p("div", {
      className: "fc-" + e
    });
  }

  var vo = function vo(e) {
    return p(Ln.Consumer, null, function (t) {
      var n = t.dateEnv,
          r = t.options,
          i = e.date,
          s = r.weekNumberFormat || e.defaultFormat,
          o = {
        num: n.computeWeekNumber(i),
        text: n.format(i, s),
        date: i
      };
      return p(Jn, Object.assign({}, e, {
        renderProps: o,
        generatorName: "weekNumberContent",
        customGenerator: r.weekNumberContent,
        defaultGenerator: yo,
        classNameGenerator: r.weekNumberClassNames,
        didMount: r.weekNumberDidMount,
        willUnmount: r.weekNumberWillUnmount
      }));
    });
  };

  function yo(e) {
    return e.text;
  }

  var bo =
  /*#__PURE__*/
  function (_Gn14) {
    _inherits(bo, _Gn14);

    function bo() {
      var _this23;

      _classCallCheck(this, bo);

      _this23 = _possibleConstructorReturn(this, _getPrototypeOf(bo).apply(this, arguments)), _this23.state = {
        titleId: We()
      }, _this23.handleRootEl = function (e) {
        _this23.rootEl = e, _this23.props.elRef && Qn(_this23.props.elRef, e);
      }, _this23.handleDocumentMouseDown = function (e) {
        var t = ze(e);
        _this23.rootEl.contains(t) || _this23.handleCloseClick();
      }, _this23.handleDocumentKeyDown = function (e) {
        "Escape" === e.key && _this23.handleCloseClick();
      }, _this23.handleCloseClick = function () {
        var e = _this23.props.onClose;
        e && e();
      };
      return _this23;
    }

    _createClass(bo, [{
      key: "render",
      value: function render() {
        var _this$context3 = this.context,
            e = _this$context3.theme,
            t = _this$context3.options,
            n = this.props,
            r = this.state,
            i = ["fc-popover", e.getClass("popover")].concat(n.extraClassNames || []);
        return fe(p("div", Object.assign({}, n.extraAttrs, {
          id: n.id,
          className: i.join(" "),
          "aria-labelledby": r.titleId,
          ref: this.handleRootEl
        }), p("div", {
          className: "fc-popover-header " + e.getClass("popoverHeader")
        }, p("span", {
          className: "fc-popover-title",
          id: r.titleId
        }, n.title), p("span", {
          className: "fc-popover-close " + e.getIconClass("close"),
          title: t.closeHint,
          onClick: this.handleCloseClick
        })), p("div", {
          className: "fc-popover-body " + e.getClass("popoverContent")
        }, n.children)), n.parentEl);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
      }
    }, {
      key: "updateSize",
      value: function updateSize() {
        var e = this.context.isRtl,
            _this$props5 = this.props,
            t = _this$props5.alignmentEl,
            n = _this$props5.alignGridTop,
            r = this.rootEl,
            i = function (e) {
          var t = ns(e),
              n = e.getBoundingClientRect();
          var _iteratorNormalCompletion37 = true;
          var _didIteratorError37 = false;
          var _iteratorError37 = undefined;

          try {
            for (var _iterator37 = t[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
              var _e55 = _step37.value;

              var _t31 = Hi(n, _e55.getBoundingClientRect());

              if (!_t31) return null;
              n = _t31;
            }
          } catch (err) {
            _didIteratorError37 = true;
            _iteratorError37 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion37 && _iterator37["return"] != null) {
                _iterator37["return"]();
              }
            } finally {
              if (_didIteratorError37) {
                throw _iteratorError37;
              }
            }
          }

          return n;
        }(t);

        if (i) {
          var _s19 = r.getBoundingClientRect(),
              _o15 = n ? Oe(t, ".fc-scrollgrid").getBoundingClientRect().top : i.top,
              _a8 = e ? i.right - _s19.width : i.left;

          _o15 = Math.max(_o15, 10), _a8 = Math.min(_a8, document.documentElement.clientWidth - 10 - _s19.width), _a8 = Math.max(_a8, 10);

          var _l7 = r.offsetParent.getBoundingClientRect();

          Be(r, {
            top: _o15 - _l7.top,
            left: _a8 - _l7.left
          });
        }
      }
    }]);

    return bo;
  }(Gn);

  var Eo =
  /*#__PURE__*/
  function (_ls) {
    _inherits(Eo, _ls);

    function Eo() {
      var _this24;

      _classCallCheck(this, Eo);

      _this24 = _possibleConstructorReturn(this, _getPrototypeOf(Eo).apply(this, arguments)), _this24.handleRootEl = function (e) {
        _this24.rootEl = e, e ? _this24.context.registerInteractiveComponent(_assertThisInitialized(_this24), {
          el: e,
          useEventCenter: !1
        }) : _this24.context.unregisterInteractiveComponent(_assertThisInitialized(_this24));
      };
      return _this24;
    }

    _createClass(Eo, [{
      key: "render",
      value: function render() {
        var _this$context4 = this.context,
            e = _this$context4.options,
            t = _this$context4.dateEnv,
            n = this.props,
            r = n.startDate,
            i = n.todayRange,
            s = n.dateProfile,
            o = t.format(r, e.dayPopoverFormat);
        return p(uo, {
          elRef: this.handleRootEl,
          date: r,
          dateProfile: s,
          todayRange: i
        }, function (t, r, i) {
          return p(bo, {
            elRef: i.ref,
            id: n.id,
            title: o,
            extraClassNames: ["fc-more-popover"].concat(i.className || []),
            extraAttrs: i,
            parentEl: n.parentEl,
            alignmentEl: n.alignmentEl,
            alignGridTop: n.alignGridTop,
            onClose: n.onClose
          }, ho(e) && p(t, {
            elTag: "div",
            elClasses: ["fc-more-popover-misc"]
          }), n.children);
        });
      }
    }, {
      key: "queryHit",
      value: function queryHit(e, t, n, r) {
        var i = this.rootEl,
            s = this.props;
        return e >= 0 && e < n && t >= 0 && t < r ? {
          dateProfile: s.dateProfile,
          dateSpan: Object.assign({
            allDay: !s.forceTimed,
            range: {
              start: s.startDate,
              end: s.endDate
            }
          }, s.extraDateSpan),
          dayEl: i,
          rect: {
            left: 0,
            top: 0,
            right: n,
            bottom: r
          },
          layer: 1
        } : null;
      }
    }]);

    return Eo;
  }(ls);

  var So =
  /*#__PURE__*/
  function (_Gn15) {
    _inherits(So, _Gn15);

    function So() {
      var _this25;

      _classCallCheck(this, So);

      _this25 = _possibleConstructorReturn(this, _getPrototypeOf(So).apply(this, arguments)), _this25.state = {
        isPopoverOpen: !1,
        popoverId: We()
      }, _this25.handleLinkEl = function (e) {
        _this25.linkEl = e, _this25.props.elRef && Qn(_this25.props.elRef, e);
      }, _this25.handleClick = function (e) {
        var _assertThisInitialize = _assertThisInitialized(_this25),
            t = _assertThisInitialize.props,
            n = _assertThisInitialize.context,
            r = n.options.moreLinkClick,
            i = Do(t).start;

        function s(e) {
          var _e$eventRange3 = e.eventRange,
              t = _e$eventRange3.def,
              r = _e$eventRange3.instance,
              i = _e$eventRange3.range;
          return {
            event: new ti(n, t, r),
            start: n.dateEnv.toDate(i.start),
            end: n.dateEnv.toDate(i.end),
            isStart: e.isStart,
            isEnd: e.isEnd
          };
        }

        "function" == typeof r && (r = r({
          date: i,
          allDay: Boolean(t.allDayDate),
          allSegs: t.allSegs.map(s),
          hiddenSegs: t.hiddenSegs.map(s),
          jsEvent: e,
          view: n.viewApi
        })), r && "popover" !== r ? "string" == typeof r && n.calendarApi.zoomTo(i, r) : _this25.setState({
          isPopoverOpen: !0
        });
      }, _this25.handlePopoverClose = function () {
        _this25.setState({
          isPopoverOpen: !1
        });
      };
      return _this25;
    }

    _createClass(So, [{
      key: "render",
      value: function render() {
        var _this26 = this;

        var e = this.props,
            t = this.state;
        return p(Ln.Consumer, null, function (n) {
          var r = n.viewApi,
              i = n.options,
              s = n.calendarApi,
              o = i.moreLinkText,
              a = e.moreCnt,
              l = Do(e),
              c = "function" == typeof o ? o.call(s, a) : "+".concat(a, " ").concat(o),
              d = at(i.moreLinkHint, [a], c),
              u = {
            num: a,
            shortText: "+" + a,
            text: c,
            view: r
          };
          return p(y, null, Boolean(e.moreCnt) && p(Jn, {
            elTag: e.elTag || "a",
            elRef: _this26.handleLinkEl,
            elClasses: [].concat(_toConsumableArray(e.elClasses || []), ["fc-more-link"]),
            elStyle: e.elStyle,
            elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Qe(_this26.handleClick)), {
              title: d,
              "aria-expanded": t.isPopoverOpen,
              "aria-controls": t.isPopoverOpen ? t.popoverId : ""
            }),
            renderProps: u,
            generatorName: "moreLinkContent",
            customGenerator: i.moreLinkContent,
            defaultGenerator: e.defaultGenerator || Ao,
            classNameGenerator: i.moreLinkClassNames,
            didMount: i.moreLinkDidMount,
            willUnmount: i.moreLinkWillUnmount
          }, e.children), t.isPopoverOpen && p(Eo, {
            id: t.popoverId,
            startDate: l.start,
            endDate: l.end,
            dateProfile: e.dateProfile,
            todayRange: e.todayRange,
            extraDateSpan: e.extraDateSpan,
            parentEl: _this26.parentEl,
            alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : _this26.linkEl,
            alignGridTop: e.alignGridTop,
            forceTimed: e.forceTimed,
            onClose: _this26.handlePopoverClose
          }, e.popoverContent()));
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateParentEl();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.updateParentEl();
      }
    }, {
      key: "updateParentEl",
      value: function updateParentEl() {
        this.linkEl && (this.parentEl = Oe(this.linkEl, ".fc-view-harness"));
      }
    }]);

    return So;
  }(Gn);

  function Ao(e) {
    return e.text;
  }

  function Do(e) {
    if (e.allDayDate) return {
      start: e.allDayDate,
      end: wt(e.allDayDate, 1)
    };
    var t = e.hiddenSegs;
    return {
      start: wo(t),
      end: (n = t, n.reduce(Ro).eventRange.range.end)
    };
    var n;
  }

  function wo(e) {
    return e.reduce(Co).eventRange.range.start;
  }

  function Co(e, t) {
    return e.eventRange.range.start < t.eventRange.range.start ? e : t;
  }

  function Ro(e, t) {
    return e.eventRange.range.end > t.eventRange.range.end ? e : t;
  }

  var xo = {
    __proto__: null,
    BASE_OPTION_DEFAULTS: cn,
    BaseComponent: Gn,
    BgEvent: go,
    CalendarImpl: Ni,
    CalendarRoot: ki,
    ContentContainer: Jn,
    CustomRenderingStore:
    /*#__PURE__*/
    function (_ref5) {
      _inherits(CustomRenderingStore, _ref5);

      function CustomRenderingStore() {
        var _this27;

        _classCallCheck(this, CustomRenderingStore);

        _this27 = _possibleConstructorReturn(this, _getPrototypeOf(CustomRenderingStore).apply(this, arguments)), _this27.map = new Map();
        return _this27;
      }

      _createClass(CustomRenderingStore, [{
        key: "handle",
        value: function handle(e) {
          var t = this.map;
          var n = !1;
          e.isActive ? (t.set(e.id, e), n = !0) : t.has(e.id) && (t["delete"](e.id), n = !0), n && this.set(t);
        }
      }]);

      return CustomRenderingStore;
    }(
    /*#__PURE__*/
    function () {
      function _class() {
        _classCallCheck(this, _class);

        this.handlers = [];
      }

      _createClass(_class, [{
        key: "set",
        value: function set(e) {
          this.currentValue = e;
          var _iteratorNormalCompletion38 = true;
          var _didIteratorError38 = false;
          var _iteratorError38 = undefined;

          try {
            for (var _iterator38 = this.handlers[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
              var _t32 = _step38.value;

              _t32(e);
            }
          } catch (err) {
            _didIteratorError38 = true;
            _iteratorError38 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion38 && _iterator38["return"] != null) {
                _iterator38["return"]();
              }
            } finally {
              if (_didIteratorError38) {
                throw _iteratorError38;
              }
            }
          }
        }
      }, {
        key: "subscribe",
        value: function subscribe(e) {
          this.handlers.push(e), void 0 !== this.currentValue && e(this.currentValue);
        }
      }]);

      return _class;
    }()),
    DateComponent: ls,
    DateEnv: Hn,
    DateProfileGenerator: gr,
    DayCellContainer: uo,
    DayHeader: _s,
    DaySeriesModel: ks,
    DayTableModel: Ms,
    DelayedRunner: Me,
    ElementDragging: ms,
    ElementScrollController: os,
    Emitter: Gr,
    EventContainer: so,
    EventImpl: ti,
    Interaction: Mi,
    MoreLinkContainer: So,
    NamedTimeZoneImpl: function NamedTimeZoneImpl(e) {
      _classCallCheck(this, NamedTimeZoneImpl);

      this.timeZoneName = e;
    },
    NowIndicatorContainer: lo,
    NowTimer: Rs,
    PositionCache: rs,
    RefMap: Vs,
    ScrollController: ss,
    ScrollResponder: Wn,
    Scroller: Fs,
    SegHierarchy: cs,
    SimpleScrollGrid: io,
    Slicer: Is,
    Splitter: Wi,
    StandardEvent: oo,
    TableDateCell: Ds,
    TableDowCell: Cs,
    Theme: Bn,
    ViewContainer: er,
    ViewContextType: Ln,
    WeekNumberContainer: vo,
    WindowScrollController: as,
    addDays: wt,
    addDurations: pt,
    addMs: Ct,
    addWeeks: Dt,
    allowContextMenu: tt,
    allowSelection: Ke,
    applyMutationToEventStore: $r,
    applyStyle: Be,
    asCleanDays: function asCleanDays(e) {
      return e.years || e.months || e.milliseconds ? 0 : e.days;
    },
    asRoughMinutes: function asRoughMinutes(e) {
      return yt(e) / 6e4;
    },
    asRoughMs: yt,
    asRoughSeconds: function asRoughSeconds(e) {
      return yt(e) / 1e3;
    },
    binarySearch: ps,
    buildElAttrs: Zn,
    buildEntryKey: us,
    buildEventApis: ri,
    buildEventRangeKey: yi,
    buildIsoString: Ut,
    buildNavLinkAttrs: qi,
    buildSegTimeText: pi,
    collectFromHash: kn,
    combineEventUis: Pr,
    compareByFieldSpecs: rt,
    compareNumbers: lt,
    compareObjs: _n,
    computeEarliestSegStart: wo,
    computeEdges: Ki,
    computeFallbackHeaderFormat: Es,
    computeInnerRect: es,
    computeRect: ts,
    computeShrinkWidth: Gs,
    computeVisibleDayRange: dr,
    config: vs,
    constrainPoint: Bi,
    createDuration: ft,
    createEmptyEventStore: _r,
    createEventInstance: pr,
    createEventUi: Nr,
    createFormatter: an,
    diffDates: hr,
    diffDayAndTime: _t,
    diffDays: xt,
    diffPoints: zi,
    diffWeeks: Rt,
    diffWholeDays: kt,
    diffWholeWeeks: Tt,
    disableCursor: Xe,
    elementClosest: Oe,
    elementMatches: Ne,
    enableCursor: $e,
    eventTupleToStore: Rr,
    filterHash: Sn,
    findDirectChildren: function findDirectChildren(e, t) {
      var n = e instanceof HTMLElement ? [e] : e,
          r = [];

      for (var _e56 = 0; _e56 < n.length; _e56 += 1) {
        var _i23 = n[_e56].children;

        for (var _e57 = 0; _e57 < _i23.length; _e57 += 1) {
          var _n43 = _i23[_e57];
          t && !Ne(_n43, t) || r.push(_n43);
        }
      }

      return r;
    },
    findElements: Pe,
    flexibleCompare: st,
    formatDayString: Wt,
    formatIsoMonthStr: Lt,
    formatIsoTimeString: Ft,
    getAllowYScrolling: qs,
    getCanVGrowWithinCell: Ti,
    getClippingParents: ns,
    getDateMeta: Fi,
    getDayClassNames: Vi,
    getDefaultEventEnd: Xr,
    getElSeg: ai,
    getEntrySpanEnd: ds,
    getEventTargetViaRoot: ze,
    getIsRtlScrollbarOnLeft: Xi,
    getRectCenter: ji,
    getRelevantEvents: xr,
    getScrollGridClassNames: Ks,
    getScrollbarWidths: $i,
    getSectionClassNames: eo,
    getSectionHasLiquidHeight: Qs,
    getSegAnchorAttrs: bi,
    getSegMeta: mi,
    getSlotClassNames: function getSlotClassNames(e, t) {
      var n = ["fc-slot", "fc-slot-" + At[e.dow]];
      return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-slot-past"), e.isFuture && n.push("fc-slot-future")), n;
    },
    getStickyFooterScrollbar: ro,
    getStickyHeaderDates: no,
    getUniqueDomId: We,
    greatestDurationDenominator: Et,
    groupIntersectingEntries: hs,
    guid: Ze,
    hasBgRendering: si,
    hasCustomDayCellContent: ho,
    hasShrinkWidth: Js,
    identity: yn,
    injectStyles: xe,
    interactionSettingsStore: Oi,
    interactionSettingsToStore: Ii,
    intersectRanges: ir,
    intersectRects: Hi,
    intersectSpans: fs,
    isArraysEqual: St,
    isColPropsEqual: Zs,
    isDateSelectionValid: Ps,
    isDateSpansEqual: Ai,
    isInt: ct,
    isInteractionValid: Ns,
    isMultiDayRange: ur,
    isPropsEqual: Cn,
    isPropsValid: Bs,
    isValidDate: jt,
    mapHash: An,
    memoize: Gt,
    memoizeArraylike: function memoizeArraylike(e, t, n) {
      var _this28 = this;

      var r = [],
          i = [];
      return function (s) {
        var o = r.length,
            a = s.length,
            l = 0;

        for (; l < o; l += 1) {
          if (s[l]) {
            if (!St(r[l], s[l])) {
              n && n(i[l]);

              var _r42 = e.apply(_this28, s[l]);

              t && t(_r42, i[l]) || (i[l] = _r42);
            }
          } else n && n(i[l]);
        }

        for (; l < a; l += 1) {
          i[l] = e.apply(_this28, s[l]);
        }

        return r = s, i.splice(a), i;
      };
    },
    memoizeHashlike: function memoizeHashlike(e, t, n) {
      var _this29 = this;

      var r = {},
          i = {};
      return function (s) {
        var o = {};

        for (var _a9 in s) {
          if (i[_a9]) {
            if (St(r[_a9], s[_a9])) o[_a9] = i[_a9];else {
              n && n(i[_a9]);

              var _r43 = e.apply(_this29, s[_a9]);

              o[_a9] = t && t(_r43, i[_a9]) ? i[_a9] : _r43;
            }
          } else o[_a9] = e.apply(_this29, s[_a9]);
        }

        return r = s, i = o, o;
      };
    },
    memoizeObjArg: Qt,
    mergeEventStores: Tr,
    multiplyDuration: mt,
    padStart: ot,
    parseBusinessHours: qr,
    parseClassNames: Mr,
    parseDragMeta: bs,
    parseEventDef: wr,
    parseFieldSpecs: nt,
    parseMarker: Pn,
    pointInsideRect: Pi,
    preventContextMenu: et,
    preventDefault: Le,
    preventSelection: Je,
    rangeContainsMarker: lr,
    rangeContainsRange: ar,
    rangesEqual: sr,
    rangesIntersect: or,
    refineEventDef: Ar,
    refineProps: vn,
    removeElement: Ie,
    removeExact: function removeExact(e, t) {
      var n = 0,
          r = 0;

      for (; r < e.length;) {
        e[r] === t ? (e.splice(r, 1), n += 1) : r += 1;
      }

      return n;
    },
    renderChunkContent: Ys,
    renderFill: mo,
    renderMicroColGroup: Xs,
    renderScrollShim: to,
    requestJson: xi,
    sanitizeShrinkWidth: $s,
    setRef: Qn,
    sliceEventStore: ii,
    sortEventSegs: di,
    startOfDay: Mt,
    translateRect: function translateRect(e, t, n) {
      return {
        left: e.left + t,
        right: e.right + t,
        top: e.top + n,
        bottom: e.bottom + n
      };
    },
    triggerDateSelect: Yr,
    unpromisify: Ci,
    whenTransitionDone: Ge,
    wholeDivideDurations: bt
  },
      _o = {
    __proto__: null,
    createPortal: fe,
    createContext: Un,
    flushSync: jn,
    Component: D,
    Fragment: y,
    cloneElement: function cloneElement(e, n, r) {
      var i,
          s,
          o,
          a = f({}, e.props);

      for (o in n) {
        "key" == o ? i = n[o] : "ref" == o ? s = n[o] : a[o] = n[o];
      }

      return arguments.length > 2 && (a.children = arguments.length > 3 ? t.call(arguments, 2) : r), m(e.type, a, i || e.key, s || e.ref, null);
    },
    createElement: p,
    createRef: v,
    h: p,
    hydrate: function e(t, n) {
      U(t, n, e);
    },

    get isValidElement() {
      return i;
    },

    get options() {
      return n;
    },

    render: U,
    toChildArray: M
  };
  var To = [],
      ko = {
    code: "en",
    week: {
      dow: 0,
      doy: 4
    },
    direction: "ltr",
    buttonText: {
      prev: "prev",
      next: "next",
      prevYear: "prev year",
      nextYear: "next year",
      year: "year",
      today: "today",
      month: "month",
      week: "week",
      day: "day",
      list: "list"
    },
    weekText: "W",
    weekTextLong: "Week",
    closeHint: "Close",
    timeHint: "Time",
    eventHint: "Event",
    allDayText: "all-day",
    moreLinkText: "more",
    noEventsText: "No events to display"
  },
      Mo = Object.assign(Object.assign({}, ko), {
    buttonHints: {
      prev: "Previous $0",
      next: "Next $0",
      today: function today(e, t) {
        return "day" === t ? "Today" : "This " + e;
      }
    },
    viewHint: "$0 view",
    navLinkHint: "Go to $0",
    moreLinkHint: function moreLinkHint(e) {
      return "Show ".concat(e, " more event").concat(1 === e ? "" : "s");
    }
  });

  function Io(e) {
    var t = e.length > 0 ? e[0].code : "en",
        n = To.concat(e),
        r = {
      en: Mo
    };
    var _iteratorNormalCompletion39 = true;
    var _didIteratorError39 = false;
    var _iteratorError39 = undefined;

    try {
      for (var _iterator39 = n[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
        var _e58 = _step39.value;
        r[_e58.code] = _e58;
      }
    } catch (err) {
      _didIteratorError39 = true;
      _iteratorError39 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion39 && _iterator39["return"] != null) {
          _iterator39["return"]();
        }
      } finally {
        if (_didIteratorError39) {
          throw _iteratorError39;
        }
      }
    }

    return {
      map: r,
      defaultCode: t
    };
  }

  function Oo(e, t) {
    return "object" != _typeof(e) || Array.isArray(e) ? function (e, t) {
      var n = [].concat(e || []),
          r = function (e, t) {
        for (var _n44 = 0; _n44 < e.length; _n44 += 1) {
          var _r44 = e[_n44].toLocaleLowerCase().split("-");

          for (var _e59 = _r44.length; _e59 > 0; _e59 -= 1) {
            var _n45 = _r44.slice(0, _e59).join("-");

            if (t[_n45]) return t[_n45];
          }
        }

        return null;
      }(n, t) || Mo;

      return No(e, n, r);
    }(e, t) : No(e.code, [e.code], e);
  }

  function No(e, t, n) {
    var r = En([ko, n], ["buttonText"]);
    delete r.code;
    var i = r.week;
    return delete r.week, {
      codeArg: e,
      codes: t,
      week: i,
      simpleNumberFormat: new Intl.NumberFormat(e),
      options: r
    };
  }

  function Po(e) {
    return {
      id: Ze(),
      name: e.name,
      premiumReleaseDate: e.premiumReleaseDate ? new Date(e.premiumReleaseDate) : void 0,
      deps: e.deps || [],
      reducers: e.reducers || [],
      isLoadingFuncs: e.isLoadingFuncs || [],
      contextInit: [].concat(e.contextInit || []),
      eventRefiners: e.eventRefiners || {},
      eventDefMemberAdders: e.eventDefMemberAdders || [],
      eventSourceRefiners: e.eventSourceRefiners || {},
      isDraggableTransformers: e.isDraggableTransformers || [],
      eventDragMutationMassagers: e.eventDragMutationMassagers || [],
      eventDefMutationAppliers: e.eventDefMutationAppliers || [],
      dateSelectionTransformers: e.dateSelectionTransformers || [],
      datePointTransforms: e.datePointTransforms || [],
      dateSpanTransforms: e.dateSpanTransforms || [],
      views: e.views || {},
      viewPropsTransformers: e.viewPropsTransformers || [],
      isPropsValid: e.isPropsValid || null,
      externalDefTransforms: e.externalDefTransforms || [],
      viewContainerAppends: e.viewContainerAppends || [],
      eventDropTransformers: e.eventDropTransformers || [],
      componentInteractions: e.componentInteractions || [],
      calendarInteractions: e.calendarInteractions || [],
      themeClasses: e.themeClasses || {},
      eventSourceDefs: e.eventSourceDefs || [],
      cmdFormatter: e.cmdFormatter,
      recurringTypes: e.recurringTypes || [],
      namedTimeZonedImpl: e.namedTimeZonedImpl,
      initialView: e.initialView || "",
      elementDraggingImpl: e.elementDraggingImpl,
      optionChangeHandlers: e.optionChangeHandlers || {},
      scrollGridImpl: e.scrollGridImpl || null,
      listenerRefiners: e.listenerRefiners || {},
      optionRefiners: e.optionRefiners || {},
      propSetHandlers: e.propSetHandlers || {}
    };
  }

  function Ho() {
    var e,
        t = [],
        n = [];
    return function (r, i) {
      return e && St(r, t) && St(i, n) || (e = function (e, t) {
        var n = {},
            r = {
          premiumReleaseDate: void 0,
          reducers: [],
          isLoadingFuncs: [],
          contextInit: [],
          eventRefiners: {},
          eventDefMemberAdders: [],
          eventSourceRefiners: {},
          isDraggableTransformers: [],
          eventDragMutationMassagers: [],
          eventDefMutationAppliers: [],
          dateSelectionTransformers: [],
          datePointTransforms: [],
          dateSpanTransforms: [],
          views: {},
          viewPropsTransformers: [],
          isPropsValid: null,
          externalDefTransforms: [],
          viewContainerAppends: [],
          eventDropTransformers: [],
          componentInteractions: [],
          calendarInteractions: [],
          themeClasses: {},
          eventSourceDefs: [],
          cmdFormatter: null,
          recurringTypes: [],
          namedTimeZonedImpl: null,
          initialView: "",
          elementDraggingImpl: null,
          optionChangeHandlers: {},
          scrollGridImpl: null,
          listenerRefiners: {},
          optionRefiners: {},
          propSetHandlers: {}
        };

        function i(e) {
          var _iteratorNormalCompletion40 = true;
          var _didIteratorError40 = false;
          var _iteratorError40 = undefined;

          try {
            for (var _iterator40 = e[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
              var _o16 = _step40.value;
              var _e60 = _o16.name,
                  _a10 = n[_e60];
              void 0 === _a10 ? (n[_e60] = _o16.id, i(_o16.deps), s = _o16, r = {
                premiumReleaseDate: Bo((t = r).premiumReleaseDate, s.premiumReleaseDate),
                reducers: t.reducers.concat(s.reducers),
                isLoadingFuncs: t.isLoadingFuncs.concat(s.isLoadingFuncs),
                contextInit: t.contextInit.concat(s.contextInit),
                eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), s.eventRefiners),
                eventDefMemberAdders: t.eventDefMemberAdders.concat(s.eventDefMemberAdders),
                eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), s.eventSourceRefiners),
                isDraggableTransformers: t.isDraggableTransformers.concat(s.isDraggableTransformers),
                eventDragMutationMassagers: t.eventDragMutationMassagers.concat(s.eventDragMutationMassagers),
                eventDefMutationAppliers: t.eventDefMutationAppliers.concat(s.eventDefMutationAppliers),
                dateSelectionTransformers: t.dateSelectionTransformers.concat(s.dateSelectionTransformers),
                datePointTransforms: t.datePointTransforms.concat(s.datePointTransforms),
                dateSpanTransforms: t.dateSpanTransforms.concat(s.dateSpanTransforms),
                views: Object.assign(Object.assign({}, t.views), s.views),
                viewPropsTransformers: t.viewPropsTransformers.concat(s.viewPropsTransformers),
                isPropsValid: s.isPropsValid || t.isPropsValid,
                externalDefTransforms: t.externalDefTransforms.concat(s.externalDefTransforms),
                viewContainerAppends: t.viewContainerAppends.concat(s.viewContainerAppends),
                eventDropTransformers: t.eventDropTransformers.concat(s.eventDropTransformers),
                calendarInteractions: t.calendarInteractions.concat(s.calendarInteractions),
                componentInteractions: t.componentInteractions.concat(s.componentInteractions),
                themeClasses: Object.assign(Object.assign({}, t.themeClasses), s.themeClasses),
                eventSourceDefs: t.eventSourceDefs.concat(s.eventSourceDefs),
                cmdFormatter: s.cmdFormatter || t.cmdFormatter,
                recurringTypes: t.recurringTypes.concat(s.recurringTypes),
                namedTimeZonedImpl: s.namedTimeZonedImpl || t.namedTimeZonedImpl,
                initialView: t.initialView || s.initialView,
                elementDraggingImpl: t.elementDraggingImpl || s.elementDraggingImpl,
                optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), s.optionChangeHandlers),
                scrollGridImpl: s.scrollGridImpl || t.scrollGridImpl,
                listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), s.listenerRefiners),
                optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), s.optionRefiners),
                propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), s.propSetHandlers)
              }) : _a10 !== _o16.id && console.warn("Duplicate plugin '".concat(_e60, "'"));
            }
          } catch (err) {
            _didIteratorError40 = true;
            _iteratorError40 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion40 && _iterator40["return"] != null) {
                _iterator40["return"]();
              }
            } finally {
              if (_didIteratorError40) {
                throw _iteratorError40;
              }
            }
          }

          var t, s;
        }

        return e && i(e), i(t), r;
      }(r, i)), t = r, n = i, e;
    };
  }

  function Bo(e, t) {
    return void 0 === e ? t : void 0 === t ? e : new Date(Math.max(e.valueOf(), t.valueOf()));
  }

  var jo =
  /*#__PURE__*/
  function (_Bn) {
    _inherits(jo, _Bn);

    function jo() {
      _classCallCheck(this, jo);

      return _possibleConstructorReturn(this, _getPrototypeOf(jo).apply(this, arguments));
    }

    return jo;
  }(Bn);

  function zo(e, t, n, r) {
    if (t[e]) return t[e];

    var i = function (e, t, n, r) {
      var i = n[e],
          s = r[e],
          o = function o(e) {
        return i && null !== i[e] ? i[e] : s && null !== s[e] ? s[e] : null;
      },
          a = o("component"),
          l = o("superType"),
          c = null;

      if (l) {
        if (l === e) throw new Error("Can't have a custom view type that references itself");
        c = zo(l, t, n, r);
      }

      !a && c && (a = c.component);
      if (!a) return null;
      return {
        type: e,
        component: a,
        defaults: Object.assign(Object.assign({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
        overrides: Object.assign(Object.assign({}, c ? c.overrides : {}), s ? s.rawOptions : {})
      };
    }(e, t, n, r);

    return i && (t[e] = i), i;
  }

  function Uo(e) {
    return An(e, Wo);
  }

  function Wo(e) {
    var t = "function" == typeof e ? {
      component: e
    } : e,
        n = t.component;
    return t.content ? n = Lo(t) : !n || n.prototype instanceof Gn || (n = Lo(Object.assign(Object.assign({}, t), {
      content: n
    }))), {
      superType: t.type,
      component: n,
      rawOptions: t
    };
  }

  function Lo(e) {
    return function (t) {
      return p(Ln.Consumer, null, function (n) {
        return p(Jn, {
          elTag: "div",
          elClasses: tr(n.viewSpec),
          renderProps: Object.assign(Object.assign({}, t), {
            nextDayThreshold: n.options.nextDayThreshold
          }),
          generatorName: void 0,
          customGenerator: e.content,
          classNameGenerator: e.classNames,
          didMount: e.didMount,
          willUnmount: e.willUnmount
        });
      });
    };
  }

  function Fo(e, t, n, r) {
    var i = Uo(e),
        s = Uo(t.views);
    return An(function (e, t) {
      var n,
          r = {};

      for (n in e) {
        zo(n, r, e, t);
      }

      for (n in t) {
        zo(n, r, e, t);
      }

      return r;
    }(i, s), function (e) {
      return function (e, t, n, r, i) {
        var s = e.overrides.duration || e.defaults.duration || r.duration || n.duration,
            o = null,
            a = "",
            l = "",
            c = {};

        if (s && (o = function (e) {
          var t = JSON.stringify(e),
              n = Vo[t];
          void 0 === n && (n = ft(e), Vo[t] = n);
          return n;
        }(s), o)) {
          var _e61 = Et(o);

          a = _e61.unit, 1 === _e61.value && (l = a, c = t[a] ? t[a].rawOptions : {});
        }

        var d = function d(t) {
          var n = t.buttonText || {},
              r = e.defaults.buttonTextKey;
          return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[l] ? n[l] : null;
        },
            u = function u(t) {
          var n = t.buttonHints || {},
              r = e.defaults.buttonTextKey;
          return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[l] ? n[l] : null;
        };

        return {
          type: e.type,
          component: e.component,
          duration: o,
          durationUnit: a,
          singleUnit: l,
          optionDefaults: e.defaults,
          optionOverrides: Object.assign(Object.assign({}, c), e.overrides),
          buttonTextOverride: d(r) || d(n) || e.overrides.buttonText,
          buttonTextDefault: d(i) || e.defaults.buttonText || d(cn) || e.type,
          buttonTitleOverride: u(r) || u(n) || e.overrides.buttonHint,
          buttonTitleDefault: u(i) || e.defaults.buttonHint || u(cn)
        };
      }(e, s, t, n, r);
    });
  }

  jo.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active"
  }, jo.prototype.baseIconClass = "fc-icon", jo.prototype.iconClasses = {
    close: "fc-icon-x",
    prev: "fc-icon-chevron-left",
    next: "fc-icon-chevron-right",
    prevYear: "fc-icon-chevrons-left",
    nextYear: "fc-icon-chevrons-right"
  }, jo.prototype.rtlIconClasses = {
    prev: "fc-icon-chevron-right",
    next: "fc-icon-chevron-left",
    prevYear: "fc-icon-chevrons-right",
    nextYear: "fc-icon-chevrons-left"
  }, jo.prototype.iconOverrideOption = "buttonIcons", jo.prototype.iconOverrideCustomButtonOption = "icon", jo.prototype.iconOverridePrefix = "fc-icon-";
  var Vo = {};

  function Go(e, t, n) {
    var r = t ? t.activeRange : null;
    return Yo({}, function (e, t) {
      var n = zr(t),
          r = [].concat(e.eventSources || []),
          i = [];
      e.initialEvents && r.unshift(e.initialEvents);
      e.events && r.unshift(e.events);
      var _iteratorNormalCompletion41 = true;
      var _didIteratorError41 = false;
      var _iteratorError41 = undefined;

      try {
        for (var _iterator41 = r[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
          var _e62 = _step41.value;

          var _r45 = jr(_e62, t, n);

          _r45 && i.push(_r45);
        }
      } catch (err) {
        _didIteratorError41 = true;
        _iteratorError41 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion41 && _iterator41["return"] != null) {
            _iterator41["return"]();
          }
        } finally {
          if (_didIteratorError41) {
            throw _iteratorError41;
          }
        }
      }

      return i;
    }(e, n), r, n);
  }

  function Qo(e, t, n, r) {
    var i = n ? n.activeRange : null;

    switch (t.type) {
      case "ADD_EVENT_SOURCES":
        return Yo(e, t.sources, i, r);

      case "REMOVE_EVENT_SOURCE":
        return s = e, o = t.sourceId, Sn(s, function (e) {
          return e.sourceId !== o;
        });

      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return n ? Zo(e, i, r) : e;

      case "FETCH_EVENT_SOURCES":
        return Xo(e, t.sourceIds ? Dn(t.sourceIds) : Jo(e, r), i, t.isRefetch || !1, r);

      case "RECEIVE_EVENTS":
      case "RECEIVE_EVENT_ERROR":
        return function (e, t, n, r) {
          var i = e[t];
          if (i && n === i.latestFetchId) return Object.assign(Object.assign({}, e), _defineProperty({}, t, Object.assign(Object.assign({}, i), {
            isFetching: !1,
            fetchRange: r
          })));
          return e;
        }(e, t.sourceId, t.fetchId, t.fetchRange);

      case "REMOVE_ALL_EVENT_SOURCES":
        return {};

      default:
        return e;
    }

    var s, o;
  }

  function qo(e) {
    for (var _t33 in e) {
      if (e[_t33].isFetching) return !0;
    }

    return !1;
  }

  function Yo(e, t, n, r) {
    var i = {};
    var _iteratorNormalCompletion42 = true;
    var _didIteratorError42 = false;
    var _iteratorError42 = undefined;

    try {
      for (var _iterator42 = t[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
        var _e63 = _step42.value;
        i[_e63.sourceId] = _e63;
      }
    } catch (err) {
      _didIteratorError42 = true;
      _iteratorError42 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion42 && _iterator42["return"] != null) {
          _iterator42["return"]();
        }
      } finally {
        if (_didIteratorError42) {
          throw _iteratorError42;
        }
      }
    }

    return n && (i = Zo(i, n, r)), Object.assign(Object.assign({}, e), i);
  }

  function Zo(e, t, n) {
    return Xo(e, Sn(e, function (e) {
      return function (e, t, n) {
        if (!Ko(e, n)) return !e.latestFetchId;
        return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end;
      }(e, t, n);
    }), t, !1, n);
  }

  function Xo(e, t, n, r, i) {
    var s = {};

    for (var _o17 in e) {
      var _a11 = e[_o17];
      t[_o17] ? s[_o17] = $o(_a11, n, r, i) : s[_o17] = _a11;
    }

    return s;
  }

  function $o(e, t, n, r) {
    var i = r.options,
        s = r.calendarApi,
        o = r.pluginHooks.eventSourceDefs[e.sourceDefId],
        a = Ze();
    return o.fetch({
      eventSource: e,
      range: t,
      isRefetch: n,
      context: r
    }, function (n) {
      var o = n.rawEvents;
      i.eventSourceSuccess && (o = i.eventSourceSuccess.call(s, o, n.response) || o), e.success && (o = e.success.call(s, o, n.response) || o), r.dispatch({
        type: "RECEIVE_EVENTS",
        sourceId: e.sourceId,
        fetchId: a,
        fetchRange: t,
        rawEvents: o
      });
    }, function (n) {
      var o = !1;
      i.eventSourceFailure && (i.eventSourceFailure.call(s, n), o = !0), e.failure && (e.failure(n), o = !0), o || console.warn(n.message, n), r.dispatch({
        type: "RECEIVE_EVENT_ERROR",
        sourceId: e.sourceId,
        fetchId: a,
        fetchRange: t,
        error: n
      });
    }), Object.assign(Object.assign({}, e), {
      isFetching: !0,
      latestFetchId: a
    });
  }

  function Jo(e, t) {
    return Sn(e, function (e) {
      return Ko(e, t);
    });
  }

  function Ko(e, t) {
    return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
  }

  function ea(e, t) {
    switch (t.type) {
      case "UNSELECT_DATES":
        return null;

      case "SELECT_DATES":
        return t.selection;

      default:
        return e;
    }
  }

  function ta(e, t) {
    switch (t.type) {
      case "UNSELECT_EVENT":
        return "";

      case "SELECT_EVENT":
        return t.eventInstanceId;

      default:
        return e;
    }
  }

  function na(e, t) {
    var n;

    switch (t.type) {
      case "UNSET_EVENT_DRAG":
        return null;

      case "SET_EVENT_DRAG":
        return n = t.state, {
          affectedEvents: n.affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent
        };

      default:
        return e;
    }
  }

  function ra(e, t) {
    var n;

    switch (t.type) {
      case "UNSET_EVENT_RESIZE":
        return null;

      case "SET_EVENT_RESIZE":
        return n = t.state, {
          affectedEvents: n.affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent
        };

      default:
        return e;
    }
  }

  function ia(e, t, n, r, i) {
    return {
      header: e.headerToolbar ? sa(e.headerToolbar, e, t, n, r, i) : null,
      footer: e.footerToolbar ? sa(e.footerToolbar, e, t, n, r, i) : null
    };
  }

  function sa(e, t, n, r, i, s) {
    var o = {},
        a = [],
        l = !1;

    for (var _c3 in e) {
      var _d3 = oa(e[_c3], t, n, r, i, s);

      o[_c3] = _d3.widgets, a.push.apply(a, _toConsumableArray(_d3.viewsWithButtons)), l = l || _d3.hasTitle;
    }

    return {
      sectionWidgets: o,
      viewsWithButtons: a,
      hasTitle: l
    };
  }

  function oa(e, t, n, r, i, s) {
    var o = "rtl" === t.direction,
        a = t.customButtons || {},
        l = n.buttonText || {},
        c = t.buttonText || {},
        d = n.buttonHints || {},
        u = t.buttonHints || {},
        h = e ? e.split(" ") : [],
        f = [],
        g = !1;
    return {
      widgets: h.map(function (e) {
        return e.split(",").map(function (e) {
          if ("title" === e) return g = !0, {
            buttonName: e
          };
          var n, h, p, m, v, y;
          if (n = a[e]) p = function p(e) {
            n.click && n.click.call(e.target, e, e.target);
          }, (m = r.getCustomButtonIconClass(n)) || (m = r.getIconClass(e, o)) || (v = n.text), y = n.hint || n.text;else if (h = i[e]) {
            f.push(e), p = function p() {
              s.changeView(e);
            }, (v = h.buttonTextOverride) || (m = r.getIconClass(e, o)) || (v = h.buttonTextDefault);

            var _n46 = h.buttonTextOverride || h.buttonTextDefault;

            y = at(h.buttonTitleOverride || h.buttonTitleDefault || t.viewHint, [_n46, e], _n46);
          } else if (s[e]) if (p = function p() {
            s[e]();
          }, (v = l[e]) || (m = r.getIconClass(e, o)) || (v = c[e]), "prevYear" === e || "nextYear" === e) {
            var _t34 = "prevYear" === e ? "prev" : "next";

            y = at(d[_t34] || u[_t34], [c.year || "year", "year"], c[e]);
          } else y = function y(t) {
            return at(d[e] || u[e], [c[t] || t, t], c[e]);
          };
          return {
            buttonName: e,
            buttonClick: p,
            buttonIcon: m,
            buttonText: v,
            buttonHint: y
          };
        });
      }),
      viewsWithButtons: f,
      hasTitle: g
    };
  }

  var aa =
  /*#__PURE__*/
  function () {
    function aa(e, t, n) {
      _classCallCheck(this, aa);

      this.type = e, this.getCurrentData = t, this.dateEnv = n;
    }

    _createClass(aa, [{
      key: "getOption",
      value: function getOption(e) {
        return this.getCurrentData().options[e];
      }
    }, {
      key: "calendar",
      get: function get() {
        return this.getCurrentData().calendarApi;
      }
    }, {
      key: "title",
      get: function get() {
        return this.getCurrentData().viewTitle;
      }
    }, {
      key: "activeStart",
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
      }
    }, {
      key: "activeEnd",
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
      }
    }, {
      key: "currentStart",
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
      }
    }, {
      key: "currentEnd",
      get: function get() {
        return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
      }
    }]);

    return aa;
  }();

  function la(e, t) {
    var n = wn(t.getCurrentData().eventSources);
    if (1 === n.length && 1 === e.length && Array.isArray(n[0]._raw) && Array.isArray(e[0])) return void t.dispatch({
      type: "RESET_RAW_EVENTS",
      sourceId: n[0].sourceId,
      rawEvents: e[0]
    });
    var r = [];
    var _iteratorNormalCompletion43 = true;
    var _didIteratorError43 = false;
    var _iteratorError43 = undefined;

    try {
      for (var _iterator43 = e[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
        var _t35 = _step43.value;

        var _e64 = !1;

        for (var _r47 = 0; _r47 < n.length; _r47 += 1) {
          if (n[_r47]._raw === _t35) {
            n.splice(_r47, 1), _e64 = !0;
            break;
          }
        }

        _e64 || r.push(_t35);
      }
    } catch (err) {
      _didIteratorError43 = true;
      _iteratorError43 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion43 && _iterator43["return"] != null) {
          _iterator43["return"]();
        }
      } finally {
        if (_didIteratorError43) {
          throw _iteratorError43;
        }
      }
    }

    var _iteratorNormalCompletion44 = true;
    var _didIteratorError44 = false;
    var _iteratorError44 = undefined;

    try {
      for (var _iterator44 = n[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
        var _e65 = _step44.value;
        t.dispatch({
          type: "REMOVE_EVENT_SOURCE",
          sourceId: _e65.sourceId
        });
      }
    } catch (err) {
      _didIteratorError44 = true;
      _iteratorError44 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion44 && _iterator44["return"] != null) {
          _iterator44["return"]();
        }
      } finally {
        if (_didIteratorError44) {
          throw _iteratorError44;
        }
      }
    }

    for (var _i24 = 0, _r46 = r; _i24 < _r46.length; _i24++) {
      var _e66 = _r46[_i24];
      t.calendarApi.addEventSource(_e66);
    }
  }

  var ca = [Po({
    name: "array-event-source",
    eventSourceDefs: [{
      ignoreRange: !0,
      parseMeta: function parseMeta(e) {
        return Array.isArray(e.events) ? e.events : null;
      },
      fetch: function fetch(e, t) {
        t({
          rawEvents: e.eventSource.meta
        });
      }
    }]
  }), Po({
    name: "func-event-source",
    eventSourceDefs: [{
      parseMeta: function parseMeta(e) {
        return "function" == typeof e.events ? e.events : null;
      },
      fetch: function fetch(e, t, n) {
        var r = e.context.dateEnv;
        Ci(e.eventSource.meta.bind(null, Di(e.range, r)), function (e) {
          return t({
            rawEvents: e
          });
        }, n);
      }
    }]
  }), Po({
    name: "json-event-source",
    eventSourceRefiners: {
      method: String,
      extraParams: yn,
      startParam: String,
      endParam: String,
      timeZoneParam: String
    },
    eventSourceDefs: [{
      parseMeta: function parseMeta(e) {
        return !e.url || "json" !== e.format && e.format ? null : {
          url: e.url,
          format: "json",
          method: (e.method || "GET").toUpperCase(),
          extraParams: e.extraParams,
          startParam: e.startParam,
          endParam: e.endParam,
          timeZoneParam: e.timeZoneParam
        };
      },
      fetch: function fetch(e, t, n) {
        var r = e.eventSource.meta,
            i = function (e, t, n) {
          var r,
              i,
              s,
              o,
              a = n.dateEnv,
              l = n.options,
              c = {};
          r = e.startParam, null == r && (r = l.startParam);
          i = e.endParam, null == i && (i = l.endParam);
          s = e.timeZoneParam, null == s && (s = l.timeZoneParam);
          o = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
          Object.assign(c, o), c[r] = a.formatIso(t.start), c[i] = a.formatIso(t.end), "local" !== a.timeZone && (c[s] = a.timeZone);
          return c;
        }(r, e.range, e.context);

        xi(r.method, r.url, i).then(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              e = _ref7[0],
              n = _ref7[1];

          t({
            rawEvents: e,
            response: n
          });
        }, n);
      }
    }]
  }), Po({
    name: "simple-recurring-event",
    recurringTypes: [{
      parse: function parse(e, t) {
        if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
          var _i25,
              _s20 = {
            daysOfWeek: e.daysOfWeek || null,
            startTime: e.startTime || null,
            endTime: e.endTime || null,
            startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
            endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
          };

          return e.duration && (_i25 = e.duration), !_i25 && e.startTime && e.endTime && (n = e.endTime, r = e.startTime, _i25 = {
            years: n.years - r.years,
            months: n.months - r.months,
            days: n.days - r.days,
            milliseconds: n.milliseconds - r.milliseconds
          }), {
            allDayGuess: Boolean(!e.startTime && !e.endTime),
            duration: _i25,
            typeData: _s20
          };
        }

        var n, r;
        return null;
      },
      expand: function expand(e, t, n) {
        var r = ir(t, {
          start: e.startRecur,
          end: e.endRecur
        });
        return r ? function (e, t, n, r) {
          var i = e ? Dn(e) : null,
              s = Mt(n.start),
              o = n.end,
              a = [];

          for (; s < o;) {
            var _e67 = void 0;

            i && !i[s.getUTCDay()] || (_e67 = t ? r.add(s, t) : s, a.push(_e67)), s = wt(s, 1);
          }

          return a;
        }(e.daysOfWeek, e.startTime, r, n) : [];
      }
    }],
    eventRefiners: {
      daysOfWeek: yn,
      startTime: ft,
      endTime: ft,
      duration: ft,
      startRecur: yn,
      endRecur: yn
    }
  }), Po({
    name: "change-handler",
    optionChangeHandlers: {
      events: function events(e, t) {
        la([e], t);
      },
      eventSources: la
    }
  }), Po({
    name: "misc",
    isLoadingFuncs: [function (e) {
      return qo(e.eventSources);
    }],
    propSetHandlers: {
      dateProfile: function dateProfile(e, t) {
        t.emitter.trigger("datesSet", Object.assign(Object.assign({}, Di(e.activeRange, t.dateEnv)), {
          view: t.viewApi
        }));
      },
      eventStore: function eventStore(e, t) {
        var n = t.emitter;
        n.hasHandlers("eventsSet") && n.trigger("eventsSet", ri(e, t));
      }
    }
  })];

  var da =
  /*#__PURE__*/
  function () {
    function da(e, t) {
      _classCallCheck(this, da);

      this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new Me(this.drain.bind(this));
    }

    _createClass(da, [{
      key: "request",
      value: function request(e, t) {
        this.queue.push(e), this.delayedRunner.request(t);
      }
    }, {
      key: "pause",
      value: function pause(e) {
        this.delayedRunner.pause(e);
      }
    }, {
      key: "resume",
      value: function resume(e, t) {
        this.delayedRunner.resume(e, t);
      }
    }, {
      key: "drain",
      value: function drain() {
        var e = this.queue;

        for (; e.length;) {
          var _t36 = void 0,
              _n47 = [];

          for (; _t36 = e.shift();) {
            this.runTask(_t36), _n47.push(_t36);
          }

          this.drained(_n47);
        }
      }
    }, {
      key: "runTask",
      value: function runTask(e) {
        this.runTaskOption && this.runTaskOption(e);
      }
    }, {
      key: "drained",
      value: function drained(e) {
        this.drainedOption && this.drainedOption(e);
      }
    }]);

    return da;
  }();

  function ua(e, t, n) {
    var r;
    return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, an(t.titleFormat || function (e) {
      var t = e.currentRangeUnit;
      if ("year" === t) return {
        year: "numeric"
      };
      if ("month" === t) return {
        year: "numeric",
        month: "long"
      };
      var n = kt(e.currentRange.start, e.currentRange.end);
      if (null !== n && n > 1) return {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      return {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
    }(e)), {
      isEndExclusive: e.isRangeAllDay,
      defaultSeparator: t.titleRangeSeparator
    });
  }

  var ha =
  /*#__PURE__*/
  function () {
    function ha(e) {
      var _this30 = this;

      _classCallCheck(this, ha);

      this.computeCurrentViewData = Gt(this._computeCurrentViewData), this.organizeRawLocales = Gt(Io), this.buildLocale = Gt(Oo), this.buildPluginHooks = Ho(), this.buildDateEnv = Gt(fa), this.buildTheme = Gt(ga), this.parseToolbars = Gt(ia), this.buildViewSpecs = Gt(Fo), this.buildDateProfileGenerator = Qt(pa), this.buildViewApi = Gt(ma), this.buildViewUiProps = Qt(ba), this.buildEventUiBySource = Gt(va, Cn), this.buildEventUiBases = Gt(ya), this.parseContextBusinessHours = Qt(Sa), this.buildTitle = Gt(ua), this.emitter = new Gr(), this.actionRunner = new da(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = function () {
        return _this30.data;
      }, this.dispatch = function (e) {
        _this30.actionRunner.request(e);
      }, this.props = e, this.actionRunner.pause();
      var t = {},
          n = this.computeOptionsData(e.optionOverrides, t, e.calendarApi),
          r = n.calendarOptions.initialView || n.pluginHooks.initialView,
          i = this.computeCurrentViewData(r, n, e.optionOverrides, t);
      e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(i.options);

      var s = function (e, t) {
        var n = e.initialDate;
        return null != n ? t.createMarker(n) : fr(e.now, t);
      }(n.calendarOptions, n.dateEnv),
          o = i.dateProfileGenerator.build(s);

      lr(o.activeRange, s) || (s = o.currentRange.start);
      var a = {
        dateEnv: n.dateEnv,
        options: n.calendarOptions,
        pluginHooks: n.pluginHooks,
        calendarApi: e.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData
      };
      var _iteratorNormalCompletion45 = true;
      var _didIteratorError45 = false;
      var _iteratorError45 = undefined;

      try {
        for (var _iterator45 = n.pluginHooks.contextInit[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
          var _e68 = _step45.value;

          _e68(a);
        }
      } catch (err) {
        _didIteratorError45 = true;
        _iteratorError45 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion45 && _iterator45["return"] != null) {
            _iterator45["return"]();
          }
        } finally {
          if (_didIteratorError45) {
            throw _iteratorError45;
          }
        }
      }

      var l = Go(n.calendarOptions, o, a),
          c = {
        dynamicOptionOverrides: t,
        currentViewType: r,
        currentDate: s,
        dateProfile: o,
        businessHours: this.parseContextBusinessHours(a),
        eventSources: l,
        eventUiBases: {},
        eventStore: {
          defs: {},
          instances: {}
        },
        renderableEventStore: {
          defs: {},
          instances: {}
        },
        dateSelection: null,
        eventSelection: "",
        eventDrag: null,
        eventResize: null,
        selectionConfig: this.buildViewUiProps(a).selectionConfig
      },
          d = Object.assign(Object.assign({}, a), c);
      var _iteratorNormalCompletion46 = true;
      var _didIteratorError46 = false;
      var _iteratorError46 = undefined;

      try {
        for (var _iterator46 = n.pluginHooks.reducers[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
          var _e69 = _step46.value;
          Object.assign(c, _e69(null, null, d));
        }
      } catch (err) {
        _didIteratorError46 = true;
        _iteratorError46 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion46 && _iterator46["return"] != null) {
            _iterator46["return"]();
          }
        } finally {
          if (_didIteratorError46) {
            throw _iteratorError46;
          }
        }
      }

      Ea(c, a) && this.emitter.trigger("loading", !0), this.state = c, this.updateData(), this.actionRunner.resume();
    }

    _createClass(ha, [{
      key: "resetOptions",
      value: function resetOptions(e, t) {
        var _this$optionsForRefin;

        var n = this.props;
        void 0 === t ? n.optionOverrides = e : (n.optionOverrides = Object.assign(Object.assign({}, n.optionOverrides || {}), e), (_this$optionsForRefin = this.optionsForRefining).push.apply(_this$optionsForRefin, _toConsumableArray(t))), (void 0 === t || t.length) && this.actionRunner.request({
          type: "NOTHING"
        });
      }
    }, {
      key: "_handleAction",
      value: function _handleAction(e) {
        var t = this.props,
            n = this.state,
            r = this.emitter,
            i = function (e, t) {
          switch (t.type) {
            case "SET_OPTION":
              return Object.assign(Object.assign({}, e), _defineProperty({}, t.optionName, t.rawOptionValue));

            default:
              return e;
          }
        }(n.dynamicOptionOverrides, e),
            s = this.computeOptionsData(t.optionOverrides, i, t.calendarApi),
            o = function (e, t) {
          switch (t.type) {
            case "CHANGE_VIEW_TYPE":
              e = t.viewType;
          }

          return e;
        }(n.currentViewType, e),
            a = this.computeCurrentViewData(o, s, t.optionOverrides, i);

        t.calendarApi.currentDataManager = this, r.setThisContext(t.calendarApi), r.setOptions(a.options);
        var l = {
          dateEnv: s.dateEnv,
          options: s.calendarOptions,
          pluginHooks: s.pluginHooks,
          calendarApi: t.calendarApi,
          dispatch: this.dispatch,
          emitter: r,
          getCurrentData: this.getCurrentData
        },
            c = n.currentDate,
            d = n.dateProfile;
        this.data && this.data.dateProfileGenerator !== a.dateProfileGenerator && (d = a.dateProfileGenerator.build(c)), c = function (e, t) {
          switch (t.type) {
            case "CHANGE_DATE":
              return t.dateMarker;

            default:
              return e;
          }
        }(c, e), d = function (e, t, n, r) {
          var i;

          switch (t.type) {
            case "CHANGE_VIEW_TYPE":
              return r.build(t.dateMarker || n);

            case "CHANGE_DATE":
              return r.build(t.dateMarker);

            case "PREV":
              if (i = r.buildPrev(e, n), i.isValid) return i;
              break;

            case "NEXT":
              if (i = r.buildNext(e, n), i.isValid) return i;
          }

          return e;
        }(d, e, c, a.dateProfileGenerator), "PREV" !== e.type && "NEXT" !== e.type && lr(d.currentRange, c) || (c = d.currentRange.start);

        var u = Qo(n.eventSources, e, d, l),
            h = Ur(n.eventStore, e, u, d, l),
            f = qo(u) && !a.options.progressiveEventRendering && n.renderableEventStore || h,
            _this$buildViewUiProp = this.buildViewUiProps(l),
            g = _this$buildViewUiProp.eventUiSingleBase,
            p = _this$buildViewUiProp.selectionConfig,
            m = this.buildEventUiBySource(u),
            v = {
          dynamicOptionOverrides: i,
          currentViewType: o,
          currentDate: c,
          dateProfile: d,
          eventSources: u,
          eventStore: h,
          renderableEventStore: f,
          selectionConfig: p,
          eventUiBases: this.buildEventUiBases(f.defs, g, m),
          businessHours: this.parseContextBusinessHours(l),
          dateSelection: ea(n.dateSelection, e),
          eventSelection: ta(n.eventSelection, e),
          eventDrag: na(n.eventDrag, e),
          eventResize: ra(n.eventResize, e)
        },
            y = Object.assign(Object.assign({}, l), v);

        var _iteratorNormalCompletion47 = true;
        var _didIteratorError47 = false;
        var _iteratorError47 = undefined;

        try {
          for (var _iterator47 = s.pluginHooks.reducers[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
            var _t37 = _step47.value;
            Object.assign(v, _t37(n, e, y));
          }
        } catch (err) {
          _didIteratorError47 = true;
          _iteratorError47 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion47 && _iterator47["return"] != null) {
              _iterator47["return"]();
            }
          } finally {
            if (_didIteratorError47) {
              throw _iteratorError47;
            }
          }
        }

        var b = Ea(n, l),
            E = Ea(v, l);
        !b && E ? r.trigger("loading", !0) : b && !E && r.trigger("loading", !1), this.state = v, t.onAction && t.onAction(e);
      }
    }, {
      key: "updateData",
      value: function updateData() {
        var e = this.props,
            t = this.state,
            n = this.data,
            r = this.computeOptionsData(e.optionOverrides, t.dynamicOptionOverrides, e.calendarApi),
            i = this.computeCurrentViewData(t.currentViewType, r, e.optionOverrides, t.dynamicOptionOverrides),
            s = this.data = Object.assign(Object.assign(Object.assign({
          viewTitle: this.buildTitle(t.dateProfile, i.options, r.dateEnv),
          calendarApi: e.calendarApi,
          dispatch: this.dispatch,
          emitter: this.emitter,
          getCurrentData: this.getCurrentData
        }, r), i), t),
            o = r.pluginHooks.optionChangeHandlers,
            a = n && n.calendarOptions,
            l = r.calendarOptions;

        if (a && a !== l) {
          a.timeZone !== l.timeZone && (t.eventSources = s.eventSources = function (e, t, n) {
            var r = t ? t.activeRange : null;
            return Xo(e, Jo(e, n), r, !0, n);
          }(s.eventSources, t.dateProfile, s), t.eventStore = s.eventStore = Fr(s.eventStore, n.dateEnv, s.dateEnv), t.renderableEventStore = s.renderableEventStore = Fr(s.renderableEventStore, n.dateEnv, s.dateEnv));

          for (var _e70 in o) {
            -1 === this.optionsForHandling.indexOf(_e70) && a[_e70] === l[_e70] || o[_e70](l[_e70], s);
          }
        }

        this.optionsForHandling = [], e.onData && e.onData(s);
      }
    }, {
      key: "computeOptionsData",
      value: function computeOptionsData(e, t, n) {
        if (!this.optionsForRefining.length && e === this.stableOptionOverrides && t === this.stableDynamicOptionOverrides) return this.stableCalendarOptionsData;

        var _this$processRawCalen = this.processRawCalendarOptions(e, t),
            r = _this$processRawCalen.refinedOptions,
            i = _this$processRawCalen.pluginHooks,
            s = _this$processRawCalen.localeDefaults,
            o = _this$processRawCalen.availableLocaleData,
            a = _this$processRawCalen.extra;

        Aa(a);
        var l = this.buildDateEnv(r.timeZone, r.locale, r.weekNumberCalculation, r.firstDay, r.weekText, i, o, r.defaultRangeSeparator),
            c = this.buildViewSpecs(i.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, s),
            d = this.buildTheme(r, i),
            u = this.parseToolbars(r, this.stableOptionOverrides, d, c, n);
        return this.stableCalendarOptionsData = {
          calendarOptions: r,
          pluginHooks: i,
          dateEnv: l,
          viewSpecs: c,
          theme: d,
          toolbarConfig: u,
          localeDefaults: s,
          availableRawLocales: o.map
        };
      }
    }, {
      key: "processRawCalendarOptions",
      value: function processRawCalendarOptions(e, t) {
        var _this$optionsForHandl;

        var _mn = mn([cn, e, t]),
            n = _mn.locales,
            r = _mn.locale,
            i = this.organizeRawLocales(n),
            s = i.map,
            o = this.buildLocale(r || i.defaultCode, s).options,
            a = this.buildPluginHooks(e.plugins || [], ca),
            l = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ln), dn), un), a.listenerRefiners), a.optionRefiners),
            c = {},
            d = mn([cn, o, e, t]),
            u = {},
            h = this.currentCalendarOptionsInput,
            f = this.currentCalendarOptionsRefined,
            g = !1;

        for (var _e71 in d) {
          -1 === this.optionsForRefining.indexOf(_e71) && (d[_e71] === h[_e71] || hn[_e71] && _e71 in h && hn[_e71](h[_e71], d[_e71])) ? u[_e71] = f[_e71] : l[_e71] ? (u[_e71] = l[_e71](d[_e71]), g = !0) : c[_e71] = h[_e71];
        }

        return g && (this.currentCalendarOptionsInput = d, this.currentCalendarOptionsRefined = u, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = t), (_this$optionsForHandl = this.optionsForHandling).push.apply(_this$optionsForHandl, _toConsumableArray(this.optionsForRefining)), this.optionsForRefining = [], {
          rawOptions: this.currentCalendarOptionsInput,
          refinedOptions: this.currentCalendarOptionsRefined,
          pluginHooks: a,
          availableLocaleData: i,
          localeDefaults: o,
          extra: c
        };
      }
    }, {
      key: "_computeCurrentViewData",
      value: function _computeCurrentViewData(e, t, n, r) {
        var i = t.viewSpecs[e];
        if (!i) throw new Error("viewType \"".concat(e, "\" is not available. Please make sure you've loaded all neccessary plugins"));

        var _this$processRawViewO = this.processRawViewOptions(i, t.pluginHooks, t.localeDefaults, n, r),
            s = _this$processRawViewO.refinedOptions,
            o = _this$processRawViewO.extra;

        return Aa(o), {
          viewSpec: i,
          options: s,
          dateProfileGenerator: this.buildDateProfileGenerator({
            dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
            duration: i.duration,
            durationUnit: i.durationUnit,
            usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
            dateEnv: t.dateEnv,
            calendarApi: this.props.calendarApi,
            slotMinTime: s.slotMinTime,
            slotMaxTime: s.slotMaxTime,
            showNonCurrentDates: s.showNonCurrentDates,
            dayCount: s.dayCount,
            dateAlignment: s.dateAlignment,
            dateIncrement: s.dateIncrement,
            hiddenDays: s.hiddenDays,
            weekends: s.weekends,
            nowInput: s.now,
            validRangeInput: s.validRange,
            visibleRangeInput: s.visibleRange,
            fixedWeekCount: s.fixedWeekCount
          }),
          viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
        };
      }
    }, {
      key: "processRawViewOptions",
      value: function processRawViewOptions(e, t, n, r, i) {
        var s = mn([cn, e.optionDefaults, n, r, e.optionOverrides, i]),
            o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ln), dn), un), pn), t.listenerRefiners), t.optionRefiners),
            a = {},
            l = this.currentViewOptionsInput,
            c = this.currentViewOptionsRefined,
            d = !1,
            u = {};

        for (var _e72 in s) {
          s[_e72] === l[_e72] || hn[_e72] && hn[_e72](s[_e72], l[_e72]) ? a[_e72] = c[_e72] : (s[_e72] === this.currentCalendarOptionsInput[_e72] || hn[_e72] && hn[_e72](s[_e72], this.currentCalendarOptionsInput[_e72]) ? _e72 in this.currentCalendarOptionsRefined && (a[_e72] = this.currentCalendarOptionsRefined[_e72]) : o[_e72] ? a[_e72] = o[_e72](s[_e72]) : u[_e72] = s[_e72], d = !0);
        }

        return d && (this.currentViewOptionsInput = s, this.currentViewOptionsRefined = a), {
          rawOptions: this.currentViewOptionsInput,
          refinedOptions: this.currentViewOptionsRefined,
          extra: u
        };
      }
    }]);

    return ha;
  }();

  function fa(e, t, n, r, i, s, o, a) {
    var l = Oo(t || o.defaultCode, o.map);
    return new Hn({
      calendarSystem: "gregory",
      timeZone: e,
      namedTimeZoneImpl: s.namedTimeZonedImpl,
      locale: l,
      weekNumberCalculation: n,
      firstDay: r,
      weekText: i,
      cmdFormatter: s.cmdFormatter,
      defaultSeparator: a
    });
  }

  function ga(e, t) {
    return new (t.themeClasses[e.themeSystem] || jo)(e);
  }

  function pa(e) {
    return new (e.dateProfileGeneratorClass || gr)(e);
  }

  function ma(e, t, n) {
    return new aa(e, t, n);
  }

  function va(e) {
    return An(e, function (e) {
      return e.ui;
    });
  }

  function ya(e, t, n) {
    var r = {
      "": t
    };

    for (var _t38 in e) {
      var _i26 = e[_t38];
      _i26.sourceId && n[_i26.sourceId] && (r[_t38] = n[_i26.sourceId]);
    }

    return r;
  }

  function ba(e) {
    var t = e.options;
    return {
      eventUiSingleBase: Nr({
        display: t.eventDisplay,
        editable: t.editable,
        startEditable: t.eventStartEditable,
        durationEditable: t.eventDurationEditable,
        constraint: t.eventConstraint,
        overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
        allow: t.eventAllow,
        backgroundColor: t.eventBackgroundColor,
        borderColor: t.eventBorderColor,
        textColor: t.eventTextColor,
        color: t.eventColor
      }, e),
      selectionConfig: Nr({
        constraint: t.selectConstraint,
        overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
        allow: t.selectAllow
      }, e)
    };
  }

  function Ea(e, t) {
    var _iteratorNormalCompletion48 = true;
    var _didIteratorError48 = false;
    var _iteratorError48 = undefined;

    try {
      for (var _iterator48 = t.pluginHooks.isLoadingFuncs[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
        var _n48 = _step48.value;
        if (_n48(e)) return !0;
      }
    } catch (err) {
      _didIteratorError48 = true;
      _iteratorError48 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion48 && _iterator48["return"] != null) {
          _iterator48["return"]();
        }
      } finally {
        if (_didIteratorError48) {
          throw _iteratorError48;
        }
      }
    }

    return !1;
  }

  function Sa(e) {
    return qr(e.options.businessHours, e);
  }

  function Aa(e, t) {
    for (var _n49 in e) {
      console.warn("Unknown option '".concat(_n49, "'") + (t ? " for view '".concat(t, "'") : ""));
    }
  }

  var Da =
  /*#__PURE__*/
  function (_Gn16) {
    _inherits(Da, _Gn16);

    function Da() {
      _classCallCheck(this, Da);

      return _possibleConstructorReturn(this, _getPrototypeOf(Da).apply(this, arguments));
    }

    _createClass(Da, [{
      key: "render",
      value: function render() {
        var _this31 = this;

        return p.apply(void 0, ["div", {
          className: "fc-toolbar-chunk"
        }].concat(_toConsumableArray(this.props.widgetGroups.map(function (e) {
          return _this31.renderWidgetGroup(e);
        }))));
      }
    }, {
      key: "renderWidgetGroup",
      value: function renderWidgetGroup(e) {
        var t = this.props,
            n = this.context.theme,
            r = [],
            i = !0;
        var _iteratorNormalCompletion49 = true;
        var _didIteratorError49 = false;
        var _iteratorError49 = undefined;

        try {
          for (var _iterator49 = e[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
            var _s21 = _step49.value;
            var _e73 = _s21.buttonName,
                _o18 = _s21.buttonClick,
                _a12 = _s21.buttonText,
                _l8 = _s21.buttonIcon,
                _c4 = _s21.buttonHint;
            if ("title" === _e73) i = !1, r.push(p("h2", {
              className: "fc-toolbar-title",
              id: t.titleId
            }, t.title));else {
              var _i27 = _e73 === t.activeButton,
                  _s22 = !t.isTodayEnabled && "today" === _e73 || !t.isPrevEnabled && "prev" === _e73 || !t.isNextEnabled && "next" === _e73,
                  _d4 = ["fc-".concat(_e73, "-button"), n.getClass("button")];

              _i27 && _d4.push(n.getClass("buttonActive")), r.push(p("button", {
                type: "button",
                title: "function" == typeof _c4 ? _c4(t.navUnit) : _c4,
                disabled: _s22,
                "aria-pressed": _i27,
                className: _d4.join(" "),
                onClick: _o18
              }, _a12 || (_l8 ? p("span", {
                className: _l8,
                role: "img"
              }) : "")));
            }
          }
        } catch (err) {
          _didIteratorError49 = true;
          _iteratorError49 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion49 && _iterator49["return"] != null) {
              _iterator49["return"]();
            }
          } finally {
            if (_didIteratorError49) {
              throw _iteratorError49;
            }
          }
        }

        if (r.length > 1) {
          return p.apply(void 0, ["div", {
            className: i && n.getClass("buttonGroup") || ""
          }].concat(r));
        }

        return r[0];
      }
    }]);

    return Da;
  }(Gn);

  var wa =
  /*#__PURE__*/
  function (_Gn17) {
    _inherits(wa, _Gn17);

    function wa() {
      _classCallCheck(this, wa);

      return _possibleConstructorReturn(this, _getPrototypeOf(wa).apply(this, arguments));
    }

    _createClass(wa, [{
      key: "render",
      value: function render() {
        var e,
            t,
            _this$props6 = this.props,
            n = _this$props6.model,
            r = _this$props6.extraClassName,
            i = !1,
            s = n.sectionWidgets,
            o = s.center;
        return s.left ? (i = !0, e = s.left) : e = s.start, s.right ? (i = !0, t = s.right) : t = s.end, p("div", {
          className: [r || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")
        }, this.renderSection("start", e || []), this.renderSection("center", o || []), this.renderSection("end", t || []));
      }
    }, {
      key: "renderSection",
      value: function renderSection(e, t) {
        var n = this.props;
        return p(Da, {
          key: e,
          widgetGroups: t,
          title: n.title,
          navUnit: n.navUnit,
          activeButton: n.activeButton,
          isTodayEnabled: n.isTodayEnabled,
          isPrevEnabled: n.isPrevEnabled,
          isNextEnabled: n.isNextEnabled,
          titleId: n.titleId
        });
      }
    }]);

    return wa;
  }(Gn);

  var Ca =
  /*#__PURE__*/
  function (_Gn18) {
    _inherits(Ca, _Gn18);

    function Ca() {
      var _this32;

      _classCallCheck(this, Ca);

      _this32 = _possibleConstructorReturn(this, _getPrototypeOf(Ca).apply(this, arguments)), _this32.state = {
        availableWidth: null
      }, _this32.handleEl = function (e) {
        _this32.el = e, Qn(_this32.props.elRef, e), _this32.updateAvailableWidth();
      }, _this32.handleResize = function () {
        _this32.updateAvailableWidth();
      };
      return _this32;
    }

    _createClass(Ca, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.state,
            n = e.aspectRatio,
            r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"],
            i = "",
            s = "";
        return n ? null !== t.availableWidth ? i = t.availableWidth / n : s = 1 / n * 100 + "%" : i = e.height || "", p("div", {
          "aria-labelledby": e.labeledById,
          ref: this.handleEl,
          className: r.join(" "),
          style: {
            height: i,
            paddingBottom: s
          }
        }, e.children);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.context.addResizeHandler(this.handleResize);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize);
      }
    }, {
      key: "updateAvailableWidth",
      value: function updateAvailableWidth() {
        this.el && this.props.aspectRatio && this.setState({
          availableWidth: this.el.offsetWidth
        });
      }
    }]);

    return Ca;
  }(Gn);

  var Ra =
  /*#__PURE__*/
  function (_Mi) {
    _inherits(Ra, _Mi);

    function Ra(e) {
      var _this33;

      _classCallCheck(this, Ra);

      _this33 = _possibleConstructorReturn(this, _getPrototypeOf(Ra).call(this, e)), _this33.handleSegClick = function (e, t) {
        var _assertThisInitialize2 = _assertThisInitialized(_this33),
            n = _assertThisInitialize2.component,
            r = n.context,
            i = ai(t);

        if (i && n.isValidSegDownEl(e.target)) {
          var _s23 = Oe(e.target, ".fc-event-forced-url"),
              _o19 = _s23 ? _s23.querySelector("a[href]").href : "";

          r.emitter.trigger("eventClick", {
            el: t,
            event: new ti(n.context, i.eventRange.def, i.eventRange.instance),
            jsEvent: e,
            view: r.viewApi
          }), _o19 && !e.defaultPrevented && (window.location.href = _o19);
        }
      }, _this33.destroy = Fe(e.el, "click", ".fc-event", _this33.handleSegClick);
      return _this33;
    }

    return Ra;
  }(Mi);

  var xa =
  /*#__PURE__*/
  function (_Mi2) {
    _inherits(xa, _Mi2);

    function xa(e) {
      var _this34;

      _classCallCheck(this, xa);

      _this34 = _possibleConstructorReturn(this, _getPrototypeOf(xa).call(this, e)), _this34.handleEventElRemove = function (e) {
        e === _this34.currentSegEl && _this34.handleSegLeave(null, _this34.currentSegEl);
      }, _this34.handleSegEnter = function (e, t) {
        ai(t) && (_this34.currentSegEl = t, _this34.triggerEvent("eventMouseEnter", e, t));
      }, _this34.handleSegLeave = function (e, t) {
        _this34.currentSegEl && (_this34.currentSegEl = null, _this34.triggerEvent("eventMouseLeave", e, t));
      }, _this34.removeHoverListeners = function (e, t, n, r) {
        var i;
        return Fe(e, "mouseover", t, function (e, t) {
          if (t !== i) {
            i = t, n(e, t);

            var _s24 = function _s24(e) {
              i = null, r(e, t), t.removeEventListener("mouseleave", _s24);
            };

            t.addEventListener("mouseleave", _s24);
          }
        });
      }(e.el, ".fc-event", _this34.handleSegEnter, _this34.handleSegLeave);
      return _this34;
    }

    _createClass(xa, [{
      key: "destroy",
      value: function destroy() {
        this.removeHoverListeners();
      }
    }, {
      key: "triggerEvent",
      value: function triggerEvent(e, t, n) {
        var r = this.component,
            i = r.context,
            s = ai(n);
        t && !r.isValidSegDownEl(t.target) || i.emitter.trigger(e, {
          el: n,
          event: new ti(i, s.eventRange.def, s.eventRange.instance),
          jsEvent: t,
          view: i.viewApi
        });
      }
    }]);

    return xa;
  }(Mi);

  var _a =
  /*#__PURE__*/
  function (_Vn2) {
    _inherits(_a, _Vn2);

    function _a() {
      var _this35;

      _classCallCheck(this, _a);

      _this35 = _possibleConstructorReturn(this, _getPrototypeOf(_a).apply(this, arguments)), _this35.buildViewContext = Gt(Fn), _this35.buildViewPropTransformers = Gt(ka), _this35.buildToolbarProps = Gt(Ta), _this35.headerRef = {
        current: null
      }, _this35.footerRef = {
        current: null
      }, _this35.interactionsStore = {}, _this35.state = {
        viewLabelId: We()
      }, _this35.registerInteractiveComponent = function (e, t) {
        var n = function (e, t) {
          return {
            component: e,
            el: t.el,
            useEventCenter: null == t.useEventCenter || t.useEventCenter,
            isHitComboAllowed: t.isHitComboAllowed || null
          };
        }(e, t),
            r = [Ra, xa].concat(_this35.props.pluginHooks.componentInteractions).map(function (e) {
          return new e(n);
        });

        _this35.interactionsStore[e.uid] = r, Oi[e.uid] = n;
      }, _this35.unregisterInteractiveComponent = function (e) {
        var t = _this35.interactionsStore[e.uid];

        if (t) {
          var _iteratorNormalCompletion50 = true;
          var _didIteratorError50 = false;
          var _iteratorError50 = undefined;

          try {
            for (var _iterator50 = t[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
              var _e74 = _step50.value;

              _e74.destroy();
            }
          } catch (err) {
            _didIteratorError50 = true;
            _iteratorError50 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion50 && _iterator50["return"] != null) {
                _iterator50["return"]();
              }
            } finally {
              if (_didIteratorError50) {
                throw _iteratorError50;
              }
            }
          }

          delete _this35.interactionsStore[e.uid];
        }

        delete Oi[e.uid];
      }, _this35.resizeRunner = new Me(function () {
        _this35.props.emitter.trigger("_resize", !0), _this35.props.emitter.trigger("windowResize", {
          view: _this35.props.viewApi
        });
      }), _this35.handleWindowResize = function (e) {
        var t = _this35.props.options;
        t.handleWindowResize && e.target === window && _this35.resizeRunner.request(t.windowResizeDelay);
      };
      return _this35;
    }

    _createClass(_a, [{
      key: "render",
      value: function render() {
        var e,
            t = this.props,
            n = t.toolbarConfig,
            r = t.options,
            i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, fr(t.options.now, t.dateEnv), t.viewTitle),
            s = !1,
            o = "";
        t.isHeightAuto || t.forPrint ? o = "" : null != r.height ? s = !0 : null != r.contentHeight ? o = r.contentHeight : e = Math.max(r.aspectRatio, .5);
        var a = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent),
            l = n.header && n.header.hasTitle ? this.state.viewLabelId : void 0;
        return p(Ln.Provider, {
          value: a
        }, n.header && p(wa, Object.assign({
          ref: this.headerRef,
          extraClassName: "fc-header-toolbar",
          model: n.header,
          titleId: l
        }, i)), p(Ca, {
          liquid: s,
          height: o,
          aspectRatio: e,
          labeledById: l
        }, this.renderView(t), this.buildAppendContent()), n.footer && p(wa, Object.assign({
          ref: this.footerRef,
          extraClassName: "fc-footer-toolbar",
          model: n.footer,
          titleId: ""
        }, i)));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var e = this.props;
        this.calendarInteractions = e.pluginHooks.calendarInteractions.map(function (t) {
          return new t(e);
        }), window.addEventListener("resize", this.handleWindowResize);
        var t = e.pluginHooks.propSetHandlers;

        for (var _n50 in t) {
          t[_n50](e[_n50], e);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e) {
        var t = this.props,
            n = t.pluginHooks.propSetHandlers;

        for (var _r48 in n) {
          t[_r48] !== e[_r48] && n[_r48](t[_r48], t);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
        var _iteratorNormalCompletion51 = true;
        var _didIteratorError51 = false;
        var _iteratorError51 = undefined;

        try {
          for (var _iterator51 = this.calendarInteractions[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
            var _e75 = _step51.value;

            _e75.destroy();
          }
        } catch (err) {
          _didIteratorError51 = true;
          _iteratorError51 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion51 && _iterator51["return"] != null) {
              _iterator51["return"]();
            }
          } finally {
            if (_didIteratorError51) {
              throw _iteratorError51;
            }
          }
        }

        this.props.emitter.trigger("_unmount");
      }
    }, {
      key: "buildAppendContent",
      value: function buildAppendContent() {
        var e = this.props;
        return p.apply(void 0, [y, {}].concat(_toConsumableArray(e.pluginHooks.viewContainerAppends.map(function (t) {
          return t(e);
        }))));
      }
    }, {
      key: "renderView",
      value: function renderView(e) {
        var t = e.pluginHooks,
            n = e.viewSpec,
            r = {
          dateProfile: e.dateProfile,
          businessHours: e.businessHours,
          eventStore: e.renderableEventStore,
          eventUiBases: e.eventUiBases,
          dateSelection: e.dateSelection,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          isHeightAuto: e.isHeightAuto,
          forPrint: e.forPrint
        },
            i = this.buildViewPropTransformers(t.viewPropsTransformers);
        var _iteratorNormalCompletion52 = true;
        var _didIteratorError52 = false;
        var _iteratorError52 = undefined;

        try {
          for (var _iterator52 = i[Symbol.iterator](), _step52; !(_iteratorNormalCompletion52 = (_step52 = _iterator52.next()).done); _iteratorNormalCompletion52 = true) {
            var _t39 = _step52.value;
            Object.assign(r, _t39.transform(r, e));
          }
        } catch (err) {
          _didIteratorError52 = true;
          _iteratorError52 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion52 && _iterator52["return"] != null) {
              _iterator52["return"]();
            }
          } finally {
            if (_didIteratorError52) {
              throw _iteratorError52;
            }
          }
        }

        return p(n.component, Object.assign({}, r));
      }
    }]);

    return _a;
  }(Vn);

  function Ta(e, t, n, r, i, s) {
    var o = n.build(i, void 0, !1),
        a = n.buildPrev(t, r, !1),
        l = n.buildNext(t, r, !1);
    return {
      title: s,
      activeButton: e.type,
      navUnit: e.singleUnit,
      isTodayEnabled: o.isValid && !lr(t.currentRange, i),
      isPrevEnabled: a.isValid,
      isNextEnabled: l.isValid
    };
  }

  function ka(e) {
    return e.map(function (e) {
      return new e();
    });
  }

  function Ma(e) {
    var t = Oo(e.locale || "en", Io([]).map);
    return new Hn(Object.assign(Object.assign({
      timeZone: cn.timeZone,
      calendarSystem: "gregory"
    }, e), {
      locale: t
    }));
  }

  vs.touchMouseIgnoreWait = 500;
  var Ia = 0,
      Oa = 0,
      Na = !1;

  var Pa =
  /*#__PURE__*/
  function () {
    function Pa(e) {
      var _this36 = this;

      _classCallCheck(this, Pa);

      this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = function (e) {
        if (!_this36.shouldIgnoreMouse() && function (e) {
          return 0 === e.button && !e.ctrlKey;
        }(e) && _this36.tryStart(e)) {
          var _t40 = _this36.createEventFromMouse(e, !0);

          _this36.emitter.trigger("pointerdown", _t40), _this36.initScrollWatch(_t40), _this36.shouldIgnoreMove || document.addEventListener("mousemove", _this36.handleMouseMove), document.addEventListener("mouseup", _this36.handleMouseUp);
        }
      }, this.handleMouseMove = function (e) {
        var t = _this36.createEventFromMouse(e);

        _this36.recordCoords(t), _this36.emitter.trigger("pointermove", t);
      }, this.handleMouseUp = function (e) {
        document.removeEventListener("mousemove", _this36.handleMouseMove), document.removeEventListener("mouseup", _this36.handleMouseUp), _this36.emitter.trigger("pointerup", _this36.createEventFromMouse(e)), _this36.cleanup();
      }, this.handleTouchStart = function (e) {
        if (_this36.tryStart(e)) {
          _this36.isTouchDragging = !0;

          var _t41 = _this36.createEventFromTouch(e, !0);

          _this36.emitter.trigger("pointerdown", _t41), _this36.initScrollWatch(_t41);
          var _n51 = e.target;
          _this36.shouldIgnoreMove || _n51.addEventListener("touchmove", _this36.handleTouchMove), _n51.addEventListener("touchend", _this36.handleTouchEnd), _n51.addEventListener("touchcancel", _this36.handleTouchEnd), window.addEventListener("scroll", _this36.handleTouchScroll, !0);
        }
      }, this.handleTouchMove = function (e) {
        var t = _this36.createEventFromTouch(e);

        _this36.recordCoords(t), _this36.emitter.trigger("pointermove", t);
      }, this.handleTouchEnd = function (e) {
        if (_this36.isDragging) {
          var _t42 = e.target;
          _t42.removeEventListener("touchmove", _this36.handleTouchMove), _t42.removeEventListener("touchend", _this36.handleTouchEnd), _t42.removeEventListener("touchcancel", _this36.handleTouchEnd), window.removeEventListener("scroll", _this36.handleTouchScroll, !0), _this36.emitter.trigger("pointerup", _this36.createEventFromTouch(e)), _this36.cleanup(), _this36.isTouchDragging = !1, Ia += 1, setTimeout(function () {
            Ia -= 1;
          }, vs.touchMouseIgnoreWait);
        }
      }, this.handleTouchScroll = function () {
        _this36.wasTouchScroll = !0;
      }, this.handleScroll = function (e) {
        if (!_this36.shouldIgnoreMove) {
          var _t43 = window.pageXOffset - _this36.prevScrollX + _this36.prevPageX,
              _n52 = window.pageYOffset - _this36.prevScrollY + _this36.prevPageY;

          _this36.emitter.trigger("pointermove", {
            origEvent: e,
            isTouch: _this36.isTouchDragging,
            subjectEl: _this36.subjectEl,
            pageX: _t43,
            pageY: _n52,
            deltaX: _t43 - _this36.origPageX,
            deltaY: _n52 - _this36.origPageY
          });
        }
      }, this.containerEl = e, this.emitter = new Gr(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
        passive: !0
      }), Oa += 1, 1 === Oa && window.addEventListener("touchmove", Ha, {
        passive: !1
      });
    }

    _createClass(Pa, [{
      key: "destroy",
      value: function destroy() {
        this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
          passive: !0
        }), Oa -= 1, Oa || window.removeEventListener("touchmove", Ha, {
          passive: !1
        });
      }
    }, {
      key: "tryStart",
      value: function tryStart(e) {
        var t = this.querySubjectEl(e),
            n = e.target;
        return !(!t || this.handleSelector && !Oe(n, this.handleSelector)) && (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0);
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        Na = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch();
      }
    }, {
      key: "querySubjectEl",
      value: function querySubjectEl(e) {
        return this.selector ? Oe(e.target, this.selector) : this.containerEl;
      }
    }, {
      key: "shouldIgnoreMouse",
      value: function shouldIgnoreMouse() {
        return Ia || this.isTouchDragging;
      }
    }, {
      key: "cancelTouchScroll",
      value: function cancelTouchScroll() {
        this.isDragging && (Na = !0);
      }
    }, {
      key: "initScrollWatch",
      value: function initScrollWatch(e) {
        this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0));
      }
    }, {
      key: "recordCoords",
      value: function recordCoords(e) {
        this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset);
      }
    }, {
      key: "destroyScrollWatch",
      value: function destroyScrollWatch() {
        this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0);
      }
    }, {
      key: "createEventFromMouse",
      value: function createEventFromMouse(e, t) {
        var n = 0,
            r = 0;
        return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
          origEvent: e,
          isTouch: !1,
          subjectEl: this.subjectEl,
          pageX: e.pageX,
          pageY: e.pageY,
          deltaX: n,
          deltaY: r
        };
      }
    }, {
      key: "createEventFromTouch",
      value: function createEventFromTouch(e, t) {
        var n,
            r,
            i = e.touches,
            s = 0,
            o = 0;
        return i && i.length ? (n = i[0].pageX, r = i[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (s = n - this.origPageX, o = r - this.origPageY), {
          origEvent: e,
          isTouch: !0,
          subjectEl: this.subjectEl,
          pageX: n,
          pageY: r,
          deltaX: s,
          deltaY: o
        };
      }
    }]);

    return Pa;
  }();

  function Ha(e) {
    Na && e.preventDefault();
  }

  var Ba =
  /*#__PURE__*/
  function () {
    function Ba() {
      _classCallCheck(this, Ba);

      this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
    }

    _createClass(Ba, [{
      key: "start",
      value: function start(e, t, n) {
        this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
      }
    }, {
      key: "handleMove",
      value: function handleMove(e, t) {
        this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition();
      }
    }, {
      key: "setIsVisible",
      value: function setIsVisible(e) {
        e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
      }
    }, {
      key: "stop",
      value: function stop(e, t) {
        var _this37 = this;

        var n = function n() {
          _this37.cleanup(), t();
        };

        e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(n, this.revertDuration) : setTimeout(n, 0);
      }
    }, {
      key: "doRevertAnimation",
      value: function doRevertAnimation(e, t) {
        var n = this.mirrorEl,
            r = this.sourceEl.getBoundingClientRect();
        n.style.transition = "top " + t + "ms,left " + t + "ms", Be(n, {
          left: r.left,
          top: r.top
        }), Ge(n, function () {
          n.style.transition = "", e();
        });
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.mirrorEl && (Ie(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
      }
    }, {
      key: "updateElPosition",
      value: function updateElPosition() {
        this.sourceEl && this.isVisible && Be(this.getMirrorEl(), {
          left: this.sourceElRect.left + this.deltaX,
          top: this.sourceElRect.top + this.deltaY
        });
      }
    }, {
      key: "getMirrorEl",
      value: function getMirrorEl() {
        var e = this.sourceElRect,
            t = this.mirrorEl;
        return t || (t = this.mirrorEl = this.sourceEl.cloneNode(!0), t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.classList.add("fc-event-dragging"), Be(t, {
          position: "fixed",
          zIndex: this.zIndex,
          visibility: "",
          boxSizing: "border-box",
          width: e.right - e.left,
          height: e.bottom - e.top,
          right: "auto",
          bottom: "auto",
          margin: 0
        }), this.parentNode.appendChild(t)), t;
      }
    }]);

    return Ba;
  }();

  var ja =
  /*#__PURE__*/
  function (_ss3) {
    _inherits(ja, _ss3);

    function ja(e, t) {
      var _this38;

      _classCallCheck(this, ja);

      _this38 = _possibleConstructorReturn(this, _getPrototypeOf(ja).call(this)), _this38.handleScroll = function () {
        _this38.scrollTop = _this38.scrollController.getScrollTop(), _this38.scrollLeft = _this38.scrollController.getScrollLeft(), _this38.handleScrollChange();
      }, _this38.scrollController = e, _this38.doesListening = t, _this38.scrollTop = _this38.origScrollTop = e.getScrollTop(), _this38.scrollLeft = _this38.origScrollLeft = e.getScrollLeft(), _this38.scrollWidth = e.getScrollWidth(), _this38.scrollHeight = e.getScrollHeight(), _this38.clientWidth = e.getClientWidth(), _this38.clientHeight = e.getClientHeight(), _this38.clientRect = _this38.computeClientRect(), _this38.doesListening && _this38.getEventTarget().addEventListener("scroll", _this38.handleScroll);
      return _this38;
    }

    _createClass(ja, [{
      key: "destroy",
      value: function destroy() {
        this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
      }
    }, {
      key: "getScrollTop",
      value: function getScrollTop() {
        return this.scrollTop;
      }
    }, {
      key: "getScrollLeft",
      value: function getScrollLeft() {
        return this.scrollLeft;
      }
    }, {
      key: "setScrollTop",
      value: function setScrollTop(e) {
        this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
      }
    }, {
      key: "setScrollLeft",
      value: function setScrollLeft(e) {
        this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
      }
    }, {
      key: "getClientWidth",
      value: function getClientWidth() {
        return this.clientWidth;
      }
    }, {
      key: "getClientHeight",
      value: function getClientHeight() {
        return this.clientHeight;
      }
    }, {
      key: "getScrollWidth",
      value: function getScrollWidth() {
        return this.scrollWidth;
      }
    }, {
      key: "getScrollHeight",
      value: function getScrollHeight() {
        return this.scrollHeight;
      }
    }, {
      key: "handleScrollChange",
      value: function handleScrollChange() {}
    }]);

    return ja;
  }(ss);

  var za =
  /*#__PURE__*/
  function (_ja) {
    _inherits(za, _ja);

    function za(e, t) {
      _classCallCheck(this, za);

      return _possibleConstructorReturn(this, _getPrototypeOf(za).call(this, new os(e), t));
    }

    _createClass(za, [{
      key: "getEventTarget",
      value: function getEventTarget() {
        return this.scrollController.el;
      }
    }, {
      key: "computeClientRect",
      value: function computeClientRect() {
        return es(this.scrollController.el);
      }
    }]);

    return za;
  }(ja);

  var Ua =
  /*#__PURE__*/
  function (_ja2) {
    _inherits(Ua, _ja2);

    function Ua(e) {
      _classCallCheck(this, Ua);

      return _possibleConstructorReturn(this, _getPrototypeOf(Ua).call(this, new as(), e));
    }

    _createClass(Ua, [{
      key: "getEventTarget",
      value: function getEventTarget() {
        return window;
      }
    }, {
      key: "computeClientRect",
      value: function computeClientRect() {
        return {
          left: this.scrollLeft,
          right: this.scrollLeft + this.clientWidth,
          top: this.scrollTop,
          bottom: this.scrollTop + this.clientHeight
        };
      }
    }, {
      key: "handleScrollChange",
      value: function handleScrollChange() {
        this.clientRect = this.computeClientRect();
      }
    }]);

    return Ua;
  }(ja);

  var Wa = "function" == typeof performance ? performance.now : Date.now;

  var La =
  /*#__PURE__*/
  function () {
    function La() {
      var _this39 = this;

      _classCallCheck(this, La);

      this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = function () {
        if (_this39.isAnimating) {
          var _e76 = _this39.computeBestEdge(_this39.pointerScreenX + window.pageXOffset, _this39.pointerScreenY + window.pageYOffset);

          if (_e76) {
            var _t44 = Wa();

            _this39.handleSide(_e76, (_t44 - _this39.msSinceRequest) / 1e3), _this39.requestAnimation(_t44);
          } else _this39.isAnimating = !1;
        }
      };
    }

    _createClass(La, [{
      key: "start",
      value: function start(e, t, n) {
        this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t));
      }
    }, {
      key: "handleMove",
      value: function handleMove(e, t) {
        if (this.isEnabled) {
          var _n53 = e - window.pageXOffset,
              _r49 = t - window.pageYOffset,
              _i28 = null === this.pointerScreenY ? 0 : _r49 - this.pointerScreenY,
              _s25 = null === this.pointerScreenX ? 0 : _n53 - this.pointerScreenX;

          _i28 < 0 ? this.everMovedUp = !0 : _i28 > 0 && (this.everMovedDown = !0), _s25 < 0 ? this.everMovedLeft = !0 : _s25 > 0 && (this.everMovedRight = !0), this.pointerScreenX = _n53, this.pointerScreenY = _r49, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(Wa()));
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.isEnabled) {
          this.isAnimating = !1;
          var _iteratorNormalCompletion53 = true;
          var _didIteratorError53 = false;
          var _iteratorError53 = undefined;

          try {
            for (var _iterator53 = this.scrollCaches[Symbol.iterator](), _step53; !(_iteratorNormalCompletion53 = (_step53 = _iterator53.next()).done); _iteratorNormalCompletion53 = true) {
              var _e77 = _step53.value;

              _e77.destroy();
            }
          } catch (err) {
            _didIteratorError53 = true;
            _iteratorError53 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion53 && _iterator53["return"] != null) {
                _iterator53["return"]();
              }
            } finally {
              if (_didIteratorError53) {
                throw _iteratorError53;
              }
            }
          }

          this.scrollCaches = null;
        }
      }
    }, {
      key: "requestAnimation",
      value: function requestAnimation(e) {
        this.msSinceRequest = e, requestAnimationFrame(this.animate);
      }
    }, {
      key: "handleSide",
      value: function handleSide(e, t) {
        var n = e.scrollCache,
            r = this.edgeThreshold,
            i = r - e.distance,
            s = i * i / (r * r) * this.maxVelocity * t,
            o = 1;

        switch (e.name) {
          case "left":
            o = -1;

          case "right":
            n.setScrollLeft(n.getScrollLeft() + s * o);
            break;

          case "top":
            o = -1;

          case "bottom":
            n.setScrollTop(n.getScrollTop() + s * o);
        }
      }
    }, {
      key: "computeBestEdge",
      value: function computeBestEdge(e, t) {
        var n = this.edgeThreshold,
            r = null,
            i = this.scrollCaches || [];
        var _iteratorNormalCompletion54 = true;
        var _didIteratorError54 = false;
        var _iteratorError54 = undefined;

        try {
          for (var _iterator54 = i[Symbol.iterator](), _step54; !(_iteratorNormalCompletion54 = (_step54 = _iterator54.next()).done); _iteratorNormalCompletion54 = true) {
            var _s26 = _step54.value;

            var _i29 = _s26.clientRect,
                _o20 = e - _i29.left,
                _a13 = _i29.right - e,
                _l9 = t - _i29.top,
                _c5 = _i29.bottom - t;

            _o20 >= 0 && _a13 >= 0 && _l9 >= 0 && _c5 >= 0 && (_l9 <= n && this.everMovedUp && _s26.canScrollUp() && (!r || r.distance > _l9) && (r = {
              scrollCache: _s26,
              name: "top",
              distance: _l9
            }), _c5 <= n && this.everMovedDown && _s26.canScrollDown() && (!r || r.distance > _c5) && (r = {
              scrollCache: _s26,
              name: "bottom",
              distance: _c5
            }), _o20 <= n && this.everMovedLeft && _s26.canScrollLeft() && (!r || r.distance > _o20) && (r = {
              scrollCache: _s26,
              name: "left",
              distance: _o20
            }), _a13 <= n && this.everMovedRight && _s26.canScrollRight() && (!r || r.distance > _a13) && (r = {
              scrollCache: _s26,
              name: "right",
              distance: _a13
            }));
          }
        } catch (err) {
          _didIteratorError54 = true;
          _iteratorError54 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion54 && _iterator54["return"] != null) {
              _iterator54["return"]();
            }
          } finally {
            if (_didIteratorError54) {
              throw _iteratorError54;
            }
          }
        }

        return r;
      }
    }, {
      key: "buildCaches",
      value: function buildCaches(e) {
        return this.queryScrollEls(e).map(function (e) {
          return e === window ? new Ua(!1) : new za(e, !1);
        });
      }
    }, {
      key: "queryScrollEls",
      value: function queryScrollEls(e) {
        var t = [];
        var _iteratorNormalCompletion55 = true;
        var _didIteratorError55 = false;
        var _iteratorError55 = undefined;

        try {
          for (var _iterator55 = this.scrollQuery[Symbol.iterator](), _step55; !(_iteratorNormalCompletion55 = (_step55 = _iterator55.next()).done); _iteratorNormalCompletion55 = true) {
            var _n54 = _step55.value;
            "object" == _typeof(_n54) ? t.push(_n54) : t.push.apply(t, _toConsumableArray(Array.prototype.slice.call(e.getRootNode().querySelectorAll(_n54))));
          }
        } catch (err) {
          _didIteratorError55 = true;
          _iteratorError55 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion55 && _iterator55["return"] != null) {
              _iterator55["return"]();
            }
          } finally {
            if (_didIteratorError55) {
              throw _iteratorError55;
            }
          }
        }

        return t;
      }
    }]);

    return La;
  }();

  var Fa =
  /*#__PURE__*/
  function (_ms) {
    _inherits(Fa, _ms);

    function Fa(e, t) {
      var _this40;

      _classCallCheck(this, Fa);

      _this40 = _possibleConstructorReturn(this, _getPrototypeOf(Fa).call(this, e)), _this40.containerEl = e, _this40.delay = null, _this40.minDistance = 0, _this40.touchScrollAllowed = !0, _this40.mirrorNeedsRevert = !1, _this40.isInteracting = !1, _this40.isDragging = !1, _this40.isDelayEnded = !1, _this40.isDistanceSurpassed = !1, _this40.delayTimeoutId = null, _this40.onPointerDown = function (e) {
        _this40.isDragging || (_this40.isInteracting = !0, _this40.isDelayEnded = !1, _this40.isDistanceSurpassed = !1, Je(document.body), et(document.body), e.isTouch || e.origEvent.preventDefault(), _this40.emitter.trigger("pointerdown", e), _this40.isInteracting && !_this40.pointer.shouldIgnoreMove && (_this40.mirror.setIsVisible(!1), _this40.mirror.start(e.subjectEl, e.pageX, e.pageY), _this40.startDelay(e), _this40.minDistance || _this40.handleDistanceSurpassed(e)));
      }, _this40.onPointerMove = function (e) {
        if (_this40.isInteracting) {
          if (_this40.emitter.trigger("pointermove", e), !_this40.isDistanceSurpassed) {
            var _t45,
                _n55 = _this40.minDistance,
                _r50 = e.deltaX,
                _i30 = e.deltaY;

            _t45 = _r50 * _r50 + _i30 * _i30, _t45 >= _n55 * _n55 && _this40.handleDistanceSurpassed(e);
          }

          _this40.isDragging && ("scroll" !== e.origEvent.type && (_this40.mirror.handleMove(e.pageX, e.pageY), _this40.autoScroller.handleMove(e.pageX, e.pageY)), _this40.emitter.trigger("dragmove", e));
        }
      }, _this40.onPointerUp = function (e) {
        _this40.isInteracting && (_this40.isInteracting = !1, Ke(document.body), tt(document.body), _this40.emitter.trigger("pointerup", e), _this40.isDragging && (_this40.autoScroller.stop(), _this40.tryStopDrag(e)), _this40.delayTimeoutId && (clearTimeout(_this40.delayTimeoutId), _this40.delayTimeoutId = null));
      };
      var n = _this40.pointer = new Pa(e);
      n.emitter.on("pointerdown", _this40.onPointerDown), n.emitter.on("pointermove", _this40.onPointerMove), n.emitter.on("pointerup", _this40.onPointerUp), t && (n.selector = t), _this40.mirror = new Ba(), _this40.autoScroller = new La();
      return _this40;
    }

    _createClass(Fa, [{
      key: "destroy",
      value: function destroy() {
        this.pointer.destroy(), this.onPointerUp({});
      }
    }, {
      key: "startDelay",
      value: function startDelay(e) {
        var _this41 = this;

        "number" == typeof this.delay ? this.delayTimeoutId = setTimeout(function () {
          _this41.delayTimeoutId = null, _this41.handleDelayEnd(e);
        }, this.delay) : this.handleDelayEnd(e);
      }
    }, {
      key: "handleDelayEnd",
      value: function handleDelayEnd(e) {
        this.isDelayEnded = !0, this.tryStartDrag(e);
      }
    }, {
      key: "handleDistanceSurpassed",
      value: function handleDistanceSurpassed(e) {
        this.isDistanceSurpassed = !0, this.tryStartDrag(e);
      }
    }, {
      key: "tryStartDrag",
      value: function tryStartDrag(e) {
        this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()));
      }
    }, {
      key: "tryStopDrag",
      value: function tryStopDrag(e) {
        this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
      }
    }, {
      key: "stopDrag",
      value: function stopDrag(e) {
        this.isDragging = !1, this.emitter.trigger("dragend", e);
      }
    }, {
      key: "setIgnoreMove",
      value: function setIgnoreMove(e) {
        this.pointer.shouldIgnoreMove = e;
      }
    }, {
      key: "setMirrorIsVisible",
      value: function setMirrorIsVisible(e) {
        this.mirror.setIsVisible(e);
      }
    }, {
      key: "setMirrorNeedsRevert",
      value: function setMirrorNeedsRevert(e) {
        this.mirrorNeedsRevert = e;
      }
    }, {
      key: "setAutoScrollEnabled",
      value: function setAutoScrollEnabled(e) {
        this.autoScroller.isEnabled = e;
      }
    }]);

    return Fa;
  }(ms);

  var Va =
  /*#__PURE__*/
  function () {
    function Va(e) {
      _classCallCheck(this, Va);

      this.origRect = ts(e), this.scrollCaches = ns(e).map(function (e) {
        return new za(e, !0);
      });
    }

    _createClass(Va, [{
      key: "destroy",
      value: function destroy() {
        var _iteratorNormalCompletion56 = true;
        var _didIteratorError56 = false;
        var _iteratorError56 = undefined;

        try {
          for (var _iterator56 = this.scrollCaches[Symbol.iterator](), _step56; !(_iteratorNormalCompletion56 = (_step56 = _iterator56.next()).done); _iteratorNormalCompletion56 = true) {
            var _e78 = _step56.value;

            _e78.destroy();
          }
        } catch (err) {
          _didIteratorError56 = true;
          _iteratorError56 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion56 && _iterator56["return"] != null) {
              _iterator56["return"]();
            }
          } finally {
            if (_didIteratorError56) {
              throw _iteratorError56;
            }
          }
        }
      }
    }, {
      key: "computeLeft",
      value: function computeLeft() {
        var e = this.origRect.left;
        var _iteratorNormalCompletion57 = true;
        var _didIteratorError57 = false;
        var _iteratorError57 = undefined;

        try {
          for (var _iterator57 = this.scrollCaches[Symbol.iterator](), _step57; !(_iteratorNormalCompletion57 = (_step57 = _iterator57.next()).done); _iteratorNormalCompletion57 = true) {
            var _t46 = _step57.value;
            e += _t46.origScrollLeft - _t46.getScrollLeft();
          }
        } catch (err) {
          _didIteratorError57 = true;
          _iteratorError57 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion57 && _iterator57["return"] != null) {
              _iterator57["return"]();
            }
          } finally {
            if (_didIteratorError57) {
              throw _iteratorError57;
            }
          }
        }

        return e;
      }
    }, {
      key: "computeTop",
      value: function computeTop() {
        var e = this.origRect.top;
        var _iteratorNormalCompletion58 = true;
        var _didIteratorError58 = false;
        var _iteratorError58 = undefined;

        try {
          for (var _iterator58 = this.scrollCaches[Symbol.iterator](), _step58; !(_iteratorNormalCompletion58 = (_step58 = _iterator58.next()).done); _iteratorNormalCompletion58 = true) {
            var _t47 = _step58.value;
            e += _t47.origScrollTop - _t47.getScrollTop();
          }
        } catch (err) {
          _didIteratorError58 = true;
          _iteratorError58 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion58 && _iterator58["return"] != null) {
              _iterator58["return"]();
            }
          } finally {
            if (_didIteratorError58) {
              throw _iteratorError58;
            }
          }
        }

        return e;
      }
    }, {
      key: "isWithinClipping",
      value: function isWithinClipping(e, t) {
        var n = {
          left: e,
          top: t
        };
        var _iteratorNormalCompletion59 = true;
        var _didIteratorError59 = false;
        var _iteratorError59 = undefined;

        try {
          for (var _iterator59 = this.scrollCaches[Symbol.iterator](), _step59; !(_iteratorNormalCompletion59 = (_step59 = _iterator59.next()).done); _iteratorNormalCompletion59 = true) {
            var _e79 = _step59.value;
            if (!Ga(_e79.getEventTarget()) && !Pi(n, _e79.clientRect)) return !1;
          }
        } catch (err) {
          _didIteratorError59 = true;
          _iteratorError59 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion59 && _iterator59["return"] != null) {
              _iterator59["return"]();
            }
          } finally {
            if (_didIteratorError59) {
              throw _iteratorError59;
            }
          }
        }

        return !0;
      }
    }]);

    return Va;
  }();

  function Ga(e) {
    var t = e.tagName;
    return "HTML" === t || "BODY" === t;
  }

  var Qa =
  /*#__PURE__*/
  function () {
    function Qa(e, t) {
      var _this42 = this;

      _classCallCheck(this, Qa);

      this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = function (e) {
        var t = _this42.dragging;
        _this42.initialHit = null, _this42.movingHit = null, _this42.finalHit = null, _this42.prepareHits(), _this42.processFirstCoord(e), _this42.initialHit || !_this42.requireInitial ? (t.setIgnoreMove(!1), _this42.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0);
      }, this.handleDragStart = function (e) {
        _this42.emitter.trigger("dragstart", e), _this42.handleMove(e, !0);
      }, this.handleDragMove = function (e) {
        _this42.emitter.trigger("dragmove", e), _this42.handleMove(e);
      }, this.handlePointerUp = function (e) {
        _this42.releaseHits(), _this42.emitter.trigger("pointerup", e);
      }, this.handleDragEnd = function (e) {
        _this42.movingHit && _this42.emitter.trigger("hitupdate", null, !0, e), _this42.finalHit = _this42.movingHit, _this42.movingHit = null, _this42.emitter.trigger("dragend", e);
      }, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new Gr();
    }

    _createClass(Qa, [{
      key: "processFirstCoord",
      value: function processFirstCoord(e) {
        var t,
            n = {
          left: e.pageX,
          top: e.pageY
        },
            r = n,
            i = e.subjectEl;
        i instanceof HTMLElement && (t = ts(i), r = Bi(r, t));
        var s = this.initialHit = this.queryHitForOffset(r.left, r.top);

        if (s) {
          if (this.useSubjectCenter && t) {
            var _e80 = Hi(t, s.rect);

            _e80 && (r = ji(_e80));
          }

          this.coordAdjust = zi(r, n);
        } else this.coordAdjust = {
          left: 0,
          top: 0
        };
      }
    }, {
      key: "handleMove",
      value: function handleMove(e, t) {
        var n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
        !t && qa(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e));
      }
    }, {
      key: "prepareHits",
      value: function prepareHits() {
        this.offsetTrackers = An(this.droppableStore, function (e) {
          return e.component.prepareHits(), new Va(e.el);
        });
      }
    }, {
      key: "releaseHits",
      value: function releaseHits() {
        var e = this.offsetTrackers;

        for (var _t48 in e) {
          e[_t48].destroy();
        }

        this.offsetTrackers = {};
      }
    }, {
      key: "queryHitForOffset",
      value: function queryHitForOffset(e, t) {
        var n = this.droppableStore,
            r = this.offsetTrackers,
            i = null;

        for (var _s27 in n) {
          var _o21 = n[_s27].component,
              _a14 = r[_s27];

          if (_a14 && _a14.isWithinClipping(e, t)) {
            var _n56 = _a14.computeLeft(),
                _r51 = _a14.computeTop(),
                _l10 = e - _n56,
                _c6 = t - _r51,
                _d5 = _a14.origRect,
                _u4 = _d5.right - _d5.left,
                _h3 = _d5.bottom - _d5.top;

            if (_l10 >= 0 && _l10 < _u4 && _c6 >= 0 && _c6 < _h3) {
              var _e81 = _o21.queryHit(_l10, _c6, _u4, _h3);

              _e81 && ar(_e81.dateProfile.activeRange, _e81.dateSpan.range) && (!i || _e81.layer > i.layer) && (_e81.componentId = _s27, _e81.context = _o21.context, _e81.rect.left += _n56, _e81.rect.right += _n56, _e81.rect.top += _r51, _e81.rect.bottom += _r51, i = _e81);
            }
          }
        }

        return i;
      }
    }]);

    return Qa;
  }();

  function qa(e, t) {
    return !e && !t || Boolean(e) === Boolean(t) && Ai(e.dateSpan, t.dateSpan);
  }

  function Ya(e, t) {
    var n = {};
    var _iteratorNormalCompletion60 = true;
    var _didIteratorError60 = false;
    var _iteratorError60 = undefined;

    try {
      for (var _iterator60 = t.pluginHooks.datePointTransforms[Symbol.iterator](), _step60; !(_iteratorNormalCompletion60 = (_step60 = _iterator60.next()).done); _iteratorNormalCompletion60 = true) {
        var _r52 = _step60.value;
        Object.assign(n, _r52(e, t));
      }
    } catch (err) {
      _didIteratorError60 = true;
      _iteratorError60 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion60 && _iterator60["return"] != null) {
          _iterator60["return"]();
        }
      } finally {
        if (_didIteratorError60) {
          throw _iteratorError60;
        }
      }
    }

    var r, i;
    return Object.assign(n, (r = e, {
      date: (i = t.dateEnv).toDate(r.range.start),
      dateStr: i.formatIso(r.range.start, {
        omitTime: r.allDay
      }),
      allDay: r.allDay
    })), n;
  }

  var Za =
  /*#__PURE__*/
  function (_Mi3) {
    _inherits(Za, _Mi3);

    function Za(e) {
      var _this43;

      _classCallCheck(this, Za);

      _this43 = _possibleConstructorReturn(this, _getPrototypeOf(Za).call(this, e)), _this43.subjectEl = null, _this43.subjectSeg = null, _this43.isDragging = !1, _this43.eventRange = null, _this43.relevantEvents = null, _this43.receivingContext = null, _this43.validMutation = null, _this43.mutatedRelevantEvents = null, _this43.handlePointerDown = function (e) {
        var t = e.origEvent.target,
            _assertThisInitialize3 = _assertThisInitialized(_this43),
            n = _assertThisInitialize3.component,
            r = _assertThisInitialize3.dragging,
            i = r.mirror,
            s = n.context.options,
            o = n.context;

        _this43.subjectEl = e.subjectEl;
        var a = _this43.subjectSeg = ai(e.subjectEl),
            l = (_this43.eventRange = a.eventRange).instance.instanceId;
        _this43.relevantEvents = xr(o.getCurrentData().eventStore, l), r.minDistance = e.isTouch ? 0 : s.eventDragMinDistance, r.delay = e.isTouch && l !== n.props.eventSelection ? function (e) {
          var t = e.context.options,
              n = t.eventLongPressDelay;
          null == n && (n = t.longPressDelay);
          return n;
        }(n) : null, s.fixedMirrorParent ? i.parentNode = s.fixedMirrorParent : i.parentNode = Oe(t, ".fc"), i.revertDuration = s.dragRevertDuration;
        var c = n.isValidSegDownEl(t) && !Oe(t, ".fc-event-resizer");
        r.setIgnoreMove(!c), _this43.isDragging = c && e.subjectEl.classList.contains("fc-event-draggable");
      }, _this43.handleDragStart = function (e) {
        var t = _this43.component.context,
            n = _this43.eventRange,
            r = n.instance.instanceId;
        e.isTouch ? r !== _this43.component.props.eventSelection && t.dispatch({
          type: "SELECT_EVENT",
          eventInstanceId: r
        }) : t.dispatch({
          type: "UNSELECT_EVENT"
        }), _this43.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
          el: _this43.subjectEl,
          event: new ti(t, n.def, n.instance),
          jsEvent: e.origEvent,
          view: t.viewApi
        }));
      }, _this43.handleHitUpdate = function (e, t) {
        if (!_this43.isDragging) return;
        var n = _this43.relevantEvents,
            r = _this43.hitDragging.initialHit,
            i = _this43.component.context,
            s = null,
            o = null,
            a = null,
            l = !1,
            c = {
          affectedEvents: n,
          mutatedEvents: {
            defs: {},
            instances: {}
          },
          isEvent: !0
        };

        if (e) {
          s = e.context;
          var _t49 = s.options;
          i === s || _t49.editable && _t49.droppable ? (o = function (e, t, n) {
            var r = e.dateSpan,
                i = t.dateSpan,
                s = r.range.start,
                o = i.range.start,
                a = {};
            r.allDay !== i.allDay && (a.allDay = i.allDay, a.hasEnd = t.context.options.allDayMaintainDuration, i.allDay && (s = Mt(s)));
            var l = hr(s, o, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
            l.milliseconds && (a.allDay = !1);
            var c = {
              datesDelta: l,
              standardProps: a
            };
            var _iteratorNormalCompletion61 = true;
            var _didIteratorError61 = false;
            var _iteratorError61 = undefined;

            try {
              for (var _iterator61 = n[Symbol.iterator](), _step61; !(_iteratorNormalCompletion61 = (_step61 = _iterator61.next()).done); _iteratorNormalCompletion61 = true) {
                var _r53 = _step61.value;

                _r53(c, e, t);
              }
            } catch (err) {
              _didIteratorError61 = true;
              _iteratorError61 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion61 && _iterator61["return"] != null) {
                  _iterator61["return"]();
                }
              } finally {
                if (_didIteratorError61) {
                  throw _iteratorError61;
                }
              }
            }

            return c;
          }(r, e, s.getCurrentData().pluginHooks.eventDragMutationMassagers), o && (a = $r(n, s.getCurrentData().eventUiBases, o, s), c.mutatedEvents = a, Ns(c, e.dateProfile, s) || (l = !0, o = null, a = null, c.mutatedEvents = {
            defs: {},
            instances: {}
          }))) : s = null;
        }

        _this43.displayDrag(s, c), l ? Xe() : $e(), t || (i === s && qa(r, e) && (o = null), _this43.dragging.setMirrorNeedsRevert(!o), _this43.dragging.setMirrorIsVisible(!e || !_this43.subjectEl.getRootNode().querySelector(".fc-event-mirror")), _this43.receivingContext = s, _this43.validMutation = o, _this43.mutatedRelevantEvents = a);
      }, _this43.handlePointerUp = function () {
        _this43.isDragging || _this43.cleanup();
      }, _this43.handleDragEnd = function (e) {
        if (_this43.isDragging) {
          var _t50 = _this43.component.context,
              _n57 = _t50.viewApi,
              _assertThisInitialize4 = _assertThisInitialized(_this43),
              _r54 = _assertThisInitialize4.receivingContext,
              _i31 = _assertThisInitialize4.validMutation,
              _s28 = _this43.eventRange.def,
              _o22 = _this43.eventRange.instance,
              _a15 = new ti(_t50, _s28, _o22),
              _l11 = _this43.relevantEvents,
              _c7 = _this43.mutatedRelevantEvents,
              _d6 = _this43.hitDragging.finalHit;

          if (_this43.clearDrag(), _t50.emitter.trigger("eventDragStop", {
            el: _this43.subjectEl,
            event: _a15,
            jsEvent: e.origEvent,
            view: _n57
          }), _i31) {
            if (_r54 === _t50) {
              var _r55 = new ti(_t50, _c7.defs[_s28.defId], _o22 ? _c7.instances[_o22.instanceId] : null);

              _t50.dispatch({
                type: "MERGE_EVENTS",
                eventStore: _c7
              });

              var _d7 = {
                oldEvent: _a15,
                event: _r55,
                relatedEvents: ri(_c7, _t50, _o22),
                revert: function revert() {
                  _t50.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: _l11
                  });
                }
              },
                  _u5 = {};
              var _iteratorNormalCompletion62 = true;
              var _didIteratorError62 = false;
              var _iteratorError62 = undefined;

              try {
                for (var _iterator62 = _t50.getCurrentData().pluginHooks.eventDropTransformers[Symbol.iterator](), _step62; !(_iteratorNormalCompletion62 = (_step62 = _iterator62.next()).done); _iteratorNormalCompletion62 = true) {
                  var _e82 = _step62.value;
                  Object.assign(_u5, _e82(_i31, _t50));
                }
              } catch (err) {
                _didIteratorError62 = true;
                _iteratorError62 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion62 && _iterator62["return"] != null) {
                    _iterator62["return"]();
                  }
                } finally {
                  if (_didIteratorError62) {
                    throw _iteratorError62;
                  }
                }
              }

              _t50.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, _d7), _u5), {
                el: e.subjectEl,
                delta: _i31.datesDelta,
                jsEvent: e.origEvent,
                view: _n57
              })), _t50.emitter.trigger("eventChange", _d7);
            } else if (_r54) {
              var _i32 = {
                event: _a15,
                relatedEvents: ri(_l11, _t50, _o22),
                revert: function revert() {
                  _t50.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: _l11
                  });
                }
              };
              _t50.emitter.trigger("eventLeave", Object.assign(Object.assign({}, _i32), {
                draggedEl: e.subjectEl,
                view: _n57
              })), _t50.dispatch({
                type: "REMOVE_EVENTS",
                eventStore: _l11
              }), _t50.emitter.trigger("eventRemove", _i32);

              var _u6 = _c7.defs[_s28.defId],
                  _h4 = _c7.instances[_o22.instanceId],
                  _f3 = new ti(_r54, _u6, _h4);

              _r54.dispatch({
                type: "MERGE_EVENTS",
                eventStore: _c7
              });

              var _g4 = {
                event: _f3,
                relatedEvents: ri(_c7, _r54, _h4),
                revert: function revert() {
                  _r54.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: _c7
                  });
                }
              };
              _r54.emitter.trigger("eventAdd", _g4), e.isTouch && _r54.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: _o22.instanceId
              }), _r54.emitter.trigger("drop", Object.assign(Object.assign({}, Ya(_d6.dateSpan, _r54)), {
                draggedEl: e.subjectEl,
                jsEvent: e.origEvent,
                view: _d6.context.viewApi
              })), _r54.emitter.trigger("eventReceive", Object.assign(Object.assign({}, _g4), {
                draggedEl: e.subjectEl,
                view: _d6.context.viewApi
              }));
            }
          } else _t50.emitter.trigger("_noEventDrop");
        }

        _this43.cleanup();
      };

      var _assertThisInitialize5 = _assertThisInitialized(_this43),
          t = _assertThisInitialize5.component,
          n = t.context.options,
          r = _this43.dragging = new Fa(e.el);

      r.pointer.selector = Za.SELECTOR, r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.dragScroll;
      var i = _this43.hitDragging = new Qa(_this43.dragging, Oi);
      i.useSubjectCenter = e.useEventCenter, i.emitter.on("pointerdown", _this43.handlePointerDown), i.emitter.on("dragstart", _this43.handleDragStart), i.emitter.on("hitupdate", _this43.handleHitUpdate), i.emitter.on("pointerup", _this43.handlePointerUp), i.emitter.on("dragend", _this43.handleDragEnd);
      return _this43;
    }

    _createClass(Za, [{
      key: "destroy",
      value: function destroy() {
        this.dragging.destroy();
      }
    }, {
      key: "displayDrag",
      value: function displayDrag(e, t) {
        var n = this.component.context,
            r = this.receivingContext;
        r && r !== e && (r === n ? r.dispatch({
          type: "SET_EVENT_DRAG",
          state: {
            affectedEvents: t.affectedEvents,
            mutatedEvents: {
              defs: {},
              instances: {}
            },
            isEvent: !0
          }
        }) : r.dispatch({
          type: "UNSET_EVENT_DRAG"
        })), e && e.dispatch({
          type: "SET_EVENT_DRAG",
          state: t
        });
      }
    }, {
      key: "clearDrag",
      value: function clearDrag() {
        var e = this.component.context,
            t = this.receivingContext;
        t && t.dispatch({
          type: "UNSET_EVENT_DRAG"
        }), e !== t && e.dispatch({
          type: "UNSET_EVENT_DRAG"
        });
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
      }
    }]);

    return Za;
  }(Mi);

  Za.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
  var Xa = {
    fixedMirrorParent: yn
  },
      $a = {
    dateClick: yn,
    eventDragStart: yn,
    eventDragStop: yn,
    eventDrop: yn,
    eventResizeStart: yn,
    eventResizeStop: yn,
    eventResize: yn,
    drop: yn,
    eventReceive: yn,
    eventLeave: yn
  };

  var Ja =
  /*#__PURE__*/
  function () {
    function Ja(e, t) {
      var _this44 = this;

      _classCallCheck(this, Ja);

      this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = function (e) {
        _this44.dragMeta = _this44.buildDragMeta(e.subjectEl);
      }, this.handleHitUpdate = function (e, t, n) {
        var r = _this44.hitDragging.dragging,
            i = null,
            s = null,
            o = !1,
            a = {
          affectedEvents: {
            defs: {},
            instances: {}
          },
          mutatedEvents: {
            defs: {},
            instances: {}
          },
          isEvent: _this44.dragMeta.create
        };
        e && (i = e.context, _this44.canDropElOnCalendar(n.subjectEl, i) && (s = function (e, t, n) {
          var r = Object.assign({}, t.leftoverProps);
          var _iteratorNormalCompletion63 = true;
          var _didIteratorError63 = false;
          var _iteratorError63 = undefined;

          try {
            for (var _iterator63 = n.pluginHooks.externalDefTransforms[Symbol.iterator](), _step63; !(_iteratorNormalCompletion63 = (_step63 = _iterator63.next()).done); _iteratorNormalCompletion63 = true) {
              var _i33 = _step63.value;
              Object.assign(r, _i33(e, t));
            }
          } catch (err) {
            _didIteratorError63 = true;
            _iteratorError63 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion63 && _iterator63["return"] != null) {
                _iterator63["return"]();
              }
            } finally {
              if (_didIteratorError63) {
                throw _iteratorError63;
              }
            }
          }

          var _Ar2 = Ar(r, n),
              i = _Ar2.refined,
              s = _Ar2.extra,
              o = wr(i, s, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
              a = e.range.start;

          e.allDay && t.startTime && (a = n.dateEnv.add(a, t.startTime));
          var l = t.duration ? n.dateEnv.add(a, t.duration) : Xr(e.allDay, a, n),
              c = pr(o.defId, {
            start: a,
            end: l
          });
          return {
            def: o,
            instance: c
          };
        }(e.dateSpan, _this44.dragMeta, i), a.mutatedEvents = Rr(s), o = !Ns(a, e.dateProfile, i), o && (a.mutatedEvents = {
          defs: {},
          instances: {}
        }, s = null))), _this44.displayDrag(i, a), r.setMirrorIsVisible(t || !s || !document.querySelector(".fc-event-mirror")), o ? Xe() : $e(), t || (r.setMirrorNeedsRevert(!s), _this44.receivingContext = i, _this44.droppableEvent = s);
      }, this.handleDragEnd = function (e) {
        var t = _this44.receivingContext,
            n = _this44.droppableEvent;

        if (_this44.clearDrag(), t && n) {
          var _r56 = _this44.hitDragging.finalHit,
              _i34 = _r56.context.viewApi,
              _s29 = _this44.dragMeta;

          if (t.emitter.trigger("drop", Object.assign(Object.assign({}, Ya(_r56.dateSpan, t)), {
            draggedEl: e.subjectEl,
            jsEvent: e.origEvent,
            view: _i34
          })), _s29.create) {
            var _r57 = Rr(n);

            t.dispatch({
              type: "MERGE_EVENTS",
              eventStore: _r57
            }), e.isTouch && t.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: n.instance.instanceId
            }), t.emitter.trigger("eventReceive", {
              event: new ti(t, n.def, n.instance),
              relatedEvents: [],
              revert: function revert() {
                t.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: _r57
                });
              },
              draggedEl: e.subjectEl,
              view: _i34
            });
          }
        }

        _this44.receivingContext = null, _this44.droppableEvent = null;
      };
      var n = this.hitDragging = new Qa(e, Oi);
      n.requireInitial = !1, n.emitter.on("dragstart", this.handleDragStart), n.emitter.on("hitupdate", this.handleHitUpdate), n.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = t;
    }

    _createClass(Ja, [{
      key: "buildDragMeta",
      value: function buildDragMeta(e) {
        return "object" == _typeof(this.suppliedDragMeta) ? bs(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? bs(this.suppliedDragMeta(e)) : function (e) {
          var t = function (e, t) {
            var n = vs.dataAttrPrefix,
                r = (n ? n + "-" : "") + t;
            return e.getAttribute("data-" + r) || "";
          }(e, "event");

          return bs(t ? JSON.parse(t) : {
            create: !1
          });
        }(e);
      }
    }, {
      key: "displayDrag",
      value: function displayDrag(e, t) {
        var n = this.receivingContext;
        n && n !== e && n.dispatch({
          type: "UNSET_EVENT_DRAG"
        }), e && e.dispatch({
          type: "SET_EVENT_DRAG",
          state: t
        });
      }
    }, {
      key: "clearDrag",
      value: function clearDrag() {
        this.receivingContext && this.receivingContext.dispatch({
          type: "UNSET_EVENT_DRAG"
        });
      }
    }, {
      key: "canDropElOnCalendar",
      value: function canDropElOnCalendar(e, t) {
        var n = t.options.dropAccept;
        return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(Ne(e, n));
      }
    }]);

    return Ja;
  }();

  vs.dataAttrPrefix = "";

  var Ka =
  /*#__PURE__*/
  function (_ms2) {
    _inherits(Ka, _ms2);

    function Ka(e) {
      var _this45;

      _classCallCheck(this, Ka);

      _this45 = _possibleConstructorReturn(this, _getPrototypeOf(Ka).call(this, e)), _this45.shouldIgnoreMove = !1, _this45.mirrorSelector = "", _this45.currentMirrorEl = null, _this45.handlePointerDown = function (e) {
        _this45.emitter.trigger("pointerdown", e), _this45.shouldIgnoreMove || _this45.emitter.trigger("dragstart", e);
      }, _this45.handlePointerMove = function (e) {
        _this45.shouldIgnoreMove || _this45.emitter.trigger("dragmove", e);
      }, _this45.handlePointerUp = function (e) {
        _this45.emitter.trigger("pointerup", e), _this45.shouldIgnoreMove || _this45.emitter.trigger("dragend", e);
      };
      var t = _this45.pointer = new Pa(e);
      t.emitter.on("pointerdown", _this45.handlePointerDown), t.emitter.on("pointermove", _this45.handlePointerMove), t.emitter.on("pointerup", _this45.handlePointerUp);
      return _this45;
    }

    _createClass(Ka, [{
      key: "destroy",
      value: function destroy() {
        this.pointer.destroy();
      }
    }, {
      key: "setIgnoreMove",
      value: function setIgnoreMove(e) {
        this.shouldIgnoreMove = e;
      }
    }, {
      key: "setMirrorIsVisible",
      value: function setMirrorIsVisible(e) {
        if (e) this.currentMirrorEl && (this.currentMirrorEl.style.visibility = "", this.currentMirrorEl = null);else {
          var _e83 = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;

          _e83 && (this.currentMirrorEl = _e83, _e83.style.visibility = "hidden");
        }
      }
    }]);

    return Ka;
  }(ms);

  var el = Po({
    name: "@fullcalendar/interaction",
    componentInteractions: [
    /*#__PURE__*/
    function (_Mi4) {
      _inherits(_class2, _Mi4);

      function _class2(e) {
        var _this46;

        _classCallCheck(this, _class2);

        _this46 = _possibleConstructorReturn(this, _getPrototypeOf(_class2).call(this, e)), _this46.handlePointerDown = function (e) {
          var _assertThisInitialize6 = _assertThisInitialized(_this46),
              t = _assertThisInitialize6.dragging,
              n = e.origEvent.target;

          t.setIgnoreMove(!_this46.component.isValidDateDownEl(n));
        }, _this46.handleDragEnd = function (e) {
          var _assertThisInitialize7 = _assertThisInitialized(_this46),
              t = _assertThisInitialize7.component,
              n = _this46.dragging.pointer;

          if (!n.wasTouchScroll) {
            var _this46$hitDragging = _this46.hitDragging,
                _n58 = _this46$hitDragging.initialHit,
                _r58 = _this46$hitDragging.finalHit;

            if (_n58 && _r58 && qa(_n58, _r58)) {
              var _r59 = t.context,
                  _i35 = Object.assign(Object.assign({}, Ya(_n58.dateSpan, _r59)), {
                dayEl: _n58.dayEl,
                jsEvent: e.origEvent,
                view: _r59.viewApi || _r59.calendarApi.view
              });

              _r59.emitter.trigger("dateClick", _i35);
            }
          }
        }, _this46.dragging = new Fa(e.el), _this46.dragging.autoScroller.isEnabled = !1;
        var t = _this46.hitDragging = new Qa(_this46.dragging, Ii(e));
        t.emitter.on("pointerdown", _this46.handlePointerDown), t.emitter.on("dragend", _this46.handleDragEnd);
        return _this46;
      }

      _createClass(_class2, [{
        key: "destroy",
        value: function destroy() {
          this.dragging.destroy();
        }
      }]);

      return _class2;
    }(Mi),
    /*#__PURE__*/
    function (_Mi5) {
      _inherits(_class3, _Mi5);

      function _class3(e) {
        var _this47;

        _classCallCheck(this, _class3);

        _this47 = _possibleConstructorReturn(this, _getPrototypeOf(_class3).call(this, e)), _this47.dragSelection = null, _this47.handlePointerDown = function (e) {
          var _assertThisInitialize8 = _assertThisInitialized(_this47),
              t = _assertThisInitialize8.component,
              n = _assertThisInitialize8.dragging,
              r = t.context.options,
              i = r.selectable && t.isValidDateDownEl(e.origEvent.target);

          n.setIgnoreMove(!i), n.delay = e.isTouch ? function (e) {
            var t = e.context.options,
                n = t.selectLongPressDelay;
            null == n && (n = t.longPressDelay);
            return n;
          }(t) : null;
        }, _this47.handleDragStart = function (e) {
          _this47.component.context.calendarApi.unselect(e);
        }, _this47.handleHitUpdate = function (e, t) {
          var n = _this47.component.context,
              r = null,
              i = !1;

          if (e) {
            var _t51 = _this47.hitDragging.initialHit;
            e.componentId === _t51.componentId && _this47.isHitComboAllowed && !_this47.isHitComboAllowed(_t51, e) || (r = function (e, t, n) {
              var r = e.dateSpan,
                  i = t.dateSpan,
                  s = [r.range.start, r.range.end, i.range.start, i.range.end];
              s.sort(lt);
              var o = {};
              var _iteratorNormalCompletion64 = true;
              var _didIteratorError64 = false;
              var _iteratorError64 = undefined;

              try {
                for (var _iterator64 = n[Symbol.iterator](), _step64; !(_iteratorNormalCompletion64 = (_step64 = _iterator64.next()).done); _iteratorNormalCompletion64 = true) {
                  var _r60 = _step64.value;

                  var _n59 = _r60(e, t);

                  if (!1 === _n59) return null;
                  _n59 && Object.assign(o, _n59);
                }
              } catch (err) {
                _didIteratorError64 = true;
                _iteratorError64 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion64 && _iterator64["return"] != null) {
                    _iterator64["return"]();
                  }
                } finally {
                  if (_didIteratorError64) {
                    throw _iteratorError64;
                  }
                }
              }

              return o.range = {
                start: s[0],
                end: s[3]
              }, o.allDay = r.allDay, o;
            }(_t51, e, n.pluginHooks.dateSelectionTransformers)), r && Ps(r, e.dateProfile, n) || (i = !0, r = null);
          }

          r ? n.dispatch({
            type: "SELECT_DATES",
            selection: r
          }) : t || n.dispatch({
            type: "UNSELECT_DATES"
          }), i ? Xe() : $e(), t || (_this47.dragSelection = r);
        }, _this47.handlePointerUp = function (e) {
          _this47.dragSelection && (Yr(_this47.dragSelection, e, _this47.component.context), _this47.dragSelection = null);
        };
        var t = e.component,
            n = t.context.options,
            r = _this47.dragging = new Fa(e.el);
        r.touchScrollAllowed = !1, r.minDistance = n.selectMinDistance || 0, r.autoScroller.isEnabled = n.dragScroll;
        var i = _this47.hitDragging = new Qa(_this47.dragging, Ii(e));
        i.emitter.on("pointerdown", _this47.handlePointerDown), i.emitter.on("dragstart", _this47.handleDragStart), i.emitter.on("hitupdate", _this47.handleHitUpdate), i.emitter.on("pointerup", _this47.handlePointerUp);
        return _this47;
      }

      _createClass(_class3, [{
        key: "destroy",
        value: function destroy() {
          this.dragging.destroy();
        }
      }]);

      return _class3;
    }(Mi), Za,
    /*#__PURE__*/
    function (_Mi6) {
      _inherits(_class4, _Mi6);

      function _class4(e) {
        var _this48;

        _classCallCheck(this, _class4);

        _this48 = _possibleConstructorReturn(this, _getPrototypeOf(_class4).call(this, e)), _this48.draggingSegEl = null, _this48.draggingSeg = null, _this48.eventRange = null, _this48.relevantEvents = null, _this48.validMutation = null, _this48.mutatedRelevantEvents = null, _this48.handlePointerDown = function (e) {
          var _assertThisInitialize9 = _assertThisInitialized(_this48),
              t = _assertThisInitialize9.component,
              n = ai(_this48.querySegEl(e)),
              r = _this48.eventRange = n.eventRange;

          _this48.dragging.minDistance = t.context.options.eventDragMinDistance, _this48.dragging.setIgnoreMove(!_this48.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && _this48.component.props.eventSelection !== r.instance.instanceId);
        }, _this48.handleDragStart = function (e) {
          var t = _this48.component.context,
              n = _this48.eventRange;
          _this48.relevantEvents = xr(t.getCurrentData().eventStore, _this48.eventRange.instance.instanceId);

          var r = _this48.querySegEl(e);

          _this48.draggingSegEl = r, _this48.draggingSeg = ai(r), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
            el: r,
            event: new ti(t, n.def, n.instance),
            jsEvent: e.origEvent,
            view: t.viewApi
          });
        }, _this48.handleHitUpdate = function (e, t, n) {
          var r = _this48.component.context,
              i = _this48.relevantEvents,
              s = _this48.hitDragging.initialHit,
              o = _this48.eventRange.instance,
              a = null,
              l = null,
              c = !1,
              d = {
            affectedEvents: i,
            mutatedEvents: {
              defs: {},
              instances: {}
            },
            isEvent: !0
          };

          if (e) {
            e.componentId === s.componentId && _this48.isHitComboAllowed && !_this48.isHitComboAllowed(s, e) || (a = function (e, t, n, r) {
              var i = e.context.dateEnv,
                  s = e.dateSpan.range.start,
                  o = t.dateSpan.range.start,
                  a = hr(s, o, i, e.largeUnit);

              if (n) {
                if (i.add(r.start, a) < r.end) return {
                  startDelta: a
                };
              } else if (i.add(r.end, a) > r.start) return {
                endDelta: a
              };

              return null;
            }(s, e, n.subjectEl.classList.contains("fc-event-resizer-start"), o.range));
          }

          a && (l = $r(i, r.getCurrentData().eventUiBases, a, r), d.mutatedEvents = l, Ns(d, e.dateProfile, r) || (c = !0, a = null, l = null, d.mutatedEvents = null)), l ? r.dispatch({
            type: "SET_EVENT_RESIZE",
            state: d
          }) : r.dispatch({
            type: "UNSET_EVENT_RESIZE"
          }), c ? Xe() : $e(), t || (a && qa(s, e) && (a = null), _this48.validMutation = a, _this48.mutatedRelevantEvents = l);
        }, _this48.handleDragEnd = function (e) {
          var t = _this48.component.context,
              n = _this48.eventRange.def,
              r = _this48.eventRange.instance,
              i = new ti(t, n, r),
              s = _this48.relevantEvents,
              o = _this48.mutatedRelevantEvents;

          if (t.emitter.trigger("eventResizeStop", {
            el: _this48.draggingSegEl,
            event: i,
            jsEvent: e.origEvent,
            view: t.viewApi
          }), _this48.validMutation) {
            var _a16 = new ti(t, o.defs[n.defId], r ? o.instances[r.instanceId] : null);

            t.dispatch({
              type: "MERGE_EVENTS",
              eventStore: o
            });
            var _l12 = {
              oldEvent: i,
              event: _a16,
              relatedEvents: ri(o, t, r),
              revert: function revert() {
                t.dispatch({
                  type: "MERGE_EVENTS",
                  eventStore: s
                });
              }
            };
            t.emitter.trigger("eventResize", Object.assign(Object.assign({}, _l12), {
              el: _this48.draggingSegEl,
              startDelta: _this48.validMutation.startDelta || ft(0),
              endDelta: _this48.validMutation.endDelta || ft(0),
              jsEvent: e.origEvent,
              view: t.viewApi
            })), t.emitter.trigger("eventChange", _l12);
          } else t.emitter.trigger("_noEventResize");

          _this48.draggingSeg = null, _this48.relevantEvents = null, _this48.validMutation = null;
        };
        var t = e.component,
            n = _this48.dragging = new Fa(e.el);
        n.pointer.selector = ".fc-event-resizer", n.touchScrollAllowed = !1, n.autoScroller.isEnabled = t.context.options.dragScroll;
        var r = _this48.hitDragging = new Qa(_this48.dragging, Ii(e));
        r.emitter.on("pointerdown", _this48.handlePointerDown), r.emitter.on("dragstart", _this48.handleDragStart), r.emitter.on("hitupdate", _this48.handleHitUpdate), r.emitter.on("dragend", _this48.handleDragEnd);
        return _this48;
      }

      _createClass(_class4, [{
        key: "destroy",
        value: function destroy() {
          this.dragging.destroy();
        }
      }, {
        key: "querySegEl",
        value: function querySegEl(e) {
          return Oe(e.subjectEl, ".fc-event");
        }
      }]);

      return _class4;
    }(Mi)],
    calendarInteractions: [
    /*#__PURE__*/
    function () {
      function _class5(e) {
        var _this49 = this;

        _classCallCheck(this, _class5);

        this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = function (e) {
          e.jsEvent && (_this49.isRecentPointerDateSelect = !0);
        }, this.onDocumentPointerDown = function (e) {
          var t = _this49.context.options.unselectCancel,
              n = ze(e.origEvent);
          _this49.matchesCancel = !!Oe(n, t), _this49.matchesEvent = !!Oe(n, Za.SELECTOR);
        }, this.onDocumentPointerUp = function (e) {
          var t = _this49.context,
              n = _this49.documentPointer,
              r = t.getCurrentData();

          if (!n.wasTouchScroll) {
            if (r.dateSelection && !_this49.isRecentPointerDateSelect) {
              var _n60 = t.options.unselectAuto;
              !_n60 || _n60 && _this49.matchesCancel || t.calendarApi.unselect(e);
            }

            r.eventSelection && !_this49.matchesEvent && t.dispatch({
              type: "UNSELECT_EVENT"
            });
          }

          _this49.isRecentPointerDateSelect = !1;
        };
        var t = this.documentPointer = new Pa(document);
        t.shouldIgnoreMove = !0, t.shouldWatchScroll = !1, t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
      }

      _createClass(_class5, [{
        key: "destroy",
        value: function destroy() {
          this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
        }
      }]);

      return _class5;
    }()],
    elementDraggingImpl: Fa,
    optionRefiners: Xa,
    listenerRefiners: $a
  });

  var tl =
  /*#__PURE__*/
  function (_ls2) {
    _inherits(tl, _ls2);

    function tl() {
      var _this50;

      _classCallCheck(this, tl);

      _this50 = _possibleConstructorReturn(this, _getPrototypeOf(tl).apply(this, arguments)), _this50.headerElRef = {
        current: null
      };
      return _this50;
    }

    _createClass(tl, [{
      key: "renderSimpleLayout",
      value: function renderSimpleLayout(e, t) {
        var n = this.props,
            r = this.context,
            i = [],
            s = no(r.options);
        return e && i.push({
          type: "header",
          key: "header",
          isSticky: s,
          chunk: {
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }
        }), i.push({
          type: "body",
          key: "body",
          liquid: !0,
          chunk: {
            content: t
          }
        }), p(er, {
          elClasses: ["fc-daygrid"],
          viewSpec: r.viewSpec
        }, p(io, {
          liquid: !n.isHeightAuto && !n.forPrint,
          collapsibleWidth: n.forPrint,
          cols: [],
          sections: i
        }));
      }
    }, {
      key: "renderHScrollLayout",
      value: function renderHScrollLayout(e, t, n, r) {
        var i = this.context.pluginHooks.scrollGridImpl;
        if (!i) throw new Error("No ScrollGrid implementation");
        var s = this.props,
            o = this.context,
            a = !s.forPrint && no(o.options),
            l = !s.forPrint && ro(o.options),
            c = [];
        return e && c.push({
          type: "header",
          key: "header",
          isSticky: a,
          chunks: [{
            key: "main",
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }]
        }), c.push({
          type: "body",
          key: "body",
          liquid: !0,
          chunks: [{
            key: "main",
            content: t
          }]
        }), l && c.push({
          type: "footer",
          key: "footer",
          isSticky: !0,
          chunks: [{
            key: "main",
            content: to
          }]
        }), p(er, {
          elClasses: ["fc-daygrid"],
          viewSpec: o.viewSpec
        }, p(i, {
          liquid: !s.isHeightAuto && !s.forPrint,
          forPrint: s.forPrint,
          collapsibleWidth: s.forPrint,
          colGroups: [{
            cols: [{
              span: n,
              minWidth: r
            }]
          }],
          sections: c
        }));
      }
    }]);

    return tl;
  }(ls);

  function nl(e, t) {
    var n = [];

    for (var _e84 = 0; _e84 < t; _e84 += 1) {
      n[_e84] = [];
    }

    var _iteratorNormalCompletion65 = true;
    var _didIteratorError65 = false;
    var _iteratorError65 = undefined;

    try {
      for (var _iterator65 = e[Symbol.iterator](), _step65; !(_iteratorNormalCompletion65 = (_step65 = _iterator65.next()).done); _iteratorNormalCompletion65 = true) {
        var _t52 = _step65.value;

        n[_t52.row].push(_t52);
      }
    } catch (err) {
      _didIteratorError65 = true;
      _iteratorError65 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion65 && _iterator65["return"] != null) {
          _iterator65["return"]();
        }
      } finally {
        if (_didIteratorError65) {
          throw _iteratorError65;
        }
      }
    }

    return n;
  }

  function rl(e, t) {
    var n = [];

    for (var _e85 = 0; _e85 < t; _e85 += 1) {
      n[_e85] = [];
    }

    var _iteratorNormalCompletion66 = true;
    var _didIteratorError66 = false;
    var _iteratorError66 = undefined;

    try {
      for (var _iterator66 = e[Symbol.iterator](), _step66; !(_iteratorNormalCompletion66 = (_step66 = _iterator66.next()).done); _iteratorNormalCompletion66 = true) {
        var _t53 = _step66.value;

        n[_t53.firstCol].push(_t53);
      }
    } catch (err) {
      _didIteratorError66 = true;
      _iteratorError66 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion66 && _iterator66["return"] != null) {
          _iterator66["return"]();
        }
      } finally {
        if (_didIteratorError66) {
          throw _iteratorError66;
        }
      }
    }

    return n;
  }

  function il(e, t) {
    var n = [];

    if (e) {
      for (var _r61 = 0; _r61 < t; _r61 += 1) {
        n[_r61] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: []
        };
      }

      var _iteratorNormalCompletion67 = true;
      var _didIteratorError67 = false;
      var _iteratorError67 = undefined;

      try {
        for (var _iterator67 = e.segs[Symbol.iterator](), _step67; !(_iteratorNormalCompletion67 = (_step67 = _iterator67.next()).done); _iteratorNormalCompletion67 = true) {
          var _t54 = _step67.value;

          n[_t54.row].segs.push(_t54);
        }
      } catch (err) {
        _didIteratorError67 = true;
        _iteratorError67 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion67 && _iterator67["return"] != null) {
            _iterator67["return"]();
          }
        } finally {
          if (_didIteratorError67) {
            throw _iteratorError67;
          }
        }
      }
    } else for (var _e86 = 0; _e86 < t; _e86 += 1) {
      n[_e86] = null;
    }

    return n;
  }

  var sl = an({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "narrow"
  });

  function ol(e) {
    var t = e.eventRange.ui.display;
    return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd;
  }

  var al =
  /*#__PURE__*/
  function (_Gn19) {
    _inherits(al, _Gn19);

    function al() {
      _classCallCheck(this, al);

      return _possibleConstructorReturn(this, _getPrototypeOf(al).apply(this, arguments));
    }

    _createClass(al, [{
      key: "render",
      value: function render() {
        var e = this.props;
        return p(oo, Object.assign({}, e, {
          elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
          defaultTimeFormat: sl,
          defaultDisplayEventEnd: e.defaultDisplayEventEnd,
          disableResizing: !e.seg.eventRange.def.allDay
        }));
      }
    }]);

    return al;
  }(Gn);

  var ll =
  /*#__PURE__*/
  function (_Gn20) {
    _inherits(ll, _Gn20);

    function ll() {
      _classCallCheck(this, ll);

      return _possibleConstructorReturn(this, _getPrototypeOf(ll).apply(this, arguments));
    }

    _createClass(ll, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.seg,
            i = pi(r, n.eventTimeFormat || sl, t, !0, e.defaultDisplayEventEnd);
        return p(so, Object.assign({}, e, {
          elTag: "a",
          elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
          elAttrs: bi(e.seg, t),
          defaultGenerator: cl,
          timeText: i,
          isResizing: !1,
          isDateSelecting: !1
        }));
      }
    }]);

    return ll;
  }(Gn);

  function cl(e) {
    return p(y, null, p("div", {
      className: "fc-daygrid-event-dot",
      style: {
        borderColor: e.borderColor || e.backgroundColor
      }
    }), e.timeText && p("div", {
      className: "fc-event-time"
    }, e.timeText), p("div", {
      className: "fc-event-title"
    }, e.event.title || p(y, null, " ")));
  }

  var dl =
  /*#__PURE__*/
  function (_Gn21) {
    _inherits(dl, _Gn21);

    function dl() {
      var _this51;

      _classCallCheck(this, dl);

      _this51 = _possibleConstructorReturn(this, _getPrototypeOf(dl).apply(this, arguments)), _this51.compileSegs = Gt(ul);
      return _this51;
    }

    _createClass(dl, [{
      key: "render",
      value: function render() {
        var e = this.props,
            _this$compileSegs = this.compileSegs(e.singlePlacements),
            t = _this$compileSegs.allSegs,
            n = _this$compileSegs.invisibleSegs;

        return p(So, {
          elClasses: ["fc-daygrid-more-link"],
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          allDayDate: e.allDayDate,
          moreCnt: e.moreCnt,
          allSegs: t,
          hiddenSegs: n,
          alignmentElRef: e.alignmentElRef,
          alignGridTop: e.alignGridTop,
          extraDateSpan: e.extraDateSpan,
          popoverContent: function popoverContent() {
            var n = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
            return p(y, null, t.map(function (t) {
              var r = t.eventRange.instance.instanceId;
              return p("div", {
                className: "fc-daygrid-event-harness",
                key: r,
                style: {
                  visibility: n[r] ? "hidden" : ""
                }
              }, ol(t) ? p(ll, Object.assign({
                seg: t,
                isDragging: !1,
                isSelected: r === e.eventSelection,
                defaultDisplayEventEnd: !1
              }, mi(t, e.todayRange))) : p(al, Object.assign({
                seg: t,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: r === e.eventSelection,
                defaultDisplayEventEnd: !1
              }, mi(t, e.todayRange))));
            }));
          }
        });
      }
    }]);

    return dl;
  }(Gn);

  function ul(e) {
    var t = [],
        n = [];
    var _iteratorNormalCompletion68 = true;
    var _didIteratorError68 = false;
    var _iteratorError68 = undefined;

    try {
      for (var _iterator68 = e[Symbol.iterator](), _step68; !(_iteratorNormalCompletion68 = (_step68 = _iterator68.next()).done); _iteratorNormalCompletion68 = true) {
        var _r62 = _step68.value;
        t.push(_r62.seg), _r62.isVisible || n.push(_r62.seg);
      }
    } catch (err) {
      _didIteratorError68 = true;
      _iteratorError68 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion68 && _iterator68["return"] != null) {
          _iterator68["return"]();
        }
      } finally {
        if (_didIteratorError68) {
          throw _iteratorError68;
        }
      }
    }

    return {
      allSegs: t,
      invisibleSegs: n
    };
  }

  var hl = an({
    week: "narrow"
  });

  var fl =
  /*#__PURE__*/
  function (_ls3) {
    _inherits(fl, _ls3);

    function fl() {
      var _this52;

      _classCallCheck(this, fl);

      _this52 = _possibleConstructorReturn(this, _getPrototypeOf(fl).apply(this, arguments)), _this52.rootElRef = {
        current: null
      }, _this52.state = {
        dayNumberId: We()
      }, _this52.handleRootEl = function (e) {
        Qn(_this52.rootElRef, e), Qn(_this52.props.elRef, e);
      };
      return _this52;
    }

    _createClass(fl, [{
      key: "render",
      value: function render() {
        var e = this.context,
            t = this.props,
            n = this.state,
            r = this.rootElRef,
            i = e.options,
            s = e.dateEnv,
            o = t.date,
            a = t.dateProfile;

        var l = t.showDayNumber && function (e, t, n) {
          var r = t.start,
              i = t.end,
              s = Ct(i, -1),
              o = n.getYear(r),
              a = n.getMonth(r),
              l = n.getYear(s),
              c = n.getMonth(s);
          return !(o === l && a === c) && Boolean(e.valueOf() === r.valueOf() || 1 === n.getDay(e) && e.valueOf() < i.valueOf());
        }(o, a.currentRange, s);

        return p(uo, {
          elTag: "td",
          elRef: this.handleRootEl,
          elClasses: ["fc-daygrid-day"].concat(_toConsumableArray(t.extraClassNames || [])),
          elAttrs: Object.assign(Object.assign(Object.assign({}, t.extraDataAttrs), t.showDayNumber ? {
            "aria-labelledby": n.dayNumberId
          } : {}), {
            role: "gridcell"
          }),
          defaultGenerator: gl,
          date: o,
          dateProfile: a,
          todayRange: t.todayRange,
          showDayNumber: t.showDayNumber,
          isMonthStart: l,
          extraRenderProps: t.extraRenderProps
        }, function (s, a) {
          return p("div", {
            ref: t.innerElRef,
            className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
            style: {
              minHeight: t.minHeight
            }
          }, t.showWeekNumber && p(vo, {
            elTag: "a",
            elClasses: ["fc-daygrid-week-number"],
            elAttrs: qi(e, o, "week"),
            date: o,
            defaultFormat: hl
          }), !a.isDisabled && (t.showDayNumber || ho(i) || t.forceDayTop) ? p("div", {
            className: "fc-daygrid-day-top"
          }, p(s, {
            elTag: "a",
            elClasses: ["fc-daygrid-day-number", l && "fc-daygrid-month-start"],
            elAttrs: Object.assign(Object.assign({}, qi(e, o)), {
              id: n.dayNumberId
            })
          })) : t.showDayNumber ? p("div", {
            className: "fc-daygrid-day-top",
            style: {
              visibility: "hidden"
            }
          }, p("a", {
            className: "fc-daygrid-day-number"
          }, " ")) : void 0, p("div", {
            className: "fc-daygrid-day-events",
            ref: t.fgContentElRef
          }, t.fgContent, p("div", {
            className: "fc-daygrid-day-bottom",
            style: {
              marginTop: t.moreMarginTop
            }
          }, p(dl, {
            allDayDate: o,
            singlePlacements: t.singlePlacements,
            moreCnt: t.moreCnt,
            alignmentElRef: r,
            alignGridTop: !t.showDayNumber,
            extraDateSpan: t.extraDateSpan,
            dateProfile: t.dateProfile,
            eventSelection: t.eventSelection,
            eventDrag: t.eventDrag,
            eventResize: t.eventResize,
            todayRange: t.todayRange
          }))), p("div", {
            className: "fc-daygrid-day-bg"
          }, t.bgContent));
        });
      }
    }]);

    return fl;
  }(ls);

  function gl(e) {
    return e.dayNumberText || p(y, null, " ");
  }

  function pl(e) {
    return e.eventRange.instance.instanceId + ":" + e.firstCol;
  }

  function ml(e) {
    return pl(e) + ":" + e.lastCol;
  }

  function vl(e, t, n, r, i, s, o) {
    var a = new bl(function (t) {
      var n = e[t.index].eventRange.instance.instanceId + ":" + t.span.start + ":" + (t.span.end - 1);
      return i[n] || 1;
    });
    a.allowReslicing = !0, a.strictOrder = r, !0 === t || !0 === n ? (a.maxCoord = s, a.hiddenConsumes = !0) : "number" == typeof t ? a.maxStackCnt = t : "number" == typeof n && (a.maxStackCnt = n, a.hiddenConsumes = !0);
    var l = [],
        c = [];

    for (var _t55 = 0; _t55 < e.length; _t55 += 1) {
      var _n61 = e[_t55],
          _r63 = ml(_n61);

      null != i[_r63] ? l.push({
        index: _t55,
        span: {
          start: _n61.firstCol,
          end: _n61.lastCol + 1
        }
      }) : c.push(_n61);
    }

    var d = a.addSegs(l),
        u = a.toRects(),
        _ref8 = function (e, t, n) {
      var r = function (e, t) {
        var n = [];

        for (var _e87 = 0; _e87 < t; _e87 += 1) {
          n.push([]);
        }

        var _iteratorNormalCompletion69 = true;
        var _didIteratorError69 = false;
        var _iteratorError69 = undefined;

        try {
          for (var _iterator69 = e[Symbol.iterator](), _step69; !(_iteratorNormalCompletion69 = (_step69 = _iterator69.next()).done); _iteratorNormalCompletion69 = true) {
            var _t56 = _step69.value;

            for (var _e88 = _t56.span.start; _e88 < _t56.span.end; _e88 += 1) {
              n[_e88].push(_t56);
            }
          }
        } catch (err) {
          _didIteratorError69 = true;
          _iteratorError69 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion69 && _iterator69["return"] != null) {
              _iterator69["return"]();
            }
          } finally {
            if (_didIteratorError69) {
              throw _iteratorError69;
            }
          }
        }

        return n;
      }(e, n.length),
          i = [],
          s = [],
          o = [];

      for (var _e89 = 0; _e89 < n.length; _e89 += 1) {
        var _a17 = r[_e89],
            _l13 = [],
            _c8 = 0,
            _d8 = 0;
        var _iteratorNormalCompletion70 = true;
        var _didIteratorError70 = false;
        var _iteratorError70 = undefined;

        try {
          for (var _iterator70 = _a17[Symbol.iterator](), _step70; !(_iteratorNormalCompletion70 = (_step70 = _iterator70.next()).done); _iteratorNormalCompletion70 = true) {
            var _r64 = _step70.value;
            var _i36 = t[_r64.index];
            _l13.push({
              seg: yl(_i36, _e89, _e89 + 1, n),
              isVisible: !0,
              isAbsolute: !1,
              absoluteTop: _r64.levelCoord,
              marginTop: _r64.levelCoord - _c8
            }), _c8 = _r64.levelCoord + _r64.thickness;
          }
        } catch (err) {
          _didIteratorError70 = true;
          _iteratorError70 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion70 && _iterator70["return"] != null) {
              _iterator70["return"]();
            }
          } finally {
            if (_didIteratorError70) {
              throw _iteratorError70;
            }
          }
        }

        var _u7 = [];
        _c8 = 0, _d8 = 0;
        var _iteratorNormalCompletion71 = true;
        var _didIteratorError71 = false;
        var _iteratorError71 = undefined;

        try {
          for (var _iterator71 = _a17[Symbol.iterator](), _step71; !(_iteratorNormalCompletion71 = (_step71 = _iterator71.next()).done); _iteratorNormalCompletion71 = true) {
            var _r65 = _step71.value;

            var _i37 = t[_r65.index],
                _s30 = _r65.span.end - _r65.span.start > 1,
                _o23 = _r65.span.start === _e89;

            _d8 += _r65.levelCoord - _c8, _c8 = _r65.levelCoord + _r65.thickness, _s30 ? (_d8 += _r65.thickness, _o23 && _u7.push({
              seg: yl(_i37, _r65.span.start, _r65.span.end, n),
              isVisible: !0,
              isAbsolute: !0,
              absoluteTop: _r65.levelCoord,
              marginTop: 0
            })) : _o23 && (_u7.push({
              seg: yl(_i37, _r65.span.start, _r65.span.end, n),
              isVisible: !0,
              isAbsolute: !1,
              absoluteTop: _r65.levelCoord,
              marginTop: _d8
            }), _d8 = 0);
          }
        } catch (err) {
          _didIteratorError71 = true;
          _iteratorError71 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion71 && _iterator71["return"] != null) {
              _iterator71["return"]();
            }
          } finally {
            if (_didIteratorError71) {
              throw _iteratorError71;
            }
          }
        }

        i.push(_l13), s.push(_u7), o.push(_d8);
      }

      return {
        singleColPlacements: i,
        multiColPlacements: s,
        leftoverMargins: o
      };
    }(u, e, o),
        h = _ref8.singleColPlacements,
        f = _ref8.multiColPlacements,
        g = _ref8.leftoverMargins,
        p = [],
        m = [];

    for (var _i38 = 0, _c9 = c; _i38 < _c9.length; _i38++) {
      var _e92 = _c9[_i38];

      f[_e92.firstCol].push({
        seg: _e92,
        isVisible: !1,
        isAbsolute: !0,
        absoluteTop: 0,
        marginTop: 0
      });

      for (var _t57 = _e92.firstCol; _t57 <= _e92.lastCol; _t57 += 1) {
        h[_t57].push({
          seg: yl(_e92, _t57, _t57 + 1, o),
          isVisible: !1,
          isAbsolute: !1,
          absoluteTop: 0,
          marginTop: 0
        });
      }
    }

    for (var _e90 = 0; _e90 < o.length; _e90 += 1) {
      p.push(0);
    }

    var _iteratorNormalCompletion72 = true;
    var _didIteratorError72 = false;
    var _iteratorError72 = undefined;

    try {
      for (var _iterator72 = d[Symbol.iterator](), _step72; !(_iteratorNormalCompletion72 = (_step72 = _iterator72.next()).done); _iteratorNormalCompletion72 = true) {
        var _t58 = _step72.value;
        var _n62 = e[_t58.index],
            _r66 = _t58.span;

        f[_r66.start].push({
          seg: yl(_n62, _r66.start, _r66.end, o),
          isVisible: !1,
          isAbsolute: !0,
          absoluteTop: 0,
          marginTop: 0
        });

        for (var _e93 = _r66.start; _e93 < _r66.end; _e93 += 1) {
          p[_e93] += 1, h[_e93].push({
            seg: yl(_n62, _e93, _e93 + 1, o),
            isVisible: !1,
            isAbsolute: !1,
            absoluteTop: 0,
            marginTop: 0
          });
        }
      }
    } catch (err) {
      _didIteratorError72 = true;
      _iteratorError72 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion72 && _iterator72["return"] != null) {
          _iterator72["return"]();
        }
      } finally {
        if (_didIteratorError72) {
          throw _iteratorError72;
        }
      }
    }

    for (var _e91 = 0; _e91 < o.length; _e91 += 1) {
      m.push(g[_e91]);
    }

    return {
      singleColPlacements: h,
      multiColPlacements: f,
      moreCnts: p,
      moreMarginTops: m
    };
  }

  function yl(e, t, n, r) {
    if (e.firstCol === t && e.lastCol === n - 1) return e;
    var i = e.eventRange,
        s = i.range,
        o = ir(s, {
      start: r[t].date,
      end: wt(r[n - 1].date, 1)
    });
    return Object.assign(Object.assign({}, e), {
      firstCol: t,
      lastCol: n - 1,
      eventRange: {
        def: i.def,
        ui: Object.assign(Object.assign({}, i.ui), {
          durationEditable: !1
        }),
        instance: i.instance,
        range: o
      },
      isStart: e.isStart && o.start.valueOf() === s.start.valueOf(),
      isEnd: e.isEnd && o.end.valueOf() === s.end.valueOf()
    });
  }

  var bl =
  /*#__PURE__*/
  function (_cs) {
    _inherits(bl, _cs);

    function bl() {
      var _this53;

      _classCallCheck(this, bl);

      _this53 = _possibleConstructorReturn(this, _getPrototypeOf(bl).apply(this, arguments)), _this53.hiddenConsumes = !1, _this53.forceHidden = {};
      return _this53;
    }

    _createClass(bl, [{
      key: "addSegs",
      value: function addSegs(e) {
        var _this54 = this;

        var t = _get(_getPrototypeOf(bl.prototype), "addSegs", this).call(this, e),
            n = this.entriesByLevel,
            r = function r(e) {
          return !_this54.forceHidden[us(e)];
        };

        for (var _e94 = 0; _e94 < n.length; _e94 += 1) {
          n[_e94] = n[_e94].filter(r);
        }

        return t;
      }
    }, {
      key: "handleInvalidInsertion",
      value: function handleInvalidInsertion(e, t, n) {
        var r = this.entriesByLevel,
            i = this.forceHidden,
            s = e.touchingEntry,
            o = e.touchingLevel,
            a = e.touchingLateral;

        if (this.hiddenConsumes && s) {
          var _e95 = us(s);

          if (!i[_e95]) if (this.allowReslicing) {
            var _e96 = Object.assign(Object.assign({}, s), {
              span: fs(s.span, t.span)
            });

            i[us(_e96)] = !0, r[o][a] = _e96, n.push(_e96), this.splitEntry(s, t, n);
          } else i[_e95] = !0, n.push(s);
        }

        _get(_getPrototypeOf(bl.prototype), "handleInvalidInsertion", this).call(this, e, t, n);
      }
    }]);

    return bl;
  }(cs);

  var El =
  /*#__PURE__*/
  function (_ls4) {
    _inherits(El, _ls4);

    function El() {
      var _this55;

      _classCallCheck(this, El);

      _this55 = _possibleConstructorReturn(this, _getPrototypeOf(El).apply(this, arguments)), _this55.cellElRefs = new Vs(), _this55.frameElRefs = new Vs(), _this55.fgElRefs = new Vs(), _this55.segHarnessRefs = new Vs(), _this55.rootElRef = {
        current: null
      }, _this55.state = {
        framePositions: null,
        maxContentHeight: null,
        segHeights: {}
      }, _this55.handleResize = function (e) {
        e && _this55.updateSizing(!0);
      };
      return _this55;
    }

    _createClass(El, [{
      key: "render",
      value: function render() {
        var _this56 = this;

        var e = this.props,
            t = this.state,
            n = this.context,
            r = n.options,
            i = e.cells.length,
            s = rl(e.businessHourSegs, i),
            o = rl(e.bgEventSegs, i),
            a = rl(this.getHighlightSegs(), i),
            l = rl(this.getMirrorSegs(), i),
            _vl = vl(di(e.fgEventSegs, r.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, r.eventOrderStrict, t.segHeights, t.maxContentHeight, e.cells),
            c = _vl.singleColPlacements,
            d = _vl.multiColPlacements,
            u = _vl.moreCnts,
            h = _vl.moreMarginTops,
            f = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};

        return p("tr", {
          ref: this.rootElRef,
          role: "row"
        }, e.renderIntro && e.renderIntro(), e.cells.map(function (t, n) {
          var r = _this56.renderFgSegs(n, e.forPrint ? c[n] : d[n], e.todayRange, f),
              i = _this56.renderFgSegs(n, function (e, t) {
            if (!e.length) return [];

            var n = function (e) {
              var t = {};
              var _iteratorNormalCompletion73 = true;
              var _didIteratorError73 = false;
              var _iteratorError73 = undefined;

              try {
                for (var _iterator73 = e[Symbol.iterator](), _step73; !(_iteratorNormalCompletion73 = (_step73 = _iterator73.next()).done); _iteratorNormalCompletion73 = true) {
                  var _n63 = _step73.value;
                  var _iteratorNormalCompletion74 = true;
                  var _didIteratorError74 = false;
                  var _iteratorError74 = undefined;

                  try {
                    for (var _iterator74 = _n63[Symbol.iterator](), _step74; !(_iteratorNormalCompletion74 = (_step74 = _iterator74.next()).done); _iteratorNormalCompletion74 = true) {
                      var _e97 = _step74.value;
                      t[_e97.seg.eventRange.instance.instanceId] = _e97.absoluteTop;
                    }
                  } catch (err) {
                    _didIteratorError74 = true;
                    _iteratorError74 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion74 && _iterator74["return"] != null) {
                        _iterator74["return"]();
                      }
                    } finally {
                      if (_didIteratorError74) {
                        throw _iteratorError74;
                      }
                    }
                  }
                }
              } catch (err) {
                _didIteratorError73 = true;
                _iteratorError73 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion73 && _iterator73["return"] != null) {
                    _iterator73["return"]();
                  }
                } finally {
                  if (_didIteratorError73) {
                    throw _iteratorError73;
                  }
                }
              }

              return t;
            }(t);

            return e.map(function (e) {
              return {
                seg: e,
                isVisible: !0,
                isAbsolute: !0,
                absoluteTop: n[e.eventRange.instance.instanceId],
                marginTop: 0
              };
            });
          }(l[n], d), e.todayRange, {}, Boolean(e.eventDrag), Boolean(e.eventResize), !1);

          return p(fl, {
            key: t.key,
            elRef: _this56.cellElRefs.createRef(t.key),
            innerElRef: _this56.frameElRefs.createRef(t.key),
            dateProfile: e.dateProfile,
            date: t.date,
            showDayNumber: e.showDayNumbers,
            showWeekNumber: e.showWeekNumbers && 0 === n,
            forceDayTop: e.showWeekNumbers,
            todayRange: e.todayRange,
            eventSelection: e.eventSelection,
            eventDrag: e.eventDrag,
            eventResize: e.eventResize,
            extraRenderProps: t.extraRenderProps,
            extraDataAttrs: t.extraDataAttrs,
            extraClassNames: t.extraClassNames,
            extraDateSpan: t.extraDateSpan,
            moreCnt: u[n],
            moreMarginTop: h[n],
            singlePlacements: c[n],
            fgContentElRef: _this56.fgElRefs.createRef(t.key),
            fgContent: p(y, null, p(y, null, r), p(y, null, i)),
            bgContent: p(y, null, _this56.renderFillSegs(a[n], "highlight"), _this56.renderFillSegs(s[n], "non-business"), _this56.renderFillSegs(o[n], "bg-event")),
            minHeight: e.cellMinHeight
          });
        }));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e, t) {
        var n = this.props;
        this.updateSizing(!Cn(e, n));
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.context.removeResizeHandler(this.handleResize);
      }
    }, {
      key: "getHighlightSegs",
      value: function getHighlightSegs() {
        var e = this.props;
        return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
      }
    }, {
      key: "getMirrorSegs",
      value: function getMirrorSegs() {
        var e = this.props;
        return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
      }
    }, {
      key: "renderFgSegs",
      value: function renderFgSegs(e, t, n, r, i, s, o) {
        var a = this.context,
            l = this.props.eventSelection,
            c = this.state.framePositions,
            d = 1 === this.props.cells.length,
            u = i || s || o,
            h = [];

        if (c) {
          var _iteratorNormalCompletion75 = true;
          var _didIteratorError75 = false;
          var _iteratorError75 = undefined;

          try {
            for (var _iterator75 = t[Symbol.iterator](), _step75; !(_iteratorNormalCompletion75 = (_step75 = _iterator75.next()).done); _iteratorNormalCompletion75 = true) {
              var _e98 = _step75.value;

              var _t59 = _e98.seg,
                  _f4 = _t59.eventRange.instance.instanceId,
                  _g5 = _e98.isVisible && !r[_f4],
                  _m2 = _e98.isAbsolute,
                  _v2 = "",
                  _y2 = "";

              _m2 && (a.isRtl ? (_y2 = 0, _v2 = c.lefts[_t59.lastCol] - c.lefts[_t59.firstCol]) : (_v2 = 0, _y2 = c.rights[_t59.firstCol] - c.rights[_t59.lastCol])), h.push(p("div", {
                className: "fc-daygrid-event-harness" + (_m2 ? " fc-daygrid-event-harness-abs" : ""),
                key: pl(_t59),
                ref: u ? null : this.segHarnessRefs.createRef(ml(_t59)),
                style: {
                  visibility: _g5 ? "" : "hidden",
                  marginTop: _m2 ? "" : _e98.marginTop,
                  top: _m2 ? _e98.absoluteTop : "",
                  left: _v2,
                  right: _y2
                }
              }, ol(_t59) ? p(ll, Object.assign({
                seg: _t59,
                isDragging: i,
                isSelected: _f4 === l,
                defaultDisplayEventEnd: d
              }, mi(_t59, n))) : p(al, Object.assign({
                seg: _t59,
                isDragging: i,
                isResizing: s,
                isDateSelecting: o,
                isSelected: _f4 === l,
                defaultDisplayEventEnd: d
              }, mi(_t59, n)))));
            }
          } catch (err) {
            _didIteratorError75 = true;
            _iteratorError75 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion75 && _iterator75["return"] != null) {
                _iterator75["return"]();
              }
            } finally {
              if (_didIteratorError75) {
                throw _iteratorError75;
              }
            }
          }
        }

        return h;
      }
    }, {
      key: "renderFillSegs",
      value: function renderFillSegs(e, t) {
        var n = this.context.isRtl,
            r = this.props.todayRange,
            i = this.state.framePositions,
            s = [];

        if (i) {
          var _iteratorNormalCompletion76 = true;
          var _didIteratorError76 = false;
          var _iteratorError76 = undefined;

          try {
            for (var _iterator76 = e[Symbol.iterator](), _step76; !(_iteratorNormalCompletion76 = (_step76 = _iterator76.next()).done); _iteratorNormalCompletion76 = true) {
              var _o24 = _step76.value;

              var _e99 = n ? {
                right: 0,
                left: i.lefts[_o24.lastCol] - i.lefts[_o24.firstCol]
              } : {
                left: 0,
                right: i.rights[_o24.firstCol] - i.rights[_o24.lastCol]
              };

              s.push(p("div", {
                key: yi(_o24.eventRange),
                className: "fc-daygrid-bg-harness",
                style: _e99
              }, "bg-event" === t ? p(go, Object.assign({
                seg: _o24
              }, mi(_o24, r))) : mo(t)));
            }
          } catch (err) {
            _didIteratorError76 = true;
            _iteratorError76 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion76 && _iterator76["return"] != null) {
                _iterator76["return"]();
              }
            } finally {
              if (_didIteratorError76) {
                throw _iteratorError76;
              }
            }
          }
        }

        return p.apply(void 0, [y, {}].concat(s));
      }
    }, {
      key: "updateSizing",
      value: function updateSizing(e) {
        var t = this.props,
            n = this.state,
            r = this.frameElRefs;

        if (!t.forPrint && null !== t.clientWidth) {
          if (e) {
            var _e100 = t.cells.map(function (e) {
              return r.currentMap[e.key];
            });

            if (_e100.length) {
              var _t60 = this.rootElRef.current,
                  _r67 = new rs(_t60, _e100, !0, !1);

              n.framePositions && n.framePositions.similarTo(_r67) || this.setState({
                framePositions: new rs(_t60, _e100, !0, !1)
              });
            }
          }

          var _i39 = this.state.segHeights,
              _s31 = this.querySegHeights(),
              _o25 = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;

          this.safeSetState({
            segHeights: Object.assign(Object.assign({}, _i39), _s31),
            maxContentHeight: _o25 ? this.computeMaxContentHeight() : null
          });
        }
      }
    }, {
      key: "querySegHeights",
      value: function querySegHeights() {
        var e = this.segHarnessRefs.currentMap,
            t = {};

        for (var _n64 in e) {
          var _r68 = Math.round(e[_n64].getBoundingClientRect().height);

          t[_n64] = Math.max(t[_n64] || 0, _r68);
        }

        return t;
      }
    }, {
      key: "computeMaxContentHeight",
      value: function computeMaxContentHeight() {
        var e = this.props.cells[0].key,
            t = this.cellElRefs.currentMap[e],
            n = this.fgElRefs.currentMap[e];
        return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top;
      }
    }, {
      key: "getCellEls",
      value: function getCellEls() {
        var e = this.cellElRefs.currentMap;
        return this.props.cells.map(function (t) {
          return e[t.key];
        });
      }
    }]);

    return El;
  }(ls);

  El.addStateEquality({
    segHeights: Cn
  });

  var Sl =
  /*#__PURE__*/
  function (_ls5) {
    _inherits(Sl, _ls5);

    function Sl() {
      var _this57;

      _classCallCheck(this, Sl);

      _this57 = _possibleConstructorReturn(this, _getPrototypeOf(Sl).apply(this, arguments)), _this57.splitBusinessHourSegs = Gt(nl), _this57.splitBgEventSegs = Gt(nl), _this57.splitFgEventSegs = Gt(nl), _this57.splitDateSelectionSegs = Gt(nl), _this57.splitEventDrag = Gt(il), _this57.splitEventResize = Gt(il), _this57.rowRefs = new Vs();
      return _this57;
    }

    _createClass(Sl, [{
      key: "render",
      value: function render() {
        var _this58 = this;

        var e = this.props,
            t = this.context,
            n = e.cells.length,
            r = this.splitBusinessHourSegs(e.businessHourSegs, n),
            i = this.splitBgEventSegs(e.bgEventSegs, n),
            s = this.splitFgEventSegs(e.fgEventSegs, n),
            o = this.splitDateSelectionSegs(e.dateSelectionSegs, n),
            a = this.splitEventDrag(e.eventDrag, n),
            l = this.splitEventResize(e.eventResize, n),
            c = n >= 7 && e.clientWidth ? e.clientWidth / t.options.aspectRatio / 6 : null;
        return p(Rs, {
          unit: "day"
        }, function (t, d) {
          return p(y, null, e.cells.map(function (t, u) {
            return p(El, {
              ref: _this58.rowRefs.createRef(u),
              key: t.length ? t[0].date.toISOString() : u,
              showDayNumbers: n > 1,
              showWeekNumbers: e.showWeekNumbers,
              todayRange: d,
              dateProfile: e.dateProfile,
              cells: t,
              renderIntro: e.renderRowIntro,
              businessHourSegs: r[u],
              eventSelection: e.eventSelection,
              bgEventSegs: i[u].filter(Al),
              fgEventSegs: s[u],
              dateSelectionSegs: o[u],
              eventDrag: a[u],
              eventResize: l[u],
              dayMaxEvents: e.dayMaxEvents,
              dayMaxEventRows: e.dayMaxEventRows,
              clientWidth: e.clientWidth,
              clientHeight: e.clientHeight,
              cellMinHeight: c,
              forPrint: e.forPrint
            });
          }));
        });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.registerInteractiveComponent();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.registerInteractiveComponent();
      }
    }, {
      key: "registerInteractiveComponent",
      value: function registerInteractiveComponent() {
        if (!this.rootEl) {
          var _e101 = this.rowRefs.currentMap[0].getCellEls()[0],
              _t61 = _e101 ? _e101.closest(".fc-daygrid-body") : null;

          _t61 && (this.rootEl = _t61, this.context.registerInteractiveComponent(this, {
            el: _t61,
            isHitComboAllowed: this.props.isHitComboAllowed
          }));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.rootEl && (this.context.unregisterInteractiveComponent(this), this.rootEl = null);
      }
    }, {
      key: "prepareHits",
      value: function prepareHits() {
        this.rowPositions = new rs(this.rootEl, this.rowRefs.collect().map(function (e) {
          return e.getCellEls()[0];
        }), !1, !0), this.colPositions = new rs(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1);
      }
    }, {
      key: "queryHit",
      value: function queryHit(e, t) {
        var n = this.colPositions,
            r = this.rowPositions,
            i = n.leftToIndex(e),
            s = r.topToIndex(t);

        if (null != s && null != i) {
          var _e102 = this.props.cells[s][i];
          return {
            dateProfile: this.props.dateProfile,
            dateSpan: Object.assign({
              range: this.getCellRange(s, i),
              allDay: !0
            }, _e102.extraDateSpan),
            dayEl: this.getCellEl(s, i),
            rect: {
              left: n.lefts[i],
              right: n.rights[i],
              top: r.tops[s],
              bottom: r.bottoms[s]
            },
            layer: 0
          };
        }

        return null;
      }
    }, {
      key: "getCellEl",
      value: function getCellEl(e, t) {
        return this.rowRefs.currentMap[e].getCellEls()[t];
      }
    }, {
      key: "getCellRange",
      value: function getCellRange(e, t) {
        var n = this.props.cells[e][t].date;
        return {
          start: n,
          end: wt(n, 1)
        };
      }
    }]);

    return Sl;
  }(ls);

  function Al(e) {
    return e.eventRange.def.allDay;
  }

  var Dl =
  /*#__PURE__*/
  function (_ls6) {
    _inherits(Dl, _ls6);

    function Dl() {
      var _this59;

      _classCallCheck(this, Dl);

      _this59 = _possibleConstructorReturn(this, _getPrototypeOf(Dl).apply(this, arguments)), _this59.elRef = {
        current: null
      }, _this59.needsScrollReset = !1;
      return _this59;
    }

    _createClass(Dl, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = e.dayMaxEventRows,
            n = e.dayMaxEvents,
            r = e.expandRows,
            i = !0 === n || !0 === t;
        i && !r && (i = !1, t = null, n = null);
        var s = ["fc-daygrid-body", i ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", r ? "" : "fc-daygrid-body-natural"];
        return p("div", {
          ref: this.elRef,
          className: s.join(" "),
          style: {
            width: e.clientWidth,
            minWidth: e.tableMinWidth
          }
        }, p("table", {
          role: "presentation",
          className: "fc-scrollgrid-sync-table",
          style: {
            width: e.clientWidth,
            minWidth: e.tableMinWidth,
            height: r ? e.clientHeight : ""
          }
        }, e.colGroupNode, p("tbody", {
          role: "presentation"
        }, p(Sl, {
          dateProfile: e.dateProfile,
          cells: e.cells,
          renderRowIntro: e.renderRowIntro,
          showWeekNumbers: e.showWeekNumbers,
          clientWidth: e.clientWidth,
          clientHeight: e.clientHeight,
          businessHourSegs: e.businessHourSegs,
          bgEventSegs: e.bgEventSegs,
          fgEventSegs: e.fgEventSegs,
          dateSelectionSegs: e.dateSelectionSegs,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          dayMaxEvents: n,
          dayMaxEventRows: t,
          forPrint: e.forPrint,
          isHitComboAllowed: e.isHitComboAllowed
        }))));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.requestScrollReset();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e) {
        e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
      }
    }, {
      key: "requestScrollReset",
      value: function requestScrollReset() {
        this.needsScrollReset = !0, this.flushScrollReset();
      }
    }, {
      key: "flushScrollReset",
      value: function flushScrollReset() {
        if (this.needsScrollReset && this.props.clientWidth) {
          var _e103 = function (e, t) {
            var n;
            t.currentRangeUnit.match(/year|month/) && (n = e.querySelector("[data-date=\"".concat(Lt(t.currentDate), "-01\"]")));
            n || (n = e.querySelector("[data-date=\"".concat(Wt(t.currentDate), "\"]")));
            return n;
          }(this.elRef.current, this.props.dateProfile);

          if (_e103) {
            var _t62 = _e103.closest(".fc-daygrid-body"),
                _n65 = _t62.closest(".fc-scroller"),
                _r69 = _e103.getBoundingClientRect().top - _t62.getBoundingClientRect().top;

            _n65.scrollTop = _r69 ? _r69 + 1 : 0;
          }

          this.needsScrollReset = !1;
        }
      }
    }]);

    return Dl;
  }(ls);

  var wl =
  /*#__PURE__*/
  function (_Is) {
    _inherits(wl, _Is);

    function wl() {
      var _this60;

      _classCallCheck(this, wl);

      _this60 = _possibleConstructorReturn(this, _getPrototypeOf(wl).apply(this, arguments)), _this60.forceDayIfListItem = !0;
      return _this60;
    }

    _createClass(wl, [{
      key: "sliceRange",
      value: function sliceRange(e, t) {
        return t.sliceRange(e);
      }
    }]);

    return wl;
  }(Is);

  var Cl =
  /*#__PURE__*/
  function (_ls7) {
    _inherits(Cl, _ls7);

    function Cl() {
      var _this61;

      _classCallCheck(this, Cl);

      _this61 = _possibleConstructorReturn(this, _getPrototypeOf(Cl).apply(this, arguments)), _this61.slicer = new wl(), _this61.tableRef = {
        current: null
      };
      return _this61;
    }

    _createClass(Cl, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context;
        return p(Dl, Object.assign({
          ref: this.tableRef
        }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
          dateProfile: e.dateProfile,
          cells: e.dayTableModel.cells,
          colGroupNode: e.colGroupNode,
          tableMinWidth: e.tableMinWidth,
          renderRowIntro: e.renderRowIntro,
          dayMaxEvents: e.dayMaxEvents,
          dayMaxEventRows: e.dayMaxEventRows,
          showWeekNumbers: e.showWeekNumbers,
          expandRows: e.expandRows,
          headerAlignElRef: e.headerAlignElRef,
          clientWidth: e.clientWidth,
          clientHeight: e.clientHeight,
          forPrint: e.forPrint
        }));
      }
    }]);

    return Cl;
  }(ls);

  function Rl(e, t) {
    var n = new ks(e.renderRange, t);
    return new Ms(n, /year|month|week/.test(e.currentRangeUnit));
  }

  var xl =
  /*#__PURE__*/
  function (_gr) {
    _inherits(xl, _gr);

    function xl() {
      _classCallCheck(this, xl);

      return _possibleConstructorReturn(this, _getPrototypeOf(xl).apply(this, arguments));
    }

    _createClass(xl, [{
      key: "buildRenderRange",
      value: function buildRenderRange(e, t, n) {
        var r = _get(_getPrototypeOf(xl.prototype), "buildRenderRange", this).call(this, e, t, n),
            i = this.props;

        return _l({
          currentRange: r,
          snapToWeek: /^(year|month)$/.test(t),
          fixedWeekCount: i.fixedWeekCount,
          dateEnv: i.dateEnv
        });
      }
    }]);

    return xl;
  }(gr);

  function _l(e) {
    var t,
        n = e.dateEnv,
        r = e.currentRange,
        i = r.start,
        s = r.end;

    if (e.snapToWeek && (i = n.startOfWeek(i), t = n.startOfWeek(s), t.valueOf() !== s.valueOf() && (s = Dt(t, 1))), e.fixedWeekCount) {
      var _e104 = n.startOfWeek(n.startOfMonth(wt(r.end, -1)));

      s = Dt(s, 6 - Math.ceil(Rt(_e104, s)));
    }

    return {
      start: i,
      end: s
    };
  }

  xe(':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}');
  var Tl = Po({
    name: "@fullcalendar/daygrid",
    initialView: "dayGridMonth",
    views: {
      dayGrid: {
        component:
        /*#__PURE__*/
        function (_tl) {
          _inherits(component, _tl);

          function component() {
            var _this62;

            _classCallCheck(this, component);

            _this62 = _possibleConstructorReturn(this, _getPrototypeOf(component).apply(this, arguments)), _this62.buildDayTableModel = Gt(Rl), _this62.headerRef = {
              current: null
            }, _this62.tableRef = {
              current: null
            };
            return _this62;
          }

          _createClass(component, [{
            key: "render",
            value: function render() {
              var _this63 = this;

              var _this$context5 = this.context,
                  e = _this$context5.options,
                  t = _this$context5.dateProfileGenerator,
                  n = this.props,
                  r = this.buildDayTableModel(n.dateProfile, t),
                  i = e.dayHeaders && p(_s, {
                ref: this.headerRef,
                dateProfile: n.dateProfile,
                dates: r.headerDates,
                datesRepDistinctDays: 1 === r.rowCnt
              }),
                  s = function s(t) {
                return p(Cl, {
                  ref: _this63.tableRef,
                  dateProfile: n.dateProfile,
                  dayTableModel: r,
                  businessHours: n.businessHours,
                  dateSelection: n.dateSelection,
                  eventStore: n.eventStore,
                  eventUiBases: n.eventUiBases,
                  eventSelection: n.eventSelection,
                  eventDrag: n.eventDrag,
                  eventResize: n.eventResize,
                  nextDayThreshold: e.nextDayThreshold,
                  colGroupNode: t.tableColGroupNode,
                  tableMinWidth: t.tableMinWidth,
                  dayMaxEvents: e.dayMaxEvents,
                  dayMaxEventRows: e.dayMaxEventRows,
                  showWeekNumbers: e.weekNumbers,
                  expandRows: !n.isHeightAuto,
                  headerAlignElRef: _this63.headerElRef,
                  clientWidth: t.clientWidth,
                  clientHeight: t.clientHeight,
                  forPrint: n.forPrint
                });
              };

              return e.dayMinWidth ? this.renderHScrollLayout(i, s, r.colCnt, e.dayMinWidth) : this.renderSimpleLayout(i, s);
            }
          }]);

          return component;
        }(tl),
        dateProfileGeneratorClass: xl
      },
      dayGridDay: {
        type: "dayGrid",
        duration: {
          days: 1
        }
      },
      dayGridWeek: {
        type: "dayGrid",
        duration: {
          weeks: 1
        }
      },
      dayGridMonth: {
        type: "dayGrid",
        duration: {
          months: 1
        },
        fixedWeekCount: !0
      },
      dayGridYear: {
        type: "dayGrid",
        duration: {
          years: 1
        }
      }
    }
  });

  var kl =
  /*#__PURE__*/
  function (_Wi) {
    _inherits(kl, _Wi);

    function kl() {
      _classCallCheck(this, kl);

      return _possibleConstructorReturn(this, _getPrototypeOf(kl).apply(this, arguments));
    }

    _createClass(kl, [{
      key: "getKeyInfo",
      value: function getKeyInfo() {
        return {
          allDay: {},
          timed: {}
        };
      }
    }, {
      key: "getKeysForDateSpan",
      value: function getKeysForDateSpan(e) {
        return e.allDay ? ["allDay"] : ["timed"];
      }
    }, {
      key: "getKeysForEventDef",
      value: function getKeysForEventDef(e) {
        return e.allDay ? si(e) ? ["timed", "allDay"] : ["allDay"] : ["timed"];
      }
    }]);

    return kl;
  }(Wi);

  var Ml = an({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: !0,
    meridiem: "short"
  });

  function Il(e) {
    var t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
    return p(Ln.Consumer, null, function (n) {
      if (!e.isLabeled) return p("td", {
        className: t.join(" "),
        "data-time": e.isoTimeStr
      });
      var r = n.dateEnv,
          i = n.options,
          s = n.viewApi,
          o = null == i.slotLabelFormat ? Ml : Array.isArray(i.slotLabelFormat) ? an(i.slotLabelFormat[0]) : an(i.slotLabelFormat),
          a = {
        level: 0,
        time: e.time,
        date: r.toDate(e.date),
        view: s,
        text: r.format(e.date, o)
      };
      return p(Jn, {
        elTag: "td",
        elClasses: t,
        elAttrs: {
          "data-time": e.isoTimeStr
        },
        renderProps: a,
        generatorName: "slotLabelContent",
        customGenerator: i.slotLabelContent,
        defaultGenerator: Ol,
        classNameGenerator: i.slotLabelClassNames,
        didMount: i.slotLabelDidMount,
        willUnmount: i.slotLabelWillUnmount
      }, function (e) {
        return p("div", {
          className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
        }, p(e, {
          elTag: "div",
          elClasses: ["fc-timegrid-slot-label-cushion", "fc-scrollgrid-shrink-cushion"]
        }));
      });
    });
  }

  function Ol(e) {
    return e.text;
  }

  var Nl =
  /*#__PURE__*/
  function (_Gn22) {
    _inherits(Nl, _Gn22);

    function Nl() {
      _classCallCheck(this, Nl);

      return _possibleConstructorReturn(this, _getPrototypeOf(Nl).apply(this, arguments));
    }

    _createClass(Nl, [{
      key: "render",
      value: function render() {
        return this.props.slatMetas.map(function (e) {
          return p("tr", {
            key: e.key
          }, p(Il, Object.assign({}, e)));
        });
      }
    }]);

    return Nl;
  }(Gn);

  var Pl = an({
    week: "short"
  });

  var Hl =
  /*#__PURE__*/
  function (_ls8) {
    _inherits(Hl, _ls8);

    function Hl() {
      var _this64;

      _classCallCheck(this, Hl);

      _this64 = _possibleConstructorReturn(this, _getPrototypeOf(Hl).apply(this, arguments)), _this64.allDaySplitter = new kl(), _this64.headerElRef = {
        current: null
      }, _this64.rootElRef = {
        current: null
      }, _this64.scrollerElRef = {
        current: null
      }, _this64.state = {
        slatCoords: null
      }, _this64.handleScrollTopRequest = function (e) {
        var t = _this64.scrollerElRef.current;
        t && (t.scrollTop = e);
      }, _this64.renderHeadAxis = function (e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var n = _this64.context.options,
            r = _this64.props.dateProfile,
            i = r.renderRange,
            s = 1 === xt(i.start, i.end) ? qi(_this64.context, i.start, "week") : {};
        return n.weekNumbers && "day" === e ? p(vo, {
          elTag: "th",
          elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
          elAttrs: {
            "aria-hidden": !0
          },
          date: i.start,
          defaultFormat: Pl
        }, function (e) {
          return p("div", {
            className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", "fc-timegrid-axis-frame-liquid"].join(" "),
            style: {
              height: t
            }
          }, p(e, {
            elTag: "a",
            elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"],
            elAttrs: s
          }));
        }) : p("th", {
          "aria-hidden": !0,
          className: "fc-timegrid-axis"
        }, p("div", {
          className: "fc-timegrid-axis-frame",
          style: {
            height: t
          }
        }));
      }, _this64.renderTableRowAxis = function (e) {
        var _this64$context = _this64.context,
            t = _this64$context.options,
            n = _this64$context.viewApi,
            r = {
          text: t.allDayText,
          view: n
        };
        return p(Jn, {
          elTag: "td",
          elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
          elAttrs: {
            "aria-hidden": !0
          },
          renderProps: r,
          generatorName: "allDayContent",
          customGenerator: t.allDayContent,
          defaultGenerator: Bl,
          classNameGenerator: t.allDayClassNames,
          didMount: t.allDayDidMount,
          willUnmount: t.allDayWillUnmount
        }, function (t) {
          return p("div", {
            className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", null == e ? " fc-timegrid-axis-frame-liquid" : ""].join(" "),
            style: {
              height: e
            }
          }, p(t, {
            elTag: "span",
            elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"]
          }));
        });
      }, _this64.handleSlatCoords = function (e) {
        _this64.setState({
          slatCoords: e
        });
      };
      return _this64;
    }

    _createClass(Hl, [{
      key: "renderSimpleLayout",
      value: function renderSimpleLayout(e, t, n) {
        var r = this.context,
            i = this.props,
            s = [],
            o = no(r.options);
        return e && s.push({
          type: "header",
          key: "header",
          isSticky: o,
          chunk: {
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }
        }), t && (s.push({
          type: "body",
          key: "all-day",
          chunk: {
            content: t
          }
        }), s.push({
          type: "body",
          key: "all-day-divider",
          outerContent: p("tr", {
            role: "presentation",
            className: "fc-scrollgrid-section"
          }, p("td", {
            className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
          }))
        })), s.push({
          type: "body",
          key: "body",
          liquid: !0,
          expandRows: Boolean(r.options.expandRows),
          chunk: {
            scrollerElRef: this.scrollerElRef,
            content: n
          }
        }), p(er, {
          elRef: this.rootElRef,
          elClasses: ["fc-timegrid"],
          viewSpec: r.viewSpec
        }, p(io, {
          liquid: !i.isHeightAuto && !i.forPrint,
          collapsibleWidth: i.forPrint,
          cols: [{
            width: "shrink"
          }],
          sections: s
        }));
      }
    }, {
      key: "renderHScrollLayout",
      value: function renderHScrollLayout(e, t, n, r, i, s, o) {
        var _this65 = this;

        var a = this.context.pluginHooks.scrollGridImpl;
        if (!a) throw new Error("No ScrollGrid implementation");
        var l = this.context,
            c = this.props,
            d = !c.forPrint && no(l.options),
            u = !c.forPrint && ro(l.options),
            h = [];
        e && h.push({
          type: "header",
          key: "header",
          isSticky: d,
          syncRowHeights: !0,
          chunks: [{
            key: "axis",
            rowContent: function rowContent(e) {
              return p("tr", {
                role: "presentation"
              }, _this65.renderHeadAxis("day", e.rowSyncHeights[0]));
            }
          }, {
            key: "cols",
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }]
        }), t && (h.push({
          type: "body",
          key: "all-day",
          syncRowHeights: !0,
          chunks: [{
            key: "axis",
            rowContent: function rowContent(e) {
              return p("tr", {
                role: "presentation"
              }, _this65.renderTableRowAxis(e.rowSyncHeights[0]));
            }
          }, {
            key: "cols",
            content: t
          }]
        }), h.push({
          key: "all-day-divider",
          type: "body",
          outerContent: p("tr", {
            role: "presentation",
            className: "fc-scrollgrid-section"
          }, p("td", {
            colSpan: 2,
            className: "fc-timegrid-divider " + l.theme.getClass("tableCellShaded")
          }))
        }));
        var f = l.options.nowIndicator;
        return h.push({
          type: "body",
          key: "body",
          liquid: !0,
          expandRows: Boolean(l.options.expandRows),
          chunks: [{
            key: "axis",
            content: function content(e) {
              return p("div", {
                className: "fc-timegrid-axis-chunk"
              }, p("table", {
                "aria-hidden": !0,
                style: {
                  height: e.expandRows ? e.clientHeight : ""
                }
              }, e.tableColGroupNode, p("tbody", null, p(Nl, {
                slatMetas: s
              }))), p("div", {
                className: "fc-timegrid-now-indicator-container"
              }, p(Rs, {
                unit: f ? "minute" : "day"
              }, function (e) {
                var t = f && o && o.safeComputeTop(e);
                return "number" == typeof t ? p(lo, {
                  elClasses: ["fc-timegrid-now-indicator-arrow"],
                  elStyle: {
                    top: t
                  },
                  isAxis: !0,
                  date: e
                }) : null;
              })));
            }
          }, {
            key: "cols",
            scrollerElRef: this.scrollerElRef,
            content: n
          }]
        }), u && h.push({
          key: "footer",
          type: "footer",
          isSticky: !0,
          chunks: [{
            key: "axis",
            content: to
          }, {
            key: "cols",
            content: to
          }]
        }), p(er, {
          elRef: this.rootElRef,
          elClasses: ["fc-timegrid"],
          viewSpec: l.viewSpec
        }, p(a, {
          liquid: !c.isHeightAuto && !c.forPrint,
          forPrint: c.forPrint,
          collapsibleWidth: !1,
          colGroups: [{
            width: "shrink",
            cols: [{
              width: "shrink"
            }]
          }, {
            cols: [{
              span: r,
              minWidth: i
            }]
          }],
          sections: h
        }));
      }
    }, {
      key: "getAllDayMaxEventProps",
      value: function getAllDayMaxEventProps() {
        var _this$context$options = this.context.options,
            e = _this$context$options.dayMaxEvents,
            t = _this$context$options.dayMaxEventRows;
        return !0 !== e && !0 !== t || (e = void 0, t = 5), {
          dayMaxEvents: e,
          dayMaxEventRows: t
        };
      }
    }]);

    return Hl;
  }(ls);

  function Bl(e) {
    return e.text;
  }

  var jl =
  /*#__PURE__*/
  function () {
    function jl(e, t, n) {
      _classCallCheck(this, jl);

      this.positions = e, this.dateProfile = t, this.slotDuration = n;
    }

    _createClass(jl, [{
      key: "safeComputeTop",
      value: function safeComputeTop(e) {
        var t = this.dateProfile;

        if (lr(t.currentRange, e)) {
          var _n66 = Mt(e),
              _r70 = e.valueOf() - _n66.valueOf();

          if (_r70 >= yt(t.slotMinTime) && _r70 < yt(t.slotMaxTime)) return this.computeTimeTop(ft(_r70));
        }

        return null;
      }
    }, {
      key: "computeDateTop",
      value: function computeDateTop(e, t) {
        return t || (t = Mt(e)), this.computeTimeTop(ft(e.valueOf() - t.valueOf()));
      }
    }, {
      key: "computeTimeTop",
      value: function computeTimeTop(e) {
        var t,
            n,
            r = this.positions,
            i = this.dateProfile,
            s = r.els.length,
            o = (e.milliseconds - yt(i.slotMinTime)) / yt(this.slotDuration);
        return o = Math.max(0, o), o = Math.min(s, o), t = Math.floor(o), t = Math.min(t, s - 1), n = o - t, r.tops[t] + r.getHeight(t) * n;
      }
    }]);

    return jl;
  }();

  var zl =
  /*#__PURE__*/
  function (_Gn23) {
    _inherits(zl, _Gn23);

    function zl() {
      _classCallCheck(this, zl);

      return _possibleConstructorReturn(this, _getPrototypeOf(zl).apply(this, arguments));
    }

    _createClass(zl, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.slatElRefs;
        return p("tbody", null, e.slatMetas.map(function (i, s) {
          var o = {
            time: i.time,
            date: t.dateEnv.toDate(i.date),
            view: t.viewApi
          };
          return p("tr", {
            key: i.key,
            ref: r.createRef(i.key)
          }, e.axis && p(Il, Object.assign({}, i)), p(Jn, {
            elTag: "td",
            elClasses: ["fc-timegrid-slot", "fc-timegrid-slot-lane", !i.isLabeled && "fc-timegrid-slot-minor"],
            elAttrs: {
              "data-time": i.isoTimeStr
            },
            renderProps: o,
            generatorName: "slotLaneContent",
            customGenerator: n.slotLaneContent,
            classNameGenerator: n.slotLaneClassNames,
            didMount: n.slotLaneDidMount,
            willUnmount: n.slotLaneWillUnmount
          }));
        }));
      }
    }]);

    return zl;
  }(Gn);

  var Ul =
  /*#__PURE__*/
  function (_Gn24) {
    _inherits(Ul, _Gn24);

    function Ul() {
      var _this66;

      _classCallCheck(this, Ul);

      _this66 = _possibleConstructorReturn(this, _getPrototypeOf(Ul).apply(this, arguments)), _this66.rootElRef = {
        current: null
      }, _this66.slatElRefs = new Vs();
      return _this66;
    }

    _createClass(Ul, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context;
        return p("div", {
          ref: this.rootElRef,
          className: "fc-timegrid-slots"
        }, p("table", {
          "aria-hidden": !0,
          className: t.theme.getClass("table"),
          style: {
            minWidth: e.tableMinWidth,
            width: e.clientWidth,
            height: e.minHeight
          }
        }, e.tableColGroupNode, p(zl, {
          slatElRefs: this.slatElRefs,
          axis: e.axis,
          slatMetas: e.slatMetas
        })));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateSizing();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.updateSizing();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.onCoords && this.props.onCoords(null);
      }
    }, {
      key: "updateSizing",
      value: function updateSizing() {
        var e = this.context,
            t = this.props;

        if (t.onCoords && null !== t.clientWidth) {
          this.rootElRef.current.offsetHeight && t.onCoords(new jl(new rs(this.rootElRef.current, (n = this.slatElRefs.currentMap, t.slatMetas.map(function (e) {
            return n[e.key];
          })), !1, !0), this.props.dateProfile, e.options.slotDuration));
        }

        var n;
      }
    }]);

    return Ul;
  }(Gn);

  function Wl(e, t) {
    var n,
        r = [];

    for (n = 0; n < t; n += 1) {
      r.push([]);
    }

    if (e) for (n = 0; n < e.length; n += 1) {
      r[e[n].col].push(e[n]);
    }
    return r;
  }

  function Ll(e, t) {
    var n = [];

    if (e) {
      for (var _r71 = 0; _r71 < t; _r71 += 1) {
        n[_r71] = {
          affectedInstances: e.affectedInstances,
          isEvent: e.isEvent,
          segs: []
        };
      }

      var _iteratorNormalCompletion77 = true;
      var _didIteratorError77 = false;
      var _iteratorError77 = undefined;

      try {
        for (var _iterator77 = e.segs[Symbol.iterator](), _step77; !(_iteratorNormalCompletion77 = (_step77 = _iterator77.next()).done); _iteratorNormalCompletion77 = true) {
          var _t63 = _step77.value;

          n[_t63.col].segs.push(_t63);
        }
      } catch (err) {
        _didIteratorError77 = true;
        _iteratorError77 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion77 && _iterator77["return"] != null) {
            _iterator77["return"]();
          }
        } finally {
          if (_didIteratorError77) {
            throw _iteratorError77;
          }
        }
      }
    } else for (var _e105 = 0; _e105 < t; _e105 += 1) {
      n[_e105] = null;
    }

    return n;
  }

  var Fl =
  /*#__PURE__*/
  function (_Gn25) {
    _inherits(Fl, _Gn25);

    function Fl() {
      _classCallCheck(this, Fl);

      return _possibleConstructorReturn(this, _getPrototypeOf(Fl).apply(this, arguments));
    }

    _createClass(Fl, [{
      key: "render",
      value: function render() {
        var e = this.props;
        return p(So, {
          elClasses: ["fc-timegrid-more-link"],
          elStyle: {
            top: e.top,
            bottom: e.bottom
          },
          allDayDate: null,
          moreCnt: e.hiddenSegs.length,
          allSegs: e.hiddenSegs,
          hiddenSegs: e.hiddenSegs,
          extraDateSpan: e.extraDateSpan,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          popoverContent: function popoverContent() {
            return ec(e.hiddenSegs, e);
          },
          defaultGenerator: Vl,
          forceTimed: !0
        }, function (e) {
          return p(e, {
            elTag: "div",
            elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"]
          });
        });
      }
    }]);

    return Fl;
  }(Gn);

  function Vl(e) {
    return e.shortText;
  }

  function Gl(e, t, n) {
    var r = new cs();
    null != t && (r.strictOrder = t), null != n && (r.maxStackCnt = n);

    var i = hs(r.addSegs(e)),
        s = function (e) {
      var t = e.entriesByLevel,
          n = Zl(function (e, t) {
        return e + ":" + t;
      }, function (r, i) {
        var s = Ql(function (e, t, n) {
          var r = e.levelCoords,
              i = e.entriesByLevel,
              s = i[t][n],
              o = r[t] + s.thickness,
              a = r.length,
              l = t;

          for (; l < a && r[l] < o; l += 1) {
            ;
          }

          for (; l < a; l += 1) {
            var _e106 = void 0,
                _t64 = i[l],
                _n67 = ps(_t64, s.span.start, ds),
                _r72 = _n67[0] + _n67[1],
                _o26 = _r72;

            for (; (_e106 = _t64[_o26]) && _e106.span.start < s.span.end;) {
              _o26 += 1;
            }

            if (_r72 < _o26) return {
              level: l,
              lateralStart: _r72,
              lateralEnd: _o26
            };
          }

          return null;
        }(e, r, i), n),
            o = t[r][i];
        return [Object.assign(Object.assign({}, o), {
          nextLevelNodes: s[0]
        }), o.thickness + s[1]];
      });
      return Ql(t.length ? {
        level: 0,
        lateralStart: 0,
        lateralEnd: t[0].length
      } : null, n)[0];
    }(r);

    return s = function (e, t) {
      var n = Zl(function (e, t, n) {
        return us(e);
      }, function (e, r, i) {
        var s,
            o = e.nextLevelNodes,
            a = e.thickness,
            l = a + i,
            c = a / l,
            d = [];

        if (o.length) {
          var _iteratorNormalCompletion78 = true;
          var _didIteratorError78 = false;
          var _iteratorError78 = undefined;

          try {
            for (var _iterator78 = o[Symbol.iterator](), _step78; !(_iteratorNormalCompletion78 = (_step78 = _iterator78.next()).done); _iteratorNormalCompletion78 = true) {
              var _e107 = _step78.value;

              if (void 0 === s) {
                var _t65 = n(_e107, r, l);

                s = _t65[0], d.push(_t65[1]);
              } else {
                var _t66 = n(_e107, s, 0);

                d.push(_t66[1]);
              }
            }
          } catch (err) {
            _didIteratorError78 = true;
            _iteratorError78 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion78 && _iterator78["return"] != null) {
                _iterator78["return"]();
              }
            } finally {
              if (_didIteratorError78) {
                throw _iteratorError78;
              }
            }
          }
        } else s = t;

        var u = (s - r) * c;
        return [s - u, Object.assign(Object.assign({}, e), {
          thickness: u,
          nextLevelNodes: d
        })];
      });
      return e.map(function (e) {
        return n(e, 0, 0)[1];
      });
    }(s, 1), {
      segRects: function (e) {
        var t = [];
        var n = Zl(function (e, t, n) {
          return us(e);
        }, function (e, n, i) {
          var s = Object.assign(Object.assign({}, e), {
            levelCoord: n,
            stackDepth: i,
            stackForward: 0
          });
          return t.push(s), s.stackForward = r(e.nextLevelNodes, n + e.thickness, i + 1) + 1;
        });

        function r(e, t, r) {
          var i = 0;
          var _iteratorNormalCompletion79 = true;
          var _didIteratorError79 = false;
          var _iteratorError79 = undefined;

          try {
            for (var _iterator79 = e[Symbol.iterator](), _step79; !(_iteratorNormalCompletion79 = (_step79 = _iterator79.next()).done); _iteratorNormalCompletion79 = true) {
              var _s32 = _step79.value;
              i = Math.max(n(_s32, t, r), i);
            }
          } catch (err) {
            _didIteratorError79 = true;
            _iteratorError79 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion79 && _iterator79["return"] != null) {
                _iterator79["return"]();
              }
            } finally {
              if (_didIteratorError79) {
                throw _iteratorError79;
              }
            }
          }

          return i;
        }

        return r(e, 0, 0), t;
      }(s),
      hiddenGroups: i
    };
  }

  function Ql(e, t) {
    if (!e) return [[], 0];
    var n = e.level,
        r = e.lateralStart,
        i = e.lateralEnd,
        s = r,
        o = [];

    for (; s < i;) {
      o.push(t(n, s)), s += 1;
    }

    return o.sort(ql), [o.map(Yl), o[0][1]];
  }

  function ql(e, t) {
    return t[1] - e[1];
  }

  function Yl(e) {
    return e[0];
  }

  function Zl(e, t) {
    var n = {};
    return function () {
      var i = e.apply(void 0, arguments);
      return i in n ? n[i] : n[i] = t.apply(void 0, arguments);
    };
  }

  function Xl(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var i = [];
    if (n) for (var _s33 = 0; _s33 < e.length; _s33 += 1) {
      var _o27 = e[_s33],
          _a18 = n.computeDateTop(_o27.start, t),
          _l14 = Math.max(_a18 + (r || 0), n.computeDateTop(_o27.end, t));

      i.push({
        start: Math.round(_a18),
        end: Math.round(_l14)
      });
    }
    return i;
  }

  var $l = an({
    hour: "numeric",
    minute: "2-digit",
    meridiem: !1
  });

  var Jl =
  /*#__PURE__*/
  function (_Gn26) {
    _inherits(Jl, _Gn26);

    function Jl() {
      _classCallCheck(this, Jl);

      return _possibleConstructorReturn(this, _getPrototypeOf(Jl).apply(this, arguments));
    }

    _createClass(Jl, [{
      key: "render",
      value: function render() {
        return p(oo, Object.assign({}, this.props, {
          elClasses: ["fc-timegrid-event", "fc-v-event", this.props.isShort && "fc-timegrid-event-short"],
          defaultTimeFormat: $l
        }));
      }
    }]);

    return Jl;
  }(Gn);

  var Kl =
  /*#__PURE__*/
  function (_Gn27) {
    _inherits(Kl, _Gn27);

    function Kl() {
      var _this67;

      _classCallCheck(this, Kl);

      _this67 = _possibleConstructorReturn(this, _getPrototypeOf(Kl).apply(this, arguments)), _this67.sortEventSegs = Gt(di);
      return _this67;
    }

    _createClass(Kl, [{
      key: "render",
      value: function render() {
        var _this68 = this;

        var e = this.props,
            t = this.context,
            n = t.options,
            r = n.selectMirror,
            i = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || r && e.dateSelectionSegs || [],
            s = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {},
            o = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
        return p(uo, {
          elTag: "td",
          elRef: e.elRef,
          elClasses: ["fc-timegrid-col"].concat(_toConsumableArray(e.extraClassNames || [])),
          elAttrs: Object.assign({
            role: "gridcell"
          }, e.extraDataAttrs),
          date: e.date,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          extraRenderProps: e.extraRenderProps
        }, function (t) {
          return p("div", {
            className: "fc-timegrid-col-frame"
          }, p("div", {
            className: "fc-timegrid-col-bg"
          }, _this68.renderFillSegs(e.businessHourSegs, "non-business"), _this68.renderFillSegs(e.bgEventSegs, "bg-event"), _this68.renderFillSegs(e.dateSelectionSegs, "highlight")), p("div", {
            className: "fc-timegrid-col-events"
          }, _this68.renderFgSegs(o, s, !1, !1, !1)), p("div", {
            className: "fc-timegrid-col-events"
          }, _this68.renderFgSegs(i, {}, Boolean(e.eventDrag), Boolean(e.eventResize), Boolean(r), "mirror")), p("div", {
            className: "fc-timegrid-now-indicator-container"
          }, _this68.renderNowIndicator(e.nowIndicatorSegs)), ho(n) && p(t, {
            elTag: "div",
            elClasses: ["fc-timegrid-col-misc"]
          }));
        });
      }
    }, {
      key: "renderFgSegs",
      value: function renderFgSegs(e, t, n, r, i, s) {
        var o = this.props;
        return o.forPrint ? ec(e, o) : this.renderPositionedFgSegs(e, t, n, r, i, s);
      }
    }, {
      key: "renderPositionedFgSegs",
      value: function renderPositionedFgSegs(e, t, n, r, i, s) {
        var _this69 = this;

        var _this$context$options2 = this.context.options,
            o = _this$context$options2.eventMaxStack,
            a = _this$context$options2.eventShortHeight,
            l = _this$context$options2.eventOrderStrict,
            c = _this$context$options2.eventMinHeight,
            _this$props7 = this.props,
            d = _this$props7.date,
            u = _this$props7.slatCoords,
            h = _this$props7.eventSelection,
            f = _this$props7.todayRange,
            g = _this$props7.nowDate,
            m = n || r || i,
            v = Xl(e, d, u, c),
            _ref9 = function (e, t, n, r) {
          var i = [],
              s = [];

          for (var _n68 = 0; _n68 < e.length; _n68 += 1) {
            var _r73 = t[_n68];
            _r73 ? i.push({
              index: _n68,
              thickness: 1,
              span: _r73
            }) : s.push(e[_n68]);
          }

          var _Gl = Gl(i, n, r),
              o = _Gl.segRects,
              a = _Gl.hiddenGroups,
              l = [];

          var _iteratorNormalCompletion80 = true;
          var _didIteratorError80 = false;
          var _iteratorError80 = undefined;

          try {
            for (var _iterator80 = o[Symbol.iterator](), _step80; !(_iteratorNormalCompletion80 = (_step80 = _iterator80.next()).done); _iteratorNormalCompletion80 = true) {
              var _t67 = _step80.value;
              l.push({
                seg: e[_t67.index],
                rect: _t67
              });
            }
          } catch (err) {
            _didIteratorError80 = true;
            _iteratorError80 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion80 && _iterator80["return"] != null) {
                _iterator80["return"]();
              }
            } finally {
              if (_didIteratorError80) {
                throw _iteratorError80;
              }
            }
          }

          for (var _i40 = 0, _s34 = s; _i40 < _s34.length; _i40++) {
            var _e108 = _s34[_i40];
            l.push({
              seg: _e108,
              rect: null
            });
          }

          return {
            segPlacements: l,
            hiddenGroups: a
          };
        }(e, v, l, o),
            b = _ref9.segPlacements,
            E = _ref9.hiddenGroups;

        return p(y, null, this.renderHiddenGroups(E, e), b.map(function (e) {
          var o = e.seg,
              l = e.rect,
              c = o.eventRange.instance.instanceId,
              d = m || Boolean(!t[c] && l),
              u = tc(l && l.span),
              v = !m && l ? _this69.computeSegHStyle(l) : {
            left: 0,
            right: 0
          },
              y = Boolean(l) && l.stackForward > 0,
              b = Boolean(l) && l.span.end - l.span.start < a;
          return p("div", {
            className: "fc-timegrid-event-harness" + (y ? " fc-timegrid-event-harness-inset" : ""),
            key: s || c,
            style: Object.assign(Object.assign({
              visibility: d ? "" : "hidden"
            }, u), v)
          }, p(Jl, Object.assign({
            seg: o,
            isDragging: n,
            isResizing: r,
            isDateSelecting: i,
            isSelected: c === h,
            isShort: b
          }, mi(o, f, g))));
        }));
      }
    }, {
      key: "renderHiddenGroups",
      value: function renderHiddenGroups(e, t) {
        var _this$props8 = this.props,
            n = _this$props8.extraDateSpan,
            r = _this$props8.dateProfile,
            i = _this$props8.todayRange,
            s = _this$props8.nowDate,
            o = _this$props8.eventSelection,
            a = _this$props8.eventDrag,
            l = _this$props8.eventResize;
        return p(y, null, e.map(function (e) {
          var c = tc(e.span),
              d = (u = e.entries, h = t, u.map(function (e) {
            return h[e.index];
          }));
          var u, h;
          return p(Fl, {
            key: Ut(wo(d)),
            hiddenSegs: d,
            top: c.top,
            bottom: c.bottom,
            extraDateSpan: n,
            dateProfile: r,
            todayRange: i,
            nowDate: s,
            eventSelection: o,
            eventDrag: a,
            eventResize: l
          });
        }));
      }
    }, {
      key: "renderFillSegs",
      value: function renderFillSegs(e, t) {
        var n = this.props,
            r = this.context,
            i = Xl(e, n.date, n.slatCoords, r.options.eventMinHeight).map(function (r, i) {
          var s = e[i];
          return p("div", {
            key: yi(s.eventRange),
            className: "fc-timegrid-bg-harness",
            style: tc(r)
          }, "bg-event" === t ? p(go, Object.assign({
            seg: s
          }, mi(s, n.todayRange, n.nowDate))) : mo(t));
        });
        return p(y, null, i);
      }
    }, {
      key: "renderNowIndicator",
      value: function renderNowIndicator(e) {
        var _this$props9 = this.props,
            t = _this$props9.slatCoords,
            n = _this$props9.date;
        return t ? e.map(function (e, r) {
          return p(lo, {
            key: r,
            elClasses: ["fc-timegrid-now-indicator-line"],
            elStyle: {
              top: t.computeDateTop(e.start, n)
            },
            isAxis: !1,
            date: n
          });
        }) : null;
      }
    }, {
      key: "computeSegHStyle",
      value: function computeSegHStyle(e) {
        var t,
            n,
            _this$context6 = this.context,
            r = _this$context6.isRtl,
            i = _this$context6.options,
            s = i.slotEventOverlap,
            o = e.levelCoord,
            a = e.levelCoord + e.thickness;
        s && (a = Math.min(1, o + 2 * (a - o))), r ? (t = 1 - a, n = o) : (t = o, n = 1 - a);
        var l = {
          zIndex: e.stackDepth + 1,
          left: 100 * t + "%",
          right: 100 * n + "%"
        };
        return s && !e.stackForward && (l[r ? "marginLeft" : "marginRight"] = 20), l;
      }
    }]);

    return Kl;
  }(Gn);

  function ec(e, _ref10) {
    var t = _ref10.todayRange,
        n = _ref10.nowDate,
        r = _ref10.eventSelection,
        i = _ref10.eventDrag,
        s = _ref10.eventResize;
    var o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
    return p(y, null, e.map(function (e) {
      var i = e.eventRange.instance.instanceId;
      return p("div", {
        key: i,
        style: {
          visibility: o[i] ? "hidden" : ""
        }
      }, p(Jl, Object.assign({
        seg: e,
        isDragging: !1,
        isResizing: !1,
        isDateSelecting: !1,
        isSelected: i === r,
        isShort: !1
      }, mi(e, t, n))));
    }));
  }

  function tc(e) {
    return e ? {
      top: e.start,
      bottom: -e.end
    } : {
      top: "",
      bottom: ""
    };
  }

  var nc =
  /*#__PURE__*/
  function (_Gn28) {
    _inherits(nc, _Gn28);

    function nc() {
      var _this70;

      _classCallCheck(this, nc);

      _this70 = _possibleConstructorReturn(this, _getPrototypeOf(nc).apply(this, arguments)), _this70.splitFgEventSegs = Gt(Wl), _this70.splitBgEventSegs = Gt(Wl), _this70.splitBusinessHourSegs = Gt(Wl), _this70.splitNowIndicatorSegs = Gt(Wl), _this70.splitDateSelectionSegs = Gt(Wl), _this70.splitEventDrag = Gt(Ll), _this70.splitEventResize = Gt(Ll), _this70.rootElRef = {
        current: null
      }, _this70.cellElRefs = new Vs();
      return _this70;
    }

    _createClass(nc, [{
      key: "render",
      value: function render() {
        var _this71 = this;

        var e = this.props,
            t = this.context,
            n = t.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate),
            r = e.cells.length,
            i = this.splitFgEventSegs(e.fgEventSegs, r),
            s = this.splitBgEventSegs(e.bgEventSegs, r),
            o = this.splitBusinessHourSegs(e.businessHourSegs, r),
            a = this.splitNowIndicatorSegs(e.nowIndicatorSegs, r),
            l = this.splitDateSelectionSegs(e.dateSelectionSegs, r),
            c = this.splitEventDrag(e.eventDrag, r),
            d = this.splitEventResize(e.eventResize, r);
        return p("div", {
          className: "fc-timegrid-cols",
          ref: this.rootElRef
        }, p("table", {
          role: "presentation",
          style: {
            minWidth: e.tableMinWidth,
            width: e.clientWidth
          }
        }, e.tableColGroupNode, p("tbody", {
          role: "presentation"
        }, p("tr", {
          role: "row"
        }, e.axis && p("td", {
          "aria-hidden": !0,
          className: "fc-timegrid-col fc-timegrid-axis"
        }, p("div", {
          className: "fc-timegrid-col-frame"
        }, p("div", {
          className: "fc-timegrid-now-indicator-container"
        }, "number" == typeof n && p(lo, {
          elClasses: ["fc-timegrid-now-indicator-arrow"],
          elStyle: {
            top: n
          },
          isAxis: !0,
          date: e.nowDate
        })))), e.cells.map(function (t, n) {
          return p(Kl, {
            key: t.key,
            elRef: _this71.cellElRefs.createRef(t.key),
            dateProfile: e.dateProfile,
            date: t.date,
            nowDate: e.nowDate,
            todayRange: e.todayRange,
            extraRenderProps: t.extraRenderProps,
            extraDataAttrs: t.extraDataAttrs,
            extraClassNames: t.extraClassNames,
            extraDateSpan: t.extraDateSpan,
            fgEventSegs: i[n],
            bgEventSegs: s[n],
            businessHourSegs: o[n],
            nowIndicatorSegs: a[n],
            dateSelectionSegs: l[n],
            eventDrag: c[n],
            eventResize: d[n],
            slatCoords: e.slatCoords,
            eventSelection: e.eventSelection,
            forPrint: e.forPrint
          });
        })))));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateCoords();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.updateCoords();
      }
    }, {
      key: "updateCoords",
      value: function updateCoords() {
        var e = this.props;
        var t;
        e.onColCoords && null !== e.clientWidth && e.onColCoords(new rs(this.rootElRef.current, (t = this.cellElRefs.currentMap, e.cells.map(function (e) {
          return t[e.key];
        })), !0, !1));
      }
    }]);

    return nc;
  }(Gn);

  var rc =
  /*#__PURE__*/
  function (_ls9) {
    _inherits(rc, _ls9);

    function rc() {
      var _this72;

      _classCallCheck(this, rc);

      _this72 = _possibleConstructorReturn(this, _getPrototypeOf(rc).apply(this, arguments)), _this72.processSlotOptions = Gt(ic), _this72.state = {
        slatCoords: null
      }, _this72.handleRootEl = function (e) {
        e ? _this72.context.registerInteractiveComponent(_assertThisInitialized(_this72), {
          el: e,
          isHitComboAllowed: _this72.props.isHitComboAllowed
        }) : _this72.context.unregisterInteractiveComponent(_assertThisInitialized(_this72));
      }, _this72.handleScrollRequest = function (e) {
        var t = _this72.props.onScrollTopRequest,
            n = _this72.state.slatCoords;

        if (t && n) {
          if (e.time) {
            var _r74 = n.computeTimeTop(e.time);

            _r74 = Math.ceil(_r74), _r74 && (_r74 += 1), t(_r74);
          }

          return !0;
        }

        return !1;
      }, _this72.handleColCoords = function (e) {
        _this72.colCoords = e;
      }, _this72.handleSlatCoords = function (e) {
        _this72.setState({
          slatCoords: e
        }), _this72.props.onSlatCoords && _this72.props.onSlatCoords(e);
      };
      return _this72;
    }

    _createClass(rc, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.state;
        return p("div", {
          className: "fc-timegrid-body",
          ref: this.handleRootEl,
          style: {
            width: e.clientWidth,
            minWidth: e.tableMinWidth
          }
        }, p(Ul, {
          axis: e.axis,
          dateProfile: e.dateProfile,
          slatMetas: e.slatMetas,
          clientWidth: e.clientWidth,
          minHeight: e.expandRows ? e.clientHeight : "",
          tableMinWidth: e.tableMinWidth,
          tableColGroupNode: e.axis ? e.tableColGroupNode : null,
          onCoords: this.handleSlatCoords
        }), p(nc, {
          cells: e.cells,
          axis: e.axis,
          dateProfile: e.dateProfile,
          businessHourSegs: e.businessHourSegs,
          bgEventSegs: e.bgEventSegs,
          fgEventSegs: e.fgEventSegs,
          dateSelectionSegs: e.dateSelectionSegs,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          todayRange: e.todayRange,
          nowDate: e.nowDate,
          nowIndicatorSegs: e.nowIndicatorSegs,
          clientWidth: e.clientWidth,
          tableMinWidth: e.tableMinWidth,
          tableColGroupNode: e.tableColGroupNode,
          slatCoords: t.slatCoords,
          onColCoords: this.handleColCoords,
          forPrint: e.forPrint
        }));
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(e) {
        this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.scrollResponder.detach();
      }
    }, {
      key: "queryHit",
      value: function queryHit(e, t) {
        var _this$context7 = this.context,
            n = _this$context7.dateEnv,
            r = _this$context7.options,
            i = this.colCoords,
            s = this.props.dateProfile,
            o = this.state.slatCoords,
            _this$processSlotOpti = this.processSlotOptions(this.props.slotDuration, r.snapDuration),
            a = _this$processSlotOpti.snapDuration,
            l = _this$processSlotOpti.snapsPerSlot,
            c = i.leftToIndex(e),
            d = o.positions.topToIndex(t);

        if (null != c && null != d) {
          var _e109 = this.props.cells[c],
              _r75 = o.positions.tops[d],
              _u8 = o.positions.getHeight(d),
              _h5 = (t - _r75) / _u8,
              _f5 = d * l + Math.floor(_h5 * l),
              _g6 = this.props.cells[c].date,
              _p3 = pt(s.slotMinTime, mt(a, _f5)),
              _m3 = n.add(_g6, _p3),
              _v3 = n.add(_m3, a);

          return {
            dateProfile: s,
            dateSpan: Object.assign({
              range: {
                start: _m3,
                end: _v3
              },
              allDay: !1
            }, _e109.extraDateSpan),
            dayEl: i.els[c],
            rect: {
              left: i.lefts[c],
              right: i.rights[c],
              top: _r75,
              bottom: _r75 + _u8
            },
            layer: 0
          };
        }

        return null;
      }
    }]);

    return rc;
  }(ls);

  function ic(e, t) {
    var n = t || e,
        r = bt(e, n);
    return null === r && (n = e, r = 1), {
      snapDuration: n,
      snapsPerSlot: r
    };
  }

  var sc =
  /*#__PURE__*/
  function (_Is2) {
    _inherits(sc, _Is2);

    function sc() {
      _classCallCheck(this, sc);

      return _possibleConstructorReturn(this, _getPrototypeOf(sc).apply(this, arguments));
    }

    _createClass(sc, [{
      key: "sliceRange",
      value: function sliceRange(e, t) {
        var n = [];

        for (var _r76 = 0; _r76 < t.length; _r76 += 1) {
          var _i41 = ir(e, t[_r76]);

          _i41 && n.push({
            start: _i41.start,
            end: _i41.end,
            isStart: _i41.start.valueOf() === e.start.valueOf(),
            isEnd: _i41.end.valueOf() === e.end.valueOf(),
            col: _r76
          });
        }

        return n;
      }
    }]);

    return sc;
  }(Is);

  var oc =
  /*#__PURE__*/
  function (_ls10) {
    _inherits(oc, _ls10);

    function oc() {
      var _this73;

      _classCallCheck(this, oc);

      _this73 = _possibleConstructorReturn(this, _getPrototypeOf(oc).apply(this, arguments)), _this73.buildDayRanges = Gt(ac), _this73.slicer = new sc(), _this73.timeColsRef = {
        current: null
      };
      return _this73;
    }

    _createClass(oc, [{
      key: "render",
      value: function render() {
        var _this74 = this;

        var e = this.props,
            t = this.context,
            n = e.dateProfile,
            r = e.dayTableModel,
            _t$options = t.options,
            i = _t$options.nowIndicator,
            s = _t$options.nextDayThreshold,
            o = this.buildDayRanges(r, n, t.dateEnv);
        return p(Rs, {
          unit: i ? "minute" : "day"
        }, function (a, l) {
          return p(rc, Object.assign({
            ref: _this74.timeColsRef
          }, _this74.slicer.sliceProps(e, n, null, t, o), {
            forPrint: e.forPrint,
            axis: e.axis,
            dateProfile: n,
            slatMetas: e.slatMetas,
            slotDuration: e.slotDuration,
            cells: r.cells[0],
            tableColGroupNode: e.tableColGroupNode,
            tableMinWidth: e.tableMinWidth,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            expandRows: e.expandRows,
            nowDate: a,
            nowIndicatorSegs: i && _this74.slicer.sliceNowDate(a, n, s, t, o),
            todayRange: l,
            onScrollTopRequest: e.onScrollTopRequest,
            onSlatCoords: e.onSlatCoords
          }));
        });
      }
    }]);

    return oc;
  }(ls);

  function ac(e, t, n) {
    var r = [];
    var _iteratorNormalCompletion81 = true;
    var _didIteratorError81 = false;
    var _iteratorError81 = undefined;

    try {
      for (var _iterator81 = e.headerDates[Symbol.iterator](), _step81; !(_iteratorNormalCompletion81 = (_step81 = _iterator81.next()).done); _iteratorNormalCompletion81 = true) {
        var _i42 = _step81.value;
        r.push({
          start: n.add(_i42, t.slotMinTime),
          end: n.add(_i42, t.slotMaxTime)
        });
      }
    } catch (err) {
      _didIteratorError81 = true;
      _iteratorError81 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion81 && _iterator81["return"] != null) {
          _iterator81["return"]();
        }
      } finally {
        if (_didIteratorError81) {
          throw _iteratorError81;
        }
      }
    }

    return r;
  }

  var lc = [{
    hours: 1
  }, {
    minutes: 30
  }, {
    minutes: 15
  }, {
    seconds: 30
  }, {
    seconds: 15
  }];

  function cc(e, t, n, r, i) {
    var s = new Date(0),
        o = e,
        a = ft(0),
        l = n || function (e) {
      var t, n, r;

      for (t = lc.length - 1; t >= 0; t -= 1) {
        if (n = ft(lc[t]), r = bt(n, e), null !== r && r > 1) return n;
      }

      return e;
    }(r),
        c = [];

    for (; yt(o) < yt(t);) {
      var _e110 = i.add(s, o),
          _t68 = null !== bt(a, l);

      c.push({
        date: _e110,
        time: o,
        key: _e110.toISOString(),
        isoTimeStr: Ft(_e110),
        isLabeled: _t68
      }), o = pt(o, r), a = pt(a, r);
    }

    return c;
  }

  function dc(e, t) {
    var n = new ks(e.renderRange, t);
    return new Ms(n, !1);
  }

  xe('.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}');
  var uc = Po({
    name: "@fullcalendar/timegrid",
    initialView: "timeGridWeek",
    optionRefiners: {
      allDaySlot: Boolean
    },
    views: {
      timeGrid: {
        component:
        /*#__PURE__*/
        function (_Hl) {
          _inherits(component, _Hl);

          function component() {
            var _this75;

            _classCallCheck(this, component);

            _this75 = _possibleConstructorReturn(this, _getPrototypeOf(component).apply(this, arguments)), _this75.buildTimeColsModel = Gt(dc), _this75.buildSlatMetas = Gt(cc);
            return _this75;
          }

          _createClass(component, [{
            key: "render",
            value: function render() {
              var _this76 = this;

              var _this$context8 = this.context,
                  e = _this$context8.options,
                  t = _this$context8.dateEnv,
                  n = _this$context8.dateProfileGenerator,
                  r = this.props,
                  i = r.dateProfile,
                  s = this.buildTimeColsModel(i, n),
                  o = this.allDaySplitter.splitProps(r),
                  a = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, t),
                  l = e.dayMinWidth,
                  c = !l,
                  d = l,
                  u = e.dayHeaders && p(_s, {
                dates: s.headerDates,
                dateProfile: i,
                datesRepDistinctDays: !0,
                renderIntro: c ? this.renderHeadAxis : null
              }),
                  h = !1 !== e.allDaySlot && function (t) {
                return p(Cl, Object.assign({}, o.allDay, {
                  dateProfile: i,
                  dayTableModel: s,
                  nextDayThreshold: e.nextDayThreshold,
                  tableMinWidth: t.tableMinWidth,
                  colGroupNode: t.tableColGroupNode,
                  renderRowIntro: c ? _this76.renderTableRowAxis : null,
                  showWeekNumbers: !1,
                  expandRows: !1,
                  headerAlignElRef: _this76.headerElRef,
                  clientWidth: t.clientWidth,
                  clientHeight: t.clientHeight,
                  forPrint: r.forPrint
                }, _this76.getAllDayMaxEventProps()));
              },
                  f = function f(t) {
                return p(oc, Object.assign({}, o.timed, {
                  dayTableModel: s,
                  dateProfile: i,
                  axis: c,
                  slotDuration: e.slotDuration,
                  slatMetas: a,
                  forPrint: r.forPrint,
                  tableColGroupNode: t.tableColGroupNode,
                  tableMinWidth: t.tableMinWidth,
                  clientWidth: t.clientWidth,
                  clientHeight: t.clientHeight,
                  onSlatCoords: _this76.handleSlatCoords,
                  expandRows: t.expandRows,
                  onScrollTopRequest: _this76.handleScrollTopRequest
                }));
              };

              return d ? this.renderHScrollLayout(u, h, f, s.colCnt, l, a, this.state.slatCoords) : this.renderSimpleLayout(u, h, f);
            }
          }]);

          return component;
        }(Hl),
        usesMinMaxTime: !0,
        allDaySlot: !0,
        slotDuration: "00:30:00",
        slotEventOverlap: !0
      },
      timeGridDay: {
        type: "timeGrid",
        duration: {
          days: 1
        }
      },
      timeGridWeek: {
        type: "timeGrid",
        duration: {
          weeks: 1
        }
      }
    }
  });

  var hc =
  /*#__PURE__*/
  function (_Gn29) {
    _inherits(hc, _Gn29);

    function hc() {
      var _this77;

      _classCallCheck(this, hc);

      _this77 = _possibleConstructorReturn(this, _getPrototypeOf(hc).apply(this, arguments)), _this77.state = {
        textId: We()
      };
      return _this77;
    }

    _createClass(hc, [{
      key: "render",
      value: function render() {
        var _this$context9 = this.context,
            e = _this$context9.theme,
            t = _this$context9.dateEnv,
            n = _this$context9.options,
            r = _this$context9.viewApi,
            _this$props10 = this.props,
            i = _this$props10.cellId,
            s = _this$props10.dayDate,
            o = _this$props10.todayRange,
            a = this.state.textId,
            l = Fi(s, o),
            c = n.listDayFormat ? t.format(s, n.listDayFormat) : "",
            d = n.listDaySideFormat ? t.format(s, n.listDaySideFormat) : "",
            u = Object.assign({
          date: t.toDate(s),
          view: r,
          textId: a,
          text: c,
          sideText: d,
          navLinkAttrs: qi(this.context, s),
          sideNavLinkAttrs: qi(this.context, s, "day", !1)
        }, l);
        return p(Jn, {
          elTag: "tr",
          elClasses: ["fc-list-day"].concat(_toConsumableArray(Vi(l, e))),
          elAttrs: {
            "data-date": Wt(s)
          },
          renderProps: u,
          generatorName: "dayHeaderContent",
          customGenerator: n.dayHeaderContent,
          defaultGenerator: fc,
          classNameGenerator: n.dayHeaderClassNames,
          didMount: n.dayHeaderDidMount,
          willUnmount: n.dayHeaderWillUnmount
        }, function (t) {
          return p("th", {
            scope: "colgroup",
            colSpan: 3,
            id: i,
            "aria-labelledby": a
          }, p(t, {
            elTag: "div",
            elClasses: ["fc-list-day-cushion", e.getClass("tableCellShaded")]
          }));
        });
      }
    }]);

    return hc;
  }(Gn);

  function fc(e) {
    return p(y, null, e.text && p("a", Object.assign({
      id: e.textId,
      className: "fc-list-day-text"
    }, e.navLinkAttrs), e.text), e.sideText && p("a", Object.assign({
      "aria-hidden": !0,
      className: "fc-list-day-side-text"
    }, e.sideNavLinkAttrs), e.sideText));
  }

  var gc = an({
    hour: "numeric",
    minute: "2-digit",
    meridiem: "short"
  });

  var pc =
  /*#__PURE__*/
  function (_Gn30) {
    _inherits(pc, _Gn30);

    function pc() {
      _classCallCheck(this, pc);

      return _possibleConstructorReturn(this, _getPrototypeOf(pc).apply(this, arguments));
    }

    _createClass(pc, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.context,
            n = t.options,
            r = e.seg,
            i = e.timeHeaderId,
            s = e.eventHeaderId,
            o = e.dateHeaderId,
            a = n.eventTimeFormat || gc;
        return p(so, Object.assign({}, e, {
          elTag: "tr",
          elClasses: ["fc-list-event", r.eventRange.def.url && "fc-event-forced-url"],
          defaultGenerator: function defaultGenerator() {
            return function (e, t) {
              var n = bi(e, t);
              return p("a", Object.assign({}, n), e.eventRange.def.title);
            }(r, t);
          },
          seg: r,
          timeText: "",
          disableDragging: !0,
          disableResizing: !0
        }), function (e, n) {
          return p(y, null, function (e, t, n, r, i) {
            var s = n.options;

            if (!1 !== s.displayEventTime) {
              var _o28,
                  _a19 = e.eventRange.def,
                  _l15 = e.eventRange.instance,
                  _c10 = !1;

              if (_a19.allDay ? _c10 = !0 : ur(e.eventRange.range) ? e.isStart ? _o28 = pi(e, t, n, null, null, _l15.range.start, e.end) : e.isEnd ? _o28 = pi(e, t, n, null, null, e.start, _l15.range.end) : _c10 = !0 : _o28 = pi(e, t, n), _c10) {
                var _e111 = {
                  text: n.options.allDayText,
                  view: n.viewApi
                };
                return p(Jn, {
                  elTag: "td",
                  elClasses: ["fc-list-event-time"],
                  elAttrs: {
                    headers: "".concat(r, " ").concat(i)
                  },
                  renderProps: _e111,
                  generatorName: "allDayContent",
                  customGenerator: s.allDayContent,
                  defaultGenerator: mc,
                  classNameGenerator: s.allDayClassNames,
                  didMount: s.allDayDidMount,
                  willUnmount: s.allDayWillUnmount
                });
              }

              return p("td", {
                className: "fc-list-event-time"
              }, _o28);
            }

            return null;
          }(r, a, t, i, o), p("td", {
            "aria-hidden": !0,
            className: "fc-list-event-graphic"
          }, p("span", {
            className: "fc-list-event-dot",
            style: {
              borderColor: n.borderColor || n.backgroundColor
            }
          })), p(e, {
            elTag: "td",
            elClasses: ["fc-list-event-title"],
            elAttrs: {
              headers: "".concat(s, " ").concat(o)
            }
          }));
        });
      }
    }]);

    return pc;
  }(Gn);

  function mc(e) {
    return e.text;
  }

  function vc(e) {
    return e.text;
  }

  function yc(e) {
    var t = Mt(e.renderRange.start),
        n = e.renderRange.end,
        r = [],
        i = [];

    for (; t < n;) {
      r.push(t), i.push({
        start: t,
        end: wt(t, 1)
      }), t = wt(t, 1);
    }

    return {
      dayDates: r,
      dayRanges: i
    };
  }

  xe(':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}');

  function bc(e) {
    return !1 === e ? null : an(e);
  }

  var Ec = Po({
    name: "@fullcalendar/list",
    optionRefiners: {
      listDayFormat: bc,
      listDaySideFormat: bc,
      noEventsClassNames: yn,
      noEventsContent: yn,
      noEventsDidMount: yn,
      noEventsWillUnmount: yn
    },
    views: {
      list: {
        component:
        /*#__PURE__*/
        function (_ls11) {
          _inherits(component, _ls11);

          function component() {
            var _this78;

            _classCallCheck(this, component);

            _this78 = _possibleConstructorReturn(this, _getPrototypeOf(component).apply(this, arguments)), _this78.computeDateVars = Gt(yc), _this78.eventStoreToSegs = Gt(_this78._eventStoreToSegs), _this78.state = {
              timeHeaderId: We(),
              eventHeaderId: We(),
              dateHeaderIdRoot: We()
            }, _this78.setRootEl = function (e) {
              e ? _this78.context.registerInteractiveComponent(_assertThisInitialized(_this78), {
                el: e
              }) : _this78.context.unregisterInteractiveComponent(_assertThisInitialized(_this78));
            };
            return _this78;
          }

          _createClass(component, [{
            key: "render",
            value: function render() {
              var e = this.props,
                  t = this.context,
                  _this$computeDateVars = this.computeDateVars(e.dateProfile),
                  n = _this$computeDateVars.dayDates,
                  r = _this$computeDateVars.dayRanges,
                  i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);

              return p(er, {
                elRef: this.setRootEl,
                elClasses: ["fc-list", t.theme.getClass("table"), !1 !== t.options.stickyHeaderDates ? "fc-list-sticky" : ""],
                viewSpec: t.viewSpec
              }, p(Fs, {
                liquid: !e.isHeightAuto,
                overflowX: e.isHeightAuto ? "visible" : "hidden",
                overflowY: e.isHeightAuto ? "visible" : "auto"
              }, i.length > 0 ? this.renderSegList(i, n) : this.renderEmptyMessage()));
            }
          }, {
            key: "renderEmptyMessage",
            value: function renderEmptyMessage() {
              var _this$context10 = this.context,
                  e = _this$context10.options,
                  t = _this$context10.viewApi,
                  n = {
                text: e.noEventsText,
                view: t
              };
              return p(Jn, {
                elTag: "div",
                elClasses: ["fc-list-empty"],
                renderProps: n,
                generatorName: "noEventsContent",
                customGenerator: e.noEventsContent,
                defaultGenerator: vc,
                classNameGenerator: e.noEventsClassNames,
                didMount: e.noEventsDidMount,
                willUnmount: e.noEventsWillUnmount
              }, function (e) {
                return p(e, {
                  elTag: "div",
                  elClasses: ["fc-list-empty-cushion"]
                });
              });
            }
          }, {
            key: "renderSegList",
            value: function renderSegList(e, t) {
              var _this$context11 = this.context,
                  n = _this$context11.theme,
                  r = _this$context11.options,
                  _this$state2 = this.state,
                  i = _this$state2.timeHeaderId,
                  s = _this$state2.eventHeaderId,
                  o = _this$state2.dateHeaderIdRoot,
                  a = function (e) {
                var t,
                    n,
                    r = [];

                for (t = 0; t < e.length; t += 1) {
                  n = e[t], (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                }

                return r;
              }(e);

              return p(Rs, {
                unit: "day"
              }, function (e, l) {
                var c = [];

                for (var _n69 = 0; _n69 < a.length; _n69 += 1) {
                  var _d9 = a[_n69];

                  if (_d9) {
                    var _a20 = Wt(t[_n69]),
                        _u9 = o + "-" + _a20;

                    c.push(p(hc, {
                      key: _a20,
                      cellId: _u9,
                      dayDate: t[_n69],
                      todayRange: l
                    })), _d9 = di(_d9, r.eventOrder);
                    var _iteratorNormalCompletion82 = true;
                    var _didIteratorError82 = false;
                    var _iteratorError82 = undefined;

                    try {
                      for (var _iterator82 = _d9[Symbol.iterator](), _step82; !(_iteratorNormalCompletion82 = (_step82 = _iterator82.next()).done); _iteratorNormalCompletion82 = true) {
                        var _t69 = _step82.value;
                        c.push(p(pc, Object.assign({
                          key: _a20 + ":" + _t69.eventRange.instance.instanceId,
                          seg: _t69,
                          isDragging: !1,
                          isResizing: !1,
                          isDateSelecting: !1,
                          isSelected: !1,
                          timeHeaderId: i,
                          eventHeaderId: s,
                          dateHeaderId: _u9
                        }, mi(_t69, l, e))));
                      }
                    } catch (err) {
                      _didIteratorError82 = true;
                      _iteratorError82 = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion82 && _iterator82["return"] != null) {
                          _iterator82["return"]();
                        }
                      } finally {
                        if (_didIteratorError82) {
                          throw _iteratorError82;
                        }
                      }
                    }
                  }
                }

                return p("table", {
                  className: "fc-list-table " + n.getClass("table")
                }, p("thead", null, p("tr", null, p("th", {
                  scope: "col",
                  id: i
                }, r.timeHint), p("th", {
                  scope: "col",
                  "aria-hidden": !0
                }), p("th", {
                  scope: "col",
                  id: s
                }, r.eventHint))), p("tbody", null, c));
              });
            }
          }, {
            key: "_eventStoreToSegs",
            value: function _eventStoreToSegs(e, t, n) {
              return this.eventRangesToSegs(ii(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n);
            }
          }, {
            key: "eventRangesToSegs",
            value: function eventRangesToSegs(e, t) {
              var n = [];
              var _iteratorNormalCompletion83 = true;
              var _didIteratorError83 = false;
              var _iteratorError83 = undefined;

              try {
                for (var _iterator83 = e[Symbol.iterator](), _step83; !(_iteratorNormalCompletion83 = (_step83 = _iterator83.next()).done); _iteratorNormalCompletion83 = true) {
                  var _r77 = _step83.value;
                  n.push.apply(n, _toConsumableArray(this.eventRangeToSegs(_r77, t)));
                }
              } catch (err) {
                _didIteratorError83 = true;
                _iteratorError83 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion83 && _iterator83["return"] != null) {
                    _iterator83["return"]();
                  }
                } finally {
                  if (_didIteratorError83) {
                    throw _iteratorError83;
                  }
                }
              }

              return n;
            }
          }, {
            key: "eventRangeToSegs",
            value: function eventRangeToSegs(e, t) {
              var n,
                  r,
                  i,
                  s = this.context.dateEnv,
                  o = this.context.options.nextDayThreshold,
                  a = e.range,
                  l = e.def.allDay,
                  c = [];

              for (n = 0; n < t.length; n += 1) {
                if (r = ir(a, t[n]), r && (i = {
                  component: this,
                  eventRange: e,
                  start: r.start,
                  end: r.end,
                  isStart: e.isStart && r.start.valueOf() === a.start.valueOf(),
                  isEnd: e.isEnd && r.end.valueOf() === a.end.valueOf(),
                  dayIndex: n
                }, c.push(i), !i.isEnd && !l && n + 1 < t.length && a.end < s.add(t[n + 1].start, o))) {
                  i.end = a.end, i.isEnd = !0;
                  break;
                }
              }

              return c;
            }
          }]);

          return component;
        }(ls),
        buttonTextKey: "list",
        listDayFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      listDay: {
        type: "list",
        duration: {
          days: 1
        },
        listDayFormat: {
          weekday: "long"
        }
      },
      listWeek: {
        type: "list",
        duration: {
          weeks: 1
        },
        listDayFormat: {
          weekday: "long"
        },
        listDaySideFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      listMonth: {
        type: "list",
        duration: {
          month: 1
        },
        listDaySideFormat: {
          weekday: "long"
        }
      },
      listYear: {
        type: "list",
        duration: {
          year: 1
        },
        listDaySideFormat: {
          weekday: "long"
        }
      }
    }
  });

  var Sc =
  /*#__PURE__*/
  function (_ls12) {
    _inherits(Sc, _ls12);

    function Sc() {
      var _this79;

      _classCallCheck(this, Sc);

      _this79 = _possibleConstructorReturn(this, _getPrototypeOf(Sc).apply(this, arguments)), _this79.buildDayTableModel = Gt(Rl), _this79.slicer = new wl(), _this79.state = {
        labelId: We()
      };
      return _this79;
    }

    _createClass(Sc, [{
      key: "render",
      value: function render() {
        var e = this.props,
            t = this.state,
            n = this.context,
            r = e.dateProfile,
            i = e.forPrint,
            s = n.options,
            o = this.buildDayTableModel(r, n.dateProfileGenerator),
            a = this.slicer.sliceProps(e, r, s.nextDayThreshold, n, o),
            l = null != e.tableWidth ? e.tableWidth / s.aspectRatio : null,
            c = o.cells.length,
            d = null != l ? l / c : null;
        return p("div", {
          ref: e.elRef,
          "data-date": e.isoDateStr,
          className: "fc-multimonth-month",
          style: {
            width: e.width
          },
          role: "grid",
          "aria-labelledby": t.labelId
        }, p("div", {
          className: "fc-multimonth-header",
          style: {
            marginBottom: d
          },
          role: "presentation"
        }, p("div", {
          className: "fc-multimonth-title",
          id: t.labelId
        }, n.dateEnv.format(e.dateProfile.currentRange.start, e.titleFormat)), p("table", {
          className: ["fc-multimonth-header-table", n.theme.getClass("table")].join(" "),
          role: "presentation"
        }, p("thead", {
          role: "rowgroup"
        }, p(_s, {
          dateProfile: e.dateProfile,
          dates: o.headerDates,
          datesRepDistinctDays: !1
        })))), p("div", {
          className: ["fc-multimonth-daygrid", "fc-daygrid", "fc-daygrid-body", !i && "fc-daygrid-body-balanced", i && "fc-daygrid-body-unbalanced", i && "fc-daygrid-body-natural"].join(" "),
          style: {
            marginTop: -d
          }
        }, p("table", {
          className: ["fc-multimonth-daygrid-table", n.theme.getClass("table")].join(" "),
          style: {
            height: i ? "" : l
          },
          role: "presentation"
        }, p("tbody", {
          role: "rowgroup"
        }, p(Sl, Object.assign({}, a, {
          dateProfile: r,
          cells: o.cells,
          eventSelection: e.eventSelection,
          dayMaxEvents: !i,
          dayMaxEventRows: !i,
          showWeekNumbers: s.weekNumbers,
          clientWidth: e.clientWidth,
          clientHeight: e.clientHeight,
          forPrint: i
        }))))));
      }
    }]);

    return Sc;
  }(ls);

  var Ac = ft(1, "month");

  function Dc(e, t, n, r, i) {
    var _t$currentRange = t.currentRange,
        s = _t$currentRange.start,
        o = _t$currentRange.end;
    var a = s;
    var l = [];

    for (; a.valueOf() < o.valueOf();) {
      var _s35 = n.add(a, Ac),
          _o29 = {
        start: e.skipHiddenDays(a),
        end: e.skipHiddenDays(_s35, -1, !0)
      };

      var _c11 = _l({
        currentRange: _o29,
        snapToWeek: !0,
        fixedWeekCount: r,
        dateEnv: n
      });

      _c11 = {
        start: e.skipHiddenDays(_c11.start),
        end: e.skipHiddenDays(_c11.end, -1, !0)
      };

      var _d10 = t.activeRange ? ir(t.activeRange, i ? _c11 : _o29) : null;

      l.push({
        currentDate: t.currentDate,
        isValid: t.isValid,
        validRange: t.validRange,
        renderRange: _c11,
        activeRange: _d10,
        currentRange: _o29,
        currentRangeUnit: "month",
        isRangeAllDay: !0,
        dateIncrement: t.dateIncrement,
        slotMinTime: t.slotMaxTime,
        slotMaxTime: t.slotMinTime
      }), a = _s35;
    }

    return l;
  }

  var wc = an({
    year: "numeric",
    month: "long"
  }),
      Cc = an({
    month: "long"
  });

  function Rc(e, t) {
    return e || (t[0].currentRange.start.getUTCFullYear() !== t[t.length - 1].currentRange.start.getUTCFullYear() ? wc : Cc);
  }

  var xc = {
    multiMonthTitleFormat: an,
    multiMonthMaxColumns: Number,
    multiMonthMinWidth: Number
  };
  xe(".fc .fc-multimonth{border:1px solid var(--fc-border-color);display:flex;flex-wrap:wrap;overflow-x:hidden;overflow-y:auto}.fc .fc-multimonth-title{font-size:1.2em;font-weight:700;padding:1em 0;text-align:center}.fc .fc-multimonth-daygrid{background:var(--fc-page-bg-color)}.fc .fc-multimonth-daygrid-table,.fc .fc-multimonth-header-table{table-layout:fixed;width:100%}.fc .fc-multimonth-daygrid-table{border-top-style:hidden!important}.fc .fc-multimonth-singlecol .fc-multimonth{position:relative}.fc .fc-multimonth-singlecol .fc-multimonth-header{background:var(--fc-page-bg-color);position:relative;top:0;z-index:2}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid{position:relative;z-index:1}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid-table,.fc .fc-multimonth-singlecol .fc-multimonth-header-table{border-left-style:hidden;border-right-style:hidden}.fc .fc-multimonth-singlecol .fc-multimonth-month:last-child .fc-multimonth-daygrid-table{border-bottom-style:hidden}.fc .fc-multimonth-multicol{line-height:1}.fc .fc-multimonth-multicol .fc-multimonth-month{padding:0 1.2em 1.2em}.fc .fc-multimonth-multicol .fc-daygrid-more-link{border:1px solid var(--fc-event-border-color);display:block;float:none;padding:1px}.fc .fc-multimonth-compact{line-height:1}.fc .fc-multimonth-compact .fc-multimonth-daygrid-table,.fc .fc-multimonth-compact .fc-multimonth-header-table{font-size:.9em}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-header{position:sticky}.fc-media-print .fc-multimonth{overflow:visible}");

  var _c = Po({
    name: "@fullcalendar/multimonth",
    initialView: "multiMonthYear",
    optionRefiners: xc,
    views: {
      multiMonth: {
        component:
        /*#__PURE__*/
        function (_ls13) {
          _inherits(component, _ls13);

          function component() {
            var _this80;

            _classCallCheck(this, component);

            _this80 = _possibleConstructorReturn(this, _getPrototypeOf(component).apply(this, arguments)), _this80.splitDateProfileByMonth = Gt(Dc), _this80.buildMonthFormat = Gt(Rc), _this80.scrollElRef = {
              current: null
            }, _this80.firstMonthElRef = {
              current: null
            }, _this80.needsScrollReset = !1, _this80.handleSizing = function (e) {
              e && _this80.updateSize();
            };
            return _this80;
          }

          _createClass(component, [{
            key: "render",
            value: function render() {
              var _this81 = this;

              var e = this.context,
                  t = this.props,
                  n = this.state,
                  r = e.options,
                  i = n.clientWidth,
                  s = n.clientHeight,
                  o = n.monthHPadding || 0,
                  a = Math.min(null != i ? Math.floor(i / (r.multiMonthMinWidth + o)) : 1, r.multiMonthMaxColumns) || 1,
                  l = 100 / a + "%",
                  c = null == i ? null : i / a - o,
                  d = null != i && 1 === a,
                  u = this.splitDateProfileByMonth(e.dateProfileGenerator, t.dateProfile, e.dateEnv, !d && r.fixedWeekCount, r.showNonCurrentDates),
                  h = this.buildMonthFormat(r.multiMonthTitleFormat, u),
                  f = ["fc-multimonth", d ? "fc-multimonth-singlecol" : "fc-multimonth-multicol", null != c && c < 400 ? "fc-multimonth-compact" : ""];
              return p(er, {
                elRef: this.scrollElRef,
                elClasses: f,
                viewSpec: e.viewSpec
              }, u.map(function (e, n) {
                var r = Lt(e.currentRange.start);
                return p(Sc, Object.assign({}, t, {
                  key: r,
                  isoDateStr: r,
                  elRef: 0 === n ? _this81.firstMonthElRef : void 0,
                  titleFormat: h,
                  dateProfile: e,
                  width: l,
                  tableWidth: c,
                  clientWidth: i,
                  clientHeight: s
                }));
              }));
            }
          }, {
            key: "componentDidMount",
            value: function componentDidMount() {
              this.updateSize(), this.context.addResizeHandler(this.handleSizing), this.requestScrollReset();
            }
          }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(e) {
              Cn(e, this.props) || this.handleSizing(!1), e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              this.context.removeResizeHandler(this.handleSizing);
            }
          }, {
            key: "updateSize",
            value: function updateSize() {
              var e = this.scrollElRef.current,
                  t = this.firstMonthElRef.current;
              e && this.setState({
                clientWidth: e.clientWidth,
                clientHeight: e.clientHeight
              }), t && e && null == this.state.monthHPadding && this.setState({
                monthHPadding: e.clientWidth - t.firstChild.offsetWidth
              });
            }
          }, {
            key: "requestScrollReset",
            value: function requestScrollReset() {
              this.needsScrollReset = !0, this.flushScrollReset();
            }
          }, {
            key: "flushScrollReset",
            value: function flushScrollReset() {
              if (this.needsScrollReset && null != this.state.monthHPadding) {
                var _e112 = this.props.dateProfile.currentDate,
                    _t70 = this.scrollElRef.current,
                    _n70 = _t70.querySelector("[data-date=\"".concat(Lt(_e112), "\"]"));

                _t70.scrollTop = _n70.getBoundingClientRect().top - this.firstMonthElRef.current.getBoundingClientRect().top, this.needsScrollReset = !1;
              }
            }
          }, {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate() {
              return !0;
            }
          }]);

          return component;
        }(ls),
        dateProfileGeneratorClass: xl,
        multiMonthMinWidth: 350,
        multiMonthMaxColumns: 3
      },
      multiMonthYear: {
        type: "multiMonth",
        duration: {
          years: 1
        },
        fixedWeekCount: !0,
        showNonCurrentDates: !1
      }
    }
  });

  return ca.push(el, Tl, uc, Ec, _c), e.Calendar =
  /*#__PURE__*/
  function (_Ni) {
    _inherits(_class6, _Ni);

    function _class6(e) {
      var _this82;

      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, _class6);

      _this82 = _possibleConstructorReturn(this, _getPrototypeOf(_class6).call(this)), _this82.isRendering = !1, _this82.isRendered = !1, _this82.currentClassNames = [], _this82.customContentRenderId = 0, _this82.handleAction = function (e) {
        switch (e.type) {
          case "SET_EVENT_DRAG":
          case "SET_EVENT_RESIZE":
            _this82.renderRunner.tryDrain();

        }
      }, _this82.handleData = function (e) {
        _this82.currentData = e, _this82.renderRunner.request(e.calendarOptions.rerenderDelay);
      }, _this82.handleRenderRequest = function () {
        if (_this82.isRendering) {
          _this82.isRendered = !0;

          var _assertThisInitialize10 = _assertThisInitialized(_this82),
              _e113 = _assertThisInitialize10.currentData;

          jn(function () {
            U(p(ki, {
              options: _e113.calendarOptions,
              theme: _e113.theme,
              emitter: _e113.emitter
            }, function (t, n, r, i) {
              return _this82.setClassNames(t), _this82.setHeight(n), p($n.Provider, {
                value: _this82.customContentRenderId
              }, p(_a, Object.assign({
                isHeightAuto: r,
                forPrint: i
              }, _e113)));
            }), _this82.el);
          });
        } else _this82.isRendered && (_this82.isRendered = !1, U(null, _this82.el), _this82.setClassNames([]), _this82.setHeight(""));
      }, function (e) {
        e.isConnected && e.getRootNode && _e(e.getRootNode());
      }(e), _this82.el = e, _this82.renderRunner = new Me(_this82.handleRenderRequest), new ha({
        optionOverrides: t,
        calendarApi: _assertThisInitialized(_this82),
        onAction: _this82.handleAction,
        onData: _this82.handleData
      });
      return _this82;
    }

    _createClass(_class6, [{
      key: "render",
      value: function render() {
        var e = this.isRendering;
        e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.isRendering && (this.isRendering = !1, this.renderRunner.request());
      }
    }, {
      key: "updateSize",
      value: function updateSize() {
        var _this83 = this;

        jn(function () {
          _get(_getPrototypeOf(_class6.prototype), "updateSize", _this83).call(_this83);
        });
      }
    }, {
      key: "batchRendering",
      value: function batchRendering(e) {
        this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
      }
    }, {
      key: "pauseRendering",
      value: function pauseRendering() {
        this.renderRunner.pause("pauseRendering");
      }
    }, {
      key: "resumeRendering",
      value: function resumeRendering() {
        this.renderRunner.resume("pauseRendering", !0);
      }
    }, {
      key: "resetOptions",
      value: function resetOptions(e, t) {
        this.currentDataManager.resetOptions(e, t);
      }
    }, {
      key: "setClassNames",
      value: function setClassNames(e) {
        if (!St(e, this.currentClassNames)) {
          var _t71 = this.el.classList;
          var _iteratorNormalCompletion84 = true;
          var _didIteratorError84 = false;
          var _iteratorError84 = undefined;

          try {
            for (var _iterator84 = this.currentClassNames[Symbol.iterator](), _step84; !(_iteratorNormalCompletion84 = (_step84 = _iterator84.next()).done); _iteratorNormalCompletion84 = true) {
              var _e114 = _step84.value;

              _t71.remove(_e114);
            }
          } catch (err) {
            _didIteratorError84 = true;
            _iteratorError84 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion84 && _iterator84["return"] != null) {
                _iterator84["return"]();
              }
            } finally {
              if (_didIteratorError84) {
                throw _iteratorError84;
              }
            }
          }

          var _iteratorNormalCompletion85 = true;
          var _didIteratorError85 = false;
          var _iteratorError85 = undefined;

          try {
            for (var _iterator85 = e[Symbol.iterator](), _step85; !(_iteratorNormalCompletion85 = (_step85 = _iterator85.next()).done); _iteratorNormalCompletion85 = true) {
              var _n71 = _step85.value;

              _t71.add(_n71);
            }
          } catch (err) {
            _didIteratorError85 = true;
            _iteratorError85 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion85 && _iterator85["return"] != null) {
                _iterator85["return"]();
              }
            } finally {
              if (_didIteratorError85) {
                throw _iteratorError85;
              }
            }
          }

          this.currentClassNames = e;
        }
      }
    }, {
      key: "setHeight",
      value: function setHeight(e) {
        je(this.el, "height", e);
      }
    }]);

    return _class6;
  }(Ni), e.Draggable =
  /*#__PURE__*/
  function () {
    function _class7(e) {
      var _this84 = this;

      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, _class7);

      this.handlePointerDown = function (e) {
        var t = _this84.dragging,
            _this84$settings = _this84.settings,
            n = _this84$settings.minDistance,
            r = _this84$settings.longPressDelay;
        t.minDistance = null != n ? n : e.isTouch ? 0 : cn.eventDragMinDistance, t.delay = e.isTouch ? null != r ? r : cn.longPressDelay : 0;
      }, this.handleDragStart = function (e) {
        e.isTouch && _this84.dragging.delay && e.subjectEl.classList.contains("fc-event") && _this84.dragging.mirror.getMirrorEl().classList.add("fc-event-selected");
      }, this.settings = t;
      var n = this.dragging = new Fa(e);
      n.touchScrollAllowed = !1, null != t.itemSelector && (n.pointer.selector = t.itemSelector), null != t.appendTo && (n.mirror.parentNode = t.appendTo), n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragstart", this.handleDragStart), new Ja(n, t.eventData);
    }

    _createClass(_class7, [{
      key: "destroy",
      value: function destroy() {
        this.dragging.destroy();
      }
    }]);

    return _class7;
  }(), e.Internal = xo, e.JsonRequestError = Ri, e.Preact = _o, e.ThirdPartyDraggable =
  /*#__PURE__*/
  function () {
    function _class8(e, t) {
      _classCallCheck(this, _class8);

      var n = document;
      e === document || e instanceof Element ? (n = e, t = t || {}) : t = e || {};
      var r = this.dragging = new Ka(n);
      "string" == typeof t.itemSelector ? r.pointer.selector = t.itemSelector : n === document && (r.pointer.selector = "[data-event]"), "string" == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector), new Ja(r, t.eventData);
    }

    _createClass(_class8, [{
      key: "destroy",
      value: function destroy() {
        this.dragging.destroy();
      }
    }]);

    return _class8;
  }(), e.createPlugin = Po, e.formatDate = function (e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = Ma(t),
        r = an(t),
        i = n.createMarkerMeta(e);
    return i ? n.format(i.marker, r, {
      forcedTzo: i.forcedTzo
    }) : "";
  }, e.formatRange = function (e, t, n) {
    var r = Ma("object" == _typeof(n) && n ? n : {}),
        i = an(n),
        s = r.createMarkerMeta(e),
        o = r.createMarkerMeta(t);
    return s && o ? r.formatRange(s.marker, o.marker, i, {
      forcedStartTzo: s.forcedTzo,
      forcedEndTzo: o.forcedTzo,
      isEndExclusive: n.isEndExclusive,
      defaultSeparator: cn.defaultRangeSeparator
    }) : "";
  }, e.globalLocales = To, e.globalPlugins = ca, e.sliceEvents = function (e, t) {
    return ii(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg;
  }, e.version = "6.1.11", Object.defineProperty(e, "__esModule", {
    value: !0
  }), e;
}({});