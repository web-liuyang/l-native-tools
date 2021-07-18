import { typeOf } from "../common";

/**
 * 数组扁平化
 * @param {any[]} origin - 源数组
 * @param {any[]} [target=[]] - 目标数组
 * @return 扁平化后的数据
 */
 function flatten(origin: any[], target: any[] = []): any[] {
  for (const item of origin) {
    if (typeOf(item) === 'array') {
      flatten(item, target);
    } else {
      target.push(item);
    }
  }
  return target;
}

export default flatten;
