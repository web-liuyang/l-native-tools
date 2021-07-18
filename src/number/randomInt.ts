/**
 * 获取两个数值之间的整数，包含最大值与最小值
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @return 返回两个数值之间的整数，包含最大值与最小值
 */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default randomInt;
