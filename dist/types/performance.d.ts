/**
 * @description 防抖
 * @param {Function} fn - 延迟执行的函数
 * @param {number} delay - 延迟执行毫秒数
 * @param {boolean} [immediate] - 是否第一次执行
 * @return {() => void}
 */
export declare function debounce(fn: Function, delay: number, immediate?: boolean): () => void;
/**
 * @description 节流
 * @param {Function} fn - 节流执行的函数
 * @param {number} delay - 节流毫秒数
 * @returns {() => void}
 */
export declare function throttle(fn: Function, delay: number): () => void;
