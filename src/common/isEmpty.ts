import { typeOf } from "../common";

/**
 * 判断某个值是否为空
 * @param {*} origin - 判断的值
 * @return 空为true 非空为false
 */
function isEmpty(origin?: any): boolean {
  switch (typeOf(origin)) {
    case "string":
      return !origin;
    case "number":
      return !origin;
    case "boolean":
      return !origin;
    case "object":
      for (const key in origin) return !key;
      return true;
    case "array":
      return origin.length === 0;
    case "null":
      return true;
    case "undefined":
      return true;
    default:
      return false;
  }
}

export default isEmpty;
