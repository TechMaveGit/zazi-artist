"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * TinyMCE version 6.6.2 (2023-08-09)
 */
!function () {
  "use strict";

  var e = function e(_e2) {
    if (null === _e2) return "null";
    if (void 0 === _e2) return "undefined";

    var t = _typeof(_e2);

    return "object" === t && (Array.prototype.isPrototypeOf(_e2) || _e2.constructor && "Array" === _e2.constructor.name) ? "array" : "object" === t && (String.prototype.isPrototypeOf(_e2) || _e2.constructor && "String" === _e2.constructor.name) ? "string" : t;
  },
      t = function t(e) {
    return {
      eq: e
    };
  },
      n = t(function (e, t) {
    return e === t;
  }),
      o = function o(e) {
    return t(function (t, n) {
      if (t.length !== n.length) return !1;

      for (var o = t.length, r = 0; r < o; r++) {
        if (!e.eq(t[r], n[r])) return !1;
      }

      return !0;
    });
  },
      r = function r(e) {
    return t(function (r, s) {
      var a = Object.keys(r),
          i = Object.keys(s);
      if (!function (e, n) {
        return function (e, n) {
          return t(function (t, o) {
            return e.eq(n(t), n(o));
          });
        }(o(e), function (e) {
          return function (e, t) {
            return Array.prototype.slice.call(e).sort(t);
          }(e, n);
        });
      }(n).eq(a, i)) return !1;

      for (var l = a.length, d = 0; d < l; d++) {
        var c = a[d];
        if (!e.eq(r[c], s[c])) return !1;
      }

      return !0;
    });
  },
      s = t(function (t, n) {
    if (t === n) return !0;
    var a = e(t);
    return a === e(n) && (function (e) {
      return -1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(e);
    }(a) ? t === n : "array" === a ? o(s).eq(t, n) : "object" === a && r(s).eq(t, n));
  });

  var a = Object.getPrototypeOf,
      i = function i(e, t, n) {
    var o;
    return !!n(e, t.prototype) || (null === (o = e.constructor) || void 0 === o ? void 0 : o.name) === t.name;
  },
      l = function l(e) {
    return function (t) {
      return function (e) {
        var t = _typeof(e);

        return null === e ? "null" : "object" === t && Array.isArray(e) ? "array" : "object" === t && i(e, String, function (e, t) {
          return t.isPrototypeOf(e);
        }) ? "string" : t;
      }(t) === e;
    };
  },
      d = function d(e) {
    return function (t) {
      return _typeof(t) === e;
    };
  },
      c = function c(e) {
    return function (t) {
      return e === t;
    };
  },
      u = function u(e, t) {
    return f(e) && i(e, t, function (e, t) {
      return a(e) === t;
    });
  },
      m = l("string"),
      f = l("object"),
      g = function g(e) {
    return u(e, Object);
  },
      p = l("array"),
      h = c(null),
      b = d("boolean"),
      v = c(void 0),
      y = function y(e) {
    return null == e;
  },
      C = function C(e) {
    return !y(e);
  },
      w = d("function"),
      x = d("number"),
      k = function k(e, t) {
    if (p(e)) {
      for (var _n2 = 0, _o2 = e.length; _n2 < _o2; ++_n2) {
        if (!t(e[_n2])) return !1;
      }

      return !0;
    }

    return !1;
  },
      E = function E() {},
      S = function S(e, t) {
    return function () {
      for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
        n[_key] = arguments[_key];
      }

      return e(t.apply(null, n));
    };
  },
      _ = function _(e, t) {
    return function (n) {
      return e(t(n));
    };
  },
      N = function N(e) {
    return function () {
      return e;
    };
  },
      R = function R(e) {
    return e;
  },
      A = function A(e, t) {
    return e === t;
  };

  function O(e) {
    for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      t[_key2 - 1] = arguments[_key2];
    }

    return function () {
      for (var _len3 = arguments.length, n = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        n[_key3] = arguments[_key3];
      }

      var o = t.concat(n);
      return e.apply(null, o);
    };
  }

  var T = function T(e) {
    return function (t) {
      return !e(t);
    };
  },
      B = function B(e) {
    return function () {
      throw new Error(e);
    };
  },
      D = function D(e) {
    return e();
  },
      P = function P(e) {
    e();
  },
      L = N(!1),
      M = N(!0);

  var I =
  /*#__PURE__*/
  function () {
    function I(e, t) {
      _classCallCheck(this, I);

      this.tag = e, this.value = t;
    }

    _createClass(I, [{
      key: "fold",
      value: function fold(e, t) {
        return this.tag ? t(this.value) : e();
      }
    }, {
      key: "isSome",
      value: function isSome() {
        return this.tag;
      }
    }, {
      key: "isNone",
      value: function isNone() {
        return !this.tag;
      }
    }, {
      key: "map",
      value: function map(e) {
        return this.tag ? I.some(e(this.value)) : I.none();
      }
    }, {
      key: "bind",
      value: function bind(e) {
        return this.tag ? e(this.value) : I.none();
      }
    }, {
      key: "exists",
      value: function exists(e) {
        return this.tag && e(this.value);
      }
    }, {
      key: "forall",
      value: function forall(e) {
        return !this.tag || e(this.value);
      }
    }, {
      key: "filter",
      value: function filter(e) {
        return !this.tag || e(this.value) ? this : I.none();
      }
    }, {
      key: "getOr",
      value: function getOr(e) {
        return this.tag ? this.value : e;
      }
    }, {
      key: "or",
      value: function or(e) {
        return this.tag ? this : e;
      }
    }, {
      key: "getOrThunk",
      value: function getOrThunk(e) {
        return this.tag ? this.value : e();
      }
    }, {
      key: "orThunk",
      value: function orThunk(e) {
        return this.tag ? this : e();
      }
    }, {
      key: "getOrDie",
      value: function getOrDie(e) {
        if (this.tag) return this.value;
        throw new Error(null != e ? e : "Called getOrDie on None");
      }
    }, {
      key: "getOrNull",
      value: function getOrNull() {
        return this.tag ? this.value : null;
      }
    }, {
      key: "getOrUndefined",
      value: function getOrUndefined() {
        return this.value;
      }
    }, {
      key: "each",
      value: function each(e) {
        this.tag && e(this.value);
      }
    }, {
      key: "toArray",
      value: function toArray() {
        return this.tag ? [this.value] : [];
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.tag ? "some(".concat(this.value, ")") : "none()";
      }
    }], [{
      key: "some",
      value: function some(e) {
        return new I(!0, e);
      }
    }, {
      key: "none",
      value: function none() {
        return I.singletonNone;
      }
    }, {
      key: "from",
      value: function from(e) {
        return C(e) ? I.some(e) : I.none();
      }
    }]);

    return I;
  }();

  I.singletonNone = new I(!1);

  var F = Array.prototype.slice,
      U = Array.prototype.indexOf,
      z = Array.prototype.push,
      j = function j(e, t) {
    return U.call(e, t);
  },
      H = function H(e, t) {
    return j(e, t) > -1;
  },
      $ = function $(e, t) {
    for (var _n3 = 0, _o3 = e.length; _n3 < _o3; _n3++) {
      if (t(e[_n3], _n3)) return !0;
    }

    return !1;
  },
      V = function V(e, t) {
    var n = e.length,
        o = new Array(n);

    for (var _r2 = 0; _r2 < n; _r2++) {
      var _n4 = e[_r2];
      o[_r2] = t(_n4, _r2);
    }

    return o;
  },
      q = function q(e, t) {
    for (var _n5 = 0, _o4 = e.length; _n5 < _o4; _n5++) {
      t(e[_n5], _n5);
    }
  },
      W = function W(e, t) {
    for (var _n6 = e.length - 1; _n6 >= 0; _n6--) {
      t(e[_n6], _n6);
    }
  },
      K = function K(e, t) {
    var n = [],
        o = [];

    for (var _r3 = 0, _s2 = e.length; _r3 < _s2; _r3++) {
      var _s3 = e[_r3];
      (t(_s3, _r3) ? n : o).push(_s3);
    }

    return {
      pass: n,
      fail: o
    };
  },
      G = function G(e, t) {
    var n = [];

    for (var _o5 = 0, _r4 = e.length; _o5 < _r4; _o5++) {
      var _r5 = e[_o5];
      t(_r5, _o5) && n.push(_r5);
    }

    return n;
  },
      Y = function Y(e, t, n) {
    return W(e, function (e, o) {
      n = t(n, e, o);
    }), n;
  },
      X = function X(e, t, n) {
    return q(e, function (e, o) {
      n = t(n, e, o);
    }), n;
  },
      Q = function Q(e, t, n) {
    for (var _o6 = 0, _r6 = e.length; _o6 < _r6; _o6++) {
      var _r7 = e[_o6];
      if (t(_r7, _o6)) return I.some(_r7);
      if (n(_r7, _o6)) break;
    }

    return I.none();
  },
      J = function J(e, t) {
    return Q(e, t, L);
  },
      Z = function Z(e, t) {
    for (var _n7 = 0, _o7 = e.length; _n7 < _o7; _n7++) {
      if (t(e[_n7], _n7)) return I.some(_n7);
    }

    return I.none();
  },
      ee = function ee(e) {
    var t = [];

    for (var _n8 = 0, _o8 = e.length; _n8 < _o8; ++_n8) {
      if (!p(e[_n8])) throw new Error("Arr.flatten item " + _n8 + " was not an array, input: " + e);
      z.apply(t, e[_n8]);
    }

    return t;
  },
      te = function te(e, t) {
    return ee(V(e, t));
  },
      ne = function ne(e, t) {
    for (var _n9 = 0, _o9 = e.length; _n9 < _o9; ++_n9) {
      if (!0 !== t(e[_n9], _n9)) return !1;
    }

    return !0;
  },
      oe = function oe(e) {
    var t = F.call(e, 0);
    return t.reverse(), t;
  },
      re = function re(e, t) {
    return G(e, function (e) {
      return !H(t, e);
    });
  },
      se = function se(e, t) {
    var n = {};

    for (var _o10 = 0, _r8 = e.length; _o10 < _r8; _o10++) {
      var _r9 = e[_o10];
      n[String(_r9)] = t(_r9, _o10);
    }

    return n;
  },
      ae = function ae(e, t) {
    var n = F.call(e, 0);
    return n.sort(t), n;
  },
      ie = function ie(e, t) {
    return t >= 0 && t < e.length ? I.some(e[t]) : I.none();
  },
      le = function le(e) {
    return ie(e, 0);
  },
      de = function de(e) {
    return ie(e, e.length - 1);
  },
      ce = w(Array.from) ? Array.from : function (e) {
    return F.call(e);
  },
      ue = function ue(e, t) {
    for (var _n10 = 0; _n10 < e.length; _n10++) {
      var _o11 = t(e[_n10], _n10);

      if (_o11.isSome()) return _o11;
    }

    return I.none();
  },
      me = Object.keys,
      fe = Object.hasOwnProperty,
      ge = function ge(e, t) {
    var n = me(e);

    for (var _o12 = 0, _r10 = n.length; _o12 < _r10; _o12++) {
      var _r11 = n[_o12];
      t(e[_r11], _r11);
    }
  },
      pe = function pe(e, t) {
    return he(e, function (e, n) {
      return {
        k: n,
        v: t(e, n)
      };
    });
  },
      he = function he(e, t) {
    var n = {};
    return ge(e, function (e, o) {
      var r = t(e, o);
      n[r.k] = r.v;
    }), n;
  },
      be = function be(e) {
    return function (t, n) {
      e[n] = t;
    };
  },
      ve = function ve(e, t, n, o) {
    ge(e, function (e, r) {
      (t(e, r) ? n : o)(e, r);
    });
  },
      ye = function ye(e, t) {
    var n = {};
    return ve(e, t, be(n), E), n;
  },
      Ce = function Ce(e, t) {
    var n = [];
    return ge(e, function (e, o) {
      n.push(t(e, o));
    }), n;
  },
      we = function we(e) {
    return Ce(e, R);
  },
      xe = function xe(e, t) {
    return ke(e, t) ? I.from(e[t]) : I.none();
  },
      ke = function ke(e, t) {
    return fe.call(e, t);
  },
      Ee = function Ee(e, t) {
    return ke(e, t) && void 0 !== e[t] && null !== e[t];
  },
      Se = function Se(e) {
    var t = {};
    return q(e, function (e) {
      t[e] = {};
    }), me(t);
  },
      _e = function _e(e) {
    return void 0 !== e.length;
  },
      Ne = Array.isArray,
      Re = function Re(e, t, n) {
    if (!e) return !1;

    if (n = n || e, _e(e)) {
      for (var _o13 = 0, _r12 = e.length; _o13 < _r12; _o13++) {
        if (!1 === t.call(n, e[_o13], _o13, e)) return !1;
      }
    } else for (var _o14 in e) {
      if (ke(e, _o14) && !1 === t.call(n, e[_o14], _o14, e)) return !1;
    }

    return !0;
  },
      Ae = function Ae(e, t) {
    var n = [];
    return Re(e, function (o, r) {
      n.push(t(o, r, e));
    }), n;
  },
      Oe = function Oe(e, t) {
    var n = [];
    return Re(e, function (o, r) {
      t && !t(o, r, e) || n.push(o);
    }), n;
  },
      Te = function Te(e, t, n, o) {
    var r = v(n) ? e[0] : n;

    for (var _n11 = 0; _n11 < e.length; _n11++) {
      r = t.call(o, r, e[_n11], _n11);
    }

    return r;
  },
      Be = function Be(e, t, n) {
    for (var _o15 = 0, _r13 = e.length; _o15 < _r13; _o15++) {
      if (t.call(n, e[_o15], _o15, e)) return _o15;
    }

    return -1;
  },
      De = function De(e) {
    return e[e.length - 1];
  },
      Pe = function Pe(e) {
    var t,
        n = !1;
    return function () {
      for (var _len4 = arguments.length, o = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        o[_key4] = arguments[_key4];
      }

      return n || (n = !0, t = e.apply(null, o)), t;
    };
  },
      Le = function Le() {
    return Me(0, 0);
  },
      Me = function Me(e, t) {
    return {
      major: e,
      minor: t
    };
  },
      Ie = {
    nu: Me,
    detect: function detect(e, t) {
      var n = String(t).toLowerCase();
      return 0 === e.length ? Le() : function (e, t) {
        var n = function (e, t) {
          for (var _n12 = 0; _n12 < e.length; _n12++) {
            var _o16 = e[_n12];
            if (_o16.test(t)) return _o16;
          }
        }(e, t);

        if (!n) return {
          major: 0,
          minor: 0
        };

        var o = function o(e) {
          return Number(t.replace(n, "$" + e));
        };

        return Me(o(1), o(2));
      }(e, n);
    },
    unknown: Le
  },
      Fe = function Fe(e, t) {
    var n = String(t).toLowerCase();
    return J(e, function (e) {
      return e.search(n);
    });
  },
      Ue = function Ue(e, t, n) {
    return "" === t || e.length >= t.length && e.substr(n, n + t.length) === t;
  },
      ze = function ze(e, t) {
    return He(e, t) ? function (e, t) {
      return e.substring(t);
    }(e, t.length) : e;
  },
      je = function je(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var o = arguments.length > 3 ? arguments[3] : undefined;
    var r = e.indexOf(t, n);
    return -1 !== r && (!!v(o) || r + t.length <= o);
  },
      He = function He(e, t) {
    return Ue(e, t, 0);
  },
      $e = function $e(e, t) {
    return Ue(e, t, e.length - t.length);
  },
      Ve = function Ve(e) {
    return function (t) {
      return t.replace(e, "");
    };
  },
      qe = Ve(/^\s+|\s+$/g),
      We = Ve(/^\s+/g),
      Ke = Ve(/\s+$/g),
      Ge = function Ge(e) {
    return e.length > 0;
  },
      Ye = function Ye(e) {
    return !Ge(e);
  },
      Xe = function Xe(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var n = parseInt(e, t);
    return isNaN(n) ? I.none() : I.some(n);
  },
      Qe = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
      Je = function Je(e) {
    return function (t) {
      return je(t, e);
    };
  },
      Ze = [{
    name: "Edge",
    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
    search: function search(e) {
      return je(e, "edge/") && je(e, "chrome") && je(e, "safari") && je(e, "applewebkit");
    }
  }, {
    name: "Chromium",
    brand: "Chromium",
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Qe],
    search: function search(e) {
      return je(e, "chrome") && !je(e, "chromeframe");
    }
  }, {
    name: "IE",
    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
    search: function search(e) {
      return je(e, "msie") || je(e, "trident");
    }
  }, {
    name: "Opera",
    versionRegexes: [Qe, /.*?opera\/([0-9]+)\.([0-9]+).*/],
    search: Je("opera")
  }, {
    name: "Firefox",
    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
    search: Je("firefox")
  }, {
    name: "Safari",
    versionRegexes: [Qe, /.*?cpu os ([0-9]+)_([0-9]+).*/],
    search: function search(e) {
      return (je(e, "safari") || je(e, "mobile/")) && je(e, "applewebkit");
    }
  }],
      et = [{
    name: "Windows",
    search: Je("win"),
    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "iOS",
    search: function search(e) {
      return je(e, "iphone") || je(e, "ipad");
    },
    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
    name: "Android",
    search: Je("android"),
    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "macOS",
    search: Je("mac os x"),
    versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
    name: "Linux",
    search: Je("linux"),
    versionRegexes: []
  }, {
    name: "Solaris",
    search: Je("sunos"),
    versionRegexes: []
  }, {
    name: "FreeBSD",
    search: Je("freebsd"),
    versionRegexes: []
  }, {
    name: "ChromeOS",
    search: Je("cros"),
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
  }],
      tt = {
    browsers: N(Ze),
    oses: N(et)
  },
      nt = "Edge",
      ot = "Chromium",
      rt = "Opera",
      st = "Firefox",
      at = "Safari",
      it = function it(e) {
    var t = e.current,
        n = e.version,
        o = function o(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: n,
      isEdge: o(nt),
      isChromium: o(ot),
      isIE: o("IE"),
      isOpera: o(rt),
      isFirefox: o(st),
      isSafari: o(at)
    };
  },
      lt = function lt() {
    return it({
      current: void 0,
      version: Ie.unknown()
    });
  },
      dt = it,
      ct = (N(nt), N(ot), N("IE"), N(rt), N(st), N(at), "Windows"),
      ut = "Android",
      mt = "Linux",
      ft = "macOS",
      gt = "Solaris",
      pt = "FreeBSD",
      ht = "ChromeOS",
      bt = function bt(e) {
    var t = e.current,
        n = e.version,
        o = function o(e) {
      return function () {
        return t === e;
      };
    };

    return {
      current: t,
      version: n,
      isWindows: o(ct),
      isiOS: o("iOS"),
      isAndroid: o(ut),
      isMacOS: o(ft),
      isLinux: o(mt),
      isSolaris: o(gt),
      isFreeBSD: o(pt),
      isChromeOS: o(ht)
    };
  },
      vt = function vt() {
    return bt({
      current: void 0,
      version: Ie.unknown()
    });
  },
      yt = bt,
      Ct = (N(ct), N("iOS"), N(ut), N(mt), N(ft), N(gt), N(pt), N(ht), function (e) {
    return window.matchMedia(e).matches;
  });

  var wt = Pe(function () {
    return function (e, t, n) {
      var o = tt.browsers(),
          r = tt.oses(),
          s = t.bind(function (e) {
        return function (e, t) {
          return ue(t.brands, function (t) {
            var n = t.brand.toLowerCase();
            return J(e, function (e) {
              var t;
              return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase());
            }).map(function (e) {
              return {
                current: e.name,
                version: Ie.nu(parseInt(t.version, 10), 0)
              };
            });
          });
        }(o, e);
      }).orThunk(function () {
        return function (e, t) {
          return Fe(e, t).map(function (e) {
            var n = Ie.detect(e.versionRegexes, t);
            return {
              current: e.name,
              version: n
            };
          });
        }(o, e);
      }).fold(lt, dt),
          a = function (e, t) {
        return Fe(e, t).map(function (e) {
          var n = Ie.detect(e.versionRegexes, t);
          return {
            current: e.name,
            version: n
          };
        });
      }(r, e).fold(vt, yt),
          i = function (e, t, n, o) {
        var r = e.isiOS() && !0 === /ipad/i.test(n),
            s = e.isiOS() && !r,
            a = e.isiOS() || e.isAndroid(),
            i = a || o("(pointer:coarse)"),
            l = r || !s && a && o("(min-device-width:768px)"),
            d = s || a && !l,
            c = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n),
            u = !d && !l && !c;
        return {
          isiPad: N(r),
          isiPhone: N(s),
          isTablet: N(l),
          isPhone: N(d),
          isTouch: N(i),
          isAndroid: e.isAndroid,
          isiOS: e.isiOS,
          isWebView: N(c),
          isDesktop: N(u)
        };
      }(a, s, e, n);

      return {
        browser: s,
        os: a,
        deviceType: i
      };
    }(navigator.userAgent, I.from(navigator.userAgentData), Ct);
  });

  var xt = function xt() {
    return wt();
  },
      kt = navigator.userAgent,
      Et = xt(),
      St = Et.browser,
      _t = Et.os,
      Nt = Et.deviceType,
      Rt = -1 !== kt.indexOf("Windows Phone"),
      At = {
    transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    documentMode: St.isIE() ? document.documentMode || 7 : 10,
    cacheSuffix: null,
    container: null,
    canHaveCSP: !St.isIE(),
    windowsPhone: Rt,
    browser: {
      current: St.current,
      version: St.version,
      isChromium: St.isChromium,
      isEdge: St.isEdge,
      isFirefox: St.isFirefox,
      isIE: St.isIE,
      isOpera: St.isOpera,
      isSafari: St.isSafari
    },
    os: {
      current: _t.current,
      version: _t.version,
      isAndroid: _t.isAndroid,
      isChromeOS: _t.isChromeOS,
      isFreeBSD: _t.isFreeBSD,
      isiOS: _t.isiOS,
      isLinux: _t.isLinux,
      isMacOS: _t.isMacOS,
      isSolaris: _t.isSolaris,
      isWindows: _t.isWindows
    },
    deviceType: {
      isDesktop: Nt.isDesktop,
      isiPad: Nt.isiPad,
      isiPhone: Nt.isiPhone,
      isPhone: Nt.isPhone,
      isTablet: Nt.isTablet,
      isTouch: Nt.isTouch,
      isWebView: Nt.isWebView
    }
  },
      Ot = /^\s*|\s*$/g,
      Tt = function Tt(e) {
    return y(e) ? "" : ("" + e).replace(Ot, "");
  },
      Bt = function Bt(e, t, n, o) {
    o = o || this, e && (n && (e = e[n]), Re(e, function (e, r) {
      return !1 !== t.call(o, e, r, n) && (Bt(e, t, n, o), !0);
    }));
  },
      Dt = {
    trim: Tt,
    isArray: Ne,
    is: function is(e, t) {
      return t ? !("array" !== t || !Ne(e)) || _typeof(e) === t : void 0 !== e;
    },
    toArray: function toArray(e) {
      if (Ne(e)) return e;
      {
        var _t2 = [];

        for (var _n13 = 0, _o17 = e.length; _n13 < _o17; _n13++) {
          _t2[_n13] = e[_n13];
        }

        return _t2;
      }
    },
    makeMap: function makeMap(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var o = m(e) ? e.split(t || ",") : e || [];
      var r = o.length;

      for (; r--;) {
        n[o[r]] = {};
      }

      return n;
    },
    each: Re,
    map: Ae,
    grep: Oe,
    inArray: function inArray(e, t) {
      if (e) for (var _n14 = 0, _o18 = e.length; _n14 < _o18; _n14++) {
        if (e[_n14] === t) return _n14;
      }
      return -1;
    },
    hasOwn: ke,
    extend: function extend(e) {
      for (var _n15 = 0; _n15 < (arguments.length <= 1 ? 0 : arguments.length - 1); _n15++) {
        var _o19 = _n15 + 1 < 1 || arguments.length <= _n15 + 1 ? undefined : arguments[_n15 + 1];

        for (var _t3 in _o19) {
          if (ke(_o19, _t3)) {
            var _n16 = _o19[_t3];
            void 0 !== _n16 && (e[_t3] = _n16);
          }
        }
      }

      return e;
    },
    walk: Bt,
    resolve: function resolve(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
      var n = e.split(".");

      for (var _e3 = 0, _o20 = n.length; _e3 < _o20 && (t = t[n[_e3]]); _e3++) {
        ;
      }

      return t;
    },
    explode: function explode(e, t) {
      return p(e) ? e : "" === e ? [] : Ae(e.split(t || ","), Tt);
    },
    _addCacheSuffix: function _addCacheSuffix(e) {
      var t = At.cacheSuffix;
      return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
    }
  },
      Pt = function Pt(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : A;
    return e.exists(function (e) {
      return n(e, t);
    });
  },
      Lt = function Lt(e, t, n) {
    return e.isSome() && t.isSome() ? I.some(n(e.getOrDie(), t.getOrDie())) : I.none();
  },
      Mt = function Mt(e, t) {
    return e ? I.some(t) : I.none();
  },
      It = "undefined" != typeof window ? window : Function("return this;")(),
      Ft = function Ft(e, t) {
    return function (e, t) {
      var n = null != t ? t : It;

      for (var _t4 = 0; _t4 < e.length && null != n; ++_t4) {
        n = n[e[_t4]];
      }

      return n;
    }(e.split("."), t);
  },
      Ut = Object.getPrototypeOf,
      zt = function zt(e) {
    var t = Ft("ownerDocument.defaultView", e);
    return f(e) && (function (e) {
      return function (e, t) {
        var n = function (e, t) {
          return Ft(e, t);
        }(e, t);

        if (null == n) throw new Error(e + " not available on this browser");
        return n;
      }("HTMLElement", e);
    }(t).prototype.isPrototypeOf(e) || /^HTML\w*Element$/.test(Ut(e).constructor.name));
  },
      jt = function jt(e) {
    return e.dom.nodeName.toLowerCase();
  },
      Ht = function Ht(e) {
    return e.dom.nodeType;
  },
      $t = function $t(e) {
    return function (t) {
      return Ht(t) === e;
    };
  },
      Vt = function Vt(e) {
    return qt(e) && zt(e.dom);
  },
      qt = $t(1),
      Wt = $t(3),
      Kt = $t(9),
      Gt = $t(11),
      Yt = function Yt(e) {
    return function (t) {
      return qt(t) && jt(t) === e;
    };
  },
      Xt = function Xt(e, t, n) {
    if (!(m(n) || b(n) || x(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
    e.setAttribute(t, n + "");
  },
      Qt = function Qt(e, t, n) {
    Xt(e.dom, t, n);
  },
      Jt = function Jt(e, t) {
    var n = e.dom;
    ge(t, function (e, t) {
      Xt(n, t, e);
    });
  },
      Zt = function Zt(e, t) {
    var n = e.dom.getAttribute(t);
    return null === n ? void 0 : n;
  },
      en = function en(e, t) {
    return I.from(Zt(e, t));
  },
      tn = function tn(e, t) {
    var n = e.dom;
    return !(!n || !n.hasAttribute) && n.hasAttribute(t);
  },
      nn = function nn(e, t) {
    e.dom.removeAttribute(t);
  },
      on = function on(e) {
    return X(e.dom.attributes, function (e, t) {
      return e[t.name] = t.value, e;
    }, {});
  },
      rn = function rn(e, t) {
    var n = Zt(e, t);
    return void 0 === n || "" === n ? [] : n.split(" ");
  },
      sn = function sn(e) {
    return void 0 !== e.dom.classList;
  },
      an = function an(e) {
    return rn(e, "class");
  },
      ln = function ln(e, t) {
    return function (e, t, n) {
      var o = rn(e, t).concat([n]);
      return Qt(e, t, o.join(" ")), !0;
    }(e, "class", t);
  },
      dn = function dn(e, t) {
    return function (e, t, n) {
      var o = G(rn(e, t), function (e) {
        return e !== n;
      });
      return o.length > 0 ? Qt(e, t, o.join(" ")) : nn(e, t), !1;
    }(e, "class", t);
  },
      cn = function cn(e, t) {
    sn(e) ? e.dom.classList.add(t) : ln(e, t);
  },
      un = function un(e) {
    0 === (sn(e) ? e.dom.classList : an(e)).length && nn(e, "class");
  },
      mn = function mn(e, t) {
    sn(e) ? e.dom.classList.remove(t) : dn(e, t), un(e);
  },
      fn = function fn(e, t) {
    return sn(e) && e.dom.classList.contains(t);
  },
      gn = function gn(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return {
      dom: e
    };
  },
      pn = function pn(e, t) {
    var n = (t || document).createElement("div");

    if (n.innerHTML = e, !n.hasChildNodes() || n.childNodes.length > 1) {
      var _t5 = "HTML does not have a single root node";
      throw console.error(_t5, e), new Error(_t5);
    }

    return gn(n.childNodes[0]);
  },
      hn = function hn(e, t) {
    var n = (t || document).createElement(e);
    return gn(n);
  },
      bn = function bn(e, t) {
    var n = (t || document).createTextNode(e);
    return gn(n);
  },
      vn = gn,
      yn = function yn(e, t, n) {
    return I.from(e.dom.elementFromPoint(t, n)).map(gn);
  },
      Cn = function Cn(e, t) {
    var n = [],
        o = function o(e) {
      return n.push(e), t(e);
    };

    var r = t(e);

    do {
      r = r.bind(o);
    } while (r.isSome());

    return n;
  },
      wn = function wn(e, t) {
    var n = e.dom;
    if (1 !== n.nodeType) return !1;
    {
      var _e4 = n;
      if (void 0 !== _e4.matches) return _e4.matches(t);
      if (void 0 !== _e4.msMatchesSelector) return _e4.msMatchesSelector(t);
      if (void 0 !== _e4.webkitMatchesSelector) return _e4.webkitMatchesSelector(t);
      if (void 0 !== _e4.mozMatchesSelector) return _e4.mozMatchesSelector(t);
      throw new Error("Browser lacks native selectors");
    }
  },
      xn = function xn(e) {
    return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount;
  },
      kn = function kn(e, t) {
    return e.dom === t.dom;
  },
      En = function En(e, t) {
    var n = e.dom,
        o = t.dom;
    return n !== o && n.contains(o);
  },
      Sn = function Sn(e) {
    return vn(e.dom.ownerDocument);
  },
      _n = function _n(e) {
    return Kt(e) ? e : Sn(e);
  },
      Nn = function Nn(e) {
    return vn(_n(e).dom.defaultView);
  },
      Rn = function Rn(e) {
    return I.from(e.dom.parentNode).map(vn);
  },
      An = function An(e) {
    return I.from(e.dom.parentElement).map(vn);
  },
      On = function On(e, t) {
    var n = w(t) ? t : L;
    var o = e.dom;
    var r = [];

    for (; null !== o.parentNode && void 0 !== o.parentNode;) {
      var _e5 = o.parentNode,
          _t6 = vn(_e5);

      if (r.push(_t6), !0 === n(_t6)) break;
      o = _e5;
    }

    return r;
  },
      Tn = function Tn(e) {
    return I.from(e.dom.previousSibling).map(vn);
  },
      Bn = function Bn(e) {
    return I.from(e.dom.nextSibling).map(vn);
  },
      Dn = function Dn(e) {
    return oe(Cn(e, Tn));
  },
      Pn = function Pn(e) {
    return Cn(e, Bn);
  },
      Ln = function Ln(e) {
    return V(e.dom.childNodes, vn);
  },
      Mn = function Mn(e, t) {
    var n = e.dom.childNodes;
    return I.from(n[t]).map(vn);
  },
      In = function In(e) {
    return Mn(e, 0);
  },
      Fn = function Fn(e) {
    return Mn(e, e.dom.childNodes.length - 1);
  },
      Un = function Un(e) {
    return e.dom.childNodes.length;
  },
      zn = function zn(e) {
    return Gt(e) && C(e.dom.host);
  },
      jn = w(Element.prototype.attachShadow) && w(Node.prototype.getRootNode),
      Hn = N(jn),
      $n = jn ? function (e) {
    return vn(e.dom.getRootNode());
  } : _n,
      Vn = function Vn(e) {
    return zn(e) ? e : function (e) {
      var t = e.dom.head;
      if (null == t) throw new Error("Head is not available yet");
      return vn(t);
    }(_n(e));
  },
      qn = function qn(e) {
    return vn(e.dom.host);
  },
      Wn = function Wn(e) {
    if (Hn() && C(e.target)) {
      var _t7 = vn(e.target);

      if (qt(_t7) && Kn(_t7) && e.composed && e.composedPath) {
        var _t8 = e.composedPath();

        if (_t8) return le(_t8);
      }
    }

    return I.from(e.target);
  },
      Kn = function Kn(e) {
    return C(e.dom.shadowRoot);
  },
      Gn = function Gn(e) {
    var t = Wt(e) ? e.dom.parentNode : e.dom;
    if (null == t || null === t.ownerDocument) return !1;
    var n = t.ownerDocument;
    return function (e) {
      var t = $n(e);
      return zn(t) ? I.some(t) : I.none();
    }(vn(t)).fold(function () {
      return n.body.contains(t);
    }, _(Gn, qn));
  };

  var Yn = function Yn(e, t, n, o, r) {
    return e(n, o) ? I.some(n) : w(r) && r(n) ? I.none() : t(n, o, r);
  };

  var Xn = function Xn(e, t, n) {
    var o = e.dom;
    var r = w(n) ? n : L;

    for (; o.parentNode;) {
      o = o.parentNode;

      var _e6 = vn(o);

      if (t(_e6)) return I.some(_e6);
      if (r(_e6)) break;
    }

    return I.none();
  },
      Qn = function Qn(e, t, n) {
    return Yn(function (e, t) {
      return t(e);
    }, Xn, e, t, n);
  },
      Jn = function Jn(e, t, n) {
    return Xn(e, function (e) {
      return wn(e, t);
    }, n);
  },
      Zn = function Zn(e, t) {
    return function (e, t) {
      var n = void 0 === t ? document : t.dom;
      return xn(n) ? I.none() : I.from(n.querySelector(e)).map(vn);
    }(t, e);
  },
      eo = function eo(e, t, n) {
    return Yn(function (e, t) {
      return wn(e, t);
    }, Jn, e, t, n);
  },
      to = function to(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    return Gn(e) ? e.dom.isContentEditable : (n = e, eo(n, "[contenteditable]")).fold(N(t), function (e) {
      return "true" === no(e);
    });
    var n;
  },
      no = function no(e) {
    return e.dom.contentEditable;
  },
      oo = function oo(e) {
    return void 0 !== e.style && w(e.style.getPropertyValue);
  },
      ro = function ro(e, t, n) {
    if (!m(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
    oo(e) && e.style.setProperty(t, n);
  },
      so = function so(e, t, n) {
    var o = e.dom;
    ro(o, t, n);
  },
      ao = function ao(e, t) {
    var n = e.dom;
    ge(t, function (e, t) {
      ro(n, t, e);
    });
  },
      io = function io(e, t) {
    var n = e.dom,
        o = window.getComputedStyle(n).getPropertyValue(t);
    return "" !== o || Gn(e) ? o : lo(n, t);
  },
      lo = function lo(e, t) {
    return oo(e) ? e.style.getPropertyValue(t) : "";
  },
      co = function co(e, t) {
    var n = e.dom,
        o = lo(n, t);
    return I.from(o).filter(function (e) {
      return e.length > 0;
    });
  },
      uo = function uo(e) {
    var t = {},
        n = e.dom;
    if (oo(n)) for (var _e7 = 0; _e7 < n.style.length; _e7++) {
      var _o21 = n.style.item(_e7);

      t[_o21] = n.style[_o21];
    }
    return t;
  },
      mo = function mo(e, t) {
    (function (e, t) {
      oo(e) && e.style.removeProperty(t);
    })(e.dom, t), Pt(en(e, "style").map(qe), "") && nn(e, "style");
  },
      fo = function fo(e, t) {
    Rn(e).each(function (n) {
      n.dom.insertBefore(t.dom, e.dom);
    });
  },
      go = function go(e, t) {
    Bn(e).fold(function () {
      Rn(e).each(function (e) {
        ho(e, t);
      });
    }, function (e) {
      fo(e, t);
    });
  },
      po = function po(e, t) {
    In(e).fold(function () {
      ho(e, t);
    }, function (n) {
      e.dom.insertBefore(t.dom, n.dom);
    });
  },
      ho = function ho(e, t) {
    e.dom.appendChild(t.dom);
  },
      bo = function bo(e, t) {
    fo(e, t), ho(t, e);
  },
      vo = function vo(e, t) {
    q(t, function (t) {
      ho(e, t);
    });
  },
      yo = function yo(e) {
    e.dom.textContent = "", q(Ln(e), function (e) {
      Co(e);
    });
  },
      Co = function Co(e) {
    var t = e.dom;
    null !== t.parentNode && t.parentNode.removeChild(t);
  },
      wo = function wo(e) {
    var t = Ln(e);
    var n, o;
    t.length > 0 && (n = e, q(o = t, function (e, t) {
      var r = 0 === t ? n : o[t - 1];
      go(r, e);
    })), Co(e);
  },
      xo = function xo(e) {
    return V(e, vn);
  },
      ko = function ko(e) {
    return e.dom.innerHTML;
  },
      Eo = function Eo(e, t) {
    var n = Sn(e).dom,
        o = vn(n.createDocumentFragment()),
        r = function (e, t) {
      var n = (t || document).createElement("div");
      return n.innerHTML = e, Ln(vn(n));
    }(t, n);

    vo(o, r), yo(e), ho(e, o);
  },
      So = function So(e, t, n, o) {
    return function (e, t, n, o, r) {
      var s = function (e, t) {
        return function (n) {
          e(n) && t(function (e) {
            var t = vn(Wn(e).getOr(e.target)),
                n = function n() {
              return e.stopPropagation();
            },
                o = function o() {
              return e.preventDefault();
            },
                r = S(o, n);

            return function (e, t, n, o, r, s, a) {
              return {
                target: e,
                x: t,
                y: n,
                stop: o,
                prevent: r,
                kill: s,
                raw: a
              };
            }(t, e.clientX, e.clientY, n, o, r, e);
          }(n));
        };
      }(n, o);

      return e.dom.addEventListener(t, s, false), {
        unbind: O(_o, e, t, s, false)
      };
    }(e, t, n, o);
  },
      _o = function _o(e, t, n, o) {
    e.dom.removeEventListener(t, n, o);
  },
      No = function No(e, t) {
    return {
      left: e,
      top: t,
      translate: function translate(n, o) {
        return No(e + n, t + o);
      }
    };
  },
      Ro = No,
      Ao = function Ao(e, t) {
    return void 0 !== e ? e : void 0 !== t ? t : 0;
  },
      Oo = function Oo(e) {
    var t = e.dom,
        n = t.ownerDocument.body;
    return n === t ? Ro(n.offsetLeft, n.offsetTop) : Gn(e) ? function (e) {
      var t = e.getBoundingClientRect();
      return Ro(t.left, t.top);
    }(t) : Ro(0, 0);
  },
      To = function To(e) {
    var t = void 0 !== e ? e.dom : document,
        n = t.body.scrollLeft || t.documentElement.scrollLeft,
        o = t.body.scrollTop || t.documentElement.scrollTop;
    return Ro(n, o);
  },
      Bo = function Bo(e, t) {
    xt().browser.isSafari() && w(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t);
  },
      Do = function Do(e, t, n, o) {
    return {
      x: e,
      y: t,
      width: n,
      height: o,
      right: e + n,
      bottom: t + o
    };
  },
      Po = function Po(e) {
    var t = void 0 === e ? window : e,
        n = t.document,
        o = To(vn(n));
    return function (e) {
      var t = void 0 === e ? window : e;
      return xt().browser.isFirefox() ? I.none() : I.from(t.visualViewport);
    }(t).fold(function () {
      var e = t.document.documentElement,
          n = e.clientWidth,
          r = e.clientHeight;
      return Do(o.left, o.top, n, r);
    }, function (e) {
      return Do(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height);
    });
  },
      Lo = function Lo(e, t) {
    var n = [];
    return q(Ln(e), function (e) {
      t(e) && (n = n.concat([e])), n = n.concat(Lo(e, t));
    }), n;
  },
      Mo = function Mo(e, t) {
    return function (e, t) {
      var n = void 0 === t ? document : t.dom;
      return xn(n) ? [] : V(n.querySelectorAll(e), vn);
    }(t, e);
  },
      Io = function Io(e, t, n) {
    return Jn(e, t, n).isSome();
  };

  var Fo =
  /*#__PURE__*/
  function () {
    function Fo(e, t) {
      _classCallCheck(this, Fo);

      this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this);
    }

    _createClass(Fo, [{
      key: "current",
      value: function current() {
        return this.node;
      }
    }, {
      key: "next",
      value: function next(e) {
        return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node;
      }
    }, {
      key: "prev",
      value: function prev(e) {
        return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node;
      }
    }, {
      key: "prev2",
      value: function prev2(e) {
        return this.node = this.findPreviousNode(this.node, e), this.node;
      }
    }, {
      key: "findSibling",
      value: function findSibling(e, t, n, o) {
        if (e) {
          if (!o && e[t]) return e[t];

          if (e !== this.rootNode) {
            var _t9 = e[n];
            if (_t9) return _t9;

            for (var _o22 = e.parentNode; _o22 && _o22 !== this.rootNode; _o22 = _o22.parentNode) {
              if (_t9 = _o22[n], _t9) return _t9;
            }
          }
        }
      }
    }, {
      key: "findPreviousNode",
      value: function findPreviousNode(e, t) {
        if (e) {
          var _n17 = e.previousSibling;
          if (this.rootNode && _n17 === this.rootNode) return;

          if (_n17) {
            if (!t) for (var _e8 = _n17.lastChild; _e8; _e8 = _e8.lastChild) {
              if (!_e8.lastChild) return _e8;
            }
            return _n17;
          }

          var _o23 = e.parentNode;
          if (_o23 && _o23 !== this.rootNode) return _o23;
        }
      }
    }]);

    return Fo;
  }();

  var Uo = function Uo(e) {
    return function (t) {
      return !!t && t.nodeType === e;
    };
  },
      zo = function zo(e) {
    return !!e && !Object.getPrototypeOf(e);
  },
      jo = Uo(1),
      Ho = function Ho(e) {
    var t = e.toLowerCase();
    return function (e) {
      return C(e) && e.nodeName.toLowerCase() === t;
    };
  },
      $o = function $o(e) {
    var t = e.map(function (e) {
      return e.toLowerCase();
    });
    return function (e) {
      if (e && e.nodeName) {
        var _n18 = e.nodeName.toLowerCase();

        return H(t, _n18);
      }

      return !1;
    };
  },
      Vo = function Vo(e, t) {
    var n = t.toLowerCase().split(" ");
    return function (t) {
      if (jo(t)) {
        var _o24 = t.ownerDocument.defaultView;
        if (_o24) for (var _r14 = 0; _r14 < n.length; _r14++) {
          var _s4 = _o24.getComputedStyle(t, null);

          if ((_s4 ? _s4.getPropertyValue(e) : null) === n[_r14]) return !0;
        }
      }

      return !1;
    };
  },
      qo = function qo(e) {
    return function (t) {
      return jo(t) && t.hasAttribute(e);
    };
  },
      Wo = function Wo(e) {
    return jo(e) && e.hasAttribute("data-mce-bogus");
  },
      Ko = function Ko(e) {
    return jo(e) && "TABLE" === e.tagName;
  },
      Go = function Go(e) {
    return function (t) {
      if (jo(t)) {
        if (t.contentEditable === e) return !0;
        if (t.getAttribute("data-mce-contenteditable") === e) return !0;
      }

      return !1;
    };
  },
      Yo = $o(["textarea", "input"]),
      Xo = Uo(3),
      Qo = Uo(4),
      Jo = Uo(7),
      Zo = Uo(8),
      er = Uo(9),
      tr = Uo(11),
      nr = Ho("br"),
      or = Ho("img"),
      rr = Go("true"),
      sr = Go("false"),
      ar = $o(["td", "th"]),
      ir = $o(["td", "th", "caption"]),
      lr = $o(["video", "audio", "object", "embed"]),
      dr = Ho("li"),
      cr = Ho("details"),
      ur = Ho("summary"),
      mr = "\uFEFF",
      fr = "\xa0",
      gr = function gr(e) {
    return e === mr;
  },
      pr = function (e, t) {
    var n = function n(t) {
      return e(t) ? I.from(t.dom.nodeValue) : I.none();
    };

    return {
      get: function get(t) {
        if (!e(t)) throw new Error("Can only get text value of a text node");
        return n(t).getOr("");
      },
      getOption: n,
      set: function set(t, n) {
        if (!e(t)) throw new Error("Can only set raw text value of a text node");
        t.dom.nodeValue = n;
      }
    };
  }(Wt),
      hr = function hr(e) {
    return pr.get(e);
  },
      br = function br(e) {
    return pr.getOption(e);
  },
      vr = ["pre"].concat(["h1", "h2", "h3", "h4", "h5", "h6"]),
      yr = function yr(e) {
    var t;
    return function (n) {
      return t = t || se(e, M), ke(t, jt(n));
    };
  },
      Cr = yr(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
      wr = function wr(e) {
    return qt(e) && !Cr(e);
  },
      xr = function xr(e) {
    return qt(e) && "br" === jt(e);
  },
      kr = yr(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
      Er = yr(["ul", "ol", "dl"]),
      Sr = yr(["li", "dd", "dt"]),
      _r = yr(["thead", "tbody", "tfoot"]),
      Nr = yr(["td", "th"]),
      Rr = yr(["pre", "script", "textarea", "style"]),
      Ar = yr(vr),
      Or = function Or(e) {
    return Ar(e) || wr(e);
  },
      Tr = function Tr() {
    var e = hn("br");
    return Qt(e, "data-mce-bogus", "1"), e;
  },
      Br = function Br(e) {
    yo(e), ho(e, Tr());
  },
      Dr = function Dr(e) {
    Fn(e).each(function (t) {
      Tn(t).each(function (n) {
        Cr(e) && xr(t) && Cr(n) && Co(t);
      });
    });
  },
      Pr = mr,
      Lr = gr,
      Mr = function Mr(e) {
    return e.replace(/\uFEFF/g, "");
  },
      Ir = jo,
      Fr = Xo,
      Ur = function Ur(e) {
    return Fr(e) && (e = e.parentNode), Ir(e) && e.hasAttribute("data-mce-caret");
  },
      zr = function zr(e) {
    return Fr(e) && Lr(e.data);
  },
      jr = function jr(e) {
    return Ur(e) || zr(e);
  },
      Hr = function Hr(e) {
    return e.firstChild !== e.lastChild || !nr(e.firstChild);
  },
      $r = function $r(e) {
    var t = e.container();
    return !!Xo(t) && (t.data.charAt(e.offset()) === Pr || e.isAtStart() && zr(t.previousSibling));
  },
      Vr = function Vr(e) {
    var t = e.container();
    return !!Xo(t) && (t.data.charAt(e.offset() - 1) === Pr || e.isAtEnd() && zr(t.nextSibling));
  },
      qr = function qr(e) {
    return Fr(e) && e.data[0] === Pr;
  },
      Wr = function Wr(e) {
    return Fr(e) && e.data[e.data.length - 1] === Pr;
  },
      Kr = function Kr(e) {
    return e && e.hasAttribute("data-mce-caret") ? (function (e) {
      var t;
      var n = e.getElementsByTagName("br"),
          o = n[n.length - 1];
      Wo(o) && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o));
    }(e), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("data-mce-style"), e.removeAttribute("_moz_abspos"), e) : null;
  },
      Gr = function Gr(e) {
    return Ur(e.startContainer);
  },
      Yr = rr,
      Xr = sr,
      Qr = nr,
      Jr = Xo,
      Zr = $o(["script", "style", "textarea"]),
      es = $o(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
      ts = $o(["table"]),
      ns = jr,
      os = function os(e) {
    return !ns(e) && (Jr(e) ? !Zr(e.parentNode) : es(e) || Qr(e) || ts(e) || rs(e));
  },
      rs = function rs(e) {
    return !function (e) {
      return jo(e) && "true" === e.getAttribute("unselectable");
    }(e) && Xr(e);
  },
      ss = function ss(e, t) {
    return os(e) && function (e, t) {
      for (var _n19 = e.parentNode; _n19 && _n19 !== t; _n19 = _n19.parentNode) {
        if (rs(_n19)) return !1;
        if (Yr(_n19)) return !0;
      }

      return !0;
    }(e, t);
  },
      as = /^[ \t\r\n]*$/,
      is = function is(e) {
    return as.test(e);
  },
      ls = function ls(e) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _t10 = _step.value;
        if (!gr(_t10)) return !1;
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

    return !0;
  },
      ds = function ds(e) {
    return "\n" === e || "\r" === e;
  },
      cs = function cs(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;

    var r = function (e, t) {
      return t <= 0 ? "" : new Array(t + 1).join(" ");
    }(0, t),
        s = e.replace(/\t/g, r),
        a = X(s, function (e, t) {
      return function (e) {
        return -1 !== " \f\t\v".indexOf(e);
      }(t) || t === fr ? e.pcIsSpace || "" === e.str && n || e.str.length === s.length - 1 && o || function (e, t) {
        return t < e.length && t >= 0 && ds(e[t]);
      }(s, e.str.length + 1) ? {
        pcIsSpace: !1,
        str: e.str + fr
      } : {
        pcIsSpace: !0,
        str: e.str + " "
      } : {
        pcIsSpace: ds(t),
        str: e.str + t
      };
    }, {
      pcIsSpace: !1,
      str: ""
    });

    return a.str;
  },
      us = function us(e, t) {
    return os(e) && !function (e, t) {
      return Xo(e) && is(e.data) && !function (e, t) {
        var n = vn(t),
            o = vn(e);
        return Io(o, "pre,code", O(kn, n));
      }(e, t);
    }(e, t) || function (e) {
      return jo(e) && "A" === e.nodeName && !e.hasAttribute("href") && (e.hasAttribute("name") || e.hasAttribute("id"));
    }(e) || ms(e);
  },
      ms = qo("data-mce-bookmark"),
      fs = qo("data-mce-bogus"),
      gs = ("data-mce-bogus", "all", function (e) {
    return jo(e) && "all" === e.getAttribute("data-mce-bogus");
  });

  var ps = function ps(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    return function (e, t) {
      var n = 0;
      if (us(e, e)) return !1;
      {
        var _o25 = e.firstChild;
        if (!_o25) return !0;

        var _r15 = new Fo(_o25, e);

        do {
          if (t) {
            if (gs(_o25)) {
              _o25 = _r15.next(!0);
              continue;
            }

            if (fs(_o25)) {
              _o25 = _r15.next();
              continue;
            }
          }

          if (nr(_o25)) n++, _o25 = _r15.next();else {
            if (us(_o25, e)) return !1;
            _o25 = _r15.next();
          }
        } while (_o25);

        return n <= 1;
      }
    }(e.dom, t);
  },
      hs = "data-mce-block",
      bs = function bs(e) {
    return function (e) {
      return G(me(e), function (e) {
        return !/[A-Z]/.test(e);
      });
    }(e).join(",");
  },
      vs = function vs(e, t) {
    return C(t.querySelector(e)) ? (t.setAttribute(hs, "true"), "inline-boundary" === t.getAttribute("data-mce-selected") && t.removeAttribute("data-mce-selected"), !0) : (t.removeAttribute(hs), !1);
  },
      ys = function ys(e, t) {
    var n = bs(e.getTransparentElements()),
        o = bs(e.getBlockElements());
    return G(t.querySelectorAll(n), function (e) {
      return vs(o, e);
    });
  },
      Cs = function Cs(e, t) {
    var n;
    var o = t ? "lastChild" : "firstChild";

    for (var _t11 = e[o]; _t11; _t11 = _t11[o]) {
      if (ps(vn(_t11))) return void (null === (n = _t11.parentNode) || void 0 === n || n.removeChild(_t11));
    }
  },
      ws = function ws(e, t, n) {
    var o = e.getBlockElements(),
        r = vn(t),
        s = function s(e) {
      return jt(e) in o;
    },
        a = function a(e) {
      return kn(e, r);
    };

    q(xo(n), function (t) {
      Xn(t, s, a).each(function (n) {
        var o = function (t, o) {
          return G(Ln(t), function (t) {
            return s(t) && !e.isValidChild(jt(n), jt(t));
          });
        }(t);

        if (o.length > 0) {
          var _t12 = An(n);

          q(o, function (e) {
            Xn(e, s, a).each(function (t) {
              (function (e, t) {
                var n = document.createRange(),
                    o = e.parentNode;

                if (o) {
                  n.setStartBefore(e), n.setEndBefore(t);

                  var _r16 = n.extractContents();

                  Cs(_r16, !0), n.setStartAfter(t), n.setEndAfter(e);

                  var _s5 = n.extractContents();

                  Cs(_s5, !1), ps(vn(_r16)) || o.insertBefore(_r16, e), ps(vn(t)) || o.insertBefore(t, e), ps(vn(_s5)) || o.insertBefore(_s5, e), o.removeChild(e);
                }
              })(t.dom, e.dom);
            });
          }), _t12.each(function (t) {
            return ys(e, t.dom);
          });
        }
      });
    });
  },
      xs = function xs(e, t) {
    var n = ys(e, t);
    ws(e, t, n), function (e, t, n) {
      q([].concat(_toConsumableArray(n), _toConsumableArray(Ns(e, t) ? [t] : [])), function (t) {
        return q(Mo(vn(t), t.nodeName.toLowerCase()), function (t) {
          Rs(e, t.dom) && wo(t);
        });
      });
    }(e, t, n);
  },
      ks = function ks(e, t) {
    if (_s(e, t)) {
      var _n20 = bs(e.getBlockElements());

      vs(_n20, t);
    }
  },
      Es = function Es(e) {
    return e.hasAttribute(hs);
  },
      Ss = function Ss(e, t) {
    return ke(e.getTransparentElements(), t);
  },
      _s = function _s(e, t) {
    return jo(t) && Ss(e, t.nodeName);
  },
      Ns = function Ns(e, t) {
    return _s(e, t) && Es(t);
  },
      Rs = function Rs(e, t) {
    return _s(e, t) && !Es(t);
  },
      As = function As(e, t) {
    return 1 === t.type && Ss(e, t.name) && m(t.attr(hs));
  },
      Os = xt().browser,
      Ts = function Ts(e) {
    return J(e, qt);
  },
      Bs = function Bs(e, t) {
    return e.children && H(e.children, t);
  },
      Ds = function Ds(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = 0;

    var o = {},
        r = vn(e),
        s = _n(r),
        a = function a(e) {
      return new Promise(function (a, i) {
        var l;

        var d = Dt._addCacheSuffix(e),
            c = function (e) {
          return xe(o, e).getOrThunk(function () {
            return {
              id: "mce-u" + n++,
              passed: [],
              failed: [],
              count: 0
            };
          });
        }(d);

        o[d] = c, c.count++;

        var u = function u(e, t) {
          q(e, P), c.status = t, c.passed = [], c.failed = [], l && (l.onload = null, l.onerror = null, l = null);
        },
            m = function m() {
          return u(c.passed, 2);
        },
            f = function f() {
          return u(c.failed, 3);
        };

        if (a && c.passed.push(a), i && c.failed.push(i), 1 === c.status) return;
        if (2 === c.status) return void m();
        if (3 === c.status) return void f();
        c.status = 1;
        var g = hn("link", s.dom);
        var p;
        Jt(g, {
          rel: "stylesheet",
          type: "text/css",
          id: c.id
        }), t.contentCssCors && Qt(g, "crossOrigin", "anonymous"), t.referrerPolicy && Qt(g, "referrerpolicy", t.referrerPolicy), l = g.dom, l.onload = m, l.onerror = f, p = g, ho(Vn(r), p), Qt(g, "href", d);
      });
    },
        i = function i(e) {
      var t = Dt._addCacheSuffix(e);

      xe(o, t).each(function (e) {
        0 == --e.count && (delete o[t], function (e) {
          var t = Vn(r);
          Zn(t, "#" + e).each(Co);
        }(e.id));
      });
    };

    return {
      load: a,
      loadAll: function loadAll(e) {
        return Promise.allSettled(V(e, function (e) {
          return a(e).then(N(e));
        })).then(function (e) {
          var t = K(e, function (e) {
            return "fulfilled" === e.status;
          });
          return t.fail.length > 0 ? Promise.reject(V(t.fail, function (e) {
            return e.reason;
          })) : V(t.pass, function (e) {
            return e.value;
          });
        });
      },
      unload: i,
      unloadAll: function unloadAll(e) {
        q(e, function (e) {
          i(e);
        });
      },
      _setReferrerPolicy: function _setReferrerPolicy(e) {
        t.referrerPolicy = e;
      },
      _setContentCssCors: function _setContentCssCors(e) {
        t.contentCssCors = e;
      }
    };
  },
      Ps = function () {
    var e = new WeakMap();
    return {
      forElement: function forElement(t, n) {
        var o = $n(t).dom;
        return I.from(e.get(o)).getOrThunk(function () {
          var t = Ds(o, n);
          return e.set(o, t), t;
        });
      }
    };
  }(),
      Ls = function Ls(e, t) {
    return C(e) && (us(e, t) || wr(vn(e)));
  },
      Ms = function Ms(e) {
    return function (e) {
      return "span" === e.nodeName.toLowerCase();
    }(e) && "bookmark" === e.getAttribute("data-mce-type");
  },
      Is = function Is(e, t, n) {
    var o;
    var r = n || t;
    if (jo(t) && Ms(t)) return t;
    var s = t.childNodes;

    for (var _t13 = s.length - 1; _t13 >= 0; _t13--) {
      Is(e, s[_t13], r);
    }

    if (jo(t)) {
      var _e9 = t.childNodes;
      1 === _e9.length && Ms(_e9[0]) && (null === (o = t.parentNode) || void 0 === o || o.insertBefore(_e9[0], t));
    }

    return function (e) {
      return tr(e) || er(e);
    }(t) || us(t, r) || function (e) {
      return !!jo(e) && e.childNodes.length > 0;
    }(t) || function (e, t) {
      return Xo(e) && e.data.length > 0 && function (e, t) {
        var n = new Fo(e, t).prev(!1),
            o = new Fo(e, t).next(!1),
            r = v(n) || Ls(n, t),
            s = v(o) || Ls(o, t);
        return r && s;
      }(e, t);
    }(t, r) || e.remove(t), t;
  },
      Fs = Dt.makeMap,
      Us = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      zs = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      js = /[<>&\"\']/g,
      Hs = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
      $s = {
    128: "\u20AC",
    130: "\u201A",
    131: "\u0192",
    132: "\u201E",
    133: "\u2026",
    134: "\u2020",
    135: "\u2021",
    136: "\u02C6",
    137: "\u2030",
    138: "\u0160",
    139: "\u2039",
    140: "\u0152",
    142: "\u017D",
    145: "\u2018",
    146: "\u2019",
    147: "\u201C",
    148: "\u201D",
    149: "\u2022",
    150: "\u2013",
    151: "\u2014",
    152: "\u02DC",
    153: "\u2122",
    154: "\u0161",
    155: "\u203A",
    156: "\u0153",
    158: "\u017E",
    159: "\u0178"
  },
      Vs = {
    '"': "&quot;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "`": "&#96;"
  },
      qs = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'"
  },
      Ws = function Ws(e, t) {
    var n = {};

    if (e) {
      var _o26 = e.split(",");

      t = t || 10;

      for (var _e10 = 0; _e10 < _o26.length; _e10 += 2) {
        var _r17 = String.fromCharCode(parseInt(_o26[_e10], t));

        if (!Vs[_r17]) {
          var _t14 = "&" + _o26[_e10 + 1] + ";";

          n[_r17] = _t14, n[_t14] = _r17;
        }
      }

      return n;
    }
  },
      Ks = Ws("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32),
      Gs = function Gs(e, t) {
    return e.replace(t ? Us : zs, function (e) {
      return Vs[e] || e;
    });
  },
      Ys = function Ys(e, t) {
    return e.replace(t ? Us : zs, function (e) {
      return e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : Vs[e] || "&#" + e.charCodeAt(0) + ";";
    });
  },
      Xs = function Xs(e, t, n) {
    var o = n || Ks;
    return e.replace(t ? Us : zs, function (e) {
      return Vs[e] || o[e] || e;
    });
  },
      Qs = {
    encodeRaw: Gs,
    encodeAllRaw: function encodeAllRaw(e) {
      return ("" + e).replace(js, function (e) {
        return Vs[e] || e;
      });
    },
    encodeNumeric: Ys,
    encodeNamed: Xs,
    getEncodeFunc: function getEncodeFunc(e, t) {
      var n = Ws(t) || Ks,
          o = Fs(e.replace(/\+/g, ","));
      return o.named && o.numeric ? function (e, t) {
        return e.replace(t ? Us : zs, function (e) {
          return void 0 !== Vs[e] ? Vs[e] : void 0 !== n[e] ? n[e] : e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";";
        });
      } : o.named ? t ? function (e, t) {
        return Xs(e, t, n);
      } : Xs : o.numeric ? Ys : Gs;
    },
    decode: function decode(e) {
      return e.replace(Hs, function (e, t) {
        return t ? (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) > 65535 ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : $s[t] || String.fromCharCode(t) : qs[e] || Ks[e] || function (e) {
          var t = hn("div").dom;
          return t.innerHTML = e, t.textContent || t.innerText || e;
        }(e);
      });
    }
  },
      Js = {},
      Zs = {},
      ea = {},
      ta = Dt.makeMap,
      na = Dt.each,
      oa = Dt.extend,
      ra = Dt.explode,
      sa = Dt.inArray,
      aa = function aa(e, t) {
    return (e = Dt.trim(e)) ? e.split(t || " ") : [];
  },
      ia = function ia(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = ta(e, " ", ta(e.toUpperCase(), " "));
    return oa(n, t);
  },
      la = function la(e) {
    return ia("td th li dt dd figcaption caption details summary", e.getTextBlockElements());
  },
      da = function da(e, t) {
    if (e) {
      var _n21 = {};
      return m(e) && (e = {
        "*": e
      }), na(e, function (e, o) {
        _n21[o] = _n21[o.toUpperCase()] = "map" === t ? ta(e, /[, ]/) : ra(e, /[, ]/);
      }), _n21;
    }
  },
      ca = function ca() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var t;
    var n = {},
        o = {};
    var r = [];

    var s = {},
        a = {},
        i = function i(t, n, o) {
      var r = e[t];
      if (r) return ta(r, /[, ]/, ta(r.toUpperCase(), /[, ]/));
      {
        var _e11 = Zs[t];
        return _e11 || (_e11 = ia(n, o), Zs[t] = _e11), _e11;
      }
    },
        l = null !== (t = e.schema) && void 0 !== t ? t : "html5",
        d = function (e) {
      var t = {};
      var n, o, r, s;

      var a = function a(e) {
        var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var s = aa(r),
            a = aa(e);
        var i = a.length;

        for (; i--;) {
          var _e12 = aa([n, o].join(" "));

          t[a[i]] = {
            attributes: se(_e12, function () {
              return {};
            }),
            attributesOrder: _e12,
            children: se(s, N(ea))
          };
        }
      },
          i = function i(e, n) {
        var o = aa(e),
            r = aa(n);
        var s = o.length;

        for (; s--;) {
          var _e13 = t[o[s]];

          for (var _t15 = 0, _n22 = r.length; _t15 < _n22; _t15++) {
            _e13.attributes[r[_t15]] = {}, _e13.attributesOrder.push(r[_t15]);
          }
        }
      };

      if (Js[e]) return Js[e];

      if (n = "id accesskey class dir lang style tabindex title role", o = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", r = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (n += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", o += " article aside details dialog figure main header footer hgroup section nav a ins del canvas map", r += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e) {
        n += " xml:lang";
        var _e14 = "acronym applet basefont big font strike tt";
        r = [r, _e14].join(" "), na(aa(_e14), function (e) {
          a(e, "", r);
        });
        var _t16 = "center dir isindex noframes";
        o = [o, _t16].join(" "), s = [o, r].join(" "), na(aa(_t16), function (e) {
          a(e, "", s);
        });
      }

      return s = s || [o, r].join(" "), a("html", "manifest", "head body"), a("head", "", "base command link meta noscript script style title"), a("title hr noscript br"), a("base", "href target"), a("link", "href rel media hreflang type sizes hreflang"), a("meta", "name http-equiv content charset"), a("style", "media type scoped"), a("script", "src async defer type charset"), a("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", s), a("dd div", "", s), a("address dt caption", "", "html4" === e ? r : s), a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", r), a("blockquote", "cite", s), a("ol", "reversed start type", "li"), a("ul", "", "li"), a("li", "value", s), a("dl", "", "dt dd"), a("a", "href target rel media hreflang type", "html4" === e ? r : s), a("q", "cite", r), a("ins del", "cite datetime", s), a("img", "src sizes srcset alt usemap ismap width height"), a("iframe", "src name width height", s), a("embed", "src type width height"), a("object", "data type typemustmatch name usemap form width height", [s, "param"].join(" ")), a("param", "name value"), a("map", "name", [s, "area"].join(" ")), a("area", "alt coords shape href target rel media hreflang type"), a("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), a("colgroup", "span", "col"), a("col", "span"), a("tbody thead tfoot", "", "tr"), a("tr", "", "td th"), a("td", "colspan rowspan headers", s), a("th", "colspan rowspan headers scope abbr", s), a("form", "accept-charset action autocomplete enctype method name novalidate target", s), a("fieldset", "disabled form name", [s, "legend"].join(" ")), a("label", "form for", r), a("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), a("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? s : r), a("select", "disabled form multiple name required size", "option optgroup"), a("optgroup", "disabled label", "option"), a("option", "disabled label selected value"), a("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), a("menu", "type label", [s, "li"].join(" ")), a("noscript", "", s), "html4" !== e && (a("wbr"), a("ruby", "", [r, "rt rp"].join(" ")), a("figcaption", "", s), a("mark rt rp summary bdi", "", r), a("canvas", "width height", s), a("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [s, "track source"].join(" ")), a("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [s, "track source"].join(" ")), a("picture", "", "img source"), a("source", "src srcset type media sizes"), a("track", "kind src srclang label default"), a("datalist", "", [r, "option"].join(" ")), a("article section nav aside main header footer", "", s), a("hgroup", "", "h1 h2 h3 h4 h5 h6"), a("figure", "", [s, "figcaption"].join(" ")), a("time", "datetime", r), a("dialog", "open", s), a("command", "type label icon disabled checked radiogroup command"), a("output", "for form name", r), a("progress", "value max", r), a("meter", "value min max low high optimum", r), a("details", "open", [s, "summary"].join(" ")), a("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (i("script", "language xml:space"), i("style", "xml:space"), i("object", "declare classid code codebase codetype archive standby align border hspace vspace"), i("embed", "align name hspace vspace"), i("param", "valuetype type"), i("a", "charset name rev shape coords"), i("br", "clear"), i("applet", "codebase archive code object alt name width height align hspace vspace"), i("img", "name longdesc align border hspace vspace"), i("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), i("font basefont", "size color face"), i("input", "usemap align"), i("select"), i("textarea"), i("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), i("ul", "type compact"), i("li", "type"), i("ol dl menu dir", "compact"), i("pre", "width xml:space"), i("hr", "align noshade size width"), i("isindex", "prompt"), i("table", "summary width frame rules cellspacing cellpadding align bgcolor"), i("col", "width align char charoff valign"), i("colgroup", "width align char charoff valign"), i("thead", "align char charoff valign"), i("tr", "align char charoff valign bgcolor"), i("th", "axis align char charoff valign nowrap bgcolor width height"), i("form", "accept"), i("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), i("tfoot", "align char charoff valign"), i("tbody", "align char charoff valign"), i("area", "nohref"), i("body", "background bgcolor text link vlink alink")), "html4" !== e && (i("input button select textarea", "autofocus"), i("input textarea", "placeholder"), i("a", "download"), i("link script img", "crossorigin"), i("img", "loading"), i("iframe", "sandbox seamless allow allowfullscreen loading")), "html4" !== e && q([t.video, t.audio], function (e) {
        delete e.children.audio, delete e.children.video;
      }), na(aa("a form meter progress dfn"), function (e) {
        t[e] && delete t[e].children[e];
      }), delete t.caption.children.table, delete t.script, Js[e] = t, t;
    }(l);

    !1 === e.verify_html && (e.valid_elements = "*[*]");
    var c = da(e.valid_styles),
        u = da(e.invalid_styles, "map"),
        m = da(e.valid_classes, "map"),
        f = i("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
        g = i("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
        p = i("void_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
        h = i("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen"),
        b = "td th iframe video audio object script code",
        v = i("non_empty_elements", b + " pre", p),
        y = i("move_caret_before_on_enter_elements", b + " table", p),
        C = i("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
        w = i("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", C),
        x = i("text_inline_elements", "span strong b em i font s strike u var cite dfn code mark q sup sub samp"),
        k = i("transparent_elements", "a ins del canvas map");
    na("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "), function (e) {
      a[e] = new RegExp("</" + e + "[^>]*>", "gi");
    });

    var E = function E(e) {
      return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
    },
        S = function S(e) {
      var t = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
          o = /^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/,
          s = /[*?+]/;

      if (e) {
        var _a2 = aa(e, ",");

        var _i2, _l2;

        n["@"] && (_i2 = n["@"].attributes, _l2 = n["@"].attributesOrder);

        for (var _e15 = 0, _d2 = _a2.length; _e15 < _d2; _e15++) {
          var _d3 = t.exec(_a2[_e15]);

          if (_d3) {
            (function () {
              var e = _d3[1],
                  t = _d3[2],
                  a = _d3[3],
                  c = _d3[5],
                  u = {},
                  m = [],
                  f = {
                attributes: u,
                attributesOrder: m
              };

              if ("#" === e && (f.paddEmpty = !0), "-" === e && (f.removeEmpty = !0), "!" === _d3[4] && (f.removeEmptyAttrs = !0), _i2 && (ge(_i2, function (e, t) {
                u[t] = e;
              }), _l2 && m.push.apply(m, _toConsumableArray(_l2))), c) {
                var _e16 = aa(c, "|");

                for (var _t17 = 0, _n23 = _e16.length; _t17 < _n23; _t17++) {
                  if (_d3 = o.exec(_e16[_t17]), _d3) {
                    var _e17 = {},
                        _t18 = _d3[1],
                        _n24 = _d3[2].replace(/[\\:]:/g, ":"),
                        _o27 = _d3[3],
                        _r18 = _d3[4];

                    if ("!" === _t18 && (f.attributesRequired = f.attributesRequired || [], f.attributesRequired.push(_n24), _e17.required = !0), "-" === _t18) {
                      delete u[_n24], m.splice(sa(m, _n24), 1);
                      continue;
                    }

                    if (_o27 && ("=" === _o27 && (f.attributesDefault = f.attributesDefault || [], f.attributesDefault.push({
                      name: _n24,
                      value: _r18
                    }), _e17.defaultValue = _r18), "~" === _o27 && (f.attributesForced = f.attributesForced || [], f.attributesForced.push({
                      name: _n24,
                      value: _r18
                    }), _e17.forcedValue = _r18), "<" === _o27 && (_e17.validValues = ta(_r18, "?"))), s.test(_n24)) {
                      var _t19 = _e17;
                      f.attributePatterns = f.attributePatterns || [], _t19.pattern = E(_n24), f.attributePatterns.push(_t19);
                    } else u[_n24] || m.push(_n24), u[_n24] = _e17;
                  }
                }
              }

              if (_i2 || "@" !== t || (_i2 = u, _l2 = m), a && (f.outputName = t, n[a] = f), s.test(t)) {
                var _e18 = f;
                _e18.pattern = E(t), r.push(_e18);
              } else n[t] = f;
            })();
          }
        }
      }
    },
        _ = function _(e) {
      r = [], q(me(n), function (e) {
        delete n[e];
      }), S(e), na(d, function (e, t) {
        o[t] = e.children;
      });
    },
        R = function R(e) {
      var t = /^(~)?(.+)$/;
      e && (delete Zs.text_block_elements, delete Zs.block_elements, na(aa(e, ","), function (e) {
        var r = t.exec(e);

        if (r) {
          var _e19 = "~" === r[1],
              _t20 = _e19 ? "span" : "div",
              _a3 = r[2];

          if (o[_a3] = o[_t20], s[_a3] = _t20, v[_a3.toUpperCase()] = {}, v[_a3] = {}, _e19 || (w[_a3.toUpperCase()] = {}, w[_a3] = {}), !n[_a3]) {
            var _e20 = n[_t20];
            _e20 = oa({}, _e20), delete _e20.removeEmptyAttrs, delete _e20.removeEmpty, n[_a3] = _e20;
          }

          na(o, function (e, n) {
            e[_t20] && (o[n] = e = oa({}, o[n]), e[_a3] = e[_t20]);
          });
        }
      }));
    },
        A = function A(e) {
      var t = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
      delete Js[l], e && na(aa(e, ","), function (e) {
        var n = t.exec(e);

        if (n) {
          var _e21 = n[1];

          var _t21;

          _t21 = _e21 ? o[n[2]] : o[n[2]] = {
            "#comment": {}
          }, _t21 = o[n[2]], na(aa(n[3], "|"), function (n) {
            "-" === _e21 ? delete _t21[n] : _t21[n] = {};
          });
        }
      });
    },
        O = function O(e) {
      var t = n[e];
      if (t) return t;
      var o = r.length;

      for (; o--;) {
        var _t22 = r[o];
        if (_t22.pattern.test(e)) return _t22;
      }
    };

    e.valid_elements ? _(e.valid_elements) : (na(d, function (e, t) {
      n[t] = {
        attributes: e.attributes,
        attributesOrder: e.attributesOrder
      }, o[t] = e.children;
    }), na(aa("strong/b em/i"), function (e) {
      var t = aa(e, "/");
      n[t[1]].outputName = t[0];
    }), na(x, function (t, o) {
      n[o] && (e.padd_empty_block_inline_children && (n[o].paddInEmptyBlock = !0), n[o].removeEmpty = !0);
    }), na(aa("ol ul blockquote a table tbody"), function (e) {
      n[e] && (n[e].removeEmpty = !0);
    }), na(aa("p h1 h2 h3 h4 h5 h6 th td pre div address caption li summary"), function (e) {
      n[e] && (n[e].paddEmpty = !0);
    }), na(aa("span"), function (e) {
      n[e].removeEmptyAttrs = !0;
    })), R(e.custom_elements), A(e.valid_children), S(e.extended_valid_elements), A("+ol[ul|ol],+ul[ul|ol]"), na({
      dd: "dl",
      dt: "dl",
      li: "ul ol",
      td: "tr",
      th: "tr",
      tr: "tbody thead tfoot",
      tbody: "table",
      thead: "table",
      tfoot: "table",
      legend: "fieldset",
      area: "map",
      param: "video audio object"
    }, function (e, t) {
      n[t] && (n[t].parentsRequired = aa(e));
    }), e.invalid_elements && na(ra(e.invalid_elements), function (e) {
      n[e] && delete n[e];
    }), O("span") || S("span[!data-mce-type|*]");
    var T = N(c),
        B = N(u),
        D = N(m),
        P = N(h),
        L = N(w),
        M = N(C),
        I = N(x),
        F = N(Object.seal(p)),
        U = N(g),
        z = N(v),
        j = N(y),
        H = N(f),
        $ = N(k),
        V = N(Object.seal(a)),
        W = N(s);
    return {
      type: l,
      children: o,
      elements: n,
      getValidStyles: T,
      getValidClasses: D,
      getBlockElements: L,
      getInvalidStyles: B,
      getVoidElements: F,
      getTextBlockElements: M,
      getTextInlineElements: I,
      getBoolAttrs: P,
      getElementRule: O,
      getSelfClosingElements: U,
      getNonEmptyElements: z,
      getMoveCaretBeforeOnEnterElements: j,
      getWhitespaceElements: H,
      getTransparentElements: $,
      getSpecialElements: V,
      isValidChild: function isValidChild(e, t) {
        var n = o[e.toLowerCase()];
        return !(!n || !n[t.toLowerCase()]);
      },
      isValid: function isValid(e, t) {
        var n = O(e);

        if (n) {
          if (!t) return !0;
          {
            if (n.attributes[t]) return !0;
            var _e22 = n.attributePatterns;

            if (_e22) {
              var _n25 = _e22.length;

              for (; _n25--;) {
                if (_e22[_n25].pattern.test(t)) return !0;
              }
            }
          }
        }

        return !1;
      },
      getCustomElements: W,
      addValidElements: S,
      setValidElements: _,
      addCustomElements: R,
      addValidChildren: A
    };
  },
      ua = function ua() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var t = arguments.length > 1 ? arguments[1] : undefined;
    var n = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
        o = /\s*([^:]+):\s*([^;]+);?/g,
        r = /\s+$/,
        s = {};
    var a, i;
    var l = mr;
    t && (a = t.getValidStyles(), i = t.getInvalidStyles());
    var d = "\\\" \\' \\; \\: ; : \uFEFF".split(" ");

    for (var _e23 = 0; _e23 < d.length; _e23++) {
      s[d[_e23]] = l + _e23, s[l + _e23] = d[_e23];
    }

    var c = {
      parse: function parse(t) {
        var a = {};
        var i = !1;

        var d = e.url_converter,
            u = e.url_converter_scope || c,
            m = function m(e, t, n) {
          var o = a[e + "-top" + t];
          if (!o) return;
          var r = a[e + "-right" + t];
          if (!r) return;
          var s = a[e + "-bottom" + t];
          if (!s) return;
          var i = a[e + "-left" + t];
          if (!i) return;
          var l = [o, r, s, i];
          var d = l.length - 1;

          for (; d-- && l[d] === l[d + 1];) {
            ;
          }

          d > -1 && n || (a[e + t] = -1 === d ? l[0] : l.join(" "), delete a[e + "-top" + t], delete a[e + "-right" + t], delete a[e + "-bottom" + t], delete a[e + "-left" + t]);
        },
            f = function f(e) {
          var t = a[e];
          if (!t) return;
          var n = t.split(" ");
          var o = n.length;

          for (; o--;) {
            if (n[o] !== n[0]) return !1;
          }

          return a[e] = n[0], !0;
        },
            g = function g(e) {
          return i = !0, s[e];
        },
            p = function p(e, t) {
          return i && (e = e.replace(/\uFEFF[0-9]/g, function (e) {
            return s[e];
          })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e;
        },
            h = function h(e) {
          return String.fromCharCode(parseInt(e.slice(1), 16));
        },
            b = function b(e) {
          return e.replace(/\\[0-9a-f]+/gi, h);
        },
            v = function v(t, n, o, r, s, a) {
          if (s = s || a) return "'" + (s = p(s)).replace(/\'/g, "\\'") + "'";

          if (n = p(n || o || r || ""), !e.allow_script_urls) {
            var _t23 = n.replace(/[\s\r\n]+/g, "");

            if (/(java|vb)script:/i.test(_t23)) return "";
            if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(_t23)) return "";
          }

          return d && (n = d.call(u, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')";
        };

        if (t) {
          var _s6;

          for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, g).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
            return e.replace(/[;:]/g, g);
          }); _s6 = o.exec(t);) {
            o.lastIndex = _s6.index + _s6[0].length;

            var _t24 = _s6[1].replace(r, "").toLowerCase(),
                _d4 = _s6[2].replace(r, "");

            if (_t24 && _d4) {
              if (_t24 = b(_t24), _d4 = b(_d4), -1 !== _t24.indexOf(l) || -1 !== _t24.indexOf('"')) continue;
              if (!e.allow_script_urls && ("behavior" === _t24 || /expression\s*\(|\/\*|\*\//.test(_d4))) continue;
              "font-weight" === _t24 && "700" === _d4 ? _d4 = "bold" : "color" !== _t24 && "background-color" !== _t24 || (_d4 = _d4.toLowerCase()), _d4 = _d4.replace(n, v), a[_t24] = i ? p(_d4, !0) : _d4;
            }
          }

          m("border", "", !0), m("border", "-width"), m("border", "-color"), m("border", "-style"), m("padding", ""), m("margin", ""), "border", C = "border-style", w = "border-color", f(y = "border-width") && f(C) && f(w) && (a.border = a[y] + " " + a[C] + " " + a[w], delete a[y], delete a[C], delete a[w]), "medium none" === a.border && delete a.border, "none" === a["border-image"] && delete a["border-image"];
        }

        var y, C, w;
        return a;
      },
      serialize: function serialize(e, t) {
        var n = "";

        var o = function o(t, _o30) {
          var r = _o30[t];
          if (r) for (var _t25 = 0, _o28 = r.length; _t25 < _o28; _t25++) {
            var _o29 = r[_t25],
                _s7 = e[_o29];
            _s7 && (n += (n.length > 0 ? " " : "") + _o29 + ": " + _s7 + ";");
          }
        };

        return t && a ? (o("*", a), o(t, a)) : ge(e, function (e, o) {
          e && function (e, t) {
            if (!i || !t) return !0;
            var n = i["*"];
            return !(n && n[e] || (n = i[t], n && n[e]));
          }(o, t) && (n += (n.length > 0 ? " " : "") + o + ": " + e + ";");
        }), n;
      }
    };
    return c;
  },
      ma = {
    keyLocation: !0,
    layerX: !0,
    layerY: !0,
    returnValue: !0,
    webkitMovementX: !0,
    webkitMovementY: !0,
    keyIdentifier: !0,
    mozPressure: !0
  },
      fa = function fa(e, t) {
    var n = null != t ? t : {};

    for (var _t26 in e) {
      ke(ma, _t26) || (n[_t26] = e[_t26]);
    }

    return C(e.composedPath) && (n.composedPath = function () {
      return e.composedPath();
    }), n;
  },
      ga = function ga(e, t, n, o) {
    var r;
    var s = fa(t, o);
    return s.type = e, y(s.target) && (s.target = null !== (r = s.srcElement) && void 0 !== r ? r : n), function (e) {
      return y(e.preventDefault) || function (e) {
        return e instanceof Event || w(e.initEvent);
      }(e);
    }(t) && (s.preventDefault = function () {
      s.defaultPrevented = !0, s.isDefaultPrevented = M, w(t.preventDefault) && t.preventDefault();
    }, s.stopPropagation = function () {
      s.cancelBubble = !0, s.isPropagationStopped = M, w(t.stopPropagation) && t.stopPropagation();
    }, s.stopImmediatePropagation = function () {
      s.isImmediatePropagationStopped = M, s.stopPropagation();
    }, function (e) {
      return e.isDefaultPrevented === M || e.isDefaultPrevented === L;
    }(s) || (s.isDefaultPrevented = !0 === s.defaultPrevented ? M : L, s.isPropagationStopped = !0 === s.cancelBubble ? M : L, s.isImmediatePropagationStopped = L)), s;
  },
      pa = /^(?:mouse|contextmenu)|click/,
      ha = function ha(e, t, n, o) {
    e.addEventListener(t, n, o || !1);
  },
      ba = function ba(e, t, n, o) {
    e.removeEventListener(t, n, o || !1);
  },
      va = function va(e, t) {
    var n = ga(e.type, e, document, t);

    if (function (e) {
      return C(e) && pa.test(e.type);
    }(e) && v(e.pageX) && !v(e.clientX)) {
      var _t27 = n.target.ownerDocument || document,
          _o31 = _t27.documentElement,
          _r19 = _t27.body,
          _s8 = n;

      _s8.pageX = e.clientX + (_o31 && _o31.scrollLeft || _r19 && _r19.scrollLeft || 0) - (_o31 && _o31.clientLeft || _r19 && _r19.clientLeft || 0), _s8.pageY = e.clientY + (_o31 && _o31.scrollTop || _r19 && _r19.scrollTop || 0) - (_o31 && _o31.clientTop || _r19 && _r19.clientTop || 0);
    }

    return n;
  },
      ya = function ya(e, t, n) {
    var o = e.document,
        r = {
      type: "ready"
    };
    if (n.domLoaded) return void t(r);

    var s = function s() {
      ba(e, "DOMContentLoaded", s), ba(e, "load", s), n.domLoaded || (n.domLoaded = !0, t(r)), e = null;
    };

    "complete" === o.readyState || "interactive" === o.readyState && o.body ? s() : ha(e, "DOMContentLoaded", s), n.domLoaded || ha(e, "load", s);
  };

  var Ca =
  /*#__PURE__*/
  function () {
    function Ca() {
      _classCallCheck(this, Ca);

      this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date()).toString(32), this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1;
    }

    _createClass(Ca, [{
      key: "bind",
      value: function bind(e, t, n, o) {
        var r = this;
        var s;

        var a = window,
            i = function i(e) {
          r.executeHandlers(va(e || a.event), l);
        };

        if (!e || Xo(e) || Zo(e)) return n;
        var l;
        e[r.expando] ? l = e[r.expando] : (l = r.count++, e[r.expando] = l, r.events[l] = {}), o = o || e;
        var d = t.split(" ");
        var c = d.length;

        for (; c--;) {
          var _t28 = d[c],
              _u2 = i,
              _m2 = !1,
              _f2 = !1;

          "DOMContentLoaded" === _t28 && (_t28 = "ready"), r.domLoaded && "ready" === _t28 && "complete" === e.readyState ? n.call(o, va({
            type: _t28
          })) : (r.hasFocusIn || "focusin" !== _t28 && "focusout" !== _t28 || (_m2 = !0, _f2 = "focusin" === _t28 ? "focus" : "blur", _u2 = function _u2(e) {
            var t = va(e || a.event);
            t.type = "focus" === t.type ? "focusin" : "focusout", r.executeHandlers(t, l);
          }), s = r.events[l][_t28], s ? "ready" === _t28 && r.domLoaded ? n(va({
            type: _t28
          })) : s.push({
            func: n,
            scope: o
          }) : (r.events[l][_t28] = s = [{
            func: n,
            scope: o
          }], s.fakeName = _f2, s.capture = _m2, s.nativeHandler = _u2, "ready" === _t28 ? ya(e, _u2, r) : ha(e, _f2 || _t28, _u2, _m2)));
        }

        return e = s = null, n;
      }
    }, {
      key: "unbind",
      value: function unbind(e, t, n) {
        if (!e || Xo(e) || Zo(e)) return this;
        var o = e[this.expando];

        if (o) {
          var _r20 = this.events[o];

          if (t) {
            var _o32 = t.split(" ");

            var _s9 = _o32.length;

            for (; _s9--;) {
              var _t29 = _o32[_s9],
                  _a4 = _r20[_t29];

              if (_a4) {
                if (n) {
                  var _e24 = _a4.length;

                  for (; _e24--;) {
                    if (_a4[_e24].func === n) {
                      var _n26 = _a4.nativeHandler,
                          _o33 = _a4.fakeName,
                          _s10 = _a4.capture,
                          _i3 = _a4.slice(0, _e24).concat(_a4.slice(_e24 + 1));

                      _i3.nativeHandler = _n26, _i3.fakeName = _o33, _i3.capture = _s10, _r20[_t29] = _i3;
                    }
                  }
                }

                n && 0 !== _a4.length || (delete _r20[_t29], ba(e, _a4.fakeName || _t29, _a4.nativeHandler, _a4.capture));
              }
            }
          } else ge(_r20, function (t, n) {
            ba(e, t.fakeName || n, t.nativeHandler, t.capture);
          }), _r20 = {};

          for (var _e25 in _r20) {
            if (ke(_r20, _e25)) return this;
          }

          delete this.events[o];

          try {
            delete e[this.expando];
          } catch (t) {
            e[this.expando] = null;
          }
        }

        return this;
      }
    }, {
      key: "fire",
      value: function fire(e, t, n) {
        return this.dispatch(e, t, n);
      }
    }, {
      key: "dispatch",
      value: function dispatch(e, t, n) {
        if (!e || Xo(e) || Zo(e)) return this;
        var o = va({
          type: t,
          target: e
        }, n);

        do {
          var _t30 = e[this.expando];
          _t30 && this.executeHandlers(o, _t30), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow;
        } while (e && !o.isPropagationStopped());

        return this;
      }
    }, {
      key: "clean",
      value: function clean(e) {
        if (!e || Xo(e) || Zo(e)) return this;

        if (e[this.expando] && this.unbind(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName) {
          this.unbind(e);

          var _t31 = e.getElementsByTagName("*");

          var _n27 = _t31.length;

          for (; _n27--;) {
            (e = _t31[_n27])[this.expando] && this.unbind(e);
          }
        }

        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.events = {};
      }
    }, {
      key: "cancel",
      value: function cancel(e) {
        return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
      }
    }, {
      key: "executeHandlers",
      value: function executeHandlers(e, t) {
        var n = this.events[t],
            o = n && n[e.type];
        if (o) for (var _t32 = 0, _n28 = o.length; _t32 < _n28; _t32++) {
          var _n29 = o[_t32];
          if (_n29 && !1 === _n29.func.call(_n29.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return;
        }
      }
    }]);

    return Ca;
  }();

  Ca.Event = new Ca();

  var wa = Dt.each,
      xa = Dt.grep,
      ka = "data-mce-style",
      Ea = Dt.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom", " "),
      Sa = function Sa(e, t, n) {
    y(n) || "" === n ? nn(e, t) : Qt(e, t, n);
  },
      _a = function _a(e) {
    return e.replace(/[A-Z]/g, function (e) {
      return "-" + e.toLowerCase();
    });
  },
      Na = function Na(e, t) {
    var n = 0;
    if (e) for (var _o34 = e.nodeType, _r21 = e.previousSibling; _r21; _r21 = _r21.previousSibling) {
      var _e26 = _r21.nodeType;
      (!t || !Xo(_r21) || _e26 !== _o34 && _r21.data.length) && (n++, _o34 = _e26);
    }
    return n;
  },
      Ra = function Ra(e, t) {
    var n = Zt(t, "style"),
        o = e.serialize(e.parse(n), jt(t));
    Sa(t, ka, o);
  },
      Aa = function Aa(e, t, n) {
    var o = _a(t);

    y(n) || "" === n ? mo(e, o) : so(e, o, function (e, t) {
      return x(e) ? ke(Ea, t) ? e + "" : e + "px" : e;
    }(n, o));
  },
      Oa = function Oa(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = {},
        o = window,
        r = {};
    var s = 0;

    var a = Ps.forElement(vn(e), {
      contentCssCors: t.contentCssCors,
      referrerPolicy: t.referrerPolicy
    }),
        i = [],
        l = t.schema ? t.schema : ca({}),
        d = ua({
      url_converter: t.url_converter,
      url_converter_scope: t.url_converter_scope
    }, t.schema),
        c = t.ownEvents ? new Ca() : Ca.Event,
        u = l.getBlockElements(),
        f = function f(t) {
      return t && e && m(t) ? e.getElementById(t) : t;
    },
        g = function g(e) {
      var t = f(e);
      return C(t) ? vn(t) : null;
    },
        h = function h(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var o;
      var r = g(e);

      if (C(r) && qt(r)) {
        var _e27 = Y[t];
        o = _e27 && _e27.get ? _e27.get(r.dom, t) : Zt(r, t);
      }

      return C(o) ? o : n;
    },
        b = function b(e) {
      var t = f(e);
      return y(t) ? [] : t.attributes;
    },
        v = function v(e, n, o) {
      T(e, function (e) {
        if (jo(e)) {
          var _r22 = vn(e),
              _s11 = "" === o ? null : o,
              _a5 = Zt(_r22, n),
              _i4 = Y[n];

          _i4 && _i4.set ? _i4.set(_r22.dom, _s11, n) : Sa(_r22, n, _s11), _a5 !== _s11 && t.onSetAttrib && t.onSetAttrib({
            attrElm: _r22.dom,
            attrName: n,
            attrValue: _s11
          });
        }
      });
    },
        x = function x() {
      return t.root_element || e.body;
    },
        k = function k(t, n) {
      return function (e, t, n) {
        var o = 0,
            r = 0;
        var s = e.ownerDocument;

        if (n = n || e, t) {
          if (n === e && t.getBoundingClientRect && "static" === io(vn(e), "position")) {
            var _n30 = t.getBoundingClientRect();

            return o = _n30.left + (s.documentElement.scrollLeft || e.scrollLeft) - s.documentElement.clientLeft, r = _n30.top + (s.documentElement.scrollTop || e.scrollTop) - s.documentElement.clientTop, {
              x: o,
              y: r
            };
          }

          var _a6 = t;

          for (; _a6 && _a6 !== n && _a6.nodeType && !Bs(_a6, n);) {
            var _e28 = _a6;
            o += _e28.offsetLeft || 0, r += _e28.offsetTop || 0, _a6 = _e28.offsetParent;
          }

          for (_a6 = t.parentNode; _a6 && _a6 !== n && _a6.nodeType && !Bs(_a6, n);) {
            o -= _a6.scrollLeft || 0, r -= _a6.scrollTop || 0, _a6 = _a6.parentNode;
          }

          r += function (e) {
            return Os.isFirefox() && "table" === jt(e) ? Ts(Ln(e)).filter(function (e) {
              return "caption" === jt(e);
            }).bind(function (e) {
              return Ts(Pn(e)).map(function (t) {
                var n = t.dom.offsetTop,
                    o = e.dom.offsetTop,
                    r = e.dom.offsetHeight;
                return n <= o ? -r : 0;
              });
            }).getOr(0) : 0;
          }(vn(t));
        }

        return {
          x: o,
          y: r
        };
      }(e.body, f(t), n);
    },
        S = function S(e, t, n) {
      var o = f(e);
      if (!y(o) && jo(o)) return n ? io(vn(o), _a(t)) : ("float" === (t = t.replace(/-(\D)/g, function (e, t) {
        return t.toUpperCase();
      })) && (t = "cssFloat"), o.style ? o.style[t] : void 0);
    },
        _ = function _(e) {
      var t = f(e);
      if (!t) return {
        w: 0,
        h: 0
      };
      var n = S(t, "width"),
          o = S(t, "height");
      return n && -1 !== n.indexOf("px") || (n = "0"), o && -1 !== o.indexOf("px") || (o = "0"), {
        w: parseInt(n, 10) || t.offsetWidth || t.clientWidth,
        h: parseInt(o, 10) || t.offsetHeight || t.clientHeight
      };
    },
        R = function R(e, t) {
      if (!e) return !1;
      var n = p(e) ? e : [e];
      return $(n, function (e) {
        return wn(vn(e), t);
      });
    },
        A = function A(e, t, n, o) {
      var r = [];
      var s = f(e);
      o = void 0 === o;
      var a = n || ("BODY" !== x().nodeName ? x().parentNode : null);
      if (m(t)) if ("*" === t) t = jo;else {
        var _e29 = t;

        t = function t(_t33) {
          return R(_t33, _e29);
        };
      }

      for (; s && !(s === a || y(s.nodeType) || er(s) || tr(s));) {
        if (!t || t(s)) {
          if (!o) return [s];
          r.push(s);
        }

        s = s.parentNode;
      }

      return o ? r : null;
    },
        O = function O(e, t, n) {
      var o = t;

      if (e) {
        m(t) && (o = function o(e) {
          return R(e, t);
        });

        for (var _t34 = e[n]; _t34; _t34 = _t34[n]) {
          if (w(o) && o(_t34)) return _t34;
        }
      }

      return null;
    },
        T = function T(e, t, n) {
      var o = null != n ? n : this;

      if (p(e)) {
        var _n31 = [];
        return wa(e, function (e, r) {
          var s = f(e);
          s && _n31.push(t.call(o, s, r));
        }), _n31;
      }

      {
        var _n32 = f(e);

        return !!_n32 && t.call(o, _n32);
      }
    },
        B = function B(e, t) {
      T(e, function (e) {
        ge(t, function (t, n) {
          v(e, n, t);
        });
      });
    },
        D = function D(e, t) {
      T(e, function (e) {
        var n = vn(e);
        Eo(n, t);
      });
    },
        P = function P(t, n, o, r, s) {
      return T(t, function (t) {
        var a = m(n) ? e.createElement(n) : n;
        return C(o) && B(a, o), r && (!m(r) && r.nodeType ? a.appendChild(r) : m(r) && D(a, r)), s ? a : t.appendChild(a);
      });
    },
        L = function L(t, n, o) {
      return P(e.createElement(t), t, n, o, !0);
    },
        M = Qs.encodeAllRaw,
        I = function I(e, t) {
      return T(e, function (e) {
        var n = vn(e);
        return t && q(Ln(n), function (e) {
          Wt(e) && 0 === e.dom.length ? Co(e) : fo(n, e);
        }), Co(n), n.dom;
      });
    },
        F = function F(e, t, n) {
      T(e, function (e) {
        if (jo(e)) {
          var _o35 = vn(e),
              _r23 = t.split(" ");

          q(_r23, function (e) {
            C(n) ? (n ? cn : mn)(_o35, e) : function (e, t) {
              var n = sn(e) ? e.dom.classList.toggle(t) : function (e, t) {
                return H(an(e), t) ? dn(e, t) : ln(e, t);
              }(e, t);
              un(e);
            }(_o35, e);
          });
        }
      });
    },
        U = function U(e, t, n) {
      return T(t, function (o) {
        var r;
        var s = p(t) ? e.cloneNode(!0) : e;
        return n && wa(xa(o.childNodes), function (e) {
          s.appendChild(e);
        }), null === (r = o.parentNode) || void 0 === r || r.replaceChild(s, o), o;
      });
    },
        z = function z(e) {
      if (jo(e)) {
        var _t35 = "a" === e.nodeName.toLowerCase() && !h(e, "href") && h(e, "id");

        if (h(e, "name") || h(e, "data-mce-bookmark") || _t35) return !0;
      }

      return !1;
    },
        j = function j() {
      return e.createRange();
    },
        V = function V(n, r, s, a) {
      if (p(n)) {
        var _e30 = n.length;
        var _t36 = [];

        for (; _e30--;) {
          _t36[_e30] = V(n[_e30], r, s, a);
        }

        return _t36;
      }

      return !t.collect || n !== e && n !== o || i.push([n, r, s, a]), c.bind(n, r, s, a || G);
    },
        W = function W(t, n, r) {
      if (p(t)) {
        var _e31 = t.length;
        var _o36 = [];

        for (; _e31--;) {
          _o36[_e31] = W(t[_e31], n, r);
        }

        return _o36;
      }

      if (i.length > 0 && (t === e || t === o)) {
        var _e32 = i.length;

        for (; _e32--;) {
          var _i$_e = _slicedToArray(i[_e32], 3),
              _o37 = _i$_e[0],
              _s12 = _i$_e[1],
              _a7 = _i$_e[2];

          t !== _o37 || n && n !== _s12 || r && r !== _a7 || c.unbind(_o37, _s12, _a7);
        }
      }

      return c.unbind(t, n, r);
    },
        K = function K(e) {
      if (e && jo(e)) {
        var _t37 = e.getAttribute("data-mce-contenteditable");

        return _t37 && "inherit" !== _t37 ? _t37 : "inherit" !== e.contentEditable ? e.contentEditable : null;
      }

      return null;
    },
        G = {
      doc: e,
      settings: t,
      win: o,
      files: r,
      stdMode: !0,
      boxModel: !0,
      styleSheetLoader: a,
      boundEvents: i,
      styles: d,
      schema: l,
      events: c,
      isBlock: function isBlock(e) {
        return m(e) ? ke(u, e) : jo(e) && (ke(u, e.nodeName) || Ns(l, e));
      },
      root: null,
      clone: function clone(e, t) {
        return e.cloneNode(t);
      },
      getRoot: x,
      getViewPort: function getViewPort(e) {
        var t = Po(e);
        return {
          x: t.x,
          y: t.y,
          w: t.width,
          h: t.height
        };
      },
      getRect: function getRect(e) {
        var t = f(e),
            n = k(t),
            o = _(t);

        return {
          x: n.x,
          y: n.y,
          w: o.w,
          h: o.h
        };
      },
      getSize: _,
      getParent: function getParent(e, t, n) {
        var o = A(e, t, n, !1);
        return o && o.length > 0 ? o[0] : null;
      },
      getParents: A,
      get: f,
      getNext: function getNext(e, t) {
        return O(e, t, "nextSibling");
      },
      getPrev: function getPrev(e, t) {
        return O(e, t, "previousSibling");
      },
      select: function select(n, o) {
        var r, s;
        var a = null !== (s = null !== (r = f(o)) && void 0 !== r ? r : t.root_element) && void 0 !== s ? s : e;
        return w(a.querySelectorAll) ? ce(a.querySelectorAll(n)) : [];
      },
      is: R,
      add: P,
      create: L,
      createHTML: function createHTML(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var o = "<" + e;

        for (var _e33 in t) {
          Ee(t, _e33) && (o += " " + _e33 + '="' + M(t[_e33]) + '"');
        }

        return Ye(n) && ke(l.getVoidElements(), e) ? o + " />" : o + ">" + n + "</" + e + ">";
      },
      createFragment: function createFragment(t) {
        var n = e.createElement("div"),
            o = e.createDocumentFragment();
        var r;

        for (o.appendChild(n), t && (n.innerHTML = t); r = n.firstChild;) {
          o.appendChild(r);
        }

        return o.removeChild(n), o;
      },
      remove: I,
      setStyle: function setStyle(e, n, o) {
        T(e, function (e) {
          var r = vn(e);
          Aa(r, n, o), t.update_styles && Ra(d, r);
        });
      },
      getStyle: S,
      setStyles: function setStyles(e, n) {
        T(e, function (e) {
          var o = vn(e);
          ge(n, function (e, t) {
            Aa(o, t, e);
          }), t.update_styles && Ra(d, o);
        });
      },
      removeAllAttribs: function removeAllAttribs(e) {
        return T(e, function (e) {
          var t = e.attributes;

          for (var _n33 = t.length - 1; _n33 >= 0; _n33--) {
            e.removeAttributeNode(t.item(_n33));
          }
        });
      },
      setAttrib: v,
      setAttribs: B,
      getAttrib: h,
      getPos: k,
      parseStyle: function parseStyle(e) {
        return d.parse(e);
      },
      serializeStyle: function serializeStyle(e, t) {
        return d.serialize(e, t);
      },
      addStyle: function addStyle(t) {
        if (G !== Oa.DOM && e === document) {
          if (n[t]) return;
          n[t] = !0;
        }

        var o = e.getElementById("mceDefaultStyles");

        if (!o) {
          o = e.createElement("style"), o.id = "mceDefaultStyles", o.type = "text/css";
          var _t38 = e.head;
          _t38.firstChild ? _t38.insertBefore(o, _t38.firstChild) : _t38.appendChild(o);
        }

        o.styleSheet ? o.styleSheet.cssText += t : o.appendChild(e.createTextNode(t));
      },
      loadCSS: function loadCSS(e) {
        e || (e = ""), q(e.split(","), function (e) {
          r[e] = !0, a.load(e)["catch"](E);
        });
      },
      addClass: function addClass(e, t) {
        F(e, t, !0);
      },
      removeClass: function removeClass(e, t) {
        F(e, t, !1);
      },
      hasClass: function hasClass(e, t) {
        var n = g(e),
            o = t.split(" ");
        return C(n) && ne(o, function (e) {
          return fn(n, e);
        });
      },
      toggleClass: F,
      show: function show(e) {
        T(e, function (e) {
          return mo(vn(e), "display");
        });
      },
      hide: function hide(e) {
        T(e, function (e) {
          return so(vn(e), "display", "none");
        });
      },
      isHidden: function isHidden(e) {
        var t = g(e);
        return C(t) && Pt(co(t, "display"), "none");
      },
      uniqueId: function uniqueId(e) {
        return (e || "mce_") + s++;
      },
      setHTML: D,
      getOuterHTML: function getOuterHTML(e) {
        var t = g(e);
        return C(t) ? jo(t.dom) ? t.dom.outerHTML : function (e) {
          var t = hn("div"),
              n = vn(e.dom.cloneNode(!0));
          return ho(t, n), ko(t);
        }(t) : "";
      },
      setOuterHTML: function setOuterHTML(e, t) {
        T(e, function (e) {
          jo(e) && (e.outerHTML = t);
        });
      },
      decode: Qs.decode,
      encode: M,
      insertAfter: function insertAfter(e, t) {
        var n = f(t);
        return T(e, function (e) {
          var t = null == n ? void 0 : n.parentNode,
              o = null == n ? void 0 : n.nextSibling;
          return t && (o ? t.insertBefore(e, o) : t.appendChild(e)), e;
        });
      },
      replace: U,
      rename: function rename(e, t) {
        if (e.nodeName !== t.toUpperCase()) {
          var _n34 = L(t);

          return wa(b(e), function (t) {
            v(_n34, t.nodeName, h(e, t.nodeName));
          }), U(_n34, e, !0), _n34;
        }

        return e;
      },
      findCommonAncestor: function findCommonAncestor(e, t) {
        var n = e;

        for (; n;) {
          var _e34 = t;

          for (; _e34 && n !== _e34;) {
            _e34 = _e34.parentNode;
          }

          if (n === _e34) break;
          n = n.parentNode;
        }

        return !n && e.ownerDocument ? e.ownerDocument.documentElement : n;
      },
      run: T,
      getAttribs: b,
      isEmpty: function isEmpty(e, t, n) {
        var o = 0;
        if (z(e)) return !1;
        var r = e.firstChild;

        if (r) {
          var _s13 = new Fo(r, e),
              _a8 = l ? l.getWhitespaceElements() : {},
              _i5 = t || (l ? l.getNonEmptyElements() : null);

          var _d5 = r;

          do {
            if (jo(_d5)) {
              var _e35 = _d5.getAttribute("data-mce-bogus");

              if (_e35) {
                _d5 = _s13.next("all" === _e35);
                continue;
              }

              var _t39 = _d5.nodeName.toLowerCase();

              if (_i5 && _i5[_t39]) {
                if ("br" === _t39) {
                  o++, _d5 = _s13.next();
                  continue;
                }

                return !1;
              }

              if (z(_d5)) return !1;
            }

            if (Zo(_d5)) return !1;
            if (Xo(_d5) && !is(_d5.data) && (!(null == n ? void 0 : n.includeZwsp) || !ls(_d5.data))) return !1;
            if (Xo(_d5) && _d5.parentNode && _a8[_d5.parentNode.nodeName] && is(_d5.data)) return !1;
            _d5 = _s13.next();
          } while (_d5);
        }

        return o <= 1;
      },
      createRng: j,
      nodeIndex: Na,
      split: function split(e, t, n) {
        var o,
            r,
            s = j();

        if (e && t && e.parentNode && t.parentNode) {
          var _a9 = e.parentNode;
          return s.setStart(_a9, Na(e)), s.setEnd(t.parentNode, Na(t)), o = s.extractContents(), s = j(), s.setStart(t.parentNode, Na(t) + 1), s.setEnd(_a9, Na(e) + 1), r = s.extractContents(), _a9.insertBefore(Is(G, o), e), n ? _a9.insertBefore(n, e) : _a9.insertBefore(t, e), _a9.insertBefore(Is(G, r), e), I(e), n || t;
        }
      },
      bind: V,
      unbind: W,
      fire: function fire(e, t, n) {
        return c.dispatch(e, t, n);
      },
      dispatch: function dispatch(e, t, n) {
        return c.dispatch(e, t, n);
      },
      getContentEditable: K,
      getContentEditableParent: function getContentEditableParent(e) {
        var t = x();
        var n = null;

        for (var _o38 = e; _o38 && _o38 !== t && (n = K(_o38), null === n); _o38 = _o38.parentNode) {
          ;
        }

        return n;
      },
      isEditable: function isEditable(e) {
        if (C(e)) {
          var _t40 = jo(e) ? e : e.parentElement;

          return C(_t40) && to(vn(_t40));
        }

        return !1;
      },
      destroy: function destroy() {
        if (i.length > 0) {
          var _e36 = i.length;

          for (; _e36--;) {
            var _i$_e2 = _slicedToArray(i[_e36], 3),
                _t41 = _i$_e2[0],
                _n35 = _i$_e2[1],
                _o39 = _i$_e2[2];

            c.unbind(_t41, _n35, _o39);
          }
        }

        ge(r, function (e, t) {
          a.unload(t), delete r[t];
        });
      },
      isChildOf: function isChildOf(e, t) {
        return e === t || t.contains(e);
      },
      dumpRng: function dumpRng(e) {
        return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset;
      }
    },
        Y = function (e, t, n) {
      var o = t.keep_values,
          r = {
        set: function set(e, o, r) {
          var s = vn(e);
          w(t.url_converter) && C(o) && (o = t.url_converter.call(t.url_converter_scope || n(), String(o), r, e)), Sa(s, "data-mce-" + r, o), Sa(s, r, o);
        },
        get: function get(e, t) {
          var n = vn(e);
          return Zt(n, "data-mce-" + t) || Zt(n, t);
        }
      },
          s = {
        style: {
          set: function set(t, n) {
            var r = vn(t);
            o && Sa(r, ka, n), nn(r, "style"), m(n) && ao(r, e.parse(n));
          },
          get: function get(t) {
            var n = vn(t),
                o = Zt(n, ka) || Zt(n, "style");
            return e.serialize(e.parse(o), jt(n));
          }
        }
      };
      return o && (s.href = s.src = r), s;
    }(d, t, N(G));

    return G;
  };

  Oa.DOM = Oa(document), Oa.nodeIndex = Na;
  var Ta = Oa.DOM;

  var Ba =
  /*#__PURE__*/
  function () {
    function Ba() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Ba);

      this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = !1, this.settings = e;
    }

    _createClass(Ba, [{
      key: "_setReferrerPolicy",
      value: function _setReferrerPolicy(e) {
        this.settings.referrerPolicy = e;
      }
    }, {
      key: "loadScript",
      value: function loadScript(e) {
        var _this = this;

        return new Promise(function (t, n) {
          var o = Ta;
          var r;

          var s = function s() {
            o.remove(a), r && (r.onerror = r.onload = r = null);
          },
              a = o.uniqueId();

          r = document.createElement("script"), r.id = a, r.type = "text/javascript", r.src = Dt._addCacheSuffix(e), _this.settings.referrerPolicy && o.setAttrib(r, "referrerpolicy", _this.settings.referrerPolicy), r.onload = function () {
            s(), t();
          }, r.onerror = function () {
            s(), n("Failed to load script: " + e);
          }, (document.getElementsByTagName("head")[0] || document.body).appendChild(r);
        });
      }
    }, {
      key: "isDone",
      value: function isDone(e) {
        return 2 === this.states[e];
      }
    }, {
      key: "markDone",
      value: function markDone(e) {
        this.states[e] = 2;
      }
    }, {
      key: "add",
      value: function add(e) {
        var t = this;
        return t.queue.push(e), void 0 === t.states[e] && (t.states[e] = 0), new Promise(function (n, o) {
          t.scriptLoadedCallbacks[e] || (t.scriptLoadedCallbacks[e] = []), t.scriptLoadedCallbacks[e].push({
            resolve: n,
            reject: o
          });
        });
      }
    }, {
      key: "load",
      value: function load(e) {
        return this.add(e);
      }
    }, {
      key: "remove",
      value: function remove(e) {
        delete this.states[e], delete this.scriptLoadedCallbacks[e];
      }
    }, {
      key: "loadQueue",
      value: function loadQueue() {
        var e = this.queue;
        return this.queue = [], this.loadScripts(e);
      }
    }, {
      key: "loadScripts",
      value: function loadScripts(e) {
        var t = this,
            n = function n(e, _n36) {
          xe(t.scriptLoadedCallbacks, _n36).each(function (t) {
            q(t, function (t) {
              return t[e](_n36);
            });
          }), delete t.scriptLoadedCallbacks[_n36];
        },
            o = function o(e) {
          var t = G(e, function (e) {
            return "rejected" === e.status;
          });
          return t.length > 0 ? Promise.reject(te(t, function (_ref) {
            var e = _ref.reason;
            return p(e) ? e : [e];
          })) : Promise.resolve();
        },
            r = function r(e) {
          return Promise.allSettled(V(e, function (e) {
            return 2 === t.states[e] ? (n("resolve", e), Promise.resolve()) : 3 === t.states[e] ? (n("reject", e), Promise.reject(e)) : (t.states[e] = 1, t.loadScript(e).then(function () {
              t.states[e] = 2, n("resolve", e);
              var s = t.queue;
              return s.length > 0 ? (t.queue = [], r(s).then(o)) : Promise.resolve();
            }, function () {
              return t.states[e] = 3, n("reject", e), Promise.reject(e);
            }));
          }));
        },
            s = function s(e) {
          return t.loading = !0, r(e).then(function (e) {
            t.loading = !1;
            var n = t.queueLoadedCallbacks.shift();
            return I.from(n).each(P), o(e);
          });
        },
            a = Se(e);

        return t.loading ? new Promise(function (e, n) {
          t.queueLoadedCallbacks.push(function () {
            s(a).then(e, n);
          });
        }) : s(a);
      }
    }]);

    return Ba;
  }();

  Ba.ScriptLoader = new Ba();

  var Da = function Da(e) {
    var t = e;
    return {
      get: function get() {
        return t;
      },
      set: function set(e) {
        t = e;
      }
    };
  },
      Pa = {},
      La = Da("en"),
      Ma = function Ma() {
    return xe(Pa, La.get());
  },
      Ia = {
    getData: function getData() {
      return pe(Pa, function (e) {
        return _objectSpread({}, e);
      });
    },
    setCode: function setCode(e) {
      e && La.set(e);
    },
    getCode: function getCode() {
      return La.get();
    },
    add: function add(e, t) {
      var n = Pa[e];
      n || (Pa[e] = n = {}), ge(t, function (e, t) {
        n[t.toLowerCase()] = e;
      });
    },
    translate: function translate(e) {
      var t = Ma().getOr({}),
          n = function n(e) {
        return w(e) ? Object.prototype.toString.call(e) : o(e) ? "" : "" + e;
      },
          o = function o(e) {
        return "" === e || null == e;
      },
          r = function r(e) {
        var o = n(e);
        return xe(t, o.toLowerCase()).map(n).getOr(o);
      },
          s = function s(e) {
        return e.replace(/{context:\w+}$/, "");
      };

      if (o(e)) return "";
      if (f(a = e) && ke(a, "raw")) return n(e.raw);
      var a;

      if (function (e) {
        return p(e) && e.length > 1;
      }(e)) {
        var _t42 = e.slice(1);

        return s(r(e[0]).replace(/\{([0-9]+)\}/g, function (e, o) {
          return ke(_t42, o) ? n(_t42[o]) : e;
        }));
      }

      return s(r(e));
    },
    isRtl: function isRtl() {
      return Ma().bind(function (e) {
        return xe(e, "_dir");
      }).exists(function (e) {
        return "rtl" === e;
      });
    },
    hasCode: function hasCode(e) {
      return ke(Pa, e);
    }
  },
      Fa = function Fa() {
    var e = [],
        t = {},
        n = {},
        o = [],
        r = function r(e, t) {
      var n = G(o, function (n) {
        return n.name === e && n.state === t;
      });
      q(n, function (e) {
        return e.resolve();
      });
    },
        s = function s(e) {
      return ke(t, e);
    },
        a = function a(e, n) {
      var o = Ia.getCode();
      !o || n && -1 === ("," + (n || "") + ",").indexOf("," + o + ",") || Ba.ScriptLoader.add(t[e] + "/langs/" + o + ".js");
    },
        i = function i(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "added";
      return "added" === t && function (e) {
        return ke(n, e);
      }(e) || "loaded" === t && s(e) ? Promise.resolve() : new Promise(function (n) {
        o.push({
          name: e,
          state: t,
          resolve: n
        });
      });
    };

    return {
      items: e,
      urls: t,
      lookup: n,
      get: function get(e) {
        if (n[e]) return n[e].instance;
      },
      requireLangPack: function requireLangPack(e, t) {
        !1 !== Fa.languageLoad && (s(e) ? a(e, t) : i(e, "loaded").then(function () {
          return a(e, t);
        }));
      },
      add: function add(t, o) {
        return e.push(o), n[t] = {
          instance: o
        }, r(t, "added"), o;
      },
      remove: function remove(e) {
        delete t[e], delete n[e];
      },
      createUrl: function createUrl(e, t) {
        return m(t) ? m(e) ? {
          prefix: "",
          resource: t,
          suffix: ""
        } : {
          prefix: e.prefix,
          resource: t,
          suffix: e.suffix
        } : t;
      },
      load: function load(e, o) {
        if (t[e]) return Promise.resolve();
        var s = m(o) ? o : o.prefix + o.resource + o.suffix;
        0 !== s.indexOf("/") && -1 === s.indexOf("://") && (s = Fa.baseURL + "/" + s), t[e] = s.substring(0, s.lastIndexOf("/"));

        var a = function a() {
          return r(e, "loaded"), Promise.resolve();
        };

        return n[e] ? a() : Ba.ScriptLoader.add(s).then(a);
      },
      waitFor: i
    };
  };

  Fa.languageLoad = !0, Fa.baseURL = "", Fa.PluginManager = Fa(), Fa.ThemeManager = Fa(), Fa.ModelManager = Fa();

  var Ua = function Ua(e) {
    var t = Da(I.none()),
        n = function n() {
      return t.get().each(function (e) {
        return clearInterval(e);
      });
    };

    return {
      clear: function clear() {
        n(), t.set(I.none());
      },
      isSet: function isSet() {
        return t.get().isSome();
      },
      get: function get() {
        return t.get();
      },
      set: function set(o) {
        n(), t.set(I.some(setInterval(o, e)));
      }
    };
  },
      za = function za() {
    var e = function (e) {
      var t = Da(I.none()),
          n = function n() {
        return t.get().each(e);
      };

      return {
        clear: function clear() {
          n(), t.set(I.none());
        },
        isSet: function isSet() {
          return t.get().isSome();
        },
        get: function get() {
          return t.get();
        },
        set: function set(e) {
          n(), t.set(I.some(e));
        }
      };
    }(E);

    return _objectSpread({}, e, {
      on: function on(t) {
        return e.get().each(t);
      }
    });
  },
      ja = function ja(e, t) {
    var n = null;
    return {
      cancel: function cancel() {
        h(n) || (clearTimeout(n), n = null);
      },
      throttle: function throttle() {
        for (var _len5 = arguments.length, o = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          o[_key5] = arguments[_key5];
        }

        h(n) && (n = setTimeout(function () {
          n = null, e.apply(null, o);
        }, t));
      }
    };
  },
      Ha = function Ha(e, t) {
    var n = null;

    var o = function o() {
      h(n) || (clearTimeout(n), n = null);
    };

    return {
      cancel: o,
      throttle: function throttle() {
        for (var _len6 = arguments.length, r = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          r[_key6] = arguments[_key6];
        }

        o(), n = setTimeout(function () {
          n = null, e.apply(null, r);
        }, t);
      }
    };
  },
      $a = N("mce-annotation"),
      Va = N("data-mce-annotation"),
      qa = N("data-mce-annotation-uid"),
      Wa = N("data-mce-annotation-active"),
      Ka = N("data-mce-annotation-classes"),
      Ga = N("data-mce-annotation-attrs"),
      Ya = function Ya(e) {
    return function (t) {
      return kn(t, e);
    };
  },
      Xa = function Xa(e, t) {
    var n = e.selection.getRng(),
        o = vn(n.startContainer),
        r = vn(e.getBody()),
        s = t.fold(function () {
      return "." + $a();
    }, function (e) {
      return "[".concat(Va(), "=\"").concat(e, "\"]");
    }),
        a = Mn(o, n.startOffset).getOr(o);
    return eo(a, s, Ya(r)).bind(function (t) {
      return en(t, "".concat(qa())).bind(function (n) {
        return en(t, "".concat(Va())).map(function (t) {
          var o = Ja(e, n);
          return {
            uid: n,
            name: t,
            elements: o
          };
        });
      });
    });
  },
      Qa = function Qa(e, t) {
    return tn(e, "data-mce-bogus") || Io(e, '[data-mce-bogus="all"]', Ya(t));
  },
      Ja = function Ja(e, t) {
    var n = vn(e.getBody()),
        o = Mo(n, "[".concat(qa(), "=\"").concat(t, "\"]"));
    return G(o, function (e) {
      return !Qa(e, n);
    });
  },
      Za = function Za(e, t) {
    var n = vn(e.getBody()),
        o = Mo(n, "[".concat(Va(), "=\"").concat(t, "\"]")),
        r = {};
    return q(o, function (e) {
      if (!Qa(e, n)) {
        var _t43 = Zt(e, qa()),
            _n37 = xe(r, _t43).getOr([]);

        r[_t43] = _n37.concat([e]);
      }
    }), r;
  };

  var ei = 0;

  var ti = function ti(e) {
    var t = new Date().getTime(),
        n = Math.floor(1e9 * Math.random());
    return ei++, e + "_" + n + ei + String(t);
  },
      ni = function ni(e, t) {
    return vn(e.dom.cloneNode(t));
  },
      oi = function oi(e) {
    return ni(e, !1);
  },
      ri = function ri(e) {
    return ni(e, !0);
  },
      si = function si(e, t) {
    var n = function (e, t) {
      var n = hn(t),
          o = on(e);
      return Jt(n, o), n;
    }(e, t);

    go(e, n);
    var o = Ln(e);
    return vo(n, o), Co(e), n;
  },
      ai = function ai(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : L;

    var o = new Fo(e, t),
        r = function r(e) {
      var t;

      do {
        t = o[e]();
      } while (t && !Xo(t) && !n(t));

      return I.from(t).filter(Xo);
    };

    return {
      current: function current() {
        return I.from(o.current()).filter(Xo);
      },
      next: function next() {
        return r("next");
      },
      prev: function prev() {
        return r("prev");
      },
      prev2: function prev2() {
        return r("prev2");
      }
    };
  },
      ii = function ii(e, t) {
    var n = t || function (t) {
      return e.isBlock(t) || nr(t) || sr(t);
    },
        o = function o(e, t, n, r) {
      if (Xo(e)) {
        var _n38 = r(e, t, e.data);

        if (-1 !== _n38) return I.some({
          container: e,
          offset: _n38
        });
      }

      return n().bind(function (e) {
        return o(e.container, e.offset, n, r);
      });
    };

    return {
      backwards: function backwards(t, r, s, a) {
        var i = ai(t, null != a ? a : e.getRoot(), n);
        return o(t, r, function () {
          return i.prev().map(function (e) {
            return {
              container: e,
              offset: e.length
            };
          });
        }, s).getOrNull();
      },
      forwards: function forwards(t, r, s, a) {
        var i = ai(t, null != a ? a : e.getRoot(), n);
        return o(t, r, function () {
          return i.next().map(function (e) {
            return {
              container: e,
              offset: 0
            };
          });
        }, s).getOrNull();
      }
    };
  },
      li = Math.round,
      di = function di(e) {
    return e ? {
      left: li(e.left),
      top: li(e.top),
      bottom: li(e.bottom),
      right: li(e.right),
      width: li(e.width),
      height: li(e.height)
    } : {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      width: 0,
      height: 0
    };
  },
      ci = function ci(e, t) {
    return e = di(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e;
  },
      ui = function ui(e, t, n) {
    return e >= 0 && e <= Math.min(t.height, n.height) / 2;
  },
      mi = function mi(e, t) {
    var n = Math.min(t.height / 2, e.height / 2);
    return e.bottom - n < t.top || !(e.top > t.bottom) && ui(t.top - e.bottom, e, t);
  },
      fi = function fi(e, t) {
    return e.top > t.bottom || !(e.bottom < t.top) && ui(t.bottom - e.top, e, t);
  },
      gi = function gi(e, t, n) {
    var o = Math.max(Math.min(t, e.left + e.width), e.left),
        r = Math.max(Math.min(n, e.top + e.height), e.top);
    return Math.sqrt((t - o) * (t - o) + (n - r) * (n - r));
  },
      pi = function pi(e) {
    var t = e.startContainer,
        n = e.startOffset;
    return t === e.endContainer && t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
  },
      hi = function hi(e, t) {
    if (jo(e) && e.hasChildNodes()) {
      var _n39 = e.childNodes,
          _o40 = function (e, t, n) {
        return Math.min(Math.max(e, 0), n);
      }(t, 0, _n39.length - 1);

      return _n39[_o40];
    }

    return e;
  },
      bi = new RegExp("[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962-\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2-\u09E3\u0A01-\u0A02\u0A3C\u0A41-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D\u0A51\u0A70-\u0A71\u0A75\u0A81-\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7-\u0AC8\u0ACD\u0AE2-\u0AE3\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B56\u0B57\u0B62-\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56\u0C62-\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC-\u0CCD\u0CD5-\u0CD6\u0CE2-\u0CE3\u0D01\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62-\u0D63\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039-\u103A\u103D-\u103E\u1058-\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B4-\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193B\u1A17-\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1ABE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80-\u1B81\u1BA2-\u1BA5\u1BA8-\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8-\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8-\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u200C-\u200D\u20D0-\u20DC\u20DD-\u20E0\u20E1\u20E2-\u20E4\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u302E-\u302F\u3099-\u309A\uA66F\uA670-\uA672\uA674-\uA67D\uA69E-\uA69F\uA6F0-\uA6F1\uA802\uA806\uA80B\uA825-\uA826\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9E5\uAA29-\uAA2E\uAA31-\uAA32\uAA35-\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7-\uAAB8\uAABE-\uAABF\uAAC1\uAAEC-\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E-\uFF9F]"),
      vi = function vi(e) {
    return m(e) && e.charCodeAt(0) >= 768 && bi.test(e);
  },
      yi = jo,
      Ci = os,
      wi = Vo("display", "block table"),
      xi = Vo("float", "left right"),
      ki = function () {
    for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      e[_key7] = arguments[_key7];
    }

    return function (t) {
      for (var _n40 = 0; _n40 < e.length; _n40++) {
        if (!e[_n40](t)) return !1;
      }

      return !0;
    };
  }(yi, Ci, T(xi)),
      Ei = T(Vo("white-space", "pre pre-line pre-wrap")),
      Si = Xo,
      _i = nr,
      Ni = Oa.nodeIndex,
      Ri = function Ri(e, t) {
    return t < 0 && jo(e) && e.hasChildNodes() ? void 0 : hi(e, t);
  },
      Ai = function Ai(e) {
    return e ? e.createRange() : Oa.DOM.createRng();
  },
      Oi = function Oi(e) {
    return m(e) && /[\r\n\t ]/.test(e);
  },
      Ti = function Ti(e) {
    return !!e.setStart && !!e.setEnd;
  },
      Bi = function Bi(e) {
    var t = e.startContainer,
        n = e.startOffset;

    if (Oi(e.toString()) && Ei(t.parentNode) && Xo(t)) {
      var _e37 = t.data;
      if (Oi(_e37[n - 1]) || Oi(_e37[n + 1])) return !0;
    }

    return !1;
  },
      Di = function Di(e) {
    return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
  },
      Pi = function Pi(e) {
    var t;
    var n;
    var o = e.getClientRects();
    return n = o.length > 0 ? di(o[0]) : di(e.getBoundingClientRect()), !Ti(e) && _i(e) && Di(n) ? function (e) {
      var t = e.ownerDocument,
          n = Ai(t),
          o = t.createTextNode(fr),
          r = e.parentNode;
      r.insertBefore(o, e), n.setStart(o, 0), n.setEnd(o, 1);
      var s = di(n.getBoundingClientRect());
      return r.removeChild(o), s;
    }(e) : Di(n) && Ti(e) && null !== (t = function (e) {
      var t = e.startContainer,
          n = e.endContainer,
          o = e.startOffset,
          r = e.endOffset;

      if (t === n && Xo(n) && 0 === o && 1 === r) {
        var _t44 = e.cloneRange();

        return _t44.setEndAfter(n), Pi(_t44);
      }

      return null;
    }(e)) && void 0 !== t ? t : n;
  },
      Li = function Li(e, t) {
    var n = ci(e, t);
    return n.width = 1, n.right = n.left + 1, n;
  },
      Mi = function Mi(e, t, n) {
    var o = function o() {
      return n || (n = function (e) {
        var t = [],
            n = function n(e) {
          var n, o;
          0 !== e.height && (t.length > 0 && (n = e, o = t[t.length - 1], n.left === o.left && n.top === o.top && n.bottom === o.bottom && n.right === o.right) || t.push(e));
        },
            o = function o(e, t) {
          var o = Ai(e.ownerDocument);

          if (t < e.data.length) {
            if (vi(e.data[t])) return;
            if (vi(e.data[t - 1]) && (o.setStart(e, t), o.setEnd(e, t + 1), !Bi(o))) return void n(Li(Pi(o), !1));
          }

          t > 0 && (o.setStart(e, t - 1), o.setEnd(e, t), Bi(o) || n(Li(Pi(o), !1))), t < e.data.length && (o.setStart(e, t), o.setEnd(e, t + 1), Bi(o) || n(Li(Pi(o), !0)));
        },
            r = e.container(),
            s = e.offset();

        if (Si(r)) return o(r, s), t;
        if (yi(r)) if (e.isAtEnd()) {
          var _e38 = Ri(r, s);

          Si(_e38) && o(_e38, _e38.data.length), ki(_e38) && !_i(_e38) && n(Li(Pi(_e38), !1));
        } else {
          var _a10 = Ri(r, s);

          if (Si(_a10) && o(_a10, 0), ki(_a10) && e.isAtEnd()) return n(Li(Pi(_a10), !1)), t;

          var _i6 = Ri(e.container(), e.offset() - 1);

          ki(_i6) && !_i(_i6) && (wi(_i6) || wi(_a10) || !ki(_a10)) && n(Li(Pi(_i6), !1)), ki(_a10) && n(Li(Pi(_a10), !0));
        }
        return t;
      }(Mi(e, t))), n;
    };

    return {
      container: N(e),
      offset: N(t),
      toRange: function toRange() {
        var n = Ai(e.ownerDocument);
        return n.setStart(e, t), n.setEnd(e, t), n;
      },
      getClientRects: o,
      isVisible: function isVisible() {
        return o().length > 0;
      },
      isAtStart: function isAtStart() {
        return Si(e), 0 === t;
      },
      isAtEnd: function isAtEnd() {
        return Si(e) ? t >= e.data.length : t >= e.childNodes.length;
      },
      isEqual: function isEqual(n) {
        return n && e === n.container() && t === n.offset();
      },
      getNode: function getNode(n) {
        return Ri(e, n ? t - 1 : t);
      }
    };
  };

  Mi.fromRangeStart = function (e) {
    return Mi(e.startContainer, e.startOffset);
  }, Mi.fromRangeEnd = function (e) {
    return Mi(e.endContainer, e.endOffset);
  }, Mi.after = function (e) {
    return Mi(e.parentNode, Ni(e) + 1);
  }, Mi.before = function (e) {
    return Mi(e.parentNode, Ni(e));
  }, Mi.isAbove = function (e, t) {
    return Lt(le(t.getClientRects()), de(e.getClientRects()), mi).getOr(!1);
  }, Mi.isBelow = function (e, t) {
    return Lt(de(t.getClientRects()), le(e.getClientRects()), fi).getOr(!1);
  }, Mi.isAtStart = function (e) {
    return !!e && e.isAtStart();
  }, Mi.isAtEnd = function (e) {
    return !!e && e.isAtEnd();
  }, Mi.isTextPosition = function (e) {
    return !!e && Xo(e.container());
  }, Mi.isElementPosition = function (e) {
    return !Mi.isTextPosition(e);
  };

  var Ii = function Ii(e, t) {
    Xo(t) && 0 === t.data.length && e.remove(t);
  },
      Fi = function Fi(e, t, n) {
    tr(n) ? function (e, t, n) {
      var o = I.from(n.firstChild),
          r = I.from(n.lastChild);
      t.insertNode(n), o.each(function (t) {
        return Ii(e, t.previousSibling);
      }), r.each(function (t) {
        return Ii(e, t.nextSibling);
      });
    }(e, t, n) : function (e, t, n) {
      t.insertNode(n), Ii(e, n.previousSibling), Ii(e, n.nextSibling);
    }(e, t, n);
  },
      Ui = Xo,
      zi = Wo,
      ji = Oa.nodeIndex,
      Hi = function Hi(e) {
    var t = e.parentNode;
    return zi(t) ? Hi(t) : t;
  },
      $i = function $i(e) {
    return e ? Te(e.childNodes, function (e, t) {
      return zi(t) && "BR" !== t.nodeName ? e = e.concat($i(t)) : e.push(t), e;
    }, []) : [];
  },
      Vi = function Vi(e) {
    return function (t) {
      return e === t;
    };
  },
      qi = function qi(e) {
    return (Ui(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + function (e) {
      var t, n;
      t = $i(Hi(e)), n = Be(t, Vi(e), e), t = t.slice(0, n + 1);
      var o = Te(t, function (e, n, o) {
        return Ui(n) && Ui(t[o - 1]) && e++, e;
      }, 0);
      return t = Oe(t, $o([e.nodeName])), n = Be(t, Vi(e), e), n - o;
    }(e) + "]";
  },
      Wi = function Wi(e, t) {
    var n,
        o = [],
        r = t.container(),
        s = t.offset();
    if (Ui(r)) n = function (e, t) {
      var n = e;

      for (; (n = n.previousSibling) && Ui(n);) {
        t += n.data.length;
      }

      return t;
    }(r, s);else {
      var _e39 = r.childNodes;
      s >= _e39.length ? (n = "after", s = _e39.length - 1) : n = "before", r = _e39[s];
    }
    o.push(qi(r));

    var a = function (e, t, n) {
      var o = [];

      for (var _n41 = t.parentNode; _n41 && _n41 !== e; _n41 = _n41.parentNode) {
        o.push(_n41);
      }

      return o;
    }(e, r);

    return a = Oe(a, T(Wo)), o = o.concat(Ae(a, function (e) {
      return qi(e);
    })), o.reverse().join("/") + "," + n;
  },
      Ki = function Ki(e, t) {
    if (!t) return null;
    var n = t.split(","),
        o = n[0].split("/"),
        r = n.length > 1 ? n[1] : "before",
        s = Te(o, function (e, t) {
      var n = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
      return n ? ("text()" === n[1] && (n[1] = "#text"), function (e, t, n) {
        var o = $i(e);
        return o = Oe(o, function (e, t) {
          return !Ui(e) || !Ui(o[t - 1]);
        }), o = Oe(o, $o([t])), o[n];
      }(e, n[1], parseInt(n[2], 10))) : null;
    }, e);
    if (!s) return null;

    if (!Ui(s) && s.parentNode) {
      var _e40;

      return _e40 = "after" === r ? ji(s) + 1 : ji(s), Mi(s.parentNode, _e40);
    }

    return function (e, t) {
      var n = e,
          o = 0;

      for (; Ui(n);) {
        var _r24 = n.data.length;

        if (t >= o && t <= o + _r24) {
          e = n, t -= o;
          break;
        }

        if (!Ui(n.nextSibling)) {
          e = n, t = _r24;
          break;
        }

        o += _r24, n = n.nextSibling;
      }

      return Ui(e) && t > e.data.length && (t = e.data.length), Mi(e, t);
    }(s, parseInt(r, 10));
  },
      Gi = sr,
      Yi = function Yi(e, t, n, o, r) {
    var s = r ? o.startContainer : o.endContainer;
    var a = r ? o.startOffset : o.endOffset;
    var i = [],
        l = e.getRoot();
    if (Xo(s)) i.push(n ? function (e, t, n) {
      var o = e(t.data.slice(0, n)).length;

      for (var _n42 = t.previousSibling; _n42 && Xo(_n42); _n42 = _n42.previousSibling) {
        o += e(_n42.data).length;
      }

      return o;
    }(t, s, a) : a);else {
      var _t45 = 0;
      var _o41 = s.childNodes;
      a >= _o41.length && _o41.length && (_t45 = 1, a = Math.max(0, _o41.length - 1)), i.push(e.nodeIndex(_o41[a], n) + _t45);
    }

    for (var _t46 = s; _t46 && _t46 !== l; _t46 = _t46.parentNode) {
      i.push(e.nodeIndex(_t46, n));
    }

    return i;
  },
      Xi = function Xi(e, t, n) {
    var o = 0;
    return Dt.each(e.select(t), function (e) {
      return "all" === e.getAttribute("data-mce-bogus") ? void 0 : e !== n && void o++;
    }), o;
  },
      Qi = function Qi(e, t) {
    var n = t ? e.startContainer : e.endContainer,
        o = t ? e.startOffset : e.endOffset;

    if (jo(n) && "TR" === n.nodeName) {
      var _r25 = n.childNodes;
      n = _r25[Math.min(t ? o : o - 1, _r25.length - 1)], n && (o = t ? 0 : n.childNodes.length, t ? e.setStart(n, o) : e.setEnd(n, o));
    }
  },
      Ji = function Ji(e) {
    return Qi(e, !0), Qi(e, !1), e;
  },
      Zi = function Zi(e, t) {
    if (jo(e) && (e = hi(e, t), Gi(e))) return e;

    if (jr(e)) {
      Xo(e) && Ur(e) && (e = e.parentNode);
      var _t47 = e.previousSibling;
      if (Gi(_t47)) return _t47;
      if (_t47 = e.nextSibling, Gi(_t47)) return _t47;
    }
  },
      el = function el(e, t, n) {
    var o = n.getNode(),
        r = n.getRng();

    if ("IMG" === o.nodeName || Gi(o)) {
      var _e41 = o.nodeName;
      return {
        name: _e41,
        index: Xi(n.dom, _e41, o)
      };
    }

    var s = function (e) {
      return Zi(e.startContainer, e.startOffset) || Zi(e.endContainer, e.endOffset);
    }(r);

    if (s) {
      var _e42 = s.tagName;
      return {
        name: _e42,
        index: Xi(n.dom, _e42, s)
      };
    }

    return function (e, t, n, o) {
      var r = t.dom,
          s = Yi(r, e, n, o, !0),
          a = t.isForward(),
          i = Gr(o) ? {
        isFakeCaret: !0
      } : {};
      return t.isCollapsed() ? _objectSpread({
        start: s,
        forward: a
      }, i) : _objectSpread({
        start: s,
        end: Yi(r, e, n, o, !1),
        forward: a
      }, i);
    }(e, n, t, r);
  },
      tl = function tl(e, t, n) {
    var o = {
      "data-mce-type": "bookmark",
      id: t,
      style: "overflow:hidden;line-height:0px"
    };
    return n ? e.create("span", o, "&#xFEFF;") : e.create("span", o);
  },
      nl = function nl(e, t) {
    var n = e.dom;
    var o = e.getRng();
    var r = n.uniqueId(),
        s = e.isCollapsed(),
        a = e.getNode(),
        i = a.nodeName,
        l = e.isForward();
    if ("IMG" === i) return {
      name: i,
      index: Xi(n, i, a)
    };
    var d = Ji(o.cloneRange());

    if (!s) {
      d.collapse(!1);

      var _e43 = tl(n, r + "_end", t);

      Fi(n, d, _e43);
    }

    o = Ji(o), o.collapse(!0);
    var c = tl(n, r + "_start", t);
    return Fi(n, o, c), e.moveToBookmark({
      id: r,
      keep: !0,
      forward: l
    }), {
      id: r,
      forward: l
    };
  },
      ol = O(el, R, !0),
      rl = function rl(e) {
    var t = function t(_t48) {
      return _t48(e);
    },
        n = N(e),
        o = function o() {
      return r;
    },
        r = {
      tag: !0,
      inner: e,
      fold: function fold(t, n) {
        return n(e);
      },
      isValue: M,
      isError: L,
      map: function map(t) {
        return al.value(t(e));
      },
      mapError: o,
      bind: t,
      exists: t,
      forall: t,
      getOr: n,
      or: o,
      getOrThunk: n,
      orThunk: o,
      getOrDie: n,
      each: function each(t) {
        t(e);
      },
      toOptional: function toOptional() {
        return I.some(e);
      }
    };

    return r;
  },
      sl = function sl(e) {
    var t = function t() {
      return n;
    },
        n = {
      tag: !1,
      inner: e,
      fold: function fold(t, n) {
        return t(e);
      },
      isValue: L,
      isError: M,
      map: t,
      mapError: function mapError(t) {
        return al.error(t(e));
      },
      bind: t,
      exists: L,
      forall: M,
      getOr: R,
      or: R,
      getOrThunk: D,
      orThunk: D,
      getOrDie: B(String(e)),
      each: E,
      toOptional: I.none
    };

    return n;
  },
      al = {
    value: rl,
    error: sl,
    fromOption: function fromOption(e, t) {
      return e.fold(function () {
        return sl(t);
      }, rl);
    }
  },
      il = function il(e) {
    if (!p(e)) throw new Error("cases must be an array");
    if (0 === e.length) throw new Error("there must be at least one case");
    var t = [],
        n = {};
    return q(e, function (o, r) {
      var s = me(o);
      if (1 !== s.length) throw new Error("one and only one name per case");
      var a = s[0],
          i = o[a];
      if (void 0 !== n[a]) throw new Error("duplicate key detected:" + a);
      if ("cata" === a) throw new Error("cannot have a case named cata (sorry)");
      if (!p(i)) throw new Error("case arguments must be an array");
      t.push(a), n[a] = function () {
        for (var _len8 = arguments.length, n = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          n[_key8] = arguments[_key8];
        }

        var o = n.length;
        if (o !== i.length) throw new Error("Wrong number of arguments to case " + a + ". Expected " + i.length + " (" + i + "), got " + o);
        return {
          fold: function fold() {
            for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              t[_key9] = arguments[_key9];
            }

            if (t.length !== e.length) throw new Error("Wrong number of arguments to fold. Expected " + e.length + ", got " + t.length);
            return t[r].apply(null, n);
          },
          match: function match(e) {
            var o = me(e);
            if (t.length !== o.length) throw new Error("Wrong number of arguments to match. Expected: " + t.join(",") + "\nActual: " + o.join(","));
            if (!ne(t, function (e) {
              return H(o, e);
            })) throw new Error("Not all branches were specified when using match. Specified: " + o.join(", ") + "\nRequired: " + t.join(", "));
            return e[a].apply(null, n);
          },
          log: function log(e) {
            console.log(e, {
              constructors: t,
              constructor: a,
              params: n
            });
          }
        };
      };
    }), n;
  };

  il([{
    bothErrors: ["error1", "error2"]
  }, {
    firstError: ["error1", "value2"]
  }, {
    secondError: ["value1", "error2"]
  }, {
    bothValues: ["value1", "value2"]
  }]);

  var ll = function ll(e) {
    return "inline-command" === e.type || "inline-format" === e.type;
  },
      dl = function dl(e) {
    return "block-command" === e.type || "block-format" === e.type;
  },
      cl = function cl(e) {
    var t = function t(_t49) {
      return al.error({
        message: _t49,
        pattern: e
      });
    },
        n = function n(_n43, o, r) {
      if (void 0 !== e.format) {
        var _r26;

        if (p(e.format)) {
          if (!ne(e.format, m)) return t(_n43 + " pattern has non-string items in the `format` array");
          _r26 = e.format;
        } else {
          if (!m(e.format)) return t(_n43 + " pattern has non-string `format` parameter");
          _r26 = [e.format];
        }

        return al.value(o(_r26));
      }

      return void 0 !== e.cmd ? m(e.cmd) ? al.value(r(e.cmd, e.value)) : t(_n43 + " pattern has non-string `cmd` parameter") : t(_n43 + " pattern is missing both `format` and `cmd` parameters");
    };

    if (!f(e)) return t("Raw pattern is not an object");
    if (!m(e.start)) return t("Raw pattern is missing `start` parameter");

    if (void 0 !== e.end) {
      if (!m(e.end)) return t("Inline pattern has non-string `end` parameter");
      if (0 === e.start.length && 0 === e.end.length) return t("Inline pattern has empty `start` and `end` parameters");
      var _o42 = e.start,
          _r27 = e.end;
      return 0 === _r27.length && (_r27 = _o42, _o42 = ""), n("Inline", function (e) {
        return {
          type: "inline-format",
          start: _o42,
          end: _r27,
          format: e
        };
      }, function (e, t) {
        return {
          type: "inline-command",
          start: _o42,
          end: _r27,
          cmd: e,
          value: t
        };
      });
    }

    return void 0 !== e.replacement ? m(e.replacement) ? 0 === e.start.length ? t("Replacement pattern has empty `start` parameter") : al.value({
      type: "inline-command",
      start: "",
      end: e.start,
      cmd: "mceInsertContent",
      value: e.replacement
    }) : t("Replacement pattern has non-string `replacement` parameter") : 0 === e.start.length ? t("Block pattern has empty `start` parameter") : n("Block", function (t) {
      return {
        type: "block-format",
        start: e.start,
        format: t[0]
      };
    }, function (t, n) {
      return {
        type: "block-command",
        start: e.start,
        cmd: t,
        value: n
      };
    });
  },
      ul = function ul(e) {
    return G(e, dl);
  },
      ml = function ml(e) {
    return G(e, ll);
  },
      fl = function fl(e) {
    var t = function (e) {
      var t = [],
          n = [];
      return q(e, function (e) {
        e.fold(function (e) {
          t.push(e);
        }, function (e) {
          n.push(e);
        });
      }), {
        errors: t,
        values: n
      };
    }(V(e, cl));

    return q(t.errors, function (e) {
      return console.error(e.message, e.pattern);
    }), t.values;
  },
      gl = xt().deviceType,
      pl = gl.isTouch(),
      hl = Oa.DOM,
      bl = function bl(e) {
    return u(e, RegExp);
  },
      vl = function vl(e) {
    return function (t) {
      return t.options.get(e);
    };
  },
      yl = function yl(e) {
    return m(e) || f(e);
  },
      Cl = function Cl(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return function (n) {
      var o = m(n);

      if (o) {
        if (-1 !== n.indexOf("=")) {
          var _r28 = function (e) {
            var t = e.indexOf("=") > 0 ? e.split(/[;,](?![^=;,]*(?:[;,]|$))/) : e.split(",");
            return X(t, function (e, t) {
              var n = t.split("="),
                  o = n[0],
                  r = n.length > 1 ? n[1] : o;
              return e[qe(o)] = qe(r), e;
            }, {});
          }(n);

          return {
            value: xe(_r28, e.id).getOr(t),
            valid: o
          };
        }

        return {
          value: n,
          valid: o
        };
      }

      return {
        valid: !1,
        message: "Must be a string."
      };
    };
  },
      wl = vl("iframe_attrs"),
      xl = vl("doctype"),
      kl = vl("document_base_url"),
      El = vl("body_id"),
      Sl = vl("body_class"),
      _l = vl("content_security_policy"),
      Nl = vl("br_in_pre"),
      Rl = vl("forced_root_block"),
      Al = vl("forced_root_block_attrs"),
      Ol = vl("newline_behavior"),
      Tl = vl("br_newline_selector"),
      Bl = vl("no_newline_selector"),
      Dl = vl("keep_styles"),
      Pl = vl("end_container_on_empty_block"),
      Ll = vl("automatic_uploads"),
      Ml = vl("images_reuse_filename"),
      Il = vl("images_replace_blob_uris"),
      Fl = vl("icons"),
      Ul = vl("icons_url"),
      zl = vl("images_upload_url"),
      jl = vl("images_upload_base_path"),
      Hl = vl("images_upload_credentials"),
      $l = vl("images_upload_handler"),
      Vl = vl("content_css_cors"),
      ql = vl("referrer_policy"),
      Wl = vl("language"),
      Kl = vl("language_url"),
      Gl = vl("indent_use_margin"),
      Yl = vl("indentation"),
      Xl = vl("content_css"),
      Ql = vl("content_style"),
      Jl = vl("font_css"),
      Zl = vl("directionality"),
      ed = vl("inline_boundaries_selector"),
      td = vl("object_resizing"),
      nd = vl("resize_img_proportional"),
      od = vl("placeholder"),
      rd = vl("event_root"),
      sd = vl("service_message"),
      ad = vl("theme"),
      id = vl("theme_url"),
      ld = vl("model"),
      dd = vl("model_url"),
      cd = vl("inline_boundaries"),
      ud = vl("formats"),
      md = vl("preview_styles"),
      fd = vl("format_empty_lines"),
      gd = vl("format_noneditable_selector"),
      pd = vl("custom_ui_selector"),
      hd = vl("inline"),
      bd = vl("hidden_input"),
      vd = vl("submit_patch"),
      yd = vl("add_form_submit_trigger"),
      Cd = vl("add_unload_trigger"),
      wd = vl("custom_undo_redo_levels"),
      xd = vl("disable_nodechange"),
      kd = vl("readonly"),
      Ed = vl("editable_root"),
      Sd = vl("content_css_cors"),
      _d = vl("plugins"),
      Nd = vl("external_plugins"),
      Rd = vl("block_unsupported_drop"),
      Ad = vl("visual"),
      Od = vl("visual_table_class"),
      Td = vl("visual_anchor_class"),
      Bd = vl("iframe_aria_text"),
      Dd = vl("setup"),
      Pd = vl("init_instance_callback"),
      Ld = vl("urlconverter_callback"),
      Md = vl("auto_focus"),
      Id = vl("browser_spellcheck"),
      Fd = vl("protect"),
      Ud = vl("paste_block_drop"),
      zd = vl("paste_data_images"),
      jd = vl("paste_preprocess"),
      Hd = vl("paste_postprocess"),
      $d = vl("newdocument_content"),
      Vd = vl("paste_webkit_styles"),
      qd = vl("paste_remove_styles_if_webkit"),
      Wd = vl("paste_merge_formats"),
      Kd = vl("smart_paste"),
      Gd = vl("paste_as_text"),
      Yd = vl("paste_tab_spaces"),
      Xd = vl("allow_html_data_urls"),
      Qd = vl("text_patterns"),
      Jd = vl("text_patterns_lookup"),
      Zd = vl("noneditable_class"),
      ec = vl("editable_class"),
      tc = vl("noneditable_regexp"),
      nc = vl("preserve_cdata"),
      oc = vl("highlight_on_focus"),
      rc = vl("xss_sanitization"),
      sc = vl("init_content_sync"),
      ac = function ac(e) {
    return Dt.explode(e.options.get("images_file_types"));
  },
      ic = vl("table_tab_navigation"),
      lc = vl("details_initial_state"),
      dc = vl("details_serialized_state"),
      cc = jo,
      uc = Xo,
      mc = function mc(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  },
      fc = function fc(e) {
    var t = Mr(e);
    return {
      count: e.length - t.length,
      text: t
    };
  },
      gc = function gc(e) {
    var t;

    for (; -1 !== (t = e.data.lastIndexOf(Pr));) {
      e.deleteData(t, 1);
    }
  },
      pc = function pc(e, t) {
    return bc(e), t;
  },
      hc = function hc(e, t) {
    return Mi.isTextPosition(t) ? function (e, t) {
      return uc(e) && t.container() === e ? function (e, t) {
        var n = fc(e.data.substr(0, t.offset())),
            o = fc(e.data.substr(t.offset()));
        return (n.text + o.text).length > 0 ? (gc(e), Mi(e, t.offset() - n.count)) : t;
      }(e, t) : pc(e, t);
    }(e, t) : function (e, t) {
      return t.container() === e.parentNode ? function (e, t) {
        var n = t.container(),
            o = function (e, t) {
          var n = j(e, t);
          return -1 === n ? I.none() : I.some(n);
        }(ce(n.childNodes), e).map(function (e) {
          return e < t.offset() ? Mi(n, t.offset() - 1) : t;
        }).getOr(t);

        return bc(e), o;
      }(e, t) : pc(e, t);
    }(e, t);
  },
      bc = function bc(e) {
    cc(e) && jr(e) && (Hr(e) ? e.removeAttribute("data-mce-caret") : mc(e)), uc(e) && (gc(e), 0 === e.data.length && mc(e));
  },
      vc = sr,
      yc = lr,
      Cc = ar,
      wc = function wc(e, t, n) {
    var o = ci(t.getBoundingClientRect(), n);
    var r, s;

    if ("BODY" === e.tagName) {
      var _t50 = e.ownerDocument.documentElement;
      r = e.scrollLeft || _t50.scrollLeft, s = e.scrollTop || _t50.scrollTop;
    } else {
      var _t51 = e.getBoundingClientRect();

      r = e.scrollLeft - _t51.left, s = e.scrollTop - _t51.top;
    }

    o.left += r, o.right += r, o.top += s, o.bottom += s, o.width = 1;
    var a = t.offsetWidth - t.clientWidth;
    return a > 0 && (n && (a *= -1), o.left += a, o.right += a), o;
  },
      xc = function xc(e, t, n, o) {
    var r = za();
    var s, a;

    var i = Rl(e),
        l = e.dom,
        d = function d() {
      (function (e) {
        var t, n;
        var o = Mo(vn(e), "*[contentEditable=false],video,audio,embed,object");

        for (var _e44 = 0; _e44 < o.length; _e44++) {
          var _r29 = o[_e44].dom;
          var _s14 = _r29.previousSibling;

          if (Wr(_s14)) {
            var _e45 = _s14.data;
            1 === _e45.length ? null === (t = _s14.parentNode) || void 0 === t || t.removeChild(_s14) : _s14.deleteData(_e45.length - 1, 1);
          }

          _s14 = _r29.nextSibling, qr(_s14) && (1 === _s14.data.length ? null === (n = _s14.parentNode) || void 0 === n || n.removeChild(_s14) : _s14.deleteData(0, 1));
        }
      })(t), a && (bc(a), a = null), r.on(function (e) {
        l.remove(e.caret), r.clear();
      }), s && (clearInterval(s), s = void 0);
    };

    return {
      show: function show(e, c) {
        var u;
        if (d(), Cc(c)) return null;
        if (!n(c)) return a = function (e, t) {
          var n;
          var o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(Pr),
              r = e.parentNode;

          if (t) {
            var _t52 = e.previousSibling;

            if (Fr(_t52)) {
              if (jr(_t52)) return _t52;
              if (Wr(_t52)) return _t52.splitText(_t52.data.length - 1);
            }

            null == r || r.insertBefore(o, e);
          } else {
            var _t53 = e.nextSibling;

            if (Fr(_t53)) {
              if (jr(_t53)) return _t53;
              if (qr(_t53)) return _t53.splitText(1), _t53;
            }

            e.nextSibling ? null == r || r.insertBefore(o, e.nextSibling) : null == r || r.appendChild(o);
          }

          return o;
        }(c, e), u = c.ownerDocument.createRange(), Ec(a.nextSibling) ? (u.setStart(a, 0), u.setEnd(a, 0)) : (u.setStart(a, 1), u.setEnd(a, 1)), u;
        {
          var _n44 = function (e, t, n) {
            var o;
            var r = (null !== (o = t.ownerDocument) && void 0 !== o ? o : document).createElement(e);
            r.setAttribute("data-mce-caret", n ? "before" : "after"), r.setAttribute("data-mce-bogus", "all"), r.appendChild(Tr().dom);
            var s = t.parentNode;
            return n ? null == s || s.insertBefore(r, t) : t.nextSibling ? null == s || s.insertBefore(r, t.nextSibling) : null == s || s.appendChild(r), r;
          }(i, c, e),
              _d6 = wc(t, c, e);

          l.setStyle(_n44, "top", _d6.top), a = _n44;

          var _m3 = l.create("div", {
            "class": "mce-visual-caret",
            "data-mce-bogus": "all"
          });

          l.setStyles(_m3, _objectSpread({}, _d6)), l.add(t, _m3), r.set({
            caret: _m3,
            element: c,
            before: e
          }), e && l.addClass(_m3, "mce-visual-caret-before"), s = setInterval(function () {
            r.on(function (e) {
              o() ? l.toggleClass(e.caret, "mce-visual-caret-hidden") : l.addClass(e.caret, "mce-visual-caret-hidden");
            });
          }, 500), u = c.ownerDocument.createRange(), u.setStart(_n44, 0), u.setEnd(_n44, 0);
        }
        return u;
      },
      hide: d,
      getCss: function getCss() {
        return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
      },
      reposition: function reposition() {
        r.on(function (e) {
          var n = wc(t, e.element, e.before);
          l.setStyles(e.caret, _objectSpread({}, n));
        });
      },
      destroy: function destroy() {
        return clearInterval(s);
      }
    };
  },
      kc = function kc() {
    return At.browser.isFirefox();
  },
      Ec = function Ec(e) {
    return vc(e) || yc(e);
  },
      Sc = function Sc(e) {
    return (Ec(e) || Ko(e) && kc()) && An(vn(e)).exists(to);
  },
      _c = rr,
      Nc = sr,
      Rc = lr,
      Ac = Vo("display", "block table table-cell table-caption list-item"),
      Oc = jr,
      Tc = Ur,
      Bc = jo,
      Dc = Xo,
      Pc = os,
      Lc = function Lc(e) {
    return e > 0;
  },
      Mc = function Mc(e) {
    return e < 0;
  },
      Ic = function Ic(e, t) {
    var n;

    for (; n = e(t);) {
      if (!Tc(n)) return n;
    }

    return null;
  },
      Fc = function Fc(e, t, n, o, r) {
    var s = new Fo(e, o),
        a = Nc(e) || Tc(e);
    var i;

    if (Mc(t)) {
      if (a && (i = Ic(s.prev.bind(s), !0), n(i))) return i;

      for (; i = Ic(s.prev.bind(s), r);) {
        if (n(i)) return i;
      }
    }

    if (Lc(t)) {
      if (a && (i = Ic(s.next.bind(s), !0), n(i))) return i;

      for (; i = Ic(s.next.bind(s), r);) {
        if (n(i)) return i;
      }
    }

    return null;
  },
      Uc = function Uc(e, t) {
    for (; e && e !== t;) {
      if (Ac(e)) return e;
      e = e.parentNode;
    }

    return null;
  },
      zc = function zc(e, t, n) {
    return Uc(e.container(), n) === Uc(t.container(), n);
  },
      jc = function jc(e, t) {
    if (!t) return I.none();
    var n = t.container(),
        o = t.offset();
    return Bc(n) ? I.from(n.childNodes[o + e]) : I.none();
  },
      Hc = function Hc(e, t) {
    var n;
    var o = (null !== (n = t.ownerDocument) && void 0 !== n ? n : document).createRange();
    return e ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), o;
  },
      $c = function $c(e, t, n) {
    return Uc(t, e) === Uc(n, e);
  },
      Vc = function Vc(e, t, n) {
    var o = e ? "previousSibling" : "nextSibling";
    var r = n;

    for (; r && r !== t;) {
      var _e46 = r[o];

      if (_e46 && Oc(_e46) && (_e46 = _e46[o]), Nc(_e46) || Rc(_e46)) {
        if ($c(t, _e46, r)) return _e46;
        break;
      }

      if (Pc(_e46)) break;
      r = r.parentNode;
    }

    return null;
  },
      qc = O(Hc, !0),
      Wc = O(Hc, !1),
      Kc = function Kc(e, t, n) {
    var o;
    var r = O(Vc, !0, t),
        s = O(Vc, !1, t),
        a = n.startContainer,
        i = n.startOffset;

    if (Ur(a)) {
      var _e47 = Dc(a) ? a.parentNode : a,
          _t54 = _e47.getAttribute("data-mce-caret");

      if ("before" === _t54 && (o = _e47.nextSibling, Sc(o))) return qc(o);
      if ("after" === _t54 && (o = _e47.previousSibling, Sc(o))) return Wc(o);
    }

    if (!n.collapsed) return n;

    if (Xo(a)) {
      if (Oc(a)) {
        if (1 === e) {
          if (o = s(a), o) return qc(o);
          if (o = r(a), o) return Wc(o);
        }

        if (-1 === e) {
          if (o = r(a), o) return Wc(o);
          if (o = s(a), o) return qc(o);
        }

        return n;
      }

      if (Wr(a) && i >= a.data.length - 1) return 1 === e && (o = s(a), o) ? qc(o) : n;
      if (qr(a) && i <= 1) return -1 === e && (o = r(a), o) ? Wc(o) : n;
      if (i === a.data.length) return o = s(a), o ? qc(o) : n;
      if (0 === i) return o = r(a), o ? Wc(o) : n;
    }

    return n;
  },
      Gc = function Gc(e, t) {
    return jc(e ? 0 : -1, t).filter(Nc);
  },
      Yc = function Yc(e, t, n) {
    var o = Kc(e, t, n);
    return -1 === e ? Mi.fromRangeStart(o) : Mi.fromRangeEnd(o);
  },
      Xc = function Xc(e) {
    return I.from(e.getNode()).map(vn);
  },
      Qc = function Qc(e, t) {
    var n = t;

    for (; n = e(n);) {
      if (n.isVisible()) return n;
    }

    return n;
  },
      Jc = function Jc(e, t) {
    var n = zc(e, t);
    return !(n || !nr(e.getNode())) || n;
  };

  var Zc;
  !function (e) {
    e[e.Backwards = -1] = "Backwards", e[e.Forwards = 1] = "Forwards";
  }(Zc || (Zc = {}));

  var eu = sr,
      tu = Xo,
      nu = jo,
      ou = nr,
      ru = os,
      su = function su(e) {
    return es(e) || function (e) {
      return !!rs(e) && !X(ce(e.getElementsByTagName("*")), function (e, t) {
        return e || Yr(t);
      }, !1);
    }(e);
  },
      au = ss,
      iu = function iu(e, t) {
    return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null;
  },
      lu = function lu(e, t) {
    if (Lc(e)) {
      if (ru(t.previousSibling) && !tu(t.previousSibling)) return Mi.before(t);
      if (tu(t)) return Mi(t, 0);
    }

    if (Mc(e)) {
      if (ru(t.nextSibling) && !tu(t.nextSibling)) return Mi.after(t);
      if (tu(t)) return Mi(t, t.data.length);
    }

    return Mc(e) ? ou(t) ? Mi.before(t) : Mi.after(t) : Mi.before(t);
  },
      du = function du(e, t, n) {
    var o, r, s, a;
    if (!nu(n) || !t) return null;

    if (t.isEqual(Mi.after(n)) && n.lastChild) {
      if (a = Mi.after(n.lastChild), Mc(e) && ru(n.lastChild) && nu(n.lastChild)) return ou(n.lastChild) ? Mi.before(n.lastChild) : a;
    } else a = t;

    var i = a.container();
    var l = a.offset();

    if (tu(i)) {
      if (Mc(e) && l > 0) return Mi(i, --l);
      if (Lc(e) && l < i.length) return Mi(i, ++l);
      o = i;
    } else {
      if (Mc(e) && l > 0 && (r = iu(i, l - 1), ru(r))) return !su(r) && (s = Fc(r, e, au, r), s) ? tu(s) ? Mi(s, s.data.length) : Mi.after(s) : tu(r) ? Mi(r, r.data.length) : Mi.before(r);
      if (Lc(e) && l < i.childNodes.length && (r = iu(i, l), ru(r))) return ou(r) ? function (e, t) {
        var n = t.nextSibling;
        return n && ru(n) ? tu(n) ? Mi(n, 0) : Mi.before(n) : du(Zc.Forwards, Mi.after(t), e);
      }(n, r) : !su(r) && (s = Fc(r, e, au, r), s) ? tu(s) ? Mi(s, 0) : Mi.before(s) : tu(r) ? Mi(r, 0) : Mi.after(r);
      o = r || a.getNode();
    }

    if (o && (Lc(e) && a.isAtEnd() || Mc(e) && a.isAtStart()) && (o = Fc(o, e, M, n, !0), au(o, n))) return lu(e, o);
    r = o ? Fc(o, e, au, n) : o;
    var d = De(G(function (e, t) {
      var n = [];
      var o = e;

      for (; o && o !== t;) {
        n.push(o), o = o.parentNode;
      }

      return n;
    }(i, n), eu));
    return !d || r && d.contains(r) ? r ? lu(e, r) : null : (a = Lc(e) ? Mi.after(d) : Mi.before(d), a);
  },
      cu = function cu(e) {
    return {
      next: function next(t) {
        return du(Zc.Forwards, t, e);
      },
      prev: function prev(t) {
        return du(Zc.Backwards, t, e);
      }
    };
  },
      uu = function uu(e) {
    return Mi.isTextPosition(e) ? 0 === e.offset() : os(e.getNode());
  },
      mu = function mu(e) {
    if (Mi.isTextPosition(e)) {
      var _t55 = e.container();

      return e.offset() === _t55.data.length;
    }

    return os(e.getNode(!0));
  },
      fu = function fu(e, t) {
    return !Mi.isTextPosition(e) && !Mi.isTextPosition(t) && e.getNode() === t.getNode(!0);
  },
      gu = function gu(e, t, n) {
    var o = cu(t);
    return I.from(e ? o.next(n) : o.prev(n));
  },
      pu = function pu(e, t, n) {
    return gu(e, t, n).bind(function (o) {
      return zc(n, o, t) && function (e, t, n) {
        return e ? !fu(t, n) && (o = t, !(!Mi.isTextPosition(o) && nr(o.getNode()))) && mu(t) && uu(n) : !fu(n, t) && uu(t) && mu(n);
        var o;
      }(e, n, o) ? gu(e, t, o) : I.some(o);
    });
  },
      hu = function hu(e, t, n, o) {
    return pu(e, t, n).bind(function (n) {
      return o(n) ? hu(e, t, n, o) : I.some(n);
    });
  },
      bu = function bu(e, t) {
    var n = e ? t.firstChild : t.lastChild;
    return Xo(n) ? I.some(Mi(n, e ? 0 : n.data.length)) : n ? os(n) ? I.some(e ? Mi.before(n) : nr(o = n) ? Mi.before(o) : Mi.after(o)) : function (e, t, n) {
      var o = e ? Mi.before(n) : Mi.after(n);
      return gu(e, t, o);
    }(e, t, n) : I.none();
    var o;
  },
      vu = O(gu, !0),
      yu = O(gu, !1),
      Cu = O(bu, !0),
      wu = O(bu, !1),
      xu = "_mce_caret",
      ku = function ku(e) {
    return jo(e) && e.id === xu;
  },
      Eu = function Eu(e, t) {
    var n = t;

    for (; n && n !== e;) {
      if (ku(n)) return n;
      n = n.parentNode;
    }

    return null;
  },
      Su = function Su(e) {
    return ke(e, "name");
  },
      _u = function _u(e) {
    return Dt.isArray(e.start);
  },
      Nu = function Nu(e) {
    return !(!Su(e) && b(e.forward)) || e.forward;
  },
      Ru = function Ru(e, t) {
    return jo(t) && e.isBlock(t) && !t.innerHTML && (t.innerHTML = '<br data-mce-bogus="1" />'), t;
  },
      Au = function Au(e, t) {
    return wu(e).fold(L, function (e) {
      return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0;
    });
  },
      Ou = function Ou(e, t, n) {
    return !(!function (e) {
      return !e.hasChildNodes();
    }(t) || !Eu(e, t) || (function (e, t) {
      var n;
      var o = (null !== (n = e.ownerDocument) && void 0 !== n ? n : document).createTextNode(Pr);
      e.appendChild(o), t.setStart(o, 0), t.setEnd(o, 0);
    }(t, n), 0));
  },
      Tu = function Tu(e, t, n, o) {
    var r = n[t ? "start" : "end"],
        s = e.getRoot();

    if (r) {
      var _e48 = s,
          _n45 = r[0];

      for (var _t56 = r.length - 1; _e48 && _t56 >= 1; _t56--) {
        var _n46 = _e48.childNodes;
        if (Ou(s, _e48, o)) return !0;
        if (r[_t56] > _n46.length - 1) return !!Ou(s, _e48, o) || Au(_e48, o);
        _e48 = _n46[r[_t56]];
      }

      Xo(_e48) && (_n45 = Math.min(r[0], _e48.data.length)), jo(_e48) && (_n45 = Math.min(r[0], _e48.childNodes.length)), t ? o.setStart(_e48, _n45) : o.setEnd(_e48, _n45);
    }

    return !0;
  },
      Bu = function Bu(e) {
    return Xo(e) && e.data.length > 0;
  },
      Du = function Du(e, t, n) {
    var o = e.get(n.id + "_" + t),
        r = null == o ? void 0 : o.parentNode,
        s = n.keep;

    if (o && r) {
      var _a11, _i7;

      if ("start" === t ? s ? o.hasChildNodes() ? (_a11 = o.firstChild, _i7 = 1) : Bu(o.nextSibling) ? (_a11 = o.nextSibling, _i7 = 0) : Bu(o.previousSibling) ? (_a11 = o.previousSibling, _i7 = o.previousSibling.data.length) : (_a11 = r, _i7 = e.nodeIndex(o) + 1) : (_a11 = r, _i7 = e.nodeIndex(o)) : s ? o.hasChildNodes() ? (_a11 = o.firstChild, _i7 = 1) : Bu(o.previousSibling) ? (_a11 = o.previousSibling, _i7 = o.previousSibling.data.length) : (_a11 = r, _i7 = e.nodeIndex(o)) : (_a11 = r, _i7 = e.nodeIndex(o)), !s) {
        var _r30 = o.previousSibling,
            _s15 = o.nextSibling;

        var _l3;

        for (Dt.each(Dt.grep(o.childNodes), function (e) {
          Xo(e) && (e.data = e.data.replace(/\uFEFF/g, ""));
        }); _l3 = e.get(n.id + "_" + t);) {
          e.remove(_l3, !0);
        }

        if (Xo(_s15) && Xo(_r30) && !At.browser.isOpera()) {
          var _t57 = _r30.data.length;
          _r30.appendData(_s15.data), e.remove(_s15), _a11 = _r30, _i7 = _t57;
        }
      }

      return I.some(Mi(_a11, _i7));
    }

    return I.none();
  },
      Pu = function Pu(e, t, n) {
    return function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
      return 2 === t ? el(Mr, n, e) : 3 === t ? function (e) {
        var t = e.getRng();
        return {
          start: Wi(e.dom.getRoot(), Mi.fromRangeStart(t)),
          end: Wi(e.dom.getRoot(), Mi.fromRangeEnd(t)),
          forward: e.isForward()
        };
      }(e) : t ? function (e) {
        return {
          rng: e.getRng(),
          forward: e.isForward()
        };
      }(e) : nl(e, !1);
    }(e, t, n);
  },
      Lu = function Lu(e, t) {
    (function (e, t) {
      var n = e.dom;

      if (t) {
        if (_u(t)) return function (e, t) {
          var n = e.createRng();
          return Tu(e, !0, t, n) && Tu(e, !1, t, n) ? I.some({
            range: n,
            forward: Nu(t)
          }) : I.none();
        }(n, t);
        if (function (e) {
          return m(e.start);
        }(t)) return function (e, t) {
          var n = I.from(Ki(e.getRoot(), t.start)),
              o = I.from(Ki(e.getRoot(), t.end));
          return Lt(n, o, function (n, o) {
            var r = e.createRng();
            return r.setStart(n.container(), n.offset()), r.setEnd(o.container(), o.offset()), {
              range: r,
              forward: Nu(t)
            };
          });
        }(n, t);
        if (function (e) {
          return ke(e, "id");
        }(t)) return function (e, t) {
          var n = Du(e, "start", t),
              o = Du(e, "end", t);
          return Lt(n, o.or(n), function (n, o) {
            var r = e.createRng();
            return r.setStart(Ru(e, n.container()), n.offset()), r.setEnd(Ru(e, o.container()), o.offset()), {
              range: r,
              forward: Nu(t)
            };
          });
        }(n, t);
        if (Su(t)) return function (e, t) {
          return I.from(e.select(t.name)[t.index]).map(function (t) {
            var n = e.createRng();
            return n.selectNode(t), {
              range: n,
              forward: !0
            };
          });
        }(n, t);
        if (function (e) {
          return ke(e, "rng");
        }(t)) return I.some({
          range: t.rng,
          forward: Nu(t)
        });
      }

      return I.none();
    })(e, t).each(function (_ref2) {
      var t = _ref2.range,
          n = _ref2.forward;
      e.setRng(t, n);
    });
  },
      Mu = function Mu(e) {
    return jo(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type");
  },
      Iu = (Fu = fr, function (e) {
    return Fu === e;
  });

  var Fu;

  var Uu = function Uu(e) {
    return "" !== e && -1 !== " \f\n\r\t\v".indexOf(e);
  },
      zu = function zu(e) {
    return !Uu(e) && !Iu(e) && !gr(e);
  },
      ju = function ju(e) {
    var t = e.toString(16);
    return (1 === t.length ? "0" + t : t).toUpperCase();
  },
      Hu = function Hu(e) {
    return function (e) {
      return {
        value: (t = e, ze(t, "#").toUpperCase())
      };
      var t;
    }(ju(e.red) + ju(e.green) + ju(e.blue));
  },
      $u = /^\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i,
      Vu = /^\s*rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d?(?:\.\d+)?)\s*\)\s*$/i,
      qu = function qu(e, t, n, o) {
    return {
      red: e,
      green: t,
      blue: n,
      alpha: o
    };
  },
      Wu = function Wu(e, t, n, o) {
    var r = parseInt(e, 10),
        s = parseInt(t, 10),
        a = parseInt(n, 10),
        i = parseFloat(o);
    return qu(r, s, a, i);
  },
      Ku = function Ku(e) {
    return function (e) {
      if ("transparent" === e) return I.some(qu(0, 0, 0, 0));
      var t = $u.exec(e);
      if (null !== t) return I.some(Wu(t[1], t[2], t[3], "1"));
      var n = Vu.exec(e);
      return null !== n ? I.some(Wu(n[1], n[2], n[3], n[4])) : I.none();
    }(e).map(Hu).map(function (e) {
      return "#" + e.value;
    }).getOr(e);
  },
      Gu = function Gu(e) {
    var t = [];
    if (e) for (var _n47 = 0; _n47 < e.rangeCount; _n47++) {
      t.push(e.getRangeAt(_n47));
    }
    return t;
  },
      Yu = function Yu(e, t) {
    var n = Mo(t, "td[data-mce-selected],th[data-mce-selected]");
    return n.length > 0 ? n : function (e) {
      return G(function (e) {
        return te(e, function (e) {
          var t = pi(e);
          return t ? [vn(t)] : [];
        });
      }(e), Nr);
    }(e);
  },
      Xu = function Xu(e) {
    return Yu(Gu(e.selection.getSel()), vn(e.getBody()));
  },
      Qu = function Qu(e, t) {
    return Jn(e, "table", t);
  },
      Ju = function Ju(e) {
    return In(e).fold(N([e]), function (t) {
      return [e].concat(Ju(t));
    });
  },
      Zu = function Zu(e) {
    return Fn(e).fold(N([e]), function (t) {
      return "br" === jt(t) ? Tn(t).map(function (t) {
        return [e].concat(Zu(t));
      }).getOr([]) : [e].concat(Zu(t));
    });
  },
      em = function em(e, t) {
    return Lt(function (e) {
      var t = e.startContainer,
          n = e.startOffset;
      return Xo(t) ? 0 === n ? I.some(vn(t)) : I.none() : I.from(t.childNodes[n]).map(vn);
    }(t), function (e) {
      var t = e.endContainer,
          n = e.endOffset;
      return Xo(t) ? n === t.data.length ? I.some(vn(t)) : I.none() : I.from(t.childNodes[n - 1]).map(vn);
    }(t), function (t, n) {
      var o = J(Ju(e), O(kn, t)),
          r = J(Zu(e), O(kn, n));
      return o.isSome() && r.isSome();
    }).getOr(!1);
  },
      tm = function tm(e, t, n, o) {
    var r = n,
        s = new Fo(n, r),
        a = ye(e.schema.getMoveCaretBeforeOnEnterElements(), function (e, t) {
      return !H(["td", "th", "table"], t.toLowerCase());
    });
    var i = n;

    do {
      if (Xo(i) && 0 !== Dt.trim(i.data).length) return void (o ? t.setStart(i, 0) : t.setEnd(i, i.data.length));
      if (a[i.nodeName]) return void (o ? t.setStartBefore(i) : "BR" === i.nodeName ? t.setEndBefore(i) : t.setEndAfter(i));
    } while (i = o ? s.next() : s.prev());

    "BODY" === r.nodeName && (o ? t.setStart(r, 0) : t.setEnd(r, r.childNodes.length));
  },
      nm = function nm(e) {
    var t = e.selection.getSel();
    return C(t) && t.rangeCount > 0;
  },
      om = function om(e, t) {
    var n = Xu(e);
    n.length > 0 ? q(n, function (n) {
      var o = n.dom,
          r = e.dom.createRng();
      r.setStartBefore(o), r.setEndAfter(o), t(r, !0);
    }) : t(e.selection.getRng(), !1);
  },
      rm = function rm(e, t, n) {
    var o = nl(e, t);
    n(o), e.moveToBookmark(o);
  },
      sm = function sm(e) {
    return x(null == e ? void 0 : e.nodeType);
  },
      am = function am(e) {
    return jo(e) && !Mu(e) && !ku(e) && !Wo(e);
  },
      im = function im(e) {
    return !0 === e.isContentEditable;
  },
      lm = function lm(e, t, n) {
    var o = e.selection,
        r = e.dom,
        s = o.getNode(),
        a = sr(s);
    rm(o, !0, function () {
      t();
    }), a && sr(s) && r.isChildOf(s, e.getBody()) ? e.selection.select(s) : n(o.getStart()) && dm(r, o);
  },
      dm = function dm(e, t) {
    var n, o;
    var r = t.getRng(),
        s = r.startContainer,
        a = r.startOffset;

    if (!function (e, t) {
      if (am(t) && !/^(TD|TH)$/.test(t.nodeName)) {
        var _n48 = e.getAttrib(t, "data-mce-selected"),
            _o43 = parseInt(_n48, 10);

        return !isNaN(_o43) && _o43 > 0;
      }

      return !1;
    }(e, t.getNode()) && jo(s)) {
      var _i8 = s.childNodes,
          _l4 = e.getRoot();

      var _d7;

      if (a < _i8.length) {
        var _t58 = _i8[a];
        _d7 = new Fo(_t58, null !== (n = e.getParent(_t58, e.isBlock)) && void 0 !== n ? n : _l4);
      } else {
        var _t59 = _i8[_i8.length - 1];
        _d7 = new Fo(_t59, null !== (o = e.getParent(_t59, e.isBlock)) && void 0 !== o ? o : _l4), _d7.next(!0);
      }

      for (var _n49 = _d7.current(); _n49; _n49 = _d7.next()) {
        if ("false" === e.getContentEditable(_n49)) return;
        if (Xo(_n49) && !fm(_n49)) return r.setStart(_n49, 0), void t.setRng(r);
      }
    }
  },
      cm = function cm(e, t, n) {
    if (e) {
      var _o44 = t ? "nextSibling" : "previousSibling";

      for (e = n ? e : e[_o44]; e; e = e[_o44]) {
        if (jo(e) || !fm(e)) return e;
      }
    }
  },
      um = function um(e, t) {
    return !!e.getTextBlockElements()[t.nodeName.toLowerCase()] || Ns(e, t);
  },
      mm = function mm(e, t, n) {
    return e.schema.isValidChild(t, n);
  },
      fm = function fm(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

    if (C(e) && Xo(e)) {
      var _n50 = t ? e.data.replace(/ /g, "\xa0") : e.data;

      return is(_n50);
    }

    return !1;
  },
      gm = function gm(e, t) {
    var n = e.dom;
    return am(t) && "false" === n.getContentEditable(t) && function (e, t) {
      var n = "[data-mce-cef-wrappable]",
          o = gd(e),
          r = Ye(o) ? n : "".concat(n, ",").concat(o);
      return wn(vn(t), r);
    }(e, t) && 0 === n.select('[contenteditable="true"]', t).length;
  },
      pm = function pm(e, t) {
    return w(e) ? e(t) : (C(t) && (e = e.replace(/%(\w+)/g, function (e, n) {
      return t[n] || e;
    })), e);
  },
      hm = function hm(e, t) {
    return t = t || "", e = "" + ((e = e || "").nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() === t.toLowerCase();
  },
      bm = function bm(e, t) {
    if (y(e)) return null;
    {
      var _n51 = String(e);

      return "color" !== t && "backgroundColor" !== t || (_n51 = Ku(_n51)), "fontWeight" === t && 700 === e && (_n51 = "bold"), "fontFamily" === t && (_n51 = _n51.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), _n51;
    }
  },
      vm = function vm(e, t, n) {
    var o = e.getStyle(t, n);
    return bm(o, n);
  },
      ym = function ym(e, t) {
    var n;
    return e.getParent(t, function (t) {
      return !!jo(t) && (n = e.getStyle(t, "text-decoration"), !!n && "none" !== n);
    }), n;
  },
      Cm = function Cm(e, t, n) {
    return e.getParents(t, n, e.getRoot());
  },
      wm = function wm(e, t, n) {
    var o = e.formatter.get(t);
    return C(o) && $(o, n);
  },
      xm = function xm(e) {
    return Ee(e, "block");
  },
      km = function km(e) {
    return Ee(e, "selector");
  },
      Em = function Em(e) {
    return Ee(e, "inline");
  },
      Sm = function Sm(e) {
    return km(e) && !1 !== e.expand && !Em(e);
  },
      _m = Mu,
      Nm = Cm,
      Rm = fm,
      Am = um,
      Om = function Om(e, t) {
    var n = t;

    for (; n;) {
      if (jo(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
      n = n.parentNode;
    }

    return t;
  },
      Tm = function Tm(e, t, n, o) {
    var r = t.data;

    if (e) {
      for (var _e49 = n; _e49 > 0; _e49--) {
        if (o(r.charAt(_e49 - 1))) return _e49;
      }
    } else for (var _e50 = n; _e50 < r.length; _e50++) {
      if (o(r.charAt(_e50))) return _e50;
    }

    return -1;
  },
      Bm = function Bm(e, t, n) {
    return Tm(e, t, n, function (e) {
      return Iu(e) || Uu(e);
    });
  },
      Dm = function Dm(e, t, n) {
    return Tm(e, t, n, zu);
  },
      Pm = function Pm(e, t, n, o, r, s) {
    var a;

    var i = e.getParent(n, e.isBlock) || t,
        l = function l(t, n, o) {
      var s = ii(e),
          l = r ? s.backwards : s.forwards;
      return I.from(l(t, n, function (e, t) {
        return _m(e.parentNode) ? -1 : (a = e, o(r, e, t));
      }, i));
    };

    return l(n, o, Bm).bind(function (e) {
      return s ? l(e.container, e.offset + (r ? -1 : 0), Dm) : I.some(e);
    }).orThunk(function () {
      return a ? I.some({
        container: a,
        offset: r ? 0 : a.length
      }) : I.none();
    });
  },
      Lm = function Lm(e, t, n, o, r) {
    var s = o[r];
    Xo(o) && Ye(o.data) && s && (o = s);
    var a = Nm(e, o);

    for (var _o45 = 0; _o45 < a.length; _o45++) {
      for (var _r31 = 0; _r31 < t.length; _r31++) {
        var _s16 = t[_r31];
        if ((!C(_s16.collapsed) || _s16.collapsed === n.collapsed) && km(_s16) && e.is(a[_o45], _s16.selector)) return a[_o45];
      }
    }

    return o;
  },
      Mm = function Mm(e, t, n, o) {
    var r;
    var s = n;
    var a = e.getRoot(),
        i = t[0];

    if (xm(i) && (s = i.wrapper ? null : e.getParent(n, i.block, a)), !s) {
      var _t60 = null !== (r = e.getParent(n, "LI,TD,TH")) && void 0 !== r ? r : a;

      s = e.getParent(Xo(n) ? n.parentNode : n, function (t) {
        return t !== a && Am(e.schema, t);
      }, _t60);
    }

    if (s && xm(i) && i.wrapper && (s = Nm(e, s, "ul,ol").reverse()[0] || s), !s) for (s = n; s && s[o] && !e.isBlock(s[o]) && (s = s[o], !hm(s, "br"));) {
      ;
    }
    return s || n;
  },
      Im = function Im(e, t, n, o) {
    var r = n.parentNode;
    return !C(n[o]) && (!(r !== t && !y(r) && !e.isBlock(r)) || Im(e, t, r, o));
  },
      Fm = function Fm(e, t, n, o, r) {
    var s = n;
    var a = r ? "previousSibling" : "nextSibling",
        i = e.getRoot();
    if (Xo(n) && !Rm(n) && (r ? o > 0 : o < n.data.length)) return n;

    for (; s;) {
      if (!t[0].block_expand && e.isBlock(s)) return s;

      for (var _t61 = s[a]; _t61; _t61 = _t61[a]) {
        var _n52 = Xo(_t61) && !Im(e, i, _t61, a);

        if (!_m(_t61) && (!nr(l = _t61) || !l.getAttribute("data-mce-bogus") || l.nextSibling) && !Rm(_t61, _n52)) return s;
      }

      if (s === i || s.parentNode === i) {
        n = s;
        break;
      }

      s = s.parentNode;
    }

    var l;
    return n;
  },
      Um = function Um(e) {
    return _m(e.parentNode) || _m(e);
  },
      zm = function zm(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
    var r = t.startContainer,
        s = t.startOffset,
        a = t.endContainer,
        i = t.endOffset;
    var l = n[0];
    return jo(r) && r.hasChildNodes() && (r = hi(r, s), Xo(r) && (s = 0)), jo(a) && a.hasChildNodes() && (a = hi(a, t.collapsed ? i : i - 1), Xo(a) && (i = a.data.length)), r = Om(e, r), a = Om(e, a), Um(r) && (r = _m(r) ? r : r.parentNode, r = t.collapsed ? r.previousSibling || r : r.nextSibling || r, Xo(r) && (s = t.collapsed ? r.length : 0)), Um(a) && (a = _m(a) ? a : a.parentNode, a = t.collapsed ? a.nextSibling || a : a.previousSibling || a, Xo(a) && (i = t.collapsed ? 0 : a.length)), t.collapsed && (Pm(e, e.getRoot(), r, s, !0, o).each(function (_ref3) {
      var e = _ref3.container,
          t = _ref3.offset;
      r = e, s = t;
    }), Pm(e, e.getRoot(), a, i, !1, o).each(function (_ref4) {
      var e = _ref4.container,
          t = _ref4.offset;
      a = e, i = t;
    })), (Em(l) || l.block_expand) && (Em(l) && Xo(r) && 0 !== s || (r = Fm(e, n, r, s, !0)), Em(l) && Xo(a) && i !== a.data.length || (a = Fm(e, n, a, i, !1))), Sm(l) && (r = Lm(e, n, t, r, "previousSibling"), a = Lm(e, n, t, a, "nextSibling")), (xm(l) || km(l)) && (r = Mm(e, n, r, "previousSibling"), a = Mm(e, n, a, "nextSibling"), xm(l) && (e.isBlock(r) || (r = Fm(e, n, r, s, !0)), e.isBlock(a) || (a = Fm(e, n, a, i, !1)))), jo(r) && r.parentNode && (s = e.nodeIndex(r), r = r.parentNode), jo(a) && a.parentNode && (i = e.nodeIndex(a) + 1, a = a.parentNode), {
      startContainer: r,
      startOffset: s,
      endContainer: a,
      endOffset: i
    };
  },
      jm = function jm(e, t, n) {
    var o;

    var r = t.startOffset,
        s = hi(t.startContainer, r),
        a = t.endOffset,
        i = hi(t.endContainer, a - 1),
        l = function l(e) {
      var t = e[0];
      Xo(t) && t === s && r >= t.data.length && e.splice(0, 1);
      var n = e[e.length - 1];
      return 0 === a && e.length > 0 && n === i && Xo(n) && e.splice(e.length - 1, 1), e;
    },
        d = function d(e, t, n) {
      var o = [];

      for (; e && e !== n; e = e[t]) {
        o.push(e);
      }

      return o;
    },
        c = function c(t, n) {
      return e.getParent(t, function (e) {
        return e.parentNode === n;
      }, n);
    },
        u = function u(e, t, o) {
      var r = o ? "nextSibling" : "previousSibling";

      for (var _s17 = e, _a12 = _s17.parentNode; _s17 && _s17 !== t; _s17 = _a12) {
        _a12 = _s17.parentNode;

        var _t62 = d(_s17 === e ? _s17 : _s17[r], r);

        _t62.length && (o || _t62.reverse(), n(l(_t62)));
      }
    };

    if (s === i) return n(l([s]));
    var m = null !== (o = e.findCommonAncestor(s, i)) && void 0 !== o ? o : e.getRoot();
    if (e.isChildOf(s, i)) return u(s, m, !0);
    if (e.isChildOf(i, s)) return u(i, m);
    var f = c(s, m) || s,
        g = c(i, m) || i;
    u(s, f, !0);
    var p = d(f === s ? f : f.nextSibling, "nextSibling", g === i ? g.nextSibling : g);
    p.length && n(l(p)), u(i, g);
  },
      Hm = ['pre[class*=language-][contenteditable="false"]', "figure.image", "div[data-ephox-embed-iri]", "div.tiny-pageembed", "div.mce-toc", "div[data-mce-toc]"],
      $m = function $m(e, t, n, o, r, s) {
    var _n$uid = n.uid,
        a = _n$uid === void 0 ? t : _n$uid,
        i = _objectWithoutProperties(n, ["uid"]);

    cn(e, $a()), Qt(e, "".concat(qa()), a), Qt(e, "".concat(Va()), o);

    var _r32 = r(a, i),
        _r32$attributes = _r32.attributes,
        l = _r32$attributes === void 0 ? {} : _r32$attributes,
        _r32$classes = _r32.classes,
        d = _r32$classes === void 0 ? [] : _r32$classes;

    if (Jt(e, l), function (e, t) {
      q(t, function (t) {
        cn(e, t);
      });
    }(e, d), s) {
      d.length > 0 && Qt(e, "".concat(Ka()), d.join(","));

      var _t63 = me(l);

      _t63.length > 0 && Qt(e, "".concat(Ga()), _t63.join(","));
    }
  },
      Vm = function Vm(e, t, n, o, r) {
    var s = hn("span", e);
    return $m(s, t, n, o, r, !1), s;
  },
      qm = function qm(e, t, n, o, r, s) {
    var a = [],
        i = Vm(e.getDoc(), n, s, o, r),
        l = za(),
        d = function d() {
      l.clear();
    },
        c = function c(e) {
      q(e, u);
    },
        u = function u(t) {
      switch (function (e, t, n, o) {
        return Rn(t).fold(function () {
          return "skipping";
        }, function (r) {
          return "br" === o || function (e) {
            return Wt(e) && hr(e) === Pr;
          }(t) ? "valid" : function (e) {
            return qt(e) && fn(e, $a());
          }(t) ? "existing" : ku(t.dom) ? "caret" : $(Hm, function (e) {
            return wn(t, e);
          }) ? "valid-block" : mm(e, n, o) && mm(e, jt(r), n) ? "valid" : "invalid-child";
        });
      }(e, t, "span", jt(t))) {
        case "invalid-child":
          {
            d();

            var _e51 = Ln(t);

            c(_e51), d();
            break;
          }

        case "valid-block":
          d(), $m(t, n, s, o, r, !0);
          break;

        case "valid":
          {
            var _e52 = l.get().getOrThunk(function () {
              var e = oi(i);
              return a.push(e), l.set(e), e;
            });

            bo(t, _e52);
            break;
          }
      }
    };

    return jm(e.dom, t, function (e) {
      d(), function (e) {
        var t = V(e, vn);
        c(t);
      }(e);
    }), a;
  },
      Wm = function Wm(e) {
    var t = function () {
      var e = {};
      return {
        register: function register(t, n) {
          e[t] = {
            name: t,
            settings: n
          };
        },
        lookup: function lookup(t) {
          return xe(e, t).map(function (e) {
            return e.settings;
          });
        },
        getNames: function getNames() {
          return me(e);
        }
      };
    }();

    (function (e, t) {
      var n = Va(),
          o = function o(e) {
        return I.from(e.attr(n)).bind(t.lookup);
      },
          r = function r(e) {
        var t, n;
        e.attr(qa(), null), e.attr(Va(), null), e.attr(Wa(), null);
        var o = I.from(e.attr(Ga())).map(function (e) {
          return e.split(",");
        }).getOr([]),
            r = I.from(e.attr(Ka())).map(function (e) {
          return e.split(",");
        }).getOr([]);
        q(o, function (t) {
          return e.attr(t, null);
        });
        var s = null !== (n = null === (t = e.attr("class")) || void 0 === t ? void 0 : t.split(" ")) && void 0 !== n ? n : [],
            a = re(s, [$a()].concat(r));
        e.attr("class", a.length > 0 ? a.join(" ") : null), e.attr(Ka(), null), e.attr(Ga(), null);
      };

      e.serializer.addTempAttr(Wa()), e.serializer.addAttributeFilter(n, function (e) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          var _loop = function _loop() {
            var t = _step2.value;
            o(t).each(function (e) {
              !1 === e.persistent && ("span" === t.name ? t.unwrap() : r(t));
            });
          };

          for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            _loop();
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
      });
    })(e, t);

    var n = function (e, t) {
      var n = Da({}),
          o = function o() {
        return {
          listeners: [],
          previous: za()
        };
      },
          r = function r(e, t) {
        s(e, function (e) {
          return t(e), e;
        });
      },
          s = function s(e, t) {
        var r = n.get(),
            s = t(xe(r, e).getOrThunk(o));
        r[e] = s, n.set(r);
      },
          a = function a(t, n) {
        q(Ja(e, t), function (e) {
          n ? Qt(e, Wa(), "true") : nn(e, Wa());
        });
      },
          i = Ha(function () {
        var n = ae(t.getNames());
        q(n, function (t) {
          s(t, function (n) {
            var o = n.previous.get();
            return Xa(e, I.some(t)).fold(function () {
              o.each(function (e) {
                (function (e) {
                  r(e, function (t) {
                    q(t.listeners, function (t) {
                      return t(!1, e);
                    });
                  });
                })(t), n.previous.clear(), a(e, !1);
              });
            }, function (_ref5) {
              var e = _ref5.uid,
                  t = _ref5.name,
                  s = _ref5.elements;
              Pt(o, e) || (o.each(function (e) {
                return a(e, !1);
              }), function (e, t, n) {
                r(e, function (o) {
                  q(o.listeners, function (o) {
                    return o(!0, e, {
                      uid: t,
                      nodes: V(n, function (e) {
                        return e.dom;
                      })
                    });
                  });
                });
              }(t, e, s), n.previous.set(e), a(e, !0));
            }), {
              previous: n.previous,
              listeners: n.listeners
            };
          });
        });
      }, 30);

      return e.on("remove", function () {
        i.cancel();
      }), e.on("NodeChange", function () {
        i.throttle();
      }), {
        addListener: function addListener(e, t) {
          s(e, function (e) {
            return {
              previous: e.previous,
              listeners: e.listeners.concat([t])
            };
          });
        }
      };
    }(e, t),
        o = Yt("span"),
        r = function r(e) {
      q(e, function (e) {
        o(e) ? wo(e) : function (e) {
          mn(e, $a()), nn(e, "".concat(qa())), nn(e, "".concat(Va())), nn(e, "".concat(Wa()));
          var t = en(e, "".concat(Ga())).map(function (e) {
            return e.split(",");
          }).getOr([]),
              n = en(e, "".concat(Ka())).map(function (e) {
            return e.split(",");
          }).getOr([]);
          var o;
          q(t, function (t) {
            return nn(e, t);
          }), o = e, q(n, function (e) {
            mn(o, e);
          }), nn(e, "".concat(Ka())), nn(e, "".concat(Ga()));
        }(e);
      });
    };

    return {
      register: function register(e, n) {
        t.register(e, n);
      },
      annotate: function annotate(n, o) {
        t.lookup(n).each(function (t) {
          (function (e, t, n, o) {
            e.undoManager.transact(function () {
              var r = e.selection,
                  s = r.getRng(),
                  a = Xu(e).length > 0,
                  i = ti("mce-annotation");

              if (s.collapsed && !a && function (e, t) {
                var n = zm(e.dom, t, [{
                  inline: "span"
                }]);
                t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t);
              }(e, s), r.getRng().collapsed && !a) {
                var _s18 = Vm(e.getDoc(), i, o, t, n.decorate);

                Eo(_s18, fr), r.getRng().insertNode(_s18.dom), r.select(_s18.dom);
              } else rm(r, !1, function () {
                om(e, function (r) {
                  qm(e, r, i, t, n.decorate, o);
                });
              });
            });
          })(e, n, t, o);
        });
      },
      annotationChanged: function annotationChanged(e, t) {
        n.addListener(e, t);
      },
      remove: function remove(t) {
        Xa(e, I.some(t)).each(function (_ref6) {
          var t = _ref6.elements;
          var n = e.selection.getBookmark();
          r(t), e.selection.moveToBookmark(n);
        });
      },
      removeAll: function removeAll(t) {
        var n = e.selection.getBookmark();
        ge(Za(e, t), function (e, t) {
          r(e);
        }), e.selection.moveToBookmark(n);
      },
      getAll: function getAll(t) {
        var n = Za(e, t);
        return pe(n, function (e) {
          return V(e, function (e) {
            return e.dom;
          });
        });
      }
    };
  },
      Km = function Km(e) {
    return {
      getBookmark: O(Pu, e),
      moveToBookmark: O(Lu, e)
    };
  };

  Km.isBookmarkNode = Mu;

  var Gm = function Gm(e, t, n) {
    return !n.collapsed && $(n.getClientRects(), function (n) {
      return function (e, t, n) {
        return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
      }(n, e, t);
    });
  },
      Ym = function Ym(e, t, n) {
    e.dispatch(t, n);
  },
      Xm = function Xm(e, t, n, o) {
    e.dispatch("FormatApply", {
      format: t,
      node: n,
      vars: o
    });
  },
      Qm = function Qm(e, t, n, o) {
    e.dispatch("FormatRemove", {
      format: t,
      node: n,
      vars: o
    });
  },
      Jm = function Jm(e, t) {
    return e.dispatch("SetContent", t);
  },
      Zm = function Zm(e, t) {
    return e.dispatch("GetContent", t);
  },
      ef = function ef(e, t) {
    return e.dispatch("PastePlainTextToggle", {
      state: t
    });
  },
      tf = {
    BACKSPACE: 8,
    DELETE: 46,
    DOWN: 40,
    ENTER: 13,
    ESC: 27,
    LEFT: 37,
    RIGHT: 39,
    SPACEBAR: 32,
    TAB: 9,
    UP: 38,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    modifierPressed: function modifierPressed(e) {
      return e.shiftKey || e.ctrlKey || e.altKey || tf.metaKeyPressed(e);
    },
    metaKeyPressed: function metaKeyPressed(e) {
      return At.os.isMacOS() || At.os.isiOS() ? e.metaKey : e.ctrlKey && !e.altKey;
    }
  },
      nf = "data-mce-selected",
      of = Math.abs,
      rf = Math.round,
      sf = {
    nw: [0, 0, -1, -1],
    ne: [1, 0, 1, -1],
    se: [1, 1, 1, 1],
    sw: [0, 1, -1, 1]
  },
      af = function af(e, t) {
    var n = t.dom,
        o = t.getDoc(),
        r = document,
        s = t.getBody();
    var a, i, l, d, c, u, m, f, g, p, h, b, v, y, w;

    var x = function x(e) {
      return C(e) && (or(e) || n.is(e, "figure.image"));
    },
        k = function k(e) {
      return lr(e) || n.hasClass(e, "mce-preview-object");
    },
        E = function E(e) {
      var n = e.target;
      (function (e, t) {
        if (function (e) {
          return "longpress" === e.type || 0 === e.type.indexOf("touch");
        }(e)) {
          var _n53 = e.touches[0];
          return x(e.target) && !Gm(_n53.clientX, _n53.clientY, t);
        }

        return x(e.target) && !Gm(e.clientX, e.clientY, t);
      })(e, t.selection.getRng()) && !e.isDefaultPrevented() && t.selection.select(n);
    },
        S = function S(e) {
      return n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? [e, e.firstElementChild] : n.is(e, "figure.image") ? [e.querySelector("img")] : [e];
    },
        _ = function _(e) {
      var o = td(t);
      return !!o && "false" !== e.getAttribute("data-mce-resize") && e !== t.getBody() && (n.hasClass(e, "mce-preview-object") && C(e.firstElementChild) ? wn(vn(e.firstElementChild), o) : wn(vn(e), o));
    },
        N = function N(e, o, r) {
      if (C(r)) {
        var _s19 = S(e);

        q(_s19, function (e) {
          e.style[o] || !t.schema.isValid(e.nodeName.toLowerCase(), o) ? n.setStyle(e, o, r) : n.setAttrib(e, o, "" + r);
        });
      }
    },
        R = function R(e, t, n) {
      N(e, "width", t), N(e, "height", n);
    },
        A = function A(e) {
      var o, r, c, C, E;
      o = e.screenX - u, r = e.screenY - m, b = o * d[2] + f, v = r * d[3] + g, b = b < 5 ? 5 : b, v = v < 5 ? 5 : v, c = (x(a) || k(a)) && !1 !== nd(t) ? !tf.modifierPressed(e) : tf.modifierPressed(e), c && (of(o) > of(r) ? (v = rf(b * p), b = rf(v / p)) : (b = rf(v / p), v = rf(b * p))), R(i, b, v), C = d.startPos.x + o, E = d.startPos.y + r, C = C > 0 ? C : 0, E = E > 0 ? E : 0, n.setStyles(l, {
        left: C,
        top: E,
        display: "block"
      }), l.innerHTML = b + " &times; " + v, d[2] < 0 && i.clientWidth <= b && n.setStyle(i, "left", void 0 + (f - b)), d[3] < 0 && i.clientHeight <= v && n.setStyle(i, "top", void 0 + (g - v)), o = s.scrollWidth - y, r = s.scrollHeight - w, o + r !== 0 && n.setStyles(l, {
        left: C - o,
        top: E - r
      }), h || (function (e, t, n, o, r) {
        e.dispatch("ObjectResizeStart", {
          target: t,
          width: n,
          height: o,
          origin: r
        });
      }(t, a, f, g, "corner-" + d.name), h = !0);
    },
        O = function O() {
      var e = h;
      h = !1, e && (N(a, "width", b), N(a, "height", v)), n.unbind(o, "mousemove", A), n.unbind(o, "mouseup", O), r !== o && (n.unbind(r, "mousemove", A), n.unbind(r, "mouseup", O)), n.remove(i), n.remove(l), n.remove(c), T(a), e && (function (e, t, n, o, r) {
        e.dispatch("ObjectResized", {
          target: t,
          width: n,
          height: o,
          origin: r
        });
      }(t, a, b, v, "corner-" + d.name), n.setAttrib(a, "style", n.getAttrib(a, "style"))), t.nodeChanged();
    },
        T = function T(e) {
      M();
      var h = n.getPos(e, s),
          C = h.x,
          x = h.y,
          E = e.getBoundingClientRect(),
          N = E.width || E.right - E.left,
          T = E.height || E.bottom - E.top;
      a !== e && (D(), a = e, b = v = 0);
      var B = t.dispatch("ObjectSelected", {
        target: e
      });
      _(e) && !B.isDefaultPrevented() ? ge(sf, function (e, t) {
        var h = n.get("mceResizeHandle" + t);
        h && n.remove(h), h = n.add(s, "div", {
          id: "mceResizeHandle" + t,
          "data-mce-bogus": "all",
          "class": "mce-resizehandle",
          unselectable: !0,
          style: "cursor:" + t + "-resize; margin:0; padding:0"
        }), n.bind(h, "mousedown", function (h) {
          h.stopImmediatePropagation(), h.preventDefault(), function (h) {
            var b = S(a)[0];
            var v;
            u = h.screenX, m = h.screenY, f = b.clientWidth, g = b.clientHeight, p = g / f, d = e, d.name = t, d.startPos = {
              x: N * e[0] + C,
              y: T * e[1] + x
            }, y = s.scrollWidth, w = s.scrollHeight, c = n.add(s, "div", {
              "class": "mce-resize-backdrop",
              "data-mce-bogus": "all"
            }), n.setStyles(c, {
              position: "fixed",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%"
            }), i = k(v = a) ? n.create("img", {
              src: At.transparentSrc
            }) : v.cloneNode(!0), n.addClass(i, "mce-clonedresizable"), n.setAttrib(i, "data-mce-bogus", "all"), i.contentEditable = "false", n.setStyles(i, {
              left: C,
              top: x,
              margin: 0
            }), R(i, N, T), i.removeAttribute(nf), s.appendChild(i), n.bind(o, "mousemove", A), n.bind(o, "mouseup", O), r !== o && (n.bind(r, "mousemove", A), n.bind(r, "mouseup", O)), l = n.add(s, "div", {
              "class": "mce-resize-helper",
              "data-mce-bogus": "all"
            }, f + " &times; " + g);
          }(h);
        }), e.elm = h, n.setStyles(h, {
          left: N * e[0] + C - h.offsetWidth / 2,
          top: T * e[1] + x - h.offsetHeight / 2
        });
      }) : D(!1);
    },
        B = ja(T, 0),
        D = function D() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      B.cancel(), M(), a && e && a.removeAttribute(nf), ge(sf, function (e, t) {
        var o = n.get("mceResizeHandle" + t);
        o && (n.unbind(o), n.remove(o));
      });
    },
        P = function P(e, t) {
      return n.isChildOf(e, t);
    },
        L = function L(o) {
      if (h || t.removed || t.composing) return;
      var r = "mousedown" === o.type ? o.target : e.getNode(),
          a = eo(vn(r), "table,img,figure.image,hr,video,span.mce-preview-object,details").map(function (e) {
        return e.dom;
      }).filter(function (e) {
        return n.isEditable(e.parentElement);
      }).getOrUndefined(),
          i = C(a) ? n.getAttrib(a, nf, "1") : "1";

      if (q(n.select("img[".concat(nf, "],hr[").concat(nf, "]")), function (e) {
        e.removeAttribute(nf);
      }), C(a) && P(a, s) && t.hasFocus()) {
        I();

        var _t64 = e.getStart(!0);

        if (P(_t64, a) && P(e.getEnd(!0), a)) return n.setAttrib(a, nf, i), void B.throttle(a);
      }

      D();
    },
        M = function M() {
      ge(sf, function (e) {
        e.elm && (n.unbind(e.elm), delete e.elm);
      });
    },
        I = function I() {
      try {
        t.getDoc().execCommand("enableObjectResizing", !1, "false");
      } catch (e) {}
    };

    return t.on("init", function () {
      I(), t.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", L), t.on("keyup compositionend", function (e) {
        a && "TABLE" === a.nodeName && L(e);
      }), t.on("hide blur", D), t.on("contextmenu longpress", E, !0);
    }), t.on("remove", M), {
      isResizable: _,
      showResizeRect: T,
      hideResizeRect: D,
      updateResizeRect: L,
      destroy: function destroy() {
        B.cancel(), a = i = c = null;
      }
    };
  },
      lf = function lf(e, t, n) {
    var o = e.document.createRange();
    var r;
    return r = o, t.fold(function (e) {
      r.setStartBefore(e.dom);
    }, function (e, t) {
      r.setStart(e.dom, t);
    }, function (e) {
      r.setStartAfter(e.dom);
    }), function (e, t) {
      t.fold(function (t) {
        e.setEndBefore(t.dom);
      }, function (t, n) {
        e.setEnd(t.dom, n);
      }, function (t) {
        e.setEndAfter(t.dom);
      });
    }(o, n), o;
  },
      df = function df(e, t, n, o, r) {
    var s = e.document.createRange();
    return s.setStart(t.dom, n), s.setEnd(o.dom, r), s;
  },
      cf = il([{
    ltr: ["start", "soffset", "finish", "foffset"]
  }, {
    rtl: ["start", "soffset", "finish", "foffset"]
  }]),
      uf = function uf(e, t, n) {
    return t(vn(n.startContainer), n.startOffset, vn(n.endContainer), n.endOffset);
  };

  cf.ltr, cf.rtl;

  var mf = function mf(e, t, n, o) {
    return {
      start: e,
      soffset: t,
      finish: n,
      foffset: o
    };
  },
      ff = document.caretPositionFromPoint ? function (e, t, n) {
    var o, r;
    return I.from(null === (r = (o = e.dom).caretPositionFromPoint) || void 0 === r ? void 0 : r.call(o, t, n)).bind(function (t) {
      if (null === t.offsetNode) return I.none();
      var n = e.dom.createRange();
      return n.setStart(t.offsetNode, t.offset), n.collapse(), I.some(n);
    });
  } : document.caretRangeFromPoint ? function (e, t, n) {
    var o, r;
    return I.from(null === (r = (o = e.dom).caretRangeFromPoint) || void 0 === r ? void 0 : r.call(o, t, n));
  } : I.none,
      gf = il([{
    before: ["element"]
  }, {
    on: ["element", "offset"]
  }, {
    after: ["element"]
  }]),
      pf = {
    before: gf.before,
    on: gf.on,
    after: gf.after,
    cata: function cata(e, t, n, o) {
      return e.fold(t, n, o);
    },
    getStart: function getStart(e) {
      return e.fold(R, R, R);
    }
  },
      hf = il([{
    domRange: ["rng"]
  }, {
    relative: ["startSitu", "finishSitu"]
  }, {
    exact: ["start", "soffset", "finish", "foffset"]
  }]),
      bf = {
    domRange: hf.domRange,
    relative: hf.relative,
    exact: hf.exact,
    exactFromRange: function exactFromRange(e) {
      return hf.exact(e.start, e.soffset, e.finish, e.foffset);
    },
    getWin: function getWin(e) {
      var t = function (e) {
        return e.match({
          domRange: function domRange(e) {
            return vn(e.startContainer);
          },
          relative: function relative(e, t) {
            return pf.getStart(e);
          },
          exact: function exact(e, t, n, o) {
            return e;
          }
        });
      }(e);

      return Nn(t);
    },
    range: mf
  },
      vf = function vf(e, t) {
    var n = jt(e);
    return "input" === n ? pf.after(e) : H(["br", "img"], n) ? 0 === t ? pf.before(e) : pf.after(e) : pf.on(e, t);
  },
      yf = function yf(e, t) {
    var n = e.fold(pf.before, vf, pf.after),
        o = t.fold(pf.before, vf, pf.after);
    return bf.relative(n, o);
  },
      Cf = function Cf(e, t, n, o) {
    var r = vf(e, t),
        s = vf(n, o);
    return bf.relative(r, s);
  },
      wf = function wf(e, t) {
    var n = (t || document).createDocumentFragment();
    return q(e, function (e) {
      n.appendChild(e.dom);
    }), vn(n);
  },
      xf = function xf(e) {
    var t = bf.getWin(e).dom,
        n = function n(e, _n54, o, r) {
      return df(t, e, _n54, o, r);
    },
        o = function (e) {
      return e.match({
        domRange: function domRange(e) {
          var t = vn(e.startContainer),
              n = vn(e.endContainer);
          return Cf(t, e.startOffset, n, e.endOffset);
        },
        relative: yf,
        exact: Cf
      });
    }(e);

    return function (e, t) {
      var n = function (e, t) {
        return t.match({
          domRange: function domRange(e) {
            return {
              ltr: N(e),
              rtl: I.none
            };
          },
          relative: function relative(t, n) {
            return {
              ltr: Pe(function () {
                return lf(e, t, n);
              }),
              rtl: Pe(function () {
                return I.some(lf(e, n, t));
              })
            };
          },
          exact: function exact(t, n, o, r) {
            return {
              ltr: Pe(function () {
                return df(e, t, n, o, r);
              }),
              rtl: Pe(function () {
                return I.some(df(e, o, r, t, n));
              })
            };
          }
        });
      }(e, t);

      return function (e, t) {
        var n = t.ltr();
        return n.collapsed ? t.rtl().filter(function (e) {
          return !1 === e.collapsed;
        }).map(function (e) {
          return cf.rtl(vn(e.endContainer), e.endOffset, vn(e.startContainer), e.startOffset);
        }).getOrThunk(function () {
          return uf(0, cf.ltr, n);
        }) : uf(0, cf.ltr, n);
      }(0, n);
    }(t, o).match({
      ltr: n,
      rtl: n
    });
  },
      kf = function kf(e, t, n) {
    return function (e, t, n) {
      return function (e, t, n) {
        var o = vn(e.document);
        return ff(o, t, n).map(function (e) {
          return mf(vn(e.startContainer), e.startOffset, vn(e.endContainer), e.endOffset);
        });
      }(e, t, n);
    }(Nn(vn(n)).dom, e, t).map(function (e) {
      var t = n.createRange();
      return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), t;
    }).getOrUndefined();
  },
      Ef = function Ef(e, t) {
    return C(e) && C(t) && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset;
  },
      Sf = function Sf(e, t, n) {
    return null !== function (e, t, n) {
      var o = e;

      for (; o && o !== t;) {
        if (n(o)) return o;
        o = o.parentNode;
      }

      return null;
    }(e, t, n);
  },
      _f = function _f(e, t, n) {
    return Sf(e, t, function (e) {
      return e.nodeName === n;
    });
  },
      Nf = function Nf(e, t) {
    return jr(e) && !Sf(e, t, ku);
  },
      Rf = function Rf(e, t, n) {
    var o = t.parentNode;

    if (o) {
      var _r33 = new Fo(t, e.getParent(o, e.isBlock) || e.getRoot());

      var _s20;

      for (; _s20 = _r33[n ? "prev" : "next"]();) {
        if (nr(_s20)) return !0;
      }
    }

    return !1;
  },
      Af = function Af(e, t, n, o, r) {
    var s = e.getRoot(),
        a = e.schema.getNonEmptyElements(),
        i = r.parentNode;
    var l, d;
    if (!i) return I.none();
    var c = e.getParent(i, e.isBlock) || s;
    if (o && nr(r) && t && e.isEmpty(c)) return I.some(Mi(i, e.nodeIndex(r)));
    var u = new Fo(r, c);

    for (; d = u[o ? "prev" : "next"]();) {
      if ("false" === e.getContentEditableParent(d) || Nf(d, s)) return I.none();
      if (Xo(d) && d.data.length > 0) return _f(d, s, "A") ? I.none() : I.some(Mi(d, o ? d.data.length : 0));
      if (e.isBlock(d) || a[d.nodeName.toLowerCase()]) return I.none();
      l = d;
    }

    return Zo(l) ? I.none() : n && l ? I.some(Mi(l, 0)) : I.none();
  },
      Of = function Of(e, t, n, o) {
    var r = e.getRoot();
    var s,
        a = !1,
        i = n ? o.startContainer : o.endContainer,
        l = n ? o.startOffset : o.endOffset;
    var d = jo(i) && l === i.childNodes.length,
        c = e.schema.getNonEmptyElements();
    var u = n;
    if (jr(i)) return I.none();

    if (jo(i) && l > i.childNodes.length - 1 && (u = !1), er(i) && (i = r, l = 0), i === r) {
      if (u && (s = i.childNodes[l > 0 ? l - 1 : 0], s)) {
        if (jr(s)) return I.none();
        if (c[s.nodeName] || Ko(s)) return I.none();
      }

      if (i.hasChildNodes()) {
        if (l = Math.min(!u && l > 0 ? l - 1 : l, i.childNodes.length - 1), i = i.childNodes[l], l = Xo(i) && d ? i.data.length : 0, !t && i === r.lastChild && Ko(i)) return I.none();
        if (function (e, t) {
          var n = t;

          for (; n && n !== e;) {
            if (sr(n)) return !0;
            n = n.parentNode;
          }

          return !1;
        }(r, i) || jr(i)) return I.none();

        if (i.hasChildNodes() && !Ko(i)) {
          s = i;

          var _t65 = new Fo(i, r);

          do {
            if (sr(s) || jr(s)) {
              a = !1;
              break;
            }

            if (Xo(s) && s.data.length > 0) {
              l = u ? 0 : s.data.length, i = s, a = !0;
              break;
            }

            if (c[s.nodeName.toLowerCase()] && !ir(s)) {
              l = e.nodeIndex(s), i = s.parentNode, u || l++, a = !0;
              break;
            }
          } while (s = u ? _t65.next() : _t65.prev());
        }
      }
    }

    return t && (Xo(i) && 0 === l && Af(e, d, t, !0, i).each(function (e) {
      i = e.container(), l = e.offset(), a = !0;
    }), jo(i) && (s = i.childNodes[l], s || (s = i.childNodes[l - 1]), !s || !nr(s) || function (e, t) {
      var n;
      return "A" === (null === (n = e.previousSibling) || void 0 === n ? void 0 : n.nodeName);
    }(s) || Rf(e, s, !1) || Rf(e, s, !0) || Af(e, d, t, !0, s).each(function (e) {
      i = e.container(), l = e.offset(), a = !0;
    }))), u && !t && Xo(i) && l === i.data.length && Af(e, d, t, !1, i).each(function (e) {
      i = e.container(), l = e.offset(), a = !0;
    }), a && i ? I.some(Mi(i, l)) : I.none();
  },
      Tf = function Tf(e, t) {
    var n = t.collapsed,
        o = t.cloneRange(),
        r = Mi.fromRangeStart(t);
    return Of(e, n, !0, o).each(function (e) {
      n && Mi.isAbove(r, e) || o.setStart(e.container(), e.offset());
    }), n || Of(e, n, !1, o).each(function (e) {
      o.setEnd(e.container(), e.offset());
    }), n && o.collapse(!0), Ef(t, o) ? I.none() : I.some(o);
  },
      Bf = function Bf(e, t) {
    return e.splitText(t);
  },
      Df = function Df(e) {
    var t = e.startContainer,
        n = e.startOffset,
        o = e.endContainer,
        r = e.endOffset;

    if (t === o && Xo(t)) {
      if (n > 0 && n < t.data.length) if (o = Bf(t, n), t = o.previousSibling, r > n) {
        r -= n;
        var _e53 = Bf(o, r).previousSibling;
        t = o = _e53, r = _e53.data.length, n = 0;
      } else r = 0;
    } else if (Xo(t) && n > 0 && n < t.data.length && (t = Bf(t, n), n = 0), Xo(o) && r > 0 && r < o.data.length) {
      var _e54 = Bf(o, r).previousSibling;
      o = _e54, r = _e54.data.length;
    }

    return {
      startContainer: t,
      startOffset: n,
      endContainer: o,
      endOffset: r
    };
  },
      Pf = function Pf(e) {
    return {
      walk: function walk(t, n) {
        return jm(e, t, n);
      },
      split: Df,
      expand: function expand(t) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          type: "word"
        };

        if ("word" === n.type) {
          var _n55 = zm(e, t, [{
            inline: "span"
          }]),
              _o46 = e.createRng();

          return _o46.setStart(_n55.startContainer, _n55.startOffset), _o46.setEnd(_n55.endContainer, _n55.endOffset), _o46;
        }

        return t;
      },
      normalize: function normalize(t) {
        return Tf(e, t).fold(L, function (e) {
          return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0;
        });
      }
    };
  };

  Pf.compareRanges = Ef, Pf.getCaretRangeFromPoint = kf, Pf.getSelectedNode = pi, Pf.getNode = hi;

  var Lf = function (e, t) {
    var n = function n(t) {
      var n = function (e) {
        var t = e.dom;
        return Gn(e) ? t.getBoundingClientRect().height : t.offsetHeight;
      }(t);

      if (n <= 0 || null === n) {
        var _n56 = io(t, e);

        return parseFloat(_n56) || 0;
      }

      return n;
    },
        o = function o(e, t) {
      return X(t, function (t, n) {
        var o = io(e, n),
            r = void 0 === o ? 0 : parseInt(o, 10);
        return isNaN(r) ? t : t + r;
      }, 0);
    };

    return {
      set: function set(t, n) {
        if (!x(n) && !n.match(/^[0-9]+$/)) throw new Error(e + ".set accepts only positive integer values. Value was " + n);
        var o = t.dom;
        oo(o) && (o.style[e] = n + "px");
      },
      get: n,
      getOuter: n,
      aggregate: o,
      max: function max(e, t, n) {
        var r = o(e, n);
        return t > r ? t - r : 0;
      }
    };
  }("height"),
      Mf = function Mf() {
    return vn(document);
  },
      If = function If(e, t) {
    return e.view(t).fold(N([]), function (t) {
      var n = e.owner(t),
          o = If(e, n);
      return [t].concat(o);
    });
  };

  var Ff = Object.freeze({
    __proto__: null,
    view: function view(e) {
      var t;
      return (e.dom === document ? I.none() : I.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(vn);
    },
    owner: function owner(e) {
      return _n(e);
    }
  });

  var Uf = function Uf(e) {
    return "textarea" === jt(e);
  },
      zf = function zf(e, t) {
    var n = function (e) {
      var t = e.dom.ownerDocument,
          n = t.body,
          o = t.defaultView,
          r = t.documentElement;
      if (n === e.dom) return Ro(n.offsetLeft, n.offsetTop);
      var s = Ao(null == o ? void 0 : o.pageYOffset, r.scrollTop),
          a = Ao(null == o ? void 0 : o.pageXOffset, r.scrollLeft),
          i = Ao(r.clientTop, n.clientTop),
          l = Ao(r.clientLeft, n.clientLeft);
      return Oo(e).translate(a - l, s - i);
    }(e),
        o = function (e) {
      return Lf.get(e);
    }(e);

    return {
      element: e,
      bottom: n.top + o,
      height: o,
      pos: n,
      cleanup: t
    };
  },
      jf = function jf(e, t, n, o) {
    qf(e, function (r, s) {
      return $f(e, t, n, o);
    }, n);
  },
      Hf = function Hf(e, t, n, o, r) {
    var s = {
      elm: o.element.dom,
      alignToTop: r
    };
    (function (e, t) {
      return e.dispatch("ScrollIntoView", t).isDefaultPrevented();
    })(e, s) || (n(t, To(t).top, o, r), function (e, t) {
      e.dispatch("AfterScrollIntoView", t);
    }(e, s));
  },
      $f = function $f(e, t, n, o) {
    var r = vn(e.getBody()),
        s = vn(e.getDoc());
    r.dom.offsetWidth;

    var a = function (e, t) {
      var n = function (e, t) {
        var n = Ln(e);
        if (0 === n.length || Uf(e)) return {
          element: e,
          offset: t
        };
        if (t < n.length && !Uf(n[t])) return {
          element: n[t],
          offset: 0
        };
        {
          var _o47 = n[n.length - 1];
          return Uf(_o47) ? {
            element: e,
            offset: t
          } : "img" === jt(_o47) ? {
            element: _o47,
            offset: 1
          } : Wt(_o47) ? {
            element: _o47,
            offset: hr(_o47).length
          } : {
            element: _o47,
            offset: Ln(_o47).length
          };
        }
      }(e, t),
          o = pn("<span data-mce-bogus=\"all\" style=\"display: inline-block;\">\uFEFF</span>");

      return fo(n.element, o), zf(o, function () {
        return Co(o);
      });
    }(vn(n.startContainer), n.startOffset);

    Hf(e, s, t, a, o), a.cleanup();
  },
      Vf = function Vf(e, t, n, o) {
    var r = vn(e.getDoc());
    Hf(e, r, n, function (e) {
      return zf(vn(e), E);
    }(t), o);
  },
      qf = function qf(e, t, n) {
    var o = n.startContainer,
        r = n.startOffset,
        s = n.endContainer,
        a = n.endOffset;
    t(vn(o), vn(s));
    var i = e.dom.createRng();
    i.setStart(o, r), i.setEnd(s, a), e.selection.setRng(n);
  },
      Wf = function Wf(e, t) {
    return e.element.dom.scrollIntoView({
      block: t ? "start" : "end"
    });
  },
      Kf = function Kf(e, t, n, o) {
    var r = t + e,
        s = n.pos.top,
        a = n.bottom,
        i = a - s >= t;
    s < e ? Wf(n, !1 !== o) : s > r ? Wf(n, i ? !1 !== o : !0 === o) : a > r && !i && Wf(n, !0 === o);
  },
      Gf = function Gf(e, t, n, o) {
    var r = Nn(e).dom.innerHeight;
    Kf(t, r, n, o);
  },
      Yf = function Yf(e, t, n, o) {
    var r = Nn(e).dom.innerHeight;
    Kf(t, r, n, o);

    var s = function (e) {
      var t = Mf(),
          n = To(t),
          o = function (e, t) {
        var n = t.owner(e);
        return If(t, n);
      }(e, Ff),
          r = Oo(e),
          s = Y(o, function (e, t) {
        var n = Oo(t);
        return {
          left: e.left + n.left,
          top: e.top + n.top
        };
      }, {
        left: 0,
        top: 0
      });

      return Ro(s.left + r.left + n.left, s.top + r.top + n.top);
    }(n.element),
        a = Po(window);

    s.top < a.y ? Bo(n.element, !1 !== o) : s.top > a.bottom && Bo(n.element, !0 === o);
  },
      Xf = function Xf(e, t, n) {
    return jf(e, Gf, t, n);
  },
      Qf = function Qf(e, t, n) {
    return Vf(e, t, Gf, n);
  },
      Jf = function Jf(e, t, n) {
    return jf(e, Yf, t, n);
  },
      Zf = function Zf(e, t, n) {
    return Vf(e, t, Yf, n);
  },
      eg = function eg(e, t, n) {
    (e.inline ? Xf : Jf)(e, t, n);
  },
      tg = function tg(e) {
    return e.dom.focus();
  },
      ng = function ng(e) {
    var t = $n(e).dom;
    return e.dom === t.activeElement;
  },
      og = function og() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Mf();
    return I.from(e.dom.activeElement).map(vn);
  },
      rg = function rg(e, t) {
    var n = Wt(t) ? hr(t).length : Ln(t).length + 1;
    return e > n ? n : e < 0 ? 0 : e;
  },
      sg = function sg(e) {
    return bf.range(e.start, rg(e.soffset, e.start), e.finish, rg(e.foffset, e.finish));
  },
      ag = function ag(e, t) {
    return !zo(t.dom) && (En(e, t) || kn(e, t));
  },
      ig = function ig(e) {
    return function (t) {
      return ag(e, t.start) && ag(e, t.finish);
    };
  },
      lg = function lg(e) {
    return bf.range(vn(e.startContainer), e.startOffset, vn(e.endContainer), e.endOffset);
  },
      dg = function dg(e) {
    var t = document.createRange();

    try {
      return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), I.some(t);
    } catch (e) {
      return I.none();
    }
  },
      cg = function cg(e) {
    var t = function (e) {
      return e.inline || At.browser.isFirefox();
    }(e) ? (n = vn(e.getBody()), function (e) {
      var t = e.getSelection();
      return (t && 0 !== t.rangeCount ? I.from(t.getRangeAt(0)) : I.none()).map(lg);
    }(Nn(n).dom).filter(ig(n))) : I.none();
    var n;
    e.bookmark = t.isSome() ? t : e.bookmark;
  },
      ug = function ug(e) {
    return (e.bookmark ? e.bookmark : I.none()).bind(function (t) {
      return n = vn(e.getBody()), o = t, I.from(o).filter(ig(n)).map(sg);
      var n, o;
    }).bind(dg);
  },
      mg = {
    isEditorUIElement: function isEditorUIElement(e) {
      var t = e.className.toString();
      return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
    }
  },
      fg = {
    setEditorTimeout: function setEditorTimeout(e, t, n) {
      return function (e, t) {
        return x(t) || (t = 0), setTimeout(e, t);
      }(function () {
        e.removed || t();
      }, n);
    },
    setEditorInterval: function setEditorInterval(e, t, n) {
      var o = function (e, t) {
        return x(t) || (t = 0), setInterval(e, t);
      }(function () {
        e.removed ? clearInterval(o) : t();
      }, n);

      return o;
    }
  };

  var gg;

  var pg = Oa.DOM,
      hg = function hg(e) {
    var t = e.classList;
    return void 0 !== t && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"));
  },
      bg = function bg(e, t) {
    var n = pd(e),
        o = pg.getParent(t, function (t) {
      return function (e) {
        return jo(e) && mg.isEditorUIElement(e);
      }(t) || !!n && e.dom.is(t, n);
    });
    return null !== o;
  },
      vg = function vg(e) {
    try {
      var _t66 = $n(vn(e.getElement()));

      return og(_t66).fold(function () {
        return document.body;
      }, function (e) {
        return e.dom;
      });
    } catch (e) {
      return document.body;
    }
  },
      yg = function yg(e, t) {
    var n = t.editor;

    (function (e) {
      var t = ja(function () {
        cg(e);
      }, 0);
      e.on("init", function () {
        e.inline && function (e, t) {
          var n = function n() {
            t.throttle();
          };

          Oa.DOM.bind(document, "mouseup", n), e.on("remove", function () {
            Oa.DOM.unbind(document, "mouseup", n);
          });
        }(e, t), function (e, t) {
          (function (e, t) {
            e.on("mouseup touchend", function (e) {
              t.throttle();
            });
          })(e, t), e.on("keyup NodeChange AfterSetSelectionRange", function (t) {
            (function (e) {
              return "nodechange" === e.type && e.selectionChange;
            })(t) || cg(e);
          });
        }(e, t);
      }), e.on("remove", function () {
        t.cancel();
      });
    })(n);

    var o = function o(e, t) {
      oc(e) && !0 !== e.inline && t(vn(e.getContainer()), "tox-edit-focus");
    };

    n.on("focusin", function () {
      var t = e.focusedEditor;
      hg(vg(n)) && o(n, cn), t !== n && (t && t.dispatch("blur", {
        focusedEditor: n
      }), e.setActive(n), e.focusedEditor = n, n.dispatch("focus", {
        blurredEditor: t
      }), n.focus(!0));
    }), n.on("focusout", function () {
      fg.setEditorTimeout(n, function () {
        var t = e.focusedEditor;
        hg(vg(n)) && t === n || o(n, mn), bg(n, vg(n)) || t !== n || (n.dispatch("blur", {
          focusedEditor: null
        }), e.focusedEditor = null);
      });
    }), gg || (gg = function gg(t) {
      var n = e.activeEditor;
      n && Wn(t).each(function (t) {
        var o = t;
        o.ownerDocument === document && (o === document.body || bg(n, o) || e.focusedEditor !== n || (n.dispatch("blur", {
          focusedEditor: null
        }), e.focusedEditor = null));
      });
    }, pg.bind(document, "focusin", gg));
  },
      Cg = function Cg(e, t) {
    e.focusedEditor === t.editor && (e.focusedEditor = null), !e.activeEditor && gg && (pg.unbind(document, "focusin", gg), gg = null);
  },
      wg = function wg(e, t) {
    (function (e, t) {
      return function (e) {
        return e.collapsed ? I.from(hi(e.startContainer, e.startOffset)).map(vn) : I.none();
      }(t).bind(function (t) {
        return _r(t) ? I.some(t) : En(e, t) ? I.none() : I.some(e);
      });
    })(vn(e.getBody()), t).bind(function (e) {
      return Cu(e.dom);
    }).fold(function () {
      e.selection.normalize();
    }, function (t) {
      return e.selection.setRng(t.toRange());
    });
  },
      xg = function xg(e) {
    if (e.setActive) try {
      e.setActive();
    } catch (t) {
      e.focus();
    } else e.focus();
  },
      kg = function kg(e) {
    return e.inline ? function (e) {
      var t = e.getBody();
      return t && (n = vn(t), ng(n) || (o = n, og($n(o)).filter(function (e) {
        return o.dom.contains(e.dom);
      })).isSome());
      var n, o;
    }(e) : function (e) {
      return C(e.iframeElement) && ng(vn(e.iframeElement));
    }(e);
  },
      Eg = function Eg(e) {
    return e.editorManager.setActive(e);
  },
      Sg = function Sg(e, t, n, o, r) {
    var s = n ? t.startContainer : t.endContainer,
        a = n ? t.startOffset : t.endOffset;
    return I.from(s).map(vn).map(function (e) {
      return o && t.collapsed ? e : Mn(e, r(e, a)).getOr(e);
    }).bind(function (e) {
      return qt(e) ? I.some(e) : Rn(e).filter(qt);
    }).map(function (e) {
      return e.dom;
    }).getOr(e);
  },
      _g = function _g(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    return Sg(e, t, !0, n, function (e, t) {
      return Math.min(Un(e), t);
    });
  },
      Ng = function Ng(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    return Sg(e, t, !1, n, function (e, t) {
      return t > 0 ? t - 1 : t;
    });
  },
      Rg = function Rg(e, t) {
    var n = e;

    for (; e && Xo(e) && 0 === e.length;) {
      e = t ? e.nextSibling : e.previousSibling;
    }

    return e || n;
  },
      Ag = function Ag(e, t) {
    return V(t, function (t) {
      var n = e.dispatch("GetSelectionRange", {
        range: t
      });
      return n.range !== t ? n.range : t;
    });
  },
      Og = ["img", "br"],
      Tg = function Tg(e) {
    var t = br(e).filter(function (e) {
      return 0 !== e.trim().length || e.indexOf(fr) > -1;
    }).isSome();
    return t || H(Og, jt(e)) || function (e) {
      return Vt(e) && "false" === Zt(e, "contenteditable");
    }(e);
  },
      Bg = "[data-mce-autocompleter]",
      Dg = function Dg(e, t) {
    if (Pg(vn(e.getBody())).isNone()) {
      var _o48 = pn('<span data-mce-autocompleter="1" data-mce-bogus="1"></span>', e.getDoc());

      ho(_o48, vn(t.extractContents())), t.insertNode(_o48.dom), Rn(_o48).each(function (e) {
        return e.dom.normalize();
      }), (n = _o48, function (e, t) {
        var n = function n(e) {
          var o = Ln(e);

          for (var _e55 = o.length - 1; _e55 >= 0; _e55--) {
            var _r34 = o[_e55];
            if (t(_r34)) return I.some(_r34);

            var _s21 = n(_r34);

            if (_s21.isSome()) return _s21;
          }

          return I.none();
        };

        return n(e);
      }(n, Tg)).map(function (t) {
        e.selection.setCursorLocation(t.dom, function (e) {
          return "img" === jt(e) ? 1 : br(e).fold(function () {
            return Ln(e).length;
          }, function (e) {
            return e.length;
          });
        }(t));
      });
    }

    var n;
  },
      Pg = function Pg(e) {
    return Zn(e, Bg);
  },
      Lg = {
    "#text": 3,
    "#comment": 8,
    "#cdata": 4,
    "#pi": 7,
    "#doctype": 10,
    "#document-fragment": 11
  },
      Mg = function Mg(e, t, n) {
    var o = n ? "lastChild" : "firstChild",
        r = n ? "prev" : "next";
    if (e[o]) return e[o];

    if (e !== t) {
      var _n57 = e[r];
      if (_n57) return _n57;

      for (var _o49 = e.parent; _o49 && _o49 !== t; _o49 = _o49.parent) {
        if (_n57 = _o49[r], _n57) return _n57;
      }
    }
  },
      Ig = function Ig(e) {
    var t;
    var n = null !== (t = e.value) && void 0 !== t ? t : "";
    if (!is(n)) return !1;
    var o = e.parent;
    return !o || "span" === o.name && !o.attr("style") || !/^[ ]+$/.test(n);
  },
      Fg = function Fg(e) {
    var t = "a" === e.name && !e.attr("href") && e.attr("id");
    return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t;
  };

  var Ug =
  /*#__PURE__*/
  function () {
    _createClass(Ug, null, [{
      key: "create",
      value: function create(e, t) {
        var n = new Ug(e, Lg[e] || 1);
        return t && ge(t, function (e, t) {
          n.attr(t, e);
        }), n;
      }
    }]);

    function Ug(e, t) {
      _classCallCheck(this, Ug);

      this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {});
    }

    _createClass(Ug, [{
      key: "replace",
      value: function replace(e) {
        var t = this;
        return e.parent && e.remove(), t.insert(e, t), t.remove(), t;
      }
    }, {
      key: "attr",
      value: function attr(e, t) {
        var n = this;
        if (!m(e)) return C(e) && ge(e, function (e, t) {
          n.attr(t, e);
        }), n;
        var o = n.attributes;

        if (o) {
          if (void 0 !== t) {
            if (null === t) {
              if (e in o.map) {
                delete o.map[e];
                var _t67 = o.length;

                for (; _t67--;) {
                  if (o[_t67].name === e) return o.splice(_t67, 1), n;
                }
              }

              return n;
            }

            if (e in o.map) {
              var _n58 = o.length;

              for (; _n58--;) {
                if (o[_n58].name === e) {
                  o[_n58].value = t;
                  break;
                }
              }
            } else o.push({
              name: e,
              value: t
            });

            return o.map[e] = t, n;
          }

          return o.map[e];
        }
      }
    }, {
      key: "clone",
      value: function clone() {
        var e = this,
            t = new Ug(e.name, e.type),
            n = e.attributes;

        if (n) {
          var _e56 = [];
          _e56.map = {};

          for (var _t68 = 0, _o50 = n.length; _t68 < _o50; _t68++) {
            var _o51 = n[_t68];
            "id" !== _o51.name && (_e56[_e56.length] = {
              name: _o51.name,
              value: _o51.value
            }, _e56.map[_o51.name] = _o51.value);
          }

          t.attributes = _e56;
        }

        return t.value = e.value, t;
      }
    }, {
      key: "wrap",
      value: function wrap(e) {
        var t = this;
        return t.parent && (t.parent.insert(e, t), e.append(t)), t;
      }
    }, {
      key: "unwrap",
      value: function unwrap() {
        var e = this;

        for (var _t69 = e.firstChild; _t69;) {
          var _n59 = _t69.next;
          e.insert(_t69, e, !0), _t69 = _n59;
        }

        e.remove();
      }
    }, {
      key: "remove",
      value: function remove() {
        var e = this,
            t = e.parent,
            n = e.next,
            o = e.prev;
        return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : o && (o.next = n), t.lastChild === e ? (t.lastChild = o, o && (o.next = null)) : n && (n.prev = o), e.parent = e.next = e.prev = null), e;
      }
    }, {
      key: "append",
      value: function append(e) {
        var t = this;
        e.parent && e.remove();
        var n = t.lastChild;
        return n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e;
      }
    }, {
      key: "insert",
      value: function insert(e, t, n) {
        e.parent && e.remove();
        var o = t.parent || this;
        return n ? (t === o.firstChild ? o.firstChild = e : t.prev && (t.prev.next = e), e.prev = t.prev, e.next = t, t.prev = e) : (t === o.lastChild ? o.lastChild = e : t.next && (t.next.prev = e), e.next = t.next, e.prev = t, t.next = e), e.parent = o, e;
      }
    }, {
      key: "getAll",
      value: function getAll(e) {
        var t = this,
            n = [];

        for (var _o52 = t.firstChild; _o52; _o52 = Mg(_o52, t)) {
          _o52.name === e && n.push(_o52);
        }

        return n;
      }
    }, {
      key: "children",
      value: function children() {
        var e = [];

        for (var _t70 = this.firstChild; _t70; _t70 = _t70.next) {
          e.push(_t70);
        }

        return e;
      }
    }, {
      key: "empty",
      value: function empty() {
        var e = this;

        if (e.firstChild) {
          var _t71 = [];

          for (var _n61 = e.firstChild; _n61; _n61 = Mg(_n61, e)) {
            _t71.push(_n61);
          }

          var _n60 = _t71.length;

          for (; _n60--;) {
            var _e57 = _t71[_n60];
            _e57.parent = _e57.firstChild = _e57.lastChild = _e57.next = _e57.prev = null;
          }
        }

        return e.firstChild = e.lastChild = null, e;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var o;
        var r = this;
        var s = r.firstChild;
        if (Fg(r)) return !1;
        if (s) do {
          if (1 === s.type) {
            if (s.attr("data-mce-bogus")) continue;
            if (e[s.name]) return !1;
            if (Fg(s)) return !1;
          }

          if (8 === s.type) return !1;
          if (3 === s.type && !Ig(s)) return !1;
          if (3 === s.type && s.parent && t[s.parent.name] && is(null !== (o = s.value) && void 0 !== o ? o : "")) return !1;
          if (n && n(s)) return !1;
        } while (s = Mg(s, r));
        return !0;
      }
    }, {
      key: "walk",
      value: function walk(e) {
        return Mg(this, null, e);
      }
    }]);

    return Ug;
  }();

  var zg = function zg(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var o = e.toLowerCase();

    if (-1 !== o.indexOf("[if ", n) && function (e, t) {
      return /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(e.substr(t));
    }(o, n)) {
      var _e58 = o.indexOf("[endif]", n);

      return o.indexOf(">", _e58);
    }

    if (t) {
      var _e59 = o.indexOf(">", n);

      return -1 !== _e59 ? _e59 : o.length;
    }

    {
      var _t72 = /--!?>/g;
      _t72.lastIndex = n;

      var _r35 = _t72.exec(e);

      return _r35 ? _r35.index + _r35[0].length : o.length;
    }
  },
      jg = function jg(e, t, n) {
    var o = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g,
        r = /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g,
        s = e.getVoidElements();
    var a = 1,
        i = n;

    for (; 0 !== a;) {
      for (o.lastIndex = i;;) {
        var _e60 = o.exec(t);

        if (null === _e60) return i;

        if ("!" === _e60[1]) {
          i = He(_e60[2], "--") ? zg(t, !1, _e60.index + 3) : zg(t, !0, _e60.index + 1);
          break;
        }

        {
          r.lastIndex = o.lastIndex;

          var _n62 = r.exec(t);

          if (h(_n62) || _n62.index !== o.lastIndex) continue;
          "/" === _e60[1] ? a -= 1 : ke(s, _e60[2]) || (a += 1), i = o.lastIndex + _n62[0].length;
          break;
        }
      }
    }

    return i;
  },
      Hg = function Hg(e, t) {
    var n = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
        o = e.schema;

    var r = function (e, t) {
      var n = new RegExp(["\\s?(" + e.join("|") + ')="[^"]+"'].join("|"), "gi");
      return t.replace(n, "");
    }(e.getTempAttrs(), t);

    var s = o.getVoidElements();
    var a;

    for (; a = n.exec(r);) {
      var _e61 = n.lastIndex,
          _t73 = a[0].length;

      var _i9 = void 0;

      _i9 = s[a[1]] ? _e61 : jg(o, r, _e61), r = r.substring(0, _e61 - _t73) + r.substring(_i9), n.lastIndex = _e61 - _t73;
    }

    return Mr(r);
  },
      $g = Hg,
      Vg = function Vg(e) {
    var t = Mo(e, "[data-mce-bogus]");
    q(t, function (e) {
      "all" === Zt(e, "data-mce-bogus") ? Co(e) : xr(e) ? (fo(e, bn(mr)), Co(e)) : wo(e);
    });
  },
      qg = function qg(e) {
    var t = Mo(e, "input");
    q(t, function (e) {
      nn(e, "name");
    });
  },
      Wg = function Wg(e, t, n) {
    var o;
    return o = "raw" === t.format ? Dt.trim($g(e.serializer, n.innerHTML)) : "text" === t.format ? function (e, t) {
      var n = e.getDoc(),
          o = $n(vn(e.getBody())),
          r = hn("div", n);
      Qt(r, "data-mce-bogus", "all"), ao(r, {
        position: "fixed",
        left: "-9999999px",
        top: "0"
      }), Eo(r, t.innerHTML), Vg(r), qg(r);

      var s = function (e) {
        return zn(e) ? e : vn(_n(e).dom.body);
      }(o);

      ho(s, r);
      var a = Mr(r.dom.innerText);
      return Co(r), a;
    }(e, n) : "tree" === t.format ? e.serializer.serialize(n, t) : function (e, t) {
      var n = Rl(e),
          o = new RegExp("^(<".concat(n, "[^>]*>(&nbsp;|&#160;|\\s|\xA0|<br \\/>|)<\\/").concat(n, ">[\r\n]*|<br \\/>[\r\n]*)$"));
      return t.replace(o, "");
    }(e, e.serializer.serialize(n, t)), "text" !== t.format && !Rr(vn(n)) && m(o) ? Dt.trim(o) : o;
  },
      Kg = Dt.makeMap,
      Gg = function Gg(e) {
    var t = [],
        n = (e = e || {}).indent,
        o = Kg(e.indent_before || ""),
        r = Kg(e.indent_after || ""),
        s = Qs.getEncodeFunc(e.entity_encoding || "raw", e.entities),
        a = "xhtml" !== e.element_format;
    return {
      start: function start(e, i, l) {
        if (n && o[e] && t.length > 0) {
          var _e62 = t[t.length - 1];
          _e62.length > 0 && "\n" !== _e62 && t.push("\n");
        }

        if (t.push("<", e), i) for (var _e63 = 0, _n63 = i.length; _e63 < _n63; _e63++) {
          var _n64 = i[_e63];
          t.push(" ", _n64.name, '="', s(_n64.value, !0), '"');
        }

        if (t[t.length] = !l || a ? ">" : " />", l && n && r[e] && t.length > 0) {
          var _e64 = t[t.length - 1];
          _e64.length > 0 && "\n" !== _e64 && t.push("\n");
        }
      },
      end: function end(e) {
        var o;
        t.push("</", e, ">"), n && r[e] && t.length > 0 && (o = t[t.length - 1], o.length > 0 && "\n" !== o && t.push("\n"));
      },
      text: function text(e, n) {
        e.length > 0 && (t[t.length] = n ? e : s(e));
      },
      cdata: function cdata(e) {
        t.push("<![CDATA[", e, "]]>");
      },
      comment: function comment(e) {
        t.push("\x3c!--", e, "--\x3e");
      },
      pi: function pi(e, o) {
        o ? t.push("<?", e, " ", s(o), "?>") : t.push("<?", e, "?>"), n && t.push("\n");
      },
      doctype: function doctype(e) {
        t.push("<!DOCTYPE", e, ">", n ? "\n" : "");
      },
      reset: function reset() {
        t.length = 0;
      },
      getContent: function getContent() {
        return t.join("").replace(/\n$/, "");
      }
    };
  },
      Yg = function Yg() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ca();
    var n = Gg(e);
    return e.validate = !("validate" in e) || e.validate, {
      serialize: function serialize(o) {
        var r = e.validate,
            s = {
          3: function _(e) {
            var t;
            n.text(null !== (t = e.value) && void 0 !== t ? t : "", e.raw);
          },
          8: function _(e) {
            var t;
            n.comment(null !== (t = e.value) && void 0 !== t ? t : "");
          },
          7: function _(e) {
            n.pi(e.name, e.value);
          },
          10: function _(e) {
            var t;
            n.doctype(null !== (t = e.value) && void 0 !== t ? t : "");
          },
          4: function _(e) {
            var t;
            n.cdata(null !== (t = e.value) && void 0 !== t ? t : "");
          },
          11: function _(e) {
            var t = e;
            if (t = t.firstChild) do {
              a(t);
            } while (t = t.next);
          }
        };
        n.reset();

        var a = function a(e) {
          var o;
          var i = s[e.type];
          if (i) i(e);else {
            var _s22 = e.name,
                _i10 = _s22 in t.getVoidElements();

            var _l5 = e.attributes;

            if (r && _l5 && _l5.length > 1) {
              var _n65 = [];
              _n65.map = {};

              var _o53 = t.getElementRule(e.name);

              if (_o53) {
                for (var _e65 = 0, _t74 = _o53.attributesOrder.length; _e65 < _t74; _e65++) {
                  var _t75 = _o53.attributesOrder[_e65];

                  if (_t75 in _l5.map) {
                    var _e66 = _l5.map[_t75];
                    _n65.map[_t75] = _e66, _n65.push({
                      name: _t75,
                      value: _e66
                    });
                  }
                }

                for (var _e67 = 0, _t76 = _l5.length; _e67 < _t76; _e67++) {
                  var _t77 = _l5[_e67].name;

                  if (!(_t77 in _n65.map)) {
                    var _e68 = _l5.map[_t77];
                    _n65.map[_t77] = _e68, _n65.push({
                      name: _t77,
                      value: _e68
                    });
                  }
                }

                _l5 = _n65;
              }
            }

            if (n.start(_s22, _l5, _i10), !_i10) {
              var _t78 = e.firstChild;

              if (_t78) {
                "pre" !== _s22 && "textarea" !== _s22 || 3 !== _t78.type || "\n" !== (null === (o = _t78.value) || void 0 === o ? void 0 : o[0]) || n.text("\n", !0);

                do {
                  a(_t78);
                } while (_t78 = _t78.next);
              }

              n.end(_s22);
            }
          }
        };

        return 1 !== o.type || e.inner ? 3 === o.type ? s[3](o) : s[11](o) : a(o), n.getContent();
      }
    };
  },
      Xg = new Set();

  q(["margin", "margin-left", "margin-right", "margin-top", "margin-bottom", "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "border", "border-width", "border-style", "border-color", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "float", "position", "left", "right", "top", "bottom", "z-index", "display", "transform", "width", "max-width", "min-width", "height", "max-height", "min-height", "overflow", "overflow-x", "overflow-y", "text-overflow", "vertical-align", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function"], function (e) {
    Xg.add(e);
  });

  var Qg = ["font", "text-decoration", "text-emphasis"],
      Jg = function Jg(e, t) {
    return me(e.parseStyle(e.getAttrib(t, "style")));
  },
      Zg = function Zg(e, t, n) {
    var o = Jg(e, t),
        r = Jg(e, n),
        s = function s(o) {
      var r, s;
      var a = null !== (r = e.getStyle(t, o)) && void 0 !== r ? r : "",
          i = null !== (s = e.getStyle(n, o)) && void 0 !== s ? s : "";
      return Ge(a) && Ge(i) && a !== i;
    };

    return $(o, function (e) {
      var t = function t(_t79) {
        return $(_t79, function (t) {
          return t === e;
        });
      };

      if (!t(r) && t(Qg)) {
        var _e69 = G(r, function (e) {
          return $(Qg, function (t) {
            return He(e, t);
          });
        });

        return $(_e69, s);
      }

      return s(e);
    });
  },
      ep = function ep(e, t, n) {
    return I.from(n.container()).filter(Xo).exists(function (o) {
      var r = e ? 0 : -1;
      return t(o.data.charAt(n.offset() + r));
    });
  },
      tp = O(ep, !0, Uu),
      np = O(ep, !1, Uu),
      op = function op(e) {
    var t = e.container();
    return Xo(t) && (0 === t.data.length || Lr(t.data) && Km.isBookmarkNode(t.parentNode));
  },
      rp = function rp(e, t) {
    return function (n) {
      return jc(e ? 0 : -1, n).filter(t).isSome();
    };
  },
      sp = function sp(e) {
    return or(e) && "block" === io(vn(e), "display");
  },
      ap = function ap(e) {
    return sr(e) && !function (e) {
      return jo(e) && "all" === e.getAttribute("data-mce-bogus");
    }(e);
  },
      ip = rp(!0, sp),
      lp = rp(!1, sp),
      dp = rp(!0, lr),
      cp = rp(!1, lr),
      up = rp(!0, Ko),
      mp = rp(!1, Ko),
      fp = rp(!0, ap),
      gp = rp(!1, ap),
      pp = function pp(e, t) {
    return function (e, t, n) {
      return En(t, e) ? On(e, function (e) {
        return n(e) || kn(e, t);
      }).slice(0, -1) : [];
    }(e, t, L);
  },
      hp = function hp(e, t) {
    return [e].concat(pp(e, t));
  },
      bp = function bp(e, t, n) {
    return hu(e, t, n, op);
  },
      vp = function vp(e, t) {
    return J(hp(vn(t.container()), e), Cr);
  },
      yp = function yp(e, t, n) {
    return bp(e, t.dom, n).forall(function (e) {
      return vp(t, n).fold(function () {
        return !zc(e, n, t.dom);
      }, function (o) {
        return !zc(e, n, t.dom) && En(o, vn(e.container()));
      });
    });
  },
      Cp = function Cp(e, t, n) {
    return vp(t, n).fold(function () {
      return bp(e, t.dom, n).forall(function (e) {
        return !zc(e, n, t.dom);
      });
    }, function (t) {
      return bp(e, t.dom, n).isNone();
    });
  },
      wp = O(Cp, !1),
      xp = O(Cp, !0),
      kp = O(yp, !1),
      Ep = O(yp, !0),
      Sp = function Sp(e) {
    return Xc(e).exists(xr);
  },
      _p = function _p(e, t, n) {
    var o = G(hp(vn(n.container()), t), Cr),
        r = le(o).getOr(t);
    return gu(e, r.dom, n).filter(Sp);
  },
      Np = function Np(e, t) {
    return Xc(t).exists(xr) || _p(!0, e, t).isSome();
  },
      Rp = function Rp(e, t) {
    return function (e) {
      return I.from(e.getNode(!0)).map(vn);
    }(t).exists(xr) || _p(!1, e, t).isSome();
  },
      Ap = O(_p, !1),
      Op = O(_p, !0),
      Tp = function Tp(e) {
    return Mi.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
  },
      Bp = function Bp(e, t) {
    var n = G(hp(vn(t.container()), e), Cr);
    return le(n).getOr(e);
  },
      Dp = function Dp(e, t) {
    return Tp(t) ? np(t) : np(t) || yu(Bp(e, t).dom, t).exists(np);
  },
      Pp = function Pp(e, t) {
    return Tp(t) ? tp(t) : tp(t) || vu(Bp(e, t).dom, t).exists(tp);
  },
      Lp = function Lp(e) {
    return Xc(e).bind(function (e) {
      return Qn(e, qt);
    }).exists(function (e) {
      return function (e) {
        return H(["pre", "pre-wrap"], e);
      }(io(e, "white-space"));
    });
  },
      Mp = function Mp(e, t) {
    return function (n) {
      return o = new Fo(n, e)[t](), C(o) && sr(o) && Ac(o);
      var o;
    };
  },
      Ip = function Ip(e, t) {
    return !Lp(t) && (function (e, t) {
      return function (e, t) {
        return yu(e.dom, t).isNone();
      }(e, t) || function (e, t) {
        return vu(e.dom, t).isNone();
      }(e, t) || wp(e, t) || xp(e, t) || Rp(e, t) || Np(e, t);
    }(e, t) || Dp(e, t) || Pp(e, t));
  },
      Fp = function Fp(e, t) {
    return !Lp(t) && (wp(e, t) || kp(e, t) || Rp(e, t) || Dp(e, t) || function (e, t) {
      var n = yu(e.dom, t).getOr(t),
          o = Mp(e.dom, "prev");
      return t.isAtStart() && (o(t.container()) || o(n.container()));
    }(e, t));
  },
      Up = function Up(e, t) {
    return !Lp(t) && (xp(e, t) || Ep(e, t) || Np(e, t) || Pp(e, t) || function (e, t) {
      var n = vu(e.dom, t).getOr(t),
          o = Mp(e.dom, "next");
      return t.isAtEnd() && (o(t.container()) || o(n.container()));
    }(e, t));
  },
      zp = function zp(e, t) {
    return Fp(e, t) || Up(e, function (e) {
      var t = e.container(),
          n = e.offset();
      return Xo(t) && n < t.data.length ? Mi(t, n + 1) : e;
    }(t));
  },
      jp = function jp(e, t) {
    return Iu(e.charAt(t));
  },
      Hp = function Hp(e, t) {
    return Uu(e.charAt(t));
  },
      $p = function $p(e, t, n) {
    var o = t.data,
        r = Mi(t, 0);
    return n || !jp(o, 0) || zp(e, r) ? !!(n && Hp(o, 0) && Fp(e, r)) && (t.data = fr + o.slice(1), !0) : (t.data = " " + o.slice(1), !0);
  },
      Vp = function Vp(e, t, n) {
    var o = t.data,
        r = Mi(t, o.length - 1);
    return n || !jp(o, o.length - 1) || zp(e, r) ? !!(n && Hp(o, o.length - 1) && Up(e, r)) && (t.data = o.slice(0, -1) + fr, !0) : (t.data = o.slice(0, -1) + " ", !0);
  },
      qp = function qp(e, t) {
    var n = t.container();
    if (!Xo(n)) return I.none();

    if (function (e) {
      var t = e.container();
      return Xo(t) && je(t.data, fr);
    }(t)) {
      var _o54 = $p(e, n, !1) || function (e) {
        var t = e.data,
            n = function (e) {
          var t = e.split("");
          return V(t, function (e, n) {
            return Iu(e) && n > 0 && n < t.length - 1 && zu(t[n - 1]) && zu(t[n + 1]) ? " " : e;
          }).join("");
        }(t);

        return n !== t && (e.data = n, !0);
      }(n) || Vp(e, n, !1);

      return Mt(_o54, t);
    }

    if (zp(e, t)) {
      var _o55 = $p(e, n, !0) || Vp(e, n, !0);

      return Mt(_o55, t);
    }

    return I.none();
  },
      Wp = function Wp(e, t, n) {
    if (0 === n) return;
    var o = vn(e),
        r = Xn(o, Cr).getOr(o),
        s = e.data.slice(t, t + n),
        a = t + n >= e.data.length && Up(r, Mi(e, e.data.length)),
        i = 0 === t && Fp(r, Mi(e, 0));
    e.replaceData(t, n, cs(s, 4, i, a));
  },
      Kp = function Kp(e, t) {
    var n = e.data.slice(t),
        o = n.length - We(n).length;
    Wp(e, t, o);
  },
      Gp = function Gp(e, t) {
    var n = e.data.slice(0, t),
        o = n.length - Ke(n).length;
    Wp(e, t - o, o);
  },
      Yp = function Yp(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var r = Ke(e.data).length,
        s = o ? e : t,
        a = o ? t : e;
    return o ? s.appendData(a.data) : s.insertData(0, a.data), Co(vn(a)), n && Kp(s, r), s;
  },
      Xp = function Xp(e, t) {
    return function (e, t) {
      var n = e.container(),
          o = e.offset();
      return !Mi.isTextPosition(e) && n === t.parentNode && o > Mi.before(t).offset();
    }(t, e) ? Mi(t.container(), t.offset() - 1) : t;
  },
      Qp = function Qp(e) {
    return os(e.previousSibling) ? I.some((t = e.previousSibling, Xo(t) ? Mi(t, t.data.length) : Mi.after(t))) : e.previousSibling ? wu(e.previousSibling) : I.none();
    var t;
  },
      Jp = function Jp(e) {
    return os(e.nextSibling) ? I.some((t = e.nextSibling, Xo(t) ? Mi(t, 0) : Mi.before(t))) : e.nextSibling ? Cu(e.nextSibling) : I.none();
    var t;
  },
      Zp = function Zp(e, t, n) {
    return function (e, t, n) {
      return e ? function (e, t) {
        return Jp(t).orThunk(function () {
          return Qp(t);
        }).orThunk(function () {
          return function (e, t) {
            return vu(e, Mi.after(t)).orThunk(function () {
              return yu(e, Mi.before(t));
            });
          }(e, t);
        });
      }(t, n) : function (e, t) {
        return Qp(t).orThunk(function () {
          return Jp(t);
        }).orThunk(function () {
          return function (e, t) {
            return I.from(t.previousSibling ? t.previousSibling : t.parentNode).bind(function (t) {
              return yu(e, Mi.before(t));
            }).orThunk(function () {
              return vu(e, Mi.after(t));
            });
          }(e, t);
        });
      }(t, n);
    }(e, t, n).map(O(Xp, n));
  },
      eh = function eh(e, t, n) {
    n.fold(function () {
      e.focus();
    }, function (n) {
      e.selection.setRng(n.toRange(), t);
    });
  },
      th = function th(e, t) {
    return t && ke(e.schema.getBlockElements(), jt(t));
  },
      nh = function nh(e) {
    if (ps(e)) {
      var _t80 = pn('<br data-mce-bogus="1">');

      return yo(e), ho(e, _t80), I.some(Mi.before(_t80.dom));
    }

    return I.none();
  },
      oh = function oh(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var r = Zp(t, e.getBody(), n.dom),
        s = Xn(n, O(th, e), (a = e.getBody(), function (e) {
      return e.dom === a;
    }));
    var a;

    var i = function (e, t, n) {
      var o = Tn(e).filter(Wt),
          r = Bn(e).filter(Wt);
      return Co(e), (s = o, a = r, i = t, l = function l(e, t, o) {
        var r = e.dom,
            s = t.dom,
            a = r.data.length;
        return Yp(r, s, n), o.container() === s ? Mi(r, a) : o;
      }, s.isSome() && a.isSome() && i.isSome() ? I.some(l(s.getOrDie(), a.getOrDie(), i.getOrDie())) : I.none()).orThunk(function () {
        return n && (o.each(function (e) {
          return Gp(e.dom, e.dom.length);
        }), r.each(function (e) {
          return Kp(e.dom, 0);
        })), t;
      });
      var s, a, i, l;
    }(n, r, function (e, t) {
      return ke(e.schema.getTextInlineElements(), jt(t));
    }(e, n));

    e.dom.isEmpty(e.getBody()) ? (e.setContent(""), e.selection.setCursorLocation()) : s.bind(nh).fold(function () {
      o && eh(e, t, i);
    }, function (n) {
      o && eh(e, t, I.some(n));
    });
  },
      rh = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
      sh = function sh(e, t) {
    return wn(vn(t), ed(e)) && !Ns(e.schema, t) && e.dom.isEditable(t);
  },
      ah = function ah(e) {
    var t;
    return "rtl" === Oa.DOM.getStyle(e, "direction", !0) || function (e) {
      return rh.test(e);
    }(null !== (t = e.textContent) && void 0 !== t ? t : "");
  },
      ih = function ih(e, t, n) {
    var o = function (e, t, n) {
      return G(Oa.DOM.getParents(n.container(), "*", t), e);
    }(e, t, n);

    return I.from(o[o.length - 1]);
  },
      lh = function lh(e, t) {
    var n = t.container(),
        o = t.offset();
    return e ? zr(n) ? Xo(n.nextSibling) ? Mi(n.nextSibling, 0) : Mi.after(n) : $r(t) ? Mi(n, o + 1) : t : zr(n) ? Xo(n.previousSibling) ? Mi(n.previousSibling, n.previousSibling.data.length) : Mi.before(n) : Vr(t) ? Mi(n, o - 1) : t;
  },
      dh = O(lh, !0),
      ch = O(lh, !1),
      uh = function uh(e, t) {
    var n = function n(e) {
      return e.stopImmediatePropagation();
    };

    e.on("beforeinput input", n, !0), e.getDoc().execCommand(t), e.off("beforeinput input", n);
  },
      mh = function mh(e) {
    return uh(e, "Delete");
  },
      fh = function fh(e) {
    return kr(e) || Sr(e);
  },
      gh = function gh(e, t) {
    return En(e, t) ? Qn(t, fh, function (e) {
      return function (t) {
        return Pt(Rn(t), e, kn);
      };
    }(e)) : I.none();
  },
      ph = function ph(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
    e.dom.isEmpty(e.getBody()) && e.setContent("", {
      no_selection: !t
    });
  },
      hh = function hh(e, t, n) {
    return Lt(Cu(n), wu(n), function (o, r) {
      var s = lh(!0, o),
          a = lh(!1, r),
          i = lh(!1, t);
      return e ? vu(n, i).exists(function (e) {
        return e.isEqual(a) && t.isEqual(s);
      }) : yu(n, i).exists(function (e) {
        return e.isEqual(s) && t.isEqual(a);
      });
    }).getOr(!0);
  },
      bh = function bh(e) {
    var t;
    return (8 === Ht(t = e) || "#comment" === jt(t) ? Tn(e) : Fn(e)).bind(bh).orThunk(function () {
      return I.some(e);
    });
  },
      vh = function vh(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var r;
    t.deleteContents();
    var s = bh(n).getOr(n),
        a = vn(null !== (r = e.dom.getParent(s.dom, e.dom.isBlock)) && void 0 !== r ? r : n.dom);

    if (a.dom === e.getBody() ? ph(e, o) : ps(a) && (Br(a), o && e.selection.setCursorLocation(a.dom, 0)), !kn(n, a)) {
      var _e70 = Pt(Rn(a), n) ? [] : Rn(i = a).map(Ln).map(function (e) {
        return G(e, function (e) {
          return !kn(i, e);
        });
      }).getOr([]);

      q(_e70.concat(Ln(n)), function (e) {
        kn(e, a) || En(e, a) || !ps(e) || Co(e);
      });
    }

    var i;
  },
      yh = function yh(e) {
    return Mo(e, "td,th");
  },
      Ch = function Ch(e, t) {
    return {
      start: e,
      end: t
    };
  },
      wh = il([{
    singleCellTable: ["rng", "cell"]
  }, {
    fullTable: ["table"]
  }, {
    partialTable: ["cells", "outsideDetails"]
  }, {
    multiTable: ["startTableCells", "endTableCells", "betweenRng"]
  }]),
      xh = function xh(e, t) {
    return eo(vn(e), "td,th", t);
  },
      kh = function kh(e) {
    return !kn(e.start, e.end);
  },
      Eh = function Eh(e, t) {
    return Qu(e.start, t).bind(function (n) {
      return Qu(e.end, t).bind(function (e) {
        return Mt(kn(n, e), n);
      });
    });
  },
      Sh = function Sh(e) {
    return function (t) {
      return Eh(t, e).map(function (e) {
        return function (e, t, n) {
          return {
            rng: e,
            table: t,
            cells: n
          };
        }(t, e, yh(e));
      });
    };
  },
      _h = function _h(e, t, n, o) {
    if (n.collapsed || !e.forall(kh)) return I.none();

    if (t.isSameTable) {
      var _t81 = e.bind(Sh(o));

      return I.some({
        start: _t81,
        end: _t81
      });
    }

    {
      var _e71 = xh(n.startContainer, o),
          _t82 = xh(n.endContainer, o),
          _r36 = _e71.bind(function (e) {
        return function (t) {
          return Qu(t, e).bind(function (e) {
            return de(yh(e)).map(function (e) {
              return Ch(t, e);
            });
          });
        };
      }(o)).bind(Sh(o)),
          _s23 = _t82.bind(function (e) {
        return function (t) {
          return Qu(t, e).bind(function (e) {
            return le(yh(e)).map(function (e) {
              return Ch(e, t);
            });
          });
        };
      }(o)).bind(Sh(o));

      return I.some({
        start: _r36,
        end: _s23
      });
    }
  },
      Nh = function Nh(e, t) {
    return Z(e, function (e) {
      return kn(e, t);
    });
  },
      Rh = function Rh(e) {
    return Lt(Nh(e.cells, e.rng.start), Nh(e.cells, e.rng.end), function (t, n) {
      return e.cells.slice(t, n + 1);
    });
  },
      Ah = function Ah(e, t) {
    var n = t.startTable,
        o = t.endTable,
        r = e.cloneRange();
    return n.each(function (e) {
      return r.setStartAfter(e.dom);
    }), o.each(function (e) {
      return r.setEndBefore(e.dom);
    }), r;
  },
      Oh = function Oh(e, t) {
    var n = function (e) {
      return function (t) {
        return kn(e, t);
      };
    }(e),
        o = function (e, t) {
      var n = xh(e.startContainer, t),
          o = xh(e.endContainer, t);
      return Lt(n, o, Ch);
    }(t, n),
        r = function (e, t) {
      var n = function n(e) {
        return Qu(vn(e), t);
      },
          o = n(e.startContainer),
          r = n(e.endContainer),
          s = o.isSome(),
          a = r.isSome(),
          i = Lt(o, r, kn).getOr(!1);

      return {
        startTable: o,
        endTable: r,
        isStartInTable: s,
        isEndInTable: a,
        isSameTable: i,
        isMultiTable: !i && s && a
      };
    }(t, n);

    return function (e, t, n) {
      return e.exists(function (e) {
        return function (e, t) {
          return !kh(e) && Eh(e, t).exists(function (e) {
            var t = e.dom.rows;
            return 1 === t.length && 1 === t[0].cells.length;
          });
        }(e, n) && em(e.start, t);
      });
    }(o, t, n) ? o.map(function (e) {
      return wh.singleCellTable(t, e.start);
    }) : r.isMultiTable ? function (e, t, n, o) {
      return _h(e, t, n, o).bind(function (_ref7) {
        var e = _ref7.start,
            o = _ref7.end;
        var r = e.bind(Rh).getOr([]),
            s = o.bind(Rh).getOr([]);

        if (r.length > 0 && s.length > 0) {
          var _e72 = Ah(n, t);

          return I.some(wh.multiTable(r, s, _e72));
        }

        return I.none();
      });
    }(o, r, t, n) : function (e, t, n, o) {
      return _h(e, t, n, o).bind(function (_ref8) {
        var e = _ref8.start,
            t = _ref8.end;
        return e.or(t);
      }).bind(function (e) {
        var o = t.isSameTable,
            r = Rh(e).getOr([]);
        if (o && e.cells.length === r.length) return I.some(wh.fullTable(e.table));

        if (r.length > 0) {
          if (o) return I.some(wh.partialTable(r, I.none()));
          {
            var _e73 = Ah(n, t);

            return I.some(wh.partialTable(r, I.some(_objectSpread({}, t, {
              rng: _e73
            }))));
          }
        }

        return I.none();
      });
    }(o, r, t, n);
  },
      Th = function Th(e) {
    return q(e, function (e) {
      nn(e, "contenteditable"), Br(e);
    });
  },
      Bh = function Bh(e, t, n, o) {
    var r = n.cloneRange();
    o ? (r.setStart(n.startContainer, n.startOffset), r.setEndAfter(t.dom.lastChild)) : (r.setStartBefore(t.dom.firstChild), r.setEnd(n.endContainer, n.endOffset)), Mh(e, r, t, !1).each(function (e) {
      return e();
    });
  },
      Dh = function Dh(e) {
    var t = Xu(e),
        n = vn(e.selection.getNode());
    ar(n.dom) && ps(n) ? e.selection.setCursorLocation(n.dom, 0) : e.selection.collapse(!0), t.length > 1 && $(t, function (e) {
      return kn(e, n);
    }) && Qt(n, "data-mce-selected", "1");
  },
      Ph = function Ph(e, t, n) {
    return I.some(function () {
      var o = e.selection.getRng(),
          r = n.bind(function (_ref9) {
        var n = _ref9.rng,
            r = _ref9.isStartInTable;

        var s = function (e, t) {
          return I.from(e.dom.getParent(t, e.dom.isBlock)).map(vn);
        }(e, r ? n.endContainer : n.startContainer);

        n.deleteContents(), function (e, t, n) {
          n.each(function (n) {
            t ? Co(n) : (Br(n), e.selection.setCursorLocation(n.dom, 0));
          });
        }(e, r, s.filter(ps));
        var a = r ? t[0] : t[t.length - 1];
        return Bh(e, a, o, r), ps(a) ? I.none() : I.some(r ? t.slice(1) : t.slice(0, -1));
      }).getOr(t);
      Th(r), Dh(e);
    });
  },
      Lh = function Lh(e, t, n, o) {
    return I.some(function () {
      var r = e.selection.getRng(),
          s = t[0],
          a = n[n.length - 1];
      Bh(e, s, r, !0), Bh(e, a, r, !1);
      var i = ps(s) ? t : t.slice(1),
          l = ps(a) ? n : n.slice(0, -1);
      Th(i.concat(l)), o.deleteContents(), Dh(e);
    });
  },
      Mh = function Mh(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    return I.some(function () {
      vh(e, t, n, o);
    });
  },
      Ih = function Ih(e, t) {
    return I.some(function () {
      return oh(e, !1, t);
    });
  },
      Fh = function Fh(e, t) {
    return J(hp(t, e), Nr);
  },
      Uh = function Uh(e, t) {
    return J(hp(t, e), Yt("caption"));
  },
      zh = function zh(e, t) {
    return I.some(function () {
      Br(t), e.selection.setCursorLocation(t.dom, 0);
    });
  },
      jh = function jh(e, t) {
    return e ? up(t) : mp(t);
  },
      Hh = function Hh(e, t, n) {
    var o = vn(e.getBody());
    return Uh(o, n).fold(function () {
      return function (e, t, n, o) {
        var r = Mi.fromRangeStart(e.selection.getRng());
        return Fh(n, o).bind(function (o) {
          return ps(o) ? zh(e, o) : function (e, t, n, o, r) {
            return pu(n, e.getBody(), r).bind(function (e) {
              return Fh(t, vn(e.getNode())).bind(function (e) {
                return kn(e, o) ? I.none() : I.some(E);
              });
            });
          }(e, n, t, o, r);
        });
      }(e, t, o, n).orThunk(function () {
        return Mt(function (e, t) {
          var n = Mi.fromRangeStart(e.selection.getRng());
          return jh(t, n) || gu(t, e.getBody(), n).exists(function (e) {
            return jh(t, e);
          });
        }(e, t), E);
      });
    }, function (n) {
      return function (e, t, n, o) {
        var r = Mi.fromRangeStart(e.selection.getRng());
        return ps(o) ? zh(e, o) : function (e, t, n, o, r) {
          return pu(n, e.getBody(), r).fold(function () {
            return I.some(E);
          }, function (s) {
            return function (e, t, n, o) {
              return Cu(e.dom).bind(function (r) {
                return wu(e.dom).map(function (e) {
                  return t ? n.isEqual(r) && o.isEqual(e) : n.isEqual(e) && o.isEqual(r);
                });
              }).getOr(!0);
            }(o, n, r, s) ? function (e, t) {
              return zh(e, t);
            }(e, o) : function (e, t, n) {
              return Uh(e, vn(n.getNode())).fold(function () {
                return I.some(E);
              }, function (e) {
                return Mt(!kn(e, t), E);
              });
            }(t, o, s);
          });
        }(e, n, t, o, r);
      }(e, t, o, n);
    });
  },
      $h = function $h(e, t) {
    var n = vn(e.selection.getStart(!0)),
        o = Xu(e);
    return e.selection.isCollapsed() && 0 === o.length ? Hh(e, t, n) : function (e, t, n) {
      var o = vn(e.getBody()),
          r = e.selection.getRng();
      return 0 !== n.length ? Ph(e, n, I.none()) : function (e, t, n, o) {
        return Uh(t, o).fold(function () {
          return function (e, t, n) {
            return Oh(t, n).bind(function (t) {
              return t.fold(O(Mh, e), O(Ih, e), O(Ph, e), O(Lh, e));
            });
          }(e, t, n);
        }, function (t) {
          return function (e, t) {
            return zh(e, t);
          }(e, t);
        });
      }(e, o, r, t);
    }(e, n, o);
  },
      Vh = function Vh(e, t) {
    var n = t;

    for (; n && n !== e;) {
      if (rr(n) || sr(n)) return n;
      n = n.parentNode;
    }

    return null;
  },
      qh = ["data-ephox-", "data-mce-", "data-alloy-", "data-snooker-", "_"],
      Wh = Dt.each,
      Kh = function Kh(e) {
    var t = e.dom,
        n = new Set(e.serializer.getTempAttrs()),
        o = function o(e) {
      return $(qh, function (t) {
        return He(e, t);
      }) || n.has(e);
    };

    return {
      compare: function compare(e, n) {
        if (e.nodeName !== n.nodeName || e.nodeType !== n.nodeType) return !1;

        var r = function r(e) {
          var n = {};
          return Wh(t.getAttribs(e), function (r) {
            var s = r.nodeName.toLowerCase();
            "style" === s || o(s) || (n[s] = t.getAttrib(e, s));
          }), n;
        },
            s = function s(e, t) {
          for (var _n66 in e) {
            if (ke(e, _n66)) {
              var _o56 = t[_n66];
              if (v(_o56)) return !1;
              if (e[_n66] !== _o56) return !1;
              delete t[_n66];
            }
          }

          for (var _e74 in t) {
            if (ke(t, _e74)) return !1;
          }

          return !0;
        };

        if (jo(e) && jo(n)) {
          if (!s(r(e), r(n))) return !1;
          if (!s(t.parseStyle(t.getAttrib(e, "style")), t.parseStyle(t.getAttrib(n, "style")))) return !1;
        }

        return !Mu(e) && !Mu(n);
      },
      isAttributeInternal: o
    };
  },
      Gh = function Gh(e, t, n, o) {
    var r = n.name;

    for (var _t83 = 0, _s24 = e.length; _t83 < _s24; _t83++) {
      var _s25 = e[_t83];

      if (_s25.name === r) {
        var _e75 = o.nodes[r];
        _e75 ? _e75.nodes.push(n) : o.nodes[r] = {
          filter: _s25,
          nodes: [n]
        };
      }
    }

    if (n.attributes) for (var _e76 = 0, _r37 = t.length; _e76 < _r37; _e76++) {
      var _r38 = t[_e76],
          _s26 = _r38.name;

      if (_s26 in n.attributes.map) {
        var _e77 = o.attributes[_s26];
        _e77 ? _e77.nodes.push(n) : o.attributes[_s26] = {
          filter: _r38,
          nodes: [n]
        };
      }
    }
  },
      Yh = function Yh(e, t) {
    var n = function n(e, _n67) {
      ge(e, function (e) {
        var o = ce(e.nodes);
        q(e.filter.callbacks, function (r) {
          for (var _t84 = o.length - 1; _t84 >= 0; _t84--) {
            var _r39 = o[_t84];
            (_n67 ? void 0 !== _r39.attr(e.filter.name) : _r39.name === e.filter.name) && !y(_r39.parent) || o.splice(_t84, 1);
          }

          o.length > 0 && r(o, e.filter.name, t);
        });
      });
    };

    n(e.nodes, !1), n(e.attributes, !0);
  },
      Xh = function Xh(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var r = function (e, t, n) {
      var o = {
        nodes: {},
        attributes: {}
      };
      return n.firstChild && function (n, r) {
        var s = n;

        for (; s = s.walk();) {
          Gh(e, t, s, o);
        }
      }(n), o;
    }(e, t, n);

    Yh(r, o);
  },
      Qh = function Qh(e, t, n, o) {
    if ((e.pad_empty_with_br || t.insert) && n(o)) {
      var _e78 = new Ug("br", 1);

      t.insert && _e78.attr("data-mce-bogus", "1"), o.empty().append(_e78);
    } else o.empty().append(new Ug("#text", 3)).value = fr;
  },
      Jh = function Jh(e, t) {
    var n = null == e ? void 0 : e.firstChild;
    return C(n) && n === e.lastChild && n.name === t;
  },
      Zh = function Zh(e, t, n, o) {
    return o.isEmpty(t, n, function (t) {
      return function (e, t) {
        var n = e.getElementRule(t.name);
        return !0 === (null == n ? void 0 : n.paddEmpty);
      }(e, t);
    });
  },
      eb = function eb(e) {
    var t;

    for (var _n68 = e; _n68; _n68 = _n68.parent) {
      var _e79 = _n68.attr("contenteditable");

      if ("false" === _e79) break;
      "true" === _e79 && (t = _n68);
    }

    return I.from(t);
  },
      tb = function tb(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.parent;
    if (t.getSpecialElements()[e.name]) e.empty().remove();else {
      var _o57 = e.children();

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = _o57[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _e80 = _step3.value;
          n && !t.isValidChild(n.name, _e80.name) && tb(_e80, t, n);
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

      e.unwrap();
    }
  },
      nb = function nb(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : E;

    var r = t.getTextBlockElements(),
        s = t.getNonEmptyElements(),
        a = t.getWhitespaceElements(),
        i = Dt.makeMap("tr,td,th,tbody,thead,tfoot,table"),
        l = new Set(),
        d = function d(e) {
      return e !== n && !i[e.name];
    };

    for (var _n69 = 0; _n69 < e.length; _n69++) {
      var _i11 = e[_n69];

      var _c2 = void 0,
          _u3 = void 0,
          _m4 = void 0;

      if (!_i11.parent || l.has(_i11)) continue;

      if (r[_i11.name] && "li" === _i11.parent.name) {
        var _e81 = _i11.next;

        for (; _e81 && r[_e81.name];) {
          _e81.name = "li", l.add(_e81), _i11.parent.insert(_e81, _i11.parent), _e81 = _e81.next;
        }

        _i11.unwrap();

        continue;
      }

      var _f3 = [_i11];

      for (_c2 = _i11.parent; _c2 && !t.isValidChild(_c2.name, _i11.name) && d(_c2); _c2 = _c2.parent) {
        _f3.push(_c2);
      }

      if (_c2 && _f3.length > 1) {
        if (t.isValidChild(_c2.name, _i11.name)) {
          _f3.reverse(), _u3 = _f3[0].clone(), o(_u3);
          var _e82 = _u3;

          for (var _n70 = 0; _n70 < _f3.length - 1; _n70++) {
            t.isValidChild(_e82.name, _f3[_n70].name) && _n70 > 0 ? (_m4 = _f3[_n70].clone(), o(_m4), _e82.append(_m4)) : _m4 = _e82;

            for (var _e83 = _f3[_n70].firstChild; _e83 && _e83 !== _f3[_n70 + 1];) {
              var _t85 = _e83.next;
              _m4.append(_e83), _e83 = _t85;
            }

            _e82 = _m4;
          }

          Zh(t, s, a, _u3) ? _c2.insert(_i11, _f3[0], !0) : (_c2.insert(_u3, _f3[0], !0), _c2.insert(_i11, _u3)), _c2 = _f3[0], (Zh(t, s, a, _c2) || Jh(_c2, "br")) && _c2.empty().remove();
        } else tb(_i11, t);
      } else if (_i11.parent) {
        if ("li" === _i11.name) {
          var _e84 = _i11.prev;

          if (_e84 && ("ul" === _e84.name || "ol" === _e84.name)) {
            _e84.append(_i11);

            continue;
          }

          if (_e84 = _i11.next, _e84 && ("ul" === _e84.name || "ol" === _e84.name) && _e84.firstChild) {
            _e84.insert(_i11, _e84.firstChild, !0);

            continue;
          }

          var _t86 = new Ug("ul", 1);

          o(_t86), _i11.wrap(_t86);
          continue;
        }

        if (t.isValidChild(_i11.parent.name, "div") && t.isValidChild("div", _i11.name)) {
          var _e85 = new Ug("div", 1);

          o(_e85), _i11.wrap(_e85);
        } else tb(_i11, t);
      }
    }
  },
      ob = function ob(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t.parent;
    return !(!n || !e.children[t.name] || e.isValidChild(n.name, t.name)) || !(!n || "a" !== t.name || !function (e, t) {
      var n = e;

      for (; n;) {
        if ("a" === n.name) return !0;
        n = n.parent;
      }

      return !1;
    }(n));
  },
      rb = function rb(e) {
    return e.collapsed ? e : function (e) {
      var t = Mi.fromRangeStart(e),
          n = Mi.fromRangeEnd(e),
          o = e.commonAncestorContainer;
      return gu(!1, o, n).map(function (r) {
        return !zc(t, n, o) && zc(t, r, o) ? function (e, t, n, o) {
          var r = document.createRange();
          return r.setStart(e, t), r.setEnd(n, o), r;
        }(t.container(), t.offset(), r.container(), r.offset()) : e;
      }).getOr(e);
    }(e);
  },
      sb = function sb(e, t) {
    var n = t.firstChild,
        o = t.lastChild;
    return n && "meta" === n.name && (n = n.next), o && "mce_marker" === o.attr("id") && (o = o.prev), function (e, t) {
      var n = e.getNonEmptyElements();
      return C(t) && (t.isEmpty(n) || function (e, t) {
        return e.getBlockElements()[t.name] && function (e) {
          return C(e.firstChild) && e.firstChild === e.lastChild;
        }(t) && function (e) {
          return "br" === e.name || e.value === fr;
        }(t.firstChild);
      }(e, t));
    }(e, o) && (o = null == o ? void 0 : o.prev), !(!n || n !== o || "ul" !== n.name && "ol" !== n.name);
  },
      ab = function ab(e) {
    return e.length > 0 && (!(n = e[e.length - 1]).firstChild || C(null == (t = n) ? void 0 : t.firstChild) && t.firstChild === t.lastChild && function (e) {
      return e.data === fr || nr(e);
    }(t.firstChild)) ? e.slice(0, -1) : e;
    var t, n;
  },
      ib = function ib(e, t) {
    var n = e.getParent(t, e.isBlock);
    return n && "LI" === n.nodeName ? n : null;
  },
      lb = function lb(e, t) {
    var n = Mi.after(e),
        o = cu(t).prev(n);
    return o ? o.toRange() : null;
  },
      db = function db(e, t, n, o) {
    var r = function (e, t, n) {
      var o = t.serialize(n);
      return function (e) {
        var t, n;
        var o = e.firstChild,
            r = e.lastChild;
        return o && "META" === o.nodeName && (null === (t = o.parentNode) || void 0 === t || t.removeChild(o)), r && "mce_marker" === r.id && (null === (n = r.parentNode) || void 0 === n || n.removeChild(r)), e;
      }(e.createFragment(o));
    }(t, e, o),
        s = ib(t, n.startContainer),
        a = ab((i = r.firstChild, G(null !== (l = null == i ? void 0 : i.childNodes) && void 0 !== l ? l : [], function (e) {
      return "LI" === e.nodeName;
    })));

    var i, l;

    var d = t.getRoot(),
        c = function c(e) {
      var o = Mi.fromRangeStart(n),
          r = cu(t.getRoot()),
          a = 1 === e ? r.prev(o) : r.next(o),
          i = null == a ? void 0 : a.getNode();
      return !i || ib(t, i) !== s;
    };

    return s ? c(1) ? function (e, t, n) {
      var o = e.parentNode;
      return o && Dt.each(t, function (t) {
        o.insertBefore(t, e);
      }), function (e, t) {
        var n = Mi.before(e),
            o = cu(t).next(n);
        return o ? o.toRange() : null;
      }(e, n);
    }(s, a, d) : c(2) ? function (e, t, n, o) {
      return o.insertAfter(t.reverse(), e), lb(t[0], n);
    }(s, a, d, t) : function (e, t, n, o) {
      var r = function (e, t) {
        var n = t.cloneRange(),
            o = t.cloneRange();
        return n.setStartBefore(e), o.setEndAfter(e), [n.cloneContents(), o.cloneContents()];
      }(e, o),
          s = e.parentNode;

      return s && (s.insertBefore(r[0], e), Dt.each(t, function (t) {
        s.insertBefore(t, e);
      }), s.insertBefore(r[1], e), s.removeChild(e)), lb(t[t.length - 1], n);
    }(s, a, d, n) : null;
  },
      cb = ["pre"],
      ub = ar,
      mb = function mb(e, t, n) {
    var o, r;
    var s = e.selection,
        a = e.dom,
        i = e.parser,
        l = n.merge,
        d = Yg({
      validate: !0
    }, e.schema),
        c = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';
    -1 === t.indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, c);
    var u = s.getRng();
    var m = u.startContainer,
        f = e.getBody();
    m === f && s.isCollapsed() && a.isBlock(f.firstChild) && function (e, t) {
      return C(t) && !e.schema.getVoidElements()[t.nodeName];
    }(e, f.firstChild) && a.isEmpty(f.firstChild) && (u = a.createRng(), u.setStart(f.firstChild, 0), u.setEnd(f.firstChild, 0), s.setRng(u)), s.isCollapsed() || function (e) {
      var t = e.dom,
          n = rb(e.selection.getRng());
      e.selection.setRng(n);
      var o = t.getParent(n.startContainer, ub);
      (function (e, t, n) {
        return !!C(n) && n === e.getParent(t.endContainer, ub) && em(vn(n), t);
      })(t, n, o) ? Mh(e, n, vn(o)) : n.startContainer === n.endContainer && n.endOffset - n.startOffset == 1 && Xo(n.startContainer.childNodes[n.startOffset]) ? n.deleteContents() : e.getDoc().execCommand("Delete", !1);
    }(e);
    var g = s.getNode(),
        p = {
      context: g.nodeName.toLowerCase(),
      data: n.data,
      insert: !0
    },
        h = i.parse(t, p);
    if (!0 === n.paste && sb(e.schema, h) && function (e, t) {
      return !!ib(e, t);
    }(a, g)) return u = db(d, a, s.getRng(), h), u && s.setRng(u), t;
    !0 === n.paste && function (e, t, n, o) {
      var r;
      var s = t.firstChild,
          a = t.lastChild,
          i = s === ("bookmark" === a.attr("data-mce-type") ? a.prev : a),
          l = H(cb, s.name);

      if (i && l) {
        var _t87 = "false" !== s.attr("contenteditable"),
            _a13 = (null === (r = e.getParent(n, e.isBlock)) || void 0 === r ? void 0 : r.nodeName.toLowerCase()) === s.name,
            _i12 = I.from(Vh(o, n)).forall(rr);

        return _t87 && _a13 && _i12;
      }

      return !1;
    }(a, h, g, e.getBody()) && (null === (o = h.firstChild) || void 0 === o || o.unwrap()), function (e) {
      var t = e;

      for (; t = t.walk();) {
        1 === t.type && t.attr("data-mce-fragment", "1");
      }
    }(h);
    var b = h.lastChild;

    if (b && "mce_marker" === b.attr("id")) {
      var _t88 = b;

      for (b = b.prev; b; b = b.walk(!0)) {
        if (3 === b.type || !a.isBlock(b.name)) {
          b.parent && e.schema.isValidChild(b.parent.name, "span") && b.parent.insert(_t88, b, "br" === b.name);
          break;
        }
      }
    }

    if (e._selectionOverrides.showBlockCaretContainer(g), p.invalid) {
      e.selection.setContent(c);

      var _n71,
          _o58 = s.getNode();

      var _l6 = e.getBody();

      for (er(_o58) ? _o58 = _n71 = _l6 : _n71 = _o58; _n71 && _n71 !== _l6;) {
        _o58 = _n71, _n71 = _n71.parentNode;
      }

      t = _o58 === _l6 ? _l6.innerHTML : a.getOuterHTML(_o58);

      var _u4 = i.parse(t),
          _m5 = function (e) {
        for (var _t89 = e; _t89; _t89 = _t89.walk()) {
          if ("mce_marker" === _t89.attr("id")) return I.some(_t89);
        }

        return I.none();
      }(_u4),
          _f4 = _m5.bind(eb).getOr(_u4);

      _m5.each(function (e) {
        return e.replace(h);
      });

      var _g2 = h.children(),
          _p2 = null !== (r = h.parent) && void 0 !== r ? r : _u4;

      h.unwrap();

      var _b2 = G(_g2, function (t) {
        return ob(e.schema, t, _p2);
      });

      nb(_b2, e.schema, _f4), Xh(i.getNodeFilters(), i.getAttributeFilters(), _u4), t = d.serialize(_u4), _o58 === _l6 ? a.setHTML(_l6, t) : a.setOuterHTML(_o58, t);
    } else t = d.serialize(h), function (e, t, n) {
      var o;
      if ("all" === n.getAttribute("data-mce-bogus")) null === (o = n.parentNode) || void 0 === o || o.insertBefore(e.dom.createFragment(t), n);else {
        var _o59 = n.firstChild,
            _r40 = n.lastChild;
        !_o59 || _o59 === _r40 && "BR" === _o59.nodeName ? e.dom.setHTML(n, t) : e.selection.setContent(t, {
          no_events: !0
        });
      }
    }(e, t, g);

    var v;
    return function (e, t) {
      var n = e.schema.getTextInlineElements(),
          o = e.dom;

      if (t) {
        var _t90 = e.getBody(),
            _r41 = Kh(e);

        Dt.each(o.select("*[data-mce-fragment]"), function (e) {
          if (C(n[e.nodeName.toLowerCase()]) && function (e, t) {
            return ne(Jg(e, t), function (e) {
              return !function (e) {
                return Xg.has(e);
              }(e);
            });
          }(o, e)) for (var _n72 = e.parentElement; C(_n72) && _n72 !== _t90 && !Zg(o, e, _n72); _n72 = _n72.parentElement) {
            if (_r41.compare(_n72, e)) {
              o.remove(e, !0);
              break;
            }
          }
        });
      }
    }(e, l), function (e, t) {
      var n, o, r;
      var s;
      var a = e.dom,
          i = e.selection;
      if (!t) return;
      i.scrollIntoView(t);
      var l = Vh(e.getBody(), t);
      if (l && "false" === a.getContentEditable(l)) return a.remove(t), void i.select(l);
      var d = a.createRng();
      var c = t.previousSibling;

      if (Xo(c)) {
        d.setStart(c, null !== (o = null === (n = c.nodeValue) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0);
        var _e86 = t.nextSibling;
        Xo(_e86) && (c.appendData(_e86.data), null === (r = _e86.parentNode) || void 0 === r || r.removeChild(_e86));
      } else d.setStartBefore(t), d.setEndBefore(t);

      var u = a.getParent(t, a.isBlock);
      a.remove(t), u && a.isEmpty(u) && (yo(vn(u)), d.setStart(u, 0), d.setEnd(u, 0), ub(u) || function (e) {
        return !!e.getAttribute("data-mce-fragment");
      }(u) || !(s = function (t) {
        var n = Mi.fromRangeStart(t);
        return n = cu(e.getBody()).next(n), null == n ? void 0 : n.toRange();
      }(d)) ? a.add(u, a.create("br", {
        "data-mce-bogus": "1"
      })) : (d = s, a.remove(u))), i.setRng(d);
    }(e, a.get("mce_marker")), v = e.getBody(), Dt.each(v.getElementsByTagName("*"), function (e) {
      e.removeAttribute("data-mce-fragment");
    }), function (e, t) {
      I.from(e.getParent(t, "td,th")).map(vn).each(Dr);
    }(a, s.getStart()), function (e) {
      q(ce(e.getBody().querySelectorAll("details")), function (e) {
        var t = G(ce(e.children), function (e) {
          return "SUMMARY" === e.nodeName;
        });
        t.length > 1 && q(t.slice(1), function (e) {
          var t = vn(e);
          mn(t, "mce-accordion-summary"), si(t, "p");
        });
      });
    }(e), function (e, t, n) {
      var o = On(vn(n), function (e) {
        return kn(e, vn(t));
      });
      ie(o, o.length - 2).filter(qt).fold(function () {
        return xs(e, t);
      }, function (t) {
        return xs(e, t.dom);
      });
    }(e.schema, e.getBody(), s.getStart()), t;
  },
      fb = function fb(e) {
    return e instanceof Ug;
  },
      gb = function gb(e, t, n) {
    e.dom.setHTML(e.getBody(), t), !0 !== n && function (e) {
      kg(e) && Cu(e.getBody()).each(function (t) {
        var n = t.getNode(),
            o = Ko(n) ? Cu(n).getOr(t) : t;
        e.selection.setRng(o.toRange());
      });
    }(e);
  },
      pb = function pb(e, t) {
    return function (e, t) {
      var n = e.dom;
      return n.parentNode ? function (e, t) {
        return J(e.dom.childNodes, function (e) {
          return t(vn(e));
        }).map(vn);
      }(vn(n.parentNode), function (n) {
        return !kn(e, n) && t(n);
      }) : I.none();
    }(e, t).isSome();
  },
      hb = function hb(e) {
    return w(e) ? e : L;
  },
      bb = function bb(e, t, n) {
    var o = t(e),
        r = hb(n);
    return o.orThunk(function () {
      return r(e) ? I.none() : function (e, t, n) {
        var o = e.dom;
        var r = hb(n);

        for (; o.parentNode;) {
          o = o.parentNode;

          var _e87 = vn(o),
              _n73 = t(_e87);

          if (_n73.isSome()) return _n73;
          if (r(_e87)) break;
        }

        return I.none();
      }(e, t, r);
    });
  },
      vb = hm,
      yb = function yb(e, t, n) {
    var o = e.formatter.get(n);
    if (o) for (var _n74 = 0; _n74 < o.length; _n74++) {
      var _r42 = o[_n74];
      if (km(_r42) && !1 === _r42.inherit && e.dom.is(t, _r42.selector)) return !0;
    }
    return !1;
  },
      Cb = function Cb(e, t, n, o, r) {
    var s = e.dom.getRoot();
    if (t === s) return !1;
    var a = e.dom.getParent(t, function (t) {
      return !!yb(e, t, n) || t.parentNode === s || !!kb(e, t, n, o, !0);
    });
    return !!kb(e, a, n, o, r);
  },
      wb = function wb(e, t, n) {
    return !(!Em(n) || !vb(t, n.inline)) || !(!xm(n) || !vb(t, n.block)) || !!km(n) && jo(t) && e.is(t, n.selector);
  },
      xb = function xb(e, t, n, o, r, s) {
    var a = n[o],
        i = "attributes" === o;
    if (w(n.onmatch)) return n.onmatch(t, n, o);
    if (a) if (_e(a)) {
      for (var _n75 = 0; _n75 < a.length; _n75++) {
        if (i ? e.getAttrib(t, a[_n75]) : vm(e, t, a[_n75])) return !0;
      }
    } else for (var _o60 in a) {
      if (ke(a, _o60)) {
        var _l7 = i ? e.getAttrib(t, _o60) : vm(e, t, _o60),
            _d8 = pm(a[_o60], s),
            _c3 = y(_l7) || Ye(_l7);

        if (_c3 && y(_d8)) continue;
        if (r && _c3 && !n.exact) return !1;
        if ((!r || n.exact) && !vb(_l7, bm(_d8, _o60))) return !1;
      }
    }
    return !0;
  },
      kb = function kb(e, t, n, o, r) {
    var s = e.formatter.get(n),
        a = e.dom;
    if (s && jo(t)) for (var _n76 = 0; _n76 < s.length; _n76++) {
      var _i13 = s[_n76];

      if (wb(e.dom, t, _i13) && xb(a, t, _i13, "attributes", r, o) && xb(a, t, _i13, "styles", r, o)) {
        var _n77 = _i13.classes;
        if (_n77) for (var _r43 = 0; _r43 < _n77.length; _r43++) {
          if (!e.dom.hasClass(t, pm(_n77[_r43], o))) return;
        }
        return _i13;
      }
    }
  },
      Eb = function Eb(e, t, n, o, r) {
    if (o) return Cb(e, o, t, n, r);
    if (o = e.selection.getNode(), Cb(e, o, t, n, r)) return !0;
    var s = e.selection.getStart();
    return !(s === o || !Cb(e, s, t, n, r));
  },
      Sb = Pr,
      _b = function _b(e) {
    return function (e) {
      var t = [];
      var n = e;

      for (; n;) {
        if (Xo(n) && n.data !== Sb || n.childNodes.length > 1) return [];
        jo(n) && t.push(n), n = n.firstChild;
      }

      return t;
    }(e).length > 0;
  },
      Nb = function Nb(e) {
    if (e) {
      var _t91 = new Fo(e, e);

      for (var _e88 = _t91.current(); _e88; _e88 = _t91.next()) {
        if (Xo(_e88)) return _e88;
      }
    }

    return null;
  },
      Rb = function Rb(e) {
    var t = hn("span");
    return Jt(t, {
      id: xu,
      "data-mce-bogus": "1",
      "data-mce-type": "format-caret"
    }), e && ho(t, bn(Sb)), t;
  },
      Ab = function Ab(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var o = e.dom,
        r = e.selection;
    if (_b(t)) oh(e, !1, vn(t), n);else {
      var _e89 = r.getRng(),
          _n78 = o.getParent(t, o.isBlock),
          _s27 = _e89.startContainer,
          _a14 = _e89.startOffset,
          _i14 = _e89.endContainer,
          _l8 = _e89.endOffset,
          _d9 = function (e) {
        var t = Nb(e);
        return t && t.data.charAt(0) === Sb && t.deleteData(0, 1), t;
      }(t);

      o.remove(t, !0), _s27 === _d9 && _a14 > 0 && _e89.setStart(_d9, _a14 - 1), _i14 === _d9 && _l8 > 0 && _e89.setEnd(_d9, _l8 - 1), _n78 && o.isEmpty(_n78) && Br(vn(_n78)), r.setRng(_e89);
    }
  },
      Ob = function Ob(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var o = e.dom,
        r = e.selection;
    if (t) Ab(e, t, n);else if (!(t = Eu(e.getBody(), r.getStart()))) for (; t = o.get(xu);) {
      Ab(e, t, n);
    }
  },
      Tb = function Tb(e, t) {
    return e.appendChild(t), t;
  },
      Bb = function Bb(e, t) {
    var n;
    var o = Y(e, function (e, t) {
      return Tb(e, t.cloneNode(!1));
    }, t),
        r = null !== (n = o.ownerDocument) && void 0 !== n ? n : document;
    return Tb(o, r.createTextNode(Sb));
  },
      Db = function Db(e, t, n, o) {
    var a = e.dom,
        i = e.selection;
    var l = !1;
    var d = e.formatter.get(t);
    if (!d) return;
    var c = i.getRng(),
        u = c.startContainer,
        m = c.startOffset;
    var f = u;
    Xo(u) && (m !== u.data.length && (l = !0), f = f.parentNode);
    var g = [];
    var h;

    for (; f;) {
      if (kb(e, f, t, n, o)) {
        h = f;
        break;
      }

      f.nextSibling && (l = !0), g.push(f), f = f.parentNode;
    }

    if (h) if (l) {
      var _r44 = i.getBookmark();

      c.collapse(!0);

      var _s28 = zm(a, c, d, !0);

      _s28 = Df(_s28), e.formatter.remove(t, n, _s28, o), i.moveToBookmark(_r44);
    } else {
      var _l9 = Eu(e.getBody(), h),
          _d10 = Rb(!1).dom;

      (function (e, t, n) {
        var o, r;
        var s = e.dom,
            a = s.getParent(n, O(um, e.schema));
        a && s.isEmpty(a) ? null === (o = n.parentNode) || void 0 === o || o.replaceChild(t, n) : (function (e) {
          var t = Mo(e, "br"),
              n = G(function (e) {
            var t = [];
            var n = e.dom;

            for (; n;) {
              t.push(vn(n)), n = n.lastChild;
            }

            return t;
          }(e).slice(-1), xr);
          t.length === n.length && q(n, Co);
        }(vn(n)), s.isEmpty(n) ? null === (r = n.parentNode) || void 0 === r || r.replaceChild(t, n) : s.insertAfter(t, n));
      })(e, _d10, null != _l9 ? _l9 : h);

      var _c4 = function (e, t, n, o, a, i) {
        var l = e.formatter,
            d = e.dom,
            c = G(me(l.get()), function (e) {
          return e !== o && !je(e, "removeformat");
        }),
            u = function (e, t, n) {
          return X(n, function (n, o) {
            var r = function (e, t) {
              return wm(e, t, function (e) {
                var t = function t(e) {
                  return w(e) || e.length > 1 && "%" === e.charAt(0);
                };

                return $(["styles", "attributes"], function (n) {
                  return xe(e, n).exists(function (e) {
                    var n = p(e) ? e : we(e);
                    return $(n, t);
                  });
                });
              });
            }(e, o);

            return e.formatter.matchNode(t, o, {}, r) ? n.concat([o]) : n;
          }, []);
        }(e, n, c);

        if (G(u, function (t) {
          return !function (e, t, n) {
            var o = ["inline", "block", "selector", "attributes", "styles", "classes"],
                a = function a(e) {
              return ye(e, function (e, t) {
                return $(o, function (e) {
                  return e === t;
                });
              });
            };

            return wm(e, t, function (t) {
              var o = a(t);
              return wm(e, n, function (e) {
                var t = a(e);
                return function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : s;
                  return r(n).eq(e, t);
                }(o, t);
              });
            });
          }(e, t, o);
        }).length > 0) {
          var _e90 = n.cloneNode(!1);

          return d.add(t, _e90), l.remove(o, a, _e90, i), d.remove(_e90), I.some(_e90);
        }

        return I.none();
      }(e, _d10, h, t, n, o),
          _u5 = Bb(g.concat(_c4.toArray()), _d10);

      _l9 && Ab(e, _l9, !1), i.setCursorLocation(_u5, 1), a.isEmpty(h) && a.remove(h);
    }
  },
      Pb = function Pb(e) {
    var t = Rb(!1),
        n = Bb(e, t.dom);
    return {
      caretContainer: t,
      caretPosition: Mi(n, 0)
    };
  },
      Lb = function Lb(e, t) {
    var _Pb = Pb(t),
        n = _Pb.caretContainer,
        o = _Pb.caretPosition;

    return fo(vn(e), n), Co(vn(e)), o;
  },
      Mb = function Mb(e, t) {
    var n = e.schema.getTextInlineElements();
    return ke(n, jt(t)) && !ku(t.dom) && !Wo(t.dom);
  },
      Ib = function Ib(e) {
    return ku(e.dom) && _b(e.dom);
  },
      Fb = {},
      Ub = $o(["pre"]);

  (function (e, t) {
    Fb[e] || (Fb[e] = []), Fb[e].push(function (e) {
      if (!e.selection.getRng().collapsed) {
        var _t92 = e.selection.getSelectedBlocks(),
            _n79 = G(G(_t92, Ub), function (e) {
          return function (t) {
            var n = t.previousSibling;
            return Ub(n) && H(e, n);
          };
        }(_t92));

        q(_n79, function (e) {
          (function (e, t) {
            var n = vn(t),
                o = _n(n).dom;

            Co(n), vo(vn(e), [hn("br", o), hn("br", o)].concat(_toConsumableArray(Ln(n))));
          })(e.previousSibling, e);
        });
      }
    });
  })("pre");

  var zb = ["fontWeight", "fontStyle", "color", "fontSize", "fontFamily"],
      jb = function jb(e, t) {
    var n = e.get(t);
    return p(n) ? J(n, function (e) {
      return Em(e) && "span" === e.inline && function (e) {
        return f(e.styles) && $(me(e.styles), function (e) {
          return H(zb, e);
        });
      }(e);
    }) : I.none();
  },
      Hb = function Hb(e, t) {
    return yu(t, Mi.fromRangeStart(e)).isNone();
  },
      $b = function $b(e, t) {
    return !1 === vu(t, Mi.fromRangeEnd(e)).exists(function (e) {
      return !nr(e.getNode()) || vu(t, e).isSome();
    });
  },
      Vb = function Vb(e) {
    return function (t) {
      return dr(t) && e.isEditable(t);
    };
  },
      qb = function qb(e) {
    return G(e.getSelectedBlocks(), Vb(e.dom));
  },
      Wb = Dt.each,
      Kb = function Kb(e) {
    return jo(e) && !Mu(e) && !ku(e) && !Wo(e);
  },
      Gb = function Gb(e, t) {
    for (var _n80 = e; _n80; _n80 = _n80[t]) {
      if (Xo(_n80) && Ge(_n80.data)) return e;
      if (jo(_n80) && !Mu(_n80)) return _n80;
    }

    return e;
  },
      Yb = function Yb(e, t, n) {
    var o = Kh(e),
        r = jo(t) && im(t),
        s = jo(n) && im(n);

    if (r && s) {
      var _r45 = Gb(t, "previousSibling"),
          _s29 = Gb(n, "nextSibling");

      if (o.compare(_r45, _s29)) {
        for (var _e91 = _r45.nextSibling; _e91 && _e91 !== _s29;) {
          var _t93 = _e91;
          _e91 = _e91.nextSibling, _r45.appendChild(_t93);
        }

        return e.dom.remove(_s29), Dt.each(Dt.grep(_s29.childNodes), function (e) {
          _r45.appendChild(e);
        }), _r45;
      }
    }

    return n;
  },
      Xb = function Xb(e, t, n, o) {
    var r;

    if (o && !1 !== t.merge_siblings) {
      var _t94 = null !== (r = Yb(e, cm(o), o)) && void 0 !== r ? r : o;

      Yb(e, _t94, cm(_t94, !0));
    }
  },
      Qb = function Qb(e, t, n) {
    Wb(e.childNodes, function (e) {
      Kb(e) && (t(e) && n(e), e.hasChildNodes() && Qb(e, t, n));
    });
  },
      Jb = function Jb(e, t) {
    return function (n) {
      return !(!n || !vm(e, n, t));
    };
  },
      Zb = function Zb(e, t, n) {
    return function (o) {
      e.setStyle(o, t, n), "" === o.getAttribute("style") && o.removeAttribute("style"), function (e, t) {
        "SPAN" === t.nodeName && 0 === e.getAttribs(t).length && e.remove(t, !0);
      }(e, o);
    };
  },
      ev = il([{
    keep: []
  }, {
    rename: ["name"]
  }, {
    removed: []
  }]),
      tv = /^(src|href|style)$/,
      nv = Dt.each,
      ov = hm,
      rv = function rv(e, t, n) {
    return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
  },
      sv = function sv(e, t, n) {
    var o = t[n ? "startContainer" : "endContainer"],
        r = t[n ? "startOffset" : "endOffset"];

    if (jo(o)) {
      var _e92 = o.childNodes.length - 1;

      !n && r && r--, o = o.childNodes[r > _e92 ? _e92 : r];
    }

    return Xo(o) && n && r >= o.data.length && (o = new Fo(o, e.getBody()).next() || o), Xo(o) && !n && 0 === r && (o = new Fo(o, e.getBody()).prev() || o), o;
  },
      av = function av(e, t) {
    var n = t ? "firstChild" : "lastChild",
        o = e[n];
    return function (e) {
      return /^(TR|TH|TD)$/.test(e.nodeName);
    }(e) && o ? "TR" === e.nodeName && o[n] || o : e;
  },
      iv = function iv(e, t, n, o) {
    var r;
    var s = e.create(n, o);
    return null === (r = t.parentNode) || void 0 === r || r.insertBefore(s, t), s.appendChild(t), s;
  },
      lv = function lv(e, t, n, o, r) {
    var s = vn(t),
        a = vn(e.create(o, r)),
        i = n ? Pn(s) : Dn(s);
    return vo(a, i), n ? (fo(s, a), po(a, s)) : (go(s, a), ho(a, s)), a.dom;
  },
      dv = function dv(e, t, n) {
    var o = t.parentNode;
    var r;
    var s = e.dom,
        a = Rl(e);
    xm(n) && o === s.getRoot() && (n.list_block && ov(t, n.list_block) || q(ce(t.childNodes), function (t) {
      mm(e, a, t.nodeName.toLowerCase()) ? r ? r.appendChild(t) : (r = iv(s, t, a), s.setAttribs(r, Al(e))) : r = null;
    })), function (e) {
      return km(e) && Em(e) && Pt(xe(e, "mixed"), !0);
    }(n) && !ov(n.inline, t) || s.remove(t, !0);
  },
      cv = function cv(e, t, n) {
    return x(e) ? {
      name: t,
      value: null
    } : {
      name: e,
      value: pm(t, n)
    };
  },
      uv = function uv(e, t) {
    "" === e.getAttrib(t, "style") && (t.removeAttribute("style"), t.removeAttribute("data-mce-style"));
  },
      mv = function mv(e, t, n, o, r) {
    var s = !1;
    nv(n.styles, function (a, i) {
      var _cv = cv(i, a, o),
          l = _cv.name,
          d = _cv.value,
          c = bm(d, l);

      (n.remove_similar || h(d) || !jo(r) || ov(vm(e, r, l), c)) && e.setStyle(t, l, ""), s = !0;
    }), s && uv(e, t);
  },
      fv = function fv(e, t, n, o, r) {
    var s = e.dom,
        a = Kh(e),
        i = e.schema;
    if (Em(t) && Ss(i, t.inline) && Ns(i, o) && o.parentElement === e.getBody()) return dv(e, o, t), ev.removed();
    if (!t.ceFalseOverride && o && "false" === s.getContentEditableParent(o)) return ev.keep();
    if (o && !wb(s, o, t) && !function (e, t) {
      return t.links && "A" === e.nodeName;
    }(o, t)) return ev.keep();
    var l = o,
        d = t.preserve_attributes;

    if (Em(t) && "all" === t.remove && p(d)) {
      var _e93 = G(s.getAttribs(l), function (e) {
        return H(d, e.name.toLowerCase());
      });

      if (s.removeAllAttribs(l), q(_e93, function (e) {
        return s.setAttrib(l, e.name, e.value);
      }), _e93.length > 0) return ev.rename("span");
    }

    if ("all" !== t.remove) {
      mv(s, l, t, n, r), nv(t.attributes, function (e, o) {
        var _cv2 = cv(o, e, n),
            a = _cv2.name,
            i = _cv2.value;

        if (t.remove_similar || h(i) || !jo(r) || ov(s.getAttrib(r, a), i)) {
          if ("class" === a) {
            var _e95 = s.getAttrib(l, a);

            if (_e95) {
              var _t95 = "";
              if (q(_e95.split(/\s+/), function (e) {
                /mce\-\w+/.test(e) && (_t95 += (_t95 ? " " : "") + e);
              }), _t95) return void s.setAttrib(l, a, _t95);
            }
          }

          if (tv.test(a) && l.removeAttribute("data-mce-" + a), "style" === a && $o(["li"])(l) && "none" === s.getStyle(l, "list-style-type")) return l.removeAttribute(a), void s.setStyle(l, "list-style-type", "none");
          "class" === a && l.removeAttribute("className"), l.removeAttribute(a);
        }
      }), nv(t.classes, function (e) {
        e = pm(e, n), jo(r) && !s.hasClass(r, e) || s.removeClass(l, e);
      });

      var _e94 = s.getAttribs(l);

      for (var _t96 = 0; _t96 < _e94.length; _t96++) {
        var _n81 = _e94[_t96].nodeName;
        if (!a.isAttributeInternal(_n81)) return ev.keep();
      }
    }

    return "none" !== t.remove ? (dv(e, l, t), ev.removed()) : ev.keep();
  },
      gv = function gv(e, t, n, o) {
    return fv(e, t, n, o, o).fold(N(o), function (t) {
      return e.dom.createFragment().appendChild(o), e.dom.rename(o, t);
    }, N(null));
  },
      pv = function pv(e, t, n, o, r) {
    (o || e.selection.isEditable()) && function (e, t, n, o, r) {
      var s = e.formatter.get(t),
          a = s[0],
          i = e.dom,
          l = e.selection,
          d = function d(o) {
        var i = function (e, t, n, o, r) {
          var s;
          return t.parentNode && q(Cm(e.dom, t.parentNode).reverse(), function (t) {
            if (!s && jo(t) && "_start" !== t.id && "_end" !== t.id) {
              var _a15 = kb(e, t, n, o, r);

              _a15 && !1 !== _a15.split && (s = t);
            }
          }), s;
        }(e, o, t, n, r);

        return function (e, t, n, o, r, s, a, i) {
          var l, d;
          var c, u;
          var m = e.dom;

          if (n) {
            var _s30 = n.parentNode;

            for (var _n82 = o.parentNode; _n82 && _n82 !== _s30; _n82 = _n82.parentNode) {
              var _o61 = m.clone(_n82, !1);

              for (var _n83 = 0; _n83 < t.length && (_o61 = gv(e, t[_n83], i, _o61), null !== _o61); _n83++) {
                ;
              }

              _o61 && (c && _o61.appendChild(c), u || (u = _o61), c = _o61);
            }

            a.mixed && m.isBlock(n) || (o = null !== (l = m.split(n, o)) && void 0 !== l ? l : o), c && u && (null === (d = r.parentNode) || void 0 === d || d.insertBefore(c, r), u.appendChild(r), Em(a) && Xb(e, a, 0, c));
          }

          return o;
        }(e, s, i, o, o, 0, a, n);
      },
          c = function c(t) {
        return $(s, function (o) {
          return hv(e, o, n, t, t);
        });
      },
          u = function u(t) {
        var n = ce(t.childNodes),
            o = c(t) || $(s, function (e) {
          return wb(i, t, e);
        }),
            r = t.parentNode;
        if (!o && C(r) && Sm(a) && c(r), a.deep && n.length) for (var _e96 = 0; _e96 < n.length; _e96++) {
          u(n[_e96]);
        }
        q(["underline", "line-through", "overline"], function (n) {
          jo(t) && e.dom.getStyle(t, "text-decoration") === n && t.parentNode && ym(i, t.parentNode) === n && hv(e, {
            deep: !1,
            exact: !0,
            inline: "span",
            styles: {
              textDecoration: n
            }
          }, void 0, t);
        });
      },
          m = function m(e) {
        var t = i.get(e ? "_start" : "_end");

        if (t) {
          var _n84 = t[e ? "firstChild" : "lastChild"];
          return function (e) {
            return Mu(e) && jo(e) && ("_start" === e.id || "_end" === e.id);
          }(_n84) && (_n84 = _n84[e ? "firstChild" : "lastChild"]), Xo(_n84) && 0 === _n84.data.length && (_n84 = e ? t.previousSibling || t.nextSibling : t.nextSibling || t.previousSibling), i.remove(t, !0), _n84;
        }

        return null;
      },
          f = function f(t) {
        var n,
            o,
            r = zm(i, t, s, t.collapsed);

        if (a.split) {
          if (r = Df(r), n = sv(e, r, !0), o = sv(e, r), n !== o) {
            if (n = av(n, !0), o = av(o, !1), rv(i, n, o)) {
              var _e98 = I.from(n.firstChild).getOr(n);

              return d(lv(i, _e98, !0, "span", {
                id: "_start",
                "data-mce-type": "bookmark"
              })), void m(!0);
            }

            if (rv(i, o, n)) {
              var _e99 = I.from(o.lastChild).getOr(o);

              return d(lv(i, _e99, !1, "span", {
                id: "_end",
                "data-mce-type": "bookmark"
              })), void m(!1);
            }

            n = iv(i, n, "span", {
              id: "_start",
              "data-mce-type": "bookmark"
            }), o = iv(i, o, "span", {
              id: "_end",
              "data-mce-type": "bookmark"
            });

            var _e97 = i.createRng();

            _e97.setStartAfter(n), _e97.setEndBefore(o), jm(i, _e97, function (e) {
              q(e, function (e) {
                Mu(e) || Mu(e.parentNode) || d(e);
              });
            }), d(n), d(o), n = m(!0), o = m();
          } else n = o = d(n);

          r.startContainer = n.parentNode ? n.parentNode : n, r.startOffset = i.nodeIndex(n), r.endContainer = o.parentNode ? o.parentNode : o, r.endOffset = i.nodeIndex(o) + 1;
        }

        jm(i, r, function (e) {
          q(e, u);
        });
      };

      if (o) {
        if (sm(o)) {
          var _e100 = i.createRng();

          _e100.setStartBefore(o), _e100.setEndAfter(o), f(_e100);
        } else f(o);

        Qm(e, t, o, n);
      } else l.isCollapsed() && Em(a) && !Xu(e).length ? Db(e, t, n, r) : (lm(e, function () {
        return om(e, f);
      }, function (o) {
        return Em(a) && Eb(e, t, n, o);
      }), e.nodeChanged()), function (e, t, n) {
        "removeformat" === t ? q(qb(e.selection), function (t) {
          q(zb, function (n) {
            return e.dom.setStyle(t, n, "");
          }), uv(e.dom, t);
        }) : jb(e.formatter, t).each(function (t) {
          q(qb(e.selection), function (o) {
            return mv(e.dom, o, t, n, null);
          });
        });
      }(e, t, n), Qm(e, t, o, n);
    }(e, t, n, o, r);
  },
      hv = function hv(e, t, n, o, r) {
    return fv(e, t, n, o, r).fold(L, function (t) {
      return e.dom.rename(o, t), !0;
    }, M);
  },
      bv = Dt.each,
      vv = Dt.each,
      yv = function yv(e, t, n, o) {
    if (vv(n.styles, function (n, r) {
      e.setStyle(t, r, pm(n, o));
    }), n.styles) {
      var _n85 = e.getAttrib(t, "style");

      _n85 && e.setAttrib(t, "data-mce-style", _n85);
    }
  },
      Cv = function Cv(e, t, n, o) {
    var r = e.formatter.get(t),
        s = r[0],
        a = !o && e.selection.isCollapsed(),
        i = e.dom,
        l = e.selection,
        d = function d(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : s;
      w(t.onformat) && t.onformat(e, t, n, o), yv(i, e, t, n), vv(t.attributes, function (t, o) {
        i.setAttrib(e, o, pm(t, n));
      }), vv(t.classes, function (t) {
        var o = pm(t, n);
        i.hasClass(e, o) || i.addClass(e, o);
      });
    },
        c = function c(e, t) {
      var n = !1;
      return vv(e, function (e) {
        return !(!km(e) || ("false" !== i.getContentEditable(t) || e.ceFalseOverride) && (!C(e.collapsed) || e.collapsed === a) && i.is(t, e.selector) && !ku(t) && (d(t, e), n = !0, 1));
      }), n;
    },
        u = function u(e) {
      if (m(e)) {
        var _t97 = i.create(e);

        return d(_t97), _t97;
      }

      return null;
    },
        f = function f(o, a, i) {
      var l = [];
      var m = !0;
      var f = s.inline || s.block,
          g = u(f);
      jm(o, a, function (a) {
        var u;

        var p = function p(a) {
          var h = !1,
              b = m,
              v = !1;
          var y = a.parentNode,
              w = y.nodeName.toLowerCase(),
              x = o.getContentEditable(a);
          C(x) && (b = m, m = "true" === x, h = !0, v = gm(e, a));
          var k = m && !h;
          if (nr(a) && !function (e, t, n, o) {
            if (fd(e) && Em(t) && n.parentNode) {
              var _t98 = la(e.schema),
                  _r46 = pb(vn(n), function (e) {
                return ku(e.dom);
              });

              return Ee(_t98, o) && ps(vn(n.parentNode), !1) && !_r46;
            }

            return !1;
          }(e, s, a, w)) return u = null, void (xm(s) && o.remove(a));
          if (function (o) {
            return function (e) {
              return xm(e) && !0 === e.wrapper;
            }(s) && kb(e, o, t, n);
          }(a)) u = null;else {
            if (function (t, n, o) {
              var r = function (e) {
                return xm(e) && !0 !== e.wrapper;
              }(s) && um(e.schema, t) && mm(e, n, f);

              return o && r;
            }(a, w, k)) {
              var _e101 = o.rename(a, f);

              return d(_e101), l.push(_e101), void (u = null);
            }

            if (km(s)) {
              var _e102 = c(r, a);

              if (!_e102 && C(y) && Sm(s) && (_e102 = c(r, y)), !Em(s) || _e102) return void (u = null);
            }

            C(g) && function (t, n, r, a) {
              var l = t.nodeName.toLowerCase(),
                  d = mm(e, f, l) && mm(e, n, f),
                  c = !i && Xo(t) && Lr(t.data),
                  u = ku(t),
                  m = !Em(s) || !o.isBlock(t);
              return (r || a) && d && !c && !u && m;
            }(a, w, k, v) ? (u || (u = o.clone(g, !1), y.insertBefore(u, a), l.push(u)), v && h && (m = b), u.appendChild(a)) : (u = null, q(ce(a.childNodes), p), h && (m = b), u = null);
          }
        };

        q(a, p);
      }), !0 === s.links && q(l, function (e) {
        var t = function t(e) {
          "A" === e.nodeName && d(e, s), q(ce(e.childNodes), t);
        };

        t(e);
      }), q(l, function (a) {
        var i = function (e) {
          var t = 0;
          return q(e.childNodes, function (e) {
            (function (e) {
              return C(e) && Xo(e) && 0 === e.length;
            })(e) || Mu(e) || t++;
          }), t;
        }(a);

        !(l.length > 1) && o.isBlock(a) || 0 !== i ? (Em(s) || xm(s) && s.wrapper) && (s.exact || 1 !== i || (a = function (e) {
          var t = J(e.childNodes, am).filter(function (e) {
            return "false" !== o.getContentEditable(e) && wb(o, e, s);
          });
          return t.map(function (t) {
            var n = o.clone(t, !1);
            return d(n), o.replace(n, e, !0), o.remove(t, !0), n;
          }).getOr(e);
        }(a)), function (e, t, n, o) {
          bv(t, function (t) {
            Em(t) && bv(e.dom.select(t.inline, o), function (o) {
              Kb(o) && hv(e, t, n, o, t.exact ? o : null);
            }), function (e, t, n) {
              if (t.clear_child_styles) {
                var _o62 = t.links ? "*:not(a)" : "*";

                Wb(e.select(_o62, n), function (n) {
                  Kb(n) && im(n) && Wb(t.styles, function (t, o) {
                    e.setStyle(n, o, "");
                  });
                });
              }
            }(e.dom, t, o);
          });
        }(e, r, n, a), function (e, t, n, o, r) {
          var s = r.parentNode;
          kb(e, s, n, o) && hv(e, t, o, r) || t.merge_with_parents && s && e.dom.getParent(s, function (s) {
            return !!kb(e, s, n, o) && (hv(e, t, o, r), !0);
          });
        }(e, s, t, n, a), function (e, t, n, o) {
          if (t.styles && t.styles.backgroundColor) {
            var _r47 = Jb(e, "fontSize");

            Qb(o, function (e) {
              return _r47(e) && im(e);
            }, Zb(e, "backgroundColor", pm(t.styles.backgroundColor, n)));
          }
        }(o, s, n, a), function (e, t, n, o) {
          var r = function r(t) {
            if (jo(t) && jo(t.parentNode) && im(t)) {
              var _n86 = ym(e, t.parentNode);

              e.getStyle(t, "color") && _n86 ? e.setStyle(t, "text-decoration", _n86) : e.getStyle(t, "text-decoration") === _n86 && e.setStyle(t, "text-decoration", null);
            }
          };

          t.styles && (t.styles.color || t.styles.textDecoration) && (Dt.walk(o, r, "childNodes"), r(o));
        }(o, s, 0, a), function (e, t, n, o) {
          if (Em(t) && ("sub" === t.inline || "sup" === t.inline)) {
            var _n87 = Jb(e, "fontSize");

            Qb(o, function (e) {
              return _n87(e) && im(e);
            }, Zb(e, "fontSize", ""));

            var _r48 = G(e.select("sup" === t.inline ? "sub" : "sup", o), im);

            e.remove(_r48, !0);
          }
        }(o, s, 0, a), Xb(e, s, 0, a)) : o.remove(a, !0);
      });
    },
        g = sm(o) ? o : l.getNode();

    if ("false" === i.getContentEditable(g) && !gm(e, g)) return c(r, o = g), void Xm(e, t, o, n);

    if (s) {
      if (o) {
        if (sm(o)) {
          if (!c(r, o)) {
            var _e103 = i.createRng();

            _e103.setStartBefore(o), _e103.setEndAfter(o), f(i, zm(i, _e103, r), !0);
          }
        } else f(i, o, !0);
      } else a && Em(s) && !Xu(e).length ? function (e, t, n) {
        var o;
        var r = e.selection,
            s = e.formatter.get(t);
        if (!s) return;
        var a = r.getRng();
        var i = a.startOffset;
        var l = a.startContainer.nodeValue;
        o = Eu(e.getBody(), r.getStart());
        var d = /[^\s\u00a0\u00ad\u200b\ufeff]/;

        if (l && i > 0 && i < l.length && d.test(l.charAt(i)) && d.test(l.charAt(i - 1))) {
          var _o63 = r.getBookmark();

          a.collapse(!0);

          var _i15 = zm(e.dom, a, s);

          _i15 = Df(_i15), e.formatter.apply(t, n, _i15), r.moveToBookmark(_o63);
        } else {
          var _s31 = o ? Nb(o) : null;

          o && (null == _s31 ? void 0 : _s31.data) === Sb || (c = e.getDoc(), u = Rb(!0).dom, o = c.importNode(u, !0), _s31 = o.firstChild, a.insertNode(o), i = 1), e.formatter.apply(t, n, o), r.setCursorLocation(_s31, i);
        }

        var c, u;
      }(e, t, n) : (l.setRng(rb(l.getRng())), lm(e, function () {
        om(e, function (e, t) {
          var n = t ? e : zm(i, e, r);
          f(i, n, !1);
        });
      }, M), e.nodeChanged()), jb(e.formatter, t).each(function (t) {
        q(function (e) {
          return G(function (e) {
            var t = e.getSelectedBlocks(),
                n = e.getRng();
            if (e.isCollapsed()) return [];
            if (1 === t.length) return Hb(n, t[0]) && $b(n, t[0]) ? t : [];
            {
              var _e104 = le(t).filter(function (e) {
                return Hb(n, e);
              }).toArray(),
                  _o64 = de(t).filter(function (e) {
                return $b(n, e);
              }).toArray(),
                  _r49 = t.slice(1, -1);

              return _e104.concat(_r49).concat(_o64);
            }
          }(e), Vb(e.dom));
        }(e.selection), function (e) {
          return yv(i, e, t, n);
        });
      });

      (function (e, t) {
        ke(Fb, e) && q(Fb[e], function (e) {
          e(t);
        });
      })(t, e);
    }

    Xm(e, t, o, n);
  },
      wv = function wv(e, t, n, o) {
    (o || e.selection.isEditable()) && Cv(e, t, n, o);
  },
      xv = function xv(e) {
    return ke(e, "vars");
  },
      kv = function kv(e) {
    return e.selection.getStart();
  },
      Ev = function Ev(e, t, n, o, r) {
    return Q(t, function (t) {
      var s = e.formatter.matchNode(t, n, null != r ? r : {}, o);
      return !v(s);
    }, function (t) {
      return !!yb(e, t, n) || !o && C(e.formatter.matchNode(t, n, r, !0));
    });
  },
      Sv = function Sv(e, t) {
    var n = null != t ? t : kv(e);
    return G(Cm(e.dom, n), function (e) {
      return jo(e) && !Wo(e);
    });
  },
      _v = function _v(e, t, n) {
    var o = Sv(e, t);
    ge(n, function (n, r) {
      var s = function s(n) {
        var s = Ev(e, o, r, n.similar, xv(n) ? n.vars : void 0),
            a = s.isSome();

        if (n.state.get() !== a) {
          n.state.set(a);

          var _e105 = s.getOr(t);

          xv(n) ? n.callback(a, {
            node: _e105,
            format: r,
            parents: o
          }) : q(n.callbacks, function (t) {
            return t(a, {
              node: _e105,
              format: r,
              parents: o
            });
          });
        }
      };

      q([n.withSimilar, n.withoutSimilar], s), q(n.withVars, s);
    });
  },
      Nv = Dt.explode,
      Rv = function Rv() {
    var e = {};
    return {
      addFilter: function addFilter(t, n) {
        q(Nv(t), function (t) {
          ke(e, t) || (e[t] = {
            name: t,
            callbacks: []
          }), e[t].callbacks.push(n);
        });
      },
      getFilters: function getFilters() {
        return we(e);
      },
      removeFilter: function removeFilter(t, n) {
        q(Nv(t), function (t) {
          if (ke(e, t)) if (C(n)) {
            var _o65 = e[t],
                _r50 = G(_o65.callbacks, function (e) {
              return e !== n;
            });

            _r50.length > 0 ? _o65.callbacks = _r50 : delete e[t];
          } else delete e[t];
        });
      }
    };
  },
      Av = function Av(e, t, n) {
    var o;
    var r = ua();
    t.convert_fonts_to_spans && function (e, t, n) {
      e.addNodeFilter("font", function (e) {
        q(e, function (e) {
          var o = t.parse(e.attr("style")),
              r = e.attr("color"),
              s = e.attr("face"),
              a = e.attr("size");
          r && (o.color = r), s && (o["font-family"] = s), a && Xe(a).each(function (e) {
            o["font-size"] = n[e - 1];
          }), e.name = "span", e.attr("style", t.serialize(o)), function (e, t) {
            q(["color", "face", "size"], function (t) {
              e.attr(t, null);
            });
          }(e);
        });
      });
    }(e, r, Dt.explode(null !== (o = t.font_size_legacy_values) && void 0 !== o ? o : "")), function (e, t, n) {
      e.addNodeFilter("strike", function (e) {
        var o = "html4" !== t.type;
        q(e, function (e) {
          if (o) e.name = "s";else {
            var _t99 = n.parse(e.attr("style"));

            _t99["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(_t99));
          }
        });
      });
    }(e, n, r);
  },
      Ov = function Ov(e, t, n) {
    t.addNodeFilter("br", function (t, o, r) {
      var s = Dt.extend({}, n.getBlockElements()),
          a = n.getNonEmptyElements(),
          i = n.getWhitespaceElements();
      s.body = 1;

      var l = function l(e) {
        return e.name in s || As(n, e);
      };

      for (var _o66 = 0, _d11 = t.length; _o66 < _d11; _o66++) {
        var _d12 = t[_o66],
            _c5 = _d12.parent;

        if (_c5 && l(_c5) && _d12 === _c5.lastChild) {
          var _t100 = _d12.prev;

          for (; _t100;) {
            var _e106 = _t100.name;

            if ("span" !== _e106 || "bookmark" !== _t100.attr("data-mce-type")) {
              "br" === _e106 && (_d12 = null);
              break;
            }

            _t100 = _t100.prev;
          }

          if (_d12 && (_d12.remove(), Zh(n, a, i, _c5))) {
            var _t101 = n.getElementRule(_c5.name);

            _t101 && (_t101.removeEmpty ? _c5.remove() : _t101.paddEmpty && Qh(e, r, l, _c5));
          }
        } else {
          var _e107 = _d12;

          for (; _c5 && _c5.firstChild === _e107 && _c5.lastChild === _e107 && (_e107 = _c5, !s[_c5.name]);) {
            _c5 = _c5.parent;
          }

          if (_e107 === _c5) {
            var _e108 = new Ug("#text", 3);

            _e108.value = fr, _d12.replace(_e108);
          }
        }
      }
    });
  },
      Tv = function Tv(e) {
    var _e$split = e.split(","),
        _e$split2 = _toArray(_e$split),
        t = _e$split2[0],
        n = _e$split2.slice(1),
        o = n.join(","),
        r = /data:([^/]+\/[^;]+)(;.+)?/.exec(t);

    if (r) {
      var _e109 = ";base64" === r[2],
          _t102 = _e109 ? function (e) {
        var t = /([a-z0-9+\/=\s]+)/i.exec(e);
        return t ? t[1] : "";
      }(o) : decodeURIComponent(o);

      return I.some({
        type: r[1],
        data: _t102,
        base64Encoded: _e109
      });
    }

    return I.none();
  },
      Bv = function Bv(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var o = t;
    if (n) try {
      o = atob(t);
    } catch (e) {
      return I.none();
    }
    var r = new Uint8Array(o.length);

    for (var _e110 = 0; _e110 < r.length; _e110++) {
      r[_e110] = o.charCodeAt(_e110);
    }

    return I.some(new Blob([r], {
      type: e
    }));
  },
      Dv = function Dv(e) {
    return new Promise(function (t, n) {
      var o = new FileReader();
      o.onloadend = function () {
        t(o.result);
      }, o.onerror = function () {
        var e;
        n(null === (e = o.error) || void 0 === e ? void 0 : e.message);
      }, o.readAsDataURL(e);
    });
  };

  var Pv = 0;

  var Lv = function Lv(e, t, n) {
    return Tv(e).bind(function (_ref10) {
      var e = _ref10.data,
          o = _ref10.type,
          r = _ref10.base64Encoded;
      if (t && !r) return I.none();
      {
        var _t103 = r ? e : btoa(e);

        return n(_t103, o);
      }
    });
  },
      Mv = function Mv(e, t, n) {
    var o = e.create("blobid" + Pv++, t, n);
    return e.add(o), o;
  },
      Iv = function Iv(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    return Lv(t, n, function (t, n) {
      return I.from(e.getByData(t, n)).orThunk(function () {
        return Bv(n, t).map(function (n) {
          return Mv(e, n, t);
        });
      });
    });
  },
      Fv = function Fv(e, t) {
    var n = e.schema;
    t.remove_trailing_brs && Ov(t, e, n), e.addAttributeFilter("href", function (e) {
      var n = e.length;

      var o = function o(e) {
        var t = e ? Dt.trim(e) : "";
        return /\b(noopener)\b/g.test(t) ? t : function (e) {
          return e.split(" ").filter(function (e) {
            return e.length > 0;
          }).concat(["noopener"]).sort().join(" ");
        }(t);
      };

      if (!t.allow_unsafe_link_target) for (; n--;) {
        var _t104 = e[n];
        "a" === _t104.name && "_blank" === _t104.attr("target") && _t104.attr("rel", o(_t104.attr("rel")));
      }
    }), t.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function (e) {
      var t,
          n,
          o,
          r,
          s = e.length;

      for (; s--;) {
        if (r = e[s], "a" === r.name && r.firstChild && !r.attr("href")) for (o = r.parent, t = r.lastChild; t && o;) {
          n = t.prev, o.insert(t, r), t = n;
        }
      }
    }), t.fix_list_elements && e.addNodeFilter("ul,ol", function (e) {
      var t,
          n,
          o = e.length;

      for (; o--;) {
        if (t = e[o], n = t.parent, n && ("ul" === n.name || "ol" === n.name)) if (t.prev && "li" === t.prev.name) t.prev.append(t);else {
          var _e111 = new Ug("li", 1);

          _e111.attr("style", "list-style-type: none"), t.wrap(_e111);
        }
      }
    });
    var o = n.getValidClasses();
    t.validate && o && e.addAttributeFilter("class", function (e) {
      var t;
      var n = e.length;

      for (; n--;) {
        var _r51 = e[n],
            _s32 = null !== (t = _r51.attr("class")) && void 0 !== t ? t : "",
            _a16 = Dt.explode(_s32, " ");

        var _i16 = "";

        for (var _e112 = 0; _e112 < _a16.length; _e112++) {
          var _t105 = _a16[_e112];

          var _n88 = !1,
              _s33 = o["*"];

          _s33 && _s33[_t105] && (_n88 = !0), _s33 = o[_r51.name], !_n88 && _s33 && _s33[_t105] && (_n88 = !0), _n88 && (_i16 && (_i16 += " "), _i16 += _t105);
        }

        _i16.length || (_i16 = null), _r51.attr("class", _i16);
      }
    }), function (e, t) {
      var n = t.blob_cache;

      if (n) {
        var _t106 = function _t106(e) {
          var t = e.attr("src");
          (function (e) {
            return e.attr("src") === At.transparentSrc || C(e.attr("data-mce-placeholder"));
          })(e) || function (e) {
            return C(e.attr("data-mce-bogus"));
          }(e) || y(t) || Iv(n, t, !0).each(function (t) {
            e.attr("src", t.blobUri());
          });
        };

        e.addAttributeFilter("src", function (e) {
          return q(e, _t106);
        });
      }
    }(e, t);
  };

  function Uv(e) {
    return Uv = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, Uv(e);
  }

  function zv(e, t) {
    return zv = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    }, zv(e, t);
  }

  function jv(e, t, n) {
    return jv = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }() ? Reflect.construct : function (e, t, n) {
      var o = [null];
      o.push.apply(o, t);
      var r = new (Function.bind.apply(e, o))();
      return n && zv(r, n.prototype), r;
    }, jv.apply(null, arguments);
  }

  function Hv(e) {
    return function (e) {
      if (Array.isArray(e)) return $v(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    }(e) || function (e, t) {
      if (e) {
        if ("string" == typeof e) return $v(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $v(e, t) : void 0;
      }
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function $v(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var n = 0, o = new Array(t); n < t; n++) {
      o[n] = e[n];
    }

    return o;
  }

  var Vv = Object.hasOwnProperty,
      qv = Object.setPrototypeOf,
      Wv = Object.isFrozen,
      Kv = Object.getPrototypeOf,
      Gv = Object.getOwnPropertyDescriptor,
      Yv = Object.freeze,
      Xv = Object.seal,
      Qv = Object.create,
      Jv = "undefined" != typeof Reflect && Reflect,
      Zv = Jv.apply,
      ey = Jv.construct;
  Zv || (Zv = function Zv(e, t, n) {
    return e.apply(t, n);
  }), Yv || (Yv = function Yv(e) {
    return e;
  }), Xv || (Xv = function Xv(e) {
    return e;
  }), ey || (ey = function ey(e, t) {
    return jv(e, Hv(t));
  });
  var ty,
      ny = my(Array.prototype.forEach),
      oy = my(Array.prototype.pop),
      ry = my(Array.prototype.push),
      sy = my(String.prototype.toLowerCase),
      ay = my(String.prototype.match),
      iy = my(String.prototype.replace),
      ly = my(String.prototype.indexOf),
      dy = my(String.prototype.trim),
      cy = my(RegExp.prototype.test),
      uy = (ty = TypeError, function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }

    return ey(ty, t);
  });

  function my(e) {
    return function (t) {
      for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) {
        o[r - 1] = arguments[r];
      }

      return Zv(e, t, o);
    };
  }

  function fy(e, t) {
    qv && qv(e, null);

    for (var n = t.length; n--;) {
      var o = t[n];

      if ("string" == typeof o) {
        var r = sy(o);
        r !== o && (Wv(t) || (t[n] = r), o = r);
      }

      e[o] = !0;
    }

    return e;
  }

  function gy(e) {
    var t,
        n = Qv(null);

    for (t in e) {
      Zv(Vv, e, [t]) && (n[t] = e[t]);
    }

    return n;
  }

  function py(e, t) {
    for (; null !== e;) {
      var n = Gv(e, t);

      if (n) {
        if (n.get) return my(n.get);
        if ("function" == typeof n.value) return my(n.value);
      }

      e = Kv(e);
    }

    return function (e) {
      return console.warn("fallback value for", e), null;
    };
  }

  var hy = Yv(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
      by = Yv(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
      vy = Yv(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
      yy = Yv(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
      Cy = Yv(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
      wy = Yv(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
      xy = Yv(["#text"]),
      ky = Yv(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
      Ey = Yv(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
      Sy = Yv(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
      _y = Yv(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
      Ny = Xv(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
      Ry = Xv(/<%[\w\W]*|[\w\W]*%>/gm),
      Ay = Xv(/^data-[\-\w.\u00B7-\uFFFF]/),
      Oy = Xv(/^aria-[\-\w]+$/),
      Ty = Xv(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
      By = Xv(/^(?:\w+script|data):/i),
      Dy = Xv(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
      Py = Xv(/^html$/i),
      Ly = function Ly() {
    return "undefined" == typeof window ? null : window;
  },
      My = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ly(),
        n = function n(t) {
      return e(t);
    };

    if (n.version = "2.3.8", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
    var o = t.document,
        r = t.document,
        s = t.DocumentFragment,
        a = t.HTMLTemplateElement,
        i = t.Node,
        l = t.Element,
        d = t.NodeFilter,
        c = t.NamedNodeMap,
        u = void 0 === c ? t.NamedNodeMap || t.MozNamedAttrMap : c,
        m = t.HTMLFormElement,
        f = t.DOMParser,
        g = t.trustedTypes,
        p = l.prototype,
        h = py(p, "cloneNode"),
        b = py(p, "nextSibling"),
        v = py(p, "childNodes"),
        y = py(p, "parentNode");

    if ("function" == typeof a) {
      var C = r.createElement("template");
      C.content && C.content.ownerDocument && (r = C.content.ownerDocument);
    }

    var w = function (e, t) {
      if ("object" !== Uv(e) || "function" != typeof e.createPolicy) return null;
      var n = null,
          o = "data-tt-policy-suffix";
      t.currentScript && t.currentScript.hasAttribute(o) && (n = t.currentScript.getAttribute(o));
      var r = "dompurify" + (n ? "#" + n : "");

      try {
        return e.createPolicy(r, {
          createHTML: function createHTML(e) {
            return e;
          }
        });
      } catch (e) {
        return console.warn("TrustedTypes policy " + r + " could not be created."), null;
      }
    }(g, o),
        x = w ? w.createHTML("") : "",
        k = r,
        E = k.implementation,
        S = k.createNodeIterator,
        _ = k.createDocumentFragment,
        N = k.getElementsByTagName,
        R = o.importNode,
        A = {};

    try {
      A = gy(r).documentMode ? r.documentMode : {};
    } catch (e) {}

    var O = {};
    n.isSupported = "function" == typeof y && E && void 0 !== E.createHTMLDocument && 9 !== A;

    var T,
        B,
        D = Ny,
        P = Ry,
        L = Ay,
        M = Oy,
        I = By,
        F = Dy,
        U = Ty,
        z = null,
        j = fy({}, [].concat(Hv(hy), Hv(by), Hv(vy), Hv(Cy), Hv(xy))),
        H = null,
        $ = fy({}, [].concat(Hv(ky), Hv(Ey), Hv(Sy), Hv(_y))),
        V = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      attributeNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: !1
      }
    })),
        q = null,
        W = null,
        K = !0,
        G = !0,
        Y = !1,
        X = !1,
        Q = !1,
        J = !1,
        Z = !1,
        ee = !1,
        te = !1,
        ne = !1,
        oe = !0,
        re = !0,
        se = !1,
        ae = {},
        ie = null,
        le = fy({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
        de = null,
        ce = fy({}, ["audio", "video", "img", "source", "image", "track"]),
        ue = null,
        me = fy({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
        fe = "http://www.w3.org/1998/Math/MathML",
        ge = "http://www.w3.org/2000/svg",
        pe = "http://www.w3.org/1999/xhtml",
        he = pe,
        be = !1,
        ve = ["application/xhtml+xml", "text/html"],
        ye = null,
        Ce = r.createElement("form"),
        we = function we(e) {
      return e instanceof RegExp || e instanceof Function;
    },
        xe = function xe(e) {
      ye && ye === e || (e && "object" === Uv(e) || (e = {}), e = gy(e), z = "ALLOWED_TAGS" in e ? fy({}, e.ALLOWED_TAGS) : j, H = "ALLOWED_ATTR" in e ? fy({}, e.ALLOWED_ATTR) : $, ue = "ADD_URI_SAFE_ATTR" in e ? fy(gy(me), e.ADD_URI_SAFE_ATTR) : me, de = "ADD_DATA_URI_TAGS" in e ? fy(gy(ce), e.ADD_DATA_URI_TAGS) : ce, ie = "FORBID_CONTENTS" in e ? fy({}, e.FORBID_CONTENTS) : le, q = "FORBID_TAGS" in e ? fy({}, e.FORBID_TAGS) : {}, W = "FORBID_ATTR" in e ? fy({}, e.FORBID_ATTR) : {}, ae = "USE_PROFILES" in e && e.USE_PROFILES, K = !1 !== e.ALLOW_ARIA_ATTR, G = !1 !== e.ALLOW_DATA_ATTR, Y = e.ALLOW_UNKNOWN_PROTOCOLS || !1, X = e.SAFE_FOR_TEMPLATES || !1, Q = e.WHOLE_DOCUMENT || !1, ee = e.RETURN_DOM || !1, te = e.RETURN_DOM_FRAGMENT || !1, ne = e.RETURN_TRUSTED_TYPE || !1, Z = e.FORCE_BODY || !1, oe = !1 !== e.SANITIZE_DOM, re = !1 !== e.KEEP_CONTENT, se = e.IN_PLACE || !1, U = e.ALLOWED_URI_REGEXP || U, he = e.NAMESPACE || pe, e.CUSTOM_ELEMENT_HANDLING && we(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (V.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && we(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (V.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (V.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), T = T = -1 === ve.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE, B = "application/xhtml+xml" === T ? function (e) {
        return e;
      } : sy, X && (G = !1), te && (ee = !0), ae && (z = fy({}, Hv(xy)), H = [], !0 === ae.html && (fy(z, hy), fy(H, ky)), !0 === ae.svg && (fy(z, by), fy(H, Ey), fy(H, _y)), !0 === ae.svgFilters && (fy(z, vy), fy(H, Ey), fy(H, _y)), !0 === ae.mathMl && (fy(z, Cy), fy(H, Sy), fy(H, _y))), e.ADD_TAGS && (z === j && (z = gy(z)), fy(z, e.ADD_TAGS)), e.ADD_ATTR && (H === $ && (H = gy(H)), fy(H, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && fy(ue, e.ADD_URI_SAFE_ATTR), e.FORBID_CONTENTS && (ie === le && (ie = gy(ie)), fy(ie, e.FORBID_CONTENTS)), re && (z["#text"] = !0), Q && fy(z, ["html", "head", "body"]), z.table && (fy(z, ["tbody"]), delete q.tbody), Yv && Yv(e), ye = e);
    },
        ke = fy({}, ["mi", "mo", "mn", "ms", "mtext"]),
        Ee = fy({}, ["foreignobject", "desc", "title", "annotation-xml"]),
        Se = fy({}, ["title", "style", "font", "a", "script"]),
        _e = fy({}, by);

    fy(_e, vy), fy(_e, yy);
    var Ne = fy({}, Cy);
    fy(Ne, wy);

    var Re = function Re(e) {
      ry(n.removed, {
        element: e
      });

      try {
        e.parentNode.removeChild(e);
      } catch (t) {
        try {
          e.outerHTML = x;
        } catch (t) {
          e.remove();
        }
      }
    },
        Ae = function Ae(e, t) {
      try {
        ry(n.removed, {
          attribute: t.getAttributeNode(e),
          from: t
        });
      } catch (e) {
        ry(n.removed, {
          attribute: null,
          from: t
        });
      }

      if (t.removeAttribute(e), "is" === e && !H[e]) if (ee || te) try {
        Re(t);
      } catch (e) {} else try {
        t.setAttribute(e, "");
      } catch (e) {}
    },
        Oe = function Oe(e) {
      var t, n;
      if (Z) e = "<remove></remove>" + e;else {
        var o = ay(e, /^[\r\n\t ]+/);
        n = o && o[0];
      }
      "application/xhtml+xml" === T && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
      var s = w ? w.createHTML(e) : e;
      if (he === pe) try {
        t = new f().parseFromString(s, T);
      } catch (e) {}

      if (!t || !t.documentElement) {
        t = E.createDocument(he, "template", null);

        try {
          t.documentElement.innerHTML = be ? "" : s;
        } catch (e) {}
      }

      var a = t.body || t.documentElement;
      return e && n && a.insertBefore(r.createTextNode(n), a.childNodes[0] || null), he === pe ? N.call(t, Q ? "html" : "body")[0] : Q ? t.documentElement : a;
    },
        Te = function Te(e) {
      return S.call(e.ownerDocument || e, e, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT, null, !1);
    },
        Be = function Be(e) {
      return "object" === Uv(i) ? e instanceof i : e && "object" === Uv(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
    },
        De = function De(e, t, o) {
      O[e] && ny(O[e], function (e) {
        e.call(n, t, o, ye);
      });
    },
        Pe = function Pe(e) {
      var t, o;
      if (De("beforeSanitizeElements", e, null), (o = e) instanceof m && ("string" != typeof o.nodeName || "string" != typeof o.textContent || "function" != typeof o.removeChild || !(o.attributes instanceof u) || "function" != typeof o.removeAttribute || "function" != typeof o.setAttribute || "string" != typeof o.namespaceURI || "function" != typeof o.insertBefore)) return Re(e), !0;
      if (cy(/[\u0080-\uFFFF]/, e.nodeName)) return Re(e), !0;
      var r = B(e.nodeName);
      if (De("uponSanitizeElement", e, {
        tagName: r,
        allowedTags: z
      }), e.hasChildNodes() && !Be(e.firstElementChild) && (!Be(e.content) || !Be(e.content.firstElementChild)) && cy(/<[/\w]/g, e.innerHTML) && cy(/<[/\w]/g, e.textContent)) return Re(e), !0;
      if ("select" === r && cy(/<template/i, e.innerHTML)) return Re(e), !0;

      if (!z[r] || q[r]) {
        if (!q[r] && Me(r)) {
          if (V.tagNameCheck instanceof RegExp && cy(V.tagNameCheck, r)) return !1;
          if (V.tagNameCheck instanceof Function && V.tagNameCheck(r)) return !1;
        }

        if (re && !ie[r]) {
          var s = y(e) || e.parentNode,
              a = v(e) || e.childNodes;
          if (a && s) for (var i = a.length - 1; i >= 0; --i) {
            s.insertBefore(h(a[i], !0), b(e));
          }
        }

        return Re(e), !0;
      }

      return e instanceof l && !function (e) {
        var t = y(e);
        t && t.tagName || (t = {
          namespaceURI: pe,
          tagName: "template"
        });
        var n = sy(e.tagName),
            o = sy(t.tagName);
        return e.namespaceURI === ge ? t.namespaceURI === pe ? "svg" === n : t.namespaceURI === fe ? "svg" === n && ("annotation-xml" === o || ke[o]) : Boolean(_e[n]) : e.namespaceURI === fe ? t.namespaceURI === pe ? "math" === n : t.namespaceURI === ge ? "math" === n && Ee[o] : Boolean(Ne[n]) : e.namespaceURI === pe && !(t.namespaceURI === ge && !Ee[o]) && !(t.namespaceURI === fe && !ke[o]) && !Ne[n] && (Se[n] || !_e[n]);
      }(e) ? (Re(e), !0) : "noscript" !== r && "noembed" !== r || !cy(/<\/no(script|embed)/i, e.innerHTML) ? (X && 3 === e.nodeType && (t = e.textContent, t = iy(t, D, " "), t = iy(t, P, " "), e.textContent !== t && (ry(n.removed, {
        element: e.cloneNode()
      }), e.textContent = t)), De("afterSanitizeElements", e, null), !1) : (Re(e), !0);
    },
        Le = function Le(e, t, n) {
      if (oe && ("id" === t || "name" === t) && (n in r || n in Ce)) return !1;
      if (G && !W[t] && cy(L, t)) ;else if (K && cy(M, t)) ;else if (!H[t] || W[t]) {
        if (!(Me(e) && (V.tagNameCheck instanceof RegExp && cy(V.tagNameCheck, e) || V.tagNameCheck instanceof Function && V.tagNameCheck(e)) && (V.attributeNameCheck instanceof RegExp && cy(V.attributeNameCheck, t) || V.attributeNameCheck instanceof Function && V.attributeNameCheck(t)) || "is" === t && V.allowCustomizedBuiltInElements && (V.tagNameCheck instanceof RegExp && cy(V.tagNameCheck, n) || V.tagNameCheck instanceof Function && V.tagNameCheck(n)))) return !1;
      } else if (ue[t]) ;else if (cy(U, iy(n, F, ""))) ;else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== ly(n, "data:") || !de[e]) if (Y && !cy(I, iy(n, F, ""))) ;else if (n) return !1;
      return !0;
    },
        Me = function Me(e) {
      return e.indexOf("-") > 0;
    },
        Ie = function Ie(e) {
      var t, n, o, r;
      De("beforeSanitizeAttributes", e, null);
      var s = e.attributes;

      if (s) {
        var a = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: H
        };

        for (r = s.length; r--;) {
          var i = t = s[r],
              l = i.name,
              d = i.namespaceURI;
          n = "value" === l ? t.value : dy(t.value), o = B(l);
          var c = n;
          if (a.attrName = o, a.attrValue = n, a.keepAttr = !0, a.forceKeepAttr = void 0, De("uponSanitizeAttribute", e, a), n = a.attrValue, !a.forceKeepAttr) if (a.keepAttr) {
            if (cy(/\/>/i, n)) Ae(l, e);else {
              X && (n = iy(n, D, " "), n = iy(n, P, " "));
              var u = B(e.nodeName);

              if (Le(u, o, n)) {
                if (n !== c) try {
                  d ? e.setAttributeNS(d, l, n) : e.setAttribute(l, n);
                } catch (t) {
                  Ae(l, e);
                }
              } else Ae(l, e);
            }
          } else Ae(l, e);
        }

        De("afterSanitizeAttributes", e, null);
      }
    },
        Fe = function e(t) {
      var n,
          o = Te(t);

      for (De("beforeSanitizeShadowDOM", t, null); n = o.nextNode();) {
        De("uponSanitizeShadowNode", n, null), Pe(n) || (n.content instanceof s && e(n.content), Ie(n));
      }

      De("afterSanitizeShadowDOM", t, null);
    };

    return n.sanitize = function (e, r) {
      var a, l, d, c, u;

      if ((be = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Be(e)) {
        if ("function" != typeof e.toString) throw uy("toString is not a function");
        if ("string" != typeof (e = e.toString())) throw uy("dirty is not a string, aborting");
      }

      if (!n.isSupported) {
        if ("object" === Uv(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
          if ("string" == typeof e) return t.toStaticHTML(e);
          if (Be(e)) return t.toStaticHTML(e.outerHTML);
        }

        return e;
      }

      if (J || xe(r), n.removed = [], "string" == typeof e && (se = !1), se) {
        if (e.nodeName) {
          var m = B(e.nodeName);
          if (!z[m] || q[m]) throw uy("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (e instanceof i) 1 === (l = (a = Oe("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === l.nodeName || "HTML" === l.nodeName ? a = l : a.appendChild(l);else {
        if (!ee && !X && !Q && -1 === e.indexOf("<")) return w && ne ? w.createHTML(e) : e;
        if (!(a = Oe(e))) return ee ? null : ne ? x : "";
      }

      a && Z && Re(a.firstChild);

      for (var f = Te(se ? e : a); d = f.nextNode();) {
        3 === d.nodeType && d === c || Pe(d) || (d.content instanceof s && Fe(d.content), Ie(d), c = d);
      }

      if (c = null, se) return e;

      if (ee) {
        if (te) for (u = _.call(a.ownerDocument); a.firstChild;) {
          u.appendChild(a.firstChild);
        } else u = a;
        return H.shadowroot && (u = R.call(o, u, !0)), u;
      }

      var g = Q ? a.outerHTML : a.innerHTML;
      return Q && z["!doctype"] && a.ownerDocument && a.ownerDocument.doctype && a.ownerDocument.doctype.name && cy(Py, a.ownerDocument.doctype.name) && (g = "<!DOCTYPE " + a.ownerDocument.doctype.name + ">\n" + g), X && (g = iy(g, D, " "), g = iy(g, P, " ")), w && ne ? w.createHTML(g) : g;
    }, n.setConfig = function (e) {
      xe(e), J = !0;
    }, n.clearConfig = function () {
      ye = null, J = !1;
    }, n.isValidAttribute = function (e, t, n) {
      ye || xe({});
      var o = B(e),
          r = B(t);
      return Le(o, r, n);
    }, n.addHook = function (e, t) {
      "function" == typeof t && (O[e] = O[e] || [], ry(O[e], t));
    }, n.removeHook = function (e) {
      if (O[e]) return oy(O[e]);
    }, n.removeHooks = function (e) {
      O[e] && (O[e] = []);
    }, n.removeAllHooks = function () {
      O = {};
    }, n;
  }();

  var Iy = Dt.each,
      Fy = Dt.trim,
      Uy = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
      zy = {
    ftp: 21,
    http: 80,
    https: 443,
    mailto: 25
  },
      jy = ["img", "video"],
      Hy = function Hy(e, t, n) {
    var o = function (e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return unescape(e);
      }
    }(t).replace(/\s/g, "");

    return !e.allow_script_urls && (!!/((java|vb)script|mhtml):/i.test(o) || !e.allow_html_data_urls && (/^data:image\//i.test(o) ? function (e, t) {
      return C(e) ? !e : !C(t) || !H(jy, t);
    }(e.allow_svg_data_urls, n) && /^data:image\/svg\+xml/i.test(o) : /^data:/i.test(o)));
  };

  var $y =
  /*#__PURE__*/
  function () {
    _createClass($y, null, [{
      key: "parseDataUri",
      value: function parseDataUri(e) {
        var t;
        var n = decodeURIComponent(e).split(","),
            o = /data:([^;]+)/.exec(n[0]);
        return o && (t = o[1]), {
          type: t,
          data: n[1]
        };
      }
    }, {
      key: "isDomSafe",
      value: function isDomSafe(e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (n.allow_script_urls) return !0;
        {
          var _o67 = Qs.decode(e).replace(/[\s\u0000-\u001F]+/g, "");

          return !Hy(n, _o67, t);
        }
      }
    }, {
      key: "getDocumentBaseUrl",
      value: function getDocumentBaseUrl(e) {
        var t;
        var n;
        return n = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? null !== (t = e.href) && void 0 !== t ? t : "" : e.protocol + "//" + e.host + e.pathname, /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/")), n;
      }
    }]);

    function $y(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, $y);

      this.path = "", this.directory = "", e = Fy(e), this.settings = t;
      var n = t.base_uri,
          o = this;
      if (/^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)) return void (o.source = e);
      var r = 0 === e.indexOf("//");

      if (0 !== e.indexOf("/") || r || (e = (n && n.protocol || "http") + "://mce_host" + e), !/^[\w\-]*:?\/\//.test(e)) {
        var _t107 = n ? n.path : new $y(document.location.href).directory;

        if ("" === (null == n ? void 0 : n.protocol)) e = "//mce_host" + o.toAbsPath(_t107, e);else {
          var _r52 = /([^#?]*)([#?]?.*)/.exec(e);

          _r52 && (e = (n && n.protocol || "http") + "://mce_host" + o.toAbsPath(_t107, _r52[1]) + _r52[2]);
        }
      }

      e = e.replace(/@@/g, "(mce_at)");
      var s = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e);
      s && Iy(Uy, function (e, t) {
        var n = s[t];
        n && (n = n.replace(/\(mce_at\)/g, "@@")), o[e] = n;
      }), n && (o.protocol || (o.protocol = n.protocol), o.userInfo || (o.userInfo = n.userInfo), o.port || "mce_host" !== o.host || (o.port = n.port), o.host && "mce_host" !== o.host || (o.host = n.host), o.source = ""), r && (o.protocol = "");
    }

    _createClass($y, [{
      key: "setPath",
      value: function setPath(e) {
        var t = /^(.*?)\/?(\w+)?$/.exec(e);
        t && (this.path = t[0], this.directory = t[1], this.file = t[2]), this.source = "", this.getURI();
      }
    }, {
      key: "toRelative",
      value: function toRelative(e) {
        if ("./" === e) return e;
        var t = new $y(e, {
          base_uri: this
        });
        if ("mce_host" !== t.host && this.host !== t.host && t.host || this.port !== t.port || this.protocol !== t.protocol && "" !== t.protocol) return t.getURI();
        var n = this.getURI(),
            o = t.getURI();
        if (n === o || "/" === n.charAt(n.length - 1) && n.substr(0, n.length - 1) === o) return n;
        var r = this.toRelPath(this.path, t.path);
        return t.query && (r += "?" + t.query), t.anchor && (r += "#" + t.anchor), r;
      }
    }, {
      key: "toAbsolute",
      value: function toAbsolute(e, t) {
        var n = new $y(e, {
          base_uri: this
        });
        return n.getURI(t && this.isSameOrigin(n));
      }
    }, {
      key: "isSameOrigin",
      value: function isSameOrigin(e) {
        if (this.host == e.host && this.protocol == e.protocol) {
          if (this.port == e.port) return !0;

          var _t108 = this.protocol ? zy[this.protocol] : null;

          if (_t108 && (this.port || _t108) == (e.port || _t108)) return !0;
        }

        return !1;
      }
    }, {
      key: "toRelPath",
      value: function toRelPath(e, t) {
        var n,
            o,
            r = 0,
            s = "";
        var a = e.substring(0, e.lastIndexOf("/")).split("/"),
            i = t.split("/");
        if (a.length >= i.length) for (n = 0, o = a.length; n < o; n++) {
          if (n >= i.length || a[n] !== i[n]) {
            r = n + 1;
            break;
          }
        }
        if (a.length < i.length) for (n = 0, o = i.length; n < o; n++) {
          if (n >= a.length || a[n] !== i[n]) {
            r = n + 1;
            break;
          }
        }
        if (1 === r) return t;

        for (n = 0, o = a.length - (r - 1); n < o; n++) {
          s += "../";
        }

        for (n = r - 1, o = i.length; n < o; n++) {
          s += n !== r - 1 ? "/" + i[n] : i[n];
        }

        return s;
      }
    }, {
      key: "toAbsPath",
      value: function toAbsPath(e, t) {
        var n = 0;
        var o = /\/$/.test(t) ? "/" : "",
            r = e.split("/"),
            s = t.split("/"),
            a = [];
        Iy(r, function (e) {
          e && a.push(e);
        });
        var i = [];

        for (var _e113 = s.length - 1; _e113 >= 0; _e113--) {
          0 !== s[_e113].length && "." !== s[_e113] && (".." !== s[_e113] ? n > 0 ? n-- : i.push(s[_e113]) : n++);
        }

        var l = a.length - n;
        var d;
        return d = l <= 0 ? oe(i).join("/") : a.slice(0, l).join("/") + "/" + oe(i).join("/"), 0 !== d.indexOf("/") && (d = "/" + d), o && d.lastIndexOf("/") !== d.length - 1 && (d += o), d;
      }
    }, {
      key: "getURI",
      value: function getURI() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var t;
        return this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source;
      }
    }]);

    return $y;
  }();

  var Vy = Dt.makeMap("src,href,data,background,action,formaction,poster,xlink:href"),
      qy = "data-mce-type";
  var Wy = 0;

  var Ky = function Ky(e, t, n, o) {
    var r, s, a, i;
    var l = t.validate,
        d = n.getSpecialElements();
    8 === e.nodeType && !t.allow_conditional_comments && /^\[if/i.test(null !== (r = e.nodeValue) && void 0 !== r ? r : "") && (e.nodeValue = " " + e.nodeValue);
    var c = null !== (s = null == o ? void 0 : o.tagName) && void 0 !== s ? s : e.nodeName.toLowerCase();
    if (1 !== e.nodeType || "body" === c) return;
    var u = vn(e),
        f = tn(u, qy),
        g = Zt(u, "data-mce-bogus");
    if (!f && m(g)) return void ("all" === g ? Co(u) : wo(u));
    var p = n.getElementRule(c);

    if (!l || p) {
      if (C(o) && (o.allowedTags[c] = !0), l && p && !f) {
        if (q(null !== (a = p.attributesForced) && void 0 !== a ? a : [], function (e) {
          Qt(u, e.name, "{$uid}" === e.value ? "mce_" + Wy++ : e.value);
        }), q(null !== (i = p.attributesDefault) && void 0 !== i ? i : [], function (e) {
          tn(u, e.name) || Qt(u, e.name, "{$uid}" === e.value ? "mce_" + Wy++ : e.value);
        }), p.attributesRequired && !$(p.attributesRequired, function (e) {
          return tn(u, e);
        })) return void wo(u);
        if (p.removeEmptyAttrs && function (e) {
          var t = e.dom.attributes;
          return null == t || 0 === t.length;
        }(u)) return void wo(u);
        p.outputName && p.outputName !== c && si(u, p.outputName);
      }
    } else ke(d, c) ? Co(u) : wo(u);
  },
      Gy = function Gy(e, t, n, o, r) {
    return !(o in Vy && Hy(e, r, n)) && (!e.validate || t.isValid(n, o) || He(o, "data-") || He(o, "aria-"));
  },
      Yy = function Yy(e, t) {
    return e.hasAttribute(qy) && ("id" === t || "class" === t || "style" === t);
  },
      Xy = function Xy(e, t) {
    return e in t.getBoolAttrs();
  },
      Qy = function Qy(e, t, n) {
    var o = e.attributes;

    for (var _r53 = o.length - 1; _r53 >= 0; _r53--) {
      var _s34 = o[_r53],
          _a17 = _s34.name,
          _i17 = _s34.value;
      Gy(t, n, e.tagName.toLowerCase(), _a17, _i17) || Yy(e, _a17) ? Xy(_a17, n) && e.setAttribute(_a17, _a17) : e.removeAttribute(_a17);
    }
  },
      Jy = function Jy(e, t) {
    var n = My();
    return n.addHook("uponSanitizeElement", function (n, o) {
      Ky(n, e, t, o);
    }), n.addHook("uponSanitizeAttribute", function (n, o) {
      var r = n.tagName.toLowerCase(),
          s = o.attrName,
          a = o.attrValue;
      o.keepAttr = Gy(e, t, r, s, a), o.keepAttr ? (o.allowedAttributes[s] = !0, Xy(s, t) && (o.attrValue = s), e.allow_svg_data_urls && He(a, "data:image/svg+xml") && (o.forceKeepAttr = !0)) : Yy(n, s) && (o.forceKeepAttr = !0);
    }), n;
  },
      Zy = Dt.makeMap,
      eC = Dt.extend,
      tC = function tC(e, t, n) {
    var o = e.name,
        r = o in n && "title" !== o && "textarea" !== o,
        s = t.childNodes;

    for (var _t109 = 0, _o68 = s.length; _t109 < _o68; _t109++) {
      var _o69 = s[_t109],
          _a18 = new Ug(_o69.nodeName.toLowerCase(), _o69.nodeType);

      if (jo(_o69)) {
        var _e114 = _o69.attributes;

        for (var _t110 = 0, _n89 = _e114.length; _t110 < _n89; _t110++) {
          var _n90 = _e114[_t110];

          _a18.attr(_n90.name, _n90.value);
        }
      } else Xo(_o69) ? (_a18.value = _o69.data, r && (_a18.raw = !0)) : (Zo(_o69) || Qo(_o69) || Jo(_o69)) && (_a18.value = _o69.data);

      tC(_a18, _o69, n), e.append(_a18);
    }
  },
      nC = function nC() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ca();

    var n = Rv(),
        o = Rv(),
        r = _objectSpread({
      validate: !0,
      root_name: "body",
      sanitize: !0
    }, e),
        s = new DOMParser(),
        a = function (e, t) {
      if (e.sanitize) {
        var _n91 = Jy(e, t);

        return function (t, o) {
          _n91.sanitize(t, function (e, t) {
            var n = {
              IN_PLACE: !0,
              ALLOW_UNKNOWN_PROTOCOLS: !0,
              ALLOWED_TAGS: ["#comment", "#cdata-section", "body"],
              ALLOWED_ATTR: []
            };
            return n.PARSER_MEDIA_TYPE = t, e.allow_script_urls ? n.ALLOWED_URI_REGEXP = /.*/ : e.allow_html_data_urls && (n.ALLOWED_URI_REGEXP = /^(?!(\w+script|mhtml):)/i), n;
          }(e, o)), _n91.removed = [];
        };
      }

      return function (n, o) {
        var r = document.createNodeIterator(n, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT);
        var s;

        for (; s = r.nextNode();) {
          Ky(s, e, t), jo(s) && Qy(s, e, t);
        }
      };
    }(r, t),
        i = n.addFilter,
        l = n.getFilters,
        d = n.removeFilter,
        c = o.addFilter,
        u = o.getFilters,
        f = o.removeFilter,
        g = function g(e, n) {
      var o = m(n.attr(qy)),
          r = 1 === n.type && !ke(e, n.name) && !As(t, n);
      return 3 === n.type || r && !o;
    },
        p = {
      schema: t,
      addAttributeFilter: c,
      getAttributeFilters: u,
      removeAttributeFilter: f,
      addNodeFilter: i,
      getNodeFilters: l,
      removeNodeFilter: d,
      parse: function parse(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var o;

        var i = r.validate,
            d = null !== (o = n.context) && void 0 !== o ? o : r.root_name,
            c = function (e, n) {
          var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "html";
          var r = "xhtml" === o ? "application/xhtml+xml" : "text/html",
              i = ke(t.getSpecialElements(), n.toLowerCase()),
              l = i ? "<".concat(n, ">").concat(e, "</").concat(n, ">") : e,
              d = "xhtml" === o ? "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>".concat(l, "</body></html>") : "<body>".concat(l, "</body>"),
              c = s.parseFromString(d, r).body;
          return a(c, r), i ? c.firstChild : c;
        }(e, d, n.format);

        xs(t, c);
        var m = new Ug(d, 11);
        tC(m, c, t.getSpecialElements()), c.innerHTML = "";

        var _ref11 = function (e, t, n, o) {
          var r = n.validate,
              s = t.getNonEmptyElements(),
              a = t.getWhitespaceElements(),
              i = eC(Zy("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
              l = la(t),
              d = /[ \t\r\n]+/g,
              c = /^[ \t\r\n]+/,
              u = /[ \t\r\n]+$/,
              m = function m(e) {
            var t = e.parent;

            for (; C(t);) {
              if (t.name in a) return !0;
              t = t.parent;
            }

            return !1;
          },
              f = function f(e) {
            return e.name in i || As(t, e);
          },
              g = function g(t, n) {
            var r = n ? t.prev : t.next;
            return !C(r) && !y(t.parent) && f(t.parent) && (t.parent !== e || !0 === o.isRootContent);
          };

          return [function (e) {
            var t;

            if (3 === e.type && !m(e)) {
              var _n92 = null !== (t = e.value) && void 0 !== t ? t : "";

              _n92 = _n92.replace(d, " "), (function (e, t) {
                return C(e) && (t(e) || "br" === e.name);
              }(e.prev, f) || g(e, !0)) && (_n92 = _n92.replace(c, "")), 0 === _n92.length ? e.remove() : e.value = _n92;
            }
          }, function (e) {
            var i;

            if (1 === e.type) {
              var _i18 = t.getElementRule(e.name);

              if (r && _i18) {
                var _r54 = Zh(t, s, a, e);

                _i18.paddInEmptyBlock && _r54 && function (e) {
                  var n = e;

                  for (; C(n);) {
                    if (n.name in l) return Zh(t, s, a, n);
                    n = n.parent;
                  }

                  return !1;
                }(e) ? Qh(n, o, f, e) : _i18.removeEmpty && _r54 ? f(e) ? e.remove() : e.unwrap() : _i18.paddEmpty && (_r54 || function (e) {
                  var t;
                  return Jh(e, "#text") && (null === (t = null == e ? void 0 : e.firstChild) || void 0 === t ? void 0 : t.value) === fr;
                }(e)) && Qh(n, o, f, e);
              }
            } else if (3 === e.type && !m(e)) {
              var _t111 = null !== (i = e.value) && void 0 !== i ? i : "";

              (e.next && f(e.next) || g(e, !1)) && (_t111 = _t111.replace(u, "")), 0 === _t111.length ? e.remove() : e.value = _t111;
            }
          }];
        }(m, t, r, n),
            _ref12 = _slicedToArray(_ref11, 2),
            f = _ref12[0],
            p = _ref12[1],
            h = [],
            b = i ? function (e) {
          return function (e, n) {
            ob(t, e) && n.push(e);
          }(e, h);
        } : E,
            v = {
          nodes: {},
          attributes: {}
        },
            w = function w(e) {
          return Gh(l(), u(), e, v);
        };

        if (function (e, t, n) {
          var o = [];

          var _loop2 = function _loop2(_n94, _r55) {
            var s = _n94;
            q(t, function (e) {
              return e(s);
            }), y(s.parent) && s !== e ? _n94 = _r55 : o.push(s);
            _n93 = _n94;
          };

          for (var _n93 = e, _r55 = _n93; _n93; _r55 = _n93, _n93 = _n93.walk()) {
            _loop2(_n93, _r55);
          }

          var _loop3 = function _loop3(_e115) {
            var t = o[_e115];
            q(n, function (e) {
              return e(t);
            });
          };

          for (var _e115 = o.length - 1; _e115 >= 0; _e115--) {
            _loop3(_e115);
          }
        }(m, [f, w], [p, b]), h.reverse(), i && h.length > 0) if (n.context) {
          var _K = K(h, function (e) {
            return e.parent === m;
          }),
              _e116 = _K.pass,
              _o70 = _K.fail;

          nb(_o70, t, m, w), n.invalid = _e116.length > 0;
        } else nb(h, t, m, w);

        var x = function (e, t) {
          var n;
          var o = null !== (n = t.forced_root_block) && void 0 !== n ? n : e.forced_root_block;
          return !1 === o ? "" : !0 === o ? "p" : o;
        }(r, n);

        return x && ("body" === m.name || n.isRootContent) && function (e, n) {
          var o = eC(Zy("script,style,head,html,body,title,meta,param"), t.getBlockElements()),
              s = /^[ \t\r\n]+/,
              a = /[ \t\r\n]+$/;
          var i = e.firstChild,
              l = null;

          var d = function d(e) {
            var t, n;
            e && (i = e.firstChild, i && 3 === i.type && (i.value = null === (t = i.value) || void 0 === t ? void 0 : t.replace(s, "")), i = e.lastChild, i && 3 === i.type && (i.value = null === (n = i.value) || void 0 === n ? void 0 : n.replace(a, "")));
          };

          if (t.isValidChild(e.name, n.toLowerCase())) {
            for (; i;) {
              var _t112 = i.next;
              g(o, i) ? (l || (l = new Ug(n, 1), l.attr(r.forced_root_block_attrs), e.insert(l, i)), l.append(i)) : (d(l), l = null), i = _t112;
            }

            d(l);
          }
        }(m, x), n.invalid || Yh(v, n), m;
      }
    };

    return Fv(p, r), function (e, t, n) {
      t.inline_styles && Av(e, t, n);
    }(p, r, t), p;
  },
      oC = function oC(e, t, n) {
    var o = function (e) {
      return fb(e) ? Yg({
        validate: !1
      }).serialize(e) : e;
    }(e),
        r = t(o);

    if (r.isDefaultPrevented()) return r;

    if (fb(e)) {
      if (r.content !== o) {
        var _t113 = nC({
          validate: !1,
          forced_root_block: !1,
          sanitize: n
        }).parse(r.content, {
          context: e.name
        });

        return _objectSpread({}, r, {
          content: _t113
        });
      }

      return _objectSpread({}, r, {
        content: e
      });
    }

    return r;
  },
      rC = function rC(e, t) {
    if (t.no_events) return al.value(t);
    {
      var _n95 = function (e, t) {
        return e.dispatch("BeforeGetContent", t);
      }(e, t);

      return _n95.isDefaultPrevented() ? al.error(Zm(e, _objectSpread({
        content: ""
      }, _n95)).content) : al.value(_n95);
    }
  },
      sC = function sC(e, t, n) {
    if (n.no_events) return t;
    {
      var _o71 = oC(t, function (t) {
        return Zm(e, _objectSpread({}, n, {
          content: t
        }));
      }, rc(e));

      return _o71.content;
    }
  },
      aC = function aC(e, t) {
    if (t.no_events) return al.value(t);
    {
      var _n96 = oC(t.content, function (n) {
        return function (e, t) {
          return e.dispatch("BeforeSetContent", t);
        }(e, _objectSpread({}, t, {
          content: n
        }));
      }, rc(e));

      return _n96.isDefaultPrevented() ? (Jm(e, _n96), al.error(void 0)) : al.value(_n96);
    }
  },
      iC = function iC(e, t, n) {
    n.no_events || Jm(e, _objectSpread({}, n, {
      content: t
    }));
  },
      lC = function lC(e, t, n) {
    return {
      element: e,
      width: t,
      rows: n
    };
  },
      dC = function dC(e, t) {
    return {
      element: e,
      cells: t
    };
  },
      cC = function cC(e, t) {
    return {
      x: e,
      y: t
    };
  },
      uC = function uC(e, t) {
    return en(e, t).bind(Xe).getOr(1);
  },
      mC = function mC(e, t, n) {
    var o = e.rows;
    return !!(o[n] ? o[n].cells : [])[t];
  },
      fC = function fC(e) {
    return X(e, function (e, t) {
      return t.cells.length > e ? t.cells.length : e;
    }, 0);
  },
      gC = function gC(e, t) {
    var n = e.rows;

    for (var _e117 = 0; _e117 < n.length; _e117++) {
      var _o72 = n[_e117].cells;

      for (var _n97 = 0; _n97 < _o72.length; _n97++) {
        if (kn(_o72[_n97], t)) return I.some(cC(_n97, _e117));
      }
    }

    return I.none();
  },
      pC = function pC(e, t, n, o, r) {
    var s = [],
        a = e.rows;

    for (var _e118 = n; _e118 <= r; _e118++) {
      var _n98 = a[_e118].cells,
          _r56 = t < o ? _n98.slice(t, o + 1) : _n98.slice(o, t + 1);

      s.push(dC(a[_e118].element, _r56));
    }

    return s;
  },
      hC = function hC(e) {
    return function (e, t) {
      var n = oi(e.element),
          o = hn("tbody");
      return vo(o, t), ho(n, o), n;
    }(e, function (e) {
      return V(e.rows, function (e) {
        var t = V(e.cells, function (e) {
          var t = ri(e);
          return nn(t, "colspan"), nn(t, "rowspan"), t;
        }),
            n = oi(e.element);
        return vo(n, t), n;
      });
    }(e));
  },
      bC = function bC(e, t) {
    var n = vn(t.commonAncestorContainer),
        o = hp(n, e),
        r = G(o, Or),
        s = function (e, t) {
      return J(e, function (e) {
        return "li" === jt(e) && em(e, t);
      }).fold(N([]), function (t) {
        return function (e) {
          return J(e, function (e) {
            return "ul" === jt(e) || "ol" === jt(e);
          });
        }(e).map(function (e) {
          var t = hn(jt(e)),
              n = ye(uo(e), function (e, t) {
            return He(t, "list-style");
          });
          return ao(t, n), [hn("li"), t];
        }).getOr([]);
      });
    }(o, t),
        a = r.concat(s.length ? s : function (e) {
      return Sr(e) ? Rn(e).filter(Er).fold(N([]), function (t) {
        return [e, t];
      }) : Er(e) ? [e] : [];
    }(n));

    return V(a, oi);
  },
      vC = function vC() {
    return wf([]);
  },
      yC = function yC(e, t) {
    return function (e, t) {
      return Jn(t, "table", O(kn, e));
    }(e, t[0]).bind(function (e) {
      var n = t[0],
          o = t[t.length - 1],
          r = function (e) {
        var t = lC(oi(e), 0, []);
        return q(Mo(e, "tr"), function (e, n) {
          q(Mo(e, "td,th"), function (o, r) {
            (function (e, t, n, o, r) {
              var s = uC(r, "rowspan"),
                  a = uC(r, "colspan"),
                  i = e.rows;

              for (var _e119 = n; _e119 < n + s; _e119++) {
                i[_e119] || (i[_e119] = dC(ri(o), []));

                for (var _o73 = t; _o73 < t + a; _o73++) {
                  i[_e119].cells[_o73] = _e119 === n && _o73 === t ? r : oi(r);
                }
              }
            })(t, function (e, t, n) {
              for (; mC(e, t, n);) {
                t++;
              }

              return t;
            }(t, r, n), n, e, o);
          });
        }), lC(t.element, fC(t.rows), t.rows);
      }(e);

      return function (e, t, n) {
        return gC(e, t).bind(function (t) {
          return gC(e, n).map(function (n) {
            return function (e, t, n) {
              var o = t.x,
                  r = t.y,
                  s = n.x,
                  a = n.y,
                  i = r < a ? pC(e, o, r, s, a) : pC(e, o, a, s, r);
              return lC(e.element, fC(i), i);
            }(e, t, n);
          });
        });
      }(r, n, o).map(function (e) {
        return wf([hC(e)]);
      });
    }).getOrThunk(vC);
  },
      CC = function CC(e, t) {
    var n = Yu(t, e);
    return n.length > 0 ? yC(e, n) : function (e, t) {
      return t.length > 0 && t[0].collapsed ? vC() : function (e, t) {
        return function (e, t) {
          var n = X(t, function (e, t) {
            return ho(t, e), t;
          }, e);
          return t.length > 0 ? wf([n]) : n;
        }(vn(t.cloneContents()), bC(e, t));
      }(e, t[0]);
    }(e, t);
  },
      wC = function wC(e, t) {
    return t >= 0 && t < e.length && Uu(e.charAt(t));
  },
      xC = function xC(e) {
    return Mr(e.innerText);
  },
      kC = function kC(e) {
    return jo(e) ? e.outerHTML : Xo(e) ? Qs.encodeRaw(e.data, !1) : Zo(e) ? "\x3c!--" + e.data + "--\x3e" : "";
  },
      EC = function EC(e, t) {
    return function (e, t) {
      var n = 0;
      q(e, function (e) {
        0 === e[0] ? n++ : 1 === e[0] ? (function (e, t, n) {
          var o = function (e) {
            var t;
            var n = document.createElement("div"),
                o = document.createDocumentFragment();

            for (e && (n.innerHTML = e); t = n.firstChild;) {
              o.appendChild(t);
            }

            return o;
          }(t);

          if (e.hasChildNodes() && n < e.childNodes.length) {
            var _t114 = e.childNodes[n];
            e.insertBefore(o, _t114);
          } else e.appendChild(o);
        }(t, e[1], n), n++) : 2 === e[0] && function (e, t) {
          if (e.hasChildNodes() && t < e.childNodes.length) {
            var _n99 = e.childNodes[t];
            e.removeChild(_n99);
          }
        }(t, n);
      });
    }(function (e, t) {
      var n = e.length + t.length + 2,
          o = new Array(n),
          r = new Array(n),
          s = function s(n, o, r, a, l) {
        var d = i(n, o, r, a);

        if (null === d || d.start === o && d.diag === o - a || d.end === n && d.diag === n - r) {
          var _s35 = n,
              _i19 = r;

          for (; _s35 < o || _i19 < a;) {
            _s35 < o && _i19 < a && e[_s35] === t[_i19] ? (l.push([0, e[_s35]]), ++_s35, ++_i19) : o - n > a - r ? (l.push([2, e[_s35]]), ++_s35) : (l.push([1, t[_i19]]), ++_i19);
          }
        } else {
          s(n, d.start, r, d.start - d.diag, l);

          for (var _t115 = d.start; _t115 < d.end; ++_t115) {
            l.push([0, e[_t115]]);
          }

          s(d.end, o, d.end - d.diag, a, l);
        }
      },
          a = function a(n, o, r, s) {
        var a = n;

        for (; a - o < s && a < r && e[a] === t[a - o];) {
          ++a;
        }

        return function (e, t, n) {
          return {
            start: e,
            end: t,
            diag: n
          };
        }(n, a, o);
      },
          i = function i(n, s, _i20, l) {
        var d = s - n,
            c = l - _i20;
        if (0 === d || 0 === c) return null;
        var u = d - c,
            m = c + d,
            f = (m % 2 == 0 ? m : m + 1) / 2;
        var g, p, h, b, v;

        for (o[1 + f] = n, r[1 + f] = s + 1, g = 0; g <= f; ++g) {
          for (p = -g; p <= g; p += 2) {
            for (h = p + f, p === -g || p !== g && o[h - 1] < o[h + 1] ? o[h] = o[h + 1] : o[h] = o[h - 1] + 1, b = o[h], v = b - n + _i20 - p; b < s && v < l && e[b] === t[v];) {
              o[h] = ++b, ++v;
            }

            if (u % 2 != 0 && u - g <= p && p <= u + g && r[h - u] <= o[h]) return a(r[h - u], p + n - _i20, s, l);
          }

          for (p = u - g; p <= u + g; p += 2) {
            for (h = p + f - u, p === u - g || p !== u + g && r[h + 1] <= r[h - 1] ? r[h] = r[h + 1] - 1 : r[h] = r[h - 1], b = r[h] - 1, v = b - n + _i20 - p; b >= n && v >= _i20 && e[b] === t[v];) {
              r[h] = b--, v--;
            }

            if (u % 2 == 0 && -g <= p && p <= g && r[h] <= o[h + u]) return a(r[h], p + n - _i20, s, l);
          }
        }

        return null;
      },
          l = [];

      return s(0, e.length, 0, t.length, l), l;
    }(V(ce(t.childNodes), kC), e), t), t;
  },
      SC = Pe(function () {
    return document.implementation.createHTMLDocument("undo");
  }),
      _C = function _C(e) {
    var t = (n = e.getBody(), G(V(ce(n.childNodes), kC), function (e) {
      return e.length > 0;
    }));
    var n;
    var o = te(t, function (t) {
      var n = Hg(e.serializer, t);
      return n.length > 0 ? [n] : [];
    }),
        r = o.join("");
    return function (e) {
      return -1 !== e.indexOf("</iframe>");
    }(r) ? function (e) {
      return {
        type: "fragmented",
        fragments: e,
        content: "",
        bookmark: null,
        beforeBookmark: null
      };
    }(o) : function (e) {
      return {
        type: "complete",
        fragments: null,
        content: e,
        bookmark: null,
        beforeBookmark: null
      };
    }(r);
  },
      NC = function NC(e, t, n) {
    var o = n ? t.beforeBookmark : t.bookmark;
    "fragmented" === t.type ? EC(t.fragments, e.getBody()) : e.setContent(t.content, {
      format: "raw",
      no_selection: !C(o) || !_u(o) || !o.isFakeCaret
    }), o && (e.selection.moveToBookmark(o), e.selection.scrollIntoView());
  },
      RC = function RC(e) {
    return "fragmented" === e.type ? e.fragments.join("") : e.content;
  },
      AC = function AC(e) {
    var t = hn("body", SC());
    return Eo(t, RC(e)), q(Mo(t, "*[data-mce-bogus]"), wo), ko(t);
  },
      OC = function OC(e, t) {
    return !(!e || !t) && (!!function (e, t) {
      return RC(e) === RC(t);
    }(e, t) || function (e, t) {
      return AC(e) === AC(t);
    }(e, t));
  },
      TC = function TC(e) {
    return 0 === e.get();
  },
      BC = function BC(e, t, n) {
    TC(n) && (e.typing = t);
  },
      DC = function DC(e, t) {
    e.typing && (BC(e, !1, t), e.add());
  },
      PC = function PC(e) {
    return {
      init: {
        bindEvents: E
      },
      undoManager: {
        beforeChange: function beforeChange(t, n) {
          return function (e, t, n) {
            TC(t) && n.set(ol(e.selection));
          }(e, t, n);
        },
        add: function add(t, n, o, r, s, a) {
          return function (e, t, n, o, r, s, a) {
            var i = _C(e),
                l = Dt.extend(s || {}, i);

            if (!TC(o) || e.removed) return null;
            var d = t.data[n.get()];
            if (e.dispatch("BeforeAddUndo", {
              level: l,
              lastLevel: d,
              originalEvent: a
            }).isDefaultPrevented()) return null;
            if (d && OC(d, l)) return null;
            t.data[n.get()] && r.get().each(function (e) {
              t.data[n.get()].beforeBookmark = e;
            });
            var c = wd(e);

            if (c && t.data.length > c) {
              for (var _e120 = 0; _e120 < t.data.length - 1; _e120++) {
                t.data[_e120] = t.data[_e120 + 1];
              }

              t.data.length--, n.set(t.data.length);
            }

            l.bookmark = ol(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(l), n.set(t.data.length - 1);
            var u = {
              level: l,
              lastLevel: d,
              originalEvent: a
            };
            return n.get() > 0 ? (e.setDirty(!0), e.dispatch("AddUndo", u), e.dispatch("change", u)) : e.dispatch("AddUndo", u), l;
          }(e, t, n, o, r, s, a);
        },
        undo: function undo(t, n, o) {
          return function (e, t, n, o) {
            var r;
            return t.typing && (t.add(), t.typing = !1, BC(t, !1, n)), o.get() > 0 && (o.set(o.get() - 1), r = t.data[o.get()], NC(e, r, !0), e.setDirty(!0), e.dispatch("Undo", {
              level: r
            })), r;
          }(e, t, n, o);
        },
        redo: function redo(t, n) {
          return function (e, t, n) {
            var o;
            return t.get() < n.length - 1 && (t.set(t.get() + 1), o = n[t.get()], NC(e, o, !1), e.setDirty(!0), e.dispatch("Redo", {
              level: o
            })), o;
          }(e, t, n);
        },
        clear: function clear(t, n) {
          return function (e, t, n) {
            t.data = [], n.set(0), t.typing = !1, e.dispatch("ClearUndos");
          }(e, t, n);
        },
        reset: function reset(e) {
          return function (e) {
            e.clear(), e.add();
          }(e);
        },
        hasUndo: function hasUndo(t, n) {
          return function (e, t, n) {
            return n.get() > 0 || t.typing && t.data[0] && !OC(_C(e), t.data[0]);
          }(e, t, n);
        },
        hasRedo: function hasRedo(e, t) {
          return function (e, t) {
            return t.get() < e.data.length - 1 && !e.typing;
          }(e, t);
        },
        transact: function transact(e, t, n) {
          return function (e, t, n) {
            return DC(e, t), e.beforeChange(), e.ignore(n), e.add();
          }(e, t, n);
        },
        ignore: function ignore(e, t) {
          return function (e, t) {
            try {
              e.set(e.get() + 1), t();
            } finally {
              e.set(e.get() - 1);
            }
          }(e, t);
        },
        extra: function extra(t, n, o, r) {
          return function (e, t, n, o, r) {
            if (t.transact(o)) {
              var _o74 = t.data[n.get()].bookmark,
                  _s36 = t.data[n.get() - 1];
              NC(e, _s36, !0), t.transact(r) && (t.data[n.get() - 1].beforeBookmark = _o74);
            }
          }(e, t, n, o, r);
        }
      },
      formatter: {
        match: function match(t, n, o, r) {
          return Eb(e, t, n, o, r);
        },
        matchAll: function matchAll(t, n) {
          return function (e, t, n) {
            var o = [],
                r = {},
                s = e.selection.getStart();
            return e.dom.getParent(s, function (s) {
              for (var _a19 = 0; _a19 < t.length; _a19++) {
                var _i21 = t[_a19];
                !r[_i21] && kb(e, s, _i21, n) && (r[_i21] = !0, o.push(_i21));
              }
            }, e.dom.getRoot()), o;
          }(e, t, n);
        },
        matchNode: function matchNode(t, n, o, r) {
          return kb(e, t, n, o, r);
        },
        canApply: function canApply(t) {
          return function (e, t) {
            var n = e.formatter.get(t),
                o = e.dom;

            if (n && e.selection.isEditable()) {
              var _t116 = e.selection.getStart(),
                  _r57 = Cm(o, _t116);

              for (var _e121 = n.length - 1; _e121 >= 0; _e121--) {
                var _t117 = n[_e121];
                if (!km(_t117)) return !0;

                for (var _e122 = _r57.length - 1; _e122 >= 0; _e122--) {
                  if (o.is(_r57[_e122], _t117.selector)) return !0;
                }
              }
            }

            return !1;
          }(e, t);
        },
        closest: function closest(t) {
          return function (e, t) {
            var n = function n(t) {
              return kn(t, vn(e.getBody()));
            };

            return I.from(e.selection.getStart(!0)).bind(function (o) {
              return bb(vn(o), function (n) {
                return ue(t, function (t) {
                  return function (t, n) {
                    return kb(e, t.dom, n) ? I.some(n) : I.none();
                  }(n, t);
                });
              }, n);
            }).getOrNull();
          }(e, t);
        },
        apply: function apply(t, n, o) {
          return wv(e, t, n, o);
        },
        remove: function remove(t, n, o, r) {
          return pv(e, t, n, o, r);
        },
        toggle: function toggle(t, n, o) {
          return function (e, t, n, o) {
            var r = e.formatter.get(t);
            r && (!Eb(e, t, n, o) || "toggle" in r[0] && !r[0].toggle ? wv(e, t, n, o) : pv(e, t, n, o));
          }(e, t, n, o);
        },
        formatChanged: function formatChanged(t, n, o, r, s) {
          return function (e, t, n, o, r, s) {
            return function (e, t, n, o, r, s) {
              var a = t.get();
              q(n.split(","), function (t) {
                var n = xe(a, t).getOrThunk(function () {
                  var e = {
                    withSimilar: {
                      state: Da(!1),
                      similar: !0,
                      callbacks: []
                    },
                    withoutSimilar: {
                      state: Da(!1),
                      similar: !1,
                      callbacks: []
                    },
                    withVars: []
                  };
                  return a[t] = e, e;
                }),
                    i = function i() {
                  var n = Sv(e);
                  return Ev(e, n, t, r, s).isSome();
                };

                if (v(s)) {
                  var _e123 = r ? n.withSimilar : n.withoutSimilar;

                  _e123.callbacks.push(o), 1 === _e123.callbacks.length && _e123.state.set(i());
                } else n.withVars.push({
                  state: Da(i()),
                  similar: r,
                  vars: s,
                  callback: o
                });
              }), t.set(a);
            }(e, t, n, o, r, s), {
              unbind: function unbind() {
                return function (e, t, n) {
                  var o = e.get();
                  q(t.split(","), function (e) {
                    return xe(o, e).each(function (t) {
                      o[e] = {
                        withSimilar: _objectSpread({}, t.withSimilar, {
                          callbacks: G(t.withSimilar.callbacks, function (e) {
                            return e !== n;
                          })
                        }),
                        withoutSimilar: _objectSpread({}, t.withoutSimilar, {
                          callbacks: G(t.withoutSimilar.callbacks, function (e) {
                            return e !== n;
                          })
                        }),
                        withVars: G(t.withVars, function (e) {
                          return e.callback !== n;
                        })
                      };
                    });
                  }), e.set(o);
                }(t, n, o);
              }
            };
          }(e, t, n, o, r, s);
        }
      },
      editor: {
        getContent: function getContent(t) {
          return function (e, t) {
            return I.from(e.getBody()).fold(N("tree" === t.format ? new Ug("body", 11) : ""), function (n) {
              return Wg(e, t, n);
            });
          }(e, t);
        },
        setContent: function setContent(t, n) {
          return function (e, t, n) {
            return I.from(e.getBody()).map(function (o) {
              return fb(t) ? function (e, t, n, o) {
                Xh(e.parser.getNodeFilters(), e.parser.getAttributeFilters(), n);
                var r = Yg({
                  validate: !1
                }, e.schema).serialize(n),
                    s = Rr(vn(t)) ? r : Dt.trim(r);
                return gb(e, s, o.no_selection), {
                  content: n,
                  html: s
                };
              }(e, o, t, n) : function (e, t, n, o) {
                if (0 === n.length || /^\s+$/.test(n)) {
                  var _r58 = '<br data-mce-bogus="1">';
                  "TABLE" === t.nodeName ? n = "<tr><td>" + _r58 + "</td></tr>" : /^(UL|OL)$/.test(t.nodeName) && (n = "<li>" + _r58 + "</li>");

                  var _s37 = Rl(e);

                  return e.schema.isValidChild(t.nodeName.toLowerCase(), _s37.toLowerCase()) ? (n = _r58, n = e.dom.createHTML(_s37, Al(e), n)) : n || (n = _r58), gb(e, n, o.no_selection), {
                    content: n,
                    html: n
                  };
                }

                {
                  "raw" !== o.format && (n = Yg({
                    validate: !1
                  }, e.schema).serialize(e.parser.parse(n, {
                    isRootContent: !0,
                    insert: !0
                  })));

                  var _r59 = Rr(vn(t)) ? n : Dt.trim(n);

                  return gb(e, _r59, o.no_selection), {
                    content: _r59,
                    html: _r59
                  };
                }
              }(e, o, t, n);
            }).getOr({
              content: t,
              html: fb(n.content) ? "" : n.content
            });
          }(e, t, n);
        },
        insertContent: function insertContent(t, n) {
          return mb(e, t, n);
        },
        addVisual: function addVisual(t) {
          return function (e, t) {
            var n = e.dom,
                o = C(t) ? t : e.getBody();
            q(n.select("table,a", o), function (t) {
              switch (t.nodeName) {
                case "TABLE":
                  var _o75 = Od(e),
                      _r60 = n.getAttrib(t, "border");

                  _r60 && "0" !== _r60 || !e.hasVisual ? n.removeClass(t, _o75) : n.addClass(t, _o75);
                  break;

                case "A":
                  if (!n.getAttrib(t, "href")) {
                    var _o76 = n.getAttrib(t, "name") || t.id,
                        _r61 = Td(e);

                    _o76 && e.hasVisual ? n.addClass(t, _r61) : n.removeClass(t, _r61);
                  }

              }
            }), e.dispatch("VisualAid", {
              element: t,
              hasVisual: e.hasVisual
            });
          }(e, t);
        }
      },
      selection: {
        getContent: function getContent(t, n) {
          return function (e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var o = function (e, t) {
              return _objectSpread({}, e, {
                format: t,
                get: !0,
                selection: !0,
                getInner: !0
              });
            }(n, t);

            return rC(e, o).fold(R, function (t) {
              var n = function (e, t) {
                if ("text" === t.format) return function (e) {
                  return I.from(e.selection.getRng()).map(function (t) {
                    var n;

                    var o = I.from(e.dom.getParent(t.commonAncestorContainer, e.dom.isBlock)),
                        r = e.getBody(),
                        s = function (e) {
                      return e.map(function (e) {
                        return e.nodeName;
                      }).getOr("div").toLowerCase();
                    }(o),
                        a = vn(t.cloneContents());

                    Vg(a), qg(a);
                    var i = e.dom.add(r, s, {
                      "data-mce-bogus": "all",
                      style: "overflow: hidden; opacity: 0;"
                    }, a.dom),
                        l = xC(i),
                        d = Mr(null !== (n = i.textContent) && void 0 !== n ? n : "");

                    if (e.dom.remove(i), wC(d, 0) || wC(d, d.length - 1)) {
                      var _e124 = o.getOr(r),
                          _t118 = xC(_e124),
                          _n100 = _t118.indexOf(l);

                      return -1 === _n100 ? l : (wC(_t118, _n100 - 1) ? " " : "") + l + (wC(_t118, _n100 + l.length) ? " " : "");
                    }

                    return l;
                  }).getOr("");
                }(e);
                {
                  var _n101 = function (e, t) {
                    var n = e.selection.getRng(),
                        o = e.dom.create("body"),
                        r = e.selection.getSel(),
                        s = Ag(e, Gu(r)),
                        a = t.contextual ? CC(vn(e.getBody()), s).dom : n.cloneContents();
                    return a && o.appendChild(a), e.selection.serializer.serialize(o, t);
                  }(e, t);

                  return "tree" === t.format ? _n101 : e.selection.isCollapsed() ? "" : _n101;
                }
              }(e, t);

              return sC(e, n, t);
            });
          }(e, t, n);
        }
      },
      autocompleter: {
        addDecoration: function addDecoration(t) {
          return Dg(e, t);
        },
        removeDecoration: function removeDecoration() {
          return function (e, t) {
            return Pg(t).each(function (t) {
              var n = e.selection.getBookmark();
              wo(t), e.selection.moveToBookmark(n);
            });
          }(e, vn(e.getBody()));
        }
      },
      raw: {
        getModel: function getModel() {
          return I.none();
        }
      }
    };
  },
      LC = function LC(e) {
    return ke(e.plugins, "rtc");
  },
      MC = function MC(e) {
    return e.rtcInstance ? e.rtcInstance : PC(e);
  },
      IC = function IC(e) {
    var t = e.rtcInstance;
    if (t) return t;
    throw new Error("Failed to get RTC instance not yet initialized.");
  },
      FC = function FC(e) {
    return IC(e).init.bindEvents();
  },
      UC = function UC(e) {
    return 0 === e.dom.length ? (Co(e), I.none()) : I.some(e);
  },
      zC = function zC(e, t, n, o) {
    e.bind(function (e) {
      return (o ? Gp : Kp)(e.dom, o ? e.dom.length : 0), t.filter(Wt).map(function (t) {
        return function (e, t, n, o) {
          var r = e.dom,
              s = t.dom,
              a = o ? r.length : s.length;
          o ? (Yp(r, s, !1, !o), n.setStart(s, a)) : (Yp(s, r, !1, !o), n.setEnd(s, a));
        }(e, t, n, o);
      });
    }).orThunk(function () {
      var e = function (e, t) {
        return e.filter(function (e) {
          return Km.isBookmarkNode(e.dom);
        }).bind(t ? Bn : Tn);
      }(t, o).or(t).filter(Wt);

      return e.map(function (e) {
        return function (e, t) {
          Rn(e).each(function (n) {
            var o = e.dom;
            t && Fp(n, Mi(o, 0)) ? Kp(o, 0) : !t && Up(n, Mi(o, o.length)) && Gp(o, o.length);
          });
        }(e, o);
      });
    });
  },
      jC = function jC(e, t, n) {
    if (ke(e, t)) {
      var _o77 = G(e[t], function (e) {
        return e !== n;
      });

      0 === _o77.length ? delete e[t] : e[t] = _o77;
    }
  };

  var HC = function HC(e) {
    return !(!e || !e.ownerDocument) && En(vn(e.ownerDocument), vn(e));
  },
      $C = function $C(e, t, n, o) {
    var r, s;

    var _ref13 = function (e, t) {
      var n, o;

      var r = function r(t, n) {
        return J(n, function (n) {
          return e.is(n, t);
        });
      },
          s = function s(t) {
        return e.getParents(t, void 0, e.getRoot());
      };

      return {
        selectorChangedWithUnbind: function selectorChangedWithUnbind(e, a) {
          return n || (n = {}, o = {}, t.on("NodeChange", function (e) {
            var t = e.element,
                a = s(t),
                i = {};
            ge(n, function (e, t) {
              r(t, a).each(function (n) {
                o[t] || (q(e, function (e) {
                  e(!0, {
                    node: n,
                    selector: t,
                    parents: a
                  });
                }), o[t] = e), i[t] = e;
              });
            }), ge(o, function (e, n) {
              i[n] || (delete o[n], q(e, function (e) {
                e(!1, {
                  node: t,
                  selector: n,
                  parents: a
                });
              }));
            });
          })), n[e] || (n[e] = []), n[e].push(a), r(e, s(t.selection.getStart())).each(function () {
            o[e] = n[e];
          }), {
            unbind: function unbind() {
              jC(n, e, a), jC(o, e, a);
            }
          };
        }
      };
    }(e, o),
        a = _ref13.selectorChangedWithUnbind,
        i = function i(e, t) {
      return function (e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var o = function (e, t) {
          return _objectSpread({
            format: "html"
          }, e, {
            set: !0,
            selection: !0,
            content: t
          });
        }(n, t);

        aC(e, o).each(function (t) {
          var n = function (e, t) {
            if ("raw" !== t.format) {
              var _n102 = e.selection.getRng(),
                  _o78 = e.dom.getParent(_n102.commonAncestorContainer, e.dom.isBlock),
                  _r62 = _o78 ? {
                context: _o78.nodeName.toLowerCase()
              } : {},
                  _s38 = e.parser.parse(t.content, _objectSpread({
                forced_root_block: !1
              }, _r62, {}, t));

              return Yg({
                validate: !1
              }, e.schema).serialize(_s38);
            }

            return t.content;
          }(e, t),
              o = e.selection.getRng();

          (function (e, t) {
            var n = I.from(t.firstChild).map(vn),
                o = I.from(t.lastChild).map(vn);
            e.deleteContents(), e.insertNode(t);
            var r = n.bind(Tn).filter(Wt).bind(UC),
                s = o.bind(Bn).filter(Wt).bind(UC);
            zC(r, n, e, !0), zC(s, o, e, !1), e.collapse(!1);
          })(o, o.createContextualFragment(n)), e.selection.setRng(o), eg(e, o), iC(e, n, t);
        });
      }(o, e, t);
    },
        l = function l(e) {
      var t = c();
      t.collapse(!!e), u(t);
    },
        d = function d() {
      return t.getSelection ? t.getSelection() : t.document.selection;
    },
        c = function c() {
      var n;

      var a = function a(e, t, n) {
        try {
          return t.compareBoundaryPoints(e, n);
        } catch (e) {
          return -1;
        }
      },
          i = t.document;

      if (C(o.bookmark) && !kg(o)) {
        var _e125 = ug(o);

        if (_e125.isSome()) return _e125.map(function (e) {
          return Ag(o, [e])[0];
        }).getOr(i.createRange());
      }

      try {
        var _e126 = d();

        _e126 && !zo(_e126.anchorNode) && (n = _e126.rangeCount > 0 ? _e126.getRangeAt(0) : i.createRange(), n = Ag(o, [n])[0]);
      } catch (e) {}

      if (n || (n = i.createRange()), er(n.startContainer) && n.collapsed) {
        var _t119 = e.getRoot();

        n.setStart(_t119, 0), n.setEnd(_t119, 0);
      }

      return r && s && (0 === a(n.START_TO_START, n, r) && 0 === a(n.END_TO_END, n, r) ? n = s : (r = null, s = null)), n;
    },
        u = function u(e, t) {
      if (!function (e) {
        return !!e && HC(e.startContainer) && HC(e.endContainer);
      }(e)) return;
      var n = d();

      if (e = o.dispatch("SetSelectionRange", {
        range: e,
        forward: t
      }).range, n) {
        s = e;

        try {
          n.removeAllRanges(), n.addRange(e);
        } catch (e) {}

        !1 === t && n.extend && (n.collapse(e.endContainer, e.endOffset), n.extend(e.startContainer, e.startOffset)), r = n.rangeCount > 0 ? n.getRangeAt(0) : null;
      }

      if (!e.collapsed && e.startContainer === e.endContainer && (null == n ? void 0 : n.setBaseAndExtent) && e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes()) {
        var _t120 = e.startContainer.childNodes[e.startOffset];
        _t120 && "IMG" === _t120.nodeName && (n.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), n.anchorNode === e.startContainer && n.focusNode === e.endContainer || n.setBaseAndExtent(_t120, 0, _t120, 1));
      }

      o.dispatch("AfterSetSelectionRange", {
        range: e,
        forward: t
      });
    },
        m = function m() {
      var t = d(),
          n = null == t ? void 0 : t.anchorNode,
          o = null == t ? void 0 : t.focusNode;
      if (!t || !n || !o || zo(n) || zo(o)) return !0;
      var r = e.createRng(),
          s = e.createRng();

      try {
        r.setStart(n, t.anchorOffset), r.collapse(!0), s.setStart(o, t.focusOffset), s.collapse(!0);
      } catch (e) {
        return !0;
      }

      return r.compareBoundaryPoints(r.START_TO_START, s) <= 0;
    },
        f = {
      dom: e,
      win: t,
      serializer: n,
      editor: o,
      expand: function expand() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "word"
        };
        return u(Pf(e).expand(c(), t));
      },
      collapse: l,
      setCursorLocation: function setCursorLocation(t, n) {
        var r = e.createRng();
        C(t) && C(n) ? (r.setStart(t, n), r.setEnd(t, n), u(r), l(!1)) : (tm(e, r, o.getBody(), !0), u(r));
      },
      getContent: function getContent(e) {
        return function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return function (e, t, n) {
            return IC(e).selection.getContent(t, n);
          }(e, t.format ? t.format : "html", t);
        }(o, e);
      },
      setContent: i,
      getBookmark: function getBookmark(e, t) {
        return g.getBookmark(e, t);
      },
      moveToBookmark: function moveToBookmark(e) {
        return g.moveToBookmark(e);
      },
      select: function select(t, n) {
        return function (e, t, n) {
          return I.from(t).bind(function (t) {
            return I.from(t.parentNode).map(function (o) {
              var r = e.nodeIndex(t),
                  s = e.createRng();
              return s.setStart(o, r), s.setEnd(o, r + 1), n && (tm(e, s, t, !0), tm(e, s, t, !1)), s;
            });
          });
        }(e, t, n).each(u), t;
      },
      isCollapsed: function isCollapsed() {
        var e = c(),
            t = d();
        return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed);
      },
      isEditable: function isEditable() {
        var t = c(),
            n = o.getBody().querySelectorAll('[data-mce-selected="1"]');
        return n.length > 0 ? ne(n, function (t) {
          return e.isEditable(t.parentElement);
        }) : t.startContainer === t.endContainer ? e.isEditable(t.startContainer) : e.isEditable(t.startContainer) && e.isEditable(t.endContainer);
      },
      isForward: m,
      setNode: function setNode(t) {
        return i(e.getOuterHTML(t)), t;
      },
      getNode: function getNode() {
        return function (e, t) {
          if (!t) return e;
          var n = t.startContainer,
              o = t.endContainer;
          var r = t.startOffset,
              s = t.endOffset;
          var a = t.commonAncestorContainer;
          t.collapsed || (n === o && s - r < 2 && n.hasChildNodes() && (a = n.childNodes[r]), Xo(n) && Xo(o) && (n = n.length === r ? Rg(n.nextSibling, !0) : n.parentNode, o = 0 === s ? Rg(o.previousSibling, !1) : o.parentNode, n && n === o && (a = n)));
          var i = Xo(a) ? a.parentNode : a;
          return jo(i) ? i : e;
        }(o.getBody(), c());
      },
      getSel: d,
      setRng: u,
      getRng: c,
      getStart: function getStart(e) {
        return _g(o.getBody(), c(), e);
      },
      getEnd: function getEnd(e) {
        return Ng(o.getBody(), c(), e);
      },
      getSelectedBlocks: function getSelectedBlocks(t, n) {
        return function (e, t, n, o) {
          var r = [],
              s = e.getRoot(),
              a = e.getParent(n || _g(s, t, t.collapsed), e.isBlock),
              i = e.getParent(o || Ng(s, t, t.collapsed), e.isBlock);

          if (a && a !== s && r.push(a), a && i && a !== i) {
            var _t121;

            var _n103 = new Fo(a, s);

            for (; (_t121 = _n103.next()) && _t121 !== i;) {
              e.isBlock(_t121) && r.push(_t121);
            }
          }

          return i && a !== i && i !== s && r.push(i), r;
        }(e, c(), t, n);
      },
      normalize: function normalize() {
        var t = c(),
            n = d();

        if (!(Gu(n).length > 1) && nm(o)) {
          var _n104 = Tf(e, t);

          return _n104.each(function (e) {
            u(e, m());
          }), _n104.getOr(t);
        }

        return t;
      },
      selectorChanged: function selectorChanged(e, t) {
        return a(e, t), f;
      },
      selectorChangedWithUnbind: a,
      getScrollContainer: function getScrollContainer() {
        var t,
            n = e.getRoot();

        for (; n && "BODY" !== n.nodeName;) {
          if (n.scrollHeight > n.clientHeight) {
            t = n;
            break;
          }

          n = n.parentNode;
        }

        return t;
      },
      scrollIntoView: function scrollIntoView(e, t) {
        C(e) ? function (e, t, n) {
          (e.inline ? Qf : Zf)(e, t, n);
        }(o, e, t) : eg(o, c(), t);
      },
      placeCaretAt: function placeCaretAt(e, t) {
        return u(kf(e, t, o.getDoc()));
      },
      getBoundingClientRect: function getBoundingClientRect() {
        var e = c();
        return e.collapsed ? Mi.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect();
      },
      destroy: function destroy() {
        t = r = s = null, p.destroy();
      }
    },
        g = Km(f),
        p = af(f, o);

    return f.bookmarkManager = g, f.controlSelection = p, f;
  },
      VC = function VC(e, t, n) {
    -1 === Dt.inArray(t, n) && (e.addAttributeFilter(n, function (e, t) {
      var n = e.length;

      for (; n--;) {
        e[n].attr(t, null);
      }
    }), t.push(n));
  },
      qC = function qC(e, t) {
    var n = ["data-mce-selected"],
        o = _objectSpread({
      entity_encoding: "named",
      remove_trailing_brs: !0,
      pad_empty_with_br: !1
    }, e),
        r = t && t.dom ? t.dom : Oa.DOM,
        s = t && t.schema ? t.schema : ca(o),
        a = nC(o, s);

    return function (e, t, n) {
      e.addAttributeFilter("data-mce-tabindex", function (e, t) {
        var n = e.length;

        for (; n--;) {
          var _o79 = e[n];
          _o79.attr("tabindex", _o79.attr("data-mce-tabindex")), _o79.attr(t, null);
        }
      }), e.addAttributeFilter("src,href,style", function (e, o) {
        var r = "data-mce-" + o,
            s = t.url_converter,
            a = t.url_converter_scope;
        var i = e.length;

        for (; i--;) {
          var _t122 = e[i];

          var _l10 = _t122.attr(r);

          void 0 !== _l10 ? (_t122.attr(o, _l10.length > 0 ? _l10 : null), _t122.attr(r, null)) : (_l10 = _t122.attr(o), "style" === o ? _l10 = n.serializeStyle(n.parseStyle(_l10), _t122.name) : s && (_l10 = s.call(a, _l10, o, _t122.name)), _t122.attr(o, _l10.length > 0 ? _l10 : null));
        }
      }), e.addAttributeFilter("class", function (e) {
        var t = e.length;

        for (; t--;) {
          var _n105 = e[t];

          var _o80 = _n105.attr("class");

          _o80 && (_o80 = _o80.replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), _n105.attr("class", _o80.length > 0 ? _o80 : null));
        }
      }), e.addAttributeFilter("data-mce-type", function (e, t, n) {
        var o = e.length;

        for (; o--;) {
          var _t123 = e[o];

          if ("bookmark" === _t123.attr("data-mce-type") && !n.cleanup) {
            var _e127 = I.from(_t123.firstChild).exists(function (e) {
              var t;
              return !Lr(null !== (t = e.value) && void 0 !== t ? t : "");
            });

            _e127 ? _t123.unwrap() : _t123.remove();
          }
        }
      }), e.addNodeFilter("noscript", function (e) {
        var t;
        var n = e.length;

        for (; n--;) {
          var _o81 = e[n].firstChild;
          _o81 && (_o81.value = Qs.decode(null !== (t = _o81.value) && void 0 !== t ? t : ""));
        }
      }), e.addNodeFilter("script,style", function (e, n) {
        var o;

        var r = function r(e) {
          return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "");
        };

        var s = e.length;

        for (; s--;) {
          var _a20 = e[s],
              _i22 = _a20.firstChild,
              _l11 = null !== (o = null == _i22 ? void 0 : _i22.value) && void 0 !== o ? o : "";

          if ("script" === n) {
            var _e128 = _a20.attr("type");

            _e128 && _a20.attr("type", "mce-no/type" === _e128 ? null : _e128.replace(/^mce\-/, "")), "xhtml" === t.element_format && _i22 && _l11.length > 0 && (_i22.value = "// <![CDATA[\n" + r(_l11) + "\n// ]]>");
          } else "xhtml" === t.element_format && _i22 && _l11.length > 0 && (_i22.value = "\x3c!--\n" + r(_l11) + "\n--\x3e");
        }
      }), e.addNodeFilter("#comment", function (e) {
        var o = e.length;

        for (; o--;) {
          var _r63 = e[o],
              _s39 = _r63.value;
          t.preserve_cdata && 0 === (null == _s39 ? void 0 : _s39.indexOf("[CDATA[")) ? (_r63.name = "#cdata", _r63.type = 4, _r63.value = n.decode(_s39.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === (null == _s39 ? void 0 : _s39.indexOf("mce:protected ")) && (_r63.name = "#text", _r63.type = 3, _r63.raw = !0, _r63.value = unescape(_s39).substr(14));
        }
      }), e.addNodeFilter("xml:namespace,input", function (e, t) {
        var n = e.length;

        for (; n--;) {
          var _o82 = e[n];
          7 === _o82.type ? _o82.remove() : 1 === _o82.type && ("input" !== t || _o82.attr("type") || _o82.attr("type", "text"));
        }
      }), e.addAttributeFilter("data-mce-type", function (t) {
        q(t, function (t) {
          "format-caret" === t.attr("data-mce-type") && (t.isEmpty(e.schema.getNonEmptyElements()) ? t.remove() : t.unwrap());
        });
      }), e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-block,data-mce-type,data-mce-resize,data-mce-placeholder", function (e, t) {
        var n = e.length;

        for (; n--;) {
          e[n].attr(t, null);
        }
      }), t.remove_trailing_brs && Ov(t, e, e.schema);
    }(a, o, r), {
      schema: s,
      addNodeFilter: a.addNodeFilter,
      addAttributeFilter: a.addAttributeFilter,
      serialize: function serialize(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var i = _objectSpread({
          format: "html"
        }, n),
            l = function (e, t, n) {
          return function (e, t) {
            return C(e) && e.hasEventListeners("PreProcess") && !t.no_events;
          }(e, n) ? function (e, t, n) {
            var o;
            var r = e.dom;
            var s = t.cloneNode(!0);
            var a = document.implementation;

            if (a.createHTMLDocument) {
              var _e129 = a.createHTMLDocument("");

              Dt.each("BODY" === s.nodeName ? s.childNodes : [s], function (t) {
                _e129.body.appendChild(_e129.importNode(t, !0));
              }), s = "BODY" !== s.nodeName ? _e129.body.firstChild : _e129.body, o = r.doc, r.doc = _e129;
            }

            return function (e, t) {
              e.dispatch("PreProcess", t);
            }(e, _objectSpread({}, n, {
              node: s
            })), o && (r.doc = o), s;
          }(e, t, n) : t;
        }(t, e, i),
            d = function (e, t, n) {
          var o = Mr(n.getInner ? t.innerHTML : e.getOuterHTML(t));
          return n.selection || Rr(vn(t)) ? o : Dt.trim(o);
        }(r, l, i),
            c = function (e, t, n) {
          var o = n.selection ? _objectSpread({
            forced_root_block: !1
          }, n) : n,
              r = e.parse(t, o);
          return function (e) {
            var t = function t(e) {
              return "br" === (null == e ? void 0 : e.name);
            },
                n = e.lastChild;

            if (t(n)) {
              var _e130 = n.prev;
              t(_e130) && (n.remove(), _e130.remove());
            }
          }(r), r;
        }(a, d, i);

        return "tree" === i.format ? c : function (e, t, n, o, r) {
          var s = function (e, t, n) {
            return Yg(e, t).serialize(n);
          }(t, n, o);

          return function (e, t, n) {
            if (!t.no_events && e) {
              var _o83 = function (e, t) {
                return e.dispatch("PostProcess", t);
              }(e, _objectSpread({}, t, {
                content: n
              }));

              return _o83.content;
            }

            return n;
          }(e, r, s);
        }(t, o, s, c, i);
      },
      addRules: s.addValidElements,
      setRules: s.setValidElements,
      addTempAttr: O(VC, a, n),
      getTempAttrs: N(n),
      getNodeFilters: a.getNodeFilters,
      getAttributeFilters: a.getAttributeFilters,
      removeNodeFilter: a.removeNodeFilter,
      removeAttributeFilter: a.removeAttributeFilter
    };
  },
      WC = function WC(e, t) {
    var n = qC(e, t);
    return {
      schema: n.schema,
      addNodeFilter: n.addNodeFilter,
      addAttributeFilter: n.addAttributeFilter,
      serialize: n.serialize,
      addRules: n.addRules,
      setRules: n.setRules,
      addTempAttr: n.addTempAttr,
      getTempAttrs: n.getTempAttrs,
      getNodeFilters: n.getNodeFilters,
      getAttributeFilters: n.getAttributeFilters,
      removeNodeFilter: n.removeNodeFilter,
      removeAttributeFilter: n.removeAttributeFilter
    };
  },
      KC = function KC(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var o = function (e, t) {
      return _objectSpread({
        format: "html"
      }, e, {
        set: !0,
        content: t
      });
    }(n, t);

    return aC(e, o).map(function (t) {
      var n = function (e, t, n) {
        return MC(e).editor.setContent(t, n);
      }(e, t.content, t);

      return iC(e, n.html, t), n.content;
    }).getOr(t);
  },
      GC = "autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(","),
      YC = "template_cdate_classes,template_mdate_classes,template_selected_content_classes,template_preview_replace_values,template_replace_values,templates,template_cdate_format,template_mdate_format".split(","),
      XC = "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(","),
      QC = [{
    name: "template",
    replacedWith: "Advanced Template"
  }, {
    name: "rtc"
  }],
      JC = function JC(e, t) {
    var n = G(t, function (t) {
      return ke(e, t);
    });
    return ae(n);
  },
      ZC = function ZC(e) {
    var t = JC(e, GC),
        n = e.forced_root_block;
    return !1 !== n && "" !== n || t.push("forced_root_block (false only)"), ae(t);
  },
      ew = function ew(e) {
    return JC(e, YC);
  },
      tw = function tw(e, t) {
    var n = Dt.makeMap(e.plugins, " "),
        o = G(t, function (e) {
      return ke(n, e);
    });
    return ae(o);
  },
      nw = function nw(e) {
    return tw(e, XC);
  },
      ow = function ow(e) {
    return tw(e, QC.map(function (e) {
      return e.name;
    }));
  },
      rw = function rw(e) {
    return J(QC, function (t) {
      return t.name === e;
    }).fold(function () {
      return e;
    }, function (t) {
      return t.replacedWith ? "".concat(e, ", replaced by ").concat(t.replacedWith) : e;
    });
  },
      sw = Oa.DOM,
      aw = function aw(e) {
    return I.from(e).each(function (e) {
      return e.destroy();
    });
  },
      iw = function () {
    var e = {};
    return {
      add: function add(t, n) {
        e[t] = n;
      },
      get: function get(t) {
        return e[t] ? e[t] : {
          icons: {}
        };
      },
      has: function has(t) {
        return ke(e, t);
      }
    };
  }(),
      lw = Fa.ModelManager,
      dw = function dw(e, t) {
    return t.dom[e];
  },
      cw = function cw(e, t) {
    return parseInt(io(t, e), 10);
  },
      uw = O(dw, "clientWidth"),
      mw = O(dw, "clientHeight"),
      fw = O(cw, "margin-top"),
      gw = O(cw, "margin-left"),
      pw = function pw(e) {
    var t = [],
        n = function n() {
      var t = e.theme;
      return t && t.getNotificationManagerImpl ? t.getNotificationManagerImpl() : function () {
        var e = function e() {
          throw new Error("Theme did not provide a NotificationManager implementation.");
        };

        return {
          open: e,
          close: e,
          getArgs: e
        };
      }();
    },
        o = function o() {
      return I.from(t[0]);
    },
        r = function r() {
      q(t, function (e) {
        e.reposition();
      });
    },
        s = function s(e) {
      Z(t, function (t) {
        return t === e;
      }).each(function (e) {
        t.splice(e, 1);
      });
    },
        a = function a(_a21) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      return e.removed || !function (e) {
        return (t = e.inline ? e.getBody() : e.getContentAreaContainer(), I.from(t).map(vn)).map(Gn).getOr(!1);
        var t;
      }(e) ? {} : (i && e.dispatch("BeforeOpenNotification", {
        notification: _a21
      }), J(t, function (e) {
        return t = n().getArgs(e), o = _a21, !(t.type !== o.type || t.text !== o.text || t.progressBar || t.timeout || o.progressBar || o.timeout);
        var t, o;
      }).getOrThunk(function () {
        e.editorManager.setActive(e);
        var i = n().open(_a21, function () {
          s(i), r(), o().fold(function () {
            return e.focus();
          }, function (e) {
            return tg(vn(e.getEl()));
          });
        });
        return function (e) {
          t.push(e);
        }(i), r(), e.dispatch("OpenNotification", {
          notification: _objectSpread({}, i)
        }), i;
      }));
    },
        i = N(t);

    return function (e) {
      e.on("SkinLoaded", function () {
        var t = sd(e);
        t && a({
          text: t,
          type: "warning",
          timeout: 0
        }, !1), r();
      }), e.on("show ResizeEditor ResizeWindow NodeChange", function () {
        requestAnimationFrame(r);
      }), e.on("remove", function () {
        q(t.slice(), function (e) {
          n().close(e);
        });
      });
    }(e), {
      open: a,
      close: function close() {
        o().each(function (e) {
          n().close(e), s(e), r();
        });
      },
      getNotifications: i
    };
  },
      hw = Fa.PluginManager,
      bw = Fa.ThemeManager,
      vw = function vw(e) {
    var t = [];

    var n = function n() {
      var t = e.theme;
      return t && t.getWindowManagerImpl ? t.getWindowManagerImpl() : function () {
        var e = function e() {
          throw new Error("Theme did not provide a WindowManager implementation.");
        };

        return {
          open: e,
          openUrl: e,
          alert: e,
          confirm: e,
          close: e
        };
      }();
    },
        o = function o(e, t) {
      return function () {
        for (var _len10 = arguments.length, n = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          n[_key10] = arguments[_key10];
        }

        return t ? t.apply(e, n) : void 0;
      };
    },
        r = function r(n) {
      (function (t) {
        e.dispatch("CloseWindow", {
          dialog: t
        });
      })(n), t = G(t, function (e) {
        return e !== n;
      }), 0 === t.length && e.focus();
    },
        s = function s(n) {
      e.editorManager.setActive(e), cg(e), e.ui.show();
      var o = n();
      return function (n) {
        t.push(n), function (t) {
          e.dispatch("OpenWindow", {
            dialog: t
          });
        }(n);
      }(o), o;
    };

    return e.on("remove", function () {
      q(t, function (e) {
        n().close(e);
      });
    }), {
      open: function open(e, t) {
        return s(function () {
          return n().open(e, t, r);
        });
      },
      openUrl: function openUrl(e) {
        return s(function () {
          return n().openUrl(e, r);
        });
      },
      alert: function alert(e, t, r) {
        var s = n();
        s.alert(e, o(r || s, t));
      },
      confirm: function confirm(e, t, r) {
        var s = n();
        s.confirm(e, o(r || s, t));
      },
      close: function close() {
        I.from(t[t.length - 1]).each(function (e) {
          n().close(e), r(e);
        });
      }
    };
  },
      yw = function yw(e, t) {
    e.notificationManager.open({
      type: "error",
      text: t
    });
  },
      Cw = function Cw(e, t) {
    e._skinLoaded ? yw(e, t) : e.on("SkinLoaded", function () {
      yw(e, t);
    });
  },
      ww = function ww(e, t, n) {
    Ym(e, t, {
      message: n
    }), console.error(n);
  },
      xw = function xw(e, t, n) {
    return n ? "Failed to load ".concat(e, ": ").concat(n, " from url ").concat(t) : "Failed to load ".concat(e, " url: ").concat(t);
  },
      kw = function kw(e) {
    var n = window.console;

    for (var _len11 = arguments.length, t = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
      t[_key11 - 1] = arguments[_key11];
    }

    n && (n.error ? n.error.apply(n, [e].concat(t)) : n.log.apply(n, [e].concat(t)));
  },
      Ew = function Ew(e, t) {
    var n = e.editorManager.baseURL + "/skins/content",
        o = "content".concat(e.editorManager.suffix, ".css");
    return V(t, function (t) {
      return function (e) {
        return /^[a-z0-9\-]+$/i.test(e);
      }(t) && !e.inline ? "".concat(n, "/").concat(t, "/").concat(o) : e.documentBaseURI.toAbsolute(t);
    });
  },
      Sw = function Sw(e, t) {
    var n = {};
    return {
      findAll: function findAll(o) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : M;
        var s = G(function (e) {
          return e ? ce(e.getElementsByTagName("img")) : [];
        }(o), function (t) {
          var n = t.src;
          return !t.hasAttribute("data-mce-bogus") && !t.hasAttribute("data-mce-placeholder") && !(!n || n === At.transparentSrc) && (He(n, "blob:") ? !e.isUploaded(n) && r(t) : !!He(n, "data:") && r(t));
        }),
            a = V(s, function (e) {
          var o = e.src;
          if (ke(n, o)) return n[o].then(function (t) {
            return m(t) ? t : {
              image: e,
              blobInfo: t.blobInfo
            };
          });
          {
            var _r64 = function (e, t) {
              var n = function n() {
                return Promise.reject("Invalid data URI");
              };

              if (He(t, "blob:")) {
                var _s40 = e.getByUri(t);

                return C(_s40) ? Promise.resolve(_s40) : (o = t, He(o, "blob:") ? function (e) {
                  return fetch(e).then(function (e) {
                    return e.ok ? e.blob() : Promise.reject();
                  })["catch"](function () {
                    return Promise.reject({
                      message: "Cannot convert ".concat(e, " to Blob. Resource might not exist or is inaccessible."),
                      uriType: "blob"
                    });
                  });
                }(o) : He(o, "data:") ? (r = o, new Promise(function (e, t) {
                  Tv(r).bind(function (_ref14) {
                    var e = _ref14.type,
                        t = _ref14.data,
                        n = _ref14.base64Encoded;
                    return Bv(e, t, n);
                  }).fold(function () {
                    return t("Invalid data URI");
                  }, e);
                })) : Promise.reject("Unknown URI format")).then(function (t) {
                  return Dv(t).then(function (o) {
                    return Lv(o, !1, function (n) {
                      return I.some(Mv(e, t, n));
                    }).getOrThunk(n);
                  });
                });
              }

              var o, r;
              return He(t, "data:") ? Iv(e, t).fold(n, function (e) {
                return Promise.resolve(e);
              }) : Promise.reject("Unknown image data format");
            }(t, o).then(function (t) {
              return delete n[o], {
                image: e,
                blobInfo: t
              };
            })["catch"](function (e) {
              return delete n[o], e;
            });

            return n[o] = _r64, _r64;
          }
        });
        return Promise.all(a);
      }
    };
  },
      _w = function _w() {
    var e = {};

    var t = function t(e, _t124) {
      return {
        status: e,
        resultUri: _t124
      };
    },
        n = function n(t) {
      return t in e;
    };

    return {
      hasBlobUri: n,
      getResultUri: function getResultUri(t) {
        var n = e[t];
        return n ? n.resultUri : null;
      },
      isPending: function isPending(t) {
        return !!n(t) && 1 === e[t].status;
      },
      isUploaded: function isUploaded(t) {
        return !!n(t) && 2 === e[t].status;
      },
      markPending: function markPending(n) {
        e[n] = t(1, null);
      },
      markUploaded: function markUploaded(n, o) {
        e[n] = t(2, o);
      },
      removeFailed: function removeFailed(t) {
        delete e[t];
      },
      destroy: function destroy() {
        e = {};
      }
    };
  };

  var Nw = 0;

  var Rw = function Rw(e, t) {
    var n = {},
        o = function o(e, n) {
      return new Promise(function (o, r) {
        var s = new XMLHttpRequest();
        s.open("POST", t.url), s.withCredentials = t.credentials, s.upload.onprogress = function (e) {
          n(e.loaded / e.total * 100);
        }, s.onerror = function () {
          r("Image upload failed due to a XHR Transport error. Code: " + s.status);
        }, s.onload = function () {
          if (s.status < 200 || s.status >= 300) return void r("HTTP Error: " + s.status);
          var e = JSON.parse(s.responseText);
          var n, a;
          e && m(e.location) ? o((n = t.basePath, a = e.location, n ? n.replace(/\/$/, "") + "/" + a.replace(/^\//, "") : a)) : r("Invalid JSON: " + s.responseText);
        };
        var a = new FormData();
        a.append("file", e.blob(), e.filename()), s.send(a);
      });
    },
        r = w(t.handler) ? t.handler : o,
        s = function s(e, t) {
      return {
        url: t,
        blobInfo: e,
        status: !0
      };
    },
        a = function a(e, t) {
      return {
        url: "",
        blobInfo: e,
        status: !1,
        error: t
      };
    },
        i = function i(e, t) {
      Dt.each(n[e], function (e) {
        e(t);
      }), delete n[e];
    };

    return {
      upload: function upload(l, d) {
        return t.url || r !== o ? function (t, o) {
          return t = Dt.grep(t, function (t) {
            return !e.isUploaded(t.blobUri());
          }), Promise.all(Dt.map(t, function (t) {
            return e.isPending(t.blobUri()) ? function (e) {
              var t = e.blobUri();
              return new Promise(function (e) {
                n[t] = n[t] || [], n[t].push(e);
              });
            }(t) : function (t, n, o) {
              return e.markPending(t.blobUri()), new Promise(function (r) {
                var l, d;

                try {
                  var _c6 = function _c6() {
                    l && (l.close(), d = E);
                  },
                      _u6 = function _u6(n) {
                    _c6(), e.markUploaded(t.blobUri(), n), i(t.blobUri(), s(t, n)), r(s(t, n));
                  },
                      _f5 = function _f5(n) {
                    _c6(), e.removeFailed(t.blobUri()), i(t.blobUri(), a(t, n)), r(a(t, n));
                  };

                  d = function d(e) {
                    e < 0 || e > 100 || I.from(l).orThunk(function () {
                      return I.from(o).map(D);
                    }).each(function (t) {
                      l = t, t.progressBar.value(e);
                    });
                  }, n(t, d).then(_u6, function (e) {
                    _f5(m(e) ? {
                      message: e
                    } : e);
                  });
                } catch (e) {
                  r(a(t, e));
                }
              });
            }(t, r, o);
          }));
        }(l, d) : new Promise(function (e) {
          e([]);
        });
      }
    };
  },
      Aw = function Aw(e) {
    return function () {
      return e.notificationManager.open({
        text: e.translate("Image uploading..."),
        type: "info",
        timeout: -1,
        progressBar: !0
      });
    };
  },
      Ow = function Ow(e, t) {
    return Rw(t, {
      url: zl(e),
      basePath: jl(e),
      credentials: Hl(e),
      handler: $l(e)
    });
  },
      Tw = function Tw(e) {
    var t = function () {
      var e = [];

      var t = function t(e) {
        if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");

        var t = e.id || "blobid" + Nw++ + function () {
          var e = function e() {
            return Math.round(4294967295 * Math.random()).toString(36);
          };

          return "s" + new Date().getTime().toString(36) + e() + e() + e();
        }(),
            n = e.name || t,
            o = e.blob;

        var r;
        return {
          id: N(t),
          name: N(n),
          filename: N(e.filename || n + "." + (r = o.type, {
            "image/jpeg": "jpg",
            "image/jpg": "jpg",
            "image/gif": "gif",
            "image/png": "png",
            "image/apng": "apng",
            "image/avif": "avif",
            "image/svg+xml": "svg",
            "image/webp": "webp",
            "image/bmp": "bmp",
            "image/tiff": "tiff"
          }[r.toLowerCase()] || "dat")),
          blob: N(o),
          base64: N(e.base64),
          blobUri: N(e.blobUri || URL.createObjectURL(o)),
          uri: N(e.uri)
        };
      },
          n = function n(t) {
        return J(e, t).getOrUndefined();
      },
          o = function o(e) {
        return n(function (t) {
          return t.id() === e;
        });
      };

      return {
        create: function create(e, n, o, r, s) {
          if (m(e)) return t({
            id: e,
            name: r,
            filename: s,
            blob: n,
            base64: o
          });
          if (f(e)) return t(e);
          throw new Error("Unknown input type");
        },
        add: function add(t) {
          o(t.id()) || e.push(t);
        },
        get: o,
        getByUri: function getByUri(e) {
          return n(function (t) {
            return t.blobUri() === e;
          });
        },
        getByData: function getByData(e, t) {
          return n(function (n) {
            return n.base64() === e && n.blob().type === t;
          });
        },
        findFirst: n,
        removeByUri: function removeByUri(t) {
          e = G(e, function (e) {
            return e.blobUri() !== t || (URL.revokeObjectURL(e.blobUri()), !1);
          });
        },
        destroy: function destroy() {
          q(e, function (e) {
            URL.revokeObjectURL(e.blobUri());
          }), e = [];
        }
      };
    }();

    var n, o;

    var r = _w(),
        s = [],
        a = function a(t) {
      return function (n) {
        return e.selection ? t(n) : [];
      };
    },
        i = function i(e, t, n) {
      var o = 0;

      do {
        o = e.indexOf(t, o), -1 !== o && (e = e.substring(0, o) + n + e.substr(o + t.length), o += n.length - t.length + 1);
      } while (-1 !== o);

      return e;
    },
        l = function l(e, t, n) {
      var o = "src=\"".concat(n, "\"").concat(n === At.transparentSrc ? ' data-mce-placeholder="1"' : "");
      return e = i(e, "src=\"".concat(t, "\""), o), i(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"');
    },
        d = function d(t, n) {
      q(e.undoManager.data, function (e) {
        "fragmented" === e.type ? e.fragments = V(e.fragments, function (e) {
          return l(e, t, n);
        }) : e.content = l(e.content, t, n);
      });
    },
        c = function c() {
      return n || (n = Ow(e, r)), p().then(a(function (o) {
        var r = V(o, function (e) {
          return e.blobInfo;
        });
        return n.upload(r, Aw(e)).then(a(function (n) {
          var r = [];
          var s = !1;
          var a = V(n, function (n, a) {
            var _o$a = o[a],
                i = _o$a.blobInfo,
                l = _o$a.image;
            var c = !1;
            return n.status && Il(e) ? (n.url && !je(l.src, n.url) && (s = !0), t.removeByUri(l.src), LC(e) || function (t, n) {
              var o = e.convertURL(n, "src");
              var r;
              d(t.src, n), Jt(vn(t), {
                src: Ml(e) ? (r = n, r + (-1 === r.indexOf("?") ? "?" : "&") + new Date().getTime()) : n,
                "data-mce-src": o
              });
            }(l, n.url)) : n.error && (n.error.remove && (d(l.src, At.transparentSrc), r.push(l), c = !0), function (e, t) {
              Cw(e, Ia.translate(["Failed to upload image: {0}", t]));
            }(e, n.error.message)), {
              element: l,
              status: n.status,
              uploadUri: n.url,
              blobInfo: i,
              removed: c
            };
          });
          return r.length > 0 && !LC(e) ? e.undoManager.transact(function () {
            q(xo(r), function (n) {
              var o = Rn(n);
              Co(n), o.each(function (e) {
                return function (t) {
                  (function (e, t) {
                    return e.dom.isEmpty(t.dom) && C(e.schema.getTextBlockElements()[jt(t)]);
                  })(e, t) && ho(t, pn('<br data-mce-bogus="1" />'));
                };
              }(e)), t.removeByUri(n.dom.src);
            });
          }) : s && e.undoManager.dispatchChange(), a;
        }));
      }));
    },
        u = function u() {
      return Ll(e) ? c() : Promise.resolve([]);
    },
        g = function g(e) {
      return ne(s, function (t) {
        return t(e);
      });
    },
        p = function p() {
      return o || (o = Sw(r, t)), o.findAll(e.getBody(), g).then(a(function (t) {
        var n = G(t, function (t) {
          return m(t) ? (Cw(e, t), !1) : "blob" !== t.uriType;
        });
        return LC(e) || q(n, function (e) {
          d(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src");
        }), n;
      }));
    },
        h = function h(n) {
      return n.replace(/src="(blob:[^"]+)"/g, function (n, o) {
        var s = r.getResultUri(o);
        if (s) return 'src="' + s + '"';
        var a = t.getByUri(o);
        return a || (a = X(e.editorManager.get(), function (e, t) {
          return e || t.editorUpload && t.editorUpload.blobCache.getByUri(o);
        }, void 0)), a ? 'src="data:' + a.blob().type + ";base64," + a.base64() + '"' : n;
      });
    };

    return e.on("SetContent", function () {
      Ll(e) ? u() : p();
    }), e.on("RawSaveContent", function (e) {
      e.content = h(e.content);
    }), e.on("GetContent", function (e) {
      e.source_view || "raw" === e.format || "tree" === e.format || (e.content = h(e.content));
    }), e.on("PostRender", function () {
      e.parser.addNodeFilter("img", function (e) {
        q(e, function (e) {
          var n = e.attr("src");
          if (!n || t.getByUri(n)) return;
          var o = r.getResultUri(n);
          o && e.attr("src", o);
        });
      });
    }), {
      blobCache: t,
      addFilter: function addFilter(e) {
        s.push(e);
      },
      uploadImages: c,
      uploadImagesAuto: u,
      scanForImages: p,
      destroy: function destroy() {
        t.destroy(), r.destroy(), o = n = null;
      }
    };
  },
      Bw = {
    remove_similar: !0,
    inherit: !1
  },
      Dw = _objectSpread({
    selector: "td,th"
  }, Bw),
      Pw = {
    tablecellbackgroundcolor: _objectSpread({
      styles: {
        backgroundColor: "%value"
      }
    }, Dw),
    tablecellverticalalign: _objectSpread({
      styles: {
        "vertical-align": "%value"
      }
    }, Dw),
    tablecellbordercolor: _objectSpread({
      styles: {
        borderColor: "%value"
      }
    }, Dw),
    tablecellclass: _objectSpread({
      classes: ["%value"]
    }, Dw),
    tableclass: _objectSpread({
      selector: "table",
      classes: ["%value"]
    }, Bw),
    tablecellborderstyle: _objectSpread({
      styles: {
        borderStyle: "%value"
      }
    }, Dw),
    tablecellborderwidth: _objectSpread({
      styles: {
        borderWidth: "%value"
      }
    }, Dw)
  },
      Lw = N(Pw),
      Mw = Dt.each,
      Iw = Oa.DOM,
      Fw = function Fw(e) {
    return C(e) && f(e);
  },
      Uw = function Uw(e, t) {
    var n = t && t.schema || ca({}),
        o = function o(e) {
      var t = m(e) ? {
        name: e,
        classes: [],
        attrs: {}
      } : e,
          n = Iw.create(t.name);
      return function (e, t) {
        t.classes.length > 0 && Iw.addClass(e, t.classes.join(" ")), Iw.setAttribs(e, t.attrs);
      }(n, t), n;
    },
        r = function r(e, t, s) {
      var a;

      var i = t[0],
          l = Fw(i) ? i.name : void 0,
          d = function (e, t) {
        var o = n.getElementRule(e.nodeName.toLowerCase()),
            r = null == o ? void 0 : o.parentsRequired;
        return !(!r || !r.length) && (t && H(r, t) ? t : r[0]);
      }(e, l);

      if (d) l === d ? (a = i, t = t.slice(1)) : a = d;else if (i) a = i, t = t.slice(1);else if (!s) return e;
      var c = a ? o(a) : Iw.create("div");
      c.appendChild(e), s && Dt.each(s, function (t) {
        var n = o(t);
        c.insertBefore(n, e);
      });
      var u = Fw(a) ? a.siblings : void 0;
      return r(c, t, u);
    },
        s = Iw.create("div");

    if (e.length > 0) {
      var _t125 = e[0],
          _n106 = o(_t125),
          _a22 = Fw(_t125) ? _t125.siblings : void 0;

      s.appendChild(r(_n106, e.slice(1), _a22));
    }

    return s;
  },
      zw = function zw(e) {
    var t = "div";
    var n = {
      name: t,
      classes: [],
      attrs: {},
      selector: e = Dt.trim(e)
    };
    return "*" !== e && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function (e, t, o, r, s) {
      switch (t) {
        case "#":
          n.attrs.id = o;
          break;

        case ".":
          n.classes.push(o);
          break;

        case ":":
          -1 !== Dt.inArray("checked disabled enabled read-only required".split(" "), o) && (n.attrs[o] = o);
      }

      if ("[" === r) {
        var _e131 = s.match(/([\w\-]+)(?:\=\"([^\"]+))?/);

        _e131 && (n.attrs[_e131[1]] = _e131[2]);
      }

      return "";
    })), n.name = t || "div", n;
  },
      jw = function jw(e, t) {
    var n = "",
        o = md(e);
    if ("" === o) return "";

    var r = function r(e) {
      return m(e) ? e.replace(/%(\w+)/g, "") : "";
    },
        s = function s(t, n) {
      return Iw.getStyle(null != n ? n : e.getBody(), t, !0);
    };

    if (m(t)) {
      var _n107 = e.formatter.get(t);

      if (!_n107) return "";
      t = _n107[0];
    }

    if ("preview" in t) {
      var _e132 = t.preview;
      if (!1 === _e132) return "";
      o = _e132 || o;
    }

    var a,
        i = t.block || t.inline || "span";
    var l = (d = t.selector, m(d) ? (d = (d = d.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), Dt.map(d.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
      var t = Dt.map(e.split(/(?:~\+|~|\+)/), zw),
          n = t.pop();
      return t.length && (n.siblings = t), n;
    }).reverse()) : []);
    var d;
    l.length > 0 ? (l[0].name || (l[0].name = i), i = t.selector, a = Uw(l, e)) : a = Uw([i], e);
    var c = Iw.select(i, a)[0] || a.firstChild;
    Mw(t.styles, function (e, t) {
      var n = r(e);
      n && Iw.setStyle(c, t, n);
    }), Mw(t.attributes, function (e, t) {
      var n = r(e);
      n && Iw.setAttrib(c, t, n);
    }), Mw(t.classes, function (e) {
      var t = r(e);
      Iw.hasClass(c, t) || Iw.addClass(c, t);
    }), e.dispatch("PreviewFormats"), Iw.setStyles(a, {
      position: "absolute",
      left: -65535
    }), e.getBody().appendChild(a);
    var u = s("fontSize"),
        f = /px$/.test(u) ? parseInt(u, 10) : 0;
    return Mw(o.split(" "), function (e) {
      var t = s(e, c);

      if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = s(e), "#ffffff" === Ku(t).toLowerCase()) || "color" === e && "#000000" === Ku(t).toLowerCase())) {
        if ("font-size" === e && /em|%$/.test(t)) {
          if (0 === f) return;
          t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * f + "px";
        }

        "border" === e && t && (n += "padding:0 2px;"), n += e + ":" + t + ";";
      }
    }), e.dispatch("AfterPreviewFormats"), Iw.remove(a), n;
  },
      Hw = function Hw(e) {
    var t = function (e) {
      var t = {},
          n = function n(e, o) {
        e && (m(e) ? (p(o) || (o = [o]), q(o, function (e) {
          v(e.deep) && (e.deep = !km(e)), v(e.split) && (e.split = !km(e) || Em(e)), v(e.remove) && km(e) && !Em(e) && (e.remove = "none"), km(e) && Em(e) && (e.mixed = !0, e.block_expand = !0), m(e.classes) && (e.classes = e.classes.split(/\s+/));
        }), t[e] = o) : ge(e, function (e, t) {
          n(t, e);
        }));
      };

      return n(function (e) {
        var t = e.dom,
            n = e.schema.type,
            o = {
          valigntop: [{
            selector: "td,th",
            styles: {
              verticalAlign: "top"
            }
          }],
          valignmiddle: [{
            selector: "td,th",
            styles: {
              verticalAlign: "middle"
            }
          }],
          valignbottom: [{
            selector: "td,th",
            styles: {
              verticalAlign: "bottom"
            }
          }],
          alignleft: [{
            selector: "figure.image",
            collapsed: !1,
            classes: "align-left",
            ceFalseOverride: !0,
            preview: "font-family font-size"
          }, {
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: {
              textAlign: "left"
            },
            inherit: !1,
            preview: !1
          }, {
            selector: "img,audio,video",
            collapsed: !1,
            styles: {
              "float": "left"
            },
            preview: "font-family font-size"
          }, {
            selector: "table",
            collapsed: !1,
            styles: {
              marginLeft: "0px",
              marginRight: "auto"
            },
            onformat: function onformat(e) {
              t.setStyle(e, "float", null);
            },
            preview: "font-family font-size"
          }, {
            selector: ".mce-preview-object,[data-ephox-embed-iri]",
            ceFalseOverride: !0,
            styles: {
              "float": "left"
            }
          }],
          aligncenter: [{
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: {
              textAlign: "center"
            },
            inherit: !1,
            preview: "font-family font-size"
          }, {
            selector: "figure.image",
            collapsed: !1,
            classes: "align-center",
            ceFalseOverride: !0,
            preview: "font-family font-size"
          }, {
            selector: "img,audio,video",
            collapsed: !1,
            styles: {
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: !1
          }, {
            selector: "table",
            collapsed: !1,
            styles: {
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: "font-family font-size"
          }, {
            selector: ".mce-preview-object",
            ceFalseOverride: !0,
            styles: {
              display: "table",
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: !1
          }, {
            selector: "[data-ephox-embed-iri]",
            ceFalseOverride: !0,
            styles: {
              marginLeft: "auto",
              marginRight: "auto"
            },
            preview: !1
          }],
          alignright: [{
            selector: "figure.image",
            collapsed: !1,
            classes: "align-right",
            ceFalseOverride: !0,
            preview: "font-family font-size"
          }, {
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: {
              textAlign: "right"
            },
            inherit: !1,
            preview: "font-family font-size"
          }, {
            selector: "img,audio,video",
            collapsed: !1,
            styles: {
              "float": "right"
            },
            preview: "font-family font-size"
          }, {
            selector: "table",
            collapsed: !1,
            styles: {
              marginRight: "0px",
              marginLeft: "auto"
            },
            onformat: function onformat(e) {
              t.setStyle(e, "float", null);
            },
            preview: "font-family font-size"
          }, {
            selector: ".mce-preview-object,[data-ephox-embed-iri]",
            ceFalseOverride: !0,
            styles: {
              "float": "right"
            },
            preview: !1
          }],
          alignjustify: [{
            selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",
            styles: {
              textAlign: "justify"
            },
            inherit: !1,
            preview: "font-family font-size"
          }],
          bold: [{
            inline: "strong",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }, {
            inline: "span",
            styles: {
              fontWeight: "bold"
            }
          }, {
            inline: "b",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }],
          italic: [{
            inline: "em",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }, {
            inline: "span",
            styles: {
              fontStyle: "italic"
            }
          }, {
            inline: "i",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }],
          underline: [{
            inline: "span",
            styles: {
              textDecoration: "underline"
            },
            exact: !0
          }, {
            inline: "u",
            remove: "all",
            preserve_attributes: ["class", "style"]
          }],
          strikethrough: function () {
            var e = {
              inline: "span",
              styles: {
                textDecoration: "line-through"
              },
              exact: !0
            },
                t = {
              inline: "strike",
              remove: "all",
              preserve_attributes: ["class", "style"]
            },
                o = {
              inline: "s",
              remove: "all",
              preserve_attributes: ["class", "style"]
            };
            return "html4" !== n ? [o, e, t] : [e, o, t];
          }(),
          forecolor: {
            inline: "span",
            styles: {
              color: "%value"
            },
            links: !0,
            remove_similar: !0,
            clear_child_styles: !0
          },
          hilitecolor: {
            inline: "span",
            styles: {
              backgroundColor: "%value"
            },
            links: !0,
            remove_similar: !0,
            clear_child_styles: !0
          },
          fontname: {
            inline: "span",
            toggle: !1,
            styles: {
              fontFamily: "%value"
            },
            clear_child_styles: !0
          },
          fontsize: {
            inline: "span",
            toggle: !1,
            styles: {
              fontSize: "%value"
            },
            clear_child_styles: !0
          },
          lineheight: {
            selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
            styles: {
              lineHeight: "%value"
            }
          },
          fontsize_class: {
            inline: "span",
            attributes: {
              "class": "%value"
            }
          },
          blockquote: {
            block: "blockquote",
            wrapper: !0,
            remove: "all"
          },
          subscript: {
            inline: "sub"
          },
          superscript: {
            inline: "sup"
          },
          code: {
            inline: "code"
          },
          link: {
            inline: "a",
            selector: "a",
            remove: "all",
            split: !0,
            deep: !0,
            onmatch: function onmatch(e, t, n) {
              return jo(e) && e.hasAttribute("href");
            },
            onformat: function onformat(e, n, o) {
              Dt.each(o, function (n, o) {
                t.setAttrib(e, o, n);
              });
            }
          },
          lang: {
            inline: "span",
            clear_child_styles: !0,
            remove_similar: !0,
            attributes: {
              lang: "%value",
              "data-mce-lang": function dataMceLang(e) {
                var t;
                return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null;
              }
            }
          },
          removeformat: [{
            selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
            remove: "all",
            split: !0,
            expand: !1,
            block_expand: !0,
            deep: !0
          }, {
            selector: "span",
            attributes: ["style", "class"],
            remove: "empty",
            split: !0,
            expand: !1,
            deep: !0
          }, {
            selector: "*",
            attributes: ["style", "class"],
            split: !1,
            expand: !1,
            deep: !0
          }]
        };
        return Dt.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), function (e) {
          o[e] = {
            block: e,
            remove: "all"
          };
        }), o;
      }(e)), n(Lw()), n(ud(e)), {
        get: function get(e) {
          return C(e) ? t[e] : t;
        },
        has: function has(e) {
          return ke(t, e);
        },
        register: n,
        unregister: function unregister(e) {
          return e && t[e] && delete t[e], t;
        }
      };
    }(e),
        n = Da({});

    return function (e) {
      e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");

      for (var _t126 = 1; _t126 <= 6; _t126++) {
        e.addShortcut("access+" + _t126, "", ["FormatBlock", !1, "h" + _t126]);
      }

      e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
    }(e), function (e) {
      e.on("mouseup keydown", function (t) {
        var n;

        (function (e, t, n) {
          var o = e.selection,
              r = e.getBody();
          Ob(e, null, n), 8 !== t && 46 !== t || !o.isCollapsed() || o.getStart().innerHTML !== Sb || Ob(e, Eu(r, o.getStart())), 37 !== t && 39 !== t || Ob(e, Eu(r, o.getStart()));
        })(e, t.keyCode, (n = e.selection.getRng().endContainer, Xo(n) && $e(n.data, fr)));
      });
    }(e), LC(e) || function (e, t) {
      e.set({}), t.on("NodeChange", function (n) {
        _v(t, n.element, e.get());
      }), t.on("FormatApply FormatRemove", function (n) {
        var o = I.from(n.node).map(function (e) {
          return sm(e) ? e : e.startContainer;
        }).bind(function (e) {
          return jo(e) ? I.some(e) : I.from(e.parentElement);
        }).getOrThunk(function () {
          return kv(t);
        });

        _v(t, o, e.get());
      });
    }(n, e), {
      get: t.get,
      has: t.has,
      register: t.register,
      unregister: t.unregister,
      apply: function apply(t, n, o) {
        (function (e, t, n, o) {
          IC(e).formatter.apply(t, n, o);
        })(e, t, n, o);
      },
      remove: function remove(t, n, o, r) {
        (function (e, t, n, o, r) {
          IC(e).formatter.remove(t, n, o, r);
        })(e, t, n, o, r);
      },
      toggle: function toggle(t, n, o) {
        (function (e, t, n, o) {
          IC(e).formatter.toggle(t, n, o);
        })(e, t, n, o);
      },
      match: function match(t, n, o, r) {
        return function (e, t, n, o, r) {
          return IC(e).formatter.match(t, n, o, r);
        }(e, t, n, o, r);
      },
      closest: function closest(t) {
        return function (e, t) {
          return IC(e).formatter.closest(t);
        }(e, t);
      },
      matchAll: function matchAll(t, n) {
        return function (e, t, n) {
          return IC(e).formatter.matchAll(t, n);
        }(e, t, n);
      },
      matchNode: function matchNode(t, n, o, r) {
        return function (e, t, n, o, r) {
          return IC(e).formatter.matchNode(t, n, o, r);
        }(e, t, n, o, r);
      },
      canApply: function canApply(t) {
        return function (e, t) {
          return IC(e).formatter.canApply(t);
        }(e, t);
      },
      formatChanged: function formatChanged(t, o, r, s) {
        return function (e, t, n, o, r, s) {
          return IC(e).formatter.formatChanged(t, n, o, r, s);
        }(e, n, t, o, r, s);
      },
      getCssText: O(jw, e)
    };
  },
      $w = function $w(e) {
    switch (e.toLowerCase()) {
      case "undo":
      case "redo":
      case "mcefocus":
        return !0;

      default:
        return !1;
    }
  },
      Vw = function Vw(e) {
    var t = za(),
        n = Da(0),
        o = Da(0),
        r = {
      data: [],
      typing: !1,
      beforeChange: function beforeChange() {
        (function (e, t, n) {
          IC(e).undoManager.beforeChange(t, n);
        })(e, n, t);
      },
      add: function add(s, a) {
        return function (e, t, n, o, r, s, a) {
          return IC(e).undoManager.add(t, n, o, r, s, a);
        }(e, r, o, n, t, s, a);
      },
      dispatchChange: function dispatchChange() {
        e.setDirty(!0);

        var t = _C(e);

        t.bookmark = ol(e.selection), e.dispatch("change", {
          level: t,
          lastLevel: ie(r.data, o.get()).getOrUndefined()
        });
      },
      undo: function undo() {
        return function (e, t, n, o) {
          return IC(e).undoManager.undo(t, n, o);
        }(e, r, n, o);
      },
      redo: function redo() {
        return function (e, t, n) {
          return IC(e).undoManager.redo(t, n);
        }(e, o, r.data);
      },
      clear: function clear() {
        (function (e, t, n) {
          IC(e).undoManager.clear(t, n);
        })(e, r, o);
      },
      reset: function reset() {
        (function (e, t) {
          IC(e).undoManager.reset(t);
        })(e, r);
      },
      hasUndo: function hasUndo() {
        return function (e, t, n) {
          return IC(e).undoManager.hasUndo(t, n);
        }(e, r, o);
      },
      hasRedo: function hasRedo() {
        return function (e, t, n) {
          return IC(e).undoManager.hasRedo(t, n);
        }(e, r, o);
      },
      transact: function transact(t) {
        return function (e, t, n, o) {
          return IC(e).undoManager.transact(t, n, o);
        }(e, r, n, t);
      },
      ignore: function ignore(t) {
        (function (e, t, n) {
          IC(e).undoManager.ignore(t, n);
        })(e, n, t);
      },
      extra: function extra(t, n) {
        (function (e, t, n, o, r) {
          IC(e).undoManager.extra(t, n, o, r);
        })(e, r, o, t, n);
      }
    };
    return LC(e) || function (e, t, n) {
      var o = Da(!1),
          r = function r(e) {
        BC(t, !1, n), t.add({}, e);
      };

      e.on("init", function () {
        t.add();
      }), e.on("BeforeExecCommand", function (e) {
        var o = e.command;
        $w(o) || (DC(t, n), t.beforeChange());
      }), e.on("ExecCommand", function (e) {
        var t = e.command;
        $w(t) || r(e);
      }), e.on("ObjectResizeStart cut", function () {
        t.beforeChange();
      }), e.on("SaveContent ObjectResized blur", r), e.on("dragend", r), e.on("keyup", function (n) {
        var s = n.keyCode;
        if (n.isDefaultPrevented()) return;
        var a = At.os.isMacOS() && "Meta" === n.key;
        (s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s || n.ctrlKey || a) && (r(), e.nodeChanged()), 46 !== s && 8 !== s || e.nodeChanged(), o.get() && t.typing && !OC(_C(e), t.data[0]) && (e.isDirty() || e.setDirty(!0), e.dispatch("TypingUndo"), o.set(!1), e.nodeChanged());
      }), e.on("keydown", function (e) {
        var s = e.keyCode;
        if (e.isDefaultPrevented()) return;
        if (s >= 33 && s <= 36 || s >= 37 && s <= 40 || 45 === s) return void (t.typing && r(e));
        var a = e.ctrlKey && !e.altKey || e.metaKey;
        if ((s < 16 || s > 20) && 224 !== s && 91 !== s && !t.typing && !a) return t.beforeChange(), BC(t, !0, n), t.add({}, e), void o.set(!0);
        (At.os.isMacOS() ? e.metaKey : e.ctrlKey && !e.altKey) && t.beforeChange();
      }), e.on("mousedown", function (e) {
        t.typing && r(e);
      }), e.on("input", function (e) {
        var t;
        e.inputType && ("insertReplacementText" === e.inputType || "insertText" === (t = e).inputType && null === t.data || function (e) {
          return "insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType;
        }(e)) && r(e);
      }), e.on("AddUndo Undo Redo ClearUndos", function (t) {
        t.isDefaultPrevented() || e.nodeChanged();
      });
    }(e, r, n), function (e) {
      e.addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo");
    }(e), r;
  },
      qw = [9, 27, tf.HOME, tf.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, tf.DOWN, tf.UP, tf.LEFT, tf.RIGHT].concat(At.browser.isFirefox() ? [224] : []),
      Ww = "data-mce-placeholder",
      Kw = function Kw(e) {
    return "keydown" === e.type || "keyup" === e.type;
  },
      Gw = function Gw(e) {
    var t = e.keyCode;
    return t === tf.BACKSPACE || t === tf.DELETE;
  },
      Yw = function Yw(e, t) {
    return {
      from: e,
      to: t
    };
  },
      Xw = function Xw(e, t) {
    var n = vn(e),
        o = vn(t.container());
    return gh(n, o).map(function (e) {
      return function (e, t) {
        return {
          block: e,
          position: t
        };
      }(e, t);
    });
  },
      Qw = function Qw(e, t) {
    return Qn(t, function (e) {
      return Nr(e) || rr(e.dom);
    }, function (t) {
      return kn(t, e);
    }).filter(qt).getOr(e);
  },
      Jw = function Jw(e) {
    var t = function (e) {
      var t = Ln(e);
      return Z(t, Cr).fold(N(t), function (e) {
        return t.slice(0, e);
      });
    }(e);

    return q(t, Co), t;
  },
      Zw = function Zw(e, t) {
    var n = hp(t, e);
    return J(n.reverse(), function (e) {
      return ps(e);
    }).each(Co);
  },
      ex = function ex(e, t, n, o) {
    if (ps(n)) return Br(n), Cu(n.dom);
    0 === G(Dn(o), function (e) {
      return !ps(e);
    }).length && ps(t) && fo(o, hn("br"));
    var r = yu(n.dom, Mi.before(o.dom));
    return q(Jw(t), function (e) {
      fo(o, e);
    }), Zw(e, t), r;
  },
      tx = function tx(e, t, n) {
    if (ps(n)) {
      if (ps(t)) {
        var _e133 = function _e133(e) {
          var t = function t(e, n) {
            return In(e).fold(function () {
              return n;
            }, function (e) {
              return wr(e) ? t(e, n.concat(oi(e))) : n;
            });
          };

          return t(e, []);
        },
            _o84 = Y(_e133(n), function (e, t) {
          return bo(e, t), t;
        }, Tr());

        yo(t), ho(t, _o84);
      }

      return Co(n), Cu(t.dom);
    }

    var o = wu(n.dom);
    return q(Jw(t), function (e) {
      ho(n, e);
    }), Zw(e, t), o;
  },
      nx = function nx(e, t) {
    bu(e, t.dom).bind(function (e) {
      return I.from(e.getNode());
    }).map(vn).filter(xr).each(Co);
  },
      ox = function ox(e, t, n) {
    return nx(!0, t), nx(!1, n), function (e, t) {
      return En(t, e) ? function (e, t) {
        var n = hp(t, e);
        return I.from(n[n.length - 1]);
      }(t, e) : I.none();
    }(t, n).fold(O(tx, e, t, n), O(ex, e, t, n));
  },
      rx = function rx(e, t, n, o) {
    return t ? ox(e, o, n) : ox(e, n, o);
  },
      sx = function sx(e, t) {
    var n = vn(e.getBody()),
        o = function (e, t, n) {
      return n.collapsed ? function (e, t, n) {
        var o = Xw(e, Mi.fromRangeStart(n)),
            r = o.bind(function (n) {
          return gu(t, e, n.position).bind(function (n) {
            return Xw(e, n).map(function (n) {
              return function (e, t, n) {
                return nr(n.position.getNode()) && !ps(n.block) ? bu(!1, n.block.dom).bind(function (o) {
                  return o.isEqual(n.position) ? gu(t, e, o).bind(function (t) {
                    return Xw(e, t);
                  }) : I.some(n);
                }).getOr(n) : n;
              }(e, t, n);
            });
          });
        });
        return Lt(o, r, Yw).filter(function (t) {
          return function (e) {
            return !kn(e.from.block, e.to.block);
          }(t) && function (e, t) {
            var n = vn(e);
            return kn(Qw(n, t.from.block), Qw(n, t.to.block));
          }(e, t) && function (e) {
            return !1 === sr(e.from.block.dom) && !1 === sr(e.to.block.dom);
          }(t) && function (e) {
            var t = function t(e) {
              return kr(e) || Es(e.dom);
            };

            return t(e.from.block) && t(e.to.block);
          }(t);
        });
      }(e, t, n) : I.none();
    }(n.dom, t, e.selection.getRng()).map(function (o) {
      return function () {
        rx(n, t, o.from.block, o.to.block).each(function (t) {
          e.selection.setRng(t.toRange());
        });
      };
    });

    return o;
  },
      ax = function ax(e, t) {
    var n = vn(t),
        o = O(kn, e);
    return Xn(n, Nr, o).isSome();
  },
      ix = function ix(e) {
    var t = vn(e.getBody());
    return function (e, t) {
      var n = yu(e.dom, Mi.fromRangeStart(t)).isNone(),
          o = vu(e.dom, Mi.fromRangeEnd(t)).isNone();
      return !function (e, t) {
        return ax(e, t.startContainer) || ax(e, t.endContainer);
      }(e, t) && n && o;
    }(t, e.selection.getRng()) ? function (e) {
      return I.some(function () {
        e.setContent(""), e.selection.setCursorLocation();
      });
    }(e) : function (e, t) {
      var n = t.getRng();
      return Lt(gh(e, vn(n.startContainer)), gh(e, vn(n.endContainer)), function (o, r) {
        return kn(o, r) ? I.none() : I.some(function () {
          n.deleteContents(), rx(e, !0, o, r).each(function (e) {
            t.setRng(e.toRange());
          });
        });
      }).getOr(I.none());
    }(t, e.selection);
  },
      lx = function lx(e, t) {
    return e.selection.isCollapsed() ? I.none() : ix(e);
  },
      dx = function dx(e, t, n, o, r) {
    return I.from(t._selectionOverrides.showCaret(e, n, o, r));
  },
      cx = function cx(e, t) {
    return e.dispatch("BeforeObjectSelected", {
      target: t
    }).isDefaultPrevented() ? I.none() : I.some(function (e) {
      var t = e.ownerDocument.createRange();
      return t.selectNode(e), t;
    }(t));
  },
      ux = function ux(e, t, n) {
    return t.collapsed ? function (e, t, n) {
      var o = Kc(1, e.getBody(), t),
          r = Mi.fromRangeStart(o),
          s = r.getNode();
      if (Ec(s)) return dx(1, e, s, !r.isAtEnd(), !1);
      var a = r.getNode(!0);
      if (Ec(a)) return dx(1, e, a, !1, !1);
      var i = Vh(e.dom.getRoot(), r.getNode());
      return Ec(i) ? dx(1, e, i, !1, n) : I.none();
    }(e, t, n).getOr(t) : t;
  },
      mx = function mx(e) {
    return fp(e) || dp(e);
  },
      fx = function fx(e) {
    return gp(e) || cp(e);
  },
      gx = function gx(e, t, n, o, r, s) {
    dx(o, e, s.getNode(!r), r, !0).each(function (n) {
      if (t.collapsed) {
        var _e134 = t.cloneRange();

        r ? _e134.setEnd(n.startContainer, n.startOffset) : _e134.setStart(n.endContainer, n.endOffset), _e134.deleteContents();
      } else t.deleteContents();

      e.selection.setRng(n);
    }), function (e, t) {
      Xo(t) && 0 === t.data.length && e.remove(t);
    }(e.dom, n);
  },
      px = function px(e, t) {
    return function (e, t) {
      var n = e.selection.getRng();
      if (!Xo(n.commonAncestorContainer)) return I.none();
      var o = t ? Zc.Forwards : Zc.Backwards,
          r = cu(e.getBody()),
          s = O(Qc, t ? r.next : r.prev),
          a = t ? mx : fx,
          i = Yc(o, e.getBody(), n),
          l = s(i),
          d = l ? lh(t, l) : l;
      if (!d || !Jc(i, d)) return I.none();
      if (a(d)) return I.some(function () {
        return gx(e, n, i.getNode(), o, t, d);
      });
      var c = s(d);
      return c && a(c) && Jc(d, c) ? I.some(function () {
        return gx(e, n, i.getNode(), o, t, c);
      }) : I.none();
    }(e, t);
  },
      hx = function hx(e, t) {
    var n = e.getBody();
    return t ? Cu(n).filter(fp) : wu(n).filter(gp);
  },
      bx = function bx(e) {
    var t = e.selection.getRng();
    return !t.collapsed && (hx(e, !0).exists(function (e) {
      return e.isEqual(Mi.fromRangeStart(t));
    }) || hx(e, !1).exists(function (e) {
      return e.isEqual(Mi.fromRangeEnd(t));
    }));
  },
      vx = il([{
    remove: ["element"]
  }, {
    moveToElement: ["element"]
  }, {
    moveToPosition: ["position"]
  }]),
      yx = function yx(e, t, n) {
    return gu(t, e, n).bind(function (o) {
      return r = o.getNode(), C(r) && (Nr(vn(r)) || Sr(vn(r))) || function (e, t, n, o) {
        var r = function r(t) {
          return wr(vn(t)) && !zc(n, o, e);
        };

        return Gc(!t, n).fold(function () {
          return Gc(t, o).fold(L, r);
        }, r);
      }(e, t, n, o) ? I.none() : t && sr(o.getNode()) || !t && sr(o.getNode(!0)) ? function (e, t, n, o) {
        var r = o.getNode(!t);
        return gh(vn(e), vn(n.getNode())).map(function (e) {
          return ps(e) ? vx.remove(e.dom) : vx.moveToElement(r);
        }).orThunk(function () {
          return I.some(vx.moveToElement(r));
        });
      }(e, t, n, o) : t && gp(n) || !t && fp(n) ? I.some(vx.moveToPosition(o)) : I.none();
      var r;
    });
  },
      Cx = function Cx(e, t) {
    return I.from(Vh(e.getBody(), t));
  },
      wx = function wx(e, t) {
    var n = e.selection.getNode();
    return Cx(e, n).filter(sr).fold(function () {
      return function (e, t, n) {
        var o = Kc(t ? 1 : -1, e, n),
            r = Mi.fromRangeStart(o),
            s = vn(e);
        return !t && gp(r) ? I.some(vx.remove(r.getNode(!0))) : t && fp(r) ? I.some(vx.remove(r.getNode())) : !t && fp(r) && Rp(s, r) ? Ap(s, r).map(function (e) {
          return vx.remove(e.getNode());
        }) : t && gp(r) && Np(s, r) ? Op(s, r).map(function (e) {
          return vx.remove(e.getNode());
        }) : function (e, t, n) {
          return function (e, t) {
            var n = t.getNode(!e),
                o = e ? "after" : "before";
            return jo(n) && n.getAttribute("data-mce-caret") === o;
          }(t, n) ? function (e, t) {
            return y(t) ? I.none() : e && sr(t.nextSibling) ? I.some(vx.moveToElement(t.nextSibling)) : !e && sr(t.previousSibling) ? I.some(vx.moveToElement(t.previousSibling)) : I.none();
          }(t, n.getNode(!t)).orThunk(function () {
            return yx(e, t, n);
          }) : yx(e, t, n).bind(function (t) {
            return function (e, t, n) {
              return n.fold(function (e) {
                return I.some(vx.remove(e));
              }, function (e) {
                return I.some(vx.moveToElement(e));
              }, function (n) {
                return zc(t, n, e) ? I.none() : I.some(vx.moveToPosition(n));
              });
            }(e, n, t);
          });
        }(e, t, r);
      }(e.getBody(), t, e.selection.getRng()).map(function (n) {
        return function () {
          return n.fold(function (e, t) {
            return function (n) {
              return e._selectionOverrides.hideFakeCaret(), oh(e, t, vn(n)), !0;
            };
          }(e, t), function (e, t) {
            return function (n) {
              var o = t ? Mi.before(n) : Mi.after(n);
              return e.selection.setRng(o.toRange()), !0;
            };
          }(e, t), function (e) {
            return function (t) {
              return e.selection.setRng(t.toRange()), !0;
            };
          }(e));
        };
      });
    }, function () {
      return I.some(E);
    });
  },
      xx = function xx(e) {
    var t = e.dom,
        n = e.selection,
        o = Vh(e.getBody(), n.getNode());

    if (rr(o) && t.isBlock(o) && t.isEmpty(o)) {
      var _e135 = t.create("br", {
        "data-mce-bogus": "1"
      });

      t.setHTML(o, ""), o.appendChild(_e135), n.setRng(Mi.before(_e135).toRange());
    }

    return !0;
  },
      kx = function kx(e, t) {
    return e.selection.isCollapsed() ? wx(e, t) : function (e, t) {
      var n = e.selection.getNode();
      return sr(n) && !ar(n) ? Cx(e, n.parentNode).filter(sr).fold(function () {
        return I.some(function () {
          var n;
          n = vn(e.getBody()), q(Mo(n, ".mce-offscreen-selection"), Co), oh(e, t, vn(e.selection.getNode())), ph(e);
        });
      }, function () {
        return I.some(E);
      }) : bx(e) ? I.some(function () {
        vh(e, e.selection.getRng(), vn(e.getBody()));
      }) : I.none();
    }(e, t);
  },
      Ex = function Ex(e, t) {
    return e.selection.isCollapsed() ? function (e, t) {
      var n = Mi.fromRangeStart(e.selection.getRng());
      return gu(t, e.getBody(), n).filter(function (e) {
        return t ? ip(e) : lp(e);
      }).bind(function (e) {
        return jc(t ? 0 : -1, e);
      }).map(function (t) {
        return function () {
          return e.selection.select(t);
        };
      });
    }(e, t) : I.none();
  },
      Sx = Xo,
      _x = function _x(e) {
    return Sx(e) && e.data[0] === Pr;
  },
      Nx = function Nx(e) {
    return Sx(e) && e.data[e.data.length - 1] === Pr;
  },
      Rx = function Rx(e) {
    var t;
    return (null !== (t = e.ownerDocument) && void 0 !== t ? t : document).createTextNode(Pr);
  },
      Ax = function Ax(e, t) {
    return e ? function (e) {
      var t;
      if (Sx(e.previousSibling)) return Nx(e.previousSibling) || e.previousSibling.appendData(Pr), e.previousSibling;
      if (Sx(e)) return _x(e) || e.insertData(0, Pr), e;
      {
        var _n108 = Rx(e);

        return null === (t = e.parentNode) || void 0 === t || t.insertBefore(_n108, e), _n108;
      }
    }(t) : function (e) {
      var t, n;
      if (Sx(e.nextSibling)) return _x(e.nextSibling) || e.nextSibling.insertData(0, Pr), e.nextSibling;
      if (Sx(e)) return Nx(e) || e.appendData(Pr), e;
      {
        var _o85 = Rx(e);

        return e.nextSibling ? null === (t = e.parentNode) || void 0 === t || t.insertBefore(_o85, e.nextSibling) : null === (n = e.parentNode) || void 0 === n || n.appendChild(_o85), _o85;
      }
    }(t);
  },
      Ox = O(Ax, !0),
      Tx = O(Ax, !1),
      Bx = function Bx(e, t) {
    return Xo(e.container()) ? Ax(t, e.container()) : Ax(t, e.getNode());
  },
      Dx = function Dx(e, t) {
    var n = t.get();
    return n && e.container() === n && zr(n);
  },
      Px = function Px(e, t) {
    return t.fold(function (t) {
      bc(e.get());
      var n = Ox(t);
      return e.set(n), I.some(Mi(n, n.length - 1));
    }, function (t) {
      return Cu(t).map(function (t) {
        if (Dx(t, e)) {
          var _t127 = e.get();

          return Mi(_t127, 1);
        }

        {
          bc(e.get());

          var _n109 = Bx(t, !0);

          return e.set(_n109), Mi(_n109, 1);
        }
      });
    }, function (t) {
      return wu(t).map(function (t) {
        if (Dx(t, e)) {
          var _t128 = e.get();

          return Mi(_t128, _t128.length - 1);
        }

        {
          bc(e.get());

          var _n110 = Bx(t, !1);

          return e.set(_n110), Mi(_n110, _n110.length - 1);
        }
      });
    }, function (t) {
      bc(e.get());
      var n = Tx(t);
      return e.set(n), I.some(Mi(n, 1));
    });
  },
      Lx = function Lx(e, t) {
    for (var _n111 = 0; _n111 < e.length; _n111++) {
      var _o86 = e[_n111].apply(null, t);

      if (_o86.isSome()) return _o86;
    }

    return I.none();
  },
      Mx = il([{
    before: ["element"]
  }, {
    start: ["element"]
  }, {
    end: ["element"]
  }, {
    after: ["element"]
  }]),
      Ix = function Ix(e, t) {
    return Uc(t, e) || e;
  },
      Fx = function Fx(e, t, n) {
    var o = dh(n),
        r = Ix(t, o.container());
    return ih(e, r, o).fold(function () {
      return vu(r, o).bind(O(ih, e, r)).map(function (e) {
        return Mx.before(e);
      });
    }, I.none);
  },
      Ux = function Ux(e, t) {
    return null === Eu(e, t);
  },
      zx = function zx(e, t, n) {
    return ih(e, t, n).filter(O(Ux, t));
  },
      jx = function jx(e, t, n) {
    var o = ch(n);
    return zx(e, t, o).bind(function (e) {
      return yu(e, o).isNone() ? I.some(Mx.start(e)) : I.none();
    });
  },
      Hx = function Hx(e, t, n) {
    var o = dh(n);
    return zx(e, t, o).bind(function (e) {
      return vu(e, o).isNone() ? I.some(Mx.end(e)) : I.none();
    });
  },
      $x = function $x(e, t, n) {
    var o = ch(n),
        r = Ix(t, o.container());
    return ih(e, r, o).fold(function () {
      return yu(r, o).bind(O(ih, e, r)).map(function (e) {
        return Mx.after(e);
      });
    }, I.none);
  },
      Vx = function Vx(e) {
    return !ah(Wx(e));
  },
      qx = function qx(e, t, n) {
    return Lx([Fx, jx, Hx, $x], [e, t, n]).filter(Vx);
  },
      Wx = function Wx(e) {
    return e.fold(R, R, R, R);
  },
      Kx = function Kx(e) {
    return e.fold(N("before"), N("start"), N("end"), N("after"));
  },
      Gx = function Gx(e) {
    return e.fold(Mx.before, Mx.before, Mx.after, Mx.after);
  },
      Yx = function Yx(e) {
    return e.fold(Mx.start, Mx.start, Mx.end, Mx.end);
  },
      Xx = function Xx(e, t, n, o, r, s) {
    return Lt(ih(t, n, o), ih(t, n, r), function (t, o) {
      return t !== o && function (e, t, n) {
        var o = Uc(t, e),
            r = Uc(n, e);
        return C(o) && o === r;
      }(n, t, o) ? Mx.after(e ? t : o) : s;
    }).getOr(s);
  },
      Qx = function Qx(e, t) {
    return e.fold(M, function (e) {
      return o = t, !(Kx(n = e) === Kx(o) && Wx(n) === Wx(o));
      var n, o;
    });
  },
      Jx = function Jx(e, t) {
    return e ? t.fold(S(I.some, Mx.start), I.none, S(I.some, Mx.after), I.none) : t.fold(I.none, S(I.some, Mx.before), I.none, S(I.some, Mx.end));
  },
      Zx = function Zx(e, t, n) {
    var o = e ? 1 : -1;
    return t.setRng(Mi(n.container(), n.offset() + o).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0;
  };

  var ek;
  !function (e) {
    e[e.Br = 0] = "Br", e[e.Block = 1] = "Block", e[e.Wrap = 2] = "Wrap", e[e.Eol = 3] = "Eol";
  }(ek || (ek = {}));

  var tk = function tk(e, t) {
    return e === Zc.Backwards ? oe(t) : t;
  },
      nk = function nk(e, t, n) {
    return e === Zc.Forwards ? t.next(n) : t.prev(n);
  },
      ok = function ok(e, t, n, o) {
    return nr(o.getNode(t === Zc.Forwards)) ? ek.Br : !1 === zc(n, o) ? ek.Block : ek.Wrap;
  },
      rk = function rk(e, t, n, o) {
    var r = cu(n);
    var s = o;
    var a = [];

    for (; s;) {
      var _n112 = nk(t, r, s);

      if (!_n112) break;
      if (nr(_n112.getNode(!1))) return t === Zc.Forwards ? {
        positions: tk(t, a).concat([_n112]),
        breakType: ek.Br,
        breakAt: I.some(_n112)
      } : {
        positions: tk(t, a),
        breakType: ek.Br,
        breakAt: I.some(_n112)
      };

      if (_n112.isVisible()) {
        if (e(s, _n112)) {
          var _e136 = ok(0, t, s, _n112);

          return {
            positions: tk(t, a),
            breakType: _e136,
            breakAt: I.some(_n112)
          };
        }

        a.push(_n112), s = _n112;
      } else s = _n112;
    }

    return {
      positions: tk(t, a),
      breakType: ek.Eol,
      breakAt: I.none()
    };
  },
      sk = function sk(e, t, n, o) {
    return t(n, o).breakAt.map(function (o) {
      var r = t(n, o).positions;
      return e === Zc.Backwards ? r.concat(o) : [o].concat(r);
    }).getOr([]);
  },
      ak = function ak(e, t) {
    return X(e, function (e, n) {
      return e.fold(function () {
        return I.some(n);
      }, function (o) {
        return Lt(le(o.getClientRects()), le(n.getClientRects()), function (e, r) {
          var s = Math.abs(t - e.left);
          return Math.abs(t - r.left) <= s ? n : o;
        }).or(e);
      });
    }, I.none());
  },
      ik = function ik(e, t) {
    return le(t.getClientRects()).bind(function (t) {
      return ak(e, t.left);
    });
  },
      lk = O(rk, Mi.isAbove, -1),
      dk = O(rk, Mi.isBelow, 1),
      ck = O(sk, -1, lk),
      uk = O(sk, 1, dk),
      mk = function mk(e, t) {
    return ik(ck(e, t), t);
  },
      fk = function fk(e, t) {
    return ik(uk(e, t), t);
  },
      gk = sr,
      pk = function pk(e, t) {
    return Math.abs(e.left - t);
  },
      hk = function hk(e, t) {
    return Math.abs(e.right - t);
  },
      bk = function bk(e, t) {
    return Te(e, function (e, n) {
      var o = Math.min(pk(e, t), hk(e, t)),
          r = Math.min(pk(n, t), hk(n, t));
      return r === o && Ee(n, "node") && gk(n.node) || r < o ? n : e;
    });
  },
      vk = function vk(e) {
    var t = function t(_t129) {
      return V(_t129, function (t) {
        var n = di(t);
        return n.node = e, n;
      });
    };

    if (jo(e)) return t(e.getClientRects());

    if (Xo(e)) {
      var _n113 = e.ownerDocument.createRange();

      return _n113.setStart(e, 0), _n113.setEnd(e, e.data.length), t(_n113.getClientRects());
    }

    return [];
  },
      yk = function yk(e) {
    return te(e, vk);
  };

  var Ck;
  !function (e) {
    e[e.Up = -1] = "Up", e[e.Down = 1] = "Down";
  }(Ck || (Ck = {}));

  var wk = function wk(e, t, n, o, r, s) {
    var a = 0;

    var i = [],
        l = function l(o) {
      var s = yk([o]);
      -1 === e && (s = s.reverse());

      for (var _e137 = 0; _e137 < s.length; _e137++) {
        var _o87 = s[_e137];

        if (!n(_o87, d)) {
          if (i.length > 0 && t(_o87, De(i)) && a++, _o87.line = a, r(_o87)) return !0;
          i.push(_o87);
        }
      }

      return !1;
    },
        d = De(s.getClientRects());

    if (!d) return i;
    var c = s.getNode();
    return c && (l(c), function (e, t, n, o) {
      var r = o;

      for (; r = Fc(r, e, ss, t);) {
        if (n(r)) return;
      }
    }(e, o, l, c)), i;
  },
      xk = O(wk, Ck.Up, mi, fi),
      kk = O(wk, Ck.Down, fi, mi),
      Ek = function Ek(e) {
    return De(e.getClientRects());
  },
      Sk = function Sk(e) {
    return function (t) {
      return function (e, t) {
        return t.line > e;
      }(e, t);
    };
  },
      _k = function _k(e) {
    return function (t) {
      return function (e, t) {
        return t.line === e;
      }(e, t);
    };
  },
      Nk = function Nk(e, t) {
    e.selection.setRng(t), eg(e, e.selection.getRng());
  },
      Rk = function Rk(e, t, n) {
    return I.some(ux(e, t, n));
  },
      Ak = function Ak(e, t, n, o, r, s) {
    var a = t === Zc.Forwards,
        i = cu(e.getBody()),
        l = O(Qc, a ? i.next : i.prev),
        d = a ? o : r;

    if (!n.collapsed) {
      var _o88 = pi(n);

      if (s(_o88)) return dx(t, e, _o88, t === Zc.Backwards, !1);

      if (bx(e)) {
        var _e138 = n.cloneRange();

        return _e138.collapse(t === Zc.Backwards), I.from(_e138);
      }
    }

    var c = Yc(t, e.getBody(), n);
    if (d(c)) return cx(e, c.getNode(!a));
    var u = l(c);
    var m = Gr(n);
    if (!u) return m ? I.some(n) : I.none();
    if (u = lh(a, u), d(u)) return dx(t, e, u.getNode(!a), a, !1);
    var f = l(u);
    return f && d(f) && Jc(u, f) ? dx(t, e, f.getNode(!a), a, !1) : m ? Rk(e, u.toRange(), !1) : I.none();
  },
      Ok = function Ok(e, t, n, o, r, s) {
    var a = Yc(t, e.getBody(), n),
        i = De(a.getClientRects()),
        l = t === Ck.Down,
        d = e.getBody();
    if (!i) return I.none();

    if (bx(e)) {
      var _e139 = l ? Mi.fromRangeEnd(n) : Mi.fromRangeStart(n);

      return (l ? fk : mk)(d, _e139).orThunk(function () {
        return I.from(_e139);
      }).map(function (e) {
        return e.toRange();
      });
    }

    var c = (l ? kk : xk)(d, Sk(1), a),
        u = G(c, _k(1)),
        m = i.left,
        f = bk(u, m);

    if (f && s(f.node)) {
      var _n114 = Math.abs(m - f.left),
          _o89 = Math.abs(m - f.right);

      return dx(t, e, f.node, _n114 < _o89, !1);
    }

    var g;

    if (g = o(a) ? a.getNode() : r(a) ? a.getNode(!0) : pi(n), g) {
      var _n115 = function (e, t, n, o) {
        var r = cu(t);
        var s, a, i, l;
        var d = [];
        var c = 0;
        1 === e ? (s = r.next, a = fi, i = mi, l = Mi.after(o)) : (s = r.prev, a = mi, i = fi, l = Mi.before(o));
        var u = Ek(l);

        do {
          if (!l.isVisible()) continue;

          var _e140 = Ek(l);

          if (i(_e140, u)) continue;
          d.length > 0 && a(_e140, De(d)) && c++;

          var _t130 = di(_e140);

          if (_t130.position = l, _t130.line = c, n(_t130)) return d;
          d.push(_t130);
        } while (l = s(l));

        return d;
      }(t, d, Sk(1), g);

      var _o90 = bk(G(_n115, _k(1)), m);

      if (_o90) return Rk(e, _o90.position.toRange(), !1);
      if (_o90 = De(G(_n115, _k(0))), _o90) return Rk(e, _o90.position.toRange(), !1);
    }

    return 0 === u.length ? Tk(e, l).filter(l ? r : o).map(function (t) {
      return ux(e, t.toRange(), !1);
    }) : I.none();
  },
      Tk = function Tk(e, t) {
    var n = e.selection.getRng(),
        o = t ? Mi.fromRangeEnd(n) : Mi.fromRangeStart(n),
        r = (s = o.container(), a = e.getBody(), Xn(vn(s), function (e) {
      return _c(e.dom);
    }, function (e) {
      return e.dom === a;
    }).map(function (e) {
      return e.dom;
    }).getOr(a));
    var s, a;

    if (t) {
      var _e141 = dk(r, o);

      return de(_e141.positions);
    }

    {
      var _e142 = lk(r, o);

      return le(_e142.positions);
    }
  },
      Bk = function Bk(e, t, n) {
    return Tk(e, t).filter(n).exists(function (t) {
      return e.selection.setRng(t.toRange()), !0;
    });
  },
      Dk = function Dk(e, t) {
    var n = e.dom.createRng();
    n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n);
  },
      Pk = function Pk(e, t) {
    e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected");
  },
      Lk = function Lk(e, t, n) {
    return Px(t, n).map(function (t) {
      return Dk(e, t), n;
    });
  },
      Mk = function Mk(e, t, n) {
    var o = e.getBody(),
        r = function (e, t, n) {
      var o = Mi.fromRangeStart(e);
      if (e.collapsed) return o;
      {
        var _r65 = Mi.fromRangeEnd(e);

        return n ? yu(t, _r65).getOr(_r65) : vu(t, o).getOr(o);
      }
    }(e.selection.getRng(), o, n);

    return function (e, t, n, o) {
      var r = lh(e, o),
          s = qx(t, n, r);
      return qx(t, n, r).bind(O(Jx, e)).orThunk(function () {
        return function (e, t, n, o, r) {
          var s = lh(e, r);
          return gu(e, n, s).map(O(lh, e)).fold(function () {
            return o.map(Gx);
          }, function (r) {
            return qx(t, n, r).map(O(Xx, e, t, n, s, r)).filter(O(Qx, o));
          }).filter(Vx);
        }(e, t, n, s, o);
      });
    }(n, O(sh, e), o, r).bind(function (n) {
      return Lk(e, t, n);
    });
  },
      Ik = function Ik(e, t, n) {
    return !!cd(e) && Mk(e, t, n).isSome();
  },
      Fk = function Fk(e, t, n) {
    return !!cd(t) && function (e, t) {
      var n = t.selection.getRng(),
          o = e ? Mi.fromRangeEnd(n) : Mi.fromRangeStart(n);
      return !!function (e) {
        return w(e.selection.getSel().modify);
      }(t) && (e && $r(o) ? Zx(!0, t.selection, o) : !(e || !Vr(o)) && Zx(!1, t.selection, o));
    }(e, t);
  },
      Uk = function Uk(e) {
    var t = Da(null),
        n = O(sh, e);
    return e.on("NodeChange", function (o) {
      cd(e) && (function (e, t, n) {
        var o = V(Mo(vn(t.getRoot()), '*[data-mce-selected="inline-boundary"]'), function (e) {
          return e.dom;
        }),
            r = G(o, e),
            s = G(n, e);
        q(re(r, s), O(Pk, !1)), q(re(s, r), O(Pk, !0));
      }(n, e.dom, o.parents), function (e, t) {
        var n = t.get();

        if (e.selection.isCollapsed() && !e.composing && n) {
          var _o91 = Mi.fromRangeStart(e.selection.getRng());

          Mi.isTextPosition(_o91) && !function (e) {
            return $r(e) || Vr(e);
          }(_o91) && (Dk(e, hc(n, _o91)), t.set(null));
        }
      }(e, t), function (e, t, n, o) {
        if (t.selection.isCollapsed()) {
          var _r66 = G(o, e);

          q(_r66, function (o) {
            var r = Mi.fromRangeStart(t.selection.getRng());
            qx(e, t.getBody(), r).bind(function (e) {
              return Lk(t, n, e);
            });
          });
        }
      }(n, e, t, o.parents));
    }), t;
  },
      zk = O(Fk, !0),
      jk = O(Fk, !1),
      Hk = function Hk(e, t, n) {
    if (cd(e)) {
      var _o92 = Tk(e, t).getOrThunk(function () {
        var n = e.selection.getRng();
        return t ? Mi.fromRangeEnd(n) : Mi.fromRangeStart(n);
      });

      return qx(O(sh, e), e.getBody(), _o92).exists(function (t) {
        var o = Gx(t);
        return Px(n, o).exists(function (t) {
          return Dk(e, t), !0;
        });
      });
    }

    return !1;
  },
      $k = function $k(e, t) {
    return function (n) {
      return Px(t, n).map(function (t) {
        return function () {
          return Dk(e, t);
        };
      });
    };
  },
      Vk = function Vk(e, t, n, o) {
    var r = e.getBody(),
        s = O(sh, e);
    e.undoManager.ignore(function () {
      e.selection.setRng(function (e, t) {
        var n = document.createRange();
        return n.setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n;
      }(n, o)), mh(e), qx(s, r, Mi.fromRangeStart(e.selection.getRng())).map(Yx).bind($k(e, t)).each(P);
    }), e.nodeChanged();
  },
      qk = function qk(e, t, n) {
    if (e.selection.isCollapsed() && cd(e)) {
      var _o93 = Mi.fromRangeStart(e.selection.getRng());

      return function (e, t, n, o) {
        var r = function (e, t) {
          return Uc(t, e) || e;
        }(e.getBody(), o.container()),
            s = O(sh, e),
            a = qx(s, r, o);

        return a.bind(function (e) {
          return n ? e.fold(N(I.some(Yx(e))), I.none, N(I.some(Gx(e))), I.none) : e.fold(I.none, N(I.some(Gx(e))), I.none, N(I.some(Yx(e))));
        }).map($k(e, t)).getOrThunk(function () {
          var i = pu(n, r, o),
              l = i.bind(function (e) {
            return qx(s, r, e);
          });
          return Lt(a, l, function () {
            return ih(s, r, o).bind(function (t) {
              return function (e) {
                return Lt(Cu(e), wu(e), function (t, n) {
                  var o = lh(!0, t),
                      r = lh(!1, n);
                  return vu(e, o).forall(function (e) {
                    return e.isEqual(r);
                  });
                }).getOr(!0);
              }(t) ? I.some(function () {
                oh(e, n, vn(t));
              }) : I.none();
            });
          }).getOrThunk(function () {
            return l.bind(function () {
              return i.map(function (r) {
                return function () {
                  n ? Vk(e, t, o, r) : Vk(e, t, r, o);
                };
              });
            });
          });
        });
      }(e, t, n, _o93);
    }

    return I.none();
  },
      Wk = function Wk(e, t) {
    var n = vn(e.getBody()),
        o = vn(e.selection.getStart()),
        r = hp(o, n);
    return Z(r, t).fold(N(r), function (e) {
      return r.slice(0, e);
    });
  },
      Kk = function Kk(e) {
    return 1 === Un(e);
  },
      Gk = function Gk(e, t) {
    var n = O(Mb, e);
    return te(t, function (e) {
      return n(e) ? [e.dom] : [];
    });
  },
      Yk = function Yk(e) {
    var t = function (e) {
      return Wk(e, Cr);
    }(e);

    return Gk(e, t);
  },
      Xk = function Xk(e, t) {
    var n = G(function (e) {
      return Wk(e, function (e) {
        return Cr(e) || function (e) {
          return Un(e) > 1;
        }(e);
      });
    }(e), Kk);
    return de(n).bind(function (o) {
      var r = Mi.fromRangeStart(e.selection.getRng());
      return hh(t, r, o.dom) && !Ib(o) ? I.some(function () {
        return function (e, t, n, o) {
          var r = Gk(t, o);
          if (0 === r.length) oh(t, e, n);else {
            var _e143 = Lb(n.dom, r);

            t.selection.setRng(_e143.toRange());
          }
        }(t, e, o, n);
      }) : I.none();
    });
  },
      Qk = function Qk(e, t) {
    var n = e.selection.getStart(),
        o = function (e, t) {
      var n = t.parentElement;
      return nr(t) && !h(n) && e.dom.isEmpty(n);
    }(e, n) || Ib(vn(n)) ? Lb(n, t) : function (e, t) {
      var _Pb2 = Pb(t),
          n = _Pb2.caretContainer,
          o = _Pb2.caretPosition;

      return e.insertNode(n.dom), o;
    }(e.selection.getRng(), t);
    e.selection.setRng(o.toRange());
  },
      Jk = function Jk(e) {
    return Xo(e.startContainer);
  },
      Zk = function Zk(e) {
    var t = e.selection.getRng();
    return function (e) {
      return 0 === e.startOffset && Jk(e);
    }(t) && function (e, t) {
      var n = t.startContainer.parentElement;
      return !h(n) && Mb(e, vn(n));
    }(e, t) && function (e) {
      return function (e) {
        return function (e) {
          var t = e.startContainer.parentNode,
              n = e.endContainer.parentNode;
          return !h(t) && !h(n) && t.isEqualNode(n);
        }(e) && function (e) {
          var t = e.endContainer;
          return e.endOffset === (Xo(t) ? t.length : t.childNodes.length);
        }(e);
      }(e) || function (e) {
        return !e.endContainer.isEqualNode(e.commonAncestorContainer);
      }(e);
    }(t);
  },
      eE = function eE(e, t) {
    return e.selection.isCollapsed() ? Xk(e, t) : function (e) {
      if (Zk(e)) {
        var _t131 = Yk(e);

        return I.some(function () {
          mh(e), function (e, t) {
            var n = re(t, Yk(e));
            n.length > 0 && Qk(e, n);
          }(e, _t131);
        });
      }

      return I.none();
    }(e);
  },
      tE = function tE(e) {
    return function (e, t, n) {
      return Xn(e, function (e) {
        return ku(e.dom);
      }, n).isSome();
    }(e, 0, Cr);
  },
      nE = function nE(e) {
    return function (e) {
      var t = e.selection.getRng();
      return t.collapsed && (Jk(t) || e.dom.isEmpty(t.startContainer)) && !function (e) {
        return tE(vn(e.selection.getStart()));
      }(e);
    }(e) && Qk(e, []), !0;
  },
      oE = function oE(e, t, n) {
    return C(n) ? I.some(function () {
      e._selectionOverrides.hideFakeCaret(), oh(e, t, vn(n));
    }) : I.none();
  },
      rE = function rE(e, t) {
    return e.selection.isCollapsed() ? function (e, t) {
      var n = t ? dp : cp,
          o = t ? Zc.Forwards : Zc.Backwards,
          r = Yc(o, e.getBody(), e.selection.getRng());
      return n(r) ? oE(e, t, r.getNode(!t)) : I.from(lh(t, r)).filter(function (e) {
        return n(e) && Jc(r, e);
      }).bind(function (n) {
        return oE(e, t, n.getNode(!t));
      });
    }(e, t) : function (e, t) {
      var n = e.selection.getNode();
      return lr(n) ? oE(e, t, n) : I.none();
    }(e, t);
  },
      sE = function sE(e) {
    return Xe(null != e ? e : "").getOr(0);
  },
      aE = function aE(e, t) {
    return (e || "table" === jt(t) ? "margin" : "padding") + ("rtl" === io(t, "direction") ? "-right" : "-left");
  },
      iE = function iE(e) {
    var t = dE(e);
    return !e.mode.isReadOnly() && (t.length > 1 || function (e, t) {
      return ne(t, function (t) {
        var n = aE(Gl(e), t),
            o = co(t, n).map(sE).getOr(0);
        return "false" !== e.dom.getContentEditable(t.dom) && o > 0;
      });
    }(e, t));
  },
      lE = function lE(e) {
    return Er(e) || Sr(e);
  },
      dE = function dE(e) {
    return G(xo(e.selection.getSelectedBlocks()), function (e) {
      return !lE(e) && !function (e) {
        return Rn(e).exists(lE);
      }(e) && Qn(e, function (e) {
        return rr(e.dom) || sr(e.dom);
      }).exists(function (e) {
        return rr(e.dom);
      });
    });
  },
      cE = function cE(e, t) {
    var n, o;
    var r = e.dom,
        s = Yl(e),
        a = null !== (o = null === (n = /[a-z%]+$/i.exec(s)) || void 0 === n ? void 0 : n[0]) && void 0 !== o ? o : "px",
        i = sE(s),
        l = Gl(e);
    q(dE(e), function (e) {
      (function (e, t, n, o, r, s) {
        var a = aE(n, vn(s)),
            i = sE(e.getStyle(s, a));

        if ("outdent" === t) {
          var _t132 = Math.max(0, i - o);

          e.setStyle(s, a, _t132 ? _t132 + r : "");
        } else {
          var _t133 = i + o + r;

          e.setStyle(s, a, _t133);
        }
      })(r, t, l, i, a, e.dom);
    });
  },
      uE = function uE(e) {
    return cE(e, "outdent");
  },
      mE = function mE(e) {
    if (e.selection.isCollapsed() && iE(e)) {
      var _t134 = e.dom,
          _n116 = e.selection.getRng(),
          _o94 = Mi.fromRangeStart(_n116),
          _r67 = _t134.getParent(_n116.startContainer, _t134.isBlock);

      if (null !== _r67 && wp(vn(_r67), _o94)) return I.some(function () {
        return uE(e);
      });
    }

    return I.none();
  },
      fE = function fE(e, t, n) {
    return ue([mE, kx, px, function (e, n) {
      return qk(e, t, n);
    }, sx, $h, Ex, rE, lx, eE], function (t) {
      return t(e, n);
    }).filter(function (t) {
      return e.selection.isEditable();
    });
  },
      gE = function gE(e, t) {
    e.addCommand("delete", function () {
      (function (e, t) {
        fE(e, t, !1).fold(function () {
          mh(e), ph(e);
        }, P);
      })(e, t);
    }), e.addCommand("forwardDelete", function () {
      (function (e, t) {
        fE(e, t, !0).fold(function () {
          return function (e) {
            return uh(e, "ForwardDelete");
          }(e);
        }, P);
      })(e, t);
    });
  },
      pE = function pE(e) {
    return void 0 === e.touches || 1 !== e.touches.length ? I.none() : I.some(e.touches[0]);
  },
      hE = function hE(e, t) {
    return ke(e, t.nodeName);
  },
      bE = function bE(e, t) {
    return !!Xo(t) || !!jo(t) && !hE(e.getBlockElements(), t) && !Mu(t) && !Ns(e, t);
  },
      vE = function vE(e, t) {
    if (Xo(t)) {
      if (0 === t.data.length) return !0;
      if (/^\s+$/.test(t.data) && (!t.nextSibling || hE(e, t.nextSibling))) return !0;
    }

    return !1;
  },
      yE = function yE(e) {
    return e.dom.create(Rl(e), Al(e));
  },
      CE = function CE(e) {
    var t = e.dom,
        n = e.selection,
        o = e.schema,
        r = o.getBlockElements(),
        s = n.getStart(),
        a = e.getBody();
    var i,
        l,
        d = !1;
    var c = Rl(e);
    if (!s || !jo(s)) return;
    var u = a.nodeName.toLowerCase();
    if (!o.isValidChild(u, c.toLowerCase()) || function (e, t, n) {
      return $(pp(vn(n), vn(t)), function (t) {
        return hE(e, t.dom);
      });
    }(r, a, s)) return;
    var m = n.getRng(),
        f = m.startContainer,
        g = m.startOffset,
        p = m.endContainer,
        h = m.endOffset,
        b = kg(e);
    var v = a.firstChild;

    for (; v;) {
      if (jo(v) && ks(o, v), bE(o, v)) {
        if (vE(r, v)) {
          l = v, v = v.nextSibling, t.remove(l);
          continue;
        }

        i || (i = yE(e), a.insertBefore(i, v), d = !0), l = v, v = v.nextSibling, i.appendChild(l);
      } else i = null, v = v.nextSibling;
    }

    d && b && (m.setStart(f, g), m.setEnd(p, h), n.setRng(m), e.nodeChanged());
  },
      wE = function wE(e, t, n) {
    var o = vn(yE(e)),
        r = Tr();
    ho(o, r), n(t, o);
    var s = document.createRange();
    return s.setStartBefore(r.dom), s.setEndBefore(r.dom), s;
  },
      xE = function xE(e) {
    return function (t) {
      return -1 !== (" " + t.attr("class") + " ").indexOf(e);
    };
  },
      kE = function kE(e, t, n) {
    return function (o) {
      var r = arguments,
          s = r[r.length - 2],
          a = s > 0 ? t.charAt(s - 1) : "";
      if ('"' === a) return o;

      if (">" === a) {
        var _e144 = t.lastIndexOf("<", s);

        if (-1 !== _e144 && -1 !== t.substring(_e144, s).indexOf('contenteditable="false"')) return o;
      }

      return '<span class="' + n + '" data-mce-content="' + e.dom.encode(r[0]) + '">' + e.dom.encode("string" == typeof r[1] ? r[1] : r[0]) + "</span>";
    };
  },
      EE = function EE(e, t) {
    t.hasAttribute("data-mce-caret") && (Kr(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t));
  },
      SE = function SE(e, t) {
    var n = function (e) {
      return Zn(vn(e.getBody()), "*[data-mce-caret]").map(function (e) {
        return e.dom;
      }).getOrNull();
    }(e);

    if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void EE(e, n)) : void (Hr(n) && (EE(e, n), e.undoManager.add()));
  },
      _E = sr,
      NE = function NE(e, t, n) {
    var o = cu(e.getBody()),
        r = O(Qc, 1 === t ? o.next : o.prev);

    if (n.collapsed) {
      var _o95 = e.dom.getParent(n.startContainer, "PRE");

      if (!_o95) return;

      if (!r(Mi.fromRangeStart(n))) {
        var _n117 = vn(function (e) {
          var t = e.dom.create(Rl(e));
          return t.innerHTML = '<br data-mce-bogus="1">', t;
        }(e));

        1 === t ? go(vn(_o95), _n117) : fo(vn(_o95), _n117), e.selection.select(_n117.dom, !0), e.selection.collapse();
      }
    }
  },
      RE = function RE(e, t) {
    return function (e, t) {
      var n = t ? Zc.Forwards : Zc.Backwards,
          o = e.selection.getRng();
      return function (e, t, n) {
        return Ak(t, e, n, fp, gp, _E);
      }(n, e, o).orThunk(function () {
        return NE(e, n, o), I.none();
      });
    }(e, function (e, t) {
      var n = t ? e.getEnd(!0) : e.getStart(!0);
      return ah(n) ? !t : t;
    }(e.selection, t)).exists(function (t) {
      return Nk(e, t), !0;
    });
  },
      AE = function AE(e, t) {
    return function (e, t) {
      var n = t ? 1 : -1,
          o = e.selection.getRng();
      return function (e, t, n) {
        return Ok(t, e, n, function (e) {
          return fp(e) || up(e);
        }, function (e) {
          return gp(e) || mp(e);
        }, _E);
      }(n, e, o).orThunk(function () {
        return NE(e, n, o), I.none();
      });
    }(e, t).exists(function (t) {
      return Nk(e, t), !0;
    });
  },
      OE = function OE(e, t) {
    return Bk(e, t, t ? gp : fp);
  },
      TE = function TE(e, t) {
    return hx(e, !t).map(function (n) {
      var o = n.toRange(),
          r = e.selection.getRng();
      return t ? o.setStart(r.startContainer, r.startOffset) : o.setEnd(r.endContainer, r.endOffset), o;
    }).exists(function (t) {
      return Nk(e, t), !0;
    });
  },
      BE = function BE(e) {
    return H(["figcaption"], jt(e));
  },
      DE = function DE(e, t) {
    var n = vn(e.getBody()),
        o = Mi.fromRangeStart(e.selection.getRng());
    return function (e, t) {
      var n = O(kn, t);
      return Qn(vn(e.container()), Cr, n).filter(BE);
    }(o, n).exists(function () {
      if (function (e, t, n) {
        return t ? function (e, t) {
          return dk(e, t).breakAt.isNone();
        }(e.dom, n) : function (e, t) {
          return lk(e, t).breakAt.isNone();
        }(e.dom, n);
      }(n, t, o)) {
        var _o96 = wE(e, n, t ? ho : po);

        return e.selection.setRng(_o96), !0;
      }

      return !1;
    });
  },
      PE = function PE(e, t) {
    return !!e.selection.isCollapsed() && DE(e, t);
  },
      LE = {
    shiftKey: !1,
    altKey: !1,
    ctrlKey: !1,
    metaKey: !1,
    keyCode: 0
  },
      ME = function ME(e, t) {
    return t.keyCode === e.keyCode && t.shiftKey === e.shiftKey && t.altKey === e.altKey && t.ctrlKey === e.ctrlKey && t.metaKey === e.metaKey;
  },
      IE = function IE(e) {
    for (var _len12 = arguments.length, t = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
      t[_key12 - 1] = arguments[_key12];
    }

    return function () {
      return e.apply(null, t);
    };
  },
      FE = function FE(e, t) {
    return J(function (e, t) {
      return te(function (e) {
        return V(e, function (e) {
          return _objectSpread({}, LE, {}, e);
        });
      }(e), function (e) {
        return ME(e, t) ? [e] : [];
      });
    }(e, t), function (e) {
      return e.action();
    });
  },
      UE = function UE(e, t) {
    return ue(function (e, t) {
      return te(function (e) {
        return V(e, function (e) {
          return _objectSpread({}, LE, {}, e);
        });
      }(e), function (e) {
        return ME(e, t) ? [e] : [];
      });
    }(e, t), function (e) {
      return e.action();
    });
  },
      zE = function zE(e, t) {
    var n = t ? Zc.Forwards : Zc.Backwards,
        o = e.selection.getRng();
    return Ak(e, n, o, dp, cp, lr).exists(function (t) {
      return Nk(e, t), !0;
    });
  },
      jE = function jE(e, t) {
    var n = t ? 1 : -1,
        o = e.selection.getRng();
    return Ok(e, n, o, dp, cp, lr).exists(function (t) {
      return Nk(e, t), !0;
    });
  },
      HE = function HE(e, t) {
    return Bk(e, t, t ? cp : dp);
  },
      $E = il([{
    none: ["current"]
  }, {
    first: ["current"]
  }, {
    middle: ["current", "target"]
  }, {
    last: ["current"]
  }]),
      VE = _objectSpread({}, $E, {
    none: function none(e) {
      return $E.none(e);
    }
  }),
      qE = function qE(e, t, n) {
    return te(Ln(e), function (e) {
      return wn(e, t) ? n(e) ? [e] : [] : qE(e, t, n);
    });
  },
      WE = function WE(e, t) {
    return eo(e, "table", t);
  },
      KE = function KE(e, t, n, o) {
    var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : M;
    var s = 1 === o;
    if (!s && n <= 0) return VE.first(e[0]);
    if (s && n >= e.length - 1) return VE.last(e[e.length - 1]);
    {
      var _s41 = n + o,
          _a23 = e[_s41];

      return r(_a23) ? VE.middle(t, _a23) : KE(e, t, _s41, o, r);
    }
  },
      GE = function GE(e, t) {
    return WE(e, t).bind(function (t) {
      var n = qE(t, "th,td", M);
      return Z(n, function (t) {
        return kn(e, t);
      }).map(function (e) {
        return {
          index: e,
          all: n
        };
      });
    });
  },
      YE = function YE(e, t, n, o, r) {
    var s = Mo(vn(n), "td,th,caption").map(function (e) {
      return e.dom;
    }),
        a = G(function (e, t) {
      return te(t, function (t) {
        var n = function (e, t) {
          return {
            left: e.left - t,
            top: e.top - t,
            right: e.right + -2,
            bottom: e.bottom + -2,
            width: e.width + t,
            height: e.height + t
          };
        }(di(t.getBoundingClientRect()), -1);

        return [{
          x: n.left,
          y: e(n),
          cell: t
        }, {
          x: n.right,
          y: e(n),
          cell: t
        }];
      });
    }(e, s), function (e) {
      return t(e, r);
    });
    return function (e, t, n) {
      return X(e, function (e, o) {
        return e.fold(function () {
          return I.some(o);
        }, function (e) {
          var r = Math.sqrt(Math.abs(e.x - t) + Math.abs(e.y - n)),
              s = Math.sqrt(Math.abs(o.x - t) + Math.abs(o.y - n));
          return I.some(s < r ? o : e);
        });
      }, I.none());
    }(a, o, r).map(function (e) {
      return e.cell;
    });
  },
      XE = O(YE, function (e) {
    return e.bottom;
  }, function (e, t) {
    return e.y < t;
  }),
      QE = O(YE, function (e) {
    return e.top;
  }, function (e, t) {
    return e.y > t;
  }),
      JE = function JE(e, t, n) {
    var o = e(t, n);
    return function (e) {
      return e.breakType === ek.Wrap && 0 === e.positions.length;
    }(o) || !nr(n.getNode()) && function (e) {
      return e.breakType === ek.Br && 1 === e.positions.length;
    }(o) ? !function (e, t, n) {
      return n.breakAt.exists(function (n) {
        return e(t, n).breakAt.isSome();
      });
    }(e, t, o) : o.breakAt.isNone();
  },
      ZE = O(JE, lk),
      eS = O(JE, dk),
      tS = function tS(e, t, n, o) {
    var r = e.selection.getRng(),
        s = t ? 1 : -1;
    return !(!kc() || !function (e, t, n) {
      var o = Mi.fromRangeStart(t);
      return bu(!e, n).exists(function (e) {
        return e.isEqual(o);
      });
    }(t, r, n) || (dx(s, e, n, !t, !1).each(function (t) {
      Nk(e, t);
    }), 0));
  },
      nS = function nS(e, t, n) {
    var o = function (e, t) {
      var n = t.getNode(e);
      return Ko(n) ? I.some(n) : I.none();
    }(!!t, n),
        r = !1 === t;

    o.fold(function () {
      return Nk(e, n.toRange());
    }, function (o) {
      return bu(r, e.getBody()).filter(function (e) {
        return e.isEqual(n);
      }).fold(function () {
        return Nk(e, n.toRange());
      }, function (n) {
        return function (e, t, n) {
          t.undoManager.transact(function () {
            var o = e ? go : fo,
                r = wE(t, vn(n), o);
            Nk(t, r);
          });
        }(t, e, o);
      });
    });
  },
      oS = function oS(e, t, n, o) {
    var r = e.selection.getRng(),
        s = Mi.fromRangeStart(r),
        a = e.getBody();

    if (!t && ZE(o, s)) {
      var _o97 = function (e, t, n) {
        return function (e, t) {
          return le(t.getClientRects()).bind(function (t) {
            return XE(e, t.left, t.top);
          }).bind(function (e) {
            return ik(wu(n = e).map(function (e) {
              return lk(n, e).positions.concat(e);
            }).getOr([]), t);
            var n;
          });
        }(t, n).orThunk(function () {
          return le(n.getClientRects()).bind(function (n) {
            return ak(ck(e, Mi.before(t)), n.left);
          });
        }).getOr(Mi.before(t));
      }(a, n, s);

      return nS(e, t, _o97), !0;
    }

    if (t && eS(o, s)) {
      var _o98 = function (e, t, n) {
        return function (e, t) {
          return de(t.getClientRects()).bind(function (t) {
            return QE(e, t.left, t.top);
          }).bind(function (e) {
            return ik(Cu(n = e).map(function (e) {
              return [e].concat(dk(n, e).positions);
            }).getOr([]), t);
            var n;
          });
        }(t, n).orThunk(function () {
          return le(n.getClientRects()).bind(function (n) {
            return ak(uk(e, Mi.after(t)), n.left);
          });
        }).getOr(Mi.after(t));
      }(a, n, s);

      return nS(e, t, _o98), !0;
    }

    return !1;
  },
      rS = function rS(e, t, n) {
    return I.from(e.dom.getParent(e.selection.getNode(), "td,th")).bind(function (o) {
      return I.from(e.dom.getParent(o, "table")).map(function (r) {
        return n(e, t, r, o);
      });
    }).getOr(!1);
  },
      sS = function sS(e, t) {
    return rS(e, t, tS);
  },
      aS = function aS(e, t) {
    return rS(e, t, oS);
  },
      iS = function iS(e, t, n) {
    return n.fold(I.none, I.none, function (e, t) {
      return (n = t, function (e, t) {
        var n = function n(e) {
          for (var _o99 = 0; _o99 < e.childNodes.length; _o99++) {
            var _r68 = vn(e.childNodes[_o99]);

            if (t(_r68)) return I.some(_r68);

            var _s42 = n(e.childNodes[_o99]);

            if (_s42.isSome()) return _s42;
          }

          return I.none();
        };

        return n(e.dom);
      }(n, Tg)).map(function (e) {
        return function (e) {
          var t = bf.exact(e, 0, e, 0);
          return xf(t);
        }(e);
      });
      var n;
    }, function (n) {
      return e.execCommand("mceTableInsertRowAfter"), lS(e, t, n);
    });
  },
      lS = function lS(e, t, n) {
    return iS(e, t, (r = to, GE(o = n, void 0).fold(function () {
      return VE.none(o);
    }, function (e) {
      return KE(e.all, o, e.index, 1, r);
    })));
    var o, r;
  },
      dS = function dS(e, t, n) {
    return iS(e, t, (r = to, GE(o = n, void 0).fold(function () {
      return VE.none();
    }, function (e) {
      return KE(e.all, o, e.index, -1, r);
    })));
    var o, r;
  },
      cS = function cS(e, t) {
    var n = ["table", "li", "dl"],
        o = vn(e.getBody()),
        r = function r(e) {
      var t = jt(e);
      return kn(e, o) || H(n, t);
    },
        s = e.selection.getRng();

    return function (e, t) {
      return function (e, t) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : L;
        return n(t) ? I.none() : H(e, jt(t)) ? I.some(t) : Jn(t, e.join(","), function (e) {
          return wn(e, "table") || n(e);
        });
      }(["td", "th"], e, t);
    }(vn(t ? s.endContainer : s.startContainer), r).map(function (n) {
      return WE(n, r).each(function (t) {
        e.model.table.clearSelectedCells(t.dom);
      }), e.selection.collapse(!t), (t ? lS : dS)(e, r, n).each(function (t) {
        e.selection.setRng(t);
      }), !0;
    }).getOr(!1);
  },
      uS = function uS(e, t) {
    return {
      container: e,
      offset: t
    };
  },
      mS = Oa.DOM,
      fS = function fS(e) {
    return function (t) {
      return e === t ? -1 : 0;
    };
  },
      gS = function gS(e, t, n) {
    if (Xo(e) && t >= 0) return I.some(uS(e, t));
    {
      var _o100 = ii(mS);

      return I.from(_o100.backwards(e, t, fS(e), n)).map(function (e) {
        return uS(e.container, e.container.data.length);
      });
    }
  },
      pS = function pS(e, t, n) {
    if (!Xo(e)) return I.none();
    var o = e.data;
    if (t >= 0 && t <= o.length) return I.some(uS(e, t));
    {
      var _o101 = ii(mS);

      return I.from(_o101.backwards(e, t, fS(e), n)).bind(function (e) {
        var o = e.container.data;
        return pS(e.container, t + o.length, n);
      });
    }
  },
      hS = function hS(e, t, n) {
    if (!Xo(e)) return I.none();
    var o = e.data;
    if (t <= o.length) return I.some(uS(e, t));
    {
      var _r69 = ii(mS);

      return I.from(_r69.forwards(e, t, fS(e), n)).bind(function (e) {
        return hS(e.container, t - o.length, n);
      });
    }
  },
      bS = function bS(e, t, n, o, r) {
    var s = ii(e, function (e) {
      return function (t) {
        return e.isBlock(t) || H(["BR", "IMG", "HR", "INPUT"], t.nodeName) || "false" === e.getContentEditable(t);
      };
    }(e));
    return I.from(s.backwards(t, n, o, r));
  },
      vS = function vS(e) {
    return Mr(e.toString().replace(/\u00A0/g, " "));
  },
      yS = function yS(e) {
    return "" !== e && -1 !== " \xa0\f\n\r\t\v".indexOf(e);
  },
      CS = function CS(e, t) {
    return e.substring(t.length);
  },
      wS = function wS(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return (r = vn(t.startContainer), eo(r, Bg)).fold(function () {
      return function (e, t, n) {
        var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (!(r = t).collapsed || !Xo(r.startContainer)) return I.none();
        var r;
        var s = {
          text: "",
          offset: 0
        },
            a = e.getParent(t.startContainer, e.isBlock) || e.getRoot();
        return bS(e, t.startContainer, t.startOffset, function (e, t, o) {
          return s.text = o + s.text, s.offset += t, function (e, t, n) {
            var o;
            var r = n.charAt(0);

            for (o = t - 1; o >= 0; o--) {
              var _s43 = e.charAt(o);

              if (yS(_s43)) return I.none();
              if (r === _s43 && je(e, n, o, t)) break;
            }

            return I.some(o);
          }(s.text, s.offset, n).getOr(t);
        }, a).bind(function (e) {
          var r = t.cloneRange();
          if (r.setStart(e.container, e.offset), r.setEnd(t.endContainer, t.endOffset), r.collapsed) return I.none();
          var s = vS(r);
          return 0 !== s.lastIndexOf(n) || CS(s, n).length < o ? I.none() : I.some({
            text: CS(s, n),
            range: r,
            trigger: n
          });
        });
      }(e, t, n, o);
    }, function (t) {
      var o = e.createRng();
      o.selectNode(t.dom);
      var r = vS(o);
      return I.some({
        range: o,
        text: CS(r, n),
        trigger: n
      });
    });
    var r;
  },
      xS = function xS(e) {
    if (function (e) {
      return 3 === e.nodeType;
    }(e)) return uS(e, e.data.length);
    {
      var _t135 = e.childNodes;
      return _t135.length > 0 ? xS(_t135[_t135.length - 1]) : uS(e, _t135.length);
    }
  },
      kS = function kS(e, t) {
    var n = e.childNodes;
    return n.length > 0 && t < n.length ? kS(n[t], 0) : n.length > 0 && function (e) {
      return 1 === e.nodeType;
    }(e) && n.length === t ? xS(n[n.length - 1]) : uS(e, t);
  },
      ES = function ES(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var r;
    var s = t(),
        a = null !== (r = e.selection.getRng().startContainer.nodeValue) && void 0 !== r ? r : "",
        i = G(s.lookupByTrigger(n.trigger), function (t) {
      return n.text.length >= t.minChars && t.matches.getOrThunk(function () {
        return function (e) {
          return function (t) {
            var n = kS(t.startContainer, t.startOffset);
            return !function (e, t) {
              var n;
              var o = null !== (n = e.getParent(t.container, e.isBlock)) && void 0 !== n ? n : e.getRoot();
              return bS(e, t.container, t.offset, function (e, t) {
                return 0 === t ? -1 : t;
              }, o).filter(function (e) {
                var t = e.container.data.charAt(e.offset - 1);
                return !yS(t);
              }).isSome();
            }(e, n);
          };
        }(e.dom);
      })(n.range, a, n.text);
    });
    if (0 === i.length) return I.none();
    var l = Promise.all(V(i, function (e) {
      return e.fetch(n.text, e.maxResults, o).then(function (t) {
        return {
          matchText: n.text,
          items: t,
          columns: e.columns,
          onAction: e.onAction,
          highlightOn: e.highlightOn
        };
      });
    }));
    return I.some({
      lookupData: l,
      context: n
    });
  };

  var SS;
  !function (e) {
    e[e.Error = 0] = "Error", e[e.Value = 1] = "Value";
  }(SS || (SS = {}));

  var _S = function _S(e, t, n) {
    return e.stype === SS.Error ? t(e.serror) : n(e.svalue);
  },
      NS = function NS(e) {
    return {
      stype: SS.Value,
      svalue: e
    };
  },
      RS = function RS(e) {
    return {
      stype: SS.Error,
      serror: e
    };
  },
      AS = _S,
      OS = function OS(e) {
    return f(e) && me(e).length > 100 ? " removed due to size" : JSON.stringify(e, null, 2);
  },
      TS = function TS(e, t) {
    return RS([{
      path: e,
      getErrorInfo: t
    }]);
  },
      BS = function BS(e, t) {
    return {
      extract: function extract(n, o) {
        return xe(o, e).fold(function () {
          return function (e, t) {
            return TS(e, function () {
              return 'Choice schema did not contain choice key: "' + t + '"';
            });
          }(n, e);
        }, function (e) {
          return function (e, t, n, o) {
            return xe(n, o).fold(function () {
              return function (e, t, n) {
                return TS(e, function () {
                  return 'The chosen schema: "' + n + '" did not exist in branches: ' + OS(t);
                });
              }(e, n, o);
            }, function (n) {
              return n.extract(e.concat(["branch: " + o]), t);
            });
          }(n, o, t, e);
        });
      },
      toString: function toString() {
        return "chooseOn(" + e + "). Possible values: " + me(t);
      }
    };
  },
      DS = function DS(e) {
    return function () {
      if (0 === arguments.length) throw new Error("Can't merge zero objects");
      var n = {};

      for (var _o102 = 0; _o102 < arguments.length; _o102++) {
        var _r70 = _o102 < 0 || arguments.length <= _o102 ? undefined : arguments[_o102];

        for (var _t136 in _r70) {
          ke(_r70, _t136) && (n[_t136] = e(n[_t136], _r70[_t136]));
        }
      }

      return n;
    };
  },
      PS = DS(function (e, t) {
    return g(e) && g(t) ? PS(e, t) : t;
  }),
      LS = (DS(function (e, t) {
    return t;
  }), function (e) {
    return {
      tag: "defaultedThunk",
      process: N(e)
    };
  }),
      MS = function MS(e) {
    var t = function (e) {
      var t = [],
          n = [];
      return q(e, function (e) {
        _S(e, function (e) {
          return n.push(e);
        }, function (e) {
          return t.push(e);
        });
      }), {
        values: t,
        errors: n
      };
    }(e);

    return t.errors.length > 0 ? (n = t.errors, S(RS, ee)(n)) : NS(t.values);
    var n;
  },
      IS = function IS(e, t, n) {
    switch (e.tag) {
      case "field":
        return t(e.key, e.newKey, e.presence, e.prop);

      case "custom":
        return n(e.newKey, e.instantiator);
    }
  },
      FS = function FS(e) {
    return {
      extract: function extract(t, n) {
        return o = e(n), r = function r(e) {
          return function (e, t) {
            return TS(e, N(t));
          }(t, e);
        }, o.stype === SS.Error ? r(o.serror) : o;
        var o, r;
      },
      toString: N("val")
    };
  },
      US = FS(NS),
      zS = function zS(e, t, n, o) {
    return o(xe(e, t).getOrThunk(function () {
      return n(e);
    }));
  },
      jS = function jS(e, t, n, o, r) {
    var s = function s(e) {
      return r.extract(t.concat([o]), e);
    },
        a = function a(e) {
      return e.fold(function () {
        return NS(I.none());
      }, function (e) {
        var n = r.extract(t.concat([o]), e);
        return s = n, a = I.some, s.stype === SS.Value ? {
          stype: SS.Value,
          svalue: a(s.svalue)
        } : s;
        var s, a;
      });
    };

    switch (e.tag) {
      case "required":
        return function (e, t, n, o) {
          return xe(t, n).fold(function () {
            return function (e, t, n) {
              return TS(e, function () {
                return 'Could not find valid *required* value for "' + t + '" in ' + OS(n);
              });
            }(e, n, t);
          }, o);
        }(t, n, o, s);

      case "defaultedThunk":
        return zS(n, o, e.process, s);

      case "option":
        return function (e, t, n) {
          return n(xe(e, t));
        }(n, o, a);

      case "defaultedOptionThunk":
        return function (e, t, n, o) {
          return o(xe(e, t).map(function (t) {
            return !0 === t ? n(e) : t;
          }));
        }(n, o, e.process, a);

      case "mergeWithThunk":
        return zS(n, o, N({}), function (t) {
          var o = PS(e.process(n), t);
          return s(o);
        });
    }
  },
      HS = function HS(e) {
    return {
      extract: function extract(t, n) {
        return function (e, t, n) {
          var o = {},
              r = [];
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = n[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _s44 = _step4.value;
              IS(_s44, function (n, s, a, i) {
                var l = jS(a, e, t, n, i);
                AS(l, function (e) {
                  r.push.apply(r, _toConsumableArray(e));
                }, function (e) {
                  o[s] = e;
                });
              }, function (e, n) {
                o[e] = n(t);
              });
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

          return r.length > 0 ? RS(r) : NS(o);
        }(t, n, e);
      },
      toString: function toString() {
        var t = V(e, function (e) {
          return IS(e, function (e, t, n, o) {
            return e + " -> " + o.toString();
          }, function (e, t) {
            return "state(" + e + ")";
          });
        });
        return "obj{\n" + t.join("\n") + "}";
      }
    };
  },
      $S = function $S(e) {
    return {
      extract: function extract(t, n) {
        var o = V(n, function (n, o) {
          return e.extract(t.concat(["[" + o + "]"]), n);
        });
        return MS(o);
      },
      toString: function toString() {
        return "array(" + e.toString() + ")";
      }
    };
  },
      VS = function VS(e, t, n) {
    return o = function (e, t, n) {
      return function (e, t) {
        return e.stype === SS.Error ? {
          stype: SS.Error,
          serror: t(e.serror)
        } : e;
      }(t.extract([e], n), function (e) {
        return {
          input: n,
          errors: e
        };
      });
    }(e, t, n), _S(o, al.error, al.value);
    var o;
  },
      qS = function qS(e, t) {
    return BS(e, pe(t, HS));
  },
      WS = N(US),
      KS = function KS(e, t) {
    return FS(function (n) {
      var o = _typeof(n);

      return e(n) ? NS(n) : RS("Expected type: ".concat(t, " but got: ").concat(o));
    });
  },
      GS = KS(x, "number"),
      YS = KS(m, "string"),
      XS = KS(b, "boolean"),
      QS = KS(w, "function"),
      JS = function JS(e, t, n, o) {
    return {
      tag: "field",
      key: e,
      newKey: t,
      presence: n,
      prop: o
    };
  },
      ZS = function ZS(e, t) {
    return {
      tag: "custom",
      newKey: e,
      instantiator: t
    };
  },
      e_ = function e_(e, t) {
    return JS(e, e, {
      tag: "required",
      process: {}
    }, t);
  },
      t_ = function t_(e) {
    return e_(e, YS);
  },
      n_ = function n_(e) {
    return e_(e, QS);
  },
      o_ = function o_(e, t) {
    return JS(e, e, {
      tag: "option",
      process: {}
    }, t);
  },
      r_ = function r_(e) {
    return o_(e, YS);
  },
      s_ = function s_(e, t, n) {
    return JS(e, e, LS(t), n);
  },
      a_ = function a_(e, t) {
    return s_(e, t, GS);
  },
      i_ = function i_(e, t, n) {
    return s_(e, t, function (e) {
      return t = function t(_t137) {
        return H(e, _t137) ? al.value(_t137) : al.error("Unsupported value: \"".concat(_t137, "\", choose one of \"").concat(e.join(", "), "\"."));
      }, FS(function (e) {
        return t(e).fold(RS, NS);
      });
      var t;
    }(n));
  },
      l_ = function l_(e, t) {
    return s_(e, t, XS);
  },
      d_ = function d_(e, t) {
    return s_(e, t, QS);
  },
      c_ = t_("type"),
      u_ = n_("fetch"),
      m_ = n_("onAction"),
      f_ = d_("onSetup", function () {
    return E;
  }),
      g_ = r_("text"),
      p_ = r_("icon"),
      h_ = r_("tooltip"),
      b_ = r_("label"),
      v_ = l_("active", !1),
      y_ = l_("enabled", !0),
      C_ = l_("primary", !1),
      w_ = function w_(e) {
    return function (e, t) {
      return s_("type", t, YS);
    }(0, e);
  },
      x_ = HS([c_, t_("trigger"), a_("minChars", 1), (1, function (e, t) {
    return JS(e, e, LS(1), WS());
  }("columns")), a_("maxResults", 10), ("matches", o_("matches", QS)), u_, m_, (k_ = YS, s_("highlightOn", [], $S(k_)))]);

  var k_;
  var E_ = [y_, h_, p_, g_, f_],
      S_ = [v_].concat(E_),
      __ = [d_("predicate", L), i_("scope", "node", ["node", "editor"]), i_("position", "selection", ["node", "selection", "line"])],
      N_ = E_.concat([w_("contextformbutton"), C_, m_, ZS("original", R)]),
      R_ = S_.concat([w_("contextformbutton"), C_, m_, ZS("original", R)]),
      A_ = E_.concat([w_("contextformbutton")]),
      O_ = S_.concat([w_("contextformtogglebutton")]),
      T_ = qS("type", {
    contextformbutton: N_,
    contextformtogglebutton: R_
  });
  HS([w_("contextform"), d_("initValue", N("")), b_, function (e, t) {
    return JS(e, e, {
      tag: "required",
      process: {}
    }, $S(t));
  }("commands", T_), o_("launch", qS("type", {
    contextformbutton: A_,
    contextformtogglebutton: O_
  }))].concat(__));

  var B_ = function B_(e) {
    var t = e.ui.registry.getAll().popups,
        n = pe(t, function (e) {
      return (t = e, VS("Autocompleter", x_, _objectSpread({
        trigger: t.ch
      }, t))).fold(function (e) {
        throw new Error("Errors: \n" + function (e) {
          var t = e.length > 10 ? e.slice(0, 10).concat([{
            path: [],
            getErrorInfo: N("... (only showing first ten failures)")
          }]) : e;
          return V(t, function (e) {
            return "Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo();
          });
        }((t = e).errors).join("\n") + "\n\nInput object: " + OS(t.input));
        var t;
      }, R);
      var t;
    }),
        o = Se(Ce(n, function (e) {
      return e.trigger;
    })),
        r = we(n);
    return {
      dataset: n,
      triggers: o,
      lookupByTrigger: function lookupByTrigger(e) {
        return G(r, function (t) {
          return t.trigger === e;
        });
      }
    };
  },
      D_ = function D_(e) {
    var t = za(),
        n = Da(!1),
        o = t.isSet,
        r = function r() {
      o() && (function (e) {
        IC(e).autocompleter.removeDecoration();
      }(e), function (e) {
        e.dispatch("AutocompleterEnd");
      }(e), n.set(!1), t.clear());
    },
        s = Pe(function () {
      return B_(e);
    }),
        a = function a(_a24) {
      (function (n) {
        return t.get().map(function (t) {
          return wS(e.dom, e.selection.getRng(), t.trigger).bind(function (t) {
            return ES(e, s, t, n);
          });
        }).getOrThunk(function () {
          return function (e, t) {
            var n = t(),
                o = e.selection.getRng();
            return function (e, t, n) {
              return ue(n.triggers, function (n) {
                return wS(e, t, n);
              });
            }(e.dom, o, n).bind(function (n) {
              return ES(e, t, n);
            });
          }(e, s);
        });
      })(_a24).fold(r, function (s) {
        (function (n) {
          o() || (function (e, t) {
            IC(e).autocompleter.addDecoration(t);
          }(e, n.range), t.set({
            trigger: n.trigger,
            matchLength: n.text.length
          }));
        })(s.context), s.lookupData.then(function (o) {
          t.get().map(function (a) {
            var i = s.context;
            a.trigger === i.trigger && (i.text.length - a.matchLength >= 10 ? r() : (t.set(_objectSpread({}, a, {
              matchLength: i.text.length
            })), n.get() ? function (e, t) {
              e.dispatch("AutocompleterUpdate", t);
            }(e, {
              lookupData: o
            }) : (n.set(!0), function (e, t) {
              e.dispatch("AutocompleterStart", t);
            }(e, {
              lookupData: o
            }))));
          });
        });
      });
    };

    e.addCommand("mceAutocompleterReload", function (e, t) {
      var n = f(t) ? t.fetchOptions : {};
      a(n);
    }), e.addCommand("mceAutocompleterClose", r), function (e, t) {
      var n = Ha(t.load, 50);
      e.on("keypress compositionend", function (e) {
        27 !== e.which && n.throttle();
      }), e.on("keydown", function (e) {
        var o = e.which;
        8 === o ? n.throttle() : 27 === o && t.cancelIfNecessary();
      }), e.on("remove", n.cancel);
    }(e, {
      cancelIfNecessary: r,
      load: a
    });
  },
      P_ = function P_(e) {
    return function (t, n) {
      var o = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var r = t.getBody(),
          s = {
        bubbles: !0,
        composed: !0,
        data: null,
        isComposing: !1,
        detail: 0,
        view: null,
        target: r,
        currentTarget: r,
        eventPhase: Event.AT_TARGET,
        originalTarget: r,
        explicitOriginalTarget: r,
        isTrusted: !1,
        srcElement: r,
        cancelable: !1,
        preventDefault: E,
        inputType: n
      },
          a = fa(new InputEvent(e));
      return t.dispatch(e, _objectSpread({}, a, {}, s, {}, o));
    };
  },
      L_ = P_("input"),
      M_ = P_("beforeinput"),
      I_ = function I_(e, t) {
    var n = e.dom,
        o = e.schema.getMoveCaretBeforeOnEnterElements();
    if (!t) return;

    if (/^(LI|DT|DD)$/.test(t.nodeName)) {
      var _e145 = function (e) {
        for (; e;) {
          if (jo(e) || Xo(e) && e.data && /[\r\n\s]/.test(e.data)) return e;
          e = e.nextSibling;
        }

        return null;
      }(t.firstChild);

      _e145 && /^(UL|OL|DL)$/.test(_e145.nodeName) && t.insertBefore(n.doc.createTextNode(fr), t.firstChild);
    }

    var r = n.createRng();

    if (t.normalize(), t.hasChildNodes()) {
      var _e146 = new Fo(t, t);

      var _n118,
          _s45 = t;

      for (; _n118 = _e146.current();) {
        if (Xo(_n118)) {
          r.setStart(_n118, 0), r.setEnd(_n118, 0);
          break;
        }

        if (o[_n118.nodeName.toLowerCase()]) {
          r.setStartBefore(_n118), r.setEndBefore(_n118);
          break;
        }

        _s45 = _n118, _n118 = _e146.next();
      }

      _n118 || (r.setStart(_s45, 0), r.setEnd(_s45, 0));
    } else nr(t) ? t.nextSibling && n.isBlock(t.nextSibling) ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)) : (r.setStart(t, 0), r.setEnd(t, 0));

    e.selection.setRng(r), eg(e, r);
  },
      F_ = function F_(e, t) {
    var n = e.getRoot();
    var o,
        r = t;

    for (; r !== n && r && "false" !== e.getContentEditable(r);) {
      "true" === e.getContentEditable(r) && (o = r), r = r.parentNode;
    }

    return r !== n ? o : n;
  },
      U_ = function U_(e) {
    return I.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
  },
      z_ = function z_(e, t) {
    var n = null == e ? void 0 : e.parentNode;
    return C(n) && n.nodeName === t;
  },
      j_ = function j_(e) {
    return C(e) && /^(OL|UL|LI)$/.test(e.nodeName);
  },
      H_ = function H_(e) {
    var t = e.parentNode;
    return C(n = t) && /^(LI|DT|DD)$/.test(n.nodeName) ? t : e;
    var n;
  },
      $_ = function $_(e, t, n) {
    var o = e[n ? "firstChild" : "lastChild"];

    for (; o && !jo(o);) {
      o = o[n ? "nextSibling" : "previousSibling"];
    }

    return o === t;
  },
      V_ = function V_(e, t) {
    return t && "A" === t.nodeName && e.isEmpty(t);
  },
      q_ = function q_(e) {
    e.innerHTML = '<br data-mce-bogus="1">';
  },
      W_ = function W_(e, t) {
    return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t;
  },
      K_ = function K_(e, t) {
    return C(t) && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && e.isEditable(t.parentNode) && "false" !== e.getContentEditable(t);
  },
      G_ = function G_(e, t, n) {
    return Xo(t) ? e ? 1 === n && t.data.charAt(n - 1) === Pr ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === Pr ? t.data.length : n : n;
  },
      Y_ = function Y_(e, t) {
    Rl(e).toLowerCase() === t.tagName.toLowerCase() && function (e, t, n) {
      var o = e.dom;
      I.from(n.style).map(o.parseStyle).each(function (e) {
        var n = _objectSpread({}, uo(vn(t)), {}, e);

        o.setStyles(t, n);
      });
      var r = I.from(n["class"]).map(function (e) {
        return e.split(/\s+/);
      }),
          s = I.from(t.className).map(function (e) {
        return G(e.split(/\s+/), function (e) {
          return "" !== e;
        });
      });
      Lt(r, s, function (e, n) {
        var r = G(n, function (t) {
          return !H(e, t);
        }),
            s = [].concat(_toConsumableArray(e), _toConsumableArray(r));
        o.setAttrib(t, "class", s.join(" "));
      });
      var a = ["style", "class"],
          i = ye(n, function (e, t) {
        return !H(a, t);
      });
      o.setAttribs(t, i);
    }(e, t, Al(e));
  },
      X_ = {
    insert: function insert(e, t) {
      var n,
          o,
          r,
          s,
          a = !1;

      var i = e.dom,
          l = e.schema,
          d = l.getNonEmptyElements(),
          c = e.selection.getRng(),
          u = Rl(e),
          f = c.collapsed && c.startContainer === e.dom.getRoot(),
          g = vn(c.startContainer),
          p = Mn(g, c.startOffset),
          b = p.exists(function (e) {
        return Vt(e) && !to(e);
      }),
          v = f && b,
          w = function w(t) {
        var o = n;
        var s = l.getTextInlineElements();
        var a;
        a = t || "TABLE" === r || "HR" === r ? i.create(t || u) : N.cloneNode(!1);
        var d = a;
        if (!1 === Dl(e)) i.setAttrib(a, "style", null), i.setAttrib(a, "class", null);else do {
          if (s[o.nodeName]) {
            if (ku(o) || Mu(o)) continue;

            var _e147 = o.cloneNode(!1);

            i.setAttrib(_e147, "id", ""), a.hasChildNodes() ? (_e147.appendChild(a.firstChild), a.appendChild(_e147)) : (d = _e147, a.appendChild(_e147));
          }
        } while ((o = o.parentNode) && o !== _);
        return Y_(e, a), q_(d), a;
      },
          x = function x(e) {
        var t = G_(e, n, o);
        if (Xo(n) && (e ? t > 0 : t < n.data.length)) return !1;
        if (n.parentNode === N && a && !e) return !0;
        if (e && jo(n) && n === N.firstChild) return !0;
        if (W_(n, "TABLE") || W_(n, "HR")) return a && !e || !a && e;
        var r = new Fo(n, N);
        var s;

        for (Xo(n) && (e && 0 === t ? r.prev() : e || t !== n.data.length || r.next()); s = r.current();) {
          if (jo(s)) {
            if (!s.getAttribute("data-mce-bogus")) {
              var _e148 = s.nodeName.toLowerCase();

              if (d[_e148] && "br" !== _e148) return !1;
            }
          } else if (Xo(s) && !is(s.data)) return !1;

          e ? r.prev() : r.next();
        }

        return !0;
      },
          k = function k() {
        var t;
        return t = /^(H[1-6]|PRE|FIGURE)$/.test(r) && "HGROUP" !== R ? w(u) : w(), function (e, t) {
          var n = Pl(e);
          return !y(t) && (m(n) ? H(Dt.explode(n), t.nodeName.toLowerCase()) : n);
        }(e, s) && K_(i, s) && i.isEmpty(N, void 0, {
          includeZwsp: !0
        }) ? t = i.split(s, N) : i.insertAfter(t, N), I_(e, t), t;
      };

      Tf(i, c).each(function (e) {
        c.setStart(e.startContainer, e.startOffset), c.setEnd(e.endContainer, e.endOffset);
      }), n = c.startContainer, o = c.startOffset;
      var E = !(!t || !t.shiftKey),
          S = !(!t || !t.ctrlKey);
      jo(n) && n.hasChildNodes() && !v && (a = o > n.childNodes.length - 1, n = n.childNodes[Math.min(o, n.childNodes.length - 1)] || n, o = a && Xo(n) ? n.data.length : 0);

      var _ = F_(i, n);

      if (!_ || function (e, t) {
        var n = e.dom.getParent(t, "ol,ul,dl");
        return null !== n && "false" === e.dom.getContentEditableParent(n);
      }(e, n)) return;
      E || (n = function (e, t, n, o, r) {
        var s, a;
        var i = e.dom,
            l = null !== (s = F_(i, o)) && void 0 !== s ? s : i.getRoot();
        var d = i.getParent(o, i.isBlock);

        if (!d || !K_(i, d)) {
          if (d = d || l, !d.hasChildNodes()) {
            var _o103 = i.create(t);

            return Y_(e, _o103), d.appendChild(_o103), n.setStart(_o103, 0), n.setEnd(_o103, 0), _o103;
          }

          var _s46,
              _c7 = o;

          for (; _c7 && _c7.parentNode !== d;) {
            _c7 = _c7.parentNode;
          }

          for (; _c7 && !i.isBlock(_c7);) {
            _s46 = _c7, _c7 = _c7.previousSibling;
          }

          var _u7 = null === (a = null == _s46 ? void 0 : _s46.parentElement) || void 0 === a ? void 0 : a.nodeName;

          if (_s46 && _u7 && e.schema.isValidChild(_u7, t.toLowerCase())) {
            var _a25 = _s46.parentNode,
                _l12 = i.create(t);

            for (Y_(e, _l12), _a25.insertBefore(_l12, _s46), _c7 = _s46; _c7 && !i.isBlock(_c7);) {
              var _e149 = _c7.nextSibling;
              _l12.appendChild(_c7), _c7 = _e149;
            }

            n.setStart(o, r), n.setEnd(o, r);
          }
        }

        return o;
      }(e, u, c, n, o));
      var N = i.getParent(n, i.isBlock) || i.getRoot();
      s = C(null == N ? void 0 : N.parentNode) ? i.getParent(N.parentNode, i.isBlock) : null, r = N ? N.nodeName.toUpperCase() : "";
      var R = s ? s.nodeName.toUpperCase() : "";
      if ("LI" !== R || S || (N = s, s = s.parentNode, r = R), jo(s) && function (e, t, n) {
        return !t && n.nodeName.toLowerCase() === Rl(e) && e.dom.isEmpty(n) && function (t, n, o) {
          var r = n;

          for (; r && r !== t && h(r.nextSibling);) {
            var _t138 = r.parentElement;
            if (!_t138 || (s = _t138, !ke(e.schema.getTextBlockElements(), s.nodeName.toLowerCase()))) return cr(_t138);
            r = _t138;
          }

          var s;
          return !1;
        }(e.getBody(), n);
      }(e, E, N)) return function (e, t, n) {
        var o, r, s;

        var a = t(Rl(e)),
            i = function (e, t) {
          return e.dom.getParent(t, cr);
        }(e, n);

        i && (e.dom.insertAfter(a, i), I_(e, a), (null !== (s = null === (r = null === (o = n.parentElement) || void 0 === o ? void 0 : o.childNodes) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0) > 1 && e.dom.remove(n));
      }(e, w, N);
      if (/^(LI|DT|DD)$/.test(r) && jo(s) && i.isEmpty(N)) return void function (e, t, n, o, r) {
        var s = e.dom,
            a = e.selection.getRng(),
            i = n.parentNode;
        if (n === e.getBody() || !i) return;
        var l;
        j_(l = n) && j_(l.parentNode) && (r = "LI");
        var d = t(r);
        if ($_(n, o, !0) && $_(n, o, !1)) {
          if (z_(n, "LI")) {
            var _e150 = H_(n);

            s.insertAfter(d, _e150), function (e) {
              var t;
              return (null === (t = e.parentNode) || void 0 === t ? void 0 : t.firstChild) === e;
            }(n) ? s.remove(_e150) : s.remove(n);
          } else s.replace(d, n);
        } else if ($_(n, o, !0)) z_(n, "LI") ? (s.insertAfter(d, H_(n)), d.appendChild(s.doc.createTextNode(" ")), d.appendChild(n)) : i.insertBefore(d, n), s.remove(o);else if ($_(n, o, !1)) s.insertAfter(d, H_(n)), s.remove(o);else {
          n = H_(n);

          var _e151 = a.cloneRange();

          _e151.setStartAfter(o), _e151.setEndAfter(n);

          var _t139 = _e151.extractContents();

          "LI" === r && function (e, t) {
            return e.firstChild && "LI" === e.firstChild.nodeName;
          }(_t139) ? (d = _t139.firstChild, s.insertAfter(_t139, n)) : (s.insertAfter(_t139, n), s.insertAfter(d, n)), s.remove(o);
        }
        I_(e, d);
      }(e, w, s, N, u);
      if (!(v || N !== e.getBody() && K_(i, N))) return;
      var A = N.parentNode;
      var O;
      if (v) O = w(u), p.fold(function () {
        ho(g, vn(O));
      }, function (e) {
        fo(e, vn(O));
      }), e.selection.setCursorLocation(O, 0);else if (Ur(N)) O = Kr(N), i.isEmpty(N) && q_(N), Y_(e, O), I_(e, O);else if (x(!1)) O = k();else if (x(!0) && A) {
        O = A.insertBefore(w(), N);

        var _t140 = vn(c.startContainer).dom.hasChildNodes() && c.collapsed;

        I_(e, W_(N, "HR") || _t140 ? O : N);
      } else {
        var _t141 = function (e) {
          var t = e.cloneRange();
          return t.setStart(e.startContainer, G_(!0, e.startContainer, e.startOffset)), t.setEnd(e.endContainer, G_(!1, e.endContainer, e.endOffset)), t;
        }(c).cloneRange();

        _t141.setEndAfter(N);

        var _n119 = _t141.extractContents();

        (function (e) {
          q(Lo(vn(e), Wt), function (e) {
            var t = e.dom;
            t.nodeValue = Mr(t.data);
          });
        })(_n119), function (e) {
          var t = e;

          do {
            Xo(t) && (t.data = t.data.replace(/^[\r\n]+/, "")), t = t.firstChild;
          } while (t);
        }(_n119), O = _n119.firstChild, i.insertAfter(_n119, N), function (e, t, n) {
          var o;
          var r = [];
          if (!n) return;
          var s = n;

          for (; s = s.firstChild;) {
            if (e.isBlock(s)) return;
            jo(s) && !t[s.nodeName.toLowerCase()] && r.push(s);
          }

          var a = r.length;

          for (; a--;) {
            s = r[a], (!s.hasChildNodes() || s.firstChild === s.lastChild && "" === (null === (o = s.firstChild) || void 0 === o ? void 0 : o.nodeValue) || V_(e, s)) && e.remove(s);
          }
        }(i, d, O), function (e, t) {
          t.normalize();
          var n = t.lastChild;
          (!n || jo(n) && /^(left|right)$/gi.test(e.getStyle(n, "float", !0))) && e.add(t, "br");
        }(i, N), i.isEmpty(N) && q_(N), O.normalize(), i.isEmpty(O) ? (i.remove(O), k()) : (Y_(e, O), I_(e, O));
      }
      i.setAttrib(O, "id", ""), e.dispatch("NewBlock", {
        newBlock: O
      });
    },
    fakeEventName: "insertParagraph"
  },
      Q_ = function Q_(e, t, n) {
    var o = e.dom.createRng();
    n ? (o.setStartBefore(t), o.setEndBefore(t)) : (o.setStartAfter(t), o.setEndAfter(t)), e.selection.setRng(o), eg(e, o);
  },
      J_ = function J_(e, t) {
    var n = hn("br");
    fo(vn(t), n), e.undoManager.add();
  },
      Z_ = function Z_(e, t) {
    eN(e.getBody(), t) || go(vn(t), hn("br"));
    var n = hn("br");
    go(vn(t), n), Q_(e, n.dom, !1), e.undoManager.add();
  },
      eN = function eN(e, t) {
    return n = Mi.after(t), !!nr(n.getNode()) || vu(e, Mi.after(t)).map(function (e) {
      return nr(e.getNode());
    }).getOr(!1);
    var n;
  },
      tN = function tN(e) {
    return e && "A" === e.nodeName && "href" in e;
  },
      nN = function nN(e) {
    return e.fold(L, tN, tN, L);
  },
      oN = function oN(e, t) {
    t.fold(E, O(J_, e), O(Z_, e), E);
  },
      rN = {
    insert: function insert(e, t) {
      var n = function (e) {
        var t = O(sh, e),
            n = Mi.fromRangeStart(e.selection.getRng());
        return qx(t, e.getBody(), n).filter(nN);
      }(e);

      n.isSome() ? n.each(O(oN, e)) : function (e, t) {
        var n = e.selection,
            o = e.dom,
            r = n.getRng();
        var s,
            a = !1;
        Tf(o, r).each(function (e) {
          r.setStart(e.startContainer, e.startOffset), r.setEnd(e.endContainer, e.endOffset);
        });
        var i = r.startOffset,
            l = r.startContainer;

        if (jo(l) && l.hasChildNodes()) {
          var _e152 = i > l.childNodes.length - 1;

          l = l.childNodes[Math.min(i, l.childNodes.length - 1)] || l, i = _e152 && Xo(l) ? l.data.length : 0;
        }

        var d = o.getParent(l, o.isBlock);
        var c = d && d.parentNode ? o.getParent(d.parentNode, o.isBlock) : null,
            u = c ? c.nodeName.toUpperCase() : "",
            m = !(!t || !t.ctrlKey);
        "LI" !== u || m || (d = c), Xo(l) && i >= l.data.length && (function (e, t, n) {
          var o = new Fo(t, n);
          var r;
          var s = e.getNonEmptyElements();

          for (; r = o.next();) {
            if (s[r.nodeName.toLowerCase()] || Xo(r) && r.length > 0) return !0;
          }

          return !1;
        }(e.schema, l, d || o.getRoot()) || (s = o.create("br"), r.insertNode(s), r.setStartAfter(s), r.setEndAfter(s), a = !0)), s = o.create("br"), Fi(o, r, s), Q_(e, s, a), e.undoManager.add();
      }(e, t);
    },
    fakeEventName: "insertLineBreak"
  },
      sN = function sN(e, t) {
    return U_(e).filter(function (e) {
      return t.length > 0 && wn(vn(e), t);
    }).isSome();
  },
      aN = il([{
    br: []
  }, {
    block: []
  }, {
    none: []
  }]),
      iN = function iN(e, t) {
    return function (e) {
      return sN(e, Bl(e));
    }(e);
  },
      lN = function lN(e) {
    return function (t, n) {
      return function (e) {
        return U_(e).filter(function (e) {
          return Sr(vn(e));
        }).isSome();
      }(t) === e;
    };
  },
      dN = function dN(e, t) {
    return function (n, o) {
      var r = function (e) {
        return U_(e).fold(N(""), function (e) {
          return e.nodeName.toUpperCase();
        });
      }(n) === e.toUpperCase();

      return r === t;
    };
  },
      cN = function cN(e) {
    var t = F_(e.dom, e.selection.getStart());
    return y(t);
  },
      uN = function uN(e) {
    return dN("pre", e);
  },
      mN = function mN(e) {
    return function (t, n) {
      return Nl(t) === e;
    };
  },
      fN = function fN(e, t) {
    return function (e) {
      return sN(e, Tl(e));
    }(e);
  },
      gN = function gN(e, t) {
    return t;
  },
      pN = function pN(e) {
    var t = Rl(e),
        n = F_(e.dom, e.selection.getStart());
    return C(n) && e.schema.isValidChild(n.nodeName, t);
  },
      hN = function hN(e) {
    var t = e.selection.getRng(),
        n = t.collapsed && t.startContainer === e.dom.getRoot(),
        o = vn(t.startContainer),
        r = Mn(o, t.startOffset).map(function (e) {
      return Vt(e) && !to(e);
    });
    return n && r.getOr(!0);
  },
      bN = function bN(e, t) {
    return function (n, o) {
      return X(e, function (e, t) {
        return e && t(n, o);
      }, !0) ? I.some(t) : I.none();
    };
  },
      vN = function vN(e, t, n) {
    t.selection.isCollapsed() || function (e) {
      e.execCommand("delete");
    }(t), C(n) && M_(t, e.fakeEventName).isDefaultPrevented() || (e.insert(t, n), C(n) && L_(t, e.fakeEventName));
  },
      yN = function yN(e, t) {
    var n = function n() {
      return vN(rN, e, t);
    },
        o = function o() {
      return vN(X_, e, t);
    },
        r = function (e, t) {
      return Lx([bN([iN], aN.none()), bN([uN(!0), cN], aN.none()), bN([dN("summary", !0)], aN.br()), bN([uN(!0), mN(!1), gN], aN.br()), bN([uN(!0), mN(!1)], aN.block()), bN([uN(!0), mN(!0), gN], aN.block()), bN([uN(!0), mN(!0)], aN.br()), bN([lN(!0), gN], aN.br()), bN([lN(!0)], aN.block()), bN([fN], aN.br()), bN([gN], aN.br()), bN([pN], aN.block()), bN([hN], aN.block())], [e, !(!t || !t.shiftKey)]).getOr(aN.none());
    }(e, t);

    switch (Ol(e)) {
      case "linebreak":
        r.fold(n, n, E);
        break;

      case "block":
        r.fold(o, o, E);
        break;

      case "invert":
        r.fold(o, n, E);
        break;

      default:
        r.fold(n, o, E);
    }
  },
      CN = xt(),
      wN = CN.os.isiOS() && CN.browser.isSafari(),
      xN = function xN(e, t) {
    var n;
    t.isDefaultPrevented() || (t.preventDefault(), (n = e.undoManager).typing && (n.typing = !1, n.add()), e.undoManager.transact(function () {
      yN(e, t);
    }));
  },
      kN = xt(),
      EN = function EN(e) {
    return e.stopImmediatePropagation();
  },
      SN = function SN(e) {
    return e.keyCode === tf.PAGE_UP || e.keyCode === tf.PAGE_DOWN;
  },
      _N = function _N(e, t, n) {
    n && !e.get() ? t.on("NodeChange", EN, !0) : !n && e.get() && t.off("NodeChange", EN), e.set(n);
  },
      NN = function NN(e, t) {
    var n = t.container(),
        o = t.offset();
    return Xo(n) ? (n.insertData(o, e), I.some(Mi(n, o + e.length))) : Xc(t).map(function (n) {
      var o = bn(e);
      return t.isAtEnd() ? go(n, o) : fo(n, o), Mi(o.dom, e.length);
    });
  },
      RN = O(NN, fr),
      AN = O(NN, " "),
      ON = function ON(e) {
    return function (t) {
      e.selection.setRng(t.toRange()), e.nodeChanged();
    };
  },
      TN = function TN(e) {
    var t = Mi.fromRangeStart(e.selection.getRng()),
        n = vn(e.getBody());

    if (e.selection.isCollapsed()) {
      var _o104 = O(sh, e),
          _r71 = Mi.fromRangeStart(e.selection.getRng());

      return qx(_o104, e.getBody(), _r71).bind(function (e) {
        return function (t) {
          return t.fold(function (t) {
            return yu(e.dom, Mi.before(t));
          }, function (e) {
            return Cu(e);
          }, function (e) {
            return wu(e);
          }, function (t) {
            return vu(e.dom, Mi.after(t));
          });
        };
      }(n)).map(function (o) {
        return function () {
          return function (e, t) {
            return function (n) {
              return Ip(e, n) ? RN(t) : AN(t);
            };
          }(n, t)(o).each(ON(e));
        };
      });
    }

    return I.none();
  },
      BN = function BN(e) {
    return Mt(At.browser.isFirefox() && e.selection.isEditable() && (t = e.dom, n = e.selection.getRng().startContainer, t.isEditable(t.getParent(n, "summary"))), function () {
      var t = vn(e.getBody());
      e.selection.isCollapsed() || e.getDoc().execCommand("Delete"), function (e, t) {
        return Ip(e, t) ? RN(t) : AN(t);
      }(t, Mi.fromRangeStart(e.selection.getRng())).each(ON(e));
    });
    var t, n;
  },
      DN = function DN(e) {
    return ic(e) ? [{
      keyCode: tf.TAB,
      action: IE(cS, e, !0)
    }, {
      keyCode: tf.TAB,
      shiftKey: !0,
      action: IE(cS, e, !1)
    }] : [];
  },
      PN = function PN(e) {
    if (e.addShortcut("Meta+P", "", "mcePrint"), D_(e), LC(e)) return Da(null);
    {
      var _t142 = Uk(e);

      return function (e) {
        e.on("keyup compositionstart", O(SE, e));
      }(e), function (e, t) {
        e.on("keydown", function (n) {
          n.isDefaultPrevented() || function (e, t, n) {
            var o = At.os.isMacOS() || At.os.isiOS();
            FE([{
              keyCode: tf.RIGHT,
              action: IE(RE, e, !0)
            }, {
              keyCode: tf.LEFT,
              action: IE(RE, e, !1)
            }, {
              keyCode: tf.UP,
              action: IE(AE, e, !1)
            }, {
              keyCode: tf.DOWN,
              action: IE(AE, e, !0)
            }].concat(_toConsumableArray(o ? [{
              keyCode: tf.UP,
              action: IE(TE, e, !1),
              metaKey: !0,
              shiftKey: !0
            }, {
              keyCode: tf.DOWN,
              action: IE(TE, e, !0),
              metaKey: !0,
              shiftKey: !0
            }] : []), [{
              keyCode: tf.RIGHT,
              action: IE(sS, e, !0)
            }, {
              keyCode: tf.LEFT,
              action: IE(sS, e, !1)
            }, {
              keyCode: tf.UP,
              action: IE(aS, e, !1)
            }, {
              keyCode: tf.DOWN,
              action: IE(aS, e, !0)
            }, {
              keyCode: tf.RIGHT,
              action: IE(zE, e, !0)
            }, {
              keyCode: tf.LEFT,
              action: IE(zE, e, !1)
            }, {
              keyCode: tf.UP,
              action: IE(jE, e, !1)
            }, {
              keyCode: tf.DOWN,
              action: IE(jE, e, !0)
            }, {
              keyCode: tf.RIGHT,
              action: IE(Ik, e, t, !0)
            }, {
              keyCode: tf.LEFT,
              action: IE(Ik, e, t, !1)
            }, {
              keyCode: tf.RIGHT,
              ctrlKey: !o,
              altKey: o,
              action: IE(zk, e, t)
            }, {
              keyCode: tf.LEFT,
              ctrlKey: !o,
              altKey: o,
              action: IE(jk, e, t)
            }, {
              keyCode: tf.UP,
              action: IE(PE, e, !1)
            }, {
              keyCode: tf.DOWN,
              action: IE(PE, e, !0)
            }]), n).each(function (e) {
              n.preventDefault();
            });
          }(e, t, n);
        });
      }(e, _t142), function (e, t) {
        var n = !1;
        e.on("keydown", function (o) {
          n = o.keyCode === tf.BACKSPACE, o.isDefaultPrevented() || function (e, t, n) {
            var o = n.keyCode === tf.BACKSPACE ? "deleteContentBackward" : "deleteContentForward";
            UE([{
              keyCode: tf.BACKSPACE,
              action: IE(mE, e)
            }, {
              keyCode: tf.BACKSPACE,
              action: IE(kx, e, !1)
            }, {
              keyCode: tf.DELETE,
              action: IE(kx, e, !0)
            }, {
              keyCode: tf.BACKSPACE,
              action: IE(px, e, !1)
            }, {
              keyCode: tf.DELETE,
              action: IE(px, e, !0)
            }, {
              keyCode: tf.BACKSPACE,
              action: IE(qk, e, t, !1)
            }, {
              keyCode: tf.DELETE,
              action: IE(qk, e, t, !0)
            }, {
              keyCode: tf.BACKSPACE,
              action: IE($h, e, !1)
            }, {
              keyCode: tf.DELETE,
              action: IE($h, e, !0)
            }, {
              keyCode: tf.BACKSPACE,
              action: IE(Ex, e, !1)
            }, {
              keyCode: tf.DELETE,
              action: IE(Ex, e, !0)
            }, {
              keyCode: tf.BACKSPACE,
              action: IE(rE, e, !1)
            }, {
              keyCode: tf.DELETE,
              action: IE(rE, e, !0)
            }, {
              keyCode: tf.BACKSPACE,
              action: IE(lx, e, !1)
            }, {
              keyCode: tf.DELETE,
              action: IE(lx, e, !0)
            }, {
              keyCode: tf.BACKSPACE,
              action: IE(sx, e, !1)
            }, {
              keyCode: tf.DELETE,
              action: IE(sx, e, !0)
            }, {
              keyCode: tf.BACKSPACE,
              action: IE(eE, e, !1)
            }, {
              keyCode: tf.DELETE,
              action: IE(eE, e, !0)
            }], n).filter(function (t) {
              return e.selection.isEditable();
            }).each(function (t) {
              n.preventDefault(), M_(e, o).isDefaultPrevented() || (t(), L_(e, o));
            });
          }(e, t, o);
        }), e.on("keyup", function (t) {
          t.isDefaultPrevented() || function (e, t, n) {
            var o = xt(),
                r = o.os,
                s = o.browser,
                a = r.isMacOS() ? [{
              keyCode: tf.BACKSPACE,
              altKey: !0,
              action: IE(nE, e)
            }, {
              keyCode: tf.DELETE,
              altKey: !0,
              action: IE(nE, e)
            }] : [{
              keyCode: tf.BACKSPACE,
              ctrlKey: !0,
              action: IE(nE, e)
            }, {
              keyCode: tf.DELETE,
              ctrlKey: !0,
              action: IE(nE, e)
            }];
            r.isMacOS() && n && a.push({
              keyCode: s.isFirefox() ? 224 : 91,
              action: IE(nE, e)
            }), FE([{
              keyCode: tf.BACKSPACE,
              action: IE(xx, e)
            }, {
              keyCode: tf.DELETE,
              action: IE(xx, e)
            }].concat(a), t);
          }(e, t, n), n = !1;
        });
      }(e, _t142), function (e) {
        var t = I.none();
        e.on("keydown", function (n) {
          n.keyCode === tf.ENTER && (wN && function (e) {
            if (!e.collapsed) return !1;
            var t = e.startContainer;

            if (Xo(t)) {
              var _n120 = /^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uD7B0-\uD7FF]$/,
                  _o105 = t.data.charAt(e.startOffset - 1);

              return _n120.test(_o105);
            }

            return !1;
          }(e.selection.getRng()) ? function (e) {
            t = I.some(e.selection.getBookmark()), e.undoManager.add();
          }(e) : xN(e, n));
        }), e.on("keyup", function (n) {
          n.keyCode === tf.ENTER && t.each(function () {
            return function (e, n) {
              e.undoManager.undo(), t.fold(E, function (t) {
                return e.selection.moveToBookmark(t);
              }), xN(e, n), t = I.none();
            }(e, n);
          });
        });
      }(e), function (e) {
        e.on("keydown", function (t) {
          t.isDefaultPrevented() || function (e, t) {
            UE([{
              keyCode: tf.SPACEBAR,
              action: IE(TN, e)
            }, {
              keyCode: tf.SPACEBAR,
              action: IE(BN, e)
            }], t).each(function (n) {
              t.preventDefault(), M_(e, "insertText", {
                data: " "
              }).isDefaultPrevented() || (n(), L_(e, "insertText", {
                data: " "
              }));
            });
          }(e, t);
        });
      }(e), function (e) {
        e.on("input", function (t) {
          t.isComposing || function (e) {
            var t = vn(e.getBody());
            e.selection.isCollapsed() && qp(t, Mi.fromRangeStart(e.selection.getRng())).each(function (t) {
              e.selection.setRng(t.toRange());
            });
          }(e);
        });
      }(e), function (e) {
        e.on("keydown", function (t) {
          t.isDefaultPrevented() || function (e, t) {
            FE(_toConsumableArray(DN(e)), t).each(function (e) {
              t.preventDefault();
            });
          }(e, t);
        });
      }(e), function (e, t) {
        e.on("keydown", function (n) {
          n.isDefaultPrevented() || function (e, t, n) {
            var o = At.os.isMacOS() || At.os.isiOS();
            FE([{
              keyCode: tf.END,
              action: IE(OE, e, !0)
            }, {
              keyCode: tf.HOME,
              action: IE(OE, e, !1)
            }].concat(_toConsumableArray(o ? [] : [{
              keyCode: tf.HOME,
              action: IE(TE, e, !1),
              ctrlKey: !0,
              shiftKey: !0
            }, {
              keyCode: tf.END,
              action: IE(TE, e, !0),
              ctrlKey: !0,
              shiftKey: !0
            }]), [{
              keyCode: tf.END,
              action: IE(HE, e, !0)
            }, {
              keyCode: tf.HOME,
              action: IE(HE, e, !1)
            }, {
              keyCode: tf.END,
              action: IE(Hk, e, !0, t)
            }, {
              keyCode: tf.HOME,
              action: IE(Hk, e, !1, t)
            }]), n).each(function (e) {
              n.preventDefault();
            });
          }(e, t, n);
        });
      }(e, _t142), function (e, t) {
        if (kN.os.isMacOS()) return;
        var n = Da(!1);
        e.on("keydown", function (t) {
          SN(t) && _N(n, e, !0);
        }), e.on("keyup", function (o) {
          o.isDefaultPrevented() || function (e, t, n) {
            FE([{
              keyCode: tf.PAGE_UP,
              action: IE(Hk, e, !1, t)
            }, {
              keyCode: tf.PAGE_DOWN,
              action: IE(Hk, e, !0, t)
            }], n);
          }(e, t, o), SN(o) && n.get() && (_N(n, e, !1), e.nodeChanged());
        });
      }(e, _t142), _t142;
    }
  };

  var LN =
  /*#__PURE__*/
  function () {
    function LN(e) {
      _classCallCheck(this, LN);

      var t;
      this.lastPath = [], this.editor = e;
      var n = this;
      "onselectionchange" in e.getDoc() || e.on("NodeChange click mouseup keyup focus", function (n) {
        var o = e.selection.getRng(),
            r = {
          startContainer: o.startContainer,
          startOffset: o.startOffset,
          endContainer: o.endContainer,
          endOffset: o.endOffset
        };
        "nodechange" !== n.type && Ef(r, t) || e.dispatch("SelectionChange"), t = r;
      }), e.on("contextmenu", function () {
        e.dispatch("SelectionChange");
      }), e.on("SelectionChange", function () {
        var t = e.selection.getStart(!0);
        t && nm(e) && !n.isSameElementPath(t) && e.dom.isChildOf(t, e.getBody()) && e.nodeChanged({
          selectionChange: !0
        });
      }), e.on("mouseup", function (t) {
        !t.isDefaultPrevented() && nm(e) && ("IMG" === e.selection.getNode().nodeName ? fg.setEditorTimeout(e, function () {
          e.nodeChanged();
        }) : e.nodeChanged());
      });
    }

    _createClass(LN, [{
      key: "nodeChanged",
      value: function nodeChanged() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = this.editor.selection;
        var n;

        if (this.editor.initialized && t && !xd(this.editor) && !this.editor.mode.isReadOnly()) {
          var _o106 = this.editor.getBody();

          n = t.getStart(!0) || _o106, n.ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(n, _o106) || (n = _o106);
          var _r72 = [];
          this.editor.dom.getParent(n, function (e) {
            return e === _o106 || (_r72.push(e), !1);
          }), this.editor.dispatch("NodeChange", _objectSpread({}, e, {
            element: n,
            parents: _r72
          }));
        }
      }
    }, {
      key: "isSameElementPath",
      value: function isSameElementPath(e) {
        var t;
        var n = this.editor,
            o = oe(n.dom.getParents(e, M, n.getBody()));

        if (o.length === this.lastPath.length) {
          for (t = o.length; t >= 0 && o[t] === this.lastPath[t]; t--) {
            ;
          }

          if (-1 === t) return this.lastPath = o, !0;
        }

        return this.lastPath = o, !1;
      }
    }]);

    return LN;
  }();

  var MN = ti("image"),
      IN = ti("event"),
      FN = function FN(e) {
    return function (t) {
      t[IN] = e;
    };
  },
      UN = FN(0),
      zN = FN(2),
      jN = FN(1),
      HN = (0, function (e) {
    var t = e;
    return I.from(t[IN]).exists(function (e) {
      return 0 === e;
    });
  });

  var $N = ti("mode"),
      VN = function VN(e) {
    return function (t) {
      t[$N] = e;
    };
  },
      qN = function qN(e, t) {
    return VN(t)(e);
  },
      WN = VN(0),
      KN = VN(2),
      GN = VN(1),
      YN = function YN(e) {
    return function (t) {
      var n = t;
      return I.from(n[$N]).exists(function (t) {
        return t === e;
      });
    };
  },
      XN = YN(0),
      QN = YN(1),
      JN = ["none", "copy", "link", "move"],
      ZN = ["none", "copy", "copyLink", "copyMove", "link", "linkMove", "move", "all", "uninitialized"],
      eR = function eR() {
    var e = new window.DataTransfer();
    var t = "move",
        n = "all";
    var o = {
      get dropEffect() {
        return t;
      },

      set dropEffect(e) {
        H(JN, e) && (t = e);
      },

      get effectAllowed() {
        return n;
      },

      set effectAllowed(e) {
        HN(o) && H(ZN, e) && (n = e);
      },

      get items() {
        return function (e, t) {
          return _objectSpread({}, t, {
            get length() {
              return t.length;
            },

            add: function add(n, o) {
              if (XN(e)) {
                if (!m(n)) return t.add(n);
                if (!v(o)) return t.add(n, o);
              }

              return null;
            },
            remove: function remove(n) {
              XN(e) && t.remove(n);
            },
            clear: function clear() {
              XN(e) && t.clear();
            }
          });
        }(o, e.items);
      },

      get files() {
        return QN(o) ? Object.freeze({
          length: 0,
          item: function item(e) {
            return null;
          }
        }) : e.files;
      },

      get types() {
        return e.types;
      },

      setDragImage: function setDragImage(t, n, r) {
        var s;
        XN(o) && (s = {
          image: t,
          x: n,
          y: r
        }, o[MN] = s, e.setDragImage(t, n, r));
      },
      getData: function getData(t) {
        return QN(o) ? "" : e.getData(t);
      },
      setData: function setData(t, n) {
        XN(o) && e.setData(t, n);
      },
      clearData: function clearData(t) {
        XN(o) && e.clearData(t);
      }
    };
    return WN(o), o;
  },
      tR = function tR(e, t) {
    return e.setData("text/html", t);
  },
      nR = "x-tinymce/html",
      oR = N(nR),
      rR = "\x3c!-- " + nR + " --\x3e",
      sR = function sR(e) {
    return rR + e;
  },
      aR = function aR(e) {
    return -1 !== e.indexOf(rR);
  },
      iR = "%MCEPASTEBIN%",
      lR = function lR(e) {
    return e.dom.get("mcepastebin");
  },
      dR = function dR(e) {
    return C(e) && "mcepastebin" === e.id;
  },
      cR = function cR(e) {
    return e === iR;
  },
      uR = function uR(e, t) {
    return Dt.each(t, function (t) {
      e = u(t, RegExp) ? e.replace(t, "") : e.replace(t[0], t[1]);
    }), e;
  },
      mR = function mR(e) {
    return uR(e, [/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi, /<!--StartFragment-->|<!--EndFragment-->/g, [/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g, function (e, t, n) {
      return t || n ? fr : " ";
    }], /<br class="Apple-interchange-newline">/g, /<br>$/i]);
  },
      fR = function fR(e, t) {
    return {
      content: e,
      cancelled: t
    };
  },
      gR = function gR(e, t) {
    return e.insertContent(t, {
      merge: Wd(e),
      paste: !0
    }), !0;
  },
      pR = function pR(e) {
    return /^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(e);
  },
      hR = function hR(e, t, n) {
    return !(e.selection.isCollapsed() || !pR(t)) && function (e, t, n) {
      return e.undoManager.extra(function () {
        n(e, t);
      }, function () {
        e.execCommand("mceInsertLink", !1, t);
      }), !0;
    }(e, t, n);
  },
      bR = function bR(e, t, n) {
    return !!function (e, t) {
      return pR(t) && $(ac(e), function (e) {
        return $e(t.toLowerCase(), ".".concat(e.toLowerCase()));
      });
    }(e, t) && function (e, t, n) {
      return e.undoManager.extra(function () {
        n(e, t);
      }, function () {
        e.insertContent('<img src="' + t + '">');
      }), !0;
    }(e, t, n);
  },
      vR = function (e) {
    var t = 0;
    return function () {
      return "mceclip" + t++;
    };
  }(),
      yR = function yR(e) {
    var t = eR();
    return tR(t, e), KN(t), t;
  },
      CR = function CR(e, t, n, o, r) {
    var s = function (e, t, n) {
      return function (e, t, n) {
        var o = function (e, t, n) {
          return e.dispatch("PastePreProcess", {
            content: t,
            internal: n
          });
        }(e, t, n),
            r = function (e, t) {
          var n = nC({
            sanitize: rc(e)
          }, e.schema);
          n.addNodeFilter("meta", function (e) {
            Dt.each(e, function (e) {
              e.remove();
            });
          });
          var o = n.parse(t, {
            forced_root_block: !1,
            isRootContent: !0
          });
          return Yg({
            validate: !0
          }, e.schema).serialize(o);
        }(e, o.content);

        return e.hasEventListeners("PastePostProcess") && !o.isDefaultPrevented() ? function (e, t, n) {
          var o = e.dom.create("div", {
            style: "display:none"
          }, t),
              r = function (e, t, n) {
            return e.dispatch("PastePostProcess", {
              node: t,
              internal: n
            });
          }(e, o, n);

          return fR(r.node.innerHTML, r.isDefaultPrevented());
        }(e, r, n) : fR(r, o.isDefaultPrevented());
      }(e, t, n);
    }(e, t, n);

    if (!s.cancelled) {
      var _t143 = s.content,
          _n121 = function _n121() {
        return function (e, t, n) {
          n || !Kd(e) ? gR(e, t) : function (e, t) {
            Dt.each([hR, bR, gR], function (n) {
              return !n(e, t, gR);
            });
          }(e, t);
        }(e, _t143, o);
      };

      r ? M_(e, "insertFromPaste", {
        dataTransfer: yR(_t143)
      }).isDefaultPrevented() || (_n121(), L_(e, "insertFromPaste")) : _n121();
    }
  },
      wR = function wR(e, t, n, o) {
    var r = n || aR(t);
    CR(e, function (e) {
      return e.replace(rR, "");
    }(t), r, !1, o);
  },
      xR = function xR(e, t, n) {
    var o = e.dom.encode(t).replace(/\r\n/g, "\n"),
        r = function (e, t, n) {
      var o = e.split(/\n\n/),
          r = function (e, t) {
        var n = "<" + e;
        var o = Ce(t, function (e, t) {
          return t + '="' + Qs.encodeAllRaw(e) + '"';
        });
        return o.length && (n += " " + o.join(" ")), n + ">";
      }(t, n),
          s = "</" + t + ">",
          a = V(o, function (e) {
        return e.split(/\n/).join("<br />");
      });

      return 1 === a.length ? a[0] : V(a, function (e) {
        return r + e + s;
      }).join("");
    }(cs(o, Yd(e)), Rl(e), Al(e));

    CR(e, r, !1, !0, n);
  },
      kR = function kR(e) {
    var t = {};
    if (e && e.types) for (var _n122 = 0; _n122 < e.types.length; _n122++) {
      var _o107 = e.types[_n122];

      try {
        t[_o107] = e.getData(_o107);
      } catch (e) {
        t[_o107] = "";
      }
    }
    return t;
  },
      ER = function ER(e, t) {
    return t in e && e[t].length > 0;
  },
      SR = function SR(e) {
    return ER(e, "text/html") || ER(e, "text/plain");
  },
      _R = function _R(e, t, n) {
    var o = "paste" === t.type ? t.clipboardData : t.dataTransfer;
    var r;

    if (zd(e) && o) {
      var _s47 = function (e, t) {
        var n = t.items ? te(ce(t.items), function (e) {
          return "file" === e.kind ? [e.getAsFile()] : [];
        }) : [],
            o = t.files ? ce(t.files) : [];
        return G(n.length > 0 ? n : o, function (e) {
          var t = ac(e);
          return function (e) {
            return He(e.type, "image/") && $(t, function (t) {
              return function (e) {
                var t = e.toLowerCase(),
                    n = {
                  jpg: "jpeg",
                  jpe: "jpeg",
                  jfi: "jpeg",
                  jif: "jpeg",
                  jfif: "jpeg",
                  pjpeg: "jpeg",
                  pjp: "jpeg",
                  svg: "svg+xml"
                };
                return Dt.hasOwn(n, t) ? "image/" + n[t] : "image/" + t;
              }(t) === e.type;
            });
          };
        }(e));
      }(e, o);

      if (_s47.length > 0) return t.preventDefault(), (r = _s47, Promise.all(V(r, function (e) {
        return Dv(e).then(function (t) {
          return {
            file: e,
            uri: t
          };
        });
      }))).then(function (t) {
        n && e.selection.setRng(n), q(t, function (t) {
          (function (e, t) {
            Tv(t.uri).each(function (_ref15) {
              var n = _ref15.data,
                  o = _ref15.type,
                  r = _ref15.base64Encoded;
              var s = r ? n : btoa(n),
                  a = t.file,
                  i = e.editorUpload.blobCache,
                  l = i.getByData(s, o),
                  d = null != l ? l : function (e, t, n, o) {
                var r = vR(),
                    s = Ml(e) && C(n.name),
                    a = s ? function (e, t) {
                  var n = t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);
                  return C(n) ? e.dom.encode(n[1]) : void 0;
                }(e, n.name) : r,
                    i = s ? n.name : void 0,
                    l = t.create(r, n, o, a, i);
                return t.add(l), l;
              }(e, i, a, s);
              wR(e, "<img src=\"".concat(d.blobUri(), "\">"), !1, !0);
            });
          })(e, t);
        });
      }), !0;
    }

    return !1;
  },
      NR = function NR(e, t, n, o, r) {
    var s = mR(n);

    var a = ER(t, oR()) || aR(n),
        i = !a && function (e) {
      return !/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e);
    }(s),
        l = pR(s);

    (cR(s) || !s.length || i && !l) && (o = !0), (o || l) && (s = ER(t, "text/plain") && i ? t["text/plain"] : function (e) {
      var t = ca(),
          n = nC({}, t);
      var o = "";

      var r = t.getVoidElements(),
          s = Dt.makeMap("script noscript style textarea video audio iframe object", " "),
          a = t.getBlockElements(),
          i = function i(e) {
        var n = e.name,
            l = e;

        if ("br" !== n) {
          if ("wbr" !== n) if (r[n] && (o += " "), s[n]) o += " ";else {
            if (3 === e.type && (o += e.value), !(e.name in t.getVoidElements())) {
              var _t144 = e.firstChild;
              if (_t144) do {
                i(_t144);
              } while (_t144 = _t144.next);
            }

            a[n] && l.next && (o += "\n", "p" === n && (o += "\n"));
          }
        } else o += "\n";
      };

      return e = uR(e, [/<!\[[^\]]+\]>/g]), i(n.parse(e)), o;
    }(s)), cR(s) || (o ? xR(e, s, r) : wR(e, s, a, r));
  },
      RR = function RR(e, t, n) {
    (function (e, t, n) {
      var o;
      e.on("keydown", function (e) {
        (function (e) {
          return tf.metaKeyPressed(e) && 86 === e.keyCode || e.shiftKey && 45 === e.keyCode;
        })(e) && !e.isDefaultPrevented() && (o = e.shiftKey && 86 === e.keyCode);
      }), e.on("paste", function (r) {
        if (r.isDefaultPrevented() || function (e) {
          var t, n;
          return At.os.isAndroid() && 0 === (null === (n = null === (t = e.clipboardData) || void 0 === t ? void 0 : t.items) || void 0 === n ? void 0 : n.length);
        }(r)) return;
        var s = "text" === n.get() || o;
        o = !1;
        var a = kR(r.clipboardData);
        !SR(a) && _R(e, r, t.getLastRng() || e.selection.getRng()) || (ER(a, "text/html") ? (r.preventDefault(), NR(e, a, a["text/html"], s, !0)) : ER(a, "text/plain") && ER(a, "text/uri-list") ? (r.preventDefault(), NR(e, a, a["text/plain"], s, !0)) : (t.create(), fg.setEditorTimeout(e, function () {
          var n = t.getHtml();
          t.remove(), NR(e, a, n, s, !1);
        }, 0)));
      });
    })(e, t, n), function (e) {
      var t = function t(e) {
        return He(e, "webkit-fake-url");
      },
          n = function n(e) {
        return He(e, "data:");
      };

      e.parser.addNodeFilter("img", function (o, r, s) {
        if (!zd(e) && function (e) {
          var t;
          return !0 === (null === (t = e.data) || void 0 === t ? void 0 : t.paste);
        }(s)) {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = o[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _r73 = _step5.value;

              var _o108 = _r73.attr("src");

              m(_o108) && !_r73.attr("data-mce-object") && _o108 !== At.transparentSrc && (t(_o108) || !Xd(e) && n(_o108)) && _r73.remove();
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
      });
    }(e);
  },
      AR = function AR(e, t, n, o) {
    (function (e, t, n) {
      if (!e) return !1;

      try {
        return e.clearData(), e.setData("text/html", t), e.setData("text/plain", n), e.setData(oR(), t), !0;
      } catch (e) {
        return !1;
      }
    })(e.clipboardData, t.html, t.text) ? (e.preventDefault(), o()) : n(t.html, o);
  },
      OR = function OR(e) {
    return function (t, n) {
      var o = e.dom,
          r = e.selection,
          s = o.create("div", {
        contenteditable: "false",
        "data-mce-bogus": "all"
      }),
          a = o.create("div", {
        contenteditable: "true"
      }, t);
      o.setStyles(s, {
        position: "fixed",
        top: "0",
        left: "-3000px",
        width: "1000px",
        overflow: "hidden"
      }), s.appendChild(a), o.add(e.getBody(), s);
      var i = r.getRng();
      a.focus();
      var l = o.createRng();
      l.selectNodeContents(a), r.setRng(l), fg.setEditorTimeout(e, function () {
        r.setRng(i), o.remove(s), n();
      }, 0);
    };
  },
      TR = function TR(e) {
    return {
      html: sR(e.selection.getContent({
        contextual: !0
      })),
      text: e.selection.getContent({
        format: "text"
      })
    };
  },
      BR = function BR(e) {
    return !e.selection.isCollapsed() || function (e) {
      return !!e.dom.getParent(e.selection.getStart(), "td[data-mce-selected],th[data-mce-selected]", e.getBody());
    }(e);
  },
      DR = function DR(e, t) {
    var n, o;
    return Pf.getCaretRangeFromPoint(null !== (n = t.clientX) && void 0 !== n ? n : 0, null !== (o = t.clientY) && void 0 !== o ? o : 0, e.getDoc());
  },
      PR = function PR(e, t) {
    e.focus(), t && e.selection.setRng(t);
  },
      LR = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
      MR = function MR(e) {
    return Dt.trim(e).replace(LR, Ku).toLowerCase();
  },
      IR = function IR(e, t, n) {
    var o = Vd(e);
    if (n || "all" === o || !qd(e)) return t;
    var r = o ? o.split(/[, ]/) : [];

    if (r && "none" !== o) {
      var _n123 = e.dom,
          _o109 = e.selection.getNode();

      t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, function (e, t, s, a) {
        var i = _n123.parseStyle(_n123.decode(s)),
            l = {};

        for (var _e153 = 0; _e153 < r.length; _e153++) {
          var _t145 = i[r[_e153]];

          var _s48 = _t145,
              _a26 = _n123.getStyle(_o109, r[_e153], !0);

          /color/.test(r[_e153]) && (_s48 = MR(_s48), _a26 = MR(_a26)), _a26 !== _s48 && (l[r[_e153]] = _t145);
        }

        var d = _n123.serializeStyle(l, "span");

        return d ? t + ' style="' + d + '"' + a : t + a;
      });
    } else t = t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");

    return t = t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, function (e, t, n, o) {
      return t + ' style="' + n + '"' + o;
    }), t;
  },
      FR = function FR(e) {
    var t = Da(!1),
        n = Da(Gd(e) ? "text" : "html"),
        o = function (e) {
      var t = Da(null);
      return {
        create: function create() {
          return function (e, t) {
            var n = e.dom,
                o = e.selection,
                r = e.getBody();
            t.set(o.getRng());
            var s = n.add(e.getBody(), "div", {
              id: "mcepastebin",
              "class": "mce-pastebin",
              contentEditable: !0,
              "data-mce-bogus": "all",
              style: "position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"
            }, iR);
            At.browser.isFirefox() && n.setStyle(s, "left", "rtl" === n.getStyle(r, "direction", !0) ? 65535 : -65535), n.bind(s, "beforedeactivate focusin focusout", function (e) {
              e.stopPropagation();
            }), s.focus(), o.select(s, !0);
          }(e, t);
        },
        remove: function remove() {
          return function (e, t) {
            var n = e.dom;

            if (lR(e)) {
              var _o110;

              var _r74 = t.get();

              for (; _o110 = lR(e);) {
                n.remove(_o110), n.unbind(_o110);
              }

              _r74 && e.selection.setRng(_r74);
            }

            t.set(null);
          }(e, t);
        },
        getEl: function getEl() {
          return lR(e);
        },
        getHtml: function getHtml() {
          return function (e) {
            var t = e.dom,
                n = function n(e, _n124) {
              e.appendChild(_n124), t.remove(_n124, !0);
            },
                _G = G(e.getBody().childNodes, dR),
                _G2 = _toArray(_G),
                o = _G2[0],
                r = _G2.slice(1);

            q(r, function (e) {
              n(o, e);
            });
            var s = t.select("div[id=mcepastebin]", o);

            for (var _e154 = s.length - 1; _e154 >= 0; _e154--) {
              var _r75 = t.create("div");

              o.insertBefore(_r75, s[_e154]), n(_r75, s[_e154]);
            }

            return o ? o.innerHTML : "";
          }(e);
        },
        getLastRng: t.get
      };
    }(e);

    (function (e) {
      (At.browser.isChromium() || At.browser.isSafari()) && function (e, t) {
        e.on("PastePreProcess", function (n) {
          n.content = t(e, n.content, n.internal);
        });
      }(e, IR);
    })(e), function (e, t) {
      e.addCommand("mceTogglePlainTextPaste", function () {
        (function (e, t) {
          "text" === t.get() ? (t.set("html"), ef(e, !1)) : (t.set("text"), ef(e, !0)), e.focus();
        })(e, t);
      }), e.addCommand("mceInsertClipboardContent", function (t, n) {
        n.html && wR(e, n.html, n.internal, !1), n.text && xR(e, n.text, !1);
      });
    }(e, n), function (e) {
      var t = function t(_t146) {
        return function (n) {
          _t146(e, n);
        };
      },
          n = jd(e);

      w(n) && e.on("PastePreProcess", t(n));
      var o = Hd(e);
      w(o) && e.on("PastePostProcess", t(o));
    }(e), e.on("PreInit", function () {
      (function (e) {
        e.on("cut", function (e) {
          return function (t) {
            !t.isDefaultPrevented() && BR(e) && AR(t, TR(e), OR(e), function () {
              if (At.browser.isChromium() || At.browser.isFirefox()) {
                var _t147 = e.selection.getRng();

                fg.setEditorTimeout(e, function () {
                  e.selection.setRng(_t147), e.execCommand("Delete");
                }, 0);
              } else e.execCommand("Delete");
            });
          };
        }(e)), e.on("copy", function (e) {
          return function (t) {
            !t.isDefaultPrevented() && BR(e) && AR(t, TR(e), OR(e), E);
          };
        }(e));
      })(e), function (e, t) {
        Ud(e) && e.on("dragend dragover draggesture dragdrop drop drag", function (e) {
          e.preventDefault(), e.stopPropagation();
        }), zd(e) || e.on("drop", function (e) {
          var t = e.dataTransfer;
          t && function (e) {
            return $(e.files, function (e) {
              return /^image\//.test(e.type);
            });
          }(t) && e.preventDefault();
        }), e.on("drop", function (n) {
          if (n.isDefaultPrevented()) return;
          var o = DR(e, n);
          if (y(o)) return;
          var r = kR(n.dataTransfer),
              s = ER(r, oR());
          if ((!SR(r) || function (e) {
            var t = e["text/plain"];
            return !!t && 0 === t.indexOf("file://");
          }(r)) && _R(e, n, o)) return;

          var a = r[oR()],
              i = a || r["text/html"] || r["text/plain"],
              l = function (e, t, n, o) {
            var r = e.getParent(n, function (e) {
              return Ns(t, e);
            });

            if (r && ke(o, "text/html")) {
              var _e155 = new DOMParser().parseFromString(o["text/html"], "text/html").body;
              return !h(_e155.querySelector(r.nodeName.toLowerCase()));
            }

            return !1;
          }(e.dom, e.schema, o.startContainer, r);

          t.get() && !l || i && (n.preventDefault(), fg.setEditorTimeout(e, function () {
            e.undoManager.transact(function () {
              a && e.execCommand("Delete"), PR(e, o);
              var t = mR(i);
              r["text/html"] ? wR(e, t, s, !0) : xR(e, t, !0);
            });
          }));
        }), e.on("dragstart", function (e) {
          t.set(!0);
        }), e.on("dragover dragend", function (n) {
          zd(e) && !t.get() && (n.preventDefault(), PR(e, DR(e, n))), "dragend" === n.type && t.set(!1);
        });
      }(e, t), RR(e, o, n);
    });
  },
      UR = function UR(e) {
    return Br(vn(e));
  },
      zR = function zR(e, t) {
    var n = t.getNode();
    v(n) || e.selection.setCursorLocation(n, t.offset());
  },
      jR = function jR(e, t) {
    var n;
    return 0 === e.startOffset && e.endOffset === (null === (n = t.textContent) || void 0 === n ? void 0 : n.length);
  },
      HR = xt(),
      $R = HR.browser,
      VR = HR.os,
      qR = $R.isSafari(),
      WR = VR.isMacOS() || VR.isiOS(),
      KR = function KR(e, t) {
    return C(e.getParent(t.container(), "details"));
  },
      GR = function GR(e, t) {
    var n = e.dom.getParent(t.container(), "details");

    if (n && !n.open) {
      var _t148 = e.dom.select("summary", n)[0];
      _t148 && wu(_t148).each(function (t) {
        return zR(e, t);
      });
    } else zR(e, t);
  },
      YR = function YR(e, t, n) {
    var o = e.selection,
        r = o.getNode(),
        s = o.getRng(),
        a = n.keyCode === tf.BACKSPACE,
        i = n.keyCode === tf.DELETE,
        l = e.selection.isCollapsed(),
        d = Mi.fromRangeStart(s),
        c = e.getBody();
    return !((l || !function (e, t) {
      var n = t.startSummary.exists(function (t) {
        return t.contains(e.startContainer);
      }),
          o = t.startSummary.exists(function (t) {
        return t.contains(e.endContainer);
      }),
          r = t.startDetails.forall(function (e) {
        return t.endDetails.forall(function (t) {
          return e !== t;
        });
      });
      return (n || o) && !(n && o) || r;
    }(s, t)) && !(l && a && function (e, t) {
      return t.startSummary.exists(function (t) {
        return function (e, t) {
          return Cu(t).exists(function (t) {
            return t.isEqual(e);
          });
        }(e, t);
      });
    }(d, t)) && !(l && i && function (e, t) {
      return t.startSummary.exists(function (t) {
        return function (e, t) {
          return wu(t).exists(function (n) {
            return nr(n.getNode()) && yu(t, n).exists(function (t) {
              return t.isEqual(e);
            }) || n.isEqual(e);
          });
        }(e, t);
      });
    }(d, t)) && !(l && a && function (e, t) {
      return t.startDetails.exists(function (n) {
        return yu(n, e).forall(function (n) {
          return t.startSummary.exists(function (t) {
            return !t.contains(e.container()) && t.contains(n.container());
          });
        });
      });
    }(d, t)) && !(l && i && function (e, t, n) {
      return n.startDetails.exists(function (n) {
        return vu(e, t).forall(function (e) {
          return !n.contains(e.container());
        });
      });
    }(c, d, t)) && (!qR || !ur(r) || (!l && jR(s, r) || hh(i, d, r) ? UR(r) : e.undoManager.transact(function () {
      var t = o.getSel();

      var _ref16 = null != t ? t : {},
          s = _ref16.anchorNode,
          i = _ref16.anchorOffset,
          d = _ref16.focusNode,
          c = _ref16.focusOffset;

      var u = function u() {
        C(s) && C(i) && C(d) && C(c) && (null == t || t.setBaseAndExtent(s, i, d, c));
      },
          m = function m(e, t) {
        q(e.childNodes, function (e) {
          sm(e) && t.appendChild(e);
        });
      },
          f = e.dom.create("span", {
        "data-mce-bogus": "all"
      });

      m(r, f), r.appendChild(f), u(), l && (WR && (n.altKey || a && n.metaKey) || !WR && n.ctrlKey) && (null == t || t.modify("extend", a ? "left" : "right", n.metaKey ? "line" : "word")), !o.isCollapsed() && jR(o.getRng(), f) ? UR(r) : (e.execCommand(a ? "Delete" : "ForwardDelete"), s = null == t ? void 0 : t.anchorNode, i = null == t ? void 0 : t.anchorOffset, d = null == t ? void 0 : t.focusNode, c = null == t ? void 0 : t.focusOffset, m(f, r), u()), e.dom.remove(f);
    }), 0)));
  },
      XR = function XR(e) {
    (function (e) {
      e.on("click", function (t) {
        e.dom.getParent(t.target, "details") && t.preventDefault();
      });
    })(e), function (e) {
      e.parser.addNodeFilter("details", function (t) {
        var n = lc(e);
        q(t, function (e) {
          "expanded" === n ? e.attr("open", "open") : "collapsed" === n && e.attr("open", null);
        });
      }), e.serializer.addNodeFilter("details", function (t) {
        var n = dc(e);
        q(t, function (e) {
          "expanded" === n ? e.attr("open", "open") : "collapsed" === n && e.attr("open", null);
        });
      });
    }(e), function (e) {
      e.on("keydown", function (t) {
        t.keyCode !== tf.BACKSPACE && t.keyCode !== tf.DELETE || function (e, t) {
          var n = I.from(e.getParent(t.startContainer, "details")),
              o = I.from(e.getParent(t.endContainer, "details"));

          if (n.isSome() || o.isSome()) {
            var _t149 = n.bind(function (t) {
              return I.from(e.select("summary", t)[0]);
            });

            return I.some({
              startSummary: _t149,
              startDetails: n,
              endDetails: o
            });
          }

          return I.none();
        }(e.dom, e.selection.getRng()).fold(function () {
          (function (e, t) {
            var n = e.dom,
                o = e.selection,
                r = e.getBody();

            if (e.selection.isCollapsed()) {
              var _s49 = Mi.fromRangeStart(o.getRng()),
                  _a27 = n.getParent(_s49.container(), n.isBlock);

              if (_a27 && n.isEmpty(_a27)) if (h(_a27.nextSibling)) {
                var _o111 = yu(r, _s49).filter(function (e) {
                  return KR(n, e);
                });

                if (_o111.isSome()) return _o111.each(function (n) {
                  t || GR(e, n);
                }), !0;
              } else if (h(_a27.previousSibling) && vu(r, _s49).filter(function (e) {
                return KR(n, e);
              })) return !0;
              return pu(t, r, _s49).fold(L, function (o) {
                return !!KR(n, o) && (_a27 && n.isEmpty(_a27) && e.dom.remove(_a27), t || GR(e, o), !0);
              });
            }

            return !1;
          })(e, t.keyCode === tf.DELETE) && t.preventDefault();
        }, function (n) {
          YR(e, n, t) && t.preventDefault();
        });
      });
    }(e);
  },
      QR = nr,
      JR = Xo,
      ZR = function ZR(e) {
    return sr(e.dom);
  },
      eA = function eA(e) {
    return function (t) {
      return kn(vn(e), t);
    };
  },
      tA = function tA(e, t) {
    return Qn(vn(e), ZR, eA(t));
  },
      nA = function nA(e, t, n) {
    var o = new Fo(e, t),
        r = n ? o.next.bind(o) : o.prev.bind(o);
    var s = e;

    for (var _t150 = n ? e : r(); _t150 && !QR(_t150); _t150 = r()) {
      os(_t150) && (s = _t150);
    }

    return s;
  },
      oA = function oA(e) {
    var t = function (e, t) {
      var n = Mi.fromRangeStart(e).getNode(),
          o = function (e, t) {
        return Qn(vn(e), function (e) {
          return function (e) {
            return rr(e.dom);
          }(e) || Cr(e);
        }, eA(t)).getOr(vn(t)).dom;
      }(n, t),
          r = nA(n, o, !1),
          s = nA(n, o, !0),
          a = document.createRange();

      return tA(r, o).fold(function () {
        JR(r) ? a.setStart(r, 0) : a.setStartBefore(r);
      }, function (e) {
        return a.setStartBefore(e.dom);
      }), tA(s, o).fold(function () {
        JR(s) ? a.setEnd(s, s.data.length) : a.setEndAfter(s);
      }, function (e) {
        return a.setEndAfter(e.dom);
      }), a;
    }(e.selection.getRng(), e.getBody());

    e.selection.setRng(rb(t));
  };

  var rA;
  !function (e) {
    e.Before = "before", e.After = "after";
  }(rA || (rA = {}));

  var sA = function sA(e, t) {
    return Math.abs(e.left - t);
  },
      aA = function aA(e, t) {
    return Math.abs(e.right - t);
  },
      iA = function iA(e, t) {
    return function (e) {
      return X(e, function (e, t) {
        return e.fold(function () {
          return I.some(t);
        }, function (e) {
          var n = Math.min(t.left, e.left),
              o = Math.min(t.top, e.top),
              r = Math.max(t.right, e.right),
              s = Math.max(t.bottom, e.bottom);
          return I.some({
            top: o,
            right: r,
            bottom: s,
            left: n,
            width: r - n,
            height: s - o
          });
        });
      }, I.none());
    }(G(e, function (e) {
      return (n = t) >= (o = e).top && n <= o.bottom;
      var n, o;
    })).fold(function () {
      return [[], e];
    }, function (t) {
      var _K2 = K(e, function (e) {
        return function (e, t) {
          var n = function (e, t) {
            return Math.max(0, Math.min(e.bottom, t.bottom) - Math.max(e.top, t.top));
          }(e, t) / Math.min(e.height, t.height);

          return function (e, t) {
            return e.top < t.bottom && e.bottom > t.top;
          }(e, t) && n > .5;
        }(e, t);
      }),
          n = _K2.pass,
          o = _K2.fail;

      return [n, o];
    });
  },
      lA = function lA(e, t, n) {
    return t > e.left && t < e.right ? 0 : Math.min(Math.abs(e.left - t), Math.abs(e.right - t));
  },
      dA = function dA(e, t, n) {
    var o = function o(e) {
      return os(e.node) ? I.some(e) : jo(e.node) ? dA(ce(e.node.childNodes), t, n) : I.none();
    },
        r = function r(e, _r76) {
      var s = ae(e, function (e, o) {
        return _r76(e, t, n) - _r76(o, t, n);
      });
      return function (e, r) {
        if (e.length >= 2) {
          var _s50 = o(e[0]).getOr(e[0]),
              _a28 = o(e[1]).getOr(e[1]);

          if (Math.abs(r(_s50, t, n) - r(_a28, t, n)) < 2) {
            if (Xo(_s50.node)) return I.some(_s50);
            if (Xo(_a28.node)) return I.some(_a28);
          }
        }

        return I.none();
      }(s, _r76).orThunk(function () {
        return ue(s, o);
      });
    },
        _iA = iA(yk(e), n),
        _iA2 = _slicedToArray(_iA, 2),
        s = _iA2[0],
        a = _iA2[1],
        _K3 = K(a, function (e) {
      return e.top < n;
    }),
        i = _K3.pass,
        l = _K3.fail;

    return r(s, lA).orThunk(function () {
      return r(l, gi);
    }).orThunk(function () {
      return r(i, gi);
    });
  },
      cA = function cA(e, t, n) {
    return function (e, t, n) {
      var o = vn(e),
          r = _n(o),
          s = yn(r, t, n).filter(function (e) {
        return En(o, e);
      }).getOr(o);

      return function (e, t, n, o) {
        var r = function r(t, s) {
          var a = G(t.dom.childNodes, T(function (e) {
            return jo(e) && e.classList.contains("mce-drag-container");
          }));
          return s.fold(function () {
            return dA(a, n, o);
          }, function (e) {
            var t = G(a, function (t) {
              return t !== e.dom;
            });
            return dA(t, n, o);
          }).orThunk(function () {
            return (kn(t, e) ? I.none() : An(t)).bind(function (e) {
              return r(e, I.some(t));
            });
          });
        };

        return r(t, I.none());
      }(o, s, t, n);
    }(e, t, n).filter(function (e) {
      return Sc(e.node);
    }).map(function (e) {
      return function (e, t) {
        return {
          node: e.node,
          position: sA(e, t) < aA(e, t) ? rA.Before : rA.After
        };
      }(e, t);
    });
  },
      uA = function uA(e) {
    var t, n;
    var o = e.getBoundingClientRect(),
        r = e.ownerDocument,
        s = r.documentElement,
        a = r.defaultView;
    return {
      top: o.top + (null !== (t = null == a ? void 0 : a.scrollY) && void 0 !== t ? t : 0) - s.clientTop,
      left: o.left + (null !== (n = null == a ? void 0 : a.scrollX) && void 0 !== n ? n : 0) - s.clientLeft
    };
  },
      mA = function mA(e) {
    return {
      target: e,
      srcElement: e
    };
  },
      fA = function fA(e, t, n, o) {
    var r = function (e, t) {
      var n = function (e) {
        var t = eR(),
            n = function (e) {
          var t = e;
          return I.from(t[$N]);
        }(e);

        return KN(e), UN(t), t.dropEffect = e.dropEffect, t.effectAllowed = e.effectAllowed, function (e) {
          var t = e;
          return I.from(t[MN]);
        }(e).each(function (e) {
          return t.setDragImage(e.image, e.x, e.y);
        }), q(e.types, function (n) {
          "Files" !== n && t.setData(n, e.getData(n));
        }), q(e.files, function (e) {
          return t.items.add(e);
        }), function (e) {
          var t = e;
          return I.from(t[IN]);
        }(e).each(function (e) {
          (function (e, t) {
            FN(t)(e);
          })(t, e);
        }), n.each(function (n) {
          qN(e, n), qN(t, n);
        }), t;
      }(e);

      return "dragstart" === t ? (UN(n), WN(n)) : "drop" === t ? (zN(n), KN(n)) : (jN(n), GN(n)), n;
    }(n, e);

    return v(o) ? function (e, t, n) {
      var o = B("Function not supported on simulated event.");
      return _objectSpread({
        bubbles: !0,
        cancelBubble: !1,
        cancelable: !0,
        composed: !1,
        currentTarget: null,
        defaultPrevented: !1,
        eventPhase: 0,
        isTrusted: !0,
        returnValue: !1,
        timeStamp: 0,
        type: e,
        composedPath: o,
        initEvent: o,
        preventDefault: E,
        stopImmediatePropagation: E,
        stopPropagation: E,
        AT_TARGET: window.Event.AT_TARGET,
        BUBBLING_PHASE: window.Event.BUBBLING_PHASE,
        CAPTURING_PHASE: window.Event.CAPTURING_PHASE,
        NONE: window.Event.NONE,
        altKey: !1,
        button: 0,
        buttons: 0,
        clientX: 0,
        clientY: 0,
        ctrlKey: !1,
        metaKey: !1,
        movementX: 0,
        movementY: 0,
        offsetX: 0,
        offsetY: 0,
        pageX: 0,
        pageY: 0,
        relatedTarget: null,
        screenX: 0,
        screenY: 0,
        shiftKey: !1,
        x: 0,
        y: 0,
        detail: 0,
        view: null,
        which: 0,
        initUIEvent: o,
        initMouseEvent: o,
        getModifierState: o,
        dataTransfer: n
      }, mA(t));
    }(e, t, r) : function (e, t, n, o) {
      return _objectSpread({}, t, {
        dataTransfer: o,
        type: e
      }, mA(n));
    }(e, o, t, r);
  },
      gA = sr,
      pA = function () {
    for (var _len13 = arguments.length, e = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      e[_key13] = arguments[_key13];
    }

    return function (t) {
      for (var _n125 = 0; _n125 < e.length; _n125++) {
        if (e[_n125](t)) return !0;
      }

      return !1;
    };
  }(gA, rr),
      hA = function hA(e, t, n, o) {
    var r = e.dom,
        s = t.cloneNode(!0);
    r.setStyles(s, {
      width: n,
      height: o
    }), r.setAttrib(s, "data-mce-selected", null);
    var a = r.create("div", {
      "class": "mce-drag-container",
      "data-mce-bogus": "all",
      unselectable: "on",
      contenteditable: "false"
    });
    return r.setStyles(a, {
      position: "absolute",
      opacity: .5,
      overflow: "hidden",
      border: 0,
      padding: 0,
      margin: 0,
      width: n,
      height: o
    }), r.setStyles(s, {
      margin: 0,
      boxSizing: "border-box"
    }), a.appendChild(s), a;
  },
      bA = function bA(e, t) {
    return function (n) {
      return function () {
        var _n$scroll;

        var o = "left" === e ? n.scrollX : n.scrollY;
        n.scroll((_n$scroll = {}, _defineProperty(_n$scroll, e, o + t), _defineProperty(_n$scroll, "behavior", "smooth"), _n$scroll));
      };
    };
  },
      vA = bA("left", -32),
      yA = bA("left", 32),
      CA = bA("top", -32),
      wA = bA("top", 32),
      xA = function xA(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  },
      kA = function kA(e, t, n, o, r) {
    "dragstart" === t && tR(o, e.dom.getOuterHTML(n));
    var s = fA(t, n, o, r);
    return e.dispatch(t, s);
  },
      EA = function EA(e, t) {
    var n = ja(function (e, n) {
      return function (e, t, n) {
        e._selectionOverrides.hideFakeCaret(), cA(e.getBody(), t, n).fold(function () {
          return e.selection.placeCaretAt(t, n);
        }, function (o) {
          var r = e._selectionOverrides.showCaret(1, o.node, o.position === rA.Before, !1);

          r ? e.selection.setRng(r) : e.selection.placeCaretAt(t, n);
        });
      }(t, e, n);
    }, 0);
    t.on("remove", n.cancel);
    var o = e;
    return function (r) {
      return e.on(function (e) {
        var s = Math.max(Math.abs(r.screenX - e.screenX), Math.abs(r.screenY - e.screenY));

        if (!e.dragging && s > 10) {
          var _n126 = kA(t, "dragstart", e.element, e.dataTransfer, r);

          if (C(_n126.dataTransfer) && (e.dataTransfer = _n126.dataTransfer), _n126.isDefaultPrevented()) return;
          e.dragging = !0, t.focus();
        }

        if (e.dragging) {
          var _s51 = r.currentTarget === t.getDoc().documentElement,
              _l13 = function (e, t) {
            return {
              pageX: t.pageX - e.relX,
              pageY: t.pageY + 5
            };
          }(e, function (e, t) {
            return n = function (e) {
              return e.inline ? uA(e.getBody()) : {
                left: 0,
                top: 0
              };
            }(e), o = function (e) {
              var t = e.getBody();
              return e.inline ? {
                left: t.scrollLeft,
                top: t.scrollTop
              } : {
                left: 0,
                top: 0
              };
            }(e), r = function (e, t) {
              if (t.target.ownerDocument !== e.getDoc()) {
                var _n127 = uA(e.getContentAreaContainer()),
                    _o112 = function (e) {
                  var t = e.getBody(),
                      n = e.getDoc().documentElement,
                      o = {
                    left: t.scrollLeft,
                    top: t.scrollTop
                  },
                      r = {
                    left: t.scrollLeft || n.scrollLeft,
                    top: t.scrollTop || n.scrollTop
                  };
                  return e.inline ? o : r;
                }(e);

                return {
                  left: t.pageX - _n127.left + _o112.left,
                  top: t.pageY - _n127.top + _o112.top
                };
              }

              return {
                left: t.pageX,
                top: t.pageY
              };
            }(e, t), {
              pageX: r.left - n.left + o.left,
              pageY: r.top - n.top + o.top
            };
            var n, o, r;
          }(t, r));

          a = e.ghost, i = t.getBody(), a.parentNode !== i && i.appendChild(a), function (e, t, n, o, r, s, a, i, l, d, c, u) {
            var m = 0,
                f = 0;
            e.style.left = t.pageX + "px", e.style.top = t.pageY + "px", t.pageX + n > r && (m = t.pageX + n - r), t.pageY + o > s && (f = t.pageY + o - s), e.style.width = n - m + "px", e.style.height = o - f + "px";
            var g = l.clientHeight,
                p = l.clientWidth,
                h = a + l.getBoundingClientRect().top,
                b = i + l.getBoundingClientRect().left;
            c.on(function (e) {
              e.intervalId.clear(), e.dragging && u && (a + 8 >= g ? e.intervalId.set(wA(d)) : a - 8 <= 0 ? e.intervalId.set(CA(d)) : i + 8 >= p ? e.intervalId.set(yA(d)) : i - 8 <= 0 ? e.intervalId.set(vA(d)) : h + 16 >= window.innerHeight ? e.intervalId.set(wA(window)) : h - 16 <= 0 ? e.intervalId.set(CA(window)) : b + 16 >= window.innerWidth ? e.intervalId.set(yA(window)) : b - 16 <= 0 && e.intervalId.set(vA(window)));
            });
          }(e.ghost, _l13, e.width, e.height, e.maxX, e.maxY, r.clientY, r.clientX, t.getContentAreaContainer(), t.getWin(), o, _s51), n.throttle(r.clientX, r.clientY);
        }

        var a, i;
      });
    };
  },
      SA = function SA(e, t, n) {
    e.on(function (e) {
      e.intervalId.clear(), e.dragging && n.fold(function () {
        return kA(t, "dragend", e.element, e.dataTransfer);
      }, function (n) {
        return kA(t, "dragend", e.element, e.dataTransfer, n);
      });
    }), _A(e);
  },
      _A = function _A(e) {
    e.on(function (e) {
      e.intervalId.clear(), xA(e.ghost);
    }), e.clear();
  },
      NA = function NA(e) {
    var t = za(),
        n = Oa.DOM,
        o = document,
        r = function (e, t) {
      return function (n) {
        if (function (e) {
          return 0 === e.button;
        }(n)) {
          var _o113 = J(t.dom.getParents(n.target), pA).getOr(null);

          if (C(_o113) && function (e, t, n) {
            return gA(n) && n !== t && e.isEditable(n.parentElement);
          }(t.dom, t.getBody(), _o113)) {
            var _r77 = t.dom.getPos(_o113),
                _s52 = t.getBody(),
                _a29 = t.getDoc().documentElement;

            e.set({
              element: _o113,
              dataTransfer: eR(),
              dragging: !1,
              screenX: n.screenX,
              screenY: n.screenY,
              maxX: (t.inline ? _s52.scrollWidth : _a29.offsetWidth) - 2,
              maxY: (t.inline ? _s52.scrollHeight : _a29.offsetHeight) - 2,
              relX: n.pageX - _r77.x,
              relY: n.pageY - _r77.y,
              width: _o113.offsetWidth,
              height: _o113.offsetHeight,
              ghost: hA(t, _o113, _o113.offsetWidth, _o113.offsetHeight),
              intervalId: Ua(100)
            });
          }
        }
      };
    }(t, e),
        s = EA(t, e),
        a = function (e, t) {
      return function (n) {
        e.on(function (e) {
          var o;

          if (e.intervalId.clear(), e.dragging) {
            if (function (e, t, n) {
              return !y(t) && t !== n && !e.dom.isChildOf(t, n) && e.dom.isEditable(t);
            }(t, function (e) {
              var t = e.getSel();

              if (C(t)) {
                var _e156 = t.getRangeAt(0).startContainer;
                return Xo(_e156) ? _e156.parentNode : _e156;
              }

              return null;
            }(t.selection), e.element)) {
              var _r78 = null !== (o = t.getDoc().elementFromPoint(n.clientX, n.clientY)) && void 0 !== o ? o : t.getBody();

              kA(t, "drop", _r78, e.dataTransfer, n).isDefaultPrevented() || t.undoManager.transact(function () {
                (function (e, t) {
                  var n = e.getParent(t.parentNode, e.isBlock);
                  xA(t), n && n !== e.getRoot() && e.isEmpty(n) && Br(vn(n));
                })(t.dom, e.element), function (e) {
                  var t = e.getData("text/html");
                  return "" === t ? I.none() : I.some(t);
                }(e.dataTransfer).each(function (e) {
                  return t.insertContent(e);
                }), t._selectionOverrides.hideFakeCaret();
              });
            }

            kA(t, "dragend", t.getBody(), e.dataTransfer, n);
          }
        }), _A(e);
      };
    }(t, e),
        i = function (e, t) {
      return function (n) {
        return SA(e, t, I.some(n));
      };
    }(t, e);

    e.on("mousedown", r), e.on("mousemove", s), e.on("mouseup", a), n.bind(o, "mousemove", s), n.bind(o, "mouseup", i), e.on("remove", function () {
      n.unbind(o, "mousemove", s), n.unbind(o, "mouseup", i);
    }), e.on("keydown", function (n) {
      n.keyCode === tf.ESC && SA(t, e, I.none());
    });
  },
      RA = sr,
      AA = function AA(e, t) {
    return Vh(e.getBody(), t);
  },
      OA = function OA(e) {
    var t = e.selection,
        n = e.dom,
        o = e.getBody(),
        r = xc(e, o, n.isBlock, function () {
      return kg(e);
    }),
        s = "sel-" + n.uniqueId(),
        a = "data-mce-selected";
    var i;

    var l = function l(e) {
      return e !== o && (RA(e) || lr(e)) && n.isChildOf(e, o) && n.isEditable(e.parentNode);
    },
        d = function d(n, o, s) {
      var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
      return e.dispatch("ShowCaret", {
        target: o,
        direction: n,
        before: s
      }).isDefaultPrevented() ? null : (a && t.scrollIntoView(o, -1 === n), r.show(s, o));
    },
        c = function c(e) {
      return jr(e) || qr(e) || Wr(e);
    },
        u = function u(e) {
      return c(e.startContainer) || c(e.endContainer);
    },
        m = function m(t) {
      var o = e.schema.getVoidElements(),
          r = n.createRng(),
          s = t.startContainer,
          a = t.startOffset,
          i = t.endContainer,
          l = t.endOffset;
      return ke(o, s.nodeName.toLowerCase()) ? 0 === a ? r.setStartBefore(s) : r.setStartAfter(s) : r.setStart(s, a), ke(o, i.nodeName.toLowerCase()) ? 0 === l ? r.setEndBefore(i) : r.setEndAfter(i) : r.setEnd(i, l), r;
    },
        f = function f(r, c) {
      if (!r) return null;

      if (r.collapsed) {
        if (!u(r)) {
          var _e157 = c ? 1 : -1,
              _t151 = Yc(_e157, o, r),
              _s53 = _t151.getNode(!c);

          if (C(_s53)) {
            if (Sc(_s53)) return d(_e157, _s53, !!c && !_t151.isAtEnd(), !1);

            if (zr(_s53) && sr(_s53.nextSibling)) {
              var _e158 = n.createRng();

              return _e158.setStart(_s53, 0), _e158.setEnd(_s53, 0), _e158;
            }
          }

          var _a30 = _t151.getNode(c);

          if (C(_a30)) {
            if (Sc(_a30)) return d(_e157, _a30, !c && !_t151.isAtEnd(), !1);

            if (zr(_a30) && sr(_a30.previousSibling)) {
              var _e159 = n.createRng();

              return _e159.setStart(_a30, 1), _e159.setEnd(_a30, 1), _e159;
            }
          }
        }

        return null;
      }

      var m = r.startContainer,
          f = r.startOffset;
      var g = r.endOffset;
      if (Xo(m) && 0 === f && RA(m.parentNode) && (m = m.parentNode, f = n.nodeIndex(m), m = m.parentNode), !jo(m)) return null;

      if (g === f + 1 && m === r.endContainer) {
        var _o114 = m.childNodes[f];
        if (l(_o114)) return function (o) {
          var r = o.cloneNode(!0),
              l = e.dispatch("ObjectSelected", {
            target: o,
            targetClone: r
          });
          if (l.isDefaultPrevented()) return null;

          var d = function (o, r) {
            var a = vn(e.getBody()),
                i = e.getDoc(),
                l = Zn(a, "#" + s).getOrThunk(function () {
              var e = pn('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>', i);
              return Qt(e, "id", s), ho(a, e), e;
            }),
                d = n.createRng();
            yo(l), vo(l, [bn(fr, i), vn(r), bn(fr, i)]), d.setStart(l.dom.firstChild, 1), d.setEnd(l.dom.lastChild, 0), ao(l, {
              top: n.getPos(o, e.getBody()).y + "px"
            }), tg(l);
            var c = t.getSel();
            return c && (c.removeAllRanges(), c.addRange(d)), d;
          }(o, l.targetClone),
              c = vn(o);

          return q(Mo(vn(e.getBody()), "*[".concat(a, "]")), function (e) {
            kn(c, e) || nn(e, a);
          }), n.getAttrib(o, a) || o.setAttribute(a, "1"), i = o, p(), d;
        }(_o114);
      }

      return null;
    },
        g = function g() {
      i && i.removeAttribute(a), Zn(vn(e.getBody()), "#" + s).each(Co), i = null;
    },
        p = function p() {
      r.hide();
    };

    return LC(e) || (e.on("click", function (t) {
      n.isEditable(t.target) || (t.preventDefault(), e.focus());
    }), e.on("blur NewBlock", g), e.on("ResizeWindow FullscreenStateChanged", r.reposition), e.on("tap", function (t) {
      var n = t.target,
          o = AA(e, n);
      RA(o) ? (t.preventDefault(), cx(e, o).each(f)) : l(n) && cx(e, n).each(f);
    }, !0), e.on("mousedown", function (r) {
      var s = r.target;
      if (s !== o && "HTML" !== s.nodeName && !n.isChildOf(s, o)) return;
      if (!function (e, t, n) {
        var o = vn(e.getBody()),
            r = e.inline ? o : vn(_n(o).dom.documentElement),
            s = function (e, t, n, o) {
          var r = function (e) {
            return e.dom.getBoundingClientRect();
          }(t);

          return {
            x: n - (e ? r.left + t.dom.clientLeft + gw(t) : 0),
            y: o - (e ? r.top + t.dom.clientTop + fw(t) : 0)
          };
        }(e.inline, r, t, n);

        return function (e, t, n) {
          var o = uw(e),
              r = mw(e);
          return t >= 0 && n >= 0 && t <= o && n <= r;
        }(r, s.x, s.y);
      }(e, r.clientX, r.clientY)) return;
      g(), p();
      var a = AA(e, s);
      RA(a) ? (r.preventDefault(), cx(e, a).each(f)) : cA(o, r.clientX, r.clientY).each(function (n) {
        var o;
        r.preventDefault(), (o = d(1, n.node, n.position === rA.Before, !1)) && t.setRng(o), jo(a) ? a.focus() : e.getBody().focus();
      });
    }), e.on("keypress", function (e) {
      tf.modifierPressed(e) || RA(t.getNode()) && e.preventDefault();
    }), e.on("GetSelectionRange", function (e) {
      var t = e.range;

      if (i) {
        if (!i.parentNode) return void (i = null);
        t = t.cloneRange(), t.selectNode(i), e.range = t;
      }
    }), e.on("SetSelectionRange", function (e) {
      e.range = m(e.range);
      var t = f(e.range, e.forward);
      t && (e.range = t);
    }), e.on("AfterSetSelectionRange", function (e) {
      var t = e.range,
          o = t.startContainer.parentElement;
      var r;
      u(t) || jo(r = o) && "mcepastebin" === r.id || p(), function (e) {
        return C(e) && n.hasClass(e, "mce-offscreen-selection");
      }(o) || g();
    }), function (e) {
      NA(e), Rd(e) && function (e) {
        var t = function t(_t152) {
          if (!_t152.isDefaultPrevented()) {
            var _n128 = _t152.dataTransfer;
            _n128 && (H(_n128.types, "Files") || _n128.files.length > 0) && (_t152.preventDefault(), "drop" === _t152.type && Cw(e, "Dropped file type is not supported"));
          }
        },
            n = function n(_n129) {
          bg(e, _n129.target) && t(_n129);
        },
            o = function o() {
          var o = Oa.DOM,
              r = e.dom,
              s = document,
              a = e.inline ? e.getBody() : e.getDoc(),
              i = ["drop", "dragover"];
          q(i, function (e) {
            o.bind(s, e, n), r.bind(a, e, t);
          }), e.on("remove", function () {
            q(i, function (e) {
              o.unbind(s, e, n), r.unbind(a, e, t);
            });
          });
        };

        e.on("init", function () {
          fg.setEditorTimeout(e, o, 0);
        });
      }(e);
    }(e), function (e) {
      var t = ja(function () {
        if (!e.removed && e.getBody().contains(document.activeElement)) {
          var _t153 = e.selection.getRng();

          if (_t153.collapsed) {
            var _n130 = ux(e, _t153, !1);

            e.selection.setRng(_n130);
          }
        }
      }, 0);
      e.on("focus", function () {
        t.throttle();
      }), e.on("blur", function () {
        t.cancel();
      });
    }(e), function (e) {
      e.on("init", function () {
        e.on("focusin", function (t) {
          var n = t.target;

          if (lr(n)) {
            var _t154 = Vh(e.getBody(), n),
                _o115 = sr(_t154) ? _t154 : n;

            e.selection.getNode() !== _o115 && cx(e, _o115).each(function (t) {
              return e.selection.setRng(t);
            });
          }
        });
      });
    }(e)), {
      showCaret: d,
      showBlockCaretContainer: function showBlockCaretContainer(e) {
        e.hasAttribute("data-mce-caret") && (Kr(e), t.scrollIntoView(e));
      },
      hideFakeCaret: p,
      destroy: function destroy() {
        r.destroy(), i = null;
      }
    };
  },
      TA = function TA(e, t) {
    var n = t;

    for (var _t155 = e.previousSibling; Xo(_t155); _t155 = _t155.previousSibling) {
      n += _t155.data.length;
    }

    return n;
  },
      BA = function BA(e, t, n, o, r) {
    if (Xo(n) && (o < 0 || o > n.data.length)) return [];
    var s = r && Xo(n) ? [TA(n, o)] : [o];
    var a = n;

    for (; a !== t && a.parentNode;) {
      s.push(e.nodeIndex(a, r)), a = a.parentNode;
    }

    return a === t ? s.reverse() : [];
  },
      DA = function DA(e, t, n, o, r, s) {
    var a = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
    return {
      start: BA(e, t, n, o, a),
      end: BA(e, t, r, s, a)
    };
  },
      PA = function PA(e, t) {
    var n = t.slice(),
        o = n.pop();
    return x(o) ? X(n, function (e, t) {
      return e.bind(function (e) {
        return I.from(e.childNodes[t]);
      });
    }, I.some(e)).bind(function (e) {
      return Xo(e) && (o < 0 || o > e.data.length) ? I.none() : I.some({
        node: e,
        offset: o
      });
    }) : I.none();
  },
      LA = function LA(e, t) {
    return PA(e, t.start).bind(function (_ref17) {
      var n = _ref17.node,
          o = _ref17.offset;
      return PA(e, t.end).map(function (_ref18) {
        var e = _ref18.node,
            t = _ref18.offset;
        var r = document.createRange();
        return r.setStart(n, o), r.setEnd(e, t), r;
      });
    });
  },
      MA = function MA(e, t, n) {
    if (t && e.isEmpty(t) && !n(t)) {
      var _o116 = t.parentNode;
      e.remove(t), MA(e, _o116, n);
    }
  },
      IA = function IA(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var r = t.startContainer.parentNode,
        s = t.endContainer.parentNode;
    t.deleteContents(), o && !n(t.startContainer) && (Xo(t.startContainer) && 0 === t.startContainer.data.length && e.remove(t.startContainer), Xo(t.endContainer) && 0 === t.endContainer.data.length && e.remove(t.endContainer), MA(e, r, n), r !== s && MA(e, s, n));
  },
      FA = function FA(e, t) {
    return I.from(e.dom.getParent(t.startContainer, e.dom.isBlock));
  },
      UA = function UA(e, t, n) {
    var o = e.dynamicPatternsLookup({
      text: n,
      block: t
    });
    return _objectSpread({}, e, {
      blockPatterns: ul(o).concat(e.blockPatterns),
      inlinePatterns: ml(o).concat(e.inlinePatterns)
    });
  },
      zA = function zA(e, t, n, o) {
    var r = e.createRng();
    return r.setStart(t, 0), r.setEnd(n, o), r.toString();
  },
      jA = function jA(e, t, n) {
    (function (e, t, n) {
      if (Xo(e) && 0 >= e.length) return I.some(uS(e, 0));
      {
        var _t156 = ii(mS);

        return I.from(_t156.forwards(e, 0, fS(e), n)).map(function (e) {
          return uS(e.container, 0);
        });
      }
    })(t, 0, t).each(function (o) {
      var r = o.container;
      hS(r, n.start.length, t).each(function (n) {
        var o = e.createRng();
        o.setStart(r, 0), o.setEnd(n.container, n.offset), IA(e, o, function (e) {
          return e === t;
        });
      });
      var s = vn(r),
          a = hr(s);
      /^\s[^\s]/.test(a) && function (e, t) {
        pr.set(e, t);
      }(s, a.slice(1));
    });
  },
      HA = function HA(e, t) {
    return e.create("span", {
      "data-mce-type": "bookmark",
      id: t
    });
  },
      $A = function $A(e, t) {
    var n = e.createRng();
    return n.setStartAfter(t.start), n.setEndBefore(t.end), n;
  },
      VA = function VA(e, t, n) {
    var o = LA(e.getRoot(), n).getOrDie("Unable to resolve path range"),
        r = o.startContainer,
        s = o.endContainer,
        a = 0 === o.endOffset ? s : s.splitText(o.endOffset),
        i = 0 === o.startOffset ? r : r.splitText(o.startOffset),
        l = i.parentNode;
    return {
      prefix: t,
      end: a.parentNode.insertBefore(HA(e, t + "-end"), a),
      start: l.insertBefore(HA(e, t + "-start"), i)
    };
  },
      qA = function qA(e, t, n) {
    MA(e, e.get(t.prefix + "-end"), n), MA(e, e.get(t.prefix + "-start"), n);
  },
      WA = function WA(e) {
    return 0 === e.start.length;
  },
      KA = function KA(e, t, n, o) {
    var r = t.start;
    var s;
    return bS(e, o.container, o.offset, (s = r, function (e, t) {
      var n = e.data.substring(0, t),
          o = n.lastIndexOf(s.charAt(s.length - 1)),
          r = n.lastIndexOf(s);
      return -1 !== r ? r + s.length : -1 !== o ? o + 1 : -1;
    }), n).bind(function (o) {
      var s, a;
      var i = null !== (a = null === (s = n.textContent) || void 0 === s ? void 0 : s.indexOf(r)) && void 0 !== a ? a : -1;

      if (-1 !== i && o.offset >= i + r.length) {
        var _t157 = e.createRng();

        return _t157.setStart(o.container, o.offset - r.length), _t157.setEnd(o.container, o.offset), I.some(_t157);
      }

      {
        var _s54 = o.offset - r.length;

        return pS(o.container, _s54, n).map(function (t) {
          var n = e.createRng();
          return n.setStart(t.container, t.offset), n.setEnd(o.container, o.offset), n;
        }).filter(function (e) {
          return e.toString() === r;
        }).orThunk(function () {
          return KA(e, t, n, uS(o.container, 0));
        });
      }
    });
  },
      GA = function GA(e, t, n, o) {
    var r = e.dom,
        s = r.getRoot(),
        a = n.pattern,
        i = n.position.container,
        l = n.position.offset;
    return pS(i, l - n.pattern.end.length, t).bind(function (d) {
      var c = DA(r, s, d.container, d.offset, i, l, o);
      if (WA(a)) return I.some({
        matches: [{
          pattern: a,
          startRng: c,
          endRng: c
        }],
        position: d
      });
      {
        var _i23 = YA(e, n.remainingPatterns, d.container, d.offset, t, o),
            _l14 = _i23.getOr({
          matches: [],
          position: d
        }),
            _u8 = _l14.position,
            _m6 = function (e, t, n, o, r) {
          var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;

          if (0 === t.start.length && !s) {
            var _t158 = e.createRng();

            return _t158.setStart(n, o), _t158.setEnd(n, o), I.some(_t158);
          }

          return gS(n, o, r).bind(function (n) {
            return KA(e, t, r, n).bind(function (e) {
              var t;

              if (s) {
                if (e.endContainer === n.container && e.endOffset === n.offset) return I.none();
                if (0 === n.offset && (null === (t = e.endContainer.textContent) || void 0 === t ? void 0 : t.length) === e.endOffset) return I.none();
              }

              return I.some(e);
            });
          });
        }(r, a, _u8.container, _u8.offset, t, _i23.isNone());

        return _m6.map(function (e) {
          var t = function (e, t, n) {
            var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
            return DA(e, t, n.startContainer, n.startOffset, n.endContainer, n.endOffset, o);
          }(r, s, e, o);

          return {
            matches: _l14.matches.concat([{
              pattern: a,
              startRng: t,
              endRng: c
            }]),
            position: uS(e.startContainer, e.startOffset)
          };
        });
      }
    });
  },
      YA = function YA(e, t, n, o, r, s) {
    var a = e.dom;
    return gS(n, o, a.getRoot()).bind(function (i) {
      var l = zA(a, r, n, o);

      for (var _a31 = 0; _a31 < t.length; _a31++) {
        var _d13 = t[_a31];
        if (!$e(l, _d13.end)) continue;

        var _c8 = t.slice();

        _c8.splice(_a31, 1);

        var _u9 = GA(e, r, {
          pattern: _d13,
          remainingPatterns: _c8,
          position: i
        }, s);

        if (_u9.isNone() && o > 0) return YA(e, t, n, o - 1, r, s);
        if (_u9.isSome()) return _u9;
      }

      return I.none();
    });
  },
      XA = function XA(e, t, n) {
    e.selection.setRng(n), "inline-format" === t.type ? q(t.format, function (t) {
      e.formatter.apply(t);
    }) : e.execCommand(t.cmd, !1, t.value);
  },
      QA = function QA(e, t, n, o, r, s) {
    var a;
    return function (e, t) {
      var n = ne(e, function (e) {
        return $(t, function (t) {
          return e.pattern.start === t.pattern.start && e.pattern.end === t.pattern.end;
        });
      });
      return e.length === t.length ? n ? e : t : e.length > t.length ? e : t;
    }(YA(e, r.inlinePatterns, n, o, t, s).fold(function () {
      return [];
    }, function (e) {
      return e.matches;
    }), YA(e, (a = r.inlinePatterns, ae(a, function (e, t) {
      return t.end.length - e.end.length;
    })), n, o, t, s).fold(function () {
      return [];
    }, function (e) {
      return e.matches;
    }));
  },
      JA = function JA(e, t) {
    if (0 === t.length) return;

    var n = e.dom,
        o = e.selection.getBookmark(),
        r = function (e, t) {
      var n = ti("mce_textpattern"),
          o = Y(t, function (t, o) {
        var r = VA(e, n + "_end".concat(t.length), o.endRng);
        return t.concat([_objectSpread({}, o, {
          endMarker: r
        })]);
      }, []);
      return Y(o, function (t, r) {
        var s = o.length - t.length - 1,
            a = WA(r.pattern) ? r.endMarker : VA(e, n + "_start".concat(s), r.startRng);
        return t.concat([_objectSpread({}, r, {
          startMarker: a
        })]);
      }, []);
    }(n, t);

    q(r, function (t) {
      var o = n.getParent(t.startMarker.start, n.isBlock),
          r = function r(e) {
        return e === o;
      };

      WA(t.pattern) ? function (e, t, n, o) {
        var r = $A(e.dom, n);
        IA(e.dom, r, o), XA(e, t, r);
      }(e, t.pattern, t.endMarker, r) : function (e, t, n, o, r) {
        var s = e.dom,
            a = $A(s, o),
            i = $A(s, n);
        IA(s, i, r), IA(s, a, r);
        var l = {
          prefix: n.prefix,
          start: n.end,
          end: o.start
        },
            d = $A(s, l);
        XA(e, t, d);
      }(e, t.pattern, t.startMarker, t.endMarker, r), qA(n, t.endMarker, r), qA(n, t.startMarker, r);
    }), e.selection.moveToBookmark(o);
  },
      ZA = function ZA(e, t) {
    var n = e.selection.getRng();
    return FA(e, n).map(function (o) {
      var r;

      var s = Math.max(0, n.startOffset),
          a = UA(t, o, null !== (r = o.textContent) && void 0 !== r ? r : ""),
          i = QA(e, o, n.startContainer, s, a, !0),
          l = function (e, t, n, o) {
        var r;
        var s = e.dom,
            a = Rl(e);
        if (!s.is(t, a)) return [];
        var i = null !== (r = t.textContent) && void 0 !== r ? r : "";
        return function (e, t) {
          var n = function (e) {
            return ae(e, function (e, t) {
              return t.start.length - e.start.length;
            });
          }(e),
              o = t.replace(fr, " ");

          return J(n, function (e) {
            return 0 === t.indexOf(e.start) || 0 === o.indexOf(e.start);
          });
        }(n.blockPatterns, i).map(function (e) {
          return Dt.trim(i).length === e.start.length ? [] : [{
            pattern: e,
            range: DA(s, s.getRoot(), t, 0, t, 0, true)
          }];
        }).getOr([]);
      }(e, o, a);

      return (l.length > 0 || i.length > 0) && (e.undoManager.add(), e.undoManager.extra(function () {
        e.execCommand("mceInsertNewLine");
      }, function () {
        e.insertContent(mr), JA(e, i), function (e, t) {
          if (0 === t.length) return;
          var n = e.selection.getBookmark();
          q(t, function (t) {
            return function (e, t) {
              var n = e.dom,
                  o = t.pattern,
                  r = LA(n.getRoot(), t.range).getOrDie("Unable to resolve path range");
              return FA(e, r).each(function (t) {
                "block-format" === o.type ? function (e, t) {
                  var n = t.get(e);
                  return p(n) && le(n).exists(function (e) {
                    return ke(e, "block");
                  });
                }(o.format, e.formatter) && e.undoManager.transact(function () {
                  jA(e.dom, t, o), e.formatter.apply(o.format);
                }) : "block-command" === o.type && e.undoManager.transact(function () {
                  jA(e.dom, t, o), e.execCommand(o.cmd, !1, o.value);
                });
              }), !0;
            }(e, t);
          }), e.selection.moveToBookmark(n);
        }(e, l);
        var t = e.selection.getRng(),
            n = gS(t.startContainer, t.startOffset, e.dom.getRoot());
        e.execCommand("mceInsertNewLine"), n.each(function (t) {
          var n = t.container;
          n.data.charAt(t.offset - 1) === mr && (n.deleteData(t.offset - 1, 1), MA(e.dom, n.parentNode, function (t) {
            return t === e.dom.getRoot();
          }));
        });
      }), !0);
    }).getOr(!1);
  },
      eO = function eO(e, t, n) {
    for (var _o117 = 0; _o117 < e.length; _o117++) {
      if (n(e[_o117], t)) return !0;
    }

    return !1;
  },
      tO = function tO(e) {
    var t = Dt.each,
        n = tf.BACKSPACE,
        o = tf.DELETE,
        r = e.dom,
        s = e.selection,
        a = e.parser,
        i = At.browser,
        l = i.isFirefox(),
        d = i.isChromium() || i.isSafari(),
        c = At.deviceType.isiPhone() || At.deviceType.isiPad(),
        u = At.os.isMacOS() || At.os.isiOS(),
        f = function f(t, n) {
      try {
        e.getDoc().execCommand(t, !1, String(n));
      } catch (e) {}
    },
        g = function g(e) {
      return e.isDefaultPrevented();
    },
        p = function p() {
      e.shortcuts.add("meta+a", null, "SelectAll");
    },
        h = function h() {
      e.inline || r.bind(e.getDoc(), "mousedown mouseup", function (t) {
        var n;
        if (t.target === e.getDoc().documentElement) if (n = s.getRng(), e.getBody().focus(), "mousedown" === t.type) {
          if (jr(n.startContainer)) return;
          s.placeCaretAt(t.clientX, t.clientY);
        } else s.setRng(n);
      });
    },
        b = function b() {
      Range.prototype.getClientRects || e.on("mousedown", function (t) {
        if (!g(t) && "HTML" === t.target.nodeName) {
          var _t159 = e.getBody();

          _t159.blur(), fg.setEditorTimeout(e, function () {
            _t159.focus();
          });
        }
      });
    },
        v = function v() {
      var t = Td(e);
      e.on("click", function (n) {
        var o = n.target;
        /^(IMG|HR)$/.test(o.nodeName) && r.isEditable(o.parentNode) && (n.preventDefault(), e.selection.select(o), e.nodeChanged()), "A" === o.nodeName && r.hasClass(o, t) && 0 === o.childNodes.length && r.isEditable(o.parentNode) && (n.preventDefault(), s.select(o));
      });
    },
        y = function y() {
      e.on("keydown", function (e) {
        if (!g(e) && e.keyCode === n && s.isCollapsed() && 0 === s.getRng().startOffset) {
          var _t160 = s.getNode().previousSibling;
          if (_t160 && _t160.nodeName && "table" === _t160.nodeName.toLowerCase()) return e.preventDefault(), !1;
        }

        return !0;
      });
    },
        C = function C() {
      kd(e) || e.on("BeforeExecCommand mousedown", function () {
        f("StyleWithCSS", !1), f("enableInlineTableEditing", !1), td(e) || f("enableObjectResizing", !1);
      });
    },
        w = function w() {
      e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}");
    },
        x = function x() {
      e.inline || e.on("keydown", function () {
        document.activeElement === document.body && e.getWin().focus();
      });
    },
        k = function k() {
      e.inline || (e.contentStyles.push("body {min-height: 150px}"), e.on("click", function (t) {
        var n;
        "HTML" === t.target.nodeName && (n = e.selection.getRng(), e.getBody().focus(), e.selection.setRng(n), e.selection.normalize(), e.nodeChanged());
      }));
    },
        S = function S() {
      u && e.on("keydown", function (t) {
        !tf.metaKeyPressed(t) || t.shiftKey || 37 !== t.keyCode && 39 !== t.keyCode || (t.preventDefault(), e.selection.getSel().modify("move", 37 === t.keyCode ? "backward" : "forward", "lineboundary"));
      });
    },
        _ = function _() {
      e.on("click", function (e) {
        var t = e.target;

        do {
          if ("A" === t.tagName) return void e.preventDefault();
        } while (t = t.parentNode);
      }), e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}");
    },
        N = function N() {
      e.on("init", function () {
        e.dom.bind(e.getBody(), "submit", function (e) {
          e.preventDefault();
        });
      });
    },
        R = E;

    return LC(e) ? (d && (h(), v(), N(), p(), c && (x(), k(), _())), l && (b(), C(), w(), S())) : (e.on("keydown", function (t) {
      if (g(t) || t.keyCode !== tf.BACKSPACE) return;
      var n = s.getRng();
      var o = n.startContainer,
          a = n.startOffset,
          i = r.getRoot();
      var l = o;

      if (n.collapsed && 0 === a) {
        for (; l.parentNode && l.parentNode.firstChild === l && l.parentNode !== i;) {
          l = l.parentNode;
        }

        "BLOCKQUOTE" === l.nodeName && (e.formatter.toggle("blockquote", void 0, l), n = r.createRng(), n.setStart(o, 0), n.setEnd(o, 0), s.setRng(n));
      }
    }), function () {
      var t = function t(e) {
        var t = r.create("body"),
            n = e.cloneContents();
        return t.appendChild(n), s.serializer.serialize(t, {
          format: "html"
        });
      };

      e.on("keydown", function (s) {
        var a = s.keyCode;

        if (!g(s) && (a === o || a === n) && e.selection.isEditable()) {
          var _n131 = e.selection.isCollapsed(),
              _o118 = e.getBody();

          if (_n131 && !r.isEmpty(_o118)) return;
          if (!_n131 && !function (n) {
            var o = t(n),
                s = r.createRng();
            return s.selectNode(e.getBody()), o === t(s);
          }(e.selection.getRng())) return;
          s.preventDefault(), e.setContent(""), _o118.firstChild && r.isBlock(_o118.firstChild) ? e.selection.setCursorLocation(_o118.firstChild, 0) : e.selection.setCursorLocation(_o118, 0), e.nodeChanged();
        }
      });
    }(), At.windowsPhone || e.on("keyup focusin mouseup", function (t) {
      tf.modifierPressed(t) || function (e) {
        var t = e.getBody(),
            n = e.selection.getRng();
        return n.startContainer === n.endContainer && n.startContainer === t && 0 === n.startOffset && n.endOffset === t.childNodes.length;
      }(e) || s.normalize();
    }, !0), d && (h(), v(), e.on("init", function () {
      f("DefaultParagraphSeparator", Rl(e));
    }), N(), y(), a.addNodeFilter("br", function (e) {
      var t = e.length;

      for (; t--;) {
        "Apple-interchange-newline" === e[t].attr("class") && e[t].remove();
      }
    }), c ? (x(), k(), _()) : p()), l && (e.on("keydown", function (t) {
      if (!g(t) && t.keyCode === n) {
        if (!e.getBody().getElementsByTagName("hr").length) return;

        if (s.isCollapsed() && 0 === s.getRng().startOffset) {
          var _e160 = s.getNode(),
              _n132 = _e160.previousSibling;

          if ("HR" === _e160.nodeName) return r.remove(_e160), void t.preventDefault();
          _n132 && _n132.nodeName && "hr" === _n132.nodeName.toLowerCase() && (r.remove(_n132), t.preventDefault());
        }
      }
    }), b(), function () {
      var n = function n() {
        var n = r.getAttribs(s.getStart().cloneNode(!1));
        return function () {
          var o = s.getStart();
          o !== e.getBody() && (r.setAttrib(o, "style", null), t(n, function (e) {
            o.setAttributeNode(e.cloneNode(!0));
          }));
        };
      },
          o = function o() {
        return !s.isCollapsed() && r.getParent(s.getStart(), r.isBlock) !== r.getParent(s.getEnd(), r.isBlock);
      };

      e.on("keypress", function (t) {
        var r;
        return !(!(g(t) || 8 !== t.keyCode && 46 !== t.keyCode) && o() && (r = n(), e.getDoc().execCommand("delete", !1), r(), t.preventDefault(), 1));
      }), r.bind(e.getDoc(), "cut", function (t) {
        if (!g(t) && o()) {
          var _t161 = n();

          fg.setEditorTimeout(e, function () {
            _t161();
          });
        }
      });
    }(), C(), e.on("SetContent ExecCommand", function (e) {
      "setcontent" !== e.type && "mceInsertLink" !== e.command || t(r.select("a:not([data-mce-block])"), function (e) {
        var t;
        var n = e.parentNode;
        var o = r.getRoot();

        if ((null == n ? void 0 : n.lastChild) === e) {
          for (; n && !r.isBlock(n);) {
            if ((null === (t = n.parentNode) || void 0 === t ? void 0 : t.lastChild) !== n || n === o) return;
            n = n.parentNode;
          }

          r.add(n, "br", {
            "data-mce-bogus": 1
          });
        }
      });
    }), w(), S(), y(), e.on("drop", function (t) {
      var n;
      var o = null === (n = t.dataTransfer) || void 0 === n ? void 0 : n.getData("text/html");
      m(o) && /^<img[^>]*>$/.test(o) && e.dispatch("dragend", new window.DragEvent("dragend", t));
    }))), {
      refreshContentEditable: R,
      isHidden: function isHidden() {
        if (!l || e.removed) return !1;
        var t = e.selection.getSel();
        return !t || !t.rangeCount || 0 === t.rangeCount;
      }
    };
  },
      nO = Oa.DOM,
      oO = function oO(e) {
    return e.inline ? e.getElement().nodeName.toLowerCase() : void 0;
  },
      rO = function rO(e) {
    return ye(e, function (e) {
      return !1 === v(e);
    });
  },
      sO = function sO(e) {
    var t = e.options.get,
        n = e.editorUpload.blobCache;
    return rO({
      allow_conditional_comments: t("allow_conditional_comments"),
      allow_html_data_urls: t("allow_html_data_urls"),
      allow_svg_data_urls: t("allow_svg_data_urls"),
      allow_html_in_named_anchor: t("allow_html_in_named_anchor"),
      allow_script_urls: t("allow_script_urls"),
      allow_unsafe_link_target: t("allow_unsafe_link_target"),
      convert_fonts_to_spans: t("convert_fonts_to_spans"),
      fix_list_elements: t("fix_list_elements"),
      font_size_legacy_values: t("font_size_legacy_values"),
      forced_root_block: t("forced_root_block"),
      forced_root_block_attrs: t("forced_root_block_attrs"),
      preserve_cdata: t("preserve_cdata"),
      inline_styles: t("inline_styles"),
      root_name: oO(e),
      sanitize: t("xss_sanitization"),
      validate: !0,
      blob_cache: n,
      document: e.getDoc()
    });
  },
      aO = function aO(e) {
    var t = e.options.get;
    return rO({
      custom_elements: t("custom_elements"),
      extended_valid_elements: t("extended_valid_elements"),
      invalid_elements: t("invalid_elements"),
      invalid_styles: t("invalid_styles"),
      schema: t("schema"),
      valid_children: t("valid_children"),
      valid_classes: t("valid_classes"),
      valid_elements: t("valid_elements"),
      valid_styles: t("valid_styles"),
      verify_html: t("verify_html"),
      padd_empty_block_inline_children: t("format_empty_lines")
    });
  },
      iO = function iO(e) {
    return e.inline ? e.ui.styleSheetLoader : e.dom.styleSheetLoader;
  },
      lO = function lO(e) {
    var t = iO(e),
        n = Jl(e),
        o = e.contentCSS,
        r = function r() {
      t.unloadAll(o), e.inline || e.ui.styleSheetLoader.unloadAll(n);
    },
        s = function s() {
      e.removed ? r() : e.on("remove", r);
    };

    if (e.contentStyles.length > 0) {
      var _t162 = "";
      Dt.each(e.contentStyles, function (e) {
        _t162 += e + "\r\n";
      }), e.dom.addStyle(_t162);
    }

    var a = Promise.all(function (e, t, n) {
      var o = [iO(e).loadAll(t)];
      return e.inline ? o : o.concat([e.ui.styleSheetLoader.loadAll(n)]);
    }(e, o, n)).then(s)["catch"](s),
        i = Ql(e);
    return i && function (e, t) {
      var n = vn(e.getBody()),
          o = Vn($n(n)),
          r = hn("style");
      Qt(r, "type", "text/css"), ho(r, bn(t)), ho(o, r), e.on("remove", function () {
        Co(r);
      });
    }(e, i), a;
  },
      dO = function dO(e) {
    !0 !== e.removed && (function (e) {
      LC(e) || e.load({
        initial: !0,
        format: "html"
      }), e.startContent = e.getContent({
        format: "raw"
      });
    }(e), function (e) {
      e.bindPendingEventDelegates(), e.initialized = !0, function (e) {
        e.dispatch("Init");
      }(e), e.focus(!0), function (e) {
        var t = e.dom.getRoot();
        e.inline || nm(e) && e.selection.getStart(!0) !== t || Cu(t).each(function (t) {
          var n = t.getNode(),
              o = Ko(n) ? Cu(n).getOr(t) : t;
          e.selection.setRng(o.toRange());
        });
      }(e), e.nodeChanged({
        initial: !0
      });
      var t = Pd(e);
      w(t) && t.call(e, e), function (e) {
        var t = Md(e);
        t && fg.setEditorTimeout(e, function () {
          var n;
          n = !0 === t ? e : e.editorManager.get(t), n && !n.destroyed && (n.focus(), n.selection.scrollIntoView());
        }, 100);
      }(e);
    }(e));
  },
      cO = function cO(e) {
    var t = e.getElement();
    var n = e.getDoc();
    e.inline && (nO.addClass(t, "mce-content-body"), e.contentDocument = n = document, e.contentWindow = window, e.bodyElement = t, e.contentAreaContainer = t);
    var o = e.getBody();
    o.disabled = !0, e.readonly = kd(e), e._editableRoot = Ed(e), !e.readonly && e.hasEditableRoot() && (e.inline && "static" === nO.getStyle(o, "position", !0) && (o.style.position = "relative"), o.contentEditable = "true"), o.disabled = !1, e.editorUpload = Tw(e), e.schema = ca(aO(e)), e.dom = Oa(n, {
      keep_values: !0,
      url_converter: e.convertURL,
      url_converter_scope: e,
      update_styles: !0,
      root_element: e.inline ? e.getBody() : null,
      collect: e.inline,
      schema: e.schema,
      contentCssCors: Vl(e),
      referrerPolicy: ql(e),
      onSetAttrib: function onSetAttrib(t) {
        e.dispatch("SetAttrib", t);
      }
    }), e.parser = function (e) {
      var t = nC(sO(e), e.schema);
      return t.addAttributeFilter("src,href,style,tabindex", function (t, n) {
        var o = e.dom,
            r = "data-mce-" + n;
        var s = t.length;

        for (; s--;) {
          var _a32 = t[s];

          var _i24 = _a32.attr(n);

          if (_i24 && !_a32.attr(r)) {
            if (0 === _i24.indexOf("data:") || 0 === _i24.indexOf("blob:")) continue;
            "style" === n ? (_i24 = o.serializeStyle(o.parseStyle(_i24), _a32.name), _i24.length || (_i24 = null), _a32.attr(r, _i24), _a32.attr(n, _i24)) : "tabindex" === n ? (_a32.attr(r, _i24), _a32.attr(n, null)) : _a32.attr(r, e.convertURL(_i24, n, _a32.name));
          }
        }
      }), t.addNodeFilter("script", function (e) {
        var t = e.length;

        for (; t--;) {
          var _n133 = e[t],
              _o119 = _n133.attr("type") || "no/type";

          0 !== _o119.indexOf("mce-") && _n133.attr("type", "mce-" + _o119);
        }
      }), nc(e) && t.addNodeFilter("#cdata", function (t) {
        var n;
        var o = t.length;

        for (; o--;) {
          var _r79 = t[o];
          _r79.type = 8, _r79.name = "#comment", _r79.value = "[CDATA[" + e.dom.encode(null !== (n = _r79.value) && void 0 !== n ? n : "") + "]]";
        }
      }), t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (t) {
        var n = t.length;
        var o = e.schema.getNonEmptyElements();

        for (; n--;) {
          var _e161 = t[n];
          _e161.isEmpty(o) && 0 === _e161.getAll("br").length && _e161.append(new Ug("br", 1));
        }
      }), t;
    }(e), e.serializer = WC(function (e) {
      var t = e.options.get;
      return _objectSpread({}, sO(e), {}, aO(e), {}, rO({
        remove_trailing_brs: t("remove_trailing_brs"),
        pad_empty_with_br: t("pad_empty_with_br"),
        url_converter: t("url_converter"),
        url_converter_scope: t("url_converter_scope"),
        element_format: t("element_format"),
        entities: t("entities"),
        entity_encoding: t("entity_encoding"),
        indent: t("indent"),
        indent_after: t("indent_after"),
        indent_before: t("indent_before")
      }));
    }(e), e), e.selection = $C(e.dom, e.getWin(), e.serializer, e), e.annotator = Wm(e), e.formatter = Hw(e), e.undoManager = Vw(e), e._nodeChangeDispatcher = new LN(e), e._selectionOverrides = OA(e), function (e) {
      var t = za(),
          n = Da(!1),
          o = Ha(function (t) {
        e.dispatch("longpress", _objectSpread({}, t, {
          type: "longpress"
        })), n.set(!0);
      }, 400);
      e.on("touchstart", function (e) {
        pE(e).each(function (r) {
          o.cancel();
          var s = {
            x: r.clientX,
            y: r.clientY,
            target: e.target
          };
          o.throttle(e), n.set(!1), t.set(s);
        });
      }, !0), e.on("touchmove", function (r) {
        o.cancel(), pE(r).each(function (o) {
          t.on(function (r) {
            (function (e, t) {
              var n = Math.abs(e.clientX - t.x),
                  o = Math.abs(e.clientY - t.y);
              return n > 5 || o > 5;
            })(o, r) && (t.clear(), n.set(!1), e.dispatch("longpresscancel"));
          });
        });
      }, !0), e.on("touchend touchcancel", function (r) {
        o.cancel(), "touchcancel" !== r.type && t.get().filter(function (e) {
          return e.target.isEqualNode(r.target);
        }).each(function () {
          n.get() ? r.preventDefault() : e.dispatch("tap", _objectSpread({}, r, {
            type: "tap"
          }));
        });
      }, !0);
    }(e), XR(e), function (e) {
      var t = "contenteditable",
          n = " " + Dt.trim(ec(e)) + " ",
          o = " " + Dt.trim(Zd(e)) + " ",
          r = xE(n),
          s = xE(o),
          a = tc(e);
      a.length > 0 && e.on("BeforeSetContent", function (t) {
        (function (e, t, n) {
          var o = t.length,
              r = n.content;

          if ("raw" !== n.format) {
            for (; o--;) {
              r = r.replace(t[o], kE(e, r, Zd(e)));
            }

            n.content = r;
          }
        })(e, a, t);
      }), e.parser.addAttributeFilter("class", function (e) {
        var n = e.length;

        for (; n--;) {
          var _o120 = e[n];
          r(_o120) ? _o120.attr(t, "true") : s(_o120) && _o120.attr(t, "false");
        }
      }), e.serializer.addAttributeFilter(t, function (e) {
        var n = e.length;

        for (; n--;) {
          var _o121 = e[n];
          (r(_o121) || s(_o121)) && (a.length > 0 && _o121.attr("data-mce-content") ? (_o121.name = "#text", _o121.type = 3, _o121.raw = !0, _o121.value = _o121.attr("data-mce-content")) : _o121.attr(t, null));
        }
      });
    }(e), LC(e) || (function (e) {
      e.on("mousedown", function (t) {
        t.detail >= 3 && (t.preventDefault(), oA(e));
      });
    }(e), function (e) {
      (function (e) {
        var t = [",", ".", ";", ":", "!", "?"],
            n = [32],
            o = function o() {
          return t = Qd(e), n = Jd(e), {
            inlinePatterns: ml(t),
            blockPatterns: ul(t),
            dynamicPatternsLookup: n
          };
          var t, n;
        },
            r = function r() {
          return function (e) {
            return e.options.isSet("text_patterns_lookup");
          }(e);
        };

        e.on("keydown", function (t) {
          if (13 === t.keyCode && !tf.modifierPressed(t) && e.selection.isCollapsed()) {
            var _n134 = o();

            (_n134.inlinePatterns.length > 0 || _n134.blockPatterns.length > 0 || r()) && ZA(e, _n134) && t.preventDefault();
          }
        }, !0);

        var s = function s() {
          if (e.selection.isCollapsed()) {
            var _t163 = o();

            (_t163.inlinePatterns.length > 0 || r()) && function (e, t) {
              var n = e.selection.getRng();
              FA(e, n).map(function (o) {
                var r = Math.max(0, n.startOffset - 1),
                    s = zA(e.dom, o, n.startContainer, r),
                    a = UA(t, o, s),
                    i = QA(e, o, n.startContainer, r, a, !1);
                i.length > 0 && e.undoManager.transact(function () {
                  JA(e, i);
                });
              });
            }(e, _t163);
          }
        };

        e.on("keyup", function (e) {
          eO(n, e, function (e, t) {
            return e === t.keyCode && !tf.modifierPressed(t);
          }) && s();
        }), e.on("keypress", function (n) {
          eO(t, n, function (e, t) {
            return e.charCodeAt(0) === t.charCode;
          }) && fg.setEditorTimeout(e, s);
        });
      })(e);
    }(e));
    var r = PN(e);
    gE(e, r), function (e) {
      e.on("NodeChange", O(CE, e));
    }(e), function (e) {
      var t;

      var n = e.dom,
          o = Rl(e),
          r = null !== (t = od(e)) && void 0 !== t ? t : "",
          s = function s(t, a) {
        if (function (e) {
          if (Kw(e)) {
            var _t164 = e.keyCode;
            return !Gw(e) && (tf.metaKeyPressed(e) || e.altKey || _t164 >= 112 && _t164 <= 123 || H(qw, _t164));
          }

          return !1;
        }(t)) return;

        var i = e.getBody(),
            l = !function (e) {
          return Kw(e) && !(Gw(e) || "keyup" === e.type && 229 === e.keyCode);
        }(t) && function (e, t, n) {
          if (ps(vn(t), !1)) {
            var _o122 = t.firstElementChild;
            return !_o122 || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && n === _o122.nodeName.toLowerCase();
          }

          return !1;
        }(n, i, o);

        ("" !== n.getAttrib(i, Ww) !== l || a) && (n.setAttrib(i, Ww, l ? r : null), n.setAttrib(i, "aria-placeholder", l ? r : null), function (e, t) {
          e.dispatch("PlaceholderToggle", {
            state: t
          });
        }(e, l), e.on(l ? "keydown" : "keyup", s), e.off(l ? "keyup" : "keydown", s));
      };

      Ge(r) && e.on("init", function (t) {
        s(t, !0), e.on("change SetContent ExecCommand", s), e.on("paste", function (t) {
          return fg.setEditorTimeout(e, function () {
            return s(t);
          });
        });
      });
    }(e), FR(e);

    var s = function (e) {
      var t = e;
      return function (e) {
        return xe(e.plugins, "rtc").bind(function (e) {
          return I.from(e.setup);
        });
      }(e).fold(function () {
        return t.rtcInstance = PC(e), I.none();
      }, function (e) {
        return t.rtcInstance = function () {
          var e = N(null),
              t = N("");
          return {
            init: {
              bindEvents: E
            },
            undoManager: {
              beforeChange: E,
              add: e,
              undo: e,
              redo: e,
              clear: E,
              reset: E,
              hasUndo: L,
              hasRedo: L,
              transact: e,
              ignore: E,
              extra: E
            },
            formatter: {
              match: L,
              matchAll: N([]),
              matchNode: N(void 0),
              canApply: L,
              closest: t,
              apply: E,
              remove: E,
              toggle: E,
              formatChanged: N({
                unbind: E
              })
            },
            editor: {
              getContent: t,
              setContent: N({
                content: "",
                html: ""
              }),
              insertContent: N(""),
              addVisual: E
            },
            selection: {
              getContent: t
            },
            autocompleter: {
              addDecoration: E,
              removeDecoration: E
            },
            raw: {
              getModel: N(I.none())
            }
          };
        }(), I.some(function () {
          return e().then(function (e) {
            return t.rtcInstance = function (e) {
              var t = function t(e) {
                return f(e) ? e : {};
              },
                  n = e.init,
                  o = e.undoManager,
                  r = e.formatter,
                  s = e.editor,
                  a = e.selection,
                  i = e.autocompleter,
                  l = e.raw;

              return {
                init: {
                  bindEvents: n.bindEvents
                },
                undoManager: {
                  beforeChange: o.beforeChange,
                  add: o.add,
                  undo: o.undo,
                  redo: o.redo,
                  clear: o.clear,
                  reset: o.reset,
                  hasUndo: o.hasUndo,
                  hasRedo: o.hasRedo,
                  transact: function transact(e, t, n) {
                    return o.transact(n);
                  },
                  ignore: function ignore(e, t) {
                    return o.ignore(t);
                  },
                  extra: function extra(e, t, n, r) {
                    return o.extra(n, r);
                  }
                },
                formatter: {
                  match: function match(e, n, o, s) {
                    return r.match(e, t(n), s);
                  },
                  matchAll: r.matchAll,
                  matchNode: r.matchNode,
                  canApply: function canApply(e) {
                    return r.canApply(e);
                  },
                  closest: function closest(e) {
                    return r.closest(e);
                  },
                  apply: function apply(e, n, o) {
                    return r.apply(e, t(n));
                  },
                  remove: function remove(e, n, o, s) {
                    return r.remove(e, t(n));
                  },
                  toggle: function toggle(e, n, o) {
                    return r.toggle(e, t(n));
                  },
                  formatChanged: function formatChanged(e, t, n, o, s) {
                    return r.formatChanged(t, n, o, s);
                  }
                },
                editor: {
                  getContent: function getContent(e) {
                    return s.getContent(e);
                  },
                  setContent: function setContent(e, t) {
                    return {
                      content: s.setContent(e, t),
                      html: ""
                    };
                  },
                  insertContent: function insertContent(e, t) {
                    return s.insertContent(e), "";
                  },
                  addVisual: s.addVisual
                },
                selection: {
                  getContent: function getContent(e, t) {
                    return a.getContent(t);
                  }
                },
                autocompleter: {
                  addDecoration: i.addDecoration,
                  removeDecoration: i.removeDecoration
                },
                raw: {
                  getModel: function getModel() {
                    return I.some(l.getRawModel());
                  }
                }
              };
            }(e), e.rtc.isRemote;
          });
        });
      });
    }(e);

    (function (e) {
      var t = e.getDoc(),
          n = e.getBody();
      (function (e) {
        e.dispatch("PreInit");
      })(e), Id(e) || (t.body.spellcheck = !1, nO.setAttrib(n, "spellcheck", "false")), e.quirks = tO(e), function (e) {
        e.dispatch("PostRender");
      }(e);
      var o = Zl(e);
      void 0 !== o && (n.dir = o);
      var r = Fd(e);
      r && e.on("BeforeSetContent", function (e) {
        Dt.each(r, function (t) {
          e.content = e.content.replace(t, function (e) {
            return "\x3c!--mce:protected " + escape(e) + "--\x3e";
          });
        });
      }), e.on("SetContent", function () {
        e.addVisual(e.getBody());
      }), e.on("compositionstart compositionend", function (t) {
        e.composing = "compositionstart" === t.type;
      });
    })(e), s.fold(function () {
      lO(e).then(function () {
        return dO(e);
      });
    }, function (t) {
      e.setProgressState(!0), lO(e).then(function () {
        t().then(function (t) {
          e.setProgressState(!1), dO(e), FC(e);
        }, function (t) {
          e.notificationManager.open({
            type: "error",
            text: String(t)
          }), dO(e), FC(e);
        });
      });
    });
  },
      uO = M,
      mO = Oa.DOM,
      fO = Oa.DOM,
      gO = function gO(e, t) {
    return {
      editorContainer: e,
      iframeContainer: t,
      api: {}
    };
  },
      pO = function pO(e) {
    var t = e.getElement();
    return e.inline ? gO(null) : function (e) {
      var t = fO.create("div");
      return fO.insertAfter(t, e), gO(t, t);
    }(t);
  },
      hO = function hO(e) {
    var t;
    return regeneratorRuntime.async(function hO$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.dispatch("ScriptsLoaded"), function (e) {
              var t = Dt.trim(Fl(e)),
                  n = e.ui.registry.getAll().icons,
                  o = _objectSpread({}, iw.get("default").icons, {}, iw.get(t).icons);

              ge(o, function (t, o) {
                ke(n, o) || e.ui.registry.addIcon(o, t);
              });
            }(e), function (e) {
              var t = ad(e);

              if (m(t)) {
                var _n135 = bw.get(t);

                e.theme = _n135(e, bw.urls[t]) || {}, w(e.theme.init) && e.theme.init(e, bw.urls[t] || e.documentBaseUrl.replace(/\/$/, ""));
              } else e.theme = {};
            }(e), function (e) {
              var t = ld(e),
                  n = lw.get(t);
              e.model = n(e, lw.urls[t]);
            }(e), function (e) {
              var t = [];
              q(_d(e), function (n) {
                (function (e, t, n) {
                  var o = hw.get(n),
                      r = hw.urls[n] || e.documentBaseUrl.replace(/\/$/, "");

                  if (n = Dt.trim(n), o && -1 === Dt.inArray(t, n)) {
                    if (e.plugins[n]) return;

                    try {
                      var _s55 = o(e, r) || {};

                      e.plugins[n] = _s55, w(_s55.init) && (_s55.init(e, r), t.push(n));
                    } catch (t) {
                      (function (e, t, n) {
                        var o = Ia.translate(["Failed to initialize plugin: {0}", t]);
                        Ym(e, "PluginLoadError", {
                          message: o
                        }), kw(o, n), Cw(e, o);
                      })(e, n, t);
                    }
                  }
                })(e, t, function (e) {
                  return e.replace(/^\-/, "");
                }(n));
              });
            }(e);
            _context.next = 3;
            return regeneratorRuntime.awrap(function (e) {
              var t = e.getElement();
              return e.orgDisplay = t.style.display, m(ad(e)) ? function (e) {
                var t = e.theme.renderUI;
                return t ? t() : pO(e);
              }(e) : w(ad(e)) ? function (e) {
                var t = e.getElement(),
                    n = ad(e)(e, t);
                return n.editorContainer.nodeType && (n.editorContainer.id = n.editorContainer.id || e.id + "_parent"), n.iframeContainer && n.iframeContainer.nodeType && (n.iframeContainer.id = n.iframeContainer.id || e.id + "_iframecontainer"), n.height = n.iframeHeight ? n.iframeHeight : t.offsetHeight, n;
              }(e) : pO(e);
            }(e));

          case 3:
            t = _context.sent;
            (function (e, t) {
              var n = {
                show: I.from(t.show).getOr(E),
                hide: I.from(t.hide).getOr(E),
                isEnabled: I.from(t.isEnabled).getOr(M),
                setEnabled: function setEnabled(n) {
                  e.mode.isReadOnly() || I.from(t.setEnabled).each(function (e) {
                    return e(n);
                  });
                }
              };
              e.ui = _objectSpread({}, e.ui, {}, n);
            })(e, I.from(t.api).getOr({})), e.editorContainer = t.editorContainer, function (e) {
              e.contentCSS = e.contentCSS.concat(function (e) {
                return Ew(e, Xl(e));
              }(e), function (e) {
                return Ew(e, Jl(e));
              }(e));
            }(e), e.inline ? cO(e) : function (e, t) {
              (function (e, t) {
                var n = e.translate("Rich Text Area"),
                    o = en(vn(e.getElement()), "tabindex").bind(Xe),
                    r = function (e, t, n, o) {
                  var r = hn("iframe");
                  return o.each(function (e) {
                    return Qt(r, "tabindex", e);
                  }), Jt(r, n), Jt(r, {
                    id: e + "_ifr",
                    frameBorder: "0",
                    allowTransparency: "true",
                    title: t
                  }), cn(r, "tox-edit-area__iframe"), r;
                }(e.id, n, wl(e), o).dom;

                r.onload = function () {
                  r.onload = null, e.dispatch("load");
                }, e.contentAreaContainer = t.iframeContainer, e.iframeElement = r, e.iframeHTML = function (e) {
                  var t = xl(e) + "<html><head>";
                  kl(e) !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
                  var n = El(e),
                      o = Sl(e),
                      r = e.translate(Bd(e));
                  return _l(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + _l(e) + '" />'), t += "</head><body id=\"".concat(n, "\" class=\"mce-content-body ").concat(o, "\" data-id=\"").concat(e.id, "\" aria-label=\"").concat(r, "\"><br></body></html>"), t;
                }(e), mO.add(t.iframeContainer, r);
              })(e, t), t.editorContainer && (t.editorContainer.style.display = e.orgDisplay, e.hidden = mO.isHidden(t.editorContainer)), e.getElement().style.display = "none", mO.setAttrib(e.id, "aria-hidden", "true"), e.getElement().style.visibility = e.orgVisibility, function (e) {
                var t = e.iframeElement,
                    n = function n() {
                  e.contentDocument = t.contentDocument, cO(e);
                };

                if (sc(e) || At.browser.isFirefox()) {
                  var _t165 = e.getDoc();

                  _t165.open(), _t165.write(e.iframeHTML), _t165.close(), n();
                } else {
                  var _r80 = (o = vn(t), So(o, "load", uO, function () {
                    _r80.unbind(), n();
                  }));

                  t.srcdoc = e.iframeHTML;
                }

                var o;
              }(e);
            }(e, {
              editorContainer: t.editorContainer,
              iframeContainer: t.iframeContainer
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
      bO = Oa.DOM,
      vO = function vO(e) {
    return "-" === e.charAt(0);
  },
      yO = function yO(e, t, n) {
    return I.from(t).filter(function (e) {
      return Ge(e) && !iw.has(e);
    }).map(function (t) {
      return {
        url: "".concat(e.editorManager.baseURL, "/icons/").concat(t, "/icons").concat(n, ".js"),
        name: I.some(t)
      };
    });
  },
      CO = function CO(e, t) {
    var n = Ba.ScriptLoader,
        o = function o() {
      !e.removed && function (e) {
        var t = ad(e);
        return !m(t) || C(bw.get(t));
      }(e) && function (e) {
        var t = ld(e);
        return C(lw.get(t));
      }(e) && hO(e);
    };

    (function (e, t) {
      var n = ad(e);

      if (m(n) && !vO(n) && !ke(bw.urls, n)) {
        var _o123 = id(e),
            _r81 = _o123 ? e.documentBaseURI.toAbsolute(_o123) : "themes/".concat(n, "/theme").concat(t, ".js");

        bw.load(n, _r81)["catch"](function () {
          (function (e, t, n) {
            ww(e, "ThemeLoadError", xw("theme", t, n));
          })(e, _r81, n);
        });
      }
    })(e, t), function (e, t) {
      var n = ld(e);

      if ("plugin" !== n && !ke(lw.urls, n)) {
        var _o124 = dd(e),
            _r82 = m(_o124) ? e.documentBaseURI.toAbsolute(_o124) : "models/".concat(n, "/model").concat(t, ".js");

        lw.load(n, _r82)["catch"](function () {
          (function (e, t, n) {
            ww(e, "ModelLoadError", xw("model", t, n));
          })(e, _r82, n);
        });
      }
    }(e, t), function (e, t) {
      var n = Wl(t),
          o = Kl(t);

      if (!Ia.hasCode(n) && "en" !== n) {
        var _r83 = Ge(o) ? o : "".concat(t.editorManager.baseURL, "/langs/").concat(n, ".js");

        e.add(_r83)["catch"](function () {
          (function (e, t, n) {
            ww(e, "LanguageLoadError", xw("language", t, n));
          })(t, _r83, n);
        });
      }
    }(n, e), function (e, t, n) {
      var o = yO(t, "default", n),
          r = function (e) {
        return I.from(Ul(e)).filter(Ge).map(function (e) {
          return {
            url: e,
            name: I.none()
          };
        });
      }(t).orThunk(function () {
        return yO(t, Fl(t), "");
      });

      q(function (e) {
        var t = [],
            n = function n(e) {
          t.push(e);
        };

        for (var _t166 = 0; _t166 < e.length; _t166++) {
          e[_t166].each(n);
        }

        return t;
      }([o, r]), function (n) {
        e.add(n.url)["catch"](function () {
          (function (e, t, n) {
            ww(e, "IconsLoadError", xw("icons", t, n));
          })(t, n.url, n.name.getOrUndefined());
        });
      });
    }(n, e, t), function (e, t) {
      var n = function n(t, _n136) {
        hw.load(t, _n136)["catch"](function () {
          (function (e, t, n) {
            ww(e, "PluginLoadError", xw("plugin", t, n));
          })(e, _n136, t);
        });
      };

      ge(Nd(e), function (t, o) {
        n(o, t), e.options.set("plugins", _d(e).concat(o));
      }), q(_d(e), function (e) {
        !(e = Dt.trim(e)) || hw.urls[e] || vO(e) || n(e, "plugins/".concat(e, "/plugin").concat(t, ".js"));
      });
    }(e, t), n.loadQueue().then(o, o);
  },
      wO = xt().deviceType,
      xO = wO.isPhone(),
      kO = wO.isTablet(),
      EO = function EO(e) {
    if (y(e)) return [];
    {
      var _t167 = p(e) ? e : e.split(/[ ,]/),
          _n137 = V(_t167, qe);

      return G(_n137, Ge);
    }
  },
      SO = function SO(e, t) {
    var n = function (t, n) {
      var o = {},
          r = {};
      return ve(t, function (t, n) {
        return H(e, n);
      }, be(o), be(r)), {
        t: o,
        f: r
      };
    }(t);

    return o = n.t, r = n.f, {
      sections: N(o),
      options: N(r)
    };
    var o, r;
  },
      _O = function _O(e, t) {
    return ke(e.sections(), t);
  },
      NO = function NO(e, t) {
    return _objectSpread({
      table_grid: !1,
      object_resizing: !1,
      resize: !1,
      toolbar_mode: xe(e, "toolbar_mode").getOr("scrolling"),
      toolbar_sticky: !1
    }, t ? {
      menubar: !1
    } : {});
  },
      RO = function RO(e, t) {
    var n;
    var o = null !== (n = t.external_plugins) && void 0 !== n ? n : {};
    return e && e.external_plugins ? Dt.extend({}, e.external_plugins, o) : o;
  },
      AO = function AO(e, t, n, o, r) {
    var s;
    var a = e ? {
      mobile: NO(null !== (s = r.mobile) && void 0 !== s ? s : {}, t)
    } : {},
        i = SO(["mobile"], PS(a, r)),
        l = Dt.extend(n, o, i.options(), function (e, t) {
      return e && _O(t, "mobile");
    }(e, i) ? function (e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var o = e.sections(),
          r = xe(o, t).getOr({});
      return Dt.extend({}, n, r);
    }(i, "mobile") : {}, {
      external_plugins: RO(o, i.options())
    });
    return function (e, t, n, o) {
      var r = EO(n.forced_plugins),
          s = EO(o.plugins),
          a = function (e, t) {
        return _O(e, t) ? e.sections()[t] : {};
      }(t, "mobile"),
          i = function (e, t, n, o) {
        return e && _O(t, "mobile") ? o : n;
      }(e, t, s, a.plugins ? EO(a.plugins) : s),
          l = function (e, t) {
        return [].concat(_toConsumableArray(EO(e)), _toConsumableArray(EO(t)));
      }(r, i);

      return Dt.extend(o, {
        forced_plugins: r,
        plugins: l
      });
    }(e, i, o, l);
  },
      OO = function OO(e) {
    (function (e) {
      var t = function t(_t168) {
        return function () {
          q("left,center,right,justify".split(","), function (n) {
            _t168 !== n && e.formatter.remove("align" + n);
          }), "none" !== _t168 && function (t, n) {
            e.formatter.toggle(t, void 0), e.nodeChanged();
          }("align" + _t168);
        };
      };

      e.editorCommands.addCommands({
        JustifyLeft: t("left"),
        JustifyCenter: t("center"),
        JustifyRight: t("right"),
        JustifyFull: t("justify"),
        JustifyNone: t("none")
      });
    })(e), function (e) {
      var t = function t(_t169) {
        return function () {
          var n = e.selection,
              o = n.isCollapsed() ? [e.dom.getParent(n.getNode(), e.dom.isBlock)] : n.getSelectedBlocks();
          return $(o, function (n) {
            return C(e.formatter.matchNode(n, _t169));
          });
        };
      };

      e.editorCommands.addCommands({
        JustifyLeft: t("alignleft"),
        JustifyCenter: t("aligncenter"),
        JustifyRight: t("alignright"),
        JustifyFull: t("alignjustify")
      }, "state");
    }(e);
  },
      TO = function TO(e, t) {
    var n = e.selection,
        o = e.dom;
    return /^ | $/.test(t) ? function (e, t, n) {
      var o = vn(e.getRoot());
      return n = Fp(o, Mi.fromRangeStart(t)) ? n.replace(/^ /, "&nbsp;") : n.replace(/^&nbsp;/, " "), Up(o, Mi.fromRangeEnd(t)) ? n.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : n.replace(/&nbsp;(<br( \/)?>)?$/, " ");
    }(o, n.getRng(), t) : t;
  },
      BO = function BO(e, t) {
    if (e.selection.isEditable()) {
      var _ref19 = function (e) {
        if ("string" != typeof e) {
          var _t170 = Dt.extend({
            paste: e.paste,
            data: {
              paste: e.paste
            }
          }, e);

          return {
            content: e.content,
            details: _t170
          };
        }

        return {
          content: e,
          details: {}
        };
      }(t),
          _n138 = _ref19.content,
          _o125 = _ref19.details;

      aC(e, _objectSpread({}, _o125, {
        content: TO(e, _n138),
        format: "html",
        set: !1,
        selection: !0
      })).each(function (t) {
        var n = function (e, t, n) {
          return MC(e).editor.insertContent(t, n);
        }(e, t.content, _o125);

        iC(e, n, t), e.addVisual();
      });
    }
  },
      DO = {
    "font-size": "size",
    "font-family": "face"
  },
      PO = Yt("font"),
      LO = function LO(e) {
    return function (t, n) {
      return I.from(n).map(vn).filter(qt).bind(function (n) {
        return function (e, t, n) {
          return bb(vn(n), function (t) {
            return function (t) {
              return co(t, e).orThunk(function () {
                return PO(t) ? xe(DO, e).bind(function (e) {
                  return en(t, e);
                }) : I.none();
              });
            }(t);
          }, function (e) {
            return kn(vn(t), e);
          });
        }(e, t, n.dom).or(function (e, t) {
          return I.from(Oa.DOM.getStyle(t, e, !0));
        }(e, n.dom));
      }).getOr("");
    };
  },
      MO = LO("font-size"),
      IO = S(function (e) {
    return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
  }, LO("font-family")),
      FO = function FO(e) {
    return Cu(e.getBody()).bind(function (e) {
      var t = e.container();
      return I.from(Xo(t) ? t.parentNode : t);
    });
  },
      UO = function UO(e, t) {
    return function (e, t) {
      return function (e) {
        return I.from(e.selection.getRng()).bind(function (t) {
          var n = e.getBody();
          return t.startContainer === n && 0 === t.startOffset ? I.none() : I.from(e.selection.getStart(!0));
        });
      }(e).orThunk(O(FO, e)).map(vn).filter(qt).bind(t);
    }(e, _(I.some, t));
  },
      zO = function zO(e, t) {
    if (/^[0-9.]+$/.test(t)) {
      var _n139 = parseInt(t, 10);

      if (_n139 >= 1 && _n139 <= 7) {
        var _o126 = function (e) {
          return Dt.explode(e.options.get("font_size_style_values"));
        }(e),
            _r84 = function (e) {
          return Dt.explode(e.options.get("font_size_classes"));
        }(e);

        return _r84.length > 0 ? _r84[_n139 - 1] || t : _o126[_n139 - 1] || t;
      }

      return t;
    }

    return t;
  },
      jO = function jO(e) {
    var t = e.split(/\s*,\s*/);
    return V(t, function (e) {
      return -1 === e.indexOf(" ") || He(e, '"') || He(e, "'") ? e : "'".concat(e, "'");
    }).join(",");
  },
      HO = function HO(e) {
    OO(e), function (e) {
      e.editorCommands.addCommands({
        "Cut,Copy,Paste": function CutCopyPaste(t) {
          var n = e.getDoc();
          var o;

          try {
            n.execCommand(t);
          } catch (e) {
            o = !0;
          }

          if ("paste" !== t || n.queryCommandEnabled(t) || (o = !0), o || !n.queryCommandSupported(t)) {
            var _t171 = e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");

            (At.os.isMacOS() || At.os.isiOS()) && (_t171 = _t171.replace(/Ctrl\+/g, "\u2318+")), e.notificationManager.open({
              text: _t171,
              type: "error"
            });
          }
        }
      });
    }(e), function (e) {
      e.editorCommands.addCommands({
        mceAddUndoLevel: function mceAddUndoLevel() {
          e.undoManager.add();
        },
        mceEndUndoLevel: function mceEndUndoLevel() {
          e.undoManager.add();
        },
        Undo: function Undo() {
          e.undoManager.undo();
        },
        Redo: function Redo() {
          e.undoManager.redo();
        }
      });
    }(e), function (e) {
      e.editorCommands.addCommands({
        mceSelectNodeDepth: function mceSelectNodeDepth(t, n, o) {
          var r = 0;
          e.dom.getParent(e.selection.getNode(), function (t) {
            return !jo(t) || r++ !== o || (e.selection.select(t), !1);
          }, e.getBody());
        },
        mceSelectNode: function mceSelectNode(t, n, o) {
          e.selection.select(o);
        },
        selectAll: function selectAll() {
          var t = e.dom.getParent(e.selection.getStart(), rr);

          if (t) {
            var _n140 = e.dom.createRng();

            _n140.selectNodeContents(t), e.selection.setRng(_n140);
          }
        }
      });
    }(e), function (e) {
      e.editorCommands.addCommands({
        mceCleanup: function mceCleanup() {
          var t = e.selection.getBookmark();
          e.setContent(e.getContent()), e.selection.moveToBookmark(t);
        },
        insertImage: function insertImage(t, n, o) {
          BO(e, e.dom.createHTML("img", {
            src: o
          }));
        },
        insertHorizontalRule: function insertHorizontalRule() {
          e.execCommand("mceInsertContent", !1, "<hr>");
        },
        insertText: function insertText(t, n, o) {
          BO(e, e.dom.encode(o));
        },
        insertHTML: function insertHTML(t, n, o) {
          BO(e, o);
        },
        mceInsertContent: function mceInsertContent(t, n, o) {
          BO(e, o);
        },
        mceSetContent: function mceSetContent(t, n, o) {
          e.setContent(o);
        },
        mceReplaceContent: function mceReplaceContent(t, n, o) {
          e.execCommand("mceInsertContent", !1, o.replace(/\{\$selection\}/g, e.selection.getContent({
            format: "text"
          })));
        },
        mceNewDocument: function mceNewDocument() {
          e.setContent($d(e));
        }
      });
    }(e), function (e) {
      var t = function t(_t172, n, o) {
        var r = m(o) ? {
          href: o
        } : o,
            s = e.dom.getParent(e.selection.getNode(), "a");
        f(r) && m(r.href) && (r.href = r.href.replace(/ /g, "%20"), s && r.href || e.formatter.remove("link"), r.href && e.formatter.apply("link", r, s));
      };

      e.editorCommands.addCommands({
        unlink: function unlink() {
          if (e.selection.isEditable()) {
            if (e.selection.isCollapsed()) {
              var _t173 = e.dom.getParent(e.selection.getStart(), "a");

              return void (_t173 && e.dom.remove(_t173, !0));
            }

            e.formatter.remove("link");
          }
        },
        mceInsertLink: t,
        createLink: t
      });
    }(e), function (e) {
      e.editorCommands.addCommands({
        Indent: function Indent() {
          (function (e) {
            cE(e, "indent");
          })(e);
        },
        Outdent: function Outdent() {
          uE(e);
        }
      }), e.editorCommands.addCommands({
        Outdent: function Outdent() {
          return iE(e);
        }
      }, "state");
    }(e), function (e) {
      e.editorCommands.addCommands({
        insertParagraph: function insertParagraph() {
          vN(X_, e);
        },
        mceInsertNewLine: function mceInsertNewLine(t, n, o) {
          yN(e, o);
        },
        InsertLineBreak: function InsertLineBreak(t, n, o) {
          vN(rN, e);
        }
      });
    }(e), function (e) {
      (function (e) {
        e.editorCommands.addCommands({
          "InsertUnorderedList,InsertOrderedList": function InsertUnorderedListInsertOrderedList(t) {
            e.getDoc().execCommand(t);
            var n = e.dom.getParent(e.selection.getNode(), "ol,ul");

            if (n) {
              var _t174 = n.parentNode;

              if (_t174 && /^(H[1-6]|P|ADDRESS|PRE)$/.test(_t174.nodeName)) {
                var _o127 = e.selection.getBookmark();

                e.dom.split(_t174, n), e.selection.moveToBookmark(_o127);
              }
            }
          }
        });
      })(e), function (e) {
        e.editorCommands.addCommands({
          "InsertUnorderedList,InsertOrderedList": function InsertUnorderedListInsertOrderedList(t) {
            var n = e.dom.getParent(e.selection.getNode(), "ul,ol");
            return n && ("insertunorderedlist" === t && "UL" === n.tagName || "insertorderedlist" === t && "OL" === n.tagName);
          }
        }, "state");
      }(e);
    }(e), function (e) {
      (function (e) {
        var t = function t(_t175, n) {
          e.formatter.toggle(_t175, n), e.nodeChanged();
        };

        e.editorCommands.addCommands({
          "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function BoldItalicUnderlineStrikethroughSuperscriptSubscript(e) {
            t(e);
          },
          "ForeColor,HiliteColor": function ForeColorHiliteColor(e, n, o) {
            t(e, {
              value: o
            });
          },
          BackColor: function BackColor(e, n, o) {
            t("hilitecolor", {
              value: o
            });
          },
          FontName: function FontName(t, n, o) {
            (function (e, t) {
              var n = zO(e, t);
              e.formatter.toggle("fontname", {
                value: jO(n)
              }), e.nodeChanged();
            })(e, o);
          },
          FontSize: function FontSize(t, n, o) {
            (function (e, t) {
              e.formatter.toggle("fontsize", {
                value: zO(e, t)
              }), e.nodeChanged();
            })(e, o);
          },
          LineHeight: function LineHeight(t, n, o) {
            (function (e, t) {
              e.formatter.toggle("lineheight", {
                value: String(t)
              }), e.nodeChanged();
            })(e, o);
          },
          Lang: function Lang(e, n, o) {
            var r;
            t(e, {
              value: o.code,
              customValue: null !== (r = o.customCode) && void 0 !== r ? r : null
            });
          },
          RemoveFormat: function RemoveFormat(t) {
            e.formatter.remove(t);
          },
          mceBlockQuote: function mceBlockQuote() {
            t("blockquote");
          },
          FormatBlock: function FormatBlock(e, n, o) {
            t(m(o) ? o : "p");
          },
          mceToggleFormat: function mceToggleFormat(e, n, o) {
            t(o);
          }
        });
      })(e), function (e) {
        var t = function t(_t176) {
          return e.formatter.match(_t176);
        };

        e.editorCommands.addCommands({
          "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function BoldItalicUnderlineStrikethroughSuperscriptSubscript(e) {
            return t(e);
          },
          mceBlockQuote: function mceBlockQuote() {
            return t("blockquote");
          }
        }, "state"), e.editorCommands.addQueryValueHandler("FontName", function () {
          return function (e) {
            return UO(e, function (t) {
              return IO(e.getBody(), t.dom);
            }).getOr("");
          }(e);
        }), e.editorCommands.addQueryValueHandler("FontSize", function () {
          return function (e) {
            return UO(e, function (t) {
              return MO(e.getBody(), t.dom);
            }).getOr("");
          }(e);
        }), e.editorCommands.addQueryValueHandler("LineHeight", function () {
          return function (e) {
            return UO(e, function (t) {
              var n = vn(e.getBody()),
                  o = bb(t, function (e) {
                return co(e, "line-height");
              }, O(kn, n));
              return o.getOrThunk(function () {
                var e = parseFloat(io(t, "line-height")),
                    n = parseFloat(io(t, "font-size"));
                return String(e / n);
              });
            }).getOr("");
          }(e);
        });
      }(e);
    }(e), function (e) {
      e.editorCommands.addCommands({
        mceRemoveNode: function mceRemoveNode(t, n, o) {
          var r = null != o ? o : e.selection.getNode();

          if (r !== e.getBody()) {
            var _t177 = e.selection.getBookmark();

            e.dom.remove(r, !0), e.selection.moveToBookmark(_t177);
          }
        },
        mcePrint: function mcePrint() {
          e.getWin().print();
        },
        mceFocus: function mceFocus(t, n, o) {
          (function (e, t) {
            e.removed || (t ? Eg(e) : function (e) {
              var t = e.selection,
                  n = e.getBody();
              var o = t.getRng();
              e.quirks.refreshContentEditable(), C(e.bookmark) && !kg(e) && ug(e).each(function (t) {
                e.selection.setRng(t), o = t;
              });

              var r = function (e, t) {
                return e.dom.getParent(t, function (t) {
                  return "true" === e.dom.getContentEditable(t);
                });
              }(e, t.getNode());

              if (r && e.dom.isChildOf(r, n)) return xg(r), wg(e, o), void Eg(e);
              e.inline || (At.browser.isOpera() || xg(n), e.getWin().focus()), (At.browser.isFirefox() || e.inline) && (xg(n), wg(e, o)), Eg(e);
            }(e));
          })(e, !0 === o);
        },
        mceToggleVisualAid: function mceToggleVisualAid() {
          e.hasVisual = !e.hasVisual, e.addVisual();
        }
      });
    }(e);
  },
      $O = ["toggleview"],
      VO = function VO(e) {
    return H($O, e.toLowerCase());
  };

  var qO =
  /*#__PURE__*/
  function () {
    function qO(e) {
      _classCallCheck(this, qO);

      this.commands = {
        state: {},
        exec: {},
        value: {}
      }, this.editor = e;
    }

    _createClass(qO, [{
      key: "execCommand",
      value: function execCommand(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var o = arguments.length > 3 ? arguments[3] : undefined;
        var r = this.editor,
            s = e.toLowerCase(),
            a = null == o ? void 0 : o.skip_focus;
        if (r.removed) return !1;
        if ("mcefocus" !== s && (/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(s) || a ? function (e) {
          ug(e).each(function (t) {
            return e.selection.setRng(t);
          });
        }(r) : r.focus()), r.dispatch("BeforeExecCommand", {
          command: e,
          ui: t,
          value: n
        }).isDefaultPrevented()) return !1;
        var i = this.commands.exec[s];
        return !!w(i) && (i(s, t, n), r.dispatch("ExecCommand", {
          command: e,
          ui: t,
          value: n
        }), !0);
      }
    }, {
      key: "queryCommandState",
      value: function queryCommandState(e) {
        if (!VO(e) && this.editor.quirks.isHidden() || this.editor.removed) return !1;
        var t = e.toLowerCase(),
            n = this.commands.state[t];
        return !!w(n) && n(t);
      }
    }, {
      key: "queryCommandValue",
      value: function queryCommandValue(e) {
        if (!VO(e) && this.editor.quirks.isHidden() || this.editor.removed) return "";
        var t = e.toLowerCase(),
            n = this.commands.value[t];
        return w(n) ? n(t) : "";
      }
    }, {
      key: "addCommands",
      value: function addCommands(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "exec";
        var n = this.commands;
        ge(e, function (e, o) {
          q(o.toLowerCase().split(","), function (o) {
            n[t][o] = e;
          });
        });
      }
    }, {
      key: "addCommand",
      value: function addCommand(e, t, n) {
        var _this2 = this;

        var o = e.toLowerCase();

        this.commands.exec[o] = function (e, o, r) {
          return t.call(null != n ? n : _this2.editor, o, r);
        };
      }
    }, {
      key: "queryCommandSupported",
      value: function queryCommandSupported(e) {
        var t = e.toLowerCase();
        return !!this.commands.exec[t];
      }
    }, {
      key: "addQueryStateHandler",
      value: function addQueryStateHandler(e, t, n) {
        var _this3 = this;

        this.commands.state[e.toLowerCase()] = function () {
          return t.call(null != n ? n : _this3.editor);
        };
      }
    }, {
      key: "addQueryValueHandler",
      value: function addQueryValueHandler(e, t, n) {
        var _this4 = this;

        this.commands.value[e.toLowerCase()] = function () {
          return t.call(null != n ? n : _this4.editor);
        };
      }
    }]);

    return qO;
  }();

  var WO = "data-mce-contenteditable",
      KO = function KO(e, t, n) {
    try {
      e.getDoc().execCommand(t, !1, String(n));
    } catch (e) {}
  },
      GO = function GO(e, t) {
    e.dom.contentEditable = t ? "true" : "false";
  },
      YO = function YO(e, t) {
    var n = vn(e.getBody());
    (function (e, t, n) {
      fn(e, t) && !n ? mn(e, t) : n && cn(e, t);
    })(n, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), function (e) {
      I.from(e.selection.getNode()).each(function (e) {
        e.removeAttribute("data-mce-selected");
      });
    }(e), e.readonly = !0, GO(n, !1), q(Mo(n, '*[contenteditable="true"]'), function (e) {
      Qt(e, WO, "true"), GO(e, !1);
    })) : (e.readonly = !1, e.hasEditableRoot() && GO(n, !0), q(Mo(n, "*[".concat(WO, "=\"true\"]")), function (e) {
      nn(e, WO), GO(e, !0);
    }), KO(e, "StyleWithCSS", !1), KO(e, "enableInlineTableEditing", !1), KO(e, "enableObjectResizing", !1), function (e) {
      return kg(e) || function (e) {
        var t = $n(vn(e.getElement()));
        return og(t).filter(function (t) {
          return !hg(t.dom) && bg(e, t.dom);
        }).isSome();
      }(e);
    }(e) && e.focus(), function (e) {
      e.selection.setRng(e.selection.getRng());
    }(e), e.nodeChanged());
  },
      XO = function XO(e) {
    return e.readonly;
  },
      QO = function QO(e) {
    e.parser.addAttributeFilter("contenteditable", function (t) {
      XO(e) && q(t, function (e) {
        e.attr(WO, e.attr("contenteditable")), e.attr("contenteditable", "false");
      });
    }), e.serializer.addAttributeFilter(WO, function (t) {
      XO(e) && q(t, function (e) {
        e.attr("contenteditable", e.attr(WO));
      });
    }), e.serializer.addTempAttr(WO);
  },
      JO = ["copy"],
      ZO = Dt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " ");

  var eT =
  /*#__PURE__*/
  function () {
    _createClass(eT, null, [{
      key: "isNative",
      value: function isNative(e) {
        return !!ZO[e.toLowerCase()];
      }
    }]);

    function eT(e) {
      _classCallCheck(this, eT);

      this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || L;
    }

    _createClass(eT, [{
      key: "fire",
      value: function fire(e, t) {
        return this.dispatch(e, t);
      }
    }, {
      key: "dispatch",
      value: function dispatch(e, t) {
        var n = e.toLowerCase(),
            o = ga(n, null != t ? t : {}, this.scope);
        this.settings.beforeFire && this.settings.beforeFire(o);
        var r = this.bindings[n];
        if (r) for (var _e162 = 0, _t178 = r.length; _e162 < _t178; _e162++) {
          var _t179 = r[_e162];

          if (!_t179.removed) {
            if (_t179.once && this.off(n, _t179.func), o.isImmediatePropagationStopped()) return o;
            if (!1 === _t179.func.call(this.scope, o)) return o.preventDefault(), o;
          }
        }
        return o;
      }
    }, {
      key: "on",
      value: function on(e, t, n, o) {
        if (!1 === t && (t = L), t) {
          var _r85 = {
            func: t,
            removed: !1
          };
          o && Dt.extend(_r85, o);

          var _s56 = e.toLowerCase().split(" ");

          var _a33 = _s56.length;

          for (; _a33--;) {
            var _e163 = _s56[_a33];
            var _t180 = this.bindings[_e163];
            _t180 || (_t180 = [], this.toggleEvent(_e163, !0)), _t180 = n ? [_r85].concat(_toConsumableArray(_t180)) : [].concat(_toConsumableArray(_t180), [_r85]), this.bindings[_e163] = _t180;
          }
        }

        return this;
      }
    }, {
      key: "off",
      value: function off(e, t) {
        var _this5 = this;

        if (e) {
          var _n141 = e.toLowerCase().split(" ");

          var _o128 = _n141.length;

          for (; _o128--;) {
            var _r86 = _n141[_o128];
            var _s57 = this.bindings[_r86];
            if (!_r86) return ge(this.bindings, function (e, t) {
              _this5.toggleEvent(t, !1), delete _this5.bindings[t];
            }), this;

            if (_s57) {
              if (t) {
                var _e164 = K(_s57, function (e) {
                  return e.func === t;
                });

                _s57 = _e164.fail, this.bindings[_r86] = _s57, q(_e164.pass, function (e) {
                  e.removed = !0;
                });
              } else _s57.length = 0;

              _s57.length || (this.toggleEvent(e, !1), delete this.bindings[_r86]);
            }
          }
        } else ge(this.bindings, function (e, t) {
          _this5.toggleEvent(t, !1);
        }), this.bindings = {};

        return this;
      }
    }, {
      key: "once",
      value: function once(e, t, n) {
        return this.on(e, t, n, {
          once: !0
        });
      }
    }, {
      key: "has",
      value: function has(e) {
        e = e.toLowerCase();
        var t = this.bindings[e];
        return !(!t || 0 === t.length);
      }
    }]);

    return eT;
  }();

  var tT = function tT(e) {
    return e._eventDispatcher || (e._eventDispatcher = new eT({
      scope: e,
      toggleEvent: function toggleEvent(t, n) {
        eT.isNative(t) && e.toggleNativeEvent && e.toggleNativeEvent(t, n);
      }
    })), e._eventDispatcher;
  },
      nT = {
    fire: function fire(e, t, n) {
      return this.dispatch(e, t, n);
    },
    dispatch: function dispatch(e, t, n) {
      var o = this;
      if (o.removed && "remove" !== e && "detach" !== e) return ga(e.toLowerCase(), null != t ? t : {}, o);
      var r = tT(o).dispatch(e, t);

      if (!1 !== n && o.parent) {
        var _t181 = o.parent();

        for (; _t181 && !r.isPropagationStopped();) {
          _t181.dispatch(e, r, !1), _t181 = _t181.parent ? _t181.parent() : void 0;
        }
      }

      return r;
    },
    on: function on(e, t, n) {
      return tT(this).on(e, t, n);
    },
    off: function off(e, t) {
      return tT(this).off(e, t);
    },
    once: function once(e, t) {
      return tT(this).once(e, t);
    },
    hasEventListeners: function hasEventListeners(e) {
      return tT(this).has(e);
    }
  },
      oT = Oa.DOM;

  var rT;

  var sT = function sT(e, t) {
    if ("selectionchange" === t) return e.getDoc();
    if (!e.inline && /^(?:mouse|touch|click|contextmenu|drop|dragover|dragend)/.test(t)) return e.getDoc().documentElement;
    var n = rd(e);
    return n ? (e.eventRoot || (e.eventRoot = oT.select(n)[0]), e.eventRoot) : e.getBody();
  },
      aT = function aT(e, t, n) {
    (function (e) {
      return !e.hidden && !XO(e);
    })(e) ? e.dispatch(t, n) : XO(e) && function (e, t) {
      if (function (e) {
        return "click" === e.type;
      }(t) && !tf.metaKeyPressed(t)) {
        var _n142 = vn(t.target);

        (function (e, t) {
          return eo(t, "a", function (t) {
            return kn(t, vn(e.getBody()));
          }).bind(function (e) {
            return en(e, "href");
          });
        })(e, _n142).each(function (n) {
          if (t.preventDefault(), /^#/.test(n)) {
            var _t182 = e.dom.select("".concat(n, ",[name=\"").concat(ze(n, "#"), "\"]"));

            _t182.length && e.selection.scrollIntoView(_t182[0], !0);
          } else window.open(n, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes");
        });
      } else (function (e) {
        return H(JO, e.type);
      })(t) && e.dispatch(t.type, t);
    }(e, n);
  },
      iT = function iT(e, t) {
    if (e.delegates || (e.delegates = {}), e.delegates[t] || e.removed) return;
    var n = sT(e, t);

    if (rd(e)) {
      if (rT || (rT = {}, e.editorManager.on("removeEditor", function () {
        e.editorManager.activeEditor || rT && (ge(rT, function (t, n) {
          e.dom.unbind(sT(e, n));
        }), rT = null);
      })), rT[t]) return;

      var _o129 = function _o129(n) {
        var o = n.target,
            r = e.editorManager.get();
        var s = r.length;

        for (; s--;) {
          var _e165 = r[s].getBody();

          (_e165 === o || oT.isChildOf(o, _e165)) && aT(r[s], t, n);
        }
      };

      rT[t] = _o129, oT.bind(n, t, _o129);
    } else {
      var _o130 = function _o130(n) {
        aT(e, t, n);
      };

      oT.bind(n, t, _o130), e.delegates[t] = _o130;
    }
  },
      lT = _objectSpread({}, nT, {
    bindPendingEventDelegates: function bindPendingEventDelegates() {
      var e = this;
      Dt.each(e._pendingNativeEvents, function (t) {
        iT(e, t);
      });
    },
    toggleNativeEvent: function toggleNativeEvent(e, t) {
      var n = this;
      "focus" !== e && "blur" !== e && (n.removed || (t ? n.initialized ? iT(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && n.delegates && (n.dom.unbind(sT(n, e), e, n.delegates[e]), delete n.delegates[e])));
    },
    unbindAllNativeEvents: function unbindAllNativeEvents() {
      var e = this,
          t = e.getBody(),
          n = e.dom;
      e.delegates && (ge(e.delegates, function (t, n) {
        e.dom.unbind(sT(e, n), n, t);
      }), delete e.delegates), !e.inline && t && n && (t.onload = null, n.unbind(e.getWin()), n.unbind(e.getDoc())), n && (n.unbind(t), n.unbind(e.getContainer()));
    }
  }),
      dT = function dT(e) {
    return m(e) ? {
      value: e.split(/[ ,]/),
      valid: !0
    } : k(e, m) ? {
      value: e,
      valid: !0
    } : {
      valid: !1,
      message: "The value must be a string[] or a comma/space separated string."
    };
  },
      cT = function cT(e, t) {
    return e + (Ye(t.message) ? "" : ". ".concat(t.message));
  },
      uT = function uT(e) {
    return e.valid;
  },
      mT = function mT(e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var o = t(e);
    return b(o) ? o ? {
      value: e,
      valid: !0
    } : {
      valid: !1,
      message: n
    } : o;
  },
      fT = ["design", "readonly"],
      gT = function gT(e, t, n, o) {
    var r = n[t.get()],
        s = n[o];

    try {
      s.activate();
    } catch (e) {
      return void console.error("problem while activating editor mode ".concat(o, ":"), e);
    }

    r.deactivate(), r.editorReadOnly !== s.editorReadOnly && YO(e, s.editorReadOnly), t.set(o), function (e, t) {
      e.dispatch("SwitchMode", {
        mode: t
      });
    }(e, o);
  },
      pT = Dt.each,
      hT = Dt.explode,
      bT = {
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123
  },
      vT = Dt.makeMap("alt,ctrl,shift,meta,access"),
      yT = function yT(e) {
    var t = {},
        n = At.os.isMacOS() || At.os.isiOS();
    pT(hT(e.toLowerCase(), "+"), function (e) {
      (function (e) {
        return e in vT;
      })(e) ? t[e] = !0 : /^[0-9]{2,}$/.test(e) ? t.keyCode = parseInt(e, 10) : (t.charCode = e.charCodeAt(0), t.keyCode = bT[e] || e.toUpperCase().charCodeAt(0));
    });
    var o = [t.keyCode];
    var r;

    for (r in vT) {
      t[r] ? o.push(r) : t[r] = !1;
    }

    return t.id = o.join(","), t.access && (t.alt = !0, n ? t.ctrl = !0 : t.shift = !0), t.meta && (n ? t.meta = !0 : (t.ctrl = !0, t.meta = !1)), t;
  };

  var CT =
  /*#__PURE__*/
  function () {
    function CT(e) {
      _classCallCheck(this, CT);

      this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
      var t = this;
      e.on("keyup keypress keydown", function (e) {
        !t.hasModifier(e) && !t.isFunctionKey(e) || e.isDefaultPrevented() || (pT(t.shortcuts, function (n) {
          t.matchShortcut(e, n) && (t.pendingPatterns = n.subpatterns.slice(0), "keydown" === e.type && t.executeShortcutAction(n));
        }), t.matchShortcut(e, t.pendingPatterns[0]) && (1 === t.pendingPatterns.length && "keydown" === e.type && t.executeShortcutAction(t.pendingPatterns[0]), t.pendingPatterns.shift()));
      });
    }

    _createClass(CT, [{
      key: "add",
      value: function add(e, t, n, o) {
        var r = this,
            s = r.normalizeCommandFunc(n);
        return pT(hT(Dt.trim(e)), function (e) {
          var n = r.createShortcut(e, t, s, o);
          r.shortcuts[n.id] = n;
        }), !0;
      }
    }, {
      key: "remove",
      value: function remove(e) {
        var t = this.createShortcut(e);
        return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
      }
    }, {
      key: "normalizeCommandFunc",
      value: function normalizeCommandFunc(e) {
        var t = this,
            n = e;
        return "string" == typeof n ? function () {
          t.editor.execCommand(n, !1, null);
        } : Dt.isArray(n) ? function () {
          t.editor.execCommand(n[0], n[1], n[2]);
        } : n;
      }
    }, {
      key: "createShortcut",
      value: function createShortcut(e, t, n, o) {
        var r = Dt.map(hT(e, ">"), yT);
        return r[r.length - 1] = Dt.extend(r[r.length - 1], {
          func: n,
          scope: o || this.editor
        }), Dt.extend(r[0], {
          desc: this.editor.translate(t),
          subpatterns: r.slice(1)
        });
      }
    }, {
      key: "hasModifier",
      value: function hasModifier(e) {
        return e.altKey || e.ctrlKey || e.metaKey;
      }
    }, {
      key: "isFunctionKey",
      value: function isFunctionKey(e) {
        return "keydown" === e.type && e.keyCode >= 112 && e.keyCode <= 123;
      }
    }, {
      key: "matchShortcut",
      value: function matchShortcut(e, t) {
        return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0);
      }
    }, {
      key: "executeShortcutAction",
      value: function executeShortcutAction(e) {
        return e.func ? e.func.call(e.scope) : null;
      }
    }]);

    return CT;
  }();

  var wT = function wT() {
    var e = function () {
      var e = {},
          t = {},
          n = {},
          o = {},
          r = {},
          s = {},
          a = {},
          i = {},
          l = function l(e, t) {
        return function (n, o) {
          e[n.toLowerCase()] = _objectSpread({}, o, {
            type: t
          });
        };
      };

      return {
        addButton: l(e, "button"),
        addGroupToolbarButton: l(e, "grouptoolbarbutton"),
        addToggleButton: l(e, "togglebutton"),
        addMenuButton: l(e, "menubutton"),
        addSplitButton: l(e, "splitbutton"),
        addMenuItem: l(t, "menuitem"),
        addNestedMenuItem: l(t, "nestedmenuitem"),
        addToggleMenuItem: l(t, "togglemenuitem"),
        addAutocompleter: l(n, "autocompleter"),
        addContextMenu: l(r, "contextmenu"),
        addContextToolbar: l(s, "contexttoolbar"),
        addContextForm: l(s, "contextform"),
        addSidebar: l(a, "sidebar"),
        addView: l(i, "views"),
        addIcon: function addIcon(e, t) {
          return o[e.toLowerCase()] = t;
        },
        getAll: function getAll() {
          return {
            buttons: e,
            menuItems: t,
            icons: o,
            popups: n,
            contextMenus: r,
            contextToolbars: s,
            sidebars: a,
            views: i
          };
        }
      };
    }();

    return {
      addAutocompleter: e.addAutocompleter,
      addButton: e.addButton,
      addContextForm: e.addContextForm,
      addContextMenu: e.addContextMenu,
      addContextToolbar: e.addContextToolbar,
      addIcon: e.addIcon,
      addMenuButton: e.addMenuButton,
      addMenuItem: e.addMenuItem,
      addNestedMenuItem: e.addNestedMenuItem,
      addSidebar: e.addSidebar,
      addSplitButton: e.addSplitButton,
      addToggleButton: e.addToggleButton,
      addGroupToolbarButton: e.addGroupToolbarButton,
      addToggleMenuItem: e.addToggleMenuItem,
      addView: e.addView,
      getAll: e.getAll
    };
  },
      xT = Oa.DOM,
      kT = Dt.extend,
      ET = Dt.each;

  var ST =
  /*#__PURE__*/
  function () {
    function ST(e, t, n) {
      _classCallCheck(this, ST);

      this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.composing = !1, this.destroyed = !1, this.hasHiddenInput = !1, this.iframeElement = null, this.initialized = !1, this.readonly = !1, this.removed = !1, this.startContent = "", this._pendingNativeEvents = [], this._skinLoaded = !1, this._editableRoot = !0, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, kT(this, lT);
      var o = this;
      this.id = e, this.hidden = !1;

      var r = function (e, t) {
        return AO(xO || kO, xO, t, e, t);
      }(n.defaultOptions, t);

      this.options = function (e, t) {
        var n = {},
            o = {},
            r = function r(e, t, n) {
          var r = mT(t, n);
          return uT(r) ? (o[e] = r.value, !0) : (console.warn(cT("Invalid value passed for the ".concat(e, " option"), r)), !1);
        },
            s = function s(e) {
          return ke(n, e);
        };

        return {
          register: function register(e, s) {
            var a = function (e) {
              return m(e.processor);
            }(s) ? function (e) {
              var t = function () {
                switch (e) {
                  case "array":
                    return p;

                  case "boolean":
                    return b;

                  case "function":
                    return w;

                  case "number":
                    return x;

                  case "object":
                    return f;

                  case "string":
                    return m;

                  case "string[]":
                    return dT;

                  case "object[]":
                    return function (e) {
                      return k(e, f);
                    };

                  case "regexp":
                    return function (e) {
                      return u(e, RegExp);
                    };

                  default:
                    return M;
                }
              }();

              return function (n) {
                return mT(n, t, "The value must be a ".concat(e, "."));
              };
            }(s.processor) : s.processor,
                i = function (e, t, n) {
              if (!v(t)) {
                var _o131 = mT(t, n);

                if (uT(_o131)) return _o131.value;
                console.error(cT("Invalid default value passed for the \"".concat(e, "\" option"), _o131));
              }
            }(e, s["default"], a);

            n[e] = _objectSpread({}, s, {
              "default": i,
              processor: a
            }), xe(o, e).orThunk(function () {
              return xe(t, e);
            }).each(function (t) {
              return r(e, t, a);
            });
          },
          isRegistered: s,
          get: function get(e) {
            return xe(o, e).orThunk(function () {
              return xe(n, e).map(function (e) {
                return e["default"];
              });
            }).getOrUndefined();
          },
          set: function set(e, t) {
            if (s(e)) {
              var _o132 = n[e];
              return _o132.immutable ? (console.error("\"".concat(e, "\" is an immutable option and cannot be updated")), !1) : r(e, t, _o132.processor);
            }

            return console.warn("\"".concat(e, "\" is not a registered option. Ensure the option has been registered before setting a value.")), !1;
          },
          unset: function unset(e) {
            var t = s(e);
            return t && delete o[e], t;
          },
          isSet: function isSet(e) {
            return ke(o, e);
          }
        };
      }(0, r), function (e) {
        var t = e.options.register;
        t("id", {
          processor: "string",
          "default": e.id
        }), t("selector", {
          processor: "string"
        }), t("target", {
          processor: "object"
        }), t("suffix", {
          processor: "string"
        }), t("cache_suffix", {
          processor: "string"
        }), t("base_url", {
          processor: "string"
        }), t("referrer_policy", {
          processor: "string",
          "default": ""
        }), t("language_load", {
          processor: "boolean",
          "default": !0
        }), t("inline", {
          processor: "boolean",
          "default": !1
        }), t("iframe_attrs", {
          processor: "object",
          "default": {}
        }), t("doctype", {
          processor: "string",
          "default": "<!DOCTYPE html>"
        }), t("document_base_url", {
          processor: "string",
          "default": e.documentBaseUrl
        }), t("body_id", {
          processor: Cl(e, "tinymce"),
          "default": "tinymce"
        }), t("body_class", {
          processor: Cl(e),
          "default": ""
        }), t("content_security_policy", {
          processor: "string",
          "default": ""
        }), t("br_in_pre", {
          processor: "boolean",
          "default": !0
        }), t("forced_root_block", {
          processor: function processor(e) {
            var t = m(e) && Ge(e);
            return t ? {
              value: e,
              valid: t
            } : {
              valid: !1,
              message: "Must be a non-empty string."
            };
          },
          "default": "p"
        }), t("forced_root_block_attrs", {
          processor: "object",
          "default": {}
        }), t("newline_behavior", {
          processor: function processor(e) {
            var t = H(["block", "linebreak", "invert", "default"], e);
            return t ? {
              value: e,
              valid: t
            } : {
              valid: !1,
              message: "Must be one of: block, linebreak, invert or default."
            };
          },
          "default": "default"
        }), t("br_newline_selector", {
          processor: "string",
          "default": ".mce-toc h2,figcaption,caption"
        }), t("no_newline_selector", {
          processor: "string",
          "default": ""
        }), t("keep_styles", {
          processor: "boolean",
          "default": !0
        }), t("end_container_on_empty_block", {
          processor: function processor(e) {
            return b(e) || m(e) ? {
              valid: !0,
              value: e
            } : {
              valid: !1,
              message: "Must be boolean or a string"
            };
          },
          "default": "blockquote"
        }), t("font_size_style_values", {
          processor: "string",
          "default": "xx-small,x-small,small,medium,large,x-large,xx-large"
        }), t("font_size_legacy_values", {
          processor: "string",
          "default": "xx-small,small,medium,large,x-large,xx-large,300%"
        }), t("font_size_classes", {
          processor: "string",
          "default": ""
        }), t("automatic_uploads", {
          processor: "boolean",
          "default": !0
        }), t("images_reuse_filename", {
          processor: "boolean",
          "default": !1
        }), t("images_replace_blob_uris", {
          processor: "boolean",
          "default": !0
        }), t("icons", {
          processor: "string",
          "default": ""
        }), t("icons_url", {
          processor: "string",
          "default": ""
        }), t("images_upload_url", {
          processor: "string",
          "default": ""
        }), t("images_upload_base_path", {
          processor: "string",
          "default": ""
        }), t("images_upload_credentials", {
          processor: "boolean",
          "default": !1
        }), t("images_upload_handler", {
          processor: "function"
        }), t("language", {
          processor: "string",
          "default": "en"
        }), t("language_url", {
          processor: "string",
          "default": ""
        }), t("entity_encoding", {
          processor: "string",
          "default": "named"
        }), t("indent", {
          processor: "boolean",
          "default": !0
        }), t("indent_before", {
          processor: "string",
          "default": "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
        }), t("indent_after", {
          processor: "string",
          "default": "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"
        }), t("indent_use_margin", {
          processor: "boolean",
          "default": !1
        }), t("indentation", {
          processor: "string",
          "default": "40px"
        }), t("content_css", {
          processor: function processor(e) {
            var t = !1 === e || m(e) || k(e, m);
            return t ? m(e) ? {
              value: V(e.split(","), qe),
              valid: t
            } : p(e) ? {
              value: e,
              valid: t
            } : !1 === e ? {
              value: [],
              valid: t
            } : {
              value: e,
              valid: t
            } : {
              valid: !1,
              message: "Must be false, a string or an array of strings."
            };
          },
          "default": hd(e) ? [] : ["default"]
        }), t("content_style", {
          processor: "string"
        }), t("content_css_cors", {
          processor: "boolean",
          "default": !1
        }), t("font_css", {
          processor: function processor(e) {
            var t = m(e) || k(e, m);
            return t ? {
              value: p(e) ? e : V(e.split(","), qe),
              valid: t
            } : {
              valid: !1,
              message: "Must be a string or an array of strings."
            };
          },
          "default": []
        }), t("inline_boundaries", {
          processor: "boolean",
          "default": !0
        }), t("inline_boundaries_selector", {
          processor: "string",
          "default": "a[href],code,span.mce-annotation"
        }), t("object_resizing", {
          processor: function processor(e) {
            var t = b(e) || m(e);
            return t ? !1 === e || gl.isiPhone() || gl.isiPad() ? {
              value: "",
              valid: t
            } : {
              value: !0 === e ? "table,img,figure.image,div,video,iframe" : e,
              valid: t
            } : {
              valid: !1,
              message: "Must be boolean or a string"
            };
          },
          "default": !pl
        }), t("resize_img_proportional", {
          processor: "boolean",
          "default": !0
        }), t("event_root", {
          processor: "object"
        }), t("service_message", {
          processor: "string"
        }), t("theme", {
          processor: function processor(e) {
            return !1 === e || m(e) || w(e);
          },
          "default": "silver"
        }), t("theme_url", {
          processor: "string"
        }), t("formats", {
          processor: "object"
        }), t("format_empty_lines", {
          processor: "boolean",
          "default": !1
        }), t("format_noneditable_selector", {
          processor: "string",
          "default": ""
        }), t("preview_styles", {
          processor: function processor(e) {
            var t = !1 === e || m(e);
            return t ? {
              value: !1 === e ? "" : e,
              valid: t
            } : {
              valid: !1,
              message: "Must be false or a string"
            };
          },
          "default": "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"
        }), t("custom_ui_selector", {
          processor: "string",
          "default": ""
        }), t("hidden_input", {
          processor: "boolean",
          "default": !0
        }), t("submit_patch", {
          processor: "boolean",
          "default": !0
        }), t("encoding", {
          processor: "string"
        }), t("add_form_submit_trigger", {
          processor: "boolean",
          "default": !0
        }), t("add_unload_trigger", {
          processor: "boolean",
          "default": !0
        }), t("custom_undo_redo_levels", {
          processor: "number",
          "default": 0
        }), t("disable_nodechange", {
          processor: "boolean",
          "default": !1
        }), t("readonly", {
          processor: "boolean",
          "default": !1
        }), t("editable_root", {
          processor: "boolean",
          "default": !0
        }), t("plugins", {
          processor: "string[]",
          "default": []
        }), t("external_plugins", {
          processor: "object"
        }), t("forced_plugins", {
          processor: "string[]"
        }), t("model", {
          processor: "string",
          "default": e.hasPlugin("rtc") ? "plugin" : "dom"
        }), t("model_url", {
          processor: "string"
        }), t("block_unsupported_drop", {
          processor: "boolean",
          "default": !0
        }), t("visual", {
          processor: "boolean",
          "default": !0
        }), t("visual_table_class", {
          processor: "string",
          "default": "mce-item-table"
        }), t("visual_anchor_class", {
          processor: "string",
          "default": "mce-item-anchor"
        }), t("iframe_aria_text", {
          processor: "string",
          "default": "Rich Text Area. Press ALT-0 for help."
        }), t("setup", {
          processor: "function"
        }), t("init_instance_callback", {
          processor: "function"
        }), t("url_converter", {
          processor: "function",
          "default": e.convertURL
        }), t("url_converter_scope", {
          processor: "object",
          "default": e
        }), t("urlconverter_callback", {
          processor: "function"
        }), t("allow_conditional_comments", {
          processor: "boolean",
          "default": !1
        }), t("allow_html_data_urls", {
          processor: "boolean",
          "default": !1
        }), t("allow_svg_data_urls", {
          processor: "boolean"
        }), t("allow_html_in_named_anchor", {
          processor: "boolean",
          "default": !1
        }), t("allow_script_urls", {
          processor: "boolean",
          "default": !1
        }), t("allow_unsafe_link_target", {
          processor: "boolean",
          "default": !1
        }), t("convert_fonts_to_spans", {
          processor: "boolean",
          "default": !0,
          deprecated: !0
        }), t("fix_list_elements", {
          processor: "boolean",
          "default": !1
        }), t("preserve_cdata", {
          processor: "boolean",
          "default": !1
        }), t("remove_trailing_brs", {
          processor: "boolean",
          "default": !0
        }), t("pad_empty_with_br", {
          processor: "boolean",
          "default": !1
        }), t("inline_styles", {
          processor: "boolean",
          "default": !0,
          deprecated: !0
        }), t("element_format", {
          processor: "string",
          "default": "html"
        }), t("entities", {
          processor: "string"
        }), t("schema", {
          processor: "string",
          "default": "html5"
        }), t("convert_urls", {
          processor: "boolean",
          "default": !0
        }), t("relative_urls", {
          processor: "boolean",
          "default": !0
        }), t("remove_script_host", {
          processor: "boolean",
          "default": !0
        }), t("custom_elements", {
          processor: "string"
        }), t("extended_valid_elements", {
          processor: "string"
        }), t("invalid_elements", {
          processor: "string"
        }), t("invalid_styles", {
          processor: yl
        }), t("valid_children", {
          processor: "string"
        }), t("valid_classes", {
          processor: yl
        }), t("valid_elements", {
          processor: "string"
        }), t("valid_styles", {
          processor: yl
        }), t("verify_html", {
          processor: "boolean",
          "default": !0
        }), t("auto_focus", {
          processor: function processor(e) {
            return m(e) || !0 === e;
          }
        }), t("browser_spellcheck", {
          processor: "boolean",
          "default": !1
        }), t("protect", {
          processor: "array"
        }), t("images_file_types", {
          processor: "string",
          "default": "jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp"
        }), t("deprecation_warnings", {
          processor: "boolean",
          "default": !0
        }), t("a11y_advanced_options", {
          processor: "boolean",
          "default": !1
        }), t("api_key", {
          processor: "string"
        }), t("paste_block_drop", {
          processor: "boolean",
          "default": !1
        }), t("paste_data_images", {
          processor: "boolean",
          "default": !0
        }), t("paste_preprocess", {
          processor: "function"
        }), t("paste_postprocess", {
          processor: "function"
        }), t("paste_webkit_styles", {
          processor: "string",
          "default": "none"
        }), t("paste_remove_styles_if_webkit", {
          processor: "boolean",
          "default": !0
        }), t("paste_merge_formats", {
          processor: "boolean",
          "default": !0
        }), t("smart_paste", {
          processor: "boolean",
          "default": !0
        }), t("paste_as_text", {
          processor: "boolean",
          "default": !1
        }), t("paste_tab_spaces", {
          processor: "number",
          "default": 4
        }), t("text_patterns", {
          processor: function processor(e) {
            return k(e, f) || !1 === e ? {
              value: fl(!1 === e ? [] : e),
              valid: !0
            } : {
              valid: !1,
              message: "Must be an array of objects or false."
            };
          },
          "default": [{
            start: "*",
            end: "*",
            format: "italic"
          }, {
            start: "**",
            end: "**",
            format: "bold"
          }, {
            start: "#",
            format: "h1"
          }, {
            start: "##",
            format: "h2"
          }, {
            start: "###",
            format: "h3"
          }, {
            start: "####",
            format: "h4"
          }, {
            start: "#####",
            format: "h5"
          }, {
            start: "######",
            format: "h6"
          }, {
            start: "1. ",
            cmd: "InsertOrderedList"
          }, {
            start: "* ",
            cmd: "InsertUnorderedList"
          }, {
            start: "- ",
            cmd: "InsertUnorderedList"
          }]
        }), t("text_patterns_lookup", {
          processor: function processor(e) {
            return w(e) ? {
              value: (t = e, function (e) {
                var n = t(e);
                return fl(n);
              }),
              valid: !0
            } : {
              valid: !1,
              message: "Must be a single function"
            };
            var t;
          },
          "default": function _default(e) {
            return [];
          }
        }), t("noneditable_class", {
          processor: "string",
          "default": "mceNonEditable"
        }), t("editable_class", {
          processor: "string",
          "default": "mceEditable"
        }), t("noneditable_regexp", {
          processor: function processor(e) {
            return k(e, bl) ? {
              value: e,
              valid: !0
            } : bl(e) ? {
              value: [e],
              valid: !0
            } : {
              valid: !1,
              message: "Must be a RegExp or an array of RegExp."
            };
          },
          "default": []
        }), t("table_tab_navigation", {
          processor: "boolean",
          "default": !0
        }), t("highlight_on_focus", {
          processor: "boolean",
          "default": !1
        }), t("xss_sanitization", {
          processor: "boolean",
          "default": !0
        }), t("details_initial_state", {
          processor: function processor(e) {
            var t = H(["inherited", "collapsed", "expanded"], e);
            return t ? {
              value: e,
              valid: t
            } : {
              valid: !1,
              message: "Must be one of: inherited, collapsed, or expanded."
            };
          },
          "default": "inherited"
        }), t("details_serialized_state", {
          processor: function processor(e) {
            var t = H(["inherited", "collapsed", "expanded"], e);
            return t ? {
              value: e,
              valid: t
            } : {
              valid: !1,
              message: "Must be one of: inherited, collapsed, or expanded."
            };
          },
          "default": "inherited"
        }), t("init_content_sync", {
          processor: "boolean",
          "default": !1
        }), t("newdocument_content", {
          processor: "string",
          "default": ""
        }), e.on("ScriptsLoaded", function () {
          t("directionality", {
            processor: "string",
            "default": Ia.isRtl() ? "rtl" : void 0
          }), t("placeholder", {
            processor: "string",
            "default": hl.getAttrib(e.getElement(), "placeholder")
          });
        });
      }(o);
      var s = this.options.get;
      s("deprecation_warnings") && function (e, t) {
        (function (e, t) {
          var n = ZC(e),
              o = nw(t),
              r = o.length > 0,
              s = n.length > 0,
              a = "mobile" === t.theme;

          if (r || s || a) {
            var _e166 = "\n- ",
                _t183 = a ? "\n\nThemes:".concat(_e166, "mobile") : "",
                _i25 = r ? "\n\nPlugins:".concat(_e166).concat(o.join(_e166)) : "",
                _l15 = s ? "\n\nOptions:".concat(_e166).concat(n.join(_e166)) : "";

            console.warn("The following deprecated features are currently enabled and have been removed in TinyMCE 6.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/6/migration-from-5x/ for more information." + _t183 + _i25 + _l15);
          }
        })(e, t), function (e, t) {
          var n = ew(e),
              o = ow(t),
              r = o.length > 0,
              s = n.length > 0;

          if (r || s) {
            var _e167 = "\n- ",
                _t184 = r ? "\n\nPlugins:".concat(_e167).concat(o.map(rw).join(_e167)) : "",
                _a34 = s ? "\n\nOptions:".concat(_e167).concat(n.join(_e167)) : "";

            console.warn("The following deprecated features are currently enabled but will be removed soon." + _t184 + _a34);
          }
        }(e, t);
      }(t, r);
      var a = s("suffix");
      a && (n.suffix = a), this.suffix = n.suffix;
      var i = s("base_url");
      i && n._setBaseUrl(i), this.baseUri = n.baseURI;
      var l = ql(o);
      l && (Ba.ScriptLoader._setReferrerPolicy(l), Oa.DOM.styleSheetLoader._setReferrerPolicy(l));
      var d = Sd(o);
      C(d) && Oa.DOM.styleSheetLoader._setContentCssCors(d), Fa.languageLoad = s("language_load"), Fa.baseURL = n.baseURL, this.setDirty(!1), this.documentBaseURI = new $y(kl(o), {
        base_uri: this.baseUri
      }), this.baseURI = this.baseUri, this.inline = hd(o), this.hasVisual = Ad(o), this.shortcuts = new CT(this), this.editorCommands = new qO(this), HO(this);
      var c = s("cache_suffix");
      c && (At.cacheSuffix = c.replace(/^[\?\&]+/, "")), this.ui = {
        registry: wT(),
        styleSheetLoader: void 0,
        show: E,
        hide: E,
        setEnabled: E,
        isEnabled: M
      }, this.mode = function (e) {
        var t = Da("design"),
            n = Da({
          design: {
            activate: E,
            deactivate: E,
            editorReadOnly: !1
          },
          readonly: {
            activate: E,
            deactivate: E,
            editorReadOnly: !0
          }
        });
        return function (e) {
          e.serializer ? QO(e) : e.on("PreInit", function () {
            QO(e);
          });
        }(e), function (e) {
          e.on("ShowCaret", function (t) {
            XO(e) && t.preventDefault();
          }), e.on("ObjectSelected", function (t) {
            XO(e) && t.preventDefault();
          });
        }(e), {
          isReadOnly: function isReadOnly() {
            return XO(e);
          },
          set: function set(o) {
            return function (e, t, n, o) {
              if (o !== n.get()) {
                if (!ke(t, o)) throw new Error("Editor mode '".concat(o, "' is invalid"));
                e.initialized ? gT(e, n, t, o) : e.on("init", function () {
                  return gT(e, n, t, o);
                });
              }
            }(e, n.get(), t, o);
          },
          get: function get() {
            return t.get();
          },
          register: function register(e, t) {
            n.set(function (e, t, n) {
              if (H(fT, t)) throw new Error("Cannot override default mode ".concat(t));
              return _objectSpread({}, e, _defineProperty({}, t, _objectSpread({}, n, {
                deactivate: function deactivate() {
                  try {
                    n.deactivate();
                  } catch (e) {
                    console.error("problem while deactivating editor mode ".concat(t, ":"), e);
                  }
                }
              })));
            }(n.get(), e, t));
          }
        };
      }(o), n.dispatch("SetupEditor", {
        editor: this
      });
      var g = Dd(o);
      w(g) && g.call(o, o);
    }

    _createClass(ST, [{
      key: "render",
      value: function render() {
        (function (e) {
          var t = e.id;
          Ia.setCode(Wl(e));

          var n = function n() {
            bO.unbind(window, "ready", n), e.render();
          };

          if (!Ca.Event.domLoaded) return void bO.bind(window, "ready", n);
          if (!e.getElement()) return;
          var o = vn(e.getElement()),
              r = on(o);
          e.on("remove", function () {
            W(o.dom.attributes, function (e) {
              return nn(o, e.name);
            }), Jt(o, r);
          }), e.ui.styleSheetLoader = function (e, t) {
            return Ps.forElement(e, {
              contentCssCors: Sd(t),
              referrerPolicy: ql(t)
            });
          }(o, e), hd(e) ? e.inline = !0 : (e.orgVisibility = e.getElement().style.visibility, e.getElement().style.visibility = "hidden");
          var s = e.getElement().form || bO.getParent(t, "form");
          s && (e.formElement = s, bd(e) && !Yo(e.getElement()) && (bO.insertAfter(bO.create("input", {
            type: "hidden",
            name: t
          }), t), e.hasHiddenInput = !0), e.formEventDelegate = function (t) {
            e.dispatch(t.type, t);
          }, bO.bind(s, "submit reset", e.formEventDelegate), e.on("reset", function () {
            e.resetContent();
          }), !vd(e) || s.submit.nodeType || s.submit.length || s._mceOldSubmit || (s._mceOldSubmit = s.submit, s.submit = function () {
            return e.editorManager.triggerSave(), e.setDirty(!1), s._mceOldSubmit(s);
          })), e.windowManager = vw(e), e.notificationManager = pw(e), function (e) {
            return "xml" === e.options.get("encoding");
          }(e) && e.on("GetContent", function (e) {
            e.save && (e.content = bO.encode(e.content));
          }), yd(e) && e.on("submit", function () {
            e.initialized && e.save();
          }), Cd(e) && (e._beforeUnload = function () {
            !e.initialized || e.destroyed || e.isHidden() || e.save({
              format: "raw",
              no_events: !0,
              set_dirty: !1
            });
          }, e.editorManager.on("BeforeUnload", e._beforeUnload)), e.editorManager.add(e), CO(e, e.suffix);
        })(this);
      }
    }, {
      key: "focus",
      value: function focus(e) {
        this.execCommand("mceFocus", !1, e);
      }
    }, {
      key: "hasFocus",
      value: function hasFocus() {
        return kg(this);
      }
    }, {
      key: "translate",
      value: function translate(e) {
        return Ia.translate(e);
      }
    }, {
      key: "getParam",
      value: function getParam(e, t, n) {
        var o = this.options;
        return o.isRegistered(e) || (C(n) ? o.register(e, {
          processor: n,
          "default": t
        }) : o.register(e, {
          processor: M,
          "default": t
        })), o.isSet(e) || v(t) ? o.get(e) : t;
      }
    }, {
      key: "hasPlugin",
      value: function hasPlugin(e, t) {
        return !(!H(_d(this), e) || t && void 0 === hw.get(e));
      }
    }, {
      key: "nodeChanged",
      value: function nodeChanged(e) {
        this._nodeChangeDispatcher.nodeChanged(e);
      }
    }, {
      key: "addCommand",
      value: function addCommand(e, t, n) {
        this.editorCommands.addCommand(e, t, n);
      }
    }, {
      key: "addQueryStateHandler",
      value: function addQueryStateHandler(e, t, n) {
        this.editorCommands.addQueryStateHandler(e, t, n);
      }
    }, {
      key: "addQueryValueHandler",
      value: function addQueryValueHandler(e, t, n) {
        this.editorCommands.addQueryValueHandler(e, t, n);
      }
    }, {
      key: "addShortcut",
      value: function addShortcut(e, t, n, o) {
        this.shortcuts.add(e, t, n, o);
      }
    }, {
      key: "execCommand",
      value: function execCommand(e, t, n, o) {
        return this.editorCommands.execCommand(e, t, n, o);
      }
    }, {
      key: "queryCommandState",
      value: function queryCommandState(e) {
        return this.editorCommands.queryCommandState(e);
      }
    }, {
      key: "queryCommandValue",
      value: function queryCommandValue(e) {
        return this.editorCommands.queryCommandValue(e);
      }
    }, {
      key: "queryCommandSupported",
      value: function queryCommandSupported(e) {
        return this.editorCommands.queryCommandSupported(e);
      }
    }, {
      key: "show",
      value: function show() {
        var e = this;
        e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = "true" : (xT.show(e.getContainer()), xT.hide(e.id)), e.load(), e.dispatch("show"));
      }
    }, {
      key: "hide",
      value: function hide() {
        var e = this;
        e.hidden || (e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (xT.hide(e.getContainer()), xT.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.dispatch("hide"));
      }
    }, {
      key: "isHidden",
      value: function isHidden() {
        return this.hidden;
      }
    }, {
      key: "setProgressState",
      value: function setProgressState(e, t) {
        this.dispatch("ProgressState", {
          state: e,
          time: t
        });
      }
    }, {
      key: "load",
      value: function load() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = this,
            n = t.getElement();
        if (t.removed) return "";

        if (n) {
          var _o133 = _objectSpread({}, e, {
            load: !0
          }),
              _r87 = Yo(n) ? n.value : n.innerHTML,
              _s58 = t.setContent(_r87, _o133);

          return _o133.no_events || t.dispatch("LoadContent", _objectSpread({}, _o133, {
            element: n
          })), _s58;
        }

        return "";
      }
    }, {
      key: "save",
      value: function save() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = this;
        var n = t.getElement();
        if (!n || !t.initialized || t.removed) return "";

        var o = _objectSpread({}, e, {
          save: !0,
          element: n
        });

        var r = t.getContent(o);

        var s = _objectSpread({}, o, {
          content: r
        });

        if (s.no_events || t.dispatch("SaveContent", s), "raw" === s.format && t.dispatch("RawSaveContent", s), r = s.content, Yo(n)) n.value = r;else {
          !e.is_removing && t.inline || (n.innerHTML = r);

          var _o134 = xT.getParent(t.id, "form");

          _o134 && ET(_o134.elements, function (e) {
            return e.name !== t.id || (e.value = r, !1);
          });
        }
        return s.element = o.element = n = null, !1 !== s.set_dirty && t.setDirty(!1), r;
      }
    }, {
      key: "setContent",
      value: function setContent(e, t) {
        return KC(this, e, t);
      }
    }, {
      key: "getContent",
      value: function getContent(e) {
        return function (e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var n = function (e, t) {
            return _objectSpread({}, e, {
              format: t,
              get: !0,
              getInner: !0
            });
          }(t, t.format ? t.format : "html");

          return rC(e, n).fold(R, function (t) {
            var n = function (e, t) {
              return MC(e).editor.getContent(t);
            }(e, t);

            return sC(e, n, t);
          });
        }(this, e);
      }
    }, {
      key: "insertContent",
      value: function insertContent(e, t) {
        t && (e = kT({
          content: e
        }, t)), this.execCommand("mceInsertContent", !1, e);
      }
    }, {
      key: "resetContent",
      value: function resetContent(e) {
        void 0 === e ? KC(this, this.startContent, {
          format: "raw"
        }) : KC(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged();
      }
    }, {
      key: "isDirty",
      value: function isDirty() {
        return !this.isNotDirty;
      }
    }, {
      key: "setDirty",
      value: function setDirty(e) {
        var t = !this.isNotDirty;
        this.isNotDirty = !e, e && e !== t && this.dispatch("dirty");
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        var e = this;
        return e.container || (e.container = e.editorContainer || xT.get(e.id + "_parent")), e.container;
      }
    }, {
      key: "getContentAreaContainer",
      value: function getContentAreaContainer() {
        return this.contentAreaContainer;
      }
    }, {
      key: "getElement",
      value: function getElement() {
        return this.targetElm || (this.targetElm = xT.get(this.id)), this.targetElm;
      }
    }, {
      key: "getWin",
      value: function getWin() {
        var e = this;

        if (!e.contentWindow) {
          var _t185 = e.iframeElement;
          _t185 && (e.contentWindow = _t185.contentWindow);
        }

        return e.contentWindow;
      }
    }, {
      key: "getDoc",
      value: function getDoc() {
        var e = this;

        if (!e.contentDocument) {
          var _t186 = e.getWin();

          _t186 && (e.contentDocument = _t186.document);
        }

        return e.contentDocument;
      }
    }, {
      key: "getBody",
      value: function getBody() {
        var e, t;
        var n = this.getDoc();
        return null !== (t = null !== (e = this.bodyElement) && void 0 !== e ? e : null == n ? void 0 : n.body) && void 0 !== t ? t : null;
      }
    }, {
      key: "convertURL",
      value: function convertURL(e, t, n) {
        var o = this,
            r = o.options.get,
            s = Ld(o);
        return w(s) ? s.call(o, e, n, !0, t) : !r("convert_urls") || "link" === n || f(n) && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r("relative_urls") ? o.documentBaseURI.toRelative(e) : e = o.documentBaseURI.toAbsolute(e, r("remove_script_host"));
      }
    }, {
      key: "addVisual",
      value: function addVisual(e) {
        (function (e, t) {
          (function (e, t) {
            IC(e).editor.addVisual(t);
          })(e, t);
        })(this, e);
      }
    }, {
      key: "setEditableRoot",
      value: function setEditableRoot(e) {
        (function (e, t) {
          e._editableRoot !== t && (e._editableRoot = t, e.readonly || (e.getBody().contentEditable = String(e.hasEditableRoot()), e.nodeChanged()), function (e, t) {
            e.dispatch("EditableRootStateChange", {
              state: t
            });
          }(e, t));
        })(this, e);
      }
    }, {
      key: "hasEditableRoot",
      value: function hasEditableRoot() {
        return this._editableRoot;
      }
    }, {
      key: "remove",
      value: function remove() {
        (function (e) {
          if (!e.removed) {
            var _t187 = e._selectionOverrides,
                _n143 = e.editorUpload,
                _o135 = e.getBody(),
                _r88 = e.getElement();

            _o135 && e.save({
              is_removing: !0
            }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && C(null == _r88 ? void 0 : _r88.nextSibling) && sw.remove(_r88.nextSibling), function (e) {
              e.dispatch("remove");
            }(e), e.editorManager.remove(e), !e.inline && _o135 && function (e) {
              sw.setStyle(e.id, "display", e.orgDisplay);
            }(e), function (e) {
              e.dispatch("detach");
            }(e), sw.remove(e.getContainer()), aw(_t187), aw(_n143), e.destroy();
          }
        })(this);
      }
    }, {
      key: "destroy",
      value: function destroy(e) {
        (function (e, t) {
          var n = e.selection,
              o = e.dom;
          e.destroyed || (t || e.removed ? (t || (e.editorManager.off("beforeunload", e._beforeUnload), e.theme && e.theme.destroy && e.theme.destroy(), aw(n), aw(o)), function (e) {
            var t = e.formElement;
            t && (t._mceOldSubmit && (t.submit = t._mceOldSubmit, delete t._mceOldSubmit), sw.unbind(t, "submit reset", e.formEventDelegate));
          }(e), function (e) {
            var t = e;
            t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null, t.bodyElement = t.contentDocument = t.contentWindow = null, t.iframeElement = t.targetElm = null;
            var n = e.selection;

            if (n) {
              var _e168 = n.dom;
              t.selection = n.win = n.dom = _e168.doc = null;
            }
          }(e), e.destroyed = !0) : e.remove());
        })(this, e);
      }
    }, {
      key: "uploadImages",
      value: function uploadImages() {
        return this.editorUpload.uploadImages();
      }
    }, {
      key: "_scanForImages",
      value: function _scanForImages() {
        return this.editorUpload.scanForImages();
      }
    }]);

    return ST;
  }();

  var _T = Oa.DOM,
      NT = Dt.each;
  var RT,
      AT = !1,
      OT = [];

  var TT = function TT(e) {
    var t = e.type;
    NT(LT.get(), function (n) {
      switch (t) {
        case "scroll":
          n.dispatch("ScrollWindow", e);
          break;

        case "resize":
          n.dispatch("ResizeWindow", e);
      }
    });
  },
      BT = function BT(e) {
    if (e !== AT) {
      var _t188 = Oa.DOM;
      e ? (_t188.bind(window, "resize", TT), _t188.bind(window, "scroll", TT)) : (_t188.unbind(window, "resize", TT), _t188.unbind(window, "scroll", TT)), AT = e;
    }
  },
      DT = function DT(e) {
    var t = OT;
    return OT = G(OT, function (t) {
      return e !== t;
    }), LT.activeEditor === e && (LT.activeEditor = OT.length > 0 ? OT[0] : null), LT.focusedEditor === e && (LT.focusedEditor = null), t.length !== OT.length;
  },
      PT = "CSS1Compat" !== document.compatMode,
      LT = _objectSpread({}, nT, {
    baseURI: null,
    baseURL: null,
    defaultOptions: {},
    documentBaseURL: null,
    suffix: null,
    majorVersion: "6",
    minorVersion: "6.2",
    releaseDate: "2023-08-09",
    i18n: Ia,
    activeEditor: null,
    focusedEditor: null,
    setup: function setup() {
      var e = this;
      var t = "",
          n = "",
          o = $y.getDocumentBaseUrl(document.location);
      /^[^:]+:\/\/\/?[^\/]+\//.test(o) && (o = o.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(o) || (o += "/"));
      var r = window.tinymce || window.tinyMCEPreInit;
      if (r) t = r.base || r.baseURL, n = r.suffix;else {
        var _e169 = document.getElementsByTagName("script");

        for (var _o136 = 0; _o136 < _e169.length; _o136++) {
          var _r89 = _e169[_o136].src || "";

          if ("" === _r89) continue;

          var _s59 = _r89.substring(_r89.lastIndexOf("/"));

          if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(_r89)) {
            -1 !== _s59.indexOf(".min") && (n = ".min"), t = _r89.substring(0, _r89.lastIndexOf("/"));
            break;
          }
        }

        if (!t && document.currentScript) {
          var _e170 = document.currentScript.src;
          -1 !== _e170.indexOf(".min") && (n = ".min"), t = _e170.substring(0, _e170.lastIndexOf("/"));
        }
      }
      var s;
      e.baseURL = new $y(o).toAbsolute(t), e.documentBaseURL = o, e.baseURI = new $y(e.baseURL), e.suffix = n, (s = e).on("AddEditor", O(yg, s)), s.on("RemoveEditor", O(Cg, s));
    },
    overrideDefaults: function overrideDefaults(e) {
      var t = e.base_url;
      t && this._setBaseUrl(t);
      var n = e.suffix;
      n && (this.suffix = n), this.defaultOptions = e;
      var o = e.plugin_base_urls;
      void 0 !== o && ge(o, function (e, t) {
        Fa.PluginManager.urls[t] = e;
      });
    },
    init: function init(e) {
      var t = this;
      var n;
      var o = Dt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " ");

      var r = function r(e) {
        n = e;
      };

      var s = function s() {
        var n = 0;
        var a = [];
        var i;
        _T.unbind(window, "ready", s), function (n) {
          var o = e.onpageload;
          o && o.apply(t, []);
        }(), i = function (e, t) {
          var n = [],
              o = w(t) ? function (e) {
            return $(n, function (n) {
              return t(n, e);
            });
          } : function (e) {
            return H(n, e);
          };

          for (var _t189 = 0, _r90 = e.length; _t189 < _r90; _t189++) {
            var _r91 = e[_t189];
            o(_r91) || n.push(_r91);
          }

          return n;
        }(function (e) {
          return At.browser.isIE() || At.browser.isEdge() ? (kw("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/6/support/#supportedwebbrowsers"), []) : PT ? (kw("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), []) : m(e.selector) ? _T.select(e.selector) : C(e.target) ? [e.target] : [];
        }(e)), Dt.each(i, function (e) {
          var n;
          (n = t.get(e.id)) && n.initialized && !(n.getContainer() || n.getBody()).parentNode && (DT(n), n.unbindAllNativeEvents(), n.destroy(!0), n.removed = !0);
        }), i = Dt.grep(i, function (e) {
          return !t.get(e.id);
        }), 0 === i.length ? r([]) : NT(i, function (s) {
          (function (e, t) {
            return e.inline && t.tagName.toLowerCase() in o;
          })(e, s) ? kw("Could not initialize inline editor on invalid inline target element", s) : function (e, o, s) {
            var l = new ST(e, o, t);
            a.push(l), l.on("init", function () {
              ++n === i.length && r(a);
            }), l.targetElm = l.targetElm || s, l.render();
          }(function (e) {
            var t = e.id;
            return t || (t = xe(e, "name").filter(function (e) {
              return !_T.get(e);
            }).getOrThunk(_T.uniqueId), e.setAttribute("id", t)), t;
          }(s), e, s);
        });
      };

      return _T.bind(window, "ready", s), new Promise(function (e) {
        n ? e(n) : r = function r(t) {
          e(t);
        };
      });
    },
    get: function get(e) {
      return 0 === arguments.length ? OT.slice(0) : m(e) ? J(OT, function (t) {
        return t.id === e;
      }).getOr(null) : x(e) && OT[e] ? OT[e] : null;
    },
    add: function add(e) {
      var t = this,
          n = t.get(e.id);
      return n === e || (null === n && OT.push(e), BT(!0), t.activeEditor = e, t.dispatch("AddEditor", {
        editor: e
      }), RT || (RT = function RT(e) {
        var n = t.dispatch("BeforeUnload");
        if (n.returnValue) return e.preventDefault(), e.returnValue = n.returnValue, n.returnValue;
      }, window.addEventListener("beforeunload", RT))), e;
    },
    createEditor: function createEditor(e, t) {
      return this.add(new ST(e, t, this));
    },
    remove: function remove(e) {
      var t = this;
      var n;

      if (e) {
        if (!m(e)) return n = e, h(t.get(n.id)) ? null : (DT(n) && t.dispatch("RemoveEditor", {
          editor: n
        }), 0 === OT.length && window.removeEventListener("beforeunload", RT), n.remove(), BT(OT.length > 0), n);
        NT(_T.select(e), function (e) {
          n = t.get(e.id), n && t.remove(n);
        });
      } else for (var _e171 = OT.length - 1; _e171 >= 0; _e171--) {
        t.remove(OT[_e171]);
      }
    },
    execCommand: function execCommand(e, t, n) {
      var o;
      var r = this,
          s = f(n) ? null !== (o = n.id) && void 0 !== o ? o : n.index : n;

      switch (e) {
        case "mceAddEditor":
          if (!r.get(s)) {
            var _e172 = n.options;
            new ST(s, _e172, r).render();
          }

          return !0;

        case "mceRemoveEditor":
          {
            var _e173 = r.get(s);

            return _e173 && _e173.remove(), !0;
          }

        case "mceToggleEditor":
          {
            var _e174 = r.get(s);

            return _e174 ? (_e174.isHidden() ? _e174.show() : _e174.hide(), !0) : (r.execCommand("mceAddEditor", !1, n), !0);
          }
      }

      return !!r.activeEditor && r.activeEditor.execCommand(e, t, n);
    },
    triggerSave: function triggerSave() {
      NT(OT, function (e) {
        e.save();
      });
    },
    addI18n: function addI18n(e, t) {
      Ia.add(e, t);
    },
    translate: function translate(e) {
      return Ia.translate(e);
    },
    setActive: function setActive(e) {
      var t = this.activeEditor;
      this.activeEditor !== e && (t && t.dispatch("deactivate", {
        relatedTarget: e
      }), e.dispatch("activate", {
        relatedTarget: t
      })), this.activeEditor = e;
    },
    _setBaseUrl: function _setBaseUrl(e) {
      this.baseURL = new $y(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new $y(this.baseURL);
    }
  });

  LT.setup();

  var MT = function () {
    var e = za();
    return {
      FakeClipboardItem: function FakeClipboardItem(e) {
        return {
          items: e,
          types: me(e),
          getType: function getType(t) {
            return xe(e, t).getOrUndefined();
          }
        };
      },
      write: function write(t) {
        e.set(t);
      },
      read: function read() {
        return e.get().getOrUndefined();
      },
      clear: e.clear
    };
  }(),
      IT = Math.min,
      FT = Math.max,
      UT = Math.round,
      zT = function zT(e, t, n) {
    var o = t.x,
        r = t.y;
    var s = e.w,
        a = e.h,
        i = t.w,
        l = t.h,
        d = (n || "").split("");
    return "b" === d[0] && (r += l), "r" === d[1] && (o += i), "c" === d[0] && (r += UT(l / 2)), "c" === d[1] && (o += UT(i / 2)), "b" === d[3] && (r -= a), "r" === d[4] && (o -= s), "c" === d[3] && (r -= UT(a / 2)), "c" === d[4] && (o -= UT(s / 2)), jT(o, r, s, a);
  },
      jT = function jT(e, t, n, o) {
    return {
      x: e,
      y: t,
      w: n,
      h: o
    };
  },
      HT = {
    inflate: function inflate(e, t, n) {
      return jT(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
    },
    relativePosition: zT,
    findBestRelativePosition: function findBestRelativePosition(e, t, n, o) {
      for (var _r92 = 0; _r92 < o.length; _r92++) {
        var _s60 = zT(e, t, o[_r92]);

        if (_s60.x >= n.x && _s60.x + _s60.w <= n.w + n.x && _s60.y >= n.y && _s60.y + _s60.h <= n.h + n.y) return o[_r92];
      }

      return null;
    },
    intersect: function intersect(e, t) {
      var n = FT(e.x, t.x),
          o = FT(e.y, t.y),
          r = IT(e.x + e.w, t.x + t.w),
          s = IT(e.y + e.h, t.y + t.h);
      return r - n < 0 || s - o < 0 ? null : jT(n, o, r - n, s - o);
    },
    clamp: function clamp(e, t, n) {
      var o = e.x,
          r = e.y,
          s = e.x + e.w,
          a = e.y + e.h;
      var i = t.x + t.w,
          l = t.y + t.h,
          d = FT(0, t.x - o),
          c = FT(0, t.y - r),
          u = FT(0, s - i),
          m = FT(0, a - l);
      return o += d, r += c, n && (s += d, a += c, o -= u, r -= m), s -= u, a -= m, jT(o, r, s - o, a - r);
    },
    create: jT,
    fromClientRect: function fromClientRect(e) {
      return jT(e.left, e.top, e.width, e.height);
    }
  },
      $T = function () {
    var e = {},
        t = {};
    return {
      load: function load(n, o) {
        var r = "Script at URL \"".concat(o, "\" failed to load"),
            s = "Script at URL \"".concat(o, "\" did not call `tinymce.Resource.add('").concat(n, "', data)` within 1 second");
        if (void 0 !== e[n]) return e[n];
        {
          var _a35 = new Promise(function (e, a) {
            var i = function (e, t) {
              var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e3;
              var o = !1,
                  r = null;

              var s = function s(e) {
                return function () {
                  for (var _len14 = arguments.length, t = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                    t[_key14] = arguments[_key14];
                  }

                  o || (o = !0, null !== r && (clearTimeout(r), r = null), e.apply(null, t));
                };
              },
                  a = s(e),
                  i = s(t);

              return {
                start: function start() {
                  for (var _len15 = arguments.length, e = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
                    e[_key15] = arguments[_key15];
                  }

                  o || null !== r || (r = setTimeout(function () {
                    return i.apply(null, e);
                  }, n));
                },
                resolve: a,
                reject: i
              };
            }(e, a);

            t[n] = i.resolve, Ba.ScriptLoader.loadScript(o).then(function () {
              return i.start(s);
            }, function () {
              return i.reject(r);
            });
          });

          return e[n] = _a35, _a35;
        }
      },
      add: function add(n, o) {
        void 0 !== t[n] && (t[n](o), delete t[n]), e[n] = Promise.resolve(o);
      },
      unload: function unload(t) {
        delete e[t];
      }
    };
  }();

  var VT;

  try {
    var _e175 = "__storage_test__";
    VT = window.localStorage, VT.setItem(_e175, _e175), VT.removeItem(_e175);
  } catch (e) {
    VT = function () {
      var e = {},
          t = [];
      var n = {
        getItem: function getItem(t) {
          return e[t] || null;
        },
        setItem: function setItem(n, o) {
          t.push(n), e[n] = String(o);
        },
        key: function key(e) {
          return t[e];
        },
        removeItem: function removeItem(n) {
          t = t.filter(function (e) {
            return e === n;
          }), delete e[n];
        },
        clear: function clear() {
          t = [], e = {};
        },
        length: 0
      };
      return Object.defineProperty(n, "length", {
        get: function get() {
          return t.length;
        },
        configurable: !1,
        enumerable: !1
      }), n;
    }();
  }

  var qT = {
    geom: {
      Rect: HT
    },
    util: {
      Delay: fg,
      Tools: Dt,
      VK: tf,
      URI: $y,
      EventDispatcher: eT,
      Observable: nT,
      I18n: Ia,
      LocalStorage: VT,
      ImageUploader: function ImageUploader(e) {
        var t = _w(),
            n = Ow(e, t);

        return {
          upload: function upload(t) {
            var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            return n.upload(t, o ? Aw(e) : void 0);
          }
        };
      }
    },
    dom: {
      EventUtils: Ca,
      TreeWalker: Fo,
      TextSeeker: ii,
      DOMUtils: Oa,
      ScriptLoader: Ba,
      RangeUtils: Pf,
      Serializer: WC,
      StyleSheetLoader: Ds,
      ControlSelection: af,
      BookmarkManager: Km,
      Selection: $C,
      Event: Ca.Event
    },
    html: {
      Styles: ua,
      Entities: Qs,
      Node: Ug,
      Schema: ca,
      DomParser: nC,
      Writer: Gg,
      Serializer: Yg
    },
    Env: At,
    AddOnManager: Fa,
    Annotator: Wm,
    Formatter: Hw,
    UndoManager: Vw,
    EditorCommands: qO,
    WindowManager: vw,
    NotificationManager: pw,
    EditorObservable: lT,
    Shortcuts: CT,
    Editor: ST,
    FocusManager: mg,
    EditorManager: LT,
    DOM: Oa.DOM,
    ScriptLoader: Ba.ScriptLoader,
    PluginManager: hw,
    ThemeManager: bw,
    ModelManager: lw,
    IconManager: iw,
    Resource: $T,
    FakeClipboard: MT,
    trim: Dt.trim,
    isArray: Dt.isArray,
    is: Dt.is,
    toArray: Dt.toArray,
    makeMap: Dt.makeMap,
    each: Dt.each,
    map: Dt.map,
    grep: Dt.grep,
    inArray: Dt.inArray,
    extend: Dt.extend,
    walk: Dt.walk,
    resolve: Dt.resolve,
    explode: Dt.explode,
    _addCacheSuffix: Dt._addCacheSuffix
  },
      WT = Dt.extend(LT, qT);
  (function (e) {
    window.tinymce = e, window.tinyMCE = e;
  })(WT), function (e) {
    if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module))) try {
      module.exports = e;
    } catch (e) {}
  }(WT);
}();