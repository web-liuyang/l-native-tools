import { typeOf } from "../common";

/**
 * 随机颜色获取
 * @param { number } [transparency=1] - 透明度
 * @return rgba颜色
 */
function randomColor(transparency: number = 1): string {
  const { floor, random } = Math;

  const r = floor(random() * 255);
  const g = floor(random() * 255);
  const b = floor(random() * 255);

  const color = `rgba(${r},${g},${b},${transparency})`;

  return color;
}

export default randomColor;
