import { typeOf } from "../common";

/**
 * 数组去重
 * @param {any[]} origin - 源数组
 * @return 去重后的数组
 */
function unique(origin: any[]): any[] {
  if (typeOf(origin) !== "array") {
    throw new TypeError(`想要得到array类型的参数但是却得到：${typeOf(origin)}}类型的参数`);
  }
  return [...new Set(origin)];
}

export default unique;
