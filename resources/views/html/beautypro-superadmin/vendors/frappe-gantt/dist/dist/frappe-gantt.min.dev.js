"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Gantt = function () {
  "use strict";

  var t = "year",
      e = "month",
      s = "day",
      i = "hour",
      n = "minute",
      a = "second",
      o = "millisecond",
      r = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    ru: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    ptBr: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    tr: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    zh: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
  };
  var h = {
    parse: function parse(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "-";
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : /[.:]/;
      if (t instanceof Date) return t;

      if ("string" == typeof t) {
        var _i, _n;

        var _a = t.split(" ");

        _i = _a[0].split(e).map(function (t) {
          return parseInt(t, 10);
        }), _n = _a[1] && _a[1].split(s), _i[1] = _i[1] - 1;
        var _o = _i;
        return _n && _n.length && (4 == _n.length && (_n[3] = "0." + _n[3], _n[3] = 1e3 * parseFloat(_n[3])), _o = _o.concat(_n)), _construct(Date, _toConsumableArray(_o));
      }
    },
    to_string: function to_string(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
      if (!(t instanceof Date)) throw new TypeError("Invalid argument type");
      var s = this.get_date_values(t).map(function (t, e) {
        return 1 === e && (t += 1), d(t + "", 6 === e ? 3 : 2, "0");
      }),
          i = "".concat(s[0], "-").concat(s[1], "-").concat(s[2]),
          n = "".concat(s[3], ":").concat(s[4], ":").concat(s[5], ".").concat(s[6]);
      return i + (e ? " " + n : "");
    },
    format: function format(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YYYY-MM-DD HH:mm:ss.SSS";
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en";
      var i = this.get_date_values(t).map(function (t) {
        return d(t, 2, 0);
      }),
          n = {
        YYYY: i[0],
        MM: d(+i[1] + 1, 2, 0),
        DD: i[2],
        HH: i[3],
        mm: i[4],
        ss: i[5],
        SSS: i[6],
        D: i[2],
        MMMM: r[s][+i[1]],
        MMM: r[s][+i[1]]
      };
      var a = e;
      var o = [];
      return Object.keys(n).sort(function (t, e) {
        return e.length - t.length;
      }).forEach(function (t) {
        a.includes(t) && (a = a.replace(t, "$".concat(o.length)), o.push(n[t]));
      }), o.forEach(function (t, e) {
        a = a.replace("$".concat(e), t);
      }), a;
    },
    diff: function diff(t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : s;
      var n, a, o, r, h, d, p;
      return n = t - e, a = n / 1e3, r = a / 60, o = r / 60, h = o / 24, d = h / 30, p = d / 12, i.endsWith("s") || (i += "s"), Math.floor({
        milliseconds: n,
        seconds: a,
        minutes: r,
        hours: o,
        days: h,
        months: d,
        years: p
      }[i]);
    },
    today: function today() {
      var t = this.get_date_values(new Date()).slice(0, 3);
      return _construct(Date, _toConsumableArray(t));
    },
    now: function now() {
      return new Date();
    },
    add: function add(r, h, d) {
      h = parseInt(h, 10);
      var p = [r.getFullYear() + (d === t ? h : 0), r.getMonth() + (d === e ? h : 0), r.getDate() + (d === s ? h : 0), r.getHours() + (d === i ? h : 0), r.getMinutes() + (d === n ? h : 0), r.getSeconds() + (d === a ? h : 0), r.getMilliseconds() + (d === o ? h : 0)];
      return _construct(Date, p);
    },
    start_of: function start_of(r, h) {
      var _d;

      var d = (_d = {}, _defineProperty(_d, t, 6), _defineProperty(_d, e, 5), _defineProperty(_d, s, 4), _defineProperty(_d, i, 3), _defineProperty(_d, n, 2), _defineProperty(_d, a, 1), _defineProperty(_d, o, 0), _d);

      function p(t) {
        return d[t] <= d[h];
      }

      var _ = [r.getFullYear(), p(t) ? 0 : r.getMonth(), p(e) ? 1 : r.getDate(), p(s) ? 0 : r.getHours(), p(i) ? 0 : r.getMinutes(), p(n) ? 0 : r.getSeconds(), p(a) ? 0 : r.getMilliseconds()];
      return _construct(Date, _);
    },
    clone: function clone(t) {
      return _construct(Date, _toConsumableArray(this.get_date_values(t)));
    },
    get_date_values: function get_date_values(t) {
      return [t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()];
    },
    get_days_in_month: function get_days_in_month(t) {
      var e = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          s = t.getMonth();
      if (1 !== s) return e[s];
      var i = t.getFullYear();
      return i % 4 == 0 && i % 100 != 0 || i % 400 == 0 ? 29 : 28;
    }
  };

  function d(t, e, s) {
    return t += "", e >>= 0, s = String(void 0 !== s ? s : " "), t.length > e ? String(t) : ((e -= t.length) > s.length && (s += s.repeat(e / s.length)), s.slice(0, e) + String(t));
  }

  function p(t, e) {
    return "string" == typeof t ? (e || document).querySelector(t) : t || null;
  }

  function _(t, e) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", t);

    for (var _t in e) {
      if ("append_to" === _t) {
        e.append_to.appendChild(s);
      } else "innerHTML" === _t ? s.innerHTML = e.innerHTML : s.setAttribute(_t, e[_t]);
    }

    return s;
  }

  function g(t, e, s, i) {
    var n = function (t, e, s, i) {
      var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "0.4s";
      var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "0.1s";
      var o = t.querySelector("animate");
      if (o) return p.attr(o, {
        attributeName: e,
        from: s,
        to: i,
        dur: n,
        begin: "click + " + a
      }), t;

      var r = _("animate", {
        attributeName: e,
        from: s,
        to: i,
        dur: n,
        begin: a,
        calcMode: "spline",
        values: s + ";" + i,
        keyTimes: "0; 1",
        keySplines: l("ease-out")
      });

      return t.appendChild(r), t;
    }(t, e, s, i);

    if (n === t) {
      var _t2 = document.createEvent("HTMLEvents");

      _t2.initEvent("click", !0, !0), _t2.eventName = "click", n.dispatchEvent(_t2);
    }
  }

  function l(t) {
    return {
      ease: ".25 .1 .25 1",
      linear: "0 0 1 1",
      "ease-in": ".42 0 1 1",
      "ease-out": "0 0 .58 1",
      "ease-in-out": ".42 0 .58 1"
    }[t];
  }

  p.on = function (t, e, s, i) {
    i ? p.delegate(t, e, s, i) : (i = s, p.bind(t, e, i));
  }, p.off = function (t, e, s) {
    t.removeEventListener(e, s);
  }, p.bind = function (t, e, s) {
    e.split(/\s+/).forEach(function (e) {
      t.addEventListener(e, s);
    });
  }, p.delegate = function (t, e, s, i) {
    t.addEventListener(e, function (t) {
      var e = t.target.closest(s);
      e && (t.delegatedTarget = e, i.call(this, t, e));
    });
  }, p.closest = function (t, e) {
    return e ? e.matches(t) ? e : p.closest(t, e.parentNode) : null;
  }, p.attr = function (t, e, s) {
    if (!s && "string" == typeof e) return t.getAttribute(e);
    if ("object" != _typeof(e)) t.setAttribute(e, s);else for (var _s in e) {
      p.attr(t, _s, e[_s]);
    }
  };

  var u =
  /*#__PURE__*/
  function () {
    function u(t, e) {
      _classCallCheck(this, u);

      this.set_defaults(t, e), this.prepare(), this.draw(), this.bind();
    }

    _createClass(u, [{
      key: "set_defaults",
      value: function set_defaults(t, e) {
        this.action_completed = !1, this.gantt = t, this.task = e;
      }
    }, {
      key: "prepare",
      value: function prepare() {
        this.prepare_values(), this.prepare_helpers();
      }
    }, {
      key: "prepare_values",
      value: function prepare_values() {
        this.invalid = this.task.invalid, this.height = this.gantt.options.bar_height, this.x = this.compute_x(), this.y = this.compute_y(), this.corner_radius = this.gantt.options.bar_corner_radius, this.duration = h.diff(this.task._end, this.task._start, "hour") / this.gantt.options.step, this.width = this.gantt.options.column_width * this.duration, this.progress_width = this.gantt.options.column_width * this.duration * (this.task.progress / 100) || 0, this.group = _("g", {
          "class": "bar-wrapper " + (this.task.custom_class || ""),
          "data-id": this.task.id
        }), this.bar_group = _("g", {
          "class": "bar-group",
          append_to: this.group
        }), this.handle_group = _("g", {
          "class": "handle-group",
          append_to: this.group
        });
      }
    }, {
      key: "prepare_helpers",
      value: function prepare_helpers() {
        SVGElement.prototype.getX = function () {
          return +this.getAttribute("x");
        }, SVGElement.prototype.getY = function () {
          return +this.getAttribute("y");
        }, SVGElement.prototype.getWidth = function () {
          return +this.getAttribute("width");
        }, SVGElement.prototype.getHeight = function () {
          return +this.getAttribute("height");
        }, SVGElement.prototype.getEndX = function () {
          return this.getX() + this.getWidth();
        };
      }
    }, {
      key: "draw",
      value: function draw() {
        this.draw_bar(), this.draw_progress_bar(), this.draw_label(), this.draw_resize_handles();
      }
    }, {
      key: "draw_bar",
      value: function draw_bar() {
        this.$bar = _("rect", {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
          rx: this.corner_radius,
          ry: this.corner_radius,
          "class": "bar",
          append_to: this.bar_group
        }), g(this.$bar, "width", 0, this.width), this.invalid && this.$bar.classList.add("bar-invalid");
      }
    }, {
      key: "draw_progress_bar",
      value: function draw_progress_bar() {
        this.invalid || (this.$bar_progress = _("rect", {
          x: this.x,
          y: this.y,
          width: this.progress_width,
          height: this.height,
          rx: this.corner_radius,
          ry: this.corner_radius,
          "class": "bar-progress",
          append_to: this.bar_group
        }), g(this.$bar_progress, "width", 0, this.progress_width));
      }
    }, {
      key: "draw_label",
      value: function draw_label() {
        var _this = this;

        _("text", {
          x: this.x + this.width / 2,
          y: this.y + this.height / 2,
          innerHTML: this.task.name,
          "class": "bar-label",
          append_to: this.bar_group
        }), requestAnimationFrame(function () {
          return _this.update_label_position();
        });
      }
    }, {
      key: "draw_resize_handles",
      value: function draw_resize_handles() {
        if (this.invalid) return;
        var t = this.$bar;
        _("rect", {
          x: t.getX() + t.getWidth() - 9,
          y: t.getY() + 1,
          width: 8,
          height: this.height - 2,
          rx: this.corner_radius,
          ry: this.corner_radius,
          "class": "handle right",
          append_to: this.handle_group
        }), _("rect", {
          x: t.getX() + 1,
          y: t.getY() + 1,
          width: 8,
          height: this.height - 2,
          rx: this.corner_radius,
          ry: this.corner_radius,
          "class": "handle left",
          append_to: this.handle_group
        }), this.task.progress && this.task.progress < 100 && (this.$handle_progress = _("polygon", {
          points: this.get_progress_polygon_points().join(","),
          "class": "handle progress",
          append_to: this.handle_group
        }));
      }
    }, {
      key: "get_progress_polygon_points",
      value: function get_progress_polygon_points() {
        var t = this.$bar_progress;
        return [t.getEndX() - 5, t.getY() + t.getHeight(), t.getEndX() + 5, t.getY() + t.getHeight(), t.getEndX(), t.getY() + t.getHeight() - 8.66];
      }
    }, {
      key: "bind",
      value: function bind() {
        this.invalid || this.setup_click_event();
      }
    }, {
      key: "setup_click_event",
      value: function setup_click_event() {
        var _this2 = this;

        p.on(this.group, "focus " + this.gantt.options.popup_trigger, function (t) {
          _this2.action_completed || (_this2.show_popup(), _this2.gantt.unselect_all(), _this2.group.classList.add("active"));
        }), p.on(this.group, "dblclick", function (t) {
          _this2.action_completed || _this2.gantt.trigger_event("click", [_this2.task]);
        });
      }
    }, {
      key: "show_popup",
      value: function show_popup() {
        if (this.gantt.bar_being_dragged) return;
        var t = h.format(this.task._start, "MMM D", this.gantt.options.language) + " - " + h.format(h.add(this.task._end, -1, "second"), "MMM D", this.gantt.options.language);
        this.gantt.show_popup({
          target_element: this.$bar,
          title: this.task.name,
          subtitle: t,
          task: this.task
        });
      }
    }, {
      key: "update_bar_position",
      value: function update_bar_position(_ref) {
        var _this3 = this;

        var _ref$x = _ref.x,
            t = _ref$x === void 0 ? null : _ref$x,
            _ref$width = _ref.width,
            e = _ref$width === void 0 ? null : _ref$width;
        var s = this.$bar;

        if (t) {
          if (!this.task.dependencies.map(function (t) {
            return _this3.gantt.get_bar(t).$bar.getX();
          }).reduce(function (e, s) {
            return t >= s;
          }, t)) return void (e = null);
          this.update_attr(s, "x", t);
        }

        e && e >= this.gantt.options.column_width && this.update_attr(s, "width", e), this.update_label_position(), this.update_handle_position(), this.update_progressbar_position(), this.update_arrow_position();
      }
    }, {
      key: "date_changed",
      value: function date_changed() {
        var t = !1;

        var _this$compute_start_e = this.compute_start_end_date(),
            e = _this$compute_start_e.new_start_date,
            s = _this$compute_start_e.new_end_date;

        Number(this.task._start) !== Number(e) && (t = !0, this.task._start = e), Number(this.task._end) !== Number(s) && (t = !0, this.task._end = s), t && this.gantt.trigger_event("date_change", [this.task, e, h.add(s, -1, "second")]);
      }
    }, {
      key: "progress_changed",
      value: function progress_changed() {
        var t = this.compute_progress();
        this.task.progress = t, this.gantt.trigger_event("progress_change", [this.task, t]);
      }
    }, {
      key: "set_action_completed",
      value: function set_action_completed() {
        var _this4 = this;

        this.action_completed = !0, setTimeout(function () {
          return _this4.action_completed = !1;
        }, 1e3);
      }
    }, {
      key: "compute_start_end_date",
      value: function compute_start_end_date() {
        var t = this.$bar,
            e = t.getX() / this.gantt.options.column_width,
            s = h.add(this.gantt.gantt_start, e * this.gantt.options.step, "hour"),
            i = t.getWidth() / this.gantt.options.column_width;
        return {
          new_start_date: s,
          new_end_date: h.add(s, i * this.gantt.options.step, "hour")
        };
      }
    }, {
      key: "compute_progress",
      value: function compute_progress() {
        var t = this.$bar_progress.getWidth() / this.$bar.getWidth() * 100;
        return parseInt(t, 10);
      }
    }, {
      key: "compute_x",
      value: function compute_x() {
        var _this$gantt$options = this.gantt.options,
            t = _this$gantt$options.step,
            e = _this$gantt$options.column_width,
            s = this.task._start,
            i = this.gantt.gantt_start;
        var n = h.diff(s, i, "hour") / t * e;

        if (this.gantt.view_is("Month")) {
          n = h.diff(s, i, "day") * e / 30;
        }

        return n;
      }
    }, {
      key: "compute_y",
      value: function compute_y() {
        return this.gantt.options.header_height + this.gantt.options.padding + this.task._index * (this.height + this.gantt.options.padding);
      }
    }, {
      key: "get_snap_position",
      value: function get_snap_position(t) {
        var e,
            s,
            i = t;
        return this.gantt.view_is("Week") ? (e = t % (this.gantt.options.column_width / 7), s = i - e + (e < this.gantt.options.column_width / 14 ? 0 : this.gantt.options.column_width / 7)) : this.gantt.view_is("Month") ? (e = t % (this.gantt.options.column_width / 30), s = i - e + (e < this.gantt.options.column_width / 60 ? 0 : this.gantt.options.column_width / 30)) : (e = t % this.gantt.options.column_width, s = i - e + (e < this.gantt.options.column_width / 2 ? 0 : this.gantt.options.column_width)), s;
      }
    }, {
      key: "update_attr",
      value: function update_attr(t, e, s) {
        return s = +s, isNaN(s) || t.setAttribute(e, s), t;
      }
    }, {
      key: "update_progressbar_position",
      value: function update_progressbar_position() {
        this.$bar_progress.setAttribute("x", this.$bar.getX()), this.$bar_progress.setAttribute("width", this.$bar.getWidth() * (this.task.progress / 100));
      }
    }, {
      key: "update_label_position",
      value: function update_label_position() {
        var t = this.$bar,
            e = this.group.querySelector(".bar-label");
        e.getBBox().width > t.getWidth() ? (e.classList.add("big"), e.setAttribute("x", t.getX() + t.getWidth() + 5)) : (e.classList.remove("big"), e.setAttribute("x", t.getX() + t.getWidth() / 2));
      }
    }, {
      key: "update_handle_position",
      value: function update_handle_position() {
        var t = this.$bar;
        this.handle_group.querySelector(".handle.left").setAttribute("x", t.getX() + 1), this.handle_group.querySelector(".handle.right").setAttribute("x", t.getEndX() - 9);
        var e = this.group.querySelector(".handle.progress");
        e && e.setAttribute("points", this.get_progress_polygon_points());
      }
    }, {
      key: "update_arrow_position",
      value: function update_arrow_position() {
        this.arrows = this.arrows || [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.arrows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _t3 = _step.value;

            _t3.update();
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
      }
    }]);

    return u;
  }();

  var c =
  /*#__PURE__*/
  function () {
    function c(t, e, s) {
      _classCallCheck(this, c);

      this.gantt = t, this.from_task = e, this.to_task = s, this.calculate_path(), this.draw();
    }

    _createClass(c, [{
      key: "calculate_path",
      value: function calculate_path() {
        var _this5 = this;

        var t = this.from_task.$bar.getX() + this.from_task.$bar.getWidth() / 2;

        var e = function e() {
          return _this5.to_task.$bar.getX() < t + _this5.gantt.options.padding && t > _this5.from_task.$bar.getX() + _this5.gantt.options.padding;
        };

        for (; e();) {
          t -= 10;
        }

        var s = this.gantt.options.header_height + this.gantt.options.bar_height + (this.gantt.options.padding + this.gantt.options.bar_height) * this.from_task.task._index + this.gantt.options.padding,
            i = this.to_task.$bar.getX() - this.gantt.options.padding / 2,
            n = this.gantt.options.header_height + this.gantt.options.bar_height / 2 + (this.gantt.options.padding + this.gantt.options.bar_height) * this.to_task.task._index + this.gantt.options.padding,
            a = this.from_task.task._index > this.to_task.task._index,
            o = this.gantt.options.arrow_curve,
            r = a ? 1 : 0,
            h = a ? -o : o,
            d = a ? n + this.gantt.options.arrow_curve : n - this.gantt.options.arrow_curve;

        if (this.path = "\n            M ".concat(t, " ").concat(s, "\n            V ").concat(d, "\n            a ").concat(o, " ").concat(o, " 0 0 ").concat(r, " ").concat(o, " ").concat(h, "\n            L ").concat(i, " ").concat(n, "\n            m -5 -5\n            l 5 5\n            l -5 5"), this.to_task.$bar.getX() < this.from_task.$bar.getX() + this.gantt.options.padding) {
          var _e = this.gantt.options.padding / 2 - o,
              _a2 = this.to_task.$bar.getY() + this.to_task.$bar.getHeight() / 2 - h,
              _d2 = this.to_task.$bar.getX() - this.gantt.options.padding;

          this.path = "\n                M ".concat(t, " ").concat(s, "\n                v ").concat(_e, "\n                a ").concat(o, " ").concat(o, " 0 0 1 -").concat(o, " ").concat(o, "\n                H ").concat(_d2, "\n                a ").concat(o, " ").concat(o, " 0 0 ").concat(r, " -").concat(o, " ").concat(h, "\n                V ").concat(_a2, "\n                a ").concat(o, " ").concat(o, " 0 0 ").concat(r, " ").concat(o, " ").concat(h, "\n                L ").concat(i, " ").concat(n, "\n                m -5 -5\n                l 5 5\n                l -5 5");
        }
      }
    }, {
      key: "draw",
      value: function draw() {
        this.element = _("path", {
          d: this.path,
          "data-from": this.from_task.task.id,
          "data-to": this.to_task.task.id
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.calculate_path(), this.element.setAttribute("d", this.path);
      }
    }]);

    return c;
  }();

  var m =
  /*#__PURE__*/
  function () {
    function m(t, e) {
      _classCallCheck(this, m);

      this.parent = t, this.custom_html = e, this.make();
    }

    _createClass(m, [{
      key: "make",
      value: function make() {
        this.parent.innerHTML = '\n            <div class="title"></div>\n            <div class="subtitle"></div>\n            <div class="pointer"></div>\n        ', this.hide(), this.title = this.parent.querySelector(".title"), this.subtitle = this.parent.querySelector(".subtitle"), this.pointer = this.parent.querySelector(".pointer");
      }
    }, {
      key: "show",
      value: function show(t) {
        if (!t.target_element) throw new Error("target_element is required to show popup");
        t.position || (t.position = "left");
        var e = t.target_element;

        if (this.custom_html) {
          var _e2 = this.custom_html(t.task);

          _e2 += '<div class="pointer"></div>', this.parent.innerHTML = _e2, this.pointer = this.parent.querySelector(".pointer");
        } else this.title.innerHTML = t.title, this.subtitle.innerHTML = t.subtitle, this.parent.style.width = this.parent.clientWidth + "px";

        var s;
        e instanceof HTMLElement ? s = e.getBoundingClientRect() : e instanceof SVGElement && (s = t.target_element.getBBox()), "left" === t.position && (this.parent.style.left = s.x + (s.width + 10) + "px", this.parent.style.top = s.y + "px", this.pointer.style.transform = "rotateZ(90deg)", this.pointer.style.left = "-7px", this.pointer.style.top = "2px"), this.parent.style.opacity = 1;
      }
    }, {
      key: "hide",
      value: function hide() {
        this.parent.style.opacity = 0, this.parent.style.left = 0;
      }
    }]);

    return m;
  }();

  var w = {
    QUARTER_DAY: "Quarter Day",
    HALF_DAY: "Half Day",
    DAY: "Day",
    WEEK: "Week",
    MONTH: "Month",
    YEAR: "Year"
  };

  var f =
  /*#__PURE__*/
  function () {
    function f(t, e, s) {
      _classCallCheck(this, f);

      this.setup_wrapper(t), this.setup_options(s), this.setup_tasks(e), this.change_view_mode(), this.bind_events();
    }

    _createClass(f, [{
      key: "setup_wrapper",
      value: function setup_wrapper(t) {
        var e, s;
        if ("string" == typeof t && (t = document.querySelector(t)), t instanceof HTMLElement) s = t, e = t.querySelector("svg");else {
          if (!(t instanceof SVGElement)) throw new TypeError("Frappé Gantt only supports usage of a string CSS selector, HTML DOM element or SVG DOM element for the 'element' parameter");
          e = t;
        }
        e ? (this.$svg = e, this.$svg.classList.add("gantt")) : this.$svg = _("svg", {
          append_to: s,
          "class": "gantt"
        }), this.$container = document.createElement("div"), this.$container.classList.add("gantt-container");
        this.$svg.parentElement.appendChild(this.$container), this.$container.appendChild(this.$svg), this.popup_wrapper = document.createElement("div"), this.popup_wrapper.classList.add("popup-wrapper"), this.$container.appendChild(this.popup_wrapper);
      }
    }, {
      key: "setup_options",
      value: function setup_options(t) {
        var e = {
          header_height: 50,
          column_width: 30,
          step: 24,
          view_modes: _toConsumableArray(Object.values(w)),
          bar_height: 20,
          bar_corner_radius: 3,
          arrow_curve: 5,
          padding: 18,
          view_mode: "Day",
          date_format: "YYYY-MM-DD",
          popup_trigger: "click",
          custom_popup_html: null,
          language: "en"
        };
        this.options = Object.assign({}, e, t);
      }
    }, {
      key: "setup_tasks",
      value: function setup_tasks(t) {
        this.tasks = t.map(function (t, e) {
          if (t._start = h.parse(t.start), t._end = h.parse(t.end), h.diff(t._end, t._start, "year") > 10 && (t.end = null), t._index = e, !t.start && !t.end) {
            var _e3 = h.today();

            t._start = _e3, t._end = h.add(_e3, 2, "day");
          }

          !t.start && t.end && (t._start = h.add(t._end, -2, "day")), t.start && !t.end && (t._end = h.add(t._start, 2, "day"));

          if (h.get_date_values(t._end).slice(3).every(function (t) {
            return 0 === t;
          }) && (t._end = h.add(t._end, 24, "hour")), t.start && t.end || (t.invalid = !0), "string" == typeof t.dependencies || !t.dependencies) {
            var _e4 = [];
            t.dependencies && (_e4 = t.dependencies.split(",").map(function (t) {
              return t.trim();
            }).filter(function (t) {
              return t;
            })), t.dependencies = _e4;
          }

          return t.id || (t.id = function (t) {
            return t.name + "_" + Math.random().toString(36).slice(2, 12);
          }(t)), t;
        }), this.setup_dependencies();
      }
    }, {
      key: "setup_dependencies",
      value: function setup_dependencies() {
        this.dependency_map = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.tasks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _t4 = _step2.value;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = _t4.dependencies[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _e5 = _step3.value;
                this.dependency_map[_e5] = this.dependency_map[_e5] || [], this.dependency_map[_e5].push(_t4.id);
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
      }
    }, {
      key: "refresh",
      value: function refresh(t) {
        this.setup_tasks(t), this.change_view_mode();
      }
    }, {
      key: "change_view_mode",
      value: function change_view_mode() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.view_mode;
        this.update_view_scale(t), this.setup_dates(), this.render(), this.trigger_event("view_change", [t]);
      }
    }, {
      key: "update_view_scale",
      value: function update_view_scale(t) {
        this.options.view_mode = t, t === w.DAY ? (this.options.step = 24, this.options.column_width = 38) : t === w.HALF_DAY ? (this.options.step = 12, this.options.column_width = 38) : t === w.QUARTER_DAY ? (this.options.step = 6, this.options.column_width = 38) : t === w.WEEK ? (this.options.step = 168, this.options.column_width = 140) : t === w.MONTH ? (this.options.step = 720, this.options.column_width = 120) : t === w.YEAR && (this.options.step = 8760, this.options.column_width = 120);
      }
    }, {
      key: "setup_dates",
      value: function setup_dates() {
        this.setup_gantt_dates(), this.setup_date_values();
      }
    }, {
      key: "setup_gantt_dates",
      value: function setup_gantt_dates() {
        this.gantt_start = this.gantt_end = null;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.tasks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _t5 = _step4.value;
            (!this.gantt_start || _t5._start < this.gantt_start) && (this.gantt_start = _t5._start), (!this.gantt_end || _t5._end > this.gantt_end) && (this.gantt_end = _t5._end);
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

        this.gantt_start = h.start_of(this.gantt_start, "day"), this.gantt_end = h.start_of(this.gantt_end, "day"), this.view_is([w.QUARTER_DAY, w.HALF_DAY]) ? (this.gantt_start = h.add(this.gantt_start, -7, "day"), this.gantt_end = h.add(this.gantt_end, 7, "day")) : this.view_is(w.MONTH) ? (this.gantt_start = h.start_of(this.gantt_start, "year"), this.gantt_end = h.add(this.gantt_end, 1, "year")) : this.view_is(w.YEAR) ? (this.gantt_start = h.add(this.gantt_start, -2, "year"), this.gantt_end = h.add(this.gantt_end, 2, "year")) : (this.gantt_start = h.add(this.gantt_start, -1, "month"), this.gantt_end = h.add(this.gantt_end, 1, "month"));
      }
    }, {
      key: "setup_date_values",
      value: function setup_date_values() {
        this.dates = [];
        var t = null;

        for (; null === t || t < this.gantt_end;) {
          t = t ? this.view_is(w.YEAR) ? h.add(t, 1, "year") : this.view_is(w.MONTH) ? h.add(t, 1, "month") : h.add(t, this.options.step, "hour") : h.clone(this.gantt_start), this.dates.push(t);
        }
      }
    }, {
      key: "bind_events",
      value: function bind_events() {
        this.bind_grid_click(), this.bind_bar_events();
      }
    }, {
      key: "render",
      value: function render() {
        this.clear(), this.setup_layers(), this.make_grid(), this.make_dates(), this.make_bars(), this.make_arrows(), this.map_arrows_on_bars(), this.set_width(), this.set_scroll_position();
      }
    }, {
      key: "setup_layers",
      value: function setup_layers() {
        this.layers = {};
        var t = ["grid", "date", "arrow", "progress", "bar", "details"];

        for (var _i2 = 0, _t6 = t; _i2 < _t6.length; _i2++) {
          var _e6 = _t6[_i2];
          this.layers[_e6] = _("g", {
            "class": _e6,
            append_to: this.$svg
          });
        }
      }
    }, {
      key: "make_grid",
      value: function make_grid() {
        this.make_grid_background(), this.make_grid_rows(), this.make_grid_header(), this.make_grid_ticks(), this.make_grid_highlights();
      }
    }, {
      key: "make_grid_background",
      value: function make_grid_background() {
        var t = this.dates.length * this.options.column_width,
            e = this.options.header_height + this.options.padding + (this.options.bar_height + this.options.padding) * this.tasks.length;
        _("rect", {
          x: 0,
          y: 0,
          width: t,
          height: e,
          "class": "grid-background",
          append_to: this.layers.grid
        }), p.attr(this.$svg, {
          height: e + this.options.padding + 100,
          width: "100%"
        });
      }
    }, {
      key: "make_grid_rows",
      value: function make_grid_rows() {
        var t = _("g", {
          append_to: this.layers.grid
        }),
            e = _("g", {
          append_to: this.layers.grid
        }),
            s = this.dates.length * this.options.column_width,
            i = this.options.bar_height + this.options.padding;

        var n = this.options.header_height + this.options.padding / 2;
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = this.tasks[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _a3 = _step5.value;
            _("rect", {
              x: 0,
              y: n,
              width: s,
              height: i,
              "class": "grid-row",
              append_to: t
            }), _("line", {
              x1: 0,
              y1: n + i,
              x2: s,
              y2: n + i,
              "class": "row-line",
              append_to: e
            }), n += this.options.bar_height + this.options.padding;
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
    }, {
      key: "make_grid_header",
      value: function make_grid_header() {
        _("rect", {
          x: 0,
          y: 0,
          width: this.dates.length * this.options.column_width,
          height: this.options.header_height + 10,
          "class": "grid-header",
          append_to: this.layers.grid
        });
      }
    }, {
      key: "make_grid_ticks",
      value: function make_grid_ticks() {
        var t = 0,
            e = this.options.header_height + this.options.padding / 2,
            s = (this.options.bar_height + this.options.padding) * this.tasks.length;
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = this.dates[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _i3 = _step6.value;
            var _n2 = "tick";
            this.view_is(w.DAY) && 1 === _i3.getDate() && (_n2 += " thick"), this.view_is(w.WEEK) && _i3.getDate() >= 1 && _i3.getDate() < 8 && (_n2 += " thick"), this.view_is(w.MONTH) && (_i3.getMonth() + 1) % 3 == 0 && (_n2 += " thick"), _("path", {
              d: "M ".concat(t, " ").concat(e, " v ").concat(s),
              "class": _n2,
              append_to: this.layers.grid
            }), this.view_is(w.MONTH) ? t += h.get_days_in_month(_i3) * this.options.column_width / 30 : t += this.options.column_width;
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
      }
    }, {
      key: "make_grid_highlights",
      value: function make_grid_highlights() {
        if (this.view_is(w.DAY)) {
          _("rect", {
            x: h.diff(h.today(), this.gantt_start, "hour") / this.options.step * this.options.column_width,
            y: 0,
            width: this.options.column_width,
            height: (this.options.bar_height + this.options.padding) * this.tasks.length + this.options.header_height + this.options.padding / 2,
            "class": "today-highlight",
            append_to: this.layers.grid
          });
        }
      }
    }, {
      key: "make_dates",
      value: function make_dates() {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = this.get_dates_to_draw()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _t7 = _step7.value;

            if (_("text", {
              x: _t7.lower_x,
              y: _t7.lower_y,
              innerHTML: _t7.lower_text,
              "class": "lower-text",
              append_to: this.layers.date
            }), _t7.upper_text) {
              var _e7 = _("text", {
                x: _t7.upper_x,
                y: _t7.upper_y,
                innerHTML: _t7.upper_text,
                "class": "upper-text",
                append_to: this.layers.date
              });

              _e7.getBBox().x2 > this.layers.grid.getBBox().width && _e7.remove();
            }
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
      }
    }, {
      key: "get_dates_to_draw",
      value: function get_dates_to_draw() {
        var _this6 = this;

        var t = null;
        return this.dates.map(function (e, s) {
          var i = _this6.get_date_info(e, t, s);

          return t = e, i;
        });
      }
    }, {
      key: "get_date_info",
      value: function get_date_info(t, e, s) {
        e || (e = h.add(t, 1, "year"));
        var i = {
          "Quarter Day_lower": h.format(t, "HH", this.options.language),
          "Half Day_lower": h.format(t, "HH", this.options.language),
          Day_lower: t.getDate() !== e.getDate() ? h.format(t, "D", this.options.language) : "",
          Week_lower: t.getMonth() !== e.getMonth() ? h.format(t, "D MMM", this.options.language) : h.format(t, "D", this.options.language),
          Month_lower: h.format(t, "MMMM", this.options.language),
          Year_lower: h.format(t, "YYYY", this.options.language),
          "Quarter Day_upper": t.getDate() !== e.getDate() ? h.format(t, "D MMM", this.options.language) : "",
          "Half Day_upper": t.getDate() !== e.getDate() ? t.getMonth() !== e.getMonth() ? h.format(t, "D MMM", this.options.language) : h.format(t, "D", this.options.language) : "",
          Day_upper: t.getMonth() !== e.getMonth() ? h.format(t, "MMMM", this.options.language) : "",
          Week_upper: t.getMonth() !== e.getMonth() ? h.format(t, "MMMM", this.options.language) : "",
          Month_upper: t.getFullYear() !== e.getFullYear() ? h.format(t, "YYYY", this.options.language) : "",
          Year_upper: t.getFullYear() !== e.getFullYear() ? h.format(t, "YYYY", this.options.language) : ""
        },
            n = {
          x: s * this.options.column_width,
          lower_y: this.options.header_height,
          upper_y: this.options.header_height - 25
        },
            a = {
          "Quarter Day_lower": 4 * this.options.column_width / 2,
          "Quarter Day_upper": 0,
          "Half Day_lower": 2 * this.options.column_width / 2,
          "Half Day_upper": 0,
          Day_lower: this.options.column_width / 2,
          Day_upper: 30 * this.options.column_width / 2,
          Week_lower: 0,
          Week_upper: 4 * this.options.column_width / 2,
          Month_lower: this.options.column_width / 2,
          Month_upper: 12 * this.options.column_width / 2,
          Year_lower: this.options.column_width / 2,
          Year_upper: 30 * this.options.column_width / 2
        };
        return {
          upper_text: i["".concat(this.options.view_mode, "_upper")],
          lower_text: i["".concat(this.options.view_mode, "_lower")],
          upper_x: n.x + a["".concat(this.options.view_mode, "_upper")],
          upper_y: n.upper_y,
          lower_x: n.x + a["".concat(this.options.view_mode, "_lower")],
          lower_y: n.lower_y
        };
      }
    }, {
      key: "make_bars",
      value: function make_bars() {
        var _this7 = this;

        this.bars = this.tasks.map(function (t) {
          var e = new u(_this7, t);
          return _this7.layers.bar.appendChild(e.group), e;
        });
      }
    }, {
      key: "make_arrows",
      value: function make_arrows() {
        var _this8 = this;

        this.arrows = [];
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          var _loop = function _loop() {
            var t = _step8.value;
            var e = [];
            e = t.dependencies.map(function (e) {
              var s = _this8.get_task(e);

              if (!s) return;
              var i = new c(_this8, _this8.bars[s._index], _this8.bars[t._index]);
              return _this8.layers.arrow.appendChild(i.element), i;
            }).filter(Boolean), _this8.arrows = _this8.arrows.concat(e);
          };

          for (var _iterator8 = this.tasks[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            _loop();
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
      }
    }, {
      key: "map_arrows_on_bars",
      value: function map_arrows_on_bars() {
        var _this9 = this;

        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
          var _loop2 = function _loop2() {
            var t = _step9.value;
            t.arrows = _this9.arrows.filter(function (e) {
              return e.from_task.task.id === t.task.id || e.to_task.task.id === t.task.id;
            });
          };

          for (var _iterator9 = this.bars[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
            _loop2();
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
      key: "set_width",
      value: function set_width() {
        var t = this.$svg.getBoundingClientRect().width,
            e = this.$svg.querySelector(".grid .grid-row").getAttribute("width");
        t < e && this.$svg.setAttribute("width", e);
      }
    }, {
      key: "set_scroll_position",
      value: function set_scroll_position() {
        var t = this.$svg.parentElement;
        if (!t) return;
        var e = h.diff(this.get_oldest_starting_date(), this.gantt_start, "hour") / this.options.step * this.options.column_width - this.options.column_width;
        t.scrollLeft = e;
      }
    }, {
      key: "bind_grid_click",
      value: function bind_grid_click() {
        var _this10 = this;

        p.on(this.$svg, this.options.popup_trigger, ".grid-row, .grid-header", function () {
          _this10.unselect_all(), _this10.hide_popup();
        });
      }
    }, {
      key: "bind_bar_events",
      value: function bind_bar_events() {
        var _this11 = this;

        var t = !1,
            e = 0,
            s = 0,
            i = !1,
            n = !1,
            a = null,
            o = [];
        this.bar_being_dragged = null, p.on(this.$svg, "mousedown", ".bar-wrapper, .handle", function (r, h) {
          var d = p.closest(".bar-wrapper", h);
          h.classList.contains("left") ? i = !0 : h.classList.contains("right") ? n = !0 : h.classList.contains("bar-wrapper") && (t = !0), d.classList.add("active"), e = r.offsetX, s = r.offsetY, a = d.getAttribute("data-id");

          var _ = [a].concat(_toConsumableArray(_this11.get_all_dependent_tasks(a)));

          o = _.map(function (t) {
            return _this11.get_bar(t);
          }), _this11.bar_being_dragged = a, o.forEach(function (t) {
            var e = t.$bar;
            e.ox = e.getX(), e.oy = e.getY(), e.owidth = e.getWidth(), e.finaldx = 0;
          });
        }), p.on(this.$svg, "mousemove", function (s) {
          if (!(t || i || n)) return;
          var r = s.offsetX - e;
          s.offsetY, o.forEach(function (e) {
            var s = e.$bar;
            s.finaldx = _this11.get_snap_position(r), _this11.hide_popup(), i ? a === e.task.id ? e.update_bar_position({
              x: s.ox + s.finaldx,
              width: s.owidth - s.finaldx
            }) : e.update_bar_position({
              x: s.ox + s.finaldx
            }) : n ? a === e.task.id && e.update_bar_position({
              width: s.owidth + s.finaldx
            }) : t && e.update_bar_position({
              x: s.ox + s.finaldx
            });
          });
        }), document.addEventListener("mouseup", function (e) {
          (t || i || n) && o.forEach(function (t) {
            return t.group.classList.remove("active");
          }), t = !1, i = !1, n = !1;
        }), p.on(this.$svg, "mouseup", function (t) {
          _this11.bar_being_dragged = null, o.forEach(function (t) {
            t.$bar.finaldx && (t.date_changed(), t.set_action_completed());
          });
        }), this.bind_bar_progress();
      }
    }, {
      key: "bind_bar_progress",
      value: function bind_bar_progress() {
        var _this12 = this;

        var t = 0,
            e = 0,
            s = null,
            i = null,
            n = null,
            a = null;
        p.on(this.$svg, "mousedown", ".handle.progress", function (o, r) {
          s = !0, t = o.offsetX, e = o.offsetY;
          var h = p.closest(".bar-wrapper", r).getAttribute("data-id");
          i = _this12.get_bar(h), n = i.$bar_progress, a = i.$bar, n.finaldx = 0, n.owidth = n.getWidth(), n.min_dx = -n.getWidth(), n.max_dx = a.getWidth() - n.getWidth();
        }), p.on(this.$svg, "mousemove", function (e) {
          if (!s) return;
          var a = e.offsetX - t;
          e.offsetY, a > n.max_dx && (a = n.max_dx), a < n.min_dx && (a = n.min_dx);
          var o = i.$handle_progress;
          p.attr(n, "width", n.owidth + a), p.attr(o, "points", i.get_progress_polygon_points()), n.finaldx = a;
        }), p.on(this.$svg, "mouseup", function () {
          s = !1, n && n.finaldx && (i.progress_changed(), i.set_action_completed());
        });
      }
    }, {
      key: "get_all_dependent_tasks",
      value: function get_all_dependent_tasks(t) {
        var _this13 = this;

        var e = [],
            s = [t];

        for (; s.length;) {
          var _t8 = s.reduce(function (t, e) {
            return t = t.concat(_this13.dependency_map[e]);
          }, []);

          e = e.concat(_t8), s = _t8.filter(function (t) {
            return !s.includes(t);
          });
        }

        return e.filter(Boolean);
      }
    }, {
      key: "get_snap_position",
      value: function get_snap_position(t) {
        var e,
            s,
            i = t;
        return this.view_is(w.WEEK) ? (e = t % (this.options.column_width / 7), s = i - e + (e < this.options.column_width / 14 ? 0 : this.options.column_width / 7)) : this.view_is(w.MONTH) ? (e = t % (this.options.column_width / 30), s = i - e + (e < this.options.column_width / 60 ? 0 : this.options.column_width / 30)) : (e = t % this.options.column_width, s = i - e + (e < this.options.column_width / 2 ? 0 : this.options.column_width)), s;
      }
    }, {
      key: "unselect_all",
      value: function unselect_all() {
        _toConsumableArray(this.$svg.querySelectorAll(".bar-wrapper")).forEach(function (t) {
          t.classList.remove("active");
        });
      }
    }, {
      key: "view_is",
      value: function view_is(t) {
        var _this14 = this;

        return "string" == typeof t ? this.options.view_mode === t : !!Array.isArray(t) && t.some(function (t) {
          return _this14.options.view_mode === t;
        });
      }
    }, {
      key: "get_task",
      value: function get_task(t) {
        return this.tasks.find(function (e) {
          return e.id === t;
        });
      }
    }, {
      key: "get_bar",
      value: function get_bar(t) {
        return this.bars.find(function (e) {
          return e.task.id === t;
        });
      }
    }, {
      key: "show_popup",
      value: function show_popup(t) {
        this.popup || (this.popup = new m(this.popup_wrapper, this.options.custom_popup_html)), this.popup.show(t);
      }
    }, {
      key: "hide_popup",
      value: function hide_popup() {
        this.popup && this.popup.hide();
      }
    }, {
      key: "trigger_event",
      value: function trigger_event(t, e) {
        this.options["on_" + t] && this.options["on_" + t].apply(null, e);
      }
    }, {
      key: "get_oldest_starting_date",
      value: function get_oldest_starting_date() {
        return this.tasks.map(function (t) {
          return t._start;
        }).reduce(function (t, e) {
          return e <= t ? e : t;
        });
      }
    }, {
      key: "clear",
      value: function clear() {
        this.$svg.innerHTML = "";
      }
    }]);

    return f;
  }();

  return f.VIEW_MODE = w, f;
}();