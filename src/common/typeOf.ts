type Type =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "symbol"
  | "function"
  | "null"
  | "undefined"
  | "regexp"
  | "date"
  | "window"
  | "set"
  | "map";

/**
 * 浅判断类型
 * @param {*} origin - 判断的变量
 * @return
 */
function typeOf(origin?: any): Type & string {
  return Object.prototype.toString.call(origin).slice(8, -1).toLowerCase() as Type & string;
}

export default typeOf;
