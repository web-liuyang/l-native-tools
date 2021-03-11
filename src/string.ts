/**
 * @description 将第一个字母转换成大写
 * @param {string} str - 需要转换的字符串
 * @return {string} 转换后的字符串
 */
export function firstUpperCase(str: string): string {
  return str.replace(str[0], str[0].toUpperCase());
}


