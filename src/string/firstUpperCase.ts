/**
 * 将第一个字母转换成大写
 * @param {string} str - 需要转换的字符串
 * @return 转换后的字符串
 */
function firstUpperCase<T extends string>(str: T): Capitalize<T> {
  return str.replace(str[0], str[0].toUpperCase()) as Capitalize<T>;
}

export default firstUpperCase;
