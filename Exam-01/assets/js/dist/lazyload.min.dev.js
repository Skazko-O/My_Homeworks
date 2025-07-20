"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).LazyLoad = t();
}(void 0, function () {
  "use strict";

  var e = "undefined" != typeof window,
      t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
      a = e && window.devicePixelRatio > 1,
      n = {
    elements_selector: ".lazy",
    container: t || e ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_bg_hidpi: "bg-hidpi",
    data_bg_multi: "bg-multi",
    data_bg_multi_hidpi: "bg-multi-hidpi",
    data_bg_set: "bg-set",
    data_poster: "poster",
    class_applied: "applied",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    class_entered: "entered",
    class_exited: "exited",
    unobserve_completed: !0,
    unobserve_entered: !1,
    cancel_on_exit: !0,
    callback_enter: null,
    callback_exit: null,
    callback_applied: null,
    callback_loading: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    callback_cancel: null,
    use_native: !1,
    restore_on_error: !1
  },
      s = function s(e) {
    return Object.assign({}, n, e);
  },
      l = function l(e, t) {
    var a;
    var n = "LazyLoad::Initialized",
        s = new e(t);

    try {
      a = new CustomEvent(n, {
        detail: {
          instance: s
        }
      });
    } catch (e) {
      a = document.createEvent("CustomEvent"), a.initCustomEvent(n, !1, !1, {
        instance: s
      });
    }

    window.dispatchEvent(a);
  },
      o = "src",
      r = "srcset",
      i = "sizes",
      d = "poster",
      c = "llOriginalAttrs",
      _ = "data",
      u = "loading",
      g = "loaded",
      b = "applied",
      h = "error",
      m = "native",
      p = "data-",
      f = "ll-status",
      v = function v(e, t) {
    return e.getAttribute(p + t);
  },
      E = function E(e) {
    return v(e, f);
  },
      I = function I(e, t) {
    return function (e, t, a) {
      var n = p + t;
      null !== a ? e.setAttribute(n, a) : e.removeAttribute(n);
    }(e, f, t);
  },
      y = function y(e) {
    return I(e, null);
  },
      k = function k(e) {
    return null === E(e);
  },
      A = function A(e) {
    return E(e) === m;
  },
      L = [u, g, b, h],
      w = function w(e, t, a, n) {
    e && "function" == typeof e && (void 0 === n ? void 0 === a ? e(t) : e(t, a) : e(t, a, n));
  },
      x = function x(t, a) {
    e && "" !== a && t.classList.add(a);
  },
      C = function C(t, a) {
    e && "" !== a && t.classList.remove(a);
  },
      O = function O(e) {
    return e.llTempImage;
  },
      M = function M(e, t) {
    if (!t) return;
    var a = t._observer;
    a && a.unobserve(e);
  },
      z = function z(e, t) {
    e && (e.loadingCount += t);
  },
      N = function N(e, t) {
    e && (e.toLoadCount = t);
  },
      T = function T(e) {
    var t = [];

    for (var _a, _n = 0; _a = e.children[_n]; _n += 1) {
      "SOURCE" === _a.tagName && t.push(_a);
    }

    return t;
  },
      R = function R(e, t) {
    var a = e.parentNode;
    a && "PICTURE" === a.tagName && T(a).forEach(t);
  },
      G = function G(e, t) {
    T(e).forEach(t);
  },
      D = [o],
      H = [o, d],
      V = [o, r, i],
      F = [_],
      j = function j(e) {
    return !!e[c];
  },
      B = function B(e) {
    return e[c];
  },
      J = function J(e) {
    return delete e[c];
  },
      S = function S(e, t) {
    if (j(e)) return;
    var a = {};
    t.forEach(function (t) {
      a[t] = e.getAttribute(t);
    }), e[c] = a;
  },
      P = function P(e, t) {
    if (!j(e)) return;
    var a = B(e);
    t.forEach(function (t) {
      (function (e, t, a) {
        a ? e.setAttribute(t, a) : e.removeAttribute(t);
      })(e, t, a[t]);
    });
  },
      U = function U(e, t, a) {
    x(e, t.class_applied), I(e, b), a && (t.unobserve_completed && M(e, t), w(t.callback_applied, e, a));
  },
      $ = function $(e, t, a) {
    x(e, t.class_loading), I(e, u), a && (z(a, 1), w(t.callback_loading, e, a));
  },
      q = function q(e, t, a) {
    a && e.setAttribute(t, a);
  },
      K = function K(e, t) {
    q(e, i, v(e, t.data_sizes)), q(e, r, v(e, t.data_srcset)), q(e, o, v(e, t.data_src));
  },
      Q = {
    IMG: function IMG(e, t) {
      R(e, function (e) {
        S(e, V), K(e, t);
      }), S(e, V), K(e, t);
    },
    IFRAME: function IFRAME(e, t) {
      S(e, D), q(e, o, v(e, t.data_src));
    },
    VIDEO: function VIDEO(e, t) {
      G(e, function (e) {
        S(e, D), q(e, o, v(e, t.data_src));
      }), S(e, H), q(e, d, v(e, t.data_poster)), q(e, o, v(e, t.data_src)), e.load();
    },
    OBJECT: function OBJECT(e, t) {
      S(e, F), q(e, _, v(e, t.data_src));
    }
  },
      W = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
      X = function X(e, t) {
    !t || function (e) {
      return e.loadingCount > 0;
    }(t) || function (e) {
      return e.toLoadCount > 0;
    }(t) || w(e.callback_finish, t);
  },
      Y = function Y(e, t, a) {
    e.addEventListener(t, a), e.llEvLisnrs[t] = a;
  },
      Z = function Z(e, t, a) {
    e.removeEventListener(t, a);
  },
      ee = function ee(e) {
    return !!e.llEvLisnrs;
  },
      te = function te(e) {
    if (!ee(e)) return;
    var t = e.llEvLisnrs;

    for (var _a2 in t) {
      var _n2 = t[_a2];
      Z(e, _a2, _n2);
    }

    delete e.llEvLisnrs;
  },
      ae = function ae(e, t, a) {
    (function (e) {
      delete e.llTempImage;
    })(e), z(a, -1), function (e) {
      e && (e.toLoadCount -= 1);
    }(a), C(e, t.class_loading), t.unobserve_completed && M(e, a);
  },
      ne = function ne(e, t, a) {
    var n = O(e) || e;
    ee(n) || function (e, t, a) {
      ee(e) || (e.llEvLisnrs = {});
      var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
      Y(e, n, t), Y(e, "error", a);
    }(n, function (s) {
      (function (e, t, a, n) {
        var s = A(t);
        ae(t, a, n), x(t, a.class_loaded), I(t, g), w(a.callback_loaded, t, n), s || X(a, n);
      })(0, e, t, a), te(n);
    }, function (s) {
      (function (e, t, a, n) {
        var s = A(t);
        ae(t, a, n), x(t, a.class_error), I(t, h), w(a.callback_error, t, n), a.restore_on_error && P(t, V), s || X(a, n);
      })(0, e, t, a), te(n);
    });
  },
      se = function se(e, t, n) {
    (function (e) {
      return W.indexOf(e.tagName) > -1;
    })(e) ? function (e, t, a) {
      ne(e, t, a), function (e, t, a) {
        var n = Q[e.tagName];
        n && (n(e, t), $(e, t, a));
      }(e, t, a);
    }(e, t, n) : function (e, t, n) {
      (function (e) {
        e.llTempImage = document.createElement("IMG");
      })(e), ne(e, t, n), function (e) {
        j(e) || (e[c] = {
          backgroundImage: e.style.backgroundImage
        });
      }(e), function (e, t, n) {
        var s = v(e, t.data_bg),
            l = v(e, t.data_bg_hidpi),
            r = a && l ? l : s;
        r && (e.style.backgroundImage = "url(\"".concat(r, "\")"), O(e).setAttribute(o, r), $(e, t, n));
      }(e, t, n), function (e, t, n) {
        var s = v(e, t.data_bg_multi),
            l = v(e, t.data_bg_multi_hidpi),
            o = a && l ? l : s;
        o && (e.style.backgroundImage = o, U(e, t, n));
      }(e, t, n), function (e, t, a) {
        var n = v(e, t.data_bg_set);
        if (!n) return;
        var s = n.split("|").map(function (e) {
          return "image-set(".concat(e, ")");
        });
        e.style.backgroundImage = s.join(), U(e, t, a);
      }(e, t, n);
    }(e, t, n);
  },
      le = function le(e) {
    e.removeAttribute(o), e.removeAttribute(r), e.removeAttribute(i);
  },
      oe = function oe(e) {
    R(e, function (e) {
      P(e, V);
    }), P(e, V);
  },
      re = {
    IMG: oe,
    IFRAME: function IFRAME(e) {
      P(e, D);
    },
    VIDEO: function VIDEO(e) {
      G(e, function (e) {
        P(e, D);
      }), P(e, H), e.load();
    },
    OBJECT: function OBJECT(e) {
      P(e, F);
    }
  },
      ie = function ie(e, t) {
    (function (e) {
      var t = re[e.tagName];
      t ? t(e) : function (e) {
        if (!j(e)) return;
        var t = B(e);
        e.style.backgroundImage = t.backgroundImage;
      }(e);
    })(e), function (e, t) {
      k(e) || A(e) || (C(e, t.class_entered), C(e, t.class_exited), C(e, t.class_applied), C(e, t.class_loading), C(e, t.class_loaded), C(e, t.class_error));
    }(e, t), y(e), J(e);
  },
      de = ["IMG", "IFRAME", "VIDEO"],
      ce = function ce(e) {
    return e.use_native && "loading" in HTMLImageElement.prototype;
  },
      _e = function _e(e, t, a) {
    e.forEach(function (e) {
      return function (e) {
        return e.isIntersecting || e.intersectionRatio > 0;
      }(e) ? function (e, t, a, n) {
        var s = function (e) {
          return L.indexOf(E(e)) >= 0;
        }(e);

        I(e, "entered"), x(e, a.class_entered), C(e, a.class_exited), function (e, t, a) {
          t.unobserve_entered && M(e, a);
        }(e, a, n), w(a.callback_enter, e, t, n), s || se(e, a, n);
      }(e.target, e, t, a) : function (e, t, a, n) {
        k(e) || (x(e, a.class_exited), function (e, t, a, n) {
          a.cancel_on_exit && function (e) {
            return E(e) === u;
          }(e) && "IMG" === e.tagName && (te(e), function (e) {
            R(e, function (e) {
              le(e);
            }), le(e);
          }(e), oe(e), C(e, a.class_loading), z(n, -1), y(e), w(a.callback_cancel, e, t, n));
        }(e, t, a, n), w(a.callback_exit, e, t, n));
      }(e.target, e, t, a);
    });
  },
      ue = function ue(e) {
    return Array.prototype.slice.call(e);
  },
      ge = function ge(e) {
    return e.container.querySelectorAll(e.elements_selector);
  },
      be = function be(e) {
    return function (e) {
      return E(e) === h;
    }(e);
  },
      he = function he(e, t) {
    return function (e) {
      return ue(e).filter(k);
    }(e || ge(t));
  },
      me = function me(t, a) {
    var n = s(t);
    this._settings = n, this.loadingCount = 0, function (e, t) {
      ce(e) || (t._observer = new IntersectionObserver(function (a) {
        _e(a, e, t);
      }, function (e) {
        return {
          root: e.container === document ? null : e.container,
          rootMargin: e.thresholds || e.threshold + "px"
        };
      }(e)));
    }(n, this), function (t, a) {
      e && (a._onlineHandler = function () {
        (function (e, t) {
          var a;
          (a = ge(e), ue(a).filter(be)).forEach(function (t) {
            C(t, e.class_error), y(t);
          }), t.update();
        })(t, a);
      }, window.addEventListener("online", a._onlineHandler));
    }(n, this), this.update(a);
  };

  return me.prototype = {
    update: function update(e) {
      var a = this._settings,
          n = he(e, a);
      var s, l;
      N(this, n.length), t ? this.loadAll(n) : ce(a) ? function (e, t, a) {
        e.forEach(function (e) {
          -1 !== de.indexOf(e.tagName) && function (e, t, a) {
            e.setAttribute("loading", "lazy"), ne(e, t, a), function (e, t) {
              var a = Q[e.tagName];
              a && a(e, t);
            }(e, t), I(e, m);
          }(e, t, a);
        }), N(a, 0);
      }(n, a, this) : (l = n, function (e) {
        e.disconnect();
      }(s = this._observer), function (e, t) {
        t.forEach(function (t) {
          e.observe(t);
        });
      }(s, l));
    },
    destroy: function destroy() {
      this._observer && this._observer.disconnect(), e && window.removeEventListener("online", this._onlineHandler), ge(this._settings).forEach(function (e) {
        J(e);
      }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
    },
    loadAll: function loadAll(e) {
      var _this = this;

      var t = this._settings;
      he(e, t).forEach(function (e) {
        M(e, _this), se(e, t, _this);
      });
    },
    restoreAll: function restoreAll() {
      var e = this._settings;
      ge(e).forEach(function (t) {
        ie(t, e);
      });
    }
  }, me.load = function (e, t) {
    var a = s(t);
    se(e, a);
  }, me.resetStatus = function (e) {
    y(e);
  }, e && function (e, t) {
    if (t) if (t.length) for (var _a3, _n3 = 0; _a3 = t[_n3]; _n3 += 1) {
      l(e, _a3);
    } else l(e, t);
  }(me, window.lazyLoadOptions), me;
});