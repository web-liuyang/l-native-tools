type Method = "+" | "-" | "*" | "/";

/**
 * 金额运算
 * @param {Method} method - 计算方法
 * @param {number[]} args 需要参与计算的数值或字符串
 * @return 计算后的值
 */
function currency(method: Method, numberArr: number[]): number {
  const arr = numberArr.map(item => Math.round((item *= 100)));
  let num = 0;
  switch (method) {
    case "+":
      num = arr.reduce((total, item) => total + item) / 100;
      break;
    case "-":
      num = arr.reduce((total, item) => total - item) / 100;
      break;
    case "*":
      num = arr.reduce((total, item) => (total * item) / 100, 1);
      break;
    case "/":
      num = arr.reduce((total, item) => (total * 100) / item) / 100;
      break;
  }
  return num;
}

export default currency;
