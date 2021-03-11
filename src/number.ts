/**
 * @description 金额运算
 * @param {'+' | '-' | '*' | '/'} method - 计算方法
 * @param {number[]} args 需要参与计算的数值或字符串
 * @return {number} 计算后的值
 */
export function currency(method: '+' | '-' | '*' | '/', numberArr: number[]): number {
  const arr = numberArr.map((item) => Math.round((item *= 100)));
  let num = 0;
  switch (method) {
    case '+':
      num = arr.reduce((total, item) => total + item) / 100;
      break;
    case '-':
      num = arr.reduce((total, item) => total - item) / 100;
      break;
    case '*':
      num = arr.reduce((total, item) => (total * item) / 100, 1);
      break;
    case '/':
      num = arr.reduce((total, item) => (total * 100) / item) / 100;
      break;
  }
  return num;
}

/**
 * @description 获取两个数值之间的整数，包含最大值与最小值
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @return {number}
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
