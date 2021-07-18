import { typeOf } from "../common";

/**
 * 深拷贝
 * @template T
 * @param {T} origin - 拷贝的源对象
 * @return 拷贝后的对象
 */
function deepClone<T = {} | any[]>(origin: T): T {
  let clone = (typeOf(origin) === "array" ? [] : {}) as T;
  if (typeOf(origin) === "object" || typeOf(origin) === "array") {
    for (const key in origin) {
      if (typeOf(origin[key]) === "object" || typeOf(origin[key]) === "array") {
        clone[key] = deepClone(origin[key]);
      } else {
        clone[key] = origin[key];
      }
    }
  }
  return clone;
}

export default deepClone;
