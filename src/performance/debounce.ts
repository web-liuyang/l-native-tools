/**
 * 防抖
 * @param {Function} fn - 延迟执行的函数
 * @param {number} delay - 延迟执行毫秒数
 * @param {boolean} [immediate] - 是否第一次执行
 * @return
 */
function debounce(fn: Function, delay: number, immediate?: boolean): () => void {
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

export default debounce;
