/**
 * @description 金额运算
 * @param {'+' | '-' | '*' | '/'} method - 计算方法
 * @param {string | number} args 需要参与计算的数值或字符串
 * @return {number} 计算后的值
 */
export declare function currency(method: '+' | '-' | '*' | '/', numberArr: number[]): number;
/**
 * @description 获取两个数值之间的数
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @param {boolean} [isInt=false] - 是否是整数 -> 包含最小值与最大值
 * @return {number}
 */
export declare function random(min: number, max: number, isInt?: boolean): number;
