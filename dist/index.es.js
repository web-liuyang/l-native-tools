/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r = function () {
  return (r =
    Object.assign ||
    function (r) {
      for (var t, e = 1, n = arguments.length; e < n; e++) for (var o in (t = arguments[e])) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
      return r;
    }).apply(this, arguments);
};
function t(r, t) {
  var e = 'function' == typeof Symbol && r[Symbol.iterator];
  if (!e) return r;
  var n,
    o,
    a = e.call(r),
    u = [];
  try {
    for (; (void 0 === t || t-- > 0) && !(n = a.next()).done; ) u.push(n.value);
  } catch (r) {
    o = { error: r };
  } finally {
    try {
      n && !n.done && (e = a.return) && e.call(a);
    } finally {
      if (o) throw o.error;
    }
  }
  return u;
}
function e(r) {
  return Object.prototype.toString.call(r).slice(1, -1).split(' ')[1].toLowerCase();
}
console.log('common.ts');
var n = Object.freeze({
  __proto__: null,
  typeOf: e,
  isEmpty: function (r) {
    switch (e(r)) {
      case 'string':
      case 'number':
        return !!r;
      case 'boolean':
        return r;
      case 'object':
        for (var t in r) return !t;
        return !0;
      case 'array':
        return 0 === r.length;
      case 'symbol':
      case 'function':
        return !1;
      case 'null':
      case 'undefined':
        return !0;
      default:
        return !1;
    }
  },
  straightDistance: function (r, n) {
    if ('string' !== e(r) || 'string' !== e(n)) throw new Error('想要的到string类型的参数但是却得到：' + e(r) + '与' + e(n) + '类型的参数');
    var o = Math.PI,
      a = Math.asin,
      u = Math.sqrt,
      c = Math.pow,
      i = Math.sin,
      l = Math.cos,
      f = Math.round,
      s = t(r.split(','), 2),
      y = s[0],
      p = s[1],
      h = t(n.split(','), 2),
      v = h[0],
      b = h[1];
    function d(r) {
      return (r * o) / 180;
    }
    var g = d(p),
      m = d(b),
      _ = g - m,
      w = d(y) - d(v),
      j = 2 * a(u(c(i(_ / 2), 2) + l(g) * l(m) * c(i(w / 2), 2)));
    return (j = f(f(1e4 * (j *= 6378137)) / 1e4));
  },
  deepClone: function r(t) {
    var n = 'array' === e(t) ? [] : {};
    if ('object' === e(t) || 'array' === e(t)) for (var o in t) 'object' === e(t[o]) || 'array' === e(t[o]) ? (n[o] = r(t[o])) : (n[o] = t[o]);
    return n;
  },
  debounce: function (r, t, e) {
    var n = null;
    return function () {
      var o = this,
        a = arguments;
      if ((n && clearTimeout(n), e)) {
        var u = !n;
        (n = setTimeout(function () {
          n = null;
        }, t)),
          u && r.apply(o, a);
      } else
        n = setTimeout(function () {
          r.apply(o, a);
        }, t);
    };
  },
  throttle: function (r, t) {
    var e = null,
      n = Date.now();
    return function () {
      var o = Date.now(),
        a = t - (o - n),
        u = this,
        c = arguments;
      e && clearTimeout(e),
        a <= 0
          ? (r.apply(u, c), (n = Date.now()))
          : (e = setTimeout(function () {
              r.apply(u, c);
            }, a));
    };
  },
});
console.log('array.ts');
var o = Object.freeze({
  __proto__: null,
  flatten: function r(t, n) {
    var o, a;
    void 0 === n && (n = []);
    try {
      for (
        var u = (function (r) {
            var t = 'function' == typeof Symbol && Symbol.iterator,
              e = t && r[t],
              n = 0;
            if (e) return e.call(r);
            if (r && 'number' == typeof r.length)
              return {
                next: function () {
                  return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
                },
              };
            throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
          })(t),
          c = u.next();
        !c.done;
        c = u.next()
      ) {
        var i = c.value;
        'array' === e(i) ? r(i, n) : n.push(i);
      }
    } catch (r) {
      o = { error: r };
    } finally {
      try {
        c && !c.done && (a = u.return) && a.call(u);
      } finally {
        if (o) throw o.error;
      }
    }
    return n;
  },
  unique: function (r) {
    if ('array' !== e(r)) throw new Error('想要的到array类型的参数但是却得到：' + e(r) + '}类型的参数');
    return (function () {
      for (var r = [], e = 0; e < arguments.length; e++) r = r.concat(t(arguments[e]));
      return r;
    })(new Set(r));
  },
});
console.log('object.ts');
var a = Object.freeze({
  __proto__: null,
  getKeys: function (r) {
    if ('object' !== e(r)) throw new Error('想要获取object类型的参数却获得：' + e(r) + '类型的参数');
    return Object.keys(r);
  },
});
console.log('number');
var u = Object.freeze({
  __proto__: null,
  currency: function (r, t) {
    var e = t.map(function (r) {
        return Math.round((r *= 100));
      }),
      n = 0;
    switch (r) {
      case '+':
        n =
          e.reduce(function (r, t) {
            return r + t;
          }) / 100;
        break;
      case '-':
        n =
          e.reduce(function (r, t) {
            return r - t;
          }) / 100;
        break;
      case '*':
        n = e.reduce(function (r, t) {
          return (r * t) / 100;
        }, 1);
        break;
      case '/':
        n =
          e.reduce(function (r, t) {
            return (100 * r) / t;
          }) / 100;
    }
    return n;
  },
  random: function (r, t, e) {
    return void 0 === e && (e = !1), e ? Math.floor(Math.random() * (t - r + 1) + r) : Math.random() * (t - r) + r;
  },
});
console.log('string');
var c = Object.freeze({ __proto__: null, String: 'string' }),
  i = r(r(r(r(r({}, o), n), a), u), c);
export default i;
