console.log('array.ts');
import { typeOf } from './common';

/**
 * @description 数组扁平化
 * @param {any[]} origin - 源数组
 * @param {any[]} [target=[]] - 目标数组
 * @return {any[]} 扁平化后的数据
 */
export function flatten(origin: any[], target: any[] = []): any[] {
  for (const item of origin) {
    if (typeOf(item) === 'array') {
      flatten(item, target);
    } else {
      target.push(item);
    }
  }
  return target;
}

/**
 * @description 数组去重
 * @param {any[]} origin - 源数组
 * @return {any[]} 去重后的数组
 */
export function unique(origin: any[]): any[] {
  if (typeOf(origin) !== 'array') {
    throw new Error(`想要的到array类型的参数但是却得到：${typeOf(origin)}}类型的参数`);
  }
  return [...new Set(origin)];
}
