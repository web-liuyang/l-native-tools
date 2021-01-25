console.log('common.ts');

type Type = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'symbol' | 'function' | 'null' | 'undefined';

/**
 * @description 判断类型
 * @param {*} origin - 判断的变量
 * @return {Type}
 */
export function typeOf(origin: any): Type {
  return Object.prototype.toString.call(origin).slice(1, -1).split(' ')[1].toLowerCase() as Type;
}

/**
 * @description 判断某个值是否为空
 * @param {*} origin - 判断的值
 * @return {boolean} 空为true 非空为false
 */
export function isEmpty(origin?: any): boolean {
  switch (typeOf(origin)) {
    case 'string':
      return !!origin;
    case 'number':
      return !!origin;
    case 'boolean':
      return origin;
    case 'object':
      for (const key in origin) return !key;
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
export function straightDistance(origin: string, target: string): number {
  if (typeOf(origin) !== 'string' || typeOf(target) !== 'string') {
    throw new Error(`想要的到string类型的参数但是却得到：${typeOf(origin)}与${typeOf(target)}类型的参数`);
  }
  const { PI, asin, sqrt, pow, sin, cos, round } = Math;
  // 获取经纬度
  const [lon1, lat1] = origin.split(',');
  const [lon2, lat2] = target.split(',');
  var EARTH_RADIUS = 6378137.0; // 地球半径

  // 获取弧度
  function getRad(d: string) {
    return (((d as unknown) as number) * PI) / 180.0;
  }

  const radLat1 = getRad(lat1);
  const radLat2 = getRad(lat2);
  const a = radLat1 - radLat2;
  const b = getRad(lon1) - getRad(lon2);

  let s = 2 * asin(sqrt(pow(sin(a / 2), 2) + cos(radLat1) * cos(radLat2) * pow(sin(b / 2), 2)));
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
export function deepClone<T = {} | any[]>(origin: T): T {
  let clone = (typeOf(origin) === 'array' ? [] : {}) as T;
  if (typeOf(origin) === 'object' || typeOf(origin) === 'array') {
    for (const key in origin) {
      if (typeOf(origin[key]) === 'object' || typeOf(origin[key]) === 'array') {
        clone[key] = deepClone(origin[key]);
      } else {
        clone[key] = origin[key];
      }
    }
  }
  return clone;
}

/**
 * @description 防抖
 * @param {Function} fn 延迟执行的函数
 * @param {number} delay 延迟执行毫秒数
 * @param {boolean} [immediate] 是否第一次执行
 * @return {() => void}
 */
export function debounce(fn: Function, delay: number, immediate?: boolean): () => void {
  let timeout: NodeJS.Timeout | null = null;

  return function () {
    // @ts-ignore
    const ctx = this;
    const args: IArguments = arguments;
    // 如果timeout存在那么取消延时器
    if (timeout) clearTimeout(timeout);
    // 判断是否首次需要执行
    if (immediate) {
      // 判断延时器是否有值
      const now = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
      if (now) fn.apply(ctx, args);
    } else {
      timeout = setTimeout(function () {
        fn.apply(ctx, args);
      }, delay);
    }
  };
}

/**
 * @description 节流
 * @param {Function} fn 节流执行的函数
 * @param {number} delay 节流毫秒数
 * @returns {() => void}
 */
export function throttle(fn: Function, delay: number): () => void {
  let timeout: NodeJS.Timeout | null = null,
    startTime: number = Date.now(); // 创建节流函数的时间

  return function () {
    let curTime: number = Date.now(), // 返回的这个函数被调用的时间
      remaining: number = delay - (curTime - startTime), // 设定的delay与[上一次被调用的时间与现在的时间间隔]的差值
      // @ts-ignore
      ctx = this, // 上下文对象
      args: IArguments = arguments; // 返回的这个函数执行时传入的参数

    // 首先清掉定时器
    timeout && clearTimeout(timeout);
    // // 假如距离上一次执行此函数的时间已经超过了设定的delay，则执行
    if (remaining <= 0) {
      fn.apply(ctx, args);
      startTime = Date.now(); // 重置最后执行时间为现在
      // 否则，等到间隔时间达到delay时，执行函数
    } else {
      timeout = setTimeout(() => {
        fn.apply(ctx, args);
      }, remaining);
    }
  };
}
