/**
 * @description 防抖
 * @param {Function} fn - 延迟执行的函数
 * @param {number} delay - 延迟执行毫秒数
 * @param {boolean} [immediate] - 是否第一次执行
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
 * @param {Function} fn - 节流执行的函数
 * @param {number} delay - 节流毫秒数
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
