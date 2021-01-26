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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

console.log('common.ts');
/**
 * @description 浅判断类型
 * @param {*} origin - 判断的变量
 * @return {Type}
 */
function typeOf(origin) {
    return Object.prototype.toString.call(origin).slice(1, -1).split(' ')[1].toLowerCase();
}
/**
 * @description 判断某个值是否为空
 * @param {*} origin - 判断的值
 * @return {boolean} 空为true 非空为false
 */
function isEmpty(origin) {
    switch (typeOf(origin)) {
        case 'string':
            return !!origin;
        case 'number':
            return !!origin;
        case 'boolean':
            return origin;
        case 'object':
            for (var key in origin)
                { return !key; }
            return true;
        case 'array':
            return origin.length === 0;
        case 'symbol':
            return false;
        case 'function':
            return false;
        case 'null':
            return true;
        case 'undefined':
            return true;
        default:
            return false;
    }
}
/**
 * @description 直线距离计算
 * @param {string} origin - 当前经纬度。 经度在前，纬度在后，经度和纬度用","分割，经纬度小数点后不得超过6位
 * @param {string} target - 目标经纬度。 经度在前，纬度在后，经度和纬度用","分割，经纬度小数点后不得超过6位
 * @returns {number} 返回两端之间的距离,单位米
 */
function straightDistance(origin, target) {
    if (typeOf(origin) !== 'string' || typeOf(target) !== 'string') {
        throw new Error("\u60F3\u8981\u7684\u5230string\u7C7B\u578B\u7684\u53C2\u6570\u4F46\u662F\u5374\u5F97\u5230\uFF1A" + typeOf(origin) + "\u4E0E" + typeOf(target) + "\u7C7B\u578B\u7684\u53C2\u6570");
    }
    var PI = Math.PI, asin = Math.asin, sqrt = Math.sqrt, pow = Math.pow, sin = Math.sin, cos = Math.cos, round = Math.round;
    // 获取经纬度
    var _a = __read(origin.split(','), 2), lon1 = _a[0], lat1 = _a[1];
    var _b = __read(target.split(','), 2), lon2 = _b[0], lat2 = _b[1];
    var EARTH_RADIUS = 6378137.0; // 地球半径
    // 获取弧度
    function getRad(d) {
        return (d * PI) / 180.0;
    }
    var radLat1 = getRad(lat1);
    var radLat2 = getRad(lat2);
    var a = radLat1 - radLat2;
    var b = getRad(lon1) - getRad(lon2);
    var s = 2 * asin(sqrt(pow(sin(a / 2), 2) + cos(radLat1) * cos(radLat2) * pow(sin(b / 2), 2)));
    s = s * EARTH_RADIUS;
    s = round(round(s * 10000) / 10000.0);
    return s;
}
/**
 * @description 深拷贝
 * @template T
 * @param {T} origin - 拷贝的源对象
 * @return {T} 拷贝后的对象
 */
function deepClone(origin) {
    var clone = (typeOf(origin) === 'array' ? [] : {});
    if (typeOf(origin) === 'object' || typeOf(origin) === 'array') {
        for (var key in origin) {
            if (typeOf(origin[key]) === 'object' || typeOf(origin[key]) === 'array') {
                clone[key] = deepClone(origin[key]);
            }
            else {
                clone[key] = origin[key];
            }
        }
    }
    return clone;
}
/**
 * @description 防抖
 * @param {Function} fn - 延迟执行的函数
 * @param {number} delay - 延迟执行毫秒数
 * @param {boolean} [immediate] - 是否第一次执行
 * @return {() => void}
 */
function debounce(fn, delay, immediate) {
    var timeout = null;
    return function () {
        // @ts-ignore
        var ctx = this;
        var args = arguments;
        // 如果timeout存在那么取消延时器
        if (timeout)
            { clearTimeout(timeout); }
        // 判断是否首次需要执行
        if (immediate) {
            // 判断延时器是否有值
            var now = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, delay);
            if (now)
                { fn.apply(ctx, args); }
        }
        else {
            timeout = setTimeout(function () {
                fn.apply(ctx, args);
            }, delay);
        }
    };
}
/**
 * @description 节流
 * @param {Function} fn - 节流执行的函数
 * @param {number} delay - 节流毫秒数
 * @returns {() => void}
 */
function throttle(fn, delay) {
    var timeout = null, startTime = Date.now(); // 创建节流函数的时间
    return function () {
        var curTime = Date.now(), // 返回的这个函数被调用的时间
        remaining = delay - (curTime - startTime), // 设定的delay与[上一次被调用的时间与现在的时间间隔]的差值
        // @ts-ignore
        ctx = this, // 上下文对象
        args = arguments; // 返回的这个函数执行时传入的参数
        // 首先清掉定时器
        timeout && clearTimeout(timeout);
        // // 假如距离上一次执行此函数的时间已经超过了设定的delay，则执行
        if (remaining <= 0) {
            fn.apply(ctx, args);
            startTime = Date.now(); // 重置最后执行时间为现在
            // 否则，等到间隔时间达到delay时，执行函数
        }
        else {
            timeout = setTimeout(function () {
                fn.apply(ctx, args);
            }, remaining);
        }
    };
}

var common = /*#__PURE__*/Object.freeze({
    __proto__: null,
    typeOf: typeOf,
    isEmpty: isEmpty,
    straightDistance: straightDistance,
    deepClone: deepClone,
    debounce: debounce,
    throttle: throttle
});

console.log('array.ts');
/**
 * @description 数组扁平化
 * @param {any[]} origin - 源数组
 * @param {any[]} [target=[]] - 目标数组
 * @return {any[]} 扁平化后的数据
 */
function flatten(origin, target) {
    var e_1, _a;
    if (target === void 0) { target = []; }
    try {
        for (var origin_1 = __values(origin), origin_1_1 = origin_1.next(); !origin_1_1.done; origin_1_1 = origin_1.next()) {
            var item = origin_1_1.value;
            if (typeOf(item) === 'array') {
                flatten(item, target);
            }
            else {
                target.push(item);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (origin_1_1 && !origin_1_1.done && (_a = origin_1.return)) { _a.call(origin_1); }
        }
        finally { if (e_1) { throw e_1.error; } }
    }
    return target;
}
/**
 * @description 数组去重
 * @param {any[]} origin - 源数组
 * @return {any[]} 去重后的数组
 */
function unique(origin) {
    if (typeOf(origin) !== 'array') {
        throw new Error("\u60F3\u8981\u7684\u5230array\u7C7B\u578B\u7684\u53C2\u6570\u4F46\u662F\u5374\u5F97\u5230\uFF1A" + typeOf(origin) + "}\u7C7B\u578B\u7684\u53C2\u6570");
    }
    return __spread(new Set(origin));
}

var array = /*#__PURE__*/Object.freeze({
    __proto__: null,
    flatten: flatten,
    unique: unique
});

console.log('object.ts');
/**
 * @description 返回其枚举自身属性的对象组成的数组
 * @param {object} obj - 源对象
 * @return {string[]} 源对象可枚举的数组
 */
function getKeys(obj) {
    if (typeOf(obj) !== 'object') {
        throw new Error("\u60F3\u8981\u83B7\u53D6object\u7C7B\u578B\u7684\u53C2\u6570\u5374\u83B7\u5F97\uFF1A" + typeOf(obj) + "\u7C7B\u578B\u7684\u53C2\u6570");
    }
    return Object.keys(obj);
}

var object = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getKeys: getKeys
});

console.log('number');
/**
 * @description 金额运算
 * @param {'+' | '-' | '*' | '/'} method - 计算方法
 * @param {string | number} args 需要参与计算的数值或字符串
 * @return {number} 计算后的值
 */
function currency(method, numberArr) {
    var arr = numberArr.map(function (item) { return Math.round((item *= 100)); });
    var num = 0;
    switch (method) {
        case '+':
            num = arr.reduce(function (total, item) { return total + item; }) / 100;
            break;
        case '-':
            num = arr.reduce(function (total, item) { return total - item; }) / 100;
            break;
        case '*':
            num = arr.reduce(function (total, item) { return (total * item) / 100; }, 1);
            break;
        case '/':
            num = arr.reduce(function (total, item) { return (total * 100) / item; }) / 100;
            break;
    }
    return num;
}
/**
 * @description 获取两个数值之间的数
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @param {boolean} [isInt=false] - 是否是整数 -> 包含最小值与最大值
 * @return {number}
 */
function random(min, max, isInt) {
    if (isInt === void 0) { isInt = false; }
    // 是否取整
    if (isInt) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    else {
        return Math.random() * (max - min) + min;
    }
}

var number = /*#__PURE__*/Object.freeze({
    __proto__: null,
    currency: currency,
    random: random
});

console.log('string');
var String = 'string';

var string = /*#__PURE__*/Object.freeze({
    __proto__: null,
    String: String
});

var index = __assign(__assign(__assign(__assign(__assign({}, array), common), object), number), string);

export default index;
