/**
 * boolean 转换到 number
 * @param {boolean} bool - 需要转换的布尔值
 * @returns
 */
function booleanToNumber(bool: boolean): bool {
  return bool ? 1 : 0;
}

export default booleanToNumber;
