declare type Type = 'string' | 'number' | 'boolean' | 'object' | 'array' | 'symbol' | 'function' | 'null' | 'undefined' | 'regexp' | 'date' | 'window' | 'set' | 'map';
/**
 * @description 浅判断类型
 * @param {*} origin - 判断的变量
 * @return {Type}
 */
export declare function typeOf(origin?: any): Type & string;
/**
 * @description 判断某个值是否为空
 * @param {*} origin - 判断的值
 * @return {boolean} 空为true 非空为false
 */
export declare function isEmpty(origin?: any): boolean;
/**
 * @description 直线距离计算
 * @param {string} origin - 当前经纬度。 经度在前，纬度在后，经度和纬度用","分割，经纬度小数点后不得超过6位
 * @param {string} target - 目标经纬度。 经度在前，纬度在后，经度和纬度用","分割，经纬度小数点后不得超过6位
 * @returns {number} 返回两端之间的距离,单位米
 */
export declare function straightDistance(origin: string, target: string): number;
/**
 * @description 深拷贝
 * @template T
 * @param {T} origin - 拷贝的源对象
 * @return {T} 拷贝后的对象
 */
export declare function deepClone<T = {} | any[]>(origin: T): T;
export {};
