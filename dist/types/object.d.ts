/**
 * @description 目标对象的自身属性键组成的数组,不包括原型对象
 * @param {object | any[]} origin - 源对象
 * @return {PropertyKey[]} 源对象可枚举的数组
 */
export declare function getOwnKeys(origin: object | any[]): PropertyKey[];
