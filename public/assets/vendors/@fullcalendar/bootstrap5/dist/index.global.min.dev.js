"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*!
FullCalendar Bootstrap 5 Plugin v6.1.11
Docs & License: https://fullcalendar.io/docs/bootstrap5
(c) 2023 Adam Shaw
*/
FullCalendar.Bootstrap5 = function (e, t, o) {
  "use strict";

  var r =
  /*#__PURE__*/
  function (_o$Theme) {
    _inherits(r, _o$Theme);

    function r() {
      _classCallCheck(this, r);

      return _possibleConstructorReturn(this, _getPrototypeOf(r).apply(this, arguments));
    }

    return r;
  }(o.Theme);

  r.prototype.classes = {
    root: "fc-theme-bootstrap5",
    tableCellShaded: "fc-theme-bootstrap5-shaded",
    buttonGroup: "btn-group",
    button: "btn btn-primary",
    buttonActive: "active",
    popover: "popover",
    popoverHeader: "popover-header",
    popoverContent: "popover-body"
  }, r.prototype.baseIconClass = "bi", r.prototype.iconClasses = {
    close: "bi-x-lg",
    prev: "bi-chevron-left",
    next: "bi-chevron-right",
    prevYear: "bi-chevron-double-left",
    nextYear: "bi-chevron-double-right"
  }, r.prototype.rtlIconClasses = {
    prev: "bi-chevron-right",
    next: "bi-chevron-left",
    prevYear: "bi-chevron-double-right",
    nextYear: "bi-chevron-double-left"
  }, r.prototype.iconOverrideOption = "buttonIcons", r.prototype.iconOverrideCustomButtonOption = "icon", r.prototype.iconOverridePrefix = "bi-";
  o.injectStyles(".fc-theme-bootstrap5 a:not([href]){color:inherit;text-decoration:inherit}.fc-theme-bootstrap5 .fc-list,.fc-theme-bootstrap5 .fc-scrollgrid,.fc-theme-bootstrap5 td,.fc-theme-bootstrap5 th{border:1px solid var(--bs-gray-400)}.fc-theme-bootstrap5 .fc-scrollgrid{border-bottom-width:0;border-right-width:0}.fc-theme-bootstrap5-shaded{background-color:var(--bs-gray-200)}");
  var a = t.createPlugin({
    name: "@fullcalendar/bootstrap5",
    themeClasses: {
      bootstrap5: r
    }
  }),
      n = {
    __proto__: null,
    BootstrapTheme: r
  };
  return t.globalPlugins.push(a), e.Internal = n, e["default"] = a, Object.defineProperty(e, "__esModule", {
    value: !0
  }), e;
}({}, FullCalendar, FullCalendar.Internal);