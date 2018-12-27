define(["app/plugins/sdk"], function(__WEBPACK_EXTERNAL_MODULE_1__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelCtrl = void 0;

var _sdk = __webpack_require__(1);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// will be resolved to app/plugins/sdk
var Highcharts = __webpack_require__(2); // for debugging


window.Highcharts = Highcharts;

var Ctrl =
/*#__PURE__*/
function (_MetricsPanelCtrl) {
  _inherits(Ctrl, _MetricsPanelCtrl);

  function Ctrl($scope, $injector) {
    var _this;

    _classCallCheck(this, Ctrl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ctrl).call(this, $scope, $injector));

    _this.events.on('data-received', _this.onDataReceived.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    return _this;
  }

  _createClass(Ctrl, [{
    key: "flip",
    value: function flip(array) {
      return array.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        return [y * 1000, x];
      });
    }
  }, {
    key: "_createChart",
    value: function _createChart(data) {
      return Highcharts.chart('container', {
        xAxis: {
          type: 'datetime'
        },
        series: this._makeSeries(data),
        plotOptions: {
          series: {
            connectNulls: true
          }
        },
        title: {
          text: 'TimeSeries Charts'
        },
        legend: {
          enabled: false
        }
      });
    }
  }, {
    key: "_makeSeries",
    value: function _makeSeries(data) {
      var _this2 = this;

      return data.map(function (timeSerie) {
        return {
          id: timeSerie.target,
          name: timeSerie.target,
          data: _this2.flip(timeSerie.datapoints)
        };
      });
    }
  }, {
    key: "_updateChart",
    value: function _updateChart(data) {
      var _this3 = this;

      var series = this._makeSeries(data);

      var newOnes = [],
          oldOnes = [];

      var _loop = function _loop(i) {
        if (_this3.chart.series.find(function (serie) {
          return serie.name === series[i].name;
        })) {
          oldOnes.push(series[i]);
        } else {
          newOnes.push(series[i]);
        }
      };

      for (var i = 0; i < series.length; i++) {
        _loop(i);
      }

      newOnes.forEach(function (serie) {
        _this3.chart.addSeries(serie, false);
      });
      console.log(newOnes);
      this.chart.update({
        series: oldOnes
      }, false);
      this.chart.redraw();
    }
  }, {
    key: "onDataReceived",
    value: function onDataReceived(data) {
      if (!this.chart) {
        this.chart = this._createChart(data);
      } else {
        this._updateChart(data);
      }
    }
  }, {
    key: "panelPath",
    get: function get() {
      if (this._panelPath === undefined) {
        this._panelPath = "/public/plugins/".concat(this.pluginId, "/");
      }

      return this._panelPath;
    }
  }]);

  return Ctrl;
}(_sdk.MetricsPanelCtrl);

exports.PanelCtrl = Ctrl;
Ctrl.templateUrl = 'partials/template.html';

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Highcharts JS v7.0.1 (2018-12-19)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (O, J) {
  "object" === ( false ? "undefined" : _typeof(module)) && module.exports ? module.exports = O.document ? J(O) : J :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return J(O);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : O.Highcharts = J(O);
})("undefined" !== typeof window ? window : void 0, function (O) {
  var J = function () {
    var a = "undefined" === typeof O ? window : O,
        y = a.document,
        G = a.navigator && a.navigator.userAgent || "",
        E = y && y.createElementNS && !!y.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        h = /(edge|msie|trident)/i.test(G) && !a.opera,
        c = -1 !== G.indexOf("Firefox"),
        r = -1 !== G.indexOf("Chrome"),
        u = c && 4 > parseInt(G.split("Firefox/")[1], 10);
    return a.Highcharts ? a.Highcharts.error(16, !0) : {
      product: "Highcharts",
      version: "7.0.1",
      deg2rad: 2 * Math.PI / 360,
      doc: y,
      hasBidiBug: u,
      hasTouch: y && void 0 !== y.documentElement.ontouchstart,
      isMS: h,
      isWebKit: -1 !== G.indexOf("AppleWebKit"),
      isFirefox: c,
      isChrome: r,
      isSafari: !r && -1 !== G.indexOf("Safari"),
      isTouchDevice: /(Mobile|Android|Windows Phone)/.test(G),
      SVG_NS: "http://www.w3.org/2000/svg",
      chartCount: 0,
      seriesTypes: {},
      symbolSizes: {},
      svg: E,
      win: a,
      marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
      noop: function noop() {},
      charts: []
    };
  }();

  (function (a) {
    a.timers = [];
    var y = a.charts,
        G = a.doc,
        E = a.win;

    a.error = function (h, c, r) {
      var u = a.isNumber(h) ? "Highcharts error #" + h + ": www.highcharts.com/errors/" + h : h;
      r && a.fireEvent(r, "displayError", {
        code: h
      });
      if (c) throw Error(u);
      E.console && console.log(u);
    };

    a.Fx = function (a, c, r) {
      this.options = c;
      this.elem = a;
      this.prop = r;
    };

    a.Fx.prototype = {
      dSetter: function dSetter() {
        var a = this.paths[0],
            c = this.paths[1],
            r = [],
            u = this.now,
            v = a.length,
            w;
        if (1 === u) r = this.toD;else if (v === c.length && 1 > u) for (; v--;) {
          w = parseFloat(a[v]), r[v] = isNaN(w) ? c[v] : u * parseFloat(c[v] - w) + w;
        } else r = c;
        this.elem.attr("d", r, null, !0);
      },
      update: function update() {
        var a = this.elem,
            c = this.prop,
            r = this.now,
            u = this.options.step;
        if (this[c + "Setter"]) this[c + "Setter"]();else a.attr ? a.element && a.attr(c, r, null, !0) : a.style[c] = r + this.unit;
        u && u.call(a, r, this);
      },
      run: function run(h, c, r) {
        var u = this,
            v = u.options,
            w = function w(a) {
          return w.stopped ? !1 : u.step(a);
        },
            n = E.requestAnimationFrame || function (a) {
          setTimeout(a, 13);
        },
            g = function g() {
          for (var d = 0; d < a.timers.length; d++) {
            a.timers[d]() || a.timers.splice(d--, 1);
          }

          a.timers.length && n(g);
        };

        h !== c || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = h, this.end = c, this.unit = r, this.now = this.start, this.pos = 0, w.elem = this.elem, w.prop = this.prop, w() && 1 === a.timers.push(w) && n(g)) : (delete v.curAnim[this.prop], v.complete && 0 === Object.keys(v.curAnim).length && v.complete.call(this.elem));
      },
      step: function step(h) {
        var c = +new Date(),
            r,
            u = this.options,
            v = this.elem,
            w = u.complete,
            n = u.duration,
            g = u.curAnim;
        v.attr && !v.element ? h = !1 : h || c >= n + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), r = g[this.prop] = !0, a.objectEach(g, function (a) {
          !0 !== a && (r = !1);
        }), r && w && w.call(v), h = !1) : (this.pos = u.easing((c - this.startTime) / n), this.now = this.start + (this.end - this.start) * this.pos, this.update(), h = !0);
        return h;
      },
      initPath: function initPath(h, c, r) {
        function u(a) {
          var b, k;

          for (f = a.length; f--;) {
            b = "M" === a[f] || "L" === a[f], k = /[a-zA-Z]/.test(a[f + 3]), b && k && a.splice(f + 1, 0, a[f + 1], a[f + 2], a[f + 1], a[f + 2]);
          }
        }

        function v(a, l) {
          for (; a.length < b;) {
            a[0] = l[b - a.length];
            var k = a.slice(0, p);
            [].splice.apply(a, [0, 0].concat(k));
            x && (k = a.slice(a.length - p), [].splice.apply(a, [a.length, 0].concat(k)), f--);
          }

          a[0] = "M";
        }

        function w(a, f) {
          for (var k = (b - a.length) / p; 0 < k && k--;) {
            l = a.slice().splice(a.length / t - p, p * t), l[0] = f[b - p - k * p], m && (l[p - 6] = l[p - 2], l[p - 5] = l[p - 1]), [].splice.apply(a, [a.length / t, 0].concat(l)), x && k--;
          }
        }

        c = c || "";
        var n,
            g = h.startX,
            d = h.endX,
            m = -1 < c.indexOf("C"),
            p = m ? 7 : 3,
            b,
            l,
            f;
        c = c.split(" ");
        r = r.slice();
        var x = h.isArea,
            t = x ? 2 : 1,
            H;
        m && (u(c), u(r));

        if (g && d) {
          for (f = 0; f < g.length; f++) {
            if (g[f] === d[0]) {
              n = f;
              break;
            } else if (g[0] === d[d.length - g.length + f]) {
              n = f;
              H = !0;
              break;
            }
          }

          void 0 === n && (c = []);
        }

        c.length && a.isNumber(n) && (b = r.length + n * t * p, H ? (v(c, r), w(r, c)) : (v(r, c), w(c, r)));
        return [c, r];
      },
      fillSetter: function fillSetter() {
        a.Fx.prototype.strokeSetter.apply(this, arguments);
      },
      strokeSetter: function strokeSetter() {
        this.elem.attr(this.prop, a.color(this.start).tweenTo(a.color(this.end), this.pos), null, !0);
      }
    };

    a.merge = function () {
      var h,
          c = arguments,
          r,
          u = {},
          v = function v(c, n) {
        "object" !== _typeof(c) && (c = {});
        a.objectEach(n, function (g, d) {
          !a.isObject(g, !0) || a.isClass(g) || a.isDOMElement(g) ? c[d] = n[d] : c[d] = v(c[d] || {}, g);
        });
        return c;
      };

      !0 === c[0] && (u = c[1], c = Array.prototype.slice.call(c, 2));
      r = c.length;

      for (h = 0; h < r; h++) {
        u = v(u, c[h]);
      }

      return u;
    };

    a.pInt = function (a, c) {
      return parseInt(a, c || 10);
    };

    a.isString = function (a) {
      return "string" === typeof a;
    };

    a.isArray = function (a) {
      a = Object.prototype.toString.call(a);
      return "[object Array]" === a || "[object Array Iterator]" === a;
    };

    a.isObject = function (h, c) {
      return !!h && "object" === _typeof(h) && (!c || !a.isArray(h));
    };

    a.isDOMElement = function (h) {
      return a.isObject(h) && "number" === typeof h.nodeType;
    };

    a.isClass = function (h) {
      var c = h && h.constructor;
      return !(!a.isObject(h, !0) || a.isDOMElement(h) || !c || !c.name || "Object" === c.name);
    };

    a.isNumber = function (a) {
      return "number" === typeof a && !isNaN(a) && Infinity > a && -Infinity < a;
    };

    a.erase = function (a, c) {
      for (var h = a.length; h--;) {
        if (a[h] === c) {
          a.splice(h, 1);
          break;
        }
      }
    };

    a.defined = function (a) {
      return void 0 !== a && null !== a;
    };

    a.attr = function (h, c, r) {
      var u;
      a.isString(c) ? a.defined(r) ? h.setAttribute(c, r) : h && h.getAttribute && ((u = h.getAttribute(c)) || "class" !== c || (u = h.getAttribute(c + "Name"))) : a.defined(c) && a.isObject(c) && a.objectEach(c, function (a, c) {
        h.setAttribute(c, a);
      });
      return u;
    };

    a.splat = function (h) {
      return a.isArray(h) ? h : [h];
    };

    a.syncTimeout = function (a, c, r) {
      if (c) return setTimeout(a, c, r);
      a.call(0, r);
    };

    a.clearTimeout = function (h) {
      a.defined(h) && clearTimeout(h);
    };

    a.extend = function (a, c) {
      var h;
      a || (a = {});

      for (h in c) {
        a[h] = c[h];
      }

      return a;
    };

    a.pick = function () {
      var a = arguments,
          c,
          r,
          u = a.length;

      for (c = 0; c < u; c++) {
        if (r = a[c], void 0 !== r && null !== r) return r;
      }
    };

    a.css = function (h, c) {
      a.isMS && !a.svg && c && void 0 !== c.opacity && (c.filter = "alpha(opacity\x3d" + 100 * c.opacity + ")");
      a.extend(h.style, c);
    };

    a.createElement = function (h, c, r, u, v) {
      h = G.createElement(h);
      var w = a.css;
      c && a.extend(h, c);
      v && w(h, {
        padding: 0,
        border: "none",
        margin: 0
      });
      r && w(h, r);
      u && u.appendChild(h);
      return h;
    };

    a.extendClass = function (h, c) {
      var r = function r() {};

      r.prototype = new h();
      a.extend(r.prototype, c);
      return r;
    };

    a.pad = function (a, c, r) {
      return Array((c || 2) + 1 - String(a).replace("-", "").length).join(r || 0) + a;
    };

    a.relativeLength = function (a, c, r) {
      return /%$/.test(a) ? c * parseFloat(a) / 100 + (r || 0) : parseFloat(a);
    };

    a.wrap = function (a, c, r) {
      var h = a[c];

      a[c] = function () {
        var a = Array.prototype.slice.call(arguments),
            c = arguments,
            n = this;

        n.proceed = function () {
          h.apply(n, arguments.length ? arguments : c);
        };

        a.unshift(h);
        a = r.apply(this, a);
        n.proceed = null;
        return a;
      };
    };

    a.datePropsToTimestamps = function (h) {
      a.objectEach(h, function (c, r) {
        a.isObject(c) && "function" === typeof c.getTime ? h[r] = c.getTime() : (a.isObject(c) || a.isArray(c)) && a.datePropsToTimestamps(c);
      });
    };

    a.formatSingle = function (h, c, r) {
      var u = /\.([0-9])/,
          v = a.defaultOptions.lang;
      /f$/.test(h) ? (r = (r = h.match(u)) ? r[1] : -1, null !== c && (c = a.numberFormat(c, r, v.decimalPoint, -1 < h.indexOf(",") ? v.thousandsSep : ""))) : c = (r || a.time).dateFormat(h, c);
      return c;
    };

    a.format = function (h, c, r) {
      for (var u = "{", v = !1, w, n, g, d, m = [], p; h;) {
        u = h.indexOf(u);
        if (-1 === u) break;
        w = h.slice(0, u);

        if (v) {
          w = w.split(":");
          n = w.shift().split(".");
          d = n.length;
          p = c;

          for (g = 0; g < d; g++) {
            p && (p = p[n[g]]);
          }

          w.length && (p = a.formatSingle(w.join(":"), p, r));
          m.push(p);
        } else m.push(w);

        h = h.slice(u + 1);
        u = (v = !v) ? "}" : "{";
      }

      m.push(h);
      return m.join("");
    };

    a.getMagnitude = function (a) {
      return Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
    };

    a.normalizeTickInterval = function (h, c, r, u, v) {
      var w,
          n = h;
      r = a.pick(r, 1);
      w = h / r;
      c || (c = v ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === u && (1 === r ? c = c.filter(function (a) {
        return 0 === a % 1;
      }) : .1 >= r && (c = [1 / r])));

      for (u = 0; u < c.length && !(n = c[u], v && n * r >= h || !v && w <= (c[u] + (c[u + 1] || c[u])) / 2); u++) {
        ;
      }

      return n = a.correctFloat(n * r, -Math.round(Math.log(.001) / Math.LN10));
    };

    a.stableSort = function (a, c) {
      var h = a.length,
          u,
          v;

      for (v = 0; v < h; v++) {
        a[v].safeI = v;
      }

      a.sort(function (a, n) {
        u = c(a, n);
        return 0 === u ? a.safeI - n.safeI : u;
      });

      for (v = 0; v < h; v++) {
        delete a[v].safeI;
      }
    };

    a.arrayMin = function (a) {
      for (var c = a.length, h = a[0]; c--;) {
        a[c] < h && (h = a[c]);
      }

      return h;
    };

    a.arrayMax = function (a) {
      for (var c = a.length, h = a[0]; c--;) {
        a[c] > h && (h = a[c]);
      }

      return h;
    };

    a.destroyObjectProperties = function (h, c) {
      a.objectEach(h, function (a, u) {
        a && a !== c && a.destroy && a.destroy();
        delete h[u];
      });
    };

    a.discardElement = function (h) {
      var c = a.garbageBin;
      c || (c = a.createElement("div"));
      h && c.appendChild(h);
      c.innerHTML = "";
    };

    a.correctFloat = function (a, c) {
      return parseFloat(a.toPrecision(c || 14));
    };

    a.setAnimation = function (h, c) {
      c.renderer.globalAnimation = a.pick(h, c.options.chart.animation, !0);
    };

    a.animObject = function (h) {
      return a.isObject(h) ? a.merge(h) : {
        duration: h ? 500 : 0
      };
    };

    a.timeUnits = {
      millisecond: 1,
      second: 1E3,
      minute: 6E4,
      hour: 36E5,
      day: 864E5,
      week: 6048E5,
      month: 24192E5,
      year: 314496E5
    };

    a.numberFormat = function (h, c, r, u) {
      h = +h || 0;
      c = +c;
      var v = a.defaultOptions.lang,
          w = (h.toString().split(".")[1] || "").split("e")[0].length,
          n,
          g,
          d = h.toString().split("e");
      -1 === c ? c = Math.min(w, 20) : a.isNumber(c) ? c && d[1] && 0 > d[1] && (n = c + +d[1], 0 <= n ? (d[0] = (+d[0]).toExponential(n).split("e")[0], c = n) : (d[0] = d[0].split(".")[0] || 0, h = 20 > c ? (d[0] * Math.pow(10, d[1])).toFixed(c) : 0, d[1] = 0)) : c = 2;
      g = (Math.abs(d[1] ? d[0] : h) + Math.pow(10, -Math.max(c, w) - 1)).toFixed(c);
      w = String(a.pInt(g));
      n = 3 < w.length ? w.length % 3 : 0;
      r = a.pick(r, v.decimalPoint);
      u = a.pick(u, v.thousandsSep);
      h = (0 > h ? "-" : "") + (n ? w.substr(0, n) + u : "");
      h += w.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + u);
      c && (h += r + g.slice(-c));
      d[1] && 0 !== +h && (h += "e" + d[1]);
      return h;
    };

    Math.easeInOutSine = function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    };

    a.getStyle = function (h, c, r) {
      if ("width" === c) return Math.max(0, Math.min(h.offsetWidth, h.scrollWidth, h.getBoundingClientRect ? Math.floor(h.getBoundingClientRect().width) : Infinity) - a.getStyle(h, "padding-left") - a.getStyle(h, "padding-right"));
      if ("height" === c) return Math.max(0, Math.min(h.offsetHeight, h.scrollHeight) - a.getStyle(h, "padding-top") - a.getStyle(h, "padding-bottom"));
      E.getComputedStyle || a.error(27, !0);
      if (h = E.getComputedStyle(h, void 0)) h = h.getPropertyValue(c), a.pick(r, "opacity" !== c) && (h = a.pInt(h));
      return h;
    };

    a.inArray = function (a, c, r) {
      return c.indexOf(a, r);
    };

    a.find = Array.prototype.find ? function (a, c) {
      return a.find(c);
    } : function (a, c) {
      var h,
          u = a.length;

      for (h = 0; h < u; h++) {
        if (c(a[h], h)) return a[h];
      }
    };
    a.keys = Object.keys;

    a.offset = function (a) {
      var c = G.documentElement;
      a = a.parentElement || a.parentNode ? a.getBoundingClientRect() : {
        top: 0,
        left: 0
      };
      return {
        top: a.top + (E.pageYOffset || c.scrollTop) - (c.clientTop || 0),
        left: a.left + (E.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
      };
    };

    a.stop = function (h, c) {
      for (var r = a.timers.length; r--;) {
        a.timers[r].elem !== h || c && c !== a.timers[r].prop || (a.timers[r].stopped = !0);
      }
    };

    a.objectEach = function (a, c, r) {
      for (var h in a) {
        a.hasOwnProperty(h) && c.call(r || a[h], a[h], h, a);
      }
    };

    a.objectEach({
      map: "map",
      each: "forEach",
      grep: "filter",
      reduce: "reduce",
      some: "some"
    }, function (h, c) {
      a[c] = function (a) {
        return Array.prototype[h].apply(a, [].slice.call(arguments, 1));
      };
    });

    a.addEvent = function (h, c, r, u) {
      var v,
          w = h.addEventListener || a.addEventListenerPolyfill;
      v = "function" === typeof h && h.prototype ? h.prototype.protoEvents = h.prototype.protoEvents || {} : h.hcEvents = h.hcEvents || {};
      a.Point && h instanceof a.Point && h.series && h.series.chart && (h.series.chart.runTrackerClick = !0);
      w && w.call(h, c, r, !1);
      v[c] || (v[c] = []);
      v[c].push(r);
      u && a.isNumber(u.order) && (r.order = u.order, v[c].sort(function (a, g) {
        return a.order - g.order;
      }));
      return function () {
        a.removeEvent(h, c, r);
      };
    };

    a.removeEvent = function (h, c, r) {
      function u(g, d) {
        var m = h.removeEventListener || a.removeEventListenerPolyfill;
        m && m.call(h, g, d, !1);
      }

      function v(g) {
        var d, m;
        h.nodeName && (c ? (d = {}, d[c] = !0) : d = g, a.objectEach(d, function (a, b) {
          if (g[b]) for (m = g[b].length; m--;) {
            u(b, g[b][m]);
          }
        }));
      }

      var w, n;
      ["protoEvents", "hcEvents"].forEach(function (a) {
        var d = h[a];
        d && (c ? (w = d[c] || [], r ? (n = w.indexOf(r), -1 < n && (w.splice(n, 1), d[c] = w), u(c, r)) : (v(d), d[c] = [])) : (v(d), h[a] = {}));
      });
    };

    a.fireEvent = function (h, c, r, u) {
      var v, w, n, g, d;
      r = r || {};
      G.createEvent && (h.dispatchEvent || h.fireEvent) ? (v = G.createEvent("Events"), v.initEvent(c, !0, !0), a.extend(v, r), h.dispatchEvent ? h.dispatchEvent(v) : h.fireEvent(c, v)) : ["protoEvents", "hcEvents"].forEach(function (m) {
        if (h[m]) for (w = h[m][c] || [], n = w.length, r.target || a.extend(r, {
          preventDefault: function preventDefault() {
            r.defaultPrevented = !0;
          },
          target: h,
          type: c
        }), g = 0; g < n; g++) {
          (d = w[g]) && !1 === d.call(h, r) && r.preventDefault();
        }
      });
      u && !r.defaultPrevented && u.call(h, r);
    };

    a.animate = function (h, c, r) {
      var u,
          v = "",
          w,
          n,
          g;
      a.isObject(r) || (g = arguments, r = {
        duration: g[2],
        easing: g[3],
        complete: g[4]
      });
      a.isNumber(r.duration) || (r.duration = 400);
      r.easing = "function" === typeof r.easing ? r.easing : Math[r.easing] || Math.easeInOutSine;
      r.curAnim = a.merge(c);
      a.objectEach(c, function (d, g) {
        a.stop(h, g);
        n = new a.Fx(h, r, g);
        w = null;
        "d" === g ? (n.paths = n.initPath(h, h.d, c.d), n.toD = c.d, u = 0, w = 1) : h.attr ? u = h.attr(g) : (u = parseFloat(a.getStyle(h, g)) || 0, "opacity" !== g && (v = "px"));
        w || (w = d);
        w && w.match && w.match("px") && (w = w.replace(/px/g, ""));
        n.run(u, w, v);
      });
    };

    a.seriesType = function (h, c, r, u, v) {
      var w = a.getOptions(),
          n = a.seriesTypes;
      w.plotOptions[h] = a.merge(w.plotOptions[c], r);
      n[h] = a.extendClass(n[c] || function () {}, u);
      n[h].prototype.type = h;
      v && (n[h].prototype.pointClass = a.extendClass(a.Point, v));
      return n[h];
    };

    a.uniqueKey = function () {
      var a = Math.random().toString(36).substring(2, 9),
          c = 0;
      return function () {
        return "highcharts-" + a + "-" + c++;
      };
    }();

    a.isFunction = function (a) {
      return "function" === typeof a;
    };

    E.jQuery && (E.jQuery.fn.highcharts = function () {
      var h = [].slice.call(arguments);
      if (this[0]) return h[0] ? (new a[a.isString(h[0]) ? h.shift() : "Chart"](this[0], h[0], h[1]), this) : y[a.attr(this[0], "data-highcharts-chart")];
    });
  })(J);

  (function (a) {
    var y = a.isNumber,
        G = a.merge,
        E = a.pInt;

    a.Color = function (h) {
      if (!(this instanceof a.Color)) return new a.Color(h);
      this.init(h);
    };

    a.Color.prototype = {
      parsers: [{
        regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        parse: function parse(a) {
          return [E(a[1]), E(a[2]), E(a[3]), parseFloat(a[4], 10)];
        }
      }, {
        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        parse: function parse(a) {
          return [E(a[1]), E(a[2]), E(a[3]), 1];
        }
      }],
      names: {
        white: "#ffffff",
        black: "#000000"
      },
      init: function init(h) {
        var c, r, u, v;
        if ((this.input = h = this.names[h && h.toLowerCase ? h.toLowerCase() : ""] || h) && h.stops) this.stops = h.stops.map(function (c) {
          return new a.Color(c[1]);
        });else if (h && h.charAt && "#" === h.charAt() && (c = h.length, h = parseInt(h.substr(1), 16), 7 === c ? r = [(h & 16711680) >> 16, (h & 65280) >> 8, h & 255, 1] : 4 === c && (r = [(h & 3840) >> 4 | (h & 3840) >> 8, (h & 240) >> 4 | h & 240, (h & 15) << 4 | h & 15, 1])), !r) for (u = this.parsers.length; u-- && !r;) {
          v = this.parsers[u], (c = v.regex.exec(h)) && (r = v.parse(c));
        }
        this.rgba = r || [];
      },
      get: function get(a) {
        var c = this.input,
            h = this.rgba,
            u;
        this.stops ? (u = G(c), u.stops = [].concat(u.stops), this.stops.forEach(function (c, h) {
          u.stops[h] = [u.stops[h][0], c.get(a)];
        })) : u = h && y(h[0]) ? "rgb" === a || !a && 1 === h[3] ? "rgb(" + h[0] + "," + h[1] + "," + h[2] + ")" : "a" === a ? h[3] : "rgba(" + h.join(",") + ")" : c;
        return u;
      },
      brighten: function brighten(a) {
        var c,
            h = this.rgba;
        if (this.stops) this.stops.forEach(function (c) {
          c.brighten(a);
        });else if (y(a) && 0 !== a) for (c = 0; 3 > c; c++) {
          h[c] += E(255 * a), 0 > h[c] && (h[c] = 0), 255 < h[c] && (h[c] = 255);
        }
        return this;
      },
      setOpacity: function setOpacity(a) {
        this.rgba[3] = a;
        return this;
      },
      tweenTo: function tweenTo(a, c) {
        var h = this.rgba,
            u = a.rgba;
        u.length && h && h.length ? (a = 1 !== u[3] || 1 !== h[3], c = (a ? "rgba(" : "rgb(") + Math.round(u[0] + (h[0] - u[0]) * (1 - c)) + "," + Math.round(u[1] + (h[1] - u[1]) * (1 - c)) + "," + Math.round(u[2] + (h[2] - u[2]) * (1 - c)) + (a ? "," + (u[3] + (h[3] - u[3]) * (1 - c)) : "") + ")") : c = a.input || "none";
        return c;
      }
    };

    a.color = function (h) {
      return new a.Color(h);
    };
  })(J);

  (function (a) {
    var y,
        G,
        E = a.addEvent,
        h = a.animate,
        c = a.attr,
        r = a.charts,
        u = a.color,
        v = a.css,
        w = a.createElement,
        n = a.defined,
        g = a.deg2rad,
        d = a.destroyObjectProperties,
        m = a.doc,
        p = a.extend,
        b = a.erase,
        l = a.hasTouch,
        f = a.isArray,
        x = a.isFirefox,
        t = a.isMS,
        H = a.isObject,
        F = a.isString,
        z = a.isWebKit,
        k = a.merge,
        A = a.noop,
        D = a.objectEach,
        B = a.pick,
        e = a.pInt,
        q = a.removeEvent,
        L = a.splat,
        I = a.stop,
        R = a.svg,
        K = a.SVG_NS,
        M = a.symbolSizes,
        S = a.win;

    y = a.SVGElement = function () {
      return this;
    };

    p(y.prototype, {
      opacity: 1,
      SVG_NS: K,
      textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
      init: function init(a, e) {
        this.element = "span" === e ? w(e) : m.createElementNS(this.SVG_NS, e);
        this.renderer = a;
      },
      animate: function animate(e, q, b) {
        q = a.animObject(B(q, this.renderer.globalAnimation, !0));
        0 !== q.duration ? (b && (q.complete = b), h(this, e, q)) : (this.attr(e, null, b), q.step && q.step.call(this));
        return this;
      },
      complexColor: function complexColor(e, q, b) {
        var C = this.renderer,
            l,
            d,
            p,
            g,
            A,
            K,
            m,
            N,
            x,
            c,
            t,
            I = [],
            L;
        a.fireEvent(this.renderer, "complexColor", {
          args: arguments
        }, function () {
          e.radialGradient ? d = "radialGradient" : e.linearGradient && (d = "linearGradient");
          d && (p = e[d], A = C.gradients, m = e.stops, c = b.radialReference, f(p) && (e[d] = p = {
            x1: p[0],
            y1: p[1],
            x2: p[2],
            y2: p[3],
            gradientUnits: "userSpaceOnUse"
          }), "radialGradient" === d && c && !n(p.gradientUnits) && (g = p, p = k(p, C.getRadialAttr(c, g), {
            gradientUnits: "userSpaceOnUse"
          })), D(p, function (a, e) {
            "id" !== e && I.push(e, a);
          }), D(m, function (a) {
            I.push(a);
          }), I = I.join(","), A[I] ? t = A[I].attr("id") : (p.id = t = a.uniqueKey(), A[I] = K = C.createElement(d).attr(p).add(C.defs), K.radAttr = g, K.stops = [], m.forEach(function (e) {
            0 === e[1].indexOf("rgba") ? (l = a.color(e[1]), N = l.get("rgb"), x = l.get("a")) : (N = e[1], x = 1);
            e = C.createElement("stop").attr({
              offset: e[0],
              "stop-color": N,
              "stop-opacity": x
            }).add(K);
            K.stops.push(e);
          })), L = "url(" + C.url + "#" + t + ")", b.setAttribute(q, L), b.gradient = I, e.toString = function () {
            return L;
          });
        });
      },
      applyTextOutline: function applyTextOutline(e) {
        var C = this.element,
            q,
            f,
            k,
            l,
            d;
        -1 !== e.indexOf("contrast") && (e = e.replace(/contrast/g, this.renderer.getContrast(C.style.fill)));
        e = e.split(" ");
        f = e[e.length - 1];

        if ((k = e[0]) && "none" !== k && a.svg) {
          this.fakeTS = !0;
          e = [].slice.call(C.getElementsByTagName("tspan"));
          this.ySetter = this.xSetter;
          k = k.replace(/(^[\d\.]+)(.*?)$/g, function (a, e, C) {
            return 2 * e + C;
          });

          for (d = e.length; d--;) {
            q = e[d], "highcharts-text-outline" === q.getAttribute("class") && b(e, C.removeChild(q));
          }

          l = C.firstChild;
          e.forEach(function (a, e) {
            0 === e && (a.setAttribute("x", C.getAttribute("x")), e = C.getAttribute("y"), a.setAttribute("y", e || 0), null === e && C.setAttribute("y", 0));
            a = a.cloneNode(1);
            c(a, {
              "class": "highcharts-text-outline",
              fill: f,
              stroke: f,
              "stroke-width": k,
              "stroke-linejoin": "round"
            });
            C.insertBefore(a, l);
          });
        }
      },
      symbolCustomAttribs: "x y width height r start end innerR anchorX anchorY rounded".split(" "),
      attr: function attr(e, q, b, f) {
        var C,
            k = this.element,
            l,
            d = this,
            p,
            g,
            A = this.symbolCustomAttribs;
        "string" === typeof e && void 0 !== q && (C = e, e = {}, e[C] = q);
        "string" === typeof e ? d = (this[e + "Getter"] || this._defaultGetter).call(this, e, k) : (D(e, function (C, q) {
          p = !1;
          f || I(this, q);
          this.symbolName && -1 !== a.inArray(q, A) && (l || (this.symbolAttr(e), l = !0), p = !0);
          !this.rotation || "x" !== q && "y" !== q || (this.doTransform = !0);
          p || (g = this[q + "Setter"] || this._defaultSetter, g.call(this, C, q, k), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(q) && this.updateShadows(q, C, g));
        }, this), this.afterSetters());
        b && b.call(this);
        return d;
      },
      afterSetters: function afterSetters() {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      },
      updateShadows: function updateShadows(a, e, q) {
        for (var C = this.shadows, b = C.length; b--;) {
          q.call(C[b], "height" === a ? Math.max(e - (C[b].cutHeight || 0), 0) : "d" === a ? this.d : e, a, C[b]);
        }
      },
      addClass: function addClass(a, e) {
        var C = this.attr("class") || "";
        -1 === C.indexOf(a) && (e || (a = (C + (C ? " " : "") + a).replace("  ", " ")), this.attr("class", a));
        return this;
      },
      hasClass: function hasClass(a) {
        return -1 !== (this.attr("class") || "").split(" ").indexOf(a);
      },
      removeClass: function removeClass(a) {
        return this.attr("class", (this.attr("class") || "").replace(a, ""));
      },
      symbolAttr: function symbolAttr(a) {
        var e = this;
        "x y r start end width height innerR anchorX anchorY".split(" ").forEach(function (C) {
          e[C] = B(a[C], e[C]);
        });
        e.attr({
          d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
        });
      },
      clip: function clip(a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      },
      crisp: function crisp(a, e) {
        var C;
        e = e || a.strokeWidth || 0;
        C = Math.round(e) % 2 / 2;
        a.x = Math.floor(a.x || this.x || 0) + C;
        a.y = Math.floor(a.y || this.y || 0) + C;
        a.width = Math.floor((a.width || this.width || 0) - 2 * C);
        a.height = Math.floor((a.height || this.height || 0) - 2 * C);
        n(a.strokeWidth) && (a.strokeWidth = e);
        return a;
      },
      css: function css(a) {
        var C = this.styles,
            q = {},
            b = this.element,
            k,
            f = "",
            l,
            d = !C,
            g = ["textOutline", "textOverflow", "width"];
        a && a.color && (a.fill = a.color);
        C && D(a, function (a, e) {
          a !== C[e] && (q[e] = a, d = !0);
        });
        d && (C && (a = p(C, q)), a && (null === a.width || "auto" === a.width ? delete this.textWidth : "text" === b.nodeName.toLowerCase() && a.width && (k = this.textWidth = e(a.width))), this.styles = a, k && !R && this.renderer.forExport && delete a.width, b.namespaceURI === this.SVG_NS ? (l = function l(a, e) {
          return "-" + e.toLowerCase();
        }, D(a, function (a, e) {
          -1 === g.indexOf(e) && (f += e.replace(/([A-Z])/g, l) + ":" + a + ";");
        }), f && c(b, "style", f)) : v(b, a), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline)));
        return this;
      },
      getStyle: function getStyle(a) {
        return S.getComputedStyle(this.element || this, "").getPropertyValue(a);
      },
      strokeWidth: function strokeWidth() {
        if (!this.renderer.styledMode) return this["stroke-width"] || 0;
        var a = this.getStyle("stroke-width"),
            q;
        a.indexOf("px") === a.length - 2 ? a = e(a) : (q = m.createElementNS(K, "rect"), c(q, {
          width: a,
          "stroke-width": 0
        }), this.element.parentNode.appendChild(q), a = q.getBBox().width, q.parentNode.removeChild(q));
        return a;
      },
      on: function on(a, e) {
        var q = this,
            C = q.element;
        l && "click" === a ? (C.ontouchstart = function (a) {
          q.touchEventFired = Date.now();
          a.preventDefault();
          e.call(C, a);
        }, C.onclick = function (a) {
          (-1 === S.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (q.touchEventFired || 0)) && e.call(C, a);
        }) : C["on" + a] = e;
        return this;
      },
      setRadialReference: function setRadialReference(a) {
        var e = this.renderer.gradients[this.element.gradient];
        this.element.radialReference = a;
        e && e.radAttr && e.animate(this.renderer.getRadialAttr(a, e.radAttr));
        return this;
      },
      translate: function translate(a, e) {
        return this.attr({
          translateX: a,
          translateY: e
        });
      },
      invert: function invert(a) {
        this.inverted = a;
        this.updateTransform();
        return this;
      },
      updateTransform: function updateTransform() {
        var a = this.translateX || 0,
            e = this.translateY || 0,
            q = this.scaleX,
            b = this.scaleY,
            f = this.inverted,
            k = this.rotation,
            l = this.matrix,
            d = this.element;
        f && (a += this.width, e += this.height);
        a = ["translate(" + a + "," + e + ")"];
        n(l) && a.push("matrix(" + l.join(",") + ")");
        f ? a.push("rotate(90) scale(-1,1)") : k && a.push("rotate(" + k + " " + B(this.rotationOriginX, d.getAttribute("x"), 0) + " " + B(this.rotationOriginY, d.getAttribute("y") || 0) + ")");
        (n(q) || n(b)) && a.push("scale(" + B(q, 1) + " " + B(b, 1) + ")");
        a.length && d.setAttribute("transform", a.join(" "));
      },
      toFront: function toFront() {
        var a = this.element;
        a.parentNode.appendChild(a);
        return this;
      },
      align: function align(a, e, q) {
        var C,
            f,
            k,
            l,
            d = {};
        f = this.renderer;
        k = f.alignedObjects;
        var p, g;

        if (a) {
          if (this.alignOptions = a, this.alignByTranslate = e, !q || F(q)) this.alignTo = C = q || "renderer", b(k, this), k.push(this), q = null;
        } else a = this.alignOptions, e = this.alignByTranslate, C = this.alignTo;

        q = B(q, f[C], f);
        C = a.align;
        f = a.verticalAlign;
        k = (q.x || 0) + (a.x || 0);
        l = (q.y || 0) + (a.y || 0);
        "right" === C ? p = 1 : "center" === C && (p = 2);
        p && (k += (q.width - (a.width || 0)) / p);
        d[e ? "translateX" : "x"] = Math.round(k);
        "bottom" === f ? g = 1 : "middle" === f && (g = 2);
        g && (l += (q.height - (a.height || 0)) / g);
        d[e ? "translateY" : "y"] = Math.round(l);
        this[this.placed ? "animate" : "attr"](d);
        this.placed = !0;
        this.alignAttr = d;
        return this;
      },
      getBBox: function getBBox(a, e) {
        var q,
            C = this.renderer,
            b,
            f = this.element,
            k = this.styles,
            l,
            d = this.textStr,
            A,
            K = C.cache,
            m = C.cacheKeys,
            x = f.namespaceURI === this.SVG_NS,
            c;
        e = B(e, this.rotation);
        b = e * g;
        l = C.styledMode ? f && y.prototype.getStyle.call(f, "font-size") : k && k.fontSize;
        n(d) && (c = d.toString(), -1 === c.indexOf("\x3c") && (c = c.replace(/[0-9]/g, "0")), c += ["", e || 0, l, this.textWidth, k && k.textOverflow].join());
        c && !a && (q = K[c]);

        if (!q) {
          if (x || C.forExport) {
            try {
              (A = this.fakeTS && function (a) {
                [].forEach.call(f.querySelectorAll(".highcharts-text-outline"), function (e) {
                  e.style.display = a;
                });
              }) && A("none"), q = f.getBBox ? p({}, f.getBBox()) : {
                width: f.offsetWidth,
                height: f.offsetHeight
              }, A && A("");
            } catch (W) {}

            if (!q || 0 > q.width) q = {
              width: 0,
              height: 0
            };
          } else q = this.htmlGetBBox();

          C.isSVG && (a = q.width, C = q.height, x && (q.height = C = {
            "11px,17": 14,
            "13px,20": 16
          }[k && k.fontSize + "," + Math.round(C)] || C), e && (q.width = Math.abs(C * Math.sin(b)) + Math.abs(a * Math.cos(b)), q.height = Math.abs(C * Math.cos(b)) + Math.abs(a * Math.sin(b))));

          if (c && 0 < q.height) {
            for (; 250 < m.length;) {
              delete K[m.shift()];
            }

            K[c] || m.push(c);
            K[c] = q;
          }
        }

        return q;
      },
      show: function show(a) {
        return this.attr({
          visibility: a ? "inherit" : "visible"
        });
      },
      hide: function hide() {
        return this.attr({
          visibility: "hidden"
        });
      },
      fadeOut: function fadeOut(a) {
        var e = this;
        e.animate({
          opacity: 0
        }, {
          duration: a || 150,
          complete: function complete() {
            e.attr({
              y: -9999
            });
          }
        });
      },
      add: function add(a) {
        var e = this.renderer,
            q = this.element,
            C;
        a && (this.parentGroup = a);
        this.parentInverted = a && a.inverted;
        void 0 !== this.textStr && e.buildText(this);
        this.added = !0;
        if (!a || a.handleZ || this.zIndex) C = this.zIndexSetter();
        C || (a ? a.element : e.box).appendChild(q);
        if (this.onAdd) this.onAdd();
        return this;
      },
      safeRemoveChild: function safeRemoveChild(a) {
        var e = a.parentNode;
        e && e.removeChild(a);
      },
      destroy: function destroy() {
        var a = this,
            e = a.element || {},
            q = a.renderer,
            f = q.isSVG && "SPAN" === e.nodeName && a.parentGroup,
            k = e.ownerSVGElement,
            l = a.clipPath;
        e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null;
        I(a);
        l && k && ([].forEach.call(k.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
          var e = a.getAttribute("clip-path"),
              q = l.element.id;
          (-1 < e.indexOf("(#" + q + ")") || -1 < e.indexOf('("#' + q + '")')) && a.removeAttribute("clip-path");
        }), a.clipPath = l.destroy());

        if (a.stops) {
          for (k = 0; k < a.stops.length; k++) {
            a.stops[k] = a.stops[k].destroy();
          }

          a.stops = null;
        }

        a.safeRemoveChild(e);

        for (q.styledMode || a.destroyShadows(); f && f.div && 0 === f.div.childNodes.length;) {
          e = f.parentGroup, a.safeRemoveChild(f.div), delete f.div, f = e;
        }

        a.alignTo && b(q.alignedObjects, a);
        D(a, function (e, q) {
          delete a[q];
        });
        return null;
      },
      shadow: function shadow(a, e, q) {
        var b = [],
            f,
            C,
            k = this.element,
            l,
            d,
            p,
            g;
        if (!a) this.destroyShadows();else if (!this.shadows) {
          d = B(a.width, 3);
          p = (a.opacity || .15) / d;
          g = this.parentInverted ? "(-1,-1)" : "(" + B(a.offsetX, 1) + ", " + B(a.offsetY, 1) + ")";

          for (f = 1; f <= d; f++) {
            C = k.cloneNode(0), l = 2 * d + 1 - 2 * f, c(C, {
              stroke: a.color || "#000000",
              "stroke-opacity": p * f,
              "stroke-width": l,
              transform: "translate" + g,
              fill: "none"
            }), C.setAttribute("class", (C.getAttribute("class") || "") + " highcharts-shadow"), q && (c(C, "height", Math.max(c(C, "height") - l, 0)), C.cutHeight = l), e ? e.element.appendChild(C) : k.parentNode && k.parentNode.insertBefore(C, k), b.push(C);
          }

          this.shadows = b;
        }
        return this;
      },
      destroyShadows: function destroyShadows() {
        (this.shadows || []).forEach(function (a) {
          this.safeRemoveChild(a);
        }, this);
        this.shadows = void 0;
      },
      xGetter: function xGetter(a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
        return this._defaultGetter(a);
      },
      _defaultGetter: function _defaultGetter(a) {
        a = B(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0);
        /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
        return a;
      },
      dSetter: function dSetter(a, e, q) {
        a && a.join && (a = a.join(" "));
        /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
        this[e] !== a && (q.setAttribute(e, a), this[e] = a);
      },
      dashstyleSetter: function dashstyleSetter(a) {
        var q,
            f = this["stroke-width"];
        "inherit" === f && (f = 1);

        if (a = a && a.toLowerCase()) {
          a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");

          for (q = a.length; q--;) {
            a[q] = e(a[q]) * f;
          }

          a = a.join(",").replace(/NaN/g, "none");
          this.element.setAttribute("stroke-dasharray", a);
        }
      },
      alignSetter: function alignSetter(a) {
        this.alignValue = a;
        this.element.setAttribute("text-anchor", {
          left: "start",
          center: "middle",
          right: "end"
        }[a]);
      },
      opacitySetter: function opacitySetter(a, e, q) {
        this[e] = a;
        q.setAttribute(e, a);
      },
      titleSetter: function titleSetter(a) {
        var e = this.element.getElementsByTagName("title")[0];
        e || (e = m.createElementNS(this.SVG_NS, "title"), this.element.appendChild(e));
        e.firstChild && e.removeChild(e.firstChild);
        e.appendChild(m.createTextNode(String(B(a), "").replace(/<[^>]*>/g, "").replace(/&lt;/g, "\x3c").replace(/&gt;/g, "\x3e")));
      },
      textSetter: function textSetter(a) {
        a !== this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this));
      },
      fillSetter: function fillSetter(a, e, q) {
        "string" === typeof a ? q.setAttribute(e, a) : a && this.complexColor(a, e, q);
      },
      visibilitySetter: function visibilitySetter(a, e, q) {
        "inherit" === a ? q.removeAttribute(e) : this[e] !== a && q.setAttribute(e, a);
        this[e] = a;
      },
      zIndexSetter: function zIndexSetter(a, q) {
        var f = this.renderer,
            b = this.parentGroup,
            k = (b || f).element || f.box,
            l,
            d = this.element,
            C,
            p,
            f = k === f.box;
        l = this.added;
        var g;
        n(a) ? (d.setAttribute("data-z-index", a), a = +a, this[q] === a && (l = !1)) : n(this[q]) && d.removeAttribute("data-z-index");
        this[q] = a;

        if (l) {
          (a = this.zIndex) && b && (b.handleZ = !0);
          q = k.childNodes;

          for (g = q.length - 1; 0 <= g && !C; g--) {
            if (b = q[g], l = b.getAttribute("data-z-index"), p = !n(l), b !== d) if (0 > a && p && !f && !g) k.insertBefore(d, q[g]), C = !0;else if (e(l) <= a || p && (!n(a) || 0 <= a)) k.insertBefore(d, q[g + 1] || null), C = !0;
          }

          C || (k.insertBefore(d, q[f ? 3 : 0] || null), C = !0);
        }

        return C;
      },
      _defaultSetter: function _defaultSetter(a, e, q) {
        q.setAttribute(e, a);
      }
    });
    y.prototype.yGetter = y.prototype.xGetter;

    y.prototype.translateXSetter = y.prototype.translateYSetter = y.prototype.rotationSetter = y.prototype.verticalAlignSetter = y.prototype.rotationOriginXSetter = y.prototype.rotationOriginYSetter = y.prototype.scaleXSetter = y.prototype.scaleYSetter = y.prototype.matrixSetter = function (a, e) {
      this[e] = a;
      this.doTransform = !0;
    };

    y.prototype["stroke-widthSetter"] = y.prototype.strokeSetter = function (a, e, q) {
      this[e] = a;
      this.stroke && this["stroke-width"] ? (y.prototype.fillSetter.call(this, this.stroke, "stroke", q), q.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === a && this.hasStroke && (q.removeAttribute("stroke"), this.hasStroke = !1);
    };

    G = a.SVGRenderer = function () {
      this.init.apply(this, arguments);
    };

    p(G.prototype, {
      Element: y,
      SVG_NS: K,
      init: function init(a, e, q, f, b, k, l) {
        var d;
        d = this.createElement("svg").attr({
          version: "1.1",
          "class": "highcharts-root"
        });
        l || d.css(this.getStyle(f));
        f = d.element;
        a.appendChild(f);
        c(a, "dir", "ltr");
        -1 === a.innerHTML.indexOf("xmlns") && c(f, "xmlns", this.SVG_NS);
        this.isSVG = !0;
        this.box = f;
        this.boxWrapper = d;
        this.alignedObjects = [];
        this.url = (x || z) && m.getElementsByTagName("base").length ? S.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
        this.createElement("desc").add().element.appendChild(m.createTextNode("Created with Highcharts 7.0.1"));
        this.defs = this.createElement("defs").add();
        this.allowHTML = k;
        this.forExport = b;
        this.styledMode = l;
        this.gradients = {};
        this.cache = {};
        this.cacheKeys = [];
        this.imgCount = 0;
        this.setSize(e, q, !1);
        var C;
        x && a.getBoundingClientRect && (e = function e() {
          v(a, {
            left: 0,
            top: 0
          });
          C = a.getBoundingClientRect();
          v(a, {
            left: Math.ceil(C.left) - C.left + "px",
            top: Math.ceil(C.top) - C.top + "px"
          });
        }, e(), this.unSubPixelFix = E(S, "resize", e));
      },
      definition: function definition(a) {
        function e(a, f) {
          var b;
          L(a).forEach(function (a) {
            var k = q.createElement(a.tagName),
                l = {};
            D(a, function (a, e) {
              "tagName" !== e && "children" !== e && "textContent" !== e && (l[e] = a);
            });
            k.attr(l);
            k.add(f || q.defs);
            a.textContent && k.element.appendChild(m.createTextNode(a.textContent));
            e(a.children || [], k);
            b = k;
          });
          return b;
        }

        var q = this;
        return e(a);
      },
      getStyle: function getStyle(a) {
        return this.style = p({
          fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
          fontSize: "12px"
        }, a);
      },
      setStyle: function setStyle(a) {
        this.boxWrapper.css(this.getStyle(a));
      },
      isHidden: function isHidden() {
        return !this.boxWrapper.getBBox().width;
      },
      destroy: function destroy() {
        var a = this.defs;
        this.box = null;
        this.boxWrapper = this.boxWrapper.destroy();
        d(this.gradients || {});
        this.gradients = null;
        a && (this.defs = a.destroy());
        this.unSubPixelFix && this.unSubPixelFix();
        return this.alignedObjects = null;
      },
      createElement: function createElement(a) {
        var e = new this.Element();
        e.init(this, a);
        return e;
      },
      draw: A,
      getRadialAttr: function getRadialAttr(a, e) {
        return {
          cx: a[0] - a[2] / 2 + e.cx * a[2],
          cy: a[1] - a[2] / 2 + e.cy * a[2],
          r: e.r * a[2]
        };
      },
      truncate: function truncate(a, e, q, f, b, k, l) {
        var d = this,
            p = a.rotation,
            C,
            g = f ? 1 : 0,
            A = (q || f).length,
            K = A,
            c = [],
            x = function x(a) {
          e.firstChild && e.removeChild(e.firstChild);
          a && e.appendChild(m.createTextNode(a));
        },
            n = function n(k, p) {
          p = p || k;
          if (void 0 === c[p]) if (e.getSubStringLength) try {
            c[p] = b + e.getSubStringLength(0, f ? p + 1 : p);
          } catch (X) {} else d.getSpanWidth && (x(l(q || f, k)), c[p] = b + d.getSpanWidth(a, e));
          return c[p];
        },
            t,
            I;

        a.rotation = 0;
        t = n(e.textContent.length);

        if (I = b + t > k) {
          for (; g <= A;) {
            K = Math.ceil((g + A) / 2), f && (C = l(f, K)), t = n(K, C && C.length - 1), g === A ? g = A + 1 : t > k ? A = K - 1 : g = K;
          }

          0 === A ? x("") : q && A === q.length - 1 || x(C || l(q || f, K));
        }

        f && f.splice(0, K);
        a.actualWidth = t;
        a.rotation = p;
        return I;
      },
      escapes: {
        "\x26": "\x26amp;",
        "\x3c": "\x26lt;",
        "\x3e": "\x26gt;",
        "'": "\x26#39;",
        '"': "\x26quot;"
      },
      buildText: function buildText(a) {
        var q = a.element,
            f = this,
            k = f.forExport,
            b = B(a.textStr, "").toString(),
            l = -1 !== b.indexOf("\x3c"),
            d = q.childNodes,
            p,
            g = c(q, "x"),
            C = a.styles,
            A = a.textWidth,
            x = C && C.lineHeight,
            n = C && C.textOutline,
            t = C && "ellipsis" === C.textOverflow,
            I = C && "nowrap" === C.whiteSpace,
            L = C && C.fontSize,
            z,
            H,
            h = d.length,
            C = A && !a.added && this.box,
            F = function F(a) {
          var b;
          f.styledMode || (b = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : L || f.style.fontSize || 12);
          return x ? e(x) : f.fontMetrics(b, a.getAttribute("style") ? a : q).h;
        },
            M = function M(a, e) {
          D(f.escapes, function (q, f) {
            e && -1 !== e.indexOf(q) || (a = a.toString().replace(new RegExp(q, "g"), f));
          });
          return a;
        },
            w = function w(a, e) {
          var q;
          q = a.indexOf("\x3c");
          a = a.substring(q, a.indexOf("\x3e") - q);
          q = a.indexOf(e + "\x3d");
          if (-1 !== q && (q = q + e.length + 1, e = a.charAt(q), '"' === e || "'" === e)) return a = a.substring(q + 1), a.substring(0, a.indexOf(e));
        };

        z = [b, t, I, x, n, L, A].join();

        if (z !== a.textCache) {
          for (a.textCache = z; h--;) {
            q.removeChild(d[h]);
          }

          l || n || t || A || -1 !== b.indexOf(" ") ? (C && C.appendChild(q), l ? (b = f.styledMode ? b.replace(/<(b|strong)>/g, '\x3cspan class\x3d"highcharts-strong"\x3e').replace(/<(i|em)>/g, '\x3cspan class\x3d"highcharts-emphasized"\x3e') : b.replace(/<(b|strong)>/g, '\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g, '\x3cspan style\x3d"font-style:italic"\x3e'), b = b.replace(/<a/g, "\x3cspan").replace(/<\/(b|strong|i|em|a)>/g, "\x3c/span\x3e").split(/<br.*?>/g)) : b = [b], b = b.filter(function (a) {
            return "" !== a;
          }), b.forEach(function (e, b) {
            var l,
                d = 0,
                C = 0;
            e = e.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||\x3cspan").replace(/<\/span>/g, "\x3c/span\x3e|||");
            l = e.split("|||");
            l.forEach(function (e) {
              if ("" !== e || 1 === l.length) {
                var x = {},
                    n = m.createElementNS(f.SVG_NS, "tspan"),
                    D,
                    B;
                (D = w(e, "class")) && c(n, "class", D);
                if (D = w(e, "style")) D = D.replace(/(;| |^)color([ :])/, "$1fill$2"), c(n, "style", D);
                (B = w(e, "href")) && !k && (c(n, "onclick", 'location.href\x3d"' + B + '"'), c(n, "class", "highcharts-anchor"), f.styledMode || v(n, {
                  cursor: "pointer"
                }));
                e = M(e.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");

                if (" " !== e) {
                  n.appendChild(m.createTextNode(e));
                  d ? x.dx = 0 : b && null !== g && (x.x = g);
                  c(n, x);
                  q.appendChild(n);
                  !d && H && (!R && k && v(n, {
                    display: "block"
                  }), c(n, "dy", F(n)));

                  if (A) {
                    var z = e.replace(/([^\^])-/g, "$1- ").split(" "),
                        x = !I && (1 < l.length || b || 1 < z.length);
                    B = 0;
                    var h = F(n);
                    if (t) p = f.truncate(a, n, e, void 0, 0, Math.max(0, A - parseInt(L || 12, 10)), function (a, e) {
                      return a.substring(0, e) + "\u2026";
                    });else if (x) for (; z.length;) {
                      z.length && !I && 0 < B && (n = m.createElementNS(K, "tspan"), c(n, {
                        dy: h,
                        x: g
                      }), D && c(n, "style", D), n.appendChild(m.createTextNode(z.join(" ").replace(/- /g, "-"))), q.appendChild(n)), f.truncate(a, n, null, z, 0 === B ? C : 0, A, function (a, e) {
                        return z.slice(0, e).join(" ").replace(/- /g, "-");
                      }), C = a.actualWidth, B++;
                    }
                  }

                  d++;
                }
              }
            });
            H = H || q.childNodes.length;
          }), t && p && a.attr("title", M(a.textStr, ["\x26lt;", "\x26gt;"])), C && C.removeChild(q), n && a.applyTextOutline && a.applyTextOutline(n)) : q.appendChild(m.createTextNode(M(b)));
        }
      },
      getContrast: function getContrast(a) {
        a = u(a).rgba;
        a[0] *= 1;
        a[1] *= 1.2;
        a[2] *= .5;
        return 459 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF";
      },
      button: function button(a, e, q, f, b, l, d, g, A) {
        var C = this.label(a, e, q, A, null, null, null, null, "button"),
            K = 0,
            n = this.styledMode;
        C.attr(k({
          padding: 8,
          r: 2
        }, b));

        if (!n) {
          var m, x, c, I;
          b = k({
            fill: "#f7f7f7",
            stroke: "#cccccc",
            "stroke-width": 1,
            style: {
              color: "#333333",
              cursor: "pointer",
              fontWeight: "normal"
            }
          }, b);
          m = b.style;
          delete b.style;
          l = k(b, {
            fill: "#e6e6e6"
          }, l);
          x = l.style;
          delete l.style;
          d = k(b, {
            fill: "#e6ebf5",
            style: {
              color: "#000000",
              fontWeight: "bold"
            }
          }, d);
          c = d.style;
          delete d.style;
          g = k(b, {
            style: {
              color: "#cccccc"
            }
          }, g);
          I = g.style;
          delete g.style;
        }

        E(C.element, t ? "mouseover" : "mouseenter", function () {
          3 !== K && C.setState(1);
        });
        E(C.element, t ? "mouseout" : "mouseleave", function () {
          3 !== K && C.setState(K);
        });

        C.setState = function (a) {
          1 !== a && (C.state = K = a);
          C.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
          n || C.attr([b, l, d, g][a || 0]).css([m, x, c, I][a || 0]);
        };

        n || C.attr(b).css(p({
          cursor: "default"
        }, m));
        return C.on("click", function (a) {
          3 !== K && f.call(C, a);
        });
      },
      crispLine: function crispLine(a, e) {
        a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - e % 2 / 2);
        a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + e % 2 / 2);
        return a;
      },
      path: function path(a) {
        var e = this.styledMode ? {} : {
          fill: "none"
        };
        f(a) ? e.d = a : H(a) && p(e, a);
        return this.createElement("path").attr(e);
      },
      circle: function circle(a, e, q) {
        a = H(a) ? a : void 0 === a ? {} : {
          x: a,
          y: e,
          r: q
        };
        e = this.createElement("circle");

        e.xSetter = e.ySetter = function (a, e, q) {
          q.setAttribute("c" + e, a);
        };

        return e.attr(a);
      },
      arc: function arc(a, e, q, b, f, k) {
        H(a) ? (b = a, e = b.y, q = b.r, a = b.x) : b = {
          innerR: b,
          start: f,
          end: k
        };
        a = this.symbol("arc", a, e, q, q, b);
        a.r = q;
        return a;
      },
      rect: function rect(a, e, q, b, f, k) {
        f = H(a) ? a.r : f;
        var l = this.createElement("rect");
        a = H(a) ? a : void 0 === a ? {} : {
          x: a,
          y: e,
          width: Math.max(q, 0),
          height: Math.max(b, 0)
        };
        this.styledMode || (void 0 !== k && (a.strokeWidth = k, a = l.crisp(a)), a.fill = "none");
        f && (a.r = f);

        l.rSetter = function (a, e, q) {
          c(q, {
            rx: a,
            ry: a
          });
        };

        return l.attr(a);
      },
      setSize: function setSize(a, e, q) {
        var b = this.alignedObjects,
            f = b.length;
        this.width = a;
        this.height = e;

        for (this.boxWrapper.animate({
          width: a,
          height: e
        }, {
          step: function step() {
            this.attr({
              viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
            });
          },
          duration: B(q, !0) ? void 0 : 0
        }); f--;) {
          b[f].align();
        }
      },
      g: function g(a) {
        var e = this.createElement("g");
        return a ? e.attr({
          "class": "highcharts-" + a
        }) : e;
      },
      image: function image(a, e, q, b, f, k) {
        var l = {
          preserveAspectRatio: "none"
        },
            d,
            g = function g(a, e) {
          a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", e) : a.setAttribute("hc-svg-href", e);
        },
            A = function A(e) {
          g(d.element, a);
          k.call(d, e);
        };

        1 < arguments.length && p(l, {
          x: e,
          y: q,
          width: b,
          height: f
        });
        d = this.createElement("image").attr(l);
        k ? (g(d.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d"), l = new S.Image(), E(l, "load", A), l.src = a, l.complete && A({})) : g(d.element, a);
        return d;
      },
      symbol: function symbol(a, e, q, b, f, k) {
        var l = this,
            d,
            g = /^url\((.*?)\)$/,
            A = g.test(a),
            K = !A && (this.symbols[a] ? a : "circle"),
            C = K && this.symbols[K],
            x = n(e) && C && C.call(this.symbols, Math.round(e), Math.round(q), b, f, k),
            c,
            t;
        C ? (d = this.path(x), l.styledMode || d.attr("fill", "none"), p(d, {
          symbolName: K,
          x: e,
          y: q,
          width: b,
          height: f
        }), k && p(d, k)) : A && (c = a.match(g)[1], d = this.image(c), d.imgwidth = B(M[c] && M[c].width, k && k.width), d.imgheight = B(M[c] && M[c].height, k && k.height), t = function t() {
          d.attr({
            width: d.width,
            height: d.height
          });
        }, ["width", "height"].forEach(function (a) {
          d[a + "Setter"] = function (a, e) {
            var q = {},
                b = this["img" + e],
                f = "width" === e ? "translateX" : "translateY";
            this[e] = a;
            n(b) && (this.element && this.element.setAttribute(e, b), this.alignByTranslate || (q[f] = ((this[e] || 0) - b) / 2, this.attr(q)));
          };
        }), n(e) && d.attr({
          x: e,
          y: q
        }), d.isImg = !0, n(d.imgwidth) && n(d.imgheight) ? t() : (d.attr({
          width: 0,
          height: 0
        }), w("img", {
          onload: function onload() {
            var a = r[l.chartIndex];
            0 === this.width && (v(this, {
              position: "absolute",
              top: "-999em"
            }), m.body.appendChild(this));
            M[c] = {
              width: this.width,
              height: this.height
            };
            d.imgwidth = this.width;
            d.imgheight = this.height;
            d.element && t();
            this.parentNode && this.parentNode.removeChild(this);
            l.imgCount--;
            if (!l.imgCount && a && a.onload) a.onload();
          },
          src: c
        }), this.imgCount++));
        return d;
      },
      symbols: {
        circle: function circle(a, e, q, b) {
          return this.arc(a + q / 2, e + b / 2, q / 2, b / 2, {
            start: 0,
            end: 2 * Math.PI,
            open: !1
          });
        },
        square: function square(a, e, q, b) {
          return ["M", a, e, "L", a + q, e, a + q, e + b, a, e + b, "Z"];
        },
        triangle: function triangle(a, e, q, b) {
          return ["M", a + q / 2, e, "L", a + q, e + b, a, e + b, "Z"];
        },
        "triangle-down": function triangleDown(a, e, q, b) {
          return ["M", a, e, "L", a + q, e, a + q / 2, e + b, "Z"];
        },
        diamond: function diamond(a, e, q, b) {
          return ["M", a + q / 2, e, "L", a + q, e + b / 2, a + q / 2, e + b, a, e + b / 2, "Z"];
        },
        arc: function arc(a, e, q, b, f) {
          var k = f.start,
              d = f.r || q,
              l = f.r || b || q,
              p = f.end - .001;
          q = f.innerR;
          b = B(f.open, .001 > Math.abs(f.end - f.start - 2 * Math.PI));
          var g = Math.cos(k),
              A = Math.sin(k),
              K = Math.cos(p),
              p = Math.sin(p);
          f = .001 > f.end - k - Math.PI ? 0 : 1;
          d = ["M", a + d * g, e + l * A, "A", d, l, 0, f, 1, a + d * K, e + l * p];
          n(q) && d.push(b ? "M" : "L", a + q * K, e + q * p, "A", q, q, 0, f, 0, a + q * g, e + q * A);
          d.push(b ? "" : "Z");
          return d;
        },
        callout: function callout(a, e, q, b, f) {
          var k = Math.min(f && f.r || 0, q, b),
              d = k + 6,
              l = f && f.anchorX;
          f = f && f.anchorY;
          var p;
          p = ["M", a + k, e, "L", a + q - k, e, "C", a + q, e, a + q, e, a + q, e + k, "L", a + q, e + b - k, "C", a + q, e + b, a + q, e + b, a + q - k, e + b, "L", a + k, e + b, "C", a, e + b, a, e + b, a, e + b - k, "L", a, e + k, "C", a, e, a, e, a + k, e];
          l && l > q ? f > e + d && f < e + b - d ? p.splice(13, 3, "L", a + q, f - 6, a + q + 6, f, a + q, f + 6, a + q, e + b - k) : p.splice(13, 3, "L", a + q, b / 2, l, f, a + q, b / 2, a + q, e + b - k) : l && 0 > l ? f > e + d && f < e + b - d ? p.splice(33, 3, "L", a, f + 6, a - 6, f, a, f - 6, a, e + k) : p.splice(33, 3, "L", a, b / 2, l, f, a, b / 2, a, e + k) : f && f > b && l > a + d && l < a + q - d ? p.splice(23, 3, "L", l + 6, e + b, l, e + b + 6, l - 6, e + b, a + k, e + b) : f && 0 > f && l > a + d && l < a + q - d && p.splice(3, 3, "L", l - 6, e, l, e - 6, l + 6, e, q - k, e);
          return p;
        }
      },
      clipRect: function clipRect(e, q, b, f) {
        var k = a.uniqueKey(),
            l = this.createElement("clipPath").attr({
          id: k
        }).add(this.defs);
        e = this.rect(e, q, b, f, 0).add(l);
        e.id = k;
        e.clipPath = l;
        e.count = 0;
        return e;
      },
      text: function text(a, e, q, b) {
        var f = {};
        if (b && (this.allowHTML || !this.forExport)) return this.html(a, e, q);
        f.x = Math.round(e || 0);
        q && (f.y = Math.round(q));
        n(a) && (f.text = a);
        a = this.createElement("text").attr(f);
        b || (a.xSetter = function (a, e, q) {
          var b = q.getElementsByTagName("tspan"),
              f,
              k = q.getAttribute(e),
              l;

          for (l = 0; l < b.length; l++) {
            f = b[l], f.getAttribute(e) === k && f.setAttribute(e, a);
          }

          q.setAttribute(e, a);
        });
        return a;
      },
      fontMetrics: function fontMetrics(a, q) {
        a = this.styledMode ? q && y.prototype.getStyle.call(q, "font-size") : a || q && q.style && q.style.fontSize || this.style && this.style.fontSize;
        a = /px/.test(a) ? e(a) : /em/.test(a) ? parseFloat(a) * (q ? this.fontMetrics(null, q.parentNode).f : 16) : 12;
        q = 24 > a ? a + 3 : Math.round(1.2 * a);
        return {
          h: q,
          b: Math.round(.8 * q),
          f: a
        };
      },
      rotCorr: function rotCorr(a, e, q) {
        var b = a;
        e && q && (b = Math.max(b * Math.cos(e * g), 4));
        return {
          x: -a / 3 * Math.sin(e * g),
          y: b
        };
      },
      label: function label(e, b, f, l, d, g, A, K, c) {
        var m = this,
            x = m.styledMode,
            t = m.g("button" !== c && "label"),
            I = t.text = m.text("", 0, 0, A).attr({
          zIndex: 1
        }),
            D,
            L,
            C = 0,
            B = 3,
            z = 0,
            H,
            h,
            F,
            M,
            R,
            w = {},
            r,
            u,
            S = /^url\((.*?)\)$/.test(l),
            v = x || S,
            N = function N() {
          return x ? D.strokeWidth() % 2 / 2 : (r ? parseInt(r, 10) : 0) % 2 / 2;
        },
            P,
            T,
            E;

        c && t.addClass("highcharts-" + c);

        P = function P() {
          var a = I.element.style,
              e = {};
          L = (void 0 === H || void 0 === h || R) && n(I.textStr) && I.getBBox();
          t.width = (H || L.width || 0) + 2 * B + z;
          t.height = (h || L.height || 0) + 2 * B;
          u = B + Math.min(m.fontMetrics(a && a.fontSize, I).b, L ? L.height : Infinity);
          v && (D || (t.box = D = m.symbols[l] || S ? m.symbol(l) : m.rect(), D.addClass(("button" === c ? "" : "highcharts-label-box") + (c ? " highcharts-" + c + "-box" : "")), D.add(t), a = N(), e.x = a, e.y = (K ? -u : 0) + a), e.width = Math.round(t.width), e.height = Math.round(t.height), D.attr(p(e, w)), w = {});
        };

        T = function T() {
          var a = z + B,
              e;
          e = K ? 0 : u;
          n(H) && L && ("center" === R || "right" === R) && (a += {
            center: .5,
            right: 1
          }[R] * (H - L.width));
          if (a !== I.x || e !== I.y) I.attr("x", a), I.hasBoxWidthChanged && (L = I.getBBox(!0), P()), void 0 !== e && I.attr("y", e);
          I.x = a;
          I.y = e;
        };

        E = function E(a, e) {
          D ? D.attr(a, e) : w[a] = e;
        };

        t.onAdd = function () {
          I.add(t);
          t.attr({
            text: e || 0 === e ? e : "",
            x: b,
            y: f
          });
          D && n(d) && t.attr({
            anchorX: d,
            anchorY: g
          });
        };

        t.widthSetter = function (e) {
          H = a.isNumber(e) ? e : null;
        };

        t.heightSetter = function (a) {
          h = a;
        };

        t["text-alignSetter"] = function (a) {
          R = a;
        };

        t.paddingSetter = function (a) {
          n(a) && a !== B && (B = t.padding = a, T());
        };

        t.paddingLeftSetter = function (a) {
          n(a) && a !== z && (z = a, T());
        };

        t.alignSetter = function (a) {
          a = {
            left: 0,
            center: .5,
            right: 1
          }[a];
          a !== C && (C = a, L && t.attr({
            x: F
          }));
        };

        t.textSetter = function (a) {
          void 0 !== a && I.textSetter(a);
          P();
          T();
        };

        t["stroke-widthSetter"] = function (a, e) {
          a && (v = !0);
          r = this["stroke-width"] = a;
          E(e, a);
        };

        x ? t.rSetter = function (a, e) {
          E(e, a);
        } : t.strokeSetter = t.fillSetter = t.rSetter = function (a, e) {
          "r" !== e && ("fill" === e && a && (v = !0), t[e] = a);
          E(e, a);
        };

        t.anchorXSetter = function (a, e) {
          d = t.anchorX = a;
          E(e, Math.round(a) - N() - F);
        };

        t.anchorYSetter = function (a, e) {
          g = t.anchorY = a;
          E(e, a - M);
        };

        t.xSetter = function (a) {
          t.x = a;
          C && (a -= C * ((H || L.width) + 2 * B), t["forceAnimate:x"] = !0);
          F = Math.round(a);
          t.attr("translateX", F);
        };

        t.ySetter = function (a) {
          M = t.y = Math.round(a);
          t.attr("translateY", M);
        };

        var Q = t.css;
        A = {
          css: function css(a) {
            if (a) {
              var e = {};
              a = k(a);
              t.textProps.forEach(function (q) {
                void 0 !== a[q] && (e[q] = a[q], delete a[q]);
              });
              I.css(e);
              "width" in e && P();
              "fontSize" in e && (P(), T());
            }

            return Q.call(t, a);
          },
          getBBox: function getBBox() {
            return {
              width: L.width + 2 * B,
              height: L.height + 2 * B,
              x: L.x - B,
              y: L.y - B
            };
          },
          destroy: function destroy() {
            q(t.element, "mouseenter");
            q(t.element, "mouseleave");
            I && (I = I.destroy());
            D && (D = D.destroy());
            y.prototype.destroy.call(t);
            t = m = P = T = E = null;
          }
        };
        x || (A.shadow = function (a) {
          a && (P(), D && D.shadow(a));
          return t;
        });
        return p(t, A);
      }
    });
    a.Renderer = G;
  })(J);

  (function (a) {
    var y = a.attr,
        G = a.createElement,
        E = a.css,
        h = a.defined,
        c = a.extend,
        r = a.isFirefox,
        u = a.isMS,
        v = a.isWebKit,
        w = a.pick,
        n = a.pInt,
        g = a.SVGRenderer,
        d = a.win,
        m = a.wrap;
    c(a.SVGElement.prototype, {
      htmlCss: function htmlCss(a) {
        var b = "SPAN" === this.element.tagName && a && "width" in a,
            l = w(b && a.width, void 0),
            f;
        b && (delete a.width, this.textWidth = l, f = !0);
        a && "ellipsis" === a.textOverflow && (a.whiteSpace = "nowrap", a.overflow = "hidden");
        this.styles = c(this.styles, a);
        E(this.element, a);
        f && this.htmlUpdateTransform();
        return this;
      },
      htmlGetBBox: function htmlGetBBox() {
        var a = this.element;
        return {
          x: a.offsetLeft,
          y: a.offsetTop,
          width: a.offsetWidth,
          height: a.offsetHeight
        };
      },
      htmlUpdateTransform: function htmlUpdateTransform() {
        if (this.added) {
          var a = this.renderer,
              b = this.element,
              l = this.translateX || 0,
              f = this.translateY || 0,
              d = this.x || 0,
              g = this.y || 0,
              m = this.textAlign || "left",
              c = {
            left: 0,
            center: .5,
            right: 1
          }[m],
              z = this.styles,
              k = z && z.whiteSpace;
          E(b, {
            marginLeft: l,
            marginTop: f
          });
          !a.styledMode && this.shadows && this.shadows.forEach(function (a) {
            E(a, {
              marginLeft: l + 1,
              marginTop: f + 1
            });
          });
          this.inverted && b.childNodes.forEach(function (e) {
            a.invertChild(e, b);
          });

          if ("SPAN" === b.tagName) {
            var z = this.rotation,
                A = this.textWidth && n(this.textWidth),
                D = [z, m, b.innerHTML, this.textWidth, this.textAlign].join(),
                B;
            (B = A !== this.oldTextWidth) && !(B = A > this.oldTextWidth) && ((B = this.textPxLength) || (E(b, {
              width: "",
              whiteSpace: k || "nowrap"
            }), B = b.offsetWidth), B = B > A);
            B && (/[ \-]/.test(b.textContent || b.innerText) || "ellipsis" === b.style.textOverflow) ? (E(b, {
              width: A + "px",
              display: "block",
              whiteSpace: k || "normal"
            }), this.oldTextWidth = A, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
            D !== this.cTT && (k = a.fontMetrics(b.style.fontSize, b).b, !h(z) || z === (this.oldRotation || 0) && m === this.oldAlign || this.setSpanRotation(z, c, k), this.getSpanCorrection(!h(z) && this.textPxLength || b.offsetWidth, k, c, z, m));
            E(b, {
              left: d + (this.xCorr || 0) + "px",
              top: g + (this.yCorr || 0) + "px"
            });
            this.cTT = D;
            this.oldRotation = z;
            this.oldAlign = m;
          }
        } else this.alignOnAdd = !0;
      },
      setSpanRotation: function setSpanRotation(a, b, l) {
        var f = {},
            d = this.renderer.getTransformKey();
        f[d] = f.transform = "rotate(" + a + "deg)";
        f[d + (r ? "Origin" : "-origin")] = f.transformOrigin = 100 * b + "% " + l + "px";
        E(this.element, f);
      },
      getSpanCorrection: function getSpanCorrection(a, b, l) {
        this.xCorr = -a * l;
        this.yCorr = -b;
      }
    });
    c(g.prototype, {
      getTransformKey: function getTransformKey() {
        return u && !/Edge/.test(d.navigator.userAgent) ? "-ms-transform" : v ? "-webkit-transform" : r ? "MozTransform" : d.opera ? "-o-transform" : "";
      },
      html: function html(d, b, l) {
        var f = this.createElement("span"),
            g = f.element,
            p = f.renderer,
            n = p.isSVG,
            h = function h(a, b) {
          ["opacity", "visibility"].forEach(function (f) {
            m(a, f + "Setter", function (a, e, q, f) {
              a.call(this, e, q, f);
              b[q] = e;
            });
          });
          a.addedSetters = !0;
        },
            z = a.charts[p.chartIndex],
            z = z && z.styledMode;

        f.textSetter = function (a) {
          a !== g.innerHTML && delete this.bBox;
          this.textStr = a;
          g.innerHTML = w(a, "");
          f.doTransform = !0;
        };

        n && h(f, f.element.style);

        f.xSetter = f.ySetter = f.alignSetter = f.rotationSetter = function (a, b) {
          "align" === b && (b = "textAlign");
          f[b] = a;
          f.doTransform = !0;
        };

        f.afterSetters = function () {
          this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
        };

        f.attr({
          text: d,
          x: Math.round(b),
          y: Math.round(l)
        }).css({
          position: "absolute"
        });
        z || f.css({
          fontFamily: this.style.fontFamily,
          fontSize: this.style.fontSize
        });
        g.style.whiteSpace = "nowrap";
        f.css = f.htmlCss;
        n && (f.add = function (a) {
          var b,
              l = p.box.parentNode,
              k = [];

          if (this.parentGroup = a) {
            if (b = a.div, !b) {
              for (; a;) {
                k.push(a), a = a.parentGroup;
              }

              k.reverse().forEach(function (a) {
                function e(e, q) {
                  a[q] = e;
                  "translateX" === q ? d.left = e + "px" : d.top = e + "px";
                  a.doTransform = !0;
                }

                var d,
                    g = y(a.element, "class");
                g && (g = {
                  className: g
                });
                b = a.div = a.div || G("div", g, {
                  position: "absolute",
                  left: (a.translateX || 0) + "px",
                  top: (a.translateY || 0) + "px",
                  display: a.display,
                  opacity: a.opacity,
                  pointerEvents: a.styles && a.styles.pointerEvents
                }, b || l);
                d = b.style;
                c(a, {
                  classSetter: function (a) {
                    return function (e) {
                      this.element.setAttribute("class", e);
                      a.className = e;
                    };
                  }(b),
                  on: function on() {
                    k[0].div && f.on.apply({
                      element: k[0].div
                    }, arguments);
                    return a;
                  },
                  translateXSetter: e,
                  translateYSetter: e
                });
                a.addedSetters || h(a, d);
              });
            }
          } else b = l;

          b.appendChild(g);
          f.added = !0;
          f.alignOnAdd && f.htmlUpdateTransform();
          return f;
        });
        return f;
      }
    });
  })(J);

  (function (a) {
    var y = a.defined,
        G = a.extend,
        E = a.merge,
        h = a.pick,
        c = a.timeUnits,
        r = a.win;

    a.Time = function (a) {
      this.update(a, !1);
    };

    a.Time.prototype = {
      defaultOptions: {},
      update: function update(a) {
        var c = h(a && a.useUTC, !0),
            w = this;
        this.options = a = E(!0, this.options || {}, a);
        this.Date = a.Date || r.Date;
        this.timezoneOffset = (this.useUTC = c) && a.timezoneOffset;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        (this.variableTimezone = !(c && !a.getTimezoneOffset && !a.timezone)) || this.timezoneOffset ? (this.get = function (a, g) {
          var d = g.getTime(),
              m = d - w.getTimezoneOffset(g);
          g.setTime(m);
          a = g["getUTC" + a]();
          g.setTime(d);
          return a;
        }, this.set = function (a, g, d) {
          var m;
          if ("Milliseconds" === a || "Seconds" === a || "Minutes" === a && 0 === g.getTimezoneOffset() % 60) g["set" + a](d);else m = w.getTimezoneOffset(g), m = g.getTime() - m, g.setTime(m), g["setUTC" + a](d), a = w.getTimezoneOffset(g), m = g.getTime() + a, g.setTime(m);
        }) : c ? (this.get = function (a, g) {
          return g["getUTC" + a]();
        }, this.set = function (a, g, d) {
          return g["setUTC" + a](d);
        }) : (this.get = function (a, g) {
          return g["get" + a]();
        }, this.set = function (a, g, d) {
          return g["set" + a](d);
        });
      },
      makeTime: function makeTime(c, r, w, n, g, d) {
        var m, p, b;
        this.useUTC ? (m = this.Date.UTC.apply(0, arguments), p = this.getTimezoneOffset(m), m += p, b = this.getTimezoneOffset(m), p !== b ? m += b - p : p - 36E5 !== this.getTimezoneOffset(m - 36E5) || a.isSafari || (m -= 36E5)) : m = new this.Date(c, r, h(w, 1), h(n, 0), h(g, 0), h(d, 0)).getTime();
        return m;
      },
      timezoneOffsetFunction: function timezoneOffsetFunction() {
        var c = this,
            h = this.options,
            w = r.moment;
        if (!this.useUTC) return function (a) {
          return 6E4 * new Date(a).getTimezoneOffset();
        };

        if (h.timezone) {
          if (w) return function (a) {
            return 6E4 * -w.tz(a, h.timezone).utcOffset();
          };
          a.error(25);
        }

        return this.useUTC && h.getTimezoneOffset ? function (a) {
          return 6E4 * h.getTimezoneOffset(a);
        } : function () {
          return 6E4 * (c.timezoneOffset || 0);
        };
      },
      dateFormat: function dateFormat(c, h, w) {
        if (!a.defined(h) || isNaN(h)) return a.defaultOptions.lang.invalidDate || "";
        c = a.pick(c, "%Y-%m-%d %H:%M:%S");
        var n = this,
            g = new this.Date(h),
            d = this.get("Hours", g),
            m = this.get("Day", g),
            p = this.get("Date", g),
            b = this.get("Month", g),
            l = this.get("FullYear", g),
            f = a.defaultOptions.lang,
            x = f.weekdays,
            t = f.shortWeekdays,
            H = a.pad,
            g = a.extend({
          a: t ? t[m] : x[m].substr(0, 3),
          A: x[m],
          d: H(p),
          e: H(p, 2, " "),
          w: m,
          b: f.shortMonths[b],
          B: f.months[b],
          m: H(b + 1),
          o: b + 1,
          y: l.toString().substr(2, 2),
          Y: l,
          H: H(d),
          k: d,
          I: H(d % 12 || 12),
          l: d % 12 || 12,
          M: H(n.get("Minutes", g)),
          p: 12 > d ? "AM" : "PM",
          P: 12 > d ? "am" : "pm",
          S: H(g.getSeconds()),
          L: H(Math.floor(h % 1E3), 3)
        }, a.dateFormats);
        a.objectEach(g, function (a, b) {
          for (; -1 !== c.indexOf("%" + b);) {
            c = c.replace("%" + b, "function" === typeof a ? a.call(n, h) : a);
          }
        });
        return w ? c.substr(0, 1).toUpperCase() + c.substr(1) : c;
      },
      resolveDTLFormat: function resolveDTLFormat(c) {
        return a.isObject(c, !0) ? c : (c = a.splat(c), {
          main: c[0],
          from: c[1],
          to: c[2]
        });
      },
      getTimeTicks: function getTimeTicks(a, r, w, n) {
        var g = this,
            d = [],
            m,
            p = {},
            b;
        m = new g.Date(r);
        var l = a.unitRange,
            f = a.count || 1,
            x;
        n = h(n, 1);

        if (y(r)) {
          g.set("Milliseconds", m, l >= c.second ? 0 : f * Math.floor(g.get("Milliseconds", m) / f));
          l >= c.second && g.set("Seconds", m, l >= c.minute ? 0 : f * Math.floor(g.get("Seconds", m) / f));
          l >= c.minute && g.set("Minutes", m, l >= c.hour ? 0 : f * Math.floor(g.get("Minutes", m) / f));
          l >= c.hour && g.set("Hours", m, l >= c.day ? 0 : f * Math.floor(g.get("Hours", m) / f));
          l >= c.day && g.set("Date", m, l >= c.month ? 1 : Math.max(1, f * Math.floor(g.get("Date", m) / f)));
          l >= c.month && (g.set("Month", m, l >= c.year ? 0 : f * Math.floor(g.get("Month", m) / f)), b = g.get("FullYear", m));
          l >= c.year && g.set("FullYear", m, b - b % f);
          l === c.week && (b = g.get("Day", m), g.set("Date", m, g.get("Date", m) - b + n + (b < n ? -7 : 0)));
          b = g.get("FullYear", m);
          n = g.get("Month", m);
          var t = g.get("Date", m),
              H = g.get("Hours", m);
          r = m.getTime();
          g.variableTimezone && (x = w - r > 4 * c.month || g.getTimezoneOffset(r) !== g.getTimezoneOffset(w));
          r = m.getTime();

          for (m = 1; r < w;) {
            d.push(r), r = l === c.year ? g.makeTime(b + m * f, 0) : l === c.month ? g.makeTime(b, n + m * f) : !x || l !== c.day && l !== c.week ? x && l === c.hour && 1 < f ? g.makeTime(b, n, t, H + m * f) : r + l * f : g.makeTime(b, n, t + m * f * (l === c.day ? 1 : 7)), m++;
          }

          d.push(r);
          l <= c.hour && 1E4 > d.length && d.forEach(function (a) {
            0 === a % 18E5 && "000000000" === g.dateFormat("%H%M%S%L", a) && (p[a] = "day");
          });
        }

        d.info = G(a, {
          higherRanks: p,
          totalRange: l * f
        });
        return d;
      }
    };
  })(J);

  (function (a) {
    var y = a.color,
        G = a.merge;
    a.defaultOptions = {
      colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
      symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
      lang: {
        loading: "Loading...",
        months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        decimalPoint: ".",
        numericSymbols: "kMGTPE".split(""),
        resetZoom: "Reset zoom",
        resetZoomTitle: "Reset zoom level 1:1",
        thousandsSep: " "
      },
      global: {},
      time: a.Time.prototype.defaultOptions,
      chart: {
        styledMode: !1,
        borderRadius: 0,
        colorCount: 10,
        defaultSeriesType: "line",
        ignoreHiddenSeries: !0,
        spacing: [10, 10, 15, 10],
        resetZoomButton: {
          theme: {
            zIndex: 6
          },
          position: {
            align: "right",
            x: -10,
            y: 10
          }
        },
        width: null,
        height: null,
        borderColor: "#335cad",
        backgroundColor: "#ffffff",
        plotBorderColor: "#cccccc"
      },
      title: {
        text: "Chart title",
        align: "center",
        margin: 15,
        widthAdjust: -44
      },
      subtitle: {
        text: "",
        align: "center",
        widthAdjust: -44
      },
      plotOptions: {},
      labels: {
        style: {
          position: "absolute",
          color: "#333333"
        }
      },
      legend: {
        enabled: !0,
        align: "center",
        alignColumns: !0,
        layout: "horizontal",
        labelFormatter: function labelFormatter() {
          return this.name;
        },
        borderColor: "#999999",
        borderRadius: 0,
        navigation: {
          activeColor: "#003399",
          inactiveColor: "#cccccc"
        },
        itemStyle: {
          color: "#333333",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
          textOverflow: "ellipsis"
        },
        itemHoverStyle: {
          color: "#000000"
        },
        itemHiddenStyle: {
          color: "#cccccc"
        },
        shadow: !1,
        itemCheckboxStyle: {
          position: "absolute",
          width: "13px",
          height: "13px"
        },
        squareSymbol: !0,
        symbolPadding: 5,
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        title: {
          style: {
            fontWeight: "bold"
          }
        }
      },
      loading: {
        labelStyle: {
          fontWeight: "bold",
          position: "relative",
          top: "45%"
        },
        style: {
          position: "absolute",
          backgroundColor: "#ffffff",
          opacity: .5,
          textAlign: "center"
        }
      },
      tooltip: {
        enabled: !0,
        animation: a.svg,
        borderRadius: 3,
        dateTimeLabelFormats: {
          millisecond: "%A, %b %e, %H:%M:%S.%L",
          second: "%A, %b %e, %H:%M:%S",
          minute: "%A, %b %e, %H:%M",
          hour: "%A, %b %e, %H:%M",
          day: "%A, %b %e, %Y",
          week: "Week from %A, %b %e, %Y",
          month: "%B %Y",
          year: "%Y"
        },
        footerFormat: "",
        padding: 8,
        snap: a.isTouchDevice ? 25 : 10,
        headerFormat: '\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',
        pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
        backgroundColor: y("#f7f7f7").setOpacity(.85).get(),
        borderWidth: 1,
        shadow: !0,
        style: {
          color: "#333333",
          cursor: "default",
          fontSize: "12px",
          pointerEvents: "none",
          whiteSpace: "nowrap"
        }
      },
      credits: {
        enabled: !0,
        href: "https://www.highcharts.com?credits",
        position: {
          align: "right",
          x: -10,
          verticalAlign: "bottom",
          y: -5
        },
        style: {
          cursor: "pointer",
          color: "#999999",
          fontSize: "9px"
        },
        text: "Highcharts.com"
      }
    };

    a.setOptions = function (y) {
      a.defaultOptions = G(!0, a.defaultOptions, y);
      a.time.update(G(a.defaultOptions.global, a.defaultOptions.time), !1);
      return a.defaultOptions;
    };

    a.getOptions = function () {
      return a.defaultOptions;
    };

    a.defaultPlotOptions = a.defaultOptions.plotOptions;
    a.time = new a.Time(G(a.defaultOptions.global, a.defaultOptions.time));

    a.dateFormat = function (y, h, c) {
      return a.time.dateFormat(y, h, c);
    };
  })(J);

  (function (a) {
    var y = a.correctFloat,
        G = a.defined,
        E = a.destroyObjectProperties,
        h = a.fireEvent,
        c = a.isNumber,
        r = a.merge,
        u = a.pick,
        v = a.deg2rad;

    a.Tick = function (a, c, g, d, m) {
      this.axis = a;
      this.pos = c;
      this.type = g || "";
      this.isNewLabel = this.isNew = !0;
      this.parameters = m || {};
      this.tickmarkOffset = this.parameters.tickmarkOffset;
      this.options = this.parameters.options;
      g || d || this.addLabel();
    };

    a.Tick.prototype = {
      addLabel: function addLabel() {
        var c = this,
            n = c.axis,
            g = n.options,
            d = n.chart,
            m = n.categories,
            p = n.names,
            b = c.pos,
            l = u(c.options && c.options.labels, g.labels),
            f = n.tickPositions,
            x = b === f[0],
            t = b === f[f.length - 1],
            m = this.parameters.category || (m ? u(m[b], p[b], b) : b),
            h = c.label,
            f = f.info,
            F,
            z,
            k,
            A;
        n.isDatetimeAxis && f && (z = d.time.resolveDTLFormat(g.dateTimeLabelFormats[!g.grid && f.higherRanks[b] || f.unitName]), F = z.main);
        c.isFirst = x;
        c.isLast = t;
        c.formatCtx = {
          axis: n,
          chart: d,
          isFirst: x,
          isLast: t,
          dateTimeLabelFormat: F,
          tickPositionInfo: f,
          value: n.isLog ? y(n.lin2log(m)) : m,
          pos: b
        };
        g = n.labelFormatter.call(c.formatCtx, this.formatCtx);
        if (A = z && z.list) c.shortenLabel = function () {
          for (k = 0; k < A.length; k++) {
            if (h.attr({
              text: n.labelFormatter.call(a.extend(c.formatCtx, {
                dateTimeLabelFormat: A[k]
              }))
            }), h.getBBox().width < n.getSlotWidth(c) - 2 * u(l.padding, 5)) return;
          }

          h.attr({
            text: ""
          });
        };
        if (G(h)) h && h.textStr !== g && (!h.textWidth || l.style && l.style.width || h.styles.width || h.css({
          width: null
        }), h.attr({
          text: g
        }));else {
          if (c.label = h = G(g) && l.enabled ? d.renderer.text(g, 0, 0, l.useHTML).add(n.labelGroup) : null) d.styledMode || h.css(r(l.style)), h.textPxLength = h.getBBox().width;
          c.rotation = 0;
        }
      },
      getLabelSize: function getLabelSize() {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      },
      handleOverflow: function handleOverflow(a) {
        var c = this.axis,
            g = c.options.labels,
            d = a.x,
            m = c.chart.chartWidth,
            p = c.chart.spacing,
            b = u(c.labelLeft, Math.min(c.pos, p[3])),
            p = u(c.labelRight, Math.max(c.isRadial ? 0 : c.pos + c.len, m - p[1])),
            l = this.label,
            f = this.rotation,
            x = {
          left: 0,
          center: .5,
          right: 1
        }[c.labelAlign || l.attr("align")],
            t = l.getBBox().width,
            h = c.getSlotWidth(this),
            F = h,
            z = 1,
            k,
            A = {};
        if (f || "justify" !== u(g.overflow, "justify")) 0 > f && d - x * t < b ? k = Math.round(d / Math.cos(f * v) - b) : 0 < f && d + x * t > p && (k = Math.round((m - d) / Math.cos(f * v)));else if (m = d + (1 - x) * t, d - x * t < b ? F = a.x + F * (1 - x) - b : m > p && (F = p - a.x + F * x, z = -1), F = Math.min(h, F), F < h && "center" === c.labelAlign && (a.x += z * (h - F - x * (h - Math.min(t, F)))), t > F || c.autoRotation && (l.styles || {}).width) k = F;
        k && (this.shortenLabel ? this.shortenLabel() : (A.width = Math.floor(k), (g.style || {}).textOverflow || (A.textOverflow = "ellipsis"), l.css(A)));
      },
      getPosition: function getPosition(c, n, g, d) {
        var m = this.axis,
            p = m.chart,
            b = d && p.oldChartHeight || p.chartHeight;
        c = {
          x: c ? a.correctFloat(m.translate(n + g, null, null, d) + m.transB) : m.left + m.offset + (m.opposite ? (d && p.oldChartWidth || p.chartWidth) - m.right - m.left : 0),
          y: c ? b - m.bottom + m.offset - (m.opposite ? m.height : 0) : a.correctFloat(b - m.translate(n + g, null, null, d) - m.transB)
        };
        h(this, "afterGetPosition", {
          pos: c
        });
        return c;
      },
      getLabelPosition: function getLabelPosition(a, c, g, d, m, p, b, l) {
        var f = this.axis,
            x = f.transA,
            t = f.reversed,
            n = f.staggerLines,
            F = f.tickRotCorr || {
          x: 0,
          y: 0
        },
            z = m.y,
            k = d || f.reserveSpaceDefault ? 0 : -f.labelOffset * ("center" === f.labelAlign ? .5 : 1),
            A = {};
        G(z) || (z = 0 === f.side ? g.rotation ? -8 : -g.getBBox().height : 2 === f.side ? F.y + 8 : Math.cos(g.rotation * v) * (F.y - g.getBBox(!1, 0).height / 2));
        a = a + m.x + k + F.x - (p && d ? p * x * (t ? -1 : 1) : 0);
        c = c + z - (p && !d ? p * x * (t ? 1 : -1) : 0);
        n && (g = b / (l || 1) % n, f.opposite && (g = n - g - 1), c += f.labelOffset / n * g);
        A.x = a;
        A.y = Math.round(c);
        h(this, "afterGetLabelPosition", {
          pos: A
        });
        return A;
      },
      getMarkPath: function getMarkPath(a, c, g, d, m, p) {
        return p.crispLine(["M", a, c, "L", a + (m ? 0 : -g), c + (m ? g : 0)], d);
      },
      renderGridLine: function renderGridLine(a, c, g) {
        var d = this.axis,
            m = d.options,
            p = this.gridLine,
            b = {},
            l = this.pos,
            f = this.type,
            x = u(this.tickmarkOffset, d.tickmarkOffset),
            t = d.chart.renderer,
            n = f ? f + "Grid" : "grid",
            h = m[n + "LineWidth"],
            z = m[n + "LineColor"],
            m = m[n + "LineDashStyle"];
        p || (d.chart.styledMode || (b.stroke = z, b["stroke-width"] = h, m && (b.dashstyle = m)), f || (b.zIndex = 1), a && (c = 0), this.gridLine = p = t.path().attr(b).addClass("highcharts-" + (f ? f + "-" : "") + "grid-line").add(d.gridGroup));
        if (p && (g = d.getPlotLinePath(l + x, p.strokeWidth() * g, a, "pass"))) p[a || this.isNew ? "attr" : "animate"]({
          d: g,
          opacity: c
        });
      },
      renderMark: function renderMark(a, c, g) {
        var d = this.axis,
            m = d.options,
            p = d.chart.renderer,
            b = this.type,
            l = b ? b + "Tick" : "tick",
            f = d.tickSize(l),
            x = this.mark,
            t = !x,
            n = a.x;
        a = a.y;
        var h = u(m[l + "Width"], !b && d.isXAxis ? 1 : 0),
            m = m[l + "Color"];
        f && (d.opposite && (f[0] = -f[0]), t && (this.mark = x = p.path().addClass("highcharts-" + (b ? b + "-" : "") + "tick").add(d.axisGroup), d.chart.styledMode || x.attr({
          stroke: m,
          "stroke-width": h
        })), x[t ? "attr" : "animate"]({
          d: this.getMarkPath(n, a, f[0], x.strokeWidth() * g, d.horiz, p),
          opacity: c
        }));
      },
      renderLabel: function renderLabel(a, n, g, d) {
        var m = this.axis,
            p = m.horiz,
            b = m.options,
            l = this.label,
            f = b.labels,
            x = f.step,
            m = u(this.tickmarkOffset, m.tickmarkOffset),
            t = !0,
            h = a.x;
        a = a.y;
        l && c(h) && (l.xy = a = this.getLabelPosition(h, a, l, p, f, m, d, x), this.isFirst && !this.isLast && !u(b.showFirstLabel, 1) || this.isLast && !this.isFirst && !u(b.showLastLabel, 1) ? t = !1 : !p || f.step || f.rotation || n || 0 === g || this.handleOverflow(a), x && d % x && (t = !1), t && c(a.y) ? (a.opacity = g, l[this.isNewLabel ? "attr" : "animate"](a), this.isNewLabel = !1) : (l.attr("y", -9999), this.isNewLabel = !0));
      },
      render: function render(c, n, g) {
        var d = this.axis,
            m = d.horiz,
            p = this.pos,
            b = u(this.tickmarkOffset, d.tickmarkOffset),
            p = this.getPosition(m, p, b, n),
            b = p.x,
            l = p.y,
            d = m && b === d.pos + d.len || !m && l === d.pos ? -1 : 1;
        g = u(g, 1);
        this.isActive = !0;
        this.renderGridLine(n, g, d);
        this.renderMark(p, g, d);
        this.renderLabel(p, n, g, c);
        this.isNew = !1;
        a.fireEvent(this, "afterRender");
      },
      destroy: function destroy() {
        E(this, this.axis);
      }
    };
  })(J);

  var V = function (a) {
    var y = a.addEvent,
        G = a.animObject,
        E = a.arrayMax,
        h = a.arrayMin,
        c = a.color,
        r = a.correctFloat,
        u = a.defaultOptions,
        v = a.defined,
        w = a.deg2rad,
        n = a.destroyObjectProperties,
        g = a.extend,
        d = a.fireEvent,
        m = a.format,
        p = a.getMagnitude,
        b = a.isArray,
        l = a.isNumber,
        f = a.isString,
        x = a.merge,
        t = a.normalizeTickInterval,
        H = a.objectEach,
        F = a.pick,
        z = a.removeEvent,
        k = a.splat,
        A = a.syncTimeout,
        D = a.Tick,
        B = function B() {
      this.init.apply(this, arguments);
    };

    a.extend(B.prototype, {
      defaultOptions: {
        dateTimeLabelFormats: {
          millisecond: {
            main: "%H:%M:%S.%L",
            range: !1
          },
          second: {
            main: "%H:%M:%S",
            range: !1
          },
          minute: {
            main: "%H:%M",
            range: !1
          },
          hour: {
            main: "%H:%M",
            range: !1
          },
          day: {
            main: "%e. %b"
          },
          week: {
            main: "%e. %b"
          },
          month: {
            main: "%b '%y"
          },
          year: {
            main: "%Y"
          }
        },
        endOnTick: !1,
        labels: {
          enabled: !0,
          indentation: 10,
          x: 0,
          style: {
            color: "#666666",
            cursor: "default",
            fontSize: "11px"
          }
        },
        maxPadding: .01,
        minorTickLength: 2,
        minorTickPosition: "outside",
        minPadding: .01,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          style: {
            color: "#666666"
          }
        },
        type: "linear",
        minorGridLineColor: "#f2f2f2",
        minorGridLineWidth: 1,
        minorTickColor: "#999999",
        lineColor: "#ccd6eb",
        lineWidth: 1,
        gridLineColor: "#e6e6e6",
        tickColor: "#ccd6eb"
      },
      defaultYAxisOptions: {
        endOnTick: !0,
        maxPadding: .05,
        minPadding: .05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: {
          x: -8
        },
        startOnTick: !0,
        title: {
          rotation: 270,
          text: "Values"
        },
        stackLabels: {
          allowOverlap: !1,
          enabled: !1,
          formatter: function formatter() {
            return a.numberFormat(this.total, -1);
          },
          style: {
            color: "#000000",
            fontSize: "11px",
            fontWeight: "bold",
            textOutline: "1px contrast"
          }
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      defaultLeftAxisOptions: {
        labels: {
          x: -15
        },
        title: {
          rotation: 270
        }
      },
      defaultRightAxisOptions: {
        labels: {
          x: 15
        },
        title: {
          rotation: 90
        }
      },
      defaultBottomAxisOptions: {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        title: {
          rotation: 0
        }
      },
      defaultTopAxisOptions: {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        title: {
          rotation: 0
        }
      },
      init: function init(a, q) {
        var e = q.isX,
            b = this;
        b.chart = a;
        b.horiz = a.inverted && !b.isZAxis ? !e : e;
        b.isXAxis = e;
        b.coll = b.coll || (e ? "xAxis" : "yAxis");
        d(this, "init", {
          userOptions: q
        });
        b.opposite = q.opposite;
        b.side = q.side || (b.horiz ? b.opposite ? 0 : 2 : b.opposite ? 1 : 3);
        b.setOptions(q);
        var f = this.options,
            l = f.type;
        b.labelFormatter = f.labels.formatter || b.defaultLabelFormatter;
        b.userOptions = q;
        b.minPixelPadding = 0;
        b.reversed = f.reversed;
        b.visible = !1 !== f.visible;
        b.zoomEnabled = !1 !== f.zoomEnabled;
        b.hasNames = "category" === l || !0 === f.categories;
        b.categories = f.categories || b.hasNames;
        b.names || (b.names = [], b.names.keys = {});
        b.plotLinesAndBandsGroups = {};
        b.isLog = "logarithmic" === l;
        b.isDatetimeAxis = "datetime" === l;
        b.positiveValuesOnly = b.isLog && !b.allowNegativeLog;
        b.isLinked = v(f.linkedTo);
        b.ticks = {};
        b.labelEdge = [];
        b.minorTicks = {};
        b.plotLinesAndBands = [];
        b.alternateBands = {};
        b.len = 0;
        b.minRange = b.userMinRange = f.minRange || f.maxZoom;
        b.range = f.range;
        b.offset = f.offset || 0;
        b.stacks = {};
        b.oldStacks = {};
        b.stacksTouched = 0;
        b.max = null;
        b.min = null;
        b.crosshair = F(f.crosshair, k(a.options.tooltip.crosshairs)[e ? 0 : 1], !1);
        q = b.options.events;
        -1 === a.axes.indexOf(b) && (e ? a.axes.splice(a.xAxis.length, 0, b) : a.axes.push(b), a[b.coll].push(b));
        b.series = b.series || [];
        a.inverted && !b.isZAxis && e && void 0 === b.reversed && (b.reversed = !0);
        H(q, function (a, e) {
          y(b, e, a);
        });
        b.lin2log = f.linearToLogConverter || b.lin2log;
        b.isLog && (b.val2lin = b.log2lin, b.lin2val = b.lin2log);
        d(this, "afterInit");
      },
      setOptions: function setOptions(a) {
        this.options = x(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], x(u[this.coll], a));
        d(this, "afterSetOptions", {
          userOptions: a
        });
      },
      defaultLabelFormatter: function defaultLabelFormatter() {
        var e = this.axis,
            q = this.value,
            b = e.chart.time,
            f = e.categories,
            l = this.dateTimeLabelFormat,
            k = u.lang,
            d = k.numericSymbols,
            k = k.numericSymbolMagnitude || 1E3,
            g = d && d.length,
            c,
            p = e.options.labels.format,
            e = e.isLog ? Math.abs(q) : e.tickInterval;
        if (p) c = m(p, this, b);else if (f) c = q;else if (l) c = b.dateFormat(l, q);else if (g && 1E3 <= e) for (; g-- && void 0 === c;) {
          b = Math.pow(k, g + 1), e >= b && 0 === 10 * q % b && null !== d[g] && 0 !== q && (c = a.numberFormat(q / b, -1) + d[g]);
        }
        void 0 === c && (c = 1E4 <= Math.abs(q) ? a.numberFormat(q, -1) : a.numberFormat(q, -1, void 0, ""));
        return c;
      },
      getSeriesExtremes: function getSeriesExtremes() {
        var a = this,
            q = a.chart;
        d(this, "getSeriesExtremes", null, function () {
          a.hasVisibleSeries = !1;
          a.dataMin = a.dataMax = a.threshold = null;
          a.softThreshold = !a.isXAxis;
          a.buildStacks && a.buildStacks();
          a.series.forEach(function (e) {
            if (e.visible || !q.options.chart.ignoreHiddenSeries) {
              var b = e.options,
                  f = b.threshold,
                  k;
              a.hasVisibleSeries = !0;
              a.positiveValuesOnly && 0 >= f && (f = null);
              if (a.isXAxis) b = e.xData, b.length && (e = h(b), k = E(b), l(e) || e instanceof Date || (b = b.filter(l), e = h(b), k = E(b)), b.length && (a.dataMin = Math.min(F(a.dataMin, b[0], e), e), a.dataMax = Math.max(F(a.dataMax, b[0], k), k)));else if (e.getExtremes(), k = e.dataMax, e = e.dataMin, v(e) && v(k) && (a.dataMin = Math.min(F(a.dataMin, e), e), a.dataMax = Math.max(F(a.dataMax, k), k)), v(f) && (a.threshold = f), !b.softThreshold || a.positiveValuesOnly) a.softThreshold = !1;
            }
          });
        });
        d(this, "afterGetSeriesExtremes");
      },
      translate: function translate(a, q, b, f, k, d) {
        var e = this.linkedParent || this,
            c = 1,
            g = 0,
            p = f ? e.oldTransA : e.transA;
        f = f ? e.oldMin : e.min;
        var A = e.minPixelPadding;
        k = (e.isOrdinal || e.isBroken || e.isLog && k) && e.lin2val;
        p || (p = e.transA);
        b && (c *= -1, g = e.len);
        e.reversed && (c *= -1, g -= c * (e.sector || e.len));
        q ? (a = (a * c + g - A) / p + f, k && (a = e.lin2val(a))) : (k && (a = e.val2lin(a)), a = l(f) ? c * (a - f) * p + g + c * A + (l(d) ? p * d : 0) : void 0);
        return a;
      },
      toPixels: function toPixels(a, q) {
        return this.translate(a, !1, !this.horiz, null, !0) + (q ? 0 : this.pos);
      },
      toValue: function toValue(a, q) {
        return this.translate(a - (q ? 0 : this.pos), !0, !this.horiz, null, !0);
      },
      getPlotLinePath: function getPlotLinePath(a, q, b, f, k) {
        var e = this.chart,
            d = this.left,
            c = this.top,
            g,
            p,
            A = b && e.oldChartHeight || e.chartHeight,
            t = b && e.oldChartWidth || e.chartWidth,
            m;
        g = this.transB;

        var x = function x(a, e, q) {
          if ("pass" !== f && a < e || a > q) f ? a = Math.min(Math.max(e, a), q) : m = !0;
          return a;
        };

        k = F(k, this.translate(a, null, null, b));
        k = Math.min(Math.max(-1E5, k), 1E5);
        a = b = Math.round(k + g);
        g = p = Math.round(A - k - g);
        l(k) ? this.horiz ? (g = c, p = A - this.bottom, a = b = x(a, d, d + this.width)) : (a = d, b = t - this.right, g = p = x(g, c, c + this.height)) : (m = !0, f = !1);
        return m && !f ? null : e.renderer.crispLine(["M", a, g, "L", b, p], q || 1);
      },
      getLinearTickPositions: function getLinearTickPositions(a, q, b) {
        var e,
            f = r(Math.floor(q / a) * a);
        b = r(Math.ceil(b / a) * a);
        var k = [],
            d;
        r(f + a) === f && (d = 20);
        if (this.single) return [q];

        for (q = f; q <= b;) {
          k.push(q);
          q = r(q + a, d);
          if (q === e) break;
          e = q;
        }

        return k;
      },
      getMinorTickInterval: function getMinorTickInterval() {
        var a = this.options;
        return !0 === a.minorTicks ? F(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval;
      },
      getMinorTickPositions: function getMinorTickPositions() {
        var a = this,
            q = a.options,
            b = a.tickPositions,
            f = a.minorTickInterval,
            k = [],
            d = a.pointRangePadding || 0,
            l = a.min - d,
            d = a.max + d,
            g = d - l;
        if (g && g / f < a.len / 3) if (a.isLog) this.paddedTicks.forEach(function (e, q, b) {
          q && k.push.apply(k, a.getLogTickPositions(f, b[q - 1], b[q], !0));
        });else if (a.isDatetimeAxis && "auto" === this.getMinorTickInterval()) k = k.concat(a.getTimeTicks(a.normalizeTimeTickInterval(f), l, d, q.startOfWeek));else for (q = l + (b[0] - l) % f; q <= d && q !== k[0]; q += f) {
          k.push(q);
        }
        0 !== k.length && a.trimTicks(k);
        return k;
      },
      adjustForMinRange: function adjustForMinRange() {
        var a = this.options,
            q = this.min,
            b = this.max,
            f,
            k,
            d,
            l,
            g,
            c,
            p,
            A;
        this.isXAxis && void 0 === this.minRange && !this.isLog && (v(a.min) || v(a.max) ? this.minRange = null : (this.series.forEach(function (a) {
          c = a.xData;

          for (l = p = a.xIncrement ? 1 : c.length - 1; 0 < l; l--) {
            if (g = c[l] - c[l - 1], void 0 === d || g < d) d = g;
          }
        }), this.minRange = Math.min(5 * d, this.dataMax - this.dataMin)));
        b - q < this.minRange && (k = this.dataMax - this.dataMin >= this.minRange, A = this.minRange, f = (A - b + q) / 2, f = [q - f, F(a.min, q - f)], k && (f[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), q = E(f), b = [q + A, F(a.max, q + A)], k && (b[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), b = h(b), b - q < A && (f[0] = b - A, f[1] = F(a.min, b - A), q = E(f)));
        this.min = q;
        this.max = b;
      },
      getClosest: function getClosest() {
        var a;
        this.categories ? a = 1 : this.series.forEach(function (e) {
          var q = e.closestPointRange,
              b = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
          !e.noSharedTooltip && v(q) && b && (a = v(a) ? Math.min(a, q) : q);
        });
        return a;
      },
      nameToX: function nameToX(a) {
        var e = b(this.categories),
            f = e ? this.categories : this.names,
            k = a.options.x,
            d;
        a.series.requireSorting = !1;
        v(k) || (k = !1 === this.options.uniqueNames ? a.series.autoIncrement() : e ? f.indexOf(a.name) : F(f.keys[a.name], -1));
        -1 === k ? e || (d = f.length) : d = k;
        void 0 !== d && (this.names[d] = a.name, this.names.keys[a.name] = d);
        return d;
      },
      updateNames: function updateNames() {
        var a = this,
            q = this.names;
        0 < q.length && (Object.keys(q.keys).forEach(function (a) {
          delete q.keys[a];
        }), q.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (e) {
          e.xIncrement = null;
          if (!e.points || e.isDirtyData) a.max = Math.max(a.max, e.xData.length - 1), e.processData(), e.generatePoints();
          e.data.forEach(function (q, b) {
            var f;
            q && q.options && void 0 !== q.name && (f = a.nameToX(q), void 0 !== f && f !== q.x && (q.x = f, e.xData[b] = f));
          });
        }));
      },
      setAxisTranslation: function setAxisTranslation(a) {
        var e = this,
            b = e.max - e.min,
            k = e.axisPointRange || 0,
            l,
            g = 0,
            c = 0,
            p = e.linkedParent,
            A = !!e.categories,
            t = e.transA,
            m = e.isXAxis;
        if (m || A || k) l = e.getClosest(), p ? (g = p.minPointOffset, c = p.pointRangePadding) : e.series.forEach(function (a) {
          var b = A ? 1 : m ? F(a.options.pointRange, l, 0) : e.axisPointRange || 0;
          a = a.options.pointPlacement;
          k = Math.max(k, b);
          e.single || (g = Math.max(g, f(a) ? 0 : b / 2), c = Math.max(c, "on" === a ? 0 : b));
        }), p = e.ordinalSlope && l ? e.ordinalSlope / l : 1, e.minPointOffset = g *= p, e.pointRangePadding = c *= p, e.pointRange = Math.min(k, b), m && (e.closestPointRange = l);
        a && (e.oldTransA = t);
        e.translationSlope = e.transA = t = e.staticScale || e.len / (b + c || 1);
        e.transB = e.horiz ? e.left : e.bottom;
        e.minPixelPadding = t * g;
        d(this, "afterSetAxisTranslation");
      },
      minFromRange: function minFromRange() {
        return this.max - this.range;
      },
      setTickInterval: function setTickInterval(e) {
        var b = this,
            f = b.chart,
            k = b.options,
            g = b.isLog,
            c = b.isDatetimeAxis,
            A = b.isXAxis,
            m = b.isLinked,
            x = k.maxPadding,
            n = k.minPadding,
            D,
            h = k.tickInterval,
            B = k.tickPixelInterval,
            z = b.categories,
            H = l(b.threshold) ? b.threshold : null,
            w = b.softThreshold,
            u,
            y,
            E;
        c || z || m || this.getTickAmount();
        y = F(b.userMin, k.min);
        E = F(b.userMax, k.max);
        m ? (b.linkedParent = f[b.coll][k.linkedTo], D = b.linkedParent.getExtremes(), b.min = F(D.min, D.dataMin), b.max = F(D.max, D.dataMax), k.type !== b.linkedParent.options.type && a.error(11, 1, f)) : (!w && v(H) && (b.dataMin >= H ? (D = H, n = 0) : b.dataMax <= H && (u = H, x = 0)), b.min = F(y, D, b.dataMin), b.max = F(E, u, b.dataMax));
        g && (b.positiveValuesOnly && !e && 0 >= Math.min(b.min, F(b.dataMin, b.min)) && a.error(10, 1, f), b.min = r(b.log2lin(b.min), 15), b.max = r(b.log2lin(b.max), 15));
        b.range && v(b.max) && (b.userMin = b.min = y = Math.max(b.dataMin, b.minFromRange()), b.userMax = E = b.max, b.range = null);
        d(b, "foundExtremes");
        b.beforePadding && b.beforePadding();
        b.adjustForMinRange();
        !(z || b.axisPointRange || b.usePercentage || m) && v(b.min) && v(b.max) && (f = b.max - b.min) && (!v(y) && n && (b.min -= f * n), !v(E) && x && (b.max += f * x));
        l(k.softMin) && !l(b.userMin) && (b.min = Math.min(b.min, k.softMin));
        l(k.softMax) && !l(b.userMax) && (b.max = Math.max(b.max, k.softMax));
        l(k.floor) && (b.min = Math.min(Math.max(b.min, k.floor), Number.MAX_VALUE));
        l(k.ceiling) && (b.max = Math.max(Math.min(b.max, k.ceiling), F(b.userMax, -Number.MAX_VALUE)));
        w && v(b.dataMin) && (H = H || 0, !v(y) && b.min < H && b.dataMin >= H ? b.min = H : !v(E) && b.max > H && b.dataMax <= H && (b.max = H));
        b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : m && !h && B === b.linkedParent.options.tickPixelInterval ? h = b.linkedParent.tickInterval : F(h, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, z ? 1 : (b.max - b.min) * B / Math.max(b.len, B));
        A && !e && b.series.forEach(function (a) {
          a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
        });
        b.setAxisTranslation(!0);
        b.beforeSetTickPositions && b.beforeSetTickPositions();
        b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
        b.pointRange && !h && (b.tickInterval = Math.max(b.pointRange, b.tickInterval));
        e = F(k.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
        !h && b.tickInterval < e && (b.tickInterval = e);
        c || g || h || (b.tickInterval = t(b.tickInterval, null, p(b.tickInterval), F(k.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));
        this.tickAmount || (b.tickInterval = b.unsquish());
        this.setTickPositions();
      },
      setTickPositions: function setTickPositions() {
        var e = this.options,
            b,
            f = e.tickPositions;
        b = this.getMinorTickInterval();
        var k = e.tickPositioner,
            l = e.startOnTick,
            g = e.endOnTick;
        this.tickmarkOffset = this.categories && "between" === e.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
        this.minorTickInterval = "auto" === b && this.tickInterval ? this.tickInterval / 5 : b;
        this.single = this.min === this.max && v(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== e.allowDecimals);
        this.tickPositions = b = f && f.slice();
        !b && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (b = [this.min, this.max], a.error(19, !1, this.chart)) : b = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, e.units), this.min, this.max, e.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), b.length > this.len && (b = [b[0], b.pop()], b[0] === b[1] && (b.length = 1)), this.tickPositions = b, k && (k = k.apply(this, [this.min, this.max]))) && (this.tickPositions = b = k);
        this.paddedTicks = b.slice(0);
        this.trimTicks(b, l, g);
        this.isLinked || (this.single && 2 > b.length && (this.min -= .5, this.max += .5), f || k || this.adjustTickAmount());
        d(this, "afterSetTickPositions");
      },
      trimTicks: function trimTicks(a, b, f) {
        var e = a[0],
            k = a[a.length - 1],
            q = this.minPointOffset || 0;

        if (!this.isLinked) {
          if (b && -Infinity !== e) this.min = e;else for (; this.min - q > a[0];) {
            a.shift();
          }
          if (f) this.max = k;else for (; this.max + q < a[a.length - 1];) {
            a.pop();
          }
          0 === a.length && v(e) && !this.options.tickPositions && a.push((k + e) / 2);
        }
      },
      alignToOthers: function alignToOthers() {
        var a = {},
            b,
            f = this.options;
        !1 === this.chart.options.chart.alignTicks || !1 === f.alignTicks || !1 === f.startOnTick || !1 === f.endOnTick || this.isLog || this.chart[this.coll].forEach(function (e) {
          var f = e.options,
              f = [e.horiz ? f.left : f.top, f.width, f.height, f.pane].join();
          e.series.length && (a[f] ? b = !0 : a[f] = 1);
        });
        return b;
      },
      getTickAmount: function getTickAmount() {
        var a = this.options,
            b = a.tickAmount,
            f = a.tickPixelInterval;
        !v(a.tickInterval) && this.len < f && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
        !b && this.alignToOthers() && (b = Math.ceil(this.len / f) + 1);
        4 > b && (this.finalTickAmt = b, b = 5);
        this.tickAmount = b;
      },
      adjustTickAmount: function adjustTickAmount() {
        var a = this.tickInterval,
            b = this.tickPositions,
            f = this.tickAmount,
            k = this.finalTickAmt,
            d = b && b.length,
            l = F(this.threshold, this.softThreshold ? 0 : null);

        if (this.hasData()) {
          if (d < f) {
            for (; b.length < f;) {
              b.length % 2 || this.min === l ? b.push(r(b[b.length - 1] + a)) : b.unshift(r(b[0] - a));
            }

            this.transA *= (d - 1) / (f - 1);
            this.min = b[0];
            this.max = b[b.length - 1];
          } else d > f && (this.tickInterval *= 2, this.setTickPositions());

          if (v(k)) {
            for (a = f = b.length; a--;) {
              (3 === k && 1 === a % 2 || 2 >= k && 0 < a && a < f - 1) && b.splice(a, 1);
            }

            this.finalTickAmt = void 0;
          }
        }
      },
      setScale: function setScale() {
        var a, b;
        this.oldMin = this.min;
        this.oldMax = this.max;
        this.oldAxisLength = this.len;
        this.setAxisSize();
        b = this.len !== this.oldAxisLength;
        this.series.forEach(function (e) {
          if (e.isDirtyData || e.isDirty || e.xAxis.isDirty) a = !0;
        });
        b || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks();
        d(this, "afterSetScale");
      },
      setExtremes: function setExtremes(a, b, f, k, l) {
        var e = this,
            q = e.chart;
        f = F(f, !0);
        e.series.forEach(function (a) {
          delete a.kdTree;
        });
        l = g(l, {
          min: a,
          max: b
        });
        d(e, "setExtremes", l, function () {
          e.userMin = a;
          e.userMax = b;
          e.eventArgs = l;
          f && q.redraw(k);
        });
      },
      zoom: function zoom(a, b) {
        var e = this.dataMin,
            f = this.dataMax,
            k = this.options,
            d = Math.min(e, F(k.min, e)),
            k = Math.max(f, F(k.max, f));
        if (a !== this.min || b !== this.max) this.allowZoomOutside || (v(e) && (a < d && (a = d), a > k && (a = k)), v(f) && (b < d && (b = d), b > k && (b = k))), this.displayBtn = void 0 !== a || void 0 !== b, this.setExtremes(a, b, !1, void 0, {
          trigger: "zoom"
        });
        return !0;
      },
      setAxisSize: function setAxisSize() {
        var e = this.chart,
            b = this.options,
            f = b.offsets || [0, 0, 0, 0],
            k = this.horiz,
            d = this.width = Math.round(a.relativeLength(F(b.width, e.plotWidth - f[3] + f[1]), e.plotWidth)),
            l = this.height = Math.round(a.relativeLength(F(b.height, e.plotHeight - f[0] + f[2]), e.plotHeight)),
            g = this.top = Math.round(a.relativeLength(F(b.top, e.plotTop + f[0]), e.plotHeight, e.plotTop)),
            b = this.left = Math.round(a.relativeLength(F(b.left, e.plotLeft + f[3]), e.plotWidth, e.plotLeft));
        this.bottom = e.chartHeight - l - g;
        this.right = e.chartWidth - d - b;
        this.len = Math.max(k ? d : l, 0);
        this.pos = k ? b : g;
      },
      getExtremes: function getExtremes() {
        var a = this.isLog;
        return {
          min: a ? r(this.lin2log(this.min)) : this.min,
          max: a ? r(this.lin2log(this.max)) : this.max,
          dataMin: this.dataMin,
          dataMax: this.dataMax,
          userMin: this.userMin,
          userMax: this.userMax
        };
      },
      getThreshold: function getThreshold(a) {
        var e = this.isLog,
            b = e ? this.lin2log(this.min) : this.min,
            e = e ? this.lin2log(this.max) : this.max;
        null === a || -Infinity === a ? a = b : Infinity === a ? a = e : b > a ? a = b : e < a && (a = e);
        return this.translate(a, 0, 1, 0, 1);
      },
      autoLabelAlign: function autoLabelAlign(a) {
        a = (F(a, 0) - 90 * this.side + 720) % 360;
        return 15 < a && 165 > a ? "right" : 195 < a && 345 > a ? "left" : "center";
      },
      tickSize: function tickSize(a) {
        var e = this.options,
            b = e[a + "Length"],
            f = F(e[a + "Width"], "tick" === a && this.isXAxis ? 1 : 0);
        if (f && b) return "inside" === e[a + "Position"] && (b = -b), [b, f];
      },
      labelMetrics: function labelMetrics() {
        var a = this.tickPositions && this.tickPositions[0] || 0;
        return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
      },
      unsquish: function unsquish() {
        var a = this.options.labels,
            b = this.horiz,
            f = this.tickInterval,
            k = f,
            d = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / f),
            l,
            g = a.rotation,
            c = this.labelMetrics(),
            p,
            A = Number.MAX_VALUE,
            t,
            m = function m(a) {
          a /= d || 1;
          a = 1 < a ? Math.ceil(a) : 1;
          return r(a * f);
        };

        b ? (t = !a.staggerLines && !a.step && (v(g) ? [g] : d < F(a.autoRotationLimit, 80) && a.autoRotation)) && t.forEach(function (a) {
          var b;
          if (a === g || a && -90 <= a && 90 >= a) p = m(Math.abs(c.h / Math.sin(w * a))), b = p + Math.abs(a / 360), b < A && (A = b, l = a, k = p);
        }) : a.step || (k = m(c.h));
        this.autoRotation = t;
        this.labelRotation = F(l, g);
        return k;
      },
      getSlotWidth: function getSlotWidth(a) {
        var b = this.chart,
            e = this.horiz,
            f = this.options.labels,
            k = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            d = b.margin[3];
        return a && a.slotWidth || e && 2 > (f.step || 0) && !f.rotation && (this.staggerLines || 1) * this.len / k || !e && (f.style && parseInt(f.style.width, 10) || d && d - b.spacing[3] || .33 * b.chartWidth);
      },
      renderUnsquish: function renderUnsquish() {
        var a = this.chart,
            b = a.renderer,
            k = this.tickPositions,
            d = this.ticks,
            l = this.options.labels,
            g = l && l.style || {},
            c = this.horiz,
            p = this.getSlotWidth(),
            A = Math.max(1, Math.round(p - 2 * (l.padding || 5))),
            t = {},
            m = this.labelMetrics(),
            x = l.style && l.style.textOverflow,
            n,
            D,
            h = 0,
            B;
        f(l.rotation) || (t.rotation = l.rotation || 0);
        k.forEach(function (a) {
          (a = d[a]) && a.label && a.label.textPxLength > h && (h = a.label.textPxLength);
        });
        this.maxLabelLength = h;
        if (this.autoRotation) h > A && h > m.h ? t.rotation = this.labelRotation : this.labelRotation = 0;else if (p && (n = A, !x)) for (D = "clip", A = k.length; !c && A--;) {
          if (B = k[A], B = d[B].label) B.styles && "ellipsis" === B.styles.textOverflow ? B.css({
            textOverflow: "clip"
          }) : B.textPxLength > p && B.css({
            width: p + "px"
          }), B.getBBox().height > this.len / k.length - (m.h - m.f) && (B.specificTextOverflow = "ellipsis");
        }
        t.rotation && (n = h > .5 * a.chartHeight ? .33 * a.chartHeight : h, x || (D = "ellipsis"));
        if (this.labelAlign = l.align || this.autoLabelAlign(this.labelRotation)) t.align = this.labelAlign;
        k.forEach(function (a) {
          var b = (a = d[a]) && a.label,
              e = g.width,
              f = {};
          b && (b.attr(t), a.shortenLabel ? a.shortenLabel() : n && !e && "nowrap" !== g.whiteSpace && (n < b.textPxLength || "SPAN" === b.element.tagName) ? (f.width = n, x || (f.textOverflow = b.specificTextOverflow || D), b.css(f)) : b.styles && b.styles.width && !f.width && !e && b.css({
            width: null
          }), delete b.specificTextOverflow, a.rotation = t.rotation);
        }, this);
        this.tickRotCorr = b.rotCorr(m.b, this.labelRotation || 0, 0 !== this.side);
      },
      hasData: function hasData() {
        return this.hasVisibleSeries || v(this.min) && v(this.max) && this.tickPositions && 0 < this.tickPositions.length;
      },
      addTitle: function addTitle(a) {
        var b = this.chart.renderer,
            e = this.horiz,
            f = this.opposite,
            k = this.options.title,
            d,
            l = this.chart.styledMode;
        this.axisTitle || ((d = k.textAlign) || (d = (e ? {
          low: "left",
          middle: "center",
          high: "right"
        } : {
          low: f ? "right" : "left",
          middle: "center",
          high: f ? "left" : "right"
        })[k.align]), this.axisTitle = b.text(k.text, 0, 0, k.useHTML).attr({
          zIndex: 7,
          rotation: k.rotation || 0,
          align: d
        }).addClass("highcharts-axis-title"), l || this.axisTitle.css(x(k.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
        l || k.style.width || this.isRadial || this.axisTitle.css({
          width: this.len
        });
        this.axisTitle[a ? "show" : "hide"](!0);
      },
      generateTick: function generateTick(a) {
        var b = this.ticks;
        b[a] ? b[a].addLabel() : b[a] = new D(this, a);
      },
      getOffset: function getOffset() {
        var a = this,
            b = a.chart,
            f = b.renderer,
            k = a.options,
            l = a.tickPositions,
            g = a.ticks,
            c = a.horiz,
            p = a.side,
            A = b.inverted && !a.isZAxis ? [1, 0, 3, 2][p] : p,
            t,
            m,
            x = 0,
            n,
            D = 0,
            h = k.title,
            B = k.labels,
            z = 0,
            r = b.axisOffset,
            b = b.clipOffset,
            w = [-1, 1, 1, -1][p],
            u = k.className,
            y = a.axisParent;
        t = a.hasData();
        a.showAxis = m = t || F(k.showEmpty, !0);
        a.staggerLines = a.horiz && B.staggerLines;
        a.axisGroup || (a.gridGroup = f.g("grid").attr({
          zIndex: k.gridZIndex || 1
        }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (u || "")).add(y), a.axisGroup = f.g("axis").attr({
          zIndex: k.zIndex || 2
        }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (u || "")).add(y), a.labelGroup = f.g("axis-labels").attr({
          zIndex: B.zIndex || 7
        }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (u || "")).add(y));
        t || a.isLinked ? (l.forEach(function (b, e) {
          a.generateTick(b, e);
        }), a.renderUnsquish(), a.reserveSpaceDefault = 0 === p || 2 === p || {
          1: "left",
          3: "right"
        }[p] === a.labelAlign, F(B.reserveSpace, "center" === a.labelAlign ? !0 : null, a.reserveSpaceDefault) && l.forEach(function (a) {
          z = Math.max(g[a].getLabelSize(), z);
        }), a.staggerLines && (z *= a.staggerLines), a.labelOffset = z * (a.opposite ? -1 : 1)) : H(g, function (a, b) {
          a.destroy();
          delete g[b];
        });
        h && h.text && !1 !== h.enabled && (a.addTitle(m), m && !1 !== h.reserveSpace && (a.titleOffset = x = a.axisTitle.getBBox()[c ? "height" : "width"], n = h.offset, D = v(n) ? 0 : F(h.margin, c ? 5 : 10)));
        a.renderLine();
        a.offset = w * F(k.offset, r[p]);
        a.tickRotCorr = a.tickRotCorr || {
          x: 0,
          y: 0
        };
        f = 0 === p ? -a.labelMetrics().h : 2 === p ? a.tickRotCorr.y : 0;
        D = Math.abs(z) + D;
        z && (D = D - f + w * (c ? F(B.y, a.tickRotCorr.y + 8 * w) : B.x));
        a.axisTitleMargin = F(n, D);
        a.getMaxLabelDimensions && (a.maxLabelDimensions = a.getMaxLabelDimensions(g, l));
        c = this.tickSize("tick");
        r[p] = Math.max(r[p], a.axisTitleMargin + x + w * a.offset, D, t && l.length && c ? c[0] + w * a.offset : 0);
        k = k.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);
        b[A] = Math.max(b[A], k);
        d(this, "afterGetOffset");
      },
      getLinePath: function getLinePath(a) {
        var b = this.chart,
            e = this.opposite,
            f = this.offset,
            k = this.horiz,
            d = this.left + (e ? this.width : 0) + f,
            f = b.chartHeight - this.bottom - (e ? this.height : 0) + f;
        e && (a *= -1);
        return b.renderer.crispLine(["M", k ? this.left : d, k ? f : this.top, "L", k ? b.chartWidth - this.right : d, k ? f : b.chartHeight - this.bottom], a);
      },
      renderLine: function renderLine() {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
          stroke: this.options.lineColor,
          "stroke-width": this.options.lineWidth,
          zIndex: 7
        }));
      },
      getTitlePosition: function getTitlePosition() {
        var a = this.horiz,
            b = this.left,
            f = this.top,
            k = this.len,
            d = this.options.title,
            l = a ? b : f,
            g = this.opposite,
            c = this.offset,
            p = d.x || 0,
            A = d.y || 0,
            t = this.axisTitle,
            m = this.chart.renderer.fontMetrics(d.style && d.style.fontSize, t),
            t = Math.max(t.getBBox(null, 0).height - m.h - 1, 0),
            k = {
          low: l + (a ? 0 : k),
          middle: l + k / 2,
          high: l + (a ? k : 0)
        }[d.align],
            b = (a ? f + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + [-t, t, m.f, -t][this.side];
        return {
          x: a ? k + p : b + (g ? this.width : 0) + c + p,
          y: a ? b + A - (g ? this.height : 0) + c : k + A
        };
      },
      renderMinorTick: function renderMinorTick(a) {
        var b = this.chart.hasRendered && l(this.oldMin),
            e = this.minorTicks;
        e[a] || (e[a] = new D(this, a, "minor"));
        b && e[a].isNew && e[a].render(null, !0);
        e[a].render(null, !1, 1);
      },
      renderTick: function renderTick(a, b) {
        var e = this.isLinked,
            f = this.ticks,
            k = this.chart.hasRendered && l(this.oldMin);
        if (!e || a >= this.min && a <= this.max) f[a] || (f[a] = new D(this, a)), k && f[a].isNew && f[a].render(b, !0, -1), f[a].render(b);
      },
      render: function render() {
        var b = this,
            f = b.chart,
            k = b.options,
            g = b.isLog,
            c = b.isLinked,
            p = b.tickPositions,
            t = b.axisTitle,
            m = b.ticks,
            x = b.minorTicks,
            n = b.alternateBands,
            h = k.stackLabels,
            B = k.alternateGridColor,
            z = b.tickmarkOffset,
            F = b.axisLine,
            r = b.showAxis,
            w = G(f.renderer.globalAnimation),
            u,
            v;
        b.labelEdge.length = 0;
        b.overlap = !1;
        [m, x, n].forEach(function (a) {
          H(a, function (a) {
            a.isActive = !1;
          });
        });
        if (b.hasData() || c) b.minorTickInterval && !b.categories && b.getMinorTickPositions().forEach(function (a) {
          b.renderMinorTick(a);
        }), p.length && (p.forEach(function (a, e) {
          b.renderTick(a, e);
        }), z && (0 === b.min || b.single) && (m[-1] || (m[-1] = new D(b, -1, null, !0)), m[-1].render(-1))), B && p.forEach(function (e, k) {
          v = void 0 !== p[k + 1] ? p[k + 1] + z : b.max - z;
          0 === k % 2 && e < b.max && v <= b.max + (f.polar ? -z : z) && (n[e] || (n[e] = new a.PlotLineOrBand(b)), u = e + z, n[e].options = {
            from: g ? b.lin2log(u) : u,
            to: g ? b.lin2log(v) : v,
            color: B
          }, n[e].render(), n[e].isActive = !0);
        }), b._addedPlotLB || ((k.plotLines || []).concat(k.plotBands || []).forEach(function (a) {
          b.addPlotBandOrLine(a);
        }), b._addedPlotLB = !0);
        [m, x, n].forEach(function (a) {
          var b,
              e = [],
              k = w.duration;
          H(a, function (a, b) {
            a.isActive || (a.render(b, !1, 0), a.isActive = !1, e.push(b));
          });
          A(function () {
            for (b = e.length; b--;) {
              a[e[b]] && !a[e[b]].isActive && (a[e[b]].destroy(), delete a[e[b]]);
            }
          }, a !== n && f.hasRendered && k ? k : 0);
        });
        F && (F[F.isPlaced ? "animate" : "attr"]({
          d: this.getLinePath(F.strokeWidth())
        }), F.isPlaced = !0, F[r ? "show" : "hide"](!0));
        t && r && (k = b.getTitlePosition(), l(k.y) ? (t[t.isNew ? "attr" : "animate"](k), t.isNew = !1) : (t.attr("y", -9999), t.isNew = !0));
        h && h.enabled && b.renderStackTotals();
        b.isDirty = !1;
        d(this, "afterRender");
      },
      redraw: function redraw() {
        this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) {
          a.render();
        }));
        this.series.forEach(function (a) {
          a.isDirty = !0;
        });
      },
      keepProps: "extKey hcEvents names series userMax userMin".split(" "),
      destroy: function destroy(a) {
        var b = this,
            e = b.stacks,
            f = b.plotLinesAndBands,
            k;
        d(this, "destroy", {
          keepEvents: a
        });
        a || z(b);
        H(e, function (a, b) {
          n(a);
          e[b] = null;
        });
        [b.ticks, b.minorTicks, b.alternateBands].forEach(function (a) {
          n(a);
        });
        if (f) for (a = f.length; a--;) {
          f[a].destroy();
        }
        "stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) {
          b[a] && (b[a] = b[a].destroy());
        });

        for (k in b.plotLinesAndBandsGroups) {
          b.plotLinesAndBandsGroups[k] = b.plotLinesAndBandsGroups[k].destroy();
        }

        H(b, function (a, e) {
          -1 === b.keepProps.indexOf(e) && delete b[e];
        });
      },
      drawCrosshair: function drawCrosshair(a, b) {
        var e,
            f = this.crosshair,
            k = F(f.snap, !0),
            l,
            g = this.cross;
        d(this, "drawCrosshair", {
          e: a,
          point: b
        });
        a || (a = this.cross && this.cross.e);

        if (this.crosshair && !1 !== (v(b) || !k)) {
          k ? v(b) && (l = F(b.crosshairPos, this.isXAxis ? b.plotX : this.len - b.plotY)) : l = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos);
          v(l) && (e = this.getPlotLinePath(b && (this.isXAxis ? b.x : F(b.stackY, b.y)), null, null, null, l) || null);

          if (!v(e)) {
            this.hideCrosshair();
            return;
          }

          k = this.categories && !this.isRadial;
          g || (this.cross = g = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (k ? "category " : "thin ") + f.className).attr({
            zIndex: F(f.zIndex, 2)
          }).add(), this.chart.styledMode || (g.attr({
            stroke: f.color || (k ? c("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
            "stroke-width": F(f.width, 1)
          }).css({
            "pointer-events": "none"
          }), f.dashStyle && g.attr({
            dashstyle: f.dashStyle
          })));
          g.show().attr({
            d: e
          });
          k && !f.width && g.attr({
            "stroke-width": this.transA
          });
          this.cross.e = a;
        } else this.hideCrosshair();

        d(this, "afterDrawCrosshair", {
          e: a,
          point: b
        });
      },
      hideCrosshair: function hideCrosshair() {
        this.cross && this.cross.hide();
      }
    });
    return a.Axis = B;
  }(J);

  (function (a) {
    var y = a.Axis,
        G = a.getMagnitude,
        E = a.normalizeTickInterval,
        h = a.timeUnits;

    y.prototype.getTimeTicks = function () {
      return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
    };

    y.prototype.normalizeTimeTickInterval = function (a, r) {
      var c = r || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
      r = c[c.length - 1];
      var v = h[r[0]],
          w = r[1],
          n;

      for (n = 0; n < c.length && !(r = c[n], v = h[r[0]], w = r[1], c[n + 1] && a <= (v * w[w.length - 1] + h[c[n + 1][0]]) / 2); n++) {
        ;
      }

      v === h.year && a < 5 * v && (w = [1, 2, 5]);
      a = E(a / v, w, "year" === r[0] ? Math.max(G(a / v), 1) : 1);
      return {
        unitRange: v,
        count: a,
        unitName: r[0]
      };
    };
  })(J);

  (function (a) {
    var y = a.Axis,
        G = a.getMagnitude,
        E = a.normalizeTickInterval,
        h = a.pick;

    y.prototype.getLogTickPositions = function (a, r, u, v) {
      var c = this.options,
          n = this.len,
          g = [];
      v || (this._minorAutoInterval = null);
      if (.5 <= a) a = Math.round(a), g = this.getLinearTickPositions(a, r, u);else if (.08 <= a) for (var n = Math.floor(r), d, m, p, b, l, c = .3 < a ? [1, 2, 4] : .15 < a ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; n < u + 1 && !l; n++) {
        for (m = c.length, d = 0; d < m && !l; d++) {
          p = this.log2lin(this.lin2log(n) * c[d]), p > r && (!v || b <= u) && void 0 !== b && g.push(b), b > u && (l = !0), b = p;
        }
      } else r = this.lin2log(r), u = this.lin2log(u), a = v ? this.getMinorTickInterval() : c.tickInterval, a = h("auto" === a ? null : a, this._minorAutoInterval, c.tickPixelInterval / (v ? 5 : 1) * (u - r) / ((v ? n / this.tickPositions.length : n) || 1)), a = E(a, null, G(a)), g = this.getLinearTickPositions(a, r, u).map(this.log2lin), v || (this._minorAutoInterval = a / 5);
      v || (this.tickInterval = a);
      return g;
    };

    y.prototype.log2lin = function (a) {
      return Math.log(a) / Math.LN10;
    };

    y.prototype.lin2log = function (a) {
      return Math.pow(10, a);
    };
  })(J);

  (function (a, y) {
    var G = a.arrayMax,
        E = a.arrayMin,
        h = a.defined,
        c = a.destroyObjectProperties,
        r = a.erase,
        u = a.merge,
        v = a.pick;

    a.PlotLineOrBand = function (a, c) {
      this.axis = a;
      c && (this.options = c, this.id = c.id);
    };

    a.PlotLineOrBand.prototype = {
      render: function render() {
        a.fireEvent(this, "render");
        var c = this,
            n = c.axis,
            g = n.horiz,
            d = c.options,
            m = d.label,
            p = c.label,
            b = d.to,
            l = d.from,
            f = d.value,
            x = h(l) && h(b),
            t = h(f),
            H = c.svgElem,
            F = !H,
            z = [],
            k = d.color,
            A = v(d.zIndex, 0),
            D = d.events,
            z = {
          "class": "highcharts-plot-" + (x ? "band " : "line ") + (d.className || "")
        },
            B = {},
            e = n.chart.renderer,
            q = x ? "bands" : "lines";
        n.isLog && (l = n.log2lin(l), b = n.log2lin(b), f = n.log2lin(f));
        n.chart.styledMode || (t ? (z.stroke = k, z["stroke-width"] = d.width, d.dashStyle && (z.dashstyle = d.dashStyle)) : x && (k && (z.fill = k), d.borderWidth && (z.stroke = d.borderColor, z["stroke-width"] = d.borderWidth)));
        B.zIndex = A;
        q += "-" + A;
        (k = n.plotLinesAndBandsGroups[q]) || (n.plotLinesAndBandsGroups[q] = k = e.g("plot-" + q).attr(B).add());
        F && (c.svgElem = H = e.path().attr(z).add(k));
        if (t) z = n.getPlotLinePath(f, H.strokeWidth());else if (x) z = n.getPlotBandPath(l, b, d);else return;
        F && z && z.length ? (H.attr({
          d: z
        }), D && a.objectEach(D, function (a, b) {
          H.on(b, function (a) {
            D[b].apply(c, [a]);
          });
        })) : H && (z ? (H.show(), H.animate({
          d: z
        })) : (H.hide(), p && (c.label = p = p.destroy())));
        m && h(m.text) && z && z.length && 0 < n.width && 0 < n.height && !z.isFlat ? (m = u({
          align: g && x && "center",
          x: g ? !x && 4 : 10,
          verticalAlign: !g && x && "middle",
          y: g ? x ? 16 : 10 : x ? 6 : -4,
          rotation: g && !x && 90
        }, m), this.renderLabel(m, z, x, A)) : p && p.hide();
        return c;
      },
      renderLabel: function renderLabel(a, c, g, d) {
        var m = this.label,
            p = this.axis.chart.renderer;
        m || (m = {
          align: a.textAlign || a.align,
          rotation: a.rotation,
          "class": "highcharts-plot-" + (g ? "band" : "line") + "-label " + (a.className || "")
        }, m.zIndex = d, this.label = m = p.text(a.text, 0, 0, a.useHTML).attr(m).add(), this.axis.chart.styledMode || m.css(a.style));
        d = c.xBounds || [c[1], c[4], g ? c[6] : c[1]];
        c = c.yBounds || [c[2], c[5], g ? c[7] : c[2]];
        g = E(d);
        p = E(c);
        m.align(a, !1, {
          x: g,
          y: p,
          width: G(d) - g,
          height: G(c) - p
        });
        m.show();
      },
      destroy: function destroy() {
        r(this.axis.plotLinesAndBands, this);
        delete this.axis;
        c(this);
      }
    };
    a.extend(y.prototype, {
      getPlotBandPath: function getPlotBandPath(a, c) {
        var g = this.getPlotLinePath(c, null, null, !0),
            d = this.getPlotLinePath(a, null, null, !0),
            m = [],
            p = this.horiz,
            b = 1,
            l;
        a = a < this.min && c < this.min || a > this.max && c > this.max;
        if (d && g) for (a && (l = d.toString() === g.toString(), b = 0), a = 0; a < d.length; a += 6) {
          p && g[a + 1] === d[a + 1] ? (g[a + 1] += b, g[a + 4] += b) : p || g[a + 2] !== d[a + 2] || (g[a + 2] += b, g[a + 5] += b), m.push("M", d[a + 1], d[a + 2], "L", d[a + 4], d[a + 5], g[a + 4], g[a + 5], g[a + 1], g[a + 2], "z"), m.isFlat = l;
        }
        return m;
      },
      addPlotBand: function addPlotBand(a) {
        return this.addPlotBandOrLine(a, "plotBands");
      },
      addPlotLine: function addPlotLine(a) {
        return this.addPlotBandOrLine(a, "plotLines");
      },
      addPlotBandOrLine: function addPlotBandOrLine(c, n) {
        var g = new a.PlotLineOrBand(this, c).render(),
            d = this.userOptions;
        g && (n && (d[n] = d[n] || [], d[n].push(c)), this.plotLinesAndBands.push(g));
        return g;
      },
      removePlotBandOrLine: function removePlotBandOrLine(a) {
        for (var c = this.plotLinesAndBands, g = this.options, d = this.userOptions, m = c.length; m--;) {
          c[m].id === a && c[m].destroy();
        }

        [g.plotLines || [], d.plotLines || [], g.plotBands || [], d.plotBands || []].forEach(function (d) {
          for (m = d.length; m--;) {
            d[m].id === a && r(d, d[m]);
          }
        });
      },
      removePlotBand: function removePlotBand(a) {
        this.removePlotBandOrLine(a);
      },
      removePlotLine: function removePlotLine(a) {
        this.removePlotBandOrLine(a);
      }
    });
  })(J, V);

  (function (a) {
    var y = a.doc,
        G = a.extend,
        E = a.format,
        h = a.isNumber,
        c = a.merge,
        r = a.pick,
        u = a.splat,
        v = a.syncTimeout,
        w = a.timeUnits;

    a.Tooltip = function () {
      this.init.apply(this, arguments);
    };

    a.Tooltip.prototype = {
      init: function init(a, c) {
        this.chart = a;
        this.options = c;
        this.crosshairs = [];
        this.now = {
          x: 0,
          y: 0
        };
        this.isHidden = !0;
        this.split = c.split && !a.inverted;
        this.shared = c.shared || this.split;
        this.outside = c.outside && !this.split;
      },
      cleanSplit: function cleanSplit(a) {
        this.chart.series.forEach(function (c) {
          var d = c && c.tt;
          d && (!d.isActive || a ? c.tt = d.destroy() : d.isActive = !1);
        });
      },
      applyFilter: function applyFilter() {
        var a = this.chart;
        a.renderer.definition({
          tagName: "filter",
          id: "drop-shadow-" + a.index,
          opacity: .5,
          children: [{
            tagName: "feGaussianBlur",
            "in": "SourceAlpha",
            stdDeviation: 1
          }, {
            tagName: "feOffset",
            dx: 1,
            dy: 1
          }, {
            tagName: "feComponentTransfer",
            children: [{
              tagName: "feFuncA",
              type: "linear",
              slope: .3
            }]
          }, {
            tagName: "feMerge",
            children: [{
              tagName: "feMergeNode"
            }, {
              tagName: "feMergeNode",
              "in": "SourceGraphic"
            }]
          }]
        });
        a.renderer.definition({
          tagName: "style",
          textContent: ".highcharts-tooltip-" + a.index + "{filter:url(#drop-shadow-" + a.index + ")}"
        });
      },
      getLabel: function getLabel() {
        var c = this.chart.renderer,
            g = this.chart.styledMode,
            d = this.options,
            m;
        this.label || (this.outside && (this.container = m = a.doc.createElement("div"), m.className = "highcharts-tooltip-container", a.css(m, {
          position: "absolute",
          top: "1px",
          pointerEvents: d.style && d.style.pointerEvents
        }), a.doc.body.appendChild(m), this.renderer = c = new a.Renderer(m, 0, 0)), this.split ? this.label = c.g("tooltip") : (this.label = c.label("", 0, 0, d.shape || "callout", null, null, d.useHTML, null, "tooltip").attr({
          padding: d.padding,
          r: d.borderRadius
        }), g || this.label.attr({
          fill: d.backgroundColor,
          "stroke-width": d.borderWidth
        }).css(d.style).shadow(d.shadow)), g && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index)), this.outside && (this.label.attr({
          x: this.distance,
          y: this.distance
        }), this.label.xSetter = function (a) {
          m.style.left = a + "px";
        }, this.label.ySetter = function (a) {
          m.style.top = a + "px";
        }), this.label.attr({
          zIndex: 8
        }).add());
        return this.label;
      },
      update: function update(a) {
        this.destroy();
        c(!0, this.chart.options.tooltip.userOptions, a);
        this.init(this.chart, c(!0, this.options, a));
      },
      destroy: function destroy() {
        this.label && (this.label = this.label.destroy());
        this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
        this.renderer && (this.renderer = this.renderer.destroy(), a.discardElement(this.container));
        a.clearTimeout(this.hideTimer);
        a.clearTimeout(this.tooltipTimeout);
      },
      move: function move(c, g, d, m) {
        var p = this,
            b = p.now,
            l = !1 !== p.options.animation && !p.isHidden && (1 < Math.abs(c - b.x) || 1 < Math.abs(g - b.y)),
            f = p.followPointer || 1 < p.len;
        G(b, {
          x: l ? (2 * b.x + c) / 3 : c,
          y: l ? (b.y + g) / 2 : g,
          anchorX: f ? void 0 : l ? (2 * b.anchorX + d) / 3 : d,
          anchorY: f ? void 0 : l ? (b.anchorY + m) / 2 : m
        });
        p.getLabel().attr(b);
        l && (a.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          p && p.move(c, g, d, m);
        }, 32));
      },
      hide: function hide(c) {
        var g = this;
        a.clearTimeout(this.hideTimer);
        c = r(c, this.options.hideDelay, 500);
        this.isHidden || (this.hideTimer = v(function () {
          g.getLabel()[c ? "fadeOut" : "hide"]();
          g.isHidden = !0;
        }, c));
      },
      getAnchor: function getAnchor(a, c) {
        var d = this.chart,
            g = d.pointer,
            p = d.inverted,
            b = d.plotTop,
            l = d.plotLeft,
            f = 0,
            x = 0,
            t,
            h;
        a = u(a);
        this.followPointer && c ? (void 0 === c.chartX && (c = g.normalize(c)), a = [c.chartX - d.plotLeft, c.chartY - b]) : a[0].tooltipPos ? a = a[0].tooltipPos : (a.forEach(function (a) {
          t = a.series.yAxis;
          h = a.series.xAxis;
          f += a.plotX + (!p && h ? h.left - l : 0);
          x += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!p && t ? t.top - b : 0);
        }), f /= a.length, x /= a.length, a = [p ? d.plotWidth - x : f, this.shared && !p && 1 < a.length && c ? c.chartY - b : p ? d.plotHeight - f : x]);
        return a.map(Math.round);
      },
      getPosition: function getPosition(a, c, d) {
        var g = this.chart,
            p = this.distance,
            b = {},
            l = g.inverted && d.h || 0,
            f,
            x = this.outside,
            t = x ? y.documentElement.clientWidth - 2 * p : g.chartWidth,
            h = x ? Math.max(y.body.scrollHeight, y.documentElement.scrollHeight, y.body.offsetHeight, y.documentElement.offsetHeight, y.documentElement.clientHeight) : g.chartHeight,
            n = g.pointer.chartPosition,
            z = ["y", h, c, (x ? n.top - p : 0) + d.plotY + g.plotTop, x ? 0 : g.plotTop, x ? h : g.plotTop + g.plotHeight],
            k = ["x", t, a, (x ? n.left - p : 0) + d.plotX + g.plotLeft, x ? 0 : g.plotLeft, x ? t : g.plotLeft + g.plotWidth],
            A = !this.followPointer && r(d.ttBelow, !g.inverted === !!d.negative),
            D = function D(a, e, f, k, d, c) {
          var g = f < k - p,
              q = k + p + f < e,
              t = k - p - f;
          k += p;
          if (A && q) b[a] = k;else if (!A && g) b[a] = t;else if (g) b[a] = Math.min(c - f, 0 > t - l ? t : t - l);else if (q) b[a] = Math.max(d, k + l + f > e ? k : k + l);else return !1;
        },
            B = function B(a, e, f, k) {
          var d;
          k < p || k > e - p ? d = !1 : b[a] = k < f / 2 ? 1 : k > e - f / 2 ? e - f - 2 : k - f / 2;
          return d;
        },
            e = function e(a) {
          var b = z;
          z = k;
          k = b;
          f = a;
        },
            q = function q() {
          !1 !== D.apply(0, z) ? !1 !== B.apply(0, k) || f || (e(!0), q()) : f ? b.x = b.y = 0 : (e(!0), q());
        };

        (g.inverted || 1 < this.len) && e();
        q();
        return b;
      },
      defaultFormatter: function defaultFormatter(a) {
        var c = this.points || u(this),
            d;
        d = [a.tooltipFooterHeaderFormatter(c[0])];
        d = d.concat(a.bodyFormatter(c));
        d.push(a.tooltipFooterHeaderFormatter(c[0], !0));
        return d;
      },
      refresh: function refresh(c, g) {
        var d,
            m = this.options,
            p,
            b = c,
            l,
            f = {},
            x = [];
        d = m.formatter || this.defaultFormatter;
        var f = this.shared,
            t,
            h = this.chart.styledMode;
        m.enabled && (a.clearTimeout(this.hideTimer), this.followPointer = u(b)[0].series.tooltipOptions.followPointer, l = this.getAnchor(b, g), g = l[0], p = l[1], !f || b.series && b.series.noSharedTooltip ? f = b.getLabelConfig() : (b.forEach(function (a) {
          a.setState("hover");
          x.push(a.getLabelConfig());
        }), f = {
          x: b[0].category,
          y: b[0].y
        }, f.points = x, b = b[0]), this.len = x.length, f = d.call(f, this), t = b.series, this.distance = r(t.tooltipOptions.distance, 16), !1 === f ? this.hide() : (d = this.getLabel(), this.isHidden && d.attr({
          opacity: 1
        }).show(), this.split ? this.renderSplit(f, u(c)) : (m.style.width && !h || d.css({
          width: this.chart.spacingBox.width
        }), d.attr({
          text: f && f.join ? f.join("") : f
        }), d.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + r(b.colorIndex, t.colorIndex)), h || d.attr({
          stroke: m.borderColor || b.color || t.color || "#666666"
        }), this.updatePosition({
          plotX: g,
          plotY: p,
          negative: b.negative,
          ttBelow: b.ttBelow,
          h: l[2] || 0
        })), this.isHidden = !1));
      },
      renderSplit: function renderSplit(c, g) {
        var d = this,
            m = [],
            p = this.chart,
            b = p.renderer,
            l = !0,
            f = this.options,
            x = 0,
            t,
            h = this.getLabel(),
            n = p.plotTop;
        a.isString(c) && (c = [!1, c]);
        c.slice(0, g.length + 1).forEach(function (a, k) {
          if (!1 !== a && "" !== a) {
            k = g[k - 1] || {
              isHeader: !0,
              plotX: g[0].plotX,
              plotY: p.plotHeight
            };
            var c = k.series || d,
                D = c.tt,
                B = k.series || {},
                e = "highcharts-color-" + r(k.colorIndex, B.colorIndex, "none");
            D || (D = {
              padding: f.padding,
              r: f.borderRadius
            }, p.styledMode || (D.fill = f.backgroundColor, D.stroke = f.borderColor || k.color || B.color || "#333333", D["stroke-width"] = f.borderWidth), c.tt = D = b.label(null, null, null, (k.isHeader ? f.headerShape : f.shape) || "callout", null, null, f.useHTML).addClass("highcharts-tooltip-box " + e).attr(D).add(h));
            D.isActive = !0;
            D.attr({
              text: a
            });
            p.styledMode || D.css(f.style).shadow(f.shadow);
            a = D.getBBox();
            B = a.width + D.strokeWidth();
            k.isHeader ? (x = a.height, p.xAxis[0].opposite && (t = !0, n -= x), B = Math.max(0, Math.min(k.plotX + p.plotLeft - B / 2, p.chartWidth + (p.scrollablePixels ? p.scrollablePixels - p.marginRight : 0) - B))) : B = k.plotX + p.plotLeft - r(f.distance, 16) - B;
            0 > B && (l = !1);
            a = (k.series && k.series.yAxis && k.series.yAxis.pos) + (k.plotY || 0);
            a -= n;
            k.isHeader && (a = t ? -x : p.plotHeight + x);
            m.push({
              target: a,
              rank: k.isHeader ? 1 : 0,
              size: c.tt.getBBox().height + 1,
              point: k,
              x: B,
              tt: D
            });
          }
        });
        this.cleanSplit();
        f.positioner && m.forEach(function (a) {
          var b = f.positioner.call(d, a.tt.getBBox().width, a.size, a.point);
          a.x = b.x;
          a.align = 0;
          a.target = b.y;
          a.rank = r(b.rank, a.rank);
        });
        a.distribute(m, p.plotHeight + x);
        m.forEach(function (a) {
          var b = a.point,
              d = b.series;
          a.tt.attr({
            visibility: void 0 === a.pos ? "hidden" : "inherit",
            x: l || b.isHeader || f.positioner ? a.x : b.plotX + p.plotLeft + r(f.distance, 16),
            y: a.pos + n,
            anchorX: b.isHeader ? b.plotX + p.plotLeft : b.plotX + d.xAxis.pos,
            anchorY: b.isHeader ? p.plotTop + p.plotHeight / 2 : b.plotY + d.yAxis.pos
          });
        });
      },
      updatePosition: function updatePosition(a) {
        var c = this.chart,
            d = this.getLabel(),
            m = (this.options.positioner || this.getPosition).call(this, d.width, d.height, a),
            p = a.plotX + c.plotLeft;
        a = a.plotY + c.plotTop;
        var b;
        this.outside && (b = (this.options.borderWidth || 0) + 2 * this.distance, this.renderer.setSize(d.width + b, d.height + b, !1), p += c.pointer.chartPosition.left - m.x, a += c.pointer.chartPosition.top - m.y);
        this.move(Math.round(m.x), Math.round(m.y || 0), p, a);
      },
      getDateFormat: function getDateFormat(a, c, d, m) {
        var g = this.chart.time,
            b = g.dateFormat("%m-%d %H:%M:%S.%L", c),
            l,
            f,
            x = {
          millisecond: 15,
          second: 12,
          minute: 9,
          hour: 6,
          day: 3
        },
            t = "millisecond";

        for (f in w) {
          if (a === w.week && +g.dateFormat("%w", c) === d && "00:00:00.000" === b.substr(6)) {
            f = "week";
            break;
          }

          if (w[f] > a) {
            f = t;
            break;
          }

          if (x[f] && b.substr(x[f]) !== "01-01 00:00:00.000".substr(x[f])) break;
          "week" !== f && (t = f);
        }

        f && (l = g.resolveDTLFormat(m[f]).main);
        return l;
      },
      getXDateFormat: function getXDateFormat(a, c, d) {
        c = c.dateTimeLabelFormats;
        var g = d && d.closestPointRange;
        return (g ? this.getDateFormat(g, a.x, d.options.startOfWeek, c) : c.day) || c.year;
      },
      tooltipFooterHeaderFormatter: function tooltipFooterHeaderFormatter(a, c) {
        c = c ? "footer" : "header";
        var d = a.series,
            g = d.tooltipOptions,
            p = g.xDateFormat,
            b = d.xAxis,
            l = b && "datetime" === b.options.type && h(a.key),
            f = g[c + "Format"];
        l && !p && (p = this.getXDateFormat(a, g, b));
        l && p && (a.point && a.point.tooltipDateKeys || ["key"]).forEach(function (a) {
          f = f.replace("{point." + a + "}", "{point." + a + ":" + p + "}");
        });
        d.chart.styledMode && (f = this.styledModeFormat(f));
        return E(f, {
          point: a,
          series: d
        }, this.chart.time);
      },
      bodyFormatter: function bodyFormatter(a) {
        return a.map(function (a) {
          var d = a.series.tooltipOptions;
          return (d[(a.point.formatPrefix || "point") + "Formatter"] || a.point.tooltipFormatter).call(a.point, d[(a.point.formatPrefix || "point") + "Format"] || "");
        });
      },
      styledModeFormat: function styledModeFormat(a) {
        return a.replace('style\x3d"font-size: 10px"', 'class\x3d"highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class\x3d"highcharts-color-{$1.colorIndex}"');
      }
    };
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.attr,
        E = a.charts,
        h = a.color,
        c = a.css,
        r = a.defined,
        u = a.extend,
        v = a.find,
        w = a.fireEvent,
        n = a.isNumber,
        g = a.isObject,
        d = a.offset,
        m = a.pick,
        p = a.splat,
        b = a.Tooltip;

    a.Pointer = function (a, b) {
      this.init(a, b);
    };

    a.Pointer.prototype = {
      init: function init(a, f) {
        this.options = f;
        this.chart = a;
        this.runChartClick = f.chart.events && !!f.chart.events.click;
        this.pinchDown = [];
        this.lastValidTouch = {};
        b && (a.tooltip = new b(a, f.tooltip), this.followTouchMove = m(f.tooltip.followTouchMove, !0));
        this.setDOMEvents();
      },
      zoomOption: function zoomOption(a) {
        var b = this.chart,
            d = b.options.chart,
            l = d.zoomType || "",
            b = b.inverted;
        /touch/.test(a.type) && (l = m(d.pinchType, l));
        this.zoomX = a = /x/.test(l);
        this.zoomY = l = /y/.test(l);
        this.zoomHor = a && !b || l && b;
        this.zoomVert = l && !b || a && b;
        this.hasZoom = a || l;
      },
      normalize: function normalize(a, b) {
        var f;
        f = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
        b || (this.chartPosition = b = d(this.chart.container));
        return u(a, {
          chartX: Math.round(f.pageX - b.left),
          chartY: Math.round(f.pageY - b.top)
        });
      },
      getCoordinates: function getCoordinates(a) {
        var b = {
          xAxis: [],
          yAxis: []
        };
        this.chart.axes.forEach(function (f) {
          b[f.isXAxis ? "xAxis" : "yAxis"].push({
            axis: f,
            value: f.toValue(a[f.horiz ? "chartX" : "chartY"])
          });
        });
        return b;
      },
      findNearestKDPoint: function findNearestKDPoint(a, b, d) {
        var f;
        a.forEach(function (a) {
          var l = !(a.noSharedTooltip && b) && 0 > a.options.findNearestPointBy.indexOf("y");
          a = a.searchPoint(d, l);
          if ((l = g(a, !0)) && !(l = !g(f, !0))) var l = f.distX - a.distX,
              c = f.dist - a.dist,
              k = (a.series.group && a.series.group.zIndex) - (f.series.group && f.series.group.zIndex),
              l = 0 < (0 !== l && b ? l : 0 !== c ? c : 0 !== k ? k : f.series.index > a.series.index ? -1 : 1);
          l && (f = a);
        });
        return f;
      },
      getPointFromEvent: function getPointFromEvent(a) {
        a = a.target;

        for (var b; a && !b;) {
          b = a.point, a = a.parentNode;
        }

        return b;
      },
      getChartCoordinatesFromPoint: function getChartCoordinatesFromPoint(a, b) {
        var f = a.series,
            d = f.xAxis,
            f = f.yAxis,
            l = m(a.clientX, a.plotX),
            c = a.shapeArgs;
        if (d && f) return b ? {
          chartX: d.len + d.pos - l,
          chartY: f.len + f.pos - a.plotY
        } : {
          chartX: l + d.pos,
          chartY: a.plotY + f.pos
        };
        if (c && c.x && c.y) return {
          chartX: c.x,
          chartY: c.y
        };
      },
      getHoverData: function getHoverData(a, b, d, c, p, h, n) {
        var f,
            l = [],
            t = n && n.isBoosting;
        c = !(!c || !a);
        n = b && !b.stickyTracking ? [b] : d.filter(function (a) {
          return a.visible && !(!p && a.directTouch) && m(a.options.enableMouseTracking, !0) && a.stickyTracking;
        });
        b = (f = c ? a : this.findNearestKDPoint(n, p, h)) && f.series;
        f && (p && !b.noSharedTooltip ? (n = d.filter(function (a) {
          return a.visible && !(!p && a.directTouch) && m(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
        }), n.forEach(function (a) {
          var b = v(a.points, function (a) {
            return a.x === f.x && !a.isNull;
          });
          g(b) && (t && (b = a.getPoint(b)), l.push(b));
        })) : l.push(f));
        return {
          hoverPoint: f,
          hoverSeries: b,
          hoverPoints: l
        };
      },
      runPointActions: function runPointActions(b, f) {
        var d = this.chart,
            c = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0,
            l = c ? c.shared : !1,
            g = f || d.hoverPoint,
            p = g && g.series || d.hoverSeries,
            p = this.getHoverData(g, p, d.series, "touchmove" !== b.type && (!!f || p && p.directTouch && this.isDirectTouch), l, b, {
          isBoosting: d.isBoosting
        }),
            k,
            g = p.hoverPoint;
        k = p.hoverPoints;
        f = (p = p.hoverSeries) && p.tooltipOptions.followPointer;
        l = l && p && !p.noSharedTooltip;

        if (g && (g !== d.hoverPoint || c && c.isHidden)) {
          (d.hoverPoints || []).forEach(function (a) {
            -1 === k.indexOf(a) && a.setState();
          });
          (k || []).forEach(function (a) {
            a.setState("hover");
          });
          if (d.hoverSeries !== p) p.onMouseOver();
          d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut");
          if (!g.series) return;
          g.firePointEvent("mouseOver");
          d.hoverPoints = k;
          d.hoverPoint = g;
          c && c.refresh(l ? k : g, b);
        } else f && c && !c.isHidden && (g = c.getAnchor([{}], b), c.updatePosition({
          plotX: g[0],
          plotY: g[1]
        }));

        this.unDocMouseMove || (this.unDocMouseMove = y(d.container.ownerDocument, "mousemove", function (b) {
          var f = E[a.hoverChartIndex];
          if (f) f.pointer.onDocumentMouseMove(b);
        }));
        d.axes.forEach(function (f) {
          var d = m(f.crosshair.snap, !0),
              c = d ? a.find(k, function (a) {
            return a.series[f.coll] === f;
          }) : void 0;
          c || !d ? f.drawCrosshair(b, c) : f.hideCrosshair();
        });
      },
      reset: function reset(a, b) {
        var f = this.chart,
            d = f.hoverSeries,
            c = f.hoverPoint,
            l = f.hoverPoints,
            g = f.tooltip,
            k = g && g.shared ? l : c;
        a && k && p(k).forEach(function (b) {
          b.series.isCartesian && void 0 === b.plotX && (a = !1);
        });
        if (a) g && k && k.length && (g.refresh(k), g.shared && l ? l.forEach(function (a) {
          a.setState(a.state, !0);
          a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a));
        }) : c && (c.setState(c.state, !0), f.axes.forEach(function (a) {
          a.crosshair && a.drawCrosshair(null, c);
        })));else {
          if (c) c.onMouseOut();
          l && l.forEach(function (a) {
            a.setState();
          });
          if (d) d.onMouseOut();
          g && g.hide(b);
          this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
          f.axes.forEach(function (a) {
            a.hideCrosshair();
          });
          this.hoverX = f.hoverPoints = f.hoverPoint = null;
        }
      },
      scaleGroups: function scaleGroups(a, b) {
        var f = this.chart,
            d;
        f.series.forEach(function (c) {
          d = a || c.getPlotBox();
          c.xAxis && c.xAxis.zoomEnabled && c.group && (c.group.attr(d), c.markerGroup && (c.markerGroup.attr(d), c.markerGroup.clip(b ? f.clipRect : null)), c.dataLabelsGroup && c.dataLabelsGroup.attr(d));
        });
        f.clipRect.attr(b || f.clipBox);
      },
      dragStart: function dragStart(a) {
        var b = this.chart;
        b.mouseIsDown = a.type;
        b.cancelClick = !1;
        b.mouseDownX = this.mouseDownX = a.chartX;
        b.mouseDownY = this.mouseDownY = a.chartY;
      },
      drag: function drag(a) {
        var b = this.chart,
            d = b.options.chart,
            c = a.chartX,
            l = a.chartY,
            g = this.zoomHor,
            p = this.zoomVert,
            k = b.plotLeft,
            m = b.plotTop,
            D = b.plotWidth,
            B = b.plotHeight,
            e,
            q = this.selectionMarker,
            n = this.mouseDownX,
            r = this.mouseDownY,
            u = d.panKey && a[d.panKey + "Key"];
        q && q.touch || (c < k ? c = k : c > k + D && (c = k + D), l < m ? l = m : l > m + B && (l = m + B), this.hasDragged = Math.sqrt(Math.pow(n - c, 2) + Math.pow(r - l, 2)), 10 < this.hasDragged && (e = b.isInsidePlot(n - k, r - m), b.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !u && !q && (this.selectionMarker = q = b.renderer.rect(k, m, g ? 1 : D, p ? 1 : B, 0).attr({
          "class": "highcharts-selection-marker",
          zIndex: 7
        }).add(), b.styledMode || q.attr({
          fill: d.selectionMarkerFill || h("#335cad").setOpacity(.25).get()
        })), q && g && (c -= n, q.attr({
          width: Math.abs(c),
          x: (0 < c ? 0 : c) + n
        })), q && p && (c = l - r, q.attr({
          height: Math.abs(c),
          y: (0 < c ? 0 : c) + r
        })), e && !q && d.panning && b.pan(a, d.panning)));
      },
      drop: function drop(a) {
        var b = this,
            d = this.chart,
            l = this.hasPinched;

        if (this.selectionMarker) {
          var g = {
            originalEvent: a,
            xAxis: [],
            yAxis: []
          },
              p = this.selectionMarker,
              m = p.attr ? p.attr("x") : p.x,
              k = p.attr ? p.attr("y") : p.y,
              A = p.attr ? p.attr("width") : p.width,
              D = p.attr ? p.attr("height") : p.height,
              h;
          if (this.hasDragged || l) d.axes.forEach(function (e) {
            if (e.zoomEnabled && r(e.min) && (l || b[{
              xAxis: "zoomX",
              yAxis: "zoomY"
            }[e.coll]])) {
              var f = e.horiz,
                  d = "touchend" === a.type ? e.minPixelPadding : 0,
                  c = e.toValue((f ? m : k) + d),
                  f = e.toValue((f ? m + A : k + D) - d);
              g[e.coll].push({
                axis: e,
                min: Math.min(c, f),
                max: Math.max(c, f)
              });
              h = !0;
            }
          }), h && w(d, "selection", g, function (a) {
            d.zoom(u(a, l ? {
              animation: !1
            } : null));
          });
          n(d.index) && (this.selectionMarker = this.selectionMarker.destroy());
          l && this.scaleGroups();
        }

        d && n(d.index) && (c(d.container, {
          cursor: d._cursor
        }), d.cancelClick = 10 < this.hasDragged, d.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      },
      onContainerMouseDown: function onContainerMouseDown(a) {
        a = this.normalize(a);
        2 !== a.button && (this.zoomOption(a), a.preventDefault && a.preventDefault(), this.dragStart(a));
      },
      onDocumentMouseUp: function onDocumentMouseUp(b) {
        E[a.hoverChartIndex] && E[a.hoverChartIndex].pointer.drop(b);
      },
      onDocumentMouseMove: function onDocumentMouseMove(a) {
        var b = this.chart,
            d = this.chartPosition;
        a = this.normalize(a, d);
        !d || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset();
      },
      onContainerMouseLeave: function onContainerMouseLeave(b) {
        var f = E[a.hoverChartIndex];
        f && (b.relatedTarget || b.toElement) && (f.pointer.reset(), f.pointer.chartPosition = null);
      },
      onContainerMouseMove: function onContainerMouseMove(b) {
        var f = this.chart;
        r(a.hoverChartIndex) && E[a.hoverChartIndex] && E[a.hoverChartIndex].mouseIsDown || (a.hoverChartIndex = f.index);
        b = this.normalize(b);
        b.returnValue = !1;
        "mousedown" === f.mouseIsDown && this.drag(b);
        !this.inClass(b.target, "highcharts-tracker") && !f.isInsidePlot(b.chartX - f.plotLeft, b.chartY - f.plotTop) || f.openMenu || this.runPointActions(b);
      },
      inClass: function inClass(a, b) {
        for (var f; a;) {
          if (f = G(a, "class")) {
            if (-1 !== f.indexOf(b)) return !0;
            if (-1 !== f.indexOf("highcharts-container")) return !1;
          }

          a = a.parentNode;
        }
      },
      onTrackerMouseOut: function onTrackerMouseOut(a) {
        var b = this.chart.hoverSeries;
        a = a.relatedTarget || a.toElement;
        this.isDirectTouch = !1;
        if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut();
      },
      onContainerClick: function onContainerClick(a) {
        var b = this.chart,
            d = b.hoverPoint,
            c = b.plotLeft,
            l = b.plotTop;
        a = this.normalize(a);
        b.cancelClick || (d && this.inClass(a.target, "highcharts-tracker") ? (w(d.series, "click", u(a, {
          point: d
        })), b.hoverPoint && d.firePointEvent("click", a)) : (u(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - c, a.chartY - l) && w(b, "click", a)));
      },
      setDOMEvents: function setDOMEvents() {
        var b = this,
            f = b.chart.container,
            d = f.ownerDocument;

        f.onmousedown = function (a) {
          b.onContainerMouseDown(a);
        };

        f.onmousemove = function (a) {
          b.onContainerMouseMove(a);
        };

        f.onclick = function (a) {
          b.onContainerClick(a);
        };

        this.unbindContainerMouseLeave = y(f, "mouseleave", b.onContainerMouseLeave);
        a.unbindDocumentMouseUp || (a.unbindDocumentMouseUp = y(d, "mouseup", b.onDocumentMouseUp));
        a.hasTouch && (f.ontouchstart = function (a) {
          b.onContainerTouchStart(a);
        }, f.ontouchmove = function (a) {
          b.onContainerTouchMove(a);
        }, a.unbindDocumentTouchEnd || (a.unbindDocumentTouchEnd = y(d, "touchend", b.onDocumentTouchEnd)));
      },
      destroy: function destroy() {
        var b = this;
        b.unDocMouseMove && b.unDocMouseMove();
        this.unbindContainerMouseLeave();
        a.chartCount || (a.unbindDocumentMouseUp && (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()), a.unbindDocumentTouchEnd && (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd()));
        clearInterval(b.tooltipTimeout);
        a.objectEach(b, function (a, d) {
          b[d] = null;
        });
      }
    };
  })(J);

  (function (a) {
    var y = a.charts,
        G = a.extend,
        E = a.noop,
        h = a.pick;
    G(a.Pointer.prototype, {
      pinchTranslate: function pinchTranslate(a, h, u, v, w, n) {
        this.zoomHor && this.pinchTranslateDirection(!0, a, h, u, v, w, n);
        this.zoomVert && this.pinchTranslateDirection(!1, a, h, u, v, w, n);
      },
      pinchTranslateDirection: function pinchTranslateDirection(a, h, u, v, w, n, g, d) {
        var c = this.chart,
            p = a ? "x" : "y",
            b = a ? "X" : "Y",
            l = "chart" + b,
            f = a ? "width" : "height",
            x = c["plot" + (a ? "Left" : "Top")],
            t,
            r,
            F = d || 1,
            z = c.inverted,
            k = c.bounds[a ? "h" : "v"],
            A = 1 === h.length,
            D = h[0][l],
            B = u[0][l],
            e = !A && h[1][l],
            q = !A && u[1][l],
            L;

        u = function u() {
          !A && 20 < Math.abs(D - e) && (F = d || Math.abs(B - q) / Math.abs(D - e));
          r = (x - B) / F + D;
          t = c["plot" + (a ? "Width" : "Height")] / F;
        };

        u();
        h = r;
        h < k.min ? (h = k.min, L = !0) : h + t > k.max && (h = k.max - t, L = !0);
        L ? (B -= .8 * (B - g[p][0]), A || (q -= .8 * (q - g[p][1])), u()) : g[p] = [B, q];
        z || (n[p] = r - x, n[f] = t);
        n = z ? 1 / F : F;
        w[f] = t;
        w[p] = h;
        v[z ? a ? "scaleY" : "scaleX" : "scale" + b] = F;
        v["translate" + b] = n * x + (B - n * D);
      },
      pinch: function pinch(a) {
        var c = this,
            u = c.chart,
            v = c.pinchDown,
            w = a.touches,
            n = w.length,
            g = c.lastValidTouch,
            d = c.hasZoom,
            m = c.selectionMarker,
            p = {},
            b = 1 === n && (c.inClass(a.target, "highcharts-tracker") && u.runTrackerClick || c.runChartClick),
            l = {};
        1 < n && (c.initiated = !0);
        d && c.initiated && !b && a.preventDefault();
        [].map.call(w, function (a) {
          return c.normalize(a);
        });
        "touchstart" === a.type ? ([].forEach.call(w, function (a, b) {
          v[b] = {
            chartX: a.chartX,
            chartY: a.chartY
          };
        }), g.x = [v[0].chartX, v[1] && v[1].chartX], g.y = [v[0].chartY, v[1] && v[1].chartY], u.axes.forEach(function (a) {
          if (a.zoomEnabled) {
            var b = u.bounds[a.horiz ? "h" : "v"],
                f = a.minPixelPadding,
                d = a.toPixels(h(a.options.min, a.dataMin)),
                c = a.toPixels(h(a.options.max, a.dataMax)),
                l = Math.max(d, c);
            b.min = Math.min(a.pos, Math.min(d, c) - f);
            b.max = Math.max(a.pos + a.len, l + f);
          }
        }), c.res = !0) : c.followTouchMove && 1 === n ? this.runPointActions(c.normalize(a)) : v.length && (m || (c.selectionMarker = m = G({
          destroy: E,
          touch: !0
        }, u.plotBox)), c.pinchTranslate(v, w, p, m, l, g), c.hasPinched = d, c.scaleGroups(p, l), c.res && (c.res = !1, this.reset(!1, 0)));
      },
      touch: function touch(c, r) {
        var u = this.chart,
            v,
            w;
        if (u.index !== a.hoverChartIndex) this.onContainerMouseLeave({
          relatedTarget: !0
        });
        a.hoverChartIndex = u.index;
        1 === c.touches.length ? (c = this.normalize(c), (w = u.isInsidePlot(c.chartX - u.plotLeft, c.chartY - u.plotTop)) && !u.openMenu ? (r && this.runPointActions(c), "touchmove" === c.type && (r = this.pinchDown, v = r[0] ? 4 <= Math.sqrt(Math.pow(r[0].chartX - c.chartX, 2) + Math.pow(r[0].chartY - c.chartY, 2)) : !1), h(v, !0) && this.pinch(c)) : r && this.reset()) : 2 === c.touches.length && this.pinch(c);
      },
      onContainerTouchStart: function onContainerTouchStart(a) {
        this.zoomOption(a);
        this.touch(a, !0);
      },
      onContainerTouchMove: function onContainerTouchMove(a) {
        this.touch(a);
      },
      onDocumentTouchEnd: function onDocumentTouchEnd(c) {
        y[a.hoverChartIndex] && y[a.hoverChartIndex].pointer.drop(c);
      }
    });
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.charts,
        E = a.css,
        h = a.doc,
        c = a.extend,
        r = a.noop,
        u = a.Pointer,
        v = a.removeEvent,
        w = a.win,
        n = a.wrap;

    if (!a.hasTouch && (w.PointerEvent || w.MSPointerEvent)) {
      var g = {},
          d = !!w.PointerEvent,
          m = function m() {
        var b = [];

        b.item = function (a) {
          return this[a];
        };

        a.objectEach(g, function (a) {
          b.push({
            pageX: a.pageX,
            pageY: a.pageY,
            target: a.target
          });
        });
        return b;
      },
          p = function p(b, d, f, c) {
        "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !G[a.hoverChartIndex] || (c(b), c = G[a.hoverChartIndex].pointer, c[d]({
          type: f,
          target: b.currentTarget,
          preventDefault: r,
          touches: m()
        }));
      };

      c(u.prototype, {
        onContainerPointerDown: function onContainerPointerDown(a) {
          p(a, "onContainerTouchStart", "touchstart", function (a) {
            g[a.pointerId] = {
              pageX: a.pageX,
              pageY: a.pageY,
              target: a.currentTarget
            };
          });
        },
        onContainerPointerMove: function onContainerPointerMove(a) {
          p(a, "onContainerTouchMove", "touchmove", function (a) {
            g[a.pointerId] = {
              pageX: a.pageX,
              pageY: a.pageY
            };
            g[a.pointerId].target || (g[a.pointerId].target = a.currentTarget);
          });
        },
        onDocumentPointerUp: function onDocumentPointerUp(a) {
          p(a, "onDocumentTouchEnd", "touchend", function (a) {
            delete g[a.pointerId];
          });
        },
        batchMSEvents: function batchMSEvents(a) {
          a(this.chart.container, d ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
          a(this.chart.container, d ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
          a(h, d ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
        }
      });
      n(u.prototype, "init", function (a, d, f) {
        a.call(this, d, f);
        this.hasZoom && E(d.container, {
          "-ms-touch-action": "none",
          "touch-action": "none"
        });
      });
      n(u.prototype, "setDOMEvents", function (a) {
        a.apply(this);
        (this.hasZoom || this.followTouchMove) && this.batchMSEvents(y);
      });
      n(u.prototype, "destroy", function (a) {
        this.batchMSEvents(v);
        a.call(this);
      });
    }
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.css,
        E = a.discardElement,
        h = a.defined,
        c = a.fireEvent,
        r = a.isFirefox,
        u = a.marginNames,
        v = a.merge,
        w = a.pick,
        n = a.setAnimation,
        g = a.stableSort,
        d = a.win,
        m = a.wrap;

    a.Legend = function (a, b) {
      this.init(a, b);
    };

    a.Legend.prototype = {
      init: function init(a, b) {
        this.chart = a;
        this.setOptions(b);
        b.enabled && (this.render(), y(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }), this.proximate ? this.unchartrender = y(this.chart, "render", function () {
          this.legend.proximatePositions();
          this.legend.positionItems();
        }) : this.unchartrender && this.unchartrender());
      },
      setOptions: function setOptions(a) {
        var b = w(a.padding, 8);
        this.options = a;
        this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = v(this.itemStyle, a.itemHiddenStyle));
        this.itemMarginTop = a.itemMarginTop || 0;
        this.padding = b;
        this.initialItemY = b - 5;
        this.symbolWidth = w(a.symbolWidth, 16);
        this.pages = [];
        this.proximate = "proximate" === a.layout && !this.chart.inverted;
      },
      update: function update(a, b) {
        var d = this.chart;
        this.setOptions(v(!0, this.options, a));
        this.destroy();
        d.isDirtyLegend = d.isDirtyBox = !0;
        w(b, !0) && d.redraw();
        c(this, "afterUpdate");
      },
      colorizeItem: function colorizeItem(a, b) {
        a.legendGroup[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");

        if (!this.chart.styledMode) {
          var d = this.options,
              f = a.legendItem,
              g = a.legendLine,
              p = a.legendSymbol,
              m = this.itemHiddenStyle.color,
              d = b ? d.itemStyle.color : m,
              h = b ? a.color || m : m,
              n = a.options && a.options.marker,
              k = {
            fill: h
          };
          f && f.css({
            fill: d,
            color: d
          });
          g && g.attr({
            stroke: h
          });
          p && (n && p.isMarker && (k = a.pointAttribs(), b || (k.stroke = k.fill = m)), p.attr(k));
        }

        c(this, "afterColorizeItem", {
          item: a,
          visible: b
        });
      },
      positionItems: function positionItems() {
        this.allItems.forEach(this.positionItem, this);
        this.chart.isResizing || this.positionCheckboxes();
      },
      positionItem: function positionItem(a) {
        var b = this.options,
            d = b.symbolPadding,
            b = !b.rtl,
            f = a._legendItemPos,
            c = f[0],
            f = f[1],
            g = a.checkbox;
        if ((a = a.legendGroup) && a.element) a[h(a.translateY) ? "animate" : "attr"]({
          translateX: b ? c : this.legendWidth - c - 2 * d - 4,
          translateY: f
        });
        g && (g.x = c, g.y = f);
      },
      destroyItem: function destroyItem(a) {
        var b = a.checkbox;
        ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (b) {
          a[b] && (a[b] = a[b].destroy());
        });
        b && E(a.checkbox);
      },
      destroy: function destroy() {
        function a(a) {
          this[a] && (this[a] = this[a].destroy());
        }

        this.getAllItems().forEach(function (b) {
          ["legendItem", "legendGroup"].forEach(a, b);
        });
        "clipRect up down pager nav box title group".split(" ").forEach(a, this);
        this.display = null;
      },
      positionCheckboxes: function positionCheckboxes() {
        var a = this.group && this.group.alignAttr,
            b,
            d = this.clipHeight || this.legendHeight,
            f = this.titleHeight;
        a && (b = a.translateY, this.allItems.forEach(function (c) {
          var g = c.checkbox,
              l;
          g && (l = b + f + g.y + (this.scrollOffset || 0) + 3, G(g, {
            left: a.translateX + c.checkboxOffset + g.x - 20 + "px",
            top: l + "px",
            display: this.proximate || l > b - 6 && l < b + d - 6 ? "" : "none"
          }));
        }, this));
      },
      renderTitle: function renderTitle() {
        var a = this.options,
            b = this.padding,
            d = a.title,
            f = 0;
        d.text && (this.title || (this.title = this.chart.renderer.label(d.text, b - 3, b - 4, null, null, null, a.useHTML, null, "legend-title").attr({
          zIndex: 1
        }), this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), a = this.title.getBBox(), f = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
          translateY: f
        }));
        this.titleHeight = f;
      },
      setText: function setText(d) {
        var b = this.options;
        d.legendItem.attr({
          text: b.labelFormat ? a.format(b.labelFormat, d, this.chart.time) : b.labelFormatter.call(d)
        });
      },
      renderItem: function renderItem(a) {
        var b = this.chart,
            d = b.renderer,
            f = this.options,
            c = this.symbolWidth,
            g = f.symbolPadding,
            p = this.itemStyle,
            m = this.itemHiddenStyle,
            h = "horizontal" === f.layout ? w(f.itemDistance, 20) : 0,
            k = !f.rtl,
            A = a.legendItem,
            D = !a.series,
            B = !D && a.series.drawLegendSymbol ? a.series : a,
            e = B.options,
            e = this.createCheckboxForItem && e && e.showCheckbox,
            h = c + g + h + (e ? 20 : 0),
            q = f.useHTML,
            n = a.options.className;
        A || (a.legendGroup = d.g("legend-item").addClass("highcharts-" + B.type + "-series highcharts-color-" + a.colorIndex + (n ? " " + n : "") + (D ? " highcharts-series-" + a.index : "")).attr({
          zIndex: 1
        }).add(this.scrollGroup), a.legendItem = A = d.text("", k ? c + g : -g, this.baseline || 0, q), b.styledMode || A.css(v(a.visible ? p : m)), A.attr({
          align: k ? "left" : "right",
          zIndex: 2
        }).add(a.legendGroup), this.baseline || (this.fontMetrics = d.fontMetrics(b.styledMode ? 12 : p.fontSize, A), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, A.attr("y", this.baseline)), this.symbolHeight = f.symbolHeight || this.fontMetrics.f, B.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, A, q), e && this.createCheckboxForItem(a));
        this.colorizeItem(a, a.visible);
        !b.styledMode && p.width || A.css({
          width: (f.itemWidth || f.width || b.spacingBox.width) - h
        });
        this.setText(a);
        b = A.getBBox();
        a.itemWidth = a.checkboxOffset = f.itemWidth || a.legendItemWidth || b.width + h;
        this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth);
        this.totalItemWidth += a.itemWidth;
        this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || b.height || this.symbolHeight);
      },
      layoutItem: function layoutItem(a) {
        var b = this.options,
            d = this.padding,
            f = "horizontal" === b.layout,
            c = a.itemHeight,
            g = b.itemMarginBottom || 0,
            p = this.itemMarginTop,
            m = f ? w(b.itemDistance, 20) : 0,
            h = b.width,
            k = h || this.chart.spacingBox.width - 2 * d - b.x,
            b = b.alignColumns && this.totalItemWidth > k ? this.maxItemWidth : a.itemWidth;
        f && this.itemX - d + b > k && (this.itemX = d, this.itemY += p + this.lastLineHeight + g, this.lastLineHeight = 0);
        this.lastItemY = p + this.itemY + g;
        this.lastLineHeight = Math.max(c, this.lastLineHeight);
        a._legendItemPos = [this.itemX, this.itemY];
        f ? this.itemX += b : (this.itemY += p + c + g, this.lastLineHeight = c);
        this.offsetWidth = h || Math.max((f ? this.itemX - d - (a.checkbox ? 0 : m) : b) + d, this.offsetWidth);
      },
      getAllItems: function getAllItems() {
        var a = [];
        this.chart.series.forEach(function (b) {
          var d = b && b.options;
          b && w(d.showInLegend, h(d.linkedTo) ? !1 : void 0, !0) && (a = a.concat(b.legendItems || ("point" === d.legendType ? b.data : b)));
        });
        c(this, "afterGetAllItems", {
          allItems: a
        });
        return a;
      },
      getAlignment: function getAlignment() {
        var a = this.options;
        return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0);
      },
      adjustMargins: function adjustMargins(a, b) {
        var d = this.chart,
            f = this.options,
            c = this.getAlignment();
        c && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (g, l) {
          g.test(c) && !h(a[l]) && (d[u[l]] = Math.max(d[u[l]], d.legend[(l + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][l] * f[l % 2 ? "x" : "y"] + w(f.margin, 12) + b[l] + (0 === l && void 0 !== d.options.title.margin ? d.titleOffset + d.options.title.margin : 0)));
        });
      },
      proximatePositions: function proximatePositions() {
        var d = this.chart,
            b = [],
            c = "left" === this.options.align;
        this.allItems.forEach(function (f) {
          var g, l;
          g = c;
          f.xAxis && f.points && (f.xAxis.options.reversed && (g = !g), g = a.find(g ? f.points : f.points.slice(0).reverse(), function (b) {
            return a.isNumber(b.plotY);
          }), l = f.legendGroup.getBBox().height, b.push({
            target: f.visible ? (g ? g.plotY : f.xAxis.height) - .3 * l : d.plotHeight,
            size: l,
            item: f
          }));
        }, this);
        a.distribute(b, d.plotHeight);
        b.forEach(function (a) {
          a.item._legendItemPos[1] = d.plotTop - d.spacing[0] + a.pos;
        });
      },
      render: function render() {
        var a = this.chart,
            b = a.renderer,
            d = this.group,
            f,
            c,
            m,
            h = this.box,
            n = this.options,
            z = this.padding;
        this.itemX = z;
        this.itemY = this.initialItemY;
        this.lastItemY = this.offsetWidth = 0;
        d || (this.group = d = b.g("legend").attr({
          zIndex: 7
        }).add(), this.contentGroup = b.g().attr({
          zIndex: 1
        }).add(d), this.scrollGroup = b.g().add(this.contentGroup));
        this.renderTitle();
        f = this.getAllItems();
        g(f, function (a, b) {
          return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
        });
        n.reversed && f.reverse();
        this.allItems = f;
        this.display = c = !!f.length;
        this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
        f.forEach(this.renderItem, this);
        f.forEach(this.layoutItem, this);
        f = (n.width || this.offsetWidth) + z;
        m = this.lastItemY + this.lastLineHeight + this.titleHeight;
        m = this.handleOverflow(m);
        m += z;
        h || (this.box = h = b.rect().addClass("highcharts-legend-box").attr({
          r: n.borderRadius
        }).add(d), h.isNew = !0);
        a.styledMode || h.attr({
          stroke: n.borderColor,
          "stroke-width": n.borderWidth || 0,
          fill: n.backgroundColor || "none"
        }).shadow(n.shadow);
        0 < f && 0 < m && (h[h.isNew ? "attr" : "animate"](h.crisp.call({}, {
          x: 0,
          y: 0,
          width: f,
          height: m
        }, h.strokeWidth())), h.isNew = !1);
        h[c ? "show" : "hide"]();
        a.styledMode && "none" === d.getStyle("display") && (f = m = 0);
        this.legendWidth = f;
        this.legendHeight = m;
        c && (b = a.spacingBox, /(lth|ct|rth)/.test(this.getAlignment()) && (b = v(b, {
          y: b.y + a.titleOffset + a.options.title.margin
        })), d.align(v(n, {
          width: f,
          height: m,
          verticalAlign: this.proximate ? "top" : n.verticalAlign
        }), !0, b));
        this.proximate || this.positionItems();
      },
      handleOverflow: function handleOverflow(a) {
        var b = this,
            d = this.chart,
            f = d.renderer,
            c = this.options,
            g = c.y,
            m = this.padding,
            g = d.spacingBox.height + ("top" === c.verticalAlign ? -g : g) - m,
            p = c.maxHeight,
            h,
            k = this.clipRect,
            A = c.navigation,
            D = w(A.animation, !0),
            n = A.arrowSize || 12,
            e = this.nav,
            q = this.pages,
            r,
            u = this.allItems,
            v = function v(a) {
          "number" === typeof a ? k.attr({
            height: a
          }) : k && (b.clipRect = k.destroy(), b.contentGroup.clip());
          b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + m + "px,9999px," + (m + a) + "px,0)" : "auto");
        };

        "horizontal" !== c.layout || "middle" === c.verticalAlign || c.floating || (g /= 2);
        p && (g = Math.min(g, p));
        q.length = 0;
        a > g && !1 !== A.enabled ? (this.clipHeight = h = Math.max(g - 20 - this.titleHeight - m, 0), this.currentPage = w(this.currentPage, 1), this.fullHeight = a, u.forEach(function (a, b) {
          var e = a._legendItemPos[1],
              d = Math.round(a.legendItem.getBBox().height),
              f = q.length;
          if (!f || e - q[f - 1] > h && (r || e) !== q[f - 1]) q.push(r || e), f++;
          a.pageIx = f - 1;
          r && (u[b - 1].pageIx = f - 1);
          b === u.length - 1 && e + d - q[f - 1] > h && e !== r && (q.push(e), a.pageIx = f);
          e !== r && (r = e);
        }), k || (k = b.clipRect = f.clipRect(0, m, 9999, 0), b.contentGroup.clip(k)), v(h), e || (this.nav = e = f.g().attr({
          zIndex: 1
        }).add(this.group), this.up = f.symbol("triangle", 0, 0, n, n).on("click", function () {
          b.scroll(-1, D);
        }).add(e), this.pager = f.text("", 15, 10).addClass("highcharts-legend-navigation"), d.styledMode || this.pager.css(A.style), this.pager.add(e), this.down = f.symbol("triangle-down", 0, 0, n, n).on("click", function () {
          b.scroll(1, D);
        }).add(e)), b.scroll(0), a = g) : e && (v(), this.nav = e.destroy(), this.scrollGroup.attr({
          translateY: 1
        }), this.clipHeight = 0);
        return a;
      },
      scroll: function scroll(a, b) {
        var d = this.pages,
            f = d.length;
        a = this.currentPage + a;
        var c = this.clipHeight,
            g = this.options.navigation,
            m = this.pager,
            p = this.padding;
        a > f && (a = f);
        0 < a && (void 0 !== b && n(b, this.chart), this.nav.attr({
          translateX: p,
          translateY: c + this.padding + 7 + this.titleHeight,
          visibility: "visible"
        }), this.up.attr({
          "class": 1 === a ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
        }), m.attr({
          text: a + "/" + f
        }), this.down.attr({
          x: 18 + this.pager.getBBox().width,
          "class": a === f ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
        }), this.chart.styledMode || (this.up.attr({
          fill: 1 === a ? g.inactiveColor : g.activeColor
        }).css({
          cursor: 1 === a ? "default" : "pointer"
        }), this.down.attr({
          fill: a === f ? g.inactiveColor : g.activeColor
        }).css({
          cursor: a === f ? "default" : "pointer"
        })), this.scrollOffset = -d[a - 1] + this.initialItemY, this.scrollGroup.animate({
          translateY: this.scrollOffset
        }), this.currentPage = a, this.positionCheckboxes());
      }
    };
    a.LegendSymbolMixin = {
      drawRectangle: function drawRectangle(a, b) {
        var d = a.symbolHeight,
            f = a.options.squareSymbol;
        b.legendSymbol = this.chart.renderer.rect(f ? (a.symbolWidth - d) / 2 : 0, a.baseline - d + 1, f ? d : a.symbolWidth, d, w(a.options.symbolRadius, d / 2)).addClass("highcharts-point").attr({
          zIndex: 3
        }).add(b.legendGroup);
      },
      drawLineMarker: function drawLineMarker(a) {
        var b = this.options,
            d = b.marker,
            f = a.symbolWidth,
            c = a.symbolHeight,
            g = c / 2,
            m = this.chart.renderer,
            p = this.legendGroup;
        a = a.baseline - Math.round(.3 * a.fontMetrics.b);
        var h = {};
        this.chart.styledMode || (h = {
          "stroke-width": b.lineWidth || 0
        }, b.dashStyle && (h.dashstyle = b.dashStyle));
        this.legendLine = m.path(["M", 0, a, "L", f, a]).addClass("highcharts-graph").attr(h).add(p);
        d && !1 !== d.enabled && f && (b = Math.min(w(d.radius, g), g), 0 === this.symbol.indexOf("url") && (d = v(d, {
          width: c,
          height: c
        }), b = 0), this.legendSymbol = d = m.symbol(this.symbol, f / 2 - b, a - b, 2 * b, 2 * b, d).addClass("highcharts-point").add(p), d.isMarker = !0);
      }
    };
    (/Trident\/7\.0/.test(d.navigator.userAgent) || r) && m(a.Legend.prototype, "positionItem", function (a, b) {
      var d = this,
          f = function f() {
        b._legendItemPos && a.call(d, b);
      };

      f();
      d.bubbleLegend || setTimeout(f);
    });
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.animate,
        E = a.animObject,
        h = a.attr,
        c = a.doc,
        r = a.Axis,
        u = a.createElement,
        v = a.defaultOptions,
        w = a.discardElement,
        n = a.charts,
        g = a.css,
        d = a.defined,
        m = a.extend,
        p = a.find,
        b = a.fireEvent,
        l = a.isNumber,
        f = a.isObject,
        x = a.isString,
        t = a.Legend,
        H = a.marginNames,
        F = a.merge,
        z = a.objectEach,
        k = a.Pointer,
        A = a.pick,
        D = a.pInt,
        B = a.removeEvent,
        e = a.seriesTypes,
        q = a.splat,
        L = a.syncTimeout,
        I = a.win,
        R = a.Chart = function () {
      this.getArgs.apply(this, arguments);
    };

    a.chart = function (a, b, e) {
      return new R(a, b, e);
    };

    m(R.prototype, {
      callbacks: [],
      getArgs: function getArgs() {
        var a = [].slice.call(arguments);
        if (x(a[0]) || a[0].nodeName) this.renderTo = a.shift();
        this.init(a[0], a[1]);
      },
      init: function init(e, d) {
        var f,
            k,
            c = e.series,
            g = e.plotOptions || {};
        b(this, "init", {
          args: arguments
        }, function () {
          e.series = null;
          f = F(v, e);

          for (k in f.plotOptions) {
            f.plotOptions[k].tooltip = g[k] && F(g[k].tooltip) || void 0;
          }

          f.tooltip.userOptions = e.chart && e.chart.forExport && e.tooltip.userOptions || e.tooltip;
          f.series = e.series = c;
          this.userOptions = e;
          var q = f.chart,
              l = q.events;
          this.margin = [];
          this.spacing = [];
          this.bounds = {
            h: {},
            v: {}
          };
          this.labelCollectors = [];
          this.callback = d;
          this.isResizing = 0;
          this.options = f;
          this.axes = [];
          this.series = [];
          this.time = e.time && Object.keys(e.time).length ? new a.Time(e.time) : a.time;
          this.styledMode = q.styledMode;
          this.hasCartesianSeries = q.showAxes;
          var m = this;
          m.index = n.length;
          n.push(m);
          a.chartCount++;
          l && z(l, function (a, b) {
            y(m, b, a);
          });
          m.xAxis = [];
          m.yAxis = [];
          m.pointCount = m.colorCounter = m.symbolCounter = 0;
          b(m, "afterInit");
          m.firstRender();
        });
      },
      initSeries: function initSeries(b) {
        var d = this.options.chart;
        (d = e[b.type || d.type || d.defaultSeriesType]) || a.error(17, !0, this);
        d = new d();
        d.init(this, b);
        return d;
      },
      orderSeries: function orderSeries(a) {
        var b = this.series;

        for (a = a || 0; a < b.length; a++) {
          b[a] && (b[a].index = a, b[a].name = b[a].getName());
        }
      },
      isInsidePlot: function isInsidePlot(a, b, e) {
        var d = e ? b : a;
        a = e ? a : b;
        return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight;
      },
      redraw: function redraw(e) {
        b(this, "beforeRedraw");
        var d = this.axes,
            f = this.series,
            k = this.pointer,
            c = this.legend,
            g = this.userOptions.legend,
            q = this.isDirtyLegend,
            l,
            p,
            A = this.hasCartesianSeries,
            h = this.isDirtyBox,
            D,
            t = this.renderer,
            n = t.isHidden(),
            B = [];
        this.setResponsive && this.setResponsive(!1);
        a.setAnimation(e, this);
        n && this.temporaryDisplay();
        this.layOutTitles();

        for (e = f.length; e--;) {
          if (D = f[e], D.options.stacking && (l = !0, D.isDirty)) {
            p = !0;
            break;
          }
        }

        if (p) for (e = f.length; e--;) {
          D = f[e], D.options.stacking && (D.isDirty = !0);
        }
        f.forEach(function (a) {
          a.isDirty && ("point" === a.options.legendType ? (a.updateTotals && a.updateTotals(), q = !0) : g && (g.labelFormatter || g.labelFormat) && (q = !0));
          a.isDirtyData && b(a, "updatedData");
        });
        q && c && c.options.enabled && (c.render(), this.isDirtyLegend = !1);
        l && this.getStacks();
        A && d.forEach(function (a) {
          a.updateNames();
          a.updateYNames && a.updateYNames();
          a.setScale();
        });
        this.getMargins();
        A && (d.forEach(function (a) {
          a.isDirty && (h = !0);
        }), d.forEach(function (a) {
          var e = a.min + "," + a.max;
          a.extKey !== e && (a.extKey = e, B.push(function () {
            b(a, "afterSetExtremes", m(a.eventArgs, a.getExtremes()));
            delete a.eventArgs;
          }));
          (h || l) && a.redraw();
        }));
        h && this.drawChartBox();
        b(this, "predraw");
        f.forEach(function (a) {
          (h || a.isDirty) && a.visible && a.redraw();
          a.isDirtyData = !1;
        });
        k && k.reset(!0);
        t.draw();
        b(this, "redraw");
        b(this, "render");
        n && this.temporaryDisplay(!0);
        B.forEach(function (a) {
          a.call();
        });
      },
      get: function get(a) {
        function b(b) {
          return b.id === a || b.options && b.options.id === a;
        }

        var e,
            d = this.series,
            f;
        e = p(this.axes, b) || p(this.series, b);

        for (f = 0; !e && f < d.length; f++) {
          e = p(d[f].points || [], b);
        }

        return e;
      },
      getAxes: function getAxes() {
        var a = this,
            e = this.options,
            d = e.xAxis = q(e.xAxis || {}),
            e = e.yAxis = q(e.yAxis || {});
        b(this, "getAxes");
        d.forEach(function (a, b) {
          a.index = b;
          a.isX = !0;
        });
        e.forEach(function (a, b) {
          a.index = b;
        });
        d.concat(e).forEach(function (b) {
          new r(a, b);
        });
        b(this, "afterGetAxes");
      },
      getSelectedPoints: function getSelectedPoints() {
        var a = [];
        this.series.forEach(function (b) {
          a = a.concat((b.data || []).filter(function (a) {
            return a.selected;
          }));
        });
        return a;
      },
      getSelectedSeries: function getSelectedSeries() {
        return this.series.filter(function (a) {
          return a.selected;
        });
      },
      setTitle: function setTitle(a, b, e) {
        var d = this,
            f = d.options,
            k = d.styledMode,
            c;
        c = f.title = F(!k && {
          style: {
            color: "#333333",
            fontSize: f.isStock ? "16px" : "18px"
          }
        }, f.title, a);
        f = f.subtitle = F(!k && {
          style: {
            color: "#666666"
          }
        }, f.subtitle, b);
        [["title", a, c], ["subtitle", b, f]].forEach(function (a, b) {
          var e = a[0],
              f = d[e],
              c = a[1];
          a = a[2];
          f && c && (d[e] = f = f.destroy());
          a && !f && (d[e] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({
            align: a.align,
            "class": "highcharts-" + e,
            zIndex: a.zIndex || 4
          }).add(), d[e].update = function (a) {
            d.setTitle(!b && a, b && a);
          }, k || d[e].css(a.style));
        });
        d.layOutTitles(e);
      },
      layOutTitles: function layOutTitles(a) {
        var b = 0,
            e,
            d = this.renderer,
            f = this.spacingBox;
        ["title", "subtitle"].forEach(function (a) {
          var e = this[a],
              k = this.options[a];
          a = "title" === a ? -3 : k.verticalAlign ? 0 : b + 2;
          var c;
          e && (this.styledMode || (c = k.style.fontSize), c = d.fontMetrics(c, e).b, e.css({
            width: (k.width || f.width + k.widthAdjust) + "px"
          }).align(m({
            y: a + c
          }, k), !1, "spacingBox"), k.floating || k.verticalAlign || (b = Math.ceil(b + e.getBBox(k.useHTML).height)));
        }, this);
        e = this.titleOffset !== b;
        this.titleOffset = b;
        !this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e, this.hasRendered && A(a, !0) && this.isDirtyBox && this.redraw());
      },
      getChartSize: function getChartSize() {
        var b = this.options.chart,
            e = b.width,
            b = b.height,
            f = this.renderTo;
        d(e) || (this.containerWidth = a.getStyle(f, "width"));
        d(b) || (this.containerHeight = a.getStyle(f, "height"));
        this.chartWidth = Math.max(0, e || this.containerWidth || 600);
        this.chartHeight = Math.max(0, a.relativeLength(b, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
      },
      temporaryDisplay: function temporaryDisplay(b) {
        var e = this.renderTo;
        if (b) for (; e && e.style;) {
          e.hcOrigStyle && (a.css(e, e.hcOrigStyle), delete e.hcOrigStyle), e.hcOrigDetached && (c.body.removeChild(e), e.hcOrigDetached = !1), e = e.parentNode;
        } else for (; e && e.style;) {
          c.body.contains(e) || e.parentNode || (e.hcOrigDetached = !0, c.body.appendChild(e));
          if ("none" === a.getStyle(e, "display", !1) || e.hcOricDetached) e.hcOrigStyle = {
            display: e.style.display,
            height: e.style.height,
            overflow: e.style.overflow
          }, b = {
            display: "block",
            overflow: "hidden"
          }, e !== this.renderTo && (b.height = 0), a.css(e, b), e.offsetWidth || e.style.setProperty("display", "block", "important");
          e = e.parentNode;
          if (e === c.body) break;
        }
      },
      setClassName: function setClassName(a) {
        this.container.className = "highcharts-container " + (a || "");
      },
      getContainer: function getContainer() {
        var e,
            d = this.options,
            f = d.chart,
            k,
            q;
        e = this.renderTo;
        var p = a.uniqueKey(),
            A,
            t;
        e || (this.renderTo = e = f.renderTo);
        x(e) && (this.renderTo = e = c.getElementById(e));
        e || a.error(13, !0, this);
        k = D(h(e, "data-highcharts-chart"));
        l(k) && n[k] && n[k].hasRendered && n[k].destroy();
        h(e, "data-highcharts-chart", this.index);
        e.innerHTML = "";
        f.skipClone || e.offsetWidth || this.temporaryDisplay();
        this.getChartSize();
        k = this.chartWidth;
        q = this.chartHeight;
        g(e, {
          overflow: "hidden"
        });
        this.styledMode || (A = m({
          position: "relative",
          overflow: "hidden",
          width: k + "px",
          height: q + "px",
          textAlign: "left",
          lineHeight: "normal",
          zIndex: 0,
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
        }, f.style));
        this.container = e = u("div", {
          id: p
        }, A, e);
        this._cursor = e.style.cursor;
        this.renderer = new (a[f.renderer] || a.Renderer)(e, k, q, null, f.forExport, d.exporting && d.exporting.allowHTML, this.styledMode);
        this.setClassName(f.className);
        if (this.styledMode) for (t in d.defs) {
          this.renderer.definition(d.defs[t]);
        } else this.renderer.setStyle(f.style);
        this.renderer.chartIndex = this.index;
        b(this, "afterGetContainer");
      },
      getMargins: function getMargins(a) {
        var e = this.spacing,
            f = this.margin,
            k = this.titleOffset;
        this.resetMargins();
        k && !d(f[0]) && (this.plotTop = Math.max(this.plotTop, k + this.options.title.margin + e[0]));
        this.legend && this.legend.display && this.legend.adjustMargins(f, e);
        b(this, "getMargins");
        a || this.getAxisMargins();
      },
      getAxisMargins: function getAxisMargins() {
        var a = this,
            b = a.axisOffset = [0, 0, 0, 0],
            e = a.margin;
        a.hasCartesianSeries && a.axes.forEach(function (a) {
          a.visible && a.getOffset();
        });
        H.forEach(function (f, k) {
          d(e[k]) || (a[f] += b[k]);
        });
        a.setChartSize();
      },
      reflow: function reflow(b) {
        var e = this,
            f = e.options.chart,
            k = e.renderTo,
            g = d(f.width) && d(f.height),
            q = f.width || a.getStyle(k, "width"),
            f = f.height || a.getStyle(k, "height"),
            k = b ? b.target : I;

        if (!g && !e.isPrinting && q && f && (k === I || k === c)) {
          if (q !== e.containerWidth || f !== e.containerHeight) a.clearTimeout(e.reflowTimeout), e.reflowTimeout = L(function () {
            e.container && e.setSize(void 0, void 0, !1);
          }, b ? 100 : 0);
          e.containerWidth = q;
          e.containerHeight = f;
        }
      },
      setReflow: function setReflow(a) {
        var b = this;
        !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = y(I, "resize", function (a) {
          b.reflow(a);
        }), y(this, "destroy", this.unbindReflow));
      },
      setSize: function setSize(e, f, d) {
        var k = this,
            c = k.renderer,
            q;
        k.isResizing += 1;
        a.setAnimation(d, k);
        k.oldChartHeight = k.chartHeight;
        k.oldChartWidth = k.chartWidth;
        void 0 !== e && (k.options.chart.width = e);
        void 0 !== f && (k.options.chart.height = f);
        k.getChartSize();
        k.styledMode || (q = c.globalAnimation, (q ? G : g)(k.container, {
          width: k.chartWidth + "px",
          height: k.chartHeight + "px"
        }, q));
        k.setChartSize(!0);
        c.setSize(k.chartWidth, k.chartHeight, d);
        k.axes.forEach(function (a) {
          a.isDirty = !0;
          a.setScale();
        });
        k.isDirtyLegend = !0;
        k.isDirtyBox = !0;
        k.layOutTitles();
        k.getMargins();
        k.redraw(d);
        k.oldChartHeight = null;
        b(k, "resize");
        L(function () {
          k && b(k, "endResize", null, function () {
            --k.isResizing;
          });
        }, E(q).duration);
      },
      setChartSize: function setChartSize(a) {
        var e = this.inverted,
            f = this.renderer,
            d = this.chartWidth,
            k = this.chartHeight,
            c = this.options.chart,
            g = this.spacing,
            q = this.clipOffset,
            l,
            m,
            p,
            A;
        this.plotLeft = l = Math.round(this.plotLeft);
        this.plotTop = m = Math.round(this.plotTop);
        this.plotWidth = p = Math.max(0, Math.round(d - l - this.marginRight));
        this.plotHeight = A = Math.max(0, Math.round(k - m - this.marginBottom));
        this.plotSizeX = e ? A : p;
        this.plotSizeY = e ? p : A;
        this.plotBorderWidth = c.plotBorderWidth || 0;
        this.spacingBox = f.spacingBox = {
          x: g[3],
          y: g[0],
          width: d - g[3] - g[1],
          height: k - g[0] - g[2]
        };
        this.plotBox = f.plotBox = {
          x: l,
          y: m,
          width: p,
          height: A
        };
        d = 2 * Math.floor(this.plotBorderWidth / 2);
        e = Math.ceil(Math.max(d, q[3]) / 2);
        f = Math.ceil(Math.max(d, q[0]) / 2);
        this.clipBox = {
          x: e,
          y: f,
          width: Math.floor(this.plotSizeX - Math.max(d, q[1]) / 2 - e),
          height: Math.max(0, Math.floor(this.plotSizeY - Math.max(d, q[2]) / 2 - f))
        };
        a || this.axes.forEach(function (a) {
          a.setAxisSize();
          a.setAxisTranslation();
        });
        b(this, "afterSetChartSize", {
          skipAxes: a
        });
      },
      resetMargins: function resetMargins() {
        b(this, "resetMargins");
        var a = this,
            e = a.options.chart;
        ["margin", "spacing"].forEach(function (b) {
          var d = e[b],
              k = f(d) ? d : [d, d, d, d];
          ["Top", "Right", "Bottom", "Left"].forEach(function (d, f) {
            a[b][f] = A(e[b + d], k[f]);
          });
        });
        H.forEach(function (b, e) {
          a[b] = A(a.margin[e], a.spacing[e]);
        });
        a.axisOffset = [0, 0, 0, 0];
        a.clipOffset = [0, 0, 0, 0];
      },
      drawChartBox: function drawChartBox() {
        var a = this.options.chart,
            e = this.renderer,
            d = this.chartWidth,
            f = this.chartHeight,
            k = this.chartBackground,
            c = this.plotBackground,
            g = this.plotBorder,
            q,
            l = this.styledMode,
            m = this.plotBGImage,
            p = a.backgroundColor,
            A = a.plotBackgroundColor,
            h = a.plotBackgroundImage,
            D,
            t = this.plotLeft,
            n = this.plotTop,
            B = this.plotWidth,
            x = this.plotHeight,
            r = this.plotBox,
            z = this.clipRect,
            u = this.clipBox,
            v = "animate";
        k || (this.chartBackground = k = e.rect().addClass("highcharts-background").add(), v = "attr");
        if (l) q = D = k.strokeWidth();else {
          q = a.borderWidth || 0;
          D = q + (a.shadow ? 8 : 0);
          p = {
            fill: p || "none"
          };
          if (q || k["stroke-width"]) p.stroke = a.borderColor, p["stroke-width"] = q;
          k.attr(p).shadow(a.shadow);
        }
        k[v]({
          x: D / 2,
          y: D / 2,
          width: d - D - q % 2,
          height: f - D - q % 2,
          r: a.borderRadius
        });
        v = "animate";
        c || (v = "attr", this.plotBackground = c = e.rect().addClass("highcharts-plot-background").add());
        c[v](r);
        l || (c.attr({
          fill: A || "none"
        }).shadow(a.plotShadow), h && (m ? m.animate(r) : this.plotBGImage = e.image(h, t, n, B, x).add()));
        z ? z.animate({
          width: u.width,
          height: u.height
        }) : this.clipRect = e.clipRect(u);
        v = "animate";
        g || (v = "attr", this.plotBorder = g = e.rect().addClass("highcharts-plot-border").attr({
          zIndex: 1
        }).add());
        l || g.attr({
          stroke: a.plotBorderColor,
          "stroke-width": a.plotBorderWidth || 0,
          fill: "none"
        });
        g[v](g.crisp({
          x: t,
          y: n,
          width: B,
          height: x
        }, -g.strokeWidth()));
        this.isDirtyBox = !1;
        b(this, "afterDrawChartBox");
      },
      propFromSeries: function propFromSeries() {
        var a = this,
            b = a.options.chart,
            d,
            f = a.options.series,
            k,
            c;
        ["inverted", "angular", "polar"].forEach(function (g) {
          d = e[b.type || b.defaultSeriesType];
          c = b[g] || d && d.prototype[g];

          for (k = f && f.length; !c && k--;) {
            (d = e[f[k].type]) && d.prototype[g] && (c = !0);
          }

          a[g] = c;
        });
      },
      linkSeries: function linkSeries() {
        var a = this,
            e = a.series;
        e.forEach(function (a) {
          a.linkedSeries.length = 0;
        });
        e.forEach(function (b) {
          var e = b.options.linkedTo;
          x(e) && (e = ":previous" === e ? a.series[b.index - 1] : a.get(e)) && e.linkedParent !== b && (e.linkedSeries.push(b), b.linkedParent = e, b.visible = A(b.options.visible, e.options.visible, b.visible));
        });
        b(this, "afterLinkSeries");
      },
      renderSeries: function renderSeries() {
        this.series.forEach(function (a) {
          a.translate();
          a.render();
        });
      },
      renderLabels: function renderLabels() {
        var a = this,
            b = a.options.labels;
        b.items && b.items.forEach(function (e) {
          var d = m(b.style, e.style),
              f = D(d.left) + a.plotLeft,
              k = D(d.top) + a.plotTop + 12;
          delete d.left;
          delete d.top;
          a.renderer.text(e.html, f, k).attr({
            zIndex: 2
          }).css(d).add();
        });
      },
      render: function render() {
        var a = this.axes,
            b = this.renderer,
            e = this.options,
            d,
            f,
            k;
        this.setTitle();
        this.legend = new t(this, e.legend);
        this.getStacks && this.getStacks();
        this.getMargins(!0);
        this.setChartSize();
        e = this.plotWidth;
        d = this.plotHeight = Math.max(this.plotHeight - 21, 0);
        a.forEach(function (a) {
          a.setScale();
        });
        this.getAxisMargins();
        f = 1.1 < e / this.plotWidth;
        k = 1.05 < d / this.plotHeight;
        if (f || k) a.forEach(function (a) {
          (a.horiz && f || !a.horiz && k) && a.setTickInterval(!0);
        }), this.getMargins();
        this.drawChartBox();
        this.hasCartesianSeries && a.forEach(function (a) {
          a.visible && a.render();
        });
        this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({
          zIndex: 3
        }).add());
        this.renderSeries();
        this.renderLabels();
        this.addCredits();
        this.setResponsive && this.setResponsive();
        this.hasRendered = !0;
      },
      addCredits: function addCredits(a) {
        var b = this;
        a = F(!0, this.options.credits, a);
        a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          a.href && (I.location.href = a.href);
        }).attr({
          align: a.position.align,
          zIndex: 8
        }), b.styledMode || this.credits.css(a.style), this.credits.add().align(a.position), this.credits.update = function (a) {
          b.credits = b.credits.destroy();
          b.addCredits(a);
        });
      },
      destroy: function destroy() {
        var e = this,
            d = e.axes,
            f = e.series,
            k = e.container,
            c,
            g = k && k.parentNode;
        b(e, "destroy");
        e.renderer.forExport ? a.erase(n, e) : n[e.index] = void 0;
        a.chartCount--;
        e.renderTo.removeAttribute("data-highcharts-chart");
        B(e);

        for (c = d.length; c--;) {
          d[c] = d[c].destroy();
        }

        this.scroller && this.scroller.destroy && this.scroller.destroy();

        for (c = f.length; c--;) {
          f[c] = f[c].destroy();
        }

        "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (a) {
          var b = e[a];
          b && b.destroy && (e[a] = b.destroy());
        });
        k && (k.innerHTML = "", B(k), g && w(k));
        z(e, function (a, b) {
          delete e[b];
        });
      },
      firstRender: function firstRender() {
        var e = this,
            d = e.options;

        if (!e.isReadyToRender || e.isReadyToRender()) {
          e.getContainer();
          e.resetMargins();
          e.setChartSize();
          e.propFromSeries();
          e.getAxes();
          (a.isArray(d.series) ? d.series : []).forEach(function (a) {
            e.initSeries(a);
          });
          e.linkSeries();
          b(e, "beforeRender");
          k && (e.pointer = new k(e, d));
          e.render();
          if (!e.renderer.imgCount && e.onload) e.onload();
          e.temporaryDisplay(!0);
        }
      },
      onload: function onload() {
        [this.callback].concat(this.callbacks).forEach(function (a) {
          a && void 0 !== this.index && a.apply(this, [this]);
        }, this);
        b(this, "load");
        b(this, "render");
        d(this.index) && this.setReflow(this.options.chart.reflow);
        this.onload = null;
      }
    });
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.Chart;
    y(G, "afterSetChartSize", function (y) {
      var h = this.options.chart.scrollablePlotArea;
      (h = h && h.minWidth) && !this.renderer.forExport && (this.scrollablePixels = h = Math.max(0, h - this.chartWidth)) && (this.plotWidth += h, this.clipBox.width += h, y.skipAxes || this.axes.forEach(function (c) {
        1 === c.side ? c.getPlotLinePath = function () {
          var h = this.right,
              u;
          this.right = h - c.chart.scrollablePixels;
          u = a.Axis.prototype.getPlotLinePath.apply(this, arguments);
          this.right = h;
          return u;
        } : (c.setAxisSize(), c.setAxisTranslation());
      }));
    });
    y(G, "render", function () {
      this.scrollablePixels ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
    });

    G.prototype.setUpScrolling = function () {
      this.scrollingContainer = a.createElement("div", {
        className: "highcharts-scrolling"
      }, {
        overflowX: "auto",
        WebkitOverflowScrolling: "touch"
      }, this.renderTo);
      this.innerContainer = a.createElement("div", {
        className: "highcharts-inner-container"
      }, null, this.scrollingContainer);
      this.innerContainer.appendChild(this.container);
      this.setUpScrolling = null;
    };

    G.prototype.applyFixed = function () {
      var y = this.container,
          h,
          c,
          r = !this.fixedDiv;
      r && (this.fixedDiv = a.createElement("div", {
        className: "highcharts-fixed"
      }, {
        position: "absolute",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2
      }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.renderTo.style.overflow = "visible", this.fixedRenderer = h = new a.Renderer(this.fixedDiv, 0, 0), this.scrollableMask = h.path().attr({
        fill: a.color(this.options.chart.backgroundColor || "#fff").setOpacity(.85).get(),
        zIndex: -1
      }).addClass("highcharts-scrollable-mask").add(), [this.inverted ? ".highcharts-xaxis" : ".highcharts-yaxis", this.inverted ? ".highcharts-xaxis-labels" : ".highcharts-yaxis-labels", ".highcharts-contextbutton", ".highcharts-credits", ".highcharts-legend", ".highcharts-subtitle", ".highcharts-title", ".highcharts-legend-checkbox"].forEach(function (a) {
        [].forEach.call(y.querySelectorAll(a), function (a) {
          (a.namespaceURI === h.SVG_NS ? h.box : h.box.parentNode).appendChild(a);
          a.style.pointerEvents = "auto";
        });
      }));
      this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
      c = this.chartWidth + this.scrollablePixels;
      a.stop(this.container);
      this.container.style.width = c + "px";
      this.renderer.boxWrapper.attr({
        width: c,
        height: this.chartHeight,
        viewBox: [0, 0, c, this.chartHeight].join(" ")
      });
      this.chartBackground.attr({
        width: c
      });
      r && (c = this.options.chart.scrollablePlotArea, c.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixels * c.scrollPositionX));
      r = this.axisOffset;
      c = this.plotTop - r[0] - 1;
      var r = this.plotTop + this.plotHeight + r[2],
          u = this.plotLeft + this.plotWidth - this.scrollablePixels;
      this.scrollableMask.attr({
        d: this.scrollablePixels ? ["M", 0, c, "L", this.plotLeft - 1, c, "L", this.plotLeft - 1, r, "L", 0, r, "Z", "M", u, c, "L", this.chartWidth, c, "L", this.chartWidth, r, "L", u, r, "Z"] : ["M", 0, 0]
      });
    };
  })(J);

  (function (a) {
    var y,
        G = a.extend,
        E = a.erase,
        h = a.fireEvent,
        c = a.format,
        r = a.isArray,
        u = a.isNumber,
        v = a.pick,
        w = a.uniqueKey,
        n = a.defined,
        g = a.removeEvent;

    a.Point = y = function y() {};

    a.Point.prototype = {
      init: function init(a, c, g) {
        var b;
        b = a.chart.options.chart.colorCount;
        var d = a.chart.styledMode;
        this.series = a;
        d || (this.color = a.color);
        this.applyOptions(c, g);
        this.id = n(this.id) ? this.id : w();
        a.options.colorByPoint ? (d || (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter], b = b.length), c = a.colorCounter, a.colorCounter++, a.colorCounter === b && (a.colorCounter = 0)) : c = a.colorIndex;
        this.colorIndex = v(this.colorIndex, c);
        a.chart.pointCount++;
        h(this, "afterInit");
        return this;
      },
      applyOptions: function applyOptions(a, c) {
        var d = this.series,
            b = d.options.pointValKey || d.pointValKey;
        a = y.prototype.optionsToObject.call(this, a);
        G(this, a);
        this.options = this.options ? G(this.options, a) : a;
        a.group && delete this.group;
        a.dataLabels && delete this.dataLabels;
        b && (this.y = this[b]);
        this.isNull = v(this.isValid && !this.isValid(), null === this.x || !u(this.y, !0));
        this.selected && (this.state = "select");
        "name" in this && void 0 === c && d.xAxis && d.xAxis.hasNames && (this.x = d.xAxis.nameToX(this));
        void 0 === this.x && d && (this.x = void 0 === c ? d.autoIncrement(this) : c);
        return this;
      },
      setNestedProperty: function setNestedProperty(d, c, g) {
        g.split(".").reduce(function (b, d, f, g) {
          b[d] = g.length - 1 === f ? c : a.isObject(b[d], !0) ? b[d] : {};
          return b[d];
        }, d);
        return d;
      },
      optionsToObject: function optionsToObject(d) {
        var c = {},
            g = this.series,
            b = g.options.keys,
            l = b || g.pointArrayMap || ["y"],
            f = l.length,
            h = 0,
            t = 0;
        if (u(d) || null === d) c[l[0]] = d;else if (r(d)) for (!b && d.length > f && (g = _typeof(d[0]), "string" === g ? c.name = d[0] : "number" === g && (c.x = d[0]), h++); t < f;) {
          b && void 0 === d[h] || (0 < l[t].indexOf(".") ? a.Point.prototype.setNestedProperty(c, d[h], l[t]) : c[l[t]] = d[h]), h++, t++;
        } else "object" === _typeof(d) && (c = d, d.dataLabels && (g._hasPointLabels = !0), d.marker && (g._hasPointMarkers = !0));
        return c;
      },
      getClassName: function getClassName() {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      },
      getZone: function getZone() {
        var a = this.series,
            c = a.zones,
            a = a.zoneAxis || "y",
            g = 0,
            b;

        for (b = c[g]; this[a] >= b.value;) {
          b = c[++g];
        }

        this.nonZonedColor || (this.nonZonedColor = this.color);
        this.color = b && b.color && !this.options.color ? b.color : this.nonZonedColor;
        return b;
      },
      destroy: function destroy() {
        var a = this.series.chart,
            c = a.hoverPoints,
            h;
        a.pointCount--;
        c && (this.setState(), E(c, this), c.length || (a.hoverPoints = null));
        if (this === a.hoverPoint) this.onMouseOut();
        if (this.graphic || this.dataLabel || this.dataLabels) g(this), this.destroyElements();
        this.legendItem && a.legend.destroyItem(this);

        for (h in this) {
          this[h] = null;
        }
      },
      destroyElements: function destroyElements() {
        for (var a = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], c, g = 6; g--;) {
          c = a[g], this[c] && (this[c] = this[c].destroy());
        }

        this.dataLabels && (this.dataLabels.forEach(function (a) {
          a.element && a.destroy();
        }), delete this.dataLabels);
        this.connectors && (this.connectors.forEach(function (a) {
          a.element && a.destroy();
        }), delete this.connectors);
      },
      getLabelConfig: function getLabelConfig() {
        return {
          x: this.category,
          y: this.y,
          color: this.color,
          colorIndex: this.colorIndex,
          key: this.name || this.category,
          series: this.series,
          point: this,
          percentage: this.percentage,
          total: this.total || this.stackTotal
        };
      },
      tooltipFormatter: function tooltipFormatter(a) {
        var d = this.series,
            g = d.tooltipOptions,
            b = v(g.valueDecimals, ""),
            l = g.valuePrefix || "",
            f = g.valueSuffix || "";
        d.chart.styledMode && (a = d.chart.tooltip.styledModeFormat(a));
        (d.pointArrayMap || ["y"]).forEach(function (d) {
          d = "{point." + d;
          if (l || f) a = a.replace(RegExp(d + "}", "g"), l + d + "}" + f);
          a = a.replace(RegExp(d + "}", "g"), d + ":,." + b + "f}");
        });
        return c(a, {
          point: this,
          series: this.series
        }, d.chart.time);
      },
      firePointEvent: function firePointEvent(a, c, g) {
        var b = this,
            d = this.series.options;
        (d.point.events[a] || b.options && b.options.events && b.options.events[a]) && this.importEvents();
        "click" === a && d.allowPointSelect && (g = function g(a) {
          b.select && b.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
        });
        h(this, a, c, g);
      },
      visible: !0
    };
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.animObject,
        E = a.arrayMax,
        h = a.arrayMin,
        c = a.correctFloat,
        r = a.defaultOptions,
        u = a.defaultPlotOptions,
        v = a.defined,
        w = a.erase,
        n = a.extend,
        g = a.fireEvent,
        d = a.isArray,
        m = a.isNumber,
        p = a.isString,
        b = a.merge,
        l = a.objectEach,
        f = a.pick,
        x = a.removeEvent,
        t = a.splat,
        H = a.SVGElement,
        F = a.syncTimeout,
        z = a.win;
    a.Series = a.seriesType("line", null, {
      lineWidth: 2,
      allowPointSelect: !1,
      showCheckbox: !1,
      animation: {
        duration: 1E3
      },
      events: {},
      marker: {
        lineWidth: 0,
        lineColor: "#ffffff",
        enabledThreshold: 2,
        radius: 4,
        states: {
          normal: {
            animation: !0
          },
          hover: {
            animation: {
              duration: 50
            },
            enabled: !0,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: {
            fillColor: "#cccccc",
            lineColor: "#000000",
            lineWidth: 2
          }
        }
      },
      point: {
        events: {}
      },
      dataLabels: {
        align: "center",
        formatter: function formatter() {
          return null === this.y ? "" : a.numberFormat(this.y, -1);
        },
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        padding: 5
      },
      cropThreshold: 300,
      pointRange: 0,
      softThreshold: !0,
      states: {
        normal: {
          animation: !0
        },
        hover: {
          animation: {
            duration: 50
          },
          lineWidthPlus: 1,
          marker: {},
          halo: {
            size: 10,
            opacity: .25
          }
        },
        select: {}
      },
      stickyTracking: !0,
      turboThreshold: 1E3,
      findNearestPointBy: "x"
    }, {
      isCartesian: !0,
      pointClass: a.Point,
      sorted: !0,
      requireSorting: !0,
      directTouch: !1,
      axisTypes: ["xAxis", "yAxis"],
      colorCounter: 0,
      parallelArrays: ["x", "y"],
      coll: "series",
      init: function init(a, b) {
        g(this, "init", {
          options: b
        });
        var d = this,
            k,
            e = a.series,
            c;
        d.chart = a;
        d.options = b = d.setOptions(b);
        d.linkedSeries = [];
        d.bindAxes();
        n(d, {
          name: b.name,
          state: "",
          visible: !1 !== b.visible,
          selected: !0 === b.selected
        });
        k = b.events;
        l(k, function (a, b) {
          y(d, b, a);
        });
        if (k && k.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
        d.getColor();
        d.getSymbol();
        d.parallelArrays.forEach(function (a) {
          d[a + "Data"] = [];
        });
        d.setData(b.data, !1);
        d.isCartesian && (a.hasCartesianSeries = !0);
        e.length && (c = e[e.length - 1]);
        d._i = f(c && c._i, -1) + 1;
        a.orderSeries(this.insert(e));
        g(this, "afterInit");
      },
      insert: function insert(a) {
        var b = this.options.index,
            d;

        if (m(b)) {
          for (d = a.length; d--;) {
            if (b >= f(a[d].options.index, a[d]._i)) {
              a.splice(d + 1, 0, this);
              break;
            }
          }

          -1 === d && a.unshift(this);
          d += 1;
        } else a.push(this);

        return f(d, a.length - 1);
      },
      bindAxes: function bindAxes() {
        var b = this,
            d = b.options,
            f = b.chart,
            c;
        (b.axisTypes || []).forEach(function (e) {
          f[e].forEach(function (a) {
            c = a.options;
            if (d[e] === c.index || void 0 !== d[e] && d[e] === c.id || void 0 === d[e] && 0 === c.index) b.insert(a.series), b[e] = a, a.isDirty = !0;
          });
          b[e] || b.optionalAxis === e || a.error(18, !0, f);
        });
      },
      updateParallelArrays: function updateParallelArrays(a, b) {
        var d = a.series,
            f = arguments,
            e = m(b) ? function (e) {
          var f = "y" === e && d.toYData ? d.toYData(a) : a[e];
          d[e + "Data"][b] = f;
        } : function (a) {
          Array.prototype[b].apply(d[a + "Data"], Array.prototype.slice.call(f, 2));
        };
        d.parallelArrays.forEach(e);
      },
      autoIncrement: function autoIncrement() {
        var a = this.options,
            b = this.xIncrement,
            d,
            c = a.pointIntervalUnit,
            e = this.chart.time,
            b = f(b, a.pointStart, 0);
        this.pointInterval = d = f(this.pointInterval, a.pointInterval, 1);
        c && (a = new e.Date(b), "day" === c ? e.set("Date", a, e.get("Date", a) + d) : "month" === c ? e.set("Month", a, e.get("Month", a) + d) : "year" === c && e.set("FullYear", a, e.get("FullYear", a) + d), d = a.getTime() - b);
        this.xIncrement = b + d;
        return b;
      },
      setOptions: function setOptions(a) {
        var d = this.chart,
            c = d.options,
            k = c.plotOptions,
            e = (d.userOptions || {}).plotOptions || {},
            q = k[this.type],
            l = d.styledMode;
        this.userOptions = a;
        d = b(q, k.series, a);
        this.tooltipOptions = b(r.tooltip, r.plotOptions.series && r.plotOptions.series.tooltip, r.plotOptions[this.type].tooltip, c.tooltip.userOptions, k.series && k.series.tooltip, k[this.type].tooltip, a.tooltip);
        this.stickyTracking = f(a.stickyTracking, e[this.type] && e[this.type].stickyTracking, e.series && e.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : d.stickyTracking);
        null === q.marker && delete d.marker;
        this.zoneAxis = d.zoneAxis;
        a = this.zones = (d.zones || []).slice();
        !d.negativeColor && !d.negativeFillColor || d.zones || (c = {
          value: d[this.zoneAxis + "Threshold"] || d.threshold || 0,
          className: "highcharts-negative"
        }, l || (c.color = d.negativeColor, c.fillColor = d.negativeFillColor), a.push(c));
        a.length && v(a[a.length - 1].value) && a.push(l ? {} : {
          color: this.color,
          fillColor: this.fillColor
        });
        g(this, "afterSetOptions", {
          options: d
        });
        return d;
      },
      getName: function getName() {
        return f(this.options.name, "Series " + (this.index + 1));
      },
      getCyclic: function getCyclic(a, b, d) {
        var c,
            e = this.chart,
            k = this.userOptions,
            g = a + "Index",
            l = a + "Counter",
            m = d ? d.length : f(e.options.chart[a + "Count"], e[a + "Count"]);
        b || (c = f(k[g], k["_" + g]), v(c) || (e.series.length || (e[l] = 0), k["_" + g] = c = e[l] % m, e[l] += 1), d && (b = d[c]));
        void 0 !== c && (this[g] = c);
        this[a] = b;
      },
      getColor: function getColor() {
        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || u[this.type].color, this.chart.options.colors);
      },
      getSymbol: function getSymbol() {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      },
      drawLegendSymbol: a.LegendSymbolMixin.drawLineMarker,
      updateData: function updateData(b) {
        var d = this.options,
            f = this.points,
            c = [],
            e,
            k,
            g,
            l = this.requireSorting;
        this.xIncrement = null;
        b.forEach(function (b) {
          var k, q, h;
          k = a.defined(b) && this.pointClass.prototype.optionsToObject.call({
            series: this
          }, b) || {};
          h = k.x;
          if ((k = k.id) || m(h)) k && (q = (q = this.chart.get(k)) && q.x), void 0 === q && m(h) && (q = this.xData.indexOf(h, g)), -1 === q || void 0 === q || f[q].touched ? c.push(b) : b !== d.data[q] ? (f[q].update(b, !1, null, !1), f[q].touched = !0, l && (g = q + 1)) : f[q] && (f[q].touched = !0), e = !0;
        }, this);
        if (e) for (b = f.length; b--;) {
          k = f[b], k.touched || k.remove(!1), k.touched = !1;
        } else if (b.length === f.length) b.forEach(function (a, b) {
          f[b].update && a !== d.data[b] && f[b].update(a, !1, null, !1);
        });else return !1;
        c.forEach(function (a) {
          this.addPoint(a, !1);
        }, this);
        return !0;
      },
      setData: function setData(b, c, g, l) {
        var e = this,
            k = e.points,
            h = k && k.length || 0,
            A,
            t = e.options,
            n = e.chart,
            D = null,
            B = e.xAxis,
            x = t.turboThreshold,
            z = this.xData,
            r = this.yData,
            u = (A = e.pointArrayMap) && A.length,
            v;
        b = b || [];
        A = b.length;
        c = f(c, !0);
        !1 !== l && A && h && !e.cropped && !e.hasGroupedData && e.visible && !e.isSeriesBoosting && (v = this.updateData(b));

        if (!v) {
          e.xIncrement = null;
          e.colorCounter = 0;
          this.parallelArrays.forEach(function (a) {
            e[a + "Data"].length = 0;
          });

          if (x && A > x) {
            for (g = 0; null === D && g < A;) {
              D = b[g], g++;
            }

            if (m(D)) for (g = 0; g < A; g++) {
              z[g] = this.autoIncrement(), r[g] = b[g];
            } else if (d(D)) {
              if (u) for (g = 0; g < A; g++) {
                D = b[g], z[g] = D[0], r[g] = D.slice(1, u + 1);
              } else for (g = 0; g < A; g++) {
                D = b[g], z[g] = D[0], r[g] = D[1];
              }
            } else a.error(12, !1, n);
          } else for (g = 0; g < A; g++) {
            void 0 !== b[g] && (D = {
              series: e
            }, e.pointClass.prototype.applyOptions.apply(D, [b[g]]), e.updateParallelArrays(D, g));
          }

          r && p(r[0]) && a.error(14, !0, n);
          e.data = [];
          e.options.data = e.userOptions.data = b;

          for (g = h; g--;) {
            k[g] && k[g].destroy && k[g].destroy();
          }

          B && (B.minRange = B.userMinRange);
          e.isDirty = n.isDirtyBox = !0;
          e.isDirtyData = !!k;
          g = !1;
        }

        "point" === t.legendType && (this.processData(), this.generatePoints());
        c && n.redraw(g);
      },
      processData: function processData(b) {
        var d = this.xData,
            f = this.yData,
            c = d.length,
            e;
        e = 0;
        var k,
            g,
            l = this.xAxis,
            m,
            h = this.options;
        m = h.cropThreshold;
        var p = this.getExtremesFromAll || h.getExtremesFromAll,
            t = this.isCartesian,
            h = l && l.val2lin,
            n = l && l.isLog,
            x = this.requireSorting,
            r,
            z;
        if (t && !this.isDirty && !l.isDirty && !this.yAxis.isDirty && !b) return !1;
        l && (b = l.getExtremes(), r = b.min, z = b.max);
        t && this.sorted && !p && (!m || c > m || this.forceCrop) && (d[c - 1] < r || d[0] > z ? (d = [], f = []) : this.yData && (d[0] < r || d[c - 1] > z) && (e = this.cropData(this.xData, this.yData, r, z), d = e.xData, f = e.yData, e = e.start, k = !0));

        for (m = d.length || 1; --m;) {
          c = n ? h(d[m]) - h(d[m - 1]) : d[m] - d[m - 1], 0 < c && (void 0 === g || c < g) ? g = c : 0 > c && x && (a.error(15, !1, this.chart), x = !1);
        }

        this.cropped = k;
        this.cropStart = e;
        this.processedXData = d;
        this.processedYData = f;
        this.closestPointRange = g;
      },
      cropData: function cropData(a, b, d, c, e) {
        var k = a.length,
            g = 0,
            l = k,
            m;
        e = f(e, this.cropShoulder, 1);

        for (m = 0; m < k; m++) {
          if (a[m] >= d) {
            g = Math.max(0, m - e);
            break;
          }
        }

        for (d = m; d < k; d++) {
          if (a[d] > c) {
            l = d + e;
            break;
          }
        }

        return {
          xData: a.slice(g, l),
          yData: b.slice(g, l),
          start: g,
          end: l
        };
      },
      generatePoints: function generatePoints() {
        var a = this.options,
            b = a.data,
            d = this.data,
            f,
            e = this.processedXData,
            c = this.processedYData,
            g = this.pointClass,
            l = e.length,
            m = this.cropStart || 0,
            h,
            p = this.hasGroupedData,
            a = a.keys,
            x,
            r = [],
            z;
        d || p || (d = [], d.length = b.length, d = this.data = d);
        a && p && (this.options.keys = !1);

        for (z = 0; z < l; z++) {
          h = m + z, p ? (x = new g().init(this, [e[z]].concat(t(c[z]))), x.dataGroup = this.groupMap[z], x.dataGroup.options && (x.options = x.dataGroup.options, n(x, x.dataGroup.options))) : (x = d[h]) || void 0 === b[h] || (d[h] = x = new g().init(this, b[h], e[z])), x && (x.index = h, r[z] = x);
        }

        this.options.keys = a;
        if (d && (l !== (f = d.length) || p)) for (z = 0; z < f; z++) {
          z !== m || p || (z += l), d[z] && (d[z].destroyElements(), d[z].plotX = void 0);
        }
        this.data = d;
        this.points = r;
      },
      getExtremes: function getExtremes(a) {
        var b = this.yAxis,
            f = this.processedXData,
            c,
            e = [],
            k = 0;
        c = this.xAxis.getExtremes();
        var g = c.min,
            l = c.max,
            p,
            t,
            n = this.requireSorting ? 1 : 0,
            x,
            z;
        a = a || this.stackedYData || this.processedYData || [];
        c = a.length;

        for (z = 0; z < c; z++) {
          if (t = f[z], x = a[z], p = (m(x, !0) || d(x)) && (!b.positiveValuesOnly || x.length || 0 < x), t = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (f[z + n] || t) >= g && (f[z - n] || t) <= l, p && t) if (p = x.length) for (; p--;) {
            "number" === typeof x[p] && (e[k++] = x[p]);
          } else e[k++] = x;
        }

        this.dataMin = h(e);
        this.dataMax = E(e);
      },
      translate: function translate() {
        this.processedXData || this.processData();
        this.generatePoints();
        var a = this.options,
            b = a.stacking,
            d = this.xAxis,
            l = d.categories,
            e = this.yAxis,
            q = this.points,
            h = q.length,
            p = !!this.modifyValue,
            t = a.pointPlacement,
            n = "between" === t || m(t),
            x = a.threshold,
            z = a.startFromThreshold ? x : 0,
            r,
            u,
            F,
            H,
            w = Number.MAX_VALUE;
        "between" === t && (t = .5);
        m(t) && (t *= f(a.pointRange || d.pointRange));

        for (a = 0; a < h; a++) {
          var y = q[a],
              E = y.x,
              G = y.y;
          u = y.low;
          var J = b && e.stacks[(this.negStacks && G < (z ? 0 : x) ? "-" : "") + this.stackKey],
              U;
          e.positiveValuesOnly && null !== G && 0 >= G && (y.isNull = !0);
          y.plotX = r = c(Math.min(Math.max(-1E5, d.translate(E, 0, 0, 0, 1, t, "flags" === this.type)), 1E5));
          b && this.visible && !y.isNull && J && J[E] && (H = this.getStackIndicator(H, E, this.index), U = J[E], G = U.points[H.key], u = G[0], G = G[1], u === z && H.key === J[E].base && (u = f(m(x) && x, e.min)), e.positiveValuesOnly && 0 >= u && (u = null), y.total = y.stackTotal = U.total, y.percentage = U.total && y.y / U.total * 100, y.stackY = G, U.setOffset(this.pointXOffset || 0, this.barW || 0));
          y.yBottom = v(u) ? Math.min(Math.max(-1E5, e.translate(u, 0, 1, 0, 1)), 1E5) : null;
          p && (G = this.modifyValue(G, y));
          y.plotY = u = "number" === typeof G && Infinity !== G ? Math.min(Math.max(-1E5, e.translate(G, 0, 1, 0, 1)), 1E5) : void 0;
          y.isInside = void 0 !== u && 0 <= u && u <= e.len && 0 <= r && r <= d.len;
          y.clientX = n ? c(d.translate(E, 0, 0, 0, 1, t)) : r;
          y.negative = y.y < (x || 0);
          y.category = l && void 0 !== l[y.x] ? l[y.x] : y.x;
          y.isNull || (void 0 !== F && (w = Math.min(w, Math.abs(r - F))), F = r);
          y.zone = this.zones.length && y.getZone();
        }

        this.closestPointRangePx = w;
        g(this, "afterTranslate");
      },
      getValidPoints: function getValidPoints(a, b) {
        var d = this.chart;
        return (a || this.points || []).filter(function (a) {
          return b && !d.isInsidePlot(a.plotX, a.plotY, d.inverted) ? !1 : !a.isNull;
        });
      },
      setClip: function setClip(a) {
        var b = this.chart,
            d = this.options,
            f = b.renderer,
            e = b.inverted,
            c = this.clipBox,
            k = c || b.clipBox,
            g = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, k.height, d.xAxis, d.yAxis].join(),
            l = b[g],
            m = b[g + "m"];
        l || (a && (k.width = 0, e && (k.x = b.plotSizeX), b[g + "m"] = m = f.clipRect(e ? b.plotSizeX + 99 : -99, e ? -b.plotLeft : -b.plotTop, 99, e ? b.chartWidth : b.chartHeight)), b[g] = l = f.clipRect(k), l.count = {
          length: 0
        });
        a && !l.count[this.index] && (l.count[this.index] = !0, l.count.length += 1);
        !1 !== d.clip && (this.group.clip(a || c ? l : b.clipRect), this.markerGroup.clip(m), this.sharedClipKey = g);
        a || (l.count[this.index] && (delete l.count[this.index], --l.count.length), 0 === l.count.length && g && b[g] && (c || (b[g] = b[g].destroy()), b[g + "m"] && (b[g + "m"] = b[g + "m"].destroy())));
      },
      animate: function animate(a) {
        var b = this.chart,
            d = G(this.options.animation),
            f;
        a ? this.setClip(d) : (f = this.sharedClipKey, (a = b[f]) && a.animate({
          width: b.plotSizeX,
          x: 0
        }, d), b[f + "m"] && b[f + "m"].animate({
          width: b.plotSizeX + 99,
          x: 0
        }, d), this.animate = null);
      },
      afterAnimate: function afterAnimate() {
        this.setClip();
        g(this, "afterAnimate");
        this.finishedAnimating = !0;
      },
      drawPoints: function drawPoints() {
        var a = this.points,
            b = this.chart,
            d,
            c,
            e,
            g,
            l = this.options.marker,
            m,
            h,
            p,
            t = this[this.specialGroup] || this.markerGroup;
        d = this.xAxis;
        var n,
            x = f(l.enabled, !d || d.isRadial ? !0 : null, this.closestPointRangePx >= l.enabledThreshold * l.radius);
        if (!1 !== l.enabled || this._hasPointMarkers) for (d = 0; d < a.length; d++) {
          c = a[d], g = c.graphic, m = c.marker || {}, h = !!c.marker, e = x && void 0 === m.enabled || m.enabled, p = !1 !== c.isInside, e && !c.isNull ? (e = f(m.symbol, this.symbol), n = this.markerAttribs(c, c.selected && "select"), g ? g[p ? "show" : "hide"](!0).animate(n) : p && (0 < n.width || c.hasImage) && (c.graphic = g = b.renderer.symbol(e, n.x, n.y, n.width, n.height, h ? m : l).add(t)), g && !b.styledMode && g.attr(this.pointAttribs(c, c.selected && "select")), g && g.addClass(c.getClassName(), !0)) : g && (c.graphic = g.destroy());
        }
      },
      markerAttribs: function markerAttribs(a, b) {
        var d = this.options.marker,
            c = a.marker || {},
            e = c.symbol || d.symbol,
            k = f(c.radius, d.radius);
        b && (d = d.states[b], b = c.states && c.states[b], k = f(b && b.radius, d && d.radius, k + (d && d.radiusPlus || 0)));
        a.hasImage = e && 0 === e.indexOf("url");
        a.hasImage && (k = 0);
        a = {
          x: Math.floor(a.plotX) - k,
          y: a.plotY - k
        };
        k && (a.width = a.height = 2 * k);
        return a;
      },
      pointAttribs: function pointAttribs(a, b) {
        var d = this.options.marker,
            c = a && a.options,
            e = c && c.marker || {},
            k = this.color,
            g = c && c.color,
            l = a && a.color,
            c = f(e.lineWidth, d.lineWidth);
        a = a && a.zone && a.zone.color;
        k = g || a || l || k;
        a = e.fillColor || d.fillColor || k;
        k = e.lineColor || d.lineColor || k;
        b && (d = d.states[b], b = e.states && e.states[b] || {}, c = f(b.lineWidth, d.lineWidth, c + f(b.lineWidthPlus, d.lineWidthPlus, 0)), a = b.fillColor || d.fillColor || a, k = b.lineColor || d.lineColor || k);
        return {
          stroke: k,
          "stroke-width": c,
          fill: a
        };
      },
      destroy: function destroy() {
        var b = this,
            d = b.chart,
            f = /AppleWebKit\/533/.test(z.navigator.userAgent),
            c,
            e,
            q = b.data || [],
            m,
            h;
        g(b, "destroy");
        x(b);
        (b.axisTypes || []).forEach(function (a) {
          (h = b[a]) && h.series && (w(h.series, b), h.isDirty = h.forceRedraw = !0);
        });
        b.legendItem && b.chart.legend.destroyItem(b);

        for (e = q.length; e--;) {
          (m = q[e]) && m.destroy && m.destroy();
        }

        b.points = null;
        a.clearTimeout(b.animationTimeout);
        l(b, function (a, b) {
          a instanceof H && !a.survive && (c = f && "group" === b ? "hide" : "destroy", a[c]());
        });
        d.hoverSeries === b && (d.hoverSeries = null);
        w(d.series, b);
        d.orderSeries();
        l(b, function (a, e) {
          delete b[e];
        });
      },
      getGraphPath: function getGraphPath(a, b, d) {
        var f = this,
            e = f.options,
            c = e.step,
            g,
            k = [],
            l = [],
            m;
        a = a || f.points;
        (g = a.reversed) && a.reverse();
        (c = {
          right: 1,
          center: 2
        }[c] || c && 3) && g && (c = 4 - c);
        !e.connectNulls || b || d || (a = this.getValidPoints(a));
        a.forEach(function (g, q) {
          var h = g.plotX,
              p = g.plotY,
              t = a[q - 1];
          (g.leftCliff || t && t.rightCliff) && !d && (m = !0);
          g.isNull && !v(b) && 0 < q ? m = !e.connectNulls : g.isNull && !b ? m = !0 : (0 === q || m ? q = ["M", g.plotX, g.plotY] : f.getPointSpline ? q = f.getPointSpline(a, g, q) : c ? (q = 1 === c ? ["L", t.plotX, p] : 2 === c ? ["L", (t.plotX + h) / 2, t.plotY, "L", (t.plotX + h) / 2, p] : ["L", h, t.plotY], q.push("L", h, p)) : q = ["L", h, p], l.push(g.x), c && (l.push(g.x), 2 === c && l.push(g.x)), k.push.apply(k, q), m = !1);
        });
        k.xMap = l;
        return f.graphPath = k;
      },
      drawGraph: function drawGraph() {
        var a = this,
            b = this.options,
            d = (this.gappedPath || this.getGraphPath).call(this),
            f = this.chart.styledMode,
            e = [["graph", "highcharts-graph"]];
        f || e[0].push(b.lineColor || this.color, b.dashStyle);
        e = a.getZonesGraphs(e);
        e.forEach(function (e, c) {
          var g = e[0],
              k = a[g];
          k ? (k.endX = a.preventGraphAnimation ? null : d.xMap, k.animate({
            d: d
          })) : d.length && (a[g] = a.chart.renderer.path(d).addClass(e[1]).attr({
            zIndex: 1
          }).add(a.group), f || (k = {
            stroke: e[2],
            "stroke-width": b.lineWidth,
            fill: a.fillGraph && a.color || "none"
          }, e[3] ? k.dashstyle = e[3] : "square" !== b.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), k = a[g].attr(k).shadow(2 > c && b.shadow)));
          k && (k.startX = d.xMap, k.isArea = d.isArea);
        });
      },
      getZonesGraphs: function getZonesGraphs(a) {
        this.zones.forEach(function (b, d) {
          d = ["zone-graph-" + d, "highcharts-graph highcharts-zone-graph-" + d + " " + (b.className || "")];
          this.chart.styledMode || d.push(b.color || this.color, b.dashStyle || this.options.dashStyle);
          a.push(d);
        }, this);
        return a;
      },
      applyZones: function applyZones() {
        var a = this,
            b = this.chart,
            d = b.renderer,
            c = this.zones,
            e,
            g,
            l = this.clips || [],
            m,
            h = this.graph,
            p = this.area,
            t = Math.max(b.chartWidth, b.chartHeight),
            n = this[(this.zoneAxis || "y") + "Axis"],
            x,
            z,
            r = b.inverted,
            u,
            v,
            F,
            H,
            w = !1;
        c.length && (h || p) && n && void 0 !== n.min && (z = n.reversed, u = n.horiz, h && !this.showLine && h.hide(), p && p.hide(), x = n.getExtremes(), c.forEach(function (c, k) {
          e = z ? u ? b.plotWidth : 0 : u ? 0 : n.toPixels(x.min) || 0;
          e = Math.min(Math.max(f(g, e), 0), t);
          g = Math.min(Math.max(Math.round(n.toPixels(f(c.value, x.max), !0) || 0), 0), t);
          w && (e = g = n.toPixels(x.max));
          v = Math.abs(e - g);
          F = Math.min(e, g);
          H = Math.max(e, g);
          n.isXAxis ? (m = {
            x: r ? H : F,
            y: 0,
            width: v,
            height: t
          }, u || (m.x = b.plotHeight - m.x)) : (m = {
            x: 0,
            y: r ? H : F,
            width: t,
            height: v
          }, u && (m.y = b.plotWidth - m.y));
          r && d.isVML && (m = n.isXAxis ? {
            x: 0,
            y: z ? F : H,
            height: m.width,
            width: b.chartWidth
          } : {
            x: m.y - b.plotLeft - b.spacingBox.x,
            y: 0,
            width: m.height,
            height: b.chartHeight
          });
          l[k] ? l[k].animate(m) : (l[k] = d.clipRect(m), h && a["zone-graph-" + k].clip(l[k]), p && a["zone-area-" + k].clip(l[k]));
          w = c.value > x.max;
          a.resetZones && 0 === g && (g = void 0);
        }), this.clips = l);
      },
      invertGroups: function invertGroups(a) {
        function b() {
          ["group", "markerGroup"].forEach(function (b) {
            d[b] && (f.renderer.isVML && d[b].attr({
              width: d.yAxis.len,
              height: d.xAxis.len
            }), d[b].width = d.yAxis.len, d[b].height = d.xAxis.len, d[b].invert(a));
          });
        }

        var d = this,
            f = d.chart,
            e;
        d.xAxis && (e = y(f, "resize", b), y(d, "destroy", e), b(a), d.invertGroups = b);
      },
      plotGroup: function plotGroup(a, b, d, f, e) {
        var c = this[a],
            g = !c;
        g && (this[a] = c = this.chart.renderer.g().attr({
          zIndex: f || .1
        }).add(e));
        c.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (v(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (c.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
        c.attr({
          visibility: d
        })[g ? "attr" : "animate"](this.getPlotBox());
        return c;
      },
      getPlotBox: function getPlotBox() {
        var a = this.chart,
            b = this.xAxis,
            d = this.yAxis;
        a.inverted && (b = d, d = this.xAxis);
        return {
          translateX: b ? b.left : a.plotLeft,
          translateY: d ? d.top : a.plotTop,
          scaleX: 1,
          scaleY: 1
        };
      },
      render: function render() {
        var a = this,
            b = a.chart,
            d,
            f = a.options,
            e = !!a.animate && b.renderer.isSVG && G(f.animation).duration,
            c = a.visible ? "inherit" : "hidden",
            l = f.zIndex,
            m = a.hasRendered,
            h = b.seriesGroup,
            p = b.inverted;
        d = a.plotGroup("group", "series", c, l, h);
        a.markerGroup = a.plotGroup("markerGroup", "markers", c, l, h);
        e && a.animate(!0);
        d.inverted = a.isCartesian ? p : !1;
        a.drawGraph && (a.drawGraph(), a.applyZones());
        a.drawDataLabels && a.drawDataLabels();
        a.visible && a.drawPoints();
        a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
        a.invertGroups(p);
        !1 === f.clip || a.sharedClipKey || m || d.clip(b.clipRect);
        e && a.animate();
        m || (a.animationTimeout = F(function () {
          a.afterAnimate();
        }, e));
        a.isDirty = !1;
        a.hasRendered = !0;
        g(a, "afterRender");
      },
      redraw: function redraw() {
        var a = this.chart,
            b = this.isDirty || this.isDirtyData,
            d = this.group,
            c = this.xAxis,
            e = this.yAxis;
        d && (a.inverted && d.attr({
          width: a.plotWidth,
          height: a.plotHeight
        }), d.animate({
          translateX: f(c && c.left, a.plotLeft),
          translateY: f(e && e.top, a.plotTop)
        }));
        this.translate();
        this.render();
        b && delete this.kdTree;
      },
      kdAxisArray: ["clientX", "plotY"],
      searchPoint: function searchPoint(a, b) {
        var d = this.xAxis,
            f = this.yAxis,
            e = this.chart.inverted;
        return this.searchKDTree({
          clientX: e ? d.len - a.chartY + d.pos : a.chartX - d.pos,
          plotY: e ? f.len - a.chartX + f.pos : a.chartY - f.pos
        }, b);
      },
      buildKDTree: function buildKDTree() {
        function a(d, e, f) {
          var c, g;
          if (g = d && d.length) return c = b.kdAxisArray[e % f], d.sort(function (a, b) {
            return a[c] - b[c];
          }), g = Math.floor(g / 2), {
            point: d[g],
            left: a(d.slice(0, g), e + 1, f),
            right: a(d.slice(g + 1), e + 1, f)
          };
        }

        this.buildingKdTree = !0;
        var b = this,
            d = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        delete b.kdTree;
        F(function () {
          b.kdTree = a(b.getValidPoints(null, !b.directTouch), d, d);
          b.buildingKdTree = !1;
        }, b.options.kdNow ? 0 : 1);
      },
      searchKDTree: function searchKDTree(a, b) {
        function d(a, b, k, l) {
          var m = b.point,
              h = f.kdAxisArray[k % l],
              q,
              p,
              t = m;
          p = v(a[e]) && v(m[e]) ? Math.pow(a[e] - m[e], 2) : null;
          q = v(a[c]) && v(m[c]) ? Math.pow(a[c] - m[c], 2) : null;
          q = (p || 0) + (q || 0);
          m.dist = v(q) ? Math.sqrt(q) : Number.MAX_VALUE;
          m.distX = v(p) ? Math.sqrt(p) : Number.MAX_VALUE;
          h = a[h] - m[h];
          q = 0 > h ? "left" : "right";
          p = 0 > h ? "right" : "left";
          b[q] && (q = d(a, b[q], k + 1, l), t = q[g] < t[g] ? q : m);
          b[p] && Math.sqrt(h * h) < t[g] && (a = d(a, b[p], k + 1, l), t = a[g] < t[g] ? a : t);
          return t;
        }

        var f = this,
            e = this.kdAxisArray[0],
            c = this.kdAxisArray[1],
            g = b ? "distX" : "dist";
        b = -1 < f.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        this.kdTree || this.buildingKdTree || this.buildKDTree();
        if (this.kdTree) return d(a, this.kdTree, b, b);
      }
    });
  })(J);

  (function (a) {
    var y = a.Axis,
        G = a.Chart,
        E = a.correctFloat,
        h = a.defined,
        c = a.destroyObjectProperties,
        r = a.format,
        u = a.objectEach,
        v = a.pick,
        w = a.Series;

    a.StackItem = function (a, c, d, m, h) {
      var b = a.chart.inverted;
      this.axis = a;
      this.isNegative = d;
      this.options = c;
      this.x = m;
      this.total = null;
      this.points = {};
      this.stack = h;
      this.rightCliff = this.leftCliff = 0;
      this.alignOptions = {
        align: c.align || (b ? d ? "left" : "right" : "center"),
        verticalAlign: c.verticalAlign || (b ? "middle" : d ? "bottom" : "top"),
        y: v(c.y, b ? 4 : d ? 14 : -6),
        x: v(c.x, b ? d ? -6 : 6 : 0)
      };
      this.textAlign = c.textAlign || (b ? d ? "right" : "left" : "center");
    };

    a.StackItem.prototype = {
      destroy: function destroy() {
        c(this, this.axis);
      },
      render: function render(a) {
        var c = this.axis.chart,
            d = this.options,
            m = d.format,
            m = m ? r(m, this, c.time) : d.formatter.call(this);
        this.label ? this.label.attr({
          text: m,
          visibility: "hidden"
        }) : this.label = c.renderer.text(m, null, null, d.useHTML).css(d.style).attr({
          align: this.textAlign,
          rotation: d.rotation,
          visibility: "hidden"
        }).add(a);
        this.label.labelrank = c.plotHeight;
      },
      setOffset: function setOffset(a, c) {
        var d = this.axis,
            g = d.chart,
            p = d.translate(d.usePercentage ? 100 : this.total, 0, 0, 0, 1),
            b = d.translate(0),
            b = h(p) && Math.abs(p - b);
        a = g.xAxis[0].translate(this.x) + a;
        d = h(p) && this.getStackBox(g, this, a, p, c, b, d);
        (c = this.label) && d && (c.align(this.alignOptions, null, d), d = c.alignAttr, c[!1 === this.options.crop || g.isInsidePlot(d.x, d.y) ? "show" : "hide"](!0));
      },
      getStackBox: function getStackBox(a, c, d, m, h, b, l) {
        var f = c.axis.reversed,
            g = a.inverted;
        a = l.height + l.pos - (g ? a.plotLeft : a.plotTop);
        c = c.isNegative && !f || !c.isNegative && f;
        return {
          x: g ? c ? m : m - b : d,
          y: g ? a - d - h : c ? a - m - b : a - m,
          width: g ? b : h,
          height: g ? h : b
        };
      }
    };

    G.prototype.getStacks = function () {
      var a = this;
      a.yAxis.forEach(function (a) {
        a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks);
      });
      a.series.forEach(function (c) {
        !c.options.stacking || !0 !== c.visible && !1 !== a.options.chart.ignoreHiddenSeries || (c.stackKey = c.type + v(c.options.stack, ""));
      });
    };

    y.prototype.buildStacks = function () {
      var a = this.series,
          c = v(this.options.reversedStacks, !0),
          d = a.length,
          m;

      if (!this.isXAxis) {
        this.usePercentage = !1;

        for (m = d; m--;) {
          a[c ? m : d - m - 1].setStackedPoints();
        }

        for (m = 0; m < d; m++) {
          a[m].modifyStacks();
        }
      }
    };

    y.prototype.renderStackTotals = function () {
      var a = this.chart,
          c = a.renderer,
          d = this.stacks,
          m = this.stackTotalGroup;
      m || (this.stackTotalGroup = m = c.g("stack-labels").attr({
        visibility: "visible",
        zIndex: 6
      }).add());
      m.translate(a.plotLeft, a.plotTop);
      u(d, function (a) {
        u(a, function (a) {
          a.render(m);
        });
      });
    };

    y.prototype.resetStacks = function () {
      var a = this,
          c = a.stacks;
      a.isXAxis || u(c, function (d) {
        u(d, function (c, g) {
          c.touched < a.stacksTouched ? (c.destroy(), delete d[g]) : (c.total = null, c.cumulative = null);
        });
      });
    };

    y.prototype.cleanStacks = function () {
      var a;
      this.isXAxis || (this.oldStacks && (a = this.stacks = this.oldStacks), u(a, function (a) {
        u(a, function (a) {
          a.cumulative = a.total;
        });
      }));
    };

    w.prototype.setStackedPoints = function () {
      if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var c = this.processedXData,
            g = this.processedYData,
            d = [],
            m = g.length,
            p = this.options,
            b = p.threshold,
            l = v(p.startFromThreshold && b, 0),
            f = p.stack,
            p = p.stacking,
            x = this.stackKey,
            t = "-" + x,
            r = this.negStacks,
            u = this.yAxis,
            z = u.stacks,
            k = u.oldStacks,
            A,
            D,
            B,
            e,
            q,
            w,
            y;
        u.stacksTouched += 1;

        for (q = 0; q < m; q++) {
          w = c[q], y = g[q], A = this.getStackIndicator(A, w, this.index), e = A.key, B = (D = r && y < (l ? 0 : b)) ? t : x, z[B] || (z[B] = {}), z[B][w] || (k[B] && k[B][w] ? (z[B][w] = k[B][w], z[B][w].total = null) : z[B][w] = new a.StackItem(u, u.options.stackLabels, D, w, f)), B = z[B][w], null !== y ? (B.points[e] = B.points[this.index] = [v(B.cumulative, l)], h(B.cumulative) || (B.base = e), B.touched = u.stacksTouched, 0 < A.index && !1 === this.singleStacks && (B.points[e][0] = B.points[this.index + "," + w + ",0"][0])) : B.points[e] = B.points[this.index] = null, "percent" === p ? (D = D ? x : t, r && z[D] && z[D][w] ? (D = z[D][w], B.total = D.total = Math.max(D.total, B.total) + Math.abs(y) || 0) : B.total = E(B.total + (Math.abs(y) || 0))) : B.total = E(B.total + (y || 0)), B.cumulative = v(B.cumulative, l) + (y || 0), null !== y && (B.points[e].push(B.cumulative), d[q] = B.cumulative);
        }

        "percent" === p && (u.usePercentage = !0);
        this.stackedYData = d;
        u.oldStacks = {};
      }
    };

    w.prototype.modifyStacks = function () {
      var a = this,
          c = a.stackKey,
          d = a.yAxis.stacks,
          m = a.processedXData,
          h,
          b = a.options.stacking;
      a[b + "Stacker"] && [c, "-" + c].forEach(function (c) {
        for (var f = m.length, g, l; f--;) {
          if (g = m[f], h = a.getStackIndicator(h, g, a.index, c), l = (g = d[c] && d[c][g]) && g.points[h.key]) a[b + "Stacker"](l, g, f);
        }
      });
    };

    w.prototype.percentStacker = function (a, c, d) {
      c = c.total ? 100 / c.total : 0;
      a[0] = E(a[0] * c);
      a[1] = E(a[1] * c);
      this.stackedYData[d] = a[1];
    };

    w.prototype.getStackIndicator = function (a, c, d, m) {
      !h(a) || a.x !== c || m && a.key !== m ? a = {
        x: c,
        index: 0,
        key: m
      } : a.index++;
      a.key = [d, c, a.index].join();
      return a;
    };
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.animate,
        E = a.Axis,
        h = a.Chart,
        c = a.createElement,
        r = a.css,
        u = a.defined,
        v = a.erase,
        w = a.extend,
        n = a.fireEvent,
        g = a.isNumber,
        d = a.isObject,
        m = a.isArray,
        p = a.merge,
        b = a.objectEach,
        l = a.pick,
        f = a.Point,
        x = a.Series,
        t = a.seriesTypes,
        H = a.setAnimation,
        F = a.splat;

    a.cleanRecursively = function (c, f) {
      var g = {};
      b(c, function (b, k) {
        if (d(c[k], !0) && f[k]) b = a.cleanRecursively(c[k], f[k]), Object.keys(b).length && (g[k] = b);else if (d(c[k]) || c[k] !== f[k]) g[k] = c[k];
      });
      return g;
    };

    w(h.prototype, {
      addSeries: function addSeries(a, b, d) {
        var c,
            f = this;
        a && (b = l(b, !0), n(f, "addSeries", {
          options: a
        }, function () {
          c = f.initSeries(a);
          f.isDirtyLegend = !0;
          f.linkSeries();
          n(f, "afterAddSeries");
          b && f.redraw(d);
        }));
        return c;
      },
      addAxis: function addAxis(a, b, d, c) {
        var f = b ? "xAxis" : "yAxis",
            e = this.options;
        a = p(a, {
          index: this[f].length,
          isX: b
        });
        b = new E(this, a);
        e[f] = F(e[f] || {});
        e[f].push(a);
        l(d, !0) && this.redraw(c);
        return b;
      },
      showLoading: function showLoading(a) {
        var b = this,
            d = b.options,
            f = b.loadingDiv,
            g = d.loading,
            e = function e() {
          f && r(f, {
            left: b.plotLeft + "px",
            top: b.plotTop + "px",
            width: b.plotWidth + "px",
            height: b.plotHeight + "px"
          });
        };

        f || (b.loadingDiv = f = c("div", {
          className: "highcharts-loading highcharts-loading-hidden"
        }, null, b.container), b.loadingSpan = c("span", {
          className: "highcharts-loading-inner"
        }, null, f), y(b, "redraw", e));
        f.className = "highcharts-loading";
        b.loadingSpan.innerHTML = a || d.lang.loading;
        b.styledMode || (r(f, w(g.style, {
          zIndex: 10
        })), r(b.loadingSpan, g.labelStyle), b.loadingShown || (r(f, {
          opacity: 0,
          display: ""
        }), G(f, {
          opacity: g.style.opacity || .5
        }, {
          duration: g.showDuration || 0
        })));
        b.loadingShown = !0;
        e();
      },
      hideLoading: function hideLoading() {
        var a = this.options,
            b = this.loadingDiv;
        b && (b.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || G(b, {
          opacity: 0
        }, {
          duration: a.loading.hideDuration || 100,
          complete: function complete() {
            r(b, {
              display: "none"
            });
          }
        }));
        this.loadingShown = !1;
      },
      propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
      propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
      collectionsWithUpdate: "xAxis yAxis zAxis series colorAxis pane".split(" "),
      update: function update(d, c, f, m) {
        var k = this,
            e = {
          credits: "addCredits",
          title: "setTitle",
          subtitle: "setSubtitle"
        },
            h,
            t,
            x,
            r = [];
        n(k, "update", {
          options: d
        });
        d = a.cleanRecursively(d, k.options);

        if (h = d.chart) {
          p(!0, k.options.chart, h);
          "className" in h && k.setClassName(h.className);
          "reflow" in h && k.setReflow(h.reflow);
          if ("inverted" in h || "polar" in h || "type" in h) k.propFromSeries(), t = !0;
          "alignTicks" in h && (t = !0);
          b(h, function (a, b) {
            -1 !== k.propsRequireUpdateSeries.indexOf("chart." + b) && (x = !0);
            -1 !== k.propsRequireDirtyBox.indexOf(b) && (k.isDirtyBox = !0);
          });
          !k.styledMode && "style" in h && k.renderer.setStyle(h.style);
        }

        !k.styledMode && d.colors && (this.options.colors = d.colors);
        d.plotOptions && p(!0, this.options.plotOptions, d.plotOptions);
        b(d, function (a, b) {
          if (k[b] && "function" === typeof k[b].update) k[b].update(a, !1);else if ("function" === typeof k[e[b]]) k[e[b]](a);
          "chart" !== b && -1 !== k.propsRequireUpdateSeries.indexOf(b) && (x = !0);
        });
        this.collectionsWithUpdate.forEach(function (a) {
          var b;
          d[a] && ("series" === a && (b = [], k[a].forEach(function (a, d) {
            a.options.isInternal || b.push(l(a.options.index, d));
          })), F(d[a]).forEach(function (d, e) {
            (e = u(d.id) && k.get(d.id) || k[a][b ? b[e] : e]) && e.coll === a && (e.update(d, !1), f && (e.touched = !0));
            if (!e && f) if ("series" === a) k.addSeries(d, !1).touched = !0;else if ("xAxis" === a || "yAxis" === a) k.addAxis(d, "xAxis" === a, !1).touched = !0;
          }), f && k[a].forEach(function (a) {
            a.touched || a.options.isInternal ? delete a.touched : r.push(a);
          }));
        });
        r.forEach(function (a) {
          a.remove && a.remove(!1);
        });
        t && k.axes.forEach(function (a) {
          a.update({}, !1);
        });
        x && k.series.forEach(function (a) {
          a.update({}, !1);
        });
        d.loading && p(!0, k.options.loading, d.loading);
        t = h && h.width;
        h = h && h.height;
        g(t) && t !== k.chartWidth || g(h) && h !== k.chartHeight ? k.setSize(t, h, m) : l(c, !0) && k.redraw(m);
        n(k, "afterUpdate", {
          options: d
        });
      },
      setSubtitle: function setSubtitle(a) {
        this.setTitle(void 0, a);
      }
    });
    w(f.prototype, {
      update: function update(a, b, c, f) {
        function g() {
          e.applyOptions(a);
          null === e.y && h && (e.graphic = h.destroy());
          d(a, !0) && (h && h.element && a && a.marker && void 0 !== a.marker.symbol && (e.graphic = h.destroy()), a && a.dataLabels && e.dataLabel && (e.dataLabel = e.dataLabel.destroy()), e.connector && (e.connector = e.connector.destroy()));
          m = e.index;
          k.updateParallelArrays(e, m);
          t.data[m] = d(t.data[m], !0) || d(a, !0) ? e.options : l(a, t.data[m]);
          k.isDirty = k.isDirtyData = !0;
          !k.fixedBox && k.hasCartesianSeries && (p.isDirtyBox = !0);
          "point" === t.legendType && (p.isDirtyLegend = !0);
          b && p.redraw(c);
        }

        var e = this,
            k = e.series,
            h = e.graphic,
            m,
            p = k.chart,
            t = k.options;
        b = l(b, !0);
        !1 === f ? g() : e.firePointEvent("update", {
          options: a
        }, g);
      },
      remove: function remove(a, b) {
        this.series.removePoint(this.series.data.indexOf(this), a, b);
      }
    });
    w(x.prototype, {
      addPoint: function addPoint(a, b, d, c) {
        var f = this.options,
            e = this.data,
            g = this.chart,
            k = this.xAxis,
            k = k && k.hasNames && k.names,
            h = f.data,
            m,
            p,
            t = this.xData,
            n,
            x;
        b = l(b, !0);
        m = {
          series: this
        };
        this.pointClass.prototype.applyOptions.apply(m, [a]);
        x = m.x;
        n = t.length;
        if (this.requireSorting && x < t[n - 1]) for (p = !0; n && t[n - 1] > x;) {
          n--;
        }
        this.updateParallelArrays(m, "splice", n, 0, 0);
        this.updateParallelArrays(m, n);
        k && m.name && (k[x] = m.name);
        h.splice(n, 0, a);
        p && (this.data.splice(n, 0, null), this.processData());
        "point" === f.legendType && this.generatePoints();
        d && (e[0] && e[0].remove ? e[0].remove(!1) : (e.shift(), this.updateParallelArrays(m, "shift"), h.shift()));
        this.isDirtyData = this.isDirty = !0;
        b && g.redraw(c);
      },
      removePoint: function removePoint(a, b, d) {
        var c = this,
            f = c.data,
            e = f[a],
            g = c.points,
            k = c.chart,
            h = function h() {
          g && g.length === f.length && g.splice(a, 1);
          f.splice(a, 1);
          c.options.data.splice(a, 1);
          c.updateParallelArrays(e || {
            series: c
          }, "splice", a, 1);
          e && e.destroy();
          c.isDirty = !0;
          c.isDirtyData = !0;
          b && k.redraw();
        };

        H(d, k);
        b = l(b, !0);
        e ? e.firePointEvent("remove", null, h) : h();
      },
      remove: function remove(a, b, d) {
        function c() {
          f.destroy();
          f.remove = null;
          e.isDirtyLegend = e.isDirtyBox = !0;
          e.linkSeries();
          l(a, !0) && e.redraw(b);
        }

        var f = this,
            e = f.chart;
        !1 !== d ? n(f, "remove", null, c) : c();
      },
      update: function update(b, d) {
        b = a.cleanRecursively(b, this.userOptions);
        var c = this,
            f = c.chart,
            g = c.userOptions,
            e = c.oldType || c.type,
            k = b.type || g.type || f.options.chart.type,
            h = t[e].prototype,
            m,
            x = ["group", "markerGroup", "dataLabelsGroup"],
            r = ["navigatorSeries", "baseSeries"],
            u = c.finishedAnimating && {
          animation: !1
        },
            z = ["data", "name", "turboThreshold"],
            v = Object.keys(b),
            F = 0 < v.length;
        v.forEach(function (a) {
          -1 === z.indexOf(a) && (F = !1);
        });
        if (F) b.data && this.setData(b.data, !1), b.name && this.setName(b.name, !1);else {
          r = x.concat(r);
          r.forEach(function (a) {
            r[a] = c[a];
            delete c[a];
          });
          b = p(g, u, {
            index: c.index,
            pointStart: l(g.pointStart, c.xData[0])
          }, {
            data: c.options.data
          }, b);
          c.remove(!1, null, !1);

          for (m in h) {
            c[m] = void 0;
          }

          t[k || e] ? w(c, t[k || e].prototype) : a.error(17, !0, f);
          r.forEach(function (a) {
            c[a] = r[a];
          });
          c.init(f, b);
          b.zIndex !== g.zIndex && x.forEach(function (a) {
            c[a] && c[a].attr({
              zIndex: b.zIndex
            });
          });
          c.oldType = e;
          f.linkSeries();
        }
        n(this, "afterUpdate");
        l(d, !0) && f.redraw(F ? void 0 : !1);
      },
      setName: function setName(a) {
        this.name = this.options.name = this.userOptions.name = a;
        this.chart.isDirtyLegend = !0;
      }
    });
    w(E.prototype, {
      update: function update(a, d) {
        var c = this.chart,
            f = a && a.events || {};
        a = p(this.userOptions, a);
        c.options[this.coll].indexOf && (c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)] = a);
        b(c.options[this.coll].events, function (a, b) {
          "undefined" === typeof f[b] && (f[b] = void 0);
        });
        this.destroy(!0);
        this.init(c, w(a, {
          events: f
        }));
        c.isDirtyBox = !0;
        l(d, !0) && c.redraw();
      },
      remove: function remove(a) {
        for (var b = this.chart, d = this.coll, c = this.series, f = c.length; f--;) {
          c[f] && c[f].remove(!1);
        }

        v(b.axes, this);
        v(b[d], this);
        m(b.options[d]) ? b.options[d].splice(this.options.index, 1) : delete b.options[d];
        b[d].forEach(function (a, b) {
          a.options.index = a.userOptions.index = b;
        });
        this.destroy();
        b.isDirtyBox = !0;
        l(a, !0) && b.redraw();
      },
      setTitle: function setTitle(a, b) {
        this.update({
          title: a
        }, b);
      },
      setCategories: function setCategories(a, b) {
        this.update({
          categories: a
        }, b);
      }
    });
  })(J);

  (function (a) {
    var y = a.color,
        G = a.pick,
        E = a.Series,
        h = a.seriesType;
    h("area", "line", {
      softThreshold: !1,
      threshold: 0
    }, {
      singleStacks: !1,
      getStackPoints: function getStackPoints(c) {
        var h = [],
            u = [],
            v = this.xAxis,
            w = this.yAxis,
            n = w.stacks[this.stackKey],
            g = {},
            d = this.index,
            m = w.series,
            p = m.length,
            b,
            l = G(w.options.reversedStacks, !0) ? 1 : -1,
            f;
        c = c || this.points;

        if (this.options.stacking) {
          for (f = 0; f < c.length; f++) {
            c[f].leftNull = c[f].rightNull = null, g[c[f].x] = c[f];
          }

          a.objectEach(n, function (a, b) {
            null !== a.total && u.push(b);
          });
          u.sort(function (a, b) {
            return a - b;
          });
          b = m.map(function (a) {
            return a.visible;
          });
          u.forEach(function (a, c) {
            var m = 0,
                t,
                x;
            if (g[a] && !g[a].isNull) h.push(g[a]), [-1, 1].forEach(function (k) {
              var h = 1 === k ? "rightNull" : "leftNull",
                  m = 0,
                  r = n[u[c + k]];
              if (r) for (f = d; 0 <= f && f < p;) {
                t = r.points[f], t || (f === d ? g[a][h] = !0 : b[f] && (x = n[a].points[f]) && (m -= x[1] - x[0])), f += l;
              }
              g[a][1 === k ? "rightCliff" : "leftCliff"] = m;
            });else {
              for (f = d; 0 <= f && f < p;) {
                if (t = n[a].points[f]) {
                  m = t[1];
                  break;
                }

                f += l;
              }

              m = w.translate(m, 0, 1, 0, 1);
              h.push({
                isNull: !0,
                plotX: v.translate(a, 0, 0, 0, 1),
                x: a,
                plotY: m,
                yBottom: m
              });
            }
          });
        }

        return h;
      },
      getGraphPath: function getGraphPath(a) {
        var c = E.prototype.getGraphPath,
            h = this.options,
            v = h.stacking,
            w = this.yAxis,
            n,
            g,
            d = [],
            m = [],
            p = this.index,
            b,
            l = w.stacks[this.stackKey],
            f = h.threshold,
            x = w.getThreshold(h.threshold),
            t,
            h = h.connectNulls || "percent" === v,
            H = function H(c, g, k) {
          var h = a[c];
          c = v && l[h.x].points[p];
          var t = h[k + "Null"] || 0;
          k = h[k + "Cliff"] || 0;
          var n,
              e,
              h = !0;
          k || t ? (n = (t ? c[0] : c[1]) + k, e = c[0] + k, h = !!t) : !v && a[g] && a[g].isNull && (n = e = f);
          void 0 !== n && (m.push({
            plotX: b,
            plotY: null === n ? x : w.getThreshold(n),
            isNull: h,
            isCliff: !0
          }), d.push({
            plotX: b,
            plotY: null === e ? x : w.getThreshold(e),
            doCurve: !1
          }));
        };

        a = a || this.points;
        v && (a = this.getStackPoints(a));

        for (n = 0; n < a.length; n++) {
          if (g = a[n].isNull, b = G(a[n].rectPlotX, a[n].plotX), t = G(a[n].yBottom, x), !g || h) h || H(n, n - 1, "left"), g && !v && h || (m.push(a[n]), d.push({
            x: n,
            plotX: b,
            plotY: t
          })), h || H(n, n + 1, "right");
        }

        n = c.call(this, m, !0, !0);
        d.reversed = !0;
        g = c.call(this, d, !0, !0);
        g.length && (g[0] = "L");
        g = n.concat(g);
        c = c.call(this, m, !1, h);
        g.xMap = n.xMap;
        this.areaPath = g;
        return c;
      },
      drawGraph: function drawGraph() {
        this.areaPath = [];
        E.prototype.drawGraph.apply(this);
        var a = this,
            h = this.areaPath,
            u = this.options,
            v = [["area", "highcharts-area", this.color, u.fillColor]];
        this.zones.forEach(function (c, h) {
          v.push(["zone-area-" + h, "highcharts-area highcharts-zone-area-" + h + " " + c.className, c.color || a.color, c.fillColor || u.fillColor]);
        });
        v.forEach(function (c) {
          var n = c[0],
              g = a[n];
          g ? (g.endX = a.preventGraphAnimation ? null : h.xMap, g.animate({
            d: h
          })) : (g = {
            zIndex: 0
          }, a.chart.styledMode || (g.fill = G(c[3], y(c[2]).setOpacity(G(u.fillOpacity, .75)).get())), g = a[n] = a.chart.renderer.path(h).addClass(c[1]).attr(g).add(a.group), g.isArea = !0);
          g.startX = h.xMap;
          g.shiftUnit = u.step ? 2 : 1;
        });
      },
      drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
    });
  })(J);

  (function (a) {
    var y = a.pick;
    a = a.seriesType;
    a("spline", "line", {}, {
      getPointSpline: function getPointSpline(a, E, h) {
        var c = E.plotX,
            r = E.plotY,
            u = a[h - 1];
        h = a[h + 1];
        var v, w, n, g;

        if (u && !u.isNull && !1 !== u.doCurve && !E.isCliff && h && !h.isNull && !1 !== h.doCurve && !E.isCliff) {
          a = u.plotY;
          n = h.plotX;
          h = h.plotY;
          var d = 0;
          v = (1.5 * c + u.plotX) / 2.5;
          w = (1.5 * r + a) / 2.5;
          n = (1.5 * c + n) / 2.5;
          g = (1.5 * r + h) / 2.5;
          n !== v && (d = (g - w) * (n - c) / (n - v) + r - g);
          w += d;
          g += d;
          w > a && w > r ? (w = Math.max(a, r), g = 2 * r - w) : w < a && w < r && (w = Math.min(a, r), g = 2 * r - w);
          g > h && g > r ? (g = Math.max(h, r), w = 2 * r - g) : g < h && g < r && (g = Math.min(h, r), w = 2 * r - g);
          E.rightContX = n;
          E.rightContY = g;
        }

        E = ["C", y(u.rightContX, u.plotX), y(u.rightContY, u.plotY), y(v, c), y(w, r), c, r];
        u.rightContX = u.rightContY = null;
        return E;
      }
    });
  })(J);

  (function (a) {
    var y = a.seriesTypes.area.prototype,
        G = a.seriesType;
    G("areaspline", "spline", a.defaultPlotOptions.area, {
      getStackPoints: y.getStackPoints,
      getGraphPath: y.getGraphPath,
      drawGraph: y.drawGraph,
      drawLegendSymbol: a.LegendSymbolMixin.drawRectangle
    });
  })(J);

  (function (a) {
    var y = a.animObject,
        G = a.color,
        E = a.extend,
        h = a.defined,
        c = a.isNumber,
        r = a.merge,
        u = a.pick,
        v = a.Series,
        w = a.seriesType,
        n = a.svg;
    w("column", "line", {
      borderRadius: 0,
      crisp: !0,
      groupPadding: .2,
      marker: null,
      pointPadding: .1,
      minPointLength: 0,
      cropThreshold: 50,
      pointRange: null,
      states: {
        hover: {
          halo: !1,
          brightness: .1
        },
        select: {
          color: "#cccccc",
          borderColor: "#000000"
        }
      },
      dataLabels: {
        align: null,
        verticalAlign: null,
        y: null
      },
      softThreshold: !1,
      startFromThreshold: !0,
      stickyTracking: !1,
      tooltip: {
        distance: 6
      },
      threshold: 0,
      borderColor: "#ffffff"
    }, {
      cropShoulder: 0,
      directTouch: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      negStacks: !0,
      init: function init() {
        v.prototype.init.apply(this, arguments);
        var a = this,
            d = a.chart;
        d.hasRendered && d.series.forEach(function (d) {
          d.type === a.type && (d.isDirty = !0);
        });
      },
      getColumnMetrics: function getColumnMetrics() {
        var a = this,
            d = a.options,
            c = a.xAxis,
            h = a.yAxis,
            b = c.options.reversedStacks,
            b = c.reversed && !b || !c.reversed && b,
            l,
            f = {},
            n = 0;
        !1 === d.grouping ? n = 1 : a.chart.series.forEach(function (b) {
          var d = b.options,
              c = b.yAxis,
              g;
          b.type !== a.type || !b.visible && a.chart.options.chart.ignoreHiddenSeries || h.len !== c.len || h.pos !== c.pos || (d.stacking ? (l = b.stackKey, void 0 === f[l] && (f[l] = n++), g = f[l]) : !1 !== d.grouping && (g = n++), b.columnIndex = g);
        });
        var t = Math.min(Math.abs(c.transA) * (c.ordinalSlope || d.pointRange || c.closestPointRange || c.tickInterval || 1), c.len),
            r = t * d.groupPadding,
            v = (t - 2 * r) / (n || 1),
            d = Math.min(d.maxPointWidth || c.len, u(d.pointWidth, v * (1 - 2 * d.pointPadding)));
        a.columnMetrics = {
          width: d,
          offset: (v - d) / 2 + (r + ((a.columnIndex || 0) + (b ? 1 : 0)) * v - t / 2) * (b ? -1 : 1)
        };
        return a.columnMetrics;
      },
      crispCol: function crispCol(a, d, c, h) {
        var b = this.chart,
            g = this.borderWidth,
            f = -(g % 2 ? .5 : 0),
            g = g % 2 ? .5 : 1;
        b.inverted && b.renderer.isVML && (g += 1);
        this.options.crisp && (c = Math.round(a + c) + f, a = Math.round(a) + f, c -= a);
        h = Math.round(d + h) + g;
        f = .5 >= Math.abs(d) && .5 < h;
        d = Math.round(d) + g;
        h -= d;
        f && h && (--d, h += 1);
        return {
          x: a,
          y: d,
          width: c,
          height: h
        };
      },
      translate: function translate() {
        var a = this,
            d = a.chart,
            c = a.options,
            p = a.dense = 2 > a.closestPointRange * a.xAxis.transA,
            p = a.borderWidth = u(c.borderWidth, p ? 0 : 1),
            b = a.yAxis,
            l = c.threshold,
            f = a.translatedThreshold = b.getThreshold(l),
            n = u(c.minPointLength, 5),
            t = a.getColumnMetrics(),
            r = t.width,
            F = a.barW = Math.max(r, 1 + 2 * p),
            z = a.pointXOffset = t.offset;
        d.inverted && (f -= .5);
        c.pointPadding && (F = Math.ceil(F));
        v.prototype.translate.apply(a);
        a.points.forEach(function (c) {
          var g = u(c.yBottom, f),
              k = 999 + Math.abs(g),
              m = r,
              k = Math.min(Math.max(-k, c.plotY), b.len + k),
              e = c.plotX + z,
              q = F,
              p = Math.min(k, g),
              t,
              x = Math.max(k, g) - p;
          n && Math.abs(x) < n && (x = n, t = !b.reversed && !c.negative || b.reversed && c.negative, c.y === l && a.dataMax <= l && b.min < l && (t = !t), p = Math.abs(p - f) > n ? g - n : f - (t ? n : 0));
          h(c.options.pointWidth) && (m = q = Math.ceil(c.options.pointWidth), e -= Math.round((m - r) / 2));
          c.barX = e;
          c.pointWidth = m;
          c.tooltipPos = d.inverted ? [b.len + b.pos - d.plotLeft - k, a.xAxis.len - e - q / 2, x] : [e + q / 2, k + b.pos - d.plotTop, x];
          c.shapeType = c.shapeType || "rect";
          c.shapeArgs = a.crispCol.apply(a, c.isNull ? [e, f, q, 0] : [e, p, q, x]);
        });
      },
      getSymbol: a.noop,
      drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
      drawGraph: function drawGraph() {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      },
      pointAttribs: function pointAttribs(a, d) {
        var c = this.options,
            g,
            b = this.pointAttrToOptions || {};
        g = b.stroke || "borderColor";
        var l = b["stroke-width"] || "borderWidth",
            f = a && a.color || this.color,
            h = a && a[g] || c[g] || this.color || f,
            t = a && a[l] || c[l] || this[l] || 0,
            b = c.dashStyle;
        a && this.zones.length && (f = a.getZone(), f = a.options.color || f && f.color || this.color);
        d && (a = r(c.states[d], a.options.states && a.options.states[d] || {}), d = a.brightness, f = a.color || void 0 !== d && G(f).brighten(a.brightness).get() || f, h = a[g] || h, t = a[l] || t, b = a.dashStyle || b);
        g = {
          fill: f,
          stroke: h,
          "stroke-width": t
        };
        b && (g.dashstyle = b);
        return g;
      },
      drawPoints: function drawPoints() {
        var a = this,
            d = this.chart,
            h = a.options,
            p = d.renderer,
            b = h.animationLimit || 250,
            l;
        a.points.forEach(function (f) {
          var g = f.graphic,
              m = g && d.pointCount < b ? "animate" : "attr";

          if (c(f.plotY) && null !== f.y) {
            l = f.shapeArgs;
            if (g) g[m](r(l));else f.graphic = g = p[f.shapeType](l).add(f.group || a.group);
            h.borderRadius && g.attr({
              r: h.borderRadius
            });
            d.styledMode || g[m](a.pointAttribs(f, f.selected && "select")).shadow(h.shadow, null, h.stacking && !h.borderRadius);
            g.addClass(f.getClassName(), !0);
          } else g && (f.graphic = g.destroy());
        });
      },
      animate: function animate(a) {
        var d = this,
            c = this.yAxis,
            g = d.options,
            b = this.chart.inverted,
            h = {},
            f = b ? "translateX" : "translateY",
            x;
        n && (a ? (h.scaleY = .001, a = Math.min(c.pos + c.len, Math.max(c.pos, c.toPixels(g.threshold))), b ? h.translateX = a - c.len : h.translateY = a, d.group.attr(h)) : (x = d.group.attr(f), d.group.animate({
          scaleY: 1
        }, E(y(d.options.animation), {
          step: function step(a, b) {
            h[f] = x + b.pos * (c.pos - x);
            d.group.attr(h);
          }
        })), d.animate = null));
      },
      remove: function remove() {
        var a = this,
            d = a.chart;
        d.hasRendered && d.series.forEach(function (d) {
          d.type === a.type && (d.isDirty = !0);
        });
        v.prototype.remove.apply(a, arguments);
      }
    });
  })(J);

  (function (a) {
    a = a.seriesType;
    a("bar", "column", null, {
      inverted: !0
    });
  })(J);

  (function (a) {
    var y = a.Series;
    a = a.seriesType;
    a("scatter", "line", {
      lineWidth: 0,
      findNearestPointBy: "xy",
      marker: {
        enabled: !0
      },
      tooltip: {
        headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
        pointFormat: "x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"
      }
    }, {
      sorted: !1,
      requireSorting: !1,
      noSharedTooltip: !0,
      trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
      takeOrdinalPosition: !1,
      drawGraph: function drawGraph() {
        this.options.lineWidth && y.prototype.drawGraph.call(this);
      }
    });
  })(J);

  (function (a) {
    var y = a.deg2rad,
        G = a.isNumber,
        E = a.pick,
        h = a.relativeLength;
    a.CenteredSeriesMixin = {
      getCenter: function getCenter() {
        var a = this.options,
            r = this.chart,
            u = 2 * (a.slicedOffset || 0),
            v = r.plotWidth - 2 * u,
            r = r.plotHeight - 2 * u,
            w = a.center,
            w = [E(w[0], "50%"), E(w[1], "50%"), a.size || "100%", a.innerSize || 0],
            n = Math.min(v, r),
            g,
            d;

        for (g = 0; 4 > g; ++g) {
          d = w[g], a = 2 > g || 2 === g && /%$/.test(d), w[g] = h(d, [v, r, n, w[2]][g]) + (a ? u : 0);
        }

        w[3] > w[2] && (w[3] = w[2]);
        return w;
      },
      getStartAndEndRadians: function getStartAndEndRadians(a, h) {
        a = G(a) ? a : 0;
        h = G(h) && h > a && 360 > h - a ? h : a + 360;
        return {
          start: y * (a + -90),
          end: y * (h + -90)
        };
      }
    };
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.CenteredSeriesMixin,
        E = a.defined,
        h = a.extend,
        c = G.getStartAndEndRadians,
        r = a.noop,
        u = a.pick,
        v = a.Point,
        w = a.Series,
        n = a.seriesType,
        g = a.setAnimation;
    n("pie", "line", {
      center: [null, null],
      clip: !1,
      colorByPoint: !0,
      dataLabels: {
        allowOverlap: !0,
        connectorPadding: 5,
        distance: 30,
        enabled: !0,
        formatter: function formatter() {
          return this.point.isNull ? void 0 : this.point.name;
        },
        softConnector: !0,
        x: 0,
        connectorShape: "fixedOffset",
        crookDistance: "70%"
      },
      ignoreHiddenPoint: !0,
      legendType: "point",
      marker: null,
      size: null,
      showInLegend: !1,
      slicedOffset: 10,
      stickyTracking: !1,
      tooltip: {
        followPointer: !0
      },
      borderColor: "#ffffff",
      borderWidth: 1,
      states: {
        hover: {
          brightness: .1
        }
      }
    }, {
      isCartesian: !1,
      requireSorting: !1,
      directTouch: !0,
      noSharedTooltip: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      axisTypes: [],
      pointAttribs: a.seriesTypes.column.prototype.pointAttribs,
      animate: function animate(a) {
        var d = this,
            c = d.points,
            b = d.startAngleRad;
        a || (c.forEach(function (a) {
          var c = a.graphic,
              g = a.shapeArgs;
          c && (c.attr({
            r: a.startR || d.center[3] / 2,
            start: b,
            end: b
          }), c.animate({
            r: g.r,
            start: g.start,
            end: g.end
          }, d.options.animation));
        }), d.animate = null);
      },
      updateTotals: function updateTotals() {
        var a,
            c = 0,
            g = this.points,
            b = g.length,
            h,
            f = this.options.ignoreHiddenPoint;

        for (a = 0; a < b; a++) {
          h = g[a], c += f && !h.visible ? 0 : h.isNull ? 0 : h.y;
        }

        this.total = c;

        for (a = 0; a < b; a++) {
          h = g[a], h.percentage = 0 < c && (h.visible || !f) ? h.y / c * 100 : 0, h.total = c;
        }
      },
      generatePoints: function generatePoints() {
        w.prototype.generatePoints.call(this);
        this.updateTotals();
      },
      getX: function getX(a, c, g) {
        var b = this.center,
            d = this.radii ? this.radii[g.index] : b[2] / 2;
        return b[0] + (c ? -1 : 1) * Math.cos(Math.asin(Math.max(Math.min((a - b[1]) / (d + g.labelDistance), 1), -1))) * (d + g.labelDistance) + (0 < g.labelDistance ? (c ? -1 : 1) * this.options.dataLabels.padding : 0);
      },
      translate: function translate(a) {
        this.generatePoints();
        var d = 0,
            g = this.options,
            b = g.slicedOffset,
            h = b + (g.borderWidth || 0),
            f,
            n,
            t = c(g.startAngle, g.endAngle),
            r = this.startAngleRad = t.start,
            t = (this.endAngleRad = t.end) - r,
            v = this.points,
            z,
            k,
            A = g.dataLabels.distance,
            g = g.ignoreHiddenPoint,
            w,
            B = v.length,
            e;
        a || (this.center = a = this.getCenter());

        for (w = 0; w < B; w++) {
          e = v[w];
          e.labelDistance = u(e.options.dataLabels && e.options.dataLabels.distance, A);
          this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, e.labelDistance);
          f = r + d * t;
          if (!g || e.visible) d += e.percentage / 100;
          n = r + d * t;
          e.shapeType = "arc";
          e.shapeArgs = {
            x: a[0],
            y: a[1],
            r: a[2] / 2,
            innerR: a[3] / 2,
            start: Math.round(1E3 * f) / 1E3,
            end: Math.round(1E3 * n) / 1E3
          };
          n = (n + f) / 2;
          n > 1.5 * Math.PI ? n -= 2 * Math.PI : n < -Math.PI / 2 && (n += 2 * Math.PI);
          e.slicedTranslation = {
            translateX: Math.round(Math.cos(n) * b),
            translateY: Math.round(Math.sin(n) * b)
          };
          z = Math.cos(n) * a[2] / 2;
          k = Math.sin(n) * a[2] / 2;
          e.tooltipPos = [a[0] + .7 * z, a[1] + .7 * k];
          e.half = n < -Math.PI / 2 || n > Math.PI / 2 ? 1 : 0;
          e.angle = n;
          f = Math.min(h, e.labelDistance / 5);
          e.labelPosition = {
            natural: {
              x: a[0] + z + Math.cos(n) * e.labelDistance,
              y: a[1] + k + Math.sin(n) * e.labelDistance
            },
            "final": {},
            alignment: 0 > e.labelDistance ? "center" : e.half ? "right" : "left",
            connectorPosition: {
              breakAt: {
                x: a[0] + z + Math.cos(n) * f,
                y: a[1] + k + Math.sin(n) * f
              },
              touchingSliceAt: {
                x: a[0] + z,
                y: a[1] + k
              }
            }
          };
        }
      },
      drawGraph: null,
      drawPoints: function drawPoints() {
        var a = this,
            c = a.chart,
            g = c.renderer,
            b,
            l,
            f,
            n,
            t = a.options.shadow;
        !t || a.shadowGroup || c.styledMode || (a.shadowGroup = g.g("shadow").add(a.group));
        a.points.forEach(function (d) {
          l = d.graphic;
          if (d.isNull) l && (d.graphic = l.destroy());else {
            n = d.shapeArgs;
            b = d.getTranslate();

            if (!c.styledMode) {
              var m = d.shadowGroup;
              t && !m && (m = d.shadowGroup = g.g("shadow").add(a.shadowGroup));
              m && m.attr(b);
              f = a.pointAttribs(d, d.selected && "select");
            }

            l ? (l.setRadialReference(a.center), c.styledMode || l.attr(f), l.animate(h(n, b))) : (d.graphic = l = g[d.shapeType](n).setRadialReference(a.center).attr(b).add(a.group), c.styledMode || l.attr(f).attr({
              "stroke-linejoin": "round"
            }).shadow(t, m));
            l.attr({
              visibility: d.visible ? "inherit" : "hidden"
            });
            l.addClass(d.getClassName());
          }
        });
      },
      searchPoint: r,
      sortByAngle: function sortByAngle(a, c) {
        a.sort(function (a, b) {
          return void 0 !== a.angle && (b.angle - a.angle) * c;
        });
      },
      drawLegendSymbol: a.LegendSymbolMixin.drawRectangle,
      getCenter: G.getCenter,
      getSymbol: r
    }, {
      init: function init() {
        v.prototype.init.apply(this, arguments);
        var a = this,
            c;
        a.name = u(a.name, "Slice");

        c = function c(d) {
          a.slice("select" === d.type);
        };

        y(a, "select", c);
        y(a, "unselect", c);
        return a;
      },
      isValid: function isValid() {
        return a.isNumber(this.y, !0) && 0 <= this.y;
      },
      setVisible: function setVisible(a, c) {
        var d = this,
            b = d.series,
            g = b.chart,
            f = b.options.ignoreHiddenPoint;
        c = u(c, f);
        a !== d.visible && (d.visible = d.options.visible = a = void 0 === a ? !d.visible : a, b.options.data[b.data.indexOf(d)] = d.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (b) {
          if (d[b]) d[b][a ? "show" : "hide"](!0);
        }), d.legendItem && g.legend.colorizeItem(d, a), a || "hover" !== d.state || d.setState(""), f && (b.isDirty = !0), c && g.redraw());
      },
      slice: function slice(a, c, h) {
        var b = this.series;
        g(h, b.chart);
        u(c, !0);
        this.sliced = this.options.sliced = E(a) ? a : !this.sliced;
        b.options.data[b.data.indexOf(this)] = this.options;
        this.graphic.animate(this.getTranslate());
        this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      },
      getTranslate: function getTranslate() {
        return this.sliced ? this.slicedTranslation : {
          translateX: 0,
          translateY: 0
        };
      },
      haloPath: function haloPath(a) {
        var d = this.shapeArgs;
        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(d.x, d.y, d.r + a, d.r + a, {
          innerR: this.shapeArgs.r - 1,
          start: d.start,
          end: d.end
        });
      },
      connectorShapes: {
        fixedOffset: function fixedOffset(a, c, g) {
          var b = c.breakAt;
          c = c.touchingSliceAt;
          return ["M", a.x, a.y].concat(g.softConnector ? ["C", a.x + ("left" === a.alignment ? -5 : 5), a.y, 2 * b.x - c.x, 2 * b.y - c.y, b.x, b.y] : ["L", b.x, b.y]).concat(["L", c.x, c.y]);
        },
        straight: function straight(a, c) {
          c = c.touchingSliceAt;
          return ["M", a.x, a.y, "L", c.x, c.y];
        },
        crookedLine: function crookedLine(d, c, g) {
          c = c.touchingSliceAt;
          var b = this.series,
              h = b.center[0],
              f = b.chart.plotWidth,
              m = b.chart.plotLeft,
              b = d.alignment,
              t = this.shapeArgs.r;
          g = a.relativeLength(g.crookDistance, 1);
          g = "left" === b ? h + t + (f + m - h - t) * (1 - g) : m + (h - t) * g;
          h = ["L", g, d.y];
          if ("left" === b ? g > d.x || g < c.x : g < d.x || g > c.x) h = [];
          return ["M", d.x, d.y].concat(h).concat(["L", c.x, c.y]);
        }
      },
      getConnectorPath: function getConnectorPath() {
        var a = this.labelPosition,
            c = this.series.options.dataLabels,
            g = c.connectorShape,
            b = this.connectorShapes;
        b[g] && (g = b[g]);
        return g.call(this, {
          x: a.final.x,
          y: a.final.y,
          alignment: a.alignment
        }, a.connectorPosition, c);
      }
    });
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.arrayMax,
        E = a.defined,
        h = a.extend,
        c = a.format,
        r = a.merge,
        u = a.noop,
        v = a.pick,
        w = a.relativeLength,
        n = a.Series,
        g = a.seriesTypes,
        d = a.stableSort,
        m = a.isArray,
        p = a.splat;

    a.distribute = function (b, c, f) {
      function g(a, b) {
        return a.target - b.target;
      }

      var h,
          l = !0,
          m = b,
          p = [],
          k;
      k = 0;
      var n = m.reducedLen || c;

      for (h = b.length; h--;) {
        k += b[h].size;
      }

      if (k > n) {
        d(b, function (a, b) {
          return (b.rank || 0) - (a.rank || 0);
        });

        for (k = h = 0; k <= n;) {
          k += b[h].size, h++;
        }

        p = b.splice(h - 1, b.length);
      }

      d(b, g);

      for (b = b.map(function (a) {
        return {
          size: a.size,
          targets: [a.target],
          align: v(a.align, .5)
        };
      }); l;) {
        for (h = b.length; h--;) {
          l = b[h], k = (Math.min.apply(0, l.targets) + Math.max.apply(0, l.targets)) / 2, l.pos = Math.min(Math.max(0, k - l.size * l.align), c - l.size);
        }

        h = b.length;

        for (l = !1; h--;) {
          0 < h && b[h - 1].pos + b[h - 1].size > b[h].pos && (b[h - 1].size += b[h].size, b[h - 1].targets = b[h - 1].targets.concat(b[h].targets), b[h - 1].align = .5, b[h - 1].pos + b[h - 1].size > c && (b[h - 1].pos = c - b[h - 1].size), b.splice(h, 1), l = !0);
        }
      }

      m.push.apply(m, p);
      h = 0;
      b.some(function (b) {
        var d = 0;
        if (b.targets.some(function () {
          m[h].pos = b.pos + d;
          if (Math.abs(m[h].pos - m[h].target) > f) return m.slice(0, h + 1).forEach(function (a) {
            delete a.pos;
          }), m.reducedLen = (m.reducedLen || c) - .1 * c, m.reducedLen > .1 * c && a.distribute(m, c, f), !0;
          d += m[h].size;
          h++;
        })) return !0;
      });
      d(m, g);
    };

    n.prototype.drawDataLabels = function () {
      function b(a, b) {
        var c = b.filter;
        return c ? (b = c.operator, a = a[c.property], c = c.value, "\x3e" === b && a > c || "\x3c" === b && a < c || "\x3e\x3d" === b && a >= c || "\x3c\x3d" === b && a <= c || "\x3d\x3d" === b && a == c || "\x3d\x3d\x3d" === b && a === c ? !0 : !1) : !0;
      }

      function d(a, b) {
        var c = [],
            d;
        if (m(a) && !m(b)) c = a.map(function (a) {
          return r(a, b);
        });else if (m(b) && !m(a)) c = b.map(function (b) {
          return r(a, b);
        });else if (m(a) || m(b)) for (d = Math.max(a.length, b.length); d--;) {
          c[d] = r(a[d], b[d]);
        } else c = r(a, b);
        return c;
      }

      var f = this,
          g = f.chart,
          h = f.options,
          n = h.dataLabels,
          u = f.points,
          z,
          k = f.hasRendered || 0,
          A,
          w = v(n.defer, !!h.animation),
          B = g.renderer,
          n = d(d(g.options.plotOptions && g.options.plotOptions.series && g.options.plotOptions.series.dataLabels, g.options.plotOptions && g.options.plotOptions[f.type] && g.options.plotOptions[f.type].dataLabels), n);
      a.fireEvent(this, "drawDataLabels");
      if (m(n) || n.enabled || f._hasPointLabels) A = f.plotGroup("dataLabelsGroup", "data-labels", w && !k ? "hidden" : "visible", n.zIndex || 6), w && (A.attr({
        opacity: +k
      }), k || y(f, "afterAnimate", function () {
        f.visible && A.show(!0);
        A[h.animation ? "animate" : "attr"]({
          opacity: 1
        }, {
          duration: 200
        });
      })), u.forEach(function (e) {
        z = p(d(n, e.dlOptions || e.options && e.options.dataLabels));
        z.forEach(function (d, k) {
          var l = d.enabled && !e.isNull && b(e, d),
              m,
              q,
              t,
              p,
              n = e.dataLabels ? e.dataLabels[k] : e.dataLabel,
              r = e.connectors ? e.connectors[k] : e.connector,
              u = !n;
          l && (m = e.getLabelConfig(), q = d[e.formatPrefix + "Format"] || d.format, m = E(q) ? c(q, m, g.time) : (d[e.formatPrefix + "Formatter"] || d.formatter).call(m, d), q = d.style, t = d.rotation, g.styledMode || (q.color = v(d.color, q.color, f.color, "#000000"), "contrast" === q.color && (e.contrastColor = B.getContrast(e.color || f.color), q.color = d.inside || 0 > v(d.distance, e.labelDistance) || h.stacking ? e.contrastColor : "#000000"), h.cursor && (q.cursor = h.cursor)), p = {
            r: d.borderRadius || 0,
            rotation: t,
            padding: d.padding,
            zIndex: 1
          }, g.styledMode || (p.fill = d.backgroundColor, p.stroke = d.borderColor, p["stroke-width"] = d.borderWidth), a.objectEach(p, function (a, b) {
            void 0 === a && delete p[b];
          }));
          !n || l && E(m) ? l && E(m) && (n ? p.text = m : (e.dataLabels = e.dataLabels || [], n = e.dataLabels[k] = t ? B.text(m, 0, -9999).addClass("highcharts-data-label") : B.label(m, 0, -9999, d.shape, null, null, d.useHTML, null, "data-label"), k || (e.dataLabel = n), n.addClass(" highcharts-data-label-color-" + e.colorIndex + " " + (d.className || "") + (d.useHTML ? " highcharts-tracker" : ""))), n.options = d, n.attr(p), g.styledMode || n.css(q).shadow(d.shadow), n.added || n.add(A), f.alignDataLabel(e, n, d, null, u)) : (e.dataLabel = e.dataLabel && e.dataLabel.destroy(), e.dataLabels && (1 === e.dataLabels.length ? delete e.dataLabels : delete e.dataLabels[k]), k || delete e.dataLabel, r && (e.connector = e.connector.destroy(), e.connectors && (1 === e.connectors.length ? delete e.connectors : delete e.connectors[k])));
        });
      });
      a.fireEvent(this, "afterDrawDataLabels");
    };

    n.prototype.alignDataLabel = function (a, d, c, g, m) {
      var b = this.chart,
          f = this.isCartesian && b.inverted,
          l = v(a.dlBox && a.dlBox.centerX, a.plotX, -9999),
          k = v(a.plotY, -9999),
          n = d.getBBox(),
          p,
          t = c.rotation,
          e = c.align,
          q = this.visible && (a.series.forceDL || b.isInsidePlot(l, Math.round(k), f) || g && b.isInsidePlot(l, f ? g.x + 1 : g.y + g.height - 1, f)),
          r = "justify" === v(c.overflow, "justify");
      if (q && (p = b.renderer.fontMetrics(b.styledMode ? void 0 : c.style.fontSize, d).b, g = h({
        x: f ? this.yAxis.len - k : l,
        y: Math.round(f ? this.xAxis.len - l : k),
        width: 0,
        height: 0
      }, g), h(c, {
        width: n.width,
        height: n.height
      }), t ? (r = !1, l = b.renderer.rotCorr(p, t), l = {
        x: g.x + c.x + g.width / 2 + l.x,
        y: g.y + c.y + {
          top: 0,
          middle: .5,
          bottom: 1
        }[c.verticalAlign] * g.height
      }, d[m ? "attr" : "animate"](l).attr({
        align: e
      }), k = (t + 720) % 360, k = 180 < k && 360 > k, "left" === e ? l.y -= k ? n.height : 0 : "center" === e ? (l.x -= n.width / 2, l.y -= n.height / 2) : "right" === e && (l.x -= n.width, l.y -= k ? 0 : n.height), d.placed = !0, d.alignAttr = l) : (d.align(c, null, g), l = d.alignAttr), r && 0 <= g.height ? a.isLabelJustified = this.justifyDataLabel(d, c, l, n, g, m) : v(c.crop, !0) && (q = b.isInsidePlot(l.x, l.y) && b.isInsidePlot(l.x + n.width, l.y + n.height)), c.shape && !t)) d[m ? "attr" : "animate"]({
        anchorX: f ? b.plotWidth - a.plotY : a.plotX,
        anchorY: f ? b.plotHeight - a.plotX : a.plotY
      });
      q || (d.attr({
        y: -9999
      }), d.placed = !1);
    };

    n.prototype.justifyDataLabel = function (a, d, c, g, h, m) {
      var b = this.chart,
          f = d.align,
          k = d.verticalAlign,
          l,
          n,
          p = a.box ? 0 : a.padding || 0;
      l = c.x + p;
      0 > l && ("right" === f ? d.align = "left" : d.x = -l, n = !0);
      l = c.x + g.width - p;
      l > b.plotWidth && ("left" === f ? d.align = "right" : d.x = b.plotWidth - l, n = !0);
      l = c.y + p;
      0 > l && ("bottom" === k ? d.verticalAlign = "top" : d.y = -l, n = !0);
      l = c.y + g.height - p;
      l > b.plotHeight && ("top" === k ? d.verticalAlign = "bottom" : d.y = b.plotHeight - l, n = !0);
      n && (a.placed = !m, a.align(d, null, h));
      return n;
    };

    g.pie && (g.pie.prototype.dataLabelPositioners = {
      radialDistributionY: function radialDistributionY(a) {
        return a.top + a.distributeBox.pos;
      },
      radialDistributionX: function radialDistributionX(a, d, c, g) {
        return a.getX(c < d.top + 2 || c > d.bottom - 2 ? g : c, d.half, d);
      },
      justify: function justify(a, d, c) {
        return c[0] + (a.half ? -1 : 1) * (d + a.labelDistance);
      },
      alignToPlotEdges: function alignToPlotEdges(a, d, c, g) {
        a = a.getBBox().width;
        return d ? a + g : c - a - g;
      },
      alignToConnectors: function alignToConnectors(a, d, c, g) {
        var b = 0,
            f;
        a.forEach(function (a) {
          f = a.dataLabel.getBBox().width;
          f > b && (b = f);
        });
        return d ? b + g : c - b - g;
      }
    }, g.pie.prototype.drawDataLabels = function () {
      var b = this,
          d = b.data,
          c,
          g = b.chart,
          h = b.options.dataLabels,
          m = h.connectorPadding,
          p = v(h.connectorWidth, 1),
          r = g.plotWidth,
          k = g.plotHeight,
          u = g.plotLeft,
          w = Math.round(g.chartWidth / 3),
          B,
          e = b.center,
          q = e[2] / 2,
          y = e[1],
          I,
          J,
          K,
          M,
          S = [[], []],
          C,
          N,
          P,
          T,
          Q = [0, 0, 0, 0],
          O = b.dataLabelPositioners;
      b.visible && (h.enabled || b._hasPointLabels) && (d.forEach(function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
          width: "auto"
        }).css({
          width: "auto",
          textOverflow: "clip"
        }), a.dataLabel.shortened = !1);
      }), n.prototype.drawDataLabels.apply(b), d.forEach(function (a) {
        a.dataLabel && (a.visible ? (S[a.half].push(a), a.dataLabel._pos = null, !E(h.style.width) && !E(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > w && (a.dataLabel.css({
          width: .7 * w
        }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels));
      }), S.forEach(function (d, f) {
        var l,
            n,
            p = d.length,
            t = [],
            x;
        if (p) for (b.sortByAngle(d, f - .5), 0 < b.maxLabelDistance && (l = Math.max(0, y - q - b.maxLabelDistance), n = Math.min(y + q + b.maxLabelDistance, g.plotHeight), d.forEach(function (a) {
          0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, y - q - a.labelDistance), a.bottom = Math.min(y + q + a.labelDistance, g.plotHeight), x = a.dataLabel.getBBox().height || 21, a.distributeBox = {
            target: a.labelPosition.natural.y - a.top + x / 2,
            size: x,
            rank: a.y
          }, t.push(a.distributeBox));
        }), l = n + x - l, a.distribute(t, l, l / 5)), T = 0; T < p; T++) {
          c = d[T];
          K = c.labelPosition;
          I = c.dataLabel;
          P = !1 === c.visible ? "hidden" : "inherit";
          N = l = K.natural.y;
          t && E(c.distributeBox) && (void 0 === c.distributeBox.pos ? P = "hidden" : (M = c.distributeBox.size, N = O.radialDistributionY(c)));
          delete c.positionIndex;
          if (h.justify) C = O.justify(c, q, e);else switch (h.alignTo) {
            case "connectors":
              C = O.alignToConnectors(d, f, r, u);
              break;

            case "plotEdges":
              C = O.alignToPlotEdges(I, f, r, u);
              break;

            default:
              C = O.radialDistributionX(b, c, N, l);
          }
          I._attr = {
            visibility: P,
            align: K.alignment
          };
          I._pos = {
            x: C + h.x + ({
              left: m,
              right: -m
            }[K.alignment] || 0),
            y: N + h.y - 10
          };
          K.final.x = C;
          K.final.y = N;
          v(h.crop, !0) && (J = I.getBBox().width, l = null, C - J < m && 1 === f ? (l = Math.round(J - C + m), Q[3] = Math.max(l, Q[3])) : C + J > r - m && 0 === f && (l = Math.round(C + J - r + m), Q[1] = Math.max(l, Q[1])), 0 > N - M / 2 ? Q[0] = Math.max(Math.round(-N + M / 2), Q[0]) : N + M / 2 > k && (Q[2] = Math.max(Math.round(N + M / 2 - k), Q[2])), I.sideOverflow = l);
        }
      }), 0 === G(Q) || this.verifyDataLabelOverflow(Q)) && (this.placeDataLabels(), p && this.points.forEach(function (a) {
        var d;
        B = a.connector;

        if ((I = a.dataLabel) && I._pos && a.visible && 0 < a.labelDistance) {
          P = I._attr.visibility;
          if (d = !B) a.connector = B = g.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + a.colorIndex + (a.className ? " " + a.className : "")).add(b.dataLabelsGroup), g.styledMode || B.attr({
            "stroke-width": p,
            stroke: h.connectorColor || a.color || "#666666"
          });
          B[d ? "attr" : "animate"]({
            d: a.getConnectorPath()
          });
          B.attr("visibility", P);
        } else B && (a.connector = B.destroy());
      }));
    }, g.pie.prototype.placeDataLabels = function () {
      this.points.forEach(function (a) {
        var b = a.dataLabel;
        b && a.visible && ((a = b._pos) ? (b.sideOverflow && (b._attr.width = b.getBBox().width - b.sideOverflow, b.css({
          width: b._attr.width + "px",
          textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
        }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](a), b.moved = !0) : b && b.attr({
          y: -9999
        }));
      }, this);
    }, g.pie.prototype.alignDataLabel = u, g.pie.prototype.verifyDataLabelOverflow = function (a) {
      var b = this.center,
          d = this.options,
          c = d.center,
          g = d.minSize || 80,
          h,
          m = null !== d.size;
      m || (null !== c[0] ? h = Math.max(b[2] - Math.max(a[1], a[3]), g) : (h = Math.max(b[2] - a[1] - a[3], g), b[0] += (a[3] - a[1]) / 2), null !== c[1] ? h = Math.max(Math.min(h, b[2] - Math.max(a[0], a[2])), g) : (h = Math.max(Math.min(h, b[2] - a[0] - a[2]), g), b[1] += (a[0] - a[2]) / 2), h < b[2] ? (b[2] = h, b[3] = Math.min(w(d.innerSize || 0, h), h), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : m = !0);
      return m;
    });
    g.column && (g.column.prototype.alignDataLabel = function (a, d, c, g, h) {
      var b = this.chart.inverted,
          f = a.series,
          l = a.dlBox || a.shapeArgs,
          k = v(a.below, a.plotY > v(this.translatedThreshold, f.yAxis.len)),
          m = v(c.inside, !!this.options.stacking);
      l && (g = r(l), 0 > g.y && (g.height += g.y, g.y = 0), l = g.y + g.height - f.yAxis.len, 0 < l && (g.height -= l), b && (g = {
        x: f.yAxis.len - g.y - g.height,
        y: f.xAxis.len - g.x - g.width,
        width: g.height,
        height: g.width
      }), m || (b ? (g.x += k ? 0 : g.width, g.width = 0) : (g.y += k ? g.height : 0, g.height = 0)));
      c.align = v(c.align, !b || m ? "center" : k ? "right" : "left");
      c.verticalAlign = v(c.verticalAlign, b || m ? "middle" : k ? "top" : "bottom");
      n.prototype.alignDataLabel.call(this, a, d, c, g, h);
      a.isLabelJustified && a.contrastColor && d.css({
        color: a.contrastColor
      });
    });
  })(J);

  (function (a) {
    var y = a.Chart,
        G = a.isArray,
        E = a.objectEach,
        h = a.pick,
        c = a.addEvent,
        r = a.fireEvent;
    c(y, "render", function () {
      var a = [];
      (this.labelCollectors || []).forEach(function (c) {
        a = a.concat(c());
      });
      (this.yAxis || []).forEach(function (c) {
        c.options.stackLabels && !c.options.stackLabels.allowOverlap && E(c.stacks, function (c) {
          E(c, function (c) {
            a.push(c.label);
          });
        });
      });
      (this.series || []).forEach(function (c) {
        var r = c.options.dataLabels;
        c.visible && (!1 !== r.enabled || c._hasPointLabels) && c.points.forEach(function (c) {
          c.visible && (G(c.dataLabels) ? c.dataLabels : c.dataLabel ? [c.dataLabel] : []).forEach(function (g) {
            var d = g.options;
            g.labelrank = h(d.labelrank, c.labelrank, c.shapeArgs && c.shapeArgs.height);
            d.allowOverlap || a.push(g);
          });
        });
      });
      this.hideOverlappingLabels(a);
    });

    y.prototype.hideOverlappingLabels = function (a) {
      var c = this,
          h = a.length,
          n = c.renderer,
          g,
          d,
          m,
          p,
          b,
          l,
          f = function f(a, b, c, d, _f, g, h, l) {
        return !(_f > a + c || _f + h < a || g > b + d || g + l < b);
      };

      m = function m(a) {
        var b,
            c,
            d,
            f = a.box ? 0 : a.padding || 0;
        d = 0;
        if (a && (!a.alignAttr || a.placed)) return b = a.alignAttr || {
          x: a.attr("x"),
          y: a.attr("y")
        }, c = a.parentGroup, a.width || (d = a.getBBox(), a.width = d.width, a.height = d.height, d = n.fontMetrics(null, a.element).h), {
          x: b.x + (c.translateX || 0) + f,
          y: b.y + (c.translateY || 0) + f - d,
          width: a.width - 2 * f,
          height: a.height - 2 * f
        };
      };

      for (d = 0; d < h; d++) {
        if (g = a[d]) g.oldOpacity = g.opacity, g.newOpacity = 1, g.absoluteBox = m(g);
      }

      a.sort(function (a, b) {
        return (b.labelrank || 0) - (a.labelrank || 0);
      });

      for (d = 0; d < h; d++) {
        for (l = (m = a[d]) && m.absoluteBox, g = d + 1; g < h; ++g) {
          if (b = (p = a[g]) && p.absoluteBox, l && b && m !== p && 0 !== m.newOpacity && 0 !== p.newOpacity && (b = f(l.x, l.y, l.width, l.height, b.x, b.y, b.width, b.height))) (m.labelrank < p.labelrank ? m : p).newOpacity = 0;
        }
      }

      a.forEach(function (a) {
        var b, d;
        a && (d = a.newOpacity, a.oldOpacity !== d && (a.alignAttr && a.placed ? (d ? a.show(!0) : b = function b() {
          a.hide();
        }, a.alignAttr.opacity = d, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b), r(c, "afterHideOverlappingLabels")) : a.attr({
          opacity: d
        })), a.isOld = !0);
      });
    };
  })(J);

  (function (a) {
    var y = a.addEvent,
        G = a.Chart,
        E = a.createElement,
        h = a.css,
        c = a.defaultOptions,
        r = a.defaultPlotOptions,
        u = a.extend,
        v = a.fireEvent,
        w = a.hasTouch,
        n = a.isObject,
        g = a.Legend,
        d = a.merge,
        m = a.pick,
        p = a.Point,
        b = a.Series,
        l = a.seriesTypes,
        f = a.svg,
        x;
    x = a.TrackerMixin = {
      drawTrackerPoint: function drawTrackerPoint() {
        var a = this,
            b = a.chart,
            c = b.pointer,
            d = function d(a) {
          var b = c.getPointFromEvent(a);
          void 0 !== b && (c.isDirectTouch = !0, b.onMouseOver(a));
        };

        a.points.forEach(function (a) {
          a.graphic && (a.graphic.element.point = a);
          a.dataLabel && (a.dataLabel.div ? a.dataLabel.div.point = a : a.dataLabel.element.point = a);
        });
        a._hasTracking || (a.trackerGroups.forEach(function (f) {
          if (a[f]) {
            a[f].addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function (a) {
              c.onTrackerMouseOut(a);
            });
            if (w) a[f].on("touchstart", d);
            !b.styledMode && a.options.cursor && a[f].css(h).css({
              cursor: a.options.cursor
            });
          }
        }), a._hasTracking = !0);
        v(this, "afterDrawTracker");
      },
      drawTrackerGraph: function drawTrackerGraph() {
        var a = this,
            b = a.options,
            c = b.trackByArea,
            d = [].concat(c ? a.areaPath : a.graphPath),
            g = d.length,
            h = a.chart,
            l = h.pointer,
            m = h.renderer,
            e = h.options.tooltip.snap,
            q = a.tracker,
            p,
            n = function n() {
          if (h.hoverSeries !== a) a.onMouseOver();
        },
            r = "rgba(192,192,192," + (f ? .0001 : .002) + ")";

        if (g && !c) for (p = g + 1; p--;) {
          "M" === d[p] && d.splice(p + 1, 0, d[p + 1] - e, d[p + 2], "L"), (p && "M" === d[p] || p === g) && d.splice(p, 0, "L", d[p - 2] + e, d[p - 1]);
        }
        q ? q.attr({
          d: d
        }) : a.graph && (a.tracker = m.path(d).attr({
          visibility: a.visible ? "visible" : "hidden",
          zIndex: 2
        }).addClass(c ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), h.styledMode || a.tracker.attr({
          "stroke-linejoin": "round",
          stroke: r,
          fill: c ? r : "none",
          "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * e)
        }), [a.tracker, a.markerGroup].forEach(function (a) {
          a.addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function (a) {
            l.onTrackerMouseOut(a);
          });
          b.cursor && !h.styledMode && a.css({
            cursor: b.cursor
          });
          if (w) a.on("touchstart", n);
        }));
        v(this, "afterDrawTracker");
      }
    };
    l.column && (l.column.prototype.drawTracker = x.drawTrackerPoint);
    l.pie && (l.pie.prototype.drawTracker = x.drawTrackerPoint);
    l.scatter && (l.scatter.prototype.drawTracker = x.drawTrackerPoint);
    u(g.prototype, {
      setItemEvents: function setItemEvents(a, b, c) {
        var f = this,
            g = f.chart.renderer.boxWrapper,
            h = "highcharts-legend-" + (a instanceof p ? "point" : "series") + "-active",
            l = f.chart.styledMode;
        (c ? b : a.legendGroup).on("mouseover", function () {
          a.setState("hover");
          g.addClass(h);
          l || b.css(f.options.itemHoverStyle);
        }).on("mouseout", function () {
          f.styledMode || b.css(d(a.visible ? f.itemStyle : f.itemHiddenStyle));
          g.removeClass(h);
          a.setState();
        }).on("click", function (b) {
          var c = function c() {
            a.setVisible && a.setVisible();
          };

          g.removeClass(h);
          b = {
            browserEvent: b
          };
          a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : v(a, "legendItemClick", b, c);
        });
      },
      createCheckboxForItem: function createCheckboxForItem(a) {
        a.checkbox = E("input", {
          type: "checkbox",
          className: "highcharts-legend-checkbox",
          checked: a.selected,
          defaultChecked: a.selected
        }, this.options.itemCheckboxStyle, this.chart.container);
        y(a.checkbox, "click", function (b) {
          v(a.series || a, "checkboxClick", {
            checked: b.target.checked,
            item: a
          }, function () {
            a.select();
          });
        });
      }
    });
    u(G.prototype, {
      showResetZoom: function showResetZoom() {
        function a() {
          b.zoomOut();
        }

        var b = this,
            d = c.lang,
            f = b.options.chart.resetZoomButton,
            g = f.theme,
            h = g.states,
            l = "chart" === f.relativeTo ? null : "plotBox";
        v(this, "beforeShowResetZoom", null, function () {
          b.resetZoomButton = b.renderer.button(d.resetZoom, null, null, a, g, h && h.hover).attr({
            align: f.position.align,
            title: d.resetZoomTitle
          }).addClass("highcharts-reset-zoom").add().align(f.position, !1, l);
        });
      },
      zoomOut: function zoomOut() {
        v(this, "selection", {
          resetSelection: !0
        }, this.zoom);
      },
      zoom: function zoom(a) {
        var b,
            c = this.pointer,
            d = !1,
            f;
        !a || a.resetSelection ? (this.axes.forEach(function (a) {
          b = a.zoom();
        }), c.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
          var f = a.axis;
          c[f.isXAxis ? "zoomX" : "zoomY"] && (b = f.zoom(a.min, a.max), f.displayBtn && (d = !0));
        });
        f = this.resetZoomButton;
        d && !f ? this.showResetZoom() : !d && n(f) && (this.resetZoomButton = f.destroy());
        b && this.redraw(m(this.options.chart.animation, a && a.animation, 100 > this.pointCount));
      },
      pan: function pan(a, b) {
        var c = this,
            d = c.hoverPoints,
            f;
        d && d.forEach(function (a) {
          a.setState();
        });
        ("xy" === b ? [1, 0] : [1]).forEach(function (b) {
          b = c[b ? "xAxis" : "yAxis"][0];
          var d = b.horiz,
              g = a[d ? "chartX" : "chartY"],
              d = d ? "mouseDownX" : "mouseDownY",
              e = c[d],
              h = (b.pointRange || 0) / 2,
              k = b.reversed && !c.inverted || !b.reversed && c.inverted ? -1 : 1,
              l = b.getExtremes(),
              m = b.toValue(e - g, !0) + h * k,
              k = b.toValue(e + b.len - g, !0) - h * k,
              p = k < m,
              e = p ? k : m,
              m = p ? m : k,
              k = Math.min(l.dataMin, h ? l.min : b.toValue(b.toPixels(l.min) - b.minPixelPadding)),
              h = Math.max(l.dataMax, h ? l.max : b.toValue(b.toPixels(l.max) + b.minPixelPadding)),
              p = k - e;
          0 < p && (m += p, e = k);
          p = m - h;
          0 < p && (m = h, e -= p);
          b.series.length && e !== l.min && m !== l.max && (b.setExtremes(e, m, !1, !1, {
            trigger: "pan"
          }), f = !0);
          c[d] = g;
        });
        f && c.redraw(!1);
        h(c.container, {
          cursor: "move"
        });
      }
    });
    u(p.prototype, {
      select: function select(a, b) {
        var c = this,
            d = c.series,
            f = d.chart;
        a = m(a, !c.selected);
        c.firePointEvent(a ? "select" : "unselect", {
          accumulate: b
        }, function () {
          c.selected = c.options.selected = a;
          d.options.data[d.data.indexOf(c)] = c.options;
          c.setState(a && "select");
          b || f.getSelectedPoints().forEach(function (a) {
            a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[d.data.indexOf(a)] = a.options, a.setState(""), a.firePointEvent("unselect"));
          });
        });
      },
      onMouseOver: function onMouseOver(a) {
        var b = this.series.chart,
            c = b.pointer;
        a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);
        c.runPointActions(a, this);
      },
      onMouseOut: function onMouseOut() {
        var a = this.series.chart;
        this.firePointEvent("mouseOut");
        (a.hoverPoints || []).forEach(function (a) {
          a.setState();
        });
        a.hoverPoints = a.hoverPoint = null;
      },
      importEvents: function importEvents() {
        if (!this.hasImportedEvents) {
          var b = this,
              c = d(b.series.options.point, b.options).events;
          b.events = c;
          a.objectEach(c, function (a, c) {
            y(b, c, a);
          });
          this.hasImportedEvents = !0;
        }
      },
      setState: function setState(a, b) {
        var c = Math.floor(this.plotX),
            d = this.plotY,
            f = this.series,
            g = f.options.states[a || "normal"] || {},
            h = r[f.type].marker && f.options.marker,
            l = h && !1 === h.enabled,
            e = h && h.states && h.states[a || "normal"] || {},
            p = !1 === e.enabled,
            n = f.stateMarkerGraphic,
            t = this.marker || {},
            w = f.chart,
            x = f.halo,
            y,
            E = h && f.markerAttribs;
        a = a || "";

        if (!(a === this.state && !b || this.selected && "select" !== a || !1 === g.enabled || a && (p || l && !1 === e.enabled) || a && t.states && t.states[a] && !1 === t.states[a].enabled)) {
          E && (y = f.markerAttribs(this, a));
          if (this.graphic) this.state && this.graphic.removeClass("highcharts-point-" + this.state), a && this.graphic.addClass("highcharts-point-" + a), w.styledMode || this.graphic.animate(f.pointAttribs(this, a), m(w.options.chart.animation, g.animation)), y && this.graphic.animate(y, m(w.options.chart.animation, e.animation, h.animation)), n && n.hide();else {
            if (a && e) {
              h = t.symbol || f.symbol;
              n && n.currentSymbol !== h && (n = n.destroy());
              if (n) n[b ? "animate" : "attr"]({
                x: y.x,
                y: y.y
              });else h && (f.stateMarkerGraphic = n = w.renderer.symbol(h, y.x, y.y, y.width, y.height).add(f.markerGroup), n.currentSymbol = h);
              !w.styledMode && n && n.attr(f.pointAttribs(this, a));
            }

            n && (n[a && w.isInsidePlot(c, d, w.inverted) ? "show" : "hide"](), n.element.point = this);
          }
          (c = g.halo) && c.size ? (x || (f.halo = x = w.renderer.path().add((this.graphic || n).parentGroup)), x.show()[b ? "animate" : "attr"]({
            d: this.haloPath(c.size)
          }), x.attr({
            "class": "highcharts-halo highcharts-color-" + m(this.colorIndex, f.colorIndex) + (this.className ? " " + this.className : ""),
            zIndex: -1
          }), x.point = this, w.styledMode || x.attr(u({
            fill: this.color || f.color,
            "fill-opacity": c.opacity
          }, c.attributes))) : x && x.point && x.point.haloPath && x.animate({
            d: x.point.haloPath(0)
          }, null, x.hide);
          this.state = a;
          v(this, "afterSetState");
        }
      },
      haloPath: function haloPath(a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      }
    });
    u(b.prototype, {
      onMouseOver: function onMouseOver() {
        var a = this.chart,
            b = a.hoverSeries;
        if (b && b !== this) b.onMouseOut();
        this.options.events.mouseOver && v(this, "mouseOver");
        this.setState("hover");
        a.hoverSeries = this;
      },
      onMouseOut: function onMouseOut() {
        var a = this.options,
            b = this.chart,
            c = b.tooltip,
            d = b.hoverPoint;
        b.hoverSeries = null;
        if (d) d.onMouseOut();
        this && a.events.mouseOut && v(this, "mouseOut");
        !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
        this.setState();
      },
      setState: function setState(a) {
        var b = this,
            c = b.options,
            d = b.graph,
            f = c.states,
            g = c.lineWidth,
            c = 0;
        a = a || "";
        if (b.state !== a && ([b.group, b.markerGroup, b.dataLabelsGroup].forEach(function (c) {
          c && (b.state && c.removeClass("highcharts-series-" + b.state), a && c.addClass("highcharts-series-" + a));
        }), b.state = a, !(b.chart.styledMode || f[a] && !1 === f[a].enabled) && (a && (g = f[a].lineWidth || g + (f[a].lineWidthPlus || 0)), d && !d.dashstyle))) for (g = {
          "stroke-width": g
        }, d.animate(g, m(f[a || "normal"] && f[a || "normal"].animation, b.chart.options.chart.animation)); b["zone-graph-" + c];) {
          b["zone-graph-" + c].attr(g), c += 1;
        }
      },
      setVisible: function setVisible(a, b) {
        var c = this,
            d = c.chart,
            f = c.legendItem,
            g,
            h = d.options.chart.ignoreHiddenSeries,
            l = c.visible;
        g = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !l : a) ? "show" : "hide";
        ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) {
          if (c[a]) c[a][g]();
        });
        if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
        f && d.legend.colorizeItem(c, a);
        c.isDirty = !0;
        c.options.stacking && d.series.forEach(function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });
        c.linkedSeries.forEach(function (b) {
          b.setVisible(a, !1);
        });
        h && (d.isDirtyBox = !0);
        v(c, g);
        !1 !== b && d.redraw();
      },
      show: function show() {
        this.setVisible(!0);
      },
      hide: function hide() {
        this.setVisible(!1);
      },
      select: function select(a) {
        this.selected = a = this.options.selected = void 0 === a ? !this.selected : a;
        this.checkbox && (this.checkbox.checked = a);
        v(this, a ? "select" : "unselect");
      },
      drawTracker: x.drawTrackerGraph
    });
  })(J);

  (function (a) {
    var y = a.Chart,
        G = a.isArray,
        E = a.isObject,
        h = a.pick,
        c = a.splat;

    y.prototype.setResponsive = function (c) {
      var h = this.options.responsive,
          r = [],
          w = this.currentResponsive;
      h && h.rules && h.rules.forEach(function (g) {
        void 0 === g._id && (g._id = a.uniqueKey());
        this.matchResponsiveRule(g, r, c);
      }, this);
      var n = a.merge.apply(0, r.map(function (c) {
        return a.find(h.rules, function (a) {
          return a._id === c;
        }).chartOptions;
      })),
          r = r.toString() || void 0;
      r !== (w && w.ruleIds) && (w && this.update(w.undoOptions, c), r ? (this.currentResponsive = {
        ruleIds: r,
        mergedOptions: n,
        undoOptions: this.currentOptions(n)
      }, this.update(n, c)) : this.currentResponsive = void 0);
    };

    y.prototype.matchResponsiveRule = function (a, c) {
      var r = a.condition;
      (r.callback || function () {
        return this.chartWidth <= h(r.maxWidth, Number.MAX_VALUE) && this.chartHeight <= h(r.maxHeight, Number.MAX_VALUE) && this.chartWidth >= h(r.minWidth, 0) && this.chartHeight >= h(r.minHeight, 0);
      }).call(this) && c.push(a._id);
    };

    y.prototype.currentOptions = function (h) {
      function r(h, n, g, d) {
        var m;
        a.objectEach(h, function (a, b) {
          if (!d && -1 < ["series", "xAxis", "yAxis"].indexOf(b)) for (a = c(a), g[b] = [], m = 0; m < a.length; m++) {
            n[b][m] && (g[b][m] = {}, r(a[m], n[b][m], g[b][m], d + 1));
          } else E(a) ? (g[b] = G(a) ? [] : {}, r(a, n[b] || {}, g[b], d + 1)) : g[b] = n[b] || null;
        });
      }

      var v = {};
      r(h, this.options, v, 0);
      return v;
    };
  })(J);

  return J;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })
/******/ ])});;
//# sourceMappingURL=module.js.map