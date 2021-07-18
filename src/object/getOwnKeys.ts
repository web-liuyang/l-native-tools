import { typeOf } from "../common";

/**
 * 目标对象的自身属性键组成的数组,不包括原型对象
 * @param {object | any[]} origin - 源对象
 * @return 源对象可枚举的数组
 */
function getOwnKeys(origin: object | any[]): PropertyKey[] {
  if (typeOf(origin) !== "object" || typeOf(origin) !== "array") {
    throw new TypeError(`想要获取object与array类型的参数却获得：${typeOf(origin)}类型的参数`);
  }
  return Reflect.ownKeys(origin);
}

export default getOwnKeys;
