import { typeOf } from './common';

console.log('object.ts');

/**
 * @description 返回其枚举自身属性的对象组成的数组
 * @param {object} obj - 源对象
 * @return {string[]} 源对象可枚举的数组
 */
export function getKeys(obj: object): string[] {
  if (typeOf(obj) !== 'object') {
    throw new Error(`想要获取object类型的参数却获得：${typeOf(obj)}类型的参数`);
  }
  return Object.keys(obj);
}